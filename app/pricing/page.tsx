import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { PricingSection } from "@/components/sections/PricingSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description:
    "Flat, one-time credit repair pricing. Essential $299, Advanced $599, Premier $849. No monthly fees, no contracts, 90-day money-back guarantee.",
  alternates: { canonical: "/pricing" },
};

const comparisonRows = [
  { label: "Credit report audit",            essential: true, advanced: true, premier: true },
  { label: "FCRA §611 bureau disputes",      essential: true, advanced: true, premier: true },
  { label: "FCRA §623 creditor disputes",    essential: true, advanced: true, premier: true },
  { label: "Metro 2 violation challenges",   essential: false, advanced: true, premier: true },
  { label: "Pay-for-delete negotiations",    essential: false, advanced: true, premier: true },
  { label: "Identity theft recovery",        essential: false, advanced: true, premier: true },
  { label: "Hard inquiry disputes",          essential: false, advanced: true, premier: true },
  { label: "Public records (BK, liens)",     essential: false, advanced: true, premier: true },
  { label: "Mortgage-ready strategy",        essential: false, advanced: false, premier: true },
  { label: "Debt settlement negotiation",    essential: false, advanced: false, premier: true },
  { label: "Business credit setup",          essential: false, advanced: false, premier: true },
  { label: "Monthly 1-on-1 w/ Robert",       essential: false, advanced: false, premier: true },
  { label: "Unlimited disputes",             essential: false, advanced: false, premier: true },
  { label: "Text line to strategist",        essential: true, advanced: true, premier: true },
  { label: "Monthly tri-bureau report",      essential: true, advanced: true, premier: true },
  { label: "Score-building plan",            essential: true, advanced: true, premier: true },
  { label: "90-day money-back guarantee",    essential: true, advanced: true, premier: true },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(),
          breadcrumbSchema([{ name: "Pricing", path: "/pricing" }]),
        ]}
      />
      <PageHeader
        eyebrow="Pricing"
        title={
          <>
            Flat fee. One time.{" "}
            <span className="text-[var(--color-copper-hover)]">No contracts.</span>
          </>
        }
        lede="Other companies charge $99/month for 18+ months. We charge once, do the work in-house, and most clients finish in under six months. Pay via Zelle or Apple Pay."
      >
        <Link href="/get-started" className="btn btn-copper">
          Get My Free Audit <Icon name="arrow-right" size={16} />
        </Link>
      </PageHeader>

      <PricingSection compact />

      {/* Comparison table */}
      <section className="section section-alt">
        <div className="container-page">
          <div className="max-w-2xl">
            <span className="eyebrow">Compare Plans</span>
            <h2 className="mt-3">What&apos;s in each package</h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--color-border)]">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
                  <th scope="col" className="px-5 py-4 text-sm font-semibold text-[var(--color-text-lifted)]">
                    Feature
                  </th>
                  <th scope="col" className="px-5 py-4 text-center text-sm font-semibold">
                    <div className="text-[var(--color-text-headline)]">Essential</div>
                    <div className="mt-1 text-xs font-normal text-[var(--color-text-muted)]">$299</div>
                  </th>
                  <th scope="col" className="relative px-5 py-4 text-center text-sm font-semibold">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="badge badge-copper text-[10px]">Most chosen</span>
                      <span className="text-[var(--color-text-headline)]">Advanced</span>
                      <span className="text-xs font-normal text-[var(--color-text-muted)]">$599</span>
                    </div>
                  </th>
                  <th scope="col" className="px-5 py-4 text-center text-sm font-semibold">
                    <div className="text-[var(--color-text-headline)]">Premier</div>
                    <div className="mt-1 text-xs font-normal text-[var(--color-text-muted)]">$849</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={
                      i % 2 === 0
                        ? "bg-[var(--color-surface-sunken)]"
                        : "bg-[var(--color-bg-alt)]"
                    }
                  >
                    <td className="px-5 py-3.5 text-[14.5px] text-[var(--color-text-body)]">
                      {row.label}
                    </td>
                    <Cell on={row.essential} />
                    <Cell on={row.advanced} featured />
                    <Cell on={row.premier} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Money-back block */}
      <section className="section">
        <div className="container-narrow">
          <div className="card card-elevated text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-turquoise-glow)] text-[var(--color-turquoise-hover)]">
              <Icon name="shield" size={26} />
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl">90-day money-back guarantee</h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              If nothing comes off your report in the first 90 days of work, we refund every dollar.
              No fine print, no hoops. We only take cases we believe we can win.
            </p>
          </div>
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </>
  );
}

function Cell({ on, featured }: { on: boolean; featured?: boolean }) {
  return (
    <td
      className={
        "px-5 py-3.5 text-center " +
        (featured ? "bg-[var(--color-copper-glow)]/40" : "")
      }
    >
      {on ? (
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-turquoise-glow)] text-[var(--color-turquoise-hover)]">
          <Icon name="check" size={14} />
        </span>
      ) : (
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]/60">
          <Icon name="x" size={12} />
        </span>
      )}
    </td>
  );
}
