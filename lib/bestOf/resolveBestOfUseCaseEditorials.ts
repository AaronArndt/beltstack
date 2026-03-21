import { parseBestForLink, humanizeBestForSlug } from "@/lib/bestOf/parseBestForLink";
import { BEST_OF_USE_CASE_EDITORIAL } from "@/lib/data/bestOfUseCaseEditorialCopy";

export type UseCaseLinkInput = { label: string; href: string; description: string };

export type ResolvedUseCaseEditorial = {
  href: string;
  label: string;
  paragraph: string;
  ctaLabel: string;
};

/**
 * Builds editorial use-case blocks only for `/[category]/best-for/[slug]` links that have copy in
 * `BEST_OF_USE_CASE_EDITORIAL`. Other links (hubs, compares, guides) are skipped.
 *
 * @param categoryLabelForCta e.g. "payroll software" → CTA "best payroll software for Contractors"
 */
export function resolveBestOfUseCaseEditorials(
  categoryLabelForCta: string,
  useCaseLinks: readonly UseCaseLinkInput[]
): ResolvedUseCaseEditorial[] {
  const out: ResolvedUseCaseEditorial[] = [];
  for (const link of useCaseLinks) {
    const parsed = parseBestForLink(link.href);
    if (!parsed) continue;
    const paragraph = BEST_OF_USE_CASE_EDITORIAL[parsed.category]?.[parsed.slug];
    if (!paragraph) continue;
    const human = humanizeBestForSlug(parsed.slug);
    out.push({
      href: link.href,
      label: link.label,
      paragraph,
      ctaLabel: `See our full guide to the best ${categoryLabelForCta} for ${human}`,
    });
  }
  return out;
}
