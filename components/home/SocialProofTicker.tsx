'use client';

const reviews = [
  { name: "Maria T.", location: "Phoenix", text: "They removed 11 negative items and my score jumped 178 points. I closed on my first home!" },
  { name: "David R.", location: "Mesa", text: "State 48 removed 8 collections and 3 late payments in under 60 days. Life-changing." },
  { name: "Jessica M.", location: "Chandler", text: "Someone stole my identity. State 48 removed every single fraudulent item. Score went from 491 to 724." },
  { name: "Carlos V.", location: "Glendale", text: "I was denied for a car loan three times. State 48 removed everything. Drove off the lot two months later." },
  { name: "Priya N.", location: "Scottsdale", text: "After my divorce, Robert was honest from day one and delivered on every promise. Score is now 711." },
];

export function SocialProofTicker() {
  const q = [...reviews, ...reviews, ...reviews, ...reviews];
  return (
    <div className="relative w-full overflow-hidden bg-sunken border-y border-border-default py-4">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-sunken to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-sunken to-transparent z-10 pointer-events-none" />
      <div className="flex animate-[scroll_35s_linear_infinite] hover:[animation-play-state:paused]">
        {q.map((r, i) => (
          <div key={i} className="flex items-center gap-3 text-sm whitespace-nowrap px-2 shrink-0">
            <span className="text-xs">⭐⭐⭐⭐⭐</span>
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
