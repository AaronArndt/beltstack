import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/do-you-have-to-buy-quicken-every-year";

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
    q: "Is Quicken a subscription?",
    a: "Modern Quicken products—including Simplifi and current Desktop—use subscription pricing. You pay to maintain access, bank downloads, and updates—not a one-time perpetual license in most new purchases.",
  },
  {
    q: "Do I have to renew Quicken Desktop every year?",
    a: "Desktop subscriptions typically renew annually (or on the billing cycle you choose). Lapsed subscriptions can limit online features and updates—confirm Quicken's current Desktop terms.",
  },
  {
    q: "Is annual Quicken cheaper than monthly?",
    a: "Annual billing often lowers the effective monthly cost for Simplifi and Desktop plans. Compare against month-to-month if you might switch tools mid-year.",
  },
  {
    q: "What happens if I do not renew Quicken?",
    a: "Access and bank feeds generally stop or become limited. Export data before cancellation. See can you keep using Quicken without a subscription.",
  },
  {
    q: "Is Quicken Desktop a one-time purchase anymore?",
    a: "New Desktop purchases are typically subscription-based with online entitlements. Legacy perpetual licenses exist for older installs but are not what most new buyers receive—read plan terms at checkout.",
  },
  {
    q: "How does Quicken subscription compare to QuickBooks?",
    a: "Both renew to maintain access and updates. Quicken targets personal finance at lower price points; QuickBooks is business accounting with higher per-month cost—see what does QuickBooks cost per month.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Business subscription", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free core accounting", reviewHref: getAccountingReviewUrl("wave") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Cloud accounting", reviewHref: getAccountingReviewUrl("xero") },
];

export default function DoYouHaveToBuyQuickenEveryYearPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken Every Year</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Do You Have to Buy Quicken Every Year?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Yes for most users today—Quicken runs on subscriptions. Here is how Simplifi and Desktop renewals work.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">You typically pay for Quicken every year (or on your chosen billing cycle) to keep using it.</strong> Unlike old boxed software you bought once, current Quicken Simplifi and Desktop models treat access like a subscription—similar to QuickBooks Online for business.
                    </p>
                    <p>
                      Simplifi pricing: <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>how much does Quicken Simplifi cost</Link>. Business parallel:{" "}
                      <Link href="/accounting/guides/do-you-have-to-buy-quickbooks-every-year" className={linkGreen}>do you have to buy QuickBooks every year</Link>.
                    </p>
                    <p>
                      If you are comparing total cost of ownership, include alternatives from <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link> and export plans in <Link href="/accounting/guides/can-you-keep-using-quicken-without-a-subscription" className={linkGreen}>using Quicken without a subscription</Link> before letting renewal auto-charge.
                    </p>
                  </div>
                </section>
                <section id="models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Simplifi vs Desktop renewal.">Subscription Models</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Quicken Simplifi</strong> — Cloud subscription; stops when billing stops.</p>
                    <p><strong className="text-[#1A2D48]">Quicken Desktop</strong> — Installed software with subscription entitlements for updates and online services—read plan details at purchase.</p>
                  </div>
                </section>
                <section id="cancel" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Before renewal date.">If You Choose Not to Renew</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export data and pick an alternative from <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link>. See{" "}
                      <Link href="/accounting/guides/can-you-keep-using-quicken-without-a-subscription" className={linkGreen}>using Quicken without a subscription</Link>.
                    </p>
                  </div>
                </section>
                <section id="budget" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Plan total cost of ownership.">Budgeting for Annual Quicken Cost</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Include renewal in your annual personal finance software budget alongside tax prep and investment tools. Annual prepay often beats monthly if you will stay 12 months—compare effective monthly cost in <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Simplifi pricing</Link>.</p>
                    <p>Business owners should budget QuickBooks or Wave separately; do not count Quicken renewal as your business software line item.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack explains subscription models in editorial guides and tests products in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>. Quicken billing terms change; confirm renewal dates in your account.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Quicken Simplifi cost</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-you-keep-using-quicken-without-a-subscription" className={linkGreen}>Quicken without subscription</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/do-you-have-to-buy-quickbooks-every-year" className={linkGreen}>Buy QuickBooks every year</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting" className={linkGreen}>Accounting software hub</Link></span></li>
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
              <GuideSidebar title="Subscriptions" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Do You Have to Buy Quicken Every Year? | BeltStack Guide",
    description:
      "Do you have to buy Quicken every year? Yes—subscriptions for Simplifi and Desktop, annual vs monthly billing, budgeting tips, and what happens if you stop renewing.",
    keywords: ["Quicken subscription", "buy Quicken every year", "Quicken annual cost", "Quicken renewal"],
  };
}
