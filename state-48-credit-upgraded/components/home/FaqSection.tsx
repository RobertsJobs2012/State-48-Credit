'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does credit repair take?",
    answer: "Every credit profile is different. While some clients see results in as little as 30–45 days, a comprehensive repair process typically takes 3 to 6 months. We work aggressively to resolve issues as quickly as possible.",
  },
  {
    question: "Is credit repair legal?",
    answer: "Yes. The Fair Credit Reporting Act (FCRA) gives you the legal right to dispute inaccurate, incomplete, or unverifiable information on your credit report. We use these laws to hold creditors and bureaus accountable.",
  },
  {
    question: "Can you guarantee a specific credit score?",
    answer: "No legitimate credit repair company can guarantee a specific score. However, we do guarantee our work: if we don't remove any negative items within the first 90 days, we offer a full refund.",
  },
  {
    question: "Do I have to pay upfront?",
    answer: "No. Under the Credit Repair Organizations Act (CROA), we cannot charge you before services are performed. You only pay after we have completed the agreed-upon work for that billing cycle.",
  },
  {
    question: "What items can be removed?",
    answer: "We can dispute and often remove late payments, collections, charge-offs, bankruptcies, repossessions, foreclosures, judgments, and hard inquiries if they are inaccurate, unverifiable, or outdated.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-sunken" />
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">FAQ</span>
            <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold text-text-headline leading-[1.08] tracking-[-0.035em]">
              Frequently Asked <span className="text-copper-default">Questions</span>
            </h2>
          </motion.div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                  isOpen
                    ? 'bg-elevated/80 border-copper-default/15'
                    : 'bg-transparent border-white/[0.04] hover:border-white/[0.07]'
                }`}>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-7 py-6 flex items-center justify-between text-left focus:outline-none gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-[16px] font-display font-semibold transition-colors duration-300 leading-snug ${
                      isOpen ? 'text-text-headline' : 'text-text-secondary'
                    }`}>
                      {faq.question}
                    </span>
                    <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? 'bg-copper-default/15 text-copper-default'
                        : 'bg-white/[0.03] text-text-muted'
                    }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="px-7 pb-7 text-[15px] font-sans text-text-secondary leading-[1.7]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
