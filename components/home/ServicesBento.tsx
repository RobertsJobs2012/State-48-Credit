'use client';

import { motion } from 'motion/react';
import Link from 'next/link';

const services = [
  { title: 'Collections Removal', description: 'We aggressively dispute inaccurate, unverifiable, or outdated collection accounts dragging your score down.', emoji: '📄', href: '/services/collections-removal-arizona', span: 'md:col-span-2' },
  { title: 'Repossessions', description: 'Stop letting past vehicle repossessions dictate your future interest rates and loan approvals.', emoji: '🚗', href: '/services/repossession-removal-arizona', span: '' },
  { title: 'Foreclosures', description: 'Clear the path to your next home by addressing old foreclosure records on your report.', emoji: '🏠', href: '/services/foreclosure-removal-arizona', span: '' },
  { title: 'Identity Theft', description: 'Complete restoration services if your credit was hijacked by fraudsters. We handle all three bureaus.', emoji: '🛡️', href: '/services/identity-theft-restoration-arizona', span: 'md:col-span-2' },
];

export function ServicesBento() {
  return (
    <section className="py-28 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <span className="text-xs font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">What We Fix</span>
            <h2 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em] mb-6">Comprehensive Credit <span className="text-gradient-copper-turquoise">Restoration</span></h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-2xl">We don&apos;t send generic dispute letters. We use consumer protection laws to force creditors to prove their claims — or remove them entirely.</p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((svc, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }} className={svc.span}>
              <Link href={svc.href} className="group block h-full">
                <div className="relative overflow-hidden rounded-[20px] border border-border-default bg-card p-8 md:p-10 h-full transition-all duration-300 hover:border-border-strong hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-copper-default/[0.04] to-transparent" />
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-elevated border border-border-default flex items-center justify-center mb-7 transition-all duration-300 group-hover:scale-110 group-hover:border-copper-default/30 text-2xl">{svc.emoji}</div>
                    <h3 className="text-2xl font-display font-bold tracking-tight mb-3">{svc.title}</h3>
                    <p className="text-base text-text-secondary font-sans leading-relaxed mb-8 max-w-md">{svc.description}</p>
                    <div className="flex items-center gap-2 text-sm font-sans font-semibold text-text-muted group-hover:text-turquoise-default transition-colors">Learn more ↗</div>
                  </div>
                  <div className="absolute -bottom-4 -right-2 text-[100px] font-display font-extrabold text-white/[0.015] group-hover:text-white/[0.03] transition-colors pointer-events-none select-none">0{i + 1}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
