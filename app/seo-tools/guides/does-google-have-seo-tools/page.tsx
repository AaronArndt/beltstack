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
    q: "Does Google sell an SEO tool?",
    a: "Google does not sell a paid SEO suite like Semrush or Ahrefs. It offers free owner tools—Search Console, Analytics, Business Profile, and PageSpeed Insights—that help you monitor and improve visibility. SEO itself is a practice; Google ships the infrastructure and data, not a subscription product labeled “SEO.”",
  },
  {
    q: "What is the main Google tool for SEO?",
    a: "Google Search Console is the core free tool for site owners. It shows indexing status, search queries, click-through rates, and manual actions. Pair it with Google Business Profile if you serve local customers. Read our Google Search Console review for setup priorities.",
  },
  {
    q: "Is Google Analytics an SEO tool?",
    a: "Analytics measures on-site behavior—sessions, conversions, traffic sources—not rankings or crawl health. It complements Search Console but does not replace it. See is Google Analytics an SEO tool for how the two fit together.",
  },
  {
    q: "Can I do SEO with only Google products?",
    a: "Many small businesses start that way: Search Console for queries and fixes, Business Profile for Maps, Analytics for goals. You will hit limits on competitor research, backlink analysis, and rank grids—where third-party tools add value. Compare free vs paid SEO tools before you subscribe.",
  },
  {
    q: "Why do SEO professionals use non-Google tools?",
    a: "Google hides competitor data, limits historical query granularity, and does not expose a full-site audit in one dashboard. Suites like Semrush and Ahrefs fill those gaps. Local specialists such as BrightLocal and Whitespark add citation and Map Pack workflows Google does not offer.",
  },
  {
    q: "Does Google Search Console show all keywords?",
    a: "No. Search Console reports many queries but not every impression, especially on low-volume or privacy-threshold terms. Use it for direction and fixes; use a research suite when you need volume estimates and competitor gap analysis.",
  },
  {
    q: "Where should I start if I only use Google tools?",
    a: "Verify Search Console and Business Profile, fix indexing errors, align service pages with queries you already earn impressions for, then follow how to perform SEO for a monthly cadence. Add one paid tool only when a specific bottleneck—local grids, audits, or content gaps—blocks progress.",
  },
];

export default function DoesGoogleHaveSeoToolsPage() {
  const href = "/seo-tools/guides/does-google-have-seo-tools";
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
                  Does Google Have SEO Tools?
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Does Google Have SEO Tools?</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Google ships free owner tools—not a paid SEO package. Here is what Search Console, Business Profile, Analytics, and PageSpeed cover, what they omit, and when third-party suites still earn a line item. For context, read{" "}
                <Link href="/seo-tools/guides/seo-vs-google-whats-the-difference" className={link}>
                  SEO vs Google: what&apos;s the difference
                </Link>
                , browse the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>
                , or{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="google-vs-seo-software" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Google tools vs SEO software</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Google is a search engine and ad platform. SEO is the work you do to earn visibility in organic and local results. Google gives site owners free dashboards to see how Google treats their properties—it does not sell a Semrush-style subscription. That distinction trips up owners who expect one “Google SEO” product inside Ads or Workspace.
                </p>
                <p className="mt-4">
                  Our{" "}
                  <Link href="/seo-tools/guides/seo-vs-google-whats-the-difference" className={link}>
                    SEO vs Google guide
                  </Link>{" "}
                  separates platforms from practice. For how rankings actually form, start with{" "}
                  <Link href="/seo-tools/guides/how-seo-works" className={link}>
                    how SEO works
                  </Link>
                  .
                </p>
              </section>

              <section id="free-google-stack" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The free Google stack site owners use</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Four Google products cover most SMB SEO monitoring without a credit card:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Search Console</strong> — Indexing, coverage errors, search performance, sitemaps, and manual actions. This is the non-negotiable baseline.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Google Business Profile</strong> — Maps and local pack presence, reviews, photos, and call or direction actions.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Google Analytics</strong> — Traffic sources and on-site conversions; useful for ROI, not for crawl diagnostics.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">PageSpeed Insights / Lighthouse</strong> — Core Web Vitals and performance fixes that affect rankings and UX.
                  </li>
                </ul>
                <p className="mt-4">
                  Deep dive on the anchor tool:{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console review
                  </Link>
                  .
                </p>
              </section>

              <section id="what-google-omits" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What Google&apos;s tools do not give you</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Google will not show competitor keyword portfolios, full backlink graphs, or rank grids across ZIP codes. It will not audit your site against 200+ technical checks in one export, and Search Console query data is sampled and incomplete at the long tail. Those gaps are why agencies and growing in-house teams add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>
                  ,{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  , or local specialists—see the{" "}
                  <Link href="/seo-tools/best-seo-tools" className={link}>
                    best SEO tools
                  </Link>{" "}
                  list and{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    compare hub
                  </Link>{" "}
                  before you duplicate subscriptions.
                </p>
              </section>

              <section id="local-google-tools" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Local SEO: Google plus specialist add-ons</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Business Profile handles discovery on Maps; Search Console handles your website. Neither tracks citation drift across directories or Map Pack rank by neighborhood grid. That is where{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  and{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  earn their keep—read{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  if local visibility is your bottleneck.
                </p>
              </section>

              <section id="execution-cadence" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Turn Google data into an execution cadence</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Owning the tools is not SEO. Weekly, pull Search Console for new coverage issues and queries gaining impressions; update GBP with photos or Q&A; fix one on-page gap on a service page. Monthly, review which pages lose clicks despite stable impressions—a title or meta refresh often beats buying another keyword module.
                </p>
                <p className="mt-4">
                  Follow{" "}
                  <Link href="/seo-tools/guides/how-to-perform-seo" className={link}>
                    how to perform SEO
                  </Link>{" "}
                  for a five-step operating rhythm. Add paid software only when Google&apos;s free layer cannot answer a question you are actively blocked on.
                </p>
              </section>

              <section id="when-to-upgrade" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When to keep Google-only vs upgrade</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Stay Google-only while you are fixing fundamentals: verified Search Console, clean indexing, aligned GBP, and core service pages. Upgrade when you need systematic competitor research, client-ready audits, multi-location rank reporting, or agency-scale project limits. Most owners overspend on suites before they exhaust Search Console and on-page work—{" "}
                  <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                    how to optimize SEO for free
                  </Link>{" "}
                  covers that path in detail.
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
              <GuideSidebar title="SEO tools beyond Google&apos;s free stack" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Does Google Have SEO Tools? (2026) | Search Console, GBP & Limits | BeltStack",
    description:
      "Google offers free Search Console, Business Profile, Analytics, and PageSpeed—not a paid SEO suite. What each covers, what Google omits, and when to add Semrush, BrightLocal, or Whitespark.",
    keywords: [
      "does Google have SEO tools",
      "Google SEO tools free",
      "Google Search Console SEO",
      "Google Business Profile SEO",
      "free Google SEO tools",
      "Google vs SEO software",
    ],
  };
}
