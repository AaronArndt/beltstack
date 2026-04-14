import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Year shown on commercial-intent titles (reviews, comparisons, hubs).
 * Update when editorial refresh warrants it.
 */
export const SEO_YEAR = 2026 as const;

type SiteMetadataInput = {
  title: string;
  description: string;
  /**
   * App path starting with `/`. Sets `alternates.canonical`, `openGraph.url`, and aligns social URLs.
   * Omit for segment `layout.tsx` files that wrap many URLs — leaf pages must supply their own path.
   */
  path?: string;
  robots?: Metadata["robots"];
};

/**
 * Consistent BeltStack metadata: title/description, optional self-canonical URL,
 * Open Graph, and Twitter (`summary_large_image`).
 */
export function siteMetadata(input: SiteMetadataInput): Metadata {
  const { title, description, path, robots } = input;
  const absoluteUrl =
    path != null
      ? `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`
      : undefined;

  const result: Metadata = {
    title,
    description,
    robots,
    openGraph: {
      title,
      description,
      siteName: "BeltStack",
      type: "website",
      ...(absoluteUrl ? { url: absoluteUrl } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };

  if (absoluteUrl) {
    result.alternates = { canonical: absoluteUrl };
  }

  return result;
}
