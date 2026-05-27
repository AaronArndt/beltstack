import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-is-business-software";

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
    q: "What is business software?",
    a: "Business software is applications built to run company operations—finance, sales, payroll, inventory, customer support, and marketing—rather than personal consumer apps. It typically supports multiple users, permissions, integrations, and reporting that owners, bookkeepers, and teams rely on.",
  },
  {
    q: "What is the difference between business software and office software?",
    a: "Office software (documents, email, spreadsheets) supports general productivity. Business software encodes domain workflows—invoicing tied to accounts receivable, payroll tax filing, CRM pipelines—that office suites do not handle on their own. Most SMBs run both layers.",
  },
  {
    q: "Do small businesses need business software?",
    a: "Most need at least accounting or invoicing once revenue and expenses are regular. Additional categories stack on as you hire W-2 staff, lose leads in email, or manage appointments and field crews daily—not because a vendor says you should buy more seats.",
  },
  {
    q: "Is Excel business software?",
    a: "Excel is a flexible office tool many businesses use for planning, but it is not a substitute for dedicated accounting ledgers, payroll compliance, or CRM. Dedicated platforms reduce formula errors and scale better—see our QuickBooks vs Excel guide.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Core finance", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service billing", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free accounting", reviewHref: getAccountingReviewUrl("wave") },
];

export default function WhatIsBusinessSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Business Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Business Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Applications built to run your company—not personal apps—and the categories most small businesses adopt first.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you searched &quot;what is business software,&quot; you are usually deciding whether you need something beyond Gmail, Google Sheets, or a personal finance app. Owners, new operators, and students use this phrase to separate <strong className="text-[#1A2D48]">tools that run a company</strong> from apps built for individuals—and to figure out which category to buy first.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Business software helps companies record money, sell, pay people, and serve customers at scale.</strong> Unlike consumer apps, it supports audits, role-based permissions, integrations, and workflows your accountant or team expects. That is why a contractor might use Excel for a quote template but still run <Link href="/accounting" className={linkGreen}>accounting software</Link> for bank reconciliation and tax-ready books.
                    </p>
                    <p>
                      BeltStack reviews business software by vertical—<Link href="/accounting" className={linkGreen}>accounting</Link>, <Link href="/crm" className={linkGreen}>CRM</Link>, <Link href="/payroll" className={linkGreen}>payroll</Link>, <Link href="/invoicing" className={linkGreen}>invoicing</Link>, <Link href="/payment-processing" className={linkGreen}>payment processing</Link>, and more—so you compare tools built for the same job. For a fuller taxonomy, see <Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>types of business software explained</Link> and <Link href="/accounting/guides/most-common-types-of-office-software" className={linkGreen}>office software vs business apps</Link>.
                    </p>
                  </div>
                </section>
                <section id="categories" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where most SMBs start.">Core Categories</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Financial (accounting, invoicing, payments), customer (CRM, helpdesk), people (payroll, HR), and operations (scheduling, inventory, field service). See <Link href="/accounting/guides/what-are-the-main-types-of-business-software" className={linkGreen}>main types of business software</Link> and <Link href="/accounting/guides/examples-of-business-application-software" className={linkGreen}>examples</Link>.</p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What changes once revenue is real.">Why This Matters for Small Businesses</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Informal tracking works until it does not—usually when you need a loan, hire your first employee, or hand records to a CPA. Business software creates a <strong className="text-[#1A2D48]">repeatable system</strong>: the same categories every month, bank feeds instead of copy-paste, and reports you can trust in a meeting.
                    </p>
                    <p>
                      The cost of waiting is not just tax stress. Duplicate customer records, missed follow-ups, and payroll mistakes compound. Starting with one financial hub—often <Link href="/accounting/best-accounting-software" className={linkGreen}>accounting software</Link> or strong <Link href="/invoicing" className={linkGreen}>invoicing</Link>—gives every later tool (CRM, <Link href="/scheduling" className={linkGreen}>scheduling</Link>, <Link href="/field-service" className={linkGreen}>field service</Link>) something to integrate with.
                    </p>
                  </div>
                </section>
                <section id="first-category" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical sequence—not a shopping list.">How to Choose Your First Category</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Step 1:</strong> Open a dedicated business bank account if you have not already. Money and software should stay separated from day one.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Step 2:</strong> Pick the category that matches your biggest daily pain. Regular bills and expenses → accounting. You invoice clients but books are simple → invoicing first. Active pipeline in email → <Link href="/crm" className={linkGreen}>CRM</Link>. W-2 hires → <Link href="/payroll" className={linkGreen}>payroll</Link> (not personal finance apps).
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Step 3:</strong> Run a two-week trial on real workflows—send an invoice, reconcile a statement, log a deal—before adding another subscription. Our guide on <Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>what programs small businesses actually need</Link> maps common triggers for the next purchase.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Patterns we see in owner reviews.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Treating office suites as accounting.</strong> Google Sheets and Excel are powerful, but they do not replace ledgers, sales tax lines, or accountant-ready financials. See <Link href="/accounting/guides/quickbooks-vs-excel" className={linkGreen}>QuickBooks vs Excel</Link> when you are on the fence.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Buying an all-in-one suite before you have volume.</strong> Platforms that do everything often mean longer setup and weaker depth in one area. Most SMBs grow with best-of-breed tools that integrate.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Mixing personal and business apps.</strong> Quicken and consumer budgeting tools are not substitutes for business payroll or double-entry books—see <Link href="/accounting/guides/can-you-run-payroll-in-quicken" className={linkGreen}>payroll in Quicken</Link> and <Link href="/accounting/guides/quicken-vs-quickbooks" className={linkGreen}>Quicken vs QuickBooks</Link>.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent reviews by vertical—accounting, CRM, payroll, and operations—not paid placement lists. Editors test real workflows (invoicing, reconciliation, pipeline stages), compare pricing and limits honestly, and note where tools fit solos versus growing teams. Rankings reflect fit for small businesses, not vendor sponsorship.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Continue with these guides and hubs.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>Different types of business software explained</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-are-the-main-types-of-business-software" className={linkGreen}>Main types of business software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>What programs small businesses actually need</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
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
              <GuideSidebar title="SMB software" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Is Business Software? | BeltStack Guide",
    description:
      "Business software defined for owners: how it differs from office and consumer apps, core SMB categories, and which type to adopt first.",
  };
}
