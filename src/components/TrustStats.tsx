import { trustHighlights } from "@/data/site";

export function TrustStats() {
  return (
    <section className="border-y border-border/60 section-atmosphere-alt" aria-label="Business highlights">
      <div className="container-page grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        {trustHighlights.map((item) => (
          <div key={item.label} className="card-highlight bg-card/80 px-4 py-8 text-center backdrop-blur-sm sm:px-6 sm:py-10">
            <p className="font-[family-name:var(--font-display)] text-[clamp(1.15rem,2.4vw,1.65rem)] font-bold tracking-tight text-navy">
              {item.value}
            </p>
            <p className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
