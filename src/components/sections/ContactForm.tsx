"use client";

import { useMemo, useState } from "react";
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { contactDetails } from "@/lib/content";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof FormState | "consent", string>>;

const EMPTY: FormState = { name: "", email: "", company: "", message: "" };

const CONSENT_TEXT =
  "By submitting this form, you agree that VARDANN TECH AND ENGG LLP may contact you regarding your enquiry.";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  // Used server-side to reject submissions completed impossibly fast.
  const renderedAt = useMemo(() => Date.now(), []);

  const update =
    (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const validate = () => {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = "Full name is required.";
    if (!form.email.trim()) next.email = "Email address is required.";
    else if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim()) next.message = "Please tell us about your requirement.";
    if (!consent) next.consent = "Please accept the consent statement to continue.";
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setShowFallback(false);

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, consent, website: honeypot, renderedAt }),
      });

      const data = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
        fallback?: boolean;
      };

      if (response.ok && data.ok) {
        setStatus("sent");
        setForm(EMPTY);
        setConsent(false);
        return;
      }

      setStatus("idle");
      if (data.errors) {
        setErrors(data.errors);
        return;
      }
      setFormError(
        data.error ?? "Something went wrong sending your message. Please try again.",
      );
      setShowFallback(Boolean(data.fallback));
    } catch {
      setStatus("idle");
      setFormError(
        "We could not reach the server. Please check your connection or email us directly.",
      );
      setShowFallback(true);
    }
  };

  if (status === "sent") {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-2xl border border-vblue/25 bg-lightblue px-8 py-14 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-vblue" />
        <p className="font-heading text-xl font-bold text-navy">Message sent.</p>
        <p className="max-w-sm text-base text-body">
          Thanks for reaching out — our team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-eyebrow mt-2 text-[0.68rem] text-vblue hover:text-vblue-hover"
        >
          Send another message
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-lg border border-vblue/15 bg-white px-4 py-3 text-sm text-navy placeholder:text-steel outline-none transition-colors focus:border-vblue";
  const errorFieldClass = "border-red-500 focus:border-red-500";
  const labelClass = "mb-1.5 block text-eyebrow text-[0.62rem] text-steel";

  const mailtoHref = `${contactDetails.emails[0].href}?subject=${encodeURIComponent(
    "Website enquiry",
  )}&body=${encodeURIComponent(
    [
      `Name: ${form.name}`,
      form.company ? `Company: ${form.company}` : null,
      `Email: ${form.email}`,
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n"),
  )}`;

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={`${fieldClass} ${errors.name ? errorFieldClass : ""}`}
            placeholder="Your name"
            value={form.name}
            onChange={update("name")}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-600">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email address <span className="text-red-600">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={`${fieldClass} ${errors.email ? errorFieldClass : ""}`}
            placeholder="you@company.com"
            value={form.email}
            onChange={update("email")}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          Company <span className="text-steel/70">(optional)</span>
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          className={fieldClass}
          placeholder="Company name"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Your enquiry <span className="text-red-600">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${fieldClass} min-h-[140px] resize-none ${
            errors.message ? errorFieldClass : ""
          }`}
          placeholder="Tell us about your inspection, testing or manufacturing requirement"
          value={form.message}
          onChange={update("message")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, tempting to bots. Positioned off-screen
          rather than display:none, which some bots specifically skip, and kept
          out of the tab order and the accessibility tree. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="contact-consent" className="flex items-start gap-3">
          <input
            id="contact-consent"
            name="consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "contact-consent-error" : undefined}
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              setErrors((prev) => ({ ...prev, consent: undefined }));
            }}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-vblue/30 accent-vblue"
          />
          <span className="text-[0.8rem] leading-relaxed text-body">{CONSENT_TEXT}</span>
        </label>
        {errors.consent && (
          <p id="contact-consent-error" className="mt-1.5 text-xs text-red-600">
            {errors.consent}
          </p>
        )}
      </div>

      {formError && (
        <div
          role="alert"
          className="flex items-start gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p>{formError}</p>
            {showFallback && (
              <a href={mailtoHref} className="mt-1 inline-block font-semibold underline">
                Email {contactDetails.emails[0].display}
              </a>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-vblue px-8 py-3.5 text-eyebrow text-[0.72rem] text-white transition-colors hover:bg-vblue-hover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? (
          <>
            Sending
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
