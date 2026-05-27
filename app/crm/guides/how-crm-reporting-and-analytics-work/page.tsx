import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "What CRM reports do managers use most?",
    a: "Pipeline by stage, forecast vs quota, conversion rates between stages, activity per rep, and deal velocity. SMB teams often start with pipeline value and deals closed per month.",
  },
  {
    q: "Why is my CRM reporting inaccurate?",
    a: "Usually stale stages, missing close dates, deals left open when lost, or reps not logging activities. Fix process and required fields before buying more analytics add-ons.",
  },
  {
    q: "Can CRM export data to BI tools?",
    a: "Yes. Enterprise CRMs offer APIs and connectors to warehouses and tools like Looker or Power BI. SMB teams often use built-in dashboards and CSV export first.",
  },
  {
    q: "What is weighted pipeline in CRM?",
    a: "Each stage has a win probability; deal amount × probability sums to a forecast. Accurate only when stages reflect real selling steps and close dates are honest.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Advanced reporting", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "SMB dashboards", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline reports", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "How Sales Pipeline Management Works", href: "/crm/guides/how-sales-pipeline-management-works" },
  { label: "How CRM Software Improves Sales", href: "/crm/guides/how-crm-software-improves-sales" },
  { label: "Common CRM Mistakes Businesses Make", href: "/crm/guides/common-crm-mistakes-businesses-make" },
  { label: "CRM for Sales Teams", href: "/crm/guides/crm-for-sales-teams" },
];

export default function HowCrmReportingAndAnalyticsWorkPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Reporting and Analytics Work</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Reporting &amp; Analytics Work
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How CRM turns pipeline and activity data into dashboards, forecasts, and coaching metrics—and what it takes for those numbers to be trustworthy.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM reporting is only as good as the data reps enter. When stages, amounts, and close dates reflect reality, managers get live pipeline value, conversion by step, and activity benchmarks. When the CRM is a graveyard of outdated deals, dashboards mislead.
                    </p>
                    <p>
                      <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> emphasizes pipeline reports; <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> offers deep customization; <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> balances ease and reporting for SMBs. See <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>how sales pipeline management works</Link>.
                    </p>
                  </div>
                </section>
                <section id="report-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Standard CRM analytics.">Common Report and Dashboard Types</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline reports</strong> — Value and count by stage, owner, or product.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Forecast reports</strong> — Weighted pipeline and commit vs best case.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activity reports</strong> — Calls, emails, meetings per rep or team.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Conversion funnels</strong> — Lead-to-opportunity and stage-to-stage rates.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Win/loss analysis</strong> — Reasons and competitors on closed deals.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="data-quality" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Garbage in, garbage out.">Data Quality for Reliable Analytics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Enforce required fields on stage change, weekly pipeline reviews, and clear definitions for each stage. Avoid <Link href="/crm/guides/common-crm-mistakes-businesses-make" className={linkGreen}>common CRM mistakes</Link> like duplicate records and zombie deals. <Link href="/crm/guides/how-crm-software-improves-sales" className={linkGreen}>How CRM improves sales</Link> ties metrics to outcomes.</p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Verify before you trust dashboards.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack recommends validating a few deals manually against CRM reports during trial. Vendor screenshots rarely show messy real-world data—your rollout discipline determines analytics value.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM with strong reports" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-reporting-and-analytics-work" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Reporting & Analytics Work | BeltStack Guide",
    description:
      "Learn how CRM reporting and analytics work: pipeline dashboards, forecasting, activity metrics, and keeping data accurate for trustworthy reports.",
  };
}
