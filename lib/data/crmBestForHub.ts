/**
 * CRM /best-for hub: link labels match each scenario page `title` (same H1 as destination).
 */

import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { getCrmBestForUrl } from "@/lib/routes";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/crmBestForAgencies";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/crmBestForFreelancers";
import { SALES_TEAMS_PAGE_PROPS } from "@/lib/data/crmBestForSalesTeams";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/crmBestForSmallBusiness";
import { STARTUPS_PAGE_PROPS } from "@/lib/data/crmBestForStartups";
import {
  CONSTRUCTION_CRM_BEST_FOR_PAGE_PROPS,
  ELECTRICIANS_CRM_BEST_FOR_PAGE_PROPS,
  GENERAL_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS,
  HANDYMAN_CRM_BEST_FOR_PAGE_PROPS,
  HVAC_CRM_BEST_FOR_PAGE_PROPS,
  APPLIANCE_REPAIR_CRM_BEST_FOR_PAGE_PROPS,
  AUTO_REPAIR_CRM_BEST_FOR_PAGE_PROPS,
  CLEANING_FRANCHISES_CRM_BEST_FOR_PAGE_PROPS,
  CONCRETE_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS,
  EVENT_SERVICES_CRM_BEST_FOR_PAGE_PROPS,
  EXCAVATION_CRM_BEST_FOR_PAGE_PROPS,
  FENCE_DECK_CRM_BEST_FOR_PAGE_PROPS,
  FLOORING_CRM_BEST_FOR_PAGE_PROPS,
  GARAGE_DOOR_CRM_BEST_FOR_PAGE_PROPS,
  GLASS_WINDOW_INSTALLERS_CRM_BEST_FOR_PAGE_PROPS,
  HOME_INSPECTORS_CRM_BEST_FOR_PAGE_PROPS,
  JUNK_REMOVAL_CRM_BEST_FOR_PAGE_PROPS,
  LANDSCAPING_CRM_BEST_FOR_PAGE_PROPS,
  LOCKSMITH_CRM_BEST_FOR_PAGE_PROPS,
  MOBILE_MECHANICS_CRM_BEST_FOR_PAGE_PROPS,
  MOVING_CRM_BEST_FOR_PAGE_PROPS,
  PAINTING_CRM_BEST_FOR_PAGE_PROPS,
  PEST_CONTROL_CRM_BEST_FOR_PAGE_PROPS,
  PLUMBING_CRM_BEST_FOR_PAGE_PROPS,
  POOL_SERVICE_CRM_BEST_FOR_PAGE_PROPS,
  PROPERTY_MANAGEMENT_CRM_BEST_FOR_PAGE_PROPS,
  REMODELING_CRM_BEST_FOR_PAGE_PROPS,
  ROOFING_CRM_BEST_FOR_PAGE_PROPS,
} from "@/lib/data/crmBestForTrades";

/** Matches H1 on /crm/best-crm-software */
export const CRM_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best CRM Software (2026)",
  href: "/crm/best-crm-software",
  description:
    "The best CRM software for small businesses, startups, and sales teams is the platform your reps will log into daily—without losing pipeline visibility, contact history, or automation that keeps follow-ups on track.",
} as const;

export type CrmBestForHubCard = { label: string; href: string; description: string };

const CRM_BEST_FOR_PROPS_BY_SLUG: Record<string, BestForTemplateProps> = {
  freelancers: FREELANCERS_PAGE_PROPS,
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  startups: STARTUPS_PAGE_PROPS,
  agencies: AGENCIES_PAGE_PROPS,
  "sales-teams": SALES_TEAMS_PAGE_PROPS,
  hvac: HVAC_CRM_BEST_FOR_PAGE_PROPS,
  plumbing: PLUMBING_CRM_BEST_FOR_PAGE_PROPS,
  electricians: ELECTRICIANS_CRM_BEST_FOR_PAGE_PROPS,
  painting: PAINTING_CRM_BEST_FOR_PAGE_PROPS,
  roofing: ROOFING_CRM_BEST_FOR_PAGE_PROPS,
  "general-contractors": GENERAL_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS,
  landscaping: LANDSCAPING_CRM_BEST_FOR_PAGE_PROPS,
  construction: CONSTRUCTION_CRM_BEST_FOR_PAGE_PROPS,
  remodeling: REMODELING_CRM_BEST_FOR_PAGE_PROPS,
  handyman: HANDYMAN_CRM_BEST_FOR_PAGE_PROPS,
  "property-management": PROPERTY_MANAGEMENT_CRM_BEST_FOR_PAGE_PROPS,
  "pest-control": PEST_CONTROL_CRM_BEST_FOR_PAGE_PROPS,
  "pool-service": POOL_SERVICE_CRM_BEST_FOR_PAGE_PROPS,
  "junk-removal": JUNK_REMOVAL_CRM_BEST_FOR_PAGE_PROPS,
  moving: MOVING_CRM_BEST_FOR_PAGE_PROPS,
  "appliance-repair": APPLIANCE_REPAIR_CRM_BEST_FOR_PAGE_PROPS,
  "garage-door": GARAGE_DOOR_CRM_BEST_FOR_PAGE_PROPS,
  locksmith: LOCKSMITH_CRM_BEST_FOR_PAGE_PROPS,
  flooring: FLOORING_CRM_BEST_FOR_PAGE_PROPS,
  "fence-deck": FENCE_DECK_CRM_BEST_FOR_PAGE_PROPS,
  "glass-window-installers": GLASS_WINDOW_INSTALLERS_CRM_BEST_FOR_PAGE_PROPS,
  "concrete-contractors": CONCRETE_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS,
  excavation: EXCAVATION_CRM_BEST_FOR_PAGE_PROPS,
  "auto-repair": AUTO_REPAIR_CRM_BEST_FOR_PAGE_PROPS,
  "mobile-mechanics": MOBILE_MECHANICS_CRM_BEST_FOR_PAGE_PROPS,
  "cleaning-franchises": CLEANING_FRANCHISES_CRM_BEST_FOR_PAGE_PROPS,
  "event-services": EVENT_SERVICES_CRM_BEST_FOR_PAGE_PROPS,
  "home-inspectors": HOME_INSPECTORS_CRM_BEST_FOR_PAGE_PROPS,
};

/** Same order as app/crm/best-for/page.tsx scenario grid */
const CRM_BEST_FOR_HUB_SLUG_ORDER = [
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

export function getCrmBestForHubScenarioLinks(): CrmBestForHubCard[] {
  return CRM_BEST_FOR_HUB_SLUG_ORDER.map((slug) => {
    const props = CRM_BEST_FOR_PROPS_BY_SLUG[slug];
    if (!props) throw new Error(`Missing CRM best-for hub props: ${slug}`);
    return {
      label: props.title,
      href: getCrmBestForUrl(slug),
      description: props.subtitle,
    };
  });
}

export function getCrmBestForHubLinks(): CrmBestForHubCard[] {
  return [CRM_BEST_FOR_ROUNDUP_HUB_LINK, ...getCrmBestForHubScenarioLinks()];
}
