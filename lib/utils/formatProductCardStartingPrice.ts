/**
 * Product cards often prefix pricing with "From " while CMS/data strings also start
 * with "From" (e.g. "From $39/mo (with Shopify plan)"). This normalizes to a single prefix.
 */
export function formatProductCardStartingPrice(startingPrice: string): string {
  const t = startingPrice.trim().replace(/^from\s+/i, "").trim();
  return `From ${t}`;
}
