'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowUpRight, Star, Shield, Zap } from 'lucide-react';
import { CreditScoreArc } from './CreditScoreArc';

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center pt-24 pb-20 overflow-hidden">
      {/* ─── ATMOSPHERIC BACKGROUND ─── */}
      <div className="absolute inset-0 bg-hero-gradient z-0" />

      {/* Animated warm orb */}
      <motion.div
        className="absolute top-[-15%] left-[-5%] w-[55%] h-[55%] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(196,98,45,0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, 40, 0], y: [0, 25, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      {/* Cool orb */}
      <motion.div
        className="absolute bottom-[-20%] right-[-8%] w-[45%] h-[45%] rounded-full z-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(43,191,179,0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear", delay: 3 }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid z-0" />
      {/* Noise */}
      <div className="absolute inset-0 noise-overlay z-0" />

      {/* ─── CONTENT ─── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-20 items-center">
        {/* Left: Copy */}
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
              <Shield size={13} className="text-turquoise-default" />
              <span className="text-[12px] font-sans font-semibold text-turquoise-default tracking-wide uppercase">Arizona&apos;s #1 Rated</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} size={13} className="text-copper-default fill-copper-default" />
              ))}
              <span className="text-[12px] font-sans text-text-muted ml-1.5">4.9/5</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,5.5vw,4.5rem)] font-display font-extrabold text-text-headline leading-[1.06] tracking-[-0.04em] mb-7"
          >
            Bad Credit Isn&apos;t the End
            <br />
            of Your Story.
            <br />
            <span className="text-gradient-copper-turquoise">Let&apos;s Rewrite It.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-text-lifted leading-[1.65] mb-10 font-sans font-normal max-w-xl"
          >
            State 48 Credit helps Arizona residents remove collections, repossessions, foreclosures, bankruptcies, and more — so you can finally buy the home, get the car, and build the life you deserve.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-5"
          >
            <Link href="/get-started" className="btn-primary text-lg group">
              Get My Free Credit Analysis
              <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link href="/how-it-works" className="btn-secondary text-lg">
              See How It Works
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-[13px] text-text-muted font-sans flex items-center gap-2 mb-14"
          >
            <Zap size={12} className="text-copper-default" />
            Free to start · No obligation · No pressure
          </motion.p>

          {/* Trust Metrics — editorial layout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-12 pt-8 border-t border-white/[0.06]"
          >
            <div>
              <p className="text-3xl font-display font-extrabold text-text-headline tracking-tight">2,041</p>
              <p className="text-[11px] font-sans text-text-muted uppercase tracking-[0.12em] mt-1">Arizona Clients</p>
            </div>
            <div>
              <p className="text-3xl font-display font-extrabold text-text-headline tracking-tight">15,892</p>
              <p className="text-[11px] font-sans text-text-muted uppercase tracking-[0.12em] mt-1">Items Deleted</p>
            </div>
            <div>
              <p className="text-3xl font-display font-extrabold text-text-headline tracking-tight">15+</p>
              <p className="text-[11px] font-sans text-text-muted uppercase tracking-[0.12em] mt-1">Years Experience</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Credit Score Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:block"
        >
          {/* Ambient glow behind widget */}
          <div className="absolute -inset-12 bg-gradient-to-br from-copper-default/8 via-transparent to-turquoise-default/5 blur-3xl rounded-full pointer-events-none" />
          <CreditScoreArc />
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
