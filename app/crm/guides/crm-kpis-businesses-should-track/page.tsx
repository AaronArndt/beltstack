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
    q: "What are the most important CRM KPIs?",
    a: "Core KPIs include pipeline value by stage, win rate, average deal size, sales cycle length, forecast accuracy, and rep activity (calls/emails/meetings). Add lead response time and conversion for inbound-heavy teams.",
  },
  {
    q: "How often should we review CRM KPIs?",
    a: "Sales managers often review pipeline KPIs weekly; leadership reviews monthly or quarterly trends. Real-time dashboards help reps daily; avoid changing definitions every week.",
  },
  {
    q: "What CRM KPIs matter for small business?",
    a: "Small teams focus on open pipeline value, deals won per month, lead follow-up speed, and simple stage conversion—not enterprise forecast categories.",
  },
  {
    q: "Why do CRM KPIs look wrong?",
    a: "Usually bad data: outdated stages, duplicate deals, or missing close dates. Clean data first—see how businesses clean CRM data.",
  },
  {
    q: "What is a good CRM win rate benchmark?",
    a: "Benchmarks vary by industry and deal size—compare your win rate to your own trailing quarters, not generic SaaS averages. Improve stage definitions before chasing percentage targets.",
  },
  {
    q: "Should marketing and sales share the same CRM KPIs?",
    a: "Share core funnel metrics (lead volume, MQL-to-SQL, conversion) but assign ownership: marketing on top-of-funnel, sales on pipeline and win rate. Align definitions in one CRM report set.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline KPIs", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "SMB dashboards", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise reporting", reviewHref: getCrmReviewUrl("salesforce") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "How Businesses Measure CRM ROI", href: "/crm/guides/how-businesses-measure-crm-roi" },
  { label: "How Sales Pipeline Management Works", href: "/crm/guides/how-sales-pipeline-management-works" },
  { label: "CRM for Sales Teams", href: "/crm/guides/crm-for-sales-teams" },
];

export default function CrmKpisBusinessesShouldTrackPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM KPIs Businesses Should Track</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CRM KPIs Businesses Should Track
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Essential CRM key performance indicators for pipeline health, rep activity, conversion, and forecasting—with guidance by team size.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM KPIs turn raw records into management signals. Pick a small set aligned to how you sell—then enforce the data habits that make them accurate.
                    </p>
                    <p>
                      Too many KPIs dilute focus; too few hide problems. A practical stack covers <strong className="text-[#1A2D48]">pipeline health</strong>, <strong className="text-[#1A2D48]">rep activity</strong>, and <strong className="text-[#1A2D48]">conversion</strong>—adjusted for inbound vs outbound motion and contract size.
                    </p>
                    <p>
                      Build reports using <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>how CRM reporting works</Link> and <Link href="/crm/guides/what-is-analytical-crm" className={linkGreen}>analytical CRM</Link>. Tie results to <Link href="/crm/guides/how-businesses-measure-crm-roi" className={linkGreen}>CRM ROI</Link> and <Link href="/crm" className={linkGreen}>CRM hub</Link> reviews.
                    </p>
                  </div>
                </section>
                <section id="pipeline-kpis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Revenue and funnel metrics.">Pipeline and Revenue KPIs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline value by stage</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Win rate and loss reasons</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Average deal size and cycle length</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Forecast vs actual</strong></span></li>
                    </ul>
                    <p>See <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>sales pipeline management</Link>.</p>
                  </div>
                </section>
                <section id="activity-kpis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Leading indicators.">Activity and Lead KPIs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Calls, emails, meetings per rep</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Lead response time and speed-to-lead</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Lead-to-opportunity conversion</span></li>
                    </ul>
                    <p><Link href="/crm/guides/lead-management-explained" className={linkGreen}>Lead management explained</Link> and <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>tracking leads in CRM</Link>.</p>
                  </div>
                </section>
                <section id="definitions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Same words, same math.">Defining KPIs So Reports Match Reality</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Document what counts as a qualified opportunity, when a deal enters forecast, and which stages roll into pipeline value. Reps and leaders should use the same CRM report links in weekly meetings—not separate spreadsheets.</p>
                    <p>Clean data first: <Link href="/crm/guides/how-businesses-clean-crm-data" className={linkGreen}>how businesses clean CRM data</Link>. Connect marketing sources via <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>CRM integrations</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack tests CRM reporting in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>. KPI benchmarks in vendor decks are aspirational; measure your own baselines.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting and analytics</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-businesses-measure-crm-roi" className={linkGreen}>Measure CRM ROI</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm" className={linkGreen}>CRM software hub</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM reporting tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-kpis-businesses-should-track" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM KPIs Businesses Should Track | BeltStack Guide",
    description:
      "CRM KPIs businesses should track in 2026: pipeline value, win rate, activity, forecast accuracy, lead conversion, and how to define metrics leaders trust.",
    keywords: ["CRM KPIs", "sales KPIs", "CRM metrics", "pipeline KPIs", "CRM reporting"],
  };
}
