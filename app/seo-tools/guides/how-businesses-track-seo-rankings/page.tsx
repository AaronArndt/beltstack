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
    bestFor: "Average position and query trends",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: 4.4,
    bestFor: "Affordable keyword rank tracking",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Local Map Pack rank grids",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const FAQ = [
  {
    q: "How do businesses track SEO rankings?",
    a: "Most combine Google Search Console for query-level trends, rank-tracking software for keyword positions over time, and—for local businesses—Map Pack grid tools. They tie movement to actions: page updates, GBP changes, review velocity—not vanity position alone.",
  },
  {
    q: "Is Google Search Console enough for rank tracking?",
    a: "For many SMBs, yes for organic queries on your own site—impressions, clicks, and average position by page and query. It does not track Map Pack positions by ZIP, competitor keywords, or daily rank history for arbitrary keyword lists.",
  },
  {
    q: "What keywords should a small business track?",
    a: "A short list tied to revenue: core service terms, top geo modifiers you truly serve, and branded queries. Ten to thirty keywords beats tracking hundreds you will never optimize pages for.",
  },
  {
    q: "How is local rank tracking different?",
    a: "Map Pack rankings change by searcher location. Grid tools sample positions across ZIP codes—useful for service-area businesses, expensive if you blanket every block. Sample representative grids instead of infinite coverage.",
  },
  {
    q: "How often should rankings be checked?",
    a: "Weekly snapshots for priority keywords; monthly reviews for leadership. Daily obsession adds noise—Google fluctuates. Focus on trend direction after meaningful site or GBP changes.",
  },
  {
    q: "Which SEO tool is best for rank tracking?",
    a: "SE Ranking and Moz Pro cover SMB organic tracking affordably. Semrush and Ahrefs bundle rank tracking with research suites. BrightLocal and Whitespark focus on local grids—compare BrightLocal vs Whitespark for Map Pack workflows.",
  },
  {
    q: "Should rankings be the main SEO KPI?",
    a: "No. Pair position trends with Search Console clicks, GBP actions, and booked jobs in your CRM. Rankings without pipeline impact often reflect low-intent phrases or page-one positions with weak titles and meta.",
  },
];

export default function HowBusinessesTrackSeoRankingsPage() {
  const href = "/seo-tools/guides/how-businesses-track-seo-rankings";
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
                  How Businesses Track SEO Rankings
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Track SEO Rankings</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Search Console, rank trackers, and local grids—what to measure, how often, and which KPIs matter beyond position. For tool tiers, see{" "}
                <Link href="/seo-tools/guides/how-much-seo-software-costs" className={link}>
                  how much SEO software costs
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
              <section id="three-layers" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Three layers businesses combine</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Effective rank tracking stacks complementary sources—not one dashboard pretending to show everything:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Search Console</strong> — How Google reports your average position and clicks for queries that actually triggered impressions.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Rank trackers</strong> — Scheduled checks for a defined keyword list (
                    <Link href={getSeoToolsReviewUrl("se-ranking")} className={link}>
                      SE Ranking
                    </Link>
                    ,{" "}
                    <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                      Semrush
                    </Link>
                    ,{" "}
                    <Link href={getSeoToolsReviewUrl("moz-pro")} className={link}>
                      Moz Pro
                    </Link>
                    ).
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Local grids</strong> — Map Pack sampling by geography via{" "}
                    <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                      BrightLocal
                    </Link>{" "}
                    or{" "}
                    <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                      Whitespark
                    </Link>{" "}
                    when organic URL rank is not the whole story.
                  </li>
                </ul>
              </section>

              <section id="search-console" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Start with Search Console for query reality</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  is free and authoritative for your properties. Filter Performance by page to see which URLs gain or lose impressions after rewrites. Compare query rows month over month—not daily noise—to spot whether a service page is earning visibility for the phrases you targeted.
                </p>
                <p className="mt-4">
                  Search Console does not replace dedicated rank trackers for competitor benchmarks or Map Pack grids, but it anchors internal reporting in data Google actually uses for clicks.
                </p>
              </section>

              <section id="keyword-list" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Build a short, revenue-linked keyword list</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Businesses that track everything track nothing useful. Curate keywords from{" "}
                  <Link href="/seo-tools/guides/how-businesses-find-seo-keywords" className={link}>
                    how businesses find SEO keywords
                  </Link>
                  : head service terms, priority geo modifiers, and brand variants. Assign each keyword to one primary URL so rank movement maps to a page you can improve.
                </p>
                <p className="mt-4">
                  Avoid tracking national informational phrases your service pages will never win—intent mismatch creates false frustration in monthly reports.
                </p>
              </section>

              <section id="local-grids" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local businesses add Map Pack grids selectively</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Organic URL rank and Map Pack rank diverge—especially for &quot;near me&quot; queries. Grid tools sample positions across coordinates so you see whether you dominate your home ZIP but disappear five miles out. That informs service-area honesty and where to collect reviews and photos.
                </p>
                <p className="mt-4">
                  Grid credits scale cost quickly—sample representative points rather than blanket coverage. Read{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
                  </Link>{" "}
                  before you over-buy local tracking.
                </p>
              </section>

              <section id="cadence" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Set a cadence and tie movement to actions</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Weekly: scan priority keywords and GBP insights for anomalies. Monthly: review Search Console trends, note page changes shipped, and correlate with rank direction. Document what you changed—a new service section, citation cleanup, review push—so the team learns cause and effect.
                </p>
                <p className="mt-4">
                  Align with the operating rhythm in{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>
                  . Rank tracking without a execution calendar produces anxiety, not growth.
                </p>
              </section>

              <section id="kpis" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Pair rankings with outcomes that pay bills</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Leadership should see clicks, calls, form fills, and booked jobs—not position #4 vs #6 alone. Tag lead sources in{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  so organic and Maps contributions show up in pipeline reviews alongside paid channels.
                </p>
                <p className="mt-4">
                  When rank trackers become necessary, budget keyword and grid limits via{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools and subscriptions
                  </Link>{" "}
                  and compare suites in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  if research and tracking will share one subscription.
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
              <GuideSidebar title="Rank tracking tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Businesses Track SEO Rankings (2026) | Search Console & Tools | BeltStack",
    description:
      "How businesses track SEO rankings: Search Console, rank trackers, local Map Pack grids, keyword lists, reporting cadence, and KPIs beyond position alone.",
  };
}
