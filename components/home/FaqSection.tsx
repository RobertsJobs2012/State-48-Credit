'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const faqs = [
  { q: "How long does credit repair take?", a: "Every credit profile is different. While some clients see results in as little as 30–45 days, a comprehensive repair process typically takes 3 to 6 months. We work aggressively to resolve issues as quickly as possible." },
  { q: "Is credit repair legal?", a: "Yes. The Fair Credit Reporting Act (FCRA) gives you the legal right to dispute inaccurate, incomplete, or unverifiable information on your credit report. We use these laws to hold creditors and bureaus accountable." },
  { q: "Can you guarantee a specific credit score?", a: "No legitimate credit repair company can guarantee a specific score. However, we do guarantee our work: if we don't remove any negative items within the first 90 days, we offer a full refund." },
  { q: "Do I have to pay upfront?", a: "No. Under the Credit Repair Organizations Act (CROA), we cannot charge you before services are performed. You only pay after we have completed the agreed-upon work for that billing cycle." },
  { q: "What items can be removed?", a: "We can dispute and often remove late payments, collections, charge-offs, bankruptcies, repossessions, foreclosures, judgments, and hard inquiries if they are inaccurate, unverifiable, or outdated." },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-28 bg-sunken relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-copper-default/[0.025] blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em]">Frequently Asked <span className="text-copper-default">Questions</span></h2>
          </motion.div>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
                <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${isOpen ? 'bg-gradient-to-br from-card to-elevated border-copper-default/25 shadow-[0_0_30px_rgba(196,98,45,0.06)]' : 'bg-card/30 border-border-default hover:border-border-strong hover:bg-card/50'}`}>
                  <button onClick={() => setOpenIdx(isOpen ? null : i)} className="w-full px-7 py-6 flex items-center justify-between text-left focus:outline-none gap-4" aria-expanded={isOpen}>
                    <div className="flex items-center gap-4">
                      <span className={`text-sm font-display font-bold w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-200 ${isOpen ? 'bg-copper-default/15 text-copper-default' : 'bg-white/[0.03] text-text-muted'}`}>{i + 1}</span>
                      <span className={`text-base md:text-lg font-display font-semibold leading-snug transition-colors duration-200 ${isOpen ? 'text-text-headline' : 'text-text-secondary'}`}>{faq.q}</span>
                    </div>
                    <span className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-lg transition-all duration-200 ${isOpen ? 'bg-copper-default text-background rotate-45' : 'bg-white/[0.04] border border-border-default text-text-muted'}`}>+</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                        <div className="px-7 pb-7 pl-[4.75rem] text-base font-sans text-text-secondary leading-[1.75]">{faq.a}</div>
                      </motion.div>
                    )}
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
