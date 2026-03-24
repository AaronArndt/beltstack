import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

const DEFAULT_FALLBACK = "/Logos/BS_Logo_B.svg";

/** Build slug → logo URL from all comparisons in a category (first seen wins). */
export function productLogoMapFromComparisons(
  getSlugs: () => string[],
  getComparison: (slug: string) => ComparisonTemplateProps | null
): Record<string, string> {
  const map: Record<string, string> = {};
  for (const compSlug of getSlugs()) {
    const d = getComparison(compSlug);
    if (!d) continue;
    for (const p of [d.productA, d.productB]) {
      const src = p.logoSrc ?? p.logo;
      if (src && map[p.slug] === undefined) map[p.slug] = src;
    }
  }
  return map;
}

export function getLogoFromProductMap(
  map: Record<string, string>,
  slug: string,
  fallback: string = DEFAULT_FALLBACK
): string {
  return map[slug] ?? fallback;
}
