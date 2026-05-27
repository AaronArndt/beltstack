import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/can-i-get-quickbooks-for-free";

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
    q: "Is there a free version of QuickBooks Online?",
    a: "Intuit does not offer a permanently free QuickBooks Online tier for ongoing business use. You may get time-limited trials or promotional discounts, but expect to pay a monthly subscription after the trial ends. See what does QuickBooks cost per month for ongoing pricing.",
  },
  {
    q: "How long is the QuickBooks free trial?",
    a: "Trial length varies by promotion—commonly 30 days for new accounts. Confirm terms at signup; cancel before renewal if you do not plan to subscribe. Export data before the trial ends if you might switch to Wave or Xero.",
  },
  {
    q: "Can students or nonprofits get QuickBooks free?",
    a: "Intuit occasionally runs education or nonprofit programs with discounted or donated access. These are limited programs with eligibility rules—not the same as a public free tier for all businesses. Verify current programs on Intuit’s site.",
  },
  {
    q: "What is the best free alternative to QuickBooks?",
    a: "Wave is the most cited free core accounting option for small businesses. Zoho Books and FreshBooks have low entry prices but are not fully free. See QuickBooks alternatives, QuickBooks vs Wave, and our QuickBooks Online review.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free accounting", reviewHref: getAccountingReviewUrl("wave") },
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Trial then paid", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Zoho Books", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Low-cost paid", reviewHref: getAccountingReviewUrl("zoho-books") },
];

export default function CanIGetQuickBooksForFreePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Free</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Can I Get QuickBooks for Free?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    QuickBooks is not free long-term—but trials, discounts, and truly free alternatives like Wave are worth understanding before you sign up.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      &quot;Free QuickBooks&quot; searches spike from new business owners who want Intuit&apos;s brand without a monthly bill. Marketing pages sometimes highlight $0 trials—which is not the same as free accounting forever.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">You generally cannot get QuickBooks Online for free indefinitely.</strong> Intuit is a paid subscription business. What you <em>can</em> get: time-limited trials, introductory discounts, accountant-subsidized pricing, or education/nonprofit programs with eligibility requirements.
                    </p>
                    <p>
                      Searching for free QuickBooks often means you want low-cost bookkeeping—not the QuickBooks brand specifically. Compare <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link>, read <Link href="/accounting/guides/accounting-software-pricing" className={linkGreen}>accounting software pricing</Link>, and browse <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link>. To lower paid QBO cost after a trial, see{" "}
                      <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="free-options" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trials and programs—not a permanent free tier.">Ways to Access QuickBooks at No or Low Cost</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Free trial</strong> — test features before paying; export data if you do not continue.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Promotional pricing</strong> — first months discounted; read renewal terms.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Accountant wholesale</strong> — see <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When free matters more than the brand.">Free and Low-Cost Alternatives</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> offers free core accounting; you pay for payroll and payment processing if used. <Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link> explains tradeoffs. After outgrowing Wave, many businesses move to QuickBooks or Xero—see <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>how to switch accounting software</Link>.
                    </p>
                    <p>
                      Ongoing QuickBooks cost: <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>. Worth it?                       <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.
                    </p>
                  </div>
                </section>
                <section id="trial-tips" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Get value without surprise charges.">Making the Most of a QuickBooks Trial</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Connect your business bank, send a real invoice, and reconcile one month during the trial—that tells you if the UI fits before you pay. Set a calendar reminder before renewal, confirm which tier you selected, and export reports if you might leave.
                    </p>
                    <p>
                      Our <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> and{" "}
                      <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>beginner guide</Link> help you test the right workflows, not just click around empty screens.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>Cheapest way to use QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>What does QuickBooks cost per month?</Link></span></li>
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
              <GuideSidebar title="Free accounting" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Can I Get QuickBooks for Free? | BeltStack Guide",
    description:
      "QuickBooks is not free long-term—see trials, discounts, accountant pricing, and free alternatives like Wave when you need $0 accounting software.",
  };
}
