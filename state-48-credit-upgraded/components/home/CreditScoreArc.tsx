'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { TrendingUp, ShieldCheck } from 'lucide-react';

export function CreditScoreArc() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [score, setScore] = useState(520);
  const targetScore = 740;

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(() => {
      let current = 520;
      const interval = setInterval(() => {
        current += 4;
        if (current >= targetScore) {
          current = targetScore;
          clearInterval(interval);
        }
        setScore(current);
      }, 18);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timer);
  }, [isInView]);

  const getScoreColor = (s: number) => {
    if (s < 580) return '#ef4444';
    if (s < 670) return '#f59e0b';
    if (s < 740) return '#22c55e';
    return '#059669';
  };

  const getScoreLabel = (s: number) => {
    if (s < 580) return 'Poor';
    if (s < 670) return 'Fair';
    if (s < 740) return 'Good';
    return 'Excellent';
  };

  const currentColor = getScoreColor(score);
  const percentage = ((score - 300) / (850 - 300)) * 100;
  const arcLength = 283 * 0.75; // 75% of circumference for the arc
  const filledLength = (arcLength * percentage) / 100;

  return (
    <div ref={ref} className="relative w-full max-w-[380px] mx-auto">
      <div className="glass-panel rounded-[28px] p-8 relative overflow-hidden">
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 opacity-[0.08] blur-[80px] pointer-events-none"
          animate={{ backgroundColor: currentColor }}
          transition={{ duration: 0.8 }}
        />

        <div className="relative z-10 flex flex-col items-center">
          {/* Header */}
          <div className="flex items-center gap-2 mb-8">
            <ShieldCheck size={16} className="text-turquoise-default" />
            <span className="text-[12px] font-sans font-semibold text-text-muted uppercase tracking-[0.1em]">Credit Score Simulator</span>
          </div>

          {/* Arc */}
          <div className="relative w-52 h-52 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              {/* Background arc */}
              <circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke="rgba(255,248,240,0.06)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${arcLength} ${283 - arcLength}`}
                transform="rotate(135 50 50)"
              />
              {/* Foreground arc */}
              <motion.circle
                cx="50" cy="50" r="45"
                fill="none"
                stroke={currentColor}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray={`${arcLength} ${283 - arcLength}`}
                initial={{ strokeDashoffset: arcLength }}
                animate={isInView ? { strokeDashoffset: arcLength - filledLength } : {}}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                transform="rotate(135 50 50)"
                style={{ filter: `drop-shadow(0 0 8px ${currentColor}50)` }}
              />
            </svg>

            <div className="text-center">
              <motion.div
                className="text-[56px] font-display font-extrabold text-text-headline tracking-[-0.04em] leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {score}
              </motion.div>
              <motion.div
                className="text-[11px] font-sans font-semibold uppercase tracking-[0.15em] mt-1"
                style={{ color: currentColor }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
              >
                {getScoreLabel(score)}
              </motion.div>
            </div>
          </div>

          {/* Score range */}
          <div className="w-full flex justify-between text-[10px] font-sans text-text-muted -mt-1 mb-6 px-2">
            <span>300</span>
            <span>850</span>
          </div>

          {/* Before / After cards */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-[#0C0A09]/60 rounded-2xl p-4 border border-white/[0.04]">
              <div className="text-[10px] font-sans text-text-muted uppercase tracking-wider mb-1.5">Before</div>
              <div className="text-2xl font-display font-bold text-status-error">520</div>
              <div className="text-[10px] font-sans text-text-muted mt-1">7 negative items</div>
            </div>
            <div className="bg-[#0C0A09]/60 rounded-2xl p-4 border border-turquoise-default/15">
              <div className="text-[10px] font-sans text-text-muted uppercase tracking-wider mb-1.5">After</div>
              <div className="text-2xl font-display font-bold text-status-success">740</div>
              <div className="flex items-center gap-1 mt-1">
                <TrendingUp size={10} className="text-turquoise-default" />
                <span className="text-[10px] font-sans text-turquoise-default font-semibold">+220 pts</span>
              </div>
            </div>
          </div>

          {/* Removed items ticker */}
          <div className="mt-4 w-full space-y-2">
            {['Collections removed', 'Hard inquiries cleared', 'Late payments deleted'].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 2 + i * 0.3, duration: 0.5 }}
                className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/[0.02] border border-white/[0.03]"
              >
                <span className="text-[12px] font-sans text-text-secondary">{item}</span>
                <span className="text-[11px] font-sans font-bold text-turquoise-default">✓ Done</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
