"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

/**
 * Floating "back to top" button — appears after the user has scrolled
 * past the hero (>= 600px), smoothly scrolls to top on click.
 *
 * Sits bottom-right, offset above the FloatingCTA bar on mobile.
 * Respects prefers-reduced-motion via `scrollTo({ behavior })` fallback.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 600);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className={
        "fixed bottom-24 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)]/90 text-[var(--color-text-headline)] backdrop-blur-md transition-all duration-300 hover:border-[var(--color-turquoise)] hover:text-[var(--color-turquoise-hover)] hover:shadow-[0_0_28px_var(--color-turquoise-glow)] md:bottom-8 md:right-8 lg:h-14 lg:w-14 " +
        (visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-6 opacity-0 pointer-events-none")
      }
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,248,240,0.08), 0 10px 30px rgba(0,0,0,0.45), 0 20px 60px rgba(0,0,0,0.35)",
      }}
    >
      <Icon name="arrow-right" size={18} className="-rotate-90" />
    </button>
  );
}
