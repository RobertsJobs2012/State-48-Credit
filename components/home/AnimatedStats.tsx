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
      <div className="py-20 md:py-24 bg-sunken relative noise-overlay">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-border-default">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }} className="text-center lg:px-10">
                <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-extrabold text-copper-default tracking-[-0.04em] leading-none mb-2">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-[12px] font-sans font-semibold text-text-headline uppercase tracking-[0.08em] mb-1">{s.label}</div>
                <div className="text-[11px] font-sans text-text-muted">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
