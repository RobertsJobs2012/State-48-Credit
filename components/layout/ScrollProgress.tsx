"use client";

import { useEffect, useRef } from "react";

/**
 * Thin gradient progress bar that sits directly beneath the navbar
 * and fills from 0% → 100% as the page is scrolled.
 *
 * Uses native `animation-timeline: scroll()` when supported (Chromium)
 * for zero-JS smooth progress; falls back to a rAF-throttled scroll
 * handler elsewhere. Respects prefers-reduced-motion.
 */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Feature-detect native scroll-driven animations.
    // If supported, the CSS below handles the fill — we skip the JS path.
    if (CSS.supports("animation-timeline: scroll()")) return;

    const el = barRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        el.style.transform = `scaleX(${pct})`;
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="sticky top-16 z-30 h-[4px] w-full overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-sunken)] lg:top-[72px]"
    >
      <div
        ref={barRef}
        className="scroll-progress relative h-full origin-left scale-x-0 bg-[linear-gradient(to_right,var(--color-copper),var(--color-copper-hover),var(--color-warning),var(--color-turquoise))] shadow-[0_0_16px_var(--color-copper-hover),0_0_4px_var(--color-turquoise)]"
      >
        {/* Bright leading-edge accent so the tip of the bar is unmistakable */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 h-full w-1.5 bg-[var(--color-turquoise-hover)] shadow-[0_0_12px_var(--color-turquoise-hover),0_0_20px_var(--color-turquoise)]"
        />
      </div>
    </div>
  );
}
