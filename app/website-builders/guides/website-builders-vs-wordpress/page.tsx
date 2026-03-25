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
  { q: "Are website builders better than WordPress for service businesses?", a: "For most owner-operated teams, yes. Builders are easier to maintain. WordPress can win when you have disciplined content operations and technical ownership." },
  { q: "Is WordPress better for SEO than Wix or Squarespace?", a: "Not automatically. WordPress has flexibility, but SEO results still depend on content quality, publishing cadence, and technical hygiene." },
  { q: "When should I choose WordPress over a hosted builder?", a: "Choose WordPress when extensibility and long-term content architecture are strategic and your team can manage plugins, updates, and hosting complexity." },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "WordPress", logoSrc: "/Logos/wordpress.png", rating: 4.2, bestFor: "Best for extensible content systems", reviewHref: getWebsiteBuildersReviewUrl("wordpress") },
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Best for simpler operations", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Squarespace", logoSrc: "/Logos/squarespace.png", rating: 4.4, bestFor: "Best for polished presentation", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
];

export default function WebsiteBuildersVsWordpressGuidePage() {
  const href = "/website-builders/guides/website-builders-vs-wordpress";
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
                <li className="text-gray-700 font-medium" aria-current="page">Website Builders vs WordPress</li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Website Builders vs WordPress</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed">
                How hosted website builders compare with WordPress for service businesses deciding between easier operations and deeper long-term control.
              </p>
              <GuideLastUpdated date="March 25, 2026" />
            </section>
            <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
              <p>
                Hosted builders usually win for owner-operators who need launch speed, simpler updates, and fewer technical dependencies. WordPress offers broader flexibility, but demands stronger discipline around hosting, plugins, performance, and security.
              </p>
              <p>
                If your team does not have a dedicated web operations owner, builders like Wix and Squarespace are usually lower-risk. If content architecture and extensibility are strategic, WordPress can be the better long-term system.
              </p>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Pick based on operating model, not ideology.">How to choose between builders and WordPress</SectionTitle>
              <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                <li>• Choose builders when speed, simplicity, and non-technical editing matter most.</li>
                <li>• Choose WordPress when extensibility and content infrastructure outweigh maintenance overhead.</li>
                <li>• Compare your real publishing cadence; execution consistency beats theoretical flexibility.</li>
              </ul>
            </section>

            <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <SectionTitle sub="Useful pages for final shortlist decisions.">Related comparisons and reviews</SectionTitle>
              <p className="text-[15px] leading-relaxed text-neutral-700">
                Start with{" "}
                <Link href={getWebsiteBuildersCompareUrl("wix-vs-squarespace")} className="font-semibold text-[#10B981] hover:underline">Wix vs Squarespace</Link>{" "}
                and{" "}
                <Link href={getWebsiteBuildersCompareUrl("webflow-vs-wix")} className="font-semibold text-[#10B981] hover:underline">Webflow vs Wix</Link>
                , then validate decisions in the{" "}
                <Link href={getWebsiteBuildersReviewUrl("wordpress")} className="font-semibold text-[#10B981] hover:underline">WordPress review</Link>{" "}
                and{" "}
                <Link href={getWebsiteBuildersReviewUrl("wix")} className="font-semibold text-[#10B981] hover:underline">Wix review</Link>
                .
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
    title: "Website Builders vs WordPress | BeltStack Guide",
    description:
      "Compare hosted website builders and WordPress for service businesses across maintenance, flexibility, SEO, and conversion workflows.",
  };
}
