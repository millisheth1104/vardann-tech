"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const FADE_MS = 600;
const MIN_VISIBLE_MS = 900;
// Hard ceiling: this overlay covers the entire page, so it must never be
// able to outlive a slow/hanging resource. If `load` hasn't fired by now,
// dismiss anyway.
const MAX_VISIBLE_MS = 4000;

// Deliberately CSS transitions + a timeout-driven unmount rather than
// Framer Motion's AnimatePresence: an exit animation's completion callback
// is rAF-scheduled, and rAF is throttled or paused in background tabs — a
// full-screen overlay that only unmounts once its animation finishes can
// strand a user on a blank screen. Nothing here depends on a frame firing.
export default function Preloader() {
  const [mounted, setMounted] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    let unmountTimer: ReturnType<typeof setTimeout>;

    const dismiss = () => {
      setFading(true);
      unmountTimer = setTimeout(() => setMounted(false), FADE_MS);
    };

    const minTime = new Promise<void>((resolve) => setTimeout(resolve, MIN_VISIBLE_MS));
    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise<void>((resolve) =>
            window.addEventListener("load", () => resolve(), { once: true }),
          );
    const safetyNet = new Promise<void>((resolve) => setTimeout(resolve, MAX_VISIBLE_MS));

    Promise.race([Promise.all([minTime, pageLoaded]).then(() => undefined), safetyNet]).then(() => {
      fadeTimer = setTimeout(dismiss, 0);
    });

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[200] flex flex-col items-center justify-center bg-navy transition-opacity duration-[600ms] ease-out ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className={`transition-all duration-700 ease-out ${fading ? "opacity-0" : "opacity-100"}`}>
        <Logo className="h-10 sm:h-12" />
      </div>
      <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
        <div className="preloader-bar h-full w-full bg-gold/80" />
      </div>
    </div>
  );
}
