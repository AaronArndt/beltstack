import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedTimeTrackingResources } from "@/components/guides/RelatedTimeTrackingResources";
import { getTimeTrackingBestForUrl, getTimeTrackingReviewUrl } from "@/lib/routes";

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
    q: "Do I need burdened labor rates in the time tool?",
    a: "Not always inside the tool, but someone should apply burden (taxes, benefits, overhead) when interpreting margin. Some teams keep raw hours in time tracking and burden in a spreadsheet or ERP; others configure fully loaded rates—consistency matters more than the specific app feature.",
  },
  {
    q: "How granular should job codes be?",
    a: "Granular enough to explain variances, not so detailed that techs fight the UI. Start with job or phase codes you already use in estimates; refine after you trust the data.",
  },
  {
    q: "What if FSM already tracks time?",
    a: "Many contractors use FSM for job time and export to accounting. If you run a separate time tracker, define the system of record to avoid double counting—see FSM and accounting integration for sync discipline.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "Hours to invoices", reviewHref: getTimeTrackingReviewUrl("harvest") },
  { name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.2", bestFor: "Budgets & integrations", reviewHref: getTimeTrackingReviewUrl("everhour") },
  { name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "Fast team adoption", reviewHref: getTimeTrackingReviewUrl("toggl") },
];

const PAGE_HREF = "/time-tracking/guides/job-costing-time-tracking-for-contractors";

export default function JobCostingTimeTrackingForContractorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-8">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pb-4 pt-8">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Time Tracking</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/time-tracking/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="font-medium text-gray-700" aria-current="page">Job costing</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Job Costing with Time Tracking for Contractors
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    How tracked hours feed estimates, work-in-progress, and job profitability—without burying crews in
                    admin or polluting your books with noisy codes.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Job costing answers a simple question: did we make money on this job once labor, materials, and
                      overhead are counted? Time tracking supplies the labor leg—if people tag time honestly and codes map
                      to how you bid work.
                    </p>
                    <p>
                      Connect this guide to{" "}
                      <Link href="/field-service/guides/field-service-software-and-accounting-integration" className={linkGreen}>
                        FSM and accounting integration
                      </Link>
                      ,{" "}
                      <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>
                        accounting for small business
                      </Link>
                      , and{" "}
                      <Link href="/time-tracking/guides/how-time-tracking-software-works" className={linkGreen}>
                        how time tracking software works
                      </Link>
                      . For tool picks, see{" "}
                      <Link href={getTimeTrackingBestForUrl("small-business")} className={linkGreen}>
                        best time tracking for small business
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="labor-burden" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Raw hours vs true cost.">Labor, Burden, and Overhead</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll wage multiplied by hours is only a slice of labor cost. Burden captures taxes, benefits, and
                      sometimes equipment. Overhead allocation is a policy choice—consistent application beats theoretical
                      precision nobody maintains.
                    </p>
                  </div>
                </section>
                <section id="wip" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Open jobs and cash timing.">WIP, Billing, and Reality Checks</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Long jobs create work-in-progress: labor and materials hit before invoices do. Time data should
                      support periodic WIP reviews with your accountant—not only week-end payroll. If numbers never match
                      the field, fix tagging rules before you buy more software.
                    </p>
                  </div>
                </section>
                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Foremen and techs will ignore bad codes.">Adoption and Governance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The best job-costing model is the one crews use. Start with mandatory fields that fit thumb typing
                      on site. Managers should review outliers weekly—approve edits with notes so payroll and PMs share one
                      story.
                    </p>
                    <p>
                      Related:{" "}
                      <Link href="/field-service/guides/dispatch-and-capacity-planning-for-field-service" className={linkGreen}>
                        dispatch and capacity planning
                      </Link>{" "}
                      when labor hours tie directly to schedule performance.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:col-span-4 lg:block lg:pt-8">
              <GuideSidebar title="Time tracking tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedTimeTrackingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Job Costing & Time Tracking for Contractors | BeltStack Guide",
    description:
      "Use time tracking for contractor job costing: labor burden, job codes, WIP, and how hours flow to accounting and FSM without drowning crews in admin.",
  };
}
