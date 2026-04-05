'use client';

import { motion } from 'motion/react';
import { ShieldCheck, Users, FileCheck2, CircleDollarSign } from 'lucide-react';

export function AuthoritySnapshot() {
  return (
    <section className="py-24 bg-alt-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-text-headline mb-6 leading-tight"
          >
            Why 2,041 Arizona Residents Trust State 48 Credit With Their Financial Future
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel p-8 rounded-2xl text-center"
          >
            <ShieldCheck size={32} className="text-copper-default mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-text-headline mb-2">15 Years</h3>
            <p className="text-sm text-text-secondary">In the credit repair industry — longer than most competitors have existed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-panel p-8 rounded-2xl text-center"
          >
            <Users size={32} className="text-copper-default mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-text-headline mb-2">2,041</h3>
            <p className="text-sm text-text-secondary">Arizona clients served across Phoenix, Tucson, Mesa, Chandler, Gilbert, Yuma, and Glendale</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl text-center"
          >
            <FileCheck2 size={32} className="text-copper-default mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-text-headline mb-2">15,892</h3>
            <p className="text-sm text-text-secondary">Negative items deleted from credit reports — collections, late payments, bankruptcies, repossessions</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl text-center"
          >
            <CircleDollarSign size={32} className="text-copper-default mx-auto mb-4" />
            <h3 className="text-4xl font-bold text-text-headline mb-2">$20M+</h3>
            <p className="text-sm text-text-secondary">Total debt removed on behalf of our clients</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <p className="text-lg text-text-body leading-relaxed">
            State 48 Credit is Phoenix&apos;s most trusted credit repair company — not because we say so, but because 2,041 Arizonans have trusted us with their financial futures and walked away with results. Our founder has been featured by AZCentral, Forbes, Bloomberg, NerdWallet, Business Insider, CNBC, Investopedia, MarketWatch, AP News, Yahoo Finance, Money, and the Phoenix Business Journal. We have earned the Best of 2025 recognition because we earn it one client at a time.
          </p>
          <p className="text-lg text-text-body leading-relaxed font-medium">
            We are a 100% online, always-available service. No office visits. No waiting rooms. Just results.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full text-sm font-medium text-text-secondary">Best of 2025</span>
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full text-sm font-medium text-text-secondary">FCRA Compliant</span>
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full text-sm font-medium text-text-secondary">FDCPA Certified Process</span>
            <span className="px-4 py-2 bg-sunken border border-border-default rounded-full text-sm font-medium text-text-secondary">As Featured In — AZCentral | Forbes | Bloomberg | CNBC</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
