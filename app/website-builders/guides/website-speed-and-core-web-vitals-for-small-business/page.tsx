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

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const href = "/website-builders/guides/website-speed-and-core-web-vitals-for-small-business";

const FAQ = [
  { q: "Do Core Web Vitals affect local rankings?", a: "Google uses page experience signals as part of ranking; fast, stable pages also convert better on mobile. They are not a substitute for relevance and prominence, but slow LCP or intrusive layouts hurt both SEO and lead forms." },
  { q: "Can a website builder fix bad vitals automatically?", a: "Builders help with image compression, CDN, and template choices, but heavy slideshows, unoptimized hero videos, and third-party widgets can still tank scores. Test real templates before you migrate." },
  { q: "What should I measure first?", a: "Largest Contentful Paint (loading), Interaction to Next Paint (responsiveness), and Cumulative Layout Shift (visual stability)—then compare before/after when you change themes or plugins." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Balanced SMB templates", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Squarespace", logoSrc: "/Logos/squarespace.png", rating: 4.4, bestFor: "Visual-first sites", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
  { name: "Shopify", logoSrc: "/Logos/shopify.png", rating: 4.5, bestFor: "Retail + commerce", reviewHref: getWebsiteBuildersReviewUrl("shopify") },
];

export default function WebsiteSpeedCoreWebVitalsGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Website Speed &amp; Core Web Vitals</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Website Speed &amp; Core Web Vitals for Small Business</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How loading, interactivity, and layout stability affect local SEO and quote requests—and what to verify in your builder template before you launch.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Search intent here blends technical SEO and buyer anxiety: owners hear “Core Web Vitals” and want a simple answer about whether their site is “good enough.” The practical answer is to measure real URLs on mobile, fix the biggest regressions first, and tie speed work to conversion (tap-to-call, forms)—not vanity scores alone.
                  </p>
                  <p>
                    Pair this with our <Link href="/website-builders/guides/best-website-builder-for-local-seo" className={link}>best website builder for local SEO</Link> guide,{" "}
                    <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>on-page SEO for local business</Link>, and hub pages for{" "}
                    <Link href="/website-builders/best-website-builders" className={link}>best website builders</Link> and{" "}
                    <Link href="/seo-tools" className={link}>SEO tools</Link>. Compare templates in{" "}
                    <Link href={getWebsiteBuildersCompareUrl("wix-vs-squarespace")} className={link}>Wix vs Squarespace</Link>.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The three metrics Google emphasizes in Page Experience.">LCP, INP, and CLS in plain language</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span><strong className="text-[#1A2D48]">LCP</strong> — how fast the main visible content appears; large hero images and slow servers are common culprits.</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span><strong className="text-[#1A2D48]">INP</strong> — how snappy taps and menus feel after load; bloated scripts and chat widgets often drag this down.</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span><strong className="text-[#1A2D48]">CLS</strong> — elements shifting while the user tries to tap “call now”; fix fonts, ads, and embed sizing.</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Experience, accuracy, and proportion.">Trustworthy optimization</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    BeltStack focuses on what you can verify in field tests and Search Console—not guaranteed rank jumps. Re-test after every major template or plugin change; third-party booking and review widgets frequently matter more than hero image pixels.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Website builder picks" items={SIDEBAR} stickyTop={88} />
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
    title: "Website Speed & Core Web Vitals for Small Business | BeltStack",
    description:
      "Learn how LCP, INP, and CLS affect local SEO and conversions for service sites—and how to evaluate speed in website builders before you ship.",
  };
}
