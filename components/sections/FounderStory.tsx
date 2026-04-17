import Link from "next/link";
import { Icon } from "@/components/Icon";
import { founder, stats } from "@/lib/site";

export function FounderStory() {
  return (
    <section className="section section-alt" id="founder">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--color-copper-glow)] to-[var(--color-turquoise-glow)] blur-xl"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--color-border-strong)] bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-surface-sunken)]">
              <div className="flex h-full items-center justify-center">
                <Icon name="users" size={48} className="text-[var(--color-text-muted)]/40" />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 max-w-[240px] rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-lg)]">
              <p className="text-xs text-[var(--color-text-muted)]">Founder · {founder.city}</p>
              <p className="mt-1 font-semibold text-[var(--color-text-headline)]">{founder.name}</p>
              <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                {stats.yearsInBusiness}+ years in credit repair
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow">Our Story</span>
          <h2 className="mt-3">
            &ldquo;They told me I&apos;d have to live with ruined credit for seven years.
            <span className="text-[var(--color-copper-hover)]"> I refused.&rdquo;</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[var(--color-text-secondary)]">
            <p>
              Robert Garcia survived identity theft in his early 20s — a stolen identity, a destroyed credit report, and banks insisting there was nothing he could do.
            </p>
            <p>
              He spent the next two years learning credit law the hard way. He read the FCRA cover to cover. He filed his own disputes. He won. And every friend and neighbor started asking him for help.
            </p>
            <p>
              In 2010 he opened State 48 Credit — named for Arizona, the 48th state — to make sure no Arizonan had to fight that battle alone. Today the team has removed <span className="font-semibold text-[var(--color-text-headline)]">{stats.itemsRemoved.toLocaleString()} negative items</span> and eliminated <span className="font-semibold text-[var(--color-text-headline)]">${stats.debtEliminated} in debt</span> for <span className="font-semibold text-[var(--color-text-headline)]">{stats.clientsServed.toLocaleString()} families</span>.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/about" className="btn btn-ghost">
              Read Robert&apos;s full story <Icon name="arrow-right" size={14} />
            </Link>
            <Link href="/get-started" className="btn-link">
              Talk to him directly →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
