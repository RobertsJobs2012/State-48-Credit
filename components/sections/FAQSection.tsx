import { faq } from "@/lib/site";

export function FAQSection({ title = "Questions, answered." }: { title?: string }) {
  return (
    <section className="section" id="faq">
      <div className="container-narrow">
        <div className="max-w-2xl">
          <span className="eyebrow">FAQ</span>
          <h2 className="mt-3">{title}</h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
            Straight answers. If you don&apos;t see yours here, text Robert directly.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {faq.map((f, i) => (
            <details
              key={f.q}
              className="group py-5 [&_summary::-webkit-details-marker]:hidden"
              name="faq"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <h3 className="text-lg font-semibold leading-snug text-[var(--color-text-headline)] transition-colors group-hover:text-[var(--color-turquoise-hover)]">
                  {f.q}
                </h3>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-strong)] text-[var(--color-text-muted)] transition-transform group-open:rotate-45 group-open:border-[var(--color-copper)] group-open:text-[var(--color-copper-hover)]"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-[15.5px] leading-relaxed text-[var(--color-text-secondary)]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
