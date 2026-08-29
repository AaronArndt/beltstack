import { getSoftwarePick } from "@/lib/data/softwarePickCards";
import type { SoftwarePickCardContent, SoftwarePickCategory } from "@/lib/data/softwarePickCards";
import { getSoftwareCategoryHubHref } from "@/lib/data/tradeHubs/softwareCategoryHubs";
import { getBestForTradeRecommendations } from "@/lib/data/tradeHubs/tradeBestForRecommendations";
import type { TradeHubCategoryStackItem } from "@/lib/types/tradeHub";

export type TradeHubCategoryPreview = {
  softwareCategory: SoftwarePickCategory;
  href: string;
  mapped: boolean;
  picks: { slug: string; pick: SoftwarePickCardContent }[];
};

/**
 * Same product-selection path as TradeHubPage category cards:
 * mapped /best-for/ featured slugs when available, otherwise categoryStack.productSlugs.
 */
export function getTradeHubCategoryPreview(
  item: TradeHubCategoryStackItem,
  tradeSlug: string
): TradeHubCategoryPreview {
  const softwareCategory = item.softwareCategory as SoftwarePickCategory;
  const resolved = getBestForTradeRecommendations(softwareCategory, tradeSlug);
  const productSlugs = resolved?.productSlugs ?? item.productSlugs;
  const picks = productSlugs
    .map((slug) => {
      const pick = getSoftwarePick(softwareCategory, slug);
      return pick != null ? { slug, pick } : null;
    })
    .filter((x): x is { slug: string; pick: SoftwarePickCardContent } => x != null);

  return {
    softwareCategory,
    href: resolved?.href ?? item.categoryHubHrefOverride ?? getSoftwareCategoryHubHref(softwareCategory),
    mapped: resolved != null,
    picks,
  };
}
