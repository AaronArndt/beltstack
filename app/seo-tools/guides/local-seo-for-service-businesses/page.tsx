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
    q: "What is local SEO for a service business?",
    a: "The work you do to show up when nearby customers search on Google—especially Maps and localized organic results. It combines your Google Business Profile, website pages that match cities and services, accurate citations, reviews, and technical health. It is not one tactic; it is a system.",
  },
  {
    q: "What matters most: citations, content, or reviews?",
    a: "All three reinforce each other. Weak GBP plus great citations still loses to a competitor with better relevance and proof. Start with accurate listings and core pages, then layer reviews and ongoing content. Use Search Console to see which queries actually drive impressions for your site.",
  },
  {
    q: "BrightLocal, Whitespark, or an all-in-one like Semrush?",
    a: "If Map Pack grids, GBP reporting, and citation cleanup are your bottleneck, BrightLocal or Whitespark often pay for themselves faster than another keyword module. If you are scaling content and competitor research, add Semrush, Ahrefs, or SE Ranking. Compare BrightLocal vs Whitespark for specialist fit; Semrush vs Ahrefs for suite depth.",
  },
  {
    q: "How is local SEO different from regular SEO?",
    a: "Local SEO adds geography and proximity: same business type ranks differently across ZIP codes. You care about service areas, driving directions, call clicks, and duplicate listing hygiene—topics that barely matter for national ecommerce. Read on-page SEO for local business for how site content should match that reality.",
  },
  {
    q: "Do I need a physical storefront?",
    a: "No, but you need a legitimate service area and staff who actually work there. Google penalizes fake addresses and keyword-stuffed names. Service-area businesses should set realistic boundaries and prove activity with reviews and photos from real jobs.",
  },
  {
    q: "Should local SEO replace paid ads?",
    a: "Usually you blend both: paid fills this week while organic compounds. See lead generation strategies for local business and paid vs organic leads. Tag sources in your CRM so you compare booked-job economics honestly.",
  },
  {
    q: "How do I prioritize if I have limited time?",
    a: "Weekly: GBP photos or posts, review responses, and one concrete site fix from Search Console. Monthly: audit top competitor pages for services you are missing, check citation drift for multi-location brands, and review which ZIPs underperform in your rank grid.",
  },
];

export default function LocalSeoForServiceBusinessesPage() {
  const href = "/seo-tools/guides/local-seo-for-service-businesses";
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
                  Local SEO for Service Businesses
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Local SEO for Service Businesses</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                How listings, your website, and reputation work together so nearby customers find you on Google Maps and search. For tool shortlists, see{" "}
                <Link href="/seo-tools/best-for/local-seo" className={link}>
                  best SEO tools for local SEO
                </Link>{" "}
                and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>
                . If your site is the bottleneck, see{" "}
                <Link href="/website-builders/best-website-builders" className={link}>
                  best website builders
                </Link>{" "}
                before you scale citations.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="pillars" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The three pillars of local SEO</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Think of local SEO as three loops that should reinforce each other every month:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Discovery surfaces</strong> — Google Business Profile, Maps, and the local pack. This is where many emergency and &quot;near me&quot; searches convert to a call.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Your website</strong> — Service and area pages that match how people search, load fast on mobile, and prove trust. Tie pages to GBP services and categories.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Authority signals</strong> — Reviews, relevant local links, consistent NAP on trusted directories, and brand mentions. These help Google trust that you are the real operator in that market.
                  </li>
                </ul>
                <p className="mt-4">
                  Skip any pillar long enough and competitors who run a balanced program will outrank you—even with weaker keyword tools. Our{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
                  </Link>{" "}
                  guide goes deeper on Maps-specific behavior.
                </p>
              </section>

              <section id="gbp-and-site" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Google Business Profile and your site must agree</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Mismatches hurt rankings and confuse customers: GBP lists &quot;water heater install&quot; but your site only mentions &quot;plumbing repair,&quot; or your site targets cities your GBP service area does not cover. Align{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization
                  </Link>{" "}
                  with{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  so services, geography, and phone numbers tell one story.
                </p>
                <p className="mt-4">
                  Use{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  to see which queries earn impressions for your site; use GBP insights for Maps actions. Together they explain whether the problem is visibility or conversion.
                </p>
              </section>

              <section id="citations" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Citations and data accuracy</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Citations are mentions of your business name, address, and phone on directories and industry sites. They matter most when you are correcting drift after a rebrand, merger, or phone change—or when you manage many locations and cannot manually spot every bad listing.
                </p>
                <p className="mt-4">
                  Specialist tools such as{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  help you find opportunities and track local rankings by grid. Read{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  before you standardize on one vendor for a franchise or agency program.
                </p>
              </section>

              <section id="content" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Content that matches local intent</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Service pages should answer the questions a homeowner asks before calling: scope, pricing signals, timeline, service area, insurance or licensing, and proof. FAQs and short video embeds can lift relevance without stuffing keywords. If you are researching what competitors rank for, use{" "}
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
                  </Link>{" "}
                  for how they differ on keyword and content workflows.
                </p>
              </section>

              <section id="blend-channels" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Blend organic local SEO with other growth channels</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Local SEO compounds but rarely fills tomorrow&apos;s board. Pair it with paid lead products or ads when you have capacity and measurement. Start with{" "}
                  <Link href="/lead-generation/guides/lead-generation-strategies-for-local-business" className={link}>
                    lead generation strategies for local business
                  </Link>
                  ,{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>
                  , and the{" "}
                  <Link href="/lead-generation/best-lead-generation-tools" className={link}>
                    best lead generation tools
                  </Link>{" "}
                  roundup. Route every lead through{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  tagging so you know whether Maps, organic, or paid produced the booked job.
                </p>
              </section>

              <section id="contractors" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Trade-specific entry point</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  If you run a crew-based trade, read{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  for a phased playbook tuned to dispatch, reviews, and service-area honesty.
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
              <GuideSidebar title="SEO tools for local visibility" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Local SEO for Service Businesses (2026) | Maps, Citations & On-Site | BeltStack",
    description:
      "What local SEO is, how Google Business Profile, citations, reviews, and your website work together, and when to use BrightLocal, Whitespark, Semrush, or Ahrefs for service companies.",
  };
}
