import Link from "next/link";
import type { ReactNode } from "react";
import { sectionRuleAccent } from "@/lib/design-tokens";

function HubSectionTitle({ children, sub }: { children: ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>
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

const HUB_GUIDES_PREVIEW_CAP = 6;

const guidesIndexLinkClass =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function inferCategoryGuidesIndexHref(guides: readonly HubGuideCardItem[]): string | undefined {
  for (const guide of guides) {
    const match = guide.href.match(/^(\/[\w-]+\/guides)(?:\/|$)/);
    if (match) return match[1];
  }
  return undefined;
}

/**
 * Educational / informational guides grid (matches refined field-service hub pattern).
 * Hub hubs show a preview of the first 6 items; full lists stay on the category guides index.
 */
export function HubGuidesGrid({ sectionTitle, sectionSub, intro, guides, footer }: HubGuidesGridProps) {
  const previewGuides = guides.slice(0, HUB_GUIDES_PREVIEW_CAP);
  const guidesIndexHref = inferCategoryGuidesIndexHref(guides);
  const allGuidesLabel = `View all ${sectionTitle.toLowerCase()} →`;

  return (
    <>
      <HubSectionTitle sub={sectionSub}>{sectionTitle}</HubSectionTitle>
      <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#57534E]">{intro}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {previewGuides.map((guide) => (
          <Link
            key={guide.slug ?? guide.href}
            href={guide.href}
            className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Guide</span>
            <h3 className="mt-1 text-lg font-bold text-[#1A2D48] group-hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-[#57534E]">{guide.description}</p>
            <span className="mt-3 text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
          </Link>
        ))}
      </div>
      {guidesIndexHref != null && (
        <p className="mt-4 text-sm">
          <Link href={guidesIndexHref} className={guidesIndexLinkClass}>
            {allGuidesLabel}
          </Link>
        </p>
      )}
      {footer != null && <div className="mt-4 text-sm text-[#57534E]">{footer}</div>}
    </>
  );
}
