import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/do-you-have-to-buy-quickbooks-every-year";

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
    q: "Is QuickBooks a one-time purchase or subscription?",
    a: "QuickBooks Online is a subscription—you pay monthly or annually while you use it. QuickBooks Desktop historically used annual licenses; most new small businesses choose Online.",
  },
  {
    q: "What happens if I stop paying for QuickBooks?",
    a: "You typically lose access to enter new transactions and may have read-only or export windows depending on Intuit policy at cancellation. Export your data before canceling.",
  },
  {
    q: "Is annual QuickBooks billing cheaper than monthly?",
    a: "Annual prepay often discounts versus month-to-month. Compare savings against the risk of switching tools mid-year. See cheapest way to use QuickBooks.",
  },
  {
    q: "Do I need to buy a new QuickBooks license every year for Desktop?",
    a: "Desktop versions have used annual updates or subscriptions in recent years—check Intuit's current Desktop offering. Online users renew continuously rather than buying boxed software yearly.",
  },
  {
    q: "Can I pause QuickBooks instead of canceling?",
    a: "Intuit's policies change—some businesses downgrade tiers or export data rather than pause. Plan exports and accountant handoff before any billing change.",
  },
  {
    q: "Is QuickBooks tax deductible every year?",
    a: "Ongoing subscription fees are commonly treated as business software expenses when used for the company—confirm categories with your CPA. See can businesses write off QuickBooks.",
  },
  {
    q: "Do I lose my data if I do not renew QuickBooks?",
    a: "You should export reports and transaction detail before cancellation. Migration guides help move chart of accounts and balances to Xero, Wave, or another platform.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Subscription cloud", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "No subscription for core", reviewHref: getAccountingReviewUrl("wave") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Also subscription", reviewHref: getAccountingReviewUrl("xero") },
];

export default function DoYouHaveToBuyQuickBooksEveryYearPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Every Year</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Do You Have to Buy QuickBooks Every Year?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    QuickBooks Online is a subscription—you pay while you use it. Here is how billing works and what happens when you stop.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">With QuickBooks Online, you do not buy perpetual software once—you subscribe.</strong> That means monthly or annual charges continue for as long as you keep the account active. It is similar to other cloud accounting tools, not a one-time boxed purchase from decades ago.
                    </p>
                    <p>
                      The question usually comes from owners who remember Desktop CDs or want to know if they can pay once and own the file forever. Online stores data in Intuit&apos;s cloud; your access depends on an active subscription. Budget it like payroll or insurance—a recurring operating cost.
                    </p>
                    <p>
                      Pricing detail: <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>. Savings tactics:{" "}
                      <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link>. Worth it?{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.
                    </p>
                  </div>
                </section>
                <section id="online-vs-desktop" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Online subscription vs Desktop licensing history.">QuickBooks Online vs Desktop</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most new small businesses choose <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> with automatic updates included in the subscription. Desktop users should verify Intuit&apos;s current renewal model—annual fees or subscriptions still apply in practice even when software is installed locally.
                    </p>
                    <p>
                      If Desktop renewal feels expensive relative to features you use, read{" "}
                      <Link href="/accounting/guides/when-should-a-business-stop-using-quickbooks" className={linkGreen}>when to stop using QuickBooks</Link> before auto-renewing.
                    </p>
                  </div>
                </section>
                <section id="cancel" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Plan exports before you turn off billing.">If You Stop Renewing</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before canceling, export reports and coordinate migration with your accountant. Switching platforms? Follow{" "}
                      <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>how to switch accounting software</Link>.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Download P&amp;L, balance sheet, and general ledger for the tax year in progress.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Export customer, vendor, and chart of accounts lists if your new tool supports import.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconcile through the final month so opening balances migrate cleanly.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="budget-renewal" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Plan annual vs monthly without surprise renewals.">How to Budget QuickBooks Renewals</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Annual prepay can lower per-month cost but locks you in unless you are confident you will stay on QuickBooks all year. Month-to-month costs more per month but eases exit if you are testing alternatives. Add payroll, payments, and time-tracking add-ons to your budget—they renew separately from base accounting tiers.
                    </p>
                    <p>
                      Record subscription invoices in QuickBooks under the expense account your CPA recommends—see{" "}
                      <Link href="/accounting/guides/can-businesses-write-off-quickbooks" className={linkGreen}>writing off QuickBooks</Link> (general education, not tax advice).
                    </p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack tracks QuickBooks pricing in workflow-based reviews—we test whether features justify subscription tiers for owners, not list every list price on Intuit&apos;s marketing page. Guides like this explain billing models; our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> covers fit and limits. See <Link href="/methodology" className={linkGreen}>methodology</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Compare monthly vs annual billing in your Intuit account before renewal day.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Audit add-ons you no longer use—downgrade tiers if reports prove you do not need Plus or Advanced.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>If leaving, read <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link> and plan migration with your CPA.</span></li>
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
              <GuideSidebar title="Subscription accounting" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Do You Have to Buy QuickBooks Every Year? (2026) | BeltStack",
    description:
      "QuickBooks Online is a subscription, not a one-time purchase. Monthly vs annual billing, Desktop differences, cancellation exports, and how to budget renewals.",
    keywords: [
      "QuickBooks subscription",
      "buy QuickBooks every year",
      "QuickBooks annual vs monthly",
      "cancel QuickBooks",
      "QuickBooks Online pricing",
    ],
  };
}
