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
    q: "How do you perform SEO step by step?",
    a: "Audit indexing and technical health, research keywords matched to intent, improve priority pages, strengthen local listings if geography matters, earn reviews and relevant links, then measure and iterate monthly. Order matters—content on a broken site rarely moves.",
  },
  {
    q: "How often should I work on SEO?",
    a: "Weekly touchpoints for local: GBP updates, review responses, and one concrete site fix. Monthly: content improvements, rank review, and competitor spot checks. Quarterly: deeper technical audit and budget review for tools.",
  },
  {
    q: "Should I hire an agency or do SEO in-house?",
    a: "In-house works when someone owns the calendar and can implement Search Console fixes. Agencies help for multi-location brands, penalties, or content at scale—still verify indexing yourself and keep Google accounts in your name.",
  },
  {
    q: "What tools do I need to perform SEO?",
    a: "Start with Google Search Console and Analytics. Add Semrush or Ahrefs for research and audits; BrightLocal or Whitespark when local grids and citations are core. See best SEO tools and our budget guide before annual contracts.",
  },
  {
    q: "How long until SEO shows results?",
    a: "Technical fixes can improve indexing within weeks. Competitive organic rankings often need three to six months of consistent execution; local Maps gains can appear faster when GBP and NAP issues are corrected.",
  },
  {
    q: "What is the highest-impact task for small businesses?",
    a: "Fix the mismatch between what customers search and what your site and GBP actually say. One accurate service page plus aligned categories beats ten blog posts targeting keywords you do not serve.",
  },
];

export default function HowToPerformSeoPage() {
  const href = "/seo-tools/guides/how-to-perform-seo";
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
                  How to Perform SEO
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to Perform SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A repeatable execution playbook: diagnose, prioritize, implement, and measure—without chasing vanity metrics or buying tools before you know the bottleneck. Ground the process in{" "}
                <Link href="/seo-tools/guides/how-seo-works" className={link}>
                  how SEO works
                </Link>
                , pick software from{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>
                , and compare vendors on{" "}
                <Link href="/seo-tools/compare" className={link}>
                  SEO tool comparisons
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="diagnose" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Step 1: Diagnose with free data first</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Before keyword lists, confirm Google can index your property. In{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>
                  , review page indexing, sitemap status, and core queries driving impressions. Export top landing pages from analytics and mark which should drive revenue versus informational traffic.
                </p>
                <p className="mt-4">
                  Run a lightweight technical pass—HTTPS, mobile usability, duplicate titles, 404 spikes—using our{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics
                  </Link>{" "}
                  guide. Paid crawlers from{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>{" "}
                  help when URL counts exceed manual checks.
                </p>
              </section>

              <section id="research" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Step 2: Research intent and priorities</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Build a short list of queries tied to services you actually sell—not editorial topics for traffic alone. Map each query to an existing URL or a planned page. For local modifiers, use Search Console plus{" "}
                  <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                    local keyword research without enterprise tools
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  When competitor gap analysis becomes weekly work, trial suite tools and read{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>
                  . Understand categories in{" "}
                  <Link href="/seo-tools/guides/what-is-seo-software" className={link}>
                    what is SEO software
                  </Link>{" "}
                  so you buy modules you will actually open every Monday.
                </p>
              </section>

              <section id="implement-on-site" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Step 3: Implement on-site and on-page fixes</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Tackle money pages first: unique titles, one clear H1, scannable sections answering pre-sale questions, internal links from related content, and fast mobile rendering. Local businesses should mirror GBP services on dedicated pages—see{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Ship improvements in small batches so you can correlate Search Console movement with specific deploys. Avoid rewriting fifty thin pages at once without measuring baseline impressions.
                </p>
              </section>

              <section id="local-execution" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Step 4: Execute local SEO when geography matters</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Service-area businesses should run GBP, website, and citations as one program—details in{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>
                  . Weekly: photos, Q&amp;A, review responses. Monthly: citation drift checks and grid rankings via{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Trades with crews should follow{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  for dispatch-friendly pacing. Optimize listings with{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile optimization
                  </Link>{" "}
                  before scaling content.
                </p>
              </section>

              <section id="measure-iterate" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Step 5: Measure, report, and iterate monthly</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Track impressions, clicks, and conversions—not rank alone. Document what changed each month: new page, GBP category fix, review campaign, technical patch. When growth stalls, return to diagnosis rather than buying another tool tier.
                </p>
                <p className="mt-4">
                  Plan tool spend deliberately via{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools
                  </Link>
                  . New practitioners should skim{" "}
                  <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                    SEO for beginners
                  </Link>{" "}
                  if terminology in reports still feels opaque. The{" "}
                  <Link href="/seo-tools" className={link}>
                    SEO tools hub
                  </Link>{" "}
                  links reviews, alternatives, and best-for lists as your stack matures.
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
              <GuideSidebar title="SEO execution tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How to Perform SEO (2026) | 5-Step Execution Playbook | BeltStack",
    description:
      "Step-by-step SEO execution: diagnose with Search Console, research intent, on-page and local fixes, citation and GBP work, monthly measurement, and when to add Semrush, Ahrefs, or BrightLocal.",
    keywords: [
      "how to perform SEO",
      "SEO step by step",
      "SEO execution plan",
      "small business SEO process",
      "local SEO steps",
      "SEO workflow",
    ],
  };
}
