"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { Icon, type IconName } from "@/components/Icon";
import { nav, services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

type ServiceIcon = IconName;

// Services mapped to navbar mega-menu entries (titles & icons pulled from site data).
const serviceCards: Array<{
  slug: string;
  title: string;
  summary: string;
  icon: ServiceIcon;
}> = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  summary: s.summary,
  icon: s.icon as ServiceIcon,
}));

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const servicesBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer + mega-menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close mega-menu on Escape + outside click
  useEffect(() => {
    if (!megaOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        servicesBtnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        megaRef.current &&
        !megaRef.current.contains(target) &&
        servicesBtnRef.current &&
        !servicesBtnRef.current.contains(target)
      ) {
        setMegaOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [megaOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-[background,border-color,backdrop-filter] duration-300",
          scrolled || megaOpen
            ? "border-b border-[var(--color-border)] bg-[rgba(20,18,16,0.82)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          <Logo />

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                // Services gets the mega-menu trigger
                if (item.href === "/services") {
                  return (
                    <li key={item.href} className="relative">
                      <button
                        ref={servicesBtnRef}
                        type="button"
                        aria-expanded={megaOpen}
                        aria-haspopup="true"
                        aria-controls="services-mega-menu"
                        onClick={() => setMegaOpen((v) => !v)}
                        onMouseEnter={() => setMegaOpen(true)}
                        className={cn(
                          "relative inline-flex items-center gap-1 rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors",
                          active || megaOpen
                            ? "text-[var(--color-turquoise-hover)]"
                            : "text-[var(--color-text-lifted)] hover:text-[var(--color-text-headline)]"
                        )}
                      >
                        {item.label}
                        <Icon
                          name="chevron-down"
                          size={14}
                          className={cn(
                            "transition-transform duration-200",
                            megaOpen && "rotate-180"
                          )}
                        />
                        {active && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--color-turquoise)]"
                          />
                        )}
                      </button>
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onMouseEnter={() => setMegaOpen(false)}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-[14.5px] font-medium transition-colors",
                        active
                          ? "text-[var(--color-turquoise-hover)]"
                          : "text-[var(--color-text-lifted)] hover:text-[var(--color-text-headline)]"
                      )}
                    >
                      {item.label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--color-turquoise)]"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] px-3.5 py-2 text-[13.5px] font-semibold text-[var(--color-text-lifted)] transition-colors hover:border-[var(--color-turquoise)] hover:text-[var(--color-turquoise-hover)] md:inline-flex"
            >
              <Icon name="phone" size={14} />
              {site.phone}
            </a>
            <Link href="/get-started" className="btn btn-copper hidden sm:inline-flex">
              Free Credit Audit
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-headline)] transition-colors hover:border-[var(--color-turquoise)] hover:text-[var(--color-turquoise-hover)] lg:hidden"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>

        {/* Mega-menu — desktop only, anchored to the bottom of the header */}
        <div
          ref={megaRef}
          id="services-mega-menu"
          role="region"
          aria-label="Services menu"
          hidden={!megaOpen}
          onMouseLeave={() => setMegaOpen(false)}
          className="absolute inset-x-0 top-full hidden border-b border-[var(--color-border)] bg-[rgba(20,18,16,0.96)] backdrop-blur-xl lg:block"
        >
          <div className="container-page grid grid-cols-12 gap-8 py-8">
            {/* Left: service cards grid */}
            <div className="col-span-8">
              <div className="mb-4 flex items-center justify-between">
                <p className="eyebrow">What we do</p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-turquoise-hover)] hover:text-[var(--color-turquoise)]"
                >
                  All services <Icon name="arrow-right" size={13} />
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-3">
                {serviceCards.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3.5 transition-all hover:-translate-y-0.5 hover:border-[var(--color-turquoise)] hover:bg-[var(--color-surface-elevated)]"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-copper-glow)] text-[var(--color-copper-hover)] transition-colors group-hover:bg-[var(--color-turquoise-glow)] group-hover:text-[var(--color-turquoise-hover)]"
                      >
                        <Icon name={s.icon} size={18} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[14px] font-semibold text-[var(--color-text-headline)]">
                          {s.title}
                        </p>
                        <p className="mt-1 line-clamp-2 text-[12.5px] leading-snug text-[var(--color-text-secondary)]">
                          {s.summary}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: featured CTA panel */}
            <div className="col-span-4">
              <div className="relative h-full overflow-hidden rounded-2xl border border-[var(--color-border-strong)] bg-gradient-to-br from-[var(--color-copper-glow)] via-[var(--color-surface)] to-[var(--color-turquoise-glow)] p-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[radial-gradient(circle,var(--color-copper-glow)_0%,transparent_70%)] blur-xl"
                />
                <div className="relative">
                  <span className="badge badge-turquoise">
                    <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-turquoise)] shadow-[0_0_8px_var(--color-turquoise)]" />
                    Free · 15 min
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-[var(--color-text-headline)]">
                    Not sure which service fits?
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
                    Take the 90-second audit. Robert reviews your answers and tells you exactly which track makes sense for your situation — or if none do.
                  </p>
                  <Link
                    href="/get-started"
                    className="btn btn-copper mt-5 w-full !py-2.5 text-sm"
                  >
                    Start free audit <Icon name="arrow-right" size={14} />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 text-[13px] font-semibold text-[var(--color-turquoise-hover)] hover:text-[var(--color-turquoise)]"
                  >
                    <Icon name="phone" size={12} /> Or call {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden={!mobileOpen}
        className="fixed inset-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-xl"
      >
        <div className="flex h-full flex-col">
          <div className="container-page flex h-16 items-center justify-between border-b border-[var(--color-border)]">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-border)] text-[var(--color-text-headline)]"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav aria-label="Mobile" className="container-page flex-1 overflow-y-auto py-8">
            <ul className="flex flex-col gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-lg font-semibold text-[var(--color-text-headline)] transition-colors active:bg-[var(--color-surface-elevated)]"
                  >
                    {item.label}
                    <Icon name="chevron-right" size={18} />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile: expose the individual services as a sub-list */}
            <div className="mt-6">
              <p className="eyebrow mb-3">Services</p>
              <ul className="grid grid-cols-1 gap-2">
                {serviceCards.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services#${s.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-sunken)] px-4 py-3 text-[14.5px] text-[var(--color-text-lifted)] active:bg-[var(--color-surface)]"
                    >
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-copper-glow)] text-[var(--color-copper-hover)]">
                        <Icon name={s.icon} size={15} />
                      </span>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 space-y-3">
              <Link href="/get-started" className="btn btn-copper w-full">
                Free Credit Audit
              </Link>
              <a href={site.phoneHref} className="btn btn-ghost w-full">
                <Icon name="phone" size={16} /> {site.phone}
              </a>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-6">
              <p className="text-sm text-[var(--color-text-muted)]">
                Prefer email?{" "}
                <a href={site.emailHref} className="font-semibold text-[var(--color-turquoise)]">
                  {site.email}
                </a>
              </p>
              <p className="mt-2 text-xs text-[var(--color-text-muted)]">{site.hours.display}</p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
