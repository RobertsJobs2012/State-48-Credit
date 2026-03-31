'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "I was denied a mortgage because of an old collection I didn't even know about. State 48 Credit got it removed in 45 days. We close on our house next week.",
    author: "Michael T.",
    location: "Phoenix, AZ",
    result: "Score increased 85 points",
  },
  {
    text: "After my divorce, my credit was a disaster. I thought it would take 7 years to fix. They removed 12 negative items in the first 3 months.",
    author: "Sarah J.",
    location: "Scottsdale, AZ",
    result: "Removed 12 negative items",
  },
  {
    text: "I was paying 18% interest on my car loan. After working with State 48, I refinanced at 5%. They saved me thousands of dollars.",
    author: "David R.",
    location: "Mesa, AZ",
    result: "Refinanced auto loan at 5%",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d: number) => ({ x: d < 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
  };

  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-alt-bg" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-copper-default/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[12px] font-sans font-semibold text-copper-default uppercase tracking-[0.15em] mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-[3.4rem] font-display font-extrabold text-text-headline leading-[1.08] tracking-[-0.035em]">
              Real People. <span className="text-copper-default">Real Results.</span>
            </h2>
          </motion.div>
        </div>

        {/* Slider */}
        <div className="relative min-h-[320px] md:min-h-[260px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 250, damping: 28 },
                opacity: { duration: 0.25 },
                scale: { duration: 0.3 },
              }}
              className="absolute w-full"
            >
              <div className="text-center px-4 md:px-12">
                {/* Quote mark */}
                <div className="text-[80px] font-display font-extrabold text-copper-default/10 leading-none -mb-10 select-none">&ldquo;</div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={16} className="text-copper-default fill-copper-default" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl md:text-2xl font-sans font-medium text-text-headline leading-[1.6] mb-10">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex flex-col items-center gap-2">
                  <p className="text-[15px] font-display font-bold text-text-headline">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-[13px] font-sans text-text-muted">
                    {testimonials[currentIndex].location}
                  </p>
                  <span className="inline-block px-4 py-1.5 bg-turquoise-default/[0.08] border border-turquoise-default/15 text-turquoise-default text-[11px] font-sans font-semibold rounded-full uppercase tracking-wider mt-1">
                    {testimonials[currentIndex].result}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-elevated/60 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-text-headline hover:border-white/[0.1] transition-all z-20"
            onClick={() => paginate(-1)}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-elevated/60 backdrop-blur-sm border border-white/[0.06] flex items-center justify-center text-text-muted hover:text-text-headline hover:border-white/[0.1] transition-all z-20"
            onClick={() => paginate(1)}
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2.5 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i === currentIndex ? 'bg-copper-default w-8' : 'bg-white/[0.1] w-1.5 hover:bg-white/[0.2]'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
