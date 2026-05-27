import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/best-alternatives-to-quicken";

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
    q: "What is the best alternative to Quicken for personal finance?",
    a: "Quicken Simplifi, Monarch Money, and YNAB are common Quicken alternatives for budgeting and net worth tracking. The best fit depends on whether you want classic register-style accounting or modern cash-flow budgeting.",
  },
  {
    q: "What should small businesses use instead of Quicken?",
    a: "QuickBooks Online, Xero, FreshBooks, and Wave are built for business books—invoicing, reconciliation, and CPA handoffs. See Quicken vs QuickBooks.",
  },
  {
    q: "Is Mint still an alternative to Quicken?",
    a: "Intuit shut down Mint; users migrated to Credit Karma for credit monitoring, not full Quicken-style finance. See Mint vs Quicken for context.",
  },
  {
    q: "Are there free Quicken alternatives?",
    a: "Personal finance rarely has fully free Quicken equivalents with the same depth. For business books, Wave offers free core accounting. See can businesses use Quicken for free.",
  },
  {
    q: "Is Quicken Simplifi the best Quicken alternative?",
    a: "Simplifi is Intuit's modern Quicken line—often the first switch for loyal Quicken users who want cloud budgeting without leaving the brand. Compare pricing in how much does Quicken Simplifi cost and evaluate Monarch or YNAB if you want plan-first budgeting instead.",
  },
  {
    q: "How do I migrate off Quicken?",
    a: "Export transactions and category history before canceling, download bank statements as backup, and import into your new tool with a clean chart of accounts. Business users should migrate to QuickBooks or Wave rather than another personal finance app—see how to switch accounting software.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Business books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancers", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free business accounting", reviewHref: getAccountingReviewUrl("wave") },
];

export default function BestAlternativesToQuickenPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken Alternatives</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Are the Best Alternatives to Quicken?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Top Quicken replacements for household finance—and separate picks when you need real small business accounting.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      People search for Quicken alternatives when subscription prices rise, the interface feels dated, or they need better business tools than Quicken provides. <strong className="text-[#1A2D48]">Pick alternatives based on personal vs business use</strong>—mixing them leads to tax-season pain and commingled records your CPA cannot untangle easily.
                    </p>
                    <p>
                      Personal finance alternatives emphasize budgeting, net worth, and household cash flow. Business alternatives emphasize invoicing, bank reconciliation, payroll integrations, and accountant handoffs. If you run a side gig, you may still need both: Quicken or Simplifi for home accounts and <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> or <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> for the business ledger.
                    </p>
                    <p>
                      This guide maps top replacements in each category. For pricing and renewal rules on Quicken itself, see <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Quicken Simplifi cost</Link>, <Link href="/accounting/guides/do-you-have-to-buy-quicken-every-year" className={linkGreen}>annual Quicken subscriptions</Link>, and <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="personal" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Household budgeting and net worth.">Personal Finance Alternatives</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Quicken Simplifi</strong> — Intuit&apos;s modern Quicken line; see <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Quicken Simplifi pricing</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Monarch Money &amp; YNAB</strong> — Popular for collaborative budgeting and plan-first cash flow (evaluate current pricing on their sites).</p>
                    <p><strong className="text-[#1A2D48]">Spreadsheets + bank apps</strong> — Lowest cost; highest manual effort. Compare <Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link> for business-side habits.</p>
                    <p>Historical context: <Link href="/accounting/guides/mint-vs-quicken" className={linkGreen}>Mint vs Quicken</Link>.</p>
                  </div>
                </section>
                <section id="business" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When you outgrow personal finance software.">Business Accounting Alternatives</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link>,{" "}
                      <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link>,{" "}
                      <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>, and{" "}
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> replace Quicken for invoicing and tax-ready business books. Start with{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> and <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Freelancers and service businesses</strong> often land on FreshBooks or Wave for invoicing-first workflows. <strong className="text-[#1A2D48]">Growing SMBs</strong> with inventory, payroll, or multi-user needs typically standardize on QuickBooks or Xero. None of these are &quot;free Quicken for business&quot;—see <Link href="/accounting/guides/can-businesses-use-quicken-for-free" className={linkGreen}>can businesses use Quicken for free</Link> for why personal tools fall short.
                    </p>
                  </div>
                </section>
                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match the tool to how you manage money.">How to Evaluate Quicken Alternatives</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Bank connections</strong> — Do your institutions sync reliably?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting depth</strong> — Net worth and investments vs P&amp;L and balance sheet</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Collaboration</strong> — Household budgeting vs multi-user business books</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Total cost</strong> — Subscription plus your time; compare <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>QuickBooks monthly cost</Link></span></li>
                    </ul>
                    <p>Run a 30-day trial with real accounts before canceling Quicken. Export data first—see <Link href="/accounting/guides/can-you-keep-using-quicken-without-a-subscription" className={linkGreen}>using Quicken without a subscription</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent accounting software reviews and comparisons for small businesses and contractors. We test products in trials, document pricing from published list pages, and separate editorial guides from paid placement—see our <Link href="/methodology" className={linkGreen}>methodology</Link> and <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> roundup.
                    </p>
                    <p>
                      Quicken pricing and features change; we update guides when product lines shift but always confirm checkout totals on vendor sites. BeltStack does not sell accounting software or provide tax advice—use our reviews to shortlist tools, then validate with your CPA for business entity and filing questions.
                    </p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link> — personal vs business split</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/mint-vs-quicken" className={linkGreen}>Mint vs Quicken</Link> — historical context after Mint shut down</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Quicken Simplifi pricing</Link> — if you stay in the Quicken family</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting" className={linkGreen}>Accounting software hub</Link> — reviews, comparisons, and guides</span></li>
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
              <GuideSidebar title="Business alternatives" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Best Alternatives to Quicken (2026) | BeltStack Guide",
    description:
      "Compare the best Quicken alternatives in 2026: Simplifi, Monarch, YNAB for personal finance; QuickBooks, Xero, FreshBooks, and Wave for business—plus how to evaluate and migrate.",
    keywords: ["Quicken alternatives", "replace Quicken", "Quicken vs QuickBooks", "personal finance software", "small business accounting"],
  };
}
