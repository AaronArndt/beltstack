import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/how-much-do-businesses-pay-for-quickbooks-bookkeeping";

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
    q: "How much does a QuickBooks bookkeeper cost per month?",
    a: "Ongoing bookkeeping often runs roughly $200–$800+ per month for small businesses, depending on transaction volume, payroll complexity, and whether you need weekly or monthly service. High-volume or multi-entity businesses pay more.",
  },
  {
    q: "What is the difference between bookkeeping and CPA fees?",
    a: "Bookkeepers categorize, reconcile, and maintain QuickBooks monthly. CPAs typically handle tax returns, year-end adjustments, and advisory work—often billed annually or per project on top of bookkeeping.",
  },
  {
    q: "Is it cheaper to do QuickBooks myself?",
    a: "DIY saves cash but costs owner time and risks misclassification. Hybrid models—owner invoices, bookkeeper reconciles—balance cost and accuracy.",
  },
  {
    q: "Does QuickBooks subscription include bookkeeping?",
    a: "No. QuickBooks software is separate from professional services. You pay Intuit for the tool and your bookkeeper or CPA for labor.",
  },
  {
    q: "How do bookkeepers charge for QuickBooks cleanup?",
    a: "Catch-up work is often hourly or a fixed project fee—higher than ongoing monthly packages because historical transactions need review and reconciliation.",
  },
  {
    q: "Should I hire a bookkeeper or a CPA for QuickBooks?",
    a: "Bookkeepers handle monthly maintenance; CPAs handle tax returns and complex advisory work. Many businesses use both. See do you still need an accountant if you use QuickBooks.",
  },
  {
    q: "What makes QuickBooks bookkeeping quotes go up?",
    a: "More bank accounts, payroll runs, inventory, job costing, sales tax filings, and messy historical data increase billable hours.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Software only", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Advisor ecosystem", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Lower software cost", reviewHref: getAccountingReviewUrl("wave") },
];

export default function HowMuchDoBusinessesPayForQuickBooksBookkeepingPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Bookkeeping Cost</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Much Do Businesses Pay for QuickBooks Bookkeeping?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Typical bookkeeper and CPA costs on top of QuickBooks software—and what drives the price up or down.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">QuickBooks subscription and bookkeeping services are separate line items.</strong> Software might run ~$30–$100+ per month; professional bookkeeping often adds hundreds more depending on how messy your transactions are and how often someone touches the file.
                    </p>
                    <p>
                      Owners search this when comparing DIY time against outsourcing. The right answer depends on transaction volume, how clean your bank feeds are, and whether mistakes would cost more at tax time than monthly bookkeeper fees.
                    </p>
                    <p>
                      Software pricing: <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>. DIY vs help:{" "}
                      <Link href="/accounting/guides/do-you-still-need-an-accountant-if-you-use-quickbooks" className={linkGreen}>do you still need an accountant</Link>. Platform review:{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link>.
                    </p>
                    <p className="text-sm text-neutral-600">Figures are planning ranges, not quotes—request proposals from local bookkeepers for your transaction volume.</p>
                  </div>
                </section>
                <section id="ranges" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Planning ranges for small business.">Typical Cost Ranges</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Light volume</strong> — few accounts, monthly reconciliation: often lower hundreds per month or quarterly packages.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Moderate SMB</strong> — payroll, multiple cards, job costing: mid hundreds monthly is common.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Tax prep add-on</strong> — annual CPA fees for returns, often separate from monthly bookkeeping.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Catch-up projects</strong> — one-time fees when you have not reconciled in months.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="drivers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why two businesses pay different rates.">What Drives Bookkeeping Price</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Transaction count, number of bank accounts, payroll frequency, inventory, catch-up work, and industry (construction job costing vs simple services) all affect quotes. Clean QuickBooks habits—receipts attached, monthly reconciliation—lower billable hours.</p>
                    <p>Related: <Link href="/accounting/guides/do-businesses-need-to-keep-receipts-if-they-use-quickbooks" className={linkGreen}>keeping receipts with QuickBooks</Link> and <Link href="/accounting/guides/accounting-for-contractors" className={linkGreen}>accounting for contractors</Link>.</p>
                  </div>
                </section>
                <section id="hybrid-model" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Split work to control cost.">Hybrid DIY + Bookkeeper Models</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many owners send invoices and approve expenses; a bookkeeper reconciles and closes the month. That cuts cost versus full outsourcing while preserving accuracy. Beginners should still get chart-of-accounts setup reviewed—see{" "}
                      <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link>.
                    </p>
                    <p>
                      If you are learning the tool, factor training time against bookkeeper rates in <Link href="/accounting/guides/how-hard-is-it-to-learn-quickbooks" className={linkGreen}>how hard QuickBooks is to learn</Link>.
                    </p>
                  </div>
                </section>
                <section id="hire-questions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Get apples-to-apples quotes.">Questions to Ask Before You Hire</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Is pricing fixed monthly or hourly after a transaction threshold?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Do you work in QuickBooks Online with accountant access?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>What is included—sales tax, payroll, 1099s, or reconciliation only?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Who handles CPA questions at year-end?</span></li>
                    </ul>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack does not sell bookkeeping services—we publish independent software reviews and owner guides. Cost ranges here reflect common SMB patterns from advisor interviews and marketplace norms, not a single vendor quote. Validate with local ProAdvisors. See <Link href="/methodology" className={linkGreen}>methodology</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile one month yourself to see how many transactions you truly have.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Get two quotes—local bookkeeper and QuickBooks Live if available for your region.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Read <Link href="/accounting/guides/can-businesses-write-off-quickbooks" className={linkGreen}>writing off QuickBooks and bookkeeping fees</Link> with your CPA (not tax advice).</span></li>
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
              <GuideSidebar title="QuickBooks stack" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Much Do Businesses Pay for QuickBooks Bookkeeping? (2026) | BeltStack",
    description:
      "Typical QuickBooks bookkeeping and CPA costs for small businesses, hybrid DIY models, questions to ask bookkeepers, and what drives pricing up or down.",
    keywords: [
      "QuickBooks bookkeeping cost",
      "QuickBooks bookkeeper price",
      "outsource QuickBooks bookkeeping",
      "QuickBooks vs bookkeeper",
      "small business bookkeeping fees",
    ],
  };
}
