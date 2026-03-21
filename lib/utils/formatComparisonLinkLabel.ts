/**
 * Turns a compare slug like "asana-vs-clickup" into a readable label for links.
 */
export function formatComparisonLinkLabelFromSlug(slug: string): string {
  const title = slug
    .split("-vs-")
    .map((part) =>
      part
        .split("-")
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    )
    .join(" vs ");
  return `${title} (2026)`;
}
