import type { MetadataRoute } from "next";
import { getPayrollComparisonSlugs } from "@/lib/data/payrollComparisons";
import { getPayrollReviewSlugs } from "@/lib/data/payrollReviews";
import { getAccountingComparisonSlugs } from "@/lib/data/accountingComparisons";
import { getAccountingReviewSlugs } from "@/lib/data/accountingReviews";
import { getInvoicingComparisonSlugs } from "@/lib/data/invoicingComparisons";
import { getInvoicingReviewSlugs } from "@/lib/data/invoicingReviews";
import { getTimeTrackingComparisonSlugs } from "@/lib/data/timeTrackingComparisons";
import { getTimeTrackingReviewSlugs } from "@/lib/data/timeTrackingReviews";
import { getCrmComparisonSlugs } from "@/lib/data/crmComparisons";
import { getCrmReviewSlugs } from "@/lib/data/crmReviews";
import { getProjectManagementComparisonSlugs } from "@/lib/data/projectManagementComparisons";
import { getProjectManagementReviewSlugs } from "@/lib/data/projectManagementReviews";
import { getFieldServiceComparisonSlugs } from "@/lib/data/fieldServiceComparisons";
import { getFieldServiceReviewSlugs } from "@/lib/data/fieldServiceReviews";
import { getSchedulingComparisonSlugs } from "@/lib/data/schedulingComparisons";
import { getSchedulingReviewSlugs } from "@/lib/data/schedulingReviews";
import { getHrComparisonSlugs } from "@/lib/data/hrComparisons";
import { getHrReviewSlugs } from "@/lib/data/hrReviews";
import {
  getPayrollBestForUrl,
  getAccountingBestForUrl,
  getInvoicingBestForUrl,
  getTimeTrackingBestForUrl,
  getCrmBestForUrl,
  getProjectManagementBestForUrl,
  getFieldServiceBestForUrl,
  getSchedulingBestForUrl,
  getHrBestForUrl,
} from "@/lib/routes";
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
  ];

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

  return [
    ...staticRoutes,
    ...comparisonEntries,
    ...reviewEntries,
    ...providerEntries,
    ...bestForEntries,
    ...guideEntries,
    ...accountingComparisonEntries,
    ...accountingReviewEntries,
    ...accountingBestForEntries,
    ...accountingGuideEntries,
    ...invoicingComparisonEntries,
    ...invoicingReviewEntries,
    ...invoicingBestForEntries,
    ...invoicingGuideEntries,
    ...timeTrackingComparisonEntries,
    ...timeTrackingReviewEntries,
    ...timeTrackingBestForEntries,
    ...timeTrackingGuideEntries,
    ...crmComparisonEntries,
    ...crmReviewEntries,
    ...crmBestForEntries,
    ...crmGuideEntries,
    ...pmComparisonEntries,
    ...pmReviewEntries,
    ...pmBestForEntries,
    ...pmGuideEntries,
    ...fsComparisonEntries,
    ...fsReviewEntries,
    ...fsBestForEntries,
    ...fsGuideEntries,
    ...schedulingComparisonEntries,
    ...schedulingReviewEntries,
    ...schedulingBestForEntries,
    ...schedulingGuideEntries,
    ...hrComparisonEntries,
    ...hrReviewEntries,
    ...hrBestForEntries,
    ...hrGuideEntries,
  ];
}
