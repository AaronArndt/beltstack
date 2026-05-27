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
    q: "What is a partial invoice payment?",
    a: "A partial payment is when a customer pays less than the full invoice balance, leaving a remaining amount due. The invoice should stay open with an updated balance until the remainder is collected or written off.",
  },
  {
    q: "How should businesses record partial payments?",
    a: "Apply the payment to the specific invoice, update status to partially paid, record the receipt date and method, and track the remaining balance. Send a receipt that shows amount paid and balance due.",
  },
  {
    q: "Should I issue a new invoice for the remaining balance?",
    a: "Usually no. Keep the original invoice open with an updated balance due. Issue a revised invoice only when terms, line items, or totals change—not simply because a portion was paid.",
  },
  {
    q: "What causes partial payments?",
    a: "Common causes include agreed installment or milestone plans, customer cash constraints, disputed line items, processor fee deductions, or customers paying the wrong amount without reference.",
  },
  {
    q: "How do partial payments affect reconciliation?",
    a: "They require explicit matching so invoice balance, payment ledger, and bank deposit all align. Unapplied or misapplied partial payments are a frequent source of overstated collections and stale A/R.",
  },
  {
    q: "Do partial payments affect sales tax reporting?",
    a: "Tax treatment varies by jurisdiction and whether tax was calculated on the full invoice upfront. Confirm with your accountant whether partial payments change recognized tax in your setup.",
  },
  {
    q: "When should a partial payment trigger a collections escalation?",
    a: "Define thresholds—for example, balance overdue more than 15 days after a partial payment, or no payment plan documented. Escalate with a clear reminder sequence before pausing work or involving collections.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Partial payment application", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Open balance tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Payment status workflows", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function HowBusinessesHandlePartialPaymentsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Handle Partial Payments</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Handle Partial Payments</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how businesses handle partial invoice payments, keep balances accurate, reconcile to the bank, and avoid marking invoices paid when money is still owed.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Partial payments are common in project billing, retainers, and B2B accounts with staged payment terms. A customer may pay 40% at kickoff, 40% at midpoint, and 20% at completion—or send whatever cash is available against an overdue balance. The risk is not partial payment itself; it is poor tracking that leaves invoices marked paid when balances remain open.
                    </p>
                    <p>
                      Every partial payment should reduce the invoice balance by the exact amount received, update status to partially paid, and trigger follow-up for the remainder. Without that discipline, aging reports understate risk, revenue may be overstated, and collections teams chase the wrong accounts.
                    </p>
                    <p>
                      Partial payments also complicate reconciliation: bank deposits must tie to specific invoices, processor fees must be accounted for, and unapplied cash must not sit in limbo. Treat partial payments as a first-class workflow, not an edge case handled ad hoc.
                    </p>
                    <p>
                      For reconciliation context, see{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>{" "}
                      and{" "}
                      <Link href="/accounting/guides/invoices-payments-and-accounting-close" className={linkGreen}>invoices, payments, and accounting close</Link>.
                    </p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A standard process finance teams can repeat.">Partial Payment Workflow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A repeatable workflow prevents partial payments from disappearing into unapplied cash or mislabeled full payments. Document the steps below and train anyone who records customer payments.
                    </p>
                    <ol className="space-y-2 list-decimal list-inside">
                      <li>Receive payment and identify invoice number (or customer plus amount).</li>
                      <li>Apply payment amount to the specific invoice balance—never to “customer credit” without a rule.</li>
                      <li>Update status to partially paid; leave due date or set follow-up date for remainder.</li>
                      <li>Send receipt showing amount paid, date, method, and remaining balance due.</li>
                      <li>Continue reminder cadence until fully paid; escalate per policy if balance ages.</li>
                    </ol>
                    <p>
                      If the customer pays without an invoice reference, research open invoices before applying cash. Applying to the wrong invoice creates two problems: one invoice looks paid when it is not, and another stays open incorrectly.
                    </p>
                    <p>
                      For online payments, confirm your processor passes invoice metadata so partial ACH or card payments auto-apply. Manual bank transfers need standardized reference fields on every invoice you send.
                    </p>
                  </div>
                </section>
                <section id="milestone-billing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When partial payments are planned, not accidental.">Partial Payments in Milestone Billing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Deposit and milestone structures intentionally create partial settlement across project phases. Each invoice may represent a defined deliverable—design approval, phase one complete, materials ordered—with its own due date and amount. Customers expect to pay in slices; your system should reflect that without treating each slice as a full close of the project.
                    </p>
                    <p>
                      Document each phase in the contract and on the invoice: what was delivered, what the payment covers, and what remains. Ambiguous milestone language is a common source of disputed partial payments and stalled final balances.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/how-deposit-and-milestone-invoicing-works" className={linkGreen}>how deposit and milestone invoicing works</Link>{" "}
                      and cash-flow impact in{" "}
                      <Link href="/invoicing/guides/how-invoicing-affects-cash-flow" className={linkGreen}>how invoicing affects cash flow</Link>.
                    </p>
                  </div>
                </section>
                <section id="controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Prevent reporting and collection errors.">Controls for Accurate Balances</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Review partially paid invoices weekly in aging reports—they often hide between “current” and “seriously overdue” if only the original due date is watched. Flag accounts where partial payment arrived but no plan exists for the remainder.
                    </p>
                    <p>
                      Reconcile unapplied cash promptly. Payments sitting in a clearing account without invoice assignment distort both cash and A/R. Processor fee deductions should be recorded explicitly so the net deposit still matches the applied invoice amount.
                    </p>
                    <p>
                      Document disputes that block final payment: who owns resolution, expected date, and whether work continues. Track open A/R in{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>.{" "}
                      At month-end close, partially paid invoices should appear on open balance reports with correct residual amounts—not as fully paid.
                    </p>
                  </div>
                </section>
                <section id="credits-and-adjustments" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When the balance changes without a new payment.">Credits, Write-Downs, and Adjustments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Sometimes the remaining balance changes because of a credit memo, pricing adjustment, or agreed write-down—not because the customer paid more. Apply credits to the same invoice with a clear audit entry so the open balance reflects reality.
                    </p>
                    <p>
                      Do not delete and reissue invoices casually to fix partial payment errors—that breaks numbering sequences and confuses customers. Void and replace only when terms or line items truly change; otherwise adjust balance and status in place.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Partial payment handling questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Payment Tracking" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-businesses-handle-partial-payments" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Handle Partial Invoice Payments | BeltStack",
    description:
      "Partial payments need clear workflows: apply to invoice, update status, receipt with balance due, and reconcile to bank. Learn milestone billing, controls, and month-end accuracy.",
  };
}
