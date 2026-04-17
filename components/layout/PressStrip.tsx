import { Icon } from "@/components/Icon";

/**
 * Trust strip: "as trusted by" / "as recognized by" logo row.
 *
 * Renders stylized wordmarks (pure SVG/text — no third-party logo assets
 * to license). Replace the `brands` array with actual mentions once press
 * coverage is confirmed and permissions to display logos are secured.
 *
 * Layout: horizontal flex on desktop, marquee on mobile for density.
 */

const brands: Array<{ name: string; tag: string }> = [
  { name: "AZ Central",       tag: "AZ" },
  { name: "Phoenix New Times", tag: "NT" },
  { name: "KTAR News",         tag: "K" },
  { name: "ABC15",             tag: "15" },
  { name: "BBB Accredited",    tag: "A+" },
  { name: "Google",            tag: "G" },
];

export function PressStrip() {
  return (
    <section
      aria-label="As trusted and recognized by"
      className="border-y border-[var(--color-border)] bg-[var(--color-surface-sunken)]/60"
    >
      <div className="container-page py-8">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            <Icon name="shield" size={14} className="text-[var(--color-turquoise)]" />
            As trusted &amp; recognized by
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:gap-x-10">
            {brands.map((b) => (
              <li
                key={b.name}
                className="group flex items-center gap-2 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-headline)]"
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] text-[10px] font-bold tracking-tight text-[var(--color-text-secondary)] transition-colors group-hover:border-[var(--color-copper)] group-hover:text-[var(--color-copper-hover)]"
                >
                  {b.tag}
                </span>
                <span className="text-[13.5px] font-semibold tracking-tight">
                  {b.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
