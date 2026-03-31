'use client';

import { motion } from 'motion/react';
import { CheckCircle2, XCircle } from 'lucide-react';

export function WhatYouGet() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-headline mb-6"
          >
            Everything Included When You Work With State 48 Credit
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-text-headline mb-8">What&apos;s Included:</h3>
            <ul className="space-y-6">
              {[
                { title: 'Complete 3-Bureau Credit Analysis', desc: 'We audit every item across Equifax, Experian, and TransUnion and identify every single removable negative mark before you pay us a dollar.' },
                { title: 'Custom Dispute Letters', desc: 'Written specifically for your situation, your items, and your bureaus. No mass-produced templates. No recycled letters. Yours are built from scratch.' },
                { title: 'Full Bureau Communication', desc: 'We handle every call, letter, and follow-up with all three bureaus and your creditors directly. You never have to deal with them.' },
                { title: 'Dedicated Credit Specialist', desc: 'One real person assigned to your file. Not a ticket number. Not a call center rotation. Someone who knows your report and is personally invested in your results.' },
                { title: 'Inquiry, ChexSystems, and Innovis Removal', desc: 'We go after everything. Not just the big stuff. Every unauthorized inquiry, every secondary reporting database (where applicable).' },
                { title: 'Speed-First Strategy', desc: 'We work as fast as legally possible because we know every day matters. Results often begin within 14 to 30 days.' },
                { title: '90-Day Money-Back Guarantee', desc: 'If we don\'t remove a single item in 90 days, you get a full refund. Period.' },
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="text-turquoise-default" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-text-headline mb-1">{item.title}</h4>
                    <p className="text-text-secondary">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-turquoise-default" />
              <h3 className="text-2xl font-semibold text-text-headline mb-6">Who This Is For:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-text-body">
                  <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={20} />
                  <span>Anyone in Arizona who has been denied for a home, car, or credit card due to their credit score</span>
                </li>
                <li className="flex gap-3 text-text-body">
                  <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={20} />
                  <span>Victims of identity theft who have fraudulent accounts destroying their report</span>
                </li>
                <li className="flex gap-3 text-text-body">
                  <CheckCircle2 className="text-turquoise-default flex-shrink-0 mt-0.5" size={20} />
                  <span>Anyone who tried to fix their credit themselves or through another company and got nowhere</span>
                </li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-status-error" />
              <h3 className="text-2xl font-semibold text-text-headline mb-6">Who This Is NOT For:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 text-text-body">
                  <XCircle className="text-status-error flex-shrink-0 mt-0.5" size={20} />
                  <span>Anyone looking for a &quot;quick fix&quot; who isn&apos;t willing to let the process work — credit repair is fast with us, but it still takes time and legal process.</span>
                </li>
                <li className="flex gap-3 text-text-body">
                  <XCircle className="text-status-error flex-shrink-0 mt-0.5" size={20} />
                  <span>Anyone who expects perfect results with zero cooperation — we need basic information from you to get started. That&apos;s all. But we do need that.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
