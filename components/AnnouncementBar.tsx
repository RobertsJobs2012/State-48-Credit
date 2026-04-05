'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { X } from 'lucide-react';

const items = [
  "🔥 Limited Spots This Week — Free Credit Analysis",
  "No Obligation — Call (602) 377-6626 or Book Online Now",
  "Flat-Fee Pricing — No Monthly Billing — 100% Money-Back Guarantee",
  "15,892 Negative Items Deleted Across Arizona Since 2010",
  "⭐ 4.9 Stars — 312 Google Reviews",
];

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsCollapsed(latest > 50);
  });

  if (!isVisible) return null;

  return (
    <motion.div
      animate={{ height: isCollapsed ? 0 : 'auto', opacity: isCollapsed ? 0 : 1 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-50 overflow-hidden"
    >
      {/* Bottom glow line — copper gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-default/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-copper-default/15 to-transparent blur-sm" />

      <div className="bg-gradient-to-r from-[#1E1712] via-[#211914] to-[#1E1712] relative overflow-hidden">
        {/* Subtle ambient shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-copper-default/[0.04] to-transparent animate-pulse" style={{ animationDuration: '4s' }} />

        <div className="py-3 relative">
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-[marquee_80s_linear_infinite] gap-0">
              {[...items, ...items, ...items].map((text, i) => (
                <div key={i} className="flex items-center shrink-0 px-2">
                  <span className="text-[11px] font-sans font-bold text-text-lifted uppercase tracking-[0.14em]">
                    {text}
                  </span>
                  <span className="mx-8 w-1.5 h-1.5 rounded-full bg-copper-default/50 shrink-0" />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-[marquee_80s_linear_infinite] gap-0" aria-hidden>
              {[...items, ...items, ...items].map((text, i) => (
                <div key={`d-${i}`} className="flex items-center shrink-0 px-2">
                  <span className="text-[11px] font-sans font-bold text-text-lifted uppercase tracking-[0.14em]">
                    {text}
                  </span>
                  <span className="mx-8 w-1.5 h-1.5 rounded-full bg-copper-default/50 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-secondary transition-colors p-1 z-10"
            aria-label="Dismiss"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </motion.div>
  );
}
