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
    bestFor: "Clicks, impressions, and indexing",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Rank trends and audit dashboards",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: 4.5,
    bestFor: "GBP actions and local grids",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const FAQ = [
  {
    q: "What SEO metrics should businesses track?",
    a: "Start with indexing health, impressions and clicks on money pages, branded vs non-branded query mix, GBP actions for local brands, and leads or revenue tagged in CRM. Rank position is a supporting metric—not the headline.",
  },
  {
    q: "How many KPIs is enough?",
    a: "Three to five per monthly review beats fifty-chart dashboards. Each KPI should map to an action: fix a URL, rewrite a title, update GBP, or respond to reviews.",
  },
  {
    q: "Is ranking still a useful SEO metric?",
    a: "Yes for priority keywords tied to specific URLs—but pair with Search Console clicks so you know whether position changes produce traffic. Local businesses add selective Map Pack grids.",
  },
  {
    q: "What is the difference between impressions and clicks?",
    a: "Impressions mean Google showed your result; clicks mean someone chose it. Rising impressions with flat clicks often signal weak titles, meta, or SERP features—not necessarily a ranking failure.",
  },
  {
    q: "Should I track backlinks as a core KPI?",
    a: "For most SMBs, track issues that block trust—spammy profiles, broken citations, guideline violations—more than raw link counts. Authority metrics matter when content and technical basics are already sound.",
  },
  {
    q: "How do reporting tools fit in?",
    a: "They aggregate rank, crawl, and local data into scheduled reports. Read how SEO reporting software works and how businesses track SEO rankings for stack and cadence choices.",
  },
  {
    q: "When do SEO metrics prove SEO is not worth it?",
    a: "When impressions and leads stay flat after fixing indexing and running a disciplined quarter—see is SEO still worth it for how to compare organic CAC to other channels honestly.",
  },
];

export default function SeoMetricsBusinessesShouldTrackPage() {
  const href = "/seo-tools/guides/seo-metrics-businesses-should-track";
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
                  SEO Metrics Businesses Should Track
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">SEO Metrics Businesses Should Track</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Which KPIs matter for SMBs—indexing, clicks, local actions, and pipeline—and which vanity numbers to drop. Build dashboards with{" "}
                <Link href="/seo-tools/guides/how-seo-reporting-software-works" className={link}>
                  how SEO reporting software works
                </Link>
                , ground technical health in{" "}
                <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                  technical SEO audit basics
                </Link>
                , and compare tools on{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="pyramid" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The metrics pyramid: health, visibility, outcomes</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Strong programs measure in layers—each layer explains the next:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Health</strong> — Indexed money pages, crawl errors, HTTPS, sitemap coverage. Without health, visibility metrics lie.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Visibility</strong> — Impressions, average position, and priority keyword trends from Search Console and rank trackers.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Outcomes</strong> — Clicks, calls, form fills, and booked jobs attributed to organic or Maps in CRM.
                  </li>
                </ul>
                <p className="mt-4">
                  Audit health quarterly using{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics for small business
                  </Link>{" "}
                  before you chase new keywords.
                </p>
              </section>

              <section id="search-console" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Search Console metrics every owner should know</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  is free and authoritative for your properties. Track total clicks and impressions month over month, then drill into top pages and queries. Filter branded vs non-branded queries to see whether growth comes from people who already know you or from discovery terms you can scale.
                </p>
                <p className="mt-4">
                  Pair query trends with the keyword discipline in{" "}
                  <Link href="/seo-tools/guides/how-businesses-track-seo-rankings" className={link}>
                    how businesses track SEO rankings
                  </Link>
                  —each priority phrase should map to one primary URL you can improve.
                </p>
              </section>

              <section id="local-metrics" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local businesses add GBP and grid metrics</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  For Maps-dependent revenue, track GBP actions: calls, direction requests, website taps, and photo views. Sample Map Pack positions in representative ZIPs—not every block—via{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or Whitespark when URL rank alone does not explain lead swings.
                </p>
                <p className="mt-4">
                  Avoid the mistake of reporting grid averages without GBP or CRM context—a common failure mode in{" "}
                  <Link href="/seo-tools/guides/common-seo-mistakes-businesses-make" className={link}>
                    common SEO mistakes businesses make
                  </Link>
                  .
                </p>
              </section>

              <section id="reporting" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Package metrics for stakeholders</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Monthly reviews should lead with outcomes, show visibility trends, and end with three fixes for next month.{" "}
                  <Link href="/seo-tools/guides/how-seo-reporting-software-works" className={link}>
                    How SEO reporting software works
                  </Link>{" "}
                  explains how Semrush, SE Ranking, and BrightLocal pull rank and local data into PDFs and dashboards—use them to reduce manual exports, not to add chart noise.
                </p>
                <p className="mt-4">
                  Compare suite depth in{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  when research, audits, and rank history will share one subscription.
                </p>
              </section>

              <section id="roi" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When metrics say SEO is working—or not</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  SEO is working when non-branded impressions and clicks trend up on money pages and CRM shows organic or Maps-sourced jobs at acceptable margin. It is struggling when audits repeat the same indexing errors, or visibility rises without pipeline impact—often a targeting or conversion problem, not “Google hates us.”
                </p>
                <p className="mt-4">
                  Use{" "}
                  <Link href="/seo-tools/guides/is-seo-still-worth-it" className={link}>
                    is SEO still worth it
                  </Link>{" "}
                  to frame reinvestment decisions with leadership once you have a quarter of honest metrics—not rank screenshots alone.
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
              <GuideSidebar title="SEO measurement tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "SEO Metrics Businesses Should Track (2026) | KPIs Beyond Rank | BeltStack",
    description:
      "SEO metrics for SMBs: indexing health, Search Console clicks, local GBP actions, CRM outcomes, and how to report without vanity rank dashboards.",
  };
}
