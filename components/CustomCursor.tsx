'use client';

// CSS-only custom cursor — zero JS event listeners, zero INP impact
// The cursor styling is applied via CSS on non-touch devices
export function CustomCursor() {
  return (
    <style jsx global>{`
      @media (pointer: fine) {
        body {
          cursor: default;
        }
        a, button, [role="button"], input[type="submit"], select, label[for] {
          cursor: pointer;
        }
      }
    `}</style>
  );
}
