import Link from "next/link";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
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
      className="scroll-mt-section border-t border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11"
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
                className="inline-flex items-center gap-2 text-[#1A2D48] font-semibold hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                {label}
                <span className="text-[#10B981]" aria-hidden>
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
