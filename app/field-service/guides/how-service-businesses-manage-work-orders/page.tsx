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
    q: "How do service businesses manage work orders day to day?",
    a: "Most teams use one record per job—from intake and scheduling through field updates, approval, and billing. Office staff own creation and invoicing; technicians update status, notes, and line items on mobile so nothing is retyped later. The work order is the single thread everyone references.",
  },
  {
    q: "What is the difference between managing work orders and using work order software?",
    a: "Managing work orders is the operational process: who creates jobs, what data is required, and how completion triggers billing. Work order software automates that flow with status tracking, mobile sync, and invoice handoff. Process comes first; software enforces it at scale.",
  },
  {
    q: "When should a business move from spreadsheets to structured work orders?",
    a: "When multiple technicians, same-day changes, or billing disputes make email and paper handoffs unreliable. If jobs are lost between dispatch and invoice, structured work orders inside FSM usually pay off quickly. The tipping point is repeated rework, not headcount alone.",
  },
  {
    q: "How do work orders connect to scheduling and dispatch?",
    a: "Every scheduled visit should tie to a work order so dispatchers see scope, history, and status in one place. Reassignments update the same record rather than spawning duplicate tickets that confuse customers and billing. Scheduling sets the plan; dispatch executes it on that record.",
  },
  {
    q: "How do recurring maintenance jobs fit into work order management?",
    a: "Recurring contracts generate work orders on a cadence—monthly HVAC tune-ups, quarterly inspections, annual renewals. Each visit is its own job with history, but templates carry scope and pricing forward. That pattern is covered in detail under recurring service appointments.",
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

const PAGE_HREF = "/field-service/guides/how-service-businesses-manage-work-orders";

export default function HowServiceBusinessesManageWorkOrdersPage() {
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
                      How Service Businesses Manage Work Orders
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Service Businesses Manage Work Orders
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how service businesses manage work orders from intake through completion, documentation, and
                    billing handoff—without losing detail between office and field.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Work orders are how service businesses turn a customer request into completed, billable work.
                      Strong teams treat each job as one living record: scope, assignment, field notes, and invoice lines
                      stay together instead of spreading across texts and inboxes.
                    </p>
                    <p>
                      This guide focuses on operational habits—who does what, when status changes, and how jobs close.
                      For how software structures those records, see{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/what-is-field-service-software" className={linkGreen}>
                        what field service software is
                      </Link>
                      .
                    </p>
                    <p>
                      Work orders sit at the center of{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        scheduling
                      </Link>
                      ,{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch
                      </Link>
                      , and{" "}
                      <Link href="/field-service/guides/how-mobile-field-service-apps-work" className={linkGreen}>
                        mobile field apps
                      </Link>
                      . When any of those layers use duplicate tickets, customers get conflicting ETAs and finance chases
                      missing line items.
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
                      . Operational pain points work orders solve are in{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="intake-and-creation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How jobs enter the system cleanly.">Intake and Work Order Creation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Standard intake fields</strong> — customer, site, scope,
                          priority, and access notes captured on every call or booking.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">One job, one record</strong> — avoid duplicate tickets when
                          dispatch or sales re-enters the same visit.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Estimate or contract context</strong> — link approved quotes
                          so technicians know what was sold.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Equipment and asset tags</strong> — serial numbers and prior
                          history visible before the truck rolls.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Jobs usually flow next into{" "}
                      <Link href="/field-service/guides/how-field-service-teams-schedule-technicians" className={linkGreen}>
                        technician scheduling
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch
                      </Link>
                      . If you are still on spreadsheets, see{" "}
                      <Link
                        href="/field-service/guides/when-businesses-outgrow-spreadsheets-for-field-service"
                        className={linkGreen}
                      >
                        when businesses outgrow spreadsheets for field service
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="field-execution" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Office and field roles on the same job.">
                    Field Execution and Status Discipline
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians should update job status at predictable moments so dispatch and customers see an
                      accurate picture:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">En route</strong> — triggers ETA messages and board updates.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">On site</strong> — starts labor timers and confirms access.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Waiting on parts or approval</strong> — pauses the job without
                        losing context.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Complete</strong> — photos, signatures, and parts used belong
                        on the work order before the crew leaves.
                      </li>
                    </ol>
                    <p>
                      Mobile habits matter as much as policy—see{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-businesses-track-field-employees" className={linkGreen}>
                        how businesses track field employees
                      </Link>
                      . For feature expectations when buying tools, use{" "}
                      <Link
                        href="/field-service/guides/what-features-to-look-for-in-field-service-software"
                        className={linkGreen}
                      >
                        what features to look for in field service software
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="closeout-and-billing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turning completed work into accurate invoices.">
                    Closeout, Approval, and Billing Handoff
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Review rules</strong> — define who approves completed jobs
                          before invoice: office manager, owner, or automated thresholds for small tickets.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Line-item sync</strong> — approved labor, parts, and fees on
                          the work order become invoice lines without re-keying.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer communication</strong> — completion summaries and
                          pay links tied to the same job record—see{" "}
                          <Link
                            href="/field-service/guides/how-field-service-software-improves-customer-communication"
                            className={linkGreen}
                          >
                            how field service software improves customer communication
                          </Link>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      For revenue sync and books, read{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software"
                        className={linkGreen}
                      >
                        how estimates and invoicing work in FSM software
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="recurring-work-orders" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Maintenance contracts and repeat visits.">
                    Recurring and Maintenance Work Orders
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Service businesses with maintenance agreements generate work orders on a schedule—not only from
                      inbound calls. Each visit should inherit contract scope, pricing, and site history while remaining
                      a distinct job for tracking and billing.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Templates</strong> — standard checklists and line items
                          pre-loaded for tune-ups and inspections.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Auto-generation</strong> — upcoming visits appear on the
                          schedule before customers call to ask why nobody showed.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Upsell hooks</strong> — findings on one visit create new
                          work orders without losing the maintenance thread.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Full patterns for contract cadence and reminders are in{" "}
                      <Link
                        href="/field-service/guides/how-businesses-handle-recurring-service-appointments"
                        className={linkGreen}
                      >
                        how businesses handle recurring service appointments
                      </Link>
                      . Compare tools on{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service compare pages
                      </Link>{" "}
                      when recurring volume becomes a scheduling bottleneck.
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Managing jobs from intake to invoice.">FAQs</SectionTitle>
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
    title: "How Service Businesses Manage Work Orders | BeltStack Guide",
    description:
      "Learn how service businesses manage work orders from intake through field execution, recurring maintenance, documentation, and billing handoff.",
    keywords: [
      "manage work orders",
      "service business work orders",
      "field service work orders",
      "work order process",
      "FSM work order management",
      "recurring maintenance jobs",
    ],
  };
}
