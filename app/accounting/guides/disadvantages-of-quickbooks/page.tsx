import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/disadvantages-of-quickbooks";

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
    q: "What is the biggest complaint about QuickBooks?",
    a: "Cost and creeping add-on fees top many lists, followed by interface complexity for very small teams and occasional support frustration. Whether that matters depends on how much you use reporting, integrations, and accountant workflows—see is QuickBooks worth it for the upside.",
  },
  {
    q: "Is QuickBooks too complicated for small business?",
    a: "It can feel heavy if you only need simple invoicing. Freelancers often prefer FreshBooks or Wave; growing SMBs usually benefit from QuickBooks depth once transactions and accounts multiply. Beginners should read can a beginner use QuickBooks and how hard is it to learn QuickBooks.",
  },
  {
    q: "Are there hidden fees in QuickBooks?",
    a: "Payment processing, payroll per employee, and tier upgrades are the usual surprises—not hidden line items, but costs owners forget to budget. See what does QuickBooks cost per month and cheapest way to use QuickBooks.",
  },
  {
    q: "What are good alternatives if QuickBooks disadvantages bother me?",
    a: "Xero for a full alternative, FreshBooks for freelancers, Wave for free core accounting, Zoho Books for value. See QuickBooks alternatives, QuickBooks vs Xero, and our QuickBooks Online review before you switch.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Common alternative", reviewHref: getAccountingReviewUrl("xero") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Simpler billing", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free accounting", reviewHref: getAccountingReviewUrl("wave") },
];

export default function DisadvantagesOfQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">QuickBooks Disadvantages</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Are the Disadvantages of QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Honest drawbacks—pricing, complexity, support, and lock-in—and when they matter enough to choose an alternative.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      QuickBooks dominates small business accounting in the U.S., so negative reviews stand out—price hikes, cluttered menus, support wait times. Those complaints are real for some owners and irrelevant for others who depend on accountant familiarity and integrations.
                    </p>
                    <p>
                      QuickBooks Online is popular for good reason, but it is not flawless. BeltStack documents disadvantages transparently so you can weigh them against ecosystem fit—not because every business should switch.
                    </p>
                    <p>
                      Our <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> lists pros and cons from hands-on evaluation. Pair this guide with{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>,{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>monthly pricing</Link>, and{" "}
                      <Link href="/accounting/guides/when-should-a-business-stop-using-quickbooks" className={linkGreen}>when to stop using QuickBooks</Link> for a balanced decision.
                    </p>
                  </div>
                </section>
                <section id="cost" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Subscription and add-on creep.">Cost and Pricing Disadvantages</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List prices sit above many competitors at entry tier, and payroll, payments, and extra users add up fast. Price increases over time frustrate long-term subscribers. Mitigations: right-size tiers (<Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link>), compare <Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link>.
                    </p>
                  </div>
                </section>
                <section id="complexity" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Learning curve and feature overload.">Complexity and Usability</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Menus, settings, and accounting terminology intimidate first-time owners. Some features sit behind higher tiers, which feels like paywalling basics. Solos who only invoice may prefer <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> simplicity.
                    </p>
                  </div>
                </section>
                <section id="other" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Support, lock-in, and regional fit.">Support, Lock-In, and Fit</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Support quality</strong> varies by plan; urgent issues during close can be stressful on lower tiers.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Migration friction</strong> — historical data and integrations make switching costly, which increases lock-in.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Regional strengths</strong> — Xero is often stronger outside the US; evaluate local accountant preference.</span></li>
                    </ul>
                    <p>
                      Explore <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link> and <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>how to switch accounting software</Link> if drawbacks outweigh benefits.
                    </p>
                  </div>
                </section>
                <section id="mitigate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stay on QuickBooks but reduce pain.">How to Mitigate Common Drawbacks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Cost:</strong> Right-size your tier, buy through your accountant, and audit add-ons quarterly—see{" "}
                      <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Complexity:</strong> Use a one-time ProAdvisor setup, reconcile monthly, and limit chart-of-accounts customization until you understand reports. See{" "}
                      <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Lock-in:</strong> Export backups periodically and document integrations so a future migration to{" "}
                      <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> is possible if your needs change.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>Is QuickBooks worth it?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>Cheapest way to use QuickBooks</Link></span></li>
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
              <GuideSidebar title="Alternatives" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Are the Disadvantages of QuickBooks? | BeltStack Guide",
    description:
      "QuickBooks disadvantages—pricing creep, complexity, support, and lock-in—and how to mitigate them or choose Xero, Wave, or FreshBooks instead.",
  };
}
