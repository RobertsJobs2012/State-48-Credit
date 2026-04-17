import Link from "next/link";
import { Icon } from "@/components/Icon";

type Crumb = { name: string; path: string };

export function PageHeader({
  eyebrow,
  title,
  lede,
  crumbs,
  children,
}: {
  eyebrow?: string;
  title: string | React.ReactNode;
  lede?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div aria-hidden="true" className="noise-overlay" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[-30%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,var(--color-copper-glow)_0%,transparent_65%)] blur-2xl"
      />
      <div className="container-page relative py-20 md:py-28">
        {crumbs && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-text-muted)]">
              <li>
                <Link href="/" className="hover:text-[var(--color-turquoise-hover)]">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={c.path} className="flex items-center gap-2">
                    <Icon name="chevron-right" size={12} className="text-[var(--color-text-muted)]/60" />
                    {last ? (
                      <span className="text-[var(--color-text-lifted)]" aria-current="page">
                        {c.name}
                      </span>
                    ) : (
                      <Link href={c.path} className="hover:text-[var(--color-turquoise-hover)]">
                        {c.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        <div className="max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-3 anim-fade-in">{title}</h1>
          {lede && (
            <p className="mt-6 text-lg text-[var(--color-text-secondary)] md:text-xl anim-fade-in [animation-delay:120ms]">
              {lede}
            </p>
          )}
          {children && (
            <div className="mt-9 flex flex-wrap gap-3 anim-fade-in [animation-delay:200ms]">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
