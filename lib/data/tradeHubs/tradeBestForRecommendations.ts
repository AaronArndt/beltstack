/**
 * Trade-hub product preview resolver.
 *
 * Trade hubs decide which software categories appear.
 * /best-for/ featured lists decide which products preview on the hub.
 *
 * This module does not copy product slugs into tradeHubDefinitions.
 * Unmapped or unresolved pairs return null so TradeHubPage can fall back
 * to categoryStack.productSlugs.
 */

import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { ACCOUNTING_TRADE_BEST_FOR_BY_SLUG } from "@/lib/data/accountingBestForTrades";
import { getCrmBestForPageProps } from "@/lib/data/crmBestForHub";
import { getFieldServiceBestForPageProps } from "@/lib/data/fieldServiceBestForHub";
import { getInvoicingBestForTradePageProps } from "@/lib/data/invoicingBestForTrades";
import { getLeadGenerationBestForPageProps } from "@/lib/data/leadGenerationBestForPages";
import { CLEANING_PAGE_PROPS as PAYROLL_CLEANING_BUSINESS_PAGE_PROPS } from "@/lib/data/payrollBestForCleaning";
import { CONSTRUCTION_PAGE_PROPS as PAYROLL_CONSTRUCTION_PAGE_PROPS } from "@/lib/data/payrollBestForConstruction";
import { ELECTRICIANS_PAGE_PROPS as PAYROLL_ELECTRICIANS_PAGE_PROPS } from "@/lib/data/payrollBestForElectricians";
import { GENERAL_CONTRACTORS_PAGE_PROPS as PAYROLL_GENERAL_CONTRACTORS_PAGE_PROPS } from "@/lib/data/payrollBestForGeneralContractors";
import { HANDYMAN_BUSINESS_PAGE_PROPS as PAYROLL_HANDYMAN_BUSINESS_PAGE_PROPS } from "@/lib/data/payrollBestForHandymanBusiness";
import { HVAC_PAGE_PROPS as PAYROLL_HVAC_PAGE_PROPS } from "@/lib/data/payrollBestForHvac";
import { LANDSCAPING_PAGE_PROPS as PAYROLL_LANDSCAPING_PAGE_PROPS } from "@/lib/data/payrollBestForLandscaping";
import { PAINTERS_PAGE_PROPS as PAYROLL_PAINTERS_PAGE_PROPS } from "@/lib/data/payrollBestForPainters";
import { PLUMBING_PAGE_PROPS as PAYROLL_PLUMBING_PAGE_PROPS } from "@/lib/data/payrollBestForPlumbing";
import { RESTAURANTS_PAGE_PROPS as PAYROLL_RESTAURANTS_PAGE_PROPS } from "@/lib/data/payrollBestForRestaurants";
import { ROOFING_PAGE_PROPS as PAYROLL_ROOFING_PAGE_PROPS } from "@/lib/data/payrollBestForRoofing";
import { RESTAURANTS_PAGE_PROPS as POS_RESTAURANTS_PAGE_PROPS } from "@/lib/data/posBestFor";
import { POS_TRADE_BEST_FOR_BY_SLUG } from "@/lib/data/posBestForTrades";
import { getProjectManagementBestForPageProps } from "@/lib/data/projectManagementBestForHub";
import { getReputationManagementBestForPageProps } from "@/lib/data/reputationManagementBestForPages";
import { getSchedulingBestForPageProps } from "@/lib/data/schedulingBestForHub";
import type { SoftwarePickCategory } from "@/lib/data/softwarePickCards";
import { TIME_TRACKING_TRADE_BEST_FOR_BY_SLUG } from "@/lib/data/timeTrackingBestForTrades";
import {
  getAccountingBestForUrl,
  getCrmBestForUrl,
  getFieldServiceBestForUrl,
  getInvoicingBestForUrl,
  getLeadGenerationBestForUrl,
  getPayrollBestForUrl,
  getPosBestForUrl,
  getProjectManagementBestForUrl,
  getReputationManagementBestForUrl,
  getSchedulingBestForUrl,
  getTimeTrackingBestForUrl,
} from "@/lib/routes";

/** Trade hubs stay a concise preview of the deeper /best-for/ list. */
export const TRADE_HUB_BEST_FOR_PREVIEW_COUNT = 2;

export type TradeHubBestForPreview = {
  scenarioSlug: string;
  href: string;
  productSlugs: string[];
};

type FeaturedSlugSource = {
  featuredProducts: readonly { slug: string }[];
};

/**
 * Explicit trade-hub slug + software category → best-for scenario slug.
 * Do not derive these by string manipulation. Omit any pair that is not a
 * clearly matching audience (especially cleaning-franchises).
 */
const BEST_FOR_SCENARIO_BY_TRADE_AND_CATEGORY: Record<
  string,
  Partial<Record<SoftwarePickCategory, string>>
> = {
  hvac: {
    "field-service": "hvac",
    crm: "hvac",
    payroll: "hvac",
    invoicing: "hvac",
    scheduling: "hvac",
  },
  plumbing: {
    "field-service": "plumbing",
    payroll: "plumbing",
    invoicing: "plumbing",
    scheduling: "plumbing",
  },
  electrical: {
    "field-service": "electricians",
    payroll: "electricians",
    invoicing: "electricians",
    scheduling: "electricians",
  },
  landscaping: {
    "field-service": "landscaping",
    invoicing: "landscaping",
    payroll: "landscaping",
    scheduling: "landscaping",
    accounting: "landscaping",
  },
  "cleaning-services": {
    // General cleaning payroll exists. Do not map FSM/scheduling/invoicing to
    // cleaning-franchises — that is a narrower audience than this hub.
    payroll: "cleaning-business",
  },
  handyman: {
    "field-service": "handyman",
    scheduling: "handyman",
    invoicing: "handyman",
    payroll: "handyman-business",
    crm: "handyman",
    "lead-generation": "handyman",
    "reputation-management": "handyman",
  },
  roofing: {
    "project-management": "roofing",
    "field-service": "roofing",
    accounting: "roofing",
    invoicing: "roofing",
    payroll: "roofing",
  },
  painting: {
    scheduling: "painting",
    "project-management": "painting",
    invoicing: "painting",
    payroll: "painters",
    crm: "painting",
  },
  "general-contractors": {
    "project-management": "general-contractors",
    accounting: "general-contractors",
    "time-tracking": "general-contractors",
    invoicing: "general-contractors",
    payroll: "general-contractors",
  },
  construction: {
    "field-service": "construction",
    "project-management": "construction",
    accounting: "construction",
    "time-tracking": "construction",
    invoicing: "construction",
    payroll: "construction",
  },
  restaurants: {
    pos: "restaurants",
    payroll: "restaurants",
  },
};

const PAYROLL_BEST_FOR_PROPS_BY_SCENARIO: Record<string, FeaturedSlugSource> = {
  hvac: PAYROLL_HVAC_PAGE_PROPS,
  plumbing: PAYROLL_PLUMBING_PAGE_PROPS,
  electricians: PAYROLL_ELECTRICIANS_PAGE_PROPS,
  landscaping: PAYROLL_LANDSCAPING_PAGE_PROPS,
  "cleaning-business": PAYROLL_CLEANING_BUSINESS_PAGE_PROPS,
  "handyman-business": PAYROLL_HANDYMAN_BUSINESS_PAGE_PROPS,
  roofing: PAYROLL_ROOFING_PAGE_PROPS,
  painters: PAYROLL_PAINTERS_PAGE_PROPS,
  "general-contractors": PAYROLL_GENERAL_CONTRACTORS_PAGE_PROPS,
  construction: PAYROLL_CONSTRUCTION_PAGE_PROPS,
  restaurants: PAYROLL_RESTAURANTS_PAGE_PROPS,
};

function getPayrollBestForPageProps(scenarioSlug: string): FeaturedSlugSource | null {
  return PAYROLL_BEST_FOR_PROPS_BY_SCENARIO[scenarioSlug] ?? null;
}

function getPosBestForPageProps(scenarioSlug: string): FeaturedSlugSource | null {
  if (scenarioSlug === "restaurants") return POS_RESTAURANTS_PAGE_PROPS;
  return POS_TRADE_BEST_FOR_BY_SLUG[scenarioSlug] ?? null;
}

function getBestForPageProps(
  softwareCategory: SoftwarePickCategory,
  scenarioSlug: string
): FeaturedSlugSource | null {
  let props: BestForTemplateProps | FeaturedSlugSource | null | undefined;
  switch (softwareCategory) {
    case "field-service":
      props = getFieldServiceBestForPageProps(scenarioSlug);
      break;
    case "crm":
      props = getCrmBestForPageProps(scenarioSlug);
      break;
    case "scheduling":
      props = getSchedulingBestForPageProps(scenarioSlug);
      break;
    case "project-management":
      props = getProjectManagementBestForPageProps(scenarioSlug);
      break;
    case "payroll":
      props = getPayrollBestForPageProps(scenarioSlug);
      break;
    case "invoicing":
      props = getInvoicingBestForTradePageProps(scenarioSlug);
      break;
    case "accounting":
      props = ACCOUNTING_TRADE_BEST_FOR_BY_SLUG[scenarioSlug];
      break;
    case "time-tracking":
      props = TIME_TRACKING_TRADE_BEST_FOR_BY_SLUG[scenarioSlug];
      break;
    case "pos":
      props = getPosBestForPageProps(scenarioSlug);
      break;
    case "lead-generation":
      props = getLeadGenerationBestForPageProps(scenarioSlug);
      break;
    case "reputation-management":
      props = getReputationManagementBestForPageProps(scenarioSlug);
      break;
    default:
      return null;
  }
  return props ?? null;
}

function getBestForHref(
  softwareCategory: SoftwarePickCategory,
  scenarioSlug: string
): string | null {
  switch (softwareCategory) {
    case "field-service":
      return getFieldServiceBestForUrl(scenarioSlug);
    case "crm":
      return getCrmBestForUrl(scenarioSlug);
    case "payroll":
      return getPayrollBestForUrl(scenarioSlug);
    case "invoicing":
      return getInvoicingBestForUrl(scenarioSlug);
    case "scheduling":
      return getSchedulingBestForUrl(scenarioSlug);
    case "accounting":
      return getAccountingBestForUrl(scenarioSlug);
    case "project-management":
      return getProjectManagementBestForUrl(scenarioSlug);
    case "time-tracking":
      return getTimeTrackingBestForUrl(scenarioSlug);
    case "pos":
      return getPosBestForUrl(scenarioSlug);
    case "lead-generation":
      return getLeadGenerationBestForUrl(scenarioSlug);
    case "reputation-management":
      return getReputationManagementBestForUrl(scenarioSlug);
    default:
      return null;
  }
}

/** Explicit mapping only. Returns null when this trade/category pair is not mapped. */
export function getBestForScenarioSlugForTradeHub(
  tradeHubSlug: string,
  softwareCategory: SoftwarePickCategory
): string | null {
  return BEST_FOR_SCENARIO_BY_TRADE_AND_CATEGORY[tradeHubSlug]?.[softwareCategory] ?? null;
}

/**
 * Resolve the authoritative /best-for/ featured preview for a trade hub category.
 * Returns null when the mapping is missing, the page cannot be found, or featured
 * products are empty — never invents slugs or URLs.
 */
export function getBestForTradeRecommendations(
  softwareCategory: SoftwarePickCategory,
  tradeHubSlug: string
): TradeHubBestForPreview | null {
  const scenarioSlug = getBestForScenarioSlugForTradeHub(tradeHubSlug, softwareCategory);
  if (scenarioSlug == null) return null;

  const page = getBestForPageProps(softwareCategory, scenarioSlug);
  if (page == null) return null;

  const productSlugs = page.featuredProducts
    .map((product) => product.slug)
    .filter((slug) => slug.length > 0)
    .slice(0, TRADE_HUB_BEST_FOR_PREVIEW_COUNT);

  if (productSlugs.length === 0) return null;

  const href = getBestForHref(softwareCategory, scenarioSlug);
  if (href == null) return null;

  return { scenarioSlug, href, productSlugs };
}
