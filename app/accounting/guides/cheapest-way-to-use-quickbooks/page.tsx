import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/cheapest-way-to-use-quickbooks";

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
    q: "What is the cheapest QuickBooks Online plan?",
    a: "The lowest tier (often marketed as Simple Start or similar) is the cheapest way to access core bookkeeping and invoicing for one user. Upgrade only when you hit user, inventory, or reporting limits—not preemptively. Confirm current plan names in our QuickBooks Online review.",
  },
  {
    q: "Does QuickBooks offer discounts for small business?",
    a: "Intuit runs periodic promotions, partner offers, and accountant wholesale programs. A CPA or bookkeeper on QuickBooks Online Accountant may pass through lower client pricing than public list rates—ask before you buy at list price.",
  },
  {
    q: "Is annual billing cheaper than monthly QuickBooks?",
    a: "Annual prepay sometimes discounts versus month-to-month. Weigh savings against lock-in if you might switch to Xero or Wave within the year. See what does QuickBooks cost per month for tier context.",
  },
  {
    q: "When is a free tool cheaper than discounted QuickBooks?",
    a: "If you only need basic invoicing and simple books, Wave’s free core accounting may cost less than any QuickBooks tier once you include add-ons. See can I get QuickBooks for free, QuickBooks alternatives, and is QuickBooks worth it.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Right-sized tier", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free alternative", reviewHref: getAccountingReviewUrl("wave") },
  { name: "Zoho Books", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Value pricing", reviewHref: getAccountingReviewUrl("zoho-books") },
];

export default function CheapestWayToUseQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Cheapest QuickBooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is the Cheapest Way to Use QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Right-size your plan, avoid unused add-ons, and use accountant or annual discounts—the practical ways to lower QuickBooks spend.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Owners searching for the cheapest QuickBooks usually want the real product—not a knockoff—and hope there is a coupon, wholesale path, or tier they are missing. There is no permanent free QuickBooks Online, but you can often pay less than the advertised sticker price.
                    </p>
                    <p>
                      The cheapest way to use QuickBooks is <strong className="text-[#1A2D48]">not</strong> hunting a hidden free tier—it is paying for the <em>lowest plan that still covers your real workflows</em> and skipping payroll, time, and payment add-ons until you need them. Many businesses overbuy Plus or Advanced features they never open.
                    </p>
                    <p>
                      Baseline pricing context: <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>. Full product detail: <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link>. If discounts still feel high, compare{" "}
                      <Link href="/accounting/guides/disadvantages-of-quickbooks" className={linkGreen}>QuickBooks drawbacks</Link> against{" "}
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> or{" "}
                      <Link href={getAccountingReviewUrl("zoho-books")} className={linkGreen}>Zoho Books</Link>.
                    </p>
                  </div>
                </section>
                <section id="strategies" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tactics that actually lower your bill.">Ways to Pay Less for QuickBooks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Start on the entry tier</strong> until you need multi-user access, inventory, or advanced reporting.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Buy through your accountant</strong> — firms on QuickBooks Online Accountant sometimes offer wholesale client subscriptions.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Use annual billing</strong> when you are confident you will stay 12+ months.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Keep payroll separate</strong> until headcount justifies bundled QuickBooks Payroll vs a third-party provider.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Audit integrations</strong> — redundant apps can force higher tiers; remove unused marketplace subscriptions.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When the cheapest QuickBooks is still too much.">If Cost Is the Main Constraint</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> provides free core accounting. <Link href={getAccountingReviewUrl("zoho-books")} className={linkGreen}>Zoho Books</Link> often undercuts QuickBooks at entry tiers. Compare{" "}
                      <Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link> and read{" "}
                      <Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>can I get QuickBooks for free</Link> for trials and promotions—not permanent free access.
                    </p>
                  </div>
                </section>
                <section id="avoid-overbuy" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The most common way owners overspend.">Features You Can Skip at First</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory, advanced reporting, and multi-user seats push you to higher tiers. If you are a service solo or micro-team, entry-tier invoicing plus reconciliation may be enough for a year. Add payroll only when you have W-2 employees; use a standalone payroll provider if bundled QuickBooks Payroll is not the best deal.
                    </p>
                    <p>
                      Before upgrading, read <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> and <Link href="/accounting/guides/what-do-small-businesses-use-quickbooks-for" className={linkGreen}>what businesses use QuickBooks for</Link> so you pay for workflows you will actually run monthly.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>What does QuickBooks cost per month?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>Can I get QuickBooks for free?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-software-pricing" className={linkGreen}>Accounting software pricing</Link></span></li>
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
              <GuideSidebar title="Lower-cost options" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Is the Cheapest Way to Use QuickBooks? | BeltStack Guide",
    description:
      "Lower QuickBooks spend: right-size your plan, use accountant wholesale pricing, skip unused add-ons, and know when Wave beats discounted QBO.",
  };
}
