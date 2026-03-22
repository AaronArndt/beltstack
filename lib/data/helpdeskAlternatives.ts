/**
 * Helpdesk alternatives page data.
 * Used by app/helpdesk/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live helpdesk review pages.
 */

import {
  getHelpdeskReviewUrl,
  getHelpdeskCompareUrl,
  getHelpdeskBestForUrl,
} from "@/lib/routes";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getHelpdeskComparison } from "@/lib/data/helpdeskComparisons";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskHubData";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/helpdesk", label: "Helpdesk" };
const ROUNDUP_HREF = "/helpdesk/best-helpdesk-software";
const COMPARE_HUB = "/helpdesk/compare";
const GUIDES_HUB = "/helpdesk/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Ticket vs messaging", body: "Zendesk and Freshdesk are ticket-centric; Intercom is messaging-first. Help Scout and Front are shared-inbox style. Choose by whether you think in tickets or conversations." },
  { heading: "Channels and scale", body: "Email-only teams can use Help Scout or Front. Multi-channel (chat, social, phone) needs Zendesk, Freshdesk, or LiveAgent. Compare per-agent or per-seat pricing at your size." },
  { heading: "Ecommerce vs general", body: "Gorgias is built for Shopify and Magento with order context. For non-ecommerce or mixed support, Zendesk, Freshdesk, or Zoho Desk are better fits." },
  { heading: "Ecosystem and integrations", body: "Zendesk has the largest marketplace; Zoho Desk fits the Zoho suite. Compare CRMs, ecommerce, and collaboration integrations for your stack." },
  { heading: "Budget and value", body: "Freshdesk and Zoho Desk offer free tiers and lower per-agent cost. Zendesk and Intercom cost more but add ecosystem or messaging depth. Match the tool to your budget." },
];

function buildTableRows(
  originalRow: AlternativesTableRow,
  alternatives: AlternativesTopPick[]
): AlternativesTableRow[] {
  const altRows: AlternativesTableRow[] = alternatives.map((a) => ({
    slug: a.slug,
    name: a.name,
    logoSrc: a.logoSrc,
    bestFor: a.bestFor,
    startingPrice: a.startingPrice ?? "—",
    standoutFeature: a.standoutFeature ?? a.bestFor,
    reviewHref: a.reviewHref,
  }));
  return [originalRow, ...altRows];
}

function helpRel(slug: string) {
  return toAlternativesRelatedComparison(getHelpdeskCompareUrl(slug), getHelpdeskComparison(slug));
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Helpdesk hub", href: CATEGORY.href },
    { label: "Best helpdesk software", href: ROUNDUP_HREF },
    { label: "Compare helpdesk software", href: COMPARE_HUB },
    { label: "Helpdesk guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getHelpdeskBestForUrl("small-business") },
    { label: "Best for ecommerce", href: getHelpdeskBestForUrl("ecommerce") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Zendesk alternatives ———
const ZENDESK_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Similar features at lower cost; free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), compareHref: getHelpdeskCompareUrl("zendesk-vs-freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value; free tier" },
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simple shared inbox; fewer channels.", reviewHref: getHelpdeskReviewUrl("help-scout"), compareHref: getHelpdeskCompareUrl("help-scout-vs-zendesk"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first; simple" },
  { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "messaging", description: "Messaging-first; chat and bots.", reviewHref: getHelpdeskReviewUrl("intercom"), compareHref: getHelpdeskCompareUrl("intercom-vs-zendesk"), startingPrice: "From ~$39/mo", standoutFeature: "Messaging; bots" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value & Zoho", description: "Low cost; Zoho suite integration.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value; Zoho" },
  { slug: "gorgias", name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias, rating: "4.5", bestFor: "ecommerce", description: "Deep Shopify/Magento; order context.", reviewHref: getHelpdeskReviewUrl("gorgias"), compareHref: getHelpdeskCompareUrl("gorgias-vs-zendesk"), startingPrice: "From ~$60/mo", standoutFeature: "Ecommerce" },
];

const zendeskOriginalRow: AlternativesTableRow = {
  slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, bestFor: "overall", startingPrice: "From ~$19/agent/mo", standoutFeature: "Full-featured; ecosystem", reviewHref: getHelpdeskReviewUrl("zendesk"),
};

const zendeskPage: AlternativesTemplateProps = {
  title: "Best Zendesk Alternatives (2026)",
  subtitle: "If Zendesk isn't the right fit—because of cost, simplicity, or focus—these helpdesk alternatives offer strong options for support teams.",
  productName: "Zendesk",
  productSlug: "zendesk",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getHelpdeskReviewUrl("zendesk"),
  quickAnswerParagraphs: [
    "Zendesk is a top helpdesk for many teams; alternatives include Freshdesk for value and free tier, Help Scout for email-first simplicity, Intercom for messaging-first support, Zoho Desk for lower cost and Zoho suite, and Gorgias for ecommerce. Freshdesk and Help Scout are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Freshdesk and Zoho Desk offer similar core features at lower per-agent cost and often a free tier." },
    { heading: "Simplicity", body: "Help Scout and Front are simpler for email-focused teams that don't need many channels." },
    { heading: "Ecommerce", body: "Gorgias is built for Shopify and Magento with order context in the ticket." },
  ],
  topAlternatives: ZENDESK_ALTERNATIVES,
  comparisonTableRows: buildTableRows(zendeskOriginalRow, ZENDESK_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk delivers similar ticketing, multi-channel, and automation at lower cost and with a free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), compareHref: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is a simple shared inbox built for email support. Fewer channels, easier adoption.", reviewHref: getHelpdeskReviewUrl("help-scout"), compareHref: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
    { productName: "Intercom", heading: "Best for messaging", body: "Intercom is messaging-first with chat, bots, and in-app support. Different paradigm than ticket-centric Zendesk.", reviewHref: getHelpdeskReviewUrl("intercom"), compareHref: getHelpdeskCompareUrl("intercom-vs-zendesk") },
    { productName: "Zoho Desk", heading: "Best for value and Zoho", body: "Zoho Desk offers full helpdesk at low cost and fits the Zoho ecosystem.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
    { productName: "Gorgias", heading: "Best for ecommerce", body: "Gorgias is built for Shopify and Magento with order context and store actions in the ticket.", reviewHref: getHelpdeskReviewUrl("gorgias"), compareHref: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    helpRel("zendesk-vs-freshdesk"),
    helpRel("help-scout-vs-zendesk"),
    helpRel("intercom-vs-zendesk"),
    helpRel("gorgias-vs-zendesk"),
  ],
  relatedResources: defaultRelatedResources("Zendesk", getHelpdeskReviewUrl("zendesk")),
  faqItems: [
    { q: "What is the best Zendesk alternative?", a: "Freshdesk for value and free tier; Help Scout for email-first simplicity; Intercom for messaging; Zoho Desk for low cost; Gorgias for ecommerce. Choose by budget and focus." },
    { q: "Is Freshdesk as good as Zendesk?", a: "For core helpdesk features, Freshdesk is comparable and often cheaper. Zendesk leads on ecosystem size. Choose Freshdesk for value, Zendesk for maximum breadth." },
    { q: "Which helpdesk is cheaper than Zendesk?", a: "Freshdesk and Zoho Desk typically cost less per agent and offer free tiers. Help Scout and Front are options for simpler, email-focused teams." },
  ],
};

// ——— Freshdesk alternatives ———
const FRESHDESK_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "ecosystem", description: "Largest marketplace and brand.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("zendesk-vs-freshdesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Ecosystem" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value & Zoho", description: "Lowest cost; Zoho suite.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), compareHref: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value; Zoho" },
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simple shared inbox.", reviewHref: getHelpdeskReviewUrl("help-scout"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first" },
  { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "messaging", description: "Messaging-first; bots.", reviewHref: getHelpdeskReviewUrl("intercom"), startingPrice: "From ~$39/mo", standoutFeature: "Messaging" },
  { slug: "liveagent", name: "LiveAgent", logoSrc: HELPDESK_LOGOS.liveAgent, rating: "4.3", bestFor: "live chat", description: "Strong chat and omnichannel.", reviewHref: getHelpdeskReviewUrl("liveagent"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Live chat" },
];

const freshdeskPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Freshdesk Alternatives (2026)",
  subtitle: "If Freshdesk isn't the right fit—because of ecosystem, Zoho, or focus—these helpdesk alternatives offer strong options.",
  productName: "Freshdesk",
  productSlug: "freshdesk",
  originalReviewHref: getHelpdeskReviewUrl("freshdesk"),
  quickAnswerParagraphs: [
    "Freshdesk is a strong value pick; alternatives include Zendesk for ecosystem and brand, Zoho Desk for Zoho suite and lowest cost, Help Scout for email-first simplicity, Intercom for messaging, and LiveAgent for live chat focus. Zendesk and Zoho Desk are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Larger ecosystem", body: "Zendesk has the largest app marketplace. Better if integrations and breadth matter most." },
    { heading: "Zoho suite", body: "Zoho Desk fits Zoho CRM and other Zoho apps and often undercuts on price." },
    { heading: "Simpler or different focus", body: "Help Scout for email-only; Intercom for messaging-first; Gorgias for ecommerce." },
  ],
  topAlternatives: FRESHDESK_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, bestFor: "value", startingPrice: "From ~$15/agent/mo", standoutFeature: "Value; free tier", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    FRESHDESK_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zendesk", heading: "Best for ecosystem", body: "Zendesk offers the largest marketplace and brand. For teams that prioritize breadth.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
    { productName: "Zoho Desk", heading: "Best for value and Zoho", body: "Zoho Desk fits the Zoho suite and often has the lowest per-agent cost.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), compareHref: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is a simple shared inbox for email-focused teams.", reviewHref: getHelpdeskReviewUrl("help-scout") },
    { productName: "Intercom", heading: "Best for messaging", body: "Intercom is messaging-first with chat, bots, and in-app support.", reviewHref: getHelpdeskReviewUrl("intercom") },
    { productName: "LiveAgent", heading: "Best for live chat", body: "LiveAgent emphasizes live chat and omnichannel at competitive pricing.", reviewHref: getHelpdeskReviewUrl("liveagent") },
  ],
  relatedComparisons: [
    helpRel("zendesk-vs-freshdesk"),
    helpRel("freshdesk-vs-zoho-desk"),
  ],
  relatedResources: defaultRelatedResources("Freshdesk", getHelpdeskReviewUrl("freshdesk")),
  faqItems: [
    { q: "What is the best Freshdesk alternative?", a: "Zendesk for ecosystem; Zoho Desk for Zoho and lowest cost; Help Scout for email-first; Intercom for messaging. Choose by ecosystem and focus." },
    { q: "Is Zoho Desk cheaper than Freshdesk?", a: "Often yes—Zoho Desk typically starts around $14/agent/month. Both have free tiers. Compare current plans for your team size." },
    { q: "Which helpdesk has a free tier?", a: "Freshdesk and Zoho Desk both offer free tiers for a limited number of agents. Zendesk does not have a free tier." },
  ],
};

// ——— Help Scout alternatives ———
const HELP_SCOUT_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "multi-channel", description: "Full helpdesk with chat, social, phone.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("help-scout-vs-zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Multi-channel" },
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Full helpdesk at lower cost; free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value" },
  { slug: "front", name: "Front", logoSrc: HELPDESK_LOGOS.front, rating: "4.5", bestFor: "shared inbox", description: "Shared inbox with strong collaboration.", reviewHref: getHelpdeskReviewUrl("front"), startingPrice: "From ~$19/user/mo", standoutFeature: "Collaboration" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value", description: "Low cost; Zoho suite.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value" },
  { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "messaging", description: "Messaging-first; chat and bots.", reviewHref: getHelpdeskReviewUrl("intercom"), startingPrice: "From ~$39/mo", standoutFeature: "Messaging" },
];

const helpScoutPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Help Scout Alternatives (2026)",
  subtitle: "If Help Scout isn't the right fit—because you need more channels, different pricing, or ticketing—these helpdesk alternatives offer strong options.",
  productName: "Help Scout",
  productSlug: "help-scout",
  originalReviewHref: getHelpdeskReviewUrl("help-scout"),
  quickAnswerParagraphs: [
    "Help Scout is strong for email-first support; alternatives include Zendesk for full multi-channel, Freshdesk for value and free tier, Front for shared inbox with collaboration, Zoho Desk for low cost, and Intercom for messaging. Zendesk and Freshdesk are common alternatives when you need more channels.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "More channels", body: "Zendesk and Freshdesk add chat, social, and phone as first-class channels. Help Scout is email-first." },
    { heading: "Lower cost or free tier", body: "Freshdesk and Zoho Desk offer free tiers and lower per-agent cost." },
    { heading: "Ticketing", body: "Teams that think in tickets may prefer Zendesk, Freshdesk, or Zoho Desk." },
  ],
  topAlternatives: HELP_SCOUT_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, bestFor: "email-first", startingPrice: "From ~$20/user/mo", standoutFeature: "Email; simple", reviewHref: getHelpdeskReviewUrl("help-scout") },
    HELP_SCOUT_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zendesk", heading: "Best for multi-channel", body: "Zendesk offers full ticketing, chat, social, and phone. For teams that need more than email.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk delivers full helpdesk at lower cost with a free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    { productName: "Front", heading: "Best for shared inbox", body: "Front is a shared inbox with strong internal collaboration and workflows.", reviewHref: getHelpdeskReviewUrl("front") },
    { productName: "Zoho Desk", heading: "Best for value", body: "Zoho Desk offers low per-agent cost and Zoho suite integration.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
    { productName: "Intercom", heading: "Best for messaging", body: "Intercom is messaging-first with chat and in-app support.", reviewHref: getHelpdeskReviewUrl("intercom") },
  ],
  relatedComparisons: [
    helpRel("help-scout-vs-zendesk"),
    helpRel("zendesk-vs-freshdesk"),
  ],
  relatedResources: defaultRelatedResources("Help Scout", getHelpdeskReviewUrl("help-scout")),
  faqItems: [
    { q: "What is the best Help Scout alternative?", a: "Zendesk for multi-channel; Freshdesk for value; Front for shared inbox and collaboration; Zoho Desk for low cost. Choose by need for channels vs simplicity." },
    { q: "Does Help Scout have live chat?", a: "Yes, but email is the primary focus. Zendesk and Intercom offer chat as a first-class channel." },
    { q: "Which is simpler than Help Scout?", a: "Help Scout is already one of the simplest. Front is another shared-inbox option. For more features, consider Freshdesk or Zendesk." },
  ],
};

// ——— Intercom alternatives ———
const INTERCOM_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "ticketing", description: "Ticket-centric; multi-channel.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("intercom-vs-zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Ticketing" },
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Traditional helpdesk at lower cost.", reviewHref: getHelpdeskReviewUrl("freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value" },
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simpler; email-focused.", reviewHref: getHelpdeskReviewUrl("help-scout"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first" },
  { slug: "gorgias", name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias, rating: "4.5", bestFor: "ecommerce", description: "Deep store integration.", reviewHref: getHelpdeskReviewUrl("gorgias"), startingPrice: "From ~$60/mo", standoutFeature: "Ecommerce" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value", description: "Low cost; Zoho suite.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value" },
];

const intercomPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Intercom Alternatives (2026)",
  subtitle: "If Intercom isn't the right fit—because of cost, ticket-centric workflows, or focus—these helpdesk and messaging alternatives offer strong options.",
  productName: "Intercom",
  productSlug: "intercom",
  originalReviewHref: getHelpdeskReviewUrl("intercom"),
  quickAnswerParagraphs: [
    "Intercom is the leader for messaging-first support; alternatives include Zendesk for ticket-centric helpdesk, Freshdesk for value and traditional ticketing, Help Scout for email-first simplicity, Gorgias for ecommerce, and Zoho Desk for low cost. Zendesk and Freshdesk are common alternatives for ticket-based teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Intercom pricing can scale with contacts. Zendesk and Freshdesk offer per-agent pricing that may be lower at volume." },
    { heading: "Ticket-centric", body: "Zendesk and Freshdesk are built around tickets and a traditional queue. Better if you prefer that model." },
    { heading: "Email-only or simpler", body: "Help Scout and Front are simpler for teams that don't need messaging and bots." },
  ],
  topAlternatives: INTERCOM_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, bestFor: "messaging", startingPrice: "From ~$39/mo", standoutFeature: "Messaging; bots", reviewHref: getHelpdeskReviewUrl("intercom") },
    INTERCOM_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zendesk", heading: "Best for ticketing", body: "Zendesk is ticket-centric with multi-channel queue and the largest ecosystem.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("intercom-vs-zendesk") },
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk offers traditional helpdesk at lower cost with a free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is simpler and email-focused. For teams that don't need messaging-first.", reviewHref: getHelpdeskReviewUrl("help-scout") },
    { productName: "Gorgias", heading: "Best for ecommerce", body: "Gorgias is built for Shopify and Magento with order context.", reviewHref: getHelpdeskReviewUrl("gorgias") },
    { productName: "Zoho Desk", heading: "Best for value", body: "Zoho Desk offers low cost and Zoho suite integration.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
  ],
  relatedComparisons: [
    helpRel("intercom-vs-zendesk"),
    helpRel("zendesk-vs-freshdesk"),
  ],
  relatedResources: defaultRelatedResources("Intercom", getHelpdeskReviewUrl("intercom")),
  faqItems: [
    { q: "What is the best Intercom alternative?", a: "Zendesk for ticket-centric; Freshdesk for value; Help Scout for email-first; Gorgias for ecommerce. Choose by ticket vs messaging and budget." },
    { q: "Is Intercom more expensive than Zendesk?", a: "Often yes at high volume—Intercom can scale with contacts. Zendesk's per-agent pricing is more predictable. Compare for your expected volume." },
    { q: "Which helpdesk is messaging-first?", a: "Intercom is the main messaging-first option. Zendesk and others include chat but are ticket-centric." },
  ],
};

// ——— Zoho Desk alternatives ———
const ZOHO_DESK_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "ecosystem", description: "Broader app ecosystem; free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), compareHref: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Ecosystem" },
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "ecosystem", description: "Largest marketplace.", reviewHref: getHelpdeskReviewUrl("zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Ecosystem" },
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simple shared inbox.", reviewHref: getHelpdeskReviewUrl("help-scout"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first" },
  { slug: "liveagent", name: "LiveAgent", logoSrc: HELPDESK_LOGOS.liveAgent, rating: "4.3", bestFor: "live chat", description: "Strong chat and omnichannel.", reviewHref: getHelpdeskReviewUrl("liveagent"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Live chat" },
  { slug: "gorgias", name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias, rating: "4.5", bestFor: "ecommerce", description: "Shopify/Magento native.", reviewHref: getHelpdeskReviewUrl("gorgias"), startingPrice: "From ~$60/mo", standoutFeature: "Ecommerce" },
];

const zohoDeskPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Zoho Desk Alternatives (2026)",
  subtitle: "If Zoho Desk isn't the right fit—because you're not on Zoho, need more integrations, or different focus—these helpdesk alternatives offer strong options.",
  productName: "Zoho Desk",
  productSlug: "zoho-desk",
  originalReviewHref: getHelpdeskReviewUrl("zoho-desk"),
  quickAnswerParagraphs: [
    "Zoho Desk is a strong value pick for Zoho users; alternatives include Freshdesk for broader ecosystem, Zendesk for largest marketplace, Help Scout for email-first simplicity, LiveAgent for live chat focus, and Gorgias for ecommerce. Freshdesk and Zendesk are common alternatives when you're not in the Zoho suite.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not on Zoho", body: "Freshdesk and Zendesk are standalone with broader third-party ecosystems." },
    { heading: "More integrations", body: "Zendesk and Freshdesk have larger app marketplaces." },
    { heading: "Different focus", body: "Help Scout for email-only; Gorgias for ecommerce; Intercom for messaging." },
  ],
  topAlternatives: ZOHO_DESK_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, bestFor: "value & Zoho", startingPrice: "From ~$14/agent/mo", standoutFeature: "Value; Zoho", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
    ZOHO_DESK_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Freshdesk", heading: "Best for ecosystem", body: "Freshdesk has a broader app ecosystem and free tier. Compare with Zoho Desk for fit.", reviewHref: getHelpdeskReviewUrl("freshdesk"), compareHref: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
    { productName: "Zendesk", heading: "Best for ecosystem", body: "Zendesk has the largest helpdesk marketplace and brand.", reviewHref: getHelpdeskReviewUrl("zendesk") },
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is a simple shared inbox for email-focused teams.", reviewHref: getHelpdeskReviewUrl("help-scout") },
    { productName: "LiveAgent", heading: "Best for live chat", body: "LiveAgent emphasizes live chat and omnichannel.", reviewHref: getHelpdeskReviewUrl("liveagent") },
    { productName: "Gorgias", heading: "Best for ecommerce", body: "Gorgias is built for Shopify and Magento.", reviewHref: getHelpdeskReviewUrl("gorgias") },
  ],
  relatedComparisons: [
    helpRel("freshdesk-vs-zoho-desk"),
    helpRel("zendesk-vs-freshdesk"),
  ],
  relatedResources: defaultRelatedResources("Zoho Desk", getHelpdeskReviewUrl("zoho-desk")),
  faqItems: [
    { q: "What is the best Zoho Desk alternative?", a: "Freshdesk for ecosystem; Zendesk for maximum breadth; Help Scout for email-first; LiveAgent for chat. Choose by ecosystem and focus." },
    { q: "Is Freshdesk better than Zoho Desk?", a: "Freshdesk has a broader third-party ecosystem; Zoho Desk often has lower cost and fits Zoho users. Compare by your stack and budget." },
    { q: "Does Zoho Desk integrate with Zoho CRM?", a: "Yes. Zoho Desk integrates natively with Zoho CRM. For non-Zoho stacks, Freshdesk or Zendesk may offer more integrations." },
  ],
};

// ——— Gorgias alternatives ———
const GORGIAS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "general", description: "General helpdesk; Shopify app.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("gorgias-vs-zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "General" },
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Generic helpdesk at lower cost.", reviewHref: getHelpdeskReviewUrl("freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value" },
  { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "messaging", description: "Messaging-first; in-app.", reviewHref: getHelpdeskReviewUrl("intercom"), startingPrice: "From ~$39/mo", standoutFeature: "Messaging" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value", description: "Low cost; ecommerce integrations.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value" },
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simpler; shared inbox.", reviewHref: getHelpdeskReviewUrl("help-scout"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first" },
];

const gorgiasPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Gorgias Alternatives (2026)",
  subtitle: "If Gorgias isn't the right fit—because you're not ecommerce, need lower cost, or want general helpdesk—these alternatives offer strong options.",
  productName: "Gorgias",
  productSlug: "gorgias",
  originalReviewHref: getHelpdeskReviewUrl("gorgias"),
  quickAnswerParagraphs: [
    "Gorgias is built for ecommerce; alternatives include Zendesk for general helpdesk with Shopify app, Freshdesk for value and generic ticketing, Intercom for messaging, Zoho Desk for low cost, and Help Scout for email-first. Zendesk and Freshdesk are common alternatives for non-ecommerce or mixed support.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Not ecommerce", body: "Zendesk and Freshdesk are general-purpose helpdesks. Better if you don't need order-level context." },
    { heading: "Cost", body: "Gorgias can be expensive at volume. Freshdesk and Zoho Desk cost less per agent." },
    { heading: "Messaging vs store", body: "Intercom is messaging-first; Gorgias is store-first. Choose by primary use case." },
  ],
  topAlternatives: GORGIAS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "gorgias", name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias, bestFor: "ecommerce", startingPrice: "From ~$60/mo", standoutFeature: "Ecommerce", reviewHref: getHelpdeskReviewUrl("gorgias") },
    GORGIAS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zendesk", heading: "Best for general helpdesk", body: "Zendesk is a general helpdesk that can connect to Shopify via app. Less ecommerce-native than Gorgias.", reviewHref: getHelpdeskReviewUrl("zendesk"), compareHref: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk offers generic helpdesk at lower cost; add ecommerce via integrations.", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    { productName: "Intercom", heading: "Best for messaging", body: "Intercom is messaging-first; good for in-app support, less order-centric.", reviewHref: getHelpdeskReviewUrl("intercom") },
    { productName: "Zoho Desk", heading: "Best for value", body: "Zoho Desk offers low cost and ecommerce integrations.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is simpler and email-focused. For teams that don't need store integration.", reviewHref: getHelpdeskReviewUrl("help-scout") },
  ],
  relatedComparisons: [
    helpRel("gorgias-vs-zendesk"),
    helpRel("zendesk-vs-freshdesk"),
  ],
  relatedResources: defaultRelatedResources("Gorgias", getHelpdeskReviewUrl("gorgias")),
  faqItems: [
    { q: "What is the best Gorgias alternative?", a: "Zendesk for general helpdesk; Freshdesk for value; Intercom for messaging; Zoho Desk for low cost. Choose by ecommerce vs general support." },
    { q: "Is Gorgias only for ecommerce?", a: "Gorgias is built for ecommerce (Shopify, Magento). For non-ecommerce, Zendesk or Freshdesk are better fits." },
    { q: "Can Zendesk replace Gorgias for Shopify?", a: "Zendesk can connect to Shopify via app but doesn't offer the same native order context and macros. For store-centric support, Gorgias is stronger." },
  ],
};

// ——— LiveAgent alternatives ———
const LIVEAGENT_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "full helpdesk", description: "Full ticketing and multi-channel.", reviewHref: getHelpdeskReviewUrl("zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Full helpdesk" },
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Solid helpdesk at lower cost; free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value" },
  { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "messaging", description: "Messaging-first; chat and bots.", reviewHref: getHelpdeskReviewUrl("intercom"), startingPrice: "From ~$39/mo", standoutFeature: "Messaging" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value", description: "Low cost; Zoho suite.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value" },
  { slug: "gorgias", name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias, rating: "4.5", bestFor: "ecommerce", description: "Ecommerce-focused; store integration.", reviewHref: getHelpdeskReviewUrl("gorgias"), startingPrice: "From ~$60/mo", standoutFeature: "Ecommerce" },
];

const liveagentPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best LiveAgent Alternatives (2026)",
  subtitle: "If LiveAgent isn't the right fit—because of ecosystem, focus, or pricing—these helpdesk alternatives offer strong options for support teams.",
  productName: "LiveAgent",
  productSlug: "liveagent",
  originalReviewHref: getHelpdeskReviewUrl("liveagent"),
  quickAnswerParagraphs: [
    "LiveAgent is strong for live chat and omnichannel; alternatives include Zendesk for full helpdesk ecosystem, Freshdesk for value and free tier, Intercom for messaging-first, Zoho Desk for low cost, and Gorgias for ecommerce. Zendesk and Freshdesk are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Larger ecosystem", body: "Zendesk and Freshdesk have larger app marketplaces and broader recognition." },
    { heading: "Messaging-first", body: "Intercom is built around conversations and bots. Different paradigm." },
    { heading: "Value or ecommerce", body: "Freshdesk and Zoho Desk for lower cost; Gorgias for ecommerce depth." },
  ],
  topAlternatives: LIVEAGENT_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "liveagent", name: "LiveAgent", logoSrc: HELPDESK_LOGOS.liveAgent, bestFor: "live chat", startingPrice: "From ~$15/agent/mo", standoutFeature: "Live chat", reviewHref: getHelpdeskReviewUrl("liveagent") },
    LIVEAGENT_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zendesk", heading: "Best for full helpdesk", body: "Zendesk offers full ticketing, multi-channel, and the largest ecosystem.", reviewHref: getHelpdeskReviewUrl("zendesk") },
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk delivers solid helpdesk at lower cost with a free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    { productName: "Intercom", heading: "Best for messaging", body: "Intercom is messaging-first with chat, bots, and in-app support.", reviewHref: getHelpdeskReviewUrl("intercom") },
    { productName: "Zoho Desk", heading: "Best for value", body: "Zoho Desk offers low per-agent cost and Zoho suite integration.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
    { productName: "Gorgias", heading: "Best for ecommerce", body: "Gorgias is built for Shopify and Magento with order context.", reviewHref: getHelpdeskReviewUrl("gorgias") },
  ],
  relatedComparisons: [
    helpRel("zendesk-vs-freshdesk"),
    helpRel("intercom-vs-zendesk"),
  ],
  relatedResources: defaultRelatedResources("LiveAgent", getHelpdeskReviewUrl("liveagent")),
  faqItems: [
    { q: "What is the best LiveAgent alternative?", a: "Zendesk for full helpdesk; Freshdesk for value; Intercom for messaging; Zoho Desk for low cost. Choose by ecosystem and focus." },
    { q: "Is LiveAgent good for small business?", a: "LiveAgent offers competitive pricing and solid chat. Freshdesk and Zoho Desk also suit small teams with free or low-cost tiers." },
    { q: "Which helpdesk is best for live chat?", a: "LiveAgent, Intercom, and Zendesk all offer strong live chat. Intercom is messaging-first; Zendesk is helpdesk-first; LiveAgent is chat-focused at competitive price." },
  ],
};

// ——— Kayako alternatives ———
const KAYAKO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "ecosystem", description: "Largest marketplace and breadth.", reviewHref: getHelpdeskReviewUrl("zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Ecosystem" },
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Full helpdesk at lower cost; free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value", description: "Low cost; Zoho suite.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value" },
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simple shared inbox.", reviewHref: getHelpdeskReviewUrl("help-scout"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first" },
  { slug: "liveagent", name: "LiveAgent", logoSrc: HELPDESK_LOGOS.liveAgent, rating: "4.3", bestFor: "live chat", description: "Strong chat and omnichannel.", reviewHref: getHelpdeskReviewUrl("liveagent"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Live chat" },
];

const kayakoPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Kayako Alternatives (2026)",
  subtitle: "If Kayako isn't the right fit—because of ecosystem, cost, or features—these helpdesk alternatives offer strong options.",
  productName: "Kayako",
  productSlug: "kayako",
  originalReviewHref: getHelpdeskReviewUrl("kayako"),
  quickAnswerParagraphs: [
    "Kayako offers unified conversations and good value; alternatives include Zendesk for ecosystem, Freshdesk for value and free tier, Zoho Desk for lowest cost, Help Scout for email-first simplicity, and LiveAgent for live chat focus. Zendesk and Freshdesk are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Larger ecosystem", body: "Zendesk has the largest app marketplace. Freshdesk has a broader ecosystem than Kayako." },
    { heading: "Lower cost or free tier", body: "Freshdesk and Zoho Desk offer free tiers and often lower per-agent cost." },
    { heading: "Simpler or different focus", body: "Help Scout for email-only; LiveAgent for chat emphasis." },
  ],
  topAlternatives: KAYAKO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "kayako", name: "Kayako", logoSrc: HELPDESK_LOGOS.kayako, bestFor: "unified conversations", startingPrice: "From ~$15/agent/mo", standoutFeature: "Unified; value", reviewHref: getHelpdeskReviewUrl("kayako") },
    KAYAKO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Zendesk", heading: "Best for ecosystem", body: "Zendesk offers the largest marketplace and full helpdesk breadth.", reviewHref: getHelpdeskReviewUrl("zendesk") },
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk delivers full helpdesk at lower cost with a free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    { productName: "Zoho Desk", heading: "Best for value", body: "Zoho Desk offers lowest per-agent cost and Zoho suite integration.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is a simple shared inbox for email-focused teams.", reviewHref: getHelpdeskReviewUrl("help-scout") },
    { productName: "LiveAgent", heading: "Best for live chat", body: "LiveAgent emphasizes live chat and omnichannel at competitive pricing.", reviewHref: getHelpdeskReviewUrl("liveagent") },
  ],
  relatedComparisons: [
    helpRel("zendesk-vs-freshdesk"),
    helpRel("freshdesk-vs-zoho-desk"),
  ],
  relatedResources: defaultRelatedResources("Kayako", getHelpdeskReviewUrl("kayako")),
  faqItems: [
    { q: "What is the best Kayako alternative?", a: "Zendesk for ecosystem; Freshdesk for value; Zoho Desk for lowest cost; Help Scout for email-first. Choose by budget and focus." },
    { q: "Is Kayako good for small business?", a: "Kayako offers good value. Freshdesk and Zoho Desk also suit small teams with free or low-cost tiers." },
    { q: "Which helpdesk has unified conversations?", a: "Kayako, Zendesk, and Freshdesk all offer unified inbox and customer context. Compare pricing and ecosystem for your size." },
  ],
};

// ——— Front alternatives ———
const FRONT_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "help-scout", name: "Help Scout", logoSrc: HELPDESK_LOGOS.helpScout, rating: "4.6", bestFor: "email-first", description: "Simple shared inbox; support-focused.", reviewHref: getHelpdeskReviewUrl("help-scout"), startingPrice: "From ~$20/user/mo", standoutFeature: "Email-first" },
  { slug: "zendesk", name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "full helpdesk", description: "Full ticketing and multi-channel.", reviewHref: getHelpdeskReviewUrl("zendesk"), startingPrice: "From ~$19/agent/mo", standoutFeature: "Full helpdesk" },
  { slug: "freshdesk", name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "value", description: "Full helpdesk at lower cost; free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk"), startingPrice: "From ~$15/agent/mo", standoutFeature: "Value" },
  { slug: "intercom", name: "Intercom", logoSrc: HELPDESK_LOGOS.intercom, rating: "4.4", bestFor: "messaging", description: "Messaging-first; chat and bots.", reviewHref: getHelpdeskReviewUrl("intercom"), startingPrice: "From ~$39/mo", standoutFeature: "Messaging" },
  { slug: "zoho-desk", name: "Zoho Desk", logoSrc: HELPDESK_LOGOS.zohoDesk, rating: "4.4", bestFor: "value", description: "Low cost; Zoho suite.", reviewHref: getHelpdeskReviewUrl("zoho-desk"), startingPrice: "From ~$14/agent/mo", standoutFeature: "Value" },
];

const frontPage: AlternativesTemplateProps = {
  ...zendeskPage,
  title: "Best Front Alternatives (2026)",
  subtitle: "If Front isn't the right fit—because of pricing, full helpdesk need, or focus—these shared inbox and helpdesk alternatives offer strong options.",
  productName: "Front",
  productSlug: "front",
  originalReviewHref: getHelpdeskReviewUrl("front"),
  quickAnswerParagraphs: [
    "Front is strong for shared inbox and collaboration; alternatives include Help Scout for email-first support, Zendesk for full helpdesk, Freshdesk for value and free tier, Intercom for messaging, and Zoho Desk for low cost. Help Scout and Zendesk are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Support-focused", body: "Help Scout is built for customer support with a simpler, support-centric workflow." },
    { heading: "Full helpdesk", body: "Zendesk and Freshdesk offer full ticketing, multi-channel, and automation." },
    { heading: "Cost", body: "Freshdesk and Zoho Desk offer lower per-agent or per-user cost and free tiers." },
  ],
  topAlternatives: FRONT_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "front", name: "Front", logoSrc: HELPDESK_LOGOS.front, bestFor: "shared inbox", startingPrice: "From ~$19/user/mo", standoutFeature: "Collaboration", reviewHref: getHelpdeskReviewUrl("front") },
    FRONT_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Help Scout", heading: "Best for email-first", body: "Help Scout is a simple shared inbox built for support teams.", reviewHref: getHelpdeskReviewUrl("help-scout") },
    { productName: "Zendesk", heading: "Best for full helpdesk", body: "Zendesk offers full ticketing, multi-channel, and the largest ecosystem.", reviewHref: getHelpdeskReviewUrl("zendesk") },
    { productName: "Freshdesk", heading: "Best for value", body: "Freshdesk delivers full helpdesk at lower cost with a free tier.", reviewHref: getHelpdeskReviewUrl("freshdesk") },
    { productName: "Intercom", heading: "Best for messaging", body: "Intercom is messaging-first with chat and in-app support.", reviewHref: getHelpdeskReviewUrl("intercom") },
    { productName: "Zoho Desk", heading: "Best for value", body: "Zoho Desk offers low cost and Zoho suite integration.", reviewHref: getHelpdeskReviewUrl("zoho-desk") },
  ],
  relatedComparisons: [
    helpRel("help-scout-vs-zendesk"),
    helpRel("zendesk-vs-freshdesk"),
  ],
  relatedResources: defaultRelatedResources("Front", getHelpdeskReviewUrl("front")),
  faqItems: [
    { q: "What is the best Front alternative?", a: "Help Scout for email-first support; Zendesk for full helpdesk; Freshdesk for value; Intercom for messaging. Choose by shared inbox vs full helpdesk." },
    { q: "Is Front a helpdesk?", a: "Front is a shared inbox with strong collaboration. Zendesk and Freshdesk are full helpdesks with ticketing and multi-channel. Help Scout sits between—shared inbox focused on support." },
    { q: "Which is better for shared inbox?", a: "Front and Help Scout are both shared-inbox oriented. Help Scout is more support-focused; Front emphasizes internal collaboration. Compare workflows for your team." },
  ],
};

const PAGES: Record<string, AlternativesTemplateProps> = {
  zendesk: zendeskPage,
  freshdesk: freshdeskPage,
  "help-scout": helpScoutPage,
  intercom: intercomPage,
  "zoho-desk": zohoDeskPage,
  gorgias: gorgiasPage,
  liveagent: liveagentPage,
  kayako: kayakoPage,
  front: frontPage,
};

export function getHelpdeskAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getHelpdeskAlternativesSlugs(): string[] {
  return Object.keys(PAGES);
}
