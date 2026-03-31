'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2, XCircle, Crown, ArrowUpRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic Repair',
    price: '$99',
    period: '/mo',
    description: 'For minor credit issues and general cleanup.',
    features: [
      'Unlimited Disputes',
      'Credit Monitoring',
      'Monthly Updates',
      'Dedicated Account Manager',
    ],
    notIncluded: [
      'Identity Theft Restoration',
      'Cease & Desist Letters',
    ],
    cta: 'Start Basic',
    href: '/get-started?plan=basic',
    popular: false,
  },
  {
    name: 'Aggressive Repair',
    price: '$149',
    period: '/mo',
    description: 'For serious credit issues, collections, and repossessions.',
    features: [
      'Everything in Basic',
      'Cease & Desist Letters',
      'Creditor Direct Interventions',
      'Priority Processing',
      'Identity Theft Restoration',
    ],
    notIncluded: [],
    cta: 'Start Aggressive',
    href: '/get-started?plan=aggressive',
    popular: true,
  },
  {
    name: 'Couples Plan',
    price: '$199',
    period: '/mo',
    description: 'Aggressive repair for two people at a discounted rate.',
    features: [
      'Everything in Aggressive',
      'Two Separate Accounts',
      'Joint Strategy Sessions',
      'Shared Dashboard',
    ],
    notIncluded: [],
    cta: 'Start Couples Plan',
    href: '/get-started?plan=couples',
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">Pricing</span>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-extrabold text-text-headline leading-[1.08] tracking-[-0.035em] mb-6">
              Transparent, <span className="text-turquoise-default">No-Nonsense</span> Pricing
            </h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed">
              No hidden fees. No long-term contracts. Cancel anytime. We only charge for the work we do.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-[-16px]' : ''}`}
            >
              {/* Popular card outer glow */}
              {plan.popular && (
                <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-b from-copper-default/50 via-copper-default/20 to-copper-default/5 z-0" />
              )}

              <div className={`relative rounded-[26px] p-8 flex flex-col h-full z-10 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#1A1510] to-[#0E0C09]'
                  : 'bg-[#111010] border border-white/[0.04] hover:border-white/[0.07] transition-colors duration-400'
              }`}>
                {/* Popular badge */}
                {plan.popular && (
                  <div className="flex items-center gap-1.5 mb-6">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-copper-default/15 border border-copper-default/25 rounded-full">
                      <Crown size={12} className="text-copper-default" />
                      <span className="text-[11px] font-sans font-bold text-copper-default uppercase tracking-wider">Most Popular</span>
                    </div>
                  </div>
                )}

                {/* Plan info */}
                <div className="mb-8">
                  <h3 className="text-xl font-display font-bold text-text-headline mb-2 tracking-tight">{plan.name}</h3>
                  <p className="text-[13px] font-sans text-text-muted min-h-[36px]">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 flex items-baseline gap-1">
                  <span className="text-[clamp(2.5rem,4vw,3.2rem)] font-display font-extrabold text-text-headline tracking-[-0.04em]">{plan.price}</span>
                  <span className="text-[15px] font-sans text-text-muted">{plan.period}</span>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/[0.05] mb-8" />

                {/* Features */}
                <div className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-[18px] h-[18px] text-turquoise-default shrink-0 mt-0.5" />
                      <span className="text-[14px] font-sans text-text-body leading-snug">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={`not-${i}`} className="flex items-start gap-3 opacity-40">
                      <XCircle className="w-[18px] h-[18px] text-text-muted shrink-0 mt-0.5" />
                      <span className="text-[14px] font-sans text-text-muted line-through leading-snug">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`w-full py-4 rounded-xl font-display font-bold text-center text-[15px] transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    plan.popular
                      ? 'btn-primary !rounded-xl'
                      : 'bg-white/[0.04] border border-white/[0.06] text-text-headline hover:bg-white/[0.07] hover:border-white/[0.1]'
                  }`}
                >
                  {plan.cta}
                  <ArrowUpRight size={15} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantee note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-[13px] font-sans text-text-muted">
            All plans include a <span className="text-copper-default font-semibold">90-Day Money-Back Guarantee</span>. If we don&apos;t remove any negative items in the first 90 days, you get a full refund.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
