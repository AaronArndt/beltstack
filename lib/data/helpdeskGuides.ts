/**
 * Helpdesk guides hub and individual guide pages.
 * Educational / evaluation focus for the hub—not duplicate “best for” picks.
 */

export type HelpdeskGuideEntry = { title: string; href: string; description: string };

export const HELPDESK_GUIDES: HelpdeskGuideEntry[] = [
  {
    title: "How to Choose Helpdesk Software",
    href: "/helpdesk/guides/how-to-choose-helpdesk-software",
    description: "Evaluation framework: volume, channels, automation, integrations, and total cost per agent.",
  },
  {
    title: "Helpdesk Software Pricing Explained",
    href: "/helpdesk/guides/helpdesk-software-pricing-guide",
    description: "Per-seat models, add-ons, and when enterprise tiers actually pay off.",
  },
  {
    title: "Shared Inbox vs Full Helpdesk",
    href: "/helpdesk/guides/shared-inbox-vs-helpdesk-software",
    description: "When collaboration tools are enough—and when you need ticketing, SLAs, and reporting.",
  },
  {
    title: "Helpdesk vs Live Chat Tools",
    href: "/helpdesk/guides/helpdesk-software-vs-live-chat",
    description: "How real-time chat fits (or doesn’t) next to ticketing and customer history.",
  },
  {
    title: "SMB Support: Moving Beyond Email",
    href: "/helpdesk/guides/best-helpdesk-software-for-small-business",
    description: "Signs you’ve outgrown forwarding chains—and what to implement first.",
  },
  {
    title: "Support Ops for Startups",
    href: "/helpdesk/guides/helpdesk-software-for-startups",
    description: "Lean setup, tool sprawl, and what to postpone until volume demands it.",
  },
  {
    title: "Ecommerce Support Workflows",
    href: "/helpdesk/guides/helpdesk-software-for-ecommerce",
    description: "Order-linked tickets, returns, and integrations—evaluation concepts.",
  },
  {
    title: "SaaS Support: Tickets, Product & Billing Context",
    href: "/helpdesk/guides/helpdesk-software-for-saas-companies",
    description: "How SaaS teams think about lifecycle support—not a vendor shortlist.",
  },
];
