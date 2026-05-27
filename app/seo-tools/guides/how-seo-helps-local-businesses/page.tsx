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
    q: "How does SEO help a local business specifically?",
    a: "It puts you in front of nearby customers when they search on Google—Maps, local pack, and localized organic results—without paying for every click. For many shops and service companies, that means more calls, direction requests, and form fills from people already in your market.",
  },
  {
    q: "Is local SEO different from regular SEO?",
    a: "Yes. Geography, Google Business Profile, reviews, citations, and service-area boundaries matter far more than for a national ecommerce brand. The same business type ranks differently across ZIP codes. Read local SEO for service businesses for the full three-pillar system.",
  },
  {
    q: "What results should a local business expect first?",
    a: "GBP fixes, accurate NAP, and core service pages often move within weeks. Competitive organic rankings for crowded keywords take longer. Track impressions and actions in Search Console and GBP before you judge ROI on rankings alone.",
  },
  {
    q: "Do I need SEO if I already run Google Ads?",
    a: "Ads buy placement today; SEO compounds a cheaper lead source over time. Most healthy local businesses blend both—see paid vs organic leads for how to compare economics honestly in CRM.",
  },
  {
    q: "Which tools matter most for local SEO?",
    a: "Start free: Search Console and Google Business Profile. Add BrightLocal or Whitespark when citation drift or Map Pack grids become manual bottlenecks; add Semrush when content and competitor research scale. Browse the best SEO tools roundup before annualizing contracts.",
  },
  {
    q: "Can a business with one location skip SEO?",
    a: "Only if you have another reliable demand engine—referrals, contracts, or paid leads you can afford forever. Even single-location shops lose walk-in and call volume when competitors own Maps and localized search for their services.",
  },
  {
    q: "How do I know SEO is working for my local business?",
    a: "Rising impressions on service keywords, more GBP calls and direction requests, and CRM-tagged organic leads that close. Rankings help diagnose; booked jobs prove value. See what SEO actually does for businesses for the outcome frame.",
  },
];

export default function HowSeoHelpsLocalBusinessesPage() {
  const href = "/seo-tools/guides/how-seo-helps-local-businesses";
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
                  How SEO Helps Local Businesses
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How SEO Helps Local Businesses</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Why organic search matters for shops, clinics, and service companies—and what changes when geography is part of the query. For execution detail, see{" "}
                <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                  local SEO for service businesses
                </Link>{" "}
                and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="discovery" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Discovery when customers search with intent</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Local customers rarely browse randomly—they search with a problem, a place, and urgency. SEO helps your business appear in those moments on Google Maps, the local pack, and localized organic results. That is demand you did not pay per click to intercept, and it compounds as reviews, content, and listings strengthen over time.
                </p>
                <p className="mt-4">
                  Understand the broader outcome frame in{" "}
                  <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                    what SEO actually does for businesses
                  </Link>
                  —local SEO is the geographic expression of the same discovery logic.
                </p>
              </section>

              <section id="trust" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Trust signals that ads alone cannot fake</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Reviews, photos from real jobs, consistent business information across directories, and service pages that answer pre-call questions all reinforce credibility. Google weighs these heavily for local rankings; customers use them to choose between three similar listings. SEO work on GBP, citations, and on-site proof is reputation infrastructure—not a separate marketing project.
                </p>
                <p className="mt-4">
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  help monitor listing accuracy and local rankings when manual checks stop scaling—compare them on{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  before you standardize on one vendor.
                </p>
              </section>

              <section id="website-role" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Your website closes the loop Maps starts</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Many local journeys start on Maps and finish on your site—pricing context, insurance accepted, service area map, booking form. Thin or outdated pages lose clicks that GBP earned. Align categories and services on Google Business Profile with dedicated pages that load fast on mobile and match how people search in your city.
                </p>
                <p className="mt-4">
                  Use{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  to see which local queries earn impressions; use on-site analytics—see{" "}
                  <Link href="/seo-tools/guides/is-google-analytics-an-seo-tool" className={link}>
                    is Google Analytics an SEO tool
                  </Link>{" "}
                  —to see whether those visits convert.
                </p>
              </section>

              <section id="economics" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Economics: compounding leads vs rented attention</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Paid ads stop delivering the moment you pause spend. Organic visibility decays slower when you maintain GBP, reviews, and core pages—labor and optional software replace per-click rent. That does not mean SEO is free; it means margin improves when cost per lead drops over a twelve-month horizon.
                </p>
                <p className="mt-4">
                  Compare channels with{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>{" "}
                  and tag every lead in{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  so owners see whether Maps, organic, or ads produced the booked job.
                </p>
              </section>

              <section id="research" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Research and competitive visibility</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Local owners often guess which services to promote. SEO research—Search Console queries, competitor page gaps, local keyword modifiers—turns guesswork into a publishing queue. When manual research hits a wall,{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  and similar suites on the{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tools compare hub
                  </Link>{" "}
                  help you see what rivals rank for and which pages deserve your next sprint.
                </p>
              </section>

              <section id="first-90-days" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">First 90 days: where local SEO help shows up fastest</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Prioritize actions that move discovery and trust together:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Claim and complete GBP</strong> — Categories, services, photos, hours, and review responses weekly.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Fix NAP drift</strong> — One phone and address story across top directories and your site footer.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Publish core service pages</strong> — Scope, area, proof, and FAQs—not ten thin city clones on day one.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Measure in CRM</strong> — Source tags on calls and forms so you know SEO produced revenue, not just traffic.
                  </li>
                </ul>
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
              <GuideSidebar title="SEO tools for local growth" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How SEO Helps Local Businesses (2026) | Maps, Trust & Leads | BeltStack",
    description:
      "How SEO helps local shops and service companies—discovery on Maps and search, trust signals, website conversion, channel economics, and when BrightLocal, Whitespark, or Semrush fit.",
    keywords: [
      "how SEO helps local businesses",
      "local SEO benefits",
      "SEO for local business",
      "Google Maps SEO",
      "local search leads",
      "small business local SEO",
    ],
  };
}
