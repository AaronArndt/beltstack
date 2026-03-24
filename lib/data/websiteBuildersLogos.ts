/** Logo paths for website builder products (public/Logos). Fallback for unknown slugs. */
const WEBSITE_BUILDER_LOGO_BY_SLUG: Record<string, string> = {
  wix: "/Logos/wix.jpeg",
  squarespace: "/Logos/squarespace.jpeg",
  shopify: "/Logos/shopify.jpeg",
  webflow: "/Logos/webflow.jpeg",
  duda: "/Logos/duda.png",
  "godaddy-website-builder": "/Logos/godaddy.jpeg",
  wordpress: "/Logos/wordpress.jpeg",
  "hostinger-website-builder": "/Logos/hostinger.jpeg",
};

export function getWebsiteBuilderLogoSrc(slug: string): string {
  return WEBSITE_BUILDER_LOGO_BY_SLUG[slug] ?? "/Logos/BS_Logo_B.svg";
}
