"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import { ACCOUNTING_USE_CASE_EDITORIAL, ACCOUNTING_HUB_GUIDES } from "@/lib/data/accountingHubData";
import { getAccountingComparisonBySlug, getAccountingCompareUrlFromSlug } from "@/lib/data/accountingComparisons";
import { getAccountingReviewUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";

// ——— Accounting placeholder routes ———
const ACCOUNTING_REVIEW_BASE = "/accounting/review";
const ACCOUNTING_COMPARE_BASE = "/accounting/compare";
const ACCOUNTING_GUIDES_BASE = "/accounting/guides";
const ACCOUNTING_BEST_FOR_BASE = "/accounting/best-for";

// ——— Hero & key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall accounting software: QuickBooks Online", anchor: "#pick-quickbooks-online" },
  { label: "Best QuickBooks alternative: Xero", anchor: "#pick-xero" },
  { label: "Best for freelancers: FreshBooks", anchor: "#pick-freshbooks" },
  { label: "Best free accounting software: Wave", anchor: "#pick-wave" },
];

const HUB_TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "quickbooks-online" },
  { slug: "xero" },
  { slug: "freshbooks" },
  { slug: "zoho-books" },
  { slug: "wave" },
];

const TABLE_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("accounting", ["quickbooks-online", "xero", "freshbooks", "zoho-books", "wave"]).map(toHubComparisonTableRow),
  { tool: "Sage Accounting", bestFor: "SMBs & compliance", price: "Quote", rating: "4.3", slug: "sage-accounting", logoSrc: "/Logos/sage.png" },
  { tool: "Odoo Accounting", bestFor: "Odoo ERP users", price: "Quote", rating: "4.2", slug: "odoo-accounting", logoSrc: "/Logos/odoo.jpeg" },
  { tool: "Kashoo", bestFor: "Simple bookkeeping", price: "Quote", rating: "4.2", slug: "kashoo", logoSrc: "/Logos/kashoo.jpeg" },
  { tool: "NetSuite", bestFor: "ERP-integrated accounting", price: "Quote", rating: "4.1", slug: "netsuite", logoSrc: "/Logos/netsuite.jpeg" },
  { tool: "Sage Intacct", bestFor: "Scalable finance & reporting", price: "Quote", rating: "4.1", slug: "sage-intacct", logoSrc: "/Logos/sage.png" },
  { tool: "Acumatica", bestFor: "ERP-connected workflows", price: "Quote", rating: "4.0", slug: "acumatica", logoSrc: "/Logos/acumatica.jpeg" },
  { tool: "Microsoft Dynamics 365", bestFor: "Microsoft ERP ecosystem", price: "Quote", rating: "4.0", slug: "microsoft-dynamics", logoSrc: "/Logos/microsoft.png" },
  { tool: "ZipBooks", bestFor: "Simplicity-first accounting", price: "Quote", rating: "4.0", slug: "zipbooks", logoSrc: "/Logos/zipbooks.jpeg" },
  { tool: "Akaunting", bestFor: "Lightweight accounting", price: "Quote", rating: "4.0", slug: "akaunting", logoSrc: "/Logos/akaunting.jpeg" },
];

const MORE_ACCOUNTING_OPTIONS = [
  { name: "Kashoo", description: "Simple cloud accounting for small business.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/kashoo` },
  { name: "Sage Accounting", description: "Accounting and compliance for growing SMBs.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/sage-accounting` },
  { name: "Odoo Accounting", description: "Accounting module in the Odoo business suite.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/odoo-accounting` },
  { name: "NetSuite", description: "ERP-integrated accounting for mid-market and enterprise.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/netsuite` },
  { name: "Sage Intacct", description: "Scalable accounting and multi-dimensional reporting.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/sage-intacct` },
  { name: "Acumatica", description: "ERP-connected accounting and workflow automation.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/acumatica` },
  { name: "Microsoft Dynamics 365", description: "Accounting inside the Microsoft ERP ecosystem.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/microsoft-dynamics` },
  { name: "ZipBooks", description: "Modern, simplicity-first accounting for growing teams.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/zipbooks` },
  { name: "Akaunting", description: "Lightweight accounting for practical invoicing and reporting.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/akaunting` },
];

const BEST_FOR_SCENARIOS = [
  { label: "Best accounting software (roundup)", href: "/accounting/best-accounting-software" },
  { label: "Compare accounting software", href: "/accounting/compare" },
  { label: "Accounting guides", href: "/accounting/guides" },
  { label: "Freelancers", href: `${ACCOUNTING_BEST_FOR_BASE}/freelancers` },
  { label: "Contractors", href: `${ACCOUNTING_BEST_FOR_BASE}/contractors` },
  { label: "Small businesses", href: `${ACCOUNTING_BEST_FOR_BASE}/small-business` },
  { label: "Ecommerce", href: `${ACCOUNTING_BEST_FOR_BASE}/ecommerce` },
  { label: "Agencies", href: `${ACCOUNTING_BEST_FOR_BASE}/agencies` },
];

const BY_INDUSTRY = [
  { label: "Freelancers", href: `${ACCOUNTING_BEST_FOR_BASE}/freelancers` },
  { label: "Contractors", href: `${ACCOUNTING_BEST_FOR_BASE}/contractors` },
  { label: "Small businesses", href: `${ACCOUNTING_BEST_FOR_BASE}/small-business` },
  { label: "Ecommerce", href: `${ACCOUNTING_BEST_FOR_BASE}/ecommerce` },
  { label: "Agencies", href: `${ACCOUNTING_BEST_FOR_BASE}/agencies` },
];

const BY_INDUSTRY_GROUPS = [
  { groupLabel: "Primary business types", links: BY_INDUSTRY.slice(0, 3) },
  { groupLabel: "Other business types", links: BY_INDUSTRY.slice(3) },
];

/** Slugs for Popular Accounting Comparisons cards; data from getAccountingComparisonBySlug. */
const POPULAR_ACCOUNTING_COMPARISON_SLUGS = [
  "quickbooks-online-vs-xero",
  "quickbooks-online-vs-freshbooks",
  "quickbooks-online-vs-zoho-books",
  "quickbooks-online-vs-wave",
  "xero-vs-freshbooks",
  "xero-vs-zoho-books",
  "odoo-vs-quickbooks-online",
  "odoo-vs-xero",
  "odoo-vs-netsuite",
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best accounting software for small businesses?",
    a: "QuickBooks Online is our top pick for most small businesses: it handles invoicing, expenses, reporting, and tax prep in one place. Xero is a strong alternative with a lower starting price. FreshBooks fits freelancers who prioritize simplicity.",
  },
  {
    q: "Is QuickBooks still the best accounting software?",
    a: "QuickBooks Online remains the market leader for small business accounting due to its features, integrations, and ecosystem. Xero and FreshBooks are strong alternatives depending on whether you want a full QuickBooks alternative or a simpler tool for freelancers.",
  },
  {
    q: "What accounting software is best for freelancers?",
    a: "FreshBooks and Wave are well suited to freelancers: both offer simple invoicing, expense tracking, and time tracking. FreshBooks has more project and client features; Wave is free for core accounting and invoicing.",
  },
  {
    q: "What is the difference between accounting software and bookkeeping software?",
    a: "Bookkeeping focuses on recording transactions (income, expenses, bank feeds). Accounting software typically includes bookkeeping plus financial reports (P&L, balance sheet), tax preparation, and sometimes inventory or projects. Many products do both; the line varies by vendor.",
  },
];

const METHODOLOGY_BULLETS = [
  "We test accounting workflows: invoicing, expense tracking, reporting, and bank reconciliation.",
  "We compare pricing tiers, limits, and add-ons so you can budget accurately.",
  "Reviews are written for small businesses, freelancers, and contractors.",
];

// ——— Section components (match payroll hub) ———
const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function AccountingIntroExtended() {
  return (
    <p>
      Accounting software helps businesses track income, manage expenses, generate financial reports, and prepare for taxes. This page compares the best accounting platforms for small businesses, freelancers, and contractors. For scenario entry points, start with our{" "}
      <Link href="/accounting/best-for" className={linkGreen}>
        best accounting software by use case
      </Link>{" "}
      hub; once payroll is in scope, see how it ties to the books in our{" "}
      <Link href="/payroll" className={linkGreen}>
        payroll software hub
      </Link>
      .
    </p>
  );
}

function AccountingHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating accounting tools">
        How to Choose Accounting Software
      </HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        Accounting software helps you track income and expenses, run reports, and prepare for taxes. This page is for <Link href={`${ACCOUNTING_BEST_FOR_BASE}/small-business`} className={linkGreen}>small businesses</Link>, <Link href={`${ACCOUNTING_BEST_FOR_BASE}/freelancers`} className={linkGreen}>freelancers</Link>, and <Link href={`${ACCOUNTING_BEST_FOR_BASE}/contractors`} className={linkGreen}>contractors</Link>. For a curated shortlist see our <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> roundup; use the <Link href="/accounting/compare" className={linkGreen}>comparison table</Link>, <Link href={`${ACCOUNTING_GUIDES_BASE}/how-accounting-software-works`} className={linkGreen}>guides</Link>, and scenario picks below.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li><strong className="text-[#1A2D48]">Business type</strong> — Freelancers often need simple invoicing; small businesses need full books, reports, and tax prep. Some businesses prefer dedicated <Link href="/invoicing" className={linkGreen}>invoicing software</Link> instead of full accounting tools. Match the tool to your size and complexity.</li>
          <li><strong className="text-[#1A2D48]">Invoicing and expenses</strong> — Look for clear invoicing, expense tracking, and receipt capture. See our <Link href={`${ACCOUNTING_GUIDES_BASE}/accounting-for-small-business`} className={linkGreen}>accounting for small business</Link> guide.</li>
          <li><strong className="text-[#1A2D48]">Integrations</strong> — Bank feeds, <Link href="/payroll" className={linkGreen}>payroll</Link>, and ecommerce integrations keep books in sync. Check that your accounting software connects to the tools you already use.</li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li><strong className="text-[#1A2D48]">Reporting and tax</strong> — P&amp;L, balance sheet, and tax-ready reports matter for year-end and filing. <Link href={`${ACCOUNTING_GUIDES_BASE}/how-accounting-software-works`} className={linkGreen}>How accounting software works</Link>.</li>
          <li><strong className="text-[#1A2D48]">Pricing</strong> — Many products use tiered plans by features or transaction volume; compare at your expected usage. <Link href={`${ACCOUNTING_GUIDES_BASE}/quickbooks-alternatives`} className={linkGreen}>QuickBooks alternatives</Link>.</li>
          <li><strong className="text-[#1A2D48]">Accounting vs bookkeeping</strong> — Full accounting adds reporting and tax prep to bookkeeping basics. <Link href={`${ACCOUNTING_GUIDES_BASE}/accounting-vs-bookkeeping`} className={linkGreen}>Accounting vs bookkeeping</Link> explains the difference.</li>
        </ul>
      </div>
    </>
  );
}

function AccountingGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Accounting guides"
      sectionSub="Learn how pricing, reporting depth, and workflows fit together—before you shortlist vendors."
      intro={
        <>
          Educational articles on evaluation and concepts—not duplicate product picks. For scenario-based recommendations, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best accounting software by use case
          </a>
          ; for identity entry points (freelancer vs ecommerce), see{" "}
          <a href="#by-trade" className={linkGreen}>
            accounting by business type
          </a>
          .
        </>
      }
      guides={ACCOUNTING_HUB_GUIDES}
      footer={
        <>
          Read our full reviews:{" "}
          <Link href={`${ACCOUNTING_REVIEW_BASE}/quickbooks-online`} className={linkGreen}>
            QuickBooks Online
          </Link>
          ,{" "}
          <Link href={`${ACCOUNTING_REVIEW_BASE}/xero`} className={linkGreen}>
            Xero
          </Link>
          ,{" "}
          <Link href={`${ACCOUNTING_REVIEW_BASE}/freshbooks`} className={linkGreen}>
            FreshBooks
          </Link>
          ,{" "}
          <Link href={`${ACCOUNTING_REVIEW_BASE}/zoho-books`} className={linkGreen}>
            Zoho Books
          </Link>
          ,{" "}
          <Link href={`${ACCOUNTING_REVIEW_BASE}/wave`} className={linkGreen}>
            Wave
          </Link>
          .
        </>
      }
    />
  );
}

function AccountingPopularComparisonsSection() {
  const cards = POPULAR_ACCOUNTING_COMPARISON_SLUGS.map((slug) => {
    const data = getAccountingComparisonBySlug(slug);
    return data ? { slug, data } : null;
  }).filter(Boolean) as { slug: string; data: NonNullable<ReturnType<typeof getAccountingComparisonBySlug>> }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side accounting features, pricing, and recommendations.">
        Popular Accounting Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, data }) => {
          const title = `${data.productA.name} vs ${data.productB.name}`;
          const summary =
            data.summaryParagraph.length > 140
              ? data.summaryParagraph.slice(0, 140).trim() + "…"
              : data.summaryParagraph;
          const compareHref = getAccountingCompareUrlFromSlug(slug);
          return (
            <Link
              key={slug}
              href={compareHref}
              className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {data.productA.logoSrc ? (
                  <img
                    src={data.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productA.name}</span>
                )}
                <span className="text-[#57534E] text-lg font-medium" aria-hidden>vs</span>
                {data.productB.logoSrc ? (
                  <img
                    src={data.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{data.productB.name}</span>
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                {title}
              </h3>
              <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link href="/accounting/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded">
          View all accounting comparisons →
        </Link>
      </p>
    </>
  );
}

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";

function AccountingFinderForm() {
  const [businessType, setBusinessType] = useState("");
  const [teamSize, setTeamSize] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="accounting-business-type" className="block text-sm font-semibold text-[#1A2D48]">
          Business type
        </label>
        <select
          id="accounting-business-type"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className={`mt-1 ${selectClass}`}
        >
          <option value="">Select</option>
          <option value="freelancer">Freelancer</option>
          <option value="contractor">Contractor</option>
          <option value="small-business">Small business</option>
          <option value="ecommerce">Ecommerce</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="accounting-team-size" className="block text-sm font-semibold text-[#1A2D48]">
          Team size
        </label>
        <select
          id="accounting-team-size"
          value={teamSize}
          onChange={(e) => setTeamSize(e.target.value)}
          className={`mt-1 ${selectClass}`}
        >
          <option value="">Select</option>
          <option value="solo">Solo</option>
          <option value="2-5">2–5</option>
          <option value="6-20">6–20</option>
          <option value="21+">21+</option>
        </select>
      </div>
      <button type="submit" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function AccountingEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What businesses should look for in accounting software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">What matters when businesses choose accounting tools.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Invoicing and expense tracking</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Good accounting software lets you create invoices, track expenses, and capture receipts. Look for bank feeds, categorization, and reports that tie to tax categories so you stay organized for filing.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Financial reports and tax prep</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              P&amp;L, balance sheet, and cash flow reports help you understand the business. Tax-ready reports and export to your accountant or tax software reduce year-end work. Choose a tool that matches your reporting needs.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations and scalability</h3>
            <p className="mt-1.5 text-[#57534E] text-sm leading-relaxed">
              Accounting often needs to connect to payroll, ecommerce, or time tracking. Check that your platform integrates with the tools you use today and can grow with you—without forcing a migration later.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Invoicing and payments
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Expense tracking and receipts
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Bank and credit card feeds
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                P&amp;L and balance sheet
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Tax-ready reports
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Integrations (payroll, ecommerce)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function AccountingPage() {
  return (
    <HubPageTemplate
      title="Best Accounting Software for Small Businesses (2026)"
      intro="Compare accounting tools for bookkeeping, invoicing, reporting, and tax preparation."
      breadcrumbLabel="Accounting"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="accounting"
      featuredPicks={HUB_TOP_PICK_REFS}
      featuredPicksTitle="Top accounting picks"
      featuredPicksSub="Hand-picked for small businesses and freelancers. Updated monthly."
      comparisonTable={{
        title: "Compare accounting software",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: `${ACCOUNTING_REVIEW_BASE}/`,
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular accounting platforms."
      introExtended={<AccountingIntroExtended />}
      howToChooseSection={<AccountingHowToChooseSection />}
      guidesSection={<AccountingGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best accounting software by use case"
          sectionSub="Scenario-based picks—complexity, channels, and workforce mix—not your industry label alone."
          intro={
            <>
              Each blurb explains who it fits and what to validate first. For industry-style entry points, use{" "}
              <a href="#by-trade" className={linkGreen}>
                accounting by business type
              </a>
              ; for concepts and pricing, see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                accounting guides
              </a>
              .
            </>
          }
          blocks={ACCOUNTING_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<AccountingPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Accounting Software Overall",
        description: "View our full rankings of the best accounting software for small businesses and freelancers, with detailed pros, cons, and recommendations.",
        linkText: "See full rankings →",
        href: "/accounting/best-accounting-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/accounting/best-accounting-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/accounting/best-accounting-software" }}
      scenarioLinks={{
        sectionTitle: "Best accounting software by use case",
        sectionSub: "Scenario links and deep dives.",
        description: undefined,
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Accounting by business type",
        sectionSub:
          "Identity-based navigation: how you describe your business (freelancer, contractor, ecommerce)—not workflow complexity alone.",
        links: [],
        groups: BY_INDUSTRY_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Accounting software FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review accounting software",
        sub: "Transparent process, small-business–focused criteria.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information.",
        bullets: METHODOLOGY_BULLETS,
      }}
      finderSection={{
        title: "Find the right accounting fit",
        sub: "Narrow down by business type and team size.",
        content: <AccountingFinderForm />,
      }}
      educationSection={<AccountingEducationSection />}
    />
  );
}
