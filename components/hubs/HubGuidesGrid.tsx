import Link from "next/link";
import type { ReactNode } from "react";

function HubSectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

export type HubGuideCardItem = {
  title: string;
  href: string;
  description: string;
  slug?: string;
};

export type HubGuidesGridProps = {
  sectionTitle: string;
  sectionSub: string;
  intro: ReactNode;
  guides: readonly HubGuideCardItem[];
  footer?: ReactNode;
};

/**
 * Educational / informational guides grid (matches refined field-service hub pattern).
 */
export function HubGuidesGrid({ sectionTitle, sectionSub, intro, guides, footer }: HubGuidesGridProps) {
  return (
    <>
      <HubSectionTitle sub={sectionSub}>{sectionTitle}</HubSectionTitle>
      <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#6E6E6E]">{intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.slug ?? guide.href}
            href={guide.href}
            className="group flex flex-col rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[#6E6E6E]">Guide</span>
            <h3 className="mt-1 text-lg font-bold text-[#1A2D48] group-hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-[#6E6E6E]">{guide.description}</p>
            <span className="mt-3 text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
          </Link>
        ))}
      </div>
      {footer != null && <div className="mt-4 text-sm text-[#6E6E6E]">{footer}</div>}
    </>
  );
}
