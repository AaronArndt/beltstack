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

const PAGE_HREF = "/field-service/guides/how-field-service-software-works";

const FAQ_ITEMS = [
  {
    q: "How does field service software work end to end?",
    a: "Most platforms follow the same arc: capture a job request, schedule and dispatch a technician, execute work on a mobile app, then generate an invoice and sync to accounting. Data created at intake flows forward so teams do not retype customer or job details.",
  },
  {
    q: "What happens in the office vs. in the field?",
    a: "Office staff typically manage the calendar, dispatch board, customer records, and billing. Technicians use mobile apps for schedules, job notes, photos, signatures, and status updates. Both sides read the same work order so everyone sees current job state.",
  },
  {
    q: "Does field service software replace scheduling tools?",
    a: "Dedicated FSM platforms include scheduling built for dispatched crews—skills, zones, travel time—not just appointment booking. Simple scheduling tools may suffice for solo operators; multi-truck teams usually need FSM-specific dispatch and work orders.",
  },
  {
    q: "How do work orders fit into the workflow?",
    a: "A work order is the record of a single job: location, scope, assigned tech, status, and documentation. It links scheduling, field execution, and invoicing so completed work can be billed without hunting through texts or paper forms.",
  },
  {
    q: "Can field service software integrate with invoicing and accounting?",
    a: "Yes. Most tools create estimates and invoices from completed jobs and sync revenue to QuickBooks, Xero, or similar systems. For billing-focused depth, see the invoicing hub and our FSM accounting integration guide.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Jobber",
    logoSrc: "/Logos/jobber.png",
    rating: "4.6",
    bestFor: "Best overall for contractors",
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

export default function HowFieldServiceSoftwareWorksPage() {
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
                      How Field Service Software Works
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Field Service Software Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how field service software works from job intake through dispatch, mobile execution, invoicing,
                    and reporting—and how data flows between the office and the field.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service software connects the moments before a truck rolls—customer call, estimate, or online
                      booking—to what happens after the tech leaves: invoice, payment, and job history for the next visit.
                      Instead of copying details between a calendar, texts, and a spreadsheet, one platform carries job
                      data from intake to closeout.
                    </p>
                    <p>
                      If you are new to the category, start with{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what is field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-field-service-management-fsm" className={linkGreen}>
                        what is field service management (FSM)
                      </Link>
                      . This guide focuses on how platforms execute day-to-day workflows, not vendor marketing feature
                      lists.
                    </p>
                    <p>
                      Most tools follow a similar sequence: create or import a customer, book a job, schedule and dispatch
                      a technician, execute work on a mobile app, then bill and report. Where products differ is depth—
                      advanced dispatch rules, maintenance agreements, job costing—and how well technicians actually adopt
                      the mobile experience.
                    </p>
                    <p>
                      Compare platforms on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      roundup and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . When you are ready to buy, use{" "}
                      <Link href="/field-service/guides/how-to-choose-field-service-software" className={linkGreen}>
                        how to choose field service software
                      </Link>{" "}
                      to structure trials around these workflow steps.
                    </p>
                  </div>
                </section>
                <section id="job-intake" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where jobs enter the system.">Job Intake and Customer Records</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Jobs usually start from a phone call, web form, repeat service agreement, or estimate that converts
                      to scheduled work. Field service software stores the customer, service address, equipment notes, and
                      communication history so dispatch and technicians see context before arrival.
                    </p>
                    <p>
                      Good intake reduces duplicate records and wrong addresses—the kind of errors that show up in our{" "}
                      <Link
                        href="/field-service/guides/common-problems-field-service-software-solves"
                        className={linkGreen}
                      >
                        common problems field service software solves
                      </Link>{" "}
                      guide. For what FSM includes beyond intake, see{" "}
                      <Link
                        href="/field-service/guides/what-does-field-service-management-include"
                        className={linkGreen}
                      >
                        what does field service management include
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="schedule-dispatch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Planning and adjusting the day.">Scheduling, Dispatch, and Work Orders</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Once a job is booked, scheduling assigns a time window and technician. Dispatch is the live
                      layer—moving jobs when run times slip, prioritizing emergencies, and balancing truck capacity. See{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        how technician scheduling software works
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        how dispatching software works
                      </Link>
                      , and the{" "}
                      <Link href="/scheduling" className={linkGreen}>
                        scheduling hub
                      </Link>{" "}
                      for related concepts.
                    </p>
                    <p>
                      Each scheduled visit becomes a work order: status, assigned tech, scope, and notes. Work orders are
                      the thread that ties the calendar, mobile app, and invoice together. See{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>{" "}
                      for a deeper look at statuses and handoffs.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scheduled</strong> — Job is on the calendar with a tech and
                          time slot.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">En route / on site</strong> — Mobile updates inform the
                          office and customer of progress.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Complete</strong> — Documentation and parts are captured
                          for billing and future visits.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="mobile-execution" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What technicians do in the field.">Mobile Execution in the Field</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians open a mobile app to see today’s route, job details, and customer history. They update
                      status, capture photos, collect signatures, and log parts or time on site. When mobile adoption is
                      weak, the office falls back to phone calls and paper—so evaluate UX during real trials, not demo
                      accounts alone.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        how mobile field service apps work
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/field-service/guides/mobile-field-service-apps-for-technicians"
                        className={linkGreen}
                      >
                        mobile field service apps for technicians
                      </Link>
                      . High-volume HVAC and plumbing teams often need trade-specific forms; our{" "}
                      <Link href="/field-service/guides/field-service-software-for-hvac" className={linkGreen}>
                        HVAC
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/field-service-software-for-plumbing" className={linkGreen}>
                        plumbing
                      </Link>{" "}
                      guides cover those workflows.
                    </p>
                  </div>
                </section>
                <section id="billing-reporting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Closing the loop after the job.">Invoicing, Payments, and Reporting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Completed work orders feed estimates and invoices. Many platforms support card payments on site or
                      payment links by email. Revenue and tax lines often sync to accounting software so books stay
                      accurate without manual journal entries.
                    </p>
                    <p>
                      Reporting layers on top: jobs per tech, average ticket size, callback rates, and utilization. Small
                      teams may only need basic dashboards; larger operations use metrics to tune dispatch and marketing.
                      For billing depth beyond FSM, explore the{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing hub
                      </Link>
                      . Small businesses should also read{" "}
                      <Link href="/field-service/guides/field-service-software-for-small-business" className={linkGreen}>
                        field service software for small business
                      </Link>{" "}
                      to avoid overbuying features they will not use in year one.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How FSM platforms run day to day.">FAQs</SectionTitle>
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
    title: "How Field Service Software Works | BeltStack Guide",
    description:
      "Learn how field service software works from job intake through dispatch, mobile execution, invoicing, and reporting.",
  };
}
