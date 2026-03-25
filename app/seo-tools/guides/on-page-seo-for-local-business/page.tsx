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
    bestFor: "Free queries, coverage, and indexing signals",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Site audits, on-page ideas, and rank tracking",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Content gaps, backlinks, and competitor pages",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "How many city or location pages should I create?",
    a: "Only as many as you can make uniquely useful—distinct services, proof, FAQs, and internal links per page. Thin duplicates that swap the city name hurt more than they help and can trigger quality issues.",
  },
  {
    q: "Do I need schema markup for local SEO?",
    a: "LocalBusiness and Service schema can clarify NAP and services to Google, but they do not fix weak content. Nail accurate NAP in footer and contact blocks, clear headings, and mobile usability first—then add structured data.",
  },
  {
    q: "What should a local service page include?",
    a: "Clear H1 for the service + area, scope of work, pricing signals or ranges where appropriate, service area list, licenses and insurance, photos, FAQs, reviews or testimonials, and a visible call or form above the fold on mobile.",
  },
  {
    q: "How do I use title tags and meta descriptions?",
    a: "Put the primary service and city early in the title; keep titles readable under roughly 60 characters where possible. Meta descriptions should sell the click with specifics—same-day service, warranty, service area—not generic fluff.",
  },
  {
    q: "How important are internal links?",
    a: "Very. Link related services, parent city hubs, and blog or guide content so Google understands site structure and users find the next step. Avoid orphan pages with no path from the homepage.",
  },
  {
    q: "Should I blog as a local service business?",
    a: "Only if you will publish helpful, localized topics—seasonal maintenance, code changes, storm prep—not thin AI spam. One strong FAQ expansion per month beats ten generic posts.",
  },
  {
    q: "Which SEO tool helps most with on-page work?",
    a: "Search Console is mandatory (free). For crawls and issue tracking at scale, Semrush, Ahrefs, or SE Ranking help—see SE Ranking vs Semrush for value and Semrush vs Ahrefs for depth. Moz Pro is another mid-market option.",
  },
];

export default function OnPageSeoForLocalBusinessPage() {
  const href = "/seo-tools/guides/on-page-seo-for-local-business";
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
                  On-Page SEO for Local Business
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">On-Page SEO for Local Business</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Title tags, headings, service pages, and internal links that help Google and homeowners understand what you do and where you work. See our{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                roundup for ranked picks, and{" "}
                <Link href="/seo-tools/best-for/small-business" className={link}>
                  best SEO tools for small business
                </Link>{" "}
                for scenario context.
              </p>
              <GuideLastUpdated date="March 24, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="intent" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Match page structure to how people search</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Local searchers combine <strong className="text-[#1A2D48]">service + place + urgency modifiers</strong>: &quot;24 hour plumber Austin,&quot; &quot;AC repair near Round Rock,&quot; &quot;commercial electrician license Dallas.&quot; Your pages should map to those clusters—not a single generic &quot;services&quot; wall.
                </p>
                <p className="mt-4">
                  Align headings and copy with the same services you list on{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile
                  </Link>{" "}
                  so Maps and organic results tell a consistent story.
                </p>
              </section>

              <section id="service-pages" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Service pages that rank and convert</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Each priority service line should have:</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">One clear job-to-be-done</strong> in the H1 (what you fix or install).
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Proof blocks</strong>—photos, short case bullets, badges, years in business.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Boundary honesty</strong>—named cities, counties, or radius language that matches dispatch reality.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">FAQ section</strong> addressing price drivers, timelines, warranties, and &quot;emergency vs scheduled&quot; expectations.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Sticky mobile CTA</strong>—click-to-call and short forms; most local traffic is phone-first.
                  </li>
                </ul>
                <p className="mt-4">
                  Platform choice affects how fast you ship these pages—use{" "}
                  <Link href="/website-builders/guides/how-to-build-a-service-business-website" className={link}>
                    how to build a service business website
                  </Link>{" "}
                  and{" "}
                  <Link href="/website-builders/guides/how-to-choose-a-website-builder" className={link}>
                    how to choose a website builder
                  </Link>{" "}
                  if publishing is currently painful.
                </p>
              </section>

              <section id="location-pages" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Location and neighborhood pages without spam</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Create area pages when you have <strong className="text-[#1A2D48]">distinct proof or demand</strong>—techs stationed there, different permitting, or unique service mix. Summarize local factors (weather, soil, building age) only when accurate. Avoid doorway-style pages that exist only to capture city names.
                </p>
              </section>

              <section id="technical" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Technical hygiene that supports on-page work</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Fast mobile load, HTTPS everywhere, clean URL patterns, and crawlable navigation matter before you chase keywords. Use{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  for coverage and Core Web Vitals signals; run periodic crawls with{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>
                  ,{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  , or{" "}
                  <Link href={getSeoToolsReviewUrl("se-ranking")} className={link}>
                    SE Ranking
                  </Link>{" "}
                  after template or plugin changes.
                </p>
                <p className="mt-4">
                  Compare suites:{" "}
                  <Link href={getSeoToolsCompareUrl("se-ranking-vs-semrush")} className={link}>
                    SE Ranking vs Semrush
                  </Link>
                  ,{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>
                  , and{" "}
                  <Link href={getSeoToolsCompareUrl("ahrefs-vs-moz-pro")} className={link}>
                    Ahrefs vs Moz Pro
                  </Link>
                  .
                </p>
              </section>

              <section id="internal-links" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Internal linking and topical clusters</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Link child services to parent hubs (&quot;HVAC&quot; hub linking to &quot;furnace repair&quot; and &quot;AC tune-up&quot;). Cross-link related trades customers bundle (e.g., electrical panel upgrades near EV charger installs). Breadcrumb-style navigation helps both users and crawlers.
                </p>
              </section>

              <section id="measure" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measure what pages actually earn visibility</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  In Search Console, filter by page and query to find high-impression URLs with low CTR—often a title or meta tweak unlocks clicks. Pair that with{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  source tracking so you know which pages produce booked jobs, not just traffic. When organic is still ramping, compare{" "}
                  <Link href="/lead-generation/best-lead-generation-tools" className={link}>
                    best lead generation tools
                  </Link>{" "}
                  for paid demand. For broader local strategy, read{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-to-rank-in-google-maps" className={link}>
                    how to rank in Google Maps
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
              <GuideSidebar title="SEO tools for on-page work" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "On-Page SEO for Local Business (2026) | Service Pages & Titles | BeltStack",
    description:
      "On-page SEO for local companies: service and city pages, title tags, internal links, schema basics, and tools (Search Console, Semrush, Ahrefs, SE Ranking) sized for service businesses.",
  };
}
