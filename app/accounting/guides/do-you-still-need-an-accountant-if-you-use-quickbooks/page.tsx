import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/do-you-still-need-an-accountant-if-you-use-quickbooks";

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
    q: "Can QuickBooks replace an accountant?",
    a: "QuickBooks replaces manual ledger work and speeds daily bookkeeping—it does not replace professional judgment on tax elections, entity structure, audit defense, or complex adjustments. Many businesses use both software and a CPA.",
  },
  {
    q: "Should I do QuickBooks myself or hire a bookkeeper?",
    a: "DIY works when transaction volume is low and you reconcile monthly. Hire help when you fall behind, miss categorization, or spend owner time on data entry instead of revenue. Hybrid models—owner runs AP/AR, bookkeeper reconciles—are common.",
  },
  {
    q: "What does a CPA do that QuickBooks does not?",
    a: "Tax return preparation, year-end adjusting entries, payroll tax compliance review, entity advice, and sign-off on financial statements for lenders or investors. Software organizes data; professionals interpret and file it.",
  },
  {
    q: "How much does QuickBooks bookkeeping cost if I outsource?",
    a: "Rates vary by volume and market—often a few hundred to over a thousand dollars per month for ongoing reconciliation. See our guide on how much businesses pay for QuickBooks bookkeeping for planning ranges.",
  },
  {
    q: "How often should an accountant review my QuickBooks file?",
    a: "Many small businesses use monthly or quarterly bookkeeper reconciliation plus an annual CPA review before tax filing. High-volume or multi-entity businesses may need weekly touchpoints.",
  },
  {
    q: "Does QuickBooks include accountant access?",
    a: "QuickBooks Online includes accountant user roles so your CPA or bookkeeper can review without sharing your owner login. That access does not replace their professional fees.",
  },
  {
    q: "When is DIY QuickBooks enough without a bookkeeper?",
    a: "Solo owners with one business bank, few monthly transactions, and a CPA who only needs clean exports at year-end can often DIY if they reconcile every month and attach receipts.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "DIY + advisor access", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Accountant-friendly", reviewHref: getAccountingReviewUrl("xero") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Owner-run billing", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function DoYouStillNeedAnAccountantIfYouUseQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks &amp; Accountants</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Do You Still Need an Accountant if You Use QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    QuickBooks handles day-to-day books; accountants still matter for taxes, review, and judgment calls software cannot make alone.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Yes—many businesses still need an accountant or bookkeeper even with QuickBooks.</strong> Software automates categorization, invoicing, and reports; it does not replace tax law expertise, entity planning, or independent review of whether your books are right.
                    </p>
                    <p>
                      Owners often ask this after buying <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> hoping to eliminate professional fees entirely. In practice, QuickBooks reduces data-entry labor; it does not answer whether an expense is deductible, how much salary an S corp owner should take, or how to fix a reconciliation that has been wrong for six months.
                    </p>
                    <p>
                      The practical split: owners and staff run QuickBooks weekly; a CPA or bookkeeper reviews monthly or quarterly and prepares annual filings. Our{" "}
                      <Link href="/accounting/guides/accounting-vs-bookkeeping" className={linkGreen}>accounting vs bookkeeping</Link> guide explains roles. If you are deciding whether to hire help, see{" "}
                      <Link href="/accounting/guides/how-much-do-businesses-pay-for-quickbooks-bookkeeping" className={linkGreen}>QuickBooks bookkeeping costs</Link> and{" "}
                      <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="software-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you can handle inside QuickBooks.">What QuickBooks Replaces</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Data entry from bank feeds and receipt capture</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Invoicing, payment tracking, and basic AR/AP</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Standard P&amp;L, balance sheet, and cash flow reports</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Export packages for tax prep when books are clean</span></li>
                    </ul>
                    <p>See <Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>what small businesses use QuickBooks for</Link>.</p>
                  </div>
                </section>
                <section id="accountant-does" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where professional help still pays off.">What Accountants Still Do</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Business and personal tax returns, estimated taxes, and multi-state filings</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Year-end adjusting entries, depreciation schedules, and loan covenant reporting</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Entity structure (LLC, S corp election) and owner compensation strategy</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Audit or IRS response when documentation and methodology matter</span></li>
                    </ul>
                    <p className="text-sm text-neutral-600 border-l-4 border-[#10B981] pl-4">
                      BeltStack covers software workflows, not tax or legal advice—confirm filing obligations and entity decisions with a licensed CPA.
                    </p>
                  </div>
                </section>
                <section id="hybrid-workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A split most growing SMBs use.">Building a Hybrid QuickBooks + Advisor Workflow</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A workable hybrid model: you or an office manager categorizes transactions and sends invoices in QuickBooks; a bookkeeper reconciles accounts monthly; your CPA reviews quarterly or at year-end and files taxes. Grant accountant access in QuickBooks instead of emailing spreadsheets—your advisor sees the same live data you do.
                    </p>
                    <p>
                      Set a recurring calendar block for reconciliation before you pay vendors or yourself from gut feel. Attach receipts as you go—see{" "}
                      <Link href="/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks" className={linkGreen}>keeping receipts with QuickBooks</Link>. LLC owners should align draws or payroll with{" "}
                      <Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>how an LLC pays themselves in QuickBooks</Link> (with CPA sign-off on the method).
                    </p>
                  </div>
                </section>
                <section id="when-diy-enough" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals you can delay hiring a bookkeeper.">When DIY QuickBooks Is Often Enough</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Solo service businesses with one checking account, under roughly a few dozen transactions per month, and no inventory or payroll complexity sometimes run QuickBooks alone—if they reconcile monthly and use a CPA at tax time. The breaking point usually appears as uncategorized transactions pile up, sales tax feels scary, or you stop trusting your P&amp;L.
                    </p>
                    <p>
                      If learning curve is the bottleneck, read <Link href="/accounting/guides/how-hard-is-it-to-learn-quickbooks" className={linkGreen}>how hard it is to learn QuickBooks</Link> before abandoning DIY. If cost is the question, compare{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>QuickBooks subscription cost</Link> plus bookkeeper fees against the value of your owner hours.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent accounting guides and workflow-based product reviews—we are not paid by Intuit to recommend QuickBooks. We test how owners run invoicing, bank reconciliation, and CPA handoffs in real trials, then link to our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> when you shortlist tools. Educational guides explain operational splits between software and advisors; tax elections belong with your CPA.
                    </p>
                    <p>
                      Full process: <Link href="/methodology" className={linkGreen}>BeltStack methodology</Link>. Compare alternatives on{" "}
                      <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Invite your CPA or ProAdvisor into QuickBooks with accountant access—not shared passwords.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile last month before deciding whether you need monthly bookkeeping help.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Read <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> and <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> if you have not committed to a platform yet.</span></li>
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
    title: "Do You Still Need an Accountant if You Use QuickBooks? (2026) | BeltStack",
    description:
      "QuickBooks does not replace your CPA. Learn what software handles vs when bookkeepers and accountants still add value, hybrid workflows, and DIY limits for small businesses.",
    keywords: [
      "QuickBooks accountant",
      "do I need an accountant with QuickBooks",
      "QuickBooks bookkeeper cost",
      "QuickBooks vs CPA",
      "small business bookkeeping QuickBooks",
    ],
  };
}
