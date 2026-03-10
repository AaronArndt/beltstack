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
    q: "What is the difference between accounting and bookkeeping?",
    a: "Bookkeeping focuses on recording and organizing transactions, while accounting interprets that data, produces reports, and informs decisions and tax filings. In many small businesses, the same person or firm may handle parts of both roles.",
  },
  {
    q: "Where does accounting software fit in?",
    a: "Accounting software is the system that stores your financial data and supports both bookkeeping and accounting tasks. It does not replace professionals but makes their work more efficient and accurate.",
  },
  {
    q: "Do I still need a bookkeeper if I use accounting software?",
    a: "Many small businesses benefit from working with a bookkeeper even if they use accounting software. The software reduces manual data entry, while the bookkeeper focuses on categorization, cleanup, and review.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.7,
    bestFor: "Popular with accountants",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    rating: 4.6,
    bestFor: "Accountant-friendly workflows",
    reviewHref: getAccountingReviewUrl("xero"),
  },
  {
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    rating: 4.3,
    bestFor: "Very small businesses",
    reviewHref: getAccountingReviewUrl("wave"),
  },
];

export default function AccountingVsBookkeepingGuidePage() {
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
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Accounting
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/accounting/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Accounting vs Bookkeeping
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Accounting vs Bookkeeping
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Understand the difference between accounting and bookkeeping, where software fits, and which roles your
                    small business may need at different stages.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      “Accounting” and “bookkeeping” are often used interchangeably, but they refer to different types of
                      work. Bookkeeping is about capturing and organizing raw financial data. Accounting builds on that
                      data to analyze performance, prepare statements, and inform decisions.
                    </p>
                    <p>
                      Modern accounting software sits underneath both functions. It gives bookkeepers a structured place to
                      record transactions and accountants a clean source of truth for reporting and tax prep. The better
                      your system, the easier it is for everyone involved to do their best work.
                    </p>
                  </div>
                </section>

                {/* ——— What Bookkeepers Do ——— */}
                <section id="bookkeeping" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Day-to-day tasks that keep your books up to date.">
                    What Bookkeepers Do
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Record income and expense transactions in your accounting software.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Categorize transactions to the right accounts and classes.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Reconcile bank and credit card statements each month.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Help keep accounts receivable and accounts payable lists up to date.</span>
                      </li>
                    </ul>
                    <p>
                      In a very small business, you might handle some or all of these tasks yourself using software like{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>{" "}
                      or{" "}
                      <Link
                        href={getAccountingReviewUrl("wave")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Wave
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— What Accountants Do ——— */}
                <section id="accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Higher-level work built on top of accurate books.">
                    What Accountants Do
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Accountants typically:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Review and adjust your books at month-end or year-end.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Prepare financial statements and management reports.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>File tax returns and advise on entity structure and planning.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Help you interpret what the numbers say about your business.</span>
                      </li>
                    </ul>
                    <p>
                      High-quality accounting software makes their work easier by giving them cleaner, more consistent data
                      to start from.
                    </p>
                  </div>
                </section>

                {/* ——— Where Software Fits ——— */}
                <section id="software-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How tools like QuickBooks and Xero support both roles.">
                    Where Accounting Software Fits Into the Picture
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Platforms like QuickBooks Online, Xero, and Wave serve as the shared workspace for you, your
                      bookkeeper, and your accountant. They provide guardrails—such as double-entry rules and bank
                      reconciliation flows—while still being approachable enough for non-accountants to navigate.
                    </p>
                    <p>
                      If you are just getting started, first learn{" "}
                      <Link
                        href="/accounting/guides/how-accounting-software-works"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        how accounting software works
                      </Link>
                      . Then decide what you want to keep in-house versus delegate to a bookkeeper or accounting firm.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about accounting vs bookkeeping.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: popular accounting software (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Popular Accounting Software" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/accounting-vs-bookkeeping" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Accounting vs Bookkeeping | BeltStack Guide",
    description:
      "Learn the difference between accounting and bookkeeping, where accounting software fits, and which roles your business may need as you grow.",
  };
}

