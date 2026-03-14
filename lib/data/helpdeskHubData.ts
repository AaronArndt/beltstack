/**
 * Helpdesk hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/helpdesk/page.tsx.
 */

import {
  getHelpdeskReviewUrl,
  getHelpdeskCompareUrl,
  getHelpdeskBestForUrl,
} from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

// ——— Logo paths (place under /public/Logos/) ———
export const HELPDESK_LOGOS = {
  zendesk: "/Logos/zendesk.jpeg",
  freshdesk: "/Logos/freshsales.jpeg", // Freshworks; same company as Freshsales
  helpScout: "/Logos/helpscout.jpeg",
  intercom: "/Logos/intercom.png",
  zohoDesk: "/Logos/zohodesk.jpeg",
  gorgias: "/Logos/gorgias.jpeg",
  liveAgent: "/Logos/liveagent.jpeg",
  kayako: "/Logos/kayako.jpeg",
  front: "/Logos/front.jpeg",
} as const;

/** Top helpdesk picks for the hub hero section. */
export const HELPDESK_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "zendesk",
    name: "Zendesk",
    badge: "Best overall helpdesk software",
    descriptor: "Full-featured helpdesk with ticketing, multi-channel support, and strong automation for teams of all sizes.",
    rating: "4.5",
    price: "From ~$19/agent/mo",
    features: ["Ticketing and workflows", "Multi-channel support", "Automation and reporting"],
    reviewHref: getHelpdeskReviewUrl("zendesk"),
    compareHref: getHelpdeskCompareUrl("zendesk-vs-freshdesk"),
    logoSrc: HELPDESK_LOGOS.zendesk,
    visitUrl: "https://www.zendesk.com",
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    badge: "Best value helpdesk for growing teams",
    descriptor: "Affordable helpdesk with ticketing, automation, and solid support for small to midsize support teams.",
    rating: "4.5",
    price: "From ~$15/agent/mo",
    features: ["Ticketing and automation", "Multi-channel", "Good value"],
    reviewHref: getHelpdeskReviewUrl("freshdesk"),
    compareHref: getHelpdeskCompareUrl("zendesk-vs-freshdesk"),
    logoSrc: HELPDESK_LOGOS.freshdesk,
    visitUrl: "https://www.freshdesk.com",
  },
  {
    slug: "help-scout",
    name: "Help Scout",
    badge: "Best for email-based support teams",
    descriptor: "Shared inbox and helpdesk built around email-first support with a simple, team-friendly workflow.",
    rating: "4.6",
    price: "From ~$20/user/mo",
    features: ["Shared inbox", "Email-first workflows", "Customer context"],
    reviewHref: getHelpdeskReviewUrl("help-scout"),
    compareHref: getHelpdeskCompareUrl("help-scout-vs-zendesk"),
    logoSrc: HELPDESK_LOGOS.helpScout,
    visitUrl: "https://www.helpscout.com",
  },
  {
    slug: "intercom",
    name: "Intercom",
    badge: "Best for customer messaging and support",
    descriptor: "Messaging-first platform that combines live chat, bots, and help center for customer conversations.",
    rating: "4.4",
    price: "From ~$39/mo",
    features: ["Live chat and messaging", "Bots and automation", "Unified inbox"],
    reviewHref: getHelpdeskReviewUrl("intercom"),
    compareHref: getHelpdeskCompareUrl("intercom-vs-zendesk"),
    logoSrc: HELPDESK_LOGOS.intercom,
    visitUrl: "https://www.intercom.com",
  },
  {
    slug: "gorgias",
    name: "Gorgias",
    badge: "Best for ecommerce support teams",
    descriptor: "Helpdesk built for ecommerce with deep Shopify and Magento integration and order context.",
    rating: "4.5",
    price: "From ~$60/mo",
    features: ["Ecommerce integrations", "Order context", "Macros and automation"],
    reviewHref: getHelpdeskReviewUrl("gorgias"),
    compareHref: getHelpdeskCompareUrl("gorgias-vs-zendesk"),
    logoSrc: HELPDESK_LOGOS.gorgias,
    visitUrl: "https://www.gorgias.com",
  },
];

/** Comparison table rows for the hub (helpdesk tools). */
export const HELPDESK_COMPARISON_ROWS: ComparisonTableRow[] = [
  {
    tool: "Zendesk",
    bestFor: "Best overall helpdesk software",
    price: "From ~$19/agent/mo",
    rating: "4.5",
    slug: "zendesk",
    logoSrc: HELPDESK_LOGOS.zendesk,
  },
  {
    tool: "Freshdesk",
    bestFor: "Best value for growing teams",
    price: "From ~$15/agent/mo",
    rating: "4.5",
    slug: "freshdesk",
    logoSrc: HELPDESK_LOGOS.freshdesk,
  },
  {
    tool: "Help Scout",
    bestFor: "Email-based support teams",
    price: "From ~$20/user/mo",
    rating: "4.6",
    slug: "help-scout",
    logoSrc: HELPDESK_LOGOS.helpScout,
  },
  {
    tool: "Intercom",
    bestFor: "Customer messaging and support",
    price: "From ~$39/mo",
    rating: "4.4",
    slug: "intercom",
    logoSrc: HELPDESK_LOGOS.intercom,
  },
  {
    tool: "Zoho Desk",
    bestFor: "Zoho ecosystem and SMB support",
    price: "From ~$14/agent/mo",
    rating: "4.4",
    slug: "zoho-desk",
    logoSrc: HELPDESK_LOGOS.zohoDesk,
  },
  {
    tool: "Gorgias",
    bestFor: "Ecommerce support teams",
    price: "From ~$60/mo",
    rating: "4.5",
    slug: "gorgias",
    logoSrc: HELPDESK_LOGOS.gorgias,
  },
  {
    tool: "LiveAgent",
    bestFor: "Omnichannel and live chat",
    price: "From ~$15/agent/mo",
    rating: "4.3",
    slug: "liveagent",
    logoSrc: HELPDESK_LOGOS.liveAgent,
  },
  {
    tool: "Kayako",
    bestFor: "Unified conversations and history",
    price: "From ~$15/agent/mo",
    rating: "4.2",
    slug: "kayako",
    logoSrc: HELPDESK_LOGOS.kayako,
  },
  {
    tool: "Front",
    bestFor: "Shared inbox and collaboration",
    price: "From ~$19/user/mo",
    rating: "4.5",
    slug: "front",
    logoSrc: HELPDESK_LOGOS.front,
  },
];

/** Best helpdesk software by use case (scenario) links. */
export const HELPDESK_SCENARIO_LINKS = [
  { label: "Best helpdesk software by use case", href: "/helpdesk/best-for" },
  { label: "Best helpdesk software (roundup)", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare helpdesk software", href: getHelpdeskCompareUrl() },
  { label: "Small business", href: getHelpdeskBestForUrl("small-business") },
  { label: "Startups", href: getHelpdeskBestForUrl("startups") },
  { label: "Ecommerce", href: getHelpdeskBestForUrl("ecommerce") },
  { label: "SaaS", href: getHelpdeskBestForUrl("saas") },
  { label: "Growing teams", href: getHelpdeskBestForUrl("growing-teams") },
] as const;

/** Helpdesk by business type. */
export const HELPDESK_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Small businesses", href: getHelpdeskBestForUrl("small-business") },
  { label: "Startups", href: getHelpdeskBestForUrl("startups") },
  { label: "Ecommerce businesses", href: getHelpdeskBestForUrl("ecommerce") },
  { label: "SaaS companies", href: getHelpdeskBestForUrl("saas") },
  { label: "Growing support teams", href: getHelpdeskBestForUrl("growing-teams") },
];

export const HELPDESK_BY_BUSINESS_TYPE_GROUPS: {
  groupLabel: string;
  links: { label: string; href: string }[];
}[] = [
  {
    groupLabel: "Primary business types",
    links: HELPDESK_BY_BUSINESS_TYPE.slice(0, 3),
  },
  {
    groupLabel: "Other business types",
    links: HELPDESK_BY_BUSINESS_TYPE.slice(3),
  },
];

/** Card data for Popular helpdesk comparisons. */
export type HelpdeskPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const HELPDESK_POPULAR_COMPARISONS: HelpdeskPopularComparisonCard[] = [
  {
    slug: "zendesk-vs-freshdesk",
    productA: { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk },
    productB: { name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk },
    summaryParagraph:
      "Zendesk offers a full-featured helpdesk with strong brand recognition and depth; Freshdesk delivers similar core capabilities at lower cost and is a strong fit for growing teams on a budget.",
    href: getHelpdeskCompareUrl("zendesk-vs-freshdesk"),
  },
  {
    slug: "help-scout-vs-zendesk",
    productA: { name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout },
    productB: { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk },
    summaryParagraph:
      "Help Scout focuses on email-first support and a simpler shared inbox; Zendesk scales to more channels and complex workflows. Choose Help Scout for simplicity, Zendesk for breadth.",
    href: getHelpdeskCompareUrl("help-scout-vs-zendesk"),
  },
  {
    slug: "intercom-vs-zendesk",
    productA: { name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom },
    productB: { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk },
    summaryParagraph:
      "Intercom is built around messaging and conversational support; Zendesk is a traditional helpdesk with ticketing at the core. Choose Intercom for messaging-first, Zendesk for ticket-centric workflows.",
    href: getHelpdeskCompareUrl("intercom-vs-zendesk"),
  },
  {
    slug: "freshdesk-vs-zoho-desk",
    productA: { name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk },
    productB: { name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk },
    summaryParagraph:
      "Freshdesk and Zoho Desk both offer affordable ticketing and multi-channel support. Freshdesk has a broad ecosystem; Zoho Desk fits teams already using Zoho apps.",
    href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk"),
  },
  {
    slug: "gorgias-vs-zendesk",
    productA: { name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias },
    productB: { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk },
    summaryParagraph:
      "Gorgias is built for ecommerce support with deep store integrations; Zendesk is a general-purpose helpdesk. Choose Gorgias when support revolves around orders and stores.",
    href: getHelpdeskCompareUrl("gorgias-vs-zendesk"),
  },
];

/** FAQ items for the hub. */
export const HELPDESK_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is helpdesk software?",
    a: "Helpdesk software is used to manage customer support requests (tickets), track conversations across email, chat, and other channels, and help teams respond consistently. It typically includes a shared inbox, ticketing, automation, and reporting so support teams can prioritize and resolve issues efficiently.",
  },
  {
    q: "What helpdesk software is best for small businesses?",
    a: "Freshdesk and Zoho Desk offer affordable plans that work well for small teams. Help Scout is a strong choice if you want a simple shared inbox and email-first support. Compare pricing per agent or user and choose based on your primary channels (email, chat, etc.).",
  },
  {
    q: "What is the difference between helpdesk software and live chat software?",
    a: "Helpdesk software manages the full support workflow: tickets, history, routing, and reporting across multiple channels (email, chat, social, etc.). Live chat software focuses on real-time chat only. Many helpdesk tools include live chat; some live chat tools can be used alone for simple use cases.",
  },
  {
    q: "Can helpdesk software integrate with CRM or ecommerce tools?",
    a: "Yes. Most helpdesk platforms integrate with CRMs (Salesforce, HubSpot, Zoho) so support agents see customer and deal context. Ecommerce-focused tools like Gorgias integrate deeply with Shopify and Magento for order and customer data. Check each vendor’s integration list for your stack.",
  },
];

/** Methodology for the hub. */
export const HELPDESK_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review helpdesk software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate helpdesk tools on ticketing and workflow, multi-channel support, automation, reporting, and fit for small businesses and growing teams.",
  bullets: [
    "We test core workflows: creating and managing tickets, routing and automation, and viewing customer history.",
    "We compare pricing (per agent or per seat), channel support, and integration options so you understand total cost.",
    "We look at ease of use, reporting depth, and scalability for teams that expect to grow.",
  ],
};
