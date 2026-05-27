import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/how-small-businesses-maintain-their-accounts";

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
    q: "How often should small businesses reconcile accounts?",
    a: "Monthly bank reconciliation is the standard minimum. High-volume businesses may reconcile weekly. Reconciliation catches duplicate entries, missing expenses, and fraud early.",
  },
  {
    q: "Do small businesses need a bookkeeper?",
    a: "Many owners handle daily entry in software; bookkeepers or CPAs review monthly or quarterly and prepare taxes. See our guide on whether you still need an accountant if you use QuickBooks when deciding how much to outsource.",
  },
  {
    q: "What software do most small businesses use for accounts?",
    a: "QuickBooks Online, Xero, Wave, and FreshBooks are common. Choice depends on industry, accountant preference, and complexity.",
  },
  {
    q: "What is the difference between maintaining accounts and accounting software?",
    a: "Maintaining accounts is the process—categorize, reconcile, review reports. Software automates ledgers and feeds; discipline still determines accuracy.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Full bookkeeping", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Cloud books", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free start", reviewHref: getAccountingReviewUrl("wave") },
];

export default function HowSmallBusinessesMaintainTheirAccountsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Maintain Accounts</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Small Businesses Maintain Their Accounts
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Monthly habits, reconciliation, and software that keep small business books accurate—not just at tax time.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Owners search this when books have slipped—boxes of receipts, unexplained bank balances, or a CPA asking for cleanup before tax season. You want to know <strong className="text-[#1A2D48]">what &quot;maintaining accounts&quot; actually involves</strong> beyond buying software once.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Maintaining accounts means keeping your books current, reconciled, and ready for decisions and tax filing.</strong> Software handles the ledger; owners and bookkeepers supply discipline—separate business banking, timely categorization, and monthly close.
                    </p>
                    <p>
                      Foundation: <Link href="/accounting/guides/how-accounting-software-works" className={linkGreen}>how accounting software works</Link> and <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link>. Role clarity: <Link href="/accounting/guides/accounting-vs-bookkeeping" className={linkGreen}>accounting vs bookkeeping</Link>.
                    </p>
                  </div>
                </section>
                <section id="habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What healthy maintenance looks like.">Monthly Maintenance Habits</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Connect bank feeds; categorize transactions within the month.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile every business account to the statement balance.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Review P&amp;L and cash flow; chase overdue invoices.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Attach receipts—see <Link href="/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks" className={linkGreen}>keeping receipts</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools that support the process.">Software That Helps</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks</Link>, <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link>, and <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> automate much of the ledger. Pair with <Link href="/invoicing" className={linkGreen}>invoicing</Link> and <Link href="/payroll" className={linkGreen}>payroll</Link> as you grow. Stack overview: <Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>what programs small businesses need</Link>.
                    </p>
                  </div>
                </section>
                <section id="monthly-close" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A repeatable month-end rhythm.">Step-by-Step Monthly Close</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Week 1–3:</strong> Categorize transactions as they post; attach receipts for expenses over your policy threshold; send invoices and record payments promptly.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Month-end:</strong> Reconcile every business account to the statement balance; review uncategorized items; run profit-and-loss and balance sheet; note overdue AR and large variances.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Quarterly:</strong> Share reports with your bookkeeper or CPA; adjust estimated taxes if needed; confirm payroll and sales tax filings posted correctly from <Link href="/payroll" className={linkGreen}>payroll</Link> and <Link href="/payment-processing" className={linkGreen}>payments</Link> tools.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Maintenance beats year-end panic.">Why Monthly Maintenance Matters</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Current books show real cash runway, catch duplicate charges, and make lending conversations easier. Waiting until March turns maintenance into expensive reconstruction. Software like <Link href="/accounting/best-accounting-software" className={linkGreen}>accounting platforms</Link> automates the ledger—but only if you feed it consistently.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Habits that break books.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Mixing personal and business spending</strong> on one card without clear rules.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Skipping reconciliation</strong> because balances &quot;look close enough.&quot;
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Letting AR age</strong> without follow-up—cash flow looks fine on paper until it does not.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack tests accounting tools on maintenance workflows—bank feeds, reconciliation UX, receipt capture, and report clarity—not just signup flows. We recommend products that help owners stay current with less manual entry, and we note when a tool is better for accountants than DIY owners.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Books, tools, and stack.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>Accounting for small business</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/invoicing" className={linkGreen}>Invoicing hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>What programs you need</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payroll" className={linkGreen}>Payroll hub</Link></span></li>
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
              <GuideSidebar title="Accounting tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Small Businesses Maintain Their Accounts | BeltStack Guide",
    description:
      "How small businesses maintain accounts: monthly close steps, reconciliation habits, and software that keeps books tax-ready year-round.",
  };
}
