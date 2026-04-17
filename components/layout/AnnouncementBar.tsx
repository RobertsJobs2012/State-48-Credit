import Link from "next/link";
import { Icon } from "@/components/Icon";

export function AnnouncementBar() {
  return (
    <div
      role="region"
      aria-label="Site announcement"
      className="announcement-bar-bg relative z-50 border-b border-[var(--color-border)] text-[var(--color-text-lifted)]"
    >
      <div className="container-page flex items-center justify-center gap-3 py-2 text-[13px] sm:text-sm">
        <span
          aria-hidden="true"
          className="inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-success)] shadow-[0_0_12px_var(--color-success)]"
        />
        <span className="hidden sm:inline">
          Booking free credit audits this week —
        </span>
        <Link
          href="/get-started"
          className="inline-flex items-center gap-1 font-semibold text-[var(--color-turquoise-hover)] hover:text-[var(--color-turquoise)]"
        >
          claim your spot
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>
    </div>
  );
}
