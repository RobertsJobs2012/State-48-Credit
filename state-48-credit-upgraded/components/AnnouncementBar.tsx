'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles } from 'lucide-react';
import Link from 'next/link';

const messages = [
  "Now accepting new Arizona clients",
  "Free credit consultation — limited spots",
  "Start rebuilding your credit today"
];

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="relative z-50 overflow-hidden">
      {/* Gradient line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-copper-default/30 to-transparent" />
      
      <div className="bg-[#110E0C] relative">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center relative min-h-[36px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2 text-text-secondary text-[13px] font-sans font-medium text-center"
            >
              <Sparkles size={12} className="text-copper-default" />
              {messages[currentIndex]}
              <Link href="/get-started" className="text-copper-default hover:text-copper-hover transition-colors ml-1 underline underline-offset-2 decoration-copper-default/40">
                Claim yours free →
              </Link>
            </motion.div>
          </AnimatePresence>
          
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-6 text-text-muted hover:text-text-secondary transition-colors p-1"
            aria-label="Dismiss announcement"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
