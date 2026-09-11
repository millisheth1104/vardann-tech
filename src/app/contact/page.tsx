import type { Metadata } from "next";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import { company, contactDetails } from "@/lib/content";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Vardann Tech and Engg LLP",
  description:
    "Contact Vardann Tech and Engg LLP in Mulund West, Mumbai — enquiries for NDT inspection, metallography, third-party inspection, training and precision manufacturing.",
};

// lucide-react dropped its brand icons, so these two are inlined. Kept
// minimal and monochrome to sit with the rest of the icon set.
function InstagramMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2" y="5.5" width="20" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.2-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

const SOCIAL_ICONS = { Instagram: InstagramMark, YouTube: YouTubeMark } as const;

// Every number, address, URL and handle is a link, per the client's
// correction list: tel: for phones (E.164 so they dial from mobile),
// mailto: for addresses, Maps for the office, and the real profile URLs
// for the social handles.
export default function ContactPage() {
  return (
    <div className="bg-continuous-light">
      <PageHeader
        eyebrow="Contact Us"
        title={
          <>
            Let&rsquo;s Engineer <span className="text-vblue italic">What&rsquo;s Next.</span>
          </>
        }
        subtitle="Talk to our team about your inspection, testing or manufacturing requirements."
      />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14 lg:px-10">
          <div>
            <p className="text-eyebrow text-[0.68rem] text-steel">Get in Touch</p>

            <div className="mt-5 flex flex-col gap-6">
              <div className="flex gap-3.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-vblue" aria-hidden="true" />
                <div>
                  <p className="text-eyebrow text-[0.6rem] text-steel">Office Address</p>
                  <a
                    href={contactDetails.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-base leading-relaxed text-navy transition-colors hover:text-vblue"
                  >
                    {contactDetails.address.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-vblue" aria-hidden="true" />
                <div>
                  <p className="text-eyebrow text-[0.6rem] text-steel">Email</p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {contactDetails.emails.map((e) => (
                      <a
                        key={e.href}
                        href={e.href}
                        className="text-base text-navy transition-colors hover:text-vblue"
                      >
                        {e.display}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-vblue" aria-hidden="true" />
                <div>
                  <p className="text-eyebrow text-[0.6rem] text-steel">Phone</p>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {contactDetails.phones.map((p) => (
                      <p key={p.href} className="text-base text-navy">
                        <a href={p.href} className="transition-colors hover:text-vblue">
                          {p.display}
                        </a>
                        <span className="ml-2 text-[0.72rem] text-steel">{p.label}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3.5">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-vblue" aria-hidden="true" />
                <div>
                  <p className="text-eyebrow text-[0.6rem] text-steel">Website</p>
                  <a
                    href={company.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-base text-navy transition-colors hover:text-vblue"
                  >
                    {company.website}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-eyebrow text-[0.6rem] text-steel">Social Media</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {contactDetails.social.map((s) => {
                    const Icon = SOCIAL_ICONS[s.label as keyof typeof SOCIAL_ICONS];
                    return (
                      <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-vblue/20 bg-white px-3.5 py-1.5 text-sm text-navy transition-colors hover:border-vblue hover:text-vblue"
                      >
                        <Icon className="h-4 w-4 text-vblue" />
                        <span className="sr-only">{s.label}: </span>
                        {s.display}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-vblue/10 pt-5">
                <p className="text-eyebrow text-[0.6rem] text-steel">Regions Served</p>
                <p className="mt-1 text-base text-body">
                  India, Middle East, Africa, Asia-Pacific
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-eyebrow text-[0.68rem] text-steel">Send an Enquiry</p>
            <div className="mt-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
