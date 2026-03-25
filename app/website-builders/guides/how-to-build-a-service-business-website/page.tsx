import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedWebsiteBuildersResources } from "@/components/guides/RelatedWebsiteBuildersResources";
import { getWebsiteBuildersReviewUrl, getWebsiteBuildersBestForUrl } from "@/lib/routes";

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
    q: "What pages should every service business website include?",
    a: "At minimum: homepage, core service pages, location/service-area pages, about/trust page, and a contact/quote page with visible call CTA.",
  },
  {
    q: "How long should it take to build a service website?",
    a: "A usable first version can launch in 1-3 weeks with focused scope. High performance comes from ongoing monthly iteration of service pages and trust content.",
  },
  {
    q: "Should I write blog posts before service pages?",
    a: "No. Build and optimize high-intent service and location pages first. Add guides/blog content after your core conversion pages are strong.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Best all-around service site", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Squarespace", logoSrc: "/Logos/squarespace.png", rating: 4.4, bestFor: "Best visual trust presentation", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
  { name: "Webflow", logoSrc: "/Logos/webflow.png", rating: 4.3, bestFor: "Best for custom CMS control", reviewHref: getWebsiteBuildersReviewUrl("webflow") },
];

export default function HowToBuildServiceBusinessWebsiteGuidePage() {
  const href = "/website-builders/guides/how-to-build-a-service-business-website";
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
                <li className="text-gray-700 font-medium" aria-current="page">How to Build a Service Business Website</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Build a Service Business Website</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                A practical website blueprint for contractors and local service teams who need more calls, quote requests, and booked jobs from organic and paid traffic.
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>

            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Start with your commercial page stack: homepage, core services, and location pages. Keep the path to conversion obvious on every page with click-to-call, quote request, and trust messaging. For platform selection first, use{" "}
                <Link href="/website-builders/best-website-builders" className="font-semibold text-[#10B981] hover:underline">best website builders</Link>{" "}
                and{" "}
                <Link href={getWebsiteBuildersBestForUrl("home-services")} className="font-semibold text-[#10B981] hover:underline">best website builders for home services</Link>.
              </p>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Build this structure before advanced features.">Step 1: Conversion architecture</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Homepage with clear offer, proof, and immediate CTA</li>
                <li>• One dedicated page per core service</li>
                <li>• Location/service-area pages for priority markets</li>
                <li>• Contact/quote page with short mobile-first form</li>
              </ul>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Trust pages often move close rate more than visual polish.">Step 2: Proof and trust layer</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Add reviews, before/after galleries, certifications, warranty details, and response-time standards. Link these trust assets from service pages so high-intent visitors can validate quickly before calling.
              </p>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Local SEO wins come from execution cadence.">Step 3: Publishing and optimization rhythm</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Improve one high-value service page each cycle, add fresh project proof monthly, and review lead source quality. Use review/comparison pages like{" "}
                <Link href="/website-builders/review/wix" className="font-semibold text-[#10B981] hover:underline">Wix</Link>,{" "}
                <Link href="/website-builders/review/webflow" className="font-semibold text-[#10B981] hover:underline">Webflow</Link>, and{" "}
                <Link href="/website-builders/compare/wix-vs-squarespace" className="font-semibold text-[#10B981] hover:underline">Wix vs Squarespace</Link>{" "}
                when the platform itself is the bottleneck.
              </p>
            </section>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Quick answers for launch planning.">FAQs</SectionTitle>
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
    title: "How to Build a Service Business Website | BeltStack Guide",
    description:
      "Step-by-step service business website blueprint for local SEO and lead conversion: page architecture, trust content, and publishing workflow.",
  };
}
