/**
 * Payroll hub pillar page: guides, editorial use-case blocks, and popular comparisons.
 * Used by app/payroll/page.tsx.
 */

import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getPayrollBestForUrl, getPayrollCompareUrl } from "@/lib/routes";

const PAYROLL_GUIDES_BASE = "/payroll/guides";

export type PayrollGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

/** Guide cards — educational / evaluation (not product roundups). */
export const PAYROLL_HUB_GUIDES: PayrollGuideItem[] = [
  { slug: "how-payroll-software-works", title: "How Payroll Software Works", description: "Core concepts: pay runs, withholdings, filings, and what “full service” actually means.", href: `${PAYROLL_GUIDES_BASE}/how-payroll-software-works` },
  { slug: "payroll-software-pricing", title: "Payroll Software Pricing Explained", description: "Base fees, per-employee costs, add-ons, and how to estimate your real monthly bill.", href: `${PAYROLL_GUIDES_BASE}/payroll-software-pricing` },
  { slug: "payroll-taxes-explained", title: "Payroll Taxes Explained", description: "Federal and state obligations, deposits, and how software keeps you out of trouble.", href: `${PAYROLL_GUIDES_BASE}/payroll-taxes-explained` },
  { slug: "how-to-switch-payroll-providers", title: "How to Switch Payroll Providers", description: "A practical migration checklist so you don’t miss a pay run or lose history.", href: `${PAYROLL_GUIDES_BASE}/how-to-switch-payroll-providers` },
  { slug: "payroll-for-contractors", title: "W-2 vs 1099: Payroll for Mixed Workforces", description: "When you pay both employees and contractors—classification, 1099 filing, and workflow.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-contractors` },
  { slug: "payroll-for-small-business", title: "When Small Businesses Should Formalize Payroll", description: "Signs you’ve outgrown manual pay, what to automate first, and scope creep to avoid.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-small-business` },
  { slug: "payroll-for-construction-companies", title: "Construction Payroll: Job Costing & Compliance Basics", description: "How certified payroll and job allocation differ from generic small-business payroll.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-construction-companies` },
  { slug: "payroll-for-landscaping-businesses", title: "Seasonal Crews & Field Payroll Considerations", description: "Hiring patterns, 1099 vs W-2 in the trades, and what to ask vendors.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-landscaping-businesses` },
  { slug: "payroll-for-electricians", title: "Electrical Contractors: Classification & Multi-State Payroll", description: "Worker classification and state rules—evaluation concepts before you pick a provider.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-electricians` },
];

/** Editorial “best payroll by use case” blocks for the payroll hub (scenario-based). */
export const PAYROLL_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Contractors mixing W-2 employees and 1099s",
    body: "Trade businesses often pay both employees and subs. You need contractor self-service, clean 1099 workflows, and confidence filings match how you classify workers—without paying for an enterprise HR suite you won’t use.",
    links: [
      { label: "Best payroll for contractors →", href: getPayrollBestForUrl("contractors") },
      { label: "1099 & contractor payroll →", href: getPayrollBestForUrl("1099-contractors") },
    ],
  },
  {
    title: "Small teams prioritizing ease and transparent pricing",
    body: "At low headcount, you want fast onboarding, clear per-person fees, and tax filing included so payroll doesn’t become a second job. The best fit is usually straightforward software with strong support—not a platform built for 500-seat enterprises.",
    links: [
      { label: "Best payroll for small business →", href: getPayrollBestForUrl("small-business") },
      { label: "Gusto vs OnPay →", href: getPayrollCompareUrl("gusto-vs-onpay") },
    ],
  },
  {
    title: "Hourly, shift-heavy, and variable schedules",
    body: "Retail, field, and hourly teams need time data to flow into pay correctly—overtime rules, corrections, and pay period cutoffs matter as much as the payroll engine. Evaluate time integrations before you assume “it’ll work out.”",
    links: [{ label: "Best payroll for hourly employees →", href: getPayrollBestForUrl("hourly-employees") }],
  },
  {
    title: "Growing headcount and multi-state complexity",
    body: "Adding states, benefits, and HR workflows changes total cost and admin load. You want permissions, reporting, and scalability without a forced migration every year—often where ADP, Paychex, or Rippling enter the conversation.",
    links: [
      { label: "Best payroll for growing businesses →", href: getPayrollBestForUrl("growing-businesses") },
      { label: "Gusto vs ADP →", href: getPayrollCompareUrl("gusto-vs-adp") },
    ],
  },
  {
    title: "Budget-first payroll without sacrificing compliance",
    body: "If every dollar counts, compare published pricing at your real headcount—including year-end forms and support. Lower-cost providers can still handle full-service taxes if you validate features against your workflow.",
    links: [
      { label: "Patriot Payroll vs OnPay →", href: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
      { label: "Full rankings →", href: "/payroll/best-payroll-software" },
    ],
  },
  {
    title: "Industry-specific payroll picks",
    body: "Restaurants, retail, nonprofits, and field trades have different tip rules, seasonal staffing, or compliance quirks. Use the business-type links below when your question is “what fits my industry” rather than team size alone.",
    links: [{ label: "Go to payroll by business type →", href: "#by-trade" }],
  },
];

export type PayrollComparisonLink = { label: string; slug: string; href: string };

/** Popular comparison pages to surface on the hub. Only include slugs that exist in payrollComparisons. */
export const PAYROLL_HUB_POPULAR_COMPARISONS: PayrollComparisonLink[] = [
  { label: "Gusto vs QuickBooks Payroll", slug: "gusto-vs-quickbooks-payroll", href: getPayrollCompareUrl("gusto-vs-quickbooks-payroll") },
  { label: "Gusto vs OnPay", slug: "gusto-vs-onpay", href: getPayrollCompareUrl("gusto-vs-onpay") },
  { label: "Gusto vs ADP", slug: "gusto-vs-adp", href: getPayrollCompareUrl("gusto-vs-adp") },
  { label: "Gusto vs Paychex", slug: "gusto-vs-paychex", href: getPayrollCompareUrl("gusto-vs-paychex") },
  { label: "Rippling vs Gusto", slug: "rippling-vs-gusto", href: getPayrollCompareUrl("rippling-vs-gusto") },
  { label: "Square Payroll vs Gusto", slug: "square-payroll-vs-gusto", href: getPayrollCompareUrl("square-payroll-vs-gusto") },
  { label: "Patriot Payroll vs OnPay", slug: "patriot-payroll-vs-onpay", href: getPayrollCompareUrl("patriot-payroll-vs-onpay") },
];
