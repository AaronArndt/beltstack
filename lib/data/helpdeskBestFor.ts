/**
 * Helpdesk best-for page data.
 * Used by app/helpdesk/best-for/[scenario]/page.tsx via BestForTemplate.
 */

import { getHelpdeskReviewUrl, getHelpdeskCompareUrl } from "@/lib/routes";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskHubData";
import type {
  BestForTemplateProps,
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForGuideLink,
  BestForFaqItem,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/helpdesk", label: "Helpdesk" };
const SEE_ALSO = {
  roundupLabel: "best helpdesk software",
  roundupHref: "/helpdesk/best-helpdesk-software",
  compareLabel: "helpdesk software comparisons",
  compareHref: "/helpdesk/compare",
};

const LOGOS = { ...HELPDESK_LOGOS };

// ——— Small business ———

export const SMALL_BUSINESS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Helpdesk Software for Small Businesses (2026)",
  subtitle:
    "Compare helpdesk tools built for small businesses: simple ticketing, affordable pricing, and collaboration without enterprise complexity.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses often outgrow a single email inbox or contact form. Support requests get lost, replies are inconsistent, and there's no clear view of who's handling what. Helpdesk software centralizes customer conversations, adds ticketing and assignment, and supports simple automation and team collaboration—so small teams can respond faster and keep customers informed without a big budget or long setup.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top helpdesk picks for small businesses.",
  editorialSub: "What to look for when you're choosing helpdesk software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshdesk",
      name: "Freshdesk",
      badge: "Best value for small business",
      description:
        "Full helpdesk with ticketing, automation, and multi-channel support at a lower cost. Free tier available for very small teams.",
      rating: "4.5",
      startingPrice: "From ~$15/agent/mo",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
      visitUrl: "https://www.freshdesk.com",
      logoSrc: LOGOS.freshdesk,
    },
    {
      slug: "help-scout",
      name: "Help Scout",
      badge: "Best for email-first teams",
      description:
        "Shared inbox and helpdesk built around email. Simple workflow, customer context, and easy adoption for small teams.",
      rating: "4.6",
      startingPrice: "From ~$20/user/mo",
      reviewHref: getHelpdeskReviewUrl("help-scout"),
      visitUrl: "https://www.helpscout.com",
      logoSrc: LOGOS.helpScout,
    },
    {
      slug: "zoho-desk",
      name: "Zoho Desk",
      badge: "Best low-cost option",
      description:
        "Affordable ticketing and multi-channel support with a free tier. Fits small teams that want helpdesk features without high cost.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getHelpdeskReviewUrl("zoho-desk"),
      visitUrl: "https://www.zoho.com/desk",
      logoSrc: LOGOS.zohoDesk,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "freshdesk",
      name: "Freshdesk",
      logoSrc: LOGOS.freshdesk,
      bestFor: "Best value for small business",
      startingPrice: "From ~$15/agent/mo",
      standoutFeature: "Full helpdesk, free tier",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
    },
    {
      slug: "help-scout",
      name: "Help Scout",
      logoSrc: LOGOS.helpScout,
      bestFor: "Email-first, simple workflow",
      startingPrice: "From ~$20/user/mo",
      standoutFeature: "Shared inbox, ease of use",
      reviewHref: getHelpdeskReviewUrl("help-scout"),
    },
    {
      slug: "zoho-desk",
      name: "Zoho Desk",
      logoSrc: LOGOS.zohoDesk,
      bestFor: "Low cost, Zoho ecosystem",
      startingPrice: "Free tier",
      standoutFeature: "Affordable, multi-channel",
      reviewHref: getHelpdeskReviewUrl("zoho-desk"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Team size and ticket volume",
      body: "Small businesses typically have a handful of agents and moderate volume. Choose a helpdesk that scales pricing by agent or user and doesn't require a large minimum. Free or low-cost tiers from Freshdesk and Zoho Desk let you start small.",
    },
    {
      heading: "Ease of use and setup",
      body: "Your team needs to adopt the tool quickly. Look for a clear inbox, simple assignment, and canned responses. Help Scout and Freshdesk are known for straightforward setup; avoid tools that need heavy configuration.",
    },
    {
      heading: "Support channels",
      body: "If you mainly use email, a shared-inbox style (Help Scout) may be enough. If you already use or plan to add chat, pick a tool that includes both (Freshdesk, Zoho Desk) so you don't outgrow it quickly.",
    },
    {
      heading: "Automation and reporting",
      body: "Basic automation (routing, macros) and simple reports on volume and response time help small teams stay organized. You don't need enterprise analytics; focus on tools that include these basics on entry tiers.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Freshdesk",
      body: "Freshdesk is our top value pick for small businesses. You get full ticketing, multi-channel support, and automation at a lower per-agent cost than Zendesk. The free tier supports a small number of agents, and paid plans start around $15/agent/month. It fits teams that want a real helpdesk without enterprise pricing.",
    },
    {
      heading: "Help Scout",
      body: "Help Scout is ideal when your support is mostly email and you want a simple, team-friendly workflow. Shared inbox, customer context, and docs are strong; it's easier to adopt than a heavy ticketing system. Choose Help Scout when simplicity and email-first support matter more than many channels.",
    },
    {
      heading: "Zoho Desk",
      body: "Zoho Desk offers a free tier and affordable paid plans, making it a solid low-cost option. Ticketing, multi-channel support, and basic automation are included. It fits small teams on a tight budget and those already using other Zoho apps.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk") },
    { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout") },
    { name: "Zoho Desk", href: getHelpdeskReviewUrl("zoho-desk") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
    { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
    { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best helpdesk for small business", href: "/helpdesk/guides/best-helpdesk-software-for-small-business" },
    { label: "How to choose helpdesk software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What helpdesk software is best for small businesses?",
      a: "Freshdesk, Help Scout, and Zoho Desk are strong choices. Freshdesk offers the best value with full helpdesk and a free tier; Help Scout is best for email-first teams that want simplicity; Zoho Desk is the best low-cost option. See our small business guide for details.",
    },
    {
      q: "Do small businesses need helpdesk software?",
      a: "When you have more than one person handling support or volume is growing, a helpdesk helps. It keeps conversations in one place, avoids dropped replies, and adds basic automation and reporting. Starting with a free or low-cost tier is a low-risk way to try it.",
    },
    {
      q: "Can small businesses use free helpdesk software?",
      a: "Yes. Freshdesk and Zoho Desk offer free tiers for a limited number of agents. They're enough to move beyond a single inbox and try ticketing and collaboration. Upgrade when you need more agents or advanced features.",
    },
  ] as BestForFaqItem[],
};

// ——— Startups ———

export const STARTUPS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Helpdesk Software for Startups (2026)",
  subtitle:
    "Helpdesk tools that fit startups: low cost, fast setup, and room to scale as you add support volume and channels.",
  useCase: "startups",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Startups need helpdesk software that's flexible, affordable, and quick to set up. Support volume and team size change fast; the right tool scales with you without forcing a switch later. Common challenges include staying on budget, keeping setup simple, and supporting both email and in-app or chat as the product grows. These picks balance cost, ease of use, and scalability.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top helpdesk picks for startups.",
  editorialSub: "What to look for when you're choosing helpdesk software as a startup.",
  whyThesePicksSub: "Why we chose these tools for startups.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "freshdesk",
      name: "Freshdesk",
      badge: "Best value for startups",
      description:
        "Full helpdesk with a free tier and low per-agent pricing. Scale from a few agents to a growing team without a big cost jump.",
      rating: "4.5",
      startingPrice: "From ~$15/agent/mo",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
      visitUrl: "https://www.freshdesk.com",
      logoSrc: LOGOS.freshdesk,
    },
    {
      slug: "help-scout",
      name: "Help Scout",
      badge: "Best for simple setup",
      description:
        "Email-first shared inbox and helpdesk. Easy to adopt and grow with; good fit when support is still light and mostly email.",
      rating: "4.6",
      startingPrice: "From ~$20/user/mo",
      reviewHref: getHelpdeskReviewUrl("help-scout"),
      visitUrl: "https://www.helpscout.com",
      logoSrc: LOGOS.helpScout,
    },
    {
      slug: "intercom",
      name: "Intercom",
      badge: "Best for product-led support",
      description:
        "Messaging-first platform with in-app chat, bots, and help center. Fits startups that want conversational support in the product.",
      rating: "4.4",
      startingPrice: "From ~$39/mo",
      reviewHref: getHelpdeskReviewUrl("intercom"),
      visitUrl: "https://www.intercom.com",
      logoSrc: LOGOS.intercom,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "freshdesk",
      name: "Freshdesk",
      logoSrc: LOGOS.freshdesk,
      bestFor: "Value, scalability",
      startingPrice: "From ~$15/agent/mo",
      standoutFeature: "Free tier, full helpdesk",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
    },
    {
      slug: "help-scout",
      name: "Help Scout",
      logoSrc: LOGOS.helpScout,
      bestFor: "Simple setup, email-first",
      startingPrice: "From ~$20/user/mo",
      standoutFeature: "Ease of use",
      reviewHref: getHelpdeskReviewUrl("help-scout"),
    },
    {
      slug: "intercom",
      name: "Intercom",
      logoSrc: LOGOS.intercom,
      bestFor: "Product-led, in-app",
      startingPrice: "From ~$39/mo",
      standoutFeature: "Messaging, bots",
      reviewHref: getHelpdeskReviewUrl("intercom"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Flexibility and low cost",
      body: "Startups often need to add agents or channels without a big budget increase. Look for per-agent or per-seat pricing with no large minimums, and free or low-cost entry tiers. Freshdesk and Help Scout fit this well.",
    },
    {
      heading: "Ease of setup",
      body: "You don't have time for long implementations. Choose a tool that can be live in days: simple inbox, assignment, and basic automation. Help Scout and Freshdesk are known for quick setup.",
    },
    {
      heading: "Scalability",
      body: "As you add support volume and possibly chat or in-app messaging, the helpdesk should scale without a migration. Intercom fits product-led startups; Freshdesk and Help Scout scale with more agents and channels.",
    },
    {
      heading: "Channels and integrations",
      body: "Start with what you need (often email); ensure the tool can add chat or in-app later. Check integrations to your product, CRM, or billing so support has context as you grow.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Freshdesk",
      body: "Freshdesk gives startups a full helpdesk at a low cost. Free tier for a few agents, then affordable per-agent pricing. You get ticketing, multi-channel support, and automation without enterprise complexity. It scales as you add agents and channels.",
    },
    {
      heading: "Help Scout",
      body: "Help Scout is ideal for startups that want simplicity and fast setup. Email-first workflow, shared inbox, and customer context are easy to adopt. When support is still light and mostly email, Help Scout keeps the team aligned without overhead.",
    },
    {
      heading: "Intercom",
      body: "Intercom is built for product-led companies. In-app messaging, chat, and bots fit startups that want conversational support inside the product. Choose Intercom when messaging and in-app experience matter more than traditional ticketing.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk") },
    { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout") },
    { name: "Intercom", href: getHelpdeskReviewUrl("intercom") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
    { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
    { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Helpdesk for startups", href: "/helpdesk/guides/helpdesk-software-for-startups" },
    { label: "How to choose helpdesk software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What helpdesk software is best for startups?",
      a: "Freshdesk, Help Scout, and Intercom are strong choices. Freshdesk offers the best value and scalability; Help Scout is best for simple, email-first setup; Intercom fits product-led startups that want in-app messaging and bots.",
    },
    {
      q: "Can startups use free helpdesk software?",
      a: "Yes. Freshdesk and Zoho Desk offer free tiers for a limited number of agents. They're enough to get started with ticketing and collaboration. Upgrade when you need more agents or channels.",
    },
    {
      q: "When should a startup add helpdesk software?",
      a: "When more than one person handles support, or when volume is growing and you need assignment, history, and basic automation. Starting early with a free or low-cost tool avoids chaos later.",
    },
  ] as BestForFaqItem[],
};

// ——— Ecommerce ———

export const ECOMMERCE_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Helpdesk Software for Ecommerce (2026)",
  subtitle:
    "Helpdesk tools built for ecommerce: order context, store integrations, and high message volume so support can resolve issues fast.",
  useCase: "ecommerce",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Ecommerce support revolves around orders: shipping, returns, refunds, and product questions. Teams need to see customer and order history without switching between the helpdesk and the store. High message volume and seasonal spikes are common; the right helpdesk integrates with your storefront, surfaces order context, and supports macros and automation to handle volume. These picks are tailored for ecommerce brands.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top helpdesk picks for ecommerce.",
  editorialSub: "What to look for when you're choosing helpdesk software for ecommerce.",
  whyThesePicksSub: "Why we chose these tools for ecommerce.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "gorgias",
      name: "Gorgias",
      badge: "Best for ecommerce support",
      description:
        "Helpdesk built for ecommerce with deep Shopify and Magento integration. Order context, macros, and automation for high-volume support.",
      rating: "4.5",
      startingPrice: "From ~$60/mo",
      reviewHref: getHelpdeskReviewUrl("gorgias"),
      visitUrl: "https://www.gorgias.com",
      logoSrc: LOGOS.gorgias,
    },
    {
      slug: "zendesk",
      name: "Zendesk",
      badge: "Best full helpdesk + ecommerce",
      description:
        "Full helpdesk with strong Shopify and ecommerce app ecosystem. Ticketing, multi-channel, and reporting when you need more than ecommerce-only tools.",
      rating: "4.5",
      startingPrice: "From ~$19/agent/mo",
      reviewHref: getHelpdeskReviewUrl("zendesk"),
      visitUrl: "https://www.zendesk.com",
      logoSrc: LOGOS.zendesk,
    },
    {
      slug: "freshdesk",
      name: "Freshdesk",
      badge: "Best value for stores",
      description:
        "Affordable helpdesk with ecommerce integrations and multi-channel support. Good fit when you want order context without ecommerce-specific pricing.",
      rating: "4.5",
      startingPrice: "From ~$15/agent/mo",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
      visitUrl: "https://www.freshdesk.com",
      logoSrc: LOGOS.freshdesk,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "gorgias",
      name: "Gorgias",
      logoSrc: LOGOS.gorgias,
      bestFor: "Ecommerce, Shopify/Magento",
      startingPrice: "From ~$60/mo",
      standoutFeature: "Order context, store integration",
      reviewHref: getHelpdeskReviewUrl("gorgias"),
    },
    {
      slug: "zendesk",
      name: "Zendesk",
      logoSrc: LOGOS.zendesk,
      bestFor: "Full helpdesk + ecommerce apps",
      startingPrice: "From ~$19/agent/mo",
      standoutFeature: "Multi-channel, app marketplace",
      reviewHref: getHelpdeskReviewUrl("zendesk"),
    },
    {
      slug: "freshdesk",
      name: "Freshdesk",
      logoSrc: LOGOS.freshdesk,
      bestFor: "Value, store integrations",
      startingPrice: "From ~$15/agent/mo",
      standoutFeature: "Affordable, multi-channel",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Order-related support",
      body: "Support needs to see orders, shipping status, and history without leaving the helpdesk. Look for native or deep integrations with your platform (Shopify, Magento, etc.) so agents can view and act on order data in one place.",
    },
    {
      heading: "Customer history",
      body: "Past orders, returns, and conversations should be visible in the ticket. Ecommerce-focused tools like Gorgias surface this natively; general helpdesks rely on integrations. Prioritize tools that put order and customer context front and center.",
    },
    {
      heading: "Storefront integrations",
      body: "The helpdesk should connect to your store so you can pull order and customer data, and optionally trigger actions (e.g. create return). Gorgias is built for this; Zendesk and Freshdesk offer apps and integrations for major platforms.",
    },
    {
      heading: "High message volume",
      body: "Ecommerce support often has high volume and seasonal spikes. Macros, canned responses, and automation (routing, SLA) help teams keep up. Compare how well each tool handles volume and whether pricing scales fairly.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Gorgias",
      body: "Gorgias is built for ecommerce support. Deep Shopify and Magento integration, order context in every ticket, and macros designed for orders and returns. It's the default choice when support revolves around your store.",
    },
    {
      heading: "Zendesk",
      body: "Zendesk offers a full helpdesk with a strong ecommerce app ecosystem. If you need more than ecommerce-specific features—multi-channel, advanced reporting, or a broad integration set—Zendesk scales with you. Shopify and other store integrations are available.",
    },
    {
      heading: "Freshdesk",
      body: "Freshdesk delivers good value for ecommerce teams that want order context and multi-channel support without Gorgias-level ecommerce focus or Zendesk-level cost. Integrations cover major storefronts; fit when budget matters.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Gorgias", href: getHelpdeskReviewUrl("gorgias") },
    { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk") },
    { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
    { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
    { label: "Freshdesk vs Zoho Desk", href: getHelpdeskCompareUrl("freshdesk-vs-zoho-desk") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Helpdesk for ecommerce", href: "/helpdesk/guides/helpdesk-software-for-ecommerce" },
    { label: "How to choose helpdesk software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What helpdesk software works best for ecommerce brands?",
      a: "Gorgias is built for ecommerce with deep Shopify and Magento integration. Zendesk and Freshdesk offer strong ecommerce integrations and multi-channel support. Choose Gorgias when support is order-centric; Zendesk or Freshdesk when you need broader helpdesk features.",
    },
    {
      q: "Does helpdesk software integrate with Shopify?",
      a: "Yes. Gorgias has native Shopify integration with order context and macros. Zendesk and Freshdesk offer Shopify apps and integrations. Check each vendor's integration list for your store platform.",
    },
    {
      q: "When should ecommerce use Gorgias vs Zendesk?",
      a: "Use Gorgias when support is mostly order-related and you want native store integration and ecommerce-focused macros. Use Zendesk when you need a full helpdesk with many channels and a large app ecosystem in addition to ecommerce.",
    },
  ] as BestForFaqItem[],
};

// ——— SaaS ———

export const SAAS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Helpdesk Software for SaaS Companies (2026)",
  subtitle:
    "Helpdesk and messaging for SaaS support: ticketing, customer lifecycle context, integrations, and self-serve so support scales with your product.",
  useCase: "saas",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "SaaS support ties directly to the product: onboarding, feature questions, billing, and technical issues. Teams need ticketing and workflow, customer lifecycle context (plan, usage), and integrations to the product and CRM. In-app messaging and chat are often as important as email; self-serve (help center, bots) helps scale. These picks fit SaaS companies that want to grow support without losing context or consistency.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top helpdesk picks for SaaS companies.",
  editorialSub: "What to look for when you're choosing helpdesk software for SaaS.",
  whyThesePicksSub: "Why we chose these tools for SaaS.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "zendesk",
      name: "Zendesk",
      badge: "Best full helpdesk for SaaS",
      description:
        "Full helpdesk with ticketing, multi-channel support, and strong reporting. Scales with your team and integrates with product and CRM.",
      rating: "4.5",
      startingPrice: "From ~$19/agent/mo",
      reviewHref: getHelpdeskReviewUrl("zendesk"),
      visitUrl: "https://www.zendesk.com",
      logoSrc: LOGOS.zendesk,
    },
    {
      slug: "intercom",
      name: "Intercom",
      badge: "Best for product-led support",
      description:
        "Messaging-first platform with in-app chat, bots, and help center. Built for SaaS and product-led teams that want conversational support.",
      rating: "4.4",
      startingPrice: "From ~$39/mo",
      reviewHref: getHelpdeskReviewUrl("intercom"),
      visitUrl: "https://www.intercom.com",
      logoSrc: LOGOS.intercom,
    },
    {
      slug: "help-scout",
      name: "Help Scout",
      badge: "Best for simplicity",
      description:
        "Simple shared inbox and helpdesk with docs. Email-first workflow and easy adoption; good when you want less complexity than Zendesk or Intercom.",
      rating: "4.6",
      startingPrice: "From ~$20/user/mo",
      reviewHref: getHelpdeskReviewUrl("help-scout"),
      visitUrl: "https://www.helpscout.com",
      logoSrc: LOGOS.helpScout,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "zendesk",
      name: "Zendesk",
      logoSrc: LOGOS.zendesk,
      bestFor: "Full helpdesk, scale",
      startingPrice: "From ~$19/agent/mo",
      standoutFeature: "Ticketing, multi-channel, reporting",
      reviewHref: getHelpdeskReviewUrl("zendesk"),
    },
    {
      slug: "intercom",
      name: "Intercom",
      logoSrc: LOGOS.intercom,
      bestFor: "Product-led, in-app",
      startingPrice: "From ~$39/mo",
      standoutFeature: "Messaging, bots, help center",
      reviewHref: getHelpdeskReviewUrl("intercom"),
    },
    {
      slug: "help-scout",
      name: "Help Scout",
      logoSrc: LOGOS.helpScout,
      bestFor: "Simplicity, email-first",
      startingPrice: "From ~$20/user/mo",
      standoutFeature: "Ease of use",
      reviewHref: getHelpdeskReviewUrl("help-scout"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Ticketing and workflow",
      body: "SaaS support needs clear ticket management, assignment, and status so nothing is dropped. Integrate with your product and billing so agents see plan and usage. Zendesk and Help Scout offer strong ticketing; Intercom combines messaging with workflow.",
    },
    {
      heading: "Customer lifecycle context",
      body: "Support should see plan, usage, and history so they can give accurate answers without asking the customer to repeat themselves. Look for CRM or product integrations that surface this in the ticket.",
    },
    {
      heading: "Integrations",
      body: "Connect to your product, CRM (Salesforce, HubSpot), and billing. Many SaaS teams use Segment, Stripe, or the product API with Zendesk, Intercom, or Help Scout. Check integration depth for your stack.",
    },
    {
      heading: "Self-serve and scale",
      body: "Help center and bots deflect common questions; human support handles the rest. Plan for both as you grow. Intercom is strong on messaging and bots; Zendesk and Help Scout offer knowledge base and help center.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Zendesk",
      body: "Zendesk is our top full helpdesk pick for SaaS. Ticketing, multi-channel support, reporting, and a large app ecosystem scale with your team. Integrations to CRMs and products are strong. Choose Zendesk when you need depth and scale.",
    },
    {
      heading: "Intercom",
      body: "Intercom is built for product-led support. In-app messaging, chat, and bots fit SaaS teams that want conversational support in the product. Choose Intercom when messaging and in-app experience are central to your support strategy.",
    },
    {
      heading: "Help Scout",
      body: "Help Scout keeps things simple. Shared inbox, docs, and email-first workflow are easy to adopt. It fits SaaS teams that want less complexity than Zendesk or Intercom and are fine with an email-centric workflow.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk") },
    { name: "Intercom", href: getHelpdeskReviewUrl("intercom") },
    { name: "Help Scout", href: getHelpdeskReviewUrl("help-scout") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Intercom vs Zendesk", href: getHelpdeskCompareUrl("intercom-vs-zendesk") },
    { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
    { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Helpdesk for SaaS companies", href: "/helpdesk/guides/helpdesk-software-for-saas-companies" },
    { label: "How to choose helpdesk software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What helpdesk software is best for SaaS companies?",
      a: "Zendesk, Intercom, and Help Scout are often recommended. Zendesk offers full helpdesk and scale; Intercom is built for product-led and in-app support; Help Scout is best for simplicity and email-first workflow. Choose based on whether you prioritize in-app messaging (Intercom), full ticketing (Zendesk), or simplicity (Help Scout).",
    },
    {
      q: "Do SaaS teams need live chat and ticketing together?",
      a: "Many do. In-app chat or messaging is common for product questions; ticketing keeps conversations tracked and assigned. Intercom combines both; Zendesk offers ticketing with chat. Help Scout is email-first but has Beacon for lightweight in-app. Match the tool to how your customers reach you.",
    },
  ] as BestForFaqItem[],
};

// ——— Growing teams ———

export const GROWING_TEAMS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Helpdesk Software for Growing Teams (2026)",
  subtitle:
    "Helpdesk tools that scale with your support team: more agents, more channels, and stronger automation and reporting as you grow.",
  useCase: "growing-teams",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Growing support teams need helpdesk software that scales: more agents, more channels (email, chat, social), and better automation and reporting. What worked for a handful of people can break when volume and team size increase. The right platform adds structure—routing, SLAs, queues—and keeps collaboration clear. These picks fit teams that are adding agents, expanding channels, or moving beyond a shared inbox.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top helpdesk picks for growing teams.",
  editorialSub: "What to look for when you're choosing helpdesk software for a growing team.",
  whyThesePicksSub: "Why we chose these tools for growing teams.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "zendesk",
      name: "Zendesk",
      badge: "Best for scale and depth",
      description:
        "Full helpdesk that scales with agents and channels. Strong automation, reporting, and ecosystem for teams that need structure as they grow.",
      rating: "4.5",
      startingPrice: "From ~$19/agent/mo",
      reviewHref: getHelpdeskReviewUrl("zendesk"),
      visitUrl: "https://www.zendesk.com",
      logoSrc: LOGOS.zendesk,
    },
    {
      slug: "freshdesk",
      name: "Freshdesk",
      badge: "Best value for growing teams",
      description:
        "Affordable full helpdesk with ticketing, automation, and multi-channel support. Scales without the cost of Zendesk.",
      rating: "4.5",
      startingPrice: "From ~$15/agent/mo",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
      visitUrl: "https://www.freshdesk.com",
      logoSrc: LOGOS.freshdesk,
    },
    {
      slug: "front",
      name: "Front",
      badge: "Best shared inbox that scales",
      description:
        "Shared inbox and collaboration that centralizes email, chat, and social. Strong for internal collaboration as the team grows.",
      rating: "4.5",
      startingPrice: "From ~$19/user/mo",
      reviewHref: getHelpdeskReviewUrl("front"),
      visitUrl: "https://www.front.com",
      logoSrc: LOGOS.front,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "zendesk",
      name: "Zendesk",
      logoSrc: LOGOS.zendesk,
      bestFor: "Scale, full helpdesk",
      startingPrice: "From ~$19/agent/mo",
      standoutFeature: "Automation, reporting, ecosystem",
      reviewHref: getHelpdeskReviewUrl("zendesk"),
    },
    {
      slug: "freshdesk",
      name: "Freshdesk",
      logoSrc: LOGOS.freshdesk,
      bestFor: "Value, scalability",
      startingPrice: "From ~$15/agent/mo",
      standoutFeature: "Full helpdesk at lower cost",
      reviewHref: getHelpdeskReviewUrl("freshdesk"),
    },
    {
      slug: "front",
      name: "Front",
      logoSrc: LOGOS.front,
      bestFor: "Shared inbox, collaboration",
      startingPrice: "From ~$19/user/mo",
      standoutFeature: "Unified inbox, internal collaboration",
      reviewHref: getHelpdeskReviewUrl("front"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Team size and ticket volume",
      body: "As you add agents, you need clear assignment, queues, and workload balance. Full helpdesks (Zendesk, Freshdesk) offer routing and SLA tools; shared-inbox tools (Front) add structure for collaboration. Match the tool to how formal you want workflows to be.",
    },
    {
      heading: "Support channels",
      body: "Growing teams often add chat, social, or phone. Choose a platform that unifies channels in one inbox and scales pricing by agent or seat. Zendesk and Freshdesk are built for this; Front adds channels to a shared-inbox model.",
    },
    {
      heading: "Automation and reporting",
      body: "Automation (routing, macros, escalation) and reporting (volume, response time, CSAT) become important as the team grows. Full helpdesks offer more here than minimal shared inboxes. Plan for the reporting and SLA needs you'll have in 6–12 months.",
    },
    {
      heading: "CRM or ecommerce integrations",
      body: "Support needs context from CRM or the product. Ensure the helpdesk integrates with your stack so agents have customer and order data. All three picks support major integrations; check depth for your tools.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Zendesk",
      body: "Zendesk scales with growing teams: more agents, more channels, stronger automation and reporting. It's the default when you need full helpdesk depth and are willing to invest in the ecosystem. Choose Zendesk when structure and scale matter most.",
    },
    {
      heading: "Freshdesk",
      body: "Freshdesk delivers similar core capabilities to Zendesk at lower cost. It fits growing teams that want full ticketing, automation, and multi-channel support without Zendesk-level spend. Good scalability and value.",
    },
    {
      heading: "Front",
      body: "Front is a shared inbox that scales with collaboration: email, chat, social in one place, with strong internal comments and assignment. Choose Front when you want a unified inbox and collaboration focus rather than traditional ticketing workflows.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Zendesk", href: getHelpdeskReviewUrl("zendesk") },
    { name: "Freshdesk", href: getHelpdeskReviewUrl("freshdesk") },
    { name: "Front", href: getHelpdeskReviewUrl("front") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Zendesk vs Freshdesk", href: getHelpdeskCompareUrl("zendesk-vs-freshdesk") },
    { label: "Front vs Help Scout", href: getHelpdeskCompareUrl("front-vs-help-scout") },
    { label: "Help Scout vs Zendesk", href: getHelpdeskCompareUrl("help-scout-vs-zendesk") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Shared inbox vs helpdesk", href: "/helpdesk/guides/shared-inbox-vs-helpdesk-software" },
    { label: "How to choose helpdesk software", href: "/helpdesk/guides/how-to-choose-helpdesk-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What helpdesk software scales best with growing support teams?",
      a: "Zendesk and Freshdesk are built to scale: more agents, more channels, automation, and reporting. Zendesk offers the most depth and ecosystem; Freshdesk offers similar core features at lower cost. Front scales as a shared inbox with strong collaboration.",
    },
    {
      q: "When should a team move beyond a shared inbox?",
      a: "Move to a full helpdesk when you have multiple agents, need formal assignment and SLA tracking, or want richer automation and reporting. Tools like Zendesk and Freshdesk add ticketing and workflow; shared inboxes (Help Scout, Front) are enough for smaller or email-focused teams.",
    },
    {
      q: "Should growing teams choose Front or a traditional helpdesk?",
      a: "Choose Front when you want a unified inbox and collaboration-first workflow. Choose Zendesk or Freshdesk when you need full ticketing, SLA management, and heavier automation. Many teams start with Front or Help Scout and migrate to Zendesk or Freshdesk as volume and structure grow.",
    },
  ] as BestForFaqItem[],
};
