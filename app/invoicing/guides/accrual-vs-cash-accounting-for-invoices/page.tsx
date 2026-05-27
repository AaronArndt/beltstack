import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl, getInvoicingReviewUrl } from "@/lib/routes";

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
    q: "What is accrual accounting for invoices?",
    a: "Under accrual accounting, revenue is typically recorded when the invoice is issued—when the earning event occurs—even if cash has not yet been received. Unpaid invoices increase accounts receivable until payment clears.",
  },
  {
    q: "What is cash accounting for invoices?",
    a: "Under cash accounting, revenue is recorded when payment is received, not when the invoice is sent. Invoicing still drives collections operations, but financial recognition follows cash timing.",
  },
  {
    q: "Which accounting method do small businesses use?",
    a: "Many small businesses start on cash for simplicity and tax alignment, then move to accrual as they grow, take on investors, or need GAAP-style reporting. IRS rules also limit which entities may use cash basis.",
  },
  {
    q: "How do unpaid invoices appear in accrual books?",
    a: "Issued unpaid invoices increase accounts receivable and revenue (net of any deferred components). When the customer pays, cash increases and A/R decreases—no second revenue recognition if recorded correctly at issuance.",
  },
  {
    q: "Can I switch from cash to accrual accounting?",
    a: "Yes, but it requires opening balance adjustments, process changes, and often professional guidance for tax implications, comparative reporting, and software configuration. Plan the transition at a clean period boundary.",
  },
  {
    q: "Why can accrual profit exceed cash on hand?",
    a: "Accrual recognizes revenue at invoice issuance while cash arrives later per payment terms. A strong profit month with high A/R can still feel tight on cash until collections catch up.",
  },
  {
    q: "Do invoicing tools handle both methods?",
    a: "Many invoicing and accounting platforms support cash and accrual reporting modes. Confirm how your tool records revenue at invoice send versus payment receipt before relying on dashboards for decisions.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Cash and accrual reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.5, bestFor: "Accrual-ready accounting", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Cash-basis simplicity", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function AccrualVsCashAccountingForInvoicesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Accrual vs Cash Accounting for Invoices</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Accrual vs Cash Accounting for Invoices</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how accrual and cash accounting treat invoices differently—revenue timing, accounts receivable, tax reporting, and why profit and bank balance can diverge.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The same invoice can affect your books differently depending on accounting method. Accrual accounting recognizes revenue when earned—often at invoice issuance. Cash accounting recognizes revenue when payment is received. Understanding that difference helps you interpret profit, A/R balances, and bank balance without mixing the two views.
                    </p>
                    <p>
                      Invoicing operations matter under both methods. You still send bills, track due dates, and collect payment. The distinction is when revenue and receivables hit the general ledger—and what your tax and management reports show in a given month.
                    </p>
                    <p>
                      Many owners are surprised when a profitable month feels cash-poor. That often reflects accrual revenue booked at invoice send while cash arrives weeks later per payment terms. Cash-basis businesses can have the opposite pattern: cash spikes when old invoices are collected even if current-month billing is slow.
                    </p>
                    <p>
                      For broader accounting context, see{" "}
                      <Link href="/accounting/guides/accounting-vs-bookkeeping" className={linkGreen}>accounting vs bookkeeping</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing software vs accounting software</Link>.
                    </p>
                  </div>
                </section>
                <section id="accrual" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Revenue when earned, cash when collected.">Accrual Accounting and Invoices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When you issue an invoice under accrual accounting, you typically recognize revenue and increase accounts receivable. The customer owes you; the earning event is documented even if cash has not moved. When payment arrives, cash increases and A/R decreases—without recognizing revenue a second time if recorded correctly at issuance.
                    </p>
                    <p>
                      Accrual provides better period matching: expenses and revenue for the same project appear in the same reporting window. Investors, lenders, and GAAP-oriented reporting often require or prefer accrual for that reason.
                    </p>
                    <p>
                      Cash flow may still lag until the customer pays—this is why profitable months can feel tight on cash. See{" "}
                      <Link href="/invoicing/guides/how-invoicing-affects-cash-flow" className={linkGreen}>how invoicing affects cash flow</Link>{" "}
                      and A/R discipline in{" "}
                      <Link href="/invoicing/guides/accounts-receivable-vs-invoicing" className={linkGreen}>accounts receivable vs invoicing</Link>.
                    </p>
                  </div>
                </section>
                <section id="cash" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Revenue tied to payment receipt.">Cash Accounting and Invoices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cash-basis businesses often record revenue when payment lands in the bank—not when the invoice is sent. You may still send invoices on Net 30 terms for customer expectations, but the books do not reflect that sale as revenue until collection.
                    </p>
                    <p>
                      Cash basis simplifies tax timing for many small businesses: income aligns with money received. It can understate economic activity in a heavy billing month and overstate it when old invoices are collected in bulk.
                    </p>
                    <p>
                      Invoicing still matters operationally: without bills and follow-up, cash-basis businesses would not get paid on schedule. Unpaid invoices may not appear as A/R on simplified cash books, but they still represent real collection work and future cash.
                    </p>
                  </div>
                </section>
                <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical differences owners should know.">Side-by-Side Comparison</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Accrual:</strong> revenue at invoice issuance; A/R on balance sheet until paid; better period matching and lender reporting.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Cash:</strong> revenue at payment receipt; simpler for many small businesses; tax timing follows cash in many cases.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Both:</strong> require disciplined invoicing, payment application, and reconciliation at month-end.</span></li>
                    </ul>
                    <p>
                      IRS rules limit which entities may use cash basis and revenue thresholds can force accrual. Consult a tax professional before switching methods—opening balances, comparative reports, and software settings all need coordinated updates.
                    </p>
                    <p>
                      Close-process guidance:{" "}
                      <Link href="/accounting/guides/invoices-payments-and-accounting-close" className={linkGreen}>invoices, payments, and accounting close</Link>.{" "}
                      Partial payments apply under both methods; see{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-partial-payments" className={linkGreen}>how businesses handle partial payments</Link>.
                    </p>
                  </div>
                </section>
                <section id="choosing-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals it may be time to change or stay put.">When to Use Accrual vs Cash</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cash basis often works for solo operators and very small businesses with simple billing and no outside investors. Accrual becomes more valuable as you hire, seek financing, carry inventory, or need monthly financials that reflect performance—not just bank deposits.
                    </p>
                    <p>
                      If you outgrow cash basis, plan the transition at a fiscal year boundary with accountant support. You will need opening A/R, A/P, and deferred revenue balances—and invoicing processes that support accurate accrual entries every month.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Accrual vs cash invoice questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Accounting Tools for Invoice Reporting" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/accrual-vs-cash-accounting-for-invoices" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Accrual vs Cash Accounting for Invoices | BeltStack",
    description:
      "Accrual recognizes revenue at invoice send; cash basis at payment receipt. Compare A/R, tax timing, profit vs cash, and when to switch accounting methods.",
  };
}
