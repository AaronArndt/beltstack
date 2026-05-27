import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-businesses-write-off-quickbooks";

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
    q: "Can I deduct QuickBooks as a business expense?",
    a: "Ordinary and necessary software used to run your business is commonly deducted as a business expense—often under software, office, or similar categories. How you deduct depends on entity type and tax method; your CPA should classify it.",
  },
  {
    q: "Is QuickBooks subscription tax deductible for LLCs?",
    a: "LLCs typically treat legitimate business software subscriptions as deductible expenses on the business return or Schedule C path—confirm with your CPA based on how your LLC is taxed.",
  },
  {
    q: "Can freelancers write off QuickBooks?",
    a: "Freelancers and sole proprietors often deduct QuickBooks if used exclusively for business bookkeeping. Keep invoices and payment records as proof.",
  },
  {
    q: "Are QuickBooks setup or bookkeeping fees deductible too?",
    a: "Professional setup, training, and outsourced bookkeeping are often deductible business costs separate from the subscription. Ask your CPA how to categorize ProAdvisor or bookkeeper invoices.",
  },
  {
    q: "Where do I categorize QuickBooks in the chart of accounts?",
    a: "Common placements include software subscriptions or office expenses—your CPA should pick the account that matches your return and industry.",
  },
  {
    q: "Can I deduct QuickBooks if I also use it personally?",
    a: "Only the business portion is typically deductible. Separate subscriptions or allocate with CPA guidance—do not run personal finances through the business file.",
  },
  {
    q: "Do I need receipts for QuickBooks deductions?",
    a: "Keep Intuit invoices and payment confirmations. See do businesses need to keep receipts if they use QuickBooks for documentation habits.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Deductible software", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Same category", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free + paid add-ons", reviewHref: getAccountingReviewUrl("wave") },
];

export default function CanBusinessesWriteOffQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Write Off QuickBooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can Businesses Write Off QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    QuickBooks subscriptions are usually treated as ordinary business software expenses—confirm category and eligibility with your CPA.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Most businesses can deduct QuickBooks subscription costs as a business expense</strong> when the software is used to run the company—not for personal finance. The deduction is taken on the business tax return (or Schedule C for many sole props), not by magic inside QuickBooks itself.
                    </p>
                    <p>
                      Owners search this when categorizing Intuit charges or asking whether subscription software counts as a write-off. QuickBooks records the expense in your books; your CPA decides how it flows to the tax return based on entity type and use.
                    </p>
                    <p className="text-sm text-neutral-600 border-l-4 border-[#10B981] pl-4">
                      This guide is general education, not tax advice. Rules vary by entity, country, and situation—work with a licensed CPA for your filing.
                    </p>
                    <p>
                      Record the expense in <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> under the account your CPA recommends. Pricing context:{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>. Billing model:{" "}
                      <Link href="/accounting/guides/do-you-have-to-buy-quickbooks-every-year" className={linkGreen}>QuickBooks subscription renewals</Link>.
                    </p>
                  </div>
                </section>
                <section id="how-to-record" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Document the deduction in your books.">How to Record QuickBooks in Your Books</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Categorize monthly Intuit charges to a business expense account—not owner draw.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Save PDF invoices from Intuit—see <Link href="/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks" className={linkGreen}>keeping receipts with QuickBooks</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Separate personal and business subscriptions if you also use Quicken at home.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Include payroll, payments, and time add-ons as separate line items if your CPA wants granularity.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="related-costs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Other deductible QuickBooks-related spend.">Related Costs You May Deduct</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Bookkeeper fees, ProAdvisor setup, and payroll add-ons may also be deductible business costs. See{" "}
                      <Link href="/accounting/guides/how-much-do-businesses-pay-for-quickbooks-bookkeeping" className={linkGreen}>QuickBooks bookkeeping costs</Link> and{" "}
                      <Link href="/accounting/guides/do-you-still-need-an-accountant-if-you-use-quickbooks" className={linkGreen}>accountant vs QuickBooks</Link>.
                    </p>
                    <p>
                      LLC owners: <Link href="/accounting/guides/can-i-use-quickbooks-for-my-llc" className={linkGreen}>QuickBooks for LLC</Link>. Worth the spend?{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.
                    </p>
                  </div>
                </section>
                <section id="cpa-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Bring this to your tax appointment.">What to Confirm With Your CPA</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Correct expense account for software subscriptions on your chart of accounts.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Whether any personal use requires allocation for your entity type.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>How to treat annual prepay vs monthly billing for your accounting method.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack explains how to record software expenses in QuickBooks; we do not provide tax advice on deductibility. Our independent, workflow-based reviews help you choose whether QuickBooks subscription cost fits your operations. See <Link href="/methodology" className={linkGreen}>methodology</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Download Intuit invoices and attach them to the matching expense transactions.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Ask your CPA to map the subscription account at year-start—not in April.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Compare total cost on <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link> before upgrading tiers.</span></li>
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
              <GuideSidebar title="Business software" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Can Businesses Write Off QuickBooks? (2026 Guide) | BeltStack",
    description:
      "QuickBooks subscriptions are usually deductible business expenses. How to record them, related bookkeeper costs, CPA checklist, and documentation—not tax advice.",
    keywords: [
      "deduct QuickBooks",
      "QuickBooks tax deductible",
      "write off QuickBooks subscription",
      "LLC deduct QuickBooks",
      "QuickBooks business expense category",
    ],
  };
}
