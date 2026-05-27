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
    bestFor: "Indexing, queries, and fix validation",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Site audits and on-page recommendations",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Content gaps and internal link ideas",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "How do I SEO my website for the first time?",
    a: "Verify Search Console, fix indexing and mobile issues, publish clear service pages with unique copy, connect internal links, align Google Business Profile with your site, then monitor queries monthly. Skip bulk city pages until each location page can stand on its own.",
  },
  {
    q: "What is the most important on-page element?",
    a: "A clear H1 and title that match the primary query, plus body copy that answers scope, pricing signals, and service area. Meta descriptions sell the click; they are not a ranking knob by themselves.",
  },
  {
    q: "How many pages does my site need for SEO?",
    a: "Enough to cover each service and geography you truly serve—with unique proof on each. Ten strong pages beat fifty thin duplicates that only swap the city name.",
  },
  {
    q: "Should I blog to SEO my website?",
    a: "Only if you will publish helpful, specific articles—seasonal maintenance, code updates, FAQs—not generic AI filler. One substantive post per month plus better service pages often beats a dormant blog.",
  },
  {
    q: "How do I know if my SEO changes worked?",
    a: "Watch Search Console impressions and clicks for target queries, Map Pack actions in GBP insights, and booked leads tagged in CRM. Rank trackers help but lag; revenue does not lie.",
  },
  {
    q: "Do I need a developer for website SEO?",
    a: "For basics—titles, copy, internal links—owners or marketers can handle it on most builders. Developers matter for redirect chains, schema, Core Web Vitals, and template bugs surfaced in a technical audit.",
  },
  {
    q: "When should I add paid SEO tools?",
    a: "When Search Console and manual checks cannot keep up—multiple locations, competitive keywords, or large catalogs. Trial Semrush or Ahrefs on your live domain; compare in Semrush vs Ahrefs before annual billing.",
  },
];

export default function HowToSeoYourWebsitePage() {
  const href = "/seo-tools/guides/how-to-seo-your-website";
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
                  How to SEO Your Website
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How to SEO Your Website</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical sequence for small business sites: make pages discoverable, trustworthy, and aligned with how customers search—without buying tools you will not use. Start free with our{" "}
                <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                  Google Search Console review
                </Link>
                , then explore the{" "}
                <Link href="/seo-tools" className={link}>
                  SEO tools hub
                </Link>
                ,{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>
                , and{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools
                </Link>{" "}
                when research outgrows spreadsheets.
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="phase-one" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 1: Make sure Google can see and trust the site</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Before keywords, confirm basics: HTTPS, mobile-friendly layout, no accidental noindex on money pages, and a sitemap submitted in{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>
                  . Walk through{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics
                  </Link>{" "}
                  if coverage reports show errors or “Discovered – currently not indexed” on service URLs.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>One canonical URL per page; fix redirect chains from old domains.</li>
                  <li>Contact and NAP visible in footer; match Google Business Profile.</li>
                  <li>Core Web Vitals acceptable on mobile—slow templates kill conversions even if you rank.</li>
                </ul>
              </section>

              <section id="phase-two" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 2: Build pages that match search intent</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Each core service deserves a page with a specific H1, proof (photos, reviews, licenses), FAQs, and internal links to related services. Local businesses should follow{" "}
                  <Link href="/seo-tools/guides/on-page-seo-for-local-business" className={link}>
                    on-page SEO for local business
                  </Link>{" "}
                  so titles, meta descriptions, and geography align with GBP—not generic “services” copy.
                </p>
                <p className="mt-4">
                  Use Search Console’s Queries report to see language customers already use. Expand pages for terms with impressions but weak average position before you chase vanity national keywords in a paid tool.
                </p>
              </section>

              <section id="phase-three" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 3: Connect listings, reviews, and local signals</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  For location-based businesses, the website is only half the system. Optimize{" "}
                  <Link href="/seo-tools/guides/google-business-profile-optimization" className={link}>
                    Google Business Profile
                  </Link>
                  , earn steady reviews, and keep categories/services consistent with site headings. Read{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  when Maps—not just blue links—is your primary lead source.
                </p>
              </section>

              <section id="phase-four" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 4: Research competitors and fix gaps</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  When free data is not enough, run a trial on your domain with{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>
                  : export crawl issues, compare top competitor URLs for services you lack, and track priority keywords by city. See{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  for workflow differences.
                </p>
                <p className="mt-4">
                  Budget-conscious teams can delay suites—see{" "}
                  <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                    how to optimize SEO for free
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/local-keyword-research-without-enterprise-tools" className={link}>
                    local keyword research without enterprise tools
                  </Link>
                  .
                </p>
              </section>

              <section id="maintenance" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Phase 5: Monthly maintenance that sticks</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  SEO your website once and drift loses ground. Each month: review Search Console performance, respond to reviews, add one meaningful site improvement (new FAQ section, updated photos, fixed broken links), and check GBP for seasonal services. Understand why SEO matters commercially in{" "}
                  <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                    what SEO actually does for businesses
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Trades with crews should also read{" "}
                  <Link href="/seo-tools/guides/how-to-do-seo-for-contractors" className={link}>
                    how to do SEO for contractors
                  </Link>{" "}
                  for dispatch-friendly prioritization.
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
              <GuideSidebar title="SEO tools for your website" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How to SEO Your Website (2026) | Step-by-Step for SMBs | BeltStack",
    description:
      "Phased website SEO for small businesses: technical basics, on-page service pages, local listings, competitor research with Semrush or Ahrefs, and monthly Search Console maintenance.",
    keywords: [
      "how to SEO your website",
      "website SEO checklist",
      "SEO for small business website",
      "on-page SEO steps",
      "Google Search Console setup",
      "local business website SEO",
    ],
  };
}
