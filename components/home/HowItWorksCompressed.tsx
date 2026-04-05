'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const steps = [
  { num: '01', emoji: '📞', title: 'Book Your Free 15-Minute Consultation', desc: 'Tell us what is going on. We pull your credit reports, review every item across all three bureaus — Equifax, Experian, and TransUnion — and tell you exactly what can be challenged and what your realistic outcome looks like. No pressure, no commitment, nothing to prepare.', label: 'YOU' },
  { num: '02', emoji: '🔍', title: 'We Build Your Custom Strategy and Go to Work', desc: 'We analyze every negative item — collections, late payments, charge-offs, bankruptcies, repossessions, medical debt, hard inquiries, ChexSystems entries, and more. We draft custom dispute letters citing the exact federal laws that apply. We submit directly to all three bureaus on your behalf.', label: 'WE' },
  { num: '03', emoji: '📈', title: 'Watch Your Score Rise and Do What You Came Here to Do', desc: 'Most clients see their first removals within 30 to 45 days. Scores typically rise 150+ points over the course of the process. Once the negative items are gone, they are gone. You use your improved credit to get approved for the home, the car, the refinance — whatever has been waiting.', label: 'YOU' },
];

export function HowItWorksCompressed() {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-6">How Credit Repair Works — And It Is Simpler Than You Think.</h2>
          </motion.div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-0 bottom-0 left-[39px] w-px"><div className="w-full h-full bg-gradient-to-b from-copper-default/30 via-turquoise-deep/20 to-copper-default/30" /></div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.12 }} className="relative flex gap-8 group">
                <div className={`relative z-10 w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-300 text-3xl ${step.label === 'YOU' ? 'bg-turquoise-default/[0.06] border-turquoise-default/20' : 'bg-copper-default/[0.06] border-copper-default/20'}`}>{step.emoji}</div>
                <div className="flex-1 glass-panel rounded-[20px] p-8 md:p-10 relative overflow-hidden group-hover:border-border-strong transition-all duration-300 hover:-translate-y-0.5">
                  <div className="absolute top-4 right-6 text-[72px] font-display font-extrabold text-white/[0.02] pointer-events-none select-none">{step.num}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider ${step.label === 'YOU' ? 'bg-turquoise-default/15 border border-turquoise-default/30 text-turquoise-default' : 'bg-copper-default/15 border border-copper-default/30 text-copper-default'}`}>{step.label}</span>
                    <span className={`text-xs font-sans font-bold uppercase tracking-[0.15em] ${step.label === 'YOU' ? 'text-turquoise-default' : 'text-copper-default'}`}>Step {step.num}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold tracking-tight mb-4">{step.title}</h3>
                  <p className="text-base text-text-secondary font-sans leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-16 text-center">
          <p className="text-text-secondary font-sans mb-4">And here is what that actually looks like in practice.</p>
          <Link href="/how-it-works" className="inline-flex items-center gap-2 text-turquoise-default font-sans font-semibold hover:text-turquoise-hover transition-colors text-base">See the complete credit repair process step by step →</Link>
        </motion.div>
      </div>
    </section>
  );
}
