import Link from "next/link";
import { Footer } from "@/components/Footer";
import { getSeoToolsCompareUrl, getSeoToolsReviewUrl } from "@/lib/routes";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedSeoToolsResources } from "@/components/guides/RelatedSeoToolsResources";

const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "BrightLocal", logoSrc: "/Logos/brightlocal.jpeg", rating: "4.5", bestFor: "Map Pack grids and GBP reporting", reviewHref: getSeoToolsReviewUrl("brightlocal") },
  { name: "Whitespark", logoSrc: "/Logos/whitespark.jpeg", rating: "4.5", bestFor: "Citations and local listings", reviewHref: getSeoToolsReviewUrl("whitespark") },
  { name: "Semrush", logoSrc: "/Logos/semrush.jpeg", rating: "4.6", bestFor: "Local keyword and site research", reviewHref: getSeoToolsReviewUrl("semrush") },
];

const FAQ = [
  {
    q: "What is local SEO?",
    a: "Search optimization focused on visibility for geographically relevant queries—especially Google Maps and localized organic results. It combines Google Business Profile, website pages that match services and cities, citations, reviews, and technical site health.",
  },
  {
    q: "How is local SEO different from regular SEO?",
    a: "Regular SEO often targets national or topical queries without a geography component. Local SEO adds proximity, service areas, Map Pack ranking factors, and NAP consistency across directories. The same business may need both if it ships nationwide and serves a metro area.",
  },
  {
    q: "Do I need a storefront for local SEO?",
    a: "No. Service-area businesses can rank with honest boundaries, reviews, and proof of real jobs. Fake virtual offices and keyword-stuffed business names violate guidelines and create suspension risk.",
  },
  {
    q: "What tools support local SEO?",
    a: "Free: Google Search Console and GBP. Paid local specialists: BrightLocal and Whitespark for grids and citations. Suites: Semrush or Ahrefs for keyword and content research. Compare BrightLocal vs Whitespark for specialist fit.",
  },
  {
    q: "How does local SEO relate to local SEO for beginners?",
    a: "This guide defines the discipline. The beginners guide is a 30-day execution checklist. Service businesses should graduate to local SEO for service businesses for operational depth.",
  },
  {
    q: "Can local SEO replace paid ads?",
    a: "Usually you blend both. Organic local compounds; paid fills immediate capacity. Measure booked jobs in CRM by source using paid vs organic leads frameworks.",
  },
  {
    q: "What ranking factors matter for Maps?",
    a: "Google cites relevance, distance, and prominence. You influence relevance through categories and pages, prominence through reviews and authority signals, and distance through honest service areas—not fake locations.",
  },
];

export default function WhatIsLocalSeoPage() {
  const href = "/seo-tools/guides/what-is-local-seo";
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/seo-tools" className="text-gray-500 hover:text-gray-900">SEO Tools</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/seo-tools/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">What Is Local SEO?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Local SEO?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How businesses earn visibility when nearby customers search on Google Maps and local results—and how listings, websites, and reviews work as one system.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
                  <section id="definition" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Local SEO in plain language</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Local SEO is the work that helps your business appear when someone nearby searches for what you sell—emergency plumber, HVAC repair near me, or best dentist in [city]. Most of that journey happens on Google Maps, the local pack, and localized organic links beneath the map. It is not a single toggle; it is Google Business Profile, your website, citations, reviews, and technical health working together.
                    </p>
                  </section>

                  <section id="components" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Core components of local SEO</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <ul className="mt-4 list-disc space-y-2 pl-5">
                      <li><strong className="text-[#1A2D48]">Google Business Profile</strong> — Categories, services, photos, posts, Q&A, review responses.</li>
                      <li><strong className="text-[#1A2D48]">Website alignment</strong> — Service and area pages that match how people search.</li>
                      <li><strong className="text-[#1A2D48]">Citations and NAP</strong> — Consistent name, address, phone across trusted directories.</li>
                      <li><strong className="text-[#1A2D48]">Reviews and reputation</strong> — Velocity, recency, and professional responses.</li>
                      <li><strong className="text-[#1A2D48]">Technical baseline</strong> — Crawlable, fast mobile pages behind the listing.</li>
                    </ul>
                    <p className="mt-4">
                      Playbooks:{" "}
                      <Link href="/seo-tools/guides/local-seo-for-beginners" className={link}>local SEO for beginners</Link>,{" "}
                      <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                        local SEO for service businesses
                      </Link>
                      ,{" "}
                      <Link href="/seo-tools/guides/how-seo-helps-local-businesses" className={link}>
                        how SEO helps local businesses
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="maps" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Maps vs organic local results</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      The Map Pack is often the highest-intent surface for trades. Organic local results still matter for research queries and longer-tail searches. Read{" "}
                      <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                        how to rank in Google Maps
                      </Link>{" "}
                      for Maps-specific levers and{" "}
                      <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                        on-page SEO for local business
                      </Link>{" "}
                      for site content.
                    </p>
                  </section>

                  <section id="tools" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Tools that support local SEO</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>BrightLocal</Link>{" "}
                      and{" "}
                      <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>Whitespark</Link>{" "}
                      focus on grids, citations, and GBP reporting.{" "}
                      <Link href={getSeoToolsReviewUrl("semrush")} className={link}>Semrush</Link>{" "}
                      and{" "}
                      <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>Ahrefs</Link>{" "}
                      add keyword and competitor research. See{" "}
                      <Link href="/seo-tools/best-for/local-seo" className={link}>
                        best SEO tools for local SEO
                      </Link>{" "}
                      and the{" "}
                      <Link href="/seo-tools/best-seo-tools" className={link}>best SEO tools</Link>{" "}
                      roundup.
                    </p>
                  </section>

                  <section id="who" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Who needs local SEO most</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Home services, healthcare, legal, restaurants, retail with foot traffic, and any business where customers choose based on proximity and trust. National ecommerce brands may deprioritize local unless they have stores or service territories. Contractors should also read{" "}
                      <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                        how to do SEO for contractors
                      </Link>
                      .
                    </p>
                  </section>

                  <section id="start" className="scroll-mt-section">
                    <h2 className="text-[#1A2D48] text-xl font-bold">Where to start this week</h2>
                    <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                    <p>
                      Claim and verify GBP, align one strong service page, connect Search Console, and request reviews from recent customers. Avoid buying citation packages before your core data is accurate. Free path:{" "}
                      <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                        how to optimize SEO for free
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
              <GuideSidebar title="Local SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Is Local SEO? (2026) | Maps, GBP & Local Search | BeltStack",
    description:
      "What local SEO is—GBP, website, citations, reviews, Maps vs organic, tools, who needs it, and where to start.",
    keywords: ["what is local SEO", "local SEO definition", "Google Maps SEO", "local search optimization", "GBP SEO"],
  };
}
