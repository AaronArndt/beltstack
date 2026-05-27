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
    bestFor: "Queries you already rank for",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Volume and competitor exports",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Content gaps and SERP context",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "How do businesses find SEO keywords without guessing?",
    a: "They combine customer language from sales and dispatch, Search Console query data, competitor page structure, and—when scale demands it—paid research tools. The goal is page types that match intent, not a thousand-row spreadsheet nobody acts on.",
  },
  {
    q: "What is the first place to look for keyword ideas?",
    a: "Google Search Console for queries that already earn impressions on your site. Those phrases tell you how Google maps your business today—often surfacing gaps between what you sell and what your pages actually say.",
  },
  {
    q: "Do small businesses need Semrush or Ahrefs to find keywords?",
    a: "Not initially. Many service companies cover core demand with Search Console, GBP services, and manual competitor review. Add a suite when you need volume estimates, large exports, or many service-and-city combinations.",
  },
  {
    q: "How is local keyword discovery different?",
    a: "Geography and urgency dominate—'near me,' city names, and emergency modifiers map to GBP categories and service pages, not generic blogs. See local keyword research without enterprise tools for a free-first local workflow.",
  },
  {
    q: "Should I target every keyword a tool suggests?",
    a: "No. Prioritize phrases tied to services you actually deliver, pages you can prove with photos and reviews, and intent that leads to calls—not national informational topics with no conversion path.",
  },
  {
    q: "How often should businesses refresh keyword research?",
    a: "Quarterly for most SMBs, or after you add services, enter new markets, or see impression shifts in Search Console. Weekly work should focus on execution—shipping and improving pages—not endless list building.",
  },
  {
    q: "What is the biggest keyword research mistake?",
    a: "Research without publishing. Teams export lists but never assign clusters to URLs, align GBP services, or ship the service page. Map keywords to page types, then execute—see how SEO keyword research works for the full framework.",
  },
];

export default function HowBusinessesFindSeoKeywordsPage() {
  const href = "/seo-tools/guides/how-businesses-find-seo-keywords";
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
                  How Businesses Find SEO Keywords
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Find SEO Keywords</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Practical sources—from customer calls to Search Console and competitor pages—and when paid tools earn a seat. For the research framework, see{" "}
                <Link href="/seo-tools/guides/how-seo-keyword-research-works" className={link}>
                  how SEO keyword research works
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                  local keyword research without enterprise tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="start-with-customers" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Start with how customers describe the job</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  The best keyword lists begin outside SEO tools. Dispatch notes, sales call summaries, and review text reveal the phrases people use before they know your brand—&quot;no hot water,&quot; &quot;roof leak after storm,&quot; &quot;HVAC not cooling upstairs.&quot; Those modifiers often become FAQ sections, GBP services, or dedicated service pages.
                </p>
                <p className="mt-4">
                  Capture language weekly in a shared doc or CRM field. When the same phrase appears three times from real jobs, it deserves a place on the site—not because a tool scored it high, but because buyers already say it.
                </p>
              </section>

              <section id="search-console" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Use Search Console to see what Google already associates with you</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  shows queries earning impressions and clicks for your URLs. Export the Performance report monthly and look for:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">High impressions, low clicks</strong> — Title or meta may not match intent; the page may rank on page two.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Unexpected queries</strong> — Google maps you to phrases you never optimized for; decide whether to strengthen or redirect that intent.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Missing services</strong> — Competitors rank for jobs you perform but your nav never names.
                  </li>
                </ul>
                <p className="mt-4">
                  This free layer answers &quot;what is happening on my site today&quot; before you pay for volume estimates on phrases you do not yet deserve to rank for.
                </p>
              </section>

              <section id="competitors" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Learn from competitor page structure</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Manual competitor review still works for most SMBs: open three local rivals, note which services appear in main navigation, how they title area pages, and what proof they show. You are not copying—you are validating which page types Google rewards in your market.
                </p>
                <p className="mt-4">
                  When manual review exceeds a few hours weekly, add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>{" "}
                  for keyword gaps and SERP features—compare in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  before buying both.
                </p>
              </section>

              <section id="local-modifiers" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Layer local modifiers only where you can prove coverage</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Service businesses add geography and urgency: city names, &quot;near me,&quot; same-day, and emergency variants. Those phrases should align with GBP categories and{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>
                  —not scatter across thin duplicate pages.
                </p>
                <p className="mt-4">
                  For a budget-conscious local workflow without enterprise spend, follow{" "}
                  <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                    local keyword research without enterprise tools
                  </Link>
                  . It covers Maps Pack intent, modifiers, and when free data is enough.
                </p>
              </section>

              <section id="map-to-pages" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Map findings to page types, then ship</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Cluster phrases by intent and assign one primary URL type per cluster: core service page, selective area page with unique proof, or FAQ block on an existing URL. The framework in{" "}
                  <Link href="/seo-tools/guides/how-seo-keyword-research-works" className={link}>
                    how SEO keyword research works
                  </Link>{" "}
                  explains intent scoring and prioritization—this guide focuses on where businesses actually pull ideas from.
                </p>
                <p className="mt-4">
                  Stop researching when you can name the page, the proof you will show, and the call-to-action. Execution beats list size—see{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>{" "}
                  for the weekly cadence that turns research into rankings.
                </p>
              </section>

              <section id="when-tools" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When to add paid keyword tools</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Upgrade when free sources cannot answer: estimated volume at scale, competitor keyword exports, content gap analysis across dozens of URLs, or multi-location service-and-city matrices. Read{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/free-vs-paid-seo-tools" className={link}>
                    free vs paid SEO tools
                  </Link>{" "}
                  before stacking subscriptions you will not log into weekly.
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
              <GuideSidebar title="Keyword discovery tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Businesses Find SEO Keywords (2026) | Sources & Workflow | BeltStack",
    description:
      "Where businesses find SEO keywords: customer language, Search Console, competitor pages, local modifiers, and when Semrush or Ahrefs beats free research.",
  };
}
