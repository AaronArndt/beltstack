/**
 * CRM-scoped rating resolution (product + CRM category).
 *
 * If a CRM product has a publishable Scoring Methodology v1.0 record,
 * the derived overall replaces the older editorial rating on CRM surfaces.
 * Products without a publishable record keep their existing editorial rating.
 *
 * Do not use this helper for other categories (e.g. HubSpot Email Marketing).
 * Do not sort recommendations by the resolved rating.
 */

import type { AlternativesTemplateProps, AlternativesTopPick } from "@/components/alternatives/AlternativesTemplate";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import { getCrmStandardizedScore, PIPEDRIVE_CRM_STARTING_PRICE } from "@/lib/data/crmStandardizedScores";
import { overlayVerifiedStartingPrice } from "@/lib/data/verifiedStartingPrices";
import {
  EDITORIAL_SCORE_DIMENSIONS,
  EDITORIAL_SCORE_DIMENSION_LABELS,
  formatEditorialRating,
  publishableOverallScore,
} from "@/lib/editorial/scoring";

export function getCrmCanonicalRating(slug: string, fallbackRating: string): string {
  const score = getCrmStandardizedScore(slug);
  if (!score) return fallbackRating;
  const overall = publishableOverallScore(score);
  if (overall == null) return fallbackRating;
  return formatEditorialRating(overall);
}

export function overlayCrmStartingPrice(slug: string, startingPrice: string): string {
  if (slug === "pipedrive") return PIPEDRIVE_CRM_STARTING_PRICE;
  return overlayVerifiedStartingPrice(slug, startingPrice, "crm");
}

/** CRM review slug from a category-scoped review href. Email-marketing HubSpot does not match. */
export function crmReviewSlugFromHref(href: string): string | null {
  const match = /^\/crm\/review\/([^/?#]+)/.exec(href);
  return match?.[1] ?? null;
}

/** Resolve a guide-sidebar rating when the card points at a CRM review. */
export function resolveCrmGuideSidebarRating(
  reviewHref: string,
  fallbackRating: string | number | undefined
): string | undefined {
  if (fallbackRating == null) return undefined;
  const fallback = typeof fallbackRating === "number" ? fallbackRating.toFixed(1) : fallbackRating;
  const slug = crmReviewSlugFromHref(reviewHref);
  if (!slug) return fallback;
  return getCrmCanonicalRating(slug, fallback);
}

export function withCrmCanonicalPickRatings<T extends { slug: string; rating: string; startingPrice?: string }>(
  items: T[]
): T[] {
  return items.map((item) => ({
    ...item,
    rating: getCrmCanonicalRating(item.slug, item.rating),
    ...(item.startingPrice != null
      ? { startingPrice: overlayCrmStartingPrice(item.slug, item.startingPrice) }
      : {}),
  }));
}

export function applyCrmCanonicalBestForProps<
  T extends {
    featuredProducts: Array<{ slug: string; rating: string; startingPrice: string }>;
    comparisonTableRows: Array<{ slug: string; startingPrice: string }>;
  },
>(props: T): T {
  return {
    ...props,
    featuredProducts: props.featuredProducts.map((product) => ({
      ...product,
      rating: getCrmCanonicalRating(product.slug, product.rating),
      startingPrice: overlayCrmStartingPrice(product.slug, product.startingPrice),
    })) as T["featuredProducts"],
    comparisonTableRows: props.comparisonTableRows.map((row) => ({
      ...row,
      startingPrice: overlayCrmStartingPrice(row.slug, row.startingPrice),
    })) as T["comparisonTableRows"],
  };
}

function overlayProductSide(
  product: ComparisonTemplateProps["productA"]
): ComparisonTemplateProps["productA"] {
  return {
    ...product,
    rating: getCrmCanonicalRating(product.slug, product.rating ?? ""),
    startingPrice:
      product.startingPrice != null
        ? overlayCrmStartingPrice(product.slug, product.startingPrice)
        : product.startingPrice,
  };
}

function standardizedRatingsComparison(
  slugA: string,
  slugB: string
): ComparisonTemplateProps["ratingsComparison"] {
  const scoreA = getCrmStandardizedScore(slugA);
  const scoreB = getCrmStandardizedScore(slugB);
  const overallA = scoreA ? publishableOverallScore(scoreA) : null;
  const overallB = scoreB ? publishableOverallScore(scoreB) : null;
  if (overallA == null || overallB == null || scoreA == null || scoreB == null) return undefined;
  return EDITORIAL_SCORE_DIMENSIONS.map((key) => ({
    category: EDITORIAL_SCORE_DIMENSION_LABELS[key],
    productA: formatEditorialRating(scoreA.dimensions[key].score),
    productB: formatEditorialRating(scoreB.dimensions[key].score),
  }));
}

function isMigratedCrmSlug(slug: string): boolean {
  const score = getCrmStandardizedScore(slug);
  return score != null && publishableOverallScore(score) != null;
}

export function applyCrmCanonicalComparison(page: ComparisonTemplateProps): ComparisonTemplateProps {
  const bothMigrated = standardizedRatingsComparison(page.productA.slug, page.productB.slug);
  const eitherMigrated = isMigratedCrmSlug(page.productA.slug) || isMigratedCrmSlug(page.productB.slug);
  return {
    ...page,
    productA: overlayProductSide(page.productA),
    productB: overlayProductSide(page.productB),
    ratingsComparison: bothMigrated ?? (eitherMigrated ? undefined : page.ratingsComparison),
  };
}

function overlayAlternativePick(pick: AlternativesTopPick): AlternativesTopPick {
  return {
    ...pick,
    rating: getCrmCanonicalRating(pick.slug, pick.rating),
    startingPrice:
      pick.startingPrice != null ? overlayCrmStartingPrice(pick.slug, pick.startingPrice) : pick.startingPrice,
  };
}

export function applyCrmCanonicalAlternatives(page: AlternativesTemplateProps): AlternativesTemplateProps {
  return {
    ...page,
    topAlternatives: page.topAlternatives.map(overlayAlternativePick),
    comparisonTableRows: page.comparisonTableRows.map((row) => ({
      ...row,
      startingPrice: overlayCrmStartingPrice(row.slug, row.startingPrice),
    })),
  };
}
