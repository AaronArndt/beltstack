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
    q: "How does CRM software improve sales?",
    a: "CRM improves sales by reducing missed follow-ups, making pipeline visible, logging activities for coaching, automating repetitive tasks, and improving forecast accuracy. Gains depend on adoption and process—not software alone.",
  },
  {
    q: "Can CRM increase revenue without more leads?",
    a: "Often yes, by converting more existing pipeline through better follow-up, faster response, and clearer prioritization. It does not replace lead generation or product-market fit.",
  },
  {
    q: "How long before CRM shows sales results?",
    a: "Teams often see hygiene and visibility gains in weeks. Revenue impact may take a quarter once pipeline data is reliable and reps use tasks and sequences consistently.",
  },
  {
    q: "What metrics prove CRM is helping sales?",
    a: "Track response time, activity per rep, stage conversion rates, average deal cycle, and forecast accuracy vs actuals—not only logins.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales velocity", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Sales + inbound", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Close", logoSrc: "/Logos/close.jpeg", rating: 4.4, bestFor: "Outbound sales", reviewHref: getCrmReviewUrl("close") },
];

const RELATED_ITEMS = [
  { label: "CRM for Sales Teams", href: "/crm/guides/crm-for-sales-teams" },
  { label: "How Sales Pipeline Management Works", href: "/crm/guides/how-sales-pipeline-management-works" },
  { label: "How CRM Automation Works", href: "/crm/guides/how-crm-automation-works" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function HowCrmSoftwareImprovesSalesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Improves Sales</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Improves Sales
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Concrete ways CRM helps sales teams win more deals: follow-up, visibility, coaching, automation, and forecasting—with realistic expectations about adoption.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM does not magically create demand. It improves how efficiently your team converts the demand you already have—by making the next action obvious, the pipeline honest, and coaching data-driven. Results track with whether reps update the system daily.
                    </p>
                    <p>
                      Sales-focused CRMs include <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, <Link href={getCrmReviewUrl("close")} className={linkGreen}>Close</Link>, and <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>. See <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link> and our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> list.
                    </p>
                  </div>
                </section>
                <section id="follow-up" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fewer deals die quietly.">Better Follow-Up and Response Time</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Tasks, reminders, and sequences reduce leads going cold. <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>Lead tracking in CRM</Link> ensures new inquiries get an owner quickly. Speed-to-lead matters especially for inbound; pair CRM with your <Link href="/lead-generation" className={linkGreen}>lead generation</Link> stack.</p>
                  </div>
                </section>
                <section id="visibility" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Everyone sees the same pipeline.">Pipeline Visibility and Prioritization</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Reps focus on the right deals; managers spot stuck stages early. <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>How sales pipeline management works</Link> explains stage discipline. Compared to <Link href="/crm/guides/can-excel-be-used-as-a-crm" className={linkGreen}>Excel</Link> or spreadsheets, live CRM boards update for the whole team.</p>
                  </div>
                </section>
                <section id="coaching" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Data for 1:1s and reviews.">Coaching, Activity, and Forecasting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activity metrics</strong> — Calls and emails logged per rep for fair coaching.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Stage conversion</strong> — Where deals stall in the funnel.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Forecasting</strong> — Weighted pipeline when close dates and stages are accurate.</span></li>
                    </ul>
                    <p><Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>Automation</Link> frees rep time for high-value conversations.</p>
                  </div>
                </section>
                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Software only helps if used.">Getting Sales Results Requires Adoption</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Leadership should mandate minimum fields, run weekly pipeline reviews, and choose simple tools. <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>How to choose CRM software</Link> and <Link href="/crm/guides/what-features-to-look-for-in-crm-software" className={linkGreen}>what features to look for</Link> help avoid overbuying complexity reps will resist.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Sales-focused CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-improves-sales" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Improves Sales | BeltStack Guide",
    description:
      "Learn how CRM software improves sales: follow-up, pipeline visibility, coaching, automation, and forecasting—with realistic adoption expectations.",
  };
}
