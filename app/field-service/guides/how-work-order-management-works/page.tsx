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
    q: "How does work order management work in field service?",
    a: "Work order management creates a structured record for each job—from intake and scheduling through field execution, documentation, approval, and billing. Status changes track progress (scheduled, in progress, complete, invoiced). Attachments, notes, and parts used stay on the same record so nothing is lost between office and field.",
  },
  {
    q: "What is the difference between a job and a work order?",
    a: "Vendors use different terms, but the idea is the same: one operational unit of work at a customer site. A job might be the customer-facing label; the work order is the internal record dispatch and technicians update. In good FSM software they are the same underlying object.",
  },
  {
    q: "Do technicians create work orders in the field?",
    a: "Sometimes. Office staff often create work orders from calls or online bookings; technicians may add line items, photos, and completion notes on mobile. Some businesses let techs spawn follow-up work orders when they discover additional repairs—workflow depends on trade and approval rules.",
  },
  {
    q: "How do work orders connect to invoicing?",
    a: "Approved labor, parts, and fees on the work order become invoice line items—manually or automatically. Integrations then sync invoices and payments to accounting. Clean work order data reduces billing disputes and speeds month-end close.",
  },
  {
    q: "Can work orders exist without full field service software?",
    a: "Teams use spreadsheets or generic ticketing tools early on, but lack mobile sync, dispatch ties, and billing handoff. Once multiple technicians and daily volume make paper or email handoffs error-prone, dedicated work order management inside FSM pays off.",
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

const PAGE_HREF = "/field-service/guides/how-work-order-management-works";

export default function HowWorkOrderManagementWorksPage() {
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
                      How Work Order Management Works
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Work Order Management Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how work order management works from job creation through field documentation, completion, and
                    billing handoff in field service software.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A work order is the operational spine of field service: one record that holds who the customer is,
                      what work was promised, which technician is assigned, what happened on site, and what to bill.
                      Without structured work orders, details live in texts, photos on personal phones, and sticky notes
                      that never reach invoicing.
                    </p>
                    <p>
                      Work order management is how software creates, updates, and closes those records. It connects
                      scheduling and dispatch on the front end to estimates, invoices, and reporting on the back end.
                      When the work order is healthy, every downstream step is faster; when it is fragmented, revenue
                      leaks and callbacks multiply.
                    </p>
                    <p>
                      Work orders sit inside the broader FSM picture—see{" "}
                      <Link href="/field-service/guides/what-does-field-service-management-include" className={linkGreen}>
                        what field service management includes
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      . Jobs usually enter from booking, CSR intake, or{" "}
                      <Link href="/field-service/guides/how-technician-scheduling-software-works" className={linkGreen}>
                        technician scheduling
                      </Link>
                      , then move through{" "}
                      <Link href="/field-service/guides/how-dispatching-software-works" className={linkGreen}>
                        dispatch
                      </Link>
                      .
                    </p>
                    <p>
                      Compare how leading platforms handle job records on our{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      list and individual reviews for{" "}
                      <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>
                        Jobber
                      </Link>
                      ,{" "}
                      <Link href={getFieldServiceReviewUrl("housecall-pro")} className={linkGreen}>
                        Housecall Pro
                      </Link>
                      , and{" "}
                      <Link href={getFieldServiceReviewUrl("servicetitan")} className={linkGreen}>
                        ServiceTitan
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="work-order-lifecycle" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Creation through completion.">The Work Order Lifecycle</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Creation</strong> — customer, location, scope, and priority
                        captured from call, form, or recurring schedule.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Assignment</strong> — linked to a technician and time window
                        via scheduling or dispatch.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Field execution</strong> — mobile updates: on-site, notes,
                        photos, signatures, parts.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Completion</strong> — status closed; optional manager approval
                        for warranty or compliance.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Billing</strong> — invoice generated from work order lines;
                        payment collected or sent.
                      </li>
                    </ol>
                    <p>
                      Field documentation patterns are covered in{" "}
                      <Link href="/field-service/guides/mobile-field-service-apps-for-technicians" className={linkGreen}>
                        mobile field service apps for technicians
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="what-on-work-order" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Data that should live on every job.">
                    What Belongs on a Work Order
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Customer and site context</strong> — contacts, access notes,
                          equipment history.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Scope and checklist</strong> — tasks, safety steps, or
                          inspection forms.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Labor, parts, and fees</strong> — line items that become
                          invoice detail.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Attachments</strong> — photos, signatures, and compliance
                          documents.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Customer relationship data may also live in CRM—see{" "}
                      <Link href="/field-service/guides/field-service-software-vs-crm" className={linkGreen}>
                        field service software vs CRM
                      </Link>{" "}
                      for where to store leads versus active jobs.
                    </p>
                  </div>
                </section>
                <section id="billing-handoff" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turning completed work into revenue.">
                    Billing Handoff and Accounting Sync
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The work order should be the single source of truth for what to bill. Office staff review
                      completed jobs, adjust line items if needed, and generate invoices—often with card capture on site.
                      Sync to QuickBooks or Xero keeps revenue, sales tax, and receivables accurate.
                    </p>
                    <p>
                      Read{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>
                        field service software pricing
                      </Link>{" "}
                      when comparing tiers that gate approvals, job costing, or advanced reporting. For operational
                      bottlenecks work orders solve, see{" "}
                      <Link href="/field-service/guides/common-problems-field-service-software-solves" className={linkGreen}>
                        common problems field service software solves
                      </Link>
                      .
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Work orders from intake to invoice.">FAQs</SectionTitle>
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
    title: "How Work Order Management Works | BeltStack Guide",
    description:
      "Learn how work order management works in field service: lifecycle, field documentation, billing handoff, and accounting integration.",
  };
}
