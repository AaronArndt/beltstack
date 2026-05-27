import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-do-small-businesses-use-quickbooks-for";

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
    q: "What is QuickBooks mainly used for?",
    a: "Small businesses use QuickBooks for invoicing, expense tracking, bank reconciliation, financial reporting, and tax-ready exports—often with payroll and time tracking integrations.",
  },
  {
    q: "Do all small businesses need every QuickBooks feature?",
    a: "No. A service business may use invoicing and expenses only; retailers add inventory; contractors add job costing. Right-size your plan to the features you actually use.",
  },
  {
    q: "Can QuickBooks replace invoicing software?",
    a: "QuickBooks includes invoicing for many businesses. Standalone invoicing tools may still win on client experience or proposals—see invoicing vs accounting software.",
  },
  {
    q: "Is QuickBooks used for personal finances?",
    a: "QuickBooks is for business books. Personal finance belongs in tools like Quicken, not QuickBooks. See Quicken vs QuickBooks.",
  },
  {
    q: "Does QuickBooks handle payroll?",
    a: "QuickBooks offers payroll add-ons or integrations. Many businesses run payroll in QuickBooks or sync from Gusto and similar providers.",
  },
  {
    q: "Can QuickBooks replace a bookkeeper?",
    a: "QuickBooks automates data entry and reports; many owners still use bookkeepers for reconciliation and CPAs for taxes. See do you still need an accountant if you use QuickBooks.",
  },
  {
    q: "What reports do owners run most in QuickBooks?",
    a: "Profit and loss, balance sheet, accounts receivable aging, and cash flow statements are the most common monthly reports for small businesses.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Full SMB workflows", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service invoicing", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Similar scope", reviewHref: getAccountingReviewUrl("xero") },
];

export default function WhatDoSmallBusinessesUseQuickBooksForPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Uses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Do Small Businesses Use QuickBooks For?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Core QuickBooks workflows—billing, expenses, reconciliation, reporting, and integrations—that owners rely on every month.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses use <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> as the operational hub for money in and money out—not just at tax time. The same platform that sends invoices also feeds the reports your bank and CPA expect.
                    </p>
                    <p>
                      QuickBooks is not one feature—it is a bundle of workflows. Owners who succeed right-size the product: they master invoicing, expenses, and reconciliation before turning on inventory, job costing, or advanced payroll.
                    </p>
                    <p>
                      Deeper walkthrough: <Link href="/accounting/guides/how-accounting-software-works" className={linkGreen}>how accounting software works</Link> and{" "}
                      <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link>. New users:{" "}
                      <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What owners run in QuickBooks monthly.">Common QuickBooks Workflows</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Invoicing &amp; payments</strong> — Create invoices, accept cards/ACH, track who owes you.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Expenses &amp; bills</strong> — Record purchases, attach receipts, pay vendors.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Bank reconciliation</strong> — Match feeds to real bank balances monthly.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — P&amp;L, balance sheet, cash flow, AR/AP aging.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payroll &amp; contractors</strong> — Sync wages and 1099 tracking with add-ons.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Tax prep handoff</strong> — Export clean books to your CPA.</span></li>
                    </ul>
                    <p>
                      Cash flow lens: <Link href="/accounting/guides/what-tool-do-most-small-businesses-use-to-manage-cash-flow" className={linkGreen}>cash flow tools</Link>. Close process:{" "}
                      <Link href="/accounting/guides/invoices-payments-and-accounting-close" className={linkGreen}>invoices, payments &amp; accounting close</Link>.
                    </p>
                  </div>
                </section>
                <section id="by-industry" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Extra modules by business type.">Industry-Specific Uses</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractors add job costing; retailers track inventory; agencies may integrate time tools. See{" "}
                      <Link href="/accounting/guides/accounting-for-contractors" className={linkGreen}>accounting for contractors</Link> and{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> for scenario picks.
                    </p>
                    <p>
                      LLC owners track owner pay separately—<Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>LLC owner pay in QuickBooks</Link> (confirm method with your CPA).
                    </p>
                  </div>
                </section>
                <section id="skip-day-one" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reduce overwhelm at setup.">What to Skip on Day One</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      You do not need classes, locations, inventory, or multi-currency on launch day. Turn on modules when a real workflow breaks without them. Beginners who enable everything at once often quit before their first clean reconciliation—see{" "}
                      <Link href="/accounting/guides/how-hard-is-it-to-learn-quickbooks" className={linkGreen}>how hard QuickBooks is to learn</Link>.
                    </p>
                    <p>
                      Keep receipt habits from the start: <Link href="/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks" className={linkGreen}>receipts with QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack documents QuickBooks use cases from workflow testing—invoicing, reconciliation, reporting—not from feature bullet lists alone. Our independent review notes which modules justify each subscription tier for typical SMBs. See <Link href="/methodology" className={linkGreen}>methodology</Link> and the{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Connect one business bank and send your first invoice this week.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Read <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> before upgrading tiers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Compare <Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link> if you still keep books in spreadsheets.</span></li>
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
              <GuideSidebar title="QuickBooks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Do Small Businesses Use QuickBooks For? (2026) | BeltStack",
    description:
      "Invoicing, expenses, reconciliation, reporting, and payroll—how small businesses use QuickBooks Online day to day, what to skip at setup, and industry add-ons.",
    keywords: [
      "what is QuickBooks used for",
      "QuickBooks small business",
      "QuickBooks workflows",
      "QuickBooks invoicing expenses",
      "QuickBooks reporting",
    ],
  };
}
