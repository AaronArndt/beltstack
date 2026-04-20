/**
 * Field service /best-for hub: link labels match each scenario page `title` (same H1 as destination).
 */

import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { getFieldServiceBestForUrl } from "@/lib/routes";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForContractors";
import { ELECTRICIANS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForElectricians";
import { HVAC_PAGE_PROPS } from "@/lib/data/fieldServiceBestForHvac";
import { PLUMBING_PAGE_PROPS } from "@/lib/data/fieldServiceBestForPlumbing";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForSmallBusiness";
import {
  APPLIANCE_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  AUTO_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  CLEANING_FRANCHISES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  CONCRETE_CONTRACTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  EVENT_SERVICES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  EXCAVATION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  FENCE_DECK_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  FLOORING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  GARAGE_DOOR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  GLASS_WINDOW_INSTALLERS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  HOME_INSPECTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  LOCKSMITH_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  MOBILE_MECHANICS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
} from "@/lib/data/fieldServiceBestForTrades";

/** Matches H1 on /field-service/best-field-service-software */
export const FIELD_SERVICE_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best Field Service Management Software (2026)",
  href: "/field-service/best-field-service-software",
  description:
    "The best field service management software for contractors and home services teams is the system dispatch trusts, technicians actually open in the truck, and the office uses to close the loop on estimates, invoices, and recurring work.",
} as const;

export type FieldServiceBestForHubCard = { label: string; href: string; description: string };

const FS_BEST_FOR_PROPS_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  contractors: CONTRACTORS_PAGE_PROPS,
  hvac: HVAC_PAGE_PROPS,
  plumbing: PLUMBING_PAGE_PROPS,
  electricians: ELECTRICIANS_PAGE_PROPS,
  painting: PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  roofing: ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  construction: CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  remodeling: REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  handyman: HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  landscaping: LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "property-management": PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "pest-control": PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "pool-service": POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "junk-removal": JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  moving: MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "appliance-repair": APPLIANCE_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "garage-door": GARAGE_DOOR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  locksmith: LOCKSMITH_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  flooring: FLOORING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "fence-deck": FENCE_DECK_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "glass-window-installers": GLASS_WINDOW_INSTALLERS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "concrete-contractors": CONCRETE_CONTRACTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  excavation: EXCAVATION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "auto-repair": AUTO_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "mobile-mechanics": MOBILE_MECHANICS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "cleaning-franchises": CLEANING_FRANCHISES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "event-services": EVENT_SERVICES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
  "home-inspectors": HOME_INSPECTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS,
};

/** Same order as app/field-service/best-for/page.tsx */
const FS_BEST_FOR_HUB_SLUG_ORDER = [
  "small-business",
  "contractors",
  "hvac",
  "plumbing",
  "electricians",
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

export function getFieldServiceBestForHubScenarioLinks(): FieldServiceBestForHubCard[] {
  return FS_BEST_FOR_HUB_SLUG_ORDER.map((slug) => {
    const props = FS_BEST_FOR_PROPS_BY_SLUG[slug];
    if (!props) throw new Error(`Missing field service best-for hub props: ${slug}`);
    return {
      label: props.title,
      href: getFieldServiceBestForUrl(slug),
      description: props.subtitle,
    };
  });
}

export function getFieldServiceBestForHubLinks(): FieldServiceBestForHubCard[] {
  return [FIELD_SERVICE_BEST_FOR_ROUNDUP_HUB_LINK, ...getFieldServiceBestForHubScenarioLinks()];
}
