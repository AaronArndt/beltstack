import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedFieldServiceResources } from "@/components/guides/RelatedFieldServiceResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "How do businesses track field employees?",
    a: "They combine job status updates, time logs, and optional location visibility inside field service software. The office sees which jobs are in progress without calling every technician. Reports roll up utilization, on-time performance, and hours by job so managers can coach and plan capacity.",
  },
  {
    q: "Is GPS tracking required to manage field teams?",
    a: "Not always. Many teams start with mobile check-ins—en route, on site, complete—and add GPS when dispatch accuracy or customer ETAs demand it. Clear policies and explaining the customer-service purpose reduce trust issues when location tracking is enabled.",
  },
  {
    q: "What is the difference between time tracking and job tracking?",
    a: "Time tracking records hours for payroll or job costing. Job tracking records workflow status, documentation, and outcomes per work order. Best setups link both so labor hours attach to the correct customer job and invoices reflect what actually happened in the field.",
  },
  {
    q: "Can field tracking replace manager check-ins?",
    a: "Data complements leadership; it does not replace it. Dashboards flag delays and missing documentation, but coaching and quality standards still need human review. Use tracking to spot patterns, not to punish every minute off the ideal route.",
  },
  {
    q: "What should businesses avoid when tracking field staff?",
    a: "Avoid surveillance without purpose, inconsistent policies, and systems technicians bypass because updates are slow. Tracking should support dispatch, customer communication, and fair performance reviews—not micromanagement that drives crews back to personal texts and paper notes.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Contractors and home services",
    reviewHref: getFieldServiceReviewUrl("jobber"),
  },
  {
    name: "Housecall Pro",
    logoSrc: "/Logos/housecallpro.jpeg",
    rating: "4.5",
    bestFor: "Home service pros",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
  },
  {
    name: "ServiceTitan",
    logoSrc: "/Logos/servicetitan.png",
    rating: "4.5",
    bestFor: "Growing service companies",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
  },
];

const PAGE_HREF = "/field-service/guides/how-businesses-track-field-employees";

export default function HowBusinessesTrackFieldEmployeesPage() {
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
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Field Service
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/field-service/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      How Businesses Track Field Employees
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Track Field Employees
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how service companies track field employees with job status, time logs, location visibility,
                    and operational reporting—without losing technician trust.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field employee tracking is really operational visibility: knowing where work stands, whether crews
                      are on schedule, and how labor maps to jobs. The best programs use data to help dispatch and
                      coaching—not to create a surveillance culture that technicians work around.
                    </p>
                    <p>
                      Most tracking happens inside{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        field service software
                      </Link>
                      . Mobile apps are the capture layer—see{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>
                      . Live assignment changes flow through{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatching software
                      </Link>{" "}
                      so the board and customer ETAs reflect what crews actually do.
                    </p>
                    <p>
                      Tracking ties directly to{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        work order management
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-field-service-teams-schedule-technicians" className={linkGreen}>
                        how field service teams schedule technicians
                      </Link>
                      . When scheduling promises are unrealistic, dashboards only show chaos faster—fix capacity before
                      adding more metrics.
                    </p>
                    <p>
                      Compare tools on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>{" "}
                      when spreadsheets and phone calls no longer scale. For pain points tracking solves, see{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="job-status-tracking" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The baseline most teams implement first.">
                    Job Status and Work Order Tracking
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians update standardized statuses from mobile: assigned, en route, on site, waiting on parts,
                      complete. Those timestamps feed dispatch boards, customer ETA messages, and end-of-day reporting
                      without manual check-in calls.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Dispatcher assigns the job</strong> — work order appears on the
                        tech&apos;s schedule with scope and customer notes.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Tech marks en route and on site</strong> — triggers customer
                        notifications and updates the live board.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Field documentation</strong> — photos, parts, and notes attach
                        to the same record.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Job complete</strong> — status closes the loop for billing and
                        utilization reports.
                      </li>
                    </ol>
                    <p>
                      Pair status tracking with required photos or signatures on critical job types so disputes and
                      warranty claims have evidence. Management practices tie to{" "}
                      <Link href="/field-service/guides/how-businesses-manage-field-technicians" className={linkGreen}>
                        how businesses manage field technicians
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        how service businesses manage work orders
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="time-and-location" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Payroll accuracy, job costing, and optional GPS.">
                    Time Logs and Location Visibility
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Clock-in/out or per-job timers</strong> — labor hours linked
                          to work orders for costing and payroll.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Geofenced arrivals</strong> — optional proof of service
                          where contracts or compliance require it.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Live map views</strong> — dispatch sees technician
                          positions when same-day ETAs and reassignments matter.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Drive-time vs on-site time</strong> — separate buckets help
                          refine scheduling buffers and route planning.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Document why location is collected and when it is active. Teams that explain the customer-service
                      and safety reasons for GPS see higher adoption than those that enable tracking without context.
                      Technicians execute updates through{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="reporting-and-policy" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turning field data into operational decisions.">
                    Reporting and Responsible Use
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Dashboards should answer practical questions managers ask every week:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Which jobs ran over?</strong> — compare actual duration to
                          estimates and adjust templates.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Who has documentation gaps?</strong> — missing photos or
                          signatures before invoice.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Are we understaffed in a zone?</strong> — utilization by
                          territory informs hiring and{" "}
                          <Link
                            href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                            className={linkGreen}
                          >
                            capacity planning
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Export labor hours by job type to refine estimates and scheduling buffers. Align tracking policy
                      with{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling software
                      </Link>{" "}
                      discipline. Accurate promises reduce reactive firefighting visible only after customers complain.
                    </p>
                  </div>
                </section>

                <section id="evaluate-tracking" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Testing visibility under real field volume.">
                    How to Evaluate Tracking in FSM Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run trials on a busy day: assign a same-day emergency, a job that runs two hours over, and a tech
                      who loses signal mid-route. Watch whether status updates sync to{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch
                      </Link>{" "}
                      within seconds and whether labor hours land on the correct work order.
                    </p>
                    <p>
                      Ask technicians whether updates take more than a few taps—if the app is slow, they will revert to
                      texts and your tracking investment fails. For recurring routes, confirm{" "}
                      <Link
                        href="/field-service/guides/how-businesses-handle-recurring-service-appointments"
                        className={linkGreen}
                      >
                        recurring service appointments
                      </Link>{" "}
                      roll up the same utilization metrics as one-off jobs.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Field employee tracking FAQs.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Field service tools to compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedFieldServiceResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Track Field Employees | BeltStack Guide",
    description:
      "Learn how businesses track field employees with job status, location visibility, time logs, dispatch sync, and operational reporting.",
    keywords: [
      "track field employees",
      "field service tracking",
      "technician GPS tracking",
      "job status tracking",
      "field employee time logs",
      "FSM reporting",
    ],
  };
}
