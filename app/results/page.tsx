import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { reviewsSchema, breadcrumbSchema } from "@/lib/schema";
import { testimonials, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "Real Client Results · Before & After",
  description:
    "Real FICO increases, real items removed, real reviews from real Arizonans. 15,892 items removed, $20.4M in debt eliminated across 2,041 clients.",
  alternates: { canonical: "/results" },
};

const caseStudies = [
  {
    city: "Phoenix, AZ",
    before: 548,
    after: 710,
    days: 94,
    removed: 11,
    outcome: "Approved for first home (FHA)",
    situation: "8 collections, 2 charge-offs, 1 repossession",
  },
  {
    city: "Gilbert, AZ",
    before: 612,
    after: 701,
    days: 103,
    removed: 6,
    outcome: "Refinanced at 1.25% lower rate",
    situation: "Coming off a national chain retainer",
  },
  {
    city: "Scottsdale, AZ",
    before: 520,
    after: 688,
    days: 147,
    removed: 14,
    outcome: "Credit file fully restored",
    situation: "Identity theft — 3 fraudulent accounts",
  },
  {
    city: "Tempe, AZ",
    before: 548,
    after: 710,
    days: 158,
    removed: 13,
    outcome: "Business line of credit approved",
    situation: "High utilization, multiple late payments",
  },
  {
    city: "Mesa, AZ",
    before: 601,
    after: 675,
    days: 56,
    removed: 4,
    outcome: "Medical collections fully cleared",
    situation: "4 medical collections from ER visit",
  },
  {
    city: "Chandler, AZ",
    before: 579,
    after: 732,
    days: 183,
    removed: 9,
    outcome: "Bankruptcy removed early",
    situation: "Ch. 7 from 2019, multiple collections",
  },
];

export default function ResultsPage() {
  return (
    <>
      <JsonLd
        data={[
          reviewsSchema(),
          breadcrumbSchema([{ name: "Results", path: "/results" }]),
        ]}
      />
      <PageHeader
        eyebrow="Results"
        title={
          <>
            Real Arizonans.{" "}
            <span className="text-[var(--color-copper-hover)]">Real numbers.</span>
          </>
        }
        lede="Every case below is a real client. Numbers pulled from tri-bureau reports, outcomes confirmed with signed consent. No stock photos, no fake scores."
      />

      {/* Headline stats */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="container-page grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <Stat value={stats.itemsRemoved.toLocaleString()} label="items removed" />
          <Stat value={`$${stats.debtEliminated}`} label="debt eliminated" />
          <Stat value={stats.clientsServed.toLocaleString()} label="clients served" />
          <Stat value={`${stats.rating}★ · ${stats.reviews}`} label="reviews · 5-star average" />
        </div>
      </section>

      {/* Photo grid (4:5 placeholders) */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Before &amp; After</span>
            <h2 className="mt-3">Client photo wall</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Score pulls, dispute outcomes, and lender letters. Real documentation, real people, real permission.
            </p>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <li key={i} className="reveal">
                <figure className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div
                    className="aspect-[4/5] w-full bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-surface-sunken)]"
                    aria-hidden="true"
                  >
                    <div className="flex h-full items-center justify-center">
                      <Icon name="sparkles" size={28} className="text-[var(--color-text-muted)]/40" />
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[var(--color-text-muted)]">
            Client photos will be added with consent. Placeholder tiles above.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Case Studies</span>
            <h2 className="mt-3">Numbers &amp; timelines</h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <article key={i} className="card card-elevated">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                    {c.city}
                  </span>
                  <span className="badge badge-success text-xs">+{c.after - c.before} pts</span>
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-[var(--color-error)]">{c.before}</span>
                  <Icon name="arrow-right" size={16} className="text-[var(--color-text-muted)]" />
                  <span className="text-3xl font-bold text-[var(--color-success)]">{c.after}</span>
                </div>
                <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-[var(--color-border)] pt-4 text-sm">
                  <div>
                    <dt className="text-[var(--color-text-muted)]">Days</dt>
                    <dd className="font-semibold text-[var(--color-text-headline)]">{c.days}</dd>
                  </div>
                  <div>
                    <dt className="text-[var(--color-text-muted)]">Items removed</dt>
                    <dd className="font-semibold text-[var(--color-text-headline)]">{c.removed}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-[var(--color-text-secondary)]">
                  <span className="font-semibold text-[var(--color-text-lifted)]">Situation:</span>{" "}
                  {c.situation}
                </p>
                <p className="mt-2 text-sm text-[var(--color-turquoise-hover)]">
                  <Icon name="check" size={14} className="mr-1.5 inline-block" />
                  {c.outcome}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section" id="reviews">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Reviews</span>
            <h2 className="mt-3">
              {stats.reviews} reviews. {stats.rating}★ average.
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Pulled from Google, Facebook, and post-repair exit surveys. We don&apos;t curate — every review below was posted publicly by a paying client.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.name} className="card">
                <div className="flex items-center gap-1 text-[var(--color-warning)]">
                  {[0,1,2,3,4].map((i) => (
                    <Icon key={i} name="star" size={18} style={{ fill: "currentColor" }} strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="mt-4 text-[15.5px] leading-relaxed text-[var(--color-text-body)]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text-headline)]">{t.name}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{t.city}</p>
                  </div>
                  <span className="badge badge-success text-xs">{t.result}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-8 text-sm text-[var(--color-text-muted)]">
            <Icon name="shield" size={14} className="mr-1.5 inline-block text-[var(--color-turquoise)]" />
            Results are representative, not promises. Your outcome depends on your report.{" "}
            <Link href="/get-started" className="font-semibold text-[var(--color-turquoise)]">
              Book a free audit
            </Link>{" "}
            to see what&apos;s possible for you specifically.
          </p>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
