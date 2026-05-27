import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl } from "@/lib/routes";

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
    q: "What does invoice reconciliation mean?",
    a: "Invoice reconciliation matches issued invoices to received payments and accounting entries so open balances and revenue records are accurate. It confirms that what you billed aligns with what hit the bank and what posted to the ledger. Without it, teams overstate collections or carry stale open invoices.",
  },
  {
    q: "How often should invoice reconciliation happen?",
    a: "Most businesses reconcile at least weekly, with a deeper review at month-end close. Higher transaction volume teams often reconcile daily to catch mismatches before they compound. The right frequency depends on payment volume, partial-payment complexity, and how fast you need cash forecasts.",
  },
  {
    q: "What causes invoice-payment mismatches?",
    a: "Common causes include partial payments, unapplied credits, processor fees, duplicate deposits, and customers paying without invoice references. Lump-sum transfers and duplicate customer records in your system make manual matching harder. Standardizing invoice numbers on every document reduces these errors.",
  },
  {
    q: "Should reconciliation happen in invoicing or accounting software?",
    a: "Often both. Invoicing tools track invoice status and customer-facing payment application; accounting systems provide bank feeds, ledger entries, and close-process reconciliation. Sync between them keeps operations and finance aligned on open A/R.",
  },
  {
    q: "What is unapplied cash?",
    a: "Unapplied cash is a received payment that has not yet been matched to a specific invoice, creating temporary reporting ambiguity. It should be cleared quickly by identifying the customer and applying the payment to the correct open balance. Left unresolved, unapplied cash distorts aging and cash-flow forecasts.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Bank match and A/R reconciliation", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice-to-payment matching", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Basic reconciliation for small teams", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function HowBusinessesReconcileInvoicesAndPaymentsPage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Reconcile Invoices &amp; Payments</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Reconcile Invoices &amp; Payments</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how businesses reconcile invoices and payments with a repeatable workflow, common mismatch fixes, and close controls that keep A/R and revenue accurate.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reconciliation connects what you billed with what you actually received. Without it, teams overstate collections, miss partial payments, or carry stale open invoices that distort cash forecasts and month-end revenue.
                    </p>
                    <p>
                      Reconciliation happens at two levels: matching payments to specific invoices in your billing tool, and matching bank deposits and ledger entries in accounting. Both must agree for leadership to trust A/R and cash reports.
                    </p>
                    <p>
                      For accounting close context, see{" "}
                      <Link href="/accounting/guides/invoices-payments-and-accounting-close" className={linkGreen}>invoices, payments, and accounting close</Link>.{" "}
                      For open-balance visibility, see{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>.
                    </p>
                    <p>
                      This guide covers core steps, common issues, and controls. Pair it with{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>,{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-partial-payments" className={linkGreen}>how businesses handle partial payments</Link>, and{" "}
                      <Link href="/invoicing/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing software vs accounting software</Link>{" "}
                      when choosing where each task lives.
                    </p>
                  </div>
                </section>
                <section id="reconciliation-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A repeatable monthly workflow.">Core Reconciliation Steps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Treat reconciliation as a checklist, not a one-off cleanup before tax season. Weekly touchpoints on high-volume accounts make month-end close faster and less stressful.
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Export open invoice report and payment activity for the period.</li>
                      <li>Match each payment to invoice number, customer, and amount.</li>
                      <li>Resolve partial payments, credits, and write-offs explicitly.</li>
                      <li>Reconcile bank/processor deposits to accounting entries.</li>
                      <li>Review remaining unapplied cash and disputed balances.</li>
                    </ol>
                    <p>
                      Close the loop by updating invoice status to paid or partially paid in your invoicing system so reminders stop and aging reports stay accurate. For deposit and milestone jobs, tie each payment to the correct phase—see{" "}
                      <Link href="/invoicing/guides/how-deposit-and-milestone-invoicing-works" className={linkGreen}>how deposit and milestone invoicing works</Link>.
                    </p>
                  </div>
                </section>
                <section id="common-issues" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where reconciliation usually breaks down.">Common Reconciliation Issues</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Lump-sum transfers without invoice references, processor fee deductions, and duplicate customer records are frequent root causes. Standardize payment reference fields on every invoice so payers include invoice numbers on ACH memos and wires.
                    </p>
                    <p>
                      Processor payouts often net fees before deposit, which makes bank amounts differ from invoice totals. Record fees explicitly rather than leaving mysterious small variances on each match.
                    </p>
                    <p>
                      Online payment flows can help by auto-applying payments to invoices. See{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.{" "}
                      For purchase-order-heavy environments,{" "}
                      <Link href="/invoicing/guides/invoice-matching-explained" className={linkGreen}>invoice matching explained</Link>{" "}
                      covers aligning bills to POs and receipts.
                    </p>
                  </div>
                </section>
                <section id="controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational controls that keep books clean.">Controls for Accurate Close</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Assign reconciliation ownership—one person or role accountable for clearing unapplied cash each period. Document how to handle overpayments, duplicate payments, and customer credits so exceptions are handled the same way every time.
                    </p>
                    <p>
                      Review aging after each close to confirm no paid invoices still show open. Tie approvals to invoice changes when amounts shift post-issuance; see{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>.
                    </p>
                    <p>
                      Segregate duties where practical: the person issuing large credits should not be the only person reconciling the bank. Strong controls pair with automation from{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>{" "}
                      so manual matching volume stays manageable.
                    </p>
                  </div>
                </section>
                <section id="tools-and-rhythm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Weekly habits beat monthly fire drills.">Tools and Reconciliation Rhythm</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Use bank feeds and payment-processor reports in your accounting software, plus open-invoice and payment-applied reports in your invoicing tool. The same numbers should appear in both systems after sync—investigate differences immediately.
                    </p>
                    <p>
                      High-volume businesses reconcile daily or twice weekly; smaller teams often reconcile weekly with a deeper review at month-end. Add a 15-minute standing slot after payroll or billing batch runs to clear obvious mismatches while memory is fresh.
                    </p>
                    <p>
                      If reconciliation consistently takes multiple days, it is a signal to improve invoice references, adopt online payments, or evaluate{" "}
                      <Link href="/invoicing/guides/when-businesses-outgrow-simple-invoicing-tools" className={linkGreen}>when businesses outgrow simple invoicing tools</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Invoice and payment matching questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Reconciliation" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Reconcile Invoices & Payments | BeltStack Guide",
    description:
      "Reconcile invoices and payments: step-by-step workflow, common mismatches and unapplied cash, close controls, weekly rhythm, and how invoicing and accounting tools work together.",
  };
}
