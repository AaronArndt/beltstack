import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

/** Default social / link-preview image (PNG for iMessage, Facebook, etc.). */
export const DEFAULT_OG_IMAGE = "/Logos/BS_Logo_B.png";

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
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 809,
          height: 809,
          alt: "BeltStack",
        },
      ],
      ...(absoluteUrl ? { url: absoluteUrl } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };

  if (absoluteUrl) {
    result.alternates = { canonical: absoluteUrl };
  }

  return result;
}
