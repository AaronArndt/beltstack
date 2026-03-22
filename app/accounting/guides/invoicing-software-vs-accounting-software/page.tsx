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
    q: "Is invoicing software the same as accounting software?",
    a: "No. Invoicing tools focus on sending bills and collecting payments, while accounting software manages your full financial picture, including expenses, bank reconciliation, and financial reporting.",
  },
  {
    q: "When is invoicing-only software enough?",
    a: "Very small, early-stage service businesses sometimes start with invoicing-only tools. As soon as you care about accurate financial reports, tax readiness, or multi-account reconciliation, full accounting software becomes important.",
  },
  {
    q: "Can I use both invoicing software and accounting software together?",
    a: "Yes. Many businesses use an invoicing-focused tool that integrates with their accounting platform. The key is making sure invoices and payments sync cleanly so you avoid double data entry.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: 4.5,
    bestFor: "Invoicing-focused accounting",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
  {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: 4.7,
    bestFor: "All-in-one accounting",
    reviewHref: getAccountingReviewUrl("quickbooks-online"),
  },
  {
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    rating: 4.3,
    bestFor: "Free invoicing and accounting",
    reviewHref: getAccountingReviewUrl("wave"),
  },
];

export default function InvoicingVsAccountingSoftwareGuidePage() {
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
                      Invoicing Software vs Accounting Software
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Invoicing Software vs Accounting Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Learn how invoicing tools differ from full accounting platforms, when a simple invoicing app is
                    enough, and when you need full double-entry accounting.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many freelancers and service businesses start with lightweight invoicing software: something that
                      sends professional invoices, accepts card payments, and sends basic reminders. As your business
                      grows, you eventually need a more complete view of cash flow, expenses, and profitability.
                    </p>
                    <p>
                      Full accounting platforms like{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
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
                      can provide that fuller picture, either on their own or integrated with your invoicing tool.
                    </p>
                  </div>
                </section>

                {/* ——— What Invoicing Software Focuses On ——— */}
                <section id="invoicing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Strengths of invoicing-focused tools.">
                    What Invoicing Software Does Well
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Creating and sending branded invoices quickly.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Accepting online payments and recording them against open invoices.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Sending automated reminders for overdue invoices.</span>
                      </li>
                    </ul>
                    <p>
                      Tools like FreshBooks started as invoicing-first products and then added more accounting features
                      over time, blurring the line between the two categories.
                    </p>
                  </div>
                </section>

                {/* ——— What Accounting Software Adds ——— */}
                <section id="accounting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities that go beyond invoicing.">
                    What Full Accounting Software Adds
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Accounting platforms typically add:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Bank feeds and reconciliation to keep your books aligned with your accounts.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Expense tracking, bill management, and sometimes purchase orders.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Financial reporting (P&amp;L, balance sheet, cash flow) for decision-making and tax prep.</span>
                      </li>
                    </ul>
                    <p>
                      This is where tools like QuickBooks Online and Zoho Books shine: they give you a much more complete
                      picture of your business finances than invoicing-only apps.
                    </p>
                  </div>
                </section>

                {/* ——— When You Need One vs Both ——— */}
                <section id="one-vs-both" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How to decide which combination fits your business.">
                    When You Need Invoicing Tools, Accounting Software, or Both
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you are just starting out as a freelancer, a simple invoicing app with basic reports may be enough
                      for a season. As soon as you care about bank reconciliation, tax-ready financials, or tracking
                      profitability by client or project, you will want accounting software.
                    </p>
                    <p>
                      Many modern platforms bridge both worlds. FreshBooks, for example, started with invoicing but now
                      includes double-entry accounting. Wave offers free invoicing and accounting in a single product.{" "}
                      <Link
                        href="/accounting/compare"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Our comparisons
                      </Link>{" "}
                      and reviews can help you decide whether to run everything through one platform or connect separate
                      tools.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers about invoicing vs accounting tools.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: tools for invoicing and accounting (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Tools for Invoicing and Accounting"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/invoicing-software-vs-accounting-software" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoicing Software vs Accounting Software | BeltStack Guide",
    description:
      "See how invoicing tools differ from full accounting platforms, when invoicing-only is enough, and when your business needs full accounting software.",
  };
}

