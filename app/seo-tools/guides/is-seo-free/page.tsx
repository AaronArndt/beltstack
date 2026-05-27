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
    bestFor: "Free organic performance data",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
  },
  {
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Paid research on top of free basics",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Competitor and link intelligence",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
];

const FAQ = [
  {
    q: "Is SEO free?",
    a: "Organic search has no pay-per-click placement fee—you cannot buy the #1 organic slot from Google. SEO still costs time, and often software or agency fees, to earn that placement. Think 'no ad auction' rather than 'no expense'.",
  },
  {
    q: "Is SEO free on Google?",
    a: "Listing in Google Search and Maps is free. Google Search Console and Business Profile are free tools. Improving rankings requires work on content, technical health, and reputation— that work is not automatic.",
  },
  {
    q: "What is the difference between free SEO and paid ads?",
    a: "Google Ads charges per click while campaigns run. SEO builds assets—pages, reviews, links—that can keep sending traffic after you stop buying tools, though maintenance never ends. Many businesses use both.",
  },
  {
    q: "Are SEO tools free?",
    a: "Google's first-party tools are free for your properties. Third-party research tools like Semrush and Ahrefs are paid, with limited free tiers. See free vs paid SEO tools for a full breakdown.",
  },
  {
    q: "Can SEO be completely free?",
    a: "For a motivated owner, yes at the software line: Search Console, GBP, and manual execution. Hosting, photography, and your labor still have cost. Read can you do SEO without paying for the practical checklist.",
  },
  {
    q: "Why do people say SEO is expensive then?",
    a: "They bundle agency retainers, content production, link outreach, and multiple software seats. Benchmark ranges in how much businesses spend on SEO separate labor, tools, and outsourced work.",
  },
  {
    q: "When should I spend money on SEO?",
    a: "When free execution hits a ceiling—competitor research, multi-location reporting, or internal bandwidth. Evaluate ROI in are SEO tools worth it and plan renewals with how to budget for SEO tools.",
  },
];

export default function IsSeoFreePage() {
  const href = "/seo-tools/guides/is-seo-free";
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
                  Is SEO Free?
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Is SEO Free?</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Organic search does not charge per click—but SEO is rarely free in total cost. This guide separates Google&apos;s free surfaces from labor and optional software. For hands-on steps, see{" "}
                <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                  how to optimize SEO for free
                </Link>{" "}
                and our{" "}
                <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                  Google Search Console review
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="what-free-means" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What &quot;free&quot; actually means in SEO</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Google does not sell organic rankings. You cannot pay the search engine for the top blue link the way you fund Google Ads. That is what people mean when they say SEO is free: no placement auction for standard organic results.
                </p>
                <p className="mt-4">
                  Earning those results still requires crawlable pages, relevant content, trust signals, and—for local businesses—accurate listings and reviews. That work costs time at minimum, and often money when you buy tools or hire help. SEO is free like going to the gym is free if you own shoes—it is not free if you value your hours.
                </p>
              </section>

              <section id="google-free" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What Google gives you at no charge</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Inclusion in Search and Maps</strong> — No listing fee for organic surfaces (ads are separate).
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Search Console</strong> — Performance, indexing, and enhancement data for sites you verify. See our{" "}
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console review
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Business Profile</strong> — Maps presence, Q&A, photos, and insights on customer actions.
                  </li>
                </ul>
                <p className="mt-4">
                  These tools report reality—they do not write your service pages or respond to reviews for you. Contrast with paid suites in{" "}
                  <Link href="/seo-tools/guides/free-vs-paid-seo-tools" className={link}>
                    free vs paid SEO tools
                  </Link>
                  .
                </p>
              </section>

              <section id="hidden-costs" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The costs people forget</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Labor</strong> — Research, writing, GBP updates, review requests, and fixing Search Console issues.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Software</strong> — Optional but common:{" "}
                    <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                      Semrush
                    </Link>
                    ,{" "}
                    <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                      Ahrefs
                    </Link>
                    , or local specialists. Compare{" "}
                    <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                      Semrush vs Ahrefs
                    </Link>{" "}
                    if you add one suite.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Production</strong> — Photography, video, web dev, and copy—often outsourced even when tools stay free.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Agency retainers</strong> — Full programs when internal capacity runs out. See{" "}
                    <Link href="/seo-tools/guides/how-much-businesses-spend-on-seo" className={link}>
                      how much businesses spend on SEO
                    </Link>{" "}
                    for ranges.
                  </li>
                </ul>
              </section>

              <section id="seo-vs-ads" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">SEO vs paid search: different cost curves</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Google Ads bills while campaigns run—stop paying and traffic stops immediately. SEO compounds more slowly but can keep producing leads from pages and listings you maintain. Neither is truly &quot;set and forget.&quot; Ads optimize budgets; SEO optimizes assets.
                </p>
                <p className="mt-4">
                  Many service businesses run both: ads for immediate capacity, SEO for long-term margin. Tag leads in CRM so you compare cost per booked job honestly across channels.
                </p>
              </section>

              <section id="practical-path" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">A practical path from free to paid</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Phase one: maximize Google&apos;s free stack—details in{" "}
                  <Link href="/seo-tools/guides/can-you-do-seo-without-paying" className={link}>
                    can you do SEO without paying
                  </Link>
                  . Phase two: add one paid tool when research or reporting bottlenecks appear; use{" "}
                  <Link href="/seo-tools/guides/seo-pricing-explained" className={link}>
                    SEO pricing explained
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools and subscriptions
                  </Link>{" "}
                  before annual contracts. Phase three: outsource execution if backlog beats internal hours—evaluate value in{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
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
              <GuideSidebar title="Free Google vs paid suites" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Is SEO Free? (2026) | Organic vs Tool & Labor Costs | BeltStack",
    description:
      "SEO has no pay-per-click placement fee, but time, software, and agency work still cost money—how Google's free tools fit and when Semrush or Ahrefs make sense.",
  };
}
