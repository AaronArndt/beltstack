import Link from "next/link";
import { Footer } from "@/components/Footer";
import {
  getReputationManagementCompareUrlFromSlug,
  getReputationManagementComparisonBySlug,
  getReputationManagementComparisonSlugs,
} from "@/lib/data/reputationManagementComparisons";
import { getLogoFromProductMap, productLogoMapFromComparisons } from "@/lib/data/productLogoMapFromComparisons";

const PRODUCT_LOGO_BY_SLUG = productLogoMapFromComparisons(
  getReputationManagementComparisonSlugs,
  getReputationManagementComparisonBySlug
);

const POPULAR_SLUGS = [
  "podium-vs-birdeye",
  "birdeye-vs-nicejob",
  "podium-vs-broadly",
  "reputation-com-vs-birdeye",
  "gradeus-vs-birdeye",
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
    const data = getReputationManagementComparisonBySlug(slug);
    if (!data) continue;
    const a = data.productA.slug;
    const b = data.productB.slug;
    if (!byProduct[a]) byProduct[a] = { label: data.productA.name, slugs: [] };
    if (!byProduct[b]) byProduct[b] = { label: data.productB.name, slugs: [] };
    if (!byProduct[a].slugs.some((s) => s.slug === slug)) byProduct[a].slugs.push({ slug, label: `${data.productA.name} vs ${data.productB.name}` });
    if (!byProduct[b].slugs.some((s) => s.slug === slug)) byProduct[b].slugs.push({ slug, label: `${data.productB.name} vs ${data.productA.name}` });
  }
  const order = ["podium", "birdeye", "nicejob", "reputation-com", "broadly", "grade-us"];
  return order.filter((key) => byProduct[key]).map((key) => ({ key, ...byProduct[key] }));
}

export default function ReputationManagementCompareHubPage() {
  const allSlugs = getReputationManagementComparisonSlugs();
  const popularData = POPULAR_SLUGS.flatMap((slug) => {
    const data = getReputationManagementComparisonBySlug(slug);
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
                <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Reputation Management</Link></li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Comparisons</li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Reputation Management Software Comparisons</h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Side-by-side comparisons for Podium, Birdeye, NiceJob, Reputation.com, Broadly, and Grade.us with local-service workflow guidance.
            </p>
          </div>
        </section>

        <section id="popular-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Features, pricing signals, and use-case fit.">Popular Comparisons</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularData.map(({ slug, data }) => (
                <Link key={slug} href={getReputationManagementCompareUrlFromSlug(slug)} className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2">
                  <div className="flex items-center gap-3">
                    <img src={data.productA.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
                    <span className="text-[#57534E] text-lg font-medium" aria-hidden>vs</span>
                    <img src={data.productB.logoSrc} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
                  </div>
                  <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{data.productA.name} vs {data.productB.name}</h3>
                  <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{data.summaryParagraph.slice(0, 140)}{data.summaryParagraph.length > 140 ? "…" : ""}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Compare →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="compare-by-software" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find every comparison that includes a platform.">Compare by Software</SectionTitle>
            <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bySoftware.map(({ key, label, slugs }) => (
                <div key={key} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img src={getLogoFromProductMap(PRODUCT_LOGO_BY_SLUG, key)} alt="" className="h-10 w-auto max-w-[80px] object-contain object-left" />
                    <h3 className="text-[#1A2D48] text-lg font-bold">Compare {label}</h3>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {slugs.map(({ slug, label }) => (
                      <li key={slug}>
                        <Link href={getReputationManagementCompareUrlFromSlug(slug)} className="text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {label}
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
  title: "Reputation Management Software Comparisons (2026)",
  description: "Compare Podium, Birdeye, NiceJob, Reputation.com, Broadly, and Grade.us for local service businesses.",
};
