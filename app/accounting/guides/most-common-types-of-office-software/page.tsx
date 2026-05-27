import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/most-common-types-of-office-software";

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
    q: "What is office software?",
    a: "Office software covers productivity tools—email, documents, spreadsheets, video meetings, and file storage—that teams use daily. It keeps people collaborating; it does not by itself run payroll tax filing or double-entry books.",
  },
  {
    q: "Is Microsoft Office the same as business software?",
    a: "Microsoft 365 is office productivity. Business software adds domain workflows—payroll tax filing, CRM pipelines, payment processing, inventory—that Word and Excel alone do not provide. Most SMBs use both layers.",
  },
  {
    q: "What office software do small businesses use most?",
    a: "Google Workspace or Microsoft 365 for email and docs, plus accounting (QuickBooks, Xero, Wave) and often Slack, Teams, or Zoom for communication. The finance layer is usually a separate business app, not the spreadsheet alone.",
  },
  {
    q: "Do I still need accounting software if I have Excel?",
    a: "Excel is office software; accounting platforms add bank reconciliation, invoicing tied to accounts receivable, and CPA-ready reports. See our QuickBooks vs Excel guide when spreadsheets are your default.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Beyond spreadsheets", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free books", reviewHref: getAccountingReviewUrl("wave") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoicing", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function MostCommonTypesOfOfficeSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Office Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Most Common Types of Office Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Productivity, communication, and finance tools in a typical small business office—and how they differ from specialized business apps.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Searchers asking about &quot;office software&quot; are often students, IT admins, or owners setting up a new laptop stack—wondering what belongs on every desk versus what belongs in finance or sales. The distinction matters because <strong className="text-[#1A2D48]">office tools do not replace business systems</strong> for tax, payroll, or customer records.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Office software keeps teams productive; business software runs the company.</strong> Most SMBs run both layers—Google Workspace or Microsoft 365 for documents and email, plus <Link href="/accounting" className={linkGreen}>accounting</Link> and <Link href="/crm" className={linkGreen}>CRM</Link> for money and customers.
                    </p>
                    <p>
                      Related: <Link href="/accounting/guides/does-google-have-a-bookkeeping-program" className={linkGreen}>does Google have bookkeeping</Link>, <Link href="/accounting/guides/what-is-business-software" className={linkGreen}>what is business software</Link>, and <Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>widely used business categories</Link> for what to add after the office suite.
                    </p>
                  </div>
                </section>
                <section id="types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What shows up in almost every office.">Common Office Categories</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Productivity suites</strong> — Docs, sheets, slides (Google, Microsoft).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Email &amp; calendar</strong> — Business Gmail or Outlook.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Communication</strong> — Slack, Teams, Zoom.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">File storage</strong> — Drive, OneDrive, Dropbox.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Finance (business apps)</strong> — <Link href="/accounting" className={linkGreen}>Accounting</Link>, not just spreadsheets.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="when-business" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals that spreadsheets are not enough.">When to Add Business Apps Beyond the Office Suite</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Add dedicated business software when you issue recurring invoices, reconcile multiple accounts monthly, pay W-2 employees, or need a shared customer pipeline—not when you only need a letter template. <Link href="/invoicing" className={linkGreen}>Invoicing</Link> and <Link href="/accounting/best-accounting-software" className={linkGreen}>accounting</Link> are the usual first business layer after email and docs.
                    </p>
                    <p>
                      Retail and field businesses often add <Link href="/payment-processing" className={linkGreen}>payment processing</Link>, <Link href="/pos" className={linkGreen}>POS</Link>, or <Link href="/field-service" className={linkGreen}>field service</Link> while still keeping Microsoft or Google for internal communication.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why the two layers coexist.">Why This Matters for Small Businesses</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Treating Gmail and Sheets as your entire back office creates gaps at tax time and when you hire. Office software has no concept of chart of accounts, sales tax lines, or payroll filings. Business apps encode those workflows so you and your advisor are not rebuilding history from inboxes.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Setup traps we see often.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Using personal Gmail for all business mail.</strong> Professional domain email plus separate business banking keeps audits and handoffs cleaner.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Letting every employee pick their own file storage.</strong> Standardize on Drive, OneDrive, or Dropbox so contracts and receipts are findable.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Expecting Excel to be accounting.</strong> Compare dedicated tools in <Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link> before year-end cleanup bills arrive.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack focuses reviews on business applications—accounting, CRM, payroll, operations—not office suite shootouts. When productivity tools touch finance (e.g., Sheets exports), we note integration limits in vertical reviews. Rankings are editorial, not paid placements.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From office layer to business stack.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-is-business-software" className={linkGreen}>What is business software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>What programs small businesses actually need</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/invoicing" className={linkGreen}>Invoicing software hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>Types of business software explained</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>Accounting for small business</Link></span></li>
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
              <GuideSidebar title="Finance layer" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "The Most Common Types of Office Software | BeltStack Guide",
    description:
      "Common office software for SMBs—email, docs, chat—and when you still need accounting, CRM, and payroll apps on top.",
  };
}
