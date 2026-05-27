import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-you-keep-using-quicken-without-a-subscription";

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
    q: "Can I use Quicken after my subscription expires?",
    a: "Usually not for full functionality—cloud features, bank downloads, and updates typically stop when the subscription ends. Quicken Desktop may allow read-only or limited access depending on version and policy; check Intuit's current terms before canceling.",
  },
  {
    q: "Does Quicken Desktop work without internet?",
    a: "Desktop can run locally, but bank feed updates and subscription validation often still require periodic online checks. A lapsed subscription is different from working fully offline.",
  },
  {
    q: "How do I export Quicken data before canceling?",
    a: "Export reports and transaction lists to CSV or QIF where supported, and download statements you will need for taxes. Migrate business data to QuickBooks or Wave if you are switching tools.",
  },
  {
    q: "What happens to Quicken Simplifi without paying?",
    a: "Simplifi is subscription-based cloud software—nonpayment typically suspends access. Plan exports before renewal dates. See do you have to buy Quicken every year.",
  },
  {
    q: "Can I open Quicken Desktop files without renewing?",
    a: "Policy varies by version and purchase date. Some users report read-only access to local data after lapse; bank feeds and updates usually stop. Export while you still have full access rather than assuming perpetual read-only rights.",
  },
  {
    q: "Should I switch to QuickBooks if Quicken subscription ends?",
    a: "Switch to QuickBooks or Wave for business books only—keep personal accounts in Quicken alternatives like Simplifi if needed. See do Quicken and QuickBooks work together for dual-tool workflows.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Business migration", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free alternative", reviewHref: getAccountingReviewUrl("wave") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Cloud books", reviewHref: getAccountingReviewUrl("xero") },
];

export default function CanYouKeepUsingQuickenWithoutASubscriptionPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken Without Subscription</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can You Keep Using Quicken Without a Subscription?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    What stops when Quicken subscription ends, Desktop vs Simplifi access, and how to export data before you cancel.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">You usually cannot keep using Quicken with full features without an active subscription.</strong> Modern Quicken products—including Simplifi and current Desktop offerings—tie bank downloads, updates, and support to paid renewal. Do not assume old perpetual-license behavior unless you own a specific legacy version and understand its limits.
                    </p>
                    <p>
                      Renewal model: <Link href="/accounting/guides/do-you-have-to-buy-quicken-every-year" className={linkGreen}>do you have to buy Quicken every year</Link>. Alternatives: <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Quicken Simplifi</strong> is cloud-only—no subscription means no app access. <strong className="text-[#1A2D48]">Quicken Desktop</strong> may retain local file access in some cases, but online banking, updates, and support typically require renewal. Treat any post-lapse access as temporary until you confirm current Quicken policy in your account.
                    </p>
                    <p className="text-sm text-neutral-600">Intuit/Quicken policies change—verify cancellation and export options in your account before your subscription lapses.</p>
                  </div>
                </section>
                <section id="simplifi-vs-desktop" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Different rules by product line.">Simplifi vs Desktop After Lapse</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Simplifi</strong> — Data lives in the cloud; export budgets and transactions before canceling. See <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Simplifi pricing</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Desktop</strong> — Local data files may remain on your PC; schedule exports (QIF, CSV, reports) before renewal ends. Migration to business tools: <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>switch accounting software</Link>.</p>
                  </div>
                </section>
                <section id="before-cancel" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Protect your records before lapse.">Before You Cancel</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Export transactions and category summaries you need for taxes.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Download PDF statements from your bank as backup.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>If moving a business to QuickBooks, read <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>how to switch accounting software</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="If you are not renewing.">Alternatives When Subscription Ends</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Personal: <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link>. Business: <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> or <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link>. Renewal model: <Link href="/accounting/guides/do-you-have-to-buy-quicken-every-year" className={linkGreen}>buy Quicken every year</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack documents accounting software policies in editorial guides and tests alternatives in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>. We are not Quicken support; confirm lapse behavior in your subscription settings.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/do-you-have-to-buy-quicken-every-year" className={linkGreen}>Do you have to buy Quicken every year</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>Best alternatives to Quicken</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>How to switch accounting software</Link></span></li>
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
              <GuideSidebar title="Migration targets" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Can You Keep Using Quicken Without a Subscription? | BeltStack Guide",
    description:
      "What happens when your Quicken subscription ends: Simplifi vs Desktop access, export steps before canceling, and alternatives if you stop paying in 2026.",
    keywords: ["Quicken without subscription", "cancel Quicken", "Quicken export", "Quicken Simplifi access"],
  };
}
