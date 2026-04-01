'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / 2200, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * to));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [inView, to]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 15, suffix: '+', label: 'Years in Business', sub: 'Since 2010' },
  { value: 2041, suffix: '', label: 'Arizona Clients', sub: 'And counting' },
  { value: 15892, suffix: '', label: 'Items Deleted', sub: 'Across all three bureaus' },
  { value: 90, suffix: '', label: 'Day Guarantee', sub: 'Money-back, no questions' },
];

export function AnimatedStats() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-divider" />
      <div className="py-24 md:py-28 bg-sunken relative noise-overlay">
        {/* Subtle ambient copper glow behind stats */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-copper-default/[0.04] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center p-8 rounded-2xl bg-card/50 border border-copper-default/10 hover:border-copper-default/25 transition-all duration-300 relative group"
              >
                {/* Glow behind number on hover */}
                <div className="absolute inset-0 rounded-2xl bg-copper-default/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <div className="text-[clamp(2.8rem,5vw,4rem)] font-display font-extrabold text-copper-default tracking-[-0.04em] leading-none mb-3 drop-shadow-[0_0_20px_rgba(196,98,45,0.15)]">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                </motion.div>
                <div className="text-[12px] font-sans font-bold text-text-headline uppercase tracking-[0.1em] mb-1 relative">{s.label}</div>
                <div className="text-[11px] font-sans text-text-muted relative">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
