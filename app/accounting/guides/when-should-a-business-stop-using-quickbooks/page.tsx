import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/when-should-a-business-stop-using-quickbooks";

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
    q: "When is it time to leave QuickBooks?",
    a: "Consider switching when cost outweighs value, your team never adopted it, you need features QuickBooks lacks (deep manufacturing, global consolidation), or your accountant strongly prefers another platform and migration cost is acceptable.",
  },
  {
    q: "Should I stop using QuickBooks if I am a solo freelancer?",
    a: "If you only invoice and track a few expenses, FreshBooks or Wave may be simpler and cheaper. QuickBooks still makes sense when you need full books or accountant-standard files.",
  },
  {
    q: "Does outgrowing QuickBooks mean I need an ERP?",
    a: "Not always. Mid-size businesses often move to Xero, NetSuite, or industry ERP only when multi-entity, warehouse, or revenue recognition complexity exceeds QuickBooks Advanced. Many stay on QuickBooks for years with integrations.",
  },
  {
    q: "How do I migrate off QuickBooks safely?",
    a: "Clean books first, export chart of accounts and open balances, run parallel months if possible, and involve your CPA. See how to switch accounting software.",
  },
  {
    q: "Is QuickBooks too expensive to keep?",
    a: "Compare total cost—base plan, payroll, payments, and time tracking—against alternatives. Sometimes downgrading tiers fixes cost without switching platforms.",
  },
  {
    q: "Can I switch from QuickBooks to Excel?",
    a: "You can, but most growing businesses regret losing reconciliation and audit trails. See QuickBooks vs Excel before moving backward.",
  },
  {
    q: "Will my accountant care if I leave QuickBooks?",
    a: "Many CPAs prefer QuickBooks or Xero. Ask before switching—advisor preference and import support often determine migration friction more than features alone.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Common switch target", reviewHref: getAccountingReviewUrl("xero") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Simpler solo stack", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Cost-sensitive", reviewHref: getAccountingReviewUrl("wave") },
];

export default function WhenShouldABusinessStopUsingQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Stop Using QuickBooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    When Should a Business Stop Using QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Signs it is time to switch—cost, fit, complexity, and team adoption—and how to plan a move without breaking your books.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Stopping QuickBooks is a business decision, not a failure. Companies leave when the subscription no longer matches how they operate, when alternatives are cheaper or cleaner, or when complexity demands a different system entirely.
                    </p>
                    <p>
                      Many owners search this when renewal notices arrive or when the team secretly keeps books in Excel. Before canceling, separate &quot;we dislike the UI&quot; from &quot;we have outgrown the product&quot;—the fix might be training, a bookkeeper, or a lower tier—not migration.
                    </p>
                    <p>
                      Read <Link href="/accounting/guides/disadvantages-of-quickbooks" className={linkGreen}>disadvantages of QuickBooks</Link>,{" "}
                      <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link>, and{" "}
                      <Link href="/accounting/guides/do-you-have-to-buy-quickbooks-every-year" className={linkGreen}>QuickBooks subscription billing</Link> before you migrate.
                    </p>
                  </div>
                </section>
                <section id="signals" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common triggers for switching.">Signs You Should Consider Leaving</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Rising cost</strong> — tiers and add-ons exceed value; see <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>QuickBooks pricing</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Low adoption</strong> — team avoids the tool; books stay in Excel or email.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Wrong size</strong> — too heavy for solos or too limited for multi-entity/global ops.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Better ecosystem fit</strong> — you standardize on Zoho, Xero, or industry software.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where businesses go next.">Typical Next Platforms</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Downmarket: <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> or <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>. Lateral:{" "}
                      <Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link>. Migration playbook:{" "}
                      <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>how to switch accounting software</Link>.
                    </p>
                  </div>
                </section>
                <section id="decision-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Answer before you cancel.">Owner Decision Checklist</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Are books reconciled through last month, or are we migrating mess?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Did we try a lower QuickBooks tier or removing unused add-ons?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Does our CPA support the target platform&apos;s import path?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Can we run one parallel month in the new system before cutover?</span></li>
                    </ul>
                    <p>
                      If the issue is learning curve, see <Link href="/accounting/guides/can-a-beginner-use-quickbooks" className={linkGreen}>can a beginner use QuickBooks</Link> and{" "}
                      <Link href="/accounting/guides/how-hard-is-it-to-learn-quickbooks" className={linkGreen}>how hard QuickBooks is to learn</Link> before switching.
                    </p>
                  </div>
                </section>
                <section id="migration-timeline" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reduce cutover risk.">A Simple Migration Timeline</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">T-30 days</strong> — Clean categorization, reconcile, export chart of accounts and balances.</p>
                    <p><strong className="text-[#1A2D48]">T-14 days</strong> — Set up new company file, import lists, connect banks.</p>
                    <p><strong className="text-[#1A2D48]">T-0</strong> — Run new invoices and expenses in the new system; keep QuickBooks read-only for reference.</p>
                    <p><strong className="text-[#1A2D48]">T+30 days</strong> — Reconcile first full month; cancel QuickBooks after CPA confirms opening balances.</p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent, workflow-based reviews.">How BeltStack Evaluates QuickBooks Guidance</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack compares accounting tools with workflow-based reviews—reconciliation, invoicing, CPA export—not vendor popularity alone. We document when businesses outgrow QuickBooks based on owner interviews and product trials, not Intuit marketing. See{" "}
                      <Link href="/methodology" className={linkGreen}>methodology</Link> and the{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link>.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical next steps for owners.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Shortlist two alternatives on <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Ask your CPA which platform they prefer to support at tax time.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Export data before turning off renewal—see <Link href="/accounting/guides/do-you-have-to-buy-quickbooks-every-year" className={linkGreen}>what happens when you stop paying</Link>.</span></li>
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
    title: "When Should a Business Stop Using QuickBooks? (2026) | BeltStack",
    description:
      "Learn when to leave QuickBooks—cost, fit, adoption, and complexity—with a decision checklist, migration timeline, and links to Xero, Wave, and FreshBooks.",
    keywords: [
      "leave QuickBooks",
      "switch from QuickBooks",
      "QuickBooks alternatives",
      "outgrow QuickBooks",
      "migrate off QuickBooks",
    ],
  };
}
