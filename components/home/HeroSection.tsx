'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { CreditScoreArc } from './CreditScoreArc';

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient z-0" />
      <motion.div className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(196,98,45,0.10) 0%, transparent 70%)' }} animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute bottom-[-20%] right-[-8%] w-[45%] h-[45%] rounded-full z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(43,191,179,0.06) 0%, transparent 70%)' }} animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }} transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 3 }} />
      <div className="absolute inset-0 dot-grid z-0" />
      <div className="absolute inset-0 noise-overlay z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-20 items-center">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex items-center gap-2.5 mb-8">
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
              <span className="text-[13px]">🛡️</span>
              <span className="text-[12px] font-sans font-semibold text-turquoise-default tracking-wide uppercase">Arizona&apos;s Trusted Expert</span>
            </div>
            <div className="flex items-center gap-0.5">
              <span className="text-xs">⭐⭐⭐⭐⭐</span>
              <span className="text-[13px] font-sans text-text-muted ml-1.5">4.9/5</span>
            </div>
          </motion.div>

          <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-display font-extrabold text-text-headline leading-[1.06] tracking-[-0.04em] mb-7">
            {['Credit Repair Phoenix AZ —', "Let's Remove Every Item", 'Holding You Back.'].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span initial={{ y: '110%' }} animate={{ y: '0%' }} transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }} className={`block ${i === 2 ? 'text-gradient-copper-turquoise' : ''}`}>{line}</motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="text-lg md:text-xl text-text-lifted leading-[1.7] mb-10 font-sans max-w-xl">
            State 48 Credit helps Arizona residents remove negative items from their credit reports, raise their scores by an average of 150+ points, and finally get approved for the home, car, or life they deserve — with flat-fee pricing, no monthly billing, and a 100% money-back guarantee.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.85 }} className="flex flex-col sm:flex-row gap-4 mb-5">
            <Link href="/get-started" className="btn-primary text-lg">Get My Free Credit Analysis ↗</Link>
            <Link href="/how-it-works" className="btn-secondary text-lg">See How It Works First</Link>
          </motion.div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1 }} className="text-sm text-text-muted font-sans mb-14">
            Free to start. No commitment. No credit card. Results as fast as 14 days.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.1 }} className="flex gap-8 md:gap-12 pt-8 border-t border-border-default flex-wrap">
            {[{ e:'📅',v:'15',l:'Years' },{ e:'👥',v:'2,041',l:'Clients' },{ e:'🗑️',v:'15,892',l:'Items Deleted' },{ e:'💰',v:'$20M+',l:'Debt Removed' }].map((s,i) => (
              <div key={i}><p className="text-xs mb-1">{s.e}</p><p className="text-2xl md:text-3xl font-display font-extrabold text-text-headline tracking-tight">{s.v}</p><p className="text-xs font-sans text-text-muted uppercase tracking-[0.12em] mt-1">{s.l}</p></div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="relative hidden lg:block">
          <div className="absolute -inset-12 bg-gradient-to-br from-copper-default/8 via-transparent to-turquoise-default/5 blur-3xl rounded-full pointer-events-none" />
          <CreditScoreArc />
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: [0, -8, 0] }} transition={{ opacity: { duration: 0.5, delay: 2 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 } }} className="absolute -bottom-4 -left-8 glass-panel rounded-2xl px-5 py-3.5 flex items-center gap-3 z-20">
            <div className="flex -space-x-2">
              {['#C4622D','#2BBFB3','#D9A441'].map((c,i) => <div key={i} className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-[10px] font-bold text-text-headline" style={{ backgroundColor: c+'30', borderColor:'#272219' }}>{['M','D','J'][i]}</div>)}
            </div>
            <div><span className="text-[10px]">⭐⭐⭐⭐⭐</span><p className="text-xs font-sans font-semibold text-text-secondary">2,041 happy clients</p></div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] font-sans text-text-muted uppercase tracking-[0.15em]">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <span className="text-text-muted text-lg">▾</span>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
