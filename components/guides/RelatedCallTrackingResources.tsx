import Link from "next/link";
import { getCallTrackingReviewUrl } from "@/lib/routes";

export type RelatedCallTrackingResourceItem = { label: string; href: string };

const DEFAULT_ITEMS: RelatedCallTrackingResourceItem[] = [
  { label: "Call tracking hub", href: "/call-tracking" },
  { label: "Best call tracking software", href: "/call-tracking/best-call-tracking-software" },
  { label: "Compare call tracking", href: "/call-tracking/compare" },
  { label: "Call tracking guides", href: "/call-tracking/guides" },
  { label: "Best call tracking by use case", href: "/call-tracking/best-for" },
  { label: "Best for contractors", href: "/call-tracking/best-for/contractors" },
  { label: "Best for small business", href: "/call-tracking/best-for/small-business" },
  { label: "How call tracking works", href: "/call-tracking/guides/how-call-tracking-works" },
  { label: "Call tracking for contractors", href: "/call-tracking/guides/call-tracking-for-contractors" },
  { label: "CallRail review", href: getCallTrackingReviewUrl("callrail") },
  { label: "WhatConverts review", href: getCallTrackingReviewUrl("whatconverts") },
  { label: "CallTrackingMetrics review", href: getCallTrackingReviewUrl("calltrackingmetrics") },
  { label: "Lead generation hub", href: "/lead-generation" },
  { label: "CRM software hub", href: "/crm" },
  { label: "SEO tools hub", href: "/seo-tools" },
  { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type Props = {
  items?: RelatedCallTrackingResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedCallTrackingResources({ items = DEFAULT_ITEMS, excludeHref, compact = false }: Props) {
  const filtered = excludeHref ? items.filter((item) => item.href !== excludeHref) : items;

  if (compact) {
    return (
      <ul className="space-y-2">
        {filtered.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section id="related-resources" className="scroll-mt-section border-t border-stone-200/80 bg-background py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle sub="More ways to explore call tracking for local service businesses.">Related Call Tracking Resources</SectionTitle>
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
