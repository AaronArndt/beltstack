import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Google Search Console",
    logoSrc: "/Logos/google.jpeg",
    rating: 4.8,
    bestFor: "DIY indexing and queries",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Optional audits and keywords",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: 4.2,
    bestFor: "Beginner-friendly tracking",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
  },
];

const FAQ = [
  {
    q: "Can you do SEO yourself as a business owner?",
    a: "Yes—especially for local service businesses with a clear service area. You can own Search Console, GBP, reviews, and core service pages without a computer science degree. You struggle when you need large technical migrations, multilingual sites, or enterprise-scale content programs.",
  },
  {
    q: "How many hours per week does DIY SEO take?",
    a: "Plan 1–2 hours weekly for maintenance once foundations exist, plus occasional half-days for new service pages or post-migration audits. Sporadic bursts beat ignoring it for six months.",
  },
  {
    q: "What should I DIY vs outsource?",
    a: "DIY: GBP updates, review responses, accurate NAP, basic service copy, Search Console checks. Outsource: complex site rebuilds, penalty recovery, large-scale link campaigns, and competitive content programs if you lack writing bandwidth.",
  },
  {
    q: "Do I still need paid SEO tools if I DIY?",
    a: "Not on day one. Add one suite when free data is not enough—see are SEO tools worth it and how to budget for SEO tools before you stack subscriptions.",
  },
  {
    q: "Is DIY SEO slower than hiring an agency?",
    a: "Often slower for content volume, but faster for trust signals only you control—photos from real jobs, accurate service areas, and authentic review follow-up. Agencies cannot fake operational truth.",
  },
  {
    q: "What is the biggest DIY mistake?",
    a: "Buying tools before fixing basics—wrong phone on the site, keyword-stuffed GBP names, or dozens of thin city pages. Fix crawlability and alignment first.",
  },
  {
    q: "Where should a DIY owner start this month?",
    a: "Verify Search Console, align GBP with your top three services, publish or improve one service page with proof and a clear call button, and set a weekly reminder to respond to reviews.",
  },
];

export default function CanYouDoSeoYourselfPage() {
  const href = "/seo-tools/guides/can-you-do-seo-yourself";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="pt-8 pb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">
                    SEO Tools
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">
                    Guides
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Can You Do SEO Yourself?
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Can You Do SEO Yourself?</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                What owners can realistically handle in-house, what to outsource, and the minimum free stack before you buy software. For tool ROI, see{" "}
                <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                  are SEO tools worth it
                </Link>{" "}
                and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="yes-with-limits" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Yes—with honest limits on time and scope</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Most small service businesses can run a credible SEO program without hiring a full-time specialist. You already know your services, service area, and what customers ask before they book. SEO is largely making that knowledge visible to Google: accurate listings, clear pages, reviews, and a site Google can crawl.
                </p>
                <p className="mt-4">
                  DIY breaks down when the work is technical at scale—migrations, international hreflang, complex ecommerce faceted navigation—or when you need dozens of net-new pages per quarter and nobody on staff writes.
                </p>
              </section>

              <section id="diy-list" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What owners and ops teams can DIY well</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Google Business Profile</strong> — Categories, services, photos from jobs, Q&A, and review responses. See{" "}
                    <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                      Google Business Profile optimization
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Core service pages</strong> — Plain-language scope, pricing signals, service area, licenses, and proof. See{" "}
                    <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                      on-page SEO for local business
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Search Console hygiene</strong> — Coverage checks, sitemap submission, fixing indexing errors on money pages.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Review generation</strong> — Asking happy customers systematically; never buying fake reviews.
                  </li>
                </ul>
              </section>

              <section id="outsource" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What to outsource or hire for</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Consider help when stakes are high and mistakes are expensive: replatforming the website, recovering from a manual action, building hundreds of location pages with unique content, or competing in dense metros where competitors publish weekly.
                </p>
                <p className="mt-4">
                  Agencies and freelancers should work inside your accounts—Search Console and GBP stay under your Google login. Ask for a backlog tied to booked leads, not only keyword position reports.
                </p>
              </section>

              <section id="free-stack" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Minimum DIY stack (mostly free)</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Start with{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>
                  , GBP, and a reliable site—if needed, pick from{" "}
                  <Link href="/website-builders/best-website-builders" className={link}>
                    best website builders
                  </Link>{" "}
                  before you pay for audits. Add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>
                  ,{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  , or{" "}
                  <Link href={getSeoToolsReviewUrl("moz-pro")} className={link}>
                    Moz Pro
                  </Link>{" "}
                  when you need rank tracking, crawls, or competitor exports—compare in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>
                  .
                </p>
              </section>

              <section id="30-day-plan" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">A 30-day DIY starting plan</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>Verify Search Console; fix coverage errors on top three service URLs.</li>
                  <li>Align GBP categories, services, and phone with the website.</li>
                  <li>Improve one service page with photos, FAQs, and a prominent call CTA.</li>
                  <li>Request reviews from this week&apos;s completed jobs; respond to all existing reviews.</li>
                  <li>Set a weekly calendar block for SEO—treat it like preventive maintenance.</li>
                </ol>
                <p className="mt-4">
                  Trades should layer{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  on top of this plan. For ongoing rhythm, read{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>
                  .
                </p>
              </section>

              <section id="when-not-diy" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When DIY is the wrong bet</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  If SEO has been neglected for years in a competitive market, DIY alone may lag while payroll continues. Blend outsourced technical fixes with in-house trust signals you control. And if you are evaluating software spend, read{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  so subscriptions match tasks you will actually perform.
                </p>
              </section>
            </div>

            <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
              <h2 className="text-[#1A2D48] text-2xl font-bold">FAQs</h2>
              <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
              <GuideFaqSection faqs={FAQ} />
            </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="DIY-friendly SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedSeoToolsResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Can You Do SEO Yourself? (2026) | DIY Guide for Small Business | BeltStack",
    description:
      "What business owners can handle in-house for SEO—GBP, service pages, Search Console—and when to outsource, plus a 30-day DIY plan and tool choices.",
  };
}
