/**
 * Payroll hub pillar page: guides and popular comparisons for internal linking.
 * Used by app/payroll/page.tsx.
 */

import { getPayrollCompareUrl } from "@/lib/routes";

const PAYROLL_GUIDES_BASE = "/payroll/guides";

export type PayrollGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

/** Guide cards for the Payroll Guides section on the hub. */
export const PAYROLL_HUB_GUIDES: PayrollGuideItem[] = [
  { slug: "how-payroll-software-works", title: "How Payroll Software Works", description: "What payroll software does, how it automates tax and pay runs, and what to expect from setup to ongoing use.", href: `${PAYROLL_GUIDES_BASE}/how-payroll-software-works` },
  { slug: "payroll-software-pricing", title: "Payroll Software Pricing", description: "How payroll pricing works: base fees, per-person costs, and what to budget for small teams and contractors.", href: `${PAYROLL_GUIDES_BASE}/payroll-software-pricing` },
  { slug: "payroll-for-contractors", title: "Payroll for Contractors", description: "Running payroll when you mix employees and 1099 contractors: what to look for and which tools fit best.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-contractors` },
  { slug: "payroll-for-small-business", title: "Payroll for Small Business", description: "Choosing and running payroll for small teams: features, pricing, and top picks for SMBs.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-small-business` },
  { slug: "how-to-switch-payroll-providers", title: "How to Switch Payroll Providers", description: "Steps to change payroll software without missing a pay run or losing compliance.", href: `${PAYROLL_GUIDES_BASE}/how-to-switch-payroll-providers` },
  { slug: "payroll-taxes-explained", title: "Payroll Taxes Explained", description: "Federal and state payroll taxes, withholdings, and how payroll software handles filing and deposits.", href: `${PAYROLL_GUIDES_BASE}/payroll-taxes-explained` },
  { slug: "payroll-for-construction-companies", title: "Payroll for Construction Companies", description: "Payroll needs for construction: job costing, certified payroll, and contractor-friendly platforms.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-construction-companies` },
  { slug: "payroll-for-landscaping-businesses", title: "Payroll for Landscaping Businesses", description: "Seasonal workers, crews, and 1099s: payroll software that fits landscaping and lawn care.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-landscaping-businesses` },
  { slug: "payroll-for-electricians", title: "Payroll for Electricians", description: "Payroll and job costing for electrical contractors: W-2, 1099, and multi-state support.", href: `${PAYROLL_GUIDES_BASE}/payroll-for-electricians` },
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
