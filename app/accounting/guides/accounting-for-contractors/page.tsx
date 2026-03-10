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
    q: "Why do contractors need dedicated accounting software?",
    a: "Contractor businesses juggle job-based income, materials and subcontractor costs, and complex payment schedules. Dedicated accounting software helps you track each job’s profitability and stay organized for taxes and insurance audits.",
  },
  {
    q: "Can I track jobs and projects in general-purpose accounting tools?",
    a: "Yes. Many platforms support basic job or project tracking, letting you tag income and expenses by job. Some industries use specialized construction accounting packages, while others rely on more general tools with light job costing.",
  },
  {
    q: "Which accounting software works well for contractors?",
    a: "Popular choices include QuickBooks Online, Xero, and FreshBooks, often paired with industry-specific job management tools. The right fit depends on your trade, crew size, and how deeply you need to track job-level profitability.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.7,
    bestFor: "Contractors that need job costing",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    rating: 4.6,
    bestFor: "Contractors working with Xero-friendly advisors",
    reviewHref: getAccountingReviewUrl("xero"),
  },
  {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: 4.5,
    bestFor: "Service contractors and trades",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
];

export default function AccountingForContractorsGuidePage() {
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
                      Accounting for Contractors
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Accounting for Contractors
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how contractors and trade businesses use accounting software to track jobs, manage cash flow,
                    and stay ready for taxes.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractor businesses rarely have perfectly predictable income. Jobs start and stop, materials and
                      subcontractor bills hit at different times, and customers may pay on progress draws or after work is
                      complete. Good accounting software helps you keep that moving picture organized.
                    </p>
                    <p>
                      Whether you are an independent contractor or manage a small crew, you want a system that makes it
                      easy to see which jobs are profitable, which customers owe money, and whether you have enough cash
                      to cover payroll and materials for upcoming work. Many contractors also use <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">payroll software</Link> for their crew and <Link href="/invoicing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">invoicing software</Link> for client billing.
                    </p>
                  </div>
                </section>

                {/* ——— Job-Based Accounting Basics ——— */}
                <section id="job-based-accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to think about income and costs at the job level.">
                    Job-Based Accounting Basics
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For contractors, each project or job has its own mini P&amp;L: revenue from the work, direct labor,
                      materials, subcontractors, and overhead allocation. Accounting software helps you tag transactions to
                      specific jobs so you can see which ones are making or losing money.
                    </p>
                    <p>
                      Even light job or project tracking inside general-purpose tools like QuickBooks Online, Xero, or
                      FreshBooks is dramatically better than trying to back into job profitability from a single
                      spreadsheet at year-end.
                    </p>
                  </div>
                </section>

                {/* ——— Choosing Accounting Software for Contractors ——— */}
                <section id="choosing-software" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for if you run a contracting or trade business.">
                    How to Choose Accounting Software for Contractors
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with the basics: bank feeds, invoicing, expense tracking, and reporting. Then look at how each
                      tool handles jobs or projects, and whether it integrates with field or estimating software you
                      already use.
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
                      outline strengths, limitations, and best-fit contractor scenarios for each platform.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about contractor accounting.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: accounting software for contractors (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Accounting Software for Contractors"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/accounting-for-contractors" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Accounting for Contractors | BeltStack Guide",
    description:
      "Learn how contractors and trade businesses use accounting software to track jobs, manage cash flow, and understand project-level profitability.",
  };
}

