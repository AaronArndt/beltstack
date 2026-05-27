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
    q: "Is SEO still worth it in 2026?",
    a: "Yes for most businesses that earn customers from search—but worth depends on execution. SEO compounds when you maintain listings, fix technical issues, and publish proof; it disappoints when treated as a one-time project or bought tools nobody uses.",
  },
  {
    q: "Has AI search made SEO obsolete?",
    a: "AI overviews and assistants change layouts, not the need to be credible, crawlable, and relevant. Businesses still win by owning service intent, local proof, and fast sites Google can cite. Ignoring fundamentals because of AI headlines is how incumbents keep share.",
  },
  {
    q: "When is SEO not worth the effort?",
    a: "When you cannot serve more demand, when your category has near-zero search volume, or when you refuse ongoing maintenance. SEO is a poor fit for get-rich-quick expectations or markets where every lead is relationship-only with no search path.",
  },
  {
    q: "How do I calculate if SEO is worth it for my business?",
    a: "Compare customer acquisition cost from organic (including labor) to ads and referrals. Use Search Console plus CRM tagging for calls and forms—not rank trackers alone. If organic leads close at similar margin with lower ongoing cost, SEO is working.",
  },
  {
    q: "Is SEO still worth it for local service businesses?",
    a: "Often more than national ecommerce—Maps and localized pages convert high-intent searches to calls. See local SEO for service businesses for the operating loop; pair with BrightLocal or Whitespark when citations or grids are the bottleneck.",
  },
  {
    q: "Should I invest in SEO tools or just do free work?",
    a: "Free Search Console and GBP are non-negotiable. Paid tools matter when they remove a repeating bottleneck—citation audits, rank grids, large-site crawls. Read are SEO tools worth it before stacking annual contracts.",
  },
  {
    q: "SEO vs paid ads—which is more worth it now?",
    a: "Ads buy speed; SEO buys margin over time. Healthy programs use both until organic covers core services, then rebalance using honest lead economics in CRM.",
  },
];

export default function IsSeoStillWorthItPage() {
  const href = "/seo-tools/guides/is-seo-still-worth-it";
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
                  Is SEO Still Worth It?
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Is SEO Still Worth It?</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                An honest look at whether organic search still earns its place in 2026—what changed, what did not, and how to decide for your market. Ground the decision in{" "}
                <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                  what SEO actually does for businesses
                </Link>
                , learn execution from{" "}
                <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                  SEO for beginners
                </Link>
                , and compare stacks on{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="still-worth-it" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Why SEO is still worth it for most SMBs</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Search volume did not disappear—interfaces changed. Buyers still look up services, compare providers, and validate brands before they call. Organic visibility is one of the few marketing channels where improvement sticks: fix indexing, earn reviews, align GBP with your site, and you keep benefiting after the work is done. Paid ads reset when spend stops.
                </p>
              </section>

              <section id="what-changed" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What changed—and what did not</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Changed</strong> — More SERP features, AI summaries, and zero-click behavior on informational queries.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Unchanged</strong> — High-intent local and commercial queries still drive calls, forms, and visits; Google still rewards relevance, quality, and trust.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Implication</strong> — Chase pages that book work, not vanity blog traffic that never converts.
                  </li>
                </ul>
                <p className="mt-4">
                  Measure with{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  and CRM-tagged leads—not leaderboard rankings alone.
                </p>
              </section>

              <section id="local-still-strong" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local SEO is still especially worth it</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Service businesses still win jobs from Maps and “near me” intent. The playbook in{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  remains durable: GBP plus aligned site pages plus reviews and citations. Beginners should start with{" "}
                  <Link href="/seo-tools/guides/local-seo-for-beginners" className={link}>
                    local SEO for beginners
                  </Link>{" "}
                  before buying specialist software.
                </p>
                <p className="mt-4">
                  When Map Pack tracking or citation cleanup is the bottleneck,{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  still earn their cost faster than ignoring listing drift—see{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>
                  .
                </p>
              </section>

              <section id="when-not-worth" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When SEO is not worth prioritizing</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Deprioritize heavy SEO if you are chronically overbooked and cannot hire, if search has no volume for your offer, or if you will not maintain listings and site health. Also beware agency packages that report rankings without tying to revenue—SEO is worth it when tied to booked jobs, not PDF dashboards.
                </p>
              </section>

              <section id="roi-framework" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">A simple ROI framework</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ol className="mt-4 list-decimal space-y-2 pl-5">
                  <li>List core services and cities where you want more demand.</li>
                  <li>Check Search Console impressions for those themes—are you visible at all?</li>
                  <li>Estimate monthly labor (owner time or agency) plus tool costs.</li>
                  <li>Tag organic and Maps leads in CRM for 90 days; compare close rate to ads.</li>
                  <li>Continue if marginal cost per booked job beats alternatives—or fix execution before you quit SEO entirely.</li>
                </ol>
                <p className="mt-4">
                  For research at scale, add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  via the{" "}
                  <Link href="/seo-tools/best-seo-tools" className={link}>
                    best SEO tools
                  </Link>{" "}
                  roundup when free data stops answering competitor and keyword questions.
                </p>
              </section>

              <section id="tools-and-execution" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Tools do not make SEO worth it—execution does</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Subscriptions without weekly tasks are waste. SEO becomes worth it when someone owns Search Console fixes, review responses, and page updates. Use{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tool comparisons
                  </Link>{" "}
                  to buy for bottlenecks, and read{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-businesses-run-effective-seo" className={link}>
                    how businesses run effective SEO
                  </Link>{" "}
                  for operating cadence—not more software for its own sake.
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
              <GuideSidebar title="SEO tools to measure if SEO pays off" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Is SEO Still Worth It? (2026) | ROI, AI & Local Search | BeltStack",
    description:
      "Whether SEO is still worth it in 2026—what changed with AI SERPs, when to invest, local service business fit, ROI framework, and BrightLocal, Whitespark, or Semrush.",
    keywords: [
      "is SEO still worth it",
      "SEO worth it 2026",
      "SEO ROI for small business",
      "AI and SEO future",
      "local SEO still worth it",
      "SEO vs paid ads 2026",
    ],
  };
}
