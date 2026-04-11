/**
 * POS best-for page data.
 * Used by app/pos/best-for/[scenario]/page.tsx via BestForTemplate.
 */

import { getPosReviewUrl, getPosCompareUrl } from "@/lib/routes";
import { POS_LOGOS } from "@/lib/data/posHubData";
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

const CATEGORY = { href: "/pos", label: "POS Software" };
const SEE_ALSO = {
  roundupLabel: "best POS software",
  roundupHref: "/pos/best-pos-software",
  compareLabel: "POS software comparisons",
  compareHref: "/pos/compare",
};

const LOGOS = { ...POS_LOGOS };

// ——— Small business ———

export const SMALL_BUSINESS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best POS Software for Small Businesses (2026)",
  subtitle:
    "Compare POS systems built for small businesses: simple setup, transparent pricing, and integrated payments without long-term contracts.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses need a POS that gets them taking payments quickly, tracks sales and basic inventory, and doesn’t lock them into expensive contracts. The right system supports growth—adding terminals, locations, or online sales—without overwhelming a small team. Common challenges include fragmented payments, manual inventory updates, and lack of clear reporting; a dedicated POS addresses all of these.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top POS picks for small businesses.",
  editorialSub: "What to look for when you choose POS software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "square-pos",
      name: "Square",
      badge: "Best overall for small businesses",
      description: "Free software, low-cost hardware, and straightforward pricing so you can start fast without long-term commitment.",
      rating: "4.6",
      startingPrice: "Free software, hardware from $49",
      reviewHref: getPosReviewUrl("square-pos"),
      visitUrl: "https://squareup.com",
      logoSrc: LOGOS.square,
    },
    {
      slug: "clover-pos",
      name: "Clover",
      badge: "Best hardware ecosystem",
      description: "Wide choice of terminals and an app market so you can tailor the register to your workflow.",
      rating: "4.3",
      startingPrice: "From ~$69/mo (with hardware)",
      reviewHref: getPosReviewUrl("clover-pos"),
      visitUrl: "https://www.clover.com",
      logoSrc: LOGOS.clover,
    },
    {
      slug: "shopify-pos",
      name: "Shopify POS",
      badge: "Best for ecommerce + in-store",
      description: "Unified online and in-person sales when your storefront is or will be on Shopify.",
      rating: "4.5",
      startingPrice: "From $39/mo (with Shopify plan)",
      reviewHref: getPosReviewUrl("shopify-pos"),
      visitUrl: "https://www.shopify.com/pos",
      logoSrc: LOGOS.shopify,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "square-pos",
      name: "Square",
      logoSrc: LOGOS.square,
      bestFor: "Small businesses that want no monthly software fee",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "Simple setup and transparent pricing",
      reviewHref: getPosReviewUrl("square-pos"),
    },
    {
      slug: "clover-pos",
      name: "Clover",
      logoSrc: LOGOS.clover,
      bestFor: "SMBs that want hardware and app flexibility",
      startingPrice: "From ~$69/mo (with hardware)",
      standoutFeature: "Broad hardware and app market",
      reviewHref: getPosReviewUrl("clover-pos"),
    },
    {
      slug: "shopify-pos",
      name: "Shopify POS",
      logoSrc: LOGOS.shopify,
      bestFor: "Ecommerce-first businesses on Shopify",
      startingPrice: "From $39/mo (with Shopify plan)",
      standoutFeature: "Unified online and in-store",
      reviewHref: getPosReviewUrl("shopify-pos"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Prioritize ease of use and quick setup",
      body: "Small teams don’t have time for lengthy implementation. Choose a POS that staff can learn quickly and that supports the payment types you need—cards, contactless, and optionally online or invoicing. Square and Clover are known for fast setup; Shopify POS fits when you’re already on Shopify.",
    },
    {
      heading: "Understand total cost: software, hardware, and processing",
      body: "Some systems charge no monthly software fee (Square); others bundle software and hardware (Clover). Processing is usually per transaction. Compare the full picture over a year—subscription, hardware, and processing—so you’re not surprised by hidden costs.",
    },
    {
      heading: "When to choose Square vs Clover",
      body: "Choose Square when you want the lowest upfront cost and no required monthly software fee; it’s ideal for in-person-first or multi-type small businesses. Choose Clover when you want more hardware options and an app market to extend functionality, and you’re okay with a monthly bundle. Both support retail, food service, and services.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Square",
      body: "Square remains the default for many small businesses because you can start with free software, affordable readers, and per-transaction processing without a multi-year contract. During a trial week, run your real mix of cards—including contactless and keyed when unavoidable—and compare effective rate to your old processor’s statements. Basic inventory and daily sales reports help retailers, cafés, and mobile service businesses see what actually sells. Validate tipping, discounts, and tax rules for your state before you train staff. It fits teams that value speed-to-first-sale over deep customization.",
    },
    {
      heading: "Clover",
      body: "Clover suits SMBs that want hardware choice and an app market for loyalty, appointments, or industry-specific add-ons beyond a bare register. Trial the exact terminal model you plan to deploy; ergonomics and printer placement matter on busy counters. Expect monthly bundles that include hardware—model total cost over 24 months, not just sticker price. Test critical apps in the trial window; some rely on third-party support quality. Choose Clover when flexibility and extensibility beat Square’s simpler, flatter stack.",
    },
    {
      heading: "Shopify POS",
      body: "Shopify POS is the coherent choice when your ecommerce catalog already lives on Shopify and you need one inventory and order spine for web plus in-person selling. Pilot unified stock: sell an item online and return it in store—or vice versa—and confirm quantities reconcile without manual fixes. Validate plan tiers, staff permissions, and any retail locations you will add this year. If you are not on Shopify, Square or Clover are usually less tangled; if you are, duplicate systems create reconciliation debt fast. Treat the trial as an ops test, not only a theme exercise.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Square", href: getPosReviewUrl("square-pos") },
    { name: "Clover", href: getPosReviewUrl("clover-pos") },
    { name: "Shopify POS", href: getPosReviewUrl("shopify-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Square vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
    { label: "Square vs Clover", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best POS for small business (guide)", href: "/pos/guides/best-pos-for-small-business" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
    { label: "POS software pricing guide", href: "/pos/guides/pos-software-pricing-guide" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS system is best for small businesses?",
      a: "Square is a top choice for many small businesses because of its free software, simple setup, and flexible hardware. Clover and Shopify POS are also popular—Clover for hardware and app choice, Shopify POS when you already sell or plan to sell online on Shopify.",
    },
    {
      q: "How much does a POS system cost for a small business?",
      a: "Costs vary. Square offers free POS software; you pay for hardware (from around $49) and per-transaction processing. Clover typically bundles software and hardware from around $69/month. Shopify POS requires a Shopify plan (from about $39/month). Compare total cost over a year including processing.",
    },
    {
      q: "Do small businesses need a POS or just a card reader?",
      a: "A simple card reader is enough if you only need to accept payments and don’t track inventory or run reports. Once you want item-level sales, stock tracking, or multiple terminals, a full POS system is worth it. Most small businesses benefit from at least basic POS features.",
    },
  ] as BestForFaqItem[],
};

// ——— Retail ———

export const RETAIL_PAGE_PROPS: BestForTemplateProps = {
  title: "Best POS Software for Retail (2026)",
  subtitle:
    "Compare POS systems built for retail: inventory management, reporting, and multi-location support so you can keep shelves stocked and understand what sells.",
  useCase: "retail",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Retailers need a POS that tracks sales by product, keeps inventory accurate across the sales floor and stockroom, and supports one or many locations. Common challenges include overselling, manual stock counts, and fragmented data between register and back office. The right retail POS ties transactions to inventory and delivers reporting that helps with reordering and merchandising.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top POS picks for retail stores.",
  editorialSub: "What to look for when you choose POS software for retail.",
  whyThesePicksSub: "Why we chose these tools for retail.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "lightspeed-pos",
      name: "Lightspeed",
      badge: "Best for retail and multi-location",
      description: "Retail-focused inventory, multi-store support, and reporting built for stores that need more than basic POS.",
      rating: "4.4",
      startingPrice: "From ~$69/mo",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
      visitUrl: "https://www.lightspeedhq.com",
      logoSrc: LOGOS.lightspeed,
    },
    {
      slug: "square-pos",
      name: "Square",
      badge: "Best for single-location retail",
      description: "Simple setup and transparent pricing for retailers that want to get started quickly without heavy commitment.",
      rating: "4.6",
      startingPrice: "Free software, hardware from $49",
      reviewHref: getPosReviewUrl("square-pos"),
      visitUrl: "https://squareup.com",
      logoSrc: LOGOS.square,
    },
    {
      slug: "vend-pos",
      name: "Vend (Lightspeed Retail)",
      badge: "Best for retail-first operations",
      description: "Retail POS with strong inventory and multi-store support, now part of the Lightspeed family.",
      rating: "4.3",
      startingPrice: "From ~$69/mo",
      reviewHref: getPosReviewUrl("vend-pos"),
      visitUrl: "https://www.lightspeedhq.com/vend",
      logoSrc: LOGOS.vend,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "lightspeed-pos",
      name: "Lightspeed",
      logoSrc: LOGOS.lightspeed,
      bestFor: "Retail with multi-location and deeper inventory",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Retail inventory and multi-store reporting",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
    },
    {
      slug: "square-pos",
      name: "Square",
      logoSrc: LOGOS.square,
      bestFor: "Single-location or straightforward retail",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "Ease of use and low cost to start",
      reviewHref: getPosReviewUrl("square-pos"),
    },
    {
      slug: "vend-pos",
      name: "Vend",
      logoSrc: LOGOS.vend,
      bestFor: "Retail stores prioritizing inventory and multi-store",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Retail workflows and Lightspeed ecosystem",
      reviewHref: getPosReviewUrl("vend-pos"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Match inventory depth to your store count and SKU complexity",
      body: "Single-location retailers can often succeed with Square or a similar general-purpose POS. Once you have multiple stores or need deeper purchasing and transfers, a retail-focused system like Lightspeed or Vend pays off. They support multi-location inventory, consolidated reporting, and better control over what’s on shelves and in the back room.",
    },
    {
      heading: "Reporting and analytics that support merchandising",
      body: "Your POS should deliver sales by product, category, and time period—and, for multi-store, by location. That data drives reordering and helps you see what’s moving. Lightspeed and Vend are built for this; Square offers solid basics with optional add-ons for deeper reporting.",
    },
    {
      heading: "When retailers should choose Lightspeed vs Square",
      body: "Choose Lightspeed when you need multi-location inventory, stronger purchasing, and retail-specific reporting—and you’re okay with a higher monthly cost. Choose Square when you have one or a few locations and want the simplest setup and lowest commitment. Vend sits in the same retail-focused camp as Lightspeed with a dedicated retail POS positioning.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Lightspeed",
      body: "Lightspeed is purpose-built for retail: deep inventory, purchasing, transfers, and multi-store reporting when you have outgrown generic POS apps. During a trial, load your real categories and vendors, then run a stocktake and reorder workflow end to end. Validate ecommerce connectors if you sell online; retail truth should be one ledger. It costs more than Square because it replaces separate inventory spreadsheets and ad hoc purchasing. Choose Lightspeed when SKU complexity and location count—not just payments—are the bottleneck.",
    },
    {
      heading: "Square",
      body: "Square fits single-location or straightforward retail that needs fast checkout, simple catalog management, and transparent processing without heavy monthly commitments. Use the trial to stress-test peak-hour line busting and returns during a promotion weekend. Add-ons can extend reporting, but core strength is ease and low friction. It is ideal until you need true multi-store transfers, matrix inventory, or purchasing approvals. Re-evaluate when duplicate data entry between POS and back office becomes a daily tax.",
    },
    {
      heading: "Vend (Lightspeed Retail)",
      body: "Vend—now within the Lightspeed retail family—targets stores that want retail-first inventory and multi-site control with a clearer path into broader Lightspeed capabilities over time. Trial multi-store stock visibility and user roles if managers should not see cost data. Compare roadmap and support for your region against standalone Lightspeed Retail offerings before you commit. It suits growing chains standardizing on retail workflows without jumping straight to bespoke ERP. Validate integrations to accounting and ecommerce early.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Lightspeed", href: getPosReviewUrl("lightspeed-pos") },
    { name: "Square", href: getPosReviewUrl("square-pos") },
    { name: "Vend", href: getPosReviewUrl("vend-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Shopify POS vs Lightspeed", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
    { label: "Lightspeed vs Vend", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
    { label: "Square vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Retail POS software guide", href: "/pos/guides/retail-pos-software-guide" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS system is best for retail stores?",
      a: "Lightspeed and Vend are strong for retail stores that need inventory and multi-location. Square is a good fit for single-location or simpler retail. The best choice depends on your store count, SKU complexity, and whether you need deep reporting and purchasing.",
    },
    {
      q: "Do retail POS systems include inventory management?",
      a: "Yes. Most retail POS systems include product catalogs, stock levels, and low-stock alerts. Lightspeed and Vend add multi-location inventory, purchasing, and transfers. Square offers basic inventory with optional advanced features.",
    },
    {
      q: "Can retail POS integrate with ecommerce?",
      a: "Yes. Shopify POS unifies online and in-store on Shopify. Lightspeed and Vend connect to ecommerce platforms so inventory stays in sync. Square can connect to online stores. Choose based on whether you want one platform (Shopify) or best-of-breed integrations.",
    },
  ] as BestForFaqItem[],
};

// ——— Restaurants ———

export const RESTAURANTS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best POS Software for Restaurants (2026)",
  subtitle:
    "Compare POS systems built for restaurants: table management, kitchen display, online ordering, and reporting that fits food service.",
  useCase: "restaurants",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Restaurants need a POS that handles tables, courses, modifiers, and kitchen flow—not just a generic register. Common challenges include order errors, slow kitchen communication, and fragmented online and in-house orders. A restaurant POS supports table and floor management, sends orders to the kitchen display, and can integrate online ordering and delivery so front and back of house stay in sync.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top POS picks for restaurants.",
  editorialSub: "What to look for when you choose POS software for restaurants.",
  whyThesePicksSub: "Why we chose these tools for restaurants.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "toast-pos",
      name: "Toast",
      badge: "Best for full-service and quick-service restaurants",
      description: "Purpose-built for restaurants: table management, kitchen display, online ordering, and restaurant-specific reporting.",
      rating: "4.5",
      startingPrice: "Quote (restaurant-focused)",
      reviewHref: getPosReviewUrl("toast-pos"),
      visitUrl: "https://pos.toasttab.com",
      logoSrc: LOGOS.toast,
    },
    {
      slug: "touchbistro",
      name: "TouchBistro",
      badge: "Best for independent and small-chain restaurants",
      description: "Restaurant POS with table management, menus, and tiered pricing that fits many independents.",
      rating: "4.4",
      startingPrice: "From ~$69/mo",
      reviewHref: getPosReviewUrl("touchbistro"),
      visitUrl: "https://www.touchbistro.com",
      logoSrc: LOGOS.touchbistro,
    },
    {
      slug: "square-pos",
      name: "Square",
      badge: "Best for simple cafes and counters",
      description: "General-purpose POS that works for basic food service when you don’t need full table or kitchen management.",
      rating: "4.6",
      startingPrice: "Free software, hardware from $49",
      reviewHref: getPosReviewUrl("square-pos"),
      visitUrl: "https://squareup.com",
      logoSrc: LOGOS.square,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "toast-pos",
      name: "Toast",
      logoSrc: LOGOS.toast,
      bestFor: "Full-service and complex quick-service restaurants",
      startingPrice: "Quote (restaurant-focused)",
      standoutFeature: "Table management, KDS, online ordering",
      reviewHref: getPosReviewUrl("toast-pos"),
    },
    {
      slug: "touchbistro",
      name: "TouchBistro",
      logoSrc: LOGOS.touchbistro,
      bestFor: "Independent and small-chain restaurants",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Restaurant workflows and tiered pricing",
      reviewHref: getPosReviewUrl("touchbistro"),
    },
    {
      slug: "square-pos",
      name: "Square",
      logoSrc: LOGOS.square,
      bestFor: "Simple cafes and counter service",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "Low cost and easy setup",
      reviewHref: getPosReviewUrl("square-pos"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Restaurant workflows: table service and kitchen display",
      body: "Full-service restaurants need table and floor management, course firing, and kitchen display systems (KDS) so the kitchen sees orders in sequence. Toast and TouchBistro are built for this; Square has limited table and KDS support. Match the POS to your service model—counter-only vs full table service.",
    },
    {
      heading: "Online ordering and delivery integration",
      body: "Many restaurants now need to handle in-house and off-premise orders in one system. Toast and TouchBistro offer native online ordering and delivery integrations. If you rely on third-party delivery apps, confirm that your POS can integrate with them so orders flow to the kitchen without re-entry.",
    },
    {
      heading: "When restaurants should choose Toast vs TouchBistro",
      body: "Choose Toast when you run full-service or complex quick-service and need the most comprehensive restaurant suite—table management, KDS, online ordering, and labor. Choose TouchBistro when you want strong restaurant features with published tiered pricing that’s often more accessible for single-location or smaller chains. Square fits simple cafes or counters with minimal table service.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Toast",
      body: "Toast is built for restaurants end to end: floor plans, coursing, kitchen display, online ordering hooks, and labor-aware reporting that generic POS rarely matches. Trial it during a real service rush—modifiers, voids, and split checks expose weaknesses fast. Validate hardware footprint and payment processing terms; restaurant stacks are capex plus ongoing fees. It fits full-service and busy QSR teams that need one brain for FOH and BOH. Confirm integrations to payroll and accounting match how you close nightly books.",
    },
    {
      heading: "TouchBistro",
      body: "TouchBistro targets independents and small chains that want strong restaurant workflows—tables, menus, optional KDS—with published tiered pricing many teams find easier to budget than opaque quotes. During a trial, train servers on real menu complexity including 86ing items and happy-hour rules. Test online ordering handoff if off-premise revenue matters in your model. It is a credible Toast alternative when you want solid restaurant tooling with different commercial packaging. Validate local payment partners and support SLAs for your hours.",
    },
    {
      heading: "Square",
      body: "Square fits cafes, counters, and food trucks where you need quick service, simple item buttons, and low-commitment hardware more than full table service or KDS orchestration. Pilot rush-hour throughput and kitchen ticket readability if you print to a prep area. It is usually the most cost-effective path for basic food retail without deep restaurant modules. Add-ons can grow capability, but do not force Square into full-service workflows it was not meant to carry. Upgrade when table maps and coursing become non-negotiable.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Toast", href: getPosReviewUrl("toast-pos") },
    { name: "TouchBistro", href: getPosReviewUrl("touchbistro") },
    { name: "Square", href: getPosReviewUrl("square-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Toast vs Square", href: getPosCompareUrl("toast-pos-vs-square-pos") },
    { label: "Square vs Clover", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Restaurant POS systems guide", href: "/pos/guides/restaurant-pos-systems-guide" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS system is best for restaurants?",
      a: "Toast and TouchBistro are the top choices for restaurants. Toast is best for full-service and complex quick-service; TouchBistro is strong for independents and small chains with tiered pricing. Square can work for simple cafes or counters.",
    },
    {
      q: "Do restaurant POS systems support table service?",
      a: "Yes. Restaurant-focused systems like Toast and TouchBistro support floor plans, table status, course firing, and server sections. General-purpose POS systems like Square have limited table management; for full-service, a restaurant POS is recommended.",
    },
    {
      q: "What is a kitchen display system (KDS)?",
      a: "A KDS shows orders to the kitchen in sequence, often by station or course. It reduces errors and speeds service. Toast and TouchBistro offer integrated KDS; some general POS systems support it via add-ons or third-party hardware.",
    },
  ] as BestForFaqItem[],
};

// ——— Ecommerce ———

export const ECOMMERCE_PAGE_PROPS: BestForTemplateProps = {
  title: "Best POS Software for Ecommerce (2026)",
  subtitle:
    "Compare POS systems that unify online and in-store sales so inventory and orders stay in sync across your storefront and register.",
  useCase: "ecommerce",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Ecommerce businesses that also sell in person need a POS that shares one product catalog and inventory with their online store. Otherwise, you risk overselling, double data entry, and fragmented reporting. The right POS either is part of your ecommerce platform (e.g. Shopify POS) or integrates tightly so sales from the web and the register update the same stock and orders.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top POS picks for ecommerce businesses.",
  editorialSub: "What to look for when you choose POS software for ecommerce.",
  whyThesePicksSub: "Why we chose these tools for ecommerce.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "shopify-pos",
      name: "Shopify POS",
      badge: "Best for unified online and in-store",
      description: "One system for your Shopify store and in-person sales—single catalog, inventory, and orders.",
      rating: "4.5",
      startingPrice: "From $39/mo (with Shopify plan)",
      reviewHref: getPosReviewUrl("shopify-pos"),
      visitUrl: "https://www.shopify.com/pos",
      logoSrc: LOGOS.shopify,
    },
    {
      slug: "square-pos",
      name: "Square",
      badge: "Best for flexibility and low commitment",
      description: "POS with optional ecommerce and integrations so you can connect to multiple storefronts.",
      rating: "4.6",
      startingPrice: "Free software, hardware from $49",
      reviewHref: getPosReviewUrl("square-pos"),
      visitUrl: "https://squareup.com",
      logoSrc: LOGOS.square,
    },
    {
      slug: "lightspeed-pos",
      name: "Lightspeed",
      badge: "Best for retail + ecommerce integration",
      description: "Retail POS that connects to ecommerce platforms so inventory stays in sync across channels.",
      rating: "4.4",
      startingPrice: "From ~$69/mo",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
      visitUrl: "https://www.lightspeedhq.com",
      logoSrc: LOGOS.lightspeed,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "shopify-pos",
      name: "Shopify POS",
      logoSrc: LOGOS.shopify,
      bestFor: "Businesses whose storefront is on Shopify",
      startingPrice: "From $39/mo (with Shopify plan)",
      standoutFeature: "Native unification of online and in-store",
      reviewHref: getPosReviewUrl("shopify-pos"),
    },
    {
      slug: "square-pos",
      name: "Square",
      logoSrc: LOGOS.square,
      bestFor: "In-person-first with optional ecommerce",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "No required platform lock-in",
      reviewHref: getPosReviewUrl("square-pos"),
    },
    {
      slug: "lightspeed-pos",
      name: "Lightspeed",
      logoSrc: LOGOS.lightspeed,
      bestFor: "Retail with ecommerce integrations",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Retail depth and channel sync",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Unified catalog and inventory across channels",
      body: "The biggest benefit of an ecommerce-aware POS is one product catalog and one inventory count for your website and your register. Sales from either channel update the same stock so you don’t oversell. Shopify POS does this natively on Shopify; Square and Lightspeed achieve it via integrations with ecommerce platforms.",
    },
    {
      heading: "When ecommerce sellers should choose Shopify POS vs Square",
      body: "Choose Shopify POS when your primary sales channel is or will be a Shopify store—you get the tightest unification. Choose Square when you want to avoid platform lock-in, don’t need Shopify for ecommerce, or sell in person first with ecommerce as a secondary channel. Both can work; the decision hinges on whether Shopify is central to your strategy.",
    },
    {
      heading: "Hardware and reporting that span online and in-store",
      body: "Your POS should support the hardware you need at the register (terminals, printers) and report on combined online and in-person sales. Shopify POS reports natively across channels; Square and Lightspeed combine POS and ecommerce data via their dashboards and integrations.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Shopify POS",
      body: "Shopify POS is the cleanest fit when your catalog, inventory, promotions, and ecommerce checkout already live in Shopify—one platform removes sync delay and phantom stockouts. Trial buy-online-pick-up-in-store and returns across channels with real SKUs that have variants. Validate plan requirements, retail locations, and staff PIN workflows before you outfit a pop-up or showroom. The trade-off is platform commitment; if Shopify is your commerce hub, that is usually a feature. If you are multi-store retail-heavy, confirm retail feature depth meets your roadmap.",
    },
    {
      heading: "Square",
      body: "Square suits sellers who want POS flexibility without marrying a single ecommerce platform: Square Online or integrations can bridge to other carts. During a trial, test how inventory sync behaves when you update counts—latency breaks trust during promotions. Free POS software plus straightforward processing helps omnichannel experiments stay cheap until volume proves a stack. Validate tax and shipping handoffs for your ecommerce connector. Choose Square when in-person is primary today but online could pivot between platforms.",
    },
    {
      heading: "Lightspeed",
      body: "Lightspeed fits retail-first businesses that also run ecommerce and need deeper inventory, purchasing, and multi-location controls than lighter POS-plus-plugin combos. Pilot stock sync from POS to your connected storefront during a busy week, including partial shipments and exchanges. It is stronger when retail operations—not only marketing—drive complexity. Compare total subscription and integration costs against Shopify-native paths. Pick Lightspeed when warehouse-style retail truth should lead, and the website follows.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Shopify POS", href: getPosReviewUrl("shopify-pos") },
    { name: "Square", href: getPosReviewUrl("square-pos") },
    { name: "Lightspeed", href: getPosReviewUrl("lightspeed-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Square vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
    { label: "Shopify POS vs Lightspeed", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "POS system for ecommerce", href: "/pos/guides/pos-system-for-ecommerce" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Can POS systems sync online and in-store sales?",
      a: "Yes. Shopify POS keeps online and in-store on one Shopify system. Square and Lightspeed can connect to ecommerce platforms so inventory and sometimes orders sync. The level of unification depends on whether you use the POS vendor’s ecommerce (e.g. Shopify) or third-party integrations.",
    },
    {
      q: "What POS works best with ecommerce platforms?",
      a: "Shopify POS works natively with Shopify. Square integrates with multiple platforms and has its own Square Online. Lightspeed has ecommerce connectors. Choose based on where your online store lives—if it’s on Shopify, Shopify POS is usually the simplest; otherwise Square or Lightspeed give you flexibility.",
    },
    {
      q: "Do I need Shopify to use Shopify POS?",
      a: "Yes. Shopify POS requires a Shopify plan. It’s most cost-effective when you already run or plan to run your online store on Shopify, so that one subscription covers both channels.",
    },
  ] as BestForFaqItem[],
};

// ——— Multi-location ———

export const MULTI_LOCATION_PAGE_PROPS: BestForTemplateProps = {
  title: "Best POS Software for Multi-Location Businesses (2026)",
  subtitle:
    "Compare POS systems that support multiple stores: centralized or per-location inventory, consolidated reporting, and consistent operations across sites.",
  useCase: "multi-location",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Multi-location businesses need a POS that can run consistently across sites while giving managers and HQ visibility into each location’s sales and inventory. Common challenges include inconsistent data, manual consolidation, and difficulty rebalancing stock between stores. The right POS supports multi-store setup, centralized or per-location inventory, and reporting that rolls up by location and overall.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top POS picks for multi-location businesses.",
  editorialSub: "What to look for when you choose POS software for multiple locations.",
  whyThesePicksSub: "Why we chose these tools for multi-location.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "lightspeed-pos",
      name: "Lightspeed",
      badge: "Best for retail multi-location",
      description: "Multi-store inventory, transfers, and consolidated reporting built for retail chains.",
      rating: "4.4",
      startingPrice: "From ~$69/mo",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
      visitUrl: "https://www.lightspeedhq.com",
      logoSrc: LOGOS.lightspeed,
    },
    {
      slug: "revel-systems",
      name: "Revel Systems",
      badge: "Best for larger or complex multi-location",
      description: "Unified POS for retail and restaurant with strong multi-location and enterprise reporting.",
      rating: "4.2",
      startingPrice: "Quote",
      reviewHref: getPosReviewUrl("revel-systems"),
      visitUrl: "https://revelsystems.com",
      logoSrc: LOGOS.revel,
    },
    {
      slug: "epos-now",
      name: "Epos Now",
      badge: "Best for flexible multi-location",
      description: "POS that supports multiple locations with competitive pricing and broad feature set.",
      rating: "4.2",
      startingPrice: "From ~$29/mo",
      reviewHref: getPosReviewUrl("epos-now"),
      visitUrl: "https://www.eposnow.com",
      logoSrc: LOGOS.eposNow,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "lightspeed-pos",
      name: "Lightspeed",
      logoSrc: LOGOS.lightspeed,
      bestFor: "Retail multi-location and multi-store",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Retail inventory and location management",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
    },
    {
      slug: "revel-systems",
      name: "Revel Systems",
      logoSrc: LOGOS.revel,
      bestFor: "Larger or complex multi-location operations",
      startingPrice: "Quote",
      standoutFeature: "Unified retail and restaurant at scale",
      reviewHref: getPosReviewUrl("revel-systems"),
    },
    {
      slug: "epos-now",
      name: "Epos Now",
      logoSrc: LOGOS.eposNow,
      bestFor: "Retail and hospitality multi-location",
      startingPrice: "From ~$29/mo",
      standoutFeature: "Flexible multi-location at lower entry cost",
      reviewHref: getPosReviewUrl("epos-now"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Centralized vs per-location inventory and reporting",
      body: "Multi-location POS should let you see sales and inventory by location and roll up to a consolidated view. You may want to transfer stock between locations, apply consistent pricing or promotions, and manage permissions so location managers see only what they need. Lightspeed, Revel, and Epos Now all support multi-location with different depth and pricing.",
    },
    {
      heading: "Consistency across sites without sacrificing local control",
      body: "HQ needs to ensure product catalogs, pricing, and reporting stay consistent while allowing location-level overrides where appropriate. The right POS supports centralized product and price management with the option to push updates to all or selected locations.",
    },
    {
      heading: "How to choose POS for multiple locations",
      body: "Consider business size (number of locations and registers), whether you’re retail or restaurant, and how much you need centralized inventory and reporting. Lightspeed is strong for retail multi-location; Revel for larger or mixed retail-and-restaurant operations; Epos Now for flexible multi-location at a lower entry price. Square can support multiple locations with simpler reporting—compare total cost and depth before you decide.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Lightspeed",
      body: "Lightspeed is purpose-built for multi-store retail: transfers, consolidated catalogs, and reporting that rolls up by location without spreadsheet surgery. Trial inter-store transfers and cycle counts while watching permissions—managers should see their store, finance should see all. Validate ecommerce connectors if some locations fulfill web orders. It suits chains that outgrew single-store POS but are not ready for full enterprise ERP. Budget training; consistent operations across sites is a people problem as much as software.",
    },
    {
      heading: "Revel Systems",
      body: "Revel targets larger or hybrid retail-and-restaurant groups that need unified POS, customization, and enterprise-grade controls across many sites. Expect demos to include quote-based pricing, implementation partners, and longer rollout timelines—this is not a weekend self-serve signup. Trial should stress custom menus, complex discounts, and franchise-style reporting if those apply. Choose Revel when compliance, scale, and bespoke workflows justify heavier TCO. Validate support and uptime commitments for your peak seasons.",
    },
    {
      heading: "Epos Now",
      body: "Epos Now offers multi-location retail and hospitality capability at a lower entry price than many premium competitors, helpful when you are proving a multi-site model. During a trial, confirm inventory visibility and reporting depth match how your area managers actually run P&L reviews. Test integrations to accounting and payroll if each location is semi-autonomous. It is a pragmatic bridge when you need more than Square multi-location but cannot fund Revel yet. Watch add-on costs as you enable modules site by site.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Lightspeed", href: getPosReviewUrl("lightspeed-pos") },
    { name: "Revel Systems", href: getPosReviewUrl("revel-systems") },
    { name: "Epos Now", href: getPosReviewUrl("epos-now") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Shopify POS vs Lightspeed", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
    { label: "Lightspeed vs Vend", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
    { label: "POS inventory integration", href: "/pos/guides/pos-inventory-integration" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS systems support multiple locations?",
      a: "Lightspeed, Revel Systems, Epos Now, Vend, and Square (with add-ons) all support multiple locations. Lightspeed and Vend are strong for retail multi-store; Revel for larger or mixed operations; Epos Now for flexible multi-location at a lower price.",
    },
    {
      q: "How do POS systems manage multiple stores?",
      a: "They typically let you set up each store as a location, assign terminals and users to locations, and run consolidated or per-location reporting. Inventory can be tracked per location with optional transfers between sites. The exact features depend on the vendor—compare multi-location depth and pricing before you commit.",
    },
    {
      q: "Can Square handle multiple locations?",
      a: "Yes. Square supports multiple locations with per-location reporting and optional inventory. For complex multi-store inventory and transfers, Lightspeed or Vend may offer more depth; for simpler multi-location at low cost, Square can work.",
    },
  ] as BestForFaqItem[],
};
