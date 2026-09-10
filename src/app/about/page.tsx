import type { Metadata } from "next";
import { company } from "@/lib/content";
import AboutHero from "@/components/about/AboutHero";
import StatsGrid from "@/components/about/StatsGrid";
import OwnersSection from "@/components/about/OwnersSection";
import SerpentineTimeline from "@/components/sections/SerpentineTimeline";
import WhyVardann from "@/components/sections/WhyVardann";
import CtaSection from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "About Us | Vardann Tech and Engg LLP",
};

const stats = [
  { value: `${company.established}`, label: "Founded" },
  { value: "4+", label: "Regions Served" },
  { value: "6", label: "Core Disciplines" },
  { value: "ASME", label: "Compliant Products" },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-continuous-light">
        <AboutHero />

        {/* Overview + stats as one composed band on a single container
            width. Previously the intro sat in a narrow max-w-3xl column
            directly under the hero and the stat cards below it used
            max-w-5xl, so the two halves of the same section didn't line up
            with each other or with the hero. The paragraphs now run as two
            editorial columns on desktop, with the stats sharing the same
            width beneath a divider. */}
        <section className="section-divider bg-white/70 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            {/* Labelled and given a lead/supporting hierarchy rather than
                two equal columns of unadorned body copy: an eyebrow to
                anchor the band, the first paragraph as a larger lead with
                an accent rule, the second as supporting text. */}
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div>
                <p className="text-eyebrow text-[0.72rem] text-vblue">Who We Are</p>
                <p className="mt-4 border-l-2 border-gold pl-5 font-display text-xl leading-snug text-navy sm:text-2xl">
                  {company.about}
                </p>
              </div>

              <div className="lg:pt-11">
                <p className="text-base leading-relaxed text-body">
                  {company.history}
                </p>
                <p className="text-eyebrow mt-5 text-[0.62rem] text-steel">
                  Formerly {company.formerlyKnownAs}
                </p>
              </div>
            </div>

            <StatsGrid stats={stats} />
          </div>
        </section>

        {/* Story next: how the company got from 2019 to today, then the
            people behind it, then the values/industries band. */}
        <SerpentineTimeline />

        <OwnersSection />

        <WhyVardann />
      </div>

      {/* One CTA band instead of two stacked dark sections (a separate
          quote block followed immediately by the standard CtaSection read
          as redundant) — the quote becomes this section's heading, with
          the usual Contact Us CTA kept underneath. */}
      <CtaSection
        heading={<span className="italic">&ldquo;{company.quote}&rdquo;</span>}
        headingClassName="text-3xl sm:text-[2.15rem] leading-snug"
        subtitle={<span className="text-eyebrow text-gold">{company.name}</span>}
      />
    </>
  );
}
