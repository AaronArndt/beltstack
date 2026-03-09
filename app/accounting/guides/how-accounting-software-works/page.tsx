import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

// ——— Design (match payroll guide pages) ———
function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const FAQ_ITEMS = [
  {
    q: "What does accounting software do?",
    a: "Accounting software tracks income and expenses, organizes transactions into accounts, helps reconcile bank activity, and produces financial reports like profit and loss, balance sheets, and cash flow statements. Many platforms also support invoicing, bill payments, and tax-ready reporting.",
  },
  {
    q: "Do small businesses need accounting software?",
    a: "Most small businesses benefit from accounting software once they are sending invoices, paying bills, or managing payroll. It reduces spreadsheet chaos, makes it easier to understand cash flow, and gives your accountant cleaner records at tax time.",
  },
  {
    q: "How is accounting software different from spreadsheets?",
    a: "Spreadsheets are flexible but manual. Accounting software enforces double-entry rules, automates data capture from bank feeds and invoices, and gives you standardized reports. That reduces errors and makes your books easier to maintain over time.",
  },
  {
    q: "Which accounting software is best for beginners?",
    a: "Tools like QuickBooks Online, Xero, and FreshBooks are popular with small businesses because they combine guided setup, templates, and strong support ecosystems. The right choice depends on your budget, complexity, and whether you work with an accountant who prefers a specific platform.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.7,
    bestFor: "Best for small businesses",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    rating: 4.6,
    bestFor: "Best QuickBooks alternative",
    reviewHref: getAccountingReviewUrl("xero"),
  },
  {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: 4.5,
    bestFor: "Best for freelancers",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
];

export default function HowAccountingSoftwareWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Article content ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li>
                      <Link
                        href="/"
                        className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting"
                        className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Accounting
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting/guides"
                        className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-[#1A2D48] font-medium" aria-current="page">
                      How Accounting Software Works
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Accounting Software Works
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how accounting software tracks income and expenses, supports invoicing and reporting, and helps
                    you stay organized for taxes.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Accounting software is the system of record for your business finances. Instead of logging deposits,
                      invoices, and bills in ad hoc spreadsheets, a modern platform centralizes transactions, enforces
                      basic accounting rules, and gives you clear reports on how money moves through your business.
                    </p>
                    <p>
                      The right tool makes it easier to answer questions like “Can I afford this hire?”, “Which customers
                      are past due?”, and “How much profit did we actually make last quarter?”. To compare specific tools,
                      explore our{" "}
                      <Link
                        href="/accounting"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        accounting software hub
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/accounting/compare"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        accounting software comparisons
                      </Link>
                      , or read in-depth reviews of{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero
                      </Link>
                      , and{" "}
                      <Link
                        href={getAccountingReviewUrl("freshbooks")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        FreshBooks
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— What Accounting Software Does ——— */}
                <section
                  id="what-accounting-software-does"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Core tasks accounting platforms handle.">
                    What Accounting Software Does
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most small business accounting platforms focus on a few core jobs:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Tracking income and expenses</strong> — Categorizing bank
                          transactions so you can see where money comes from and where it goes.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Managing invoicing and customer payments</strong> — Sending
                          invoices, recording payments, and following up on past-due balances.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Supporting bill pay and vendor management</strong> — Logging
                          bills, tracking what you owe, and scheduling payments.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Producing financial reports</strong> — Generating profit and
                          loss, balance sheet, aging, and cash flow reports on demand.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Helping with reconciliation and tax prep</strong> — Matching
                          bank activity and giving your accountant cleaner books for tax filings.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— How Accounting Software Works Day to Day ——— */}
                <section
                  id="how-accounting-software-works"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="The typical workflow from bank feed to reports.">
                    How Accounting Software Works Day to Day
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>The day-to-day workflow usually looks like this:</p>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>
                        <strong className="text-[#1A2D48]">Connect bank and credit card accounts</strong> so
                        transactions flow into your ledger automatically instead of manual data entry.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Categorize and reconcile transactions</strong> by assigning
                        income and expense categories and matching bank activity to invoices and bills.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Send invoices and record customer payments</strong> for work
                        you complete, optionally enabling online payment links for faster collection.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Log bills and schedule payments</strong> so you have a clear
                        view of upcoming cash outflows.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Run reports regularly</strong> to check profitability, track
                        margins, and share updated numbers with your accountant or advisors.
                      </li>
                    </ol>
                    <p>
                      Tools like QuickBooks Online, Xero, and FreshBooks follow this same pattern, with differences in
                      interface, automation, and pricing. Starting with a simple routine you can follow every week is
                      more important than picking the “perfect” tool on day one.
                    </p>
                  </div>
                </section>

                {/* ——— Key Features to Look For ——— */}
                <section id="features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities that matter most for small businesses.">
                    Key Features to Look For in Accounting Software
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Reliable bank feeds and reconciliation tools</strong> so
                          you can trust that your books match your bank accounts.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Invoicing and accounts receivable features</strong> to help
                          you send polished invoices and follow up on unpaid balances.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Expense tracking and receipt capture</strong> for keeping
                          documentation organized and deductible expenses easy to substantiate.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Reporting and dashboards</strong> that are understandable
                          even if you are not an accountant.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Integrations with payroll and payments</strong> so payroll
                          runs, merchant processing, or ecommerce orders flow into your books without extra work.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Choosing the Right Accounting Platform ——— */}
                <section id="choosing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to narrow down the options.">
                    How to Choose the Right Accounting Software
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When evaluating platforms, start with your workflows: how you invoice, how you accept payments, who
                      categorizes transactions, and which reports you actually look at. Then layer in factors like
                      pricing, ecosystem fit, and whether your accountant already prefers a particular tool.
                    </p>
                    <p>
                      Our reviews of{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero
                      </Link>
                      , and{" "}
                      <Link
                        href={getAccountingReviewUrl("freshbooks")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        FreshBooks
                      </Link>{" "}
                      walk through strengths, limitations, and best-fit businesses for each tool.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: recommended accounting software (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Recommended Accounting Software"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/how-accounting-software-works" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Accounting Software Works | BeltStack Guide",
    description:
      "Learn how accounting software works, what it does day to day, and how small businesses use it to track money and stay ready for taxes.",
  };
}

