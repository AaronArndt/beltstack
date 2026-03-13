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
      name: "Square POS",
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
      name: "Clover POS",
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
      name: "Square POS",
      logoSrc: LOGOS.square,
      bestFor: "Small businesses that want no monthly software fee",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "Simple setup and transparent pricing",
      reviewHref: getPosReviewUrl("square-pos"),
    },
    {
      slug: "clover-pos",
      name: "Clover POS",
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
      heading: "When to choose Square POS vs Clover",
      body: "Choose Square when you want the lowest upfront cost and no required monthly software fee; it’s ideal for in-person-first or multi-type small businesses. Choose Clover when you want more hardware options and an app market to extend functionality, and you’re okay with a monthly bundle. Both support retail, food service, and services.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Square POS",
      body: "Square is the best default for many small businesses because it’s easy to start: free software, low-cost hardware, and pay-per-swipe processing. You get payments, basic inventory, and reporting without a long-term contract. It fits retailers, cafes, and service businesses that prioritize simplicity and transparent pricing.",
    },
    {
      heading: "Clover POS",
      body: "Clover suits small businesses that want a broader choice of terminals and add-on apps. You can run a simple counter or a full register and extend with loyalty, scheduling, or industry apps. The trade-off is a monthly fee that typically includes hardware; if that fits your budget, Clover’s flexibility is a strong fit.",
    },
    {
      heading: "Shopify POS",
      body: "Shopify POS is the right choice when your primary channel is or will be a Shopify store. It keeps online and in-store sales, inventory, and orders in one system. If you’re not on Shopify, Square or Clover are usually simpler; if you are, Shopify POS reduces double entry and keeps one source of truth.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Square POS", href: getPosReviewUrl("square-pos") },
    { name: "Clover POS", href: getPosReviewUrl("clover-pos") },
    { name: "Shopify POS", href: getPosReviewUrl("shopify-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Square POS vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
    { label: "Square POS vs Clover POS", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best POS for small business (guide)", href: "/pos/guides/best-pos-for-small-business" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
    { label: "POS software pricing guide", href: "/pos/guides/pos-software-pricing-guide" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS system is best for small businesses?",
      a: "Square POS is a top choice for many small businesses because of its free software, simple setup, and flexible hardware. Clover and Shopify POS are also popular—Clover for hardware and app choice, Shopify POS when you already sell or plan to sell online on Shopify.",
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
      name: "Lightspeed POS",
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
      name: "Square POS",
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
      name: "Vend POS (Lightspeed Retail)",
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
      name: "Lightspeed POS",
      logoSrc: LOGOS.lightspeed,
      bestFor: "Retail with multi-location and deeper inventory",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Retail inventory and multi-store reporting",
      reviewHref: getPosReviewUrl("lightspeed-pos"),
    },
    {
      slug: "square-pos",
      name: "Square POS",
      logoSrc: LOGOS.square,
      bestFor: "Single-location or straightforward retail",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "Ease of use and low cost to start",
      reviewHref: getPosReviewUrl("square-pos"),
    },
    {
      slug: "vend-pos",
      name: "Vend POS",
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
      heading: "Lightspeed POS",
      body: "Lightspeed is built for retail. It offers robust inventory, multi-location support, purchasing, and reporting that fit stores with more than basic needs. If you’ve outgrown Square or a simple counter POS, Lightspeed is a strong next step.",
    },
    {
      heading: "Square POS",
      body: "Square works well for single-location or straightforward retail when you want minimal cost and quick setup. You get payments, basic inventory, and reporting; add-ons extend capability. It’s a good fit until you need heavy multi-store or deeper retail workflows.",
    },
    {
      heading: "Vend POS (Lightspeed Retail)",
      body: "Vend is retail-focused with strong inventory and multi-store support, now part of Lightspeed. It’s a good alternative when you want dedicated retail POS with a clear path into the Lightspeed ecosystem.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Lightspeed POS", href: getPosReviewUrl("lightspeed-pos") },
    { name: "Square POS", href: getPosReviewUrl("square-pos") },
    { name: "Vend POS", href: getPosReviewUrl("vend-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Shopify POS vs Lightspeed POS", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
    { label: "Lightspeed POS vs Vend POS", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
    { label: "Square POS vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Retail POS software guide", href: "/pos/guides/retail-pos-software-guide" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS system is best for retail stores?",
      a: "Lightspeed POS and Vend POS are strong for retail stores that need inventory and multi-location. Square POS is a good fit for single-location or simpler retail. The best choice depends on your store count, SKU complexity, and whether you need deep reporting and purchasing.",
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
      name: "Toast POS",
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
      name: "Square POS",
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
      name: "Toast POS",
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
      name: "Square POS",
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
      heading: "Toast POS",
      body: "Toast is purpose-built for restaurants. It handles tables, courses, kitchen display, online ordering, and restaurant-specific reporting. It’s the best fit for full-service and high-volume quick-service operations that need a single system for front and back of house.",
    },
    {
      heading: "TouchBistro",
      body: "TouchBistro is a strong alternative for independent and small-chain restaurants. It offers table management, menus, and optional KDS and online ordering with tiered pricing that many find more approachable than quote-only options.",
    },
    {
      heading: "Square POS",
      body: "Square works for simple food service—cafes, food trucks, counters—when you don’t need table management or a full kitchen display. It’s the most cost-effective option for basic payments and item tracking.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Toast POS", href: getPosReviewUrl("toast-pos") },
    { name: "TouchBistro", href: getPosReviewUrl("touchbistro") },
    { name: "Square POS", href: getPosReviewUrl("square-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Toast POS vs Square POS", href: getPosCompareUrl("toast-pos-vs-square-pos") },
    { label: "Square POS vs Clover POS", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Restaurant POS systems guide", href: "/pos/guides/restaurant-pos-systems-guide" },
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS system is best for restaurants?",
      a: "Toast POS and TouchBistro are the top choices for restaurants. Toast is best for full-service and complex quick-service; TouchBistro is strong for independents and small chains with tiered pricing. Square can work for simple cafes or counters.",
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
      name: "Square POS",
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
      name: "Lightspeed POS",
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
      name: "Square POS",
      logoSrc: LOGOS.square,
      bestFor: "In-person-first with optional ecommerce",
      startingPrice: "Free software, hardware from $49",
      standoutFeature: "No required platform lock-in",
      reviewHref: getPosReviewUrl("square-pos"),
    },
    {
      slug: "lightspeed-pos",
      name: "Lightspeed POS",
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
      body: "Shopify POS is the best fit when your storefront is on Shopify. Online and in-store sales, inventory, and orders live in one system. There’s no sync delay or integration fragility—it’s one platform. The trade-off is the Shopify subscription; if you’re not on Shopify, Square or Lightspeed may be better.",
    },
    {
      heading: "Square POS",
      body: "Square suits ecommerce businesses that want flexibility. You can add Square Online or connect to other storefronts; inventory can sync via integrations. You’re not locked into one ecommerce platform, and you get free POS software and straightforward pricing.",
    },
    {
      heading: "Lightspeed POS",
      body: "Lightspeed fits retail businesses that also sell online and need deeper inventory and multi-location. It connects to ecommerce platforms so stock stays in sync. Choose it when you need more retail operational depth than Shopify POS or Square provide.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Shopify POS", href: getPosReviewUrl("shopify-pos") },
    { name: "Square POS", href: getPosReviewUrl("square-pos") },
    { name: "Lightspeed POS", href: getPosReviewUrl("lightspeed-pos") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Square POS vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
    { label: "Shopify POS vs Lightspeed POS", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
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
      name: "Lightspeed POS",
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
      name: "Lightspeed POS",
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
      heading: "Lightspeed POS",
      body: "Lightspeed is built for retail multi-location. It offers multi-store inventory, transfers, and consolidated reporting so you can see performance by location and overall. It’s a strong fit for retail chains that have outgrown single-location POS.",
    },
    {
      heading: "Revel Systems",
      body: "Revel targets larger or more complex multi-location operations—retail and restaurant—with a unified platform. It supports customization and enterprise-style reporting. Expect quote-based pricing and a longer implementation; it’s suited to chains that need consistency and control at scale.",
    },
    {
      heading: "Epos Now",
      body: "Epos Now offers multi-location support at a lower entry price than many competitors. It works for retail and hospitality and can scale across sites. It’s a good option when you need multi-location capability without the cost of premium retail or enterprise POS.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Lightspeed POS", href: getPosReviewUrl("lightspeed-pos") },
    { name: "Revel Systems", href: getPosReviewUrl("revel-systems") },
    { name: "Epos Now", href: getPosReviewUrl("epos-now") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Shopify POS vs Lightspeed POS", href: getPosCompareUrl("shopify-pos-vs-lightspeed-pos") },
    { label: "Lightspeed POS vs Vend POS", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
    { label: "POS inventory integration", href: "/pos/guides/pos-inventory-integration" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What POS systems support multiple locations?",
      a: "Lightspeed POS, Revel Systems, Epos Now, Vend POS, and Square (with add-ons) all support multiple locations. Lightspeed and Vend are strong for retail multi-store; Revel for larger or mixed operations; Epos Now for flexible multi-location at a lower price.",
    },
    {
      q: "How do POS systems manage multiple stores?",
      a: "They typically let you set up each store as a location, assign terminals and users to locations, and run consolidated or per-location reporting. Inventory can be tracked per location with optional transfers between sites. The exact features depend on the vendor—compare multi-location depth and pricing before you commit.",
    },
    {
      q: "Can Square POS handle multiple locations?",
      a: "Yes. Square supports multiple locations with per-location reporting and optional inventory. For complex multi-store inventory and transfers, Lightspeed or Vend may offer more depth; for simpler multi-location at low cost, Square can work.",
    },
  ] as BestForFaqItem[],
};
