/**
 * CRM guides hub and individual guide pages.
 * Same structure as payrollGuides / accountingGuides.
 */

export type CrmGuideEntry = { title: string; href: string; description: string };

export const CRM_GUIDES: CrmGuideEntry[] = [
  {
    title: "What is CRM Software",
    href: "/crm/guides/what-is-crm-software",
    description:
      "Learn what CRM software is, who uses it, and how it helps businesses manage contacts, leads, and sales pipelines.",
  },
  {
    title: "CRM for Small Business",
    href: "/crm/guides/crm-for-small-business",
    description:
      "Choosing and using CRM when you're a small team: features that matter, pricing, and how to get started.",
  },
  {
    title: "CRM for Startups",
    href: "/crm/guides/crm-for-startups",
    description:
      "How startups choose and use CRM software to scale sales and marketing without enterprise complexity.",
  },
  {
    title: "CRM for Agencies",
    href: "/crm/guides/crm-for-agencies",
    description:
      "CRM for agencies: managing multiple clients, pipelines, and team collaboration in one place.",
  },
  {
    title: "CRM for Sales Teams",
    href: "/crm/guides/crm-for-sales-teams",
    description:
      "What sales teams need from CRM: pipeline focus, activity tracking, and tools that reps actually use.",
  },
  {
    title: "How to Choose CRM Software",
    href: "/crm/guides/how-to-choose-crm-software",
    description:
      "Key factors when comparing CRM platforms: ease of use, pipeline fit, pricing, and integrations.",
  },
  {
    title: "CRM vs Spreadsheets",
    href: "/crm/guides/crm-vs-spreadsheets",
    description:
      "When to move from spreadsheets to CRM and what you gain: automation, reporting, and team alignment.",
  },
  {
    title: "CRM vs Marketing Automation",
    href: "/crm/guides/crm-vs-marketing-automation",
    description:
      "When you need CRM, marketing automation, or both—and how they work together.",
  },
  {
    title: "CRM for Consultants",
    href: "/crm/guides/crm-for-consultants",
    description:
      "How consultants use CRM to manage clients, projects, and follow-up without overpaying for enterprise tools.",
  },
  {
    title: "CRM vs Helpdesk Software",
    href: "/crm/guides/crm-vs-helpdesk-software",
    description:
      "Learn the difference between CRM and helpdesk tools, when you need one or both, and how they connect across sales and support.",
  },
];
