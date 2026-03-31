'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2, XCircle, Crown, ArrowUpRight, Shield } from 'lucide-react';

const plans = [
  { name: 'Basic Repair', price: '$99', period: '/mo', desc: 'For minor credit issues and general cleanup.', features: ['Unlimited Disputes', 'Credit Monitoring', 'Monthly Updates', 'Dedicated Account Manager'], missing: ['Identity Theft Restoration', 'Cease & Desist Letters'], cta: 'Start Basic', href: '/get-started?plan=basic', pop: false },
  { name: 'Aggressive Repair', price: '$149', period: '/mo', desc: 'For serious credit issues, collections, and repossessions.', features: ['Everything in Basic', 'Cease & Desist Letters', 'Creditor Direct Interventions', 'Priority Processing', 'Identity Theft Restoration'], missing: [], cta: 'Start Aggressive', href: '/get-started?plan=aggressive', pop: true },
  { name: 'Couples Plan', price: '$199', period: '/mo', desc: 'Aggressive repair for two people at a discounted rate.', features: ['Everything in Aggressive', 'Two Separate Accounts', 'Joint Strategy Sessions', 'Shared Dashboard'], missing: [], cta: 'Start Couples Plan', href: '/get-started?plan=couples', pop: false },
];

export function PricingSection() {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-[11px] font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-6">Transparent, <span className="text-turquoise-default">No-Nonsense</span> Pricing</h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed">No hidden fees. No long-term contracts. Cancel anytime.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={plan.pop ? 'md:-mt-4 md:mb-[-16px]' : ''}>
              <div className={`relative rounded-[24px] p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 ${
                plan.pop
                  ? 'bg-gradient-to-b from-[#1E1A16] to-[#141210] border border-copper-default/30 shadow-[0_0_40px_rgba(196,98,45,0.08)]'
                  : 'bg-card border border-border-default hover:border-border-strong'
              }`}>
                {plan.pop && (
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-copper-default/10 border border-copper-default/20 rounded-full">
                      <Crown size={12} className="text-copper-default" />
                      <span className="text-[10px] font-sans font-bold text-copper-default uppercase tracking-wider">Most Popular</span>
                    </div>
                  </div>
                )}
                <h3 className="text-xl font-display font-bold tracking-tight mb-2">{plan.name}</h3>
                <p className="text-[13px] font-sans text-text-muted min-h-[36px] mb-8">{plan.desc}</p>
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-[clamp(2.5rem,4vw,3rem)] font-display font-extrabold text-text-headline tracking-[-0.04em]">{plan.price}</span>
                  <span className="text-[15px] font-sans text-text-muted">{plan.period}</span>
                </div>
                <div className="h-px bg-border-default mb-8" />
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-[18px] h-[18px] text-turquoise-default shrink-0 mt-0.5" />
                      <span className="text-[14px] font-sans text-text-body leading-snug">{f}</span>
                    </div>
                  ))}
                  {plan.missing.map((f, j) => (
                    <div key={`m-${j}`} className="flex items-start gap-3 opacity-40">
                      <XCircle className="w-[18px] h-[18px] text-text-muted shrink-0 mt-0.5" />
                      <span className="text-[14px] font-sans text-text-muted line-through leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
                <Link href={plan.href} className={`w-full py-4 rounded-xl font-display font-bold text-center text-[15px] flex items-center justify-center gap-2 transition-all duration-200 ${
                  plan.pop ? 'btn-primary !rounded-xl' : 'bg-elevated border border-border-default text-text-headline hover:border-turquoise-default/40 hover:text-turquoise-default'
                }`}>
                  {plan.cta} <ArrowUpRight size={15} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee badge */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-copper-default/20 rounded-full">
            <Shield size={16} className="text-copper-default" />
            <span className="text-[13px] font-sans text-text-secondary">All plans include a <span className="text-copper-default font-semibold">90-Day Money-Back Guarantee</span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
