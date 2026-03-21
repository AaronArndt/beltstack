/**
 * Parse `/[category]/best-for/[slug]` links. Returns null for hub pages, guides, compares, etc.
 */
export function parseBestForLink(href: string): { category: string; slug: string } | null {
  const m = href.trim().match(/^\/([\w-]+)\/best-for\/([\w-]+)\/?$/);
  if (!m) return null;
  return { category: m[1], slug: m[2] };
}

/** Humanize slug for CTA text, e.g. "small-business" → "small business" */
export function humanizeBestForSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}
