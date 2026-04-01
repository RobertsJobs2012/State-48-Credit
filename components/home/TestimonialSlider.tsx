'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { text: "I was denied a mortgage because of an old collection I didn't even know about. State 48 Credit got it removed in 45 days. We close on our house next week.", author: "Michael T.", location: "Phoenix, AZ", result: "Score increased 85 points" },
  { text: "After my divorce, my credit was a disaster. I thought it would take 7 years to fix. They removed 12 negative items in the first 3 months.", author: "Sarah J.", location: "Scottsdale, AZ", result: "Removed 12 negative items" },
  { text: "I was paying 18% interest on my car loan. After working with State 48, I refinanced at 5%. They saved me thousands of dollars.", author: "David R.", location: "Mesa, AZ", result: "Refinanced auto loan at 5%" },
];

export function TestimonialSlider() {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(0);

  useEffect(() => {
    const t = setInterval(() => { setDir(1); setIdx(p => (p + 1) % testimonials.length); }, 7000);
    return () => clearInterval(t);
  }, []);

  const go = (d: number) => { setDir(d); setIdx(p => (p + d + testimonials.length) % testimonials.length); };
  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 60 : -60, opacity: 0 }),
  };

  return (
    <section className="py-28 bg-alt-bg relative overflow-hidden noise-overlay">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-copper-default/[0.03] blur-[100px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-[11px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-[3.2rem] font-display font-extrabold leading-[1.08] tracking-[-0.035em]">
              Real People. <span className="text-copper-default">Real Results.</span>
            </h2>
          </motion.div>
        </div>

        <div className="relative min-h-[300px] md:min-h-[240px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={dir} mode="wait">
            <motion.div key={idx} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 250, damping: 28 }, opacity: { duration: 0.2 } }} className="absolute w-full text-center px-4 md:px-16">
              <div className="text-[72px] font-display font-extrabold text-copper-default/10 leading-none -mb-8 select-none">&ldquo;</div>
              <div className="flex items-center justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-copper-default fill-copper-default" />)}
              </div>
              <p className="text-xl md:text-2xl font-sans font-medium text-text-headline leading-[1.6] mb-10">&ldquo;{testimonials[idx].text}&rdquo;</p>
              <p className="text-[15px] font-display font-bold text-text-headline">{testimonials[idx].author}</p>
              <p className="text-[13px] font-sans text-text-muted mb-2">{testimonials[idx].location}</p>
              <span className="inline-block px-4 py-1.5 bg-turquoise-default/[0.08] border border-turquoise-default/15 text-turquoise-default text-[11px] font-sans font-semibold rounded-full uppercase tracking-wider">{testimonials[idx].result}</span>
            </motion.div>
          </AnimatePresence>

          {/* Arrows — copper border, clearly visible */}
          <button
            onClick={() => go(-1)}
            className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-2 border-copper-default/30 flex items-center justify-center text-copper-default hover:bg-copper-default hover:text-background hover:border-copper-default transition-all duration-200 z-20 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border-2 border-copper-default/30 flex items-center justify-center text-copper-default hover:bg-copper-default hover:text-background hover:border-copper-default transition-all duration-200 z-20 shadow-[0_4px_16px_rgba(0,0,0,0.3)]"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }} className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? 'bg-copper-default w-8' : 'bg-border-default w-1.5 hover:bg-text-muted'}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
