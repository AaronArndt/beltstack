"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPick,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";

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

const TOP_PICKS: FeaturedPick[] = [
  {
    slug: "quickbooks-online",
    name: "QuickBooks Online",
    badge: "Best overall",
    descriptor: "Full-featured accounting for small businesses with invoicing, reporting, and tax tools.",
    rating: "4.6",
    price: "$30/mo",
    features: ["Invoicing & payments", "P&L and reports", "Bank sync"],
    reviewHref: `${ACCOUNTING_REVIEW_BASE}/quickbooks-online`,
    compareHref: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-xero`,
    logoSrc: "/Logos/quickbooks.png",
    visitUrl: "https://quickbooks.intuit.com",
  },
  {
    slug: "xero",
    name: "Xero",
    badge: "Best QuickBooks alternative",
    descriptor: "Cloud accounting with strong invoicing and multi-currency for growing businesses.",
    rating: "4.5",
    price: "$15/mo",
    features: ["Dashboard & reports", "Invoicing", "700+ integrations"],
    reviewHref: `${ACCOUNTING_REVIEW_BASE}/xero`,
    compareHref: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-xero`,
    logoSrc: "/Logos/xero.png",
    visitUrl: "https://www.xero.com",
  },
  {
    slug: "freshbooks",
    name: "FreshBooks",
    badge: "Best for freelancers",
    descriptor: "Simple invoicing and expense tracking built for freelancers and solopreneurs.",
    rating: "4.5",
    price: "$19/mo",
    features: ["Time tracking", "Invoicing", "Expenses"],
    reviewHref: `${ACCOUNTING_REVIEW_BASE}/freshbooks`,
    compareHref: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-freshbooks`,
    logoSrc: "/Logos/freshbooks.jpeg",
    visitUrl: "https://www.freshbooks.com",
  },
  {
    slug: "zoho-books",
    name: "Zoho Books",
    badge: "Best value",
    descriptor: "Affordable accounting with projects, inventory, and client portal.",
    rating: "4.4",
    price: "$15/mo",
    features: ["Invoicing", "Projects", "Client portal"],
    reviewHref: `${ACCOUNTING_REVIEW_BASE}/zoho-books`,
    compareHref: `${ACCOUNTING_COMPARE_BASE}/xero-vs-zoho-books`,
    logoSrc: "/Logos/zoho.jpeg",
    visitUrl: "https://www.zoho.com/books",
  },
  {
    slug: "wave",
    name: "Wave",
    badge: "Best free",
    descriptor: "Free accounting and invoicing for small businesses and freelancers.",
    rating: "4.3",
    price: "Free",
    features: ["Free invoicing", "Expense tracking", "Receipt scan"],
    reviewHref: `${ACCOUNTING_REVIEW_BASE}/wave`,
    compareHref: `${ACCOUNTING_COMPARE_BASE}/wave-vs-quickbooks-online`,
    logoSrc: "/Logos/wave.jpeg",
    visitUrl: "https://www.waveapps.com",
  },
];

const TABLE_ROWS: ComparisonTableRow[] = [
  { tool: "QuickBooks Online", bestFor: "Small business all-in-one", price: "$30/mo", rating: "4.6", slug: "quickbooks-online", logoSrc: "/Logos/quickbooks.png" },
  { tool: "Xero", bestFor: "QuickBooks alternative", price: "$15/mo", rating: "4.5", slug: "xero", logoSrc: "/Logos/xero.png" },
  { tool: "FreshBooks", bestFor: "Freelancers", price: "$19/mo", rating: "4.5", slug: "freshbooks", logoSrc: "/Logos/freshbooks.jpeg" },
  { tool: "Zoho Books", bestFor: "Value & projects", price: "$15/mo", rating: "4.4", slug: "zoho-books", logoSrc: "/Logos/zoho.jpeg" },
  { tool: "Wave", bestFor: "Free accounting", price: "Free", rating: "4.3", slug: "wave", logoSrc: "/Logos/wave.jpeg" },
  { tool: "Sage Accounting", bestFor: "SMBs & compliance", price: "Quote", rating: "4.3", slug: "sage-accounting", logoSrc: "/Logos/sage.png" },
  { tool: "Odoo Accounting", bestFor: "Odoo ERP users", price: "Quote", rating: "4.2", slug: "odoo-accounting", logoSrc: "/Logos/odoo.jpeg" },
  { tool: "Kashoo", bestFor: "Simple bookkeeping", price: "Quote", rating: "4.2", slug: "kashoo", logoSrc: "/Logos/kashoo.jpeg" },
];

const ACCOUNTING_GUIDES = [
  { title: "How Accounting Software Works", href: `${ACCOUNTING_GUIDES_BASE}/how-accounting-software-works`, description: "What accounting software does, from books to reports and tax prep." },
  { title: "Accounting for Small Business", href: `${ACCOUNTING_GUIDES_BASE}/accounting-for-small-business`, description: "Choosing and using accounting software for small teams and sole props." },
  { title: "QuickBooks Alternatives", href: `${ACCOUNTING_GUIDES_BASE}/quickbooks-alternatives`, description: "Compare Xero, FreshBooks, Zoho Books, and other options to QuickBooks." },
  { title: "Accounting vs Bookkeeping", href: `${ACCOUNTING_GUIDES_BASE}/accounting-vs-bookkeeping`, description: "How accounting software differs from bookkeeping tools and when you need both." },
  { title: "Invoicing Software vs Accounting", href: `${ACCOUNTING_GUIDES_BASE}/invoicing-software-vs-accounting`, description: "When to use invoicing-only tools versus full accounting software." },
];

const MORE_ACCOUNTING_OPTIONS = [
  { name: "Kashoo", description: "Simple cloud accounting for small business.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/kashoo` },
  { name: "Sage Accounting", description: "Accounting and compliance for growing SMBs.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/sage-accounting` },
  { name: "Odoo Accounting", description: "Accounting module in the Odoo business suite.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/odoo-accounting` },
  { name: "FreeAgent", description: "Accounting for freelancers and small agencies.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/freeagent` },
  { name: "Patriot Accounting", description: "Affordable accounting for small business.", reviewHref: `${ACCOUNTING_REVIEW_BASE}/patriot-accounting` },
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

/** High-priority comparisons only — full directory at /accounting/compare */
const RELATED_COMPARISONS = [
  { label: "QuickBooks Online vs Xero", href: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-xero` },
  { label: "QuickBooks Online vs FreshBooks", href: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-freshbooks` },
  { label: "QuickBooks Online vs Zoho Books", href: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-zoho-books` },
  { label: "QuickBooks Online vs Wave", href: `${ACCOUNTING_COMPARE_BASE}/quickbooks-online-vs-wave` },
  { label: "Xero vs FreshBooks", href: `${ACCOUNTING_COMPARE_BASE}/xero-vs-freshbooks` },
  { label: "Xero vs Zoho Books", href: `${ACCOUNTING_COMPARE_BASE}/xero-vs-zoho-books` },
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
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function AccountingIntroExtended() {
  return (
    <p>
      Accounting software helps businesses track income, manage expenses, generate financial reports, and prepare for taxes. This page compares the best accounting platforms for small businesses, freelancers, and contractors.
    </p>
  );
}

function AccountingHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating accounting tools">
        How to Choose Accounting Software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Accounting software helps you track income and expenses, run reports, and prepare for taxes. This page is for <Link href={`${ACCOUNTING_BEST_FOR_BASE}/small-business`} className={linkGreen}>small businesses</Link>, <Link href={`${ACCOUNTING_BEST_FOR_BASE}/freelancers`} className={linkGreen}>freelancers</Link>, and <Link href={`${ACCOUNTING_BEST_FOR_BASE}/contractors`} className={linkGreen}>contractors</Link>. For a curated shortlist see our <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> roundup; use the <Link href="/accounting/compare" className={linkGreen}>comparison table</Link>, <Link href={`${ACCOUNTING_GUIDES_BASE}/how-accounting-software-works`} className={linkGreen}>guides</Link>, and scenario picks below.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li><strong className="text-[#1A2D48]">Business type</strong> — Freelancers often need simple invoicing; small businesses need full books, reports, and tax prep. Some businesses prefer dedicated <Link href="/invoicing" className={linkGreen}>invoicing software</Link> instead of full accounting tools. Match the tool to your size and complexity.</li>
          <li><strong className="text-[#1A2D48]">Invoicing and expenses</strong> — Look for clear invoicing, expense tracking, and receipt capture. See our <Link href={`${ACCOUNTING_GUIDES_BASE}/accounting-for-small-business`} className={linkGreen}>accounting for small business</Link> guide.</li>
          <li><strong className="text-[#1A2D48]">Integrations</strong> — Bank feeds, <Link href="/payroll" className={linkGreen}>payroll</Link>, and ecommerce integrations keep books in sync. Check that your accounting software connects to the tools you already use.</li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
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
    <>
      <HubSectionTitle sub="Guides to choosing and using accounting software.">
        Accounting Guides
      </HubSectionTitle>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ACCOUNTING_GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <h3 className="text-[#1A2D48] text-lg font-bold hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed line-clamp-2">{guide.description}</p>
            <span className="mt-3 text-sm font-semibold text-[#10B981]">Read guide →</span>
          </Link>
        ))}
      </div>
      <p className="mt-5 text-sm text-[#6E6E6E]">
        Read our full reviews:{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/quickbooks-online`} className={linkGreen}>QuickBooks Online</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/xero`} className={linkGreen}>Xero</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/freshbooks`} className={linkGreen}>FreshBooks</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/zoho-books`} className={linkGreen}>Zoho Books</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/wave`} className={linkGreen}>Wave</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/sage-accounting`} className={linkGreen}>Sage Accounting</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/odoo-accounting`} className={linkGreen}>Odoo Accounting</Link>,{" "}
        <Link href={`${ACCOUNTING_REVIEW_BASE}/kashoo`} className={linkGreen}>Kashoo</Link>.
      </p>
    </>
  );
}

function AccountingPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side feature and pricing comparisons.">
        Popular Accounting Comparisons
      </HubSectionTitle>
      <div className="mt-4 flex flex-wrap items-center gap-2.5">
        {RELATED_COMPARISONS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            {item.label}
          </Link>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link href="/accounting/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded">
          View all accounting comparisons →
        </Link>
      </p>
    </>
  );
}

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

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
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">What matters when businesses choose accounting tools.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Invoicing and expense tracking</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Good accounting software lets you create invoices, track expenses, and capture receipts. Look for bank feeds, categorization, and reports that tie to tax categories so you stay organized for filing.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Financial reports and tax prep</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              P&amp;L, balance sheet, and cash flow reports help you understand the business. Tax-ready reports and export to your accountant or tax software reduce year-end work. Choose a tool that matches your reporting needs.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Integrations and scalability</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Accounting often needs to connect to payroll, ecommerce, or time tracking. Check that your platform integrates with the tools you use today and can grow with you—without forcing a migration later.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
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
      featuredPicks={TOP_PICKS}
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
        sectionSub: "Find accounting software that fits your situation.",
        description: "Choose a use case to see our top picks.",
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Accounting by business type",
        sectionSub: "Best accounting software by business type.",
        links: BY_INDUSTRY,
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
