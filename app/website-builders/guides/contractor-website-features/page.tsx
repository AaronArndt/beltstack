import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedWebsiteBuildersResources } from "@/components/guides/RelatedWebsiteBuildersResources";
import { getWebsiteBuildersReviewUrl, getWebsiteBuildersCompareUrl, getWebsiteBuildersBestForUrl } from "@/lib/routes";

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
  {
    q: "What features matter most on a contractor website?",
    a: "The core stack is clear service pages, visible phone/quote CTAs, trust proof, and fast mobile performance. Fancy effects are secondary to conversion flow and local SEO execution.",
  },
  {
    q: "How many service-area pages should contractors publish?",
    a: "Publish one page per major service and one page per target location where you can provide unique, useful content. Avoid thin duplicate pages that only swap city names.",
  },
  {
    q: "Should contractors prioritize design or lead conversion?",
    a: "Lead conversion first. Strong design helps trust, but your homepage, service pages, and forms must drive calls and quote requests quickly on mobile.",
  },
  {
    q: "What is the best website builder for contractor sites?",
    a: "Wix is often the practical default for most contractor teams, while Squarespace is strong for polished branding and Shopify is relevant when ecommerce revenue is meaningful.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Wix",
    logoSrc: "/Logos/wix.png",
    rating: 4.6,
    bestFor: "Best overall contractor fit",
    reviewHref: getWebsiteBuildersReviewUrl("wix"),
  },
  {
    name: "Squarespace",
    logoSrc: "/Logos/squarespace.png",
    rating: 4.4,
    bestFor: "Best for polished trust pages",
    reviewHref: getWebsiteBuildersReviewUrl("squarespace"),
  },
  {
    name: "Shopify",
    logoSrc: "/Logos/shopify.png",
    rating: 4.5,
    bestFor: "Best for service + ecommerce",
    reviewHref: getWebsiteBuildersReviewUrl("shopify"),
  },
];

export default function ContractorWebsiteFeaturesGuidePage() {
  const href = "/website-builders/guides/contractor-website-features";
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
                    <li className="text-gray-700 font-medium" aria-current="page">Contractor Website Features</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Contractor Website Features</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                    The contractor website feature checklist that drives local rankings, phone calls, and booked jobs. Use this guide if you are searching for what a high-converting HVAC, plumbing, roofing, or general contractor website needs in 2026.
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </section>

                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Strong contractor websites are conversion systems, not design portfolios. Visitors should understand your services, service area, trust signals, and next step within seconds on mobile. Start with our{" "}
                    <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">best website builders roundup</Link>{" "}
                    and{" "}
                    <Link href={getWebsiteBuildersBestForUrl("contractors")} className="font-semibold text-[#10B981] hover:underline">best website builder for contractors</Link>{" "}
                    picks if you are still selecting a platform.
                  </p>
                </section>

                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Build these first before advanced design tweaks.">Core conversion features</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li>• Service-specific pages with clear scope, pricing context, and CTA</li>
                    <li>• Location/service-area pages for priority cities</li>
                    <li>• Persistent click-to-call and quote request options on mobile</li>
                    <li>• Fast, low-friction forms connected to your CRM or scheduling tool</li>
                    <li>• Response-time promise and trust messaging above the fold</li>
                  </ul>
                </section>

                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What convinces homeowners to contact you quickly.">Trust features that improve close rate</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Add review snippets, before/after galleries, certifications, warranties, and real project proof. For local service buyers, credibility cues are often the deciding factor between two similar providers.
                    </p>
                    <p>
                      Pair these features with internal links from service pages to supporting proof pages (financing, warranties, emergency response, process pages). This improves both user confidence and crawl depth.
                    </p>
                  </div>
                </section>

                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Execution quality beats platform branding.">SEO and content structure</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The best contractor sites publish and update pages consistently. Focus on one strong service page at a time, then build location support pages with unique content. Use a clear internal linking pattern between core services, related services, and city pages.
                    </p>
                    <p>
                      For platform-specific decisions, compare{" "}
                      <Link href={getWebsiteBuildersCompareUrl("wix-vs-squarespace")} className="font-semibold text-[#10B981] hover:underline">Wix vs Squarespace</Link>{" "}
                      and{" "}
                      <Link href={getWebsiteBuildersCompareUrl("webflow-vs-wix")} className="font-semibold text-[#10B981] hover:underline">Webflow vs Wix</Link>
                      . Then validate fit in the full{" "}
                      <Link href={getWebsiteBuildersReviewUrl("wix")} className="font-semibold text-[#10B981] hover:underline">Wix review</Link>{" "}
                      and{" "}
                      <Link href={getWebsiteBuildersReviewUrl("squarespace")} className="font-semibold text-[#10B981] hover:underline">Squarespace review</Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers for contractor teams.">FAQs</SectionTitle>
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
    title: "Contractor Website Features | BeltStack Guide",
    description:
      "Contractor website feature checklist for local SEO and lead conversion: service pages, trust signals, forms, CTAs, and mobile-first structure.",
  };
}
