import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { Icon, type IconName } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credit Repair Services in Arizona",
  description:
    "Credit repair, identity theft recovery, debt validation, mortgage-ready credit, credit building, and business credit — all under one roof. Phoenix, AZ.",
  alternates: { canonical: "/services" },
};

const serviceDetails: Record<string, {
  lede: string;
  what: string[];
  outcomes: string[];
  laws: string[];
}> = {
  "credit-repair": {
    lede: "Remove inaccurate, outdated, or unverifiable negative items from all three credit bureaus.",
    what: [
      "Full 3-bureau credit report audit",
      "FCRA §611 dispute letters to Equifax, Experian, TransUnion",
      "Creditor direct challenges under FCRA §623",
      "Metro 2 reporting violation identification",
      "Goodwill letter campaigns with original creditors",
      "Monthly score tracking across all three bureaus",
    ],
    outcomes: [
      "Collections deleted",
      "Late payments removed",
      "Charge-offs resolved",
      "Inaccurate balances corrected",
    ],
    laws: ["FCRA §611", "FCRA §623", "FDCPA §809", "Metro 2 Format"],
  },
  "identity-theft-recovery": {
    lede: "The full FTC-guided recovery process Robert used on his own identity — now systematized for you.",
    what: [
      "FTC Identity Theft Report filing (IdentityTheft.gov)",
      "Bureau fraud alert + security freeze placement",
      "FCRA §605B block request on every fraudulent item",
      "Creditor fraud affidavit preparation",
      "Police report coordination if needed",
      "Post-recovery monitoring setup",
    ],
    outcomes: [
      "Fraudulent accounts blocked in 4 business days",
      "Credit file restored to pre-theft state",
      "Long-term monitoring in place",
    ],
    laws: ["FCRA §605B", "FACTA §112", "Identity Theft & Assumption Deterrence Act"],
  },
  "debt-validation": {
    lede: "Make collectors prove what you owe — or delete it. Then negotiate from a position of strength.",
    what: [
      "FDCPA §809 debt validation letters",
      "Chain-of-title verification demands",
      "Original signed agreement requests",
      "Statute of limitations analysis",
      "Pay-for-delete negotiation when validated",
      "Settlement at 20–50% of balance when strategic",
    ],
    outcomes: [
      "Unverifiable debts deleted",
      "Validated debts negotiated down",
      "Collection lawsuits avoided",
    ],
    laws: ["FDCPA §809(b)", "FCRA §623", "State SOL statutes"],
  },
  "mortgage-prep": {
    lede: "Get your score eligible for FHA, VA, USDA, or conventional — coordinated directly with your lender.",
    what: [
      "Tri-merge report analysis (matches lender's pull)",
      "Rapid rescore-ready dispute strategy",
      "Tradeline optimization for FICO 2/4/5 scoring models",
      "Lender liaison — we talk directly to your loan officer",
      "Utilization tuning to 1–9% per card",
      "Timing disputes around lock and close dates",
    ],
    outcomes: [
      "FHA qualifying score (580+) typically reached",
      "Conventional qualifying score (620+) achieved",
      "Rate-tier improvements (740+) for serious buyers",
    ],
    laws: ["FCRA §611", "FHA 4000.1 guidelines", "Fannie Mae Selling Guide"],
  },
  "credit-building": {
    lede: "Remove the bad, build the good. Thin files, young credit, post-repair rebuilds.",
    what: [
      "Authorized user strategy on seasoned accounts",
      "Secured card selection and staging",
      "Credit-builder loan matching",
      "Utilization automation (AZEO method)",
      "Tradeline placement for thin files",
      "Self Lender, Experian Boost, and rent-reporting setup",
    ],
    outcomes: [
      "Score gains from rebuilding (not just disputes)",
      "5+ positive tradelines in 6 months",
      "FICO stability above 700",
    ],
    laws: ["FCRA reporting standards", "Regulation V"],
  },
  "business-credit": {
    lede: "Build a business credit profile that stands on its own — no more personal guarantees forever.",
    what: [
      "EIN registration and state compliance",
      "Dun & Bradstreet DUNS number application",
      "Experian Business and Equifax Business activation",
      "Net-30 vendor account stacking (Uline, Quill, Grainger)",
      "Business credit card strategy (Amex, Chase Ink)",
      "Paydex score building to 80+",
    ],
    outcomes: [
      "Paydex 80+ in 6 months",
      "Business credit cards without PG",
      "SBA and line-of-credit eligibility",
    ],
    laws: ["FCRA business carve-outs", "ECOA §701"],
  },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema(),
          breadcrumbSchema([{ name: "Services", path: "/services" }]),
        ]}
      />
      <PageHeader
        eyebrow="Services"
        title={
          <>
            Every service we offer,{" "}
            <span className="text-[var(--color-copper-hover)]">all under one roof.</span>
          </>
        }
        lede="We don't farm disputes to an offshore call center. Every letter, every negotiation, every strategy call happens in-house with a real Arizona credit strategist."
      >
        <Link href="/get-started" className="btn btn-copper">
          Get My Free Audit <Icon name="arrow-right" size={16} />
        </Link>
        <Link href="/pricing" className="btn btn-ghost">
          See Pricing
        </Link>
      </PageHeader>

      <section className="section">
        <div className="container-page space-y-16">
          {services.map((s) => {
            const d = serviceDetails[s.slug];
            return (
              <article key={s.slug} id={s.slug} className="scroll-mt-24">
                <div className="grid gap-10 lg:grid-cols-12">
                  <div className="lg:col-span-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-turquoise-glow)] text-[var(--color-turquoise-hover)]">
                      <Icon name={s.icon as IconName} size={22} />
                    </span>
                    <h2 className="mt-5">{s.title}</h2>
                    <p className="mt-4 text-[17px] text-[var(--color-text-secondary)]">
                      {d.lede}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {d.laws.map((law) => (
                        <span key={law} className="badge text-xs">
                          {law}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 lg:col-span-8 md:grid-cols-2">
                    <div className="card card-elevated">
                      <h3 className="text-base font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        What we do
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {d.what.map((w) => (
                          <li key={w} className="flex gap-2.5 text-[14.5px] text-[var(--color-text-body)]">
                            <Icon name="check" size={16} className="mt-0.5 shrink-0 text-[var(--color-turquoise)]" />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="card card-elevated">
                      <h3 className="text-base font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                        Typical outcomes
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {d.outcomes.map((o) => (
                          <li key={o} className="flex gap-2.5 text-[14.5px] text-[var(--color-text-body)]">
                            <Icon name="star" size={16} className="mt-0.5 shrink-0 text-[var(--color-copper-hover)]" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <hr className="divider mt-16" />
              </article>
            );
          })}
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </>
  );
}
