'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  { q: "How Does Credit Repair Work?", a: "We use federal consumer protection laws — the Fair Credit Reporting Act (FCRA), the Fair Debt Collection Practices Act (FDCPA), FACTA, and Metro 2 compliance standards — to formally challenge negative items on your credit report that are inaccurate, unverifiable, or no longer legally reportable. Credit bureaus are legally required to investigate every properly submitted dispute and remove any item they cannot verify." },
  { q: "How Long Does Credit Repair Take in Arizona?", a: "Most clients see their first items removed within 30 to 45 days. The complete process typically runs 30 to 90 days depending on the number and type of items on your report. In more complex files, it can take longer. We give you an honest, specific timeline estimate after your free consultation." },
  { q: "Is Credit Repair Legal in Phoenix and Arizona?", a: "Yes — credit repair is fully legal and governed by federal law under the Credit Repair Organizations Act (CROA). State 48 Credit operates in full compliance with CROA and all applicable federal law. We explain exactly what we can and cannot do before you pay a single dollar." },
  { q: "I Tried Another Company and It Didn't Work. Why Would This Be Different?", a: "Most large credit repair companies operate on a monthly subscription model designed to keep you enrolled as long as possible. State 48 Credit charges a flat fee. We have every incentive to work fast and thoroughly — because our reputation depends entirely on outcomes." },
  { q: "How Much Does Credit Repair Cost in Phoenix?", a: "State 48 Credit offers flat-fee packages starting at $299 for single-bureau service, $599 for all three bureaus, and $849 for complete restoration including ChexSystems and Innovis. No monthly subscriptions, no hidden charges. Every package includes custom dispute letters, a dedicated specialist, and our 100% money-back guarantee." },
  { q: "What Is the Best Credit Repair Company in Phoenix AZ?", a: "State 48 Credit has served 2,041 Arizona residents since 2010, carries a 4.9-star rating across 312 Google Reviews, and operates on a flat-fee model rather than monthly billing. We encourage you to compare us directly to any other provider." },
  { q: "Can You Remove Collections From My Credit Report in Arizona?", a: "Yes. Removing collections is one of the most common services we provide. Under the FCRA, credit bureaus are required to investigate any properly submitted dispute and remove items they cannot verify. We have removed thousands of collections from Arizona credit reports since 2010." },
  { q: "How Do I Fix My Credit to Buy a House in Phoenix?", a: "Start with a free consultation. We pull your reports across all three bureaus, identify every item blocking mortgage approval, and build a dispute strategy focused on getting your score to qualifying thresholds for FHA, VA, or conventional loans. A 100-point increase can lower your mortgage rate by 1.5% or more — saving tens of thousands over the life of a 30-year loan." },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="py-28 bg-sunken relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-copper-default/[0.025] blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em]">Still Have Questions? <span className="text-copper-default">Here Are the Ones We Hear Most.</span></h2>
          </motion.div>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}>
                <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-card to-elevated border-copper-default/25 shadow-[0_0_30px_rgba(196,98,45,0.06)]' : 'bg-card/30 border-border-default hover:border-border-strong hover:bg-card/50'}`}>
                  <button onClick={() => setOpenIdx(isOpen ? null : i)} className="w-full px-7 py-6 flex items-center justify-between text-left focus:outline-none gap-4">
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-display font-bold w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-copper-default/15 text-copper-default' : 'bg-white/[0.03] text-text-muted'}`}>{i + 1}</span>
                      <span className={`text-base md:text-lg font-display font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-text-headline' : 'text-text-secondary'}`}>{faq.q}</span>
                    </div>
                    <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-all duration-200 ${isOpen ? 'bg-copper-default text-background rotate-45' : 'bg-white/[0.04] border border-border-default text-text-muted'}`}>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}><div className="px-7 pb-7 pl-[4.75rem] text-base font-sans text-text-secondary leading-[1.75]">{faq.a}</div></motion.div>)}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
