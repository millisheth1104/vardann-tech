import { NextResponse } from "next/server";

// Where enquiries land. Both are the addresses published on the contact page.
const RECIPIENTS = ["info@vardanntech.com", "admin@vardanntech.com"];

// Resend is called over plain HTTP so this route needs no dependency. Set
// RESEND_API_KEY (and optionally CONTACT_FROM_EMAIL, which must be an address
// on a domain verified with the provider) to turn delivery on. Without the
// key the route returns 503 and the form falls back to a mailto: link, so the
// enquiry is never silently swallowed.
const RESEND_ENDPOINT = "https://api.resend.com/emails";

type Payload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
  consent?: unknown;
  /** Honeypot — a real person never sees or fills this. */
  website?: unknown;
  /** Client timestamp of when the form was rendered. */
  renderedAt?: unknown;
};

const MIN_FILL_MS = 2500;
const MAX_LEN = { name: 120, email: 200, company: 160, message: 5000 };

// Crude per-IP throttle. Serverless instances are short-lived so this is a
// speed bump, not a guarantee — pair it with platform-level rate limiting if
// abuse becomes a problem.
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 5 };
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT.windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT.max;
}

function str(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many enquiries from this connection. Please try again later." },
      { status: 429 },
    );
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Spam checks. Both failures return 200 so a bot learns nothing from the
  // response, but nothing is sent.
  const renderedAt = Number(body.renderedAt);
  const tooFast =
    Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_FILL_MS;
  if (str(body.website) || tooFast) {
    return NextResponse.json({ ok: true });
  }

  const name = str(body.name);
  const email = str(body.email);
  const companyName = str(body.company);
  const message = str(body.message);

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Full name is required.";
  else if (name.length > MAX_LEN.name) errors.name = "Full name is too long.";

  if (!email) errors.email = "Email address is required.";
  else if (!isValidEmail(email)) errors.email = "Enter a valid email address.";
  else if (email.length > MAX_LEN.email) errors.email = "Email address is too long.";

  if (!message) errors.message = "Please tell us about your requirement.";
  else if (message.length > MAX_LEN.message) errors.message = "Message is too long.";

  if (companyName.length > MAX_LEN.company) errors.company = "Company name is too long.";
  if (body.consent !== true) errors.consent = "Please accept the consent statement.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "The enquiry service is not configured yet. Please email us directly and we will reply straight away.",
        fallback: true,
      },
      { status: 503 },
    );
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Company", companyName || "—"],
  ];

  const html = [
    "<h2>Website enquiry</h2>",
    "<table cellpadding='6' style='border-collapse:collapse'>",
    ...rows.map(
      ([label, value]) =>
        `<tr><td style='font-weight:bold'>${label}</td><td>${escapeHtml(value)}</td></tr>`,
    ),
    "</table>",
    "<h3>Message</h3>",
    `<p style='white-space:pre-wrap'>${escapeHtml(message)}</p>`,
  ].join("");

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ??
          "Vardann Tech Website <onboarding@resend.dev>",
        to: RECIPIENTS,
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("Contact form delivery failed", response.status, detail);
      return NextResponse.json(
        {
          error:
            "We could not send your message just now. Please email us directly and we will reply straight away.",
          fallback: true,
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form delivery threw", error);
    return NextResponse.json(
      {
        error:
          "We could not send your message just now. Please email us directly and we will reply straight away.",
        fallback: true,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
