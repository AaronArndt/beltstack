/**
 * Helpdesk guides hub and individual guide pages.
 * Same structure as crmGuides / posGuides.
 */

export type HelpdeskGuideEntry = { title: string; href: string; description: string };

export const HELPDESK_GUIDES: HelpdeskGuideEntry[] = [
  {
    title: "Best Helpdesk Software for Small Business",
    href: "/helpdesk/guides/best-helpdesk-software-for-small-business",
    description:
      "Why small businesses move beyond email inboxes, what to look for in helpdesk software, and top picks for ease of use and value.",
  },
  {
    title: "Helpdesk Software for Startups",
    href: "/helpdesk/guides/helpdesk-software-for-startups",
    description:
      "How startups choose helpdesk tools: flexibility, low cost, scalability, and ease of setup.",
  },
  {
    title: "Helpdesk Software for Ecommerce",
    href: "/helpdesk/guides/helpdesk-software-for-ecommerce",
    description:
      "Order-related support, customer history, store integrations, and handling high message volume.",
  },
  {
    title: "How to Choose Helpdesk Software",
    href: "/helpdesk/guides/how-to-choose-helpdesk-software",
    description:
      "Key factors: company size, support volume, channels, automation, reporting, integrations, and budget.",
  },
  {
    title: "Helpdesk Software vs Live Chat",
    href: "/helpdesk/guides/helpdesk-software-vs-live-chat",
    description:
      "When you need ticketing and workflows versus real-time messaging—and when you need both.",
  },
  {
    title: "Helpdesk Software Pricing Guide",
    href: "/helpdesk/guides/helpdesk-software-pricing-guide",
    description:
      "Pricing tiers, per-agent costs, automation and add-ons, and when advanced platforms make sense.",
  },
  {
    title: "Helpdesk Software for SaaS Companies",
    href: "/helpdesk/guides/helpdesk-software-for-saas-companies",
    description:
      "Ticketing, customer lifecycle context, integrations, self-serve support, and scaling support operations.",
  },
  {
    title: "Shared Inbox vs Helpdesk Software",
    href: "/helpdesk/guides/shared-inbox-vs-helpdesk-software",
    description:
      "When a shared inbox is enough versus when you need full helpdesk workflows, automation, and reporting.",
  },
];
