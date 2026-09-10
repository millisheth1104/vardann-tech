"use client";

import { motion, type Variants } from "framer-motion";

type PageHeaderProps = {
  eyebrow: string;
  /** ReactNode so callers can two-tone the headline with an accent span,
   *  matching the convention used across the rest of the site
   *  ("Trusted Across <em>Continents.</em>"). A plain string rendered the
   *  whole headline in one flat colour. */
  title: React.ReactNode;
  subtitle?: string;
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-16">
      {/* Blueprint grid, same construction as AboutHero and the homepage
          hero. Mask centred below the top edge on purpose: an unmasked
          `inset-0` grid would terminate hard against the transparent
          navbar strip and reintroduce the seam line there. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90 [background-image:linear-gradient(rgba(0,87,164,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,87,164,0.12)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(ellipse_70%_62%_at_50%_58%,black,transparent)]"
      />
      <motion.div
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-10"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Pill eyebrow, matching AboutHero and the service page heroes. */}
        <motion.p variants={fadeUp}>
          <span className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-vblue/25 bg-white px-3.5 py-1.5 text-[0.62rem] text-vblue">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            {eyebrow}
          </span>
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-5 max-w-2xl font-display text-[2.9rem] leading-[1.05] tracking-tight text-navy sm:text-[3.6rem]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-body sm:text-lg">
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
