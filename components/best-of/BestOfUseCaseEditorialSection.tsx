import Link from "next/link";
import type { ReactNode } from "react";
import type { ResolvedUseCaseEditorial } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";

function SectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

const linkClass =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const defaultSectionClassName =
  "scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11";

type Props = {
  /** e.g. "payroll software" → H2 "Best payroll software by use case" */
  headingCategoryLabel: string;
  sectionSub?: string;
  items: ResolvedUseCaseEditorial[];
  sectionId?: string;
  /** Match alternating section backgrounds on some best-of pages (default white). */
  sectionClassName?: string;
};

/**
 * Editorial "best [category] by use case" blocks for best-of roundup pages.
 * Renders nothing if `items` is empty.
 */
export function BestOfUseCaseEditorialSection({
  headingCategoryLabel,
  sectionSub,
  items,
  sectionId = "by-use-case",
  sectionClassName = defaultSectionClassName,
}: Props) {
  if (items.length === 0) return null;

  return (
    <section id={sectionId} className={sectionClassName}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub={sectionSub}>Best {headingCategoryLabel} by use case</SectionTitle>
        <div className="mt-6 max-w-3xl space-y-10">
          {items.map((item) => (
            <div key={item.href}>
              <h3 className="text-lg font-bold text-[#1A2D48] sm:text-xl">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6E6E6E] sm:text-base">{item.paragraph}</p>
              <p className="mt-4">
                <Link href={item.href} className={`text-sm ${linkClass}`}>
                  {item.ctaLabel} →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
