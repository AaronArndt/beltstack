/**
 * Logo paths for email marketing products (files under /public/Logos).
 * Fallback for unknown slugs: BS placeholder.
 */
export const EMAIL_MARKETING_LOGOS: Record<string, string> = {
  mailchimp: "/Logos/mailchimp.jpeg",
  "constant-contact": "/Logos/constantcontact.jpeg",
  activecampaign: "/Logos/activecampaign.jpeg",
  "hubspot-email-marketing": "/Logos/hubspot.jpeg",
  klaviyo: "/Logos/klaviyo.jpeg",
  convertkit: "/Logos/kit.jpeg",
  brevo: "/Logos/brevo.jpeg",
  mailerlite: "/Logos/mailerlite.jpeg",
};

const FALLBACK_LOGO = "/Logos/BS_Logo_B.svg";

export function emailMarketingLogoForSlug(slug: string): string {
  return EMAIL_MARKETING_LOGOS[slug] ?? FALLBACK_LOGO;
}
