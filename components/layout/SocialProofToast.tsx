"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

/**
 * Rolling social-proof toast notifications.
 * Appears bottom-left after an initial delay, rotates through messages,
 * and can be dismissed. Session-scoped dismissal (sessionStorage) so the
 * toast doesn't nag on every page view, but returns on a fresh session.
 *
 * Respects prefers-reduced-motion — toast still appears, just without
 * slide/scale transitions.
 *
 * All names and cities below are illustrative/representative. Swap to
 * real anonymized client activity when available.
 */

type Proof = {
  name: string;
  city: string;
  action: string;
  when: string;
  kind: "enrolled" | "result" | "review";
};

const proofs: Proof[] = [
  { name: "Marcus", city: "Tempe",      action: "just booked a free credit audit", when: "3 minutes ago",  kind: "enrolled" },
  { name: "Sandra", city: "Mesa",       action: "had 4 medical collections removed", when: "12 minutes ago", kind: "result" },
  { name: "James",  city: "Gilbert",    action: "started the Advanced package",    when: "34 minutes ago", kind: "enrolled" },
  { name: "Maria",  city: "Phoenix",    action: "left a 5-star review",              when: "1 hour ago",     kind: "review" },
  { name: "Carlos", city: "Glendale",   action: "hit a 701 FICO in 84 days",         when: "2 hours ago",    kind: "result" },
  { name: "Alicia", city: "Scottsdale", action: "finished identity-theft recovery",  when: "3 hours ago",    kind: "result" },
  { name: "Daniel", city: "Chandler",   action: "got mortgage-approved",             when: "5 hours ago",    kind: "result" },
];

const DISMISS_KEY = "s48_toast_dismissed";
const FIRST_DELAY_MS = 6000;
const SHOW_MS = 7000;
const GAP_MS = 14000;

export function SocialProofToast() {
  const [index, setIndex] = useState(0);
  const [shown, setShown] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") {
      setDismissed(true);
      return;
    }

    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const showCycle = () => {
      setShown(true);
      hideTimer = setTimeout(() => {
        setShown(false);
        showTimer = setTimeout(() => {
          setIndex((i) => (i + 1) % proofs.length);
          showCycle();
        }, GAP_MS);
      }, SHOW_MS);
    };

    const startTimer = setTimeout(showCycle, FIRST_DELAY_MS);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleDismiss = () => {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // no-op (private mode etc.)
    }
    setDismissed(true);
  };

  if (dismissed) return null;

  const p = proofs[index];
  const iconName = p.kind === "enrolled" ? "spark" : p.kind === "result" ? "trending" : "star";
  const accent =
    p.kind === "enrolled"
      ? "var(--color-copper)"
      : p.kind === "result"
        ? "var(--color-success)"
        : "var(--color-warning)";

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={
        "fixed bottom-24 left-4 z-40 w-[min(92vw,340px)] transition-all duration-500 ease-out md:bottom-8 md:left-8 " +
        (shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0")
      }
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface-elevated)]/95 p-3.5 backdrop-blur-md"
        style={{
          boxShadow:
            "inset 0 1px 0 rgba(255,248,240,0.06), 0 12px 32px rgba(0,0,0,0.45), 0 24px 60px rgba(0,0,0,0.35)",
        }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[2px]"
          style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
        />

        <button
          type="button"
          aria-label="Dismiss notification"
          onClick={handleDismiss}
          className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text-headline)]"
        >
          <Icon name="close" size={13} />
        </button>

        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
            style={{
              background: `color-mix(in oklab, ${accent} 18%, transparent)`,
              color: accent,
              boxShadow: `inset 0 0 0 1px color-mix(in oklab, ${accent} 40%, transparent)`,
            }}
          >
            <Icon name={iconName} size={16} />
          </span>
          <div className="min-w-0 pr-5">
            <p className="text-[13.5px] leading-snug text-[var(--color-text-headline)]">
              <span className="font-semibold">{p.name}</span>{" "}
              <span className="text-[var(--color-text-secondary)]">from {p.city}</span>
              <br />
              <span className="text-[var(--color-text-secondary)]">{p.action}</span>
            </p>
            <p className="mt-1.5 flex items-center gap-1.5 text-[11.5px] text-[var(--color-text-muted)]">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
              />
              {p.when}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
