"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HubPageTemplate,
  type FeaturedPickRef,
  type ComparisonTableRow,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { getPayrollReviewUrl, getPayrollCompareUrl } from "@/lib/routes";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  PAYROLL_HUB_GUIDES,
  PAYROLL_HUB_POPULAR_COMPARISONS,
  PAYROLL_USE_CASE_EDITORIAL,
} from "@/lib/data/payrollHubData";
import { getPayrollComparisonBySlug } from "@/lib/data/payrollComparisons";

// ——— Payroll-specific data ———

const KEY_TAKEAWAYS = [
  { label: "Best overall for most contractors: Gusto", anchor: "#pick-gusto" },
  { label: "Best if you already use QuickBooks: QuickBooks Payroll", anchor: "#pick-quickbooks-payroll" },
  { label: "Best value for simple payroll: OnPay", anchor: "#pick-onpay" },
  { label: "Best for larger teams: ADP", anchor: "#pick-adp" },
];

const HUB_TOP_PICK_REFS: FeaturedPickRef[] = [
  { slug: "gusto" },
  { slug: "quickbooks-payroll" },
  { slug: "onpay" },
  { slug: "adp" },
];

const TABLE_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("payroll", ["gusto", "quickbooks-payroll", "onpay", "adp", "paychex"]).map(toHubComparisonTableRow),
  { tool: "Rippling", bestFor: "Payroll + HR + IT in one", price: "Quote", rating: "4.6", slug: "rippling", logoSrc: "/Logos/rippling.jpeg" },
  { tool: "Square Payroll", bestFor: "Square ecosystem users", price: "$35/mo", rating: "4.3", slug: "square-payroll", logoSrc: "/Logos/square.jpeg" },
  { tool: "Patriot Payroll", bestFor: "Budget-conscious small business", price: "$17/mo", rating: "4.2", slug: "patriot-payroll", logoSrc: "/Logos/patriot.jpeg" },
  { tool: "Justworks", bestFor: "PEO-style payroll and benefits", price: "Quote", rating: "4.5", slug: "justworks", logoSrc: "/Logos/justworks.jpeg" },
  { tool: "Deel", bestFor: "Global contractors and EOR", price: "Quote", rating: "4.6", slug: "deel", logoSrc: "/Logos/deel.jpeg" },
  { tool: "SurePayroll", bestFor: "Simple payroll + full-service option", price: "Quote", rating: "4.2", slug: "surepayroll", logoSrc: "/Logos/surepayroll.jpeg" },
  { tool: "Wave", bestFor: "Free accounting + payroll add-on", price: "Add-on", rating: "4.3", slug: "wave", logoSrc: "/Logos/wave.jpeg" },
];

const BEST_FOR_SCENARIOS = [
  { label: "Best payroll software (roundup)", href: "/payroll/best-payroll-software" },
  { label: "Compare payroll software", href: "/payroll/compare" },
  { label: "Payroll guides", href: "/payroll/guides" },
  { label: "Contractors", href: "/payroll/best-for/contractors" },
  { label: "Small business", href: "/payroll/best-for/small-business" },
  { label: "1099 contractors", href: "/payroll/best-for/1099-contractors" },
  { label: "Hourly employees", href: "/payroll/best-for/hourly-employees" },
  { label: "Growing businesses", href: "/payroll/best-for/growing-businesses" },
  { label: "Construction", href: "/payroll/best-for/construction" },
  { label: "Landscaping", href: "/payroll/best-for/landscaping" },
  { label: "Plumbing", href: "/payroll/best-for/plumbing" },
  { label: "Electricians", href: "/payroll/best-for/electricians" },
  { label: "Roofing", href: "/payroll/best-for/roofing" },
];

const BY_TRADE = [
  { label: "HVAC", href: "/payroll/best-for/hvac" },
  { label: "Plumbing", href: "/payroll/best-for/plumbing" },
  { label: "Electrical", href: "/payroll/best-for/electricians" },
  { label: "Landscaping", href: "/payroll/best-for/landscaping" },
  { label: "Roofing", href: "/payroll/best-for/roofing" },
  { label: "Cleaning", href: "/payroll/best-for/cleaning-business" },
  { label: "Painters", href: "/payroll/best-for/painters" },
  { label: "Pest control", href: "/payroll/best-for/pest-control" },
  { label: "Lawn care", href: "/payroll/best-for/lawn-care" },
  { label: "Tree service", href: "/payroll/best-for/tree-service" },
  { label: "Remodeling", href: "/payroll/best-for/remodeling-contractors" },
  { label: "General contractors", href: "/payroll/best-for/general-contractors" },
  { label: "Handyman", href: "/payroll/best-for/handyman-business" },
  { label: "Pool service", href: "/payroll/best-for/pool-service" },
  { label: "Home services", href: "/payroll/best-for/home-services" },
  { label: "Property management", href: "/payroll/best-for/property-management" },
  { label: "Maintenance companies", href: "/payroll/best-for/maintenance-companies" },
  { label: "Auto repair", href: "/payroll/best-for/auto-repair" },
  { label: "Restaurants", href: "/payroll/best-for/restaurants" },
  { label: "Retail", href: "/payroll/best-for/retail" },
  { label: "Agriculture", href: "/payroll/best-for/agriculture" },
  { label: "Nonprofits", href: "/payroll/best-for/nonprofits" },
];

const BY_TRADE_GROUPS = [
  {
    groupLabel: "Primary business types",
    links: BY_TRADE.slice(0, 18),
  },
  {
    groupLabel: "Other business types",
    links: BY_TRADE.slice(18),
  },
];

const METHODOLOGY_BULLETS = [
  "We test payroll workflows (W-2, 1099, multi-state) and rate ease of use for contractors.",
  "We compare published pricing, add-ons, and hidden fees so you can budget accurately.",
  "Reviews are written for trade businesses—job costing, compliance, and support matter.",
];

// ——— Pillar sections (reuse BeltStack card/link styling) ———
function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function PayrollIntroExtended() {
  return (
    <p>
      Find top picks, side-by-side comparisons, payroll guides, and industry-specific recommendations. Businesses that invoice clients may also use <Link href="/invoicing" className={linkGreen}>invoicing software</Link> like <Link href="/invoicing/review/freshbooks" className={linkGreen}>FreshBooks</Link> for billing.
    </p>
  );
}

function PayrollHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating payroll tools">
        How to Choose Payroll Software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Payroll software automates pay runs, tax withholdings, filing, and pay stubs. Use the{" "}
        <Link href="#compare" className={linkGreen}>
          comparison table
        </Link>
        , then{" "}
        <a href="#by-scenario" className={linkGreen}>
          scenario-based picks
        </a>{" "}
        when you know your situation—or{" "}
        <a href="#payroll-guides" className={linkGreen}>
          guides
        </a>{" "}
        to learn pricing and compliance first. Our{" "}
        <Link href="/payroll/best-payroll-software" className={linkGreen}>
          full rankings
        </Link>{" "}
        and{" "}
        <Link href="/payroll/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        round out product research.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li><strong className="text-[#1A2D48]">Team size</strong> — Pricing often scales by headcount; small teams need different features than growing or multi-state teams.</li>
          <li><strong className="text-[#1A2D48]">Employees vs contractors</strong> — If you pay 1099s, look for contractor self-service and 1099 e-file. See our <Link href="/payroll/guides/payroll-for-contractors" className={linkGreen}>payroll for contractors</Link> guide.</li>
          <li><strong className="text-[#1A2D48]">Accounting integrations</strong> — Sync with <Link href="/accounting" className={linkGreen}>accounting software</Link> such as QuickBooks or Xero so labor costs flow into job costing and P&amp;L.</li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li><strong className="text-[#1A2D48]">Tax automation</strong> — Full-service payroll handles withholdings, deposits, and filing; understand what’s included. <Link href="/payroll/guides/how-payroll-software-works" className={linkGreen}>How payroll software works</Link>.</li>
          <li><strong className="text-[#1A2D48]">Pricing</strong> — Base fee plus per-person costs are common; compare total cost at your headcount. <Link href="/payroll/guides/payroll-software-pricing" className={linkGreen}>Payroll software pricing</Link>.</li>
          <li><strong className="text-[#1A2D48]">Reporting and HR</strong> — Time tracking, PTO, benefits, and reports matter for scaling teams; <Link href="/payroll/guides/payroll-for-small-business" className={linkGreen}>payroll for small business</Link> covers fit by size.</li>
        </ul>
      </div>
    </>
  );
}

function PayrollGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="Payroll guides"
      sectionSub="Learn how pricing, taxes, and workflows work—before you shortlist vendors."
      intro={
        <>
          These articles are educational: evaluation, compliance, and cost—not duplicate product picks. For recommendations by situation, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best payroll software by use case
          </a>
          ; for industry entry points, see{" "}
          <a href="#by-trade" className={linkGreen}>
            payroll by business type
          </a>
          .
        </>
      }
      guides={PAYROLL_HUB_GUIDES}
      footer={
        <>
          Read our full reviews:{" "}
          <Link href={getPayrollReviewUrl("gusto")} className={linkGreen}>
            Gusto
          </Link>
          ,{" "}
          <Link href={getPayrollReviewUrl("quickbooks-payroll")} className={linkGreen}>
            QuickBooks Payroll
          </Link>
          ,{" "}
          <Link href={getPayrollReviewUrl("onpay")} className={linkGreen}>
            OnPay
          </Link>
          ,{" "}
          <Link href={getPayrollReviewUrl("adp")} className={linkGreen}>
            ADP
          </Link>
          ,{" "}
          <Link href={getPayrollReviewUrl("rippling")} className={linkGreen}>
            Rippling
          </Link>
          ,{" "}
          <Link href={getPayrollReviewUrl("square-payroll")} className={linkGreen}>
            Square Payroll
          </Link>
          ,{" "}
          <Link href={getPayrollReviewUrl("patriot-payroll")} className={linkGreen}>
            Patriot Payroll
          </Link>
          .{" "}
          <Link href="/payroll/guides" className={linkGreen}>
            All payroll guides →
          </Link>
        </>
      }
    />
  );
}

function PayrollPopularComparisonsSection() {
  const cards = PAYROLL_HUB_POPULAR_COMPARISONS.map((item) => {
    const data = getPayrollComparisonBySlug(item.slug);
    return data ? { slug: item.slug, href: item.href, data } : null;
  }).filter(Boolean) as { slug: string; href: string; data: NonNullable<ReturnType<typeof getPayrollComparisonBySlug>> }[];

  return (
    <>
      <HubSectionTitle sub="Side-by-side payroll features, pricing, and recommendations.">
        Popular Payroll Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ slug, href, data }) => {
          const title = `${data.productA.name} vs ${data.productB.name}`;
          const summary =
            data.summaryParagraph.length > 140
              ? data.summaryParagraph.slice(0, 140).trim() + "…"
              : data.summaryParagraph;
          return (
            <Link
              key={slug}
              href={href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
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
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#6E6E6E]">{data.productA.name}</span>
                )}
                <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>vs</span>
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
                  <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#6E6E6E]">{data.productB.name}</span>
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                {title}
              </h3>
              <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link
          href="/payroll/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all payroll comparisons →
        </Link>
      </p>
    </>
  );
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "Can payroll software pay 1099 contractors?",
    a: "Yes. Most payroll tools let you run 1099 contractor payments and file 1099-NEC forms. Look for \"contractor payments\" or \"1099\" in the feature list and confirm state e-file support.",
  },
  {
    q: "What's the best payroll software for small construction businesses?",
    a: "Gusto and QuickBooks Payroll are top choices for small construction: both handle W-2 and 1099, integrate with common accounting tools, and scale from a few employees to dozens. Pick Gusto for all-in-one HR; pick QuickBooks Payroll if you already use QuickBooks for books.",
  },
  {
    q: "How much does payroll software cost?",
    a: "Base plans often start around $30–$50/month plus per-employee or per-contractor fees. Full-service (tax filing, support) usually costs more. We list starting prices in our comparison table and reviews.",
  },
  {
    q: "Do contractors need payroll if they only use subcontractors?",
    a: "If you only pay 1099 subs and don't have W-2 employees, you may not need full payroll software—but you still need to track payments and file 1099s. Some accounting or contractor-management tools include 1099 tracking; otherwise a dedicated 1099 solution can help.",
  },
  {
    q: "Is QuickBooks Payroll good for contractors?",
    a: "Yes, especially if you already use QuickBooks for bookkeeping. It handles W-2 and 1099, integrates with QuickBooks so job costing and books stay in sync, and offers same-day direct deposit. It's a strong fit for contractors who want one ecosystem.",
  },
];

// Finder form needs these tokens (match template/homepage)
const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

function PayrollFinderForm() {
  const [teamSize, setTeamSize] = useState("");
  const [payType, setPayType] = useState("");
  const [need1099, setNeed1099] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: no filter logic yet
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="payroll-team-size" className="block text-sm font-semibold text-[#1A2D48]">
          Team size
        </label>
        <select
          id="payroll-team-size"
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
      <div className="flex-1">
        <label htmlFor="payroll-pay-type" className="block text-sm font-semibold text-[#1A2D48]">
          Pay type
        </label>
        <select
          id="payroll-pay-type"
          value={payType}
          onChange={(e) => setPayType(e.target.value)}
          className={`mt-1 ${selectClass}`}
        >
          <option value="">Select</option>
          <option value="hourly">Hourly</option>
          <option value="salary">Salary</option>
          <option value="mixed">Mixed</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="payroll-1099" className="block text-sm font-semibold text-[#1A2D48]">
          Need to pay 1099s?
        </label>
        <select
          id="payroll-1099"
          value={need1099}
          onChange={(e) => setNeed1099(e.target.value)}
          className={`mt-1 ${selectClass}`}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button type="submit" className={btnPrimary}>
        See results
      </button>
    </form>
  );
}

function PayrollEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">What businesses should look for in payroll software</h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">What matters when businesses choose payroll software.</p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">W-2 vs 1099 support</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Trade businesses often mix employees (W-2) and subcontractors (1099). Your payroll software should handle both, run contractor payments, and file 1099-NEC forms. Look for clear 1099 workflows and state e-file support.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Job costing and project tracking</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              Allocating labor to jobs or projects helps you track profitability. Some payroll tools integrate with job-costing or accounting software so hours and wages flow into the right job—essential for contractors who bid by project.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Multi-state compliance</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
              If you have workers in more than one state, payroll must handle state withholding, unemployment, and local taxes. Choose a provider that supports multi-state registration and filing so you stay compliant as you grow.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                W-2 and 1099 payment runs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Tax filing and deposit
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Direct deposit and pay stubs
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Multi-state support
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Time tracking or integration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Contractor self-service portal
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PayrollPage() {
  return (
    <HubPageTemplate
      title="Payroll Software for Small Businesses & Contractors (2026)"
      intro="Compare payroll tools for small businesses, contractors, and trade teams."
      breadcrumbLabel="Payroll"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="payroll"
      featuredPicks={HUB_TOP_PICK_REFS}
      featuredPicksTitle="Top payroll picks"
      featuredPicksSub="Hand-picked for trade businesses. Updated monthly."
      comparisonTable={{
        title: "Compare payroll software",
        subtitle: "Side-by-side pricing and fit.",
        rows: TABLE_ROWS,
        detailsLinkBase: "/payroll/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across the most popular payroll platforms."
      introExtended={<PayrollIntroExtended />}
      howToChooseSection={<PayrollHowToChooseSection />}
      guidesSection={<PayrollGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best payroll software by use case"
          sectionSub="Scenario-based picks—workforce mix, growth stage, and budget—not your industry label alone."
          intro={
            <>
              These blurbs explain who each situation fits and what to prioritize. For trade- or industry-specific entry points (HVAC, restaurants, nonprofits), use{" "}
              <a href="#by-trade" className={linkGreen}>
                payroll by business type
              </a>{" "}
              below. For how pricing and taxes work, see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                payroll guides
              </a>
              .
            </>
          }
          blocks={PAYROLL_USE_CASE_EDITORIAL}
        />
      }
      popularComparisonsSection={<PayrollPopularComparisonsSection />}
      bestRoundupBlock={{
        title: "Best Payroll Software Overall",
        description: "View our full rankings of the best payroll software for small businesses and contractors, with detailed pros, cons, and recommendations.",
        linkText: "See full rankings →",
        href: "/payroll/best-payroll-software",
      }}
      featuredPicksRankingsLink={{ label: "See full rankings →", href: "/payroll/best-payroll-software" }}
      comparisonTableRankingsLink={{ label: "See our full rankings →", href: "/payroll/best-payroll-software" }}
      scenarioLinks={{
        sectionTitle: "Best payroll software by use case",
        sectionSub: "Scenario-based recommendations.",
        description: undefined,
        links: BEST_FOR_SCENARIOS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Payroll software by business type",
        sectionSub:
          "Identity-based navigation: your industry or business model—not team size alone. Different verticals have different tip rules, seasonality, and compliance quirks.",
        links: [],
        groups: BY_TRADE_GROUPS,
      }}
      faqItems={FAQ_ITEMS}
      faqTitle="Payroll software FAQs"
      faqSub="Quick answers to common questions."
      methodology={{
        title: "How we review payroll software",
        sub: "Transparent process, contractor-focused criteria.",
        introParagraph: "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information.",
        bullets: METHODOLOGY_BULLETS,
      }}
      finderSection={{
        title: "Find the right payroll fit",
        sub: "Narrow down by team size and pay type.",
        content: <PayrollFinderForm />,
      }}
      educationSection={<PayrollEducationSection />}
    />
  );
}
