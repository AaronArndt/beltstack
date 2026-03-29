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

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/website-builders/guides/mobile-first-local-business-website-checklist";

const FAQ = [
  { q: "Should mobile design come before desktop?", a: "For local service businesses, most qualified visits arrive on phones. Design tap targets, headline clarity, and call CTAs for small screens first, then validate desktop." },
  { q: "How many form fields should a mobile quote form use?", a: "Ask only what routing truly needs on first touch—often name, contact, service type, and ZIP. Long forms abandon on cellular networks." },
  { q: "What trust signals matter on mobile?", a: "Licenses, insurance, local photos, review stars with linkouts, and explicit service area—above the fold in one scroll." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Fast iteration", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Squarespace", logoSrc: "/Logos/squarespace.png", rating: 4.4, bestFor: "Polished mobile", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
  { name: "Shopify", logoSrc: "/Logos/shopify.png", rating: 4.5, bestFor: "Shop + local", reviewHref: getWebsiteBuildersReviewUrl("shopify") },
];

export default function MobileFirstLocalBusinessWebsiteChecklistPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Mobile-First Checklist</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Mobile-First Local Business Website Checklist</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical pass/fail list for service-business sites: calls, forms, speed, and trust—optimized for thumbs and spotty LTE.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Intent: operators validating a site before spending on <Link href="/lead-generation" className={link}>lead generation</Link> or <Link href="/seo-tools" className={link}>SEO</Link>. If mobile conversion is weak, paid traffic only amplifies the leak.
                  </p>
                  <p>
                    Cross-check with <Link href="/website-builders/guides/contractor-website-features" className={link}>contractor website features</Link>,{" "}
                    <Link href="/website-builders/guides/how-to-build-a-service-business-website" className={link}>how to build a service business website</Link>, and{" "}
                    <Link href="/website-builders/best-for/contractors" className={link}>best website builders for contractors</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Use on real devices, not only emulators.">Checklist</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Sticky or obvious tap-to-call on every service page</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>One primary CTA per view (call <em>or</em> form—not competing equally)</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Readable type without pinch-zoom; buttons 44px+ targets</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Service area and dispatch expectations stated plainly</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Reviews and licenses visible within first screen on key landing pages</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Ground advice in observable behavior.">Experience-first guidance</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    Record a five-minute session of a real customer trying to book you on cellular data. Friction you excuse on desktop (extra accordions, tiny links) often kills mobile leads—fix those before debating fonts.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Website builders" items={SIDEBAR} stickyTop={88} />
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
    title: "Mobile-First Local Business Website Checklist | BeltStack",
    description:
      "Check tap-to-call, forms, trust blocks, and speed for local service sites—mobile-first guidance before you buy traffic or SEO tools.",
  };
}
