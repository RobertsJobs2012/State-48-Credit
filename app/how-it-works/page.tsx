import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { howToSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "How Credit Repair Works",
  description:
    "Step by step: free audit → custom strategy → bureau disputes → verification. See exactly what happens at State 48 Credit from your first call to a clean report.",
  alternates: { canonical: "/how-it-works" },
};

const detailedSteps = [
  {
    n: "01",
    title: "Your Free Credit Audit",
    duration: "15 minutes · no cost · no obligation",
    body: [
      "You book a 15-minute call. We pull your report from all three bureaus (Equifax, Experian, TransUnion) using a soft pull — zero impact on your score.",
      "Robert walks through every negative item with you, flags what has a legitimate legal basis for removal (inaccurate, outdated, or unverifiable), and sets realistic expectations for what is not disputable.",
      "You leave the call with a written summary of everything on your report — whether you hire us or not.",
    ],
    promises: [
      "No credit card to start",
      "No high-pressure sales",
      "No signup until you're ready",
    ],
  },
  {
    n: "02",
    title: "Custom Dispute Strategy",
    duration: "Built within 48 hours of your audit",
    body: [
      "Robert designs your plan: which items to challenge first (not all at once — order matters), which federal law applies to each (FCRA §611 for inaccuracies, §623 for creditor-direct challenges, §605B for identity theft, FDCPA §809 for collections), and the sequence for maximum impact.",
      "You approve the strategy before we send anything. We show you draft letters, explain the legal theory behind each challenge, and get your signoff.",
      "If you choose Advanced or Premier, we also analyze Metro 2 reporting format violations — a technical layer most credit repair companies don't touch.",
    ],
    promises: [
      "Every dispute is FCRA-compliant",
      "Every letter signed by you",
      "No illegal 'dispute everything' tactics",
    ],
  },
  {
    n: "03",
    title: "We File. The Clock Starts.",
    duration: "Bureaus have 30 days to respond",
    body: [
      "We mail (certified, tracked) your dispute package to the bureaus and, where strategic, to the original creditors directly. Federal law gives them 30 days to investigate and respond.",
      "If the item is inaccurate or can't be verified, it must be deleted or corrected. If verification comes back insufficient, we escalate with a Method of Verification demand under FCRA §611(a)(7).",
      "You get a bureau response copy mailed to you (they send it directly), plus a parallel update from us explaining what happened.",
    ],
    promises: [
      "Certified mail tracking on every letter",
      "Direct response visibility",
      "Escalation letters included",
    ],
  },
  {
    n: "04",
    title: "You See Results",
    duration: "First removals typically 30–45 days",
    body: [
      "Items start coming off. Each removal usually triggers a score update within 24–72 hours of the bureau processing the deletion.",
      "You receive a monthly progress report: items still in dispute, items removed, score changes across all three bureaus, and next steps.",
      "Most clients see 30–70% of their negative items removed in the first round. We then move into round two — more advanced techniques for anything that came back verified.",
    ],
    promises: [
      "Monthly tri-bureau score tracking",
      "Line-item removal log",
      "Strategy updates between rounds",
    ],
  },
  {
    n: "05",
    title: "Rebuild While We Fight",
    duration: "Parallel track — starts week 1",
    body: [
      "Removing bad items is half the job. The other half is building positive tradelines so your score recovers faster and stays strong after repair.",
      "We guide you through utilization tuning (the fastest free score lever), secured card placement, authorized-user opportunities, and — on Premier — strategic tradeline placement.",
      "By the time your repair is done, your file is mortgage- and loan-ready, not just clean.",
    ],
    promises: [
      "No predatory tradeline sales",
      "Free strategies always disclosed first",
      "Paid options only where math supports it",
    ],
  },
  {
    n: "06",
    title: "Finish Line",
    duration: "Typically 60–150 days total",
    body: [
      "We don't stop until your report is clean, your score reflects it, and you know how to keep it that way. Premier clients get unlimited disputes until complete.",
      "We do a final tri-bureau pull, review every tradeline, and hand you a written maintenance plan: what to watch, what to do annually, what to do if a new negative ever appears.",
      "Your file is then your file. No lock-in, no monthly drip, no upsells. Most clients never need to come back — and that's the whole point.",
    ],
    promises: [
      "Written maintenance plan on exit",
      "No retention contract",
      "90-day money-back guarantee if nothing moves",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd
        data={[
          howToSchema(),
          breadcrumbSchema([{ name: "How It Works", path: "/how-it-works" }]),
        ]}
      />
      <PageHeader
        eyebrow="How It Works"
        title={
          <>
            Six steps from{" "}
            <span className="text-[var(--color-copper-hover)]">first call</span> to{" "}
            <span className="text-[var(--color-turquoise-hover)]">finish line.</span>
          </>
        }
        lede="No mystery. No 18-month retainer. Every step is documented, every letter is shown to you, and every outcome is tracked on a monthly report you can show your lender."
      >
        <Link href="/get-started" className="btn btn-copper">
          Start at Step 1 — Free <Icon name="arrow-right" size={16} />
        </Link>
      </PageHeader>

      <section className="section">
        <div className="container-narrow space-y-16">
          {detailedSteps.map((s, i) => (
            <article key={s.n} className="grid gap-8 md:grid-cols-12">
              <div className="md:col-span-3">
                <div className="sticky top-24">
                  <span className="font-display text-6xl font-bold text-[var(--color-copper-hover)] opacity-80">
                    {s.n}
                  </span>
                  <p className="mt-2 text-sm text-[var(--color-text-muted)]">{s.duration}</p>
                </div>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-3xl">{s.title}</h2>
                <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[var(--color-text-secondary)]">
                  {s.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.promises.map((p) => (
                    <li key={p}>
                      <span className="badge badge-turquoise text-xs">
                        <Icon name="check" size={12} /> {p}
                      </span>
                    </li>
                  ))}
                </ul>
                {i < detailedSteps.length - 1 && <hr className="divider mt-12" />}
              </div>
            </article>
          ))}
        </div>
      </section>

      <FAQSection />
      <FinalCTA />
    </>
  );
}
