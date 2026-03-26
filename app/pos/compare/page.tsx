import Link from "next/link";
import {
  getPosCompareUrlFromSlug,
  getPosComparison,
  getPosComparisonSlugs,
} from "@/lib/data/posComparisons";
import { getLogoFromProductMap, productLogoMapFromComparisons } from "@/lib/data/productLogoMapFromComparisons";
import { Footer } from "@/components/Footer";

const PRODUCT_LOGO_BY_SLUG = productLogoMapFromComparisons(getPosComparisonSlugs, getPosComparison);

const POPULAR_SLUGS = [
  "square-pos-vs-shopify-pos",
  "square-pos-vs-clover-pos",
  "shopify-pos-vs-lightspeed-pos",
  "toast-pos-vs-square-pos",
  "lightspeed-pos-vs-vend-pos",
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
    const data = getPosComparison(slug);
    if (!data) continue;
    const a = data.productA.slug;
    const b = data.productB.slug;
    const labelA = `${data.productA.name} vs ${data.productB.name}`;
    const labelB = `${data.productB.name} vs ${data.productA.name}`;
    if (!byProduct[a]) byProduct[a] = { label: data.productA.name, slugs: [] };
    if (!byProduct[b]) byProduct[b] = { label: data.productB.name, slugs: [] };
    if (!byProduct[a].slugs.some((s) => s.slug === slug)) byProduct[a].slugs.push({ slug, label: labelA });
    if (!byProduct[b].slugs.some((s) => s.slug === slug)) byProduct[b].slugs.push({ slug, label: labelB });
  }

  const order = ["square-pos", "shopify-pos", "lightspeed-pos", "clover-pos", "toast-pos", "vend-pos"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function PosCompareHubPage() {
  const allSlugs = getPosComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getPosComparison(slug);
    return data ? [{ slug, data }] : [];
  });
  const bySoftware = groupComparisonsByProduct(allSlugs);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* Hero */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/pos"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    POS Software
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              POS Software Comparisons
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Compare popular POS systems side by side—including Square, Shopify POS, Lightspeed, Clover,
              Toast, Vend, and more. These head-to-head matchups break down features, pricing, and fit so you
              can choose the right platform for your business.
            </p>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              See our{" "}
              <Link
                href="/pos/best-pos-software"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best POS software
              </Link>{" "}
              roundup for top picks,{" "}
              <Link
                href="/pos/best-for"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best POS by use case
              </Link>{" "}
              for picks by business type, and our{" "}
              <Link
                href="/pos/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                POS guides
              </Link>{" "}
              for how to choose and use tools.
            </p>
          </div>
        </section>

        {/* Popular comparisons */}
        <section
          id="popular-comparisons"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side POS features, pricing, and recommendations.">
              Popular Comparisons
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => {
                const title = `${data.productA.name} vs ${data.productB.name}`;
                const compareHref = getPosCompareUrlFromSlug(slug);
                const summary =
                  data.summaryParagraph.length > 140
                    ? data.summaryParagraph.slice(0, 140).trim() + "…"
                    : data.summaryParagraph;
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      {data.productA.logoSrc && (
                        <img
                          src={data.productA.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                        />
                      )}
                      <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                        vs
                      </span>
                      {data.productB.logoSrc && (
                        <img
                          src={data.productB.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                        />
                      )}
                    </div>
                    <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                      Compare →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compare by software */}
        <section
          id="compare-by-software"
          className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find every comparison that includes a given platform.">
              Compare by Software
            </SectionTitle>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bySoftware.map(({ key, label, slugs }) => (
                <div
                  key={key}
                  className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={getLogoFromProductMap(PRODUCT_LOGO_BY_SLUG, key)}
                      alt=""
                      className="h-10 w-auto max-w-[80px] object-contain object-left"
                    />
                    <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {slugs.map(({ slug, label: linkLabel }) => (
                      <li key={slug}>
                        <Link
                          href={getPosCompareUrlFromSlug(slug)}
                          className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
                          {linkLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How we compare section */}
        <section
          id="how-we-compare"
          className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Consistent criteria so you can compare with confidence.">
              How We Compare POS Software
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              Our POS comparisons use the same evaluation criteria across every head-to-head. We look at payment
              processing capabilities, inventory management features, reporting and analytics, integrations and
              ecosystem, and pricing transparency—so you see how each platform really stacks up for retail stores,
              restaurants, and small businesses.
            </p>
            <ul className="mt-4 space-y-2 text-[#57534E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Payment processing capabilities</strong> — How each system
                handles cards, contactless, and alternative payments; processing rates and transparency.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Inventory management features</strong> — Item and stock management,
                low-stock alerts, and integration with accounting or dedicated inventory tools.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Reporting and analytics</strong> — Sales by item, period, and
                channel; dashboards and exports for operations and reconciliation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Integrations and ecosystem</strong> — Connections to accounting,
                ecommerce, payroll, and third-party apps; how well the POS fits your stack.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                <strong className="text-[#1A2D48]">Pricing transparency</strong> — Software and hardware costs,
                processing rates, and total cost of ownership at typical business sizes.
              </li>
            </ul>
            <p className="mt-5 text-[#57534E] text-sm leading-relaxed">
              For our full review process and affiliate disclosure, see our{" "}
              <Link
                href="/methodology"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                methodology page
              </Link>
              . For deeper guides on how POS software works and how to choose tools, see our{" "}
              <Link
                href="/pos/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                POS guides
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "POS Software Comparisons | BeltStack",
    description:
      "Compare POS systems side-by-side. See matchups like Square vs Shopify POS, Square vs Clover, Shopify POS vs Lightspeed, Toast vs Square, and Lightspeed vs Vend.",
  };
}
