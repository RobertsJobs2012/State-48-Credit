'use client';

import dynamic from 'next/dynamic';

const SmoothScroll = dynamic(
  () => import('@/components/SmoothScroll').then(m => ({ default: m.SmoothScroll })),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import('@/components/CustomCursor').then(m => ({ default: m.CustomCursor })),
  { ssr: false }
);

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <SmoothScroll>
        {children}
      </SmoothScroll>
    </>
  );
}
