import type { GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { emailMarketingLogoForSlug } from "@/lib/data/emailMarketingLogos";
import { getEmailMarketingReviewUrl } from "@/lib/routes";

/** Sidebar “Related Reviews” items for email marketing guide pages. */
export const EMAIL_MARKETING_GUIDE_SIDEBAR_ITEMS: readonly GuideSidebarItem[] = [
  {
    name: "Mailchimp",
    logoSrc: emailMarketingLogoForSlug("mailchimp"),
    rating: 4.5,
    bestFor: "Newsletters, promos, starter automations",
    reviewHref: getEmailMarketingReviewUrl("mailchimp"),
  },
  {
    name: "ActiveCampaign",
    logoSrc: emailMarketingLogoForSlug("activecampaign"),
    rating: 4.6,
    bestFor: "CRM-aware automation and follow-up",
    reviewHref: getEmailMarketingReviewUrl("activecampaign"),
  },
  {
    name: "Klaviyo",
    logoSrc: emailMarketingLogoForSlug("klaviyo"),
    rating: 4.5,
    bestFor: "Event-led segmentation and retention",
    reviewHref: getEmailMarketingReviewUrl("klaviyo"),
  },
  {
    name: "HubSpot",
    logoSrc: emailMarketingLogoForSlug("hubspot-email-marketing"),
    rating: 4.4,
    bestFor: "Unified HubSpot CRM + campaigns",
    reviewHref: getEmailMarketingReviewUrl("hubspot-email-marketing"),
  },
  {
    name: "Kit",
    logoSrc: emailMarketingLogoForSlug("convertkit"),
    rating: 4.4,
    bestFor: "Creator-style nurture sequences",
    reviewHref: getEmailMarketingReviewUrl("convertkit"),
  },
  {
    name: "Brevo",
    logoSrc: emailMarketingLogoForSlug("brevo"),
    rating: 4.2,
    bestFor: "Email + SMS on one invoice",
    reviewHref: getEmailMarketingReviewUrl("brevo"),
  },
];
