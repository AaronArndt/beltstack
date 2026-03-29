import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedTimeTrackingResources } from "@/components/guides/RelatedTimeTrackingResources";
import { getTimeTrackingReviewUrl } from "@/lib/routes";

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
    q: "Should subcontractors use my company’s time tracking app?",
    a: "Sometimes. If you need hours to invoice clients or prove completion, a shared tool can help. If subs are independent businesses, imposing surveillance-style tracking can blur classification lines—get professional advice and use contracts that match reality.",
  },
  {
    q: "What data do I need from 1099 workers?",
    a: "Typically what your agreement requires: agreed deliverables or hours, invoices, and any customer-required documentation—not necessarily the same GPS trail you might use for W-2 employees. Match data collection to the relationship your counsel supports.",
  },
  {
    q: "How does this connect to payroll?",
    a: "Payroll platforms handle W-2 pay runs; 1099 payments are different workflows. See our payroll guides for mixed workforces and confirm your time tool exports match how finance pays each group.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "Time + client billing", reviewHref: getTimeTrackingReviewUrl("harvest") },
  { name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "Simple team timers", reviewHref: getTimeTrackingReviewUrl("toggl") },
  { name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "Volume + free tier", reviewHref: getTimeTrackingReviewUrl("clockify") },
];

const PAGE_HREF = "/time-tracking/guides/time-tracking-for-subcontractors-and-1099-workers";

export default function TimeTrackingForSubcontractorsAnd1099WorkersPage() {
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
                    <li className="font-medium text-gray-700" aria-current="page">1099 &amp; subcontractors</li>
                  </ol>
                </nav>
                <section className="border-b border-neutral-200/60 pb-6">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Time Tracking for Subcontractors &amp; 1099 Workers
                  </h1>
                  <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">
                    What to track for billing and project control without treating independent contractors like employees
                    on paper—practical boundaries and questions for your accountant.
                  </p>
                  <GuideLastUpdated date="March 28, 2026" />
                </section>
                <section className="py-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      General contractors, agencies, and field service companies often blend W-2 employees and 1099
                      subs. Time tracking can help prove work completed and support client invoices—but it is not a
                      substitute for correct classification. Software should follow policy; it should not define it.
                    </p>
                    <p>
                      This article is educational, not legal advice. Pair it with{" "}
                      <Link href="/payroll/guides/payroll-for-contractors" className={linkGreen}>
                        payroll for contractors (W-2 vs 1099)
                      </Link>{" "}
                      and{" "}
                      <Link href="/time-tracking/guides/tracking-billable-hours" className={linkGreen}>
                        tracking billable hours
                      </Link>
                      . Explore{" "}
                      <Link href="/time-tracking/compare" className={linkGreen}>
                        time tracking comparisons
                      </Link>{" "}
                      when you shortlist vendors.
                    </p>
                  </div>
                </section>
                <section id="classification" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Control, tools, and documentation.">Classification Cautions</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Courts and agencies look at behavioral and financial control—not only what your time app is named.
                      Excessive direction, mandatory always-on monitoring, and exclusive scheduling can undermine 1099
                      status depending on facts. Align tools and contracts with counsel-approved playbooks.
                    </p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Invoices, retainers, milestones.">Workflows That Stay Arm’s-Length</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many subs invoice on milestones or lump sums; others log hours to a client code you provide. Decide
                      whether subs self-report into your system or send invoices with backup attachments. The cleaner the
                      handoff to{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing
                      </Link>
                      , the fewer disputes you will see at month-end.
                    </p>
                  </div>
                </section>
                <section id="field" className="scroll-mt-section border-t border-neutral-200/60 py-12">
                  <SectionTitle sub="Field service and trades.">Field Crews and Mixed Labor</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      On job sites, separate W-2 time (often with stronger attendance policy) from subcontractor
                      deliverables. If you use geofencing, read{" "}
                      <Link href="/time-tracking/guides/geofenced-time-tracking-for-field-crews" className={linkGreen}>
                        geofenced time tracking for field crews
                      </Link>{" "}
                      and ensure policies differ where appropriate.
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
    title: "Time Tracking for Subcontractors & 1099 Workers | BeltStack Guide",
    description:
      "How GCs and service businesses track subcontractor time for billing without blurring worker classification—workflows, cautions, and links to payroll concepts.",
  };
}
