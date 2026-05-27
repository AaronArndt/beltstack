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
    q: "What is SEO in simple terms?",
    a: "Search engine optimization is the ongoing work to make your site and listings easier for Google to understand and more useful for searchers—so you earn clicks from people looking for what you offer. It blends technical health, relevant content, and trust signals rather than one quick trick.",
  },
  {
    q: "How long does SEO take for beginners?",
    a: "Expect measurable movement in three to six months for competitive topics if fundamentals are solid; local service businesses sometimes see earlier Maps gains when Google Business Profile and core pages are fixed. SEO compounds—early months build the foundation later gains ride on.",
  },
  {
    q: "Do I need to learn coding to do SEO?",
    a: "Basic SEO is accessible without engineering: titles, headings, internal links, GBP updates, and Search Console checks. Developers help for migrations, schema, and performance fixes, but owners can drive most SMB programs with clear priorities and the right tools.",
  },
  {
    q: "What free tools should beginners use first?",
    a: "Google Search Console for indexing and queries, Google Business Profile for local visibility, and Google Analytics or a lightweight analytics alternative for traffic trends. Add Semrush or Ahrefs when keyword research outgrows autocomplete and competitor manual checks.",
  },
  {
    q: "Is SEO better than paid ads?",
    a: "They solve different timelines. Paid ads can fill pipeline this week; SEO builds durable visibility that does not stop when you pause spend. Most growing businesses blend both and measure cost per booked job—not just clicks.",
  },
  {
    q: "What is the biggest beginner mistake?",
    a: "Chasing tactics without fixing the site: broken indexing, thin pages, or a GBP that contradicts the website. Read how SEO works, run a small technical pass, then publish content that matches real search intent.",
  },
];

export default function SeoForBeginnersCompleteGuidePage() {
  const href = "/seo-tools/guides/seo-for-beginners-a-complete-guide";
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
                  SEO for Beginners
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">SEO for Beginners: A Complete Guide</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical starting path for owners and marketers: what SEO is, how Google decides what to show, the first fixes that matter, and when to add tools beyond free Google products. Browse the{" "}
                <Link href="/seo-tools/guides" className={link}>
                  SEO guides library
                </Link>
                , compare products on{" "}
                <Link href="/seo-tools/compare" className={link}>
                  SEO tool comparisons
                </Link>
                , and see curated picks in{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="basics" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">SEO basics: what you are optimizing for</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  SEO is not about fooling an algorithm—it is about aligning your site and listings with what searchers want. Google crawls pages, indexes what it trusts, and ranks results by relevance, quality, and context (including location for many queries). Your job is to remove barriers to crawling, publish clear answers, and earn signals that you are a legitimate option.
                </p>
                <p className="mt-4">
                  Beginners often jump to keywords before confirming Google can index their site. Install{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  on day one and verify ownership. Coverage reports beat any third-party &quot;SEO score&quot; for grounding reality.
                </p>
              </section>

              <section id="three-pillars" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The three pillars every beginner should learn</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Technical SEO</strong> — Can Google access, render, and index your pages? HTTPS, sitemaps, mobile usability, and clean URLs live here. Start with{" "}
                    <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                      technical SEO audit basics
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">On-page SEO</strong> — Titles, headings, body copy, internal links, and media that match search intent. Local businesses should read{" "}
                    <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                      on-page SEO for local business
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Off-page signals</strong> — Reviews, citations, brand mentions, and links that vouch for you. For service companies,{" "}
                    <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                      local SEO for service businesses
                    </Link>{" "}
                    ties these together with Maps visibility.
                  </li>
                </ul>
                <p className="mt-4">
                  Deepen the mechanics in{" "}
                  <Link href="/seo-tools/guides/how-seo-works" className={link}>
                    how SEO works
                  </Link>{" "}
                  once you know which pillar is weakest.
                </p>
              </section>

              <section id="first-30-days" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Your first 30 days: a beginner checklist</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>Claim Search Console and submit your sitemap; fix critical indexing errors.</li>
                  <li>Audit Google Business Profile (if local): categories, services, photos, and NAP match your site.</li>
                  <li>Identify five to ten pages that should drive revenue; improve titles and one paragraph of intent-matching copy each.</li>
                  <li>Collect three genuine reviews from recent customers and respond to existing feedback.</li>
                  <li>Document baseline rankings or Search Console impressions so progress is measurable.</li>
                </ol>
                <p className="mt-4">
                  When you are ready for keyword expansion beyond autocomplete, trial{" "}
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
                  for workflow differences. Local operators may prefer{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  for rank grids first.
                </p>
              </section>

              <section id="content-intent" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Content and search intent for beginners</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Every page should map to one primary intent: learn something, compare options, or hire/buy now. A blog post titled &quot;how to fix a leaky faucet&quot; serves a different searcher than &quot;emergency plumber near me.&quot; Match format to intent—guides for learning, service pages for commercial queries, location pages when geography matters.
                </p>
                <p className="mt-4">
                  Use Search Console query reports to see how Google already associates your site with topics. Double down on pages gaining impressions with weak click-through—often a title or meta refresh is enough. For local modifiers, read{" "}
                  <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                    local keyword research without enterprise tools
                  </Link>
                  .
                </p>
              </section>

              <section id="tools-and-next" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When to add paid tools and what to read next</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Free Google products carry most beginners surprisingly far. Pay when you need scale: competitor gap analysis, multi-location rank tracking, automated crawl monitoring, or client reporting. Understand categories in{" "}
                  <Link href="/seo-tools/guides/what-is-seo-software" className={link}>
                    what is SEO software
                  </Link>{" "}
                  and plan spend with{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Move from learning to execution with{" "}
                  <Link href="/seo-tools/guides/how-to-perform-seo" className={link}>
                    how to perform SEO
                  </Link>
                  . Trades and field crews should also scan{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  for a phased playbook tuned to dispatch-heavy businesses.
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
              <GuideSidebar title="Starter SEO tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "SEO for Beginners: Complete Guide (2026) | First Steps & Free Tools | BeltStack",
    description:
      "Beginner-friendly SEO guide: three pillars, 30-day checklist, search intent basics, free Google tools vs Semrush/Ahrefs, and links to local SEO and execution playbooks.",
    keywords: [
      "SEO for beginners",
      "learn SEO",
      "SEO basics",
      "beginner SEO checklist",
      "Google Search Console setup",
      "local SEO for beginners",
    ],
  };
}
