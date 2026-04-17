import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "@/components/Icon";
import { site, footerNav, stats } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-surface-sunken)] pt-16">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
              Arizona&apos;s most trusted credit repair. Built by an identity-theft survivor who believes nobody should have to fight banks alone.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-2 w-2 rounded-full bg-[var(--color-success)] shadow-[0_0_10px_var(--color-success)]"
              />
              <span className="text-sm text-[var(--color-text-lifted)]">
                Accepting new clients · {site.hours.display}
              </span>
            </div>

            <ul className="mt-6 space-y-2.5 text-sm">
              <li>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2.5 text-[var(--color-text-body)] hover:text-[var(--color-turquoise-hover)]"
                >
                  <Icon name="phone" size={15} /> {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.emailHref}
                  className="inline-flex items-center gap-2.5 text-[var(--color-text-body)] hover:text-[var(--color-turquoise-hover)]"
                >
                  <Icon name="mail" size={15} /> {site.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-[var(--color-text-body)]">
                <Icon name="map-pin" size={15} />
                {site.address.city}, {site.address.region} · serving all of Arizona
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div className="md:col-span-2">
            <FooterHeading>Company</FooterHeading>
            <FooterLinks items={footerNav.company} />
          </div>

          {/* Services column */}
          <div className="md:col-span-3">
            <FooterHeading>Services</FooterHeading>
            <FooterLinks items={footerNav.services} />
          </div>

          {/* Get Started column */}
          <div className="md:col-span-3">
            <FooterHeading>Get Started</FooterHeading>
            <FooterLinks items={footerNav.getStarted} />

            <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Track record
              </p>
              <p className="mt-2 text-[15px] font-semibold text-[var(--color-text-headline)]">
                {stats.itemsRemoved.toLocaleString()} items removed for{" "}
                {stats.clientsServed.toLocaleString()} Arizonans
              </p>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--color-border)] pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--color-text-muted)]">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="shield" size={14} className="text-[var(--color-turquoise)]" />
              {site.licensing}
            </span>
            <span>FCRA & CROA compliant</span>
            <span>SSL secured</span>
            <span>Pay via {site.payment.join(" or ")}</span>
          </div>
          <p className="text-xs text-[var(--color-text-muted)]">
            © {year} {site.legalName}. All rights reserved.
          </p>
        </div>

        <p className="mt-6 pb-10 text-[11px] leading-relaxed text-[var(--color-text-muted)]">
          Under the Credit Repair Organizations Act (CROA), we cannot guarantee any specific outcome or score increase. Results vary by the accuracy, age, and verifiability of items on your credit report. You have the right to dispute any item on your credit report yourself for free. We do not charge advance fees for work not yet performed. State 48 Credit is not a law firm and does not provide legal advice. {site.legalName} is an independent credit repair organization operating under Arizona law.
        </p>
      </div>
    </footer>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
      {children}
    </h3>
  );
}

function FooterLinks({ items }: { items: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-[14.5px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-turquoise-hover)]"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
