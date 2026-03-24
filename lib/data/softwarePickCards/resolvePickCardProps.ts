import type { SoftwarePickCardProps } from "@/components/software-picks/SoftwarePickCard";
import { formatComparisonLinkLabelFromSlug } from "@/lib/utils/formatComparisonLinkLabel";
import type { SoftwarePickCardContent } from "./types";
import type { SoftwarePickCategoryRouteHelpers } from "./categoryRoutes";

export function toSoftwarePickCardProps(
  pick: SoftwarePickCardContent,
  routes: SoftwarePickCategoryRouteHelpers,
  overrides?: { id?: string; badgeText?: string }
): SoftwarePickCardProps {
  const comparisonLinks = pick.compareSlugs.slice(0, 3).map((slug) => ({
    href: routes.getCompareUrl(slug),
    label: formatComparisonLinkLabelFromSlug(slug),
  }));

  return {
    id: overrides?.id,
    name: pick.name,
    logoSrc: pick.logoSrc,
    badgeText: overrides?.badgeText ?? pick.badge,
    rating: pick.rating,
    summary: pick.description,
    highlightsExtra: pick.editorialParagraph,
    visitUrl: pick.visitUrl,
    reviewUrl: routes.getReviewUrl(pick.slug),
    pricingStartLabel: pick.startingPrice,
    pricingDetails: pick.pricingSummary,
    pros: pick.pros,
    cons: pick.cons,
    hasFreeTrial: pick.hasFreeTrial,
    hasFreePlan: pick.hasFreePlan,
    hasIntegrations: pick.hasIntegrations,
    alternativesUrl:
      pick.alternativesSlug === null
        ? undefined
        : routes.getAlternativeUrl(pick.alternativesSlug ?? pick.slug),
    comparisonLinks,
  };
}

/** “Best for” column in hub/best-of comparison tables */
export function comparisonTableBestForLabel(pick: SoftwarePickCardContent): string {
  return pick.comparisonTableBestFor ?? pick.badge;
}

/** Hub comparison table row built from canonical pick (matches `ComparisonTableRow` in HubPageTemplate) */
export function toHubComparisonTableRow(pick: SoftwarePickCardContent): {
  tool: string;
  bestFor: string;
  price: string;
  rating: string;
  slug: string;
  logoSrc?: string;
} {
  return {
    tool: pick.name,
    bestFor: comparisonTableBestForLabel(pick),
    price: pick.startingPrice,
    rating: pick.rating,
    slug: pick.slug,
    logoSrc: pick.logoSrc,
  };
}
