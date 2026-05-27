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
    q: "How do estimates and invoicing work in FSM software?",
    a: "Most platforms let you build a quote with labor, parts, and fees, send it for customer approval, then convert approved lines into a work order and invoice without retyping. Payments may be collected on site or via a pay link, then synced to accounting so revenue matches completed jobs.",
  },
  {
    q: "What is the estimate-to-invoice flow?",
    a: "Estimate → customer approval → scheduled job → field updates (actual parts and time) → invoice from work order lines → payment → accounting sync. Variations exist, but the goal is one data path from sold scope to recognized revenue, with change orders updating scope before the final bill.",
  },
  {
    q: "Should contractors use separate invoicing software with FSM?",
    a: "Many run quotes, invoices, and card payments inside FSM and sync to QuickBooks or Xero. Separate invoicing tools can work if handoffs are explicit—see our invoicing hub and accounting integration guide to avoid double posting and mismatched line items.",
  },
  {
    q: "How do deposits and change orders fit in FSM billing?",
    a: "Deposits or progress invoices lock in commitment before full work. Change orders update scope on the work order so the final invoice reflects what was actually done, not only the original quote. Technicians should log extras in the field so the office does not discover variances at month-end.",
  },
  {
    q: "How do you test quote-to-cash during an FSM trial?",
    a: "Run a full loop: create a multi-line estimate, get approval, schedule and complete a job with added parts, generate the invoice, take a test payment, and confirm the accounting sync. Validate tax lines, discounts, and recurring plan charges if those apply to your business.",
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

const PAGE_HREF = "/field-service/guides/how-estimates-and-invoicing-work-in-fsm-software";

export default function HowEstimatesAndInvoicingWorkInFsmSoftwarePage() {
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
                      How Estimates &amp; Invoicing Work in FSM Software
                    </li>
                  </ol>
                </nav>

                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Estimates &amp; Invoicing Work in FSM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how estimates and invoicing work in FSM software, from quote approval through field updates,
                    payment collection, and accounting sync.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>

                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Field service revenue starts with a clear quote and ends with money in the bank and clean books. FSM
                      software connects those steps so sold scope, field reality, and invoice detail stay on one thread
                      instead of three spreadsheets and a group text thread.
                    </p>
                    <p>
                      Most platforms treat the estimate as the commercial record, the work order as the operational record,
                      and the invoice as the financial record. When those objects link cleanly, you bill faster and dispute
                      less because photos, notes, and line items lived on the same job from day one.
                    </p>
                    <p>
                      For dedicated invoicing depth—templates, automation, and A/R—visit the{" "}
                      <Link href="/invoicing" className={linkGreen}>
                        invoicing software
                      </Link>{" "}
                      hub. Start with{" "}
                      <Link href="/invoicing/guides/how-to-create-professional-invoices" className={linkGreen}>
                        how to create professional invoices
                      </Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>
                        invoice automation explained
                      </Link>{" "}
                      if your bottleneck is document quality or follow-up, not dispatch.
                    </p>
                    <p>
                      Compare FSM billing features on{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        best field service software
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/compare" className={linkGreen}>
                        field service comparisons
                      </Link>
                      . Validate sync with your bookkeeper using{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="quotes-and-approval" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Selling scope before the truck rolls.">
                    Estimates, Options, and Customer Approval
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Estimates set customer expectations and protect margin. FSM tools typically support line-item quotes
                      with labor, materials, fees, and tax—plus optional good / better / best tiers common in HVAC and
                      larger-ticket trades.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Line-item quotes</strong> — transparent totals and scope
                          references customers can approve.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Good / better / best options</strong> — present choices without
                          rebuilding three separate documents.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">E-sign or email approval</strong> — creates a record before
                          work is scheduled or parts ordered.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Approved quotes should spawn or link to a work order—see{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>{" "}
                      and{" "}
                      <Link href="/field-service/guides/how-service-businesses-manage-work-orders" className={linkGreen}>
                        how service businesses manage work orders
                      </Link>
                      . Polished customer-facing documents also benefit from{" "}
                      <Link href="/invoicing/guides/how-to-create-professional-invoices" className={linkGreen}>
                        professional invoice and quote layout practices
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="invoice-from-job" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Bill what was sold and what was done.">
                    From Completed Work to Invoice
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Technicians add actual parts and time on the job; office staff review variances against the estimate.
                      Invoices generated from the work order reduce disputes because photos, notes, and line items never
                      left the job record.
                    </p>
                    <p>
                      A healthy field-to-finance handoff usually follows these steps:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>
                        <strong className="text-[#1A2D48]">Tech closes the visit</strong> — status, materials, and labor
                        logged on mobile.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Office reviews variances</strong> — compare estimate lines to
                        actuals; apply change orders if scope shifted.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Invoice generated</strong> — pull from work order, not a blank
                        template.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Customer delivery</strong> — email, portal, or on-site receipt
                        with pay link where supported.
                      </li>
                    </ol>
                    <p>
                      Evaluate estimate-to-invoice as a buying criterion in{" "}
                      <Link
                        href="/field-service/guides/what-features-to-look-for-in-field-service-software"
                        className={linkGreen}
                      >
                        what features to look for in field service software
                      </Link>
                      . Platform overview:{" "}
                      <Link href="/field-service/guides/how-field-service-software-works" className={linkGreen}>
                        how field service software works
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="payments-and-sync" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Collecting payment and closing the books.">
                    Payments, Deposits, and Accounting Sync
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Card readers on site, pay-by-link email, and stored payment methods speed cash flow. Deposits or
                      progress billing lock revenue on longer jobs. Sync to QuickBooks or Xero should map invoices,
                      payments, taxes, and processing fees consistently—validate with your bookkeeper during trial, not
                      after go-live.
                    </p>
                    <p>
                      Where FSM billing ends and dedicated invoicing begins varies by team size.{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>
                        Invoice automation
                      </Link>{" "}
                      can still help with reminders and dunning even when jobs originate in FSM. Deep dive on books:{" "}
                      <Link
                        href="/field-service/guides/field-service-software-and-accounting-integration"
                        className={linkGreen}
                      >
                        field service software and accounting integration
                      </Link>
                      . Recurring plan billing overlaps with{" "}
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

                <section id="evaluate-quote-to-cash" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Proving the billing loop in a real trial.">
                    How to Evaluate Quote-to-Cash in FSM Software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run one complete job through the system: multi-line estimate, customer approval, scheduled visit,
                      added parts in the field, invoice, test payment, and accounting export. Watch for retyping, lost
                      attachments, and tax lines that do not match your chart of accounts.
                    </p>
                    <p>
                      Ask whether declined options stay archived on the customer record, whether partial payments apply
                      correctly to deposits, and whether membership or recurring charges post without manual journals.
                      Pricing tiers that gate approvals or margin reports are covered in{" "}
                      <Link href="/field-service/guides/field-service-software-pricing-guide" className={linkGreen}>
                        field service software pricing
                      </Link>
                      . Customer-facing quote communication is in{" "}
                      <Link
                        href="/field-service/guides/how-field-service-software-improves-customer-communication"
                        className={linkGreen}
                      >
                        how field service software improves customer communication
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quote to cash in FSM.">FAQs</SectionTitle>
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
    title: "How Estimates & Invoicing Work in FSM Software | BeltStack Guide",
    description:
      "Learn how estimates and invoicing work in FSM software: quote approval, work order billing, payments, accounting sync, and quote-to-cash evaluation tips.",
    keywords: [
      "FSM estimates and invoicing",
      "estimate to invoice",
      "field service billing",
      "quote to cash",
      "work order invoicing",
      "accounting sync",
    ],
  };
}
