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
    q: "What causes most missed appointments in field service?",
    a: "Common drivers are overbooked routes, unclear time windows, no-show customers, last-minute dispatch changes, and weak reminder workflows. Fixing one layer rarely helps—you need realistic scheduling plus proactive customer contact. Most teams underestimate how much drive time and diagnostic overrun compress the day.",
  },
  {
    q: "Do appointment reminders really reduce no-shows?",
    a: "Yes for many home-service businesses. SMS or email reminders with confirm/reschedule options cut surprises on the day of service. Automated ETA updates when the tech is en route also reduce “where are they?” calls that delay the next stop.",
  },
  {
    q: "How does dispatch software help prevent missed visits?",
    a: "A live board shows who is assigned, running late, or available for reassignments. When a job slips, dispatchers can rebalance the day instead of letting downstream appointments silently fail. Status sync from mobile keeps the board truthful so recovery decisions happen early.",
  },
  {
    q: "Should businesses use tighter or wider appointment windows?",
    a: "Wider windows improve on-time arrival perception but annoy customers who took time off. Narrow windows need buffer time between jobs and honest capacity limits. Match window style to your trade, drive time, and average job length—not what competitors advertise on their website.",
  },
  {
    q: "How do recurring service appointments avoid being missed?",
    a: "Recurring contracts should auto-generate visits with reminders before the due date—not rely on customers to call. Templates, assigned techs, and contract history on each work order prevent maintenance stops from falling off the schedule when volume spikes.",
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

const PAGE_HREF = "/field-service/guides/how-businesses-reduce-missed-appointments";

export default function HowBusinessesReduceMissedAppointmentsPage() {
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
                      How Businesses Reduce Missed Appointments
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Reduce Missed Appointments
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how businesses reduce missed appointments with better scheduling, reminders, dispatch controls,
                    and customer communication.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A missed appointment costs more than an empty slot—it erodes trust, burns drive time, and pushes
                      revenue to the next day. Most reductions come from aligning how you book work, how you notify
                      customers, and how dispatch responds when the plan changes.
                    </p>
                    <p>
                      Start with how jobs get on the calendar in{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      . Scheduling promises and dispatch execution must share one source of truth on the work order.
                    </p>
                    <p>
                      Customer-facing messages—reminders, ETAs, reschedule options—are part of the same platform, not a
                      separate inbox. Read{" "}
                      <Link
                        href="/field-service/guides/how-field-service-software-improves-customer-communication"
                        className={linkGreen}
                      >
                        how field service software improves customer communication
                      </Link>{" "}
                      for notification patterns that cut no-shows before the truck rolls.
                    </p>
                    <p>
                      Evaluate tools on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . For the operational pain missed visits create, see{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="scheduling-and-capacity" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Book only what your crews can actually complete.">
                    Scheduling and Capacity Controls
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Realistic job duration</strong> — pad estimates for
                          diagnostics, access issues, and parts runs.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Zone or skill-based assignment</strong> — match tech
                          capability and geography before promising times.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Same-day buffers</strong> — hold slack for emergencies
                          instead of packing every slot.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Honest time windows</strong> — align what CSRs promise with
                          what routes can deliver.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Capacity planning ties booking promises to dispatch reality—see{" "}
                      <Link
                        href="/field-service/guides/dispatch-and-capacity-planning-for-field-service"
                        className={linkGreen}
                      >
                        dispatch and capacity planning for field service
                      </Link>
                      . Live reassignment patterns are in{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="reminders-and-confirmations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reduce no-shows before the truck rolls.">
                    Reminders and Confirmations
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated reminders 24–48 hours ahead give customers a chance to confirm, reschedule, or flag
                      access constraints. Same-day “on our way” messages set expectations and cut door-tag failures when
                      someone must be home.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Booking confirmation</strong> — immediate acknowledgment
                          with date, window, and prep instructions.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Two-way confirm/reschedule</strong> — let customers reply
                          instead of no-showing silently.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">En-route ETA</strong> — triggered when the tech marks en
                          route in the{" "}
                          <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                            mobile app
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      Strong communication workflows are part of FSM—not a separate inbox. Use{" "}
                      <Link
                        href="/field-service/guides/what-features-to-look-for-in-field-service-software"
                        className={linkGreen}
                      >
                        what features to look for in field service software
                      </Link>{" "}
                      when comparing reminder and notification modules.
                    </p>
                  </div>
                </section>

                <section id="dispatch-and-accountability" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Recover the day when jobs slip.">
                    Dispatch Discipline and Accountability
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dispatchers need one view of late jobs, open capacity, and customer callbacks. When a visit cannot
                      happen, reschedule proactively instead of leaving the customer to chase you.
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Flag late jobs early</strong> — board alerts when a stop runs
                        past its window.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Reassign or compress</strong> — move downstream appointments
                        to another tech or call customers with new times.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Update status on mobile</strong> — field crews keep the board
                        truthful so the office is not guessing.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Log the reason</strong> — no-show, access denied, or parts
                        delay on the work order for reporting.
                      </li>
                    </ol>
                    <p>
                      Job records and history help CSRs explain delays—see{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        how service businesses manage work orders
                      </Link>
                      . For recurring visits that must not slip, see{" "}
                      <Link
                        href="/field-service/guides/how-businesses-handle-recurring-service-appointments"
                        className={linkGreen}
                      >
                        how businesses handle recurring service appointments
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="measure-and-improve" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Track show rates and fix root causes.">
                    Measuring and Improving Show Rates
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Show rate by channel</strong> — compare online booking vs
                          phone intake vs recurring contracts.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Missed-visit reasons</strong> — categorize customer no-show,
                          overbooking, and tech delay separately.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">On-time arrival</strong> — pair with{" "}
                          <Link href="/field-service/guides/how-businesses-track-field-employees" className={linkGreen}>
                            field employee tracking
                          </Link>{" "}
                          to see whether the problem is booking or execution.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Review metrics weekly with dispatch and CSRs—not only at month-end. Small changes to window length,
                      reminder timing, or buffer slots often outperform buying new software. When you do evaluate tools,
                      test on a peak day using our{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service compare pages
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fewer no-shows and smoother days.">FAQs</SectionTitle>
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
    title: "How Businesses Reduce Missed Appointments | BeltStack Guide",
    description:
      "Learn how businesses reduce missed appointments with scheduling capacity, reminders, dispatch discipline, and show-rate reporting.",
    keywords: [
      "reduce missed appointments",
      "field service no-shows",
      "appointment reminders",
      "dispatch scheduling",
      "service appointment show rate",
      "FSM customer notifications",
    ],
  };
}
