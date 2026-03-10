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
    q: "When should a small business move from spreadsheets to accounting software?",
    a: "If you are issuing regular invoices, managing multiple bank or credit card accounts, or preparing financials for lenders or investors, dedicated accounting software usually saves time and reduces errors compared with spreadsheets.",
  },
  {
    q: "Do I need an accountant if I use accounting software?",
    a: "Software helps you stay organized, but it does not replace professional advice. Many small businesses use accounting software for day-to-day bookkeeping and partner with a bookkeeper or accountant for cleanup and tax filings.",
  },
  {
    q: "Which accounting software is best for small businesses?",
    a: "Popular options include QuickBooks Online, Xero, Wave, and FreshBooks. The best fit depends on your size, industry, and whether you are primarily service- or product-based.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.7,
    bestFor: "Best overall for small businesses",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: 4.5,
    bestFor: "Best for service businesses",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
  {
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    rating: 4.3,
    bestFor: "Best free option",
    reviewHref: getAccountingReviewUrl("wave"),
  },
];

export default function AccountingForSmallBusinessGuidePage() {
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
                      Accounting for Small Business
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Accounting for Small Business
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how small businesses use accounting software to manage invoicing, expenses, cash flow, and tax
                    readiness without becoming full-time bookkeepers.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many owners start with a simple spreadsheet to track money in and out. That works for a handful of
                      customers, but it quickly becomes stressful once you are managing recurring invoices, multiple bank
                      accounts, and tax deadlines. Accounting software provides structure so you can see where your
                      business stands financially at any moment.
                    </p>
                    <p>
                      The goal is not to turn you into an accountant—it is to give you a clear, reliable view of cash
                      coming in, cash going out, and what is left over. Platforms like{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("freshbooks")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        FreshBooks
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("wave")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Wave
                      </Link>
                      , and{" "}
                      <Link
                        href={getAccountingReviewUrl("zoho-books")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Zoho Books
                      </Link>{" "}
                      make that possible even if you are not finance-trained. Many accounting platforms integrate with <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software</Link>; if you mainly send bills, see our <Link href="/invoicing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">invoicing software</Link> hub for dedicated billing tools.
                    </p>
                  </div>
                </section>

                {/* ——— Why Small Businesses Use Accounting Software ——— */}
                <section id="why-use-accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common reasons owners move off spreadsheets.">
                    Why Small Businesses Use Accounting Software
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>To get a clear view of profit and cash flow every month.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>To stay organized for tax time without scrambling through receipts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>To send professional invoices and track which customers are overdue.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>To understand which products, services, or clients are most profitable.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Core Needs by Business Size ——— */}
                <section id="needs-by-size" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How needs shift as your company grows.">
                    Accounting Needs for Different Small Business Sizes
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A solo freelancer and a 20-person agency both need accounting software, but what they prioritize is
                      different. Solo operators often care most about invoicing and getting paid quickly. Larger teams tend
                      to focus on reporting, controls, and collaboration with an accountant or internal bookkeeper.
                    </p>
                    <p>
                      As you grow, you may move from lighter tools like Wave or FreshBooks into more robust options such
                      as{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>{" "}
                      or{" "}
                      <Link
                        href={getAccountingReviewUrl("zoho-books")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Zoho Books
                      </Link>
                      , which offer more automation and reporting at the cost of extra complexity.
                    </p>
                  </div>
                </section>

                {/* ——— Choosing Software for Your Small Business ——— */}
                <section id="choosing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Matching platforms to your size and workflow.">
                    How to Choose Accounting Software for Your Small Business
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with your business model. Service and project-based businesses may gravitate toward tools like
                      FreshBooks that focus on invoicing and time tracking. Product businesses may need deeper inventory
                      and purchase order tools, which you will more often find in QuickBooks Online or Zoho Books.
                    </p>
                    <p>
                      Once you are clear on needs, compare a shortlist of platforms on ease of use, pricing, and how
                      comfortable your accountant is with each tool. Our{" "}
                      <Link
                        href="/accounting/compare"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        accounting software comparisons
                      </Link>{" "}
                      and individual reviews can help you narrow things down quickly.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to small business accounting questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: accounting software for small businesses (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Accounting Software for Small Businesses"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/accounting-for-small-business" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Accounting for Small Business | BeltStack Guide",
    description:
      "Learn why small businesses use accounting software, which features matter most, and how to choose a platform that fits your size and workflow.",
  };
}

