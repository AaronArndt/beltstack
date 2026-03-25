import Link from "next/link";
import {
  getCallTrackingCompareUrlFromSlug,
  getCallTrackingComparisonBySlug,
  getCallTrackingComparisonSlugs,
} from "@/lib/data/callTrackingComparisons";
import { getLogoFromProductMap, productLogoMapFromComparisons } from "@/lib/data/productLogoMapFromComparisons";
import { Footer } from "@/components/Footer";

const PRODUCT_LOGO_BY_SLUG = productLogoMapFromComparisons(getCallTrackingComparisonSlugs, getCallTrackingComparisonBySlug);

const POPULAR_SLUGS = [
  "callrail-vs-calltrackingmetrics",
  "callrail-vs-whatconverts",
  "calltrackingmetrics-vs-whatconverts",
  "ringba-vs-callrail",
  "invoca-vs-callrail",
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
    const data = getCallTrackingComparisonBySlug(slug);
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
  const order = ["callrail", "calltrackingmetrics", "whatconverts", "ringba", "invoca"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function CallTrackingCompareHubPage() {
  const allSlugs = getCallTrackingComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getCallTrackingComparisonBySlug(slug);
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
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/call-tracking" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Call Tracking
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Comparisons
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Call Tracking Software Comparisons
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Side-by-side comparisons of CallRail, CallTrackingMetrics, WhatConverts, Ringba, Invoca, and related stacks—written for contractors and service businesses defending marketing ROI.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Start from the{" "}
              <Link href="/call-tracking/best-call-tracking-software" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best call tracking software
              </Link>{" "}
              rankings when you want the full shortlist, then pair attribution with pipeline truth in your{" "}
              <Link href="/crm" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                CRM
              </Link>{" "}
              and stronger pages from our{" "}
              <Link href="/website-builders" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                website builders hub
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="popular-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Features, pricing signals, and trade recommendations.">Popular Comparisons</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => {
                const title = `${data.productA.name} vs ${data.productB.name}`;
                const compareHref = getCallTrackingCompareUrlFromSlug(slug);
                const summary = data.summaryParagraph.slice(0, 140).trim() + (data.summaryParagraph.length > 140 ? "…" : "");
                return (
                  <Link
                    key={slug}
                    href={compareHref}
                    className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      <img src={data.productA.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
                      <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                        vs
                      </span>
                      <img src={data.productB.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
                    </div>
                    <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
                    <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{summary}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section id="compare-by-software" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find every comparison that includes a given platform.">Compare by Software</SectionTitle>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bySoftware.map(({ key, label, slugs }) => (
                <div key={key} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src={getLogoFromProductMap(PRODUCT_LOGO_BY_SLUG, key)} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
                    <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {slugs.map(({ slug, label: linkLabel }) => (
                      <li key={slug}>
                        <Link
                          href={getCallTrackingCompareUrlFromSlug(slug)}
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

        <section id="how-we-compare" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Consistent criteria across matchups.">How We Compare Call Tracking Software</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              We evaluate SMB workflow fit, integration depth, and pricing signals that matter when LSA and PPC scale—not generic telco feature lists disconnected from booked-job economics.
            </p>
            <p className="mt-5 text-[#57534E] text-sm leading-relaxed">
              Read our{" "}
              <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                methodology page
              </Link>{" "}
              or explore{" "}
              <Link href="/call-tracking/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                call tracking guides
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

export const metadata = {
  title: "Call Tracking Software Comparisons (2026)",
  description: "Compare CallRail, CallTrackingMetrics, WhatConverts, Ringba, Invoca, and more for local service businesses.",
};
