import type { MetadataRoute } from "next";
import { getPayrollComparisonSlugs } from "@/lib/data/payrollComparisons";
import { getPayrollReviewSlugs } from "@/lib/data/payrollReviews";
import { getPayrollAlternativesSlugs } from "@/lib/data/payrollAlternatives";
import { getAccountingComparisonSlugs } from "@/lib/data/accountingComparisons";
import { getAccountingReviewSlugs } from "@/lib/data/accountingReviews";
import { getAccountingAlternativesSlugs } from "@/lib/data/accountingAlternatives";
import { getInvoicingComparisonSlugs } from "@/lib/data/invoicingComparisons";
import { getInvoicingReviewSlugs } from "@/lib/data/invoicingReviews";
import { getInvoicingAlternativesSlugs } from "@/lib/data/invoicingAlternatives";
import { getTimeTrackingComparisonSlugs } from "@/lib/data/timeTrackingComparisons";
import { getTimeTrackingReviewSlugs } from "@/lib/data/timeTrackingReviews";
import { getTimeTrackingAlternativesSlugs } from "@/lib/data/timeTrackingAlternatives";
import { getCrmComparisonSlugs } from "@/lib/data/crmComparisons";
import { getCrmReviewSlugs } from "@/lib/data/crmReviews";
import { getCrmAlternativesSlugs } from "@/lib/data/crmAlternatives";
import { getProjectManagementComparisonSlugs } from "@/lib/data/projectManagementComparisons";
import { getProjectManagementReviewSlugs } from "@/lib/data/projectManagementReviews";
import { getProjectManagementAlternativesSlugs } from "@/lib/data/projectManagementAlternatives";
import { getFieldServiceComparisonSlugs } from "@/lib/data/fieldServiceComparisons";
import { getFieldServiceReviewSlugs } from "@/lib/data/fieldServiceReviews";
import { getFieldServiceAlternativesSlugs } from "@/lib/data/fieldServiceAlternatives";
import { getSchedulingComparisonSlugs } from "@/lib/data/schedulingComparisons";
import { getSchedulingReviewSlugs } from "@/lib/data/schedulingReviews";
import { getSchedulingAlternativesSlugs } from "@/lib/data/schedulingAlternatives";
import { getHrComparisonSlugs } from "@/lib/data/hrComparisons";
import { getHrReviewSlugs } from "@/lib/data/hrReviews";
import { getHrAlternativesSlugs } from "@/lib/data/hrAlternatives";
import {
  getPayrollBestForUrl,
  getPayrollAlternativeUrl,
  getAccountingAlternativeUrl,
  getInvoicingAlternativeUrl,
  getAccountingBestForUrl,
  getInvoicingBestForUrl,
  getTimeTrackingBestForUrl,
  getTimeTrackingAlternativeUrl,
  getCrmBestForUrl,
  getCrmAlternativeUrl,
  getProjectManagementBestForUrl,
  getProjectManagementAlternativeUrl,
  getFieldServiceBestForUrl,
  getFieldServiceAlternativeUrl,
  getSchedulingBestForUrl,
  getSchedulingAlternativeUrl,
  getHrBestForUrl,
  getHrAlternativeUrl,
  getPosBestForUrl,
  getPosAlternativeUrl,
  getInventoryBestForUrl,
  getInventoryAlternativeUrl,
  getHelpdeskBestForUrl,
  getHelpdeskAlternativeUrl,
  getLeadGenerationBestForUrl,
  getLeadGenerationAlternativeUrl,
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersAlternativeUrl,
} from "@/lib/routes";
import { getPosComparisonSlugs } from "@/lib/data/posComparisons";
import { getPosReviewSlugs } from "@/lib/data/posReviews";
import { getPosAlternativesSlugs } from "@/lib/data/posAlternatives";
import { POS_GUIDES } from "@/lib/data/posGuides";
import { getInventoryComparisonSlugs } from "@/lib/data/inventoryComparisons";
import { getInventoryReviewSlugs } from "@/lib/data/inventoryReviews";
import { getInventoryAlternativesSlugs } from "@/lib/data/inventoryAlternatives";
import { INVENTORY_GUIDES } from "@/lib/data/inventoryGuides";
import { SITE_URL } from "@/lib/site";
import { PAYROLL_GUIDES } from "@/lib/data/payrollGuides";
import { ACCOUNTING_GUIDES } from "@/lib/data/accountingGuides";
import { INVOICING_GUIDES } from "@/lib/data/invoicingGuides";
import { TIME_TRACKING_GUIDES } from "@/lib/data/timeTrackingGuides";
import { CRM_GUIDES } from "@/lib/data/crmGuides";
import { PROJECT_MANAGEMENT_GUIDES } from "@/lib/data/projectManagementGuides";
import { FIELD_SERVICE_GUIDES } from "@/lib/data/fieldServiceGuides";
import { SCHEDULING_GUIDES } from "@/lib/data/schedulingGuides";
import { HR_GUIDES } from "@/lib/data/hrGuides";
import { getHelpdeskComparisonSlugs } from "@/lib/data/helpdeskComparisons";
import { getHelpdeskReviewSlugs } from "@/lib/data/helpdeskReviews";
import { getHelpdeskAlternativesSlugs } from "@/lib/data/helpdeskAlternatives";
import { HELPDESK_GUIDES } from "@/lib/data/helpdeskGuides";
import { getLeadGenerationComparisonSlugs } from "@/lib/data/leadGenerationComparisons";
import { getLeadGenerationReviewSlugs } from "@/lib/data/leadGenerationReviews";
import { getLeadGenerationAlternativesSlugs } from "@/lib/data/leadGenerationAlternatives";
import { LEAD_GENERATION_GUIDES } from "@/lib/data/leadGenerationGuides";
import { getWebsiteBuildersComparisonSlugs } from "@/lib/data/websiteBuildersComparisons";
import { getWebsiteBuildersReviewSlugs } from "@/lib/data/websiteBuildersReviews";
import { getWebsiteBuildersAlternativesSlugs } from "@/lib/data/websiteBuildersAlternatives";
import { WEBSITE_BUILDERS_GUIDES } from "@/lib/data/websiteBuildersGuides";
import { getWebsiteBuildersBestForSlugs } from "@/lib/data/websiteBuildersBestFor";
import { TRADE_HUB_SLUGS } from "@/lib/data/tradeHubs";

/** Static best-for scenario slugs (matches app/payroll/best-for/[scenario] and static segments). */
const PAYROLL_BEST_FOR_SCENARIOS = [
  "1099-contractors",
  "agriculture",
  "auto-repair",
  "cleaning-business",
  "construction",
  "contractors",
  "electricians",
  "general-contractors",
  "growing-businesses",
  "handyman-business",
  "home-services",
  "hourly-employees",
  "hvac",
  "landscaping",
  "lawn-care",
  "maintenance-companies",
  "nonprofits",
  "painters",
  "pest-control",
  "plumbing",
  "pool-service",
  "property-management",
  "remodeling-contractors",
  "restaurants",
  "retail",
  "roofing",
  "small-business",
  "tree-service",
] as const;

/** Static Accounting best-for scenario slugs. */
const ACCOUNTING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "contractors",
  "agencies",
  "ecommerce",
] as const;

/** Static Invoicing best-for scenario slugs. */
const INVOICING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "contractors",
  "consultants",
  "agencies",
] as const;

/** Static Time Tracking best-for scenario slugs. */
const TIME_TRACKING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "consultants",
  "agencies",
  "remote-teams",
] as const;

/** Static CRM best-for scenario slugs. */
const CRM_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "startups",
  "agencies",
  "sales-teams",
] as const;

/** Static Project Management best-for scenario slugs. */
const PROJECT_MANAGEMENT_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "startups",
  "agencies",
  "remote-teams",
] as const;

/** Static Field Service best-for scenario slugs. */
const FIELD_SERVICE_BEST_FOR_SCENARIOS = [
  "small-business",
  "contractors",
  "electricians",
  "plumbing",
  "hvac",
] as const;

/** Static Scheduling best-for scenario slugs (from schedulingBestFor.ts). */
const SCHEDULING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "consultants",
  "small-business",
  "service-business",
  "teams",
] as const;

/** Static HR best-for scenario slugs (matches app/hr/best-for/[scenario]). */
const HR_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "startups",
  "agencies",
  "global-teams",
] as const;

/** Static POS best-for scenario slugs (matches app/pos/best-for/[scenario]). */
const POS_BEST_FOR_SCENARIOS = [
  "small-business",
  "retail",
  "restaurants",
  "ecommerce",
  "multi-location",
] as const;

/** Static Inventory best-for scenario slugs (matches app/inventory/best-for/[scenario]). */
const INVENTORY_BEST_FOR_SCENARIOS = [
  "small-business",
  "ecommerce",
  "retail",
  "manufacturing",
  "warehouses",
] as const;

/** Static Helpdesk best-for scenario slugs (matches app/helpdesk/best-for/[scenario]). */
const HELPDESK_BEST_FOR_SCENARIOS = [
  "small-business",
  "startups",
  "ecommerce",
  "saas",
  "growing-teams",
] as const;

/** Static Lead Generation best-for scenario slugs (matches app/lead-generation/best-for/[scenario]). */
const LEAD_GENERATION_BEST_FOR_SCENARIOS = [
  "contractors",
  "hvac",
  "plumbing",
  "electricians",
  "roofing",
  "landscaping",
  "cleaning-services",
  "home-services",
] as const;

const defaultEntry = (
  path: string,
  options?: { changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"]; priority?: number }
): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path}`,
  lastModified: new Date(),
  changeFrequency: options?.changeFrequency ?? "weekly",
  priority: options?.priority ?? 0.8,
});

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    defaultEntry("/", { changeFrequency: "weekly", priority: 1 }),
    defaultEntry("/methodology", { changeFrequency: "monthly", priority: 0.7 }),
    // Payroll
    defaultEntry("/payroll", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/payroll/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/payroll/best-payroll-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payroll/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payroll/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payroll/trades", { changeFrequency: "monthly", priority: 0.7 }),
    // Accounting
    defaultEntry("/accounting", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/accounting/best-accounting-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/accounting/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/accounting/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/accounting/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // Invoicing
    defaultEntry("/invoicing", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/invoicing/best-invoicing-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/invoicing/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/invoicing/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/invoicing/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // Time tracking
    defaultEntry("/time-tracking", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/time-tracking/best-time-tracking-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/time-tracking/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/time-tracking/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/time-tracking/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // CRM
    defaultEntry("/crm", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/crm/best-crm-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/crm/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/crm/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/crm/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // Project management
    defaultEntry("/project-management", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/project-management/best-project-management-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/project-management/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/project-management/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/project-management/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // Field service
    defaultEntry("/field-service", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/field-service/best-field-service-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/field-service/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/field-service/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/field-service/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // Scheduling
    defaultEntry("/scheduling", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/scheduling/best-scheduling-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/scheduling/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/scheduling/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/scheduling/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // HR
    defaultEntry("/hr", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/hr/best-hr-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/hr/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/hr/guides", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/hr/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    // POS
    defaultEntry("/pos", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/pos/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/pos/best-pos-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/pos/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/pos/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Inventory
    defaultEntry("/inventory", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/inventory/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/inventory/best-inventory-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/inventory/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/inventory/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Helpdesk
    defaultEntry("/helpdesk", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/helpdesk/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/helpdesk/best-helpdesk-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/helpdesk/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/helpdesk/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Lead generation
    defaultEntry("/lead-generation", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/lead-generation/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/lead-generation/best-lead-generation-tools", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/lead-generation/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/lead-generation/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Website builders
    defaultEntry("/website-builders", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/website-builders/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/website-builders/best-website-builders", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/website-builders/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/website-builders/guides", { changeFrequency: "weekly", priority: 0.85 }),
  ];

  const tradeHubEntries: MetadataRoute.Sitemap = TRADE_HUB_SLUGS.map((slug) =>
    defaultEntry(`/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payroll comparisons
  const comparisonSlugs = getPayrollComparisonSlugs();
  const comparisonEntries: MetadataRoute.Sitemap = comparisonSlugs.map((slug) =>
    defaultEntry(`/payroll/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payroll reviews
  const reviewSlugs = getPayrollReviewSlugs();
  const reviewEntries: MetadataRoute.Sitemap = reviewSlugs.map((slug) =>
    defaultEntry(`/payroll/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payroll provider landing pages
  const providerEntries: MetadataRoute.Sitemap = reviewSlugs.map((slug) =>
    defaultEntry(`/payroll/providers/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payroll best-for
  const bestForEntries: MetadataRoute.Sitemap = PAYROLL_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getPayrollBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Payroll guides
  const guideEntries: MetadataRoute.Sitemap = PAYROLL_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Payroll alternatives
  const alternativeSlugs = getPayrollAlternativesSlugs();
  const alternativeEntries: MetadataRoute.Sitemap = alternativeSlugs.map((slug) =>
    defaultEntry(getPayrollAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Accounting comparisons
  const accountingComparisonSlugs = getAccountingComparisonSlugs();
  const accountingComparisonEntries: MetadataRoute.Sitemap = accountingComparisonSlugs.map((slug) =>
    defaultEntry(`/accounting/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Accounting reviews
  const accountingReviewSlugs = getAccountingReviewSlugs();
  const accountingReviewEntries: MetadataRoute.Sitemap = accountingReviewSlugs.map((slug) =>
    defaultEntry(`/accounting/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Accounting best-for
  const accountingBestForEntries: MetadataRoute.Sitemap = ACCOUNTING_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getAccountingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Accounting guides
  const accountingGuideEntries: MetadataRoute.Sitemap = ACCOUNTING_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Accounting alternatives
  const accountingAlternativeSlugs = getAccountingAlternativesSlugs();
  const accountingAlternativeEntries: MetadataRoute.Sitemap = accountingAlternativeSlugs.map((slug) =>
    defaultEntry(getAccountingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Invoicing comparisons
  const invoicingComparisonSlugs = getInvoicingComparisonSlugs();
  const invoicingComparisonEntries: MetadataRoute.Sitemap = invoicingComparisonSlugs.map((slug) =>
    defaultEntry(`/invoicing/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Invoicing reviews
  const invoicingReviewSlugs = getInvoicingReviewSlugs();
  const invoicingReviewEntries: MetadataRoute.Sitemap = invoicingReviewSlugs.map((slug) =>
    defaultEntry(`/invoicing/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Invoicing best-for
  const invoicingBestForEntries: MetadataRoute.Sitemap = INVOICING_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getInvoicingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Invoicing guides
  const invoicingGuideEntries: MetadataRoute.Sitemap = INVOICING_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Invoicing alternatives
  const invoicingAlternativeSlugs = getInvoicingAlternativesSlugs();
  const invoicingAlternativeEntries: MetadataRoute.Sitemap = invoicingAlternativeSlugs.map((slug) =>
    defaultEntry(getInvoicingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Time tracking comparisons
  const timeTrackingComparisonSlugs = getTimeTrackingComparisonSlugs();
  const timeTrackingComparisonEntries: MetadataRoute.Sitemap = timeTrackingComparisonSlugs.map((slug) =>
    defaultEntry(`/time-tracking/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Time tracking reviews
  const timeTrackingReviewSlugs = getTimeTrackingReviewSlugs();
  const timeTrackingReviewEntries: MetadataRoute.Sitemap = timeTrackingReviewSlugs.map((slug) =>
    defaultEntry(`/time-tracking/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Time tracking best-for
  const timeTrackingBestForEntries: MetadataRoute.Sitemap = TIME_TRACKING_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getTimeTrackingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Time tracking guides
  const timeTrackingGuideEntries: MetadataRoute.Sitemap = TIME_TRACKING_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Time tracking alternatives
  const timeTrackingAlternativeSlugs = getTimeTrackingAlternativesSlugs();
  const timeTrackingAlternativeEntries: MetadataRoute.Sitemap = timeTrackingAlternativeSlugs.map((slug) =>
    defaultEntry(getTimeTrackingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // CRM comparisons
  const crmComparisonSlugs = getCrmComparisonSlugs();
  const crmComparisonEntries: MetadataRoute.Sitemap = crmComparisonSlugs.map((slug) =>
    defaultEntry(`/crm/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // CRM reviews
  const crmReviewSlugs = getCrmReviewSlugs();
  const crmReviewEntries: MetadataRoute.Sitemap = crmReviewSlugs.map((slug) =>
    defaultEntry(`/crm/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // CRM alternatives
  const crmAlternativeSlugs = getCrmAlternativesSlugs();
  const crmAlternativeEntries: MetadataRoute.Sitemap = crmAlternativeSlugs.map((slug) =>
    defaultEntry(getCrmAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // CRM best-for
  const crmBestForEntries: MetadataRoute.Sitemap = CRM_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getCrmBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // CRM guides
  const crmGuideEntries: MetadataRoute.Sitemap = CRM_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Project management comparisons
  const pmComparisonSlugs = getProjectManagementComparisonSlugs();
  const pmComparisonEntries: MetadataRoute.Sitemap = pmComparisonSlugs.map((slug) =>
    defaultEntry(`/project-management/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Project management reviews
  const pmReviewSlugs = getProjectManagementReviewSlugs();
  const pmReviewEntries: MetadataRoute.Sitemap = pmReviewSlugs.map((slug) =>
    defaultEntry(`/project-management/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Project management best-for
  const pmBestForEntries: MetadataRoute.Sitemap = PROJECT_MANAGEMENT_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getProjectManagementBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Project management guides
  const pmGuideEntries: MetadataRoute.Sitemap = PROJECT_MANAGEMENT_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Project management alternatives
  const pmAlternativeSlugs = getProjectManagementAlternativesSlugs();
  const pmAlternativeEntries: MetadataRoute.Sitemap = pmAlternativeSlugs.map((slug) =>
    defaultEntry(getProjectManagementAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Field service comparisons
  const fsComparisonSlugs = getFieldServiceComparisonSlugs();
  const fsComparisonEntries: MetadataRoute.Sitemap = fsComparisonSlugs.map((slug) =>
    defaultEntry(`/field-service/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Field service reviews
  const fsReviewSlugs = getFieldServiceReviewSlugs();
  const fsReviewEntries: MetadataRoute.Sitemap = fsReviewSlugs.map((slug) =>
    defaultEntry(`/field-service/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Field service best-for
  const fsBestForEntries: MetadataRoute.Sitemap = FIELD_SERVICE_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getFieldServiceBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Field service guides
  const fsGuideEntries: MetadataRoute.Sitemap = FIELD_SERVICE_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Field service alternatives
  const fsAlternativeSlugs = getFieldServiceAlternativesSlugs();
  const fsAlternativeEntries: MetadataRoute.Sitemap = fsAlternativeSlugs.map((slug) =>
    defaultEntry(getFieldServiceAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Scheduling comparisons
  const schedulingComparisonSlugs = getSchedulingComparisonSlugs();
  const schedulingComparisonEntries: MetadataRoute.Sitemap = schedulingComparisonSlugs.map((slug) =>
    defaultEntry(`/scheduling/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Scheduling reviews
  const schedulingReviewSlugs = getSchedulingReviewSlugs();
  const schedulingReviewEntries: MetadataRoute.Sitemap = schedulingReviewSlugs.map((slug) =>
    defaultEntry(`/scheduling/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Scheduling best-for
  const schedulingBestForEntries: MetadataRoute.Sitemap = SCHEDULING_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getSchedulingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Scheduling guides
  const schedulingGuideEntries: MetadataRoute.Sitemap = SCHEDULING_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Scheduling alternatives
  const schedulingAlternativeSlugs = getSchedulingAlternativesSlugs();
  const schedulingAlternativeEntries: MetadataRoute.Sitemap = schedulingAlternativeSlugs.map((slug) =>
    defaultEntry(getSchedulingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // HR comparisons
  const hrComparisonSlugs = getHrComparisonSlugs();
  const hrComparisonEntries: MetadataRoute.Sitemap = hrComparisonSlugs.map((slug) =>
    defaultEntry(`/hr/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // HR reviews
  const hrReviewSlugs = getHrReviewSlugs();
  const hrReviewEntries: MetadataRoute.Sitemap = hrReviewSlugs.map((slug) =>
    defaultEntry(`/hr/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // HR best-for scenario pages
  const hrBestForEntries: MetadataRoute.Sitemap = HR_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getHrBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // HR guides
  const hrGuideEntries: MetadataRoute.Sitemap = HR_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // HR alternatives
  const hrAlternativeSlugs = getHrAlternativesSlugs();
  const hrAlternativeEntries: MetadataRoute.Sitemap = hrAlternativeSlugs.map((slug) =>
    defaultEntry(getHrAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // POS comparisons
  const posComparisonSlugs = getPosComparisonSlugs();
  const posComparisonEntries: MetadataRoute.Sitemap = posComparisonSlugs.map((slug) =>
    defaultEntry(`/pos/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // POS reviews
  const posReviewSlugs = getPosReviewSlugs();
  const posReviewEntries: MetadataRoute.Sitemap = posReviewSlugs.map((slug) =>
    defaultEntry(`/pos/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // POS best-for
  const posBestForEntries: MetadataRoute.Sitemap = POS_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getPosBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // POS guides
  const posGuideEntries: MetadataRoute.Sitemap = POS_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // POS alternatives
  const posAlternativeSlugs = getPosAlternativesSlugs();
  const posAlternativeEntries: MetadataRoute.Sitemap = posAlternativeSlugs.map((slug) =>
    defaultEntry(getPosAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Inventory comparisons
  const inventoryComparisonSlugs = getInventoryComparisonSlugs();
  const inventoryComparisonEntries: MetadataRoute.Sitemap = inventoryComparisonSlugs.map((slug) =>
    defaultEntry(`/inventory/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Inventory reviews
  const inventoryReviewSlugs = getInventoryReviewSlugs();
  const inventoryReviewEntries: MetadataRoute.Sitemap = inventoryReviewSlugs.map((slug) =>
    defaultEntry(`/inventory/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Inventory alternatives
  const inventoryAlternativeSlugs = getInventoryAlternativesSlugs();
  const inventoryAlternativeEntries: MetadataRoute.Sitemap = inventoryAlternativeSlugs.map((slug) =>
    defaultEntry(getInventoryAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Inventory best-for
  const inventoryBestForEntries: MetadataRoute.Sitemap = INVENTORY_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getInventoryBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Inventory guides
  const inventoryGuideEntries: MetadataRoute.Sitemap = INVENTORY_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Helpdesk comparisons
  const helpdeskComparisonSlugs = getHelpdeskComparisonSlugs();
  const helpdeskComparisonEntries: MetadataRoute.Sitemap = helpdeskComparisonSlugs.map((slug) =>
    defaultEntry(`/helpdesk/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Helpdesk reviews
  const helpdeskReviewSlugs = getHelpdeskReviewSlugs();
  const helpdeskReviewEntries: MetadataRoute.Sitemap = helpdeskReviewSlugs.map((slug) =>
    defaultEntry(`/helpdesk/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Helpdesk alternatives
  const helpdeskAlternativeSlugs = getHelpdeskAlternativesSlugs();
  const helpdeskAlternativeEntries: MetadataRoute.Sitemap = helpdeskAlternativeSlugs.map((slug) =>
    defaultEntry(getHelpdeskAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Helpdesk best-for
  const helpdeskBestForEntries: MetadataRoute.Sitemap = HELPDESK_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getHelpdeskBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Helpdesk guides
  const helpdeskGuideEntries: MetadataRoute.Sitemap = HELPDESK_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Lead generation comparisons
  const leadGenerationComparisonSlugs = getLeadGenerationComparisonSlugs();
  const leadGenerationComparisonEntries: MetadataRoute.Sitemap = leadGenerationComparisonSlugs.map((slug) =>
    defaultEntry(`/lead-generation/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Lead generation reviews
  const leadGenerationReviewSlugs = getLeadGenerationReviewSlugs();
  const leadGenerationReviewEntries: MetadataRoute.Sitemap = leadGenerationReviewSlugs.map((slug) =>
    defaultEntry(`/lead-generation/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Lead generation alternatives
  const leadGenerationAlternativeSlugs = getLeadGenerationAlternativesSlugs();
  const leadGenerationAlternativeEntries: MetadataRoute.Sitemap = leadGenerationAlternativeSlugs.map((slug) =>
    defaultEntry(getLeadGenerationAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Lead generation best-for
  const leadGenerationBestForEntries: MetadataRoute.Sitemap = LEAD_GENERATION_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getLeadGenerationBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Lead generation guides
  const leadGenerationGuideEntries: MetadataRoute.Sitemap = LEAD_GENERATION_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Website builders comparisons
  const websiteBuildersComparisonSlugs = getWebsiteBuildersComparisonSlugs();
  const websiteBuildersComparisonEntries: MetadataRoute.Sitemap = websiteBuildersComparisonSlugs.map((slug) =>
    defaultEntry(`/website-builders/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Website builders reviews
  const websiteBuildersReviewSlugs = getWebsiteBuildersReviewSlugs();
  const websiteBuildersReviewEntries: MetadataRoute.Sitemap = websiteBuildersReviewSlugs.map((slug) =>
    defaultEntry(`/website-builders/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Website builders alternatives
  const websiteBuildersAlternativeSlugs = getWebsiteBuildersAlternativesSlugs();
  const websiteBuildersAlternativeEntries: MetadataRoute.Sitemap = websiteBuildersAlternativeSlugs.map((slug) =>
    defaultEntry(getWebsiteBuildersAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Website builders best-for
  const websiteBuildersBestForSlugs = getWebsiteBuildersBestForSlugs();
  const websiteBuildersBestForEntries: MetadataRoute.Sitemap = websiteBuildersBestForSlugs.map((scenario) =>
    defaultEntry(getWebsiteBuildersBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Website builders guides
  const websiteBuildersGuideEntries: MetadataRoute.Sitemap = WEBSITE_BUILDERS_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  return [
    ...staticRoutes,
    ...tradeHubEntries,
    ...comparisonEntries,
    ...reviewEntries,
    ...providerEntries,
    ...bestForEntries,
    ...guideEntries,
    ...alternativeEntries,
    ...accountingComparisonEntries,
    ...accountingReviewEntries,
    ...accountingBestForEntries,
    ...accountingGuideEntries,
    ...accountingAlternativeEntries,
    ...invoicingComparisonEntries,
    ...invoicingReviewEntries,
    ...invoicingBestForEntries,
    ...invoicingGuideEntries,
    ...invoicingAlternativeEntries,
    ...timeTrackingComparisonEntries,
    ...timeTrackingReviewEntries,
    ...timeTrackingBestForEntries,
    ...timeTrackingGuideEntries,
    ...timeTrackingAlternativeEntries,
    ...crmComparisonEntries,
    ...crmReviewEntries,
    ...crmAlternativeEntries,
    ...crmBestForEntries,
    ...crmGuideEntries,
    ...pmComparisonEntries,
    ...pmReviewEntries,
    ...pmBestForEntries,
    ...pmGuideEntries,
    ...pmAlternativeEntries,
    ...fsComparisonEntries,
    ...fsReviewEntries,
    ...fsBestForEntries,
    ...fsGuideEntries,
    ...fsAlternativeEntries,
    ...schedulingComparisonEntries,
    ...schedulingReviewEntries,
    ...schedulingBestForEntries,
    ...schedulingGuideEntries,
    ...schedulingAlternativeEntries,
    ...hrComparisonEntries,
    ...hrReviewEntries,
    ...hrBestForEntries,
    ...hrGuideEntries,
    ...hrAlternativeEntries,
    ...posComparisonEntries,
    ...posReviewEntries,
    ...posBestForEntries,
    ...posGuideEntries,
    ...posAlternativeEntries,
    ...inventoryComparisonEntries,
    ...inventoryReviewEntries,
    ...inventoryAlternativeEntries,
    ...inventoryBestForEntries,
    ...inventoryGuideEntries,
    ...helpdeskComparisonEntries,
    ...helpdeskReviewEntries,
    ...helpdeskAlternativeEntries,
    ...helpdeskBestForEntries,
    ...helpdeskGuideEntries,
    ...leadGenerationComparisonEntries,
    ...leadGenerationReviewEntries,
    ...leadGenerationAlternativeEntries,
    ...leadGenerationBestForEntries,
    ...leadGenerationGuideEntries,
    ...websiteBuildersComparisonEntries,
    ...websiteBuildersReviewEntries,
    ...websiteBuildersAlternativeEntries,
    ...websiteBuildersBestForEntries,
    ...websiteBuildersGuideEntries,
  ];
}
