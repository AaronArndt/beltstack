/**
 * Scheduling /best-for hub: link labels match each scenario page `title` (same H1 as destination).
 */

import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { getSchedulingBestForUrl } from "@/lib/routes";
import {
  CONSULTANTS_PAGE_PROPS,
  FREELANCERS_PAGE_PROPS,
  SERVICE_BUSINESS_PAGE_PROPS,
  SMALL_BUSINESS_PAGE_PROPS,
  TEAMS_PAGE_PROPS,
} from "@/lib/data/schedulingBestFor";
import {
  CONSTRUCTION_SCHEDULING_BEST_FOR_PAGE_PROPS,
  ELECTRICIANS_SCHEDULING_BEST_FOR_PAGE_PROPS,
  GENERAL_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS,
  HANDYMAN_SCHEDULING_BEST_FOR_PAGE_PROPS,
  HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS,
  JUNK_REMOVAL_SCHEDULING_BEST_FOR_PAGE_PROPS,
  LANDSCAPING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  MOVING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  PAINTING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  PEST_CONTROL_SCHEDULING_BEST_FOR_PAGE_PROPS,
  PLUMBING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  POOL_SERVICE_SCHEDULING_BEST_FOR_PAGE_PROPS,
  PROPERTY_MANAGEMENT_SCHEDULING_BEST_FOR_PAGE_PROPS,
  REMODELING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  ROOFING_SCHEDULING_BEST_FOR_PAGE_PROPS,
} from "@/lib/data/schedulingBestForTrades";

/** Matches H1 on /scheduling/best-scheduling-software */
export const SCHEDULING_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best Scheduling Software (2026)",
  href: "/scheduling/best-scheduling-software",
  description:
    "The best scheduling software for consultants, freelancers, and service businesses is the one clients actually book through—without double bookings, timezone confusion, or reminder gaps that drive no-shows.",
} as const;

export type SchedulingBestForHubCard = { label: string; href: string; description: string };

const SCHEDULING_BEST_FOR_PROPS_BY_SLUG: Record<string, BestForTemplateProps> = {
  freelancers: FREELANCERS_PAGE_PROPS,
  consultants: CONSULTANTS_PAGE_PROPS,
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  "service-business": SERVICE_BUSINESS_PAGE_PROPS,
  teams: TEAMS_PAGE_PROPS,
  hvac: HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS,
  plumbing: PLUMBING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  electricians: ELECTRICIANS_SCHEDULING_BEST_FOR_PAGE_PROPS,
  painting: PAINTING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  roofing: ROOFING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  "general-contractors": GENERAL_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS,
  landscaping: LANDSCAPING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  construction: CONSTRUCTION_SCHEDULING_BEST_FOR_PAGE_PROPS,
  remodeling: REMODELING_SCHEDULING_BEST_FOR_PAGE_PROPS,
  handyman: HANDYMAN_SCHEDULING_BEST_FOR_PAGE_PROPS,
  "property-management": PROPERTY_MANAGEMENT_SCHEDULING_BEST_FOR_PAGE_PROPS,
  "pest-control": PEST_CONTROL_SCHEDULING_BEST_FOR_PAGE_PROPS,
  "pool-service": POOL_SERVICE_SCHEDULING_BEST_FOR_PAGE_PROPS,
  "junk-removal": JUNK_REMOVAL_SCHEDULING_BEST_FOR_PAGE_PROPS,
  moving: MOVING_SCHEDULING_BEST_FOR_PAGE_PROPS,
};

const SCHEDULING_BEST_FOR_HUB_SLUG_ORDER = [
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

export function getSchedulingBestForHubScenarioLinks(): SchedulingBestForHubCard[] {
  return SCHEDULING_BEST_FOR_HUB_SLUG_ORDER.map((slug) => {
    const props = SCHEDULING_BEST_FOR_PROPS_BY_SLUG[slug];
    if (!props) throw new Error(`Missing scheduling best-for hub props: ${slug}`);
    return {
      label: props.title,
      href: getSchedulingBestForUrl(slug),
      description: props.subtitle,
    };
  });
}

export function getSchedulingBestForHubLinks(): SchedulingBestForHubCard[] {
  return [SCHEDULING_BEST_FOR_ROUNDUP_HUB_LINK, ...getSchedulingBestForHubScenarioLinks()];
}
