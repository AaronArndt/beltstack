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
    q: "How much does accounting software cost per month?",
    a: "Entry-level plans for small businesses often start around $15–$30 per month, while more advanced tiers with extra users, inventory, or project tracking can run $60–$100+ per month. Pricing varies widely by provider and feature set.",
  },
  {
    q: "Are there free accounting software options?",
    a: "Yes. Tools like Wave offer a free core accounting plan and make money on payment processing and payroll add-ons. Free tools can work for very small businesses with simple needs, but you may outgrow them as your complexity increases.",
  },
  {
    q: "What drives the price of accounting software up?",
    a: "Common drivers include extra users, advanced reporting, inventory and project modules, multi-entity support, and premium support tiers. Integrations and add-ons such as payroll or advanced payments can also increase total monthly spend.",
  },
  {
    q: "How should I compare pricing between platforms?",
    a: "Look at total cost for your expected number of users, entities, and add-ons—not just headline plan prices. Consider whether annual discounts, limits on invoices or bills, and included support match how your business operates.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  {
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    rating: 4.3,
    bestFor: "Best free accounting",
    reviewHref: getAccountingReviewUrl("wave"),
  },
  {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: 4.5,
    bestFor: "Best for freelancers",
    reviewHref: getAccountingReviewUrl("freshbooks"),
  },
  {
    name: "Zoho Books",
    logoSrc: "/Logos/zoho.jpeg",
    rating: 4.4,
    bestFor: "Best value if you use Zoho",
    reviewHref: getAccountingReviewUrl("zoho-books"),
  },
];

export default function AccountingSoftwarePricingGuidePage() {
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
                      Accounting Software Pricing
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Accounting Software Pricing Guide
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Understand how accounting software providers price their plans, what drives costs, and how to compare
                    options based on your budget.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Accounting software pricing can feel confusing when every provider slices features and users
                      differently. One platform might look cheaper up front but require expensive add-ons later, while
                      another bundles more into a higher base fee.
                    </p>
                    <p>
                      This guide walks through common pricing models, what drives cost, and how to compare tools like{" "}
                      <Link
                        href={getAccountingReviewUrl("wave")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Wave
                      </Link>
                      ,{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>
                      , and{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero
                      </Link>{" "}
                      so you can budget with fewer surprises. For side-by-side breakdowns, see our{" "}
                      <Link
                        href="/accounting/compare"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        accounting software comparisons
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— Common Pricing Models ——— */}
                <section id="pricing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How most platforms structure their plans.">
                    Common Accounting Software Pricing Models
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Most accounting platforms use one or more of these models:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Tiered monthly plans</strong> — Different feature bundles
                          (e.g. Simple Start, Essentials, Plus) at increasing price points.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Per-user pricing</strong> — Plans that increase in cost as
                          you add more staff, accountants, or external collaborators.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Usage-based or transaction-based fees</strong> — Extra
                          charges for online payments, invoices beyond a certain limit, or additional entities.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Free core plans with paid add-ons</strong> — As with Wave,
                          where accounting is free and revenue comes from payment processing and payroll.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— What Drives Cost ——— */}
                <section id="what-drives-cost" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Factors that make one plan more expensive than another.">
                    What Drives Accounting Software Costs Up
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Key cost drivers include:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Adding more users, accountants, or bookkeepers to your account.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Needing advanced modules like inventory, job costing, or multi-entity support.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Turning on add-ons such as payroll, bill pay automation, or advanced reporting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Processing a high volume of card payments or ACH transfers through built-in processors.</span>
                      </li>
                    </ul>
                    <p>
                      When comparing providers, consider total cost for your expected usage over the next 12–24 months,
                      not just the first promotional month.
                    </p>
                  </div>
                </section>

                {/* ——— How to Compare Value ——— */}
                <section id="compare-value" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Beyond sticker price: what you get for what you pay.">
                    How to Compare Accounting Software Pricing and Value
                  </SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Price alone does not tell you whether a platform is a good fit. A slightly more expensive plan that
                      saves hours of manual work each month may be better value than a rock-bottom price that requires more
                      spreadsheets.
                    </p>
                    <p>
                      Start by listing the features you truly need—bank feeds, invoicing, project tracking, or inventory—
                      and then compare how tools like Wave, FreshBooks, Zoho Books,{" "}
                      <Link
                        href={getAccountingReviewUrl("quickbooks-online")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online
                      </Link>{" "}
                      and{" "}
                      <Link
                        href={getAccountingReviewUrl("xero")}
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Xero
                      </Link>{" "}
                      deliver them at different price points.
                    </p>
                    <p>
                      For more detailed matchups, check our{" "}
                      <Link
                        href="/accounting/compare/quickbooks-online-vs-xero"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online vs Xero
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="/accounting/compare/quickbooks-online-vs-freshbooks"
                        className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        QuickBooks Online vs FreshBooks
                      </Link>{" "}
                      comparisons.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common pricing questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar: accounting software by budget (desktop only) ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Accounting Software by Budget"
                items={GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedAccountingResources excludeHref="/accounting/guides/accounting-software-pricing" />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Accounting Software Pricing | BeltStack Guide",
    description:
      "Learn how accounting software pricing works, what drives costs up, and how to compare plans based on your budget and feature needs.",
  };
}

