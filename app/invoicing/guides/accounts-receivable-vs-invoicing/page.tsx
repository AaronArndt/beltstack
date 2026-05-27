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
    q: "What is accounts receivable (A/R)?",
    a: "Accounts receivable is money customers owe your business for goods or services already delivered. It appears as a current asset on the balance sheet until payment is collected and the balance is cleared.",
  },
  {
    q: "What is invoicing?",
    a: "Invoicing is the operational process of creating, sending, and tracking customer bills—setting terms, following up on due dates, and recording payment status until invoices are fully settled.",
  },
  {
    q: "Is invoicing the same as accounts receivable?",
    a: "No. Invoicing is how you request and document payment; accounts receivable is the finance view of what customers still owe in aggregate. Strong invoicing feeds accurate A/R; weak invoicing creates A/R problems.",
  },
  {
    q: "Can invoicing software manage A/R?",
    a: "Yes. Most invoicing tools track open, partially paid, and overdue invoices, send reminders, and report aging—core A/R operational data. Full GL reporting and close workflows often still live in accounting software.",
  },
  {
    q: "Where does A/R appear in accounting?",
    a: "Under accrual accounting, issuing an invoice typically increases accounts receivable and revenue. Cash is recorded separately when payment is received. Cash-basis businesses may recognize revenue only when payment lands.",
  },
  {
    q: "What is an A/R aging report?",
    a: "An aging report groups outstanding customer balances by how long they have been unpaid—commonly current, 30, 60, and 90+ days. Collections teams use it to prioritize follow-up and forecast cash.",
  },
  {
    q: "Who owns invoicing vs A/R in a small business?",
    a: "Owners or ops staff often handle invoicing day to day; finance or a bookkeeper owns A/R reporting, reconciliation, and write-offs. Clear handoffs between billing and collections prevent stale open balances.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "A/R reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice + collections", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Basic A/R tracking", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function AccountsReceivableVsInvoicingPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Accounts Receivable vs Invoicing</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Accounts Receivable vs Invoicing</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Understand the difference between accounts receivable and invoicing, how each supports collections and financial reporting, and why strong billing operations improve A/R outcomes.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoicing and accounts receivable are closely related but not the same. Invoicing is how you request payment—creating bills, setting terms, sending reminders, and recording payment status. Accounts receivable is how finance measures what customers still owe in aggregate after invoices are issued.
                    </p>
                    <p>
                      Confusing the two leads to operational gaps: teams that invoice well but never review aging reports, or finance teams focused on A/R totals while billing goes out late or with errors. Healthy revenue operations need both disciplines connected with clear handoffs.
                    </p>
                    <p>
                      Invoicing is customer-facing and operational—speed, clarity, and payment convenience drive results. A/R is internal and analytical—aging, collections priority, write-offs, and reconciliation to the general ledger. The same unpaid invoice appears in both views with different purposes.
                    </p>
                    <p>
                      For operational tracking, see{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.
                    </p>
                  </div>
                </section>
                <section id="invoicing-defined" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The billing workflow customers see.">What Invoicing Covers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoicing is the front line of revenue collection. It turns completed work, delivered goods, or subscription periods into a formal payment request customers can act on.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Creating and sending customer invoices with accurate line items and totals.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Setting payment terms, due dates, and accepted payment methods.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Sending reminders, receipts, and payment links before and after due dates.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Updating invoice status—draft, sent, partially paid, paid, overdue, void.</span></li>
                    </ul>
                    <p>
                      Quality invoicing reduces disputes: consistent numbering, clear descriptions, correct tax, and visible PO or project references help customers pay faster. See{" "}
                      <Link href="/invoicing/guides/what-should-be-included-on-an-invoice" className={linkGreen}>what should be included on an invoice</Link>{" "}
                      for field-level guidance.
                    </p>
                  </div>
                </section>
                <section id="ar-defined" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The finance view of outstanding balances.">What Accounts Receivable Covers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Accounts receivable is the balance-sheet representation of customer debt. Under accrual accounting, issuing an invoice typically increases A/R; collecting payment reduces it. Finance uses A/R data for reporting, forecasting, and credit decisions—not just day-to-day billing.
                    </p>
                    <p>
                      A/R management includes aging reports (current, 30, 60, 90+ days), collections priorities, credit holds, bad-debt write-offs, and reconciliation to bank deposits. It answers: how much is owed, by whom, for how long, and what is at risk of non-payment?
                    </p>
                    <p>
                      Learn reconciliation steps in{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>{" "}
                      and cash implications in{" "}
                      <Link href="/invoicing/guides/how-invoicing-affects-cash-flow" className={linkGreen}>how invoicing affects cash flow</Link>.
                    </p>
                  </div>
                </section>
                <section id="how-they-work-together" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why teams need both disciplines.">How Invoicing and A/R Work Together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Strong invoicing improves A/R outcomes: faster issuance, clearer terms, online payment options, and consistent reminders reduce days sales outstanding. Weak invoicing inflates A/R with avoidable delays—bills sent late, wrong amounts, or missing references that stall customer AP departments.
                    </p>
                    <p>
                      A/R reporting closes the loop. Weekly aging reviews tell collections which accounts to call, which need credit holds, and which disputes block payment. Operations sees invoice-level detail; finance sees portfolio-level risk and cash timing.
                    </p>
                    <p>
                      For accounting treatment differences, see{" "}
                      <Link href="/invoicing/guides/accrual-vs-cash-accounting-for-invoices" className={linkGreen}>accrual vs cash accounting for invoices</Link>.{" "}
                      For reducing late payment, see{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>.
                    </p>
                  </div>
                </section>
                <section id="roles-and-tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Who does what, and which systems support each.">Roles, Handoffs, and Tools</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In small businesses, one person may invoice and review aging; as volume grows, split ownership. Project managers or account owners trigger billing; finance owns A/R review, reconciliation, and write-offs. Document who can void invoices, apply credits, and approve payment plans.
                    </p>
                    <p>
                      Invoicing software handles creation, delivery, and status. Accounting software holds the A/R ledger, bank reconciliation, and financial statements. Integrations or unified platforms reduce double entry when invoice paid in one system must clear A/R in another.
                    </p>
                    <p>
                      Compare platform fit in{" "}
                      <Link href="/invoicing/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing software vs accounting software</Link>{" "}
                      when choosing tools for your stage.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A/R vs invoicing questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for A/R Management" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/accounts-receivable-vs-invoicing" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Accounts Receivable vs Invoicing: Key Differences | BeltStack",
    description:
      "Invoicing is how you bill customers; accounts receivable is what they still owe on the books. Learn how A/R and invoicing work together, aging reports, and collections handoffs.",
  };
}
