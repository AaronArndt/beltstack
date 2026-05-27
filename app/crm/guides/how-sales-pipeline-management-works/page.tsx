import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl } from "@/lib/routes";

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
    q: "What is sales pipeline management?",
    a: "Sales pipeline management is tracking deals through defined stages from first contact to closed won or lost, with amounts, owners, and activities. CRM software provides the board or list view, reporting, and forecasting built on that pipeline.",
  },
  {
    q: "What are typical CRM pipeline stages?",
    a: "Stages vary by business: common examples include qualified, meeting held, proposal sent, negotiation, and closed. B2B may add legal or procurement steps; SMB may use three to five stages only.",
  },
  {
    q: "How does pipeline management improve forecasting?",
    a: "Weighted pipeline (stage probability × deal value) and historical conversion rates help managers forecast revenue. Clean data—accurate stages and close dates—is required for forecasts to be trustworthy.",
  },
  {
    q: "Which CRM is best for pipeline management?",
    a: "Pipedrive is built around visual pipeline; HubSpot and Zoho CRM offer strong boards and reporting. Compare on fit and price: HubSpot vs Pipedrive and our CRM for sales teams guide.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline UX", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Pipeline + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise pipeline", reviewHref: getCrmReviewUrl("salesforce") },
];

const RELATED_ITEMS = [
  { label: "CRM for Sales Teams", href: "/crm/guides/crm-for-sales-teams" },
  { label: "How Businesses Track Leads Using CRM", href: "/crm/guides/how-businesses-track-leads-using-crm" },
  { label: "How CRM Software Improves Sales", href: "/crm/guides/how-crm-software-improves-sales" },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  { label: "How CRM Software Works", href: "/crm/guides/how-crm-software-works" },
];

export default function HowSalesPipelineManagementWorksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Sales Pipeline Management Works</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Sales Pipeline Management Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How CRM pipeline stages, deal values, and activity discipline turn opportunities into visible, forecastable revenue work.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Sales pipeline management is how teams see every open opportunity, what stage it is in, who owns it, and what happens next. CRM replaces hallway updates and static spreadsheets with a live board reps and managers share.
                    </p>
                    <p>
                      <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> popularized pipeline-first UX; <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> add depth for larger orgs. Read <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link> for role-specific needs.
                    </p>
                  </div>
                </section>
                <section id="stages" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Designing the funnel in CRM.">Pipeline Stages and Deal Records</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Each deal links to a contact or account, has an owner, amount, expected close date, and stage. Stages should mirror real selling steps—not so many that reps never update them. Stage changes can trigger required fields or tasks via <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>automation</Link>.</p>
                    <p>Leads enter the pipeline after qualification; see <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>how businesses track leads using CRM</Link>.</p>
                  </div>
                </section>
                <section id="activities" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What moves deals forward.">Activities, Velocity, and Hygiene</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Logged activities</strong> — Calls, emails, meetings prove engagement.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Deal velocity</strong> — Time in stage flags stuck opportunities.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Pipeline hygiene</strong> — Close lost reasons, archive stale deals, enforce close dates.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="forecasting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From board to number.">Forecasting and Pipeline Reviews</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Managers run pipeline reviews weekly: validate stage, next step, and risk. CRM dashboards aggregate pipeline value by stage and rep. Accurate forecasting depends on rep habit and simple stages—see <Link href="/crm/guides/how-crm-software-improves-sales" className={linkGreen}>how CRM software improves sales</Link>.</p>
                    <p>Compare pipeline tools: <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link> and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Pipeline-focused CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-sales-pipeline-management-works" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Sales Pipeline Management Works | BeltStack Guide",
    description:
      "Learn how sales pipeline management works in CRM: stages, deal tracking, activities, forecasting, and pipeline reviews.",
  };
}
