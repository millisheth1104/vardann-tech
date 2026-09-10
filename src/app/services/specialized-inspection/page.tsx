import type { Metadata } from "next";
import { serviceMeta, specializedInspectionGroups } from "@/lib/content";
import ServiceHero from "@/components/services/ServiceHero";
import MethodSection from "@/components/services/MethodSection";
import ServiceNav from "@/components/services/ServiceNav";
import CinematicCta from "@/components/services/CinematicCTA";

const meta = serviceMeta.find((s) => s.id === "specialized-inspection")!;

export const metadata: Metadata = {
  title: "Specialized & Third-Party Inspection | Vardann Tech and Engg LLP",
  description:
    "Independent QA/QC inspection, vendor surveillance and expediting, positive material identification, optical emission spectroscopy, in-situ metallography and post weld heat treatment.",
};

export default function SpecializedInspectionPage() {
  return (
    <>
      <ServiceHero
        number={meta.number}
        title={meta.title}
        subtitle={meta.subtitle}
        headline={meta.headline}
        visualLabel={meta.heroVisualLabel}
        icon={meta.icon}
        image={meta.heroImage}
        codes={meta.eyebrow.split(" · ")}
        badge="Independent Third-Party Oversight"
      />

      <section className="section-divider bg-white/70 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-lg leading-relaxed text-navy sm:text-xl">{meta.intro}</p>
        </div>
      </section>

      <div className="bg-continuous-light">
        {specializedInspectionGroups.map((group) => (
          <MethodSection key={group.title} group={group} />
        ))}
      </div>

      <ServiceNav currentId={meta.id} />

      <CinematicCta
        eyebrow="Specialized & Third-Party Inspection"
        headline="Independent eyes on your supply chain."
        supporting="Talk to our engineering team about your inspection, testing or manufacturing requirement."
        visualLabel="Third-party witness inspection at a vendor works"
        icon={meta.icon}
        image={meta.ctaImage}
      />
    </>
  );
}
