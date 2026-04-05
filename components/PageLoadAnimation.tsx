'use client';

export function PageLoadAnimation({ children }: { children: React.ReactNode }) {
  // CSS-only animation — no JS gate, no opacity:0 blocking LCP
  return (
    <div className="animate-[pageIn_0.6s_ease-out_both]">
      {children}
      <style jsx>{`
        @keyframes pageIn {
          from { opacity: 0.85; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
