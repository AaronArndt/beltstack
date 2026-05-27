import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/mint-vs-quicken";

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
    q: "Is Mint still available?",
    a: "Intuit discontinued the Mint personal finance app. Users were directed toward Credit Karma for credit-related features, not a full Mint replacement for budgeting and net worth tracking.",
  },
  {
    q: "What was the difference between Mint and Quicken?",
    a: "Mint was free, ad-supported, and strong at aggregating accounts and categorizing spending. Quicken was paid, deeper on investments, reporting, and manual control—closer to desktop register-style finance.",
  },
  {
    q: "What replaced Mint for Quicken users?",
    a: "Many former Mint users chose Quicken Simplifi, Monarch Money, or YNAB. Business owners still need QuickBooks or Wave—not personal finance apps. See best alternatives to Quicken.",
  },
  {
    q: "Was Mint good for small business?",
    a: "Mint was personal finance, not business accounting. Small businesses should use QuickBooks, FreshBooks, or Wave for invoicing and tax-ready books.",
  },
  {
    q: "Is Credit Karma a replacement for Mint?",
    a: "Credit Karma focuses on credit scores and offers—not full household budgeting or net worth tracking like Mint or Quicken. Many former Mint users chose Quicken Simplifi, Monarch, or YNAB instead.",
  },
  {
    q: "Which was cheaper, Mint or Quicken?",
    a: "Mint was free ad-supported; Quicken required a subscription. Quicken offered deeper reports and investment tracking; Mint optimized for automatic categorization with less manual control.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Business books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free business accounting", reviewHref: getAccountingReviewUrl("wave") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancers", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function MintVsQuickenPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Mint vs Quicken</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is the Difference Between Mint and Quicken?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How Mint compared to Quicken before Mint shut down—and where personal finance users go in 2026.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Mint and Quicken both tracked personal money, but with opposite pricing models and depth.</strong> Mint was free and automatic; Quicken was paid and deeper. Intuit <strong className="text-[#1A2D48]">shut down Mint in 2024</strong>, so new users cannot sign up—this guide explains the historical difference and current alternatives.
                    </p>
                    <p>
                      If you landed here after Mint closed, you are really asking what to use <em>now</em>. Quicken Simplifi is the closest in-brand successor; Monarch and YNAB compete on modern budgeting UX. None of these replace <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks</Link> for business books.
                    </p>
                    <p>
                      Compare current options in <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link> and <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Simplifi pricing</Link>.
                    </p>
                  </div>
                </section>
                <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="At a glance before Mint closed.">Mint vs Quicken at a Glance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Price</strong> — Mint: free with ads/partners. Quicken: subscription.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Depth</strong> — Quicken: investments, loans, detailed reports. Mint: spending snapshots and goals.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Control</strong> — Quicken: manual categories and power-user workflows. Mint: heavy automation.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Business use</strong> — Neither replaced QuickBooks; see <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="today" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where to go now.">What to Use Today</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Personal: <Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Quicken Simplifi</Link>, Monarch, YNAB—compare in{" "}
                      <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link>. Business:{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks</Link> or <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link>.
                    </p>
                  </div>
                </section>
                <section id="shutdown" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why Mint users had to move.">What Happened When Mint Shut Down</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Intuit redirected many Mint users toward Credit Karma for credit monitoring—not a like-for-like budgeting replacement. Export habits mattered: users who relied on Mint&apos;s automatic categorization needed to rebuild category rules in a new app or accept different automation behavior.</p>
                    <p>If you still have old Mint exports, migrate into a new personal finance tool before tax season rather than leaving years of history in a dead format.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack documents personal and business accounting categories separately in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>. Mint shutdown dates and successor products change; verify on vendor sites at signup.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>Best alternatives to Quicken</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-businesses-use-quicken-for-free" className={linkGreen}>Can businesses use Quicken for free</Link></span></li>
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
              <GuideSidebar title="Business accounting" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Mint vs Quicken: What Is the Difference? | BeltStack Guide",
    description:
      "Mint vs Quicken explained: pricing, features, Mint shutdown in 2024, Credit Karma limits, and the best personal and business finance alternatives in 2026.",
    keywords: ["Mint vs Quicken", "Mint shutdown", "Mint replacement", "Quicken Simplifi", "personal finance software"],
  };
}
