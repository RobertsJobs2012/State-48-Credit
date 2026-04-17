import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "You're In — Here's What Happens Next",
  description:
    "Thanks for submitting your quiz. Robert reviews every submission personally and reaches out within 2 business hours.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
};

const steps = [
  {
    label: "Step 1 — Within 2 Business Hours",
    body: "Robert receives your quiz responses and reviews them. He'll reach out by phone first — if you didn't leave a number, he'll email you directly. Either way, you hear from a real person quickly.",
  },
  {
    label: "Step 2 — Your Free 15-Minute Consultation",
    body: "Robert pulls and reviews your full credit reports across all three bureaus on the call with you. You'll see exactly what's on your report, exactly what's removable, and exactly which package — if any — fits your situation. No surprises. No pressure. Just an honest picture of where things stand.",
  },
  {
    label: "Step 3 — You Decide",
    body: "At the end of the consultation, you'll have everything you need to make an informed decision. If State 48 Credit is the right fit, Robert will walk you through enrollment. If it isn't, he'll tell you that too. The decision is entirely yours.",
  },
];

const nextReads = [
  { emoji: "📖", text: "See exactly how the process works", href: "/how-it-works" },
  { emoji: "📊", text: "See real before-and-after results from Arizona clients", href: "/results" },
  { emoji: "❓", text: "Have a specific question?", href: "/#faq" },
];

export default function ThankYouPage() {
  return (
    <>
      {/* ZONE 12 · Post-submission confirmation */}
      <section className="relative overflow-hidden bg-hero-gradient">
        <div aria-hidden="true" className="noise-overlay" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[-20%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,var(--color-copper-glow)_0%,transparent_65%)] blur-2xl"
        />
        <div className="container-narrow relative py-20 md:py-28">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-success)]/20 text-[var(--color-success)] shadow-[0_0_24px_rgba(120,194,125,0.35)]"
            >
              <Icon name="check" size={22} />
            </span>
            <span className="eyebrow">Submission received</span>
          </div>

          <h1 className="mt-5 anim-fade-in">
            You Just Took the Most Important Step Toward{" "}
            <span className="text-[var(--color-copper-hover)]">Clean Credit.</span>
          </h1>

          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-[var(--color-text-secondary)] anim-fade-in [animation-delay:120ms]">
            <p>Your answers are on their way to Robert right now.</p>
            <p>
              He reviews every submission personally — not a bot, not a call center agent, not an assistant. Robert reads your responses, looks at the picture they paint, and reaches out directly to schedule your free 15-minute consultation.
            </p>
            <p className="font-semibold text-[var(--color-text-headline)]">
              Here is exactly what happens next:
            </p>
          </div>
        </div>
      </section>

      {/* 3-Step Next Steps Timeline */}
      <section className="section">
        <div className="container-narrow">
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li key={s.label} className="card card-elevated flex gap-5">
                <span
                  aria-hidden="true"
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-copper-glow)] text-lg font-bold text-[var(--color-copper-hover)]"
                >
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-lg">{s.label}</h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Confirmation testimonial */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <figure className="relative overflow-hidden rounded-3xl border border-[var(--color-border-strong)] bg-gradient-to-br from-[var(--color-surface-elevated)] via-[var(--color-surface)] to-[var(--color-surface-sunken)] p-8 md:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,var(--color-copper-glow)_0%,transparent_70%)] blur-2xl"
            />
            <div className="relative">
              <div className="flex items-center gap-1 text-[var(--color-warning)]">
                {[0,1,2,3,4].map((i) => (
                  <Icon key={i} name="star" size={20} style={{ fill: "currentColor" }} strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 text-xl leading-relaxed text-[var(--color-text-headline)] md:text-2xl">
                &ldquo;I went from a 498 to a 701 in 84 days. I&apos;m buying my first home. I wish I hadn&apos;t waited as long as I did to make the call.&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[14.5px] text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text-lifted)]">Carlos M.</span>,
                U.S. Army Veteran · Glendale, AZ
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* Secondary CTA block */}
      <section className="section !pt-0">
        <div className="container-narrow">
          <div className="card">
            <h2 className="text-xl">While you wait, here&apos;s what to read next:</h2>
            <ul className="mt-5 space-y-3">
              {nextReads.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="flex items-center justify-between gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-4 transition-colors hover:border-[var(--color-turquoise)] hover:bg-[var(--color-surface-elevated)]"
                  >
                    <span className="flex items-center gap-3 text-[15px] text-[var(--color-text-body)]">
                      <span className="text-xl leading-none" aria-hidden="true">{r.emoji}</span>
                      {r.text}
                    </span>
                    <Icon name="arrow-right" size={16} className="text-[var(--color-turquoise)]" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] p-4 text-center">
              <p className="text-sm text-[var(--color-text-secondary)]">
                Or call Robert directly:{" "}
                <a
                  href={site.phoneHref}
                  className="font-bold text-[var(--color-turquoise-hover)]"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expectation-setting line */}
      <section className="pb-20">
        <div className="container-narrow">
          <p className="rounded-2xl border border-dashed border-[var(--color-border-strong)] bg-[var(--color-surface-sunken)] p-5 text-center text-[14.5px] leading-relaxed text-[var(--color-text-secondary)]">
            If you don&apos;t hear from us within 2 business hours during normal business days,
            check your spam folder — or call{" "}
            <a href={site.phoneHref} className="font-semibold text-[var(--color-turquoise-hover)]">
              {site.phone}
            </a>{" "}
            directly. We don&apos;t miss leads. We just occasionally miss spam filters.
          </p>
        </div>
      </section>
    </>
  );
}
