import Link from "next/link";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-brand text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-terracotta" aria-hidden />
      {sub && <p className="mt-1 text-muted-foreground text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export type RelatedPosResourceItem = { label: string; href: string };

type RelatedPosResourcesProps = {
  items: readonly { label: string; href: string }[];
  excludeHref?: string;
};

export function RelatedPosResources({ items, excludeHref }: RelatedPosResourcesProps) {
  const filtered = excludeHref ? items.filter((item) => item.href !== excludeHref) : [...items];

  return (
    <section
      id="related-resources"
      className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub="More ways to explore POS software.">
          Related POS Resources
        </SectionTitle>
        <ul className="mt-4 space-y-3">
          {filtered.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-brand font-semibold hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
              >
                {label}
                <span className="text-indigo" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
