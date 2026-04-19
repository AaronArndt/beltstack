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
  getSeoToolsBestForUrl,
  getSeoToolsAlternativeUrl,
  getCallTrackingBestForUrl,
  getCallTrackingAlternativeUrl,
  getReputationManagementBestForUrl,
  getReputationManagementAlternativeUrl,
  getEmailMarketingBestForUrl,
  getEmailMarketingAlternativeUrl,
  getPaymentProcessingBestForUrl,
  getPaymentProcessingAlternativeUrl,
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
import { getSeoToolsComparisonSlugs } from "@/lib/data/seoToolsComparisons";
import { getSeoToolsReviewSlugs } from "@/lib/data/seoToolsReviews";
import { getSeoToolsAlternativesSlugs } from "@/lib/data/seoToolsAlternatives";
import { SEO_TOOLS_GUIDES } from "@/lib/data/seoToolsGuides";
import { getCallTrackingComparisonSlugs } from "@/lib/data/callTrackingComparisons";
import { getCallTrackingReviewSlugs } from "@/lib/data/callTrackingReviews";
import { getCallTrackingAlternativesSlugs } from "@/lib/data/callTrackingAlternatives";
import { CALL_TRACKING_GUIDES } from "@/lib/data/callTrackingGuides";
import { getReputationManagementComparisonSlugs } from "@/lib/data/reputationManagementComparisons";
import { getReputationManagementReviewSlugs } from "@/lib/data/reputationManagementReviews";
import { getReputationManagementAlternativesSlugs } from "@/lib/data/reputationManagementAlternatives";
import { REPUTATION_MANAGEMENT_GUIDES } from "@/lib/data/reputationManagementGuides";
import { getEmailMarketingComparisonSlugs } from "@/lib/data/emailMarketingComparisons";
import { getEmailMarketingReviewSlugs } from "@/lib/data/emailMarketingReviews";
import { getEmailMarketingAlternativesSlugs } from "@/lib/data/emailMarketingAlternatives";
import { EMAIL_MARKETING_GUIDES } from "@/lib/data/emailMarketingGuides";
import { getPaymentProcessingComparisonSlugs } from "@/lib/data/paymentProcessingComparisons";
import { getPaymentProcessingReviewSlugs } from "@/lib/data/paymentProcessingReviews";
import { getPaymentProcessingAlternativesSlugs } from "@/lib/data/paymentProcessingAlternatives";
import { PAYMENT_PROCESSING_GUIDES } from "@/lib/data/paymentProcessingGuides";
import { getPaymentProcessingBestForSlugs } from "@/lib/data/paymentProcessingBestForPages";
import { TRADE_HUB_SLUGS } from "@/lib/data/tradeHubs";

/** Static best-for scenario slugs (matches app/payroll/best-for/[scenario] and static segments). */
const PAYROLL_BEST_FOR_SCENARIOS = [
  "1099-contractors",
  "agriculture",
  "appliance-repair",
  "auto-repair",
  "cleaning-business",
  "cleaning-franchises",
  "concrete-contractors",
  "construction",
  "contractors",
  "electricians",
  "event-services",
  "excavation",
  "fence-deck",
  "flooring",
  "garage-door",
  "glass-window-installers",
  "general-contractors",
  "growing-businesses",
  "handyman-business",
  "home-inspectors",
  "home-services",
  "hourly-employees",
  "hvac",
  "landscaping",
  "lawn-care",
  "junk-removal",
  "locksmith",
  "maintenance-companies",
  "mobile-mechanics",
  "moving",
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
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
  "appliance-repair",
  "garage-door",
  "locksmith",
  "flooring",
  "fence-deck",
  "glass-window-installers",
  "concrete-contractors",
  "excavation",
  "auto-repair",
  "mobile-mechanics",
  "cleaning-franchises",
  "event-services",
  "home-inspectors",
] as const;

/** Static Invoicing best-for scenario slugs. */
const INVOICING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "contractors",
  "consultants",
  "agencies",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static Time Tracking best-for scenario slugs. */
const TIME_TRACKING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "consultants",
  "agencies",
  "remote-teams",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static CRM best-for scenario slugs. */
const CRM_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "startups",
  "agencies",
  "sales-teams",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
  "appliance-repair",
  "garage-door",
  "locksmith",
  "flooring",
  "fence-deck",
  "glass-window-installers",
  "concrete-contractors",
  "excavation",
  "auto-repair",
  "mobile-mechanics",
  "cleaning-franchises",
  "event-services",
  "home-inspectors",
] as const;

/** Static Project Management best-for scenario slugs. */
const PROJECT_MANAGEMENT_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "startups",
  "agencies",
  "remote-teams",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static Field Service best-for scenario slugs. */
const FIELD_SERVICE_BEST_FOR_SCENARIOS = [
  "small-business",
  "contractors",
  "electricians",
  "plumbing",
  "hvac",
  "painting",
  "roofing",
  "construction",
  "remodeling",
  "handyman",
  "landscaping",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static Scheduling best-for scenario slugs (schedulingBestFor.ts + schedulingBestForTrades.ts). */
const SCHEDULING_BEST_FOR_SCENARIOS = [
  "freelancers",
  "consultants",
  "small-business",
  "service-business",
  "teams",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static HR best-for scenario slugs (matches app/hr/best-for/[scenario]). */
const HR_BEST_FOR_SCENARIOS = [
  "freelancers",
  "small-business",
  "startups",
  "agencies",
  "global-teams",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static POS best-for scenario slugs (matches app/pos/best-for/[scenario]). */
const POS_BEST_FOR_SCENARIOS = [
  "small-business",
  "retail",
  "restaurants",
  "ecommerce",
  "multi-location",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
  "appliance-repair",
  "garage-door",
  "locksmith",
  "flooring",
  "fence-deck",
  "glass-window-installers",
  "concrete-contractors",
  "excavation",
  "auto-repair",
  "mobile-mechanics",
  "cleaning-franchises",
  "event-services",
  "home-inspectors",
] as const;

/** Static Inventory best-for scenario slugs (matches app/inventory/best-for/[scenario]). */
const INVENTORY_BEST_FOR_SCENARIOS = [
  "small-business",
  "ecommerce",
  "retail",
  "manufacturing",
  "warehouses",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static Helpdesk best-for scenario slugs (matches app/helpdesk/best-for/[scenario]). */
const HELPDESK_BEST_FOR_SCENARIOS = [
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static Lead Generation best-for scenario slugs (matches app/lead-generation/best-for/[scenario]). */
const LEAD_GENERATION_BEST_FOR_SCENARIOS = [
  "contractors",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static SEO Tools best-for scenario slugs (matches app/seo-tools/best-for/[scenario]). */
const SEO_TOOLS_BEST_FOR_SCENARIOS = [
  "small-business",
  "contractors",
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
  "appliance-repair",
  "garage-door",
  "locksmith",
  "flooring",
  "fence-deck",
  "glass-window-installers",
  "concrete-contractors",
  "excavation",
  "auto-repair",
  "mobile-mechanics",
  "cleaning-franchises",
  "event-services",
  "home-inspectors",
  "local-seo",
] as const;

/** Static Call Tracking best-for scenario slugs (matches app/call-tracking/best-for/[scenario]). */
const CALL_TRACKING_BEST_FOR_SCENARIOS = [
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

const REPUTATION_MANAGEMENT_BEST_FOR_SCENARIOS = [
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
] as const;

/** Static Email Marketing best-for scenario slugs (matches app/email-marketing/best-for/[scenario]). */
const EMAIL_MARKETING_BEST_FOR_SCENARIOS = [
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
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
    defaultEntry("/software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/about", { changeFrequency: "monthly", priority: 0.7 }),
    defaultEntry("/contact", { changeFrequency: "monthly", priority: 0.7 }),
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
    // SEO tools
    defaultEntry("/seo-tools", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/seo-tools/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/seo-tools/best-seo-tools", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/seo-tools/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/seo-tools/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Call tracking
    defaultEntry("/call-tracking", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/call-tracking/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/call-tracking/best-call-tracking-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/call-tracking/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/call-tracking/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Reputation management
    defaultEntry("/reputation-management", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/reputation-management/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/reputation-management/best-reputation-management-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/reputation-management/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/reputation-management/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Email marketing
    defaultEntry("/email-marketing", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/email-marketing/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/email-marketing/best-email-marketing-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/email-marketing/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/email-marketing/guides", { changeFrequency: "weekly", priority: 0.85 }),
    // Payment processing
    defaultEntry("/payment-processing", { changeFrequency: "weekly", priority: 0.9 }),
    defaultEntry("/payment-processing/best-for", { changeFrequency: "weekly", priority: 0.8 }),
    defaultEntry("/payment-processing/best-payment-processing-software", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payment-processing/compare", { changeFrequency: "weekly", priority: 0.85 }),
    defaultEntry("/payment-processing/guides", { changeFrequency: "weekly", priority: 0.85 }),
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

  // Invoicing guides (omit entries canonical under another vertical)
  const invoicingGuideEntries: MetadataRoute.Sitemap = INVOICING_GUIDES.filter((guide) =>
    guide.href.startsWith("/invoicing/")
  ).map((guide) => defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 }));

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

  // Time tracking guides (omit entries canonical under another vertical)
  const timeTrackingGuideEntries: MetadataRoute.Sitemap = TIME_TRACKING_GUIDES.filter((guide) =>
    guide.href.startsWith("/time-tracking/")
  ).map((guide) => defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 }));

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

  // HR guides (omit entries canonical under another vertical)
  const hrGuideEntries: MetadataRoute.Sitemap = HR_GUIDES.filter((guide) => guide.href.startsWith("/hr/")).map((guide) =>
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

  // Helpdesk guides (omit entries that canonicalize under another vertical, e.g. shared CRM/helpdesk pillars)
  const helpdeskGuideEntries: MetadataRoute.Sitemap = HELPDESK_GUIDES.filter((guide) =>
    guide.href.startsWith("/helpdesk/")
  ).map((guide) => defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 }));

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

  // SEO tools comparisons
  const seoToolsComparisonSlugs = getSeoToolsComparisonSlugs();
  const seoToolsComparisonEntries: MetadataRoute.Sitemap = seoToolsComparisonSlugs.map((slug) =>
    defaultEntry(`/seo-tools/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // SEO tools reviews
  const seoToolsReviewSlugs = getSeoToolsReviewSlugs();
  const seoToolsReviewEntries: MetadataRoute.Sitemap = seoToolsReviewSlugs.map((slug) =>
    defaultEntry(`/seo-tools/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // SEO tools alternatives
  const seoToolsAlternativeSlugs = getSeoToolsAlternativesSlugs();
  const seoToolsAlternativeEntries: MetadataRoute.Sitemap = seoToolsAlternativeSlugs.map((slug) =>
    defaultEntry(getSeoToolsAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // SEO tools best-for
  const seoToolsBestForEntries: MetadataRoute.Sitemap = SEO_TOOLS_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getSeoToolsBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // SEO tools guides
  const seoToolsGuideEntries: MetadataRoute.Sitemap = SEO_TOOLS_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Call tracking comparisons
  const callTrackingComparisonSlugs = getCallTrackingComparisonSlugs();
  const callTrackingComparisonEntries: MetadataRoute.Sitemap = callTrackingComparisonSlugs.map((slug) =>
    defaultEntry(`/call-tracking/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Call tracking reviews
  const callTrackingReviewSlugs = getCallTrackingReviewSlugs();
  const callTrackingReviewEntries: MetadataRoute.Sitemap = callTrackingReviewSlugs.map((slug) =>
    defaultEntry(`/call-tracking/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Call tracking alternatives
  const callTrackingAlternativeSlugs = getCallTrackingAlternativesSlugs();
  const callTrackingAlternativeEntries: MetadataRoute.Sitemap = callTrackingAlternativeSlugs.map((slug) =>
    defaultEntry(getCallTrackingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Call tracking best-for
  const callTrackingBestForEntries: MetadataRoute.Sitemap = CALL_TRACKING_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getCallTrackingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Call tracking guides
  const callTrackingGuideEntries: MetadataRoute.Sitemap = CALL_TRACKING_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Reputation management comparisons
  const reputationManagementComparisonSlugs = getReputationManagementComparisonSlugs();
  const reputationManagementComparisonEntries: MetadataRoute.Sitemap = reputationManagementComparisonSlugs.map((slug) =>
    defaultEntry(`/reputation-management/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Reputation management reviews
  const reputationManagementReviewSlugs = getReputationManagementReviewSlugs();
  const reputationManagementReviewEntries: MetadataRoute.Sitemap = reputationManagementReviewSlugs.map((slug) =>
    defaultEntry(`/reputation-management/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Reputation management alternatives
  const reputationManagementAlternativeSlugs = getReputationManagementAlternativesSlugs();
  const reputationManagementAlternativeEntries: MetadataRoute.Sitemap = reputationManagementAlternativeSlugs.map((slug) =>
    defaultEntry(getReputationManagementAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Reputation management best-for
  const reputationManagementBestForEntries: MetadataRoute.Sitemap = REPUTATION_MANAGEMENT_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getReputationManagementBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Reputation management guides
  const reputationManagementGuideEntries: MetadataRoute.Sitemap = REPUTATION_MANAGEMENT_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Email marketing comparisons
  const emailMarketingComparisonSlugs = getEmailMarketingComparisonSlugs();
  const emailMarketingComparisonEntries: MetadataRoute.Sitemap = emailMarketingComparisonSlugs.map((slug) =>
    defaultEntry(`/email-marketing/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Email marketing reviews
  const emailMarketingReviewSlugs = getEmailMarketingReviewSlugs();
  const emailMarketingReviewEntries: MetadataRoute.Sitemap = emailMarketingReviewSlugs.map((slug) =>
    defaultEntry(`/email-marketing/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Email marketing alternatives
  const emailMarketingAlternativeSlugs = getEmailMarketingAlternativesSlugs();
  const emailMarketingAlternativeEntries: MetadataRoute.Sitemap = emailMarketingAlternativeSlugs.map((slug) =>
    defaultEntry(getEmailMarketingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Email marketing best-for
  const emailMarketingBestForEntries: MetadataRoute.Sitemap = EMAIL_MARKETING_BEST_FOR_SCENARIOS.map((scenario) =>
    defaultEntry(getEmailMarketingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Email marketing guides
  const emailMarketingGuideEntries: MetadataRoute.Sitemap = EMAIL_MARKETING_GUIDES.map((guide) =>
    defaultEntry(guide.href, { changeFrequency: "monthly", priority: 0.7 })
  );

  // Payment processing comparisons
  const paymentProcessingComparisonSlugs = getPaymentProcessingComparisonSlugs();
  const paymentProcessingComparisonEntries: MetadataRoute.Sitemap = paymentProcessingComparisonSlugs.map((slug) =>
    defaultEntry(`/payment-processing/compare/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payment processing reviews
  const paymentProcessingReviewSlugs = getPaymentProcessingReviewSlugs();
  const paymentProcessingReviewEntries: MetadataRoute.Sitemap = paymentProcessingReviewSlugs.map((slug) =>
    defaultEntry(`/payment-processing/review/${slug}`, { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payment processing alternatives
  const paymentProcessingAlternativeSlugs = getPaymentProcessingAlternativesSlugs();
  const paymentProcessingAlternativeEntries: MetadataRoute.Sitemap = paymentProcessingAlternativeSlugs.map((slug) =>
    defaultEntry(getPaymentProcessingAlternativeUrl(slug), { changeFrequency: "monthly", priority: 0.75 })
  );

  // Payment processing best-for (canonical slugs from paymentProcessingBestForPages)
  const paymentProcessingBestForEntries: MetadataRoute.Sitemap = getPaymentProcessingBestForSlugs().map((scenario) =>
    defaultEntry(getPaymentProcessingBestForUrl(scenario), { changeFrequency: "monthly", priority: 0.7 })
  );

  // Payment processing guides
  const paymentProcessingGuideEntries: MetadataRoute.Sitemap = PAYMENT_PROCESSING_GUIDES.map((guide) =>
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
    ...seoToolsComparisonEntries,
    ...seoToolsReviewEntries,
    ...seoToolsAlternativeEntries,
    ...seoToolsBestForEntries,
    ...seoToolsGuideEntries,
    ...callTrackingComparisonEntries,
    ...callTrackingReviewEntries,
    ...callTrackingAlternativeEntries,
    ...callTrackingBestForEntries,
    ...callTrackingGuideEntries,
    ...reputationManagementComparisonEntries,
    ...reputationManagementReviewEntries,
    ...reputationManagementAlternativeEntries,
    ...reputationManagementBestForEntries,
    ...reputationManagementGuideEntries,
    ...emailMarketingComparisonEntries,
    ...emailMarketingReviewEntries,
    ...emailMarketingAlternativeEntries,
    ...emailMarketingBestForEntries,
    ...emailMarketingGuideEntries,
    ...paymentProcessingComparisonEntries,
    ...paymentProcessingReviewEntries,
    ...paymentProcessingAlternativeEntries,
    ...paymentProcessingBestForEntries,
    ...paymentProcessingGuideEntries,
  ];
}
