import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "State 48 Credit vs. National Chains",
  description:
    "How State 48 Credit compares to Credit Saint, Lexington Law, The Credit Pros, Sky Blue, and DIY. Flat fee vs. monthly. In-house vs. offshore.",
  alternates: { canonical: "/comparison" },
};

type Row = {
  label: string;
  state48: string;
  national: string;
  diy: string;
  state48Best?: boolean;
};

const rows: Row[] = [
  { label: "Pricing model", state48: "Flat one-time fee ($299–$849)", national: "$89–$149/month · indefinite", diy: "Free (your time)", state48Best: true },
  { label: "Total 6-month cost", state48: "$299–$849 total", national: "$534–$894 (and counting)", diy: "$0", state48Best: true },
  { label: "Total 18-month cost", state48: "$299–$849 total", national: "$1,602–$2,682", diy: "$0", state48Best: true },
  { label: "Who does the work", state48: "Robert + trained in-house team", national: "Offshore call centers + chatbots", diy: "You", state48Best: true },
  { label: "Who you talk to", state48: "Same strategist every call", national: "Different rep each time", diy: "Nobody", state48Best: true },
  { label: "Direct line to founder", state48: "Yes — text line included", national: "No", diy: "N/A", state48Best: true },
  { label: "Contract required", state48: "No", national: "Month-to-month auto-renew", diy: "N/A", state48Best: true },
  { label: "Cancellation friction", state48: "None — you don't subscribe", national: "Retention call, forms, hold times", diy: "N/A", state48Best: true },
  { label: "Metro 2 challenges", state48: "Yes (Advanced + Premier)", national: "Rarely — scripted disputes only", diy: "Possible but rare", state48Best: true },
  { label: "Identity theft expertise", state48: "Founder is an ID-theft survivor", national: "Generic process", diy: "Hard to DIY", state48Best: true },
  { label: "Mortgage lender coordination", state48: "Yes (Premier)", national: "No", diy: "No", state48Best: true },
  { label: "Money-back guarantee", state48: "90 days · every plan", national: "Varies · often 90-day with fine print", diy: "N/A" },
  { label: "Arizona licensing", state48: "Yes", national: "Often not AZ-specific", diy: "N/A", state48Best: true },
  { label: "Typical completion timeline", state48: "60–150 days", national: "18+ months", diy: "Years if not repeated", state48Best: true },
];

const chains = [
  { name: "Credit Saint",   price: "$99–$199/mo", note: "Tiered monthly, month-to-month." },
  { name: "Lexington Law",  price: "$80–$140/mo", note: "Per-action pricing, indefinite retainer." },
  { name: "The Credit Pros", price: "$119–$149/mo", note: "Bundled with identity protection upsells." },
  { name: "Sky Blue Credit", price: "$79/mo",      note: "Flat monthly, couples discount." },
  { name: "Pyramid Credit",  price: "$99/mo",      note: "Offshore dispute processing." },
];

export default function ComparisonPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Compare Us", path: "/comparison" }])}
      />
      <PageHeader
        eyebrow="Comparison"
        title={
          <>
            State 48 Credit vs.{" "}
            <span className="text-[var(--color-copper-hover)]">everyone else.</span>
          </>
        }
        lede="We're not shy. Here's exactly how we stack up against the big national chains, the smaller boutiques, and the DIY route."
      />

      {/* Quick bar */}
      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-alt)]">
        <div className="container-page grid gap-6 py-10 md:grid-cols-3">
          <QuickCard
            color="copper"
            title="State 48"
            headline="$299–$849 · flat"
            lines={["Done in ~120 days", "Robert on the phone", "90-day guarantee"]}
            cta
          />
          <QuickCard
            color="muted"
            title="National chains"
            headline="$80–$150/mo · ongoing"
            lines={["18+ months typical", "Offshore call centers", "Cancellation friction"]}
          />
          <QuickCard
            color="muted"
            title="DIY"
            headline="Free · if you have time"
            lines={["Average 3–5 years", "High learning curve", "No legal leverage"]}
          />
        </div>
      </section>

      {/* Main table */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Feature by feature</span>
            <h2 className="mt-3">The honest side-by-side.</h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th className="px-5 py-4 text-sm font-semibold text-[var(--color-text-lifted)]">
                    &nbsp;
                  </th>
                  <th className="px-5 py-4 text-sm font-bold text-[var(--color-copper-hover)]">
                    State 48 Credit
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">
                    National Chains
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-[var(--color-text-secondary)]">
                    DIY
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i % 2 === 0
                        ? "bg-[var(--color-surface-sunken)]"
                        : "bg-[var(--color-bg-alt)]"
                    }
                  >
                    <td className="px-5 py-4 text-[14.5px] font-semibold text-[var(--color-text-body)]">
                      {row.label}
                    </td>
                    <td className="px-5 py-4 text-[14.5px]">
                      <span className="inline-flex items-start gap-2 font-semibold text-[var(--color-text-headline)]">
                        {row.state48Best && (
                          <Icon name="check" size={15} className="mt-0.5 shrink-0 text-[var(--color-turquoise)]" />
                        )}
                        <span>{row.state48}</span>
                      </span>
                    </td>
                    <td className="px-5 py-4 text-[14.5px] text-[var(--color-text-secondary)]">
                      {row.national}
                    </td>
                    <td className="px-5 py-4 text-[14.5px] text-[var(--color-text-secondary)]">
                      {row.diy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-[var(--color-text-muted)]">
            Comparison based on publicly listed pricing and published service descriptions as of April 2026. Competitor plans change — we update this page quarterly.
          </p>
        </div>
      </section>

      {/* Market-rate detail */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Who We&apos;re Up Against</span>
            <h2 className="mt-3">National chains, by the numbers.</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
              These are the biggest names in credit repair. They all charge monthly. At a typical 12–18 month engagement, you pay more to them in a year than you pay us once.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {chains.map((c) => (
              <li key={c.name} className="card card-elevated">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  {c.name}
                </p>
                <p className="mt-2 text-xl font-bold text-[var(--color-text-headline)]">
                  {c.price}
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{c.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-[var(--color-copper)] bg-[var(--color-copper-glow)] p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-copper-hover)]">
                  The math
                </p>
                <p className="mt-2 text-2xl font-bold text-[var(--color-text-headline)]">
                  Average 12-month cost:{" "}
                  <span className="text-[var(--color-copper-hover)]">~$1,200</span> national ·{" "}
                  <span className="text-[var(--color-turquoise)]">$599</span> State 48 Advanced
                </p>
              </div>
              <Link href="/pricing" className="btn btn-copper">
                See our pricing <Icon name="arrow-right" size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

function QuickCard({
  color,
  title,
  headline,
  lines,
  cta,
}: {
  color: "copper" | "muted";
  title: string;
  headline: string;
  lines: string[];
  cta?: boolean;
}) {
  const isCopper = color === "copper";
  return (
    <div
      className={
        "rounded-2xl border p-6 " +
        (isCopper
          ? "border-[var(--color-copper)] bg-[var(--color-copper-glow)] shadow-[var(--shadow-copper)]"
          : "border-[var(--color-border)] bg-[var(--color-surface)]")
      }
    >
      <p
        className={
          "text-xs font-semibold uppercase tracking-widest " +
          (isCopper ? "text-[var(--color-copper-hover)]" : "text-[var(--color-text-muted)]")
        }
      >
        {title}
      </p>
      <p className="mt-2 text-lg font-bold text-[var(--color-text-headline)]">{headline}</p>
      <ul className="mt-4 space-y-2 text-sm text-[var(--color-text-secondary)]">
        {lines.map((l) => (
          <li key={l} className="flex gap-2">
            <Icon
              name={isCopper ? "check" : "chevron-right"}
              size={14}
              className={
                "mt-1 shrink-0 " +
                (isCopper ? "text-[var(--color-turquoise)]" : "text-[var(--color-text-muted)]")
              }
            />
            <span>{l}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <Link href="/get-started" className="btn btn-copper mt-5 w-full">
          Start free <Icon name="arrow-right" size={14} />
        </Link>
      )}
    </div>
  );
}
