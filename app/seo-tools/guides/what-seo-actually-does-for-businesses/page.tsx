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
    bestFor: "Free impressions, clicks, and indexing truth",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Keyword demand and competitor visibility",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Content gaps and backlink context",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "What does SEO actually do for a business?",
    a: "It helps the right people find you when they search—without paying for every click. For most SMBs that means more qualified calls, form fills, and store visits from organic listings, not vanity traffic from irrelevant keywords.",
  },
  {
    q: "How long before SEO shows results?",
    a: "Technical fixes and GBP updates can move within weeks. Competitive organic rankings often take three to six months of consistent pages, reviews, and links. SEO compounds; it rarely replaces this month’s payroll on day one.",
  },
  {
    q: "Is SEO the same as Google Ads?",
    a: "No. Ads buy placement; SEO earns it through relevance, site quality, and authority. Many businesses run both: paid fills capacity now while organic builds a cheaper lead source over time.",
  },
  {
    q: "Can SEO work if I only have a small website?",
    a: "Yes—especially for local and niche services. A focused site with clear service pages, fast mobile load, and accurate listings often beats a bloated competitor site. Depth beats page count when every page answers a real query.",
  },
  {
    q: "What should I measure besides rankings?",
    a: "Impressions and clicks in Search Console, calls and forms tagged in CRM, and revenue per channel. Rankings are a signal; booked jobs and margin are the outcome.",
  },
  {
    q: "Do I need expensive SEO software to get value from SEO?",
    a: "Not at first. Search Console is free and mandatory. Add Semrush, Ahrefs, or a local specialist when manual research stops scaling—see our SEO tools hub and budget guide before you stack annual contracts.",
  },
  {
    q: "What is the biggest mistake owners make with SEO?",
    a: "Treating it as a one-time project instead of operations: stale GBP, no new proof, ignored Search Console errors, and city pages that never get unique content. SEO is maintenance plus publishing, not a switch you flip once.",
  },
];

export default function WhatSeoActuallyDoesForBusinessesPage() {
  const href = "/seo-tools/guides/what-seo-actually-does-for-businesses";
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
                  What SEO Actually Does for Businesses
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">What SEO Actually Does for Businesses</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                SEO is not magic placement—it is how you show up when customers search, earn trust before the first call, and build a lead channel that does not reset when you pause ad spend. For tool picks and workflows, see the{" "}
                <Link href="/seo-tools" className={link}>
                  SEO tools hub
                </Link>
                ,{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>
                , and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  SEO tool comparisons
                </Link>
                . Ready to execute? Pair this with{" "}
                <Link href="/seo-tools/guides/how-to-seo-your-website" className={link}>
                  how to SEO your website
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="outcomes" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The outcomes owners care about</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Strip away jargon and SEO does three practical jobs: it puts you in front of people already looking for what you sell, it pre-sells with reviews and helpful pages before they contact you, and it lowers customer acquisition cost over time compared with rent-only channels like paid social or lead marketplaces.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Discovery</strong> — Organic results and Maps when someone types &quot;emergency plumber near me&quot; or &quot;HVAC maintenance [city].&quot;
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Credibility</strong> — Star ratings, photos from real jobs, licensing details, and FAQs that answer objections.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Efficiency</strong> — Clicks you do not pay for on every visit, especially once core pages rank in multiple neighborhoods.
                  </li>
                </ul>
                <p className="mt-4">
                  None of that happens without a crawlable site and accurate listings. Start measuring with{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  so you know which queries already earn impressions—even if you are not on page one yet.
                </p>
              </section>

              <section id="local-vs-national" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local service businesses vs everyone else</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  If you dispatch technicians or visit job sites, geography dominates: Google Business Profile, Map Pack rankings, and city-specific service pages matter more than a national blog strategy. Read{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  for how Maps, your site, and citations work as one system.
                </p>
                <p className="mt-4">
                  Ecommerce and SaaS still benefit from SEO, but the playbook centers on product pages, comparisons, and link earning—not driving directions. The business outcome is the same (revenue from search), the levers differ.
                </p>
              </section>

              <section id="website-role" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What your website must do in the SEO story</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Listings and ads can generate calls, but your site is where you prove scope, pricing signals, warranties, and service areas in depth. Weak on-page work wastes GBP clicks. Use{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  to align titles, internal links, and service copy with how people actually search.
                </p>
                <p className="mt-4">
                  Before you publish more content, confirm Google can index key pages—see{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics
                  </Link>
                  . A beautiful homepage that is noindexed or slow on mobile will not convert organic demand.
                </p>
              </section>

              <section id="tools-and-competition" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When research tools change the economics</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Search Console tells you what Google already shows for your domain. Paid suites like{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>{" "}
                  help when you need competitor keywords, content gaps, and audit history at scale—compare them in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>
                  . SEO software does not replace execution; it tells you where effort returns margin.
                </p>
                <p className="mt-4">
                  If budget is tight, read{" "}
                  <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                    how to optimize SEO for free
                  </Link>{" "}
                  before you buy seats you will not use weekly.
                </p>
              </section>

              <section id="realistic-expectations" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Set expectations your team can keep</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  SEO rewards consistency: monthly GBP updates, review responses, one meaningful site improvement, and fixing errors Search Console flags. It punishes shortcuts—fake locations, purchased links, duplicate city pages with no unique proof.
                </p>
                <p className="mt-4">
                  Tag leads in{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  by source so you compare organic to paid honestly. Rankings alone do not pay payroll; booked jobs do. When you are ready for a phased checklist, see{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  or the broader{" "}
                  <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                    SEO for beginners guide
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
              <GuideSidebar title="Tools to measure SEO impact" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What SEO Actually Does for Businesses (2026) | Outcomes & Measurement | BeltStack",
    description:
      "What SEO delivers for SMBs—discovery, credibility, and compounding leads—how it differs from ads, what to measure in Search Console, and when Semrush or Ahrefs add value.",
    keywords: [
      "what does SEO do for business",
      "SEO benefits for small business",
      "SEO outcomes",
      "organic search leads",
      "Google Search Console for business",
      "SEO vs paid ads",
    ],
  };
}
