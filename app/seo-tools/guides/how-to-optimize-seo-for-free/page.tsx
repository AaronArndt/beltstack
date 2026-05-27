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
    bestFor: "Free queries, coverage, and URL inspection",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: 4.4,
    bestFor: "Lower-cost rank tracking when you outgrow free",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
  },
  {
    name: "Ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    rating: 4.2,
    bestFor: "Budget keyword ideas and light audits",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
  },
];

const FAQ = [
  {
    q: "Can you optimize SEO for free?",
    a: "Yes for fundamentals: Search Console, Google Business Profile, accurate NAP, solid service pages, reviews, and fixing indexing errors. Free stacks hit limits on competitor depth, large crawls, and multi-city rank history—that is when modest paid tiers help.",
  },
  {
    q: "What is the best free SEO tool?",
    a: "Google Search Console for your own site data. Pair it with GBP for local visibility. Third-party free tiers (Ubersuggest limits, etc.) are supplements, not replacements for Search Console.",
  },
  {
    q: "How long does free SEO take to work?",
    a: "Indexing fixes and GBP updates can show movement in weeks. Competitive organic rankings usually need months of consistent pages and reviews. Free does not mean instant— it means you are not paying for software yet.",
  },
  {
    q: "What should I do first with zero budget?",
    a: "Verify Search Console, claim GBP, align phone and address on site and listings, publish one strong page per core service, and request reviews from recent customers. Skip buying links or spam tools.",
  },
  {
    q: "When is it worth paying for SEO tools?",
    a: "When you manage multiple locations, need historical rank grids, or competitor keyword lists exceed manual Googling. Compare value in SE Ranking vs Semrush or read our SEO tools budget guide before annual contracts.",
  },
  {
    q: "Are free SEO plugins enough on WordPress?",
    a: "Plugins help titles and sitemaps but cannot fix thin content or fake locations. Content, listings, and technical health still dominate—plugins are helpers, not strategy.",
  },
  {
    q: "Does free SEO work for local service businesses?",
    a: "Often yes—Maps and localized queries reward relevance and proof. Follow on-page SEO for local business and technical audit basics; add BrightLocal or a suite only when citation drift or competitor research overwhelms you.",
  },
];

export default function HowToOptimizeSeoForFreePage() {
  const href = "/seo-tools/guides/how-to-optimize-seo-for-free";
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
                  How to Optimize SEO for Free
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Optimize SEO for Free</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                You can cover most SMB SEO with Google&apos;s free tools, disciplined pages, and reviews—before you spend on Semrush or Ahrefs seats. This guide lists what to do weekly, what to skip, and when paid tools earn their keep. See the{" "}
                <Link href="/seo-tools" className={link}>
                  SEO tools hub
                </Link>
                , our{" "}
                <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                  Google Search Console review
                </Link>
                , and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  SEO tool comparisons
                </Link>{" "}
                when you outgrow free.
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="free-stack" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The free stack every owner should install</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Google Search Console</strong> — Indexing, query impressions, clicks, and manual actions. Non-negotiable; details in our{" "}
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console review
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Google Business Profile</strong> — Maps visibility, calls, directions, and Q&A. Align with site copy via{" "}
                    <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                      GBP optimization
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Google Analytics (or lightweight alternative)</strong> — Behavior after the click; pair with CRM source tags for booked jobs.
                  </li>
                </ul>
                <p className="mt-4">
                  Clarify how this differs from paid suites in{" "}
                  <Link href="/seo-tools/guides/seo-vs-google-whats-the-difference" className={link}>
                    SEO vs Google
                  </Link>
                  —Google gives data about your property; SEO work is what you change on site and listings.
                </p>
              </section>

              <section id="free-work" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">High-impact free work (in priority order)</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-3 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Fix indexing blockers</strong> — Use URL Inspection and coverage reports; follow{" "}
                    <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                      technical SEO audit basics
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Publish or improve service pages</strong> — Unique H1s, scope, FAQs, photos, and internal links per{" "}
                    <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                      on-page SEO for local business
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Earn and respond to reviews</strong> — Steady recent reviews beat one burst from years ago.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Mine Search Console queries</strong> — Expand pages where you already get impressions but rank on page two.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Keep NAP consistent</strong> — Website footer, GBP, and top directories should match after any phone or address change.
                  </li>
                </ol>
              </section>

              <section id="free-research" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Free research tactics before you buy a suite</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Type candidate keywords in Google and note autosuggest, People Also Ask, and which competitors own the Map Pack. Screenshot top organic pages for each service and list sections they cover that you do not. Search Console already shows real queries for your domain—start there instead of guessing.
                </p>
                <p className="mt-4">
                  For deeper local modifiers without enterprise spend, read{" "}
                  <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                    local keyword research without enterprise tools
                  </Link>
                  . When you need a full site walkthrough in one export, follow{" "}
                  <Link href="/seo-tools/guides/how-to-seo-your-website" className={link}>
                    how to SEO your website
                  </Link>
                  .
                </p>
              </section>

              <section id="what-to-skip" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What not to waste free time on</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Skip purchased link packages, fake GBP addresses, mass AI pages with no proof, and fifty duplicate city URLs. They create cleanup costs later. Also skip stacking overlapping free trials you will not action—one disciplined month on Search Console beats three unused dashboards.
                </p>
              </section>

              <section id="when-to-pay" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When free stops being enough</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Pay when competitor keyword lists, citation audits across many locations, or historical rank grids exceed manual capacity. Mid-market options like{" "}
                  <Link href={getSeoToolsReviewUrl("se-ranking")} className={link}>
                    SE Ranking
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ubersuggest")} className={link}>
                    Ubersuggest
                  </Link>{" "}
                  bridge the gap before flagship suites—see{" "}
                  <Link href={getSeoToolsCompareUrl("se-ranking-vs-semrush")} className={link}>
                    SE Ranking vs Semrush
                  </Link>{" "}
                  and the{" "}
                  <Link href="/seo-tools/best-seo-tools" className={link}>
                    best SEO tools
                  </Link>{" "}
                  roundup. Budget planning:{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Understand the business case in{" "}
                  <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                    what SEO actually does for businesses
                  </Link>{" "}
                  so software spend ties to leads, not vanity scores.
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
              <GuideSidebar title="Free and low-cost SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How to Optimize SEO for Free (2026) | Search Console & GBP | BeltStack",
    description:
      "Free SEO for SMBs: Search Console, Google Business Profile, on-page basics, review strategy, and when to upgrade to SE Ranking, Ubersuggest, or flagship suites.",
    keywords: [
      "how to optimize SEO for free",
      "free SEO tools",
      "free SEO for small business",
      "Google Search Console free SEO",
      "SEO without paying",
      "free local SEO checklist",
    ],
  };
}
