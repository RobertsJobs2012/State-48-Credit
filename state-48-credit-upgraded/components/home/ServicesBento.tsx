'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FileX, Car, Home, ShieldAlert, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Collections Removal',
    description: 'We aggressively dispute inaccurate, unverifiable, or outdated collection accounts dragging your score down.',
    icon: FileX,
    href: '/services/collections-removal-arizona',
    accent: 'copper',
  },
  {
    title: 'Repossessions',
    description: 'Stop letting past vehicle repossessions dictate your future interest rates and loan approvals.',
    icon: Car,
    href: '/services/repossession-removal-arizona',
    accent: 'turquoise',
  },
  {
    title: 'Foreclosures',
    description: 'Clear the path to your next home by addressing old foreclosure records on your report.',
    icon: Home,
    href: '/services/foreclosure-removal-arizona',
    accent: 'turquoise',
  },
  {
    title: 'Identity Theft',
    description: 'Complete restoration services if your credit was hijacked by fraudsters. We handle all three bureaus.',
    icon: ShieldAlert,
    href: '/services/identity-theft-restoration-arizona',
    accent: 'copper',
  },
];

export function ServicesBento() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">What We Fix</span>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-extrabold text-text-headline leading-[1.08] tracking-[-0.035em] mb-6">
              Comprehensive Credit{' '}
              <span className="text-gradient-copper-turquoise">Restoration</span>
            </h2>
            <p className="text-lg text-text-lifted font-sans leading-relaxed max-w-2xl">
              We don&apos;t send generic dispute letters. We use consumer protection laws to force creditors to prove their claims — or remove them entirely.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid — 2×2 with varied visual treatment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={service.href} className="group block">
                <div className={`relative overflow-hidden rounded-[24px] border border-white/[0.04] p-8 md:p-10 h-full transition-all duration-500 hover:border-white/[0.08] ${
                  index === 0 || index === 3
                    ? 'bg-gradient-to-br from-[#161210] to-[#0E0C0A]'
                    : 'bg-[#111010]'
                }`}>
                  {/* Hover glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                    service.accent === 'copper'
                      ? 'bg-gradient-to-br from-copper-default/[0.06] to-transparent'
                      : 'bg-gradient-to-br from-turquoise-default/[0.04] to-transparent'
                  }`} />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-7 border transition-all duration-400 group-hover:scale-110 ${
                      service.accent === 'copper'
                        ? 'bg-copper-default/[0.08] border-copper-default/20 group-hover:border-copper-default/40 group-hover:bg-copper-default/[0.12]'
                        : 'bg-turquoise-default/[0.08] border-turquoise-default/15 group-hover:border-turquoise-default/35 group-hover:bg-turquoise-default/[0.12]'
                    }`}>
                      <service.icon className={`w-6 h-6 ${
                        service.accent === 'copper' ? 'text-copper-default' : 'text-turquoise-default'
                      }`} />
                    </div>

                    <h3 className="text-2xl font-display font-bold text-text-headline mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-text-secondary font-sans leading-relaxed mb-8 max-w-md">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-[13px] font-sans font-semibold text-text-muted group-hover:text-text-lifted transition-colors duration-300">
                      Learn more
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Large ghost number */}
                  <div className="absolute -bottom-6 -right-4 text-[120px] font-display font-extrabold leading-none text-white/[0.015] group-hover:text-white/[0.03] transition-colors duration-700 pointer-events-none select-none">
                    0{index + 1}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
