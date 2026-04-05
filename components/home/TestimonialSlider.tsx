'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const testimonials = [
  { text: "I had been denied for a mortgage twice before I found State 48 Credit. In 67 days, they removed 11 negative items and my score jumped 178 points. I closed on my first home in Phoenix two months later — something I honestly thought would never happen for me.", author: "Maria T.", location: "Phoenix, AZ", result: "+178 Points · 11 Items Removed · First Home" },
  { text: "I tried disputing things on my own for almost a year and got absolutely nowhere. State 48 removed 8 collections and 3 late payments in under 60 days. The difference in what I can qualify for now is something I genuinely can't put into words.", author: "David R.", location: "Mesa, AZ", result: "+143 Points · 11 Items Removed in 58 Days" },
  { text: "Someone stole my identity and opened 14 accounts in my name. My score was at 491. Robert and his team challenged and removed every single fraudulent item. My score is now 724. I can't explain what that means for my family's future.", author: "Jessica M.", location: "Chandler, AZ", result: "491 → 724 · 14 Fraudulent Items Removed" },
];

export function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);
  useEffect(() => { const t = setInterval(() => { setDir(1); setIdx(p => (p + 1) % testimonials.length); }, 7000); return () => clearInterval(t); }, []);
  const go = (d: number) => { setDir(d); setIdx(p => (p + d + testimonials.length) % testimonials.length); };
  const variants = { enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }), center: { x: 0, opacity: 1 }, exit: (d: number) => ({ x: d < 0 ? 60 : -60, opacity: 0 }) };

  return (
    <section className="py-28 bg-alt-bg relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-copper-default/[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">Real Results</span>
            <h2 className="text-4xl md:text-[3.5rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em]">Real Results. Real People. <span className="text-copper-default">Real Arizona.</span></h2>
            <p className="text-base text-text-lifted font-sans mt-4">47 Arizona residents started rebuilding their credit with State 48 this month.</p>
          </motion.div>
        </div>
        <div className="relative min-h-[340px] md:min-h-[280px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div key={idx} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 250, damping: 28 }, opacity: { duration: 0.2 } }} className="absolute w-full text-center px-4 md:px-16">
              <div className="text-[72px] leading-none -mb-8 select-none opacity-10">❝</div>
              <div className="flex items-center justify-center gap-1 mb-6"><span className="text-sm">⭐⭐⭐⭐⭐</span></div>
              <p className="text-xl md:text-2xl font-sans font-medium text-text-headline leading-[1.6] mb-10">&ldquo;{testimonials[idx].text}&rdquo;</p>
              <p className="text-base font-display font-bold text-text-headline">{testimonials[idx].author}</p>
              <p className="text-sm font-sans text-text-muted mb-2">{testimonials[idx].location}</p>
              <span className="inline-block px-4 py-1.5 bg-turquoise-default/[0.08] border border-turquoise-default/15 text-turquoise-default text-xs font-sans font-semibold rounded-full uppercase tracking-wider">{testimonials[idx].result}</span>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => go(-1)} className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-2 border-copper-default/30 flex items-center justify-center text-copper-default hover:bg-copper-default hover:text-background hover:border-copper-default transition-all duration-200 z-20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] text-xl">‹</button>
          <button onClick={() => go(1)} className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-2 border-copper-default/30 flex items-center justify-center text-copper-default hover:bg-copper-default hover:text-background hover:border-copper-default transition-all duration-200 z-20 shadow-[0_4px_16px_rgba(0,0,0,0.3)] text-xl">›</button>
        </div>
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (<button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-copper-default w-8' : 'bg-border-default w-1.5 hover:bg-text-muted'}`} aria-label={`Testimonial ${i + 1}`} />))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/results" className="inline-flex items-center gap-2 text-turquoise-default font-sans font-semibold hover:text-turquoise-hover transition-colors text-base">View credit repair results from real Arizona clients →</Link>
        </div>
      </div>
    </section>
  );
}
