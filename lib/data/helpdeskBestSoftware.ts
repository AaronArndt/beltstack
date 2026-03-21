/**
 * Helpdesk best-software roundup page data.
 * Used by app/helpdesk/best-helpdesk-software/page.tsx.
 */

import {
  getHelpdeskReviewUrl,
  getHelpdeskCompareUrl,
  getHelpdeskBestForUrl,
} from "@/lib/routes";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskLogos";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestHelpdeskPick = SoftwarePickCardContent;

export type HelpdeskComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const TOP_PICKS: BestHelpdeskPick[] = [
  {
    slug: "zendesk",
    name: "Zendesk",
    badge: "Best overall helpdesk software",
    description:
      "Full-featured helpdesk with ticketing, multi-channel support, automation, and reporting for teams of all sizes.",
    rating: "4.5",
    startingPrice: "From ~$19/agent/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.zendesk.com",
    logoSrc: HELPDESK_LOGOS.zendesk,
    compareSlugs: ["zendesk-vs-freshdesk", "help-scout-vs-zendesk", "intercom-vs-zendesk", "gorgias-vs-zendesk"],
    editorialParagraph:
      "Zendesk is our top pick for most teams. It offers strong ticketing, multi-channel support, automation, and reporting in one platform. Whether you handle email, chat, or social, Zendesk scales with your volume and complexity. If you want a proven, full-featured helpdesk with a large ecosystem, Zendesk is the default choice.",
    pros: [
      "Comprehensive ticketing and workflow tools",
      "Multi-channel support (email, chat, social, phone)",
      "Strong automation and routing",
      "Widely recognized and well supported",
    ],
    cons: [
      "Can be costly at scale",
      "Some advanced features require higher tiers",
      "Can feel heavy for very small teams",
    ],
    pricingSummary:
      "Zendesk typically starts around $19/agent/month. Higher tiers add more channels, automation, and analytics. Check current plans for your team size.",
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    badge: "Best value helpdesk for growing teams",
    description:
      "Affordable helpdesk with ticketing, automation, and solid multi-channel support for small to midsize support teams.",
    rating: "4.5",
    startingPrice: "From ~$15/agent/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.freshdesk.com",
    logoSrc: HELPDESK_LOGOS.freshdesk,
    compareSlugs: ["zendesk-vs-freshdesk", "freshdesk-vs-zoho-desk"],
    editorialParagraph:
      "Freshdesk delivers strong value. You get ticketing, automation, and multi-channel support at a lower price than many competitors. It fits growing teams that need more than a shared inbox but don’t want to pay enterprise rates. If budget matters and you still want solid features, Freshdesk is a top pick.",
    pros: [
      "Competitive pricing per agent",
      "Good ticketing and automation",
      "Multi-channel support included",
      "Free tier for very small teams",
    ],
    cons: [
      "Advanced reporting may require higher tiers",
      "Less brand recognition than Zendesk",
      "Some integrations are add-ons",
    ],
    pricingSummary:
      "Freshdesk offers a free tier and paid plans starting around $15/agent/month. Compare tiers for automation, channels, and reporting.",
  },
  {
    slug: "help-scout",
    name: "Help Scout",
    badge: "Best for email-first support teams",
    description:
      "Shared inbox and helpdesk built around email-first support with a simple, team-friendly workflow.",
    rating: "4.6",
    startingPrice: "From ~$20/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.helpscout.com",
    logoSrc: HELPDESK_LOGOS.helpScout,
    compareSlugs: ["help-scout-vs-zendesk"],
    editorialParagraph:
      "Help Scout is built for teams that live in email. The shared inbox is central; conversations, customer history, and workflows stay simple and focused. If you don’t need heavy live chat or many channels and prefer a clean, email-centric tool, Help Scout is an excellent fit. It’s easier to adopt than larger helpdesks.",
    pros: [
      "Email-first design; minimal learning curve",
      "Shared inbox and customer context",
      "Friendly for small teams",
      "Docs and knowledge base included",
    ],
    cons: [
      "Live chat is less central than ticketing",
      "Fewer channels than Zendesk or Freshdesk",
      "May outgrow if you add many channels",
    ],
    pricingSummary:
      "Help Scout pricing is per user, typically starting around $20/user/month. Plans include mailbox, docs, and reporting. Check current tiers for seat count.",
  },
  {
    slug: "intercom",
    name: "Intercom",
    badge: "Best for customer messaging and support",
    description:
      "Messaging-first platform that combines live chat, bots, and help center for customer conversations.",
    rating: "4.4",
    startingPrice: "From ~$39/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.intercom.com",
    logoSrc: HELPDESK_LOGOS.intercom,
    compareSlugs: ["intercom-vs-zendesk"],
    editorialParagraph:
      "Intercom is built around conversations. Live chat, messaging, bots, and help content live in one place so you can move from automated to human support smoothly. It suits teams that want a modern, messaging-first experience rather than a traditional ticket queue. If your support is conversational and you care about in-app and chat, Intercom is a strong choice.",
    pros: [
      "Messaging and chat at the center",
      "Bots and automation for common questions",
      "Unified inbox for multiple channels",
      "Strong for product-led and SaaS support",
    ],
    cons: [
      "Pricing can scale quickly with contacts",
      "Less ticket-centric than Zendesk",
      "May be more than needed for email-only teams",
    ],
    pricingSummary:
      "Intercom pricing often starts around $39/month and scales with seats and contacts. Compare plans for messaging, bots, and help center.",
  },
  {
    slug: "gorgias",
    name: "Gorgias",
    badge: "Best helpdesk for ecommerce teams",
    description:
      "Helpdesk built for ecommerce with deep Shopify and Magento integration and order context.",
    rating: "4.5",
    startingPrice: "From ~$60/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.gorgias.com",
    logoSrc: HELPDESK_LOGOS.gorgias,
    compareSlugs: ["gorgias-vs-zendesk"],
    editorialParagraph:
      "Gorgias is designed for ecommerce support. It connects deeply to Shopify, Magento, and other store platforms so agents see orders, returns, and customer history without leaving the inbox. Macros and automation help handle common requests quickly. If your support revolves around orders and store data, Gorgias is the best fit.",
    pros: [
      "Deep integration with Shopify and Magento",
      "Order and customer context in the ticket",
      "Macros and templates for ecommerce workflows",
      "Built for support volume from stores",
    ],
    cons: [
      "Focused on ecommerce; less generic than Zendesk",
      "Pricing is store- and volume-based",
      "Overkill if you don’t run an online store",
    ],
    pricingSummary:
      "Gorgias typically starts around $60/month and scales with order volume and features. Check current plans for your store platform.",
  },
  {
    slug: "zoho-desk",
    name: "Zoho Desk",
    badge: "Best value helpdesk for Zoho users",
    description:
      "Full-featured ticketing and multi-channel support at a competitive price. Especially strong if you already use Zoho CRM, Books, or other Zoho apps.",
    rating: "4.4",
    startingPrice: "From ~$14/agent/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.zoho.com/desk",
    logoSrc: HELPDESK_LOGOS.zohoDesk,
    compareSlugs: ["freshdesk-vs-zoho-desk", "zendesk-vs-freshdesk", "help-scout-vs-zendesk"],
    editorialParagraph:
      "Zoho Desk is the value pick for teams that want solid ticketing, automation, and multi-channel support without enterprise pricing. It integrates tightly with Zoho CRM and the broader Zoho suite, which makes it compelling if you already run Zoho apps. Compared with Zendesk, the ecosystem is smaller globally—but pricing and free-tier options often win for budget-conscious SMBs.",
    pros: [
      "Competitive per-agent pricing and a usable free tier",
      "Strong fit for teams already in the Zoho ecosystem",
      "Ticketing, automation, and knowledge base in one product",
      "Multi-channel support on paid tiers",
    ],
    cons: [
      "Less ubiquitous than Zendesk in some markets",
      "UI can feel busy compared to Help Scout",
      "Deepest enterprise features may lag top-tier competitors",
    ],
    pricingSummary:
      "Zoho Desk offers a free tier for small teams; paid plans scale by agents and features. Compare current tiers with Freshdesk and Zendesk for your channel and automation needs.",
  },
];

export const COMPARISON_TABLE_ROWS: HelpdeskComparisonTableRow[] = [
  {
    slug: "zendesk",
    name: "Zendesk",
    logoSrc: HELPDESK_LOGOS.zendesk,
    bestFor: "Best overall helpdesk software",
    startingPrice: "From ~$19/agent/mo",
    rating: "4.5",
    reviewHref: getHelpdeskReviewUrl("zendesk"),
  },
  {
    slug: "freshdesk",
    name: "Freshdesk",
    logoSrc: HELPDESK_LOGOS.freshdesk,
    bestFor: "Best value for growing teams",
    startingPrice: "From ~$15/agent/mo",
    rating: "4.5",
    reviewHref: getHelpdeskReviewUrl("freshdesk"),
  },
  {
    slug: "help-scout",
    name: "Help Scout",
    logoSrc: HELPDESK_LOGOS.helpScout,
    bestFor: "Email-first support teams",
    startingPrice: "From ~$20/user/mo",
    rating: "4.6",
    reviewHref: getHelpdeskReviewUrl("help-scout"),
  },
  {
    slug: "intercom",
    name: "Intercom",
    logoSrc: HELPDESK_LOGOS.intercom,
    bestFor: "Customer messaging and support",
    startingPrice: "From ~$39/mo",
    rating: "4.4",
    reviewHref: getHelpdeskReviewUrl("intercom"),
  },
  {
    slug: "zoho-desk",
    name: "Zoho Desk",
    logoSrc: HELPDESK_LOGOS.zohoDesk,
    bestFor: "Zoho ecosystem and SMB support",
    startingPrice: "From ~$14/agent/mo",
    rating: "4.4",
    reviewHref: getHelpdeskReviewUrl("zoho-desk"),
  },
  {
    slug: "gorgias",
    name: "Gorgias",
    logoSrc: HELPDESK_LOGOS.gorgias,
    bestFor: "Ecommerce support teams",
    startingPrice: "From ~$60/mo",
    rating: "4.5",
    reviewHref: getHelpdeskReviewUrl("gorgias"),
  },
  {
    slug: "liveagent",
    name: "LiveAgent",
    logoSrc: HELPDESK_LOGOS.liveAgent,
    bestFor: "Omnichannel and live chat",
    startingPrice: "From ~$15/agent/mo",
    rating: "4.3",
    reviewHref: getHelpdeskReviewUrl("liveagent"),
  },
  {
    slug: "kayako",
    name: "Kayako",
    logoSrc: HELPDESK_LOGOS.kayako,
    bestFor: "Unified conversations and history",
    startingPrice: "From ~$15/agent/mo",
    rating: "4.2",
    reviewHref: getHelpdeskReviewUrl("kayako"),
  },
  {
    slug: "front",
    name: "Front",
    logoSrc: HELPDESK_LOGOS.front,
    bestFor: "Shared inbox and collaboration",
    startingPrice: "From ~$19/user/mo",
    rating: "4.5",
    reviewHref: getHelpdeskReviewUrl("front"),
  },
];

export const MORE_HELPDESK_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "liveagent",
    name: "LiveAgent",
    description:
      "Omnichannel helpdesk with strong live chat, ticketing, and contact center features. Fits teams that prioritize real-time chat.",
    reviewHref: getHelpdeskReviewUrl("liveagent"),
    logoSrc: HELPDESK_LOGOS.liveAgent,
  },
  {
    slug: "kayako",
    name: "Kayako",
    description:
      "Unified support platform with conversation history, multi-channel inbox, and self-service. Good for teams that want one view of the customer.",
    reviewHref: getHelpdeskReviewUrl("kayako"),
    logoSrc: HELPDESK_LOGOS.kayako,
  },
  {
    slug: "front",
    name: "Front",
    description:
      "Shared inbox and collaboration tool that centralizes email, chat, and social. Strong for internal collaboration around customer messages.",
    reviewHref: getHelpdeskReviewUrl("front"),
    logoSrc: HELPDESK_LOGOS.front,
  },
];

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best helpdesk software by use case",
    href: "/helpdesk/best-for",
    description: "Browse all use cases and see our top picks for small business, startups, ecommerce, SaaS, and growing teams.",
  },
  {
    label: "Best for small business",
    href: getHelpdeskBestForUrl("small-business"),
    description: "Helpdesk tools that stay simple and affordable as you grow.",
  },
  {
    label: "Best for startups",
    href: getHelpdeskBestForUrl("startups"),
    description: "Affordable helpdesk with room to scale as you add support volume.",
  },
  {
    label: "Best for ecommerce",
    href: getHelpdeskBestForUrl("ecommerce"),
    description: "Helpdesk built for stores with order context and ecommerce integrations.",
  },
  {
    label: "Best for SaaS",
    href: getHelpdeskBestForUrl("saas"),
    description: "Helpdesk and messaging for product-led and SaaS support teams.",
  },
  {
    label: "Best for growing teams",
    href: getHelpdeskBestForUrl("growing-teams"),
    description: "Helpdesk that scales with your team and channel mix.",
  },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
  { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
  { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
  { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is helpdesk software?",
    a: "Helpdesk software is used to manage customer support requests (tickets), track conversations across email, chat, and other channels, and help teams respond consistently. It typically includes a shared inbox, ticketing, automation, and reporting so support teams can prioritize and resolve issues efficiently.",
  },
  {
    q: "What helpdesk software is best for small businesses?",
    a: "Freshdesk and Zoho Desk offer affordable plans that work well for small teams. Help Scout is a strong choice if you want a simple shared inbox and email-first support. Compare pricing per agent or user and choose based on your primary channels (email, chat, etc.).",
  },
  {
    q: "What is the difference between helpdesk software and live chat tools?",
    a: "Helpdesk software manages the full support workflow: tickets, history, routing, and reporting across multiple channels (email, chat, social, etc.). Live chat tools focus on real-time chat only. Many helpdesk platforms include live chat; some live chat tools can be used alone for simple use cases.",
  },
  {
    q: "Can helpdesk software integrate with CRM systems?",
    a: "Yes. Most helpdesk platforms integrate with CRMs like Salesforce, HubSpot, and Zoho so support agents see customer and deal context. Ecommerce-focused tools like Gorgias integrate deeply with Shopify and Magento for order and customer data. Check each vendor’s integration list for your stack.",
  },
];
