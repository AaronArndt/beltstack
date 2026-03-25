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
    bestFor: "Map Pack grids, GBP workflows, and reporting",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
  {
    name: "Whitespark",
    logoSrc: "/Logos/whitespark.jpeg",
    rating: 4.5,
    bestFor: "Citations, local rank tracking, and listings",
    reviewHref: getSeoToolsReviewUrl("whitespark"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Site and content work that supports Maps relevance",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
];

const FAQ = [
  {
    q: "What actually influences Google Maps rankings?",
    a: "Google describes local ranking in terms of relevance, distance, and prominence. You control relevance (categories, services, website alignment), and you influence prominence (reviews, links, brand activity). Distance is fixed by where the searcher is—so honest service areas matter more than fake locations.",
  },
  {
    q: "Can an SEO tool guarantee #1 in the Map Pack?",
    a: "No legitimate tool can guarantee rankings. Software helps you measure grids, audit citations, and prioritize pages—execution and competition determine outcomes. Be wary of anyone promising permanent top placement.",
  },
  {
    q: "Why did my Maps rankings drop overnight?",
    a: "Common causes include competitor influx, guideline issues (keyword-stuffed names, duplicate listings), a wave of negative reviews, website downtime, or algorithm updates. Check GBP status, recent edits, and Search Console coverage in parallel.",
  },
  {
    q: "Do citations still matter for Maps?",
    a: "They support prominence and trust, especially when data is inconsistent across the web. They rarely substitute for weak relevance or bad reviews. Fix NAP drift and prioritize high-trust directories before chasing hundreds of low-quality listings.",
  },
  {
    q: "Should I use a rank grid tool?",
    a: "Grid trackers help diagnose ZIP-level visibility and justify where to improve GBP or pages. They are diagnostic—not a substitute for better photos, services, or review velocity. BrightLocal and Whitespark are common choices; read BrightLocal vs Whitespark.",
  },
  {
    q: "How do I compete with big brands in Maps?",
    a: "Out-niche them on service depth, response speed, review recency, and hyper-local proof. National brands often win on volume; local operators win on trust and specificity when they document it on GBP and the site.",
  },
  {
    q: "Maps vs organic results—which should I prioritize?",
    a: "Most service businesses need both: Maps for high-intent local callers, organic for longer research queries and supporting content. Search Console shows organic demand; GBP insights show Maps actions. Invest where your CRM shows booked jobs.",
  },
];

export default function HowToRankInGoogleMapsPage() {
  const href = "/seo-tools/guides/how-to-rank-in-google-maps";
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
                  How to Rank in Google Maps
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Rank in Google Maps</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                What moves the local pack for contractors, home services, and local operators—and what is outside your control. See the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                roundup and{" "}
                <Link href="/seo-tools/best-for/local-seo" className={link}>
                  best SEO tools for local SEO
                </Link>{" "}
                when you shortlist software; use our{" "}
                <Link href="/seo-tools/compare" className={link}>
                  SEO tool comparisons
                </Link>{" "}
                for head-to-head picks, and read{" "}
                <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                  Google Business Profile optimization
                </Link>{" "}
                for tactical GBP work.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="three-factors" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Relevance, distance, and prominence—in plain language</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Google&apos;s local ranking framework boils down to three ideas:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Relevance</strong> — Does your profile and website clearly show you offer the service the user wants? Categories, services, page titles, and content all feed relevance.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Distance</strong> — How far is the searcher from your service area or address? You cannot cheat proximity without violating guidelines; optimize the territory you legitimately cover.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Prominence</strong> — How well-known and trusted does your business appear online? Reviews, links, mentions, and consistent citations contribute here.
                  </li>
                </ul>
                <p className="mt-4">
                  Practical programs improve <strong className="text-[#1A2D48]">relevance and prominence every week</strong> while keeping service areas honest. For full-stack context, see{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>
                  .
                </p>
              </section>

              <section id="gbp-levers" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Highest-impact GBP levers you control</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-2 list-decimal space-y-3 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Correct primary category</strong> tied to how you earn revenue.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Complete services list</strong> aligned with site pages.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Photo stream</strong> of real work—uploads should continue after the first setup week.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Review velocity and owner replies</strong> that show professionalism.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Accurate hours, phone, and appointment links</strong> so Google trusts engagement signals.
                  </li>
                </ol>
              </section>

              <section id="website-signals" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Website signals that reinforce Maps</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Your site should echo GBP: same brand name variants, phone, core services, and geography. Strong{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  helps organic listings appear alongside Maps for blended SERPs. If publishing is blocked by your builder, review{" "}
                  <Link href="/website-builders/guides/best-website-builder-for-local-seo" className={link}>
                    best website builder for local SEO
                  </Link>
                  .
                </p>
              </section>

              <section id="measure-grids" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measure with grids—then fix the underlying asset</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Rank grids show where you are weak relative to competitors. Use them to decide which ZIPs need better landing pages, more reviews from jobs in that area, or adjusted service-area settings—not to chase spammy tactics.
                </p>
                <p className="mt-4">
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  are common for grids and citation workflows. Compare{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>
                  . For broader keyword research layered on top, add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  —see{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>
                  .
                </p>
              </section>

              <section id="avoid" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Tactics that backfire</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="list-disc space-y-2 pl-5">
                  <li>Keyword stuffing in the business name or fake suite numbers.</li>
                  <li>Duplicate profiles for the same crew/territory.</li>
                  <li>Review gating or incentivized reviews that violate policy.</li>
                  <li>Buying bulk citations on irrelevant directories.</li>
                  <li>Promising customers geographies you cannot serve on time.</li>
                </ul>
                <p className="mt-4">
                  Those shortcuts produce suspensions, user complaints, and churn that no dashboard recovers quickly. Trade businesses should especially read{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  for dispatch-aligned service areas.
                </p>
              </section>

              <section id="blend-paid" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When Maps is not enough: blend with paid demand</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Organic Maps gains can lag urgent revenue needs. Layer{" "}
                  <Link href="/lead-generation" className={link}>
                    lead generation
                  </Link>{" "}
                  or paid search where economics work, and keep{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  tags honest so you do not double-count leads. Guides:{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>
                  .
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
              <GuideSidebar title="SEO tools for Google Maps" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How to Rank in Google Maps (2026) | Local Pack SEO for Service Businesses | BeltStack",
    description:
      "What affects Google Maps rankings: relevance, distance, prominence, GBP optimization, reviews, citations, and tools (BrightLocal, Whitespark). No gimmicks—what works for contractors and local services.",
  };
}
