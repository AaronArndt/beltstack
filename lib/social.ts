/** Official BeltStack social profiles (external links). */
export const INSTAGRAM_URL = "https://www.instagram.com/beltstackhq/" as const;

export type SocialLinkId = "instagram";

export type SocialLink = {
  id: SocialLinkId;
  label: string;
  href: string;
};

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: INSTAGRAM_URL,
  },
] as const;
