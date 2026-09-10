import type { Metadata } from "next";
import { serviceMeta, trainingGroups } from "@/lib/content";
import ServiceHero from "@/components/services/ServiceHero";
import MethodSection from "@/components/services/MethodSection";
import ServiceNav from "@/components/services/ServiceNav";
import CinematicCta from "@/components/services/CinematicCTA";

const meta = serviceMeta.find((s) => s.id === "training-certification")!;

export const metadata: Metadata = {
  title: "Training & Certification | Vardann Tech and Engg LLP",
  description:
    "NDT Level I, II and III training and in-house certification aligned with applicable ASNT recommended practices — theory with hands-on practical sessions across PAUT, TOFD, ECT, RFT, IRIS, UT, MPT and LPT methods.",
};

export default function TrainingCertificationPage() {
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
        badge="ASNT Level I, II & III"
      />

      {/* A touch warmer than the inspection pages — this discipline is
          about people rather than equipment. */}
      <section className="section-divider bg-white/70 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-lg leading-relaxed text-navy sm:text-xl">{meta.intro}</p>
        </div>
      </section>

      <div className="bg-continuous-light">
        {trainingGroups.map((group) => (
          <MethodSection key={group.title} group={group} />
        ))}
      </div>

      <ServiceNav currentId={meta.id} />

      <CinematicCta
        eyebrow="Training & Certification"
        headline="Build the expertise your team needs."
        supporting="Talk to our engineering team about your inspection, testing or manufacturing requirement."
        visualLabel="ASNT-aligned NDT training session"
        icon={meta.icon}
        image={meta.ctaImage}
      />
    </>
  );
}
