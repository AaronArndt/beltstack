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

// ——— Invoicing ———

/** Invoicing review detail page: /invoicing/review/[slug] */
export function getInvoicingReviewUrl(slug: string): string {
  return `/invoicing/review/${slug}`;
}

/** Invoicing hub */
export const INVOICING_HUB_URL = "/invoicing" as const;

/** Invoicing compare page (optional comparison slug) */
export function getInvoicingCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/invoicing/compare/${comparisonSlug}`;
  return "/invoicing/compare";
}

/** Invoicing best-for scenario */
export function getInvoicingBestForUrl(scenarioSlug: string): string {
  return `/invoicing/best-for/${scenarioSlug}`;
}

// ——— Time Tracking ———

/** Time tracking review detail page: /time-tracking/review/[slug] */
export function getTimeTrackingReviewUrl(slug: string): string {
  return `/time-tracking/review/${slug}`;
}

/** Time tracking hub */
export const TIME_TRACKING_HUB_URL = "/time-tracking" as const;

/** Time tracking compare page (optional comparison slug) */
export function getTimeTrackingCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/time-tracking/compare/${comparisonSlug}`;
  return "/time-tracking/compare";
}

/** Time tracking best-for scenario */
export function getTimeTrackingBestForUrl(scenarioSlug: string): string {
  return `/time-tracking/best-for/${scenarioSlug}`;
}

// ——— CRM ———

/** CRM review detail page: /crm/review/[slug] */
export function getCrmReviewUrl(slug: string): string {
  return `/crm/review/${slug}`;
}

/** CRM hub */
export const CRM_HUB_URL = "/crm" as const;

/** CRM compare page (optional comparison slug) */
export function getCrmCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/crm/compare/${comparisonSlug}`;
  return "/crm/compare";
}

/** CRM best-for scenario */
export function getCrmBestForUrl(scenarioSlug: string): string {
  return `/crm/best-for/${scenarioSlug}`;
}

// ——— Project Management ———

/** Project management review detail page: /project-management/review/[slug] */
export function getProjectManagementReviewUrl(slug: string): string {
  return `/project-management/review/${slug}`;
}

/** Project management hub */
export const PROJECT_MANAGEMENT_HUB_URL = "/project-management" as const;

/** Project management compare page (optional comparison slug) */
export function getProjectManagementCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/project-management/compare/${comparisonSlug}`;
  return "/project-management/compare";
}

/** Project management best-for scenario */
export function getProjectManagementBestForUrl(scenarioSlug: string): string {
  return `/project-management/best-for/${scenarioSlug}`;
}

// ——— Field Service Management ———

/** Field service review detail page: /field-service/review/[slug] */
export function getFieldServiceReviewUrl(slug: string): string {
  return `/field-service/review/${slug}`;
}

/** Field service hub */
export const FIELD_SERVICE_HUB_URL = "/field-service" as const;

/** Field service compare page (optional comparison slug) */
export function getFieldServiceCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/field-service/compare/${comparisonSlug}`;
  return "/field-service/compare";
}

/** Field service best-for scenario */
export function getFieldServiceBestForUrl(scenarioSlug: string): string {
  return `/field-service/best-for/${scenarioSlug}`;
}

// ——— Scheduling ———

/** Scheduling review detail page: /scheduling/review/[slug] */
export function getSchedulingReviewUrl(slug: string): string {
  return `/scheduling/review/${slug}`;
}

/** Scheduling hub */
export const SCHEDULING_HUB_URL = "/scheduling" as const;

/** Scheduling compare page (optional comparison slug) */
export function getSchedulingCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/scheduling/compare/${comparisonSlug}`;
  return "/scheduling/compare";
}

/** Scheduling best-for scenario */
export function getSchedulingBestForUrl(scenarioSlug: string): string {
  return `/scheduling/best-for/${scenarioSlug}`;
}

// ——— HR ———

/** HR review detail page: /hr/review/[slug] */
export function getHrReviewUrl(slug: string): string {
  return `/hr/review/${slug}`;
}

/** HR hub */
export const HR_HUB_URL = "/hr" as const;

/** HR compare page (optional comparison slug) */
export function getHrCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/hr/compare/${comparisonSlug}`;
  return "/hr/compare";
}

/** HR best-for scenario */
export function getHrBestForUrl(scenarioSlug: string): string {
  return `/hr/best-for/${scenarioSlug}`;
}

// ——— Inventory Management ———

/** Inventory review detail page: /inventory/review/[slug] */
export function getInventoryReviewUrl(slug: string): string {
  return `/inventory/review/${slug}`;
}

/** Inventory hub */
export const INVENTORY_HUB_URL = "/inventory" as const;

/** Inventory compare page (optional comparison slug) */
export function getInventoryCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/inventory/compare/${comparisonSlug}`;
  return "/inventory/compare";
}

/** Inventory best-for scenario */
export function getInventoryBestForUrl(scenarioSlug: string): string {
  return `/inventory/best-for/${scenarioSlug}`;
}

// ——— POS (Point of Sale) ———

/** POS review detail page: /pos/review/[slug] */
export function getPosReviewUrl(slug: string): string {
  return `/pos/review/${slug}`;
}

/** POS hub */
export const POS_HUB_URL = "/pos" as const;

/** POS compare page (optional comparison slug) */
export function getPosCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/pos/compare/${comparisonSlug}`;
  return "/pos/compare";
}

/** POS best-for scenario */
export function getPosBestForUrl(scenarioSlug: string): string {
  return `/pos/best-for/${scenarioSlug}`;
}
