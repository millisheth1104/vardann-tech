import type { Metadata } from "next";
import { serviceMeta, metallographyGroups } from "@/lib/content";
import ServiceHero from "@/components/services/ServiceHero";
import MethodSection from "@/components/services/MethodSection";
import ServiceNav from "@/components/services/ServiceNav";
import CinematicCta from "@/components/services/CinematicCTA";

const meta = serviceMeta.find((s) => s.id === "metallography-material-analysis")!;

export const metadata: Metadata = {
  title: "Metallography and Material Analysis | Vardann Tech and Engg LLP",
  description:
    "Positive material identification, optical emission spectroscopy, in-situ metallography and microstructure analysis — on-site chemical and metallurgical evaluation for welds, castings and components.",
};

export default function MetallographyMaterialAnalysisPage() {
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
        badge="Alloy Verification & Metallurgical Evaluation"
      />

      <section className="section-divider bg-white/70 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-lg leading-relaxed text-navy sm:text-xl">{meta.intro}</p>
        </div>
      </section>

      <div className="bg-continuous-light">
        {metallographyGroups.map((group) => (
          <MethodSection key={group.title} group={group} />
        ))}
      </div>

      <ServiceNav currentId={meta.id} />

      <CinematicCta
        eyebrow="Metallography and Material Analysis"
        headline="Know exactly what you're working with."
        supporting="Talk to our engineering team about your inspection, testing or manufacturing requirement."
        visualLabel="On-site material chemistry verification"
        icon={meta.icon}
        image={meta.ctaImage}
      />
    </>
  );
}
