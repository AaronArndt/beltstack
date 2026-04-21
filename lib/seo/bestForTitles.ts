/**
 * Builds a deterministic metadata title for best-for pages.
 * Expected input format: "Best <Software Category> for <Business Type> (2026)".
 */
export function buildBestForMetaTitle(baseTitle: string): string {
  const trimmed = baseTitle.trim();
  const alreadyBranded = /\|\s*BeltStack\s*$/i.test(trimmed);
  const withoutBrand = trimmed.replace(/\s*\|\s*BeltStack\s*$/i, "").trim();
  const m = withoutBrand.match(/^Best\s+(.+?)\s+for\s+(.+?)\s+\((\d{4})\)$/i);
  if (!m) return alreadyBranded ? trimmed : `${withoutBrand} | BeltStack`;

  const category = m[1].trim();
  const business = m[2].trim();
  const year = m[3];
  return `Best ${category} for ${business}: Top Options (${year}) | BeltStack`;
}
