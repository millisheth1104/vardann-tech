"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { owners } from "@/lib/content";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

// Sits after the timeline: the company story, then the people behind it.
// Cards carry an optional headshot and fall back to an initials avatar, so
// real photos can drop in later without touching this layout.
export default function OwnersSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-divider bg-white/70 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="max-w-xl">
          <p className="text-eyebrow text-[0.72rem] text-vblue">Leadership</p>
          <h2 className="mt-2 font-display text-[2.15rem] leading-[1.08] tracking-tight text-navy sm:text-[2.9rem]">
            Know the <span className="text-vblue italic">Owners.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            The engineers behind Vardann Tech — hands-on with every discipline
            the company practises.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {owners.map((owner, idx) => (
            <motion.div
              key={owner.name}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 rounded-2xl border border-vblue/12 bg-white p-6 shadow-sm sm:p-7"
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-lightblue sm:h-20 sm:w-20">
                {owner.image ? (
                  <Image
                    src={owner.image}
                    alt={owner.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center font-display text-lg text-vblue sm:text-xl">
                    {initials(owner.name)}
                  </span>
                )}
              </div>

              <div className="min-w-0">
                <h3 className="font-heading text-lg font-bold text-navy">{owner.name}</h3>
                <p className="text-eyebrow mt-1 text-[0.62rem] text-vblue">{owner.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-body">{owner.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
