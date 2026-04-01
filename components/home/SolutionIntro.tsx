'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export function SolutionIntro() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-text-headline mb-8 leading-tight">
              There Is a Better Way. <br />
              <span className="text-copper-default">And It&apos;s Called State 48 Credit.</span>
            </h2>
            
            <div className="space-y-6 text-text-body leading-relaxed">
              <p>
                Robert Garcia started State 48 Credit because he lived exactly what you are going through right now. He was a victim of identity theft. The companies he turned to for help kept charging him, kept stalling, and kept making him jump through hoops that went nowhere.
              </p>
              <p>
                He had worked as a senior credit analyst in the disputes department of a major financial institution — he knew how the system worked — and even he couldn&apos;t get a straight answer. That was the moment he decided to build something different.
              </p>
              <p>
                The credit repair industry has a problem. The big national companies make more money the longer you stay a client. So they work slowly. They string the process out. Monthly fees keep rolling in while your life stays on hold. That is not a conspiracy theory. That is their business model.
              </p>
              <p>
                State 48 Credit runs on a different model entirely. We are based right here in Phoenix. We serve clients all across Arizona. We know this market. We know the people in it. And we have one goal: <strong className="text-text-headline font-semibold">get you results as fast as legally possible so you can stop paying us and start living your life.</strong>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 md:p-10 rounded-2xl relative"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-copper-default rounded-l-2xl" />
            
            <h3 className="text-2xl font-semibold text-text-headline mb-8">How We Are Different</h3>
            
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-turquoise-default" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-headline mb-2">Dedicated Specialist</h4>
                  <p className="text-text-secondary">You get a dedicated specialist who actually answers the phone — not a call center, not a chatbot, not a ticket system. A real person who knows your file and gives a damn about your results.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-turquoise-default" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-headline mb-2">Speed-First Strategy</h4>
                  <p className="text-text-secondary">We work fast on purpose. We know you want to buy that home, get that car, or just feel normal again. Every day your credit stays damaged is a day you&apos;re losing money and opportunity. We don&apos;t drag our feet.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1">
                  <CheckCircle2 className="text-turquoise-default" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-text-headline mb-2">90-Day Money-Back Guarantee</h4>
                  <p className="text-text-secondary">If we don&apos;t remove a single item from your credit report within 90 days, you get every dollar back. No runaround. No hoops. Our success is tied directly to yours.</p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-copper-default hover:bg-copper-hover text-background font-semibold rounded-xl transition-all duration-200 glow-copper text-lg"
              >
                Start My Free Consultation
              </Link>
              <p className="text-center text-sm text-text-muted mt-4">No cost. No commitment. Just answers.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
