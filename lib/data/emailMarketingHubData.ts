import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getEmailMarketingBestForUrl, getEmailMarketingCompareUrl } from "@/lib/routes";

const GUIDES_BASE = "/email-marketing/guides";

export const EMAIL_MARKETING_HUB_GUIDES = [
  {
    slug: "how-to-use-email-marketing-for-contractors",
    title: "How to Use Email Marketing for Contractors",
    description: "Operational playbooks for project follow-ups, reminders, and seasonal campaigns.",
    href: `${GUIDES_BASE}/how-to-use-email-marketing-for-contractors`,
  },
  {
    slug: "email-marketing-for-local-business",
    title: "Email Marketing for Local Business",
    description: "List-building ethics, neighborhood relevance, and conversion-focused cadences.",
    href: `${GUIDES_BASE}/email-marketing-for-local-business`,
  },
  {
    slug: "email-marketing-vs-sms-marketing",
    title: "Email Marketing vs SMS Marketing",
    description: "Channel selection rules and how teams combine both without over-messaging customers.",
    href: `${GUIDES_BASE}/email-marketing-vs-sms-marketing`,
  },
  {
    slug: "how-to-build-an-email-list",
    title: "How to Build an Email List",
    description: "Capture paths from your website, office, and completed jobs.",
    href: `${GUIDES_BASE}/how-to-build-an-email-list`,
  },
  {
    slug: "best-email-campaigns-for-service-businesses",
    title: "Best Email Campaigns for Service Businesses",
    description: "High-performing campaign types for trades and multi-location operators.",
    href: `${GUIDES_BASE}/best-email-campaigns-for-service-businesses`,
  },
  {
    slug: "email-deliverability-spf-dkim-dmarc",
    title: "Email Deliverability: SPF, DKIM & DMARC",
    description:
      "Why authentication matters for inbox placement and how to validate DNS records without breaking existing mail.",
    href: `${GUIDES_BASE}/email-deliverability-spf-dkim-dmarc`,
  },
  {
    slug: "email-automation-for-service-businesses",
    title: "Email Automation for Service Businesses",
    description:
      "Sequences tied to completed jobs, seasons, and estimates—automation scope that office staff can maintain.",
    href: `${GUIDES_BASE}/email-automation-for-service-businesses`,
  },
  {
    slug: "email-marketing-consent-and-can-spam",
    title: "Email Marketing Consent & CAN-SPAM Basics",
    description:
      "Permission, footer requirements, and honest headers—baseline habits before you scale send volume.",
    href: `${GUIDES_BASE}/email-marketing-consent-and-can-spam`,
  },
];

export const EMAIL_MARKETING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Email as a follow-up system, not a billboard",
    body: "Service brands win when email reinforces appointments, estimates, and completed work. One-off blasts rarely outperform disciplined post-job sequences.",
    links: [{ label: "Best email marketing for contractors →", href: getEmailMarketingBestForUrl("contractors") }],
  },
  {
    title: "Automation that respects small teams",
    body: "Pick tools your office manager can realistically maintain. Complex branching logic fails when nobody owns the automation map monthly.",
    links: [{ label: "Best for small business →", href: getEmailMarketingBestForUrl("small-business") }],
  },
  {
    title: "CRM + email alignment",
    body: "When email sits beside CRM data, you can segment by job type, lead source, and seasonality—driving higher reply rates than generic newsletters.",
    links: [{ label: "CRM software hub →", href: "/crm" }],
  },
  {
    title: "Website capture + SEO traffic",
    body: "Use forms and landing pages to convert organic visitors into subscribers, then nurture them with proof-driven campaigns.",
    links: [
      { label: "Website builders hub →", href: "/website-builders" },
      { label: "SEO tools hub →", href: "/seo-tools" },
    ],
  },
  {
    title: "Lead gen → inbox follow-up",
    body: "Paid and directory leads go cold fast without a deliberate email sequence—sync segments to the sources you fund so nurture matches what the homeowner was promised.",
    links: [{ label: "Lead generation hub →", href: "/lead-generation" }],
  },
  {
    title: "Reviews and email timing",
    body: "The best review requests feel like a natural continuation of the job, not a blast—email can carry the story when you coordinate copy with reputation programs.",
    links: [{ label: "Reputation management hub →", href: "/reputation-management" }],
  },
];

export const EMAIL_MARKETING_HUB_POPULAR_COMPARISONS = [
  {
    label: "Mailchimp vs Constant Contact",
    slug: "mailchimp-vs-constant-contact",
    href: getEmailMarketingCompareUrl("mailchimp-vs-constant-contact"),
  },
  {
    label: "Mailchimp vs ActiveCampaign",
    slug: "mailchimp-vs-activecampaign",
    href: getEmailMarketingCompareUrl("mailchimp-vs-activecampaign"),
  },
  {
    label: "Klaviyo vs Mailchimp",
    slug: "klaviyo-vs-mailchimp",
    href: getEmailMarketingCompareUrl("klaviyo-vs-mailchimp"),
  },
  {
    label: "Kit vs Mailchimp",
    slug: "convertkit-vs-mailchimp",
    href: getEmailMarketingCompareUrl("convertkit-vs-mailchimp"),
  },
  {
    label: "Brevo vs Mailchimp",
    slug: "brevo-vs-mailchimp",
    href: getEmailMarketingCompareUrl("brevo-vs-mailchimp"),
  },
];
