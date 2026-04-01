'use client';

import { Star } from 'lucide-react';

const reviews = [
  { name: "Sarah M.", location: "Phoenix", text: "Got my score up 120 points in 4 months. Finally approved for my mortgage!" },
  { name: "David L.", location: "Scottsdale", text: "Removed 3 collections I thought would be there forever. Life changing." },
  { name: "Jessica T.", location: "Mesa", text: "State 48 is the real deal. Transparent, fast, and they actually care." },
  { name: "Michael R.", location: "Chandler", text: "Got my dream car at 4% interest instead of 18%. Thank you guys!" },
  { name: "Amanda K.", location: "Gilbert", text: "Best decision I ever made for my financial future." },
];

export function SocialProofTicker() {
  const tripled = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <div className="relative w-full overflow-hidden bg-sunken border-y border-border-default py-4">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sunken to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sunken to-transparent z-10 pointer-events-none" />
      <div className="flex animate-[scroll_35s_linear_infinite] hover:[animation-play-state:paused]">
        {tripled.map((r, i) => (
          <div key={i} className="flex items-center gap-3 text-[13px] whitespace-nowrap px-2 shrink-0">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((s) => <Star key={s} size={11} className="text-copper-default fill-copper-default" />)}
            </div>
            <span className="text-text-headline font-sans font-semibold">&ldquo;{r.text}&rdquo;</span>
            <span className="text-text-muted font-sans">— {r.name}, {r.location}</span>
            <div className="w-1.5 h-1.5 rounded-full bg-copper-default/30 mx-5 shrink-0" />
          </div>
        ))}
      </div>
      <style jsx>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
