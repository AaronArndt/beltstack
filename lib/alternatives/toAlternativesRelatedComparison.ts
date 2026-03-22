import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import type { AlternativesRelatedComparison } from "@/components/alternatives/AlternativesTemplate";

const DEFAULT_SUMMARY =
  "Side-by-side features, pricing, and recommendations to help you choose the right fit.";

/**
 * Build a Related comparisons card payload from canonical comparison page data
 * (logos + summary paragraph), for AlternativesTemplate “Related comparisons” grid.
 */
export function toAlternativesRelatedComparison(
  href: string,
  data: ComparisonTemplateProps | null,
  fallbackLabel?: string
): AlternativesRelatedComparison {
  if (!data) {
    return {
      href,
      label: fallbackLabel ?? "Comparison",
      summary: DEFAULT_SUMMARY,
    };
  }
  const logoA = data.productA.logo ?? data.productA.logoSrc;
  const logoB = data.productB.logo ?? data.productB.logoSrc;
  return {
    href,
    label: `${data.productA.name} vs ${data.productB.name}`,
    summary: data.summaryParagraph,
    ...(logoA ? { productA: { logoSrc: logoA } } : {}),
    ...(logoB ? { productB: { logoSrc: logoB } } : {}),
  };
}
