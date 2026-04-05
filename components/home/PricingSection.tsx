'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const plans = [
  { name: 'Full Sweep', price: '$599', label: 'one-time', desc: 'Complete 3-bureau removal. No secondary databases.', features: ['✅ Full 3-bureau dispute & removal', '✅ Unlimited negative item disputes', '✅ Custom dispute letters — zero templates', '✅ Direct bureau & creditor communication', '✅ Dedicated credit specialist', '✅ 90-Day Money-Back Guarantee'], cta: 'Start Full Sweep', href: '/get-started?plan=full-sweep', pop: false },
  { name: 'Total Freedom', price: '$849', label: 'one-time', desc: 'The complete credit restoration. Every bureau. Every database. Everything included.', features: ['✅ Full 3-bureau dispute & removal', '✅ Unlimited negative item disputes', '✅ Inquiry removal — all three bureaus', '✅ ChexSystems removal', '✅ Innovis removal', '✅ Dedicated credit specialist', '✅ Custom dispute letters — zero templates', '✅ Post-removal score strategy', '✅ 90-Day Money-Back Guarantee'], cta: 'Start Total Freedom', href: '/get-started?plan=total-freedom', pop: true },
  { name: 'One and Done', price: '$299', label: 'one-time', desc: 'Targeted removal on one bureau. For contained, single-bureau issues.', features: ['✅ Single-bureau dispute & removal', '✅ Unlimited disputes on selected bureau', '✅ Custom dispute letters', '✅ Direct bureau communication', '✅ Dedicated credit specialist', '✅ 90-Day Money-Back Guarantee'], cta: 'Start One and Done', href: '/get-started?plan=one-and-done', pop: false },
];

export function PricingSection() {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-6">Simple, Flat-Rate Pricing. <span className="text-turquoise-default">No Monthly Fees.</span></h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed">Every plan is a one-time investment. You pay once. We work until the job is done.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`flex ${plan.pop ? 'relative z-10' : 'relative'}`}>
              {plan.pop && (<><div className="absolute -inset-4 bg-copper-default/[0.06] blur-[50px] rounded-[40px] pointer-events-none pulse-glow" /></>)}
              <div className={`relative rounded-[26px] p-8 flex flex-col w-full z-10 ${
                plan.pop
                  ? 'animated-border shimmer bg-gradient-to-b from-[#231A13] via-[#1C1610] to-[#161412] shadow-[0_0_60px_rgba(196,98,45,0.12)]'
                  : 'bg-card border border-border-default hover:border-border-strong transition-all duration-300'
              }`}>
                {plan.pop && (<div className="flex items-center gap-2 mb-6 flex-wrap"><div className="flex items-center gap-1.5 px-4 py-1.5 bg-copper-default/15 border border-copper-default/30 rounded-full"><span className="text-sm">👑</span><span className="text-xs font-sans font-bold text-copper-default uppercase tracking-wider">Most Popular</span></div><div className="flex items-center gap-1 px-3 py-1.5 bg-turquoise-default/10 border border-turquoise-default/20 rounded-full"><span className="text-xs">✨</span><span className="text-[11px] font-sans font-bold text-turquoise-default uppercase tracking-wider">Recommended</span></div></div>)}
                <h3 className="text-xl font-display font-bold tracking-tight mb-2">{plan.name}</h3>
                <p className="text-sm font-sans text-text-muted mb-8 min-h-[48px]">{plan.desc}</p>
                <div className="mb-8 flex items-baseline gap-2"><span className={`text-[clamp(2.5rem,4vw,3.2rem)] font-display font-extrabold tracking-[-0.04em] ${plan.pop ? 'text-copper-default' : 'text-text-headline'}`}>{plan.price}</span><span className="text-sm font-sans text-text-muted">{plan.label}</span></div>
                <div className={`h-px mb-8 ${plan.pop ? 'bg-copper-default/15' : 'bg-border-default'}`} />
                <div className="space-y-3.5 mb-10 flex-grow">{plan.features.map((f, j) => <div key={j} className="text-sm font-sans text-text-body leading-snug">{f}</div>)}</div>
                <Link href={plan.href} className={`w-full py-4 rounded-xl font-display font-bold text-center text-base flex items-center justify-center gap-2 transition-all duration-200 ${plan.pop ? 'btn-primary !rounded-xl' : 'bg-elevated border border-border-default text-text-headline hover:border-turquoise-default/40 hover:text-turquoise-default'}`}>{plan.cta} ↗</Link>
                <p className="text-center text-xs text-text-muted mt-3">Free consultation first — no commitment</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-copper-default/20 rounded-full"><span className="text-base">🛡️</span><span className="text-sm font-sans text-text-secondary">All plans include a <span className="text-copper-default font-semibold">90-Day Money-Back Guarantee</span></span></div>
        </motion.div>
      </div>
    </section>
  );
}
