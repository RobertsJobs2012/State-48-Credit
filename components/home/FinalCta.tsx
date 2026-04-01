'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

export function FinalCta() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(196,98,45,0.05)] to-transparent z-0" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-text-headline mb-8 leading-tight tracking-tight">
            Your Story Doesn&apos;t End With a Low Credit Score. <br className="hidden md:block" />
            <span className="text-copper-default">Turn the Page.</span>
          </h2>
          
          <p className="text-xl text-text-lifted leading-relaxed mb-12 font-light max-w-3xl mx-auto">
            Right now, somewhere in Phoenix, a first-time homebuyer just got pre-approved. A young family just drove off a lot in a car they actually wanted. Someone who was drowning in collections is looking at a 700-plus score for the first time in years. That didn&apos;t happen by accident. It happened because they made one call.
            <br /><br />
            <strong className="text-text-headline font-semibold">This is yours.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-10 py-5 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-xl"
            >
              Get My Free Credit Analysis Today
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-turquoise-default text-turquoise-default hover:bg-turquoise-default hover:text-background font-semibold rounded-xl transition-all duration-200 text-xl"
            >
              Have Questions? Talk to Us Directly
            </Link>
          </div>
          
          <p className="text-sm text-text-muted">
            No commitment required. Free to start. We&apos;ll tell you exactly what we can do before you owe us anything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
