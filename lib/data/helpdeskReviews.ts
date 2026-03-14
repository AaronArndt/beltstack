/**
 * Helpdesk software review pages data.
 * Used by app/helpdesk/review/[slug]/page.tsx with ReviewTemplate.
 * Schema matches crmReviews / posReviews / projectManagementReviews.
 */

import {
  getHelpdeskReviewUrl,
  getHelpdeskCompareUrl,
  getHelpdeskBestForUrl,
} from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskHubData";

export type HelpdeskReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const HELPDESK_CATEGORY = "Helpdesk";
const HELPDESK_CATEGORY_HREF = "/helpdesk";
const BEST_HELPDESK_SOFTWARE_HREF = "/helpdesk/best-helpdesk-software";
const HELPDESK_COMPARE_HUB = "/helpdesk/compare";
const HELPDESK_GUIDES_HUB = "/helpdesk/guides";

const HELPDESK_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for small business", href: getHelpdeskBestForUrl("small-business") },
  { label: "Best for startups", href: getHelpdeskBestForUrl("startups") },
  { label: "Best for ecommerce", href: getHelpdeskBestForUrl("ecommerce") },
  { label: "Best for SaaS", href: getHelpdeskBestForUrl("saas") },
  { label: "Best for growing teams", href: getHelpdeskBestForUrl("growing-teams") },
];

const HELPDESK_METHODOLOGY = {
  title: "How we review helpdesk software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated on a regular cadence so you get current pricing and feature information. We evaluate helpdesk tools on ticketing and workflow, multi-channel support, automation, reporting, and fit for small businesses and growing teams.",
  bullets: [
    "We test core workflows: creating and managing tickets, routing and automation, and viewing customer history.",
    "We compare pricing (per agent or per seat), channel support, and integration options so you understand total cost.",
    "We look at ease of use, reporting depth, and scalability for teams that expect to grow.",
  ],
};

const reviews: Record<string, HelpdeskReviewData> = {
  zendesk: {
    toolName: "Zendesk",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.5",
    startingPrice: "From ~$19/agent/mo",
    bestFor: "teams that want a full-featured helpdesk with ticketing, multi-channel support, and strong automation",
    visitUrl: "https://www.zendesk.com",
    logoSrc: HELPDESK_LOGOS.zendesk,
    quickVerdict:
      "Zendesk is our top pick for most support teams: comprehensive ticketing, multi-channel inbox, automation, and reporting in one platform that scales from small teams to enterprise.",
    quickVerdictParagraphs: [
      "Zendesk has been a leader in helpdesk software for years, and for good reason. It offers a complete set of tools: ticket management, email and chat, social channels, knowledge base, and robust automation and reporting. Whether you handle a few hundred or hundreds of thousands of conversations a month, Zendesk can scale with you. Setup is straightforward, and the interface is familiar to many support professionals.",
      "We recommend Zendesk when you need a proven, full-featured helpdesk and are willing to pay for breadth. Pricing starts around $19/agent/month and scales with channels and features. For small teams on a tight budget, Freshdesk or Zoho Desk may offer similar core capabilities at lower cost. For email-first teams that prefer simplicity over channels, Help Scout is a strong alternative.",
      "Strengths include multi-channel support, automation and routing, and a large app marketplace. Drawbacks include cost at scale and the fact that some advanced features live on higher tiers. If you want one platform that can grow with your support organization and don’t mind investing in the ecosystem, Zendesk remains a default choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.7", explanation: "Comprehensive ticketing, multi-channel inbox, automation, macros, and reporting. Knowledge base and community forums available. Strong depth across plans." },
      { category: "Pricing", score: "4.3", explanation: "Transparent per-agent pricing; entry tier is competitive. Cost increases with channels and advanced features. Can get expensive for large teams." },
      { category: "Ease of Use", score: "4.5", explanation: "Interface is clear and widely adopted. Onboarding and help resources are solid. New agents typically get up to speed quickly." },
      { category: "Integrations", score: "4.7", explanation: "Large app marketplace, native CRM and ecommerce integrations, and API. Slack, Salesforce, Shopify, and hundreds of apps available." },
      { category: "Support", score: "4.5", explanation: "Documentation and community are strong. Support tiers scale with plan. Enterprise customers get dedicated options." },
    ],
    pros: [
      "Full-featured ticketing and multi-channel support (email, chat, social, phone)",
      "Strong automation, routing, and macros",
      "Widely recognized; large ecosystem and app marketplace",
      "Scales from small teams to enterprise",
    ],
    cons: [
      "Can be costly at scale; some features require higher tiers",
      "Heavier than needed for very small or email-only teams",
      "Add-ons and channels can increase total cost",
    ],
    bestForEditorial:
      "Zendesk is best for support teams that want one platform for ticketing, multi-channel conversations, and reporting. Ideal for small to mid-size businesses planning to grow, teams that handle email and chat (and possibly social and phone), and organizations that value a large integration ecosystem. It fits teams that prefer a proven, feature-rich helpdesk over a minimal shared inbox.",
    whoShouldAvoid:
      "Solo operators or very small teams that only need a simple shared inbox may find Zendesk more than they need—Help Scout or Front may be simpler. Teams with strict budget constraints may prefer Freshdesk or Zoho Desk. Ecommerce-only teams that want deep store integration might focus on Gorgias first.",
    pricingSummary:
      "Zendesk typically starts around $19/agent/month for the Support Suite. Higher tiers add more channels, advanced automation, and analytics. Pricing is per agent; check Zendesk’s site for current plans and add-ons.",
    pricingTiers:
      "Support Suite tiers (Suite Team, Growth, Professional, Enterprise) add channels, automation, and reporting. Add-ons for messaging, voice, and advanced analytics are priced separately. Free trial available.",
    costVsCompetitors:
      "Zendesk sits in the mid-to-upper range for per-agent helpdesk pricing. You pay for breadth and brand. Freshdesk and Zoho Desk are often cheaper for comparable core features; Help Scout is competitive for email-focused teams. Intercom and Gorgias target different use cases (messaging, ecommerce) with different pricing models.",
    features: [
      "Ticket management and workflows",
      "Multi-channel support (email, chat, social, phone)",
      "Automation and routing",
      "Knowledge base and help center",
      "Reporting and dashboards",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Create, assign, and track tickets with statuses, priorities, and tags. Merge, split, and bulk actions keep the queue organized. Custom fields and forms capture the context you need." },
      { name: "Automation workflows", description: "Rules and triggers automate assignment, prioritization, and responses. Reduce manual triage and ensure SLAs are met. Macros and canned replies speed up common answers." },
      { name: "Multi-channel support", description: "Unified inbox for email, chat, social, and (on higher tiers) phone. One conversation thread per customer across channels so agents have full context." },
      { name: "Customer history tracking", description: "See past tickets and interactions in one place. Customer timeline and profile help agents resolve issues faster and avoid repeating questions." },
      { name: "Reporting and analytics", description: "Prebuilt and custom reports on volume, response time, resolution time, and CSAT. Dashboards and exports support SLA and team performance review." },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Shopify", "Zapier", "Jira", "Microsoft Teams", "Hundreds of apps via marketplace"],
    integrationsIntro:
      "Zendesk connects to CRMs, ecommerce platforms, and collaboration tools so support has context and data stays in sync. The marketplace and API make it easy to add industry-specific or internal integrations.",
    alternatives: [
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Similar capabilities at lower cost; strong value for growing teams.", logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), description: "Email-first and simpler; better if you don’t need many channels.", logoSrc: HELPDESK_LOGOS.helpScout },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), description: "Messaging-first; better for conversational and in-app support.", logoSrc: HELPDESK_LOGOS.intercom },
      { name: "Zoho Desk", href: getHelpdeskReviewUrl("zoho-desk"), description: "Good value and Zoho ecosystem fit; affordable per agent.", logoSrc: HELPDESK_LOGOS.zohoDesk },
      { name: "Gorgias", href: getHelpdeskReviewUrl("gorgias"), description: "Built for ecommerce; deep Shopify/Magento integration.", logoSrc: HELPDESK_LOGOS.gorgias },
    ],
    faqs: [
      { q: "Is Zendesk good for small businesses?", a: "Yes. Zendesk works well for small support teams that want full ticketing, multi-channel support, and room to grow. Entry-tier pricing is competitive; consider Freshdesk or Zoho Desk if budget is very tight." },
      { q: "How much does Zendesk cost?", a: "Zendesk typically starts around $19/agent/month. Cost increases with plan tier, channels, and add-ons. Check Zendesk’s pricing page for current numbers and a free trial." },
      { q: "What is the difference between Zendesk and Freshdesk?", a: "Both offer ticketing, multi-channel support, and automation. Zendesk has a larger brand and ecosystem; Freshdesk often costs less for similar core features. Choose Zendesk for maximum ecosystem, Freshdesk for value." },
      { q: "Does Zendesk integrate with Salesforce and Shopify?", a: "Yes. Zendesk has native integrations with Salesforce, HubSpot, Shopify, and many other CRMs and ecommerce platforms. The app marketplace adds more options." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
      { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
      { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
      { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  freshdesk: {
    toolName: "Freshdesk",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.5",
    startingPrice: "From ~$15/agent/mo",
    bestFor: "growing teams that want strong ticketing and automation at a lower cost than Zendesk",
    visitUrl: "https://www.freshdesk.com",
    logoSrc: HELPDESK_LOGOS.freshdesk,
    quickVerdict:
      "Freshdesk delivers full helpdesk capabilities—ticketing, multi-channel support, and automation—at competitive per-agent pricing, making it a top value pick for small and growing support teams.",
    quickVerdictParagraphs: [
      "Freshdesk is built to compete head-on with Zendesk while keeping costs lower. You get ticket management, email and chat, social channels, a knowledge base, automation, and reporting in a single platform. The free tier supports a small number of agents, and paid plans start around $15/agent/month—often less than Zendesk for comparable features. For teams that want a real helpdesk without enterprise pricing, Freshdesk is a strong choice.",
      "Setup and daily use are straightforward. The interface is clean, and automation rules, canned responses, and SLA policies work as expected. Integrations cover major CRMs, collaboration tools, and ecommerce platforms. The main trade-off is that advanced analytics and some enterprise features may require higher tiers or add-ons.",
      "We recommend Freshdesk when value and scalability both matter. It fits SMBs that expect to add agents and channels over time and don’t want to overpay for brand. If you need the absolute largest app ecosystem or prefer the Zendesk name, Zendesk may still win; for most small and mid-size teams, Freshdesk is an excellent default.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Solid ticketing, multi-channel, automation, and knowledge base. Good depth for the price. Some advanced reporting on higher tiers." },
      { category: "Pricing", score: "4.7", explanation: "Free tier and low per-agent cost. Transparent pricing; total cost stays predictable as you add agents." },
      { category: "Ease of Use", score: "4.5", explanation: "Clean interface and logical workflows. Easy for new agents to learn. Good documentation and onboarding." },
      { category: "Integrations", score: "4.4", explanation: "Good coverage for CRM, ecommerce, and collaboration. Marketplace and API extend connectivity." },
      { category: "Support", score: "4.4", explanation: "Knowledge base and support tiers. Responsive; enterprise plans get better support options." },
    ],
    pros: [
      "Competitive per-agent pricing and free tier for very small teams",
      "Full ticketing, multi-channel, and automation",
      "Straightforward setup and daily use",
      "Good integrations with CRM and collaboration tools",
    ],
    cons: [
      "Advanced analytics and some features require higher tiers",
      "Smaller ecosystem than Zendesk",
      "Less brand recognition; some teams prefer Zendesk for that reason",
    ],
    bestForEditorial:
      "Freshdesk is best for small and growing support teams that want full helpdesk functionality without paying premium prices. Ideal for SMBs adding agents and channels, teams that compare total cost of ownership, and organizations that value automation and multi-channel support at a lower price point.",
    whoShouldAvoid:
      "Teams that require the largest possible app marketplace or strongest brand recognition may prefer Zendesk. Email-only teams that want the simplest possible tool might choose Help Scout. Ecommerce teams that need deep store integration may look at Gorgias first.",
    pricingSummary:
      "Freshdesk offers a free tier and paid plans starting around $15/agent/month. Higher tiers add more automation, channels, and reporting. Pricing is transparent on Freshdesk’s site; compare tiers for your team size.",
    pricingTiers:
      "Free plan supports a limited number of agents. Growth, Pro, and Enterprise plans add automation, multi-channel, and advanced features. Add-ons available for extra channels and capabilities.",
    costVsCompetitors:
      "Freshdesk is typically cheaper than Zendesk for similar core features. It sits in the same ballpark as Zoho Desk and is more capable than basic shared-inbox tools. Good choice when you want helpdesk depth without premium pricing.",
    features: [
      "Ticket management and workflows",
      "Multi-channel support",
      "Automation and SLA",
      "Knowledge base",
      "Reporting",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Create, assign, and track tickets with statuses and tags. Merge, bulk actions, and custom fields keep the queue organized and contextual." },
      { name: "Automation workflows", description: "Rules and triggers for assignment, prioritization, and notifications. Canned responses and macros speed up replies. SLA policies help meet targets." },
      { name: "Multi-channel support", description: "Unified inbox for email, chat, and social. One view per customer across channels so agents have full context." },
      { name: "Customer history tracking", description: "Customer timeline and profile show past tickets and interactions. Reduces repeat questions and improves resolution time." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, resolution time, and satisfaction. Dashboards and exports for team and SLA review." },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Zapier", "Jira", "Shopify", "Stripe", "Freshworks ecosystem"],
    integrationsIntro:
      "Freshdesk integrates with CRMs, collaboration tools, and ecommerce platforms. The Freshworks ecosystem (CRM, sales) and marketplace extend connectivity for most business stacks.",
    alternatives: [
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Larger ecosystem and brand; better if you prioritize breadth and name.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Zoho Desk", href: getHelpdeskReviewUrl("zoho-desk"), description: "Similar value; strong if you already use Zoho apps.", logoSrc: HELPDESK_LOGOS.zohoDesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), description: "Simpler, email-first; better for minimal channel needs.", logoSrc: HELPDESK_LOGOS.helpScout },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), description: "Messaging-first; better for conversational support.", logoSrc: HELPDESK_LOGOS.intercom },
    ],
    faqs: [
      { q: "Is Freshdesk good for small businesses?", a: "Yes. Freshdesk is one of our top value picks for small businesses. The free tier and low per-agent cost make it easy to start; paid plans scale with your team without a big jump in cost." },
      { q: "How does Freshdesk compare to Zendesk?", a: "Freshdesk offers similar core helpdesk features (ticketing, multi-channel, automation) at lower cost. Zendesk has a larger ecosystem and brand. Choose Freshdesk for value, Zendesk for maximum breadth." },
      { q: "Does Freshdesk have a free plan?", a: "Yes. Freshdesk offers a free plan with a limited number of agents. It’s suitable for very small teams; paid plans add more agents, automation, and channels." },
      { q: "Can Freshdesk integrate with Salesforce?", a: "Yes. Freshdesk integrates with Salesforce, HubSpot, Slack, and many other tools via the marketplace and API." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
      { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  "help-scout": {
    toolName: "Help Scout",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.6",
    startingPrice: "From ~$20/user/mo",
    bestFor: "email-first support teams that want a simple shared inbox and customer context without heavy multi-channel complexity",
    visitUrl: "https://www.helpscout.com",
    logoSrc: HELPDESK_LOGOS.helpScout,
    quickVerdict:
      "Help Scout is our top pick for email-first support: a clean shared inbox, strong customer context, and minimal complexity. Ideal for teams that don’t need many channels and prefer simplicity over feature bloat.",
    quickVerdictParagraphs: [
      "Help Scout is built around the shared inbox. Email is the primary channel; conversations, customer history, and workflows stay simple and focused. There’s no heavy ticket-centric UI or complex routing—just a clear view of conversations and the context agents need to respond well. For teams that live in email and want a tool that gets out of the way, Help Scout is an excellent fit.",
      "Docs and knowledge base are included, and you can add live chat if you need it. Reporting covers the basics: volume, response time, and satisfaction. The product is easy to adopt: most teams are productive within days. Pricing is per user and typically starts around $20/user/month, which is competitive for the simplicity you get.",
      "We recommend Help Scout when email is your main (or only) support channel and you value clarity over channel count. If you later need heavy multi-channel or complex ticketing, you may outgrow it; for many small and mid-size teams, Help Scout remains the right balance of power and simplicity.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Strong shared inbox, customer context, and docs. Live chat available. Less multi-channel depth than Zendesk but sufficient for email-first teams." },
      { category: "Pricing", score: "4.6", explanation: "Clear per-user pricing. Good value for the feature set. No surprise add-ons for core workflow." },
      { category: "Ease of Use", score: "4.8", explanation: "One of the easiest helpdesk tools to learn. Clean interface; minimal training required. Great for small teams." },
      { category: "Integrations", score: "4.4", explanation: "Good integrations with CRM, ecommerce, and collaboration tools. API and Zapier extend connectivity." },
      { category: "Support", score: "4.6", explanation: "Helpful documentation and support. Responsive and friendly. Appropriate for SMB focus." },
    ],
    pros: [
      "Email-first design; minimal learning curve",
      "Shared inbox and customer context in one place",
      "Docs and knowledge base included",
      "Friendly for small teams; no overkill",
    ],
    cons: [
      "Live chat is secondary to email; fewer channels than Zendesk or Freshdesk",
      "May outgrow if you add many channels or complex ticketing",
      "Less automation depth than enterprise helpdesks",
    ],
    bestForEditorial:
      "Help Scout is best for support teams that primarily use email and want a simple, effective shared inbox with customer history and docs. Ideal for small businesses, startups, and teams that prefer a focused tool over a multi-channel suite.",
    whoShouldAvoid:
      "Teams that need heavy live chat, social, or phone support may find Help Scout too limited—Zendesk or Freshdesk offer more channels. Ecommerce teams that need deep order context might prefer Gorgias. Enterprises with complex routing may need a more ticket-centric platform.",
    pricingSummary:
      "Help Scout uses per-user pricing, typically starting around $20/user/month. Plans include mailbox, docs, and reporting. Check Help Scout’s site for current tiers and seat counts.",
    pricingTiers:
      "Standard and Plus plans add seats and features. Docs and basic reporting are included. Live chat and advanced reporting available on higher tiers. No per-agent nickel-and-diming for core workflow.",
    costVsCompetitors:
      "Help Scout is competitively priced for an email-first tool. Often cheaper than Zendesk when you don’t need all channels. Comparable to Front for shared inbox; more support-focused than generic email tools.",
    features: [
      "Shared inbox and conversations",
      "Customer profiles and history",
      "Docs and knowledge base",
      "Reporting",
      "Live chat (optional)",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Conversations are organized in a shared inbox with statuses and assignment. Simple workflow without complex ticket taxonomy; focus on replying and resolving." },
      { name: "Automation workflows", description: "Rules for assignment, tags, and canned replies. Workflows stay lightweight—enough to reduce manual work without overwhelming configuration." },
      { name: "Multi-channel support", description: "Email is primary; live chat and (where configured) other channels appear in the same inbox. One conversation thread per customer." },
      { name: "Customer history tracking", description: "Customer profile and timeline show all past conversations and context. Reduces repeat questions and helps agents personalize responses." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, and satisfaction. Enough for team and SLA review; not as deep as enterprise analytics suites." },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Zapier", "Stripe", "Shopify", "Intercom", "Many apps via API"],
    integrationsIntro:
      "Help Scout connects to CRMs, ecommerce, and collaboration tools so agents have context and data stays in sync. Integrations are focused on what support teams actually use.",
    alternatives: [
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "More channels and automation; better if you’re adding chat and social.", logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Full multi-channel helpdesk; better if you need breadth.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Front", href: getHelpdeskReviewUrl("front"), description: "Shared inbox with strong collaboration; good for internal + external email.", logoSrc: HELPDESK_LOGOS.front },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), description: "Messaging-first; better for in-app and conversational support.", logoSrc: HELPDESK_LOGOS.intercom },
    ],
    faqs: [
      { q: "Is Help Scout good for small businesses?", a: "Yes. Help Scout is one of our top picks for small businesses that do support mainly over email. It’s easy to set up, affordable, and avoids the complexity of large helpdesk suites." },
      { q: "What is the difference between Help Scout and Zendesk?", a: "Help Scout is email-first and simpler; Zendesk is a full multi-channel helpdesk with more features and complexity. Choose Help Scout for simplicity and email focus, Zendesk for many channels and scale." },
      { q: "Does Help Scout have live chat?", a: "Yes. Help Scout offers live chat that appears alongside email in the same inbox. It’s not as central as in Intercom or Zendesk but is sufficient for many teams." },
      { q: "Can Help Scout integrate with Shopify?", a: "Yes. Help Scout integrates with Shopify and other ecommerce platforms via Zapier and the API. For deep ecommerce context (orders, returns), Gorgias may offer more." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
      { label: "Help Scout vs Freshdesk", href: getHelpdeskCompareUrl("help-scout-vs-freshdesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  intercom: {
    toolName: "Intercom",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.4",
    startingPrice: "From ~$39/mo",
    bestFor: "teams that want messaging-first support with live chat, bots, and in-app conversations",
    visitUrl: "https://www.intercom.com",
    logoSrc: HELPDESK_LOGOS.intercom,
    quickVerdict:
      "Intercom is the leading choice for messaging-first support: live chat, bots, and help content in one conversational experience. Best when support is part of the product experience, not just email tickets.",
    quickVerdictParagraphs: [
      "Intercom puts conversations at the center. Instead of a traditional ticket queue, you get a messaging-style inbox where chat, in-app messages, and email (and optionally help center) live together. Bots can qualify and deflect common questions; humans take over when needed. For product-led companies and teams that want support to feel like a conversation rather than a ticket, Intercom is the standout.",
      "Pricing is often based on seats and/or tracked users, and can scale with contact volume. The product is powerful but can be more expensive than traditional helpdesks for high-conversation volumes. We recommend Intercom when messaging and in-app support are strategic, and when you’re willing to invest in the platform and possibly bots.",
      "If you need a classic ticket-centric helpdesk with email at the core, Zendesk or Help Scout may fit better. If you want one place for product messaging and support and value the conversational UX, Intercom is the default choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.6", explanation: "Strong messaging, bots, and help center. Conversational UX. Less ticket-centric than Zendesk; different paradigm." },
      { category: "Pricing", score: "4.2", explanation: "Pricing can scale with contacts and seats. Higher cost at volume than many traditional helpdesks. Clear tiers but watch usage." },
      { category: "Ease of Use", score: "4.5", explanation: "Modern, intuitive interface. Bots require setup but are manageable. Good for teams that want a conversational feel." },
      { category: "Integrations", score: "4.6", explanation: "Strong product and CRM integrations. Slack, Salesforce, HubSpot, and many product tools. API for custom use." },
      { category: "Support", score: "4.4", explanation: "Good documentation and support. Responsive. Appropriate for product and support teams." },
    ],
    pros: [
      "Messaging and chat at the center; modern conversational UX",
      "Bots and automation for qualification and deflection",
      "Unified inbox for multiple channels",
      "Strong for product-led and SaaS support",
    ],
    cons: [
      "Pricing can scale quickly with contacts and usage",
      "Less ticket-centric; may not fit traditional helpdesk workflows",
      "Can be more than needed for email-only teams",
    ],
    bestForEditorial:
      "Intercom is best for teams that want messaging-first support—live chat, in-app messages, and bots—as part of the product experience. Ideal for SaaS companies, product-led businesses, and support teams that prefer conversations over tickets.",
    whoShouldAvoid:
      "Teams that primarily handle email and want a simple ticket queue may find Intercom’s model and pricing a poor fit—consider Help Scout or Zendesk. Budget-conscious teams may prefer Freshdesk or Zoho Desk. Ecommerce-only support may get more from Gorgias.",
    pricingSummary:
      "Intercom pricing typically starts around $39/month and scales with seats and/or contacts. Messaging, bots, and help center are tiered. Check Intercom’s pricing page for current plans and usage-based components.",
    pricingTiers:
      "Multiple plans for Support, Marketing, and Engagement. Support-focused plans include inbox, bots, and help center. Higher tiers add more automation and capacity. Usage can affect cost.",
    costVsCompetitors:
      "Intercom is typically more expensive than traditional per-agent helpdesks when conversation volume is high. You pay for the messaging paradigm and product integration. Zendesk and Freshdesk are cheaper for ticket-centric, high-volume email support.",
    features: [
      "Messaging and live chat",
      "Bots and automation",
      "Help center and articles",
      "Unified inbox",
      "Product tours and messaging",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Conversations are managed in a messaging-style inbox. Threads can be assigned and tagged; workflow is conversation-centric rather than ticket-centric." },
      { name: "Automation workflows", description: "Bots handle qualification, deflection, and routing. Workflows automate follow-up and handoff to humans. Flexible but requires configuration." },
      { name: "Multi-channel support", description: "Chat, in-app messages, email, and help center in one place. One customer view across channels." },
      { name: "Customer history tracking", description: "Full conversation and product usage context. Helps agents and bots personalize and resolve faster." },
      { name: "Reporting and analytics", description: "Conversation volume, response time, resolution, and satisfaction. Dashboards for support and product teams." },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Zapier", "Stripe", "Segment", "Many product and CRM tools"],
    integrationsIntro:
      "Intercom integrates deeply with product and CRM stacks. Connect to your app, analytics, and support tools so conversations have full context.",
    alternatives: [
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Ticket-centric helpdesk; better for traditional email/chat queues.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Gorgias", href: getHelpdeskReviewUrl("gorgias"), description: "Ecommerce-focused; deep store integration.", logoSrc: HELPDESK_LOGOS.gorgias },
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Traditional helpdesk at lower cost; good value.", logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), description: "Email-first and simpler; lower cost for email-only.", logoSrc: HELPDESK_LOGOS.helpScout },
    ],
    faqs: [
      { q: "Is Intercom good for customer support?", a: "Yes. Intercom is built for customer support with a messaging-first approach. It’s especially strong when you want chat, in-app messages, and bots as part of the experience." },
      { q: "What is the difference between Intercom and Zendesk?", a: "Intercom is messaging- and conversation-centric; Zendesk is ticket-centric and multi-channel. Choose Intercom for conversational UX and product integration, Zendesk for classic helpdesk workflows." },
      { q: "How much does Intercom cost?", a: "Intercom typically starts around $39/month. Cost scales with seats and often with tracked users or conversations. Check Intercom’s pricing for your use case." },
      { q: "Does Intercom integrate with Salesforce?", a: "Yes. Intercom integrates with Salesforce, HubSpot, Slack, and many other CRMs and tools. API and Segment support for custom stacks." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
      { label: "Intercom vs Freshdesk", href: getHelpdeskCompareUrl("intercom-vs-freshdesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  "zoho-desk": {
    toolName: "Zoho Desk",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.4",
    startingPrice: "From ~$14/agent/mo",
    bestFor: "teams already using Zoho apps that want affordable ticketing and multi-channel support in the same ecosystem",
    visitUrl: "https://www.zoho.com/desk",
    logoSrc: HELPDESK_LOGOS.zohoDesk,
    quickVerdict:
      "Zoho Desk delivers solid helpdesk features—ticketing, multi-channel, automation—at competitive pricing, with strong integration across the Zoho suite. A top value pick for SMBs in the Zoho ecosystem.",
    quickVerdictParagraphs: [
      "Zoho Desk is the helpdesk arm of the Zoho suite. You get ticket management, email and chat, social channels, a knowledge base, and automation at a per-agent price that often undercuts Zendesk and competes with Freshdesk. If you already use Zoho CRM, Mail, or other Zoho apps, Desk fits naturally: shared contacts, single sign-on, and a consistent look and feel. For small and mid-size teams that want a real helpdesk without premium pricing, Zoho Desk is a strong option.",
      "The product is capable and updated regularly. Reporting and automation are sufficient for most SMBs. The main limitations are a smaller third-party ecosystem than Zendesk and less brand recognition. For teams that don’t need the largest app marketplace and are happy in Zoho, those trade-offs are acceptable.",
      "We recommend Zoho Desk when value and Zoho ecosystem fit matter. It’s a good alternative to Freshdesk when you’re already on Zoho, and a cheaper alternative to Zendesk when you don’t need the widest possible integration set.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Good ticketing, multi-channel, and automation. Solid for SMBs. Zoho ecosystem integration is a plus." },
      { category: "Pricing", score: "4.7", explanation: "Low per-agent cost. Free tier available. Transparent pricing and good value." },
      { category: "Ease of Use", score: "4.4", explanation: "Familiar if you use other Zoho apps. Interface is clear. Slight learning curve for net-new users." },
      { category: "Integrations", score: "4.5", explanation: "Strong Zoho suite integration. Good third-party coverage via marketplace and API." },
      { category: "Support", score: "4.3", explanation: "Documentation and support are adequate. Community and knowledge base help. Enterprise gets better support." },
    ],
    pros: [
      "Affordable per-agent pricing and free tier",
      "Fits naturally with Zoho CRM, Mail, and other Zoho apps",
      "Full ticketing, multi-channel, and automation",
      "Regular updates and solid SMB feature set",
    ],
    cons: [
      "Smaller app ecosystem than Zendesk",
      "Less brand recognition; some teams prefer Zendesk or Freshdesk",
      "UI can feel busy compared to simpler tools like Help Scout",
    ],
    bestForEditorial:
      "Zoho Desk is best for small and mid-size support teams that want capable helpdesk software at low cost, especially when already using Zoho. Ideal for SMBs that value the Zoho ecosystem and per-agent affordability.",
    whoShouldAvoid:
      "Teams that need the largest possible app marketplace may prefer Zendesk. Those that want the simplest email-focused tool might choose Help Scout. Non-Zoho users may find Freshdesk equally affordable with a broader third-party ecosystem.",
    pricingSummary:
      "Zoho Desk offers a free tier and paid plans starting around $14/agent/month. Higher tiers add more automation, channels, and reporting. Pricing is on Zoho’s site; compare for your team size.",
    pricingTiers:
      "Free, Standard, Professional, and Enterprise plans. Free supports limited agents; paid plans add automation, multi-channel, and advanced features. Zoho suite bundles can reduce effective cost.",
    costVsCompetitors:
      "Zoho Desk is among the lowest-cost full helpdesks. Comparable to Freshdesk for value; cheaper than Zendesk. Best when you value Zoho ecosystem integration.",
    features: [
      "Ticket management",
      "Multi-channel support",
      "Automation and SLA",
      "Knowledge base",
      "Zoho ecosystem integration",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Create, assign, and track tickets with statuses and custom fields. Merge, bulk actions, and workflows keep the queue organized." },
      { name: "Automation workflows", description: "Rules for assignment, escalation, and notifications. Canned responses and macros. SLA policies for response and resolution targets." },
      { name: "Multi-channel support", description: "Unified inbox for email, chat, and social. One customer view across channels." },
      { name: "Customer history tracking", description: "Customer timeline and profile; integration with Zoho CRM for full context when using the suite." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, resolution, and satisfaction. Dashboards and exports for team review." },
    ],
    integrations: ["Zoho CRM", "Zoho Mail", "Slack", "Salesforce", "HubSpot", "Zapier", "Shopify", "Zoho ecosystem"],
    integrationsIntro:
      "Zoho Desk integrates tightly with other Zoho apps and offers good connectivity to CRMs and collaboration tools. The Zoho ecosystem is a major advantage for existing Zoho users.",
    alternatives: [
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Similar value; broader third-party ecosystem.", logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Larger ecosystem and brand; higher cost.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), description: "Simpler, email-first; different workflow.", logoSrc: HELPDESK_LOGOS.helpScout },
    ],
    faqs: [
      { q: "Is Zoho Desk good for small businesses?", a: "Yes. Zoho Desk is a strong value pick for small businesses. The free tier and low per-agent cost make it easy to start; it fits especially well if you already use Zoho." },
      { q: "How does Zoho Desk compare to Freshdesk?", a: "Both offer good value. Zoho Desk has stronger Zoho ecosystem integration; Freshdesk has a broader third-party app set. Choose based on whether you’re in the Zoho world or not." },
      { q: "Does Zoho Desk integrate with Zoho CRM?", a: "Yes. Zoho Desk integrates natively with Zoho CRM and other Zoho apps. Contacts and context can be shared across the suite." },
      { q: "Is there a free version of Zoho Desk?", a: "Yes. Zoho Desk offers a free plan with a limited number of agents. Paid plans add more agents and features." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
      { label: "Zendesk vs Zoho Desk", href: getHelpdeskCompareUrl("zendesk-vs-zoho-desk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  gorgias: {
    toolName: "Gorgias",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.5",
    startingPrice: "From ~$60/mo",
    bestFor: "ecommerce support teams that need deep Shopify and Magento integration and order-level context",
    visitUrl: "https://www.gorgias.com",
    logoSrc: HELPDESK_LOGOS.gorgias,
    quickVerdict:
      "Gorgias is the helpdesk built for ecommerce: deep integration with Shopify and Magento, order and customer context in the ticket, and macros built for returns, orders, and store operations. The top pick for support teams that live in the store.",
    quickVerdictParagraphs: [
      "Gorgias is designed so support agents work in one place with full access to orders, returns, and customer data from the store. Tickets open with order history, cart, and customer profile visible; macros can look up orders, process refunds, or trigger store actions. For ecommerce brands that handle a lot of order-related support, Gorgias removes the need to switch between helpdesk and store admin.",
      "Pricing is typically based on ticket volume and/or seats, and can be higher than generic helpdesks at scale. The product is focused: if you’re not running an online store, a general-purpose tool like Zendesk or Freshdesk may be a better fit. For Shopify and Magento shops that want support tightly coupled to the store, Gorgias is the default choice.",
      "We recommend Gorgias when ecommerce support is central to your operations and you want order context, macros, and store integrations out of the box. For mixed or non-ecommerce support, compare with Zendesk or Freshdesk.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.6", explanation: "Excellent ecommerce-specific features: order context, macros, store integration. Solid ticketing and multi-channel for store support." },
      { category: "Pricing", score: "4.2", explanation: "Pricing scales with volume and seats. Can be higher than generic helpdesks. Value is in ecommerce depth." },
      { category: "Ease of Use", score: "4.5", explanation: "Straightforward for ecommerce teams. Macros and order lookup are intuitive. Some setup for advanced automation." },
      { category: "Integrations", score: "4.8", explanation: "Deep Shopify and Magento integration. Good coverage for payments, loyalty, and CRM. Built for ecommerce stacks." },
      { category: "Support", score: "4.4", explanation: "Good documentation and support. Ecommerce-focused. Responsive for store-related questions." },
    ],
    pros: [
      "Deep Shopify and Magento integration; order and customer context in tickets",
      "Macros and automation for orders, returns, and store operations",
      "Built for ecommerce support volume and workflows",
      "Reduces context-switching between helpdesk and store",
    ],
    cons: [
      "Focused on ecommerce; less ideal for non-store support",
      "Pricing can be high at volume compared to generic helpdesks",
      "Overkill if you don’t need order-level integration",
    ],
    bestForEditorial:
      "Gorgias is best for ecommerce support teams that want helpdesk and store data in one place. Ideal for Shopify and Magento stores with meaningful support volume, teams that handle orders and returns daily, and brands that want macros and automation built for ecommerce.",
    whoShouldAvoid:
      "Teams that don’t run an ecommerce store or don’t need deep order context will get more value from a general helpdesk like Zendesk or Freshdesk. Email-only or non-store support doesn’t need Gorgias’s ecommerce focus.",
    pricingSummary:
      "Gorgias typically starts around $60/month and scales with ticket volume and/or seats. Ecommerce-specific features are core. Check Gorgias’s pricing for your store and volume.",
    pricingTiers:
      "Tiers are based on ticket volume and features. Higher plans add more macros, automation, and integrations. Custom pricing for high-volume stores.",
    costVsCompetitors:
      "Gorgias is more expensive than generic helpdesks for the same seat count but delivers ecommerce-specific value. For store-centric support, the ROI is in time saved and better customer context. Compare to Zendesk + Shopify app if you need both generic helpdesk and store integration.",
    features: [
      "Ecommerce ticketing with order context",
      "Shopify and Magento integration",
      "Macros for orders and returns",
      "Multi-channel inbox",
      "Reporting",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Tickets show order history, cart, and customer profile. Create and assign with full store context. Merge and bulk actions for efficiency." },
      { name: "Automation workflows", description: "Macros for order lookup, refunds, and store actions. Rules for routing and tagging. Built for ecommerce support patterns." },
      { name: "Multi-channel support", description: "Unified inbox for email, chat, and social. All channels see the same order and customer context." },
      { name: "Customer history tracking", description: "Full order and interaction history from the store. No need to open store admin for routine support." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, and ecommerce-specific metrics. Understand support impact on orders and satisfaction." },
    ],
    integrations: ["Shopify", "Magento", "Salesforce", "HubSpot", "Slack", "Zapier", "Stripe", "Loyalty and review apps"],
    integrationsIntro:
      "Gorgias is built for ecommerce stacks. Native Shopify and Magento integration is the focus; CRM and collaboration tools connect so support has full context.",
    alternatives: [
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "General helpdesk with Shopify app; less ecommerce-native than Gorgias.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Generic helpdesk at lower cost; add ecommerce via integrations.", logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), description: "Messaging-first; good for in-app support, less order-centric.", logoSrc: HELPDESK_LOGOS.intercom },
    ],
    faqs: [
      { q: "Is Gorgias good for Shopify?", a: "Yes. Gorgias is built for Shopify (and Magento). You get order context, macros, and store integration that generic helpdesks don’t offer natively." },
      { q: "How does Gorgias compare to Zendesk for ecommerce?", a: "Gorgias is purpose-built for ecommerce with order and store context in the ticket. Zendesk can connect to Shopify via app but is a general helpdesk. For store-centric support, Gorgias usually wins." },
      { q: "How much does Gorgias cost?", a: "Gorgias typically starts around $60/month and scales with ticket volume and seats. Check Gorgias’s pricing page for your store size." },
      { q: "Does Gorgias work with Magento?", a: "Yes. Gorgias supports both Shopify and Magento with deep integration for orders, customers, and store actions." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
      { label: "Gorgias vs Freshdesk", href: getHelpdeskCompareUrl("gorgias-vs-freshdesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  liveagent: {
    toolName: "LiveAgent",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.3",
    startingPrice: "From ~$15/agent/mo",
    bestFor: "teams that prioritize live chat and omnichannel support with strong real-time capabilities",
    visitUrl: "https://www.liveagent.com",
    logoSrc: HELPDESK_LOGOS.liveAgent,
    quickVerdict:
      "LiveAgent offers omnichannel helpdesk with a focus on live chat and real-time support. Good per-agent pricing and a solid feature set for teams that want chat at the center.",
    quickVerdictParagraphs: [
      "LiveAgent combines ticketing, live chat, and (on higher tiers) voice in one platform. Chat is a first-class channel: proactive chat, chat widgets, and routing are built in. Pricing starts around $15/agent/month, which is competitive. For teams that handle a lot of live chat and want a unified inbox with email and social, LiveAgent is a strong option.",
      "The product is capable and regularly updated. Reporting and automation are sufficient for most SMBs. The main trade-off is less brand recognition than Zendesk or Intercom and a smaller ecosystem. For teams that prioritize chat and value over brand, LiveAgent deserves a look.",
      "We recommend LiveAgent when live chat volume is significant and you want omnichannel without paying Zendesk or Intercom premiums. It fits SMBs that need chat, email, and possibly social in one place.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Strong live chat and omnichannel. Good ticketing and automation. Contact center features on higher tiers." },
      { category: "Pricing", score: "4.5", explanation: "Competitive per-agent pricing. Transparent tiers. Good value for the feature set." },
      { category: "Ease of Use", score: "4.3", explanation: "Interface is clear. Chat-focused workflow. Some learning curve for full feature set." },
      { category: "Integrations", score: "4.3", explanation: "Good integrations for CRM, ecommerce, and collaboration. Marketplace extends options." },
      { category: "Support", score: "4.2", explanation: "Documentation and support are adequate. Community helps. Enterprise options available." },
    ],
    pros: [
      "Live chat and omnichannel at competitive pricing",
      "Unified inbox for chat, email, and social",
      "Good per-agent value",
      "Regular updates and solid SMB feature set",
    ],
    cons: [
      "Less brand recognition than Zendesk or Intercom",
      "Smaller app ecosystem",
      "Some advanced features on higher tiers only",
    ],
    bestForEditorial:
      "LiveAgent is best for support teams that prioritize live chat and want omnichannel (chat, email, social) at a lower cost than Zendesk or Intercom. Ideal for SMBs with meaningful chat volume.",
    whoShouldAvoid:
      "Teams that need the largest app marketplace may prefer Zendesk. Email-only teams might find Help Scout simpler. Product-led teams that want messaging-first may prefer Intercom.",
    pricingSummary:
      "LiveAgent typically starts around $15/agent/month. Higher tiers add more channels and features. Check LiveAgent’s site for current plans.",
    pricingTiers:
      "Tiered plans add agents, channels, and features. Chat is included from entry tier. Voice and advanced contact center on higher plans.",
    costVsCompetitors:
      "LiveAgent is often cheaper than Zendesk and Intercom for comparable chat and omnichannel. Good value for chat-heavy teams.",
    features: [
      "Live chat and omnichannel",
      "Ticket management",
      "Automation and routing",
      "Reporting",
      "Knowledge base",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Create and manage tickets with assignment and status. Unified with chat and other channels in one inbox." },
      { name: "Automation workflows", description: "Rules for routing and assignment. Canned responses and macros. SLA and escalation options." },
      { name: "Multi-channel support", description: "Chat, email, and social in one place. Real-time chat is a strength; other channels supported." },
      { name: "Customer history tracking", description: "Customer timeline and context across conversations. Helps agents resolve faster." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, and satisfaction. Dashboards for team and SLA monitoring." },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Zapier", "Shopify", "WordPress", "Jira"],
    integrationsIntro:
      "LiveAgent integrates with CRMs, ecommerce, and collaboration tools. API and marketplace extend connectivity for most business needs.",
    alternatives: [
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Larger ecosystem; higher cost. Better if brand and app count matter.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Intercom", href: getHelpdeskReviewUrl("intercom"), description: "Messaging-first and product-focused. Different UX.", logoSrc: HELPDESK_LOGOS.intercom },
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Similar value; strong ticketing and multi-channel.", logoSrc: HELPDESK_LOGOS.freshdesk },
    ],
    faqs: [
      { q: "Is LiveAgent good for live chat?", a: "Yes. LiveAgent is built with live chat as a core channel. You get chat widgets, routing, and omnichannel at competitive pricing." },
      { q: "How much does LiveAgent cost?", a: "LiveAgent typically starts around $15/agent/month. Plans scale with agents and features. Check the vendor’s site for current pricing." },
      { q: "Does LiveAgent integrate with Salesforce?", a: "Yes. LiveAgent offers integrations with Salesforce, HubSpot, and other CRMs, plus Slack and ecommerce platforms." },
      { q: "What is the difference between LiveAgent and Zendesk?", a: "LiveAgent focuses on chat and omnichannel at lower cost; Zendesk has a larger brand and ecosystem. Choose LiveAgent for value, Zendesk for maximum breadth." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "LiveAgent vs Zendesk", href: getHelpdeskCompareUrl("liveagent-vs-zendesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  kayako: {
    toolName: "Kayako",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.2",
    startingPrice: "From ~$15/agent/mo",
    bestFor: "teams that want unified conversations and customer history across channels without the complexity of large enterprise helpdesks",
    visitUrl: "https://www.kayako.com",
    logoSrc: HELPDESK_LOGOS.kayako,
    quickVerdict:
      "Kayako offers a unified support platform with conversation history, multi-channel inbox, and self-service. Solid for teams that want one view of the customer at a reasonable price.",
    quickVerdictParagraphs: [
      "Kayako focuses on bringing all customer conversations—email, chat, social—into one place with a clear timeline and customer profile. Agents see full history so they can resolve issues without asking customers to repeat themselves. The product is straightforward and priced competitively, often around $15/agent/month. For teams that want unified context and a simpler setup than Zendesk, Kayako is a good fit.",
      "Reporting and automation are adequate for SMBs. Integrations cover major CRMs and tools. The main limitations are a smaller ecosystem than Zendesk and less name recognition. For value-focused teams that don’t need the largest marketplace, Kayako is worth considering.",
      "We recommend Kayako when you want one customer view and multi-channel support without enterprise complexity or cost. It sits between simple shared-inbox tools and full enterprise helpdesks.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Unified conversations and history. Good multi-channel inbox. Solid SMB set; less depth than Zendesk." },
      { category: "Pricing", score: "4.5", explanation: "Competitive per-agent pricing. Transparent tiers. Good value." },
      { category: "Ease of Use", score: "4.3", explanation: "Clear interface and customer timeline. Easier than heavy enterprise tools. Some setup for automation." },
      { category: "Integrations", score: "4.2", explanation: "Good coverage for CRM and collaboration. Fewer apps than Zendesk but sufficient for many stacks." },
      { category: "Support", score: "4.1", explanation: "Documentation and support are adequate. Smaller vendor; support quality can vary." },
    ],
    pros: [
      "Unified customer timeline and conversation history",
      "Multi-channel inbox in one place",
      "Competitive pricing",
      "Simpler than enterprise helpdesks",
    ],
    cons: [
      "Smaller ecosystem than Zendesk or Freshdesk",
      "Less brand recognition",
      "Some advanced features not as deep as competitors",
    ],
    bestForEditorial:
      "Kayako is best for support teams that want unified customer context and multi-channel support without the cost or complexity of large enterprise platforms. Ideal for SMBs that value conversation history and one-view-of-customer.",
    whoShouldAvoid:
      "Teams that need the largest app marketplace may prefer Zendesk. Those that want the simplest email tool might choose Help Scout. Ecommerce teams needing deep store integration may prefer Gorgias.",
    pricingSummary:
      "Kayako typically starts around $15/agent/month. Plans add agents and features. Check Kayako’s site for current pricing.",
    pricingTiers:
      "Tiered plans with increasing features. Unified inbox and customer history are core. Higher tiers add more automation and reporting.",
    costVsCompetitors:
      "Kayako is competitively priced with LiveAgent and lower-tier Freshdesk. Cheaper than Zendesk for similar core capabilities. Good value for unified-conversation focus.",
    features: [
      "Unified conversations",
      "Multi-channel inbox",
      "Customer history and timeline",
      "Self-service and knowledge base",
      "Reporting",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Conversations are tracked as tickets with status and assignment. Unified with all channels in one inbox." },
      { name: "Automation workflows", description: "Rules for assignment and routing. Canned responses. Basic automation; less complex than Zendesk." },
      { name: "Multi-channel support", description: "Email, chat, and social in one place. One timeline per customer across channels." },
      { name: "Customer history tracking", description: "Full conversation history and customer profile. Central strength of the product; reduces repeat questions." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, and resolution. Dashboards for team performance." },
    ],
    integrations: ["Slack", "Salesforce", "Zapier", "Jira", "WordPress", "API for custom"],
    integrationsIntro:
      "Kayako integrates with common CRMs and collaboration tools. API allows custom integrations. Ecosystem is smaller than Zendesk but sufficient for many SMBs.",
    alternatives: [
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Larger ecosystem and more features; higher cost.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Similar value; broader third-party set.", logoSrc: HELPDESK_LOGOS.freshdesk },
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), description: "Simpler, email-first; different workflow.", logoSrc: HELPDESK_LOGOS.helpScout },
    ],
    faqs: [
      { q: "Is Kayako good for small businesses?", a: "Yes. Kayako is a solid option for small businesses that want unified customer history and multi-channel support at competitive pricing." },
      { q: "How does Kayako compare to Zendesk?", a: "Kayako offers unified conversations and history at lower cost; Zendesk has more features and a larger ecosystem. Choose Kayako for value and simplicity, Zendesk for breadth." },
      { q: "Does Kayako have live chat?", a: "Yes. Kayako includes live chat as part of the unified inbox. All channels appear in one customer timeline." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Kayako vs Zendesk", href: getHelpdeskCompareUrl("kayako-vs-zendesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },

  front: {
    toolName: "Front",
    category: HELPDESK_CATEGORY,
    categoryHref: HELPDESK_CATEGORY_HREF,
    rating: "4.5",
    startingPrice: "From ~$19/user/mo",
    bestFor: "teams that want a shared inbox with strong collaboration, internal discussion, and external customer communication in one place",
    visitUrl: "https://www.front.com",
    logoSrc: HELPDESK_LOGOS.front,
    quickVerdict:
      "Front is a shared inbox and collaboration platform that excels at internal discussion around customer messages. Strong for teams that want to work together on email and chat without losing context.",
    quickVerdictParagraphs: [
      "Front combines a shared inbox with strong collaboration: internal comments, @mentions, and assignment keep teams aligned on customer conversations. Email, chat, and (where configured) other channels live in one place. The product is popular with customer-facing teams that need both external communication and internal coordination. Pricing is per user and typically starts around $19/user/month.",
      "Front is less ticket-centric than Zendesk or Freshdesk. It’s optimized for conversation and collaboration rather than heavy ticketing and SLA workflows. For support teams that want a modern shared inbox with great internal collaboration, Front is a top choice. For classic helpdesk with deep automation and reporting, Zendesk or Freshdesk may fit better.",
      "We recommend Front when collaboration around customer messages is a priority and you prefer a conversation-centric model. It fits sales and support teams that use email and chat and want visibility and discussion in one tool.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Strong shared inbox and collaboration. Good for internal discussion and assignment. Less ticket/SLA depth than Zendesk." },
      { category: "Pricing", score: "4.4", explanation: "Per-user pricing is clear. Mid-range for shared inbox tools. Good value for collaboration focus." },
      { category: "Ease of Use", score: "4.6", explanation: "Modern, intuitive interface. Collaboration features are easy to adopt. Minimal training needed." },
      { category: "Integrations", score: "4.5", explanation: "Good integrations with CRM, calendar, and productivity tools. API for custom use." },
      { category: "Support", score: "4.4", explanation: "Good documentation and support. Responsive. Appropriate for SMB and mid-market." },
    ],
    pros: [
      "Shared inbox with strong internal collaboration (comments, @mentions)",
      "Unified email and chat in one place",
      "Modern interface; easy for teams to adopt",
      "Good for sales and support collaboration",
    ],
    cons: [
      "Less ticket-centric and fewer SLA/automation features than Zendesk",
      "Not built for heavy helpdesk workflows",
      "Pricing can add up for large teams",
    ],
    bestForEditorial:
      "Front is best for teams that want a shared inbox with excellent internal collaboration—internal comments, assignment, and visibility around customer email and chat. Ideal for support and sales teams that work together on customer conversations.",
    whoShouldAvoid:
      "Teams that need deep ticketing, SLA management, and helpdesk-specific automation may prefer Zendesk or Freshdesk. Ecommerce teams that need order context might prefer Gorgias. Email-only teams that want the simplest tool might choose Help Scout.",
    pricingSummary:
      "Front uses per-user pricing, typically starting around $19/user/month. Plans add features and capacity. Check Front’s site for current tiers.",
    pricingTiers:
      "Tiered plans add users and features. Collaboration and shared inbox are core. Higher tiers add more channels and admin controls.",
    costVsCompetitors:
      "Front is in the same ballpark as Help Scout for shared inbox; more collaboration-focused. Cheaper than full Zendesk for teams that don’t need full helpdesk depth.",
    features: [
      "Shared inbox",
      "Internal collaboration and comments",
      "Email and chat",
      "Assignment and routing",
      "Integrations",
    ],
    keyFeatures: [
      { name: "Ticket management", description: "Conversations are organized in a shared inbox with assignment and status. Focus on collaboration rather than heavy ticket taxonomy." },
      { name: "Automation workflows", description: "Rules for assignment, routing, and templates. Lighter than enterprise helpdesks but sufficient for many teams." },
      { name: "Multi-channel support", description: "Email and chat in one inbox. Additional channels on higher tiers. One view per customer." },
      { name: "Customer history tracking", description: "Conversation history and context. Internal comments stay attached so full context is visible." },
      { name: "Reporting and analytics", description: "Reports on volume, response time, and team activity. Dashboards for collaboration and workload." },
    ],
    integrations: ["Slack", "Salesforce", "HubSpot", "Zapier", "Gmail", "Outlook", "Calendar", "Many productivity tools"],
    integrationsIntro:
      "Front integrates with CRMs, email, calendar, and collaboration tools. Fits teams that already use Salesforce, HubSpot, or Slack and want the inbox to connect.",
    alternatives: [
      { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout"), description: "Email-first helpdesk; simpler, more support-focused.", logoSrc: HELPDESK_LOGOS.helpScout },
      { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk"), description: "Full helpdesk with more ticketing and automation.", logoSrc: HELPDESK_LOGOS.zendesk },
      { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk"), description: "Helpdesk at lower cost; more ticket-centric.", logoSrc: HELPDESK_LOGOS.freshdesk },
    ],
    faqs: [
      { q: "Is Front good for customer support?", a: "Yes. Front is used by many support and sales teams for shared inbox and collaboration. It’s stronger on collaboration than on deep helpdesk ticketing." },
      { q: "What is the difference between Front and Help Scout?", a: "Front emphasizes internal collaboration (comments, @mentions) around customer messages; Help Scout is more support-workflow focused. Both are shared inbox tools; choose by whether collaboration or support depth matters more." },
      { q: "Does Front integrate with Salesforce?", a: "Yes. Front integrates with Salesforce, HubSpot, Gmail, Outlook, and many other tools. API available for custom integrations." },
      { q: "How much does Front cost?", a: "Front typically starts around $19/user/month. Plans scale with users and features. Check Front’s pricing page for current tiers." },
    ],
    methodology: HELPDESK_METHODOLOGY,
    compareLinks: [
      { label: "Front vs Help Scout", href: getHelpdeskCompareUrl("front-vs-help-scout") },
      { label: "Front vs Zendesk", href: getHelpdeskCompareUrl("front-vs-zendesk") },
    ],
    compareSectionTitle: "Compare with other helpdesk software",
    bestPayrollSoftwareHref: BEST_HELPDESK_SOFTWARE_HREF,
    compareHubHref: HELPDESK_COMPARE_HUB,
    compareHubLabel: "Compare helpdesk software",
    bestRoundupLabel: "Best helpdesk software (2026) — full roundup",
    bestForSectionTitle: "Best helpdesk software for different use cases",
    bestForSectionSub: "Find helpdesk software by scenario.",
    scenarioLinks: HELPDESK_SCENARIO_LINKS,
    guideHubHref: HELPDESK_GUIDES_HUB,
    guideHubLabel: "Helpdesk guides",
  },
};

export function getHelpdeskReviewBySlug(slug: string): HelpdeskReviewData | null {
  return reviews[slug] ?? null;
}

export function getHelpdeskReviewSlugs(): string[] {
  return Object.keys(reviews);
}
