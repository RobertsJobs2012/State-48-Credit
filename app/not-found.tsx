import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-narrow text-center">
        <span className="eyebrow">404</span>
        <h1 className="mt-4">This page took a detour.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-[var(--color-text-secondary)]">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get you back on the path to clean credit.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-copper">
            Back to home <Icon name="arrow-right" size={14} />
          </Link>
          <Link href="/get-started" className="btn btn-ghost">
            Start a free audit
          </Link>
        </div>
      </div>
    </section>
  );
}
