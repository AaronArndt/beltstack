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
    q: "What is an invoice in simple terms?",
    a: "An invoice is a formal request for payment sent by a seller to a buyer after goods or services are delivered. It lists what was provided, how much is owed, applicable taxes, and when payment is due. For most small businesses, invoices are the primary document that turns completed work into collectible revenue.",
  },
  {
    q: "Is an invoice the same as a receipt?",
    a: "No. An invoice asks for payment before or after delivery, depending on your terms. A receipt confirms payment was already made and is often issued automatically when a transaction settles. Keeping the two distinct prevents customer confusion and accounting errors during close.",
  },
  {
    q: "When should a business send an invoice?",
    a: "Most businesses invoice when work is completed, at project milestones, or on a recurring schedule for retainers and subscriptions. The right timing should match your contract and cash-flow needs—delayed issuance is one of the most common causes of extended collection cycles.",
  },
  {
    q: "Do invoices need invoice numbers?",
    a: "Yes. Unique invoice numbers help with tracking, collections, accounting reconciliation, and audit trails. Sequential numbering also makes it easier to spot duplicates, missing sends, or gaps when finance reviews accounts receivable.",
  },
  {
    q: "Can I create invoices without invoicing software?",
    a: "Yes, but software improves consistency, reminders, payment collection, and visibility into overdue balances. As volume grows, manual spreadsheets and PDF templates usually break down on follow-up, status tracking, and team handoffs.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Simple professional invoices", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free invoice basics", reviewHref: getInvoicingReviewUrl("wave") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Invoices tied to books", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function WhatIsAnInvoiceGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Is an Invoice?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">What Is an Invoice?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what an invoice is, how businesses use invoices in real workflows, and how invoices connect to payment collection and accounting.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      An invoice is a payment request document sent to a customer after goods or services are delivered—or on a schedule defined in your contract. It includes what was provided, what the customer owes, applicable taxes, and payment terms. In most small businesses, invoices are the operational bridge between work completion and revenue collection.
                    </p>
                    <p>
                      Invoices are not just paperwork. They create an auditable record for accounts receivable, support customer approvals in B2B settings, and set the clock for when payment is due. Weak invoices—missing PO numbers, vague line items, or unclear terms—are a leading cause of delayed payment, not customer bad faith.
                    </p>
                    <p>
                      If you are building or tightening your process, read{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoice-terms-explained" className={linkGreen}>invoice terms explained</Link>.{" "}
                      For how billing language differs from invoicing in day-to-day ops, see{" "}
                      <Link href="/invoicing/guides/billing-vs-invoicing-whats-the-difference" className={linkGreen}>billing vs invoicing</Link>.
                    </p>
                    <p>
                      If you want to improve invoice consistency and payment speed, review{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>,{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>, and{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.
                    </p>
                  </div>
                </section>
                <section id="what-it-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why invoices are foundational to cash flow.">What an Invoice Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A good invoice does four jobs at once: it documents delivery, states what is owed, gives the customer a clear way to pay, and gives your team a tracking ID for follow-up. When any of those jobs is weak, collections slow down even if the underlying work was excellent.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Formal delivery record:</strong> ties revenue to completed scope, hours, or shipped goods—critical when customers question what they are paying for.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment expectations:</strong> states amount, currency, due date, and accepted methods so AP teams can schedule payment without back-and-forth.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Collections and disputes:</strong> provides a reference number, line detail, and terms your team can cite if payment is late or contested.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Accounting input:</strong> feeds reconciliation, revenue recognition timing, and A/R aging reports when synced with your books.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Customer experience:</strong> professional, consistent invoices signal operational maturity—especially when paired with online payment options.</span></li>
                    </ul>
                    <p>
                      As volume grows, invoices stop being one-off PDFs and become part of a managed lifecycle.{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>What is invoice management</Link>{" "}
                      describes that end-to-end system from draft through reconciliation.
                    </p>
                  </div>
                </section>
                <section id="invoice-vs-other-docs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Frequently confused documents in payment workflows.">Invoice vs Receipt vs Estimate</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses often mix document types in email threads, which creates disputes at payment time. Each document has a distinct job; using the wrong one—or sending an invoice when the customer expected a quote—erodes trust and slows AP approval.
                    </p>
                    <p><strong className="text-[#1A2D48]">Invoice:</strong> requests payment for delivered work or goods. It should match approved scope and carry terms the customer can act on.</p>
                    <p><strong className="text-[#1A2D48]">Receipt:</strong> confirms payment has been made. It is proof of settlement, not a new request for funds. Many invoicing tools generate receipts automatically when online payments clear.</p>
                    <p><strong className="text-[#1A2D48]">Estimate or quote:</strong> proposes pricing before work starts. It is not typically a final tax or payment-demand document in the same way as a standard invoice—though some regions treat pro forma documents differently; see{" "}
                      <Link href="/invoicing/guides/different-types-of-invoices-explained" className={linkGreen}>different types of invoices explained</Link>.
                    </p>
                    <p>
                      Keeping these distinct prevents confusion in client communication and month-end close. For required invoice fields, see{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>.
                    </p>
                    <p>
                      Credit notes and debit notes are adjustment documents, not replacements for understanding the basics above. Use them when you need to correct a prior invoice without rewriting history from scratch.
                    </p>
                  </div>
                </section>
                <section id="workflow-context" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where invoices sit in daily operations.">How Invoices Fit in Business Workflows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A typical sequence is: estimate approved, work delivered, invoice issued, payment collected, receipt generated, and entry reconciled in accounting. Businesses that automate this flow reduce manual follow-up and shorten collection cycles. Breaks usually happen at the handoffs—especially between “work done” and “invoice sent.”
                    </p>
                    <p>
                      In multi-person teams, add a lightweight approval step before send so pricing, tax, and PO references are verified.{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>How invoice approval workflows work</Link>{" "}
                      explains routing without creating bottlenecks for routine invoices.
                    </p>
                    <p>
                      For process-oriented guidance on close, review{" "}
                      <Link href="/accounting/guides/invoices-payments-and-accounting-close" className={linkGreen}>invoices, payments, and accounting close</Link>.{" "}
                      Strong front-office invoicing makes that close less painful because A/R is already clean.
                    </p>
                    <p>
                      Avoid the trap of treating invoicing as “finance’s problem” after delivery. Operations, account management, and finance should agree on SLAs—same-day or next-business-day send is a common target for project businesses.
                    </p>
                  </div>
                </section>
                <section id="common-mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Early fixes that improve payment speed.">Common Mistakes When Starting Out</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      New teams often under-invest in invoice quality because the document feels administrative. In practice, invoice defects are one of the cheapest problems to fix and one of the most expensive to ignore.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Waiting days or weeks after delivery before sending the invoice—every day of delay extends DSO.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Using inconsistent terms across quotes, contracts, and invoices.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Skipping itemized lines for project work, which triggers AP questions.</span></li>
                    </ul>
                    <p>
                      For a fuller checklist, see{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes small businesses make</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common invoice basics for new teams.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Small Businesses" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/what-is-an-invoice" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is an Invoice? | BeltStack Guide",
    description:
      "What is an invoice? Learn how invoices work, how they differ from receipts and quotes, and why they matter for payment collection, A/R, and accounting.",
  };
}
