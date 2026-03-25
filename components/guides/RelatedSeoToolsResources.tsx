import Link from "next/link";
import { getSeoToolsReviewUrl } from "@/lib/routes";

export type RelatedSeoToolsResourceItem = { label: string; href: string };

const DEFAULT_ITEMS: RelatedSeoToolsResourceItem[] = [
  { label: "SEO tools hub", href: "/seo-tools" },
  { label: "Best SEO tools", href: "/seo-tools/best-seo-tools" },
  { label: "Compare SEO tools", href: "/seo-tools/compare" },
  { label: "SEO tools guides", href: "/seo-tools/guides" },
  { label: "Best SEO tools by use case", href: "/seo-tools/best-for" },
  { label: "Best for contractors", href: "/seo-tools/best-for/contractors" },
  { label: "Best for local SEO", href: "/seo-tools/best-for/local-seo" },
  { label: "How to rank in Google Maps", href: "/seo-tools/guides/how-to-rank-in-google-maps" },
  { label: "Local SEO for service businesses", href: "/seo-tools/guides/local-seo-for-service-businesses" },
  { label: "Semrush review", href: getSeoToolsReviewUrl("semrush") },
  { label: "Ahrefs review", href: getSeoToolsReviewUrl("ahrefs") },
  { label: "BrightLocal review", href: getSeoToolsReviewUrl("brightlocal") },
  { label: "Google Search Console review", href: getSeoToolsReviewUrl("google-search-console") },
  { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
  { label: "Lead generation hub", href: "/lead-generation" },
  { label: "CRM software hub", href: "/crm" },
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
  items?: RelatedSeoToolsResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedSeoToolsResources({ items = DEFAULT_ITEMS, excludeHref, compact = false }: Props) {
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
        <SectionTitle sub="More ways to explore SEO tools for local service businesses.">Related SEO Tools Resources</SectionTitle>
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
