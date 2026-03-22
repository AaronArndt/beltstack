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

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  { q: "What CRM do sales teams use?", a: "Sales teams often use HubSpot, Pipedrive, Salesforce, or Zoho CRM. Pipedrive is built for pipeline and activity; HubSpot adds marketing and a free tier; Close and Freshsales suit inside sales with built-in calling. See our CRM for sales teams guide and best CRM software roundup." },
  { q: "What is the best CRM for inside sales?", a: "Close and Freshsales offer built-in calling and pipeline; Pipedrive is pipeline-focused and integrates with dialers. See our Close vs Pipedrive and Freshsales vs Pipedrive comparisons for details." },
  { q: "How do sales reps use CRM daily?", a: "Reps use CRM to see their pipeline, log calls and emails, get reminders for follow-ups, and move deals through stages. The best CRMs for sales teams make data entry fast and put the pipeline front and center so reps actually use it." },
  { q: "What CRM features do sales managers need?", a: "Managers need pipeline and forecast visibility, activity reports per rep, and lead assignment/handoff. Tools like Pipedrive, HubSpot, and Salesforce offer dashboards, forecasting, and team reporting. See our how to choose CRM software guide for evaluation criteria." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline focus", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Sales + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Close", logoSrc: "/Logos/close.jpeg", rating: 4.5, bestFor: "Inside sales", reviewHref: getCrmReviewUrl("close") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  { label: "Close vs Pipedrive", href: getCrmCompareUrl("close-vs-pipedrive") },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
];

export default function CrmForSalesTeamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">CRM for Sales Teams</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM for Sales Teams</h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    What sales teams need from CRM: pipeline focus, activity tracking, and tools that reps actually use every day.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Sales teams need a CRM that puts the pipeline front and center, makes it easy to log calls and emails, and shows what to do next so reps actually use it every day. Without pipeline visibility and simple activity tracking, deals slip, follow-ups get missed, and forecasting stays guesswork.</p>
                    <p><Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> is built for that workflow; <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> adds marketing and a free tier; <Link href={getCrmReviewUrl("close")} className={linkGreen}>Close</Link> bundles calling for inside sales. Compare in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link>, including <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link> and <Link href={getCrmCompareUrl("close-vs-pipedrive")} className={linkGreen}>Close vs Pipedrive</Link>. For selection criteria see our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide.</p>
                  </div>
                </section>
                <section id="what-sales-teams-need" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Key capabilities.">What Sales Teams Need from CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Clear pipeline</strong> — Deal stages that match your process and visible value per stage so everyone knows what's in play and what's at risk.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activity tracking</strong> — Log calls, emails, meetings; reminders and next steps so follow-ups don't slip.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ease of use</strong> — Reps will use it daily; minimal friction and fast data entry drive adoption.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Pipeline and activity reports for forecasting and coaching; visibility for managers without exporting to spreadsheets.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="rep-workflows-and-handoffs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How reps and managers use CRM.">Rep Workflows and Lead Handoffs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Day to day, reps use CRM to see their pipeline, log activities (calls, emails, meetings), and get reminders for follow-ups. Lead assignment and handoff matter when leads come from marketing or when deals move between SDRs and closers: the CRM should make it clear who owns each lead or deal and what the next step is. Round-robin or rule-based assignment can distribute leads fairly; activity history ensures the next person has full context. Tools like <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> and <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> support these workflows; <Link href={getCrmReviewUrl("close")} className={linkGreen}>Close</Link> is built for inside sales with integrated calling and pipeline in one place.</p>
                  </div>
                </section>
                <section id="pipeline-and-forecast" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Visibility for managers and leaders.">Pipeline and Forecast Visibility</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Managers need to see pipeline value by stage, by rep, and by time period—and to turn that into a forecast. Good CRM reporting provides dashboards and reports that show pipeline movement, win rates, and activity so you can coach reps and adjust capacity. Forecast visibility (weighted or commit-by-rep) is essential for planning; many CRMs offer built-in forecasting or integrate with dedicated tools. As teams grow, automation (e.g. moving deals when stages change, sending reminders) reduces manual updates. See our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup for options with strong pipeline and reporting; <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> scales for larger teams that need advanced forecasting and customization.</p>
                  </div>
                </section>
                <section id="recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks for sales teams.">CRM Recommendations for Sales Teams</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> is built for pipeline-first sales teams: clear stages, activity tracking, and reporting. <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> adds marketing and a free CRM tier. <Link href={getCrmReviewUrl("close")} className={linkGreen}>Close</Link> suits inside sales with built-in calling. Compare <Link href={getCrmCompareUrl("hubspot-vs-pipedrive")} className={linkGreen}>HubSpot vs Pipedrive</Link> and <Link href={getCrmCompareUrl("close-vs-pipedrive")} className={linkGreen}>Close vs Pipedrive</Link> for head-to-head details, and our <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> guide if your team is still small.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for Sales Teams" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-for-sales-teams" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "CRM for Sales Teams | BeltStack Guide", description: "What sales teams need from CRM: pipeline visibility, automation, rep workflows, lead handoffs, and forecast visibility—with picks like Pipedrive, HubSpot, and Close." };
}
