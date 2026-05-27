import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-does-quickbooks-cost-per-month";

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
    q: "How much does QuickBooks Online cost per month in 2026?",
    a: "Entry plans for solo businesses often start around $30/month; mid tiers with more users and features commonly run $50–$90/month; Advanced can exceed $100/month before add-ons. Intuit changes pricing—confirm current rates on their site and in our QuickBooks Online review before buying.",
  },
  {
    q: "What add-ons increase QuickBooks monthly cost?",
    a: "Payroll, time tracking, extra users, payment processing fees, and industry modules can add materially to the headline subscription. Budget total cost, not just the base plan price—see cheapest way to use QuickBooks for ways to trim spend.",
  },
  {
    q: "Is QuickBooks more expensive than Xero?",
    a: "QuickBooks often has a higher entry price than Xero; total cost depends on tier, users, and add-ons for both. See QuickBooks vs Xero comparison, accounting software pricing, and is QuickBooks worth it for value context.",
  },
  {
    q: "Can I pay QuickBooks annually to save money?",
    a: "Intuit sometimes offers annual billing discounts versus month-to-month. Compare annual commitment savings against flexibility if your business size may change mid-year. Accountant wholesale programs may beat public annual rates—ask your CPA.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Full accounting", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Often lower entry price", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free core accounting", reviewHref: getAccountingReviewUrl("wave") },
];

export default function WhatDoesQuickBooksCostPerMonthPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Cost</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Does QuickBooks Cost Per Month?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    QuickBooks Online plan tiers, typical monthly ranges, and add-ons that push total cost above the advertised price.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks pricing searches spike when Intuit changes plan names or raises list rates. Owners want a straight monthly number—but the honest answer depends on tier, user count, and whether you bundle payroll or payments.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">QuickBooks Online pricing is tiered by features and users</strong>, not a single flat rate. Most small businesses pay between roughly <strong className="text-[#1A2D48]">$30 and $100+ per month</strong> for the subscription alone, before payroll, payments, or extra users. Intuit updates list prices—treat numbers here as planning ranges and verify on Intuit&apos;s site at purchase time.
                    </p>
                    <p>
                      Our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> and{" "}
                      <Link href="/accounting/guides/accounting-software-pricing" className={linkGreen}>accounting software pricing</Link> guide explain how to compare total cost across vendors. If you need to minimize spend, start with{" "}
                      <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link> and{" "}
                      <Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>free trial options</Link>—not a permanent free tier.
                    </p>
                  </div>
                </section>
                <section id="tiers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How plans usually map to business size.">QuickBooks Online Plan Tiers (Typical Ranges)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Plan names change over time, but the pattern is consistent: lower tiers for solos, mid tiers for growing teams with bill pay and more users, top tiers for advanced reporting and scale.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Entry / Simple Start–class</strong> — often ~$30/month: basics for one user, invoicing, expenses, reports.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Plus-class</strong> — often ~$50–$90/month: more users, inventory or project features depending on version.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Advanced</strong> — often $100+/month: more capacity, advanced reporting, batch workflows.</span></li>
                    </ul>
                    <p>
                      To spend less, read <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link>. To judge value, see <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.
                    </p>
                  </div>
                </section>
                <section id="addons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Budget beyond the subscription line item.">Add-Ons That Increase Monthly Cost</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payroll</strong> — per employee fees on top of accounting; compare <Link href="/payroll" className={linkGreen}>payroll software</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Extra users</strong> — mid and top tiers include more seats; adding users on lower tiers may force an upgrade.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment processing</strong> — card and ACH fees separate from subscription.</span></li>
                    </ul>
                    <p>
                      Compare alternatives: <Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link>,{" "}
                      <Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link>, and{" "}
                      <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link>.
                    </p>
                  </div>
                </section>
                <section id="total-cost" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Build a 12-month budget, not a headline quote.">How to Calculate Total Monthly Cost</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Add subscription + payroll per employee + payment processing + any marketplace apps you rely on. Divide by 12 if you pay annually. Compare that total to{" "}
                      <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> or{" "}
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> at the same feature level—not entry-tier marketing prices on different products.
                    </p>
                    <p>
                      Then ask whether the features justify the bill:{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> and{" "}
                      <Link href="/accounting/guides/disadvantages-of-quickbooks" className={linkGreen}>disadvantages of QuickBooks</Link> balance the pricing picture.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>Cheapest way to use QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>Can I get QuickBooks for free?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-software-pricing" className={linkGreen}>Accounting software pricing</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
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
              <GuideSidebar title="Compare pricing" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Does QuickBooks Cost Per Month? | BeltStack Guide",
    description:
      "QuickBooks Online monthly cost in 2026: typical plan tiers ($30–$100+), payroll and payment add-ons, and how total price compares to Xero and Wave.",
  };
}
