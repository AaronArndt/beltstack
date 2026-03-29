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
const href = "/website-builders/guides/website-builder-pricing-and-hidden-costs";

const FAQ = [
  { q: "What is included in advertised builder pricing?", a: "Usually hosting and editor access on a tiered feature grid. Domains, email mailboxes, premium templates, booking, memberships, and transaction fees are often additive—read checkout carefully." },
  { q: "When does Shopify-style pricing differ from Wix?", a: "When you sell products or take payments, payment processor fees and app subscriptions can exceed the listed SaaS price. Model total cost per $10k of sales plus staff time for catalog upkeep." },
  { q: "Should I pay annually?", a: "Annual locks discounts but reduces flexibility if you pivot builders after a disappointing launch—pilot monthly when you are unsure, then commit if adoption sticks." },
];

const SIDEBAR: GuideSidebarItem[] = [
  { name: "Wix", logoSrc: "/Logos/wix.png", rating: 4.6, bestFor: "Predictable tiers", reviewHref: getWebsiteBuildersReviewUrl("wix") },
  { name: "Squarespace", logoSrc: "/Logos/squarespace.png", rating: 4.4, bestFor: "Bundled aesthetics", reviewHref: getWebsiteBuildersReviewUrl("squarespace") },
  { name: "Shopify", logoSrc: "/Logos/shopify.png", rating: 4.5, bestFor: "Commerce fee math", reviewHref: getWebsiteBuildersReviewUrl("shopify") },
];

export default function WebsiteBuilderPricingHiddenCostsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Pricing &amp; Hidden Costs</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Website Builder Pricing &amp; Hidden Costs</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Subscriptions, domains, apps, and payment fees—how to budget the full first-year cost of a builder-backed site for a local business.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8 space-y-4 text-[15px] leading-relaxed text-neutral-700">
                  <p>
                    Buyer intent is affordability without surprises. Start from your must-have workflows: quote forms, scheduling, ecommerce SKUs, or multi-location pages. Each unlock may sit on a higher tier or a paid app—model those before comparing headline monthly prices.
                  </p>
                  <p>
                    Use <Link href="/website-builders/guides/how-to-choose-a-website-builder" className={link}>how to choose a website builder</Link>,{" "}
                    <Link href="/website-builders/compare" className={link}>website builder comparisons</Link>, and{" "}
                    <Link href={getWebsiteBuildersCompareUrl("wix-vs-shopify")} className={link}>Wix vs Shopify</Link> when commerce is central. For paid demand, see{" "}
                    <Link href="/lead-generation" className={link}>lead generation</Link> once the site can convert traffic.
                  </p>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Line items to put in a spreadsheet.">Common cost buckets</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Domain registration and WHOIS privacy</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Business email (workspace or forwarding)</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Premium templates, fonts, or stock libraries</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Booking, CRM form, chat, or review widgets</span></li>
                    <li className="flex gap-2"><span className="text-[#10B981] shrink-0">•</span><span>Payment processing and chargeback risk for online sales</span></li>
                  </ul>
                </section>
                <section className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Verify on current pricing pages.">Clear sourcing</SectionTitle>
                  <p className="text-[15px] leading-relaxed text-neutral-700">
                    Vendor pricing changes frequently. Use this framework in sales calls and trials; confirm numbers on official pricing pages and in checkout—not from screenshots in older reviews. Our <Link href="/website-builders/best-website-builders" className={link}>best website builders</Link> roundup links to individual reviews for feature depth.
                  </p>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <GuideFaqSection faqs={FAQ} />
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Builder reviews" items={SIDEBAR} stickyTop={88} />
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
    title: "Website Builder Pricing & Hidden Costs (ecommerce, apps, domains) | BeltStack",
    description:
      "Budget website builders realistically: domains, email, templates, apps, booking widgets, and payment fees—before you lock in a year of subscription.",
  };
}
