import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";
import { SEO_TOOLS_GUIDES } from "@/lib/data/seoToolsGuides";
import { getSeoToolsBestForUrl, getSeoToolsReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function GuideCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
    >
      <h3 className="text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">{title}</h3>
      <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{description}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">Read guide →</span>
    </Link>
  );
}

export default function SeoToolsGuidesPage() {
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
                  <Link href="/seo-tools" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    SEO Tools
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Guides
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              SEO Tools Guides
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Educational articles on local SEO, Google Business Profile, and Map Pack fundamentals—before you stack paid software.
            </p>
            <GuideLastUpdated date="March 24, 2026" />
            <p className="mt-5 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Explore{" "}
              <Link href={getSeoToolsReviewUrl("semrush")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Semrush
              </Link>
              ,{" "}
              <Link href={getSeoToolsReviewUrl("brightlocal")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                BrightLocal
              </Link>
              , and{" "}
              <Link href={getSeoToolsReviewUrl("google-search-console")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Google Search Console
              </Link>{" "}
              reviews,{" "}
              <Link href="/seo-tools/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                SEO tool comparisons
              </Link>
              , and our{" "}
              <Link href="/seo-tools/best-seo-tools" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best SEO tools
              </Link>{" "}
              roundup. Scenario picks:{" "}
              <Link href={getSeoToolsBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                best SEO tools for contractors
              </Link>
              ,{" "}
              <Link href={getSeoToolsBestForUrl("local-seo")} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                local SEO
              </Link>
              . After you publish pages, use{" "}
              <Link href="/website-builders/guides/how-to-choose-a-website-builder" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                how to choose a website builder
              </Link>{" "}
              and route leads through your{" "}
              <Link href="/crm" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                CRM
              </Link>
              .
            </p>
          </div>
        </section>

        <section id="seo-tools-guides-grid" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Local SEO execution and measurement.">Guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SEO_TOOLS_GUIDES.map((guide) => (
                <GuideCard key={guide.href} title={guide.title} href={guide.href} description={guide.description} />
              ))}
            </div>
          </div>
        </section>

        <RelatedSeoToolsResources />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "SEO Tools Guides | BeltStack",
    description: "Guides on local SEO, Google Business Profile, Map Pack rankings, and on-page SEO for service businesses.",
  };
}
