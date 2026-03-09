/**
 * Centralized route helpers for BeltStack.
 * Use these instead of hardcoding paths so links stay consistent and easy to update.
 */

/** Payroll review detail page: /payroll/review/[slug] */
export function getPayrollReviewUrl(slug: string): string {
  return `/payroll/review/${slug}`;
}

/** Payroll hub */
export const PAYROLL_HUB_URL = "/payroll" as const;

/** Payroll compare page (optional comparison slug) */
export function getPayrollCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/payroll/compare/${comparisonSlug}`;
  return "/payroll/compare";
}

/** Payroll best-for scenario */
export function getPayrollBestForUrl(scenarioSlug: string): string {
  return `/payroll/best-for/${scenarioSlug}`;
}

/** Trade slug → best-for scenario slug (replaces legacy /payroll/trades/*) */
const TRADE_TO_BEST_FOR: Record<string, string> = {
  electrical: "electricians",
  plumbing: "plumbing",
  landscaping: "landscaping",
  construction: "construction",
  roofing: "roofing",
  hvac: "hvac",
  cleaning: "cleaning-business",
  painters: "painters",
  "pest-control": "pest-control",
  "lawn-care": "lawn-care",
  "tree-service": "tree-service",
  "remodeling-contractors": "remodeling-contractors",
  "general-contractors": "general-contractors",
  "handyman-business": "handyman-business",
  "pool-service": "pool-service",
  "home-services": "home-services",
  "property-management": "property-management",
  "maintenance-companies": "maintenance-companies",
  "auto-repair": "auto-repair",
  restaurants: "restaurants",
  retail: "retail",
  agriculture: "agriculture",
  nonprofits: "nonprofits",
};

/** Payroll by trade — now points to best-for pages */
export function getPayrollTradeUrl(tradeSlug: string): string {
  const scenario = TRADE_TO_BEST_FOR[tradeSlug] ?? tradeSlug;
  return `/payroll/best-for/${scenario}`;
}

// ——— Accounting ———

/** Accounting review detail page: /accounting/review/[slug] */
export function getAccountingReviewUrl(slug: string): string {
  return `/accounting/review/${slug}`;
}

/** Accounting hub */
export const ACCOUNTING_HUB_URL = "/accounting" as const;

/** Accounting compare page (optional comparison slug) */
export function getAccountingCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/accounting/compare/${comparisonSlug}`;
  return "/accounting/compare";
}

/** Accounting best-for scenario */
export function getAccountingBestForUrl(scenarioSlug: string): string {
  return `/accounting/best-for/${scenarioSlug}`;
}
