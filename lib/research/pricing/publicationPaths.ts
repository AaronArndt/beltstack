/**
 * Client-safe public URLs and labels for the 2026 advertised vs usable study.
 * Do not import rows, evidence, or checklists from this file.
 */

export const PRICING_STUDY_PATH = "/research/service-business-software-pricing" as const;
export const PRICING_STUDY_CSV_PATH = "/research/beltstack-advertised-vs-usable-pricing-2026.csv" as const;
export const PRICING_STUDY_CSV_FILENAME = "beltstack-advertised-vs-usable-pricing-2026.csv" as const;

export const PRICING_STUDY_H1 =
  "Advertised vs. Usable: What Software Costs a Small Service Business";

export const PRICING_STUDY_SEO_TITLE =
  "Advertised vs. Usable Software Pricing for Service Businesses (2026)";

export const PRICING_STUDY_META_DESCRIPTION =
  "BeltStack compared advertised entry prices with the cost of running a basic workflow for 62 reviewed products across CRM, field service, payroll, invoicing, scheduling, and time tracking. Prices verified September 25, 2026.";

export const PRICING_STUDY_DATASET_NAME = "BeltStack 2026 Advertised vs. Usable Pricing Study";

export const PRICING_STUDY_ROUNDUP_HREFS = {
  crm: "/crm/best-crm-software",
  "field-service": "/field-service/best-field-service-software",
  payroll: "/payroll/best-payroll-software",
  invoicing: "/invoicing/best-invoicing-software",
  scheduling: "/scheduling/best-scheduling-software",
  "time-tracking": "/time-tracking/best-time-tracking-software",
} as const;

export const PRICING_STUDY_HUB_HREFS = {
  crm: "/crm",
  "field-service": "/field-service",
  payroll: "/payroll",
  invoicing: "/invoicing",
  scheduling: "/scheduling",
  "time-tracking": "/time-tracking",
} as const;

export const PRICING_STUDY_HUB_CATEGORIES = [
  "crm",
  "field-service",
  "payroll",
  "invoicing",
  "scheduling",
  "time-tracking",
] as const;
