import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { personSchema, organizationSchema, breadcrumbSchema } from "@/lib/schema";
import { founder, site, stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Robert Garcia & State 48 Credit",
  description:
    "Robert Garcia survived identity theft and built State 48 Credit in 2010 so no Arizonan has to fight banks alone. Meet the founder and the team.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "shield" as const,
    title: "Honesty or nothing",
    body: "We only take on items we have a legitimate legal basis to dispute. If we can't win it, we tell you. Every time.",
  },
  {
    icon: "users" as const,
    title: "Humans, not call centers",
    body: "You get Robert. Or you get someone Robert personally trained. Not a different rep every month.",
  },
  {
    icon: "zap" as const,
    title: "Move fast, finish faster",
    body: "No 18-month retainers. No padding timelines. We work until done — usually in under six months.",
  },
  {
    icon: "heart" as const,
    title: "Arizona first",
    body: "We live here. We go to the same football games. When we celebrate your closing, we mean it.",
  },
];

const timeline = [
  { year: "2008", title: "Identity theft", body: "Robert's identity is stolen. Three banks tell him he has to live with it." },
  { year: "2009", title: "Self-education", body: "Two years of FCRA study and DIY disputes. Score rebuilt from 480 to 720." },
  { year: "2010", title: "State 48 founded", body: "Opens a one-person operation in Phoenix. First 12 clients are neighbors." },
  { year: "2014", title: "100 clients", body: "Expands to a small team. Still doing every intake call personally." },
  { year: "2019", title: "1,000 clients", body: "Reaches 1,000 Arizona families served. Over $8M in debt eliminated." },
  { year: "2022", title: "Full-service expansion", body: "Launches business credit and mortgage-ready programs." },
  { year: "2026", title: "Today", body: `${stats.clientsServed.toLocaleString()} clients. ${stats.itemsRemoved.toLocaleString()} items removed. Still Arizona-based. Still Robert.` },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          organizationSchema(),
          breadcrumbSchema([{ name: "About", path: "/about" }]),
        ]}
      />
      <PageHeader
        eyebrow="About"
        title={
          <>
            Built by a survivor.{" "}
            <span className="text-[var(--color-copper-hover)]">For real people.</span>
          </>
        }
        lede="State 48 Credit was never meant to be a national chain. It was meant to be the credit repair company Robert wished existed when banks told him his ruined credit was his problem to live with."
      />

      {/* Founder story */}
      <section className="section" id="founder">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[var(--color-copper-glow)] to-[var(--color-turquoise-glow)] blur-xl"
                />
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-[var(--color-border-strong)] bg-gradient-to-br from-[var(--color-surface-elevated)] to-[var(--color-surface-sunken)]">
                  <div className="flex h-full items-center justify-center">
                    <Icon name="users" size={56} className="text-[var(--color-text-muted)]/40" />
                  </div>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  {founder.role}
                </p>
                <p className="mt-1 text-xl font-bold text-[var(--color-text-headline)]">
                  {founder.name}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{founder.city}</p>
                <div className="mt-4 flex gap-2">
                  <a href={site.phoneHref} className="btn btn-turquoise flex-1 text-sm">
                    <Icon name="phone" size={14} /> Call
                  </a>
                  <a href={site.emailHref} className="btn btn-ghost flex-1 text-sm">
                    <Icon name="mail" size={14} /> Email
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">Robert&apos;s Story</span>
            <h2 className="mt-3">&ldquo;They told me I&apos;d have to live with it.&rdquo;</h2>
            <div className="mt-6 space-y-5 text-[16.5px] leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                In 2008, Robert was 23, newly married, and about to buy his first house in Mesa. He pulled his credit and found six accounts he&apos;d never opened — $34,000 in debt tied to someone who had stolen his identity.
              </p>
              <p>
                He called the banks. He called the bureaus. He called a consumer attorney. Every one of them said the same thing: file a police report, dispute it, and wait seven years for it to fall off. One banker actually laughed.
              </p>
              <p>
                Robert didn&apos;t wait. He went to the library, pulled down the Fair Credit Reporting Act, and started reading. He learned the difference between §611 and §623. He learned about Metro 2 format. He learned that the system was full of technical violations that creditors counted on consumers not knowing about.
              </p>
              <p>
                Over the next two years, he filed 47 disputes and 11 affidavits. Every fraudulent account came off. His score went from 480 to 720. He closed on that Mesa house in 2010 — the same year he filed the paperwork for State 48 Credit.
              </p>
              <p>
                The name was a tribute. Arizona was the 48th state admitted to the Union — the underdog, the late bloomer, the one everyone underestimated. Same as every client Robert has worked with since.
              </p>
              <p className="text-[var(--color-text-headline)]">
                Sixteen years and {stats.clientsServed.toLocaleString()} clients later, he still picks up the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt" id="mission">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="mt-3">Our mission, in four sentences.</h2>
          </div>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <li key={v.title} className="card card-elevated h-full">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-turquoise-glow)] text-[var(--color-turquoise-hover)]">
                  <Icon name={v.icon} size={20} />
                </span>
                <h3 className="mt-5 text-lg">{v.title}</h3>
                <p className="mt-2 text-[14.5px] text-[var(--color-text-secondary)]">
                  {v.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container-narrow">
          <div className="max-w-2xl">
            <span className="eyebrow">Timeline</span>
            <h2 className="mt-3">{stats.yearsInBusiness}+ years of credit repair in Arizona.</h2>
          </div>
          <ol className="mt-10 space-y-6 border-l border-[var(--color-border-strong)] pl-8">
            {timeline.map((t, i) => (
              <li key={t.year} className="relative">
                <span
                  aria-hidden="true"
                  className={
                    "absolute -left-[41px] top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--color-bg-alt)] " +
                    (i === timeline.length - 1
                      ? "bg-[var(--color-copper)] shadow-[0_0_0_4px_var(--color-copper-glow)]"
                      : "bg-[var(--color-turquoise)]")
                  }
                />
                <div className="card card-elevated">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-copper-hover)]">
                      {t.year}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg">{t.title}</h3>
                  <p className="mt-2 text-[14.5px] text-[var(--color-text-secondary)]">{t.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 text-center">
            <Link href="/get-started" className="btn btn-copper">
              Work with Robert <Icon name="arrow-right" size={14} />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
