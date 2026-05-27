import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/do-quicken-and-quickbooks-work-together";

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
    q: "Is there a Quicken QuickBooks integration?",
    a: "There is no mainstream native sync that keeps Quicken and QuickBooks Online in two-way lockstep. Owners typically run Quicken for personal accounts and QuickBooks for business accounts with separate banks and manual boundaries.",
  },
  {
    q: "Can I import Quicken data into QuickBooks?",
    a: "You may export certain lists or transactions from Quicken and import into QuickBooks with cleanup—easier with accountant help. Clean separation of personal vs business data before import is critical.",
  },
  {
    q: "Should I use Quicken and QuickBooks at the same time?",
    a: "Yes for personal plus business finance—if accounts are separated. No for running business books in both; pick QuickBooks (or another business ledger) as the single business system of record.",
  },
  {
    q: "Does TurboTax connect both Quicken and QuickBooks?",
    a: "TurboTax integrations vary by product year and SKU. Many businesses export from QuickBooks for business income and use personal tools separately—confirm current Intuit linking options at filing time.",
  },
  {
    q: "Will QuickBooks import Quicken categories automatically?",
    a: "Imports often require mapping categories and fixing dates. Budget time for cleanup or hire a bookkeeper for the first migration. A clean chart of accounts in QuickBooks matters more than perfect historical category parity.",
  },
  {
    q: "Can my accountant access both Quicken and QuickBooks?",
    a: "QuickBooks Online supports accountant seats; Quicken sharing is household-oriented, not CPA workflow. Give your CPA business access in QuickBooks only and keep personal Quicken separate.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Business ledger", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Simpler business", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free business books", reviewHref: getAccountingReviewUrl("wave") },
];

export default function DoQuickenAndQuickBooksWorkTogetherPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Quicken + QuickBooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Do Quicken and QuickBooks Work Together?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    They complement personal vs business finance—but they do not replace each other or sync like one product.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Quicken and QuickBooks work together only in the sense of a dual-tool workflow—not a unified integration.</strong> Historically both lived under Intuit, but they target different jobs. Use Quicken (or Simplifi) for household budgeting; use <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> for business books.
                    </p>
                    <p>
                      Product differences: <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>. Owner pay: <Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>LLC pay in QuickBooks</Link>.
                    </p>
                    <p>
                      This guide is for owners who want household visibility and proper business books—not one tool pretending to do both. Start at the <Link href="/accounting" className={linkGreen}>accounting hub</Link> if you are choosing business software for the first time.
                    </p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How owners run both without commingling.">Practical Dual-Tool Workflow</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Separate banks</strong> — Personal checking in Quicken; business checking only in QuickBooks.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Document transfers</strong> — Owner draws or contributions recorded in QuickBooks when moving money between accounts.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">One business ledger</strong> — Do not duplicate business transactions in Quicken.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="migration" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When business outgrows Quicken.">Moving Business Data to QuickBooks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you started in Quicken for side income, migrate business history to QuickBooks before tax complexity grows. See{" "}
                      <Link href="/accounting/guides/how-to-switch-accounting-software" className={linkGreen}>how to switch accounting software</Link> and{" "}
                      <Link href="/accounting/guides/how-does-quickbooks-work-for-self-employed-users" className={linkGreen}>how QuickBooks works for self-employed users</Link>.
                    </p>
                  </div>
                </section>
                <section id="no-sync" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Expect manual boundaries.">Why There Is No Real-Time Sync</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Quicken and QuickBooks use different data models—personal registers vs business chart of accounts, invoices, and vendor bills. Intuit does not market a two-way bridge because commingling would break audit trails. Owner draws and contributions should be recorded explicitly in QuickBooks when money moves between personal and business banks.</p>
                    <p>Read <Link href="/accounting/guides/how-should-an-llc-pay-themselves-in-quickbooks" className={linkGreen}>how an LLC pays themselves in QuickBooks</Link> for owner compensation hygiene.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers Accounting Software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack compares Quicken and QuickBooks in independent reviews and workflow guides—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link>, <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>. We do not provide tax or legal advice on entity structure.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/best-alternatives-to-quicken" className={linkGreen}>Best alternatives to Quicken</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-much-does-quicken-simplifi-cost" className={linkGreen}>Quicken Simplifi cost</Link></span></li>
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
    title: "Do Quicken and QuickBooks Work Together? | BeltStack Guide",
    description:
      "Do Quicken and QuickBooks work together? No native sync—learn dual-tool workflows, separate bank accounts, migration steps, and TurboTax handoffs for 2026.",
    keywords: ["Quicken and QuickBooks", "Quicken QuickBooks integration", "personal vs business accounting", "migrate Quicken to QuickBooks"],
  };
}
