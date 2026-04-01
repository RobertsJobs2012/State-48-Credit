'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const faqs = [
  {
    q: "Will this actually work for my situation?",
    a: "Yes — and here is why we can say that with confidence. We have helped 2,041 clients across Arizona remove everything from single collections to full bankruptcies and foreclosures. We have seen it all. The only way to know exactly what is removable from your specific report is to let us look at it — which is why the free consultation exists. We tell you the truth upfront, before you pay us anything."
  },
  {
    q: "I've tried other credit repair companies before and got burned. Why is State 48 Credit different?",
    a: "That skepticism is earned, and we respect it. The big national companies profit from keeping you as a paying monthly client as long as possible. Their financial incentive is to work slowly. Ours is the exact opposite — we charge for the work, not the calendar. We also answer our phones, give you a real dedicated specialist, and back everything with a 90-day money-back guarantee. Different model. Different results."
  },
  {
    q: "How long does credit repair take in Arizona?",
    a: "Most clients in the Phoenix metro area begin seeing items removed within 14 to 30 days. The full process typically takes 30 to 90 days. Complex situations — multiple bankruptcies, heavy identity theft, layered collections — can take longer, but that is the exception. We work fast on purpose because we know you have a life to get back to."
  },
  {
    q: "Is credit repair legal in Phoenix?",
    a: "One hundred percent. Everything we do is governed by the Fair Credit Reporting Act (FCRA), the Fair Debt Collection Practices Act (FDCPA), FACTA, and Metro 2 compliance standards. These are federal laws that give every American the right to dispute inaccurate, incomplete, or unverifiable information on their credit reports. We are experts at applying those laws precisely and aggressively. It is completely legal and it works."
  }
];

export function FaqPreview() {
  return (
    <section className="py-24 bg-alt-bg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-headline mb-6"
          >
            Still Have Questions? <br className="hidden md:block" />Here Are the Ones We Hear Most.
          </motion.h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-text-headline mb-4">{faq.q}</h3>
              <p className="text-text-secondary leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-turquoise-default font-semibold hover:text-turquoise-hover transition-colors text-lg"
          >
            See All FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
