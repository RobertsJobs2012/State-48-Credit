import Link from "next/link";
import { Icon, type IconName } from "@/components/Icon";
import { services } from "@/lib/site";

export function ServicesOverview() {
  return (
    <section className="section" id="services">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do</span>
            <h2 className="mt-3">
              Six services.{" "}
              <span className="text-[var(--color-turquoise-hover)]">One goal.</span>
            </h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              Everything you need to clean up your credit report, build it back, and keep it clean for life.
            </p>
          </div>
          <Link href="/services" className="btn-link self-start md:self-end">
            Explore all services →
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li key={s.slug} className="reveal">
              <Link
                href={`/services#${s.slug}`}
                className="card card-elevated group flex h-full flex-col"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-turquoise-glow)] text-[var(--color-turquoise-hover)] transition-colors group-hover:bg-[var(--color-copper-glow)] group-hover:text-[var(--color-copper-hover)]">
                  <Icon name={s.icon as IconName} size={20} />
                </span>
                <h3 className="mt-5 text-lg">{s.title}</h3>
                <p className="mt-2 text-[14.5px] text-[var(--color-text-secondary)]">
                  {s.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-turquoise)] group-hover:text-[var(--color-turquoise-hover)]">
                  Learn more <Icon name="arrow-right" size={13} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
