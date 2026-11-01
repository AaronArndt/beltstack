import Link from "next/link";
import { getLeadGenerationReviewUrl } from "@/lib/routes";

export type RelatedLeadGenResourceItem = { label: string; href: string };

const DEFAULT_ITEMS: RelatedLeadGenResourceItem[] = [
  { label: "Lead generation hub", href: "/lead-generation" },
  { label: "Best lead generation tools", href: "/lead-generation/best-lead-generation-tools" },
  { label: "Compare lead generation platforms", href: "/lead-generation/compare" },
  { label: "Lead generation guides", href: "/lead-generation/guides" },
  { label: "Best lead gen tools by use case", href: "/lead-generation/best-for" },
  { label: "Best for contractors", href: "/lead-generation/best-for/contractors" },
  { label: "How Google Local Services Ads work", href: "/lead-generation/guides/how-google-local-services-ads-work" },
  { label: "Lead generation strategies for local business", href: "/lead-generation/guides/lead-generation-strategies-for-local-business" },
  { label: "Thumbtack review", href: getLeadGenerationReviewUrl("thumbtack") },
  { label: "Angi review", href: getLeadGenerationReviewUrl("angi") },
  { label: "Google Local Services Ads review", href: getLeadGenerationReviewUrl("google-local-services-ads") },
  { label: "HomeAdvisor review", href: getLeadGenerationReviewUrl("homeadvisor") },
  { label: "How to choose a lead platform", href: "/lead-generation/guides/how-to-choose-a-lead-generation-platform" },
  { label: "Paid vs organic leads", href: "/lead-generation/guides/paid-vs-organic-leads" },
  { label: "Website builders for contractors (owned demand)", href: "/website-builders/best-for/contractors" },
];

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-brand text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-terracotta" aria-hidden />
      {sub && <p className="mt-1 text-muted-foreground text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type Props = {
  items?: RelatedLeadGenResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedLeadGenerationResources({ items = DEFAULT_ITEMS, excludeHref, compact = false }: Props) {
  const filtered = excludeHref ? items.filter((item) => item.href !== excludeHref) : items;

  if (compact) {
    return (
      <ul className="space-y-2">
        {filtered.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
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
        <SectionTitle sub="More ways to explore lead generation tools.">Related Lead Generation Resources</SectionTitle>
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
