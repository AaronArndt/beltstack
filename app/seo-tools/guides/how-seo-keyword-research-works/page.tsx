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
    bestFor: "Real queries you already rank for",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Volume and competitor keywords",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Content gaps and SERP analysis",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "What is SEO keyword research?",
    a: "The process of finding which words and phrases people type into search engines when they want your service or answer—and deciding which ones deserve a dedicated page, section, or GBP service. It connects customer language to site structure.",
  },
  {
    q: "Do I need expensive tools to start?",
    a: "No. Search Console, sales call notes, and autocomplete-style brainstorming cover early research. Add paid tools when you need volume estimates, large competitor exports, or many service/geo combinations.",
  },
  {
    q: "What is search intent?",
    a: "The job behind the query: learn (informational), compare (commercial), or hire now (transactional/local). Matching intent matters more than raw search volume—a high-volume blog topic will not book emergency plumbing calls.",
  },
  {
    q: "How many keywords should a small site target?",
    a: "Think in page types, not thousands of phrases. A handful of core service pages, selective area pages with unique proof, and support FAQs often cover 80% of revenue-relevant demand.",
  },
  {
    q: "Semrush or Ahrefs for keyword research?",
    a: "Both work; Semrush bundles more marketing workflows, Ahrefs excels at content and link context. Compare in Semrush vs Ahrefs before you pay for overlapping seats.",
  },
  {
    q: "How is local keyword research different?",
    a: "Geography and urgency dominate—'near me,' city names, and emergency modifiers map to GBP categories and service pages, not generic blogs. See local keyword research without enterprise tools for a free-first playbook.",
  },
  {
    q: "When should I stop researching and publish?",
    a: "When you can name the page type, the proof you will show, and the call-to-action. Endless lists in a spreadsheet without shipping pages rarely move rankings.",
  },
];

export default function HowSeoKeywordResearchWorksPage() {
  const href = "/seo-tools/guides/how-seo-keyword-research-works";
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
                  How SEO Keyword Research Works
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How SEO Keyword Research Works</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                From customer language to page types—intent, modifiers, free data, and when Semrush or Ahrefs earns a seat. For a local, budget-conscious workflow, see{" "}
                <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                  local keyword research without enterprise tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="purpose" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Keyword research connects searches to pages</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Keyword research is not a spreadsheet hobby—it is how you decide what your site should say and which URLs deserve to exist. The output is structure: a service page for &quot;water heater replacement,&quot; not a blog post buried three clicks deep because the phrase looked popular nationally.
                </p>
                <p className="mt-4">
                  Good research starts with how buyers describe problems on the phone, then validates whether search demand exists and which page format Google rewards for that intent.
                </p>
              </section>

              <section id="intent" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Intent beats volume</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Every query carries a job. Informational searches want explanations; commercial searches compare options; transactional and local searches want a provider now. Ranking a how-to article for a &quot;hire now&quot; query wastes effort even if volume looks attractive.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Head service terms</strong> — &quot;AC repair,&quot; &quot;roof replacement&quot; → primary service pages with scope, pricing signals, and CTAs.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Problem modifiers</strong> — &quot;no hot water,&quot; &quot;leaking pipe&quot; → focused sections or FAQs on the right service URL.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Geo modifiers</strong> — City or neighborhood only when you can add unique proof, not duplicate clones.
                  </li>
                </ul>
              </section>

              <section id="sources" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Where keyword ideas come from</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Start with sources you already own:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console
                    </Link>{" "}
                    — Queries that already earn impressions reveal how Google maps your site today.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Sales and dispatch</strong> — Phrases customers use before they know your brand.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Competitor pages</strong> — Services they highlight in nav and titles (manual review is fine early on).
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Paid tools</strong> —{" "}
                    <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                      Semrush
                    </Link>{" "}
                    or{" "}
                    <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                      Ahrefs
                    </Link>{" "}
                    for volume estimates, related terms, and SERP features at scale.
                  </li>
                </ul>
                <p className="mt-4">
                  Compare suites in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  before you buy both.
                </p>
              </section>

              <section id="local" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local keyword research adds geography and urgency</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Local research layers service names with proximity and immediacy—&quot;near me,&quot; same-day, and city names tied to areas you actually serve. Those phrases should align with GBP categories and{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>
                  , not scatter across unrelated blog tags.
                </p>
                <p className="mt-4">
                  If you want a free-first, SMB-friendly process without enterprise spend, follow{" "}
                  <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                    local keyword research without enterprise tools
                  </Link>
                  —it walks Maps Pack intent, modifiers, and when to add paid data.
                </p>
              </section>

              <section id="page-mapping" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Map keywords to page types, not endless lists</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  After you cluster phrases, assign each cluster one primary URL type. One service page should own the head term; supporting FAQs handle long-tail questions without cannibalizing the main URL. Internal links from blog posts should point to money pages when the intent is commercial.
                </p>
                <p className="mt-4">
                  When research exposes thin coverage, ship the page before you chase the next hundred variants—see{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>{" "}
                  for the weekly cadence that turns lists into rankings.
                </p>
              </section>

              <section id="prioritize" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Prioritize what you can prove and maintain</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Score opportunities by business value, not tool difficulty scores alone: margin on the service, current impression share in Search Console, competitive density, and whether you have photos, licenses, or reviews to support the page. Deprioritize cities you do not truly serve—even if volume looks tempting.
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
              <GuideSidebar title="Keyword research tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How SEO Keyword Research Works (2026) | Intent, Sources & Pages | BeltStack",
    description:
      "Learn SEO keyword research: search intent, data sources from Search Console to Semrush and Ahrefs, local modifiers, and mapping phrases to the right page types.",
  };
}
