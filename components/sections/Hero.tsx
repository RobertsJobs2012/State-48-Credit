import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CountUp } from "@/components/CountUp";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div aria-hidden="true" className="noise-overlay" />

      {/* Desert sun glow — parallax drifts up-right as user scrolls */}
      <div
        aria-hidden="true"
        className="parallax-up-right pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle_at_center,rgba(196,98,45,0.22)_0%,rgba(196,98,45,0)_60%)] blur-2xl will-change-transform"
      />
      {/* Turquoise cool orb — parallax drifts down-left */}
      <div
        aria-hidden="true"
        className="parallax-down-left pointer-events-none absolute -bottom-40 left-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(43,191,179,0.16)_0%,rgba(43,191,179,0)_60%)] blur-2xl will-change-transform"
      />
      {/* Accent mid-float — subtle upward drift for depth */}
      <div
        aria-hidden="true"
        className="parallax-up pointer-events-none absolute top-1/3 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,98,45,0.08)_0%,rgba(196,98,45,0)_70%)] blur-3xl will-change-transform"
      />

      <div className="container-page relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="lg:col-span-7">
          <div className="badge badge-turquoise mb-6 anim-fade-in-fast">
            <span aria-hidden="true" className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-turquoise)] shadow-[0_0_8px_var(--color-turquoise)]" />
            Arizona&apos;s most trusted since 2010
          </div>

          <h1 className="anim-fade-in [animation-delay:80ms]">
            Credit repair that actually{" "}
            <span className="bg-gradient-to-br from-[var(--color-copper-hover)] to-[var(--color-copper)] bg-clip-text text-transparent">
              works.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[var(--color-text-secondary)] anim-fade-in [animation-delay:160ms] md:text-xl">
            Flat one-time pricing. Done in months, not years. Built by a Phoenix identity-theft survivor who knows the system from the inside.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row anim-fade-in [animation-delay:240ms]">
            <Link href="/get-started" className="btn btn-copper">
              Get My Free Credit Audit <Icon name="arrow-right" size={16} />
            </Link>
            <Link href="/how-it-works" className="btn btn-ghost">
              <Icon name="play" size={14} /> See How It Works
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-8 anim-fade-in [animation-delay:320ms]">
            <HeroStat
              value={<CountUp to={stats.itemsRemoved} />}
              label="items removed"
            />
            <HeroStat
              value={<CountUp to={20.4} prefix="$" suffix="M" decimals={1} />}
              label="debt eliminated"
            />
            <HeroStat
              value={<CountUp to={stats.rating} decimals={1} suffix="★" />}
              label={`${stats.reviews} reviews`}
            />
          </dl>
        </div>

        <div className="lg:col-span-5">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ value, label }: { value: React.ReactNode; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="stat-value">{value}</dd>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[var(--color-copper-glow)] via-transparent to-[var(--color-turquoise-glow)] blur-2xl opacity-80"
      />
      <div className="relative rounded-[28px] border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-lg)] sm:p-8 anim-fade-in [animation-delay:320ms]">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
            Sample client · 94 days
          </span>
          <span className="badge badge-success">
            <Icon name="check" size={12} /> Verified
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-sm text-[var(--color-text-muted)]">Starting FICO</p>
            <p className="mt-1 text-3xl font-bold text-[var(--color-error)]">548</p>
          </div>
          <div className="flex-1 px-4">
            <div className="relative h-[60px]">
              <svg viewBox="0 0 200 60" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#D46A5E" />
                    <stop offset="50%" stopColor="#D9A441" />
                    <stop offset="100%" stopColor="#78C27D" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 50 Q 40 48 70 38 T 140 18 T 200 8"
                  fill="none"
                  stroke="url(#scoreGrad)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="200" cy="8" r="5" fill="#78C27D" />
              </svg>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-[var(--color-text-muted)]">After</p>
            <p className="mt-1 text-3xl font-bold text-[var(--color-success)]">710</p>
          </div>
        </div>

        <div className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-5">
          <Row label="Negative items removed" value="11 of 14" tone="success" />
          <Row label="Debt eliminated" value="$8,420" tone="success" />
          <Row label="Mortgage-approved" value="Yes" tone="success" />
        </div>

        <p className="mt-6 text-xs text-[var(--color-text-muted)]">
          Results vary. Representative of work completed Q1 2026.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, tone = "default" }: { label: string; value: string; tone?: "default" | "success" }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-[var(--color-text-secondary)]">{label}</span>
      <span
        className={
          tone === "success"
            ? "inline-flex items-center gap-1 font-semibold text-[var(--color-success)]"
            : "font-semibold text-[var(--color-text-headline)]"
        }
      >
        {tone === "success" && <Icon name="check" size={14} />}
        {value}
      </span>
    </div>
  );
}
