/**
 * Helpdesk comparison pages data.
 * Used by app/helpdesk/compare/page.tsx and app/helpdesk/compare/[comparison]/page.tsx with ComparisonTemplate.
 */

import { getHelpdeskReviewUrl, getHelpdeskCompareUrl, getHelpdeskBestForUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskHubData";

export function getHelpdeskCompareUrlFromSlug(slug: string): string {
  return `/helpdesk/compare/${slug}`;
}

/** Product refs for helpdesk comparisons — consistent review links and logos */
const P = {
  zendesk: {
    name: "Zendesk",
    slug: "zendesk",
    reviewHref: getHelpdeskReviewUrl("zendesk"),
    logoSrc: HELPDESK_LOGOS.zendesk,
    visitUrl: "https://www.zendesk.com",
    bestForSummary: "Best overall helpdesk with full ticketing, multi-channel support, and strong automation.",
    rating: "4.5",
    startingPrice: "From ~$19/agent/mo",
  },
  freshdesk: {
    name: "Freshdesk",
    slug: "freshdesk",
    reviewHref: getHelpdeskReviewUrl("freshdesk"),
    logoSrc: HELPDESK_LOGOS.freshdesk,
    visitUrl: "https://www.freshdesk.com",
    bestForSummary: "Best value helpdesk for growing teams; solid features at lower cost.",
    rating: "4.5",
    startingPrice: "From ~$15/agent/mo",
  },
  helpScout: {
    name: "Help Scout",
    slug: "help-scout",
    reviewHref: getHelpdeskReviewUrl("help-scout"),
    logoSrc: HELPDESK_LOGOS.helpScout,
    visitUrl: "https://www.helpscout.com",
    bestForSummary: "Best for email-first support teams; simple shared inbox and customer context.",
    rating: "4.6",
    startingPrice: "From ~$20/user/mo",
  },
  intercom: {
    name: "Intercom",
    slug: "intercom",
    reviewHref: getHelpdeskReviewUrl("intercom"),
    logoSrc: HELPDESK_LOGOS.intercom,
    visitUrl: "https://www.intercom.com",
    bestForSummary: "Best for customer messaging and in-app support; conversational UX.",
    rating: "4.4",
    startingPrice: "From ~$39/mo",
  },
  zohoDesk: {
    name: "Zoho Desk",
    slug: "zoho-desk",
    reviewHref: getHelpdeskReviewUrl("zoho-desk"),
    logoSrc: HELPDESK_LOGOS.zohoDesk,
    visitUrl: "https://www.zoho.com/desk",
    bestForSummary: "Best value and Zoho ecosystem fit; affordable per-agent ticketing.",
    rating: "4.4",
    startingPrice: "From ~$14/agent/mo",
  },
  gorgias: {
    name: "Gorgias",
    slug: "gorgias",
    reviewHref: getHelpdeskReviewUrl("gorgias"),
    logoSrc: HELPDESK_LOGOS.gorgias,
    visitUrl: "https://www.gorgias.com",
    bestForSummary: "Best for ecommerce support; deep Shopify and Magento integration.",
    rating: "4.5",
    startingPrice: "From ~$60/mo",
  },
  liveagent: {
    name: "LiveAgent",
    slug: "liveagent",
    reviewHref: getHelpdeskReviewUrl("liveagent"),
    logoSrc: HELPDESK_LOGOS.liveAgent,
    visitUrl: "https://www.liveagent.com",
    bestForSummary: "Strong live chat and omnichannel at competitive pricing.",
    rating: "4.3",
    startingPrice: "From ~$15/agent/mo",
  },
  kayako: {
    name: "Kayako",
    slug: "kayako",
    reviewHref: getHelpdeskReviewUrl("kayako"),
    logoSrc: HELPDESK_LOGOS.kayako,
    visitUrl: "https://www.kayako.com",
    bestForSummary: "Unified conversations and customer history; good value.",
    rating: "4.2",
    startingPrice: "From ~$15/agent/mo",
  },
  front: {
    name: "Front",
    slug: "front",
    reviewHref: getHelpdeskReviewUrl("front"),
    logoSrc: HELPDESK_LOGOS.front,
    visitUrl: "https://www.front.com",
    bestForSummary: "Shared inbox with strong internal collaboration.",
    rating: "4.5",
    startingPrice: "From ~$19/user/mo",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for small business", href: getHelpdeskBestForUrl("small-business") },
  { label: "Best for startups", href: getHelpdeskBestForUrl("startups") },
  { label: "Best for ecommerce", href: getHelpdeskBestForUrl("ecommerce") },
  { label: "Best for SaaS", href: getHelpdeskBestForUrl("saas") },
  { label: "Best for growing teams", href: getHelpdeskBestForUrl("growing-teams") },
];

function buildComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  content: Omit<ComparisonTemplateProps, "productA" | "productB" | "categoryHref" | "categoryLabel">
): [string, ComparisonTemplateProps] {
  return [
    slug,
    {
      ...content,
      productA: P[productAKey],
      productB: P[productBKey],
      categoryHref: "/helpdesk",
      categoryLabel: "Helpdesk",
    },
  ];
}

const BASE_HELPDESK_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  { feature: "Ticket management", productA: "Full ticketing and workflows", productB: "Full ticketing and workflows", supportA: "supported", supportB: "supported" },
  { feature: "Automation workflows", productA: "Rules, macros, routing", productB: "Rules, macros, routing", supportA: "supported", supportB: "supported" },
  { feature: "Multi-channel support", productA: "Email, chat, social, phone", productB: "Email, chat, social", supportA: "supported", supportB: "supported" },
  { feature: "Reporting and analytics", productA: "Dashboards and SLA reports", productB: "Reports and dashboards", supportA: "supported", supportB: "supported" },
  { feature: "Integrations", productA: "CRM, ecommerce, marketplace", productB: "CRM, ecommerce, apps", supportA: "supported", supportB: "supported" },
  { feature: "Pricing flexibility", productA: "Tiered per agent", productB: "Tiered per agent / free tier", supportA: "supported", supportB: "supported" },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  buildComparison("zendesk-vs-freshdesk", "zendesk", "freshdesk", {
    summaryParagraph:
      "Zendesk and Freshdesk are two of the most popular helpdesk platforms. Zendesk offers a full-featured suite with strong brand recognition and a large app ecosystem; Freshdesk delivers similar core capabilities—ticketing, multi-channel support, and automation—at lower per-agent cost and with a free tier. Choosing between them often comes down to budget, ecosystem size, and how much you value the Zendesk name versus Freshdesk’s value proposition.",
    quickRecommendationA:
      "Choose Zendesk if you want the largest ecosystem, strongest brand recognition, and are comfortable with higher per-agent pricing for maximum breadth and support.",
    quickRecommendationB:
      "Choose Freshdesk if you want strong helpdesk features at lower cost, a free tier for very small teams, and transparent pricing as you scale.",
    quickVerdictParagraphs: [
      "Zendesk is the default choice for teams that prioritize ecosystem and name. You get comprehensive ticketing, multi-channel inbox, automation, and reporting, plus a large marketplace and integrations. Pricing starts around $19/agent/month and scales with channels and features. For many SMBs, the total cost is higher than Freshdesk for comparable core features.",
      "Freshdesk competes directly on features while undercutting on price. You get ticketing, email and chat, social channels, knowledge base, and automation—often for less per agent than Zendesk. The free tier supports a limited number of agents, and paid plans start around $15/agent/month. The main trade-off is a smaller third-party ecosystem and less brand recognition.",
      "For most small and growing support teams, Freshdesk offers better value. Choose Zendesk when you need the largest app marketplace, enterprise-level support options, or prefer the Zendesk brand.",
    ],
    featureComparison: BASE_HELPDESK_FEATURE_ROWS,
    pricingComparison:
      "Zendesk uses tiered per-agent pricing with advanced automation and reporting on higher tiers; entry is around $19/agent/month. Freshdesk offers lower entry pricing and a free tier, making it more accessible for small support teams—paid plans often start around $15/agent/month. Both scale with agents and features; Zendesk tends to cost more at equivalent seat count.",
    prosConsA: {
      pros: ["Largest ecosystem and app marketplace", "Strong brand and enterprise support", "Comprehensive multi-channel and automation"],
      cons: ["Higher cost at scale", "Some features require higher tiers", "Can be overkill for very small teams"],
    },
    prosConsB: {
      pros: ["Lower per-agent cost and free tier", "Solid ticketing and multi-channel", "Good value for growing teams"],
      cons: ["Smaller app ecosystem than Zendesk", "Less brand recognition", "Advanced analytics on higher tiers"],
    },
    bestFor: [
      { heading: "Best for Zendesk", body: "Teams that want the largest helpdesk ecosystem, strongest brand, and are willing to pay for breadth and enterprise options. Ideal when integrations and app count matter." },
      { heading: "Best for Freshdesk", body: "Small and growing support teams that want full helpdesk features at lower cost. Strong fit when budget and value matter more than brand or ecosystem size." },
    ],
    alternatives: [
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), logoSrc: HELPDESK_LOGOS.helpScout },
      { name: "Zoho Desk", href: getHelpdeskReviewUrl("zoho-desk"), logoSrc: HELPDESK_LOGOS.zohoDesk },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), logoSrc: HELPDESK_LOGOS.intercom },
    ],
    faqs: [
      { q: "Is Freshdesk as good as Zendesk?", a: "For core helpdesk features—ticketing, multi-channel, automation—Freshdesk is comparable and often cheaper. Zendesk leads on ecosystem size and brand. Choose Freshdesk for value; Zendesk for maximum breadth." },
      { q: "Which is cheaper, Zendesk or Freshdesk?", a: "Freshdesk is typically cheaper per agent and offers a free tier. Zendesk starts around $19/agent/month; Freshdesk often starts around $15/agent with a free plan for very small teams." },
      { q: "Can I switch from Zendesk to Freshdesk?", a: "Yes. Both support migration of tickets and knowledge base. Plan for data export, mapping custom fields, and training. Many SMBs switch to reduce cost." },
    ],
    sidebarWinners: [
      { label: "Winner for ecosystem", winner: "A" },
      { label: "Winner for value", winner: "B" },
      { label: "Winner for small teams", winner: "B" },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    moreComparisons: [
      { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrlFromSlug("help-scout-vs-zendesk") },
      { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrlFromSlug("freshdesk-vs-zoho-desk") },
    ],
  }),

  buildComparison("help-scout-vs-zendesk", "helpScout", "zendesk", {
    summaryParagraph:
      "Help Scout and Zendesk represent different approaches to support software. Help Scout is built around a simple shared inbox and email-first workflows with strong customer context; Zendesk is a full multi-channel helpdesk with ticketing, chat, social, phone, and a large ecosystem. Choosing between them depends on whether you prioritize simplicity and email focus or breadth and many channels.",
    quickRecommendationA:
      "Choose Help Scout if your support is primarily email and you want a simple, team-friendly shared inbox with minimal complexity and quick adoption.",
    quickRecommendationB:
      "Choose Zendesk if you need multiple channels (chat, social, phone), heavy automation, and the largest app marketplace.",
    quickVerdictParagraphs: [
      "Help Scout excels at email-based support. The shared inbox is the center of the product; conversations, customer history, and docs stay easy to use. There’s no heavy ticket taxonomy or complex routing—agents get up to speed quickly. Live chat is available but secondary. Pricing is per user and typically starts around $20/user/month. It’s an excellent fit for small and mid-size teams that don’t need many channels.",
      "Zendesk offers far more channels and features: ticketing, email, chat, social, phone, knowledge base, and automation. You pay for breadth—often around $19/agent/month and up. For teams that need live chat, social, or phone in addition to email, Zendesk is the stronger choice. The trade-off is more complexity and higher cost.",
      "If you’re email-first and value simplicity, choose Help Scout. If you need multi-channel scale and ecosystem, choose Zendesk.",
    ],
    featureComparison: BASE_HELPDESK_FEATURE_ROWS,
    pricingComparison:
      "Help Scout uses per-user pricing, typically starting around $20/user/month, with a clear feature set and no per-channel nickel-and-diming. Zendesk uses per-agent pricing starting around $19/agent/month, with higher tiers for more channels and automation. Help Scout is often cheaper for email-focused teams; Zendesk costs more but adds chat, social, and phone.",
    prosConsA: {
      pros: ["Simple shared inbox; minimal learning curve", "Strong customer context and docs", "Friendly for small teams"],
      cons: ["Fewer channels than Zendesk", "Less automation depth", "May outgrow if you add many channels"],
    },
    prosConsB: {
      pros: ["Full multi-channel and ticketing", "Large ecosystem and integrations", "Scales to enterprise"],
      cons: ["More complex and costly", "Heavier than needed for email-only", "Some features on higher tiers"],
    },
    bestFor: [
      { heading: "Best for Help Scout", body: "Support teams that primarily use email and want a clean shared inbox, strong customer history, and easy adoption. Ideal for SMBs that don’t need many channels." },
      { heading: "Best for Zendesk", body: "Teams that need email plus chat, social, and/or phone in one platform, with strong automation and a large app ecosystem. Fits growing and multi-channel support." },
    ],
    alternatives: [
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Front", href: getHelpdeskReviewUrl("front"), logoSrc: HELPDESK_LOGOS.front },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), logoSrc: HELPDESK_LOGOS.intercom },
    ],
    faqs: [
      { q: "Is Help Scout easier than Zendesk?", a: "Yes. Help Scout is built for simplicity and email-first workflows; most teams adopt it quickly. Zendesk has more features and steeper learning curve." },
      { q: "Does Help Scout have live chat?", a: "Yes, but it’s secondary to email. Zendesk offers chat as a first-class channel with more depth. Choose Help Scout for email focus, Zendesk for multi-channel." },
      { q: "Which is better for small business?", a: "Help Scout is often better for very small teams that only need email—simpler and often cheaper. Zendesk fits small businesses that need multiple channels or plan to add them." },
    ],
    sidebarWinners: [
      { label: "Winner for simplicity", winner: "A" },
      { label: "Winner for multi-channel", winner: "B" },
      { label: "Winner for email-first", winner: "A" },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    moreComparisons: [
      { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrlFromSlug("zendesk-vs-freshdesk") },
      { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrlFromSlug("intercom-vs-zendesk") },
    ],
  }),

  buildComparison("intercom-vs-zendesk", "intercom", "zendesk", {
    summaryParagraph:
      "Intercom and Zendesk serve different support philosophies. Intercom is messaging-first: live chat, in-app messages, bots, and help center in a conversational experience. Zendesk is ticket-centric with a traditional helpdesk model—email, chat, social, and phone in a unified queue. Your choice depends on whether you want a conversational, product-integrated experience (Intercom) or a classic helpdesk with maximum breadth (Zendesk).",
    quickRecommendationA:
      "Choose Intercom if you want messaging and in-app support at the center, with bots and a conversational UX that fits product-led and SaaS teams.",
    quickRecommendationB:
      "Choose Zendesk if you want a traditional helpdesk with ticketing, multi-channel queue, and the largest ecosystem.",
    quickVerdictParagraphs: [
      "Intercom is built for conversations. Support happens in a messaging-style inbox; chat, in-app messages, and help content live together. Bots can qualify and deflect; humans take over when needed. Pricing often scales with seats and contacts, and can be higher than per-agent helpdesks at high volume. The product is ideal for SaaS and product-led companies that want support to feel like part of the product.",
      "Zendesk is the classic helpdesk: tickets, assignment, statuses, and multi-channel queue. Email, chat, social, and phone are first-class. You get predictable per-agent pricing and a huge app marketplace. For teams that think in tickets and need maximum channel and integration breadth, Zendesk is the default.",
      "Choose Intercom for messaging-first and product integration; choose Zendesk for ticket-centric workflows and ecosystem size.",
    ],
    featureComparison: BASE_HELPDESK_FEATURE_ROWS,
    pricingComparison:
      "Intercom typically starts around $39/month and scales with seats and often contact volume—cost can rise with usage. Zendesk uses per-agent pricing starting around $19/agent/month, which can be more predictable at scale. Intercom is often more expensive at high conversation volume; Zendesk is usually cheaper for traditional high-volume ticket support.",
    prosConsA: {
      pros: ["Messaging-first; modern conversational UX", "Bots and in-app support", "Strong for product-led and SaaS"],
      cons: ["Pricing can scale with contacts", "Less ticket-centric", "Can be costly at high volume"],
    },
    prosConsB: {
      pros: ["Full ticketing and multi-channel", "Largest ecosystem", "Predictable per-agent pricing"],
      cons: ["Traditional UX; less conversational", "Heavier setup", "Less native in-app messaging focus"],
    },
    bestFor: [
      { heading: "Best for Intercom", body: "SaaS and product-led teams that want in-app and chat-first support, bots, and a conversational experience. Fits when support is part of the product journey." },
      { heading: "Best for Zendesk", body: "Teams that want a traditional helpdesk with tickets, multi-channel queue, and the largest app ecosystem. Fits high-volume, ticket-centric support." },
    ],
    alternatives: [
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), logoSrc: HELPDESK_LOGOS.helpScout },
      { name: "Gorgias", href: getHelpdeskReviewUrl("gorgias"), logoSrc: HELPDESK_LOGOS.gorgias },
    ],
    faqs: [
      { q: "What is the difference between Intercom and Zendesk?", a: "Intercom is messaging- and conversation-centric with bots and in-app support; Zendesk is ticket-centric with a traditional helpdesk queue. Intercom fits product-led teams; Zendesk fits classic multi-channel support." },
      { q: "Is Intercom more expensive than Zendesk?", a: "Often yes at high volume, because Intercom pricing can scale with contacts or usage. Zendesk’s per-agent pricing is more predictable. Compare for your expected volume." },
      { q: "Which is better for live chat?", a: "Both offer live chat. Intercom is built around chat and in-app messaging; Zendesk includes chat as part of a multi-channel helpdesk. Choose by whether you want messaging-first (Intercom) or helpdesk-first (Zendesk)." },
    ],
    sidebarWinners: [
      { label: "Winner for messaging", winner: "A" },
      { label: "Winner for helpdesk breadth", winner: "B" },
      { label: "Winner for product-led", winner: "A" },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    moreComparisons: [
      { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrlFromSlug("zendesk-vs-freshdesk") },
      { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrlFromSlug("gorgias-vs-zendesk") },
    ],
  }),

  buildComparison("freshdesk-vs-zoho-desk", "freshdesk", "zohoDesk", {
    summaryParagraph:
      "Freshdesk and Zoho Desk both offer affordable helpdesk software with ticketing, multi-channel support, and automation. Freshdesk has a broad third-party ecosystem and is widely used; Zoho Desk fits naturally into the Zoho suite (CRM, Mail, etc.) and often undercuts on price. Choosing between them often comes down to whether you already use Zoho and how much you value suite integration versus a larger standalone app ecosystem.",
    quickRecommendationA:
      "Choose Freshdesk if you want a standalone helpdesk with a broad app ecosystem and don’t need to be in the Zoho suite.",
    quickRecommendationB:
      "Choose Zoho Desk if you already use Zoho apps or want the lowest per-agent cost with solid helpdesk features.",
    quickVerdictParagraphs: [
      "Freshdesk delivers full helpdesk capabilities at competitive pricing. You get ticketing, email and chat, social channels, knowledge base, and automation—often for less than Zendesk. The free tier supports a small number of agents; paid plans start around $15/agent/month. Integrations cover major CRMs and collaboration tools. It’s a strong default when you want value and don’t need to be in Zoho.",
      "Zoho Desk is the helpdesk arm of Zoho. Same core features—ticketing, multi-channel, automation—at per-agent prices that often beat Freshdesk slightly. If you use Zoho CRM, Mail, or other Zoho apps, Desk fits seamlessly: shared contacts, single sign-on, and consistent UI. The main limitation is a smaller third-party app set than Freshdesk.",
      "For most teams, both are good value. Choose Freshdesk for ecosystem breadth; choose Zoho Desk for Zoho integration and often the lowest cost.",
    ],
    featureComparison: BASE_HELPDESK_FEATURE_ROWS,
    pricingComparison:
      "Freshdesk offers a free tier and paid plans starting around $15/agent/month. Zoho Desk also has a free tier and typically starts around $14/agent/month—often slightly lower than Freshdesk. Both scale with agents and features; Zoho Desk can be the cheapest option for teams already in the Zoho ecosystem.",
    prosConsA: {
      pros: ["Broad app ecosystem", "Solid ticketing and multi-channel", "Free tier and transparent pricing"],
      cons: ["Slightly higher cost than Zoho Desk in some tiers", "No native Zoho suite integration"],
    },
    prosConsB: {
      pros: ["Lowest per-agent cost; Zoho suite integration", "Full ticketing and automation", "Good for Zoho users"],
      cons: ["Smaller third-party ecosystem", "Less brand recognition than Freshdesk", "UI can feel busy"],
    },
    bestFor: [
      { heading: "Best for Freshdesk", body: "Teams that want a standalone helpdesk with a broad integration set and don’t rely on Zoho. Good when ecosystem and third-party apps matter." },
      { heading: "Best for Zoho Desk", body: "Teams already using Zoho or seeking the lowest cost. Ideal when you want helpdesk and CRM (or other Zoho apps) in one ecosystem." },
    ],
    alternatives: [
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), logoSrc: HELPDESK_LOGOS.helpScout },
      { name: "Gorgias", href: getHelpdeskReviewUrl("gorgias"), logoSrc: HELPDESK_LOGOS.gorgias },
    ],
    faqs: [
      { q: "Is Zoho Desk cheaper than Freshdesk?", a: "Often yes—Zoho Desk typically starts around $14/agent/month versus Freshdesk around $15/agent. Both have free tiers. Compare current plans for your team size." },
      { q: "Does Zoho Desk integrate with Zoho CRM?", a: "Yes. Zoho Desk integrates natively with Zoho CRM and other Zoho apps. Freshdesk integrates with many CRMs including Zoho via marketplace." },
      { q: "Which has more integrations?", a: "Freshdesk generally has a broader third-party app ecosystem. Zoho Desk has strong Zoho-native integration and a smaller but growing marketplace." },
    ],
    sidebarWinners: [
      { label: "Winner for ecosystem", winner: "A" },
      { label: "Winner for Zoho users", winner: "B" },
      { label: "Winner for lowest cost", winner: "B" },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    moreComparisons: [
      { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrlFromSlug("zendesk-vs-freshdesk") },
      { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrlFromSlug("help-scout-vs-zendesk") },
    ],
  }),

  buildComparison("gorgias-vs-zendesk", "gorgias", "zendesk", {
    summaryParagraph:
      "Gorgias and Zendesk serve different primary use cases. Gorgias is built for ecommerce support—deep Shopify and Magento integration, order and customer context in the ticket, and macros for returns and store operations. Zendesk is a general-purpose helpdesk with the largest ecosystem and multi-channel breadth. If your support revolves around orders and the store, Gorgias is the better fit; if you need a broad helpdesk for mixed or non-ecommerce support, Zendesk is the default.",
    quickRecommendationA:
      "Choose Gorgias if you run an ecommerce store (especially Shopify or Magento) and want order context, macros, and store actions inside the helpdesk.",
    quickRecommendationB:
      "Choose Zendesk if you need a general helpdesk for multiple channels and use cases, or don’t need deep ecommerce integration.",
    quickVerdictParagraphs: [
      "Gorgias is purpose-built for ecommerce. Agents see order history, cart, and customer data from the store without leaving the inbox. Macros can look up orders, process refunds, or trigger store actions. Pricing typically starts around $60/month and scales with ticket volume. For Shopify and Magento stores with meaningful support volume, Gorgias removes context-switching and speeds up order-related replies.",
      "Zendesk is a general helpdesk that can connect to ecommerce via apps and API, but it’s not ecommerce-native. You get maximum channel and integration breadth—email, chat, social, phone—and the largest app marketplace. Per-agent pricing starts around $19/agent/month. For mixed support or non-store use cases, Zendesk is the stronger choice.",
      "Choose Gorgias when the store is central to support; choose Zendesk when you need a broad helpdesk first.",
    ],
    featureComparison: BASE_HELPDESK_FEATURE_ROWS,
    pricingComparison:
      "Gorgias typically starts around $60/month and scales with ticket volume and seats—pricing is ecommerce-oriented. Zendesk uses per-agent pricing starting around $19/agent/month. Gorgias can be more expensive per seat but delivers ecommerce-specific value (order context, macros). Zendesk is usually cheaper for non-ecommerce or mixed support at equivalent seat count.",
    prosConsA: {
      pros: ["Deep Shopify/Magento integration", "Order and customer context in tickets", "Macros for returns and store actions"],
      cons: ["Focused on ecommerce; not ideal for non-store support", "Pricing can be high at volume", "Smaller general ecosystem than Zendesk"],
    },
    prosConsB: {
      pros: ["Largest helpdesk ecosystem", "Full multi-channel", "General-purpose; fits any support"],
      cons: ["Ecommerce integration less deep than Gorgias", "No native order-level context", "Can be costly at scale"],
    },
    bestFor: [
      { heading: "Best for Gorgias", body: "Ecommerce support teams (Shopify, Magento) that handle orders and returns daily. Ideal when support and store data should live in one place." },
      { heading: "Best for Zendesk", body: "Teams that need a general helpdesk for email, chat, social, and phone—with or without ecommerce. Fits mixed and non-ecommerce support." },
    ],
    alternatives: [
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), logoSrc: HELPDESK_LOGOS.intercom },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), logoSrc: HELPDESK_LOGOS.helpScout },
    ],
    faqs: [
      { q: "Is Gorgias only for ecommerce?", a: "Gorgias is built for ecommerce support (Shopify, Magento). You can use it for other support, but you’ll get the most value when orders and store context matter. For non-ecommerce, Zendesk or Freshdesk are better fits." },
      { q: "Can Zendesk integrate with Shopify?", a: "Yes, via apps and API, but not as deeply as Gorgias. Gorgias shows order and customer data natively in the ticket; Zendesk requires more setup for similar context." },
      { q: "Which is better for Shopify support?", a: "Gorgias is purpose-built for Shopify with order context and store actions. Zendesk can connect to Shopify but is a general helpdesk. For store-centric support, Gorgias usually wins." },
    ],
    sidebarWinners: [
      { label: "Winner for ecommerce", winner: "A" },
      { label: "Winner for general helpdesk", winner: "B" },
      { label: "Winner for store integration", winner: "A" },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    moreComparisons: [
      { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrlFromSlug("zendesk-vs-freshdesk") },
      { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrlFromSlug("intercom-vs-zendesk") },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getHelpdeskComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getHelpdeskComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
