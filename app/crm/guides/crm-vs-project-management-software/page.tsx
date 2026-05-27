import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl, getProjectManagementReviewUrl, getProjectManagementCompareUrl } from "@/lib/routes";

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
    q: "What is the difference between CRM and project management software?",
    a: "CRM tracks customers, leads, and revenue opportunities through a sales pipeline. Project management software tracks tasks, deliverables, timelines, and team workload on projects. CRM answers who to sell and close; PM answers how work gets done after the sale.",
  },
  {
    q: "Can I use project management software as a CRM?",
    a: "Some agencies use Monday or Asana boards for deal stages, but you lose native sales objects, email sync, and revenue forecasting. Light use can work for tiny teams; dedicated CRM is better once pipeline value and handoffs matter.",
  },
  {
    q: "Do agencies need both CRM and project management?",
    a: "Often yes: CRM for new business and account growth; PM for delivery, tasks, and deadlines. Integrations or Zapier can link won deals to project templates. See CRM for agencies and project management for agencies guides.",
  },
  {
    q: "Which tools are commonly paired?",
    a: "HubSpot or Pipedrive for CRM with Asana, ClickUp, or Monday for delivery is a common SMB stack. Compare CRM on our compare hub and PM tools on the project management hub.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "CRM + client records", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: 4.6, bestFor: "Project delivery", reviewHref: getProjectManagementReviewUrl("asana") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Project Management Hub", href: "/project-management" },
  { label: "CRM for Agencies", href: "/crm/guides/crm-for-agencies" },
  { label: "Project Management for Agencies", href: "/project-management/guides/project-management-for-agencies" },
  { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
];

export default function CrmVsProjectManagementSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM vs Project Management Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    CRM vs Project Management Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Revenue and relationships in CRM vs tasks and deliverables in project management—how the categories differ and when teams use both.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Agencies, consultancies, and software shops often already use a project tool before they buy CRM—or they try to stretch one board for both sales and delivery. The categories overlap in &quot;deals as cards&quot; metaphors but optimize for different outcomes: winning and growing accounts vs shipping work on time.
                    </p>
                    <p>
                      This comparison lives in our <Link href="/crm/guides" className={linkGreen}>CRM guides</Link> collection. Pair it with <Link href="/project-management/guides/how-to-choose-project-management-software" className={linkGreen}>how to choose project management software</Link> on the <Link href="/project-management" className={linkGreen}>project management hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="definitions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core purpose of each tool type.">What CRM and Project Management Each Do</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">CRM</strong> — Contacts, companies, opportunities, sales activities, quotes, and pipeline forecasting. Tools include <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, and <Link href={getCrmReviewUrl("copper")} className={linkGreen}>Copper</Link> (strong for Google Workspace teams).
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Project management software</strong> — Tasks, subtasks, Gantt or Kanban views, dependencies, milestones, time tracking, and resource planning. Examples: <Link href={getProjectManagementReviewUrl("asana")} className={linkGreen}>Asana</Link>, <Link href={getProjectManagementReviewUrl("clickup")} className={linkGreen}>ClickUp</Link>, <Link href={getProjectManagementReviewUrl("monday")} className={linkGreen}>Monday</Link>. See <Link href={getProjectManagementCompareUrl("asana-vs-clickup")} className={linkGreen}>Asana vs ClickUp</Link>.
                    </p>
                  </div>
                </section>
                <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where they diverge in practice.">CRM vs Project Management: Key Differences</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Unit of work</strong> — CRM: lead/deal. PM: task/project.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Success metric</strong> — CRM: win rate, pipeline, ARR. PM: on-time delivery, utilization, scope.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Typical owner</strong> — CRM: sales/BD. PM: PMO, producers, team leads.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Email integration</strong> — CRM emphasizes logging sales conversations; PM emphasizes task comments and attachments.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="when-each" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choosing one or both.">When You Need CRM, PM, or Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Use <strong className="text-[#1A2D48]">CRM alone</strong> when delivery is simple and sales pipeline is the main gap. Use <strong className="text-[#1A2D48]">PM alone</strong> when you have few new deals but complex delivery (internal teams). Use <strong className="text-[#1A2D48]">both</strong> when you win work in CRM and kick off a project template in PM when a deal closes.
                    </p>
                    <p>
                      <Link href="/crm/guides/crm-for-agencies" className={linkGreen}>CRM for agencies</Link> and <Link href="/project-management/guides/project-management-for-agencies" className={linkGreen}>project management for agencies</Link> walk through combined workflows. Avoid using PM boards as a long-term CRM substitute if you care about revenue reporting—see <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> for similar tradeoffs.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How we compare software categories.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack separates category guides from vendor reviews so you can validate fit in trials. All-in-one tools (ClickUp, Monday with CRM views) blur lines—evaluate sales-specific workflows and delivery-specific workflows independently before consolidating vendors for cost alone.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM + project tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-vs-project-management-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "CRM vs Project Management Software | BeltStack Guide",
    description:
      "Learn how CRM and project management software differ, when agencies and teams need both, and how sales pipeline tools connect to task and delivery workflows.",
  };
}
