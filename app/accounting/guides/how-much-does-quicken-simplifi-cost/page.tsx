import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/how-much-does-quicken-simplifi-cost";

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
    q: "How much is Quicken Simplifi per month?",
    a: "Quicken Simplifi is commonly marketed around $3–$6 per month on annual billing, with higher month-to-month rates if you pay monthly. Promotions change—confirm current pricing on Quicken.com before subscribing.",
  },
  {
    q: "Is Quicken Simplifi cheaper than classic Quicken?",
    a: "Simplifi often undercuts premium Quicken Desktop bundles for users who only need cloud budgeting and aggregated accounts. Power users with investments and rental property tracking may need pricier tiers.",
  },
  {
    q: "Does Simplifi include business accounting?",
    a: "No. Simplifi targets personal and household finance. Business invoicing and books belong in QuickBooks, FreshBooks, or Wave—see can Quicken do invoicing.",
  },
  {
    q: "Is there a free trial for Quicken Simplifi?",
    a: "Quicken frequently offers trials or discounted first periods. Trials are not the same as a permanent free tier—see can businesses use Quicken for free.",
  },
  {
    q: "Is Quicken Simplifi worth it vs YNAB or Monarch?",
    a: "Worth it if you want Intuit-backed bank aggregation and a simpler UI than classic Desktop. YNAB and Monarch compete on budgeting philosophy—compare trials on your real accounts before annual prepay.",
  },
  {
    q: "Does Quicken Simplifi price include a spouse or partner?",
    a: "Plans and household sharing rules change—check Quicken.com at checkout. Business users still need separate QuickBooks or Wave seats for company books.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Business accounting", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free business books", reviewHref: getAccountingReviewUrl("wave") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancer billing", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function HowMuchDoesQuickenSimplifiCostPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken Simplifi Cost</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Much Does Quicken Simplifi Cost?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Typical Quicken Simplifi pricing ranges, annual vs monthly billing, and how Simplifi compares to classic Quicken and business tools.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Quicken Simplifi typically costs a few dollars per month on annual plans</strong>—often less than premium Quicken Desktop packages. Exact list prices change with promotions; treat figures here as planning ranges and verify on Quicken&apos;s site at checkout.
                    </p>
                    <p className="text-sm text-neutral-600">BeltStack does not sell Quicken—we compare software so buyers can budget honestly.</p>
                    <p>
                      Business comparison: <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>QuickBooks monthly cost</Link>. Personal alternatives: <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link>.
                    </p>
                  </div>
                </section>
                <section id="billing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Annual vs monthly savings.">Monthly vs Annual Billing</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Annual prepay usually lowers the effective monthly rate versus paying month-to-month. Weigh savings against commitment if you might switch to Monarch, YNAB, or business accounting mid-year.</p>
                    <p>Renewal: <Link href="/accounting/guides/do-you-have-to-buy-quicken-every-year" className={linkGreen}>do you have to buy Quicken every year</Link>.</p>
                  </div>
                </section>
                <section id="compare" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Personal vs business spend.">How Simplifi Compares to Business Accounting Cost</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Simplifi is often <strong className="text-[#1A2D48]">cheaper per month than QuickBooks</strong> because it is not business accounting. Do not choose Simplifi to save money on LLC books—you will pay twice or rebuild later. Compare <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>QuickBooks monthly cost</Link> and <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> for business.</p>
                    <p>Personal alternatives: <Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>best alternatives to Quicken</Link> and <Link href="/accounting/guides/mint-vs-quicken" className={linkGreen}>Mint vs Quicken</Link> (historical).</p>
                  </div>
                </section>
                <section id="included" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What you are paying for.">What Simplifi Pricing Typically Includes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Bank and card aggregation</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Spending plans and cash-flow views</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Mobile apps and alerts</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Not: business invoicing, payroll, or CPA-ready business ledgers</span></li>
                    </ul>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack tracks accounting software pricing in guides and independent reviews—we do not sell Quicken. Confirm live prices at checkout; see <Link href="/methodology" className={linkGreen}>methodology</Link> and <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/do-you-have-to-buy-quicken-every-year" className={linkGreen}>Quicken annual subscription</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-quicken-do-invoicing" className={linkGreen}>Can Quicken do invoicing</Link></span></li>
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
              <GuideSidebar title="Compare costs" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "How Much Does Quicken Simplifi Cost? | BeltStack Guide",
    description:
      "Quicken Simplifi cost in 2026: typical monthly and annual pricing, trials, what's included, and how Simplifi compares to QuickBooks and free business tools.",
    keywords: ["Quicken Simplifi cost", "Quicken Simplifi price", "Quicken subscription", "Quicken monthly cost"],
  };
}
