import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="State 48 Credit — home"
      className="group inline-flex items-center gap-2.5"
    >
      <span
        aria-hidden="true"
        className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-copper)] to-[var(--color-copper-pressed)] shadow-[0_6px_18px_var(--color-copper-glow)] transition-transform duration-300 group-hover:rotate-3"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2l3.5 2v4l3.5 2v6l-3.5 2v4L12 24l-3.5-2v-4L5 16v-6l3.5-2V4L12 2z"
            opacity="0.95"
          />
          <text x="12" y="15" textAnchor="middle" fill="#141210" fontSize="8" fontWeight="900" fontFamily="sans-serif">
            48
          </text>
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="text-[15px] font-bold tracking-tight text-[var(--color-text-headline)]">
            State 48
          </span>
          <span className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Credit
          </span>
        </span>
      )}
    </Link>
  );
}
