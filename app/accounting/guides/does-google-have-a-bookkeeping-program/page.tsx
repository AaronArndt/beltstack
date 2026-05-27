import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/does-google-have-a-bookkeeping-program";

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
    q: "Does Google have accounting software for small business?",
    a: "Google does not offer a dedicated small business accounting or bookkeeping product comparable to QuickBooks or Xero. Google Workspace includes productivity apps (Gmail, Drive, Docs, Sheets), not a general ledger or tax-ready bookkeeping system. See does Google have something like QuickBooks for a direct comparison.",
  },
  {
    q: "Can I use Google Sheets for bookkeeping?",
    a: "Yes, for very simple tracking—expenses, invoices, and basic P&L in a spreadsheet. Sheets lack bank reconciliation workflows, audit trails, and accountant-grade reporting that dedicated accounting software provides. Many businesses outgrow spreadsheets quickly; see QuickBooks vs Excel when you need a structured migration path.",
  },
  {
    q: "Are there bookkeeping apps that work with Google?",
    a: "Yes. Tools like QuickBooks Online, Xero, FreshBooks, and Wave integrate with Google via sign-in, exports, or marketplace add-ons. You can keep Workspace for email and files while running books in accounting software—our QuickBooks Online review covers typical integrations.",
  },
  {
    q: "What should I use instead of a Google bookkeeping program?",
    a: "For free core accounting, consider Wave. For freelancers, FreshBooks is common. For full small business books, QuickBooks Online or Xero are widely used. See our best accounting software roundup, accounting for small business guide, and accounting software pricing for total-cost context.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free accounting", reviewHref: getAccountingReviewUrl("wave") },
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Full small business books", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Cloud accounting", reviewHref: getAccountingReviewUrl("xero") },
];

export default function DoesGoogleHaveABookkeepingProgramPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Google Bookkeeping</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Does Google Have a Bookkeeping Program?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Google Workspace is not a bookkeeping system. Here is what Google actually offers—and what small businesses use for real books.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you searched &quot;does Google have a bookkeeping program,&quot; you are usually trying to stay inside the Google ecosystem—Gmail for clients, Drive for receipts, Sheets for a running total. That workflow is common, but it is not the same as a bookkeeping system your CPA can reconcile and sign off on.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">No—Google does not ship a standalone bookkeeping or accounting program</strong> for small businesses the way Intuit ships QuickBooks or Xero ships cloud accounting. Google Workspace bundles Gmail, Calendar, Drive, Docs, and Sheets for productivity and collaboration, not double-entry bookkeeping, bank reconciliation, or tax-ready financial statements.
                    </p>
                    <p>
                      That distinction matters when you want one login for everything. You can keep Workspace for email and files while running books in{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link>,{" "}
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link>, or another platform. Our{" "}
                      <Link href="/accounting/guides/how-accounting-software-works" className={linkGreen}>how accounting software works</Link> guide explains what those tools actually do—and{" "}
                      <Link href="/accounting/guides/does-google-have-something-like-quickbooks" className={linkGreen}>does Google have something like QuickBooks</Link> answers the closest QuickBooks-style comparison.
                    </p>
                  </div>
                </section>
                <section id="what-google-offers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Workspace tools vs real bookkeeping.">What Google Offers Instead</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Small businesses often use Google tools alongside—not instead of—accounting software:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Google Sheets</strong> for simple expense logs, cash trackers, or one-off budgets—not a substitute for reconciliation and audit trails at scale.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Google Drive</strong> to store receipts, contracts, and exports from your accounting platform.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Gmail</strong> for invoice delivery and vendor communication, while invoicing and AR live in accounting or invoicing software.</span></li>
                    </ul>
                    <p>
                      Google Pay and consumer Google services are payment or personal finance tools—not small business general ledgers. For a QuickBooks-style comparison, see{" "}
                      <Link href="/accounting/guides/does-google-have-something-like-quickbooks" className={linkGreen}>does Google have something like QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="what-to-use" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical options when you live in Google Workspace.">What to Use for Bookkeeping</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> offers free core accounting if cost is the main constraint.{" "}
                      <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link> fits freelancers who prioritize invoicing.{" "}
                      <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> and{" "}
                      <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> are the usual upgrades when you need full books, cash flow reporting, and accountant handoffs. Browse the{" "}
                      <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> roundup and{" "}
                      <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link> guide to narrow choices.
                    </p>
                    <p>
                      If you are deciding between staying on Sheets and moving to software, read{" "}
                      <Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link> and{" "}
                      <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link> before you commit to a paid platform.
                    </p>
                  </div>
                </section>
                <section id="sheets-limits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When a spreadsheet stops being enough.">When Google Sheets Is Not Enough</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Sheets work for early tracking: a tab for expenses, a tab for invoices, maybe a simple profit estimate. Problems show up when you have multiple bank accounts, contractor payments, sales tax lines, or an accountant who needs reconciled balances—not copy-pasted totals.
                    </p>
                    <p>
                      Dedicated accounting software adds bank feeds, categorization rules, audit trails, and standard reports (P&amp;L, balance sheet, cash flow). That is why most owners switch before hiring help or filing business taxes on Schedule C or an entity return. See{" "}
                      <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link> for the full setup path.
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
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/does-google-have-something-like-quickbooks" className={linkGreen}>Does Google have something like QuickBooks?</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/quickbooks-alternatives" className={linkGreen}>QuickBooks alternatives</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-software-pricing" className={linkGreen}>Accounting software pricing</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/can-i-get-quickbooks-for-free" className={linkGreen}>Can I get QuickBooks for free?</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about Google and bookkeeping.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Accounting picks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Does Google Have a Bookkeeping Program? | BeltStack Guide",
    description:
      "Google has no dedicated bookkeeping app—learn what Workspace covers, when Sheets falls short, and which accounting tools (QuickBooks, Wave, Xero) owners use instead.",
  };
}
