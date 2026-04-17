import Link from "next/link";
import { Icon } from "@/components/Icon";
import { packages } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PricingSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={cn("section", compact && "!py-16")} id="pricing">
      <div className="container-page">
        {!compact && (
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Pricing</span>
            <h2 className="mt-3">Flat fee. One time. No contracts.</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Pay once, we work until done. No monthly drip, no 18-month retainer, no surprise charges.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "card relative flex flex-col",
                pkg.featured ? "card-featured" : "card-elevated"
              )}
            >
              {pkg.featured && (
                <span className="pill-rotating absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest">
                  Most chosen
                </span>
              )}

              <div>
                <h3 className="text-2xl">{pkg.name}</h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">{pkg.tagline}</p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold tracking-tight text-[var(--color-text-headline)]">
                  ${pkg.price}
                </span>
                <span className="text-sm text-[var(--color-text-muted)]">flat · one time</span>
              </div>

              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                <span className="font-semibold text-[var(--color-text-lifted)]">Best for:</span>{" "}
                {pkg.bestFor}
              </p>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs text-[var(--color-turquoise-hover)]">
                <Icon name="clock" size={12} />
                {pkg.timeline}
              </div>

              <ul className="mt-6 space-y-3 border-t border-[var(--color-border)] pt-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-3 text-[14.5px] text-[var(--color-text-body)]">
                    <Icon
                      name="check"
                      size={16}
                      className="mt-0.5 shrink-0 text-[var(--color-turquoise)]"
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href="/get-started"
                  className={cn("btn w-full", pkg.featured ? "btn-copper" : "btn-ghost")}
                >
                  Choose {pkg.name} <Icon name="arrow-right" size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--color-text-muted)]">
          Pay via Zelle or Apple Pay · No credit card required · 90-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
