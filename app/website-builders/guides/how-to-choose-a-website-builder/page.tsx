import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedWebsiteBuildersResources } from "@/components/guides/RelatedWebsiteBuildersResources";
import { getWebsiteBuildersReviewUrl, getWebsiteBuildersCompareUrl } from "@/lib/routes";

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
  { q: "What matters most for service businesses?", a: "Lead conversion architecture, local SEO controls, mobile performance, and operational ease of updates are the highest-impact criteria." },
  { q: "Should I prioritize design or conversion?", a: "Both matter, but conversion structure should come first: clear service pages, trust signals, and low-friction contact paths." },
  { q: "What is the best website builder for most contractors?", a: "Wix is often the most practical default for contractor teams. Squarespace is stronger for design-heavy branding and Shopify is better when ecommerce is central." },
  { q: "How should I shortlist builders quickly?", a: "Read the roundup, pick two comparisons, and review each product page for pricing and workflow fit before requesting migration work." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Best overall service-business fit", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Squarespace", logoSrc: "/Logos/squarespace.png", rating: 4.4, bestFor: "Best polished branding", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
  { name: "Shopify", logoSrc: "/Logos/shopify.png", rating: 4.5, bestFor: "Best for service + ecommerce", reviewHref: getWebsiteBuildersReviewUrl("shopify") },
];

export default function HowToChooseWebsiteBuilderGuidePage() {
  const href = "/website-builders/guides/how-to-choose-a-website-builder";
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
                <li className="text-gray-700 font-medium" aria-current="page">How to Choose a Website Builder</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Choose a Website Builder</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical framework for contractors and service businesses choosing between Wix, Squarespace, Shopify, Webflow, and other platforms.
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>

            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>Start with your primary goal: lead generation, ecommerce, or brand presentation. Most local service businesses should optimize for quote requests and calls first.</p>
              <p>Then evaluate editing workflow ownership. If owners or office staff update content, favor simpler builders. If you have design and marketing support, advanced options can be worthwhile.</p>
              <p>
                Use our{" "}
                <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">
                  best website builders roundup
                </Link>
                , the{" "}
                <Link href="/website-builders/compare" className="font-semibold text-[#10B981] hover:underline">
                  website builder comparison hub
                </Link>
                , and full reviews such as{" "}
                <Link href="/website-builders/review/wix" className="font-semibold text-[#10B981] hover:underline">
                  Wix
                </Link>{" "}
                and{" "}
                <Link href="/website-builders/review/squarespace" className="font-semibold text-[#10B981] hover:underline">
                  Squarespace
                </Link>{" "}
                to shortlist realistically. For{" "}
                <Link href="/website-builders/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">
                  contractor website builder picks
                </Link>
                , pair the site with{" "}
                <Link href="/lead-generation/best-for/contractors" className="font-semibold text-[#10B981] hover:underline">
                  lead generation tools for contractors
                </Link>{" "}
                once you’re ready to buy demand.
              </p>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="The non-negotiables for local operators.">Selection checklist</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Local SEO controls (metadata, URL control, service/location pages)</li>
                <li>• Conversion paths (forms, click-to-call, clear CTAs)</li>
                <li>• Trust content (reviews, before/after, licenses, guarantees)</li>
                <li>• Ongoing edit simplicity and maintainability</li>
              </ul>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Use this 3-step path before committing.">Fast shortlist workflow</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Step 1: choose your primary model (lead-gen only vs service + ecommerce). Step 2: compare{" "}
                <Link href={getWebsiteBuildersCompareUrl("wix-vs-squarespace")} className="font-semibold text-[#10B981] hover:underline">Wix vs Squarespace</Link>{" "}
                and{" "}
                <Link href={getWebsiteBuildersCompareUrl("wix-vs-shopify")} className="font-semibold text-[#10B981] hover:underline">Wix vs Shopify</Link>
                . Step 3: validate with full reviews before migration planning.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
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
    title: "How to Choose a Website Builder | BeltStack Guide",
    description: "How contractors and service businesses should evaluate website builders for leads, local SEO, and long-term maintainability.",
  };
}
