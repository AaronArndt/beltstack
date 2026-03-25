import Link from "next/link";
import { getWebsiteBuildersReviewUrl } from "@/lib/routes";

export type RelatedWebsiteBuildersResourceItem = { label: string; href: string };

const DEFAULT_ITEMS: RelatedWebsiteBuildersResourceItem[] = [
  { label: "Website builders hub", href: "/website-builders" },
  { label: "Best website builders", href: "/website-builders/best-website-builders" },
  { label: "Website builder comparisons", href: "/website-builders/compare" },
  { label: "Website builder guides", href: "/website-builders/guides" },
  { label: "Best for contractors", href: "/website-builders/best-for/contractors" },
  { label: "Best for small business", href: "/website-builders/best-for/small-business" },
  { label: "Wix review", href: getWebsiteBuildersReviewUrl("wix") },
  { label: "Squarespace review", href: getWebsiteBuildersReviewUrl("squarespace") },
  { label: "Shopify review", href: getWebsiteBuildersReviewUrl("shopify") },
  { label: "Webflow review", href: getWebsiteBuildersReviewUrl("webflow") },
  { label: "WordPress review", href: getWebsiteBuildersReviewUrl("wordpress") },
  { label: "Wix vs Squarespace", href: "/website-builders/compare/wix-vs-squarespace" },
  { label: "Wix vs Shopify", href: "/website-builders/compare/wix-vs-shopify" },
  { label: "Webflow vs Wix", href: "/website-builders/compare/webflow-vs-wix" },
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
  items?: RelatedWebsiteBuildersResourceItem[];
  excludeHref?: string;
  compact?: boolean;
};

export function RelatedWebsiteBuildersResources({ items = DEFAULT_ITEMS, excludeHref, compact = false }: Props) {
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
        <SectionTitle sub="More ways to evaluate website builders for service businesses.">
          Related Website Builder Resources
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
