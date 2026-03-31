'use client';

import { motion } from 'motion/react';
import { ShieldCheck } from 'lucide-react';

export function Guarantee() {
  return (
    <section className="py-24 bg-alt-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(196,98,45,0.03)] z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-16 rounded-3xl border-2 border-copper-default shadow-[0_0_50px_rgba(196,98,45,0.15)]"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-sunken border border-copper-default/30 rounded-full text-copper-default font-bold tracking-wide uppercase text-sm mb-8">
            <ShieldCheck size={18} className="mr-2" />
            100% Money-Back Guarantee — 90 Days
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-8 leading-tight">
            Our Promise to You — <br className="hidden md:block" />In Plain English
          </h2>
          
          <p className="text-xl text-text-body leading-relaxed mb-8">
            If State 48 Credit does not remove at least one negative item from your credit report within 90 days of beginning your dispute process, we will refund every dollar you paid us. No negotiating. No runaround. No fine-print games. We verify the outcome first — because that&apos;s a fair and honest process — and then we make it right.
          </p>
          
          <p className="text-lg text-text-secondary leading-relaxed">
            We have been in this business for 15 years because we stand behind our work. We are not going anywhere, and neither is this guarantee. We don&apos;t offer this guarantee because we&apos;re nervous about our results. We offer it because we are completely confident in them — and we want you to feel that same confidence before you spend a single dollar.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
