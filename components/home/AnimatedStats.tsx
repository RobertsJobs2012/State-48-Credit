'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);
  useEffect(() => { if (!inView) return; let s: number | null = null; const step = (ts: number) => { if (!s) s = ts; const p = Math.min((ts - s) / 2200, 1); setCount(Math.floor((1 - Math.pow(1 - p, 4)) * to)); if (p < 1) window.requestAnimationFrame(step); }; window.requestAnimationFrame(step); }, [inView, to]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { value: 15, suffix: '+', label: 'Years Since 2010', sub: "Arizona's trusted expert", emoji: '📅' },
  { value: 2041, suffix: '', label: 'Arizona Clients', sub: 'Phoenix to Tucson', emoji: '👥' },
  { value: 15892, suffix: '', label: 'Items Deleted', sub: 'All three bureaus', emoji: '🗑️' },
  { value: 20, suffix: 'M+', label: 'Debt Removed', sub: '$20,437,068 and counting', emoji: '💰' },
];

export function AnimatedStats() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-divider" />
      <div className="py-24 md:py-28 bg-sunken relative noise-overlay">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-copper-default/[0.04] blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center p-6 md:p-8 rounded-2xl gradient-border-card shimmer hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                <div className="absolute inset-0 rounded-2xl bg-copper-default/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-2xl mb-3">{s.emoji}</div>
                <div className="text-[clamp(2rem,8vw,4.5rem)] font-display font-extrabold text-copper-default tracking-[-0.04em] leading-none mb-3 drop-shadow-[0_0_20px_rgba(196,98,45,0.15)] relative">
                  {s.suffix === 'M+' ? <><span>$</span><Counter to={s.value} suffix={s.suffix} /></> : <Counter to={s.value} suffix={s.suffix} />}
                </div>
                <div className="text-sm font-sans font-bold text-text-headline uppercase tracking-[0.1em] mb-1 relative">{s.label}</div>
                <div className="text-xs font-sans text-text-muted relative">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
