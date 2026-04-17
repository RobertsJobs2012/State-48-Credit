import type { Metadata } from "next";
import { Quiz } from "@/components/quiz/Quiz";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Get Started — Free Credit Consultation",
  description:
    "Answer five quick questions. Robert reviews your answers and reaches out within 2 business hours to schedule your free 15-minute consultation.",
  alternates: { canonical: "/get-started" },
};

const reassurances = [
  {
    emoji: "🔒",
    text: "Your information is private. We don't sell data, share leads, or spam. Ever.",
  },
  {
    emoji: "⏱️",
    text: "Takes about 90 seconds. Five questions. One contact step. Done.",
  },
  {
    emoji: "💬",
    text: "A real person reviews this. Not an algorithm. Robert reads every response before reaching out.",
  },
];

export default function GetStartedPage() {
  return (
    <>
      <JsonLd
        data={[
          localBusinessSchema(),
          breadcrumbSchema([{ name: "Get Started", path: "/get-started" }]),
        ]}
      />

      {/* ZONE 3 · Hero */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div aria-hidden="true" className="noise-overlay" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--color-copper-glow)_0%,transparent_65%)] blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--color-turquoise-glow)_0%,transparent_65%)] blur-2xl"
        />

        <div className="container-page relative py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h1 className="anim-fade-in">
                Let&apos;s Find Out Exactly What We Can Do For Your Credit.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[var(--color-text-secondary)] anim-fade-in [animation-delay:120ms] md:text-xl">
                Answer five quick questions. Robert reviews your answers and reaches out within 2 business hours to schedule your free 15-minute consultation — where you&apos;ll get a clear picture of your situation and exactly what it takes to fix it.
              </p>
              <p className="mt-4 max-w-xl text-[15.5px] font-semibold text-[var(--color-text-lifted)] anim-fade-in [animation-delay:200ms]">
                No payment. No commitment. Just answers.
              </p>

              <ul className="mt-8 space-y-3 anim-fade-in [animation-delay:280ms]">
                {reassurances.map((r) => (
                  <li
                    key={r.emoji}
                    className="flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)]/60 p-3.5 backdrop-blur-sm"
                  >
                    <span aria-hidden="true" className="text-xl leading-none">
                      {r.emoji}
                    </span>
                    <span className="text-[14.5px] leading-relaxed text-[var(--color-text-secondary)]">
                      {r.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* ZONE 13 · The 6-step quiz */}
      <section className="section">
        <div className="container-narrow">
          <div className="card card-elevated !p-6 md:!p-10">
            <Quiz />
          </div>

          <p className="mt-6 text-center text-xs text-[var(--color-text-muted)]">
            <Icon name="lock" size={12} className="mr-1.5 inline-block text-[var(--color-turquoise)]" />
            Secured by SSL · Responses stored privately · Reviewed only by Robert
          </p>
        </div>
      </section>
    </>
  );
}

function HeroVisual() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[var(--color-copper-glow)] via-transparent to-[var(--color-turquoise-glow)] blur-2xl opacity-80"
      />
      <div className="relative rounded-[28px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-lg)] anim-fade-in [animation-delay:340ms]">
        {/* Stylized phone / form preview — represents the quiz you're about to take. */}
        <div className="mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden rounded-[28px] border border-[var(--color-border-strong)] bg-[var(--color-surface-sunken)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-copper-hover)]">
              Step 1 of 6
            </span>
            <span className="badge badge-success text-[10px]">Live</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--color-surface-elevated)]">
            <div className="h-full w-[16%] rounded-full bg-gradient-to-r from-[var(--color-copper)] to-[var(--color-copper-hover)]" />
          </div>

          <div className="mt-5">
            <p className="text-[9px] font-semibold uppercase tracking-widest text-[var(--color-turquoise-hover)]">
              Let&apos;s start with what matters most.
            </p>
            <p className="mt-1.5 text-[14px] font-bold leading-tight text-[var(--color-text-headline)]">
              What are you working toward?
            </p>
          </div>

          <ul className="mt-4 space-y-2">
            {[
              { emoji: "🏠", t: "Buying my first home" },
              { emoji: "🚗", t: "Getting approved for a car loan" },
              { emoji: "💳", t: "Qualifying for better rates" },
              { emoji: "🔓", t: "Cleaning up completely" },
            ].map((c, i) => (
              <li
                key={c.t}
                className={
                  "flex items-center gap-2 rounded-lg border p-2 text-[11px] " +
                  (i === 0
                    ? "border-[var(--color-copper)] bg-[var(--color-copper-glow)] text-[var(--color-text-headline)]"
                    : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]")
                }
              >
                <span className="text-base leading-none" aria-hidden="true">
                  {c.emoji}
                </span>
                <span className="font-medium">{c.t}</span>
              </li>
            ))}
          </ul>

          <p className="mt-4 text-center text-[9.5px] text-[var(--color-text-muted)]">
            Tap to continue →
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-5">
          <div className="flex items-center gap-2">
            <Icon name="clock" size={14} className="text-[var(--color-turquoise)]" />
            <span className="text-xs text-[var(--color-text-muted)]">~90 seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="shield" size={14} className="text-[var(--color-turquoise)]" />
            <span className="text-xs text-[var(--color-text-muted)]">Private &amp; secure</span>
          </div>
        </div>
      </div>
    </div>
  );
}
