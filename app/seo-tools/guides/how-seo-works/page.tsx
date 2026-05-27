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
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "Map Pack grids, citations, and GBP reporting",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    name: "Whitespark",
    logoSrc: "/Logos/whitespark.jpeg",
    rating: 4.5,
    bestFor: "Citation finder and local listing work",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Keyword research, audits, and rank tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
];

const FAQ = [
  {
    q: "How does SEO work in simple terms?",
    a: "Search engines crawl the web, store pages in an index, and retrieve ranked results when someone searches. SEO aligns your site and listings so crawlers understand your pages, index the right URLs, and rank you for queries where you are a credible answer.",
  },
  {
    q: "What are Google's ranking factors?",
    a: "Google uses many signals—relevance, content quality, usability, links, and localized context among them—but does not publish a fixed checklist. Focus on what you can control: accurate listings, fast mobile pages, helpful content, and legitimate reputation signals.",
  },
  {
    q: "Why do rankings change so often?",
    a: "Competitors publish and update, Google runs algorithm updates, and user behavior shifts seasonally. Rank tracking over weeks—not days—shows real trends. Use Search Console and a rank tracker to separate noise from structural drops.",
  },
  {
    q: "How is local SEO different in how it works?",
    a: "Local results blend proximity, relevance, and prominence—Maps packs can show different businesses across neighborhoods. GBP data, reviews, and service-area honesty weigh heavily. See how to rank in Google Maps for Maps-specific levers.",
  },
  {
    q: "Do backlinks still matter?",
    a: "Yes, but quality and relevance beat volume. Local businesses often win with citations, reviews, and strong service pages before chasing national links. Enterprise content sites lean more on link gap analysis in Ahrefs or Semrush.",
  },
  {
    q: "Can AI content rank?",
    a: "Google rewards helpful, reliable content regardless of production method—unhelpful mass-generated pages do not. Edit AI drafts for accuracy, experience, and brand voice; prioritize pages where you have real expertise.",
  },
];

export default function HowSeoWorksPage() {
  const href = "/seo-tools/guides/how-seo-works";
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
                  How SEO Works
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How SEO Works</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Crawling, indexing, ranking, and the practical signals Google weighs when it decides what to show—explained without myth or guaranteed formulas. Pair this mental model with{" "}
                <Link href="/seo-tools/guides/how-to-perform-seo" className={link}>
                  how to perform SEO
                </Link>
                , tool picks from{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>
                , and the broader{" "}
                <Link href="/seo-tools" className={link}>
                  SEO tools hub
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="crawl-index-rank" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Crawl, index, rank: the search engine loop</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Google discovers URLs by following links and sitemaps, then crawls HTML and resources. Worthy pages enter the index—a searchable catalog of content Google might show. At query time, Google retrieves candidates, scores them, and assembles the SERP you see—including featured snippets, Maps packs, and ads on many queries.
                </p>
                <p className="mt-4">
                  SEO breaks if any step fails. Blocked crawls mean no index entry. Indexed thin duplicates mean the wrong URL competes with your money page. Strong index presence with weak relevance means impressions without clicks.{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  shows where you sit in that pipeline for your property.
                </p>
              </section>

              <section id="ranking-signals" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Ranking signals you can influence</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Relevance</strong> — Does the page clearly answer the query? Titles, headings, body copy, and structured data help Google match intent.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Quality and trust</strong> — Accurate information, visible authorship or business identity, reviews, and reputable links signal legitimacy.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Usability</strong> — Mobile-friendly layout, reasonable load times, and safe HTTPS. Technical issues can suppress otherwise good content.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Context</strong> — Device, location, and personalization change results. Two searchers rarely see identical SERPs for local or personalized queries.
                  </li>
                </ul>
                <p className="mt-4">
                  Research tools estimate difficulty and gaps—{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>{" "}
                  excel here. Compare them in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  before standardizing workflows.
                </p>
              </section>

              <section id="local-mechanics" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">How local SEO works differently</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  For many service queries, Google blends organic results with a Map Pack tied to Google Business Profile listings. Proximity matters: a strong plumber three miles away may outrank a weaker one across town. Prominence—reviews, links, and brand search—helps you compete beyond pure distance.
                </p>
                <p className="mt-4">
                  Align GBP with site content via{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
                  </Link>
                  . Track grid rankings with{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  when ZIP-level visibility is a KPI—compare in{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>
                  .
                </p>
              </section>

              <section id="measurement" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">How to measure whether SEO is working</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Rankings alone mislead—personalization and SERP features shift daily. Better metrics: organic impressions and clicks in Search Console, conversions from organic landing pages, call and form volume from local listings, and branded search growth over quarters.
                </p>
                <p className="mt-4">
                  Layer rank tracking when you need geo-specific history or client reports. Tie insights back to actions documented in{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  or{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>
                  . Browse{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tool comparisons
                  </Link>{" "}
                  when you outgrow manual spreadsheets.
                </p>
              </section>

              <section id="myths" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What SEO is not</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  SEO is not a one-time plugin install, keyword density math, or buying bulk links. It is not instant, and no tool grants immunity from Google guidelines. Algorithm updates reward sites that consistently improve usefulness—not tactics designed to exploit loopholes.
                </p>
                <p className="mt-4">
                  New to the discipline? Read{" "}
                  <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                    SEO for beginners
                  </Link>{" "}
                  and understand{" "}
                  <Link href="/seo-tools/guides/what-is-seo-software" className={link}>
                    what SEO software
                  </Link>{" "}
                  contributes versus strategy and execution you still own.
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
              <GuideSidebar title="Tools to observe SEO" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How SEO Works (2026) | Crawling, Indexing, Ranking & Local | BeltStack",
    description:
      "How search engines crawl, index, and rank pages; ranking signals you control; local Maps mechanics; measurement beyond vanity rankings; and where Semrush, Ahrefs, and BrightLocal fit.",
    keywords: [
      "how SEO works",
      "search engine optimization explained",
      "Google ranking factors",
      "crawl index rank",
      "local SEO how it works",
      "SEO measurement",
    ],
  };
}
