import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  getWebsiteBuildersCompareUrlFromSlug,
  getWebsiteBuildersComparisonBySlug,
  getWebsiteBuildersComparisonSlugs,
} from "@/lib/data/websiteBuildersComparisons";
import { getLogoFromProductMap, productLogoMapFromComparisons } from "@/lib/data/productLogoMapFromComparisons";

const PRODUCT_LOGO_BY_SLUG = productLogoMapFromComparisons(getWebsiteBuildersComparisonSlugs, getWebsiteBuildersComparisonBySlug);

const POPULAR_SLUGS = [
  "wix-vs-squarespace",
  "wix-vs-shopify",
  "squarespace-vs-shopify",
  "webflow-vs-wix",
  "duda-vs-wix",
  "godaddy-website-builder-vs-wix",
  "hostinger-website-builder-vs-wix",
  "godaddy-website-builder-vs-hostinger-website-builder",
] as const;

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function groupComparisonsByProduct(slugs: string[]) {
  const byProduct: Record<string, { label: string; slugs: { slug: string; label: string }[] }> = {};
  for (const slug of slugs) {
    const data = getWebsiteBuildersComparisonBySlug(slug);
    if (!data) continue;
    if (!byProduct[data.productA.slug]) byProduct[data.productA.slug] = { label: data.productA.name, slugs: [] };
    if (!byProduct[data.productB.slug]) byProduct[data.productB.slug] = { label: data.productB.name, slugs: [] };
    byProduct[data.productA.slug].slugs.push({ slug, label: `${data.productA.name} vs ${data.productB.name}` });
    byProduct[data.productB.slug].slugs.push({ slug, label: `${data.productB.name} vs ${data.productA.name}` });
  }
  return Object.entries(byProduct).map(([key, value]) => ({ key, ...value }));
}

export default function WebsiteBuildersCompareHubPage() {
  const allSlugs = getWebsiteBuildersComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getWebsiteBuildersComparisonBySlug(slug);
    return data ? [{ slug, data }] : [];
  });
  const bySoftware = groupComparisonsByProduct(allSlugs);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/website-builders" className="text-gray-500 hover:text-gray-900">Website Builders</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Comparisons</li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Compare Website Builders
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Side-by-side comparisons focused on service-business websites, conversion workflows, and local SEO fit.
            </p>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head pages to narrow your shortlist.">Popular comparisons</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => {
                const title = `${data.productA.name} vs ${data.productB.name}`;
                const summary =
                  data.summaryParagraph.length > 140
                    ? `${data.summaryParagraph.slice(0, 140).trim()}…`
                    : data.summaryParagraph;
                return (
                  <Link
                    key={slug}
                    href={getWebsiteBuildersCompareUrlFromSlug(slug)}
                    className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={data.productA.logoSrc}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                      <span className="text-lg font-medium text-[#57534E]" aria-hidden>
                        vs
                      </span>
                      <img
                        src={data.productB.logoSrc}
                        alt=""
                        className="h-10 w-auto max-w-[80px] object-contain object-left"
                      />
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-[#1A2D48] group-hover:text-[#10B981]">{title}</h3>
                    <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[#57534E]">{summary}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find all comparisons that include a specific platform.">Compare by software</SectionTitle>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bySoftware.map(({ key, label, slugs }) => (
                <div key={key} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img
                      src={getLogoFromProductMap(PRODUCT_LOGO_BY_SLUG, key)}
                      alt=""
                      className="h-10 w-auto max-w-[80px] object-contain object-left"
                    />
                    <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {slugs.map((item) => (
                      <li key={item.slug}>
                        <Link href={getWebsiteBuildersCompareUrlFromSlug(item.slug)} className="text-sm font-medium text-[#10B981] hover:underline">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Compare Website Builders (2026) | BeltStack",
  description:
    "Side-by-side website builder comparisons for service businesses, including Wix, Squarespace, Shopify, Webflow, Duda, GoDaddy, and Hostinger.",
};
