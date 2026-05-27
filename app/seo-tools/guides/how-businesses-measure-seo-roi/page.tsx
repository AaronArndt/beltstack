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
    q: "What is SEO ROI for a small business?",
    a: "The revenue or gross profit you can tie to organic search minus what you spent on labor, software, and content to earn it. It is not position #3 for a vanity keyword—it is booked jobs, closed deals, or margin from customers who found you through Google without a per-click fee.",
  },
  {
    q: "How long before SEO shows measurable ROI?",
    a: "Technical fixes and GBP updates can produce leads within weeks. Competitive organic rankings often need three to six months of consistent work. Track leading indicators—impressions, calls, form fills—monthly so you know whether the program is moving before revenue fully compounds.",
  },
  {
    q: "Can I measure SEO ROI without Google Analytics?",
    a: "Partially. Search Console shows search performance; call tracking and CRM tagging show outcomes. Analytics helps attribute on-site behavior and multi-touch paths. Read is Google Analytics an SEO tool for how GA4 fits alongside Search Console—not as a replacement.",
  },
  {
    q: "What costs should I include in SEO ROI?",
    a: "Owner or staff time, agency retainers, software subscriptions, content production, citation tools, and any local rank tracking. Exclude unrelated ad spend unless you are comparing channels. See how much businesses spend on SEO for typical spend bands.",
  },
  {
    q: "Is ranking improvement alone proof of ROI?",
    a: "No. Rankings can rise while clicks fall if SERP layouts change, or traffic can grow without converting. Pair rank trackers with Search Console clicks and CRM outcomes. Rank is a diagnostic; revenue per organic lead is the outcome.",
  },
  {
    q: "How do local service businesses attribute SEO revenue?",
    a: "Tag calls and forms by source, ask how customers found you at booking, and compare GBP actions to Search Console landing pages. Route every lead through CRM so Maps, organic, and paid are not lumped together when you report ROI to ownership.",
  },
  {
    q: "When do SEO tools pay for themselves in ROI terms?",
    a: "When they replace enough manual research or prevent one bad hire decision—usually once you track more than a handful of locations or keywords. Compare BrightLocal vs Whitespark for local grids, or browse the best SEO tools roundup before annualizing another suite.",
  },
];

export default function HowBusinessesMeasureSeoRoiPage() {
  const href = "/seo-tools/guides/how-businesses-measure-seo-roi";
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
                  How Businesses Measure SEO ROI
                </li>
              </ol>
            </nav>
            <section className="pb-6 border-b border-neutral-200/60">
              <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Measure SEO ROI</h1>
              <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                A practical framework for tying organic search to booked revenue—not vanity rankings. Start with{" "}
                <Link href="/seo-tools/guides/what-seo-actually-does-for-businesses" className={link}>
                  what SEO actually does for businesses
                </Link>
                , then use Search Console, CRM tagging, and the{" "}
                <Link href="/seo-tools/best-seo-tools" className={link}>
                  best SEO tools roundup
                </Link>{" "}
                only where measurement gaps appear.
              </p>
              <GuideLastUpdated date="May 2026" />
            </section>

            <div className="pt-8 pb-8 space-y-10 text-[15px] leading-relaxed text-neutral-700">
              <section id="outcome-first" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Start with outcomes, not keyword counts</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  SEO ROI begins with a definition owners can defend: revenue or gross profit from customers who discovered you through organic search, minus the cost to earn and maintain that visibility. Rankings and traffic are inputs; closed jobs, signed contracts, and repeat purchases are outputs.
                </p>
                <p className="mt-4">
                  If you cannot name the conversion events that matter—call, form, booking, cart—no dashboard will rescue the math. Define those events in{" "}
                  <Link href="/crm" className={link}>
                    CRM
                  </Link>{" "}
                  before you buy another rank tracker.
                </p>
              </section>

              <section id="data-stack" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">The measurement stack most SMBs actually need</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>Three layers, each answering a different question:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-[#1A2D48]">Search Console</strong> — Which queries earn impressions and clicks, which pages index, and where CTR leaks. Free and non-negotiable for SEO diagnostics.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">On-site analytics</strong> — What visitors do after they land. See{" "}
                    <Link href="/seo-tools/guides/is-google-analytics-an-seo-tool" className={link}>
                      is Google Analytics an SEO tool
                    </Link>{" "}
                    for how GA4 complements Search Console without replacing it.
                  </li>
                  <li>
                    <strong className="text-[#1A2D48]">CRM or pipeline</strong> — Which leads became revenue, by source and campaign. Without this layer, organic and paid look equally profitable on a spreadsheet.
                  </li>
                </ul>
              </section>

              <section id="attribution" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Attribution without enterprise complexity</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Perfect multi-touch attribution is rare for a ten-person shop. Good-enough ROI uses consistent rules: UTM tags on content links, dynamic call tracking on key landing pages, a &quot;how did you hear about us?&quot; field at booking, and monthly reconciliation between Search Console top pages and CRM closed-won deals.
                </p>
                <p className="mt-4">
                  For local operators, pair GBP insights with organic landing pages—see{" "}
                  <Link href="/seo-tools/guides/local-seo-for-service-businesses" className={link}>
                    local SEO for service businesses
                  </Link>{" "}
                  for how Maps and site traffic should tell one story in your reports.
                </p>
              </section>

              <section id="cost-side" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Count the full cost side of the equation</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  ROI fails when teams only track subscriptions and ignore labor. Include owner hours, writer fees, agency retainers, and tools such as{" "}
                  <Link href={getSeoToolsReviewUrl("brightlocal")} className={link}>
                    BrightLocal
                  </Link>
                  ,{" "}
                  <Link href={getSeoToolsReviewUrl("whitespark")} className={link}>
                    Whitespark
                  </Link>
                  , or{" "}
                  <Link href={getSeoToolsReviewUrl("semrush")} className={link}>
                    Semrush
                  </Link>{" "}
                  when you use them for ongoing work—not one-off trials. Compare vendors on the{" "}
                  <Link href="/seo-tools/compare" className={link}>
                    SEO tools compare hub
                  </Link>{" "}
                  before you stack overlapping annual contracts.
                </p>
              </section>

              <section id="reporting-cadence" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">Monthly reporting cadence that surfaces ROI early</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Weekly: fix one Search Console issue and log CRM leads tagged organic. Monthly: review impression growth on money keywords, compare cost per organic lead to{" "}
                  <Link href="/lead-generation/guides/paid-vs-organic-leads" className={link}>
                    paid vs organic leads
                  </Link>
                  , and note which pages earned clicks but failed to convert—those are on-page fixes, not budget problems.
                </p>
                <p className="mt-4">
                  Quarterly: roll up revenue attributed to organic, subtract fully loaded SEO cost, and decide whether to reinvest in content, local grids, or technical debt. Read{" "}
                  <Link href={getSeoToolsCompareUrl("brightlocal-vs-whitespark")} className={link}>
                    BrightLocal vs Whitespark
                  </Link>{" "}
                  if local visibility is the bottleneck in your ROI story.
                </p>
              </section>

              <section id="when-to-stop" className="scroll-mt-section">
                <h2 className="text-[#1A2D48] text-xl font-bold">When ROI says pause, pivot, or double down</h2>
                <div className="mt-2 mb-4 h-[2px] w-14 bg-[#10B981]" aria-hidden />
                <p>
                  Pause when indexing is broken and nobody owns fixes—more content will not help. Pivot when organic leads convert but volume is flat; that is a visibility or local-pack problem, not a sales problem. Double down when cost per organic lead beats paid after six months of honest tagging and margins support more publishing or citation work.
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
              <GuideSidebar title="SEO tools for ROI measurement" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Businesses Measure SEO ROI (2026) | Attribution & Reporting | BeltStack",
    description:
      "Practical SEO ROI for SMBs—outcome-first measurement, Search Console plus CRM tagging, full cost accounting, monthly cadence, and when BrightLocal, Whitespark, or Semrush support reporting.",
    keywords: [
      "SEO ROI measurement",
      "how to measure SEO ROI",
      "SEO return on investment",
      "organic search attribution",
      "SEO reporting for small business",
      "Search Console ROI",
    ],
  };
}
