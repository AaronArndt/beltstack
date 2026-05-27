import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks";

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
    q: "Does QuickBooks store receipts for the IRS?",
    a: "QuickBooks can attach receipt images to transactions, but you are still responsible for retention policies and backup. Software does not replace legal recordkeeping requirements.",
  },
  {
    q: "How long should businesses keep receipts?",
    a: "Many businesses keep supporting documents for several years—often three to seven years depending on situation and CPA advice. Confirm with your tax advisor for your entity and state.",
  },
  {
    q: "Is a bank feed enough without a receipt?",
    a: "Bank proof shows payment occurred; receipts often prove business purpose and sales tax. Audits and deduction disputes are harder without documentation.",
  },
  {
    q: "What is the best way to organize receipts with QuickBooks?",
    a: "Snap photos at purchase, attach to expenses in QuickBooks or a receipt app that syncs, and store backups in cloud drive. Reconcile monthly so every attachment ties to a categorized transaction.",
  },
  {
    q: "Can I throw away paper receipts if they are in QuickBooks?",
    a: "Digital copies attached to transactions are often sufficient if readable and backed up—confirm retention rules with your CPA. Keep backups outside QuickBooks alone.",
  },
  {
    q: "Does QuickBooks automatically capture receipts?",
    a: "Mobile capture and third-party receipt apps can speed attachment, but you should still verify amounts and categories. Automation does not remove your review responsibility.",
  },
  {
    q: "What receipts matter most for small businesses?",
    a: "Large purchases, meals and travel, contractor payments, and anything your CPA flags as high scrutiny—attach and categorize before month-end close.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Receipt attach", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Expense capture", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Document hub", reviewHref: getAccountingReviewUrl("xero") },
];

export default function DoBusinessesNeedToKeepReceiptsIfTheyUseQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Receipts &amp; QuickBooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Do Businesses Need to Keep Receipts if They Use QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Yes—QuickBooks records transactions; receipts prove them. Software does not eliminate document retention for taxes and audits.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Businesses still need to keep receipts (or equivalent documentation) when they use QuickBooks.</strong> QuickBooks stores the accounting entry—amount, date, account, vendor—but tax authorities and auditors often want proof of what was purchased and whether it was a legitimate business expense.
                    </p>
                    <p>
                      Bank feeds in <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> show that money moved; they rarely prove business purpose, sales tax paid, or itemized details on their own. Attaching receipts at the transaction is how you connect the ledger to real-world proof.
                    </p>
                    <p className="text-sm text-neutral-600 border-l-4 border-[#10B981] pl-4">
                      Retention periods and deduction rules vary—confirm requirements with your CPA. BeltStack covers software workflows, not tax law.
                    </p>
                    <p>
                      Related: <Link href="/accounting/guides/can-businesses-write-off-quickbooks" className={linkGreen}>writing off QuickBooks subscription costs</Link> (you should keep Intuit invoices too) and{" "}
                      <Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>what businesses use QuickBooks for</Link>.
                    </p>
                  </div>
                </section>
                <section id="why-both" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Ledger entry vs supporting proof.">QuickBooks Records vs Receipts</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">QuickBooks</strong> — Categorized transaction, reconciliation status, financial reports.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Receipt</strong> — Itemized proof, business purpose, sales tax detail, warranty/support docs.</span></li>
                    </ul>
                    <p>
                      Good documentation lowers bookkeeper cleanup bills—see{" "}
                      <Link href="/accounting/guides/how-much-do-businesses-pay-for-quickbooks-bookkeeping" className={linkGreen}>QuickBooks bookkeeping costs</Link>.
                    </p>
                  </div>
                </section>
                <section id="habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Low-friction compliance habits.">Best Practices</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Photograph receipts at point of sale, attach before month-end close, and back up to cloud storage. Separate personal and business cards so QuickBooks feeds stay clean—see{" "}
                      <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link>.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Use QuickBooks mobile capture or a synced receipt app for field purchases.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Name files consistently (date-vendor-amount) if you also store copies in Drive.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile monthly so unattached expenses surface before tax filing.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="audit-prep" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What owners prepare before questions arise.">Audit and CPA Handoff Prep</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before year-end, run an unattached-expense review with your bookkeeper. Export a transaction list with attachments noted. Your CPA may ask for samples of large expenses even when QuickBooks looks clean.
                    </p>
                    <p>
                      Pair with <Link href="/accounting/guides/do-you-still-need-an-accountant-if-you-use-quickbooks" className={linkGreen}>accountant vs QuickBooks</Link> and LLC hygiene in{" "}
                      <Link href="/accounting/guides/can-i-use-quickbooks-for-my-llc" className={linkGreen}>QuickBooks for LLC</Link>.
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack tests receipt attachment and mobile capture in QuickBooks trials; we do not provide tax or legal advice on retention periods. Our independent reviews note how well each platform supports documentation workflows. See <Link href="/methodology" className={linkGreen}>methodology</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Attach receipts to this month&apos;s expenses before you reconcile.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Ask your CPA how many years to retain digital copies for your entity.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Read <Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link> if receipts still live in ad hoc folders outside your ledger.</span></li>
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
              <GuideSidebar title="Expense tracking" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Do Businesses Need Receipts if They Use QuickBooks? (2026) | BeltStack",
    description:
      "Yes—QuickBooks does not replace receipt retention. Why supporting documents matter, best attachment habits, audit prep, and how to organize proof in QuickBooks.",
    keywords: [
      "QuickBooks receipts",
      "keep receipts QuickBooks",
      "QuickBooks expense documentation",
      "IRS receipts QuickBooks",
      "attach receipts QuickBooks Online",
    ],
  };
}
