import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CountUp } from "@/components/CountUp";
import { testimonials, stats } from "@/lib/site";

export function ResultsProof() {
  return (
    <section className="section section-alt" id="results">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="eyebrow">Real Results</span>
            <h2 className="mt-3">
              Real Arizonans.{" "}
              <span className="text-[var(--color-copper-hover)]">Real numbers.</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Every one of these is a client we worked with in-house. Screenshots, score pulls, and signed consent on file.
            </p>
          </div>

          <div className="flex gap-6">
            <div>
              <div className="stat-value">
                <CountUp to={stats.itemsRemoved} />
              </div>
              <div className="stat-label">items removed</div>
            </div>
            <div>
              <div className="stat-value">
                <CountUp to={stats.clientsServed} />
              </div>
              <div className="stat-label">clients served</div>
            </div>
          </div>
        </div>

        {/* Result photo grid (4:5 placeholders — replace with real images) */}
        <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
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
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(20,18,16,0.96)] via-[rgba(20,18,16,0.70)] to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs font-semibold text-[var(--color-turquoise-hover)]">Client photo placeholder</p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-text-headline)]">+XXX points</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {/* Testimonial quotes */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3" id="reviews">
          {testimonials.slice(0, 3).map((t) => (
            <figure key={t.name} className="card h-full">
              <div className="flex items-center gap-1 text-[var(--color-warning)]">
                {[0,1,2,3,4].map((i) => (
                  <Icon key={i} name="star" size={16} className="fill-current" strokeWidth={0} style={{ fill: "currentColor" }} />
                ))}
              </div>
              <blockquote className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-body)]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between border-t border-[var(--color-border)] pt-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-text-headline)]">{t.name}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.city}</p>
                </div>
                <span className="badge badge-success text-xs">{t.result}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/results" className="btn btn-ghost">
            See all {stats.reviews} reviews <Icon name="arrow-right" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
