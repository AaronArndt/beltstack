const BASE = "/email-marketing/guides";

export const EMAIL_MARKETING_GUIDES = [
  {
    slug: "how-to-use-email-marketing-for-contractors",
    title: "How to Use Email Marketing for Contractors",
    description: "Campaign maps, automation ideas, and field-to-office handoffs for trade businesses.",
    href: `${BASE}/how-to-use-email-marketing-for-contractors`,
  },
  {
    slug: "email-marketing-for-local-business",
    title: "Email Marketing for Local Business",
    description: "List growth, neighborhood trust, and local offer cadences that do not feel spammy.",
    href: `${BASE}/email-marketing-for-local-business`,
  },
  {
    slug: "email-marketing-vs-sms-marketing",
    title: "Email Marketing vs SMS Marketing",
    description: "When to use each channel, compliance reminders, and how teams combine both.",
    href: `${BASE}/email-marketing-vs-sms-marketing`,
  },
  {
    slug: "how-to-build-an-email-list",
    title: "How to Build an Email List",
    description: "Website capture, in-person signups, and service-touchpoint permission workflows.",
    href: `${BASE}/how-to-build-an-email-list`,
  },
  {
    slug: "best-email-campaigns-for-service-businesses",
    title: "Best Email Campaigns for Service Businesses",
    description: "Templates for seasonal pushes, maintenance reminders, reviews, and win-back offers.",
    href: `${BASE}/best-email-campaigns-for-service-businesses`,
  },
  {
    slug: "email-deliverability-spf-dkim-dmarc",
    title: "Email Deliverability: SPF, DKIM & DMARC",
    description:
      "Authentication basics for small businesses—what records do, how ESPs use them, and when to loop in DNS-savvy help.",
    href: `${BASE}/email-deliverability-spf-dkim-dmarc`,
  },
  {
    slug: "email-automation-for-service-businesses",
    title: "Email Automation for Service Businesses",
    description:
      "Welcome flows, post-job follow-up, maintenance reminders, and win-back—automation that fits how crews actually work.",
    href: `${BASE}/email-automation-for-service-businesses`,
  },
  {
    slug: "email-marketing-consent-and-can-spam",
    title: "Email Marketing Consent & CAN-SPAM Basics",
    description:
      "Opt-in, physical address, unsubscribe, and honest subject lines—practical compliance habits for US-focused senders.",
    href: `${BASE}/email-marketing-consent-and-can-spam`,
  },
] as const;
