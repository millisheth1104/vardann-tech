"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { allPresenceCountries } from "@/lib/content";
import FlatWorldMap from "@/components/sections/FlatWorldMap";

export default function GlobalPresence() {
  return (
    // min-h-screen + a vh-capped globe keeps the whole section — heading,
    // globe and region pills — inside a single viewport height.
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-8 sm:px-6">
      <div className="relative mx-auto w-full max-w-6xl">
        <SectionHeading
          eyebrow="Global Presence"
          title={
            <>
              Trusted Across <span className="text-vblue italic">Continents.</span>
            </>
          }
          subtitle="Our products and services are trusted by clients across India, the Middle East, Africa and the Asia-Pacific region."
        />

        {/* Spans the full container. The map's own 2.42:1 panoramic crop
            keeps it wide and shallow, so filling the width doesn't make it
            tall enough to push the region pills off screen — an earlier
            vh-based width cap left it as a small island in a very wide
            section. */}
        <div className="mt-4 w-full sm:mt-6">
          <FlatWorldMap />
        </div>

        <div className="mx-auto mt-5 flex max-w-3xl flex-col items-center gap-2.5 text-center">
          <p className="text-eyebrow text-[0.65rem] text-steel">
            Global Delivery Network &amp; Connected Markets
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allPresenceCountries.map((c) => (
              <span
                key={c.id}
                className="rounded-full border border-vblue/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-navy shadow-sm"
              >
                {c.short ?? c.name}
                {c.isOrigin && <span className="ml-1.5 text-[0.6rem] text-vblue">HQ</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
