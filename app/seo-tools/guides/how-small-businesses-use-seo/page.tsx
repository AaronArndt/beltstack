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
    q: "How do small businesses actually use SEO day to day?",
    a: "Most run a light operating rhythm: fix what Search Console flags, keep Google Business Profile current, publish or refresh service pages, collect reviews, and check whether impressions turn into calls. SEO is recurring maintenance—not a quarterly campaign.",
  },
  {
    q: "What is the smallest SEO stack that still works?",
    a: "Search Console plus GBP for local brands, a crawlable website, and a monthly checklist. Add Semrush or BrightLocal when manual research or citation audits eat more time than the subscription costs.",
  },
  {
    q: "Should a small business hire an agency or DIY?",
    a: "DIY fits owners who can write service pages, respond to reviews, and spend two to four hours a week. Agencies help when you lack capacity, manage many locations, or need technical fixes beyond your comfort zone. Either way, keep Search Console under your Google account.",
  },
  {
    q: "How is SEO different for a shop vs a service business?",
    a: "Retail often leans on product pages and inventory signals; service businesses lean on Maps, service-area pages, and proof from jobs. Read local SEO for service businesses if dispatch and ZIP-level visibility drive your revenue.",
  },
  {
    q: "When should a small business pay for SEO tools?",
    a: "When you cannot answer basic questions from free data: which pages index, which queries earn impressions, where competitors outrank you, or whether citations drift after a rebrand. Compare vendors on our SEO tools compare hub before you stack subscriptions.",
  },
  {
    q: "How do I know SEO is working for my small business?",
    a: "Track impressions and clicks in Search Console, Map actions in GBP, and booked jobs tagged in CRM—not rank positions alone. Tie each channel to revenue per lead so you compare SEO honestly against ads and referrals.",
  },
  {
    q: "Can I use SEO if I only sell in one city?",
    a: "Yes—single-market businesses often win faster with focused area pages, consistent NAP, and review velocity than national brands fighting everywhere. Local intent rewards depth in one geography over thin coverage in twenty.",
  },
];

export default function HowSmallBusinessesUseSeoPage() {
  const href = "/seo-tools/guides/how-small-businesses-use-seo";
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
                  How Small Businesses Use SEO
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Small Businesses Use SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Practical patterns owners use to get found on Google without an enterprise team—free diagnostics, local listings, modest content, and paid tools only when research stops scaling. Start with{" "}
                <Link href="/seo-tools/guides/seo-for-beginners-a-complete-guide" className={link}>
                  SEO for beginners
                </Link>
                , then see the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/compare" className={link}>
                  compare SEO tools
                </Link>{" "}
                when you outgrow spreadsheets.
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="operating-model" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">SEO as an operating model, not a project</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Successful small businesses treat SEO like bookkeeping: small recurring tasks that compound. Weekly you might respond to reviews, check Search Console for coverage errors, and note which service pages gained impressions. Monthly you refresh one priority page, audit a competitor’s top queries, and confirm listings still show the right phone number.
                </p>
                <p className="mt-4">
                  That rhythm matches how{" "}
                  <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                    what SEO actually does for businesses
                  </Link>{" "}
                  describes outcomes—discovery and trust before the first call—not a one-time “optimization package.”
                </p>
              </section>

              <section id="free-stack" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The free stack most SMBs start with</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Before any subscription, wire up{" "}
                  <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                    Google Search Console
                  </Link>{" "}
                  and verify your site. For local brands, claim and maintain Google Business Profile with accurate categories, services, photos, and review responses. These two surfaces explain whether Google can crawl you and whether nearby searchers see a credible listing.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Indexing truth</strong> — Are important URLs indexed? Are there mobile or HTTPS issues blocking crawl?
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Query reality</strong> — Which searches already show your brand or services, even at low positions?
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Maps conversion</strong> — Calls, direction requests, and website clicks from GBP—not vanity views.
                  </li>
                </ul>
              </section>

              <section id="local-pattern" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">How service businesses layer local SEO</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Plumbers, HVAC, cleaners, and similar trades usually win through Maps plus aligned website pages—not national blog volume. Follow{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  for the three-pillar loop: discovery surfaces, on-site service and area pages, and authority via reviews and citations.
                </p>
                <p className="mt-4">
                  When citation drift or Map Pack grids become the bottleneck, specialist tools such as{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>{" "}
                  often beat forcing a general suite to do local grunt work—see{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  before you standardize.
                </p>
              </section>

              <section id="content-and-research" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Content and research at SMB scale</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  You do not need fifty blog posts. You need clear service pages that answer scope, pricing signals, timeline, and service area—and occasional refreshes when Search Console shows rising impressions with weak click-through. When competitor research or keyword mapping eats evenings, add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or compare suites on the{" "}
                  <Link href="/seo-tools/best-seo-tools" className={link}>
                    best SEO tools
                  </Link>{" "}
                  list rather than guessing from autocomplete alone.
                </p>
              </section>

              <section id="measurement" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measurement owners actually use</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Rankings are a diagnostic; booked jobs are the outcome. Tag leads in{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  by source so organic, Maps, paid, and referrals compare on close rate and margin. Pair Search Console trends with call tracking or form attribution where possible—otherwise you will over-invest in keywords that never convert.
                </p>
              </section>

              <section id="when-to-upgrade" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When to upgrade tools or help</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Upgrade when a specific gap costs more than software: multi-location citation cleanup, consistent rank grids, technical crawl issues beyond your skill, or content research across many services. Use{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tool comparisons
                  </Link>{" "}
                  to avoid buying overlapping annual contracts, and read{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  before you commit to enterprise tiers you will not open weekly.
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
              <GuideSidebar title="SEO tools for small business visibility" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Small Businesses Use SEO (2026) | Practical SMB Playbook | BeltStack",
    description:
      "How SMBs run SEO day to day—Search Console, GBP, local pages, reviews, when to add BrightLocal, Whitespark, or Semrush, and how to measure booked jobs.",
    keywords: [
      "how small businesses use SEO",
      "small business SEO strategy",
      "SEO for SMB",
      "local SEO small business",
      "Google Search Console for small business",
      "SEO tools for small business",
    ],
  };
}
