'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { PhoneCall, FileSearch, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: PhoneCall,
    title: 'Free Consultation',
    desc: 'Book a free 15-minute call. No paperwork. No credit card. No commitment. We pull your reports, walk through what we see, and tell you exactly what we can remove.',
    accent: 'copper',
  },
  {
    num: '02',
    icon: FileSearch,
    title: 'Custom Strategy',
    desc: 'We analyze every item across all three bureaus. We write custom dispute letters for every single derogatory item. We handle all direct communication with bureaus and creditors.',
    accent: 'turquoise',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Watch Your Score Climb',
    desc: 'Items start coming off. Your score starts going up — often 150+ points. The approval letters start arriving. You stop checking your credit with dread and start with pride.',
    accent: 'copper',
  },
];

export function HowItWorksCompressed() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-sans font-semibold text-turquoise-default uppercase tracking-[0.15em] mb-4 block">The Process</span>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-extrabold text-text-headline leading-[1.08] tracking-[-0.035em] mb-6">
              Simpler Than You Think
            </h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-2xl mx-auto">
              Three steps. That&apos;s it. We handle the complexity so you don&apos;t have to.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[39px] w-px">
            <div className="w-full h-full bg-gradient-to-b from-copper-default/30 via-turquoise-default/20 to-copper-default/30" />
          </div>

          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-8 group"
              >
                {/* Step number circle */}
                <div className={`relative z-10 w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-400 ${
                  step.accent === 'copper'
                    ? 'bg-copper-default/[0.08] border-copper-default/20 group-hover:border-copper-default/40 group-hover:shadow-[0_0_30px_rgba(196,98,45,0.12)]'
                    : 'bg-turquoise-default/[0.06] border-turquoise-default/15 group-hover:border-turquoise-default/35 group-hover:shadow-[0_0_30px_rgba(43,191,179,0.1)]'
                }`}>
                  <step.icon className={`w-8 h-8 ${
                    step.accent === 'copper' ? 'text-copper-default' : 'text-turquoise-default'
                  }`} />
                </div>

                {/* Card */}
                <div className="flex-1 glass-panel rounded-[20px] p-8 md:p-10 relative overflow-hidden group-hover:border-white/[0.08] transition-all duration-500">
                  {/* Ghost number */}
                  <div className="absolute top-4 right-6 text-[72px] font-display font-extrabold leading-none text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none">
                    {step.num}
                  </div>

                  <div className="relative z-10">
                    <span className={`text-[11px] font-sans font-bold uppercase tracking-[0.15em] mb-3 block ${
                      step.accent === 'copper' ? 'text-copper-default' : 'text-turquoise-default'
                    }`}>
                      Step {step.num}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-text-headline tracking-tight mb-4">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary font-sans leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-turquoise-default font-sans font-semibold hover:text-turquoise-hover transition-colors text-[15px]"
          >
            See the complete process breakdown
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
