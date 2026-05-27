import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/does-google-have-something-like-quickbooks";

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
    q: "Is there a Google version of QuickBooks?",
    a: "No. Google does not publish a QuickBooks-equivalent product with invoicing, expense tracking, bank feeds, and tax-ready reporting. Businesses pair Google Workspace with dedicated accounting software—see does Google have a bookkeeping program for the broader Workspace picture.",
  },
  {
    q: "Can Google Sheets replace QuickBooks?",
    a: "Only for very simple operations with few transactions and no need for automated bank reconciliation or accountant-grade reports. Most growing businesses move to QuickBooks Online, Xero, Wave, or similar tools. Our QuickBooks vs Excel guide explains when spreadsheets stop scaling.",
  },
  {
    q: "What is the closest free alternative to QuickBooks?",
    a: "Wave is the most common free core accounting option. Zoho Books and FreshBooks often cost less than QuickBooks at entry tiers. See can I get QuickBooks for free, cheapest way to use QuickBooks, and QuickBooks alternatives for a full cost map.",
  },
  {
    q: "Does Google Workspace integrate with QuickBooks?",
    a: "You can use Google sign-in and store exports in Drive; deep accounting integration happens through QuickBooks apps and third-party connectors, not through a native Google accounting module. Confirm current integrations in our QuickBooks Online review before you buy.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "QuickBooks-style depth", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Popular alternative", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free accounting", reviewHref: getAccountingReviewUrl("wave") },
];

export default function DoesGoogleHaveSomethingLikeQuickBooksPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Google vs QuickBooks</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Does Google Have Something Like QuickBooks?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    No native Google QuickBooks competitor exists. Here is how Workspace compares—and which accounting platforms fill the gap.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Owners who live in Gmail and Drive often hope Google ships a QuickBooks competitor so everything stays under one brand. That product does not exist—and the gap is not just marketing. QuickBooks is built for double-entry books, tax reporting, and accountant handoffs; Google Workspace is built for documents and collaboration.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Google does not offer something like QuickBooks Online</strong>—no chart of accounts, no automated bank reconciliation, no standard P&amp;L and balance sheet package built into Workspace. QuickBooks is purpose-built small business accounting; Google is productivity and cloud storage.
                    </p>
                    <p>
                      Owners who want a single Google-branded stack often use Sheets plus manual entry until complexity forces a change. That works for side projects; it breaks down with payroll, multi-account banking, inventory, and year-end tax prep. Read{" "}
                      <Link href="/accounting/guides/does-google-have-a-bookkeeping-program" className={linkGreen}>does Google have a bookkeeping program</Link> for the broader picture, and our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> for what you get when you leave the Google-only path.
                    </p>
                  </div>
                </section>
                <section id="comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What QuickBooks does that Google does not.">QuickBooks vs Google Workspace</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>QuickBooks Online typically includes:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Bank and card feeds with categorization and reconciliation</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Invoicing, estimates, and payment tracking tied to accounts receivable</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Tax-ready reports and accountant access</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Integrations with payroll, time tracking, and ecommerce</span></li>
                    </ul>
                    <p>
                      Google Workspace does not replace any of that. Our{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link> covers pricing, pros, and cons. If QuickBooks feels heavy or expensive, start with{" "}
                      <Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link> or compare{" "}
                      <Link href={getAccountingCompareUrl("quickbooks-online-vs-wave")} className={linkGreen}>QuickBooks vs Wave</Link> and{" "}
                      <Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link>.
                    </p>
                  </div>
                </section>
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools to evaluate when you wanted a Google + accounting bundle.">Best QuickBooks-Style Options</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">QuickBooks Online</strong> remains the default when you need the largest US ecosystem.{" "}
                      <strong className="text-[#1A2D48]">Xero</strong> is the most cited full alternative.{" "}
                      <strong className="text-[#1A2D48]">Wave</strong> fits free accounting.{" "}
                      <strong className="text-[#1A2D48]">Zoho Books</strong> fits teams already on Zoho CRM. See{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software (2026)</Link> and{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks for small business worth it</Link> before you commit. Pricing detail:{" "}
                      <Link href="/accounting/guides/what-does-quickbooks-cost-per-month" className={linkGreen}>what does QuickBooks cost per month</Link>.
                    </p>
                  </div>
                </section>
                <section id="workspace-plus-qbo" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A common real-world stack.">Using Google Workspace With QuickBooks</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many businesses run both: Workspace for email, contracts, and receipt storage; QuickBooks Online for the ledger, invoicing, and reports. You are not choosing Google <em>or</em> QuickBooks—you are pairing productivity with accounting.
                    </p>
                    <p>
                      Store PDF invoices and vendor contracts in Drive; send customer invoices from QuickBooks; export year-end reports for your CPA into a shared folder. If cost is the blocker, compare{" "}
                      <Link href="/accounting/guides/cheapest-way-to-use-quickbooks" className={linkGreen}>cheapest way to use QuickBooks</Link> and{" "}
                      <Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>QuickBooks free trials</Link> before defaulting to Sheets alone.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/does-google-have-a-bookkeeping-program" className={linkGreen}>Does Google have a bookkeeping program?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>Is QuickBooks worth it?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingCompareUrl("quickbooks-online-vs-xero")} className={linkGreen}>QuickBooks vs Xero</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/disadvantages-of-quickbooks" className={linkGreen}>Disadvantages of QuickBooks</Link></span></li>
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
              <GuideSidebar title="QuickBooks alternatives" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Does Google Have Something Like QuickBooks? | BeltStack Guide",
    description:
      "No Google QuickBooks equivalent exists—compare Workspace vs real accounting software, see QuickBooks-style alternatives, and learn how owners pair Gmail with QBO.",
  };
}
