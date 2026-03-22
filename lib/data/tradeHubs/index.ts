import type { TradeHubDefinition } from "@/lib/types/tradeHub";
import { TRADE_HUB_DEFINITIONS } from "./tradeHubDefinitions";

export { TRADE_HUB_DEFINITIONS } from "./tradeHubDefinitions";
export {
  SOFTWARE_CATEGORY_HUB,
  getSoftwareCategoryHubHref,
  getSoftwareCategoryHubLabel,
  getSoftwareCategoryShortLabel,
} from "./softwareCategoryHubs";

/** All trade hub slugs with published pages (for static generation & sitemap). */
export const TRADE_HUB_SLUGS = Object.keys(TRADE_HUB_DEFINITIONS) as readonly string[];

export function getTradeHubDefinition(slug: string): TradeHubDefinition | undefined {
  return TRADE_HUB_DEFINITIONS[slug];
}

export function getAllTradeHubDefinitions(): TradeHubDefinition[] {
  return TRADE_HUB_SLUGS.map((s) => TRADE_HUB_DEFINITIONS[s]);
}
