import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

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
    q: "Should invoices be created in accounting or invoicing software?",
    a: "Either works if the integration is reliable. Many service businesses invoice in FreshBooks, Wave, or Zoho Invoice and sync to QuickBooks or Xero; others issue invoices directly in the accounting system. The critical part is that revenue, receivables, and deposits reconcile the same way every month.",
  },
  {
    q: "What is the difference between AR and undeposited funds?",
    a: "Accounts receivable is what customers owe you. Undeposited funds (or a clearing account) groups inflows until you batch-match a bank deposit—common when card processors pay net of fees. How your software names these buckets varies; the discipline is matching processor payouts to invoices.",
  },
  {
    q: "How often should I reconcile invoices to the bank?",
    a: "At minimum monthly for small businesses; weekly or daily if cash is tight or volume is high. Reconciliation catches double entries, mis-coded fees, and forgotten partial payments before they compound.",
  },
  {
    q: "Do I still need this workflow if I only use one all-in-one tool?",
    a: "Yes—consolidated apps still require you to verify cleared payments, processor fees, and refunds against bank reality. The UI changes; the accounting logic does not.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.7, bestFor: "SMB standard", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.5, bestFor: "Cloud accounting", reviewHref: getAccountingReviewUrl("xero") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice-heavy", reviewHref: getAccountingReviewUrl("freshbooks") },
];

const RELATED_ITEMS = [
  { label: "Accounting Software Hub", href: "/accounting" },
  { label: "Invoicing Software Hub", href: "/invoicing" },
  { label: "Accounting Guides", href: "/accounting/guides" },
  { label: "Invoicing Guides", href: "/invoicing/guides" },
  { label: "Invoicing vs Accounting Software", href: "/accounting/guides/invoicing-software-vs-accounting-software" },
  { label: "How Accounting Software Works", href: "/accounting/guides/how-accounting-software-works" },
  { label: "Recurring Invoicing Explained", href: "/invoicing/guides/recurring-invoicing-explained" },
  { label: "How to Choose Invoicing Software", href: "/invoicing/guides/how-to-choose-invoicing-software" },
  { label: "Accounting for Small Business", href: "/accounting/guides/accounting-for-small-business" },
  { label: "Payroll Software Hub", href: "/payroll" },
];

export default function InvoicesPaymentsAndAccountingClosePage() {
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
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/accounting" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Accounting
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/accounting/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Invoices, Payments &amp; Accounting Close
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Invoices, Payments &amp; Accounting Close
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How customer invoices, card and bank payments, processor fees, and deposits flow into accounts receivable
                    and bank reconciliation—so month-end reflects money you actually collected.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Search intent behind this topic is operational: founders and bookkeepers want the receivable balance and
                      the bank balance to tell the same story. Invoicing apps excel at professional invoices and reminders;
                      accounting systems excel at the general ledger, expense capture, and reconciliation. The handoff between
                      them—partial payments, refunds, processing fees, and batch deposits—is where books drift if nobody owns
                      the workflow.
                    </p>
                    <p>
                      Pair this guide with{" "}
                      <Link href="/accounting/guides/invoicing-software-vs-accounting-software" className={linkGreen}>
                        invoicing software vs accounting software
                      </Link>{" "}
                      for category fit, and with{" "}
                      <Link href="/invoicing/guides/how-invoicing-software-works" className={linkGreen}>
                        how invoicing software works
                      </Link>{" "}
                      for product basics. Product picks and pricing live in our{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>{" "}
                      and <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>{" "}
                      roundups.
                    </p>
                  </div>
                </section>
                <section id="invoice-to-ar" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What happens when you send a bill.">From Invoice to Accounts Receivable</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When you issue an invoice, your books should record revenue according to your accounting method (cash
                      vs accrual) and show an amount due from the customer. In practice, most SMBs on accrual recognize revenue
                      at invoice and keep AR open until cash clears; cash-basis filers may wait until payment—your accountant
                      should confirm the rule set. Tools like{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link>{" "}
                      and <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> label these flows in
                      similar ways; <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>{" "}
                      often starts from invoice-first UX then syncs downstream.
                    </p>
                  </div>
                </section>
                <section id="payments-deposits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Processors, fees, and matching deposits.">Payments, Fees, and Bank Deposits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Card payments rarely hit your bank as one tidy line per invoice. Processors aggregate payouts, subtract
                      fees, and delay funds. Your job in accounting is to tie each deposit on the bank feed to the underlying
                      invoice payments (or refunds) and record fees in the right expense category. Skipping this step inflates
                      revenue, understates expenses, or leaves AR hanging open after the customer already paid.
                    </p>
                    <p>
                      If you run <Link href="/payroll" className={linkGreen}>payroll</Link> or contractor payouts tied to
                      billable work, keep labor costs separate from customer invoicing—mixing them in the same clearing
                      account makes reconciliation painful.
                    </p>
                  </div>
                </section>
                <section id="month-end" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A short checklist before you close the month.">Month-End Sanity Checks</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>AR aging matches open invoices you expect; nothing stale without a follow-up plan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>Undeposited funds (or equivalent) clear when deposits post—no orphaned customer payments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>Processor fees reconcile to statements; refunds have corresponding credit notes.</span>
                    </li>
                  </ul>
                </section>
                <section id="trust" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why process-first beats tool hype.">Credible, Process-First Advice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Accounting outcomes depend on disciplined routines, not logos. Use this guide to interview bookkeepers
                      and to evaluate whether an integration truly reduces duplicate entry in your stack. When rules vary by
                      jurisdiction or industry, confirm with a licensed professional—our guides explain software workflow, not
                      individual tax positions.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoice to books" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedAccountingResources items={RELATED_ITEMS} excludeHref="/accounting/guides/invoices-payments-and-accounting-close" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoices, Payments & Accounting Close | BeltStack Guide",
    description:
      "Learn how invoices and customer payments flow into accounts receivable, bank deposits, and reconciliation in accounting software—plus month-end checks for small businesses.",
  };
}
