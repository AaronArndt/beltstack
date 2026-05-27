import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl, getPayrollReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-you-run-payroll-in-quicken";

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
    q: "Does Quicken include payroll for small business?",
    a: "Quicken is personal and household finance software—not a payroll processor. Business payroll with tax withholding and filings belongs in QuickBooks Payroll, Gusto, OnPay, or similar tools.",
  },
  {
    q: "Can I track W-2 employees in Quicken?",
    a: "You might record net pay as transactions, but Quicken does not calculate payroll taxes, file forms, or integrate with IRS/state agencies the way payroll software does.",
  },
  {
    q: "What should I use with Quicken for business payroll?",
    a: "Run payroll in a dedicated provider and sync or journal results into QuickBooks Online for business books—not Quicken. See the payroll software hub for Gusto, OnPay, and QuickBooks Payroll comparisons.",
  },
  {
    q: "Is QuickBooks Payroll the same as Quicken?",
    a: "No. QuickBooks Payroll pairs with QuickBooks Online business accounting. Quicken vs QuickBooks explains the product split.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Gusto", logoSrc: "/Logos/gusto.jpeg", rating: 4.6, bestFor: "SMB payroll", reviewHref: getPayrollReviewUrl("gusto") },
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Books + payroll sync", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "OnPay", logoSrc: "/Logos/onpay.jpeg", rating: 4.5, bestFor: "Straightforward payroll", reviewHref: getPayrollReviewUrl("onpay") },
];

export default function CanYouRunPayrollInQuickenPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken Payroll</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can You Run Payroll in Quicken?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    No—Quicken is not payroll software. Here is what to use for W-2 and contractor pay when you have employees.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      This question usually comes from someone already using Quicken at home who hired a first employee—or from confusion between <strong className="text-[#1A2D48]">Quicken and QuickBooks</strong> because the names sound alike. The answer is short: business payroll does not belong in Quicken.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">You cannot run compliant business payroll inside Quicken.</strong> Quicken tracks personal spending, investments, and household budgets. Payroll requires tax tables, withholding, direct deposit, quarterly filings, and year-end W-2/1099 forms—features payroll platforms automate.
                    </p>
                    <p>
                      Compare <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>. Business books and payroll sync live in <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> plus <Link href="/payroll" className={linkGreen}>payroll software</Link> like <Link href={getPayrollReviewUrl("gusto")} className={linkGreen}>Gusto</Link> or <Link href={getPayrollReviewUrl("onpay")} className={linkGreen}>OnPay</Link>.
                    </p>
                  </div>
                </section>
                <section id="what-to-use" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Payroll belongs in dedicated tools.">What to Use Instead</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Choose payroll by headcount, states, and whether you need HR add-ons. After each run, payroll posts to your accounting ledger—see <Link href="/accounting/guides/how-small-businesses-maintain-their-accounts" className={linkGreen}>how small businesses maintain accounts</Link> and <Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>LLC owner pay in QuickBooks</Link>.</p>
                  </div>
                </section>
                <section id="compliance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What payroll software actually does.">What Compliant Payroll Requires</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Payroll is more than sending net pay. You need federal and state withholding calculated each run, unemployment and disability where applicable, direct deposit or check printing, quarterly 941s and state returns, and year-end W-2s (plus 1099-NEC for contractors when required). Recording a lump-sum withdrawal in Quicken does none of that—it only hides liability until an agency or employee surfaces an error.
                    </p>
                    <p>
                      Dedicated <Link href="/payroll" className={linkGreen}>payroll providers</Link> update tax tables, file forms, and sync journal entries to <Link href="/accounting" className={linkGreen}>accounting</Link> so your ledger matches reality.
                    </p>
                  </div>
                </section>
                <section id="why-confusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Naming and history trip people up.">Why Owners Ask About Quicken</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Intuit historically owned both Quicken and QuickBooks; marketing overlap lingers. Some owners used Quicken for a side business years ago. Today Quicken Simplifi targets households—not W-2 workforces. If you have employees, plan on QuickBooks Online (or similar) for books plus a payroll app, not Quicken for either job.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Risky workarounds.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Paying employees with personal checks</strong> and hoping Quicken categorization is enough for audits.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Using online calculators</strong> without filing—underpayment penalties accumulate.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Treating 1099 contractors like W-2</strong> without proper classification review.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack reviews payroll and accounting products separately, testing tax filing support, accountant access, and sync to the general ledger. We clearly label consumer finance apps like Quicken as out of scope for business payroll recommendations—no paid rankings override that guidance.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Payroll and books that belong together.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payroll" className={linkGreen}>Payroll software hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getPayrollReviewUrl("gusto")} className={linkGreen}>Gusto review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-small-businesses-maintain-their-accounts" className={linkGreen}>How to maintain accounts</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>What programs you need</Link></span></li>
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
              <GuideSidebar title="Payroll picks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Can You Run Payroll in Quicken? | BeltStack Guide",
    description:
      "No—Quicken cannot run compliant business payroll. See what to use instead (Gusto, OnPay, QuickBooks) and how payroll syncs to accounting.",
  };
}
