import Link from "next/link";
import { Icon } from "@/components/Icon";
import { howItWorks } from "@/lib/site";

export function HowItWorksSection() {
  return (
    <section className="section" id="how-it-works">
      <div className="container-page">
        <div className="max-w-2xl">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3">Three steps. No surprises.</h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            You&apos;ll know exactly what we&apos;re doing, what it costs, and when to expect results — before we send a single letter.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {howItWorks.map((s, i) => (
            <li key={s.step} className="reveal relative">
              <div className="card card-elevated h-full">
                <div className="flex items-start justify-between">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-copper-glow)] text-lg font-bold text-[var(--color-copper-hover)]">
                    {s.step}
                  </span>
                  <span className="badge">
                    <Icon name="clock" size={12} />
                    {s.duration}
                  </span>
                </div>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-[15px] text-[var(--color-text-secondary)]">
                  {s.detail}
                </p>
              </div>
              {i < howItWorks.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 right-[-14px] hidden text-[var(--color-border-strong)] md:block"
                >
                  <Icon name="arrow-right" size={20} />
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link href="/get-started" className="btn btn-copper">
            Start My Free Audit <Icon name="arrow-right" size={16} />
          </Link>
          <Link href="/how-it-works" className="btn-link">
            Read the full process →
          </Link>
        </div>
      </div>
    </section>
  );
}
