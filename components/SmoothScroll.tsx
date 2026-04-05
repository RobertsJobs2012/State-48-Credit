'use client';

import { ReactLenis } from 'lenis/react';
import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerSnapshot() {
  return true; // Default to true for safety during SSR
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const isReducedMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Only enable Lenis if not preferring reduced motion
  if (isReducedMotion) {
    return <>{children}</>;
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
