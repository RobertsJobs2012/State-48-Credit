import Link from "next/link";
import { Icon } from "@/components/Icon";
import { site } from "@/lib/site";

export function FinalCTA() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-border-strong)] bg-gradient-to-br from-[var(--color-surface-elevated)] via-[var(--color-surface)] to-[var(--color-surface-sunken)] p-10 md:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,var(--color-copper-glow)_0%,transparent_70%)] blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,var(--color-turquoise-glow)_0%,transparent_70%)] blur-2xl"
          />

          <div className="relative grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <span className="eyebrow">Ready when you are</span>
              <h2 className="mt-3">
                Your credit doesn&apos;t fix itself.{" "}
                <span className="text-[var(--color-copper-hover)]">Let&apos;s start.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg text-[var(--color-text-secondary)]">
                Free, no-obligation credit audit. 15 minutes. You&apos;ll leave knowing exactly what can come off your report — whether you hire us or not.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="flex flex-col gap-3">
                <Link href="/get-started" className="btn btn-copper w-full md:text-base">
                  Book My Free Audit <Icon name="arrow-right" size={16} />
                </Link>
                <a href={site.phoneHref} className="btn btn-ghost w-full">
                  <Icon name="phone" size={14} /> Call {site.phone}
                </a>
                <p className="text-center text-xs text-[var(--color-text-muted)]">
                  {site.hours.display} · {site.licensing}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
