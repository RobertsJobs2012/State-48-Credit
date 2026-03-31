'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { X } from 'lucide-react';
import Link from 'next/link';

const items = [
  "Now accepting new Arizona clients",
  "Free credit consultation — limited spots available",
  "90-day money-back guarantee on all plans",
  "15,892 negative items deleted and counting",
  "Rated 4.9/5 by 2,041 Arizona residents",
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
      {/* Bottom gradient divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-default/25 to-transparent" />

      <div className="bg-[#1B1714] relative overflow-hidden">
        <div className="py-2.5 relative">
          {/* Marquee track */}
          <div className="flex overflow-hidden">
            <div className="flex shrink-0 animate-[marquee_45s_linear_infinite] gap-0">
              {[...items, ...items, ...items].map((text, i) => (
                <div key={i} className="flex items-center shrink-0 px-2">
                  <span className="text-[11px] font-sans font-semibold text-text-secondary uppercase tracking-[0.12em]">
                    {text}
                  </span>
                  <span className="mx-6 w-1 h-1 rounded-full bg-copper-default/40 shrink-0" />
                </div>
              ))}
            </div>
            <div className="flex shrink-0 animate-[marquee_45s_linear_infinite] gap-0" aria-hidden>
              {[...items, ...items, ...items].map((text, i) => (
                <div key={`d-${i}`} className="flex items-center shrink-0 px-2">
                  <span className="text-[11px] font-sans font-semibold text-text-secondary uppercase tracking-[0.12em]">
                    {text}
                  </span>
                  <span className="mx-6 w-1 h-1 rounded-full bg-copper-default/40 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Close button */}
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
