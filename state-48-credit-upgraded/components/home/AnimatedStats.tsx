'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function AnimatedCounter({ from, to, duration = 2.2, suffix = '' }: { from: number; to: number; duration?: number; suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-60px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / (duration * 1000), 1);
        // Ease-out expo
        const eased = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(eased * (to - from) + from));
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 15, suffix: '+', label: 'Years in Business', sublabel: 'Since 2010' },
  { value: 2041, suffix: '', label: 'Arizona Clients', sublabel: 'And counting' },
  { value: 15892, suffix: '', label: 'Items Deleted', sublabel: 'Across all three bureaus' },
  { value: 90, suffix: '', label: 'Day Guarantee', sublabel: 'Money-back, no questions' },
];

export function AnimatedStats() {
  return (
    <section className="relative overflow-hidden">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="py-20 md:py-24 relative">
        <div className="absolute inset-0 bg-sunken" />
        <div className="absolute inset-0 noise-overlay" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.05]">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-center lg:px-10"
              >
                <div className="text-[clamp(2.5rem,4vw,3.5rem)] font-display font-extrabold text-copper-default tracking-[-0.04em] leading-none mb-2">
                  <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-[13px] font-sans font-semibold text-text-headline uppercase tracking-[0.08em] mb-1">
                  {stat.label}
                </div>
                <div className="text-[12px] font-sans text-text-muted">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="section-divider" />
    </section>
  );
}
