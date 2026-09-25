const AFFILIATE_HOST_MARKERS = ["try-hubspot.com"] as const;

/**
 * Rel attributes for outbound Visit / Learn More CTAs.
 * Adds `sponsored` only when the destination is a known affiliate/tracking host.
 * Ordinary vendor marketing URLs stay `noopener noreferrer` — they are not
 * reliably distinguishable from compensated links in current data.
 */
export function vendorCtaRel(url: string | undefined): string {
  if (url && AFFILIATE_HOST_MARKERS.some((marker) => url.includes(marker))) {
    return "sponsored noopener noreferrer";
  }
  return "noopener noreferrer";
}
