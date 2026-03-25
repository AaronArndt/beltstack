import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedWebsiteBuildersResources } from "@/components/guides/RelatedWebsiteBuildersResources";
import { getWebsiteBuildersReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const FAQ_ITEMS = [
  { q: "Which website builder is best for local SEO?", a: "Wix is usually the best all-around fit for most local service teams; Webflow can outperform for advanced teams with stronger technical/design resources." },
  { q: "Does website builder choice matter more than content?", a: "No. Builder choice helps, but rankings depend more on page quality, internal linking, GBP execution, and consistent publishing." },
  { q: "How many local pages should I publish?", a: "Start with one page per core service and one page per target location where you can publish unique, useful content. Expand only when quality can be maintained." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Best all-around local SEO fit", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Webflow", logoSrc: "/Logos/webflow.png", rating: 4.3, bestFor: "Best for technical SEO control", reviewHref: getWebsiteBuildersReviewUrl("webflow") },
  { name: "WordPress", logoSrc: "/Logos/wordpress.png", rating: 4.2, bestFor: "Best for content-heavy SEO programs", reviewHref: getWebsiteBuildersReviewUrl("wordpress") },
];

export default function BestWebsiteBuilderForLocalSeoGuidePage() {
  const href = "/website-builders/guides/best-website-builder-for-local-seo";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li>
                <li><Link href="/website-builders" className="text-gray-500 hover:text-gray-900">Website Builders</Link></li><li aria-hidden>/</li>
                <li><Link href="/website-builders/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">Best Website Builder for Local SEO</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Best Website Builder for Local SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                What local service businesses should prioritize to rank service pages, improve GBP-assisted visibility, and convert organic traffic into calls and quote requests.
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Local SEO performance is an execution problem first and a platform problem second. Pick a builder that your team can use to publish service pages, location pages, and trust content consistently without technical bottlenecks.
              </p>
              <p>
                Wix is often the strongest all-around local SEO choice for service teams because it balances control and speed. Webflow is strong for technical teams that need deeper structure control, and WordPress remains relevant for content-heavy publishing programs.
              </p>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Local SEO checks before you choose any builder.">Decision framework</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Can you control title/meta/slug fields per page?</li>
                <li>• Can your team publish service + city pages quickly?</li>
                <li>• Can you maintain clean internal linking and crawl paths?</li>
                <li>• Can you launch mobile-first pages with strong CTA visibility?</li>
              </ul>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Where rankings and leads usually improve first.">Execution priorities</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Prioritize core service pages, supporting location pages, and conversion-focused trust sections. Then improve internal links between top pages. For platform choices, compare{" "}
                <Link href="/website-builders/compare/webflow-vs-wix" className="font-semibold text-[#10B981] hover:underline">Webflow vs Wix</Link>{" "}
                and validate in the{" "}
                <Link href="/website-builders/review/wix" className="font-semibold text-[#10B981] hover:underline">Wix review</Link>{" "}
                and{" "}
                <Link href="/website-builders/review/webflow" className="font-semibold text-[#10B981] hover:underline">Webflow review</Link>
                .
              </p>
            </section>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers for local SEO buyers.">FAQs</SectionTitle>
              <GuideFaqSection faqs={FAQ_ITEMS} />
            </section>
              </div>
            </article>

            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Website Builder Reviews" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedWebsiteBuildersResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Website Builder for Local SEO | BeltStack Guide",
    description:
      "How service businesses should evaluate website builders for local SEO performance, service-page structure, and mobile conversion.",
  };
}
