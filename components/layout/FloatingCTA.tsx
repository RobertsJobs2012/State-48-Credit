"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icon";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-5 left-1/2 z-30 -translate-x-1/2 transition-all duration-300 sm:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0 pointer-events-none"
      }`}
    >
      <Link
        href="/get-started"
        className="btn btn-copper shadow-[0_12px_32px_var(--color-copper-glow)]"
      >
        <Icon name="zap" size={16} /> Free Credit Audit
      </Link>
    </div>
  );
}
