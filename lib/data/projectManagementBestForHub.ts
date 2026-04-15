/**
 * Project management /best-for hub: link labels match each scenario page `title` (same H1 as destination).
 */

import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { getProjectManagementBestForUrl } from "@/lib/routes";
import { AGENCIES_PAGE_PROPS } from "@/lib/data/projectManagementBestForAgencies";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/projectManagementBestForFreelancers";
import { REMOTE_TEAMS_PAGE_PROPS } from "@/lib/data/projectManagementBestForRemoteTeams";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/projectManagementBestForSmallBusiness";
import { STARTUPS_PAGE_PROPS } from "@/lib/data/projectManagementBestForStartups";
import {
  CONSTRUCTION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  ELECTRICIANS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  GENERAL_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  HANDYMAN_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  HVAC_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  JUNK_REMOVAL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  LANDSCAPING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  MOVING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  PAINTING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  PLUMBING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  PEST_CONTROL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  POOL_SERVICE_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  PROPERTY_MANAGEMENT_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  REMODELING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  ROOFING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
} from "@/lib/data/projectManagementBestForTrades";

/** Matches H1 on /project-management/best-project-management-software */
export const PROJECT_MANAGEMENT_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best Project Management Software (2026)",
  href: "/project-management/best-project-management-software",
  description:
    "The best project management software for agencies, remote teams, and small businesses is the workspace where tasks, deadlines, and file context actually stay together—so status meetings shrink and handoffs stop living in email.",
} as const;

export type ProjectManagementBestForHubCard = { label: string; href: string; description: string };

const PM_BEST_FOR_PROPS_BY_SLUG: Record<string, BestForTemplateProps> = {
  freelancers: FREELANCERS_PAGE_PROPS,
  "small-business": SMALL_BUSINESS_PAGE_PROPS,
  startups: STARTUPS_PAGE_PROPS,
  agencies: AGENCIES_PAGE_PROPS,
  "remote-teams": REMOTE_TEAMS_PAGE_PROPS,
  hvac: HVAC_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  plumbing: PLUMBING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  electricians: ELECTRICIANS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  painting: PAINTING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  roofing: ROOFING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  "general-contractors": GENERAL_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  landscaping: LANDSCAPING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  construction: CONSTRUCTION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  remodeling: REMODELING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  handyman: HANDYMAN_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  "property-management": PROPERTY_MANAGEMENT_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  "pest-control": PEST_CONTROL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  "pool-service": POOL_SERVICE_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  "junk-removal": JUNK_REMOVAL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
  moving: MOVING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS,
};

const PM_BEST_FOR_HUB_SLUG_ORDER = [
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

export function getProjectManagementBestForHubScenarioLinks(): ProjectManagementBestForHubCard[] {
  return PM_BEST_FOR_HUB_SLUG_ORDER.map((slug) => {
    const props = PM_BEST_FOR_PROPS_BY_SLUG[slug];
    if (!props) throw new Error(`Missing project management best-for hub props: ${slug}`);
    return {
      label: props.title,
      href: getProjectManagementBestForUrl(slug),
      description: props.subtitle,
    };
  });
}

export function getProjectManagementBestForHubLinks(): ProjectManagementBestForHubCard[] {
  return [PROJECT_MANAGEMENT_BEST_FOR_ROUNDUP_HUB_LINK, ...getProjectManagementBestForHubScenarioLinks()];
}
