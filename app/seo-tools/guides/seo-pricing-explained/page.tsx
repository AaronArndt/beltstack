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
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: 4.6,
    bestFor: "Suite pricing and tier limits",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Credits and research depth",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
  {
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: 4.2,
    bestFor: "Mid-market subscriptions",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
  },
];

const FAQ = [
  {
    q: "What does SEO pricing usually include?",
    a: "Three buckets: software subscriptions, labor (in-house or agency), and content or local assets like photos and landing pages. Quotes that only mention rankings rarely include the ongoing work required to earn them.",
  },
  {
    q: "How much should a small business spend on SEO?",
    a: "There is no universal dollar answer—spend should track markets, competition, and capacity to execute. Many SMBs start with free Google tools plus modest software, then add agency hours only for gaps they cannot staff.",
  },
  {
    q: "Why do agency SEO quotes vary so much?",
    a: "Scope differs: technical remediation, content volume, link building, local citation programs, and reporting depth. Cheap retainers often mean template deliverables; expensive ones may include senior strategists and multi-location ops.",
  },
  {
    q: "Is DIY SEO cheaper than hiring?",
    a: "Software is rarely the biggest line item—time is. DIY can win when owners control GBP, reviews, and core pages. Agencies help for migrations, penalties, and competitive content at scale.",
  },
  {
    q: "How do SEO tool prices compare to agency retainers?",
    a: "Tools compress research; they do not replace execution. A mid-tier suite often costs less than a few agency hours per month, but useless if nobody logs in. Budget tools with our how to budget for SEO tools guide.",
  },
  {
    q: "Should I pay annually for SEO software?",
    a: "Annual plans discount renewals but lock you in—trial monthly first, confirm weekly usage, then commit. Re-verify vendor pricing pages at contract time; list prices change.",
  },
  {
    q: "What is a red flag in SEO pricing?",
    a: "Guaranteed #1 rankings, opaque link packages, or retainers with no tie to booked jobs or qualified leads. Ask what gets shipped each month and how success is measured in Search Console and your CRM.",
  },
];

export default function SeoPricingExplainedPage() {
  const href = "/seo-tools/guides/seo-pricing-explained";
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
                  SEO Pricing Explained
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">SEO Pricing Explained</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                How agency retainers, in-house labor, and SEO software subscriptions fit together—and how to evaluate quotes without chasing vanity rankings. For stack planning, see{" "}
                <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                  how to budget for SEO tools and subscriptions
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/guides/how-much-seo-software-costs" className={link}>
                  how much SEO software costs
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="three-buckets" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Three buckets in every SEO budget</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Tools</strong> — Research, crawls, rank tracking, local grids. See{" "}
                    <Link href="/seo-tools/guides/how-much-seo-software-costs" className={link}>
                      how much SEO software costs
                    </Link>{" "}
                    for what drives subscription tiers.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Labor</strong> — Owner time, freelancers, or agency retainers. This is usually the largest line—and why{" "}
                    <Link href="/seo-tools/guides/why-seo-is-expensive" className={link}>
                      SEO feels expensive
                    </Link>{" "}
                    even when software looks affordable.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Assets</strong> — Photography, landing pages, citation cleanup, and proof content that builds trust.
                  </li>
                </ul>
                <p className="mt-4">
                  Compare vendor capability with{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tool comparisons
                  </Link>{" "}
                  and individual reviews—not blog screenshots frozen from last year&apos;s pricing page.
                </p>
              </section>

              <section id="agency-vs-diy" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Agency pricing vs DIY</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Agencies price for strategy, production, and reporting cadence. DIY prices your time instead of a retainer—but only works if someone owns weekly execution. Read{" "}
                  <Link href="/seo-tools/guides/can-you-do-seo-yourself" className={link}>
                    can you do SEO yourself
                  </Link>{" "}
                  and{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  to decide where software substitutes for hours versus where you still need hands on keyboard.
                </p>
                <p className="mt-4">
                  Many SMBs blend: owner runs GBP and reviews, agency handles technical migrations or content bursts, and one suite covers research. That hybrid often beats an oversized retainer with unused deliverables.
                </p>
              </section>

              <section id="what-drives-quotes" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What drives higher or lower quotes</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Number of locations and citation complexity</li>
                  <li>Competitive keywords and content depth required</li>
                  <li>Technical debt—migrations, staging, multilingual, ecommerce faceted URLs</li>
                  <li>Link and PR risk tolerance (white-hat outreach costs more than spam packages)</li>
                  <li>Reporting expectations—executive dashboards vs simple Search Console reviews</li>
                </ul>
                <p className="mt-4">
                  Before you pay for enterprise scope, confirm basics with{" "}
                  <Link href="/seo-tools/guides/technical-seo-audit-basics-for-small-business" className={link}>
                    technical SEO audit basics for small business
                  </Link>
                  .
                </p>
              </section>

              <section id="free-first" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Free-first pricing strategy</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Search Console and Google Business Profile are free; execution is not. Start with{" "}
                  <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                    how to optimize SEO for free
                  </Link>{" "}
                  until impressions grow on money pages—then add{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  or{" "}
                  <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                    Ahrefs
                  </Link>{" "}
                  when competitor research becomes weekly work. See{" "}
                  <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                    Semrush vs Ahrefs
                  </Link>{" "}
                  for workflow fit, not logo count.
                </p>
              </section>

              <section id="evaluate-proposals" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">How to evaluate an SEO proposal</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Ask for a 90-day plan with shipped artifacts, not just KPI promises:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>Technical fixes tied to Search Console coverage</li>
                  <li>Page-level deliverables with URLs listed</li>
                  <li>Local listing or GBP work if you are service-area based</li>
                  <li>How leads will be tagged so you can compare cost per booked job vs paid ads</li>
                </ul>
                <p className="mt-4">
                  Pair organic with{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>{" "}
                  thinking so pricing debates stay grounded in revenue, not rank charts alone.
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
              <GuideSidebar title="Compare SEO tool pricing" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "SEO Pricing Explained (2026) | Agencies, DIY & Tools | BeltStack",
    description:
      "Understand SEO pricing: agency retainers vs in-house labor vs software subscriptions, what drives quotes, free-first strategy, and how to evaluate proposals with real deliverables.",
  };
}
