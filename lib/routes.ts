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

/** Payroll alternatives page: /payroll/alternatives/[slug] */
export function getPayrollAlternativeUrl(slug: string): string {
  return `/payroll/alternatives/${slug}`;
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

/** Accounting alternatives page: /accounting/alternatives/[slug] */
export function getAccountingAlternativeUrl(slug: string): string {
  return `/accounting/alternatives/${slug}`;
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

/** Invoicing alternatives page: /invoicing/alternatives/[slug] */
export function getInvoicingAlternativeUrl(slug: string): string {
  return `/invoicing/alternatives/${slug}`;
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

/** Time tracking alternatives page: /time-tracking/alternatives/[slug] */
export function getTimeTrackingAlternativeUrl(slug: string): string {
  return `/time-tracking/alternatives/${slug}`;
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

/** CRM alternatives page: /crm/alternatives/[slug] */
export function getCrmAlternativeUrl(slug: string): string {
  return `/crm/alternatives/${slug}`;
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

/** Project management alternatives page: /project-management/alternatives/[slug] */
export function getProjectManagementAlternativeUrl(slug: string): string {
  return `/project-management/alternatives/${slug}`;
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

/** Field service alternatives page: /field-service/alternatives/[slug] */
export function getFieldServiceAlternativeUrl(slug: string): string {
  return `/field-service/alternatives/${slug}`;
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

/** Scheduling alternatives page: /scheduling/alternatives/[slug] */
export function getSchedulingAlternativeUrl(slug: string): string {
  return `/scheduling/alternatives/${slug}`;
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

/** HR alternatives page: /hr/alternatives/[slug] */
export function getHrAlternativeUrl(slug: string): string {
  return `/hr/alternatives/${slug}`;
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

/** Inventory alternatives page: /inventory/alternatives/[slug] */
export function getInventoryAlternativeUrl(slug: string): string {
  return `/inventory/alternatives/${slug}`;
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

/** POS alternatives page: /pos/alternatives/[slug] */
export function getPosAlternativeUrl(slug: string): string {
  return `/pos/alternatives/${slug}`;
}

// ——— Helpdesk ———

/** Helpdesk review detail page: /helpdesk/review/[slug] */
export function getHelpdeskReviewUrl(slug: string): string {
  return `/helpdesk/review/${slug}`;
}

/** Helpdesk compare page (optional comparison slug) */
export function getHelpdeskCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/helpdesk/compare/${comparisonSlug}`;
  return "/helpdesk/compare";
}

/** Helpdesk best-for scenario */
export function getHelpdeskBestForUrl(scenarioSlug: string): string {
  return `/helpdesk/best-for/${scenarioSlug}`;
}

/** Helpdesk alternatives page: /helpdesk/alternatives/[slug] */
export function getHelpdeskAlternativeUrl(slug: string): string {
  return `/helpdesk/alternatives/${slug}`;
}

// ——— Website Builders ———

/** Website builders review detail page: /website-builders/review/[slug] */
export function getWebsiteBuildersReviewUrl(slug: string): string {
  return `/website-builders/review/${slug}`;
}

/** Website builders compare page (optional comparison slug) */
export function getWebsiteBuildersCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/website-builders/compare/${comparisonSlug}`;
  return "/website-builders/compare";
}

/** Website builders best-for scenario */
export function getWebsiteBuildersBestForUrl(scenarioSlug: string): string {
  return `/website-builders/best-for/${scenarioSlug}`;
}

/** Website builders alternatives page: /website-builders/alternatives/[slug] */
export function getWebsiteBuildersAlternativeUrl(slug: string): string {
  return `/website-builders/alternatives/${slug}`;
}

// ——— Lead generation ———

/** Lead generation review detail page: /lead-generation/review/[slug] */
export function getLeadGenerationReviewUrl(slug: string): string {
  return `/lead-generation/review/${slug}`;
}

/** Lead generation hub */
export const LEAD_GENERATION_HUB_URL = "/lead-generation" as const;

/** Lead generation compare page (optional comparison slug) */
export function getLeadGenerationCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/lead-generation/compare/${comparisonSlug}`;
  return "/lead-generation/compare";
}

/** Lead generation best-for scenario */
export function getLeadGenerationBestForUrl(scenarioSlug: string): string {
  return `/lead-generation/best-for/${scenarioSlug}`;
}

/** Lead generation alternatives page: /lead-generation/alternatives/[slug] */
export function getLeadGenerationAlternativeUrl(slug: string): string {
  return `/lead-generation/alternatives/${slug}`;
}

// ——— SEO Tools ———

/** SEO tools review detail page: /seo-tools/review/[slug] */
export function getSeoToolsReviewUrl(slug: string): string {
  return `/seo-tools/review/${slug}`;
}

/** SEO tools hub */
export const SEO_TOOLS_HUB_URL = "/seo-tools" as const;

/** SEO tools compare page (optional comparison slug) */
export function getSeoToolsCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/seo-tools/compare/${comparisonSlug}`;
  return "/seo-tools/compare";
}

/** SEO tools best-for scenario */
export function getSeoToolsBestForUrl(scenarioSlug: string): string {
  return `/seo-tools/best-for/${scenarioSlug}`;
}

/** SEO tools alternatives page: /seo-tools/alternatives/[slug] */
export function getSeoToolsAlternativeUrl(slug: string): string {
  return `/seo-tools/alternatives/${slug}`;
}

// ——— Call Tracking ———

/** Call tracking review detail page: /call-tracking/review/[slug] */
export function getCallTrackingReviewUrl(slug: string): string {
  return `/call-tracking/review/${slug}`;
}

/** Call tracking hub */
export const CALL_TRACKING_HUB_URL = "/call-tracking" as const;

/** Call tracking compare page (optional comparison slug) */
export function getCallTrackingCompareUrl(comparisonSlug?: string): string {
  if (comparisonSlug) return `/call-tracking/compare/${comparisonSlug}`;
  return "/call-tracking/compare";
}

/** Call tracking best-for scenario */
export function getCallTrackingBestForUrl(scenarioSlug: string): string {
  return `/call-tracking/best-for/${scenarioSlug}`;
}

/** Call tracking alternatives page: /call-tracking/alternatives/[slug] */
export function getCallTrackingAlternativeUrl(slug: string): string {
  return `/call-tracking/alternatives/${slug}`;
}
