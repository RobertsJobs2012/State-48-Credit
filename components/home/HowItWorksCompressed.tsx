'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const steps = [
  { num: '01', emoji: '📞', title: 'Free Consultation', desc: 'Book a free 15-minute call. No paperwork. No credit card. We pull your reports, walk through what we see, and tell you exactly what we can remove.' },
  { num: '02', emoji: '🔍', title: 'Custom Strategy', desc: 'We analyze every item across all three bureaus. We write custom dispute letters for every derogatory item and handle all communication with bureaus and creditors.' },
  { num: '03', emoji: '📈', title: 'Watch Your Score Climb', desc: 'Items start coming off. Your score starts going up — often 150+ points. The approval letters start arriving. You stop checking your credit with dread.' },
];

export function HowItWorksCompressed() {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-6">Simpler Than You Think</h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-2xl mx-auto">Three steps. That&apos;s it. We handle the complexity so you don&apos;t have to.</p>
          </motion.div>
        </div>
        <div className="relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-0 bottom-0 left-[39px] w-px"><div className="w-full h-full bg-gradient-to-b from-copper-default/30 via-turquoise-deep/20 to-copper-default/30" /></div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.12 }} className="relative flex gap-8 group">
                <div className={`relative z-10 w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-300 text-3xl ${i % 2 === 0 ? 'bg-copper-default/[0.06] border-copper-default/20' : 'bg-turquoise-default/[0.06] border-turquoise-default/15'}`}>{step.emoji}</div>
                <div className="flex-1 glass-panel rounded-[20px] p-8 md:p-10 relative overflow-hidden group-hover:border-border-strong transition-all duration-300 hover:-translate-y-0.5">
                  <div className="absolute top-4 right-6 text-[72px] font-display font-extrabold text-white/[0.02] pointer-events-none select-none">{step.num}</div>
                  <span className={`text-xs font-sans font-bold uppercase tracking-[0.15em] mb-3 block ${i % 2 === 0 ? 'text-copper-default' : 'text-turquoise-default'}`}>Step {step.num}</span>
                  <h3 className="text-2xl font-display font-bold tracking-tight mb-4">{step.title}</h3>
                  <p className="text-base text-text-secondary font-sans leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-16 text-center">
          <Link href="/how-it-works" className="inline-flex items-center gap-2 text-turquoise-default font-sans font-semibold hover:text-turquoise-hover transition-colors text-base">See the complete process breakdown →</Link>
        </motion.div>
      </div>
    </section>
  );
}
