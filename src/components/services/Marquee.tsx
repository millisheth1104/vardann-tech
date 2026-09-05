"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

type MarqueeProps = {
  items: string[];
  className?: string;
  /** Scroll speed in pixels per second. Constant speed rather than a fixed
   *  cycle duration, so a page with three short codes and a page with
   *  twenty long ones scroll at the same visual pace. */
  speed?: number;
};

// Every item — including the LAST one in the group — gets the same
// trailing [half-gap, dot, half-gap], so the bullet sits centered between
// words everywhere, including at the seam between groups.
function ItemGroup({ items, gapPx, ariaHidden }: { items: string[]; gapPx: number; ariaHidden?: boolean }) {
  const half = gapPx / 2;
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="text-eyebrow text-[0.68rem] text-steel">{item}</span>
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-vblue/40"
            style={{ marginLeft: half, marginRight: half }}
          />
        </span>
      ))}
    </div>
  );
}

// Continuous right-to-left marquee, driven by requestAnimationFrame rather
// than a CSS @keyframes animation. Identical item groups sit side by side;
// every frame x is set to -(elapsed × speed) wrapped with a modulo against
// one group's measured width, so it always lands in [-groupWidth, 0] —
// mathematically guaranteed continuous, with no dependency on @keyframes
// naming, stylesheet load order, or CSS animation-restart behaviour.
export default function Marquee({ items, className = "", speed = 45 }: MarqueeProps) {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [repeat, setRepeat] = useState(2);
  const gapPx = 32; // matches the eyebrow tag spacing used elsewhere (gap-8)

  // How many copies to render. Translating by exactly one group width only
  // loops seamlessly while the track is at least container + one group
  // wide; with a hardcoded two copies, a short item list (e.g. just
  // "ASNT LEVEL I · II · III") left a large blank gap scrolling through on
  // wide screens. Measure both and repeat enough times to always cover it.
  useEffect(() => {
    if (reduceMotion) return;
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    const measure = () => {
      const group = track.children[0] as HTMLElement | undefined;
      if (!group) return;
      const groupWidth = group.getBoundingClientRect().width;
      const containerWidth = container.getBoundingClientRect().width;
      if (groupWidth <= 0 || containerWidth <= 0) return;
      const needed = Math.max(2, Math.ceil(containerWidth / groupWidth) + 1);
      setRepeat((prev) => (prev === needed ? prev : needed));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, items.join("")]);

  useEffect(() => {
    if (reduceMotion) return;
    const track = trackRef.current;
    if (!track) return;

    const firstGroup = track.children[0] as HTMLElement | undefined;
    if (!firstGroup) return;
    const groupWidth = firstGroup.getBoundingClientRect().width;
    if (groupWidth <= 0) return;

    const pxPerMs = speed / 1000;
    let rafId = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const x = -((elapsed * pxPerMs) % groupWidth);
      track.style.transform = `translateX(${x}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
    // items.join(...) is a stable primitive — depending on the array itself
    // would tear down and restart the rAF loop (resetting startTime) on
    // every re-render of whichever parent passes a freshly-computed array
    // literal as this prop, which looked permanently frozen even though the
    // loop was technically running each time. `repeat` is included so the
    // loop re-measures once the copy count settles.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion, speed, items.join(""), repeat]);

  if (reduceMotion) {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-x-8 gap-y-3 ${className}`}>
        {items.map((item) => (
          <span key={item} className="text-eyebrow text-[0.68rem] text-steel">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`} aria-hidden="true">
      <div ref={trackRef} className="flex w-max items-center" style={{ willChange: "transform" }}>
        {Array.from({ length: repeat }, (_, i) => (
          <ItemGroup key={i} items={items} gapPx={gapPx} ariaHidden={i > 0} />
        ))}
      </div>
    </div>
  );
}
