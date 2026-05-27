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
    bestFor: "Suite pricing and seat tiers",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: 4.7,
    bestFor: "Credit-based research plans",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
  },
  {
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: 4.2,
    bestFor: "Mid-market monthly plans",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
  },
];

const FAQ = [
  {
    q: "How much do small businesses spend on SEO per month?",
    a: "Most owner-operated service businesses land between $0 and $500 monthly when they DIY with free Google tools and occasional software. Add $100–$400 for one paid suite or local specialist, or $1,000–$5,000+ when an agency runs content, links, and reporting. Market competitiveness matters more than company revenue alone.",
  },
  {
    q: "What is a realistic SEO tools budget?",
    a: "A single Semrush or Ahrefs seat plus Search Console is often $120–$250/month before overages. Local grid and citation tools add $30–$150. Model seats, tracked keywords, and crawl limits before annual renewals—see our how to budget for SEO tools guide.",
  },
  {
    q: "Is agency SEO worth the higher spend?",
    a: "Worth it when you lack internal time and the agency ties work to leads, not vanity rankings. Not worth it when they resell the same suite you could buy yourself without execution. Always keep Google Search Console under your own account.",
  },
  {
    q: "Why do SEO quotes vary so much?",
    a: "Scope differs: technical fixes only vs content production vs link outreach vs local citation programs. Cheap quotes often mean templated reports; expensive ones may include PPC or web redesign bundled in. Ask what deliverables change month to month.",
  },
  {
    q: "Should I spend on tools or content first?",
    a: "Fix indexing and publish core service pages before you fund enterprise crawls. Tools accelerate research—they do not replace pages customers can actually hire you from. Read are SEO tools worth it for the ROI frame.",
  },
  {
    q: "How does local SEO spending differ from national?",
    a: "Local programs weight GBP, reviews, citations, and city pages. National or ecommerce weight content volume, technical scale, and link acquisition. Local operators often spend less on software but more on reputation and listing hygiene.",
  },
  {
    q: "When does SEO spend pay back?",
    a: "Track booked jobs or qualified form fills—not rank position alone. Organic leads compound; compare cost per booked job to paid ads over 6–12 months. Pair CRM source tags with Search Console landing-page trends.",
  },
];

export default function HowMuchBusinessesSpendOnSeoPage() {
  const href = "/seo-tools/guides/how-much-businesses-spend-on-seo";
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
                  How Much Businesses Spend on SEO
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Much Businesses Spend on SEO</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                Realistic ranges for DIY owners, software subscriptions, and agency retainers—and what actually drives the bill. For line-item tool math, see{" "}
                <Link href="/seo-tools/guides/seo-pricing-explained" className={link}>
                  SEO pricing explained
                </Link>{" "}
                and{" "}
                <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                  how to budget for SEO tools and subscriptions
                </Link>
                .
              </p>
              <GuideLastUpdated date="May 26, 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="three-buckets" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Three buckets: labor, software, and outsourced SEO</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  &quot;SEO spend&quot; usually mixes three line items that get quoted as one number. Separating them keeps expectations honest:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Internal labor</strong> — Owner or staff time on pages, GBP, reviews, and Search Console. Often the largest cost even at $0 in software.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Software</strong> — Suites like{" "}
                    <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                      Semrush
                    </Link>{" "}
                    or{" "}
                    <Link href={getSeoToolsReviewUrl("ahrefs")} className={link}>
                      Ahrefs
                    </Link>
                    , local specialists, and rank trackers. Compare in{" "}
                    <Link href={getSeoToolsCompareUrl("semrush-vs-ahrefs")} className={link}>
                      Semrush vs Ahrefs
                    </Link>{" "}
                    before buying overlapping products.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">Agency or freelancer fees</strong> — Execution you do not staff internally: content, technical fixes, outreach, or reporting.
                  </li>
                </ul>
                <p className="mt-4">
                  A $3,000/month agency quote might include $400 in pass-through tool costs and $2,600 in labor. A $150/month owner stack might be entirely software with labor unpaid on evenings.
                </p>
              </section>

              <section id="typical-ranges" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Typical monthly ranges by approach</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  These are planning bands for U.S. service businesses and SMB ecommerce—not guarantees. Competitive metros and crowded trades sit at the high end.
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">$0–$100</strong> —{" "}
                    <Link href={getSeoToolsReviewUrl("google-search-console")} className={link}>
                      Google Search Console
                    </Link>
                    , GBP, and disciplined on-page work. See{" "}
                    <Link href="/seo-tools/guides/how-to-optimize-seo-for-free" className={link}>
                      how to optimize SEO for free
                    </Link>
                    .
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">$100–$500</strong> — One paid suite or local tool plus modest content or contractor help.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">$500–$2,500</strong> — Hybrid: internal owner plus part-time specialist or focused agency sprint on technical and local fixes.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">$2,500–$10,000+</strong> — Ongoing agency programs with content, links, and multi-location reporting—common in legal, medical, and franchise systems.
                  </li>
                </ul>
              </section>

              <section id="what-drives-cost" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">What drives cost up or down</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Number of service lines and cities, site size, technical debt, and how aggressive competitors are on content and reviews all move the needle. A single-location plumber in a mid-size market can outrank with strong GBP and ten solid pages; a multi-state HVAC brand needs citation governance and rank history tools that a solo operator skips.
                </p>
                <p className="mt-4">
                  Before you increase spend, ask whether the bottleneck is visibility (indexing, relevance) or conversion (slow site, weak proof on pages). Tools rarely fix a broken sales path. Read{" "}
                  <Link href="/seo-tools/guides/are-seo-tools-worth-it" className={link}>
                    are SEO tools worth it
                  </Link>{" "}
                  to decide if software is the constraint—or execution is.
                </p>
              </section>

              <section id="software-vs-agency" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Software spend vs agency retainers</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Buying Semrush does not publish your service pages. Hiring an agency does not replace owning Search Console access. Many businesses overspend on dashboards while underinvesting in the pages and reviews that actually rank in Maps.
                </p>
                <p className="mt-4">
                  A sensible sequence: verify free coverage, fix top technical issues, align GBP and site, then add one paid tool tied to a weekly task owner. Escalate to agency help when backlog exceeds internal capacity—not when a salesperson promises page-one in thirty days.
                </p>
              </section>

              <section id="measure-roi" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Measure spend against booked work</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Total SEO spend should be judged against cost per qualified lead or booked job from organic and Maps—not keyword count tracked. Tag sources in your CRM, compare six-month trends in Search Console landing pages, and revisit tool renewals when nobody logged in last month.
                </p>
                <p className="mt-4">
                  For subscription line items and overage traps, use{" "}
                  <Link href="/seo-tools/guides/how-to-budget-for-seo-tools-and-subscriptions" className={link}>
                    how to budget for SEO tools and subscriptions
                  </Link>{" "}
                  alongside{" "}
                  <Link href="/seo-tools/guides/seo-pricing-explained" className={link}>
                    SEO pricing explained
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
              <GuideSidebar title="SEO tools and pricing tiers" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Much Businesses Spend on SEO (2026) | DIY, Tools & Agency | BeltStack",
    description:
      "Realistic SEO spend ranges for SMBs—free Search Console stacks, Semrush and Ahrefs subscriptions, agency retainers, and what drives cost in competitive local markets.",
  };
}
