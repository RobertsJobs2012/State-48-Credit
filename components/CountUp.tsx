"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Final numeric value to count up to. */
  to: number;
  /** Number of decimal places to render (default 0). */
  decimals?: number;
  /** Content placed before the number (e.g. "$"). */
  prefix?: string;
  /** Content placed after the number (e.g. "M", "★"). */
  suffix?: string;
  /** Insert thousands separators (default true). */
  separator?: boolean;
  /** Total count duration in ms (default 1800). */
  duration?: number;
  /** Delay before starting once visible, in ms (default 120). */
  delay?: number;
  /** Extra className for the wrapper <span>. */
  className?: string;
};

/**
 * CountUp — animates a number from 0 → `to` the first time the element
 * scrolls into view. Uses IntersectionObserver (one-shot), rAF-driven,
 * and eases out with a cubic curve for a satisfying land.
 *
 * Honors prefers-reduced-motion: renders the final value immediately.
 */
export function CountUp({
  to,
  decimals = 0,
  prefix,
  suffix,
  separator = true,
  duration = 1800,
  delay = 120,
  className,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect reduced motion: jump straight to the final value.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const startTs = performance.now() + delay;
      let rafId = 0;

      const tick = (now: number) => {
        const elapsed = now - startTs;
        if (elapsed < 0) {
          rafId = requestAnimationFrame(tick);
          return;
        }
        const t = Math.min(1, elapsed / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(eased * to);
        if (t < 1) rafId = requestAnimationFrame(tick);
        else setValue(to);
      };

      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            start();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [to, duration, delay]);

  const formatted =
    decimals > 0
      ? value.toLocaleString(undefined, {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
          useGrouping: separator,
        })
      : Math.round(value).toLocaleString(undefined, {
          useGrouping: separator,
        });

  return (
    <span ref={ref} className={className} aria-label={`${prefix ?? ""}${to}${suffix ?? ""}`}>
      {prefix}
      <span aria-hidden="true">{formatted}</span>
      {suffix}
    </span>
  );
}
