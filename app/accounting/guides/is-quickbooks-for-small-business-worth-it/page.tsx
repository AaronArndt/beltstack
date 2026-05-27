import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/is-quickbooks-for-small-business-worth-it";

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
    q: "Is QuickBooks worth it for a small business with one employee?",
    a: "Often yes if you invoice customers, reconcile bank activity monthly, and want tax-ready reports without spreadsheet chaos. If you only have a handful of transactions, Wave or a simpler tool may be enough until complexity grows. Our QuickBooks Online review lists plan fit by team size.",
  },
  {
    q: "When is QuickBooks not worth the cost?",
    a: "When you only need basic invoicing, your accountant prefers another platform, or total cost with add-ons exceeds the value you get from reporting and integrations. Compare Xero, Zoho Books, and Wave—and read disadvantages of QuickBooks for common pain points.",
  },
  {
    q: "Does QuickBooks save time at tax time?",
    a: "Yes, for many businesses—clean categorization, reconciled accounts, and exportable reports reduce year-end scramble. The benefit depends on keeping books current throughout the year, not only in March. Pair software with do you still need an accountant if you use QuickBooks.",
  },
  {
    q: "How do I know if I am overpaying for QuickBooks?",
    a: "Audit your tier, user count, and add-ons (payroll, time, payments). See cheapest way to use QuickBooks and what does QuickBooks cost per month for optimization tips. A bookkeeper on QuickBooks Online Accountant may offer wholesale client pricing.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Established SMB books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Alternative worth comparing", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Zoho Books", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Lower-cost automation", reviewHref: getAccountingReviewUrl("zoho-books") },
];

export default function IsQuickBooksForSmallBusinessWorthItPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Is QuickBooks Worth It</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Is QuickBooks for Small Business Worth It?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    QuickBooks is worth it when organized books, reporting, and accountant familiarity save more time and risk than the subscription costs.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      &quot;Is QuickBooks worth it?&quot; usually means: <em>Will this subscription save me more time, tax stress, and accountant fees than it costs?</em> That is a fair question—QuickBooks is not the cheapest option, and plenty of owners pay for tiers they barely use.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">QuickBooks Online is worth it for many small businesses</strong>—not because it is perfect, but because it combines invoicing, expense tracking, bank reconciliation, and reporting in one place accountants recognize. The question is whether <em>your</em> business will use those features enough to justify the monthly bill and learning curve.
                    </p>
                    <p>
                      Worth-it math includes hidden costs: payroll per employee, payment processing, and upgrading when you need inventory or multi-user access. Start with our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link>,{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>monthly pricing guide</Link>, and{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> roundup before you subscribe.
                    </p>
                  </div>
                </section>
                <section id="worth-it" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals QuickBooks pays for itself.">When QuickBooks Is Worth It</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Your bookkeeper or CPA already works in QuickBooks and can onboard you quickly.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>You reconcile bank feeds monthly and need P&amp;L, balance sheet, and cash flow without rebuilding spreadsheets.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>You rely on integrations—payroll, time tracking, ecommerce—that connect cleanly through the QuickBooks marketplace.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>You are growing past solo freelancing into employees, inventory, or multi-account banking.</span></li>
                    </ul>
                    <p>
                      See <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link> and{" "}
                      <Link href="/accounting/guides/invoicing-software-vs-accounting-software" className={linkGreen}>invoicing vs accounting software</Link> when billing—not full books—is your main pain point.
                    </p>
                  </div>
                </section>
                <section id="not-worth-it" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When to compare alternatives first.">When QuickBooks May Not Be Worth It</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks can be overkill or overpriced if you only send a few invoices a month, never reconcile, or pay for tiers and add-ons you do not use. Read{" "}
                      <Link href="/accounting/guides/disadvantages-of-quickbooks" className={linkGreen}>disadvantages of QuickBooks</Link>,{" "}
                      <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link>, and compare{" "}
                      <Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link>. Pricing detail:{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>.
                    </p>
                  </div>
                </section>
                <section id="roi" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A simple way to decide before you buy.">How to Estimate ROI</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List what you do today without software: hours reconciling in Excel, late invoices, CPA clean-up fees, or missed deductions. Compare that to total QuickBooks cost (subscription + payroll + payments) over 12 months. If organized books prevent one bad tax surprise or one month of cash blindness, the subscription often pays for itself.
                    </p>
                    <p>
                      Solos with minimal volume may start on <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> and migrate later—see{" "}
                      <Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>can I get QuickBooks for free</Link> for trials, not permanent free access. Growing teams should weigh accountant preference and integrations first.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/disadvantages-of-quickbooks" className={linkGreen}>Disadvantages of QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>Cheapest way to use QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>Can a beginner use QuickBooks?</Link></span></li>
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
    title: "Is QuickBooks for Small Business Worth It? | BeltStack Guide",
    description:
      "Is QuickBooks worth it for your SMB? See when QBO pays off, when Wave or Xero fit better, how to estimate ROI, and what add-ons really cost.",
  };
}
