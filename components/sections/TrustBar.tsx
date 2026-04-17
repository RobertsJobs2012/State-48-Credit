import { Icon } from "@/components/Icon";

const items = [
  { icon: "shield", label: "FCRA compliant" },
  { icon: "award", label: "Arizona licensed" },
  { icon: "lock", label: "SSL secured" },
  { icon: "users", label: "2,041 clients served" },
  { icon: "star", label: "4.9★ average rating" },
  { icon: "heart", label: "Founded 2010" },
] as const;

export function TrustBar() {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-surface-sunken)] py-5">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {items.map((it) => (
            <span
              key={it.label}
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
            >
              <Icon name={it.icon} size={16} className="text-[var(--color-turquoise)]" />
              {it.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
