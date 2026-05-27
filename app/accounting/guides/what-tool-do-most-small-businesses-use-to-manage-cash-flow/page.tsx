import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingBestForUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-tool-do-most-small-businesses-use-to-manage-cash-flow";

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
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ_ITEMS = [
  {
    q: "What is the most common cash flow tool for small business?",
    a: "Accounting software with bank feeds—often QuickBooks Online, Xero, or Wave for very small teams—is the most common way owners track cash in and out with reporting. Spreadsheets and bank apps supplement but rarely replace books as complexity grows. See our QuickBooks Online review for a typical setup.",
  },
  {
    q: "Is a spreadsheet enough for cash flow management?",
    a: "A spreadsheet can work for early-stage businesses with few accounts and predictable timing. It becomes error-prone with multiple cards, payroll, AR/AP, and tax prep. Most owners switch to accounting software before hiring help or raising funding—compare QuickBooks vs Excel when you outgrow Sheets.",
  },
  {
    q: "Do I need separate cash flow software and accounting software?",
    a: "Usually no. Modern accounting platforms include cash flow statements, aging reports, and dashboards. Dedicated forecasting tools help if you model scenarios weekly; day-to-day tracking still belongs in your books. QuickBooks and Xero both report cash flow from reconciled activity.",
  },
  {
    q: "How often should owners review cash flow?",
    a: "Weekly cash position checks and monthly P&L plus cash flow review are common habits. Tie reviews to invoicing, payroll dates, and tax deposits so surprises surface early. Pair habits with what do small businesses use QuickBooks for if you run QBO.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Cash flow + full books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Dashboards + reporting", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free tracking", reviewHref: getAccountingReviewUrl("wave") },
];

export default function WhatToolDoMostSmallBusinessesUseToManageCashFlowPage() {
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
                    <li><Link href="/accounting" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/accounting/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Cash Flow Tools</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Tool Do Most Small Businesses Use to Manage Cash Flow?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Most owners rely on accounting software with bank feeds—not standalone cash apps alone. Here is how the stack breaks down in practice.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When owners ask what tool everyone uses for cash flow, they usually mean: <em>How do I know if I can make payroll next month?</em> That is a cash timing question—not a separate app category. In practice, most small businesses answer it with reconciled books, not a standalone &quot;cash flow tool&quot; alone.
                    </p>
                    <p>
                      In practice, most small businesses answer that with <strong className="text-[#1A2D48]">accounting software connected to their bank</strong>, not a single-purpose cash flow app in isolation. The platform becomes your source of truth for what customers owe you, what you owe vendors, and what cleared the bank.
                    </p>
                    <p>
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> is widely used in North America; <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> is common globally; <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> appears often among cost-conscious solos. Each produces cash flow statements, tracks receivables and payables, and reconciles transactions—see{" "}
                      <Link href="/accounting/guides/how-accounting-software-works" className={linkGreen}>how accounting software works</Link> and{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> when you are choosing between them.
                    </p>
                  </div>
                </section>
                <section id="common-stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What owners actually run day to day.">The Typical Cash Flow Stack</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Accounting platform</strong> — primary source of truth for inflows, outflows, and reports.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Business bank and card</strong> — real-time balance checks; feeds sync into accounting.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Invoicing or payment tools</strong> — speed collections; tie back to AR in books. See <Link href="/invoicing" className={linkGreen}>invoicing software</Link> and <Link href="/accounting/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing vs accounting</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Spreadsheet or forecast model</strong> — optional for hiring plans or seasonality; not a substitute for reconciled books.</span></li>
                    </ul>
                    <p>
                      Contractors and agencies with lumpy project cash often add job-level reporting—our{" "}
                      <Link href="/accounting/guides/accounting-for-contractors" className={linkGreen}>accounting for contractors</Link> guide covers that pattern.{" "}
                      <Link href={getAccountingBestForUrl("small-business")} className={linkGreen}>Best accounting for small business</Link> lists scenario-based picks.
                    </p>
                  </div>
                </section>
                <section id="habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools only help if you review them.">Cash Flow Habits That Matter</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Weekly: check bank balance, open AR aging, and upcoming payroll or tax payments. Monthly: run P&amp;L and cash flow in your accounting tool and compare to budget. Pair software with discipline—uncategorized transactions make any platform lie about cash.
                    </p>
                    <p>
                      For pricing and plan fit, see <Link href="/accounting/guides/accounting-software-pricing" className={linkGreen}>accounting software pricing</Link> and                       <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link>.
                    </p>
                  </div>
                </section>
                <section id="forecasting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When to add forecasting on top of books.">Cash Flow Forecasting vs Day-to-Day Tracking</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Your accounting platform tells you what happened and what is outstanding today. Forecasting tools—often a spreadsheet or a planning add-on—model what <em>might</em> happen if sales slow or you hire. Most owners do not need a third app until hiring plans, seasonality, or loan covenants require forward-looking scenarios.
                    </p>
                    <p>
                      Start with clean books in QuickBooks or Xero, then layer a simple 13-week cash view in Sheets if needed. If QuickBooks cost is a concern, see{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what QuickBooks costs per month</Link> and{" "}
                      <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link> before adding more subscriptions.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates accounting software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent accounting reviews—not paid placement lists. Editors test owner workflows like invoicing, bank reconciliation, and month-end reporting; compare headline pricing and add-ons honestly; and note where tools fit solos versus teams with accountants. Rankings reflect fit for small businesses, not vendor sponsorship.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Continue with these guides and reviews.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>What businesses use QuickBooks for</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>Accounting for small business</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/invoices-payments-and-accounting-close" className={linkGreen}>Invoices, payments, and month-end close</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Cash flow tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedAccountingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Tool Do Most Small Businesses Use to Manage Cash Flow? | BeltStack Guide",
    description:
      "Most SMBs manage cash flow with accounting software and bank feeds—QuickBooks, Xero, or Wave—not standalone apps. See the typical stack, review habits, and when to forecast.",
  };
}
