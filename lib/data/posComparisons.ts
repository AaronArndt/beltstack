/**
 * POS (Point of Sale) comparison data.
 * Used by app/pos/compare/page.tsx and app/pos/compare/[comparison]/page.tsx.
 */

import { getPosReviewUrl, getPosBestForUrl } from "@/lib/routes";
import { POS_LOGOS } from "./posHubData";
import { POS_TRADE_SCENARIO_NAV_LINKS } from "./posBestForTrades";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getPosCompareUrlFromSlug(slug: string): string {
  return `/pos/compare/${slug}`;
}

// ——— Product refs for POS comparisons ———

const P = {
  squarePos: {
    name: "Square",
    slug: "square-pos",
    reviewHref: getPosReviewUrl("square-pos"),
    logoSrc: POS_LOGOS.square,
    visitUrl: "https://squareup.com",
    bestForSummary: "Best overall POS for many small businesses with simple setup and integrated payments.",
    rating: "4.6",
    startingPrice: "Free software, hardware from $49",
  },
  shopifyPos: {
    name: "Shopify POS",
    slug: "shopify-pos",
    reviewHref: getPosReviewUrl("shopify-pos"),
    logoSrc: POS_LOGOS.shopify,
    visitUrl: "https://www.shopify.com/pos",
    bestForSummary: "Best POS for ecommerce-first businesses that want unified online and in-store selling.",
    rating: "4.5",
    startingPrice: "From $39/mo (with Shopify plan)",
  },
  lightspeedPos: {
    name: "Lightspeed",
    slug: "lightspeed-pos",
    reviewHref: getPosReviewUrl("lightspeed-pos"),
    logoSrc: POS_LOGOS.lightspeed,
    visitUrl: "https://www.lightspeedhq.com",
    bestForSummary: "Best for retail businesses needing deeper inventory and multi-location support.",
    rating: "4.4",
    startingPrice: "From ~$69/mo",
  },
  cloverPos: {
    name: "Clover",
    slug: "clover-pos",
    reviewHref: getPosReviewUrl("clover-pos"),
    logoSrc: POS_LOGOS.clover,
    visitUrl: "https://www.clover.com",
    bestForSummary: "Best POS hardware ecosystem with a wide choice of terminals and add-on apps.",
    rating: "4.3",
    startingPrice: "From ~$69/mo (with hardware)",
  },
  toastPos: {
    name: "Toast",
    slug: "toast-pos",
    reviewHref: getPosReviewUrl("toast-pos"),
    logoSrc: POS_LOGOS.toast,
    visitUrl: "https://pos.toasttab.com",
    bestForSummary: "Best POS for restaurants with table management, kitchen display, and online ordering.",
    rating: "4.5",
    startingPrice: "Quote (restaurant-focused)",
  },
  vendPos: {
    name: "Vend (Lightspeed Retail)",
    slug: "vend-pos",
    reviewHref: getPosReviewUrl("vend-pos"),
    logoSrc: POS_LOGOS.vend,
    visitUrl: "https://www.lightspeedhq.com/vend",
    bestForSummary: "Strong retail POS with inventory and multi-store support, now part of Lightspeed.",
    rating: "4.3",
    startingPrice: "From ~$69/mo",
  },
  touchbistroPos: {
    name: "TouchBistro",
    slug: "touchbistro",
    reviewHref: getPosReviewUrl("touchbistro"),
    logoSrc: POS_LOGOS.touchbistro,
    visitUrl: "https://www.touchbistro.com",
    bestForSummary: "Restaurant-focused iPad POS with table management, menus, and published tiered pricing.",
    rating: "4.4",
    startingPrice: "From ~$69/mo",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best POS software (roundup)", href: "/pos/best-pos-software" },
  { label: "Payment processing comparisons", href: "/payment-processing/compare" },
  { label: "Best for small business", href: getPosBestForUrl("small-business") },
  { label: "Best for retail", href: getPosBestForUrl("retail") },
  { label: "Best for restaurants", href: getPosBestForUrl("restaurants") },
  { label: "Best for ecommerce", href: getPosBestForUrl("ecommerce") },
  { label: "Best for multi-location", href: getPosBestForUrl("multi-location") },
  ...POS_TRADE_SCENARIO_NAV_LINKS,
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
      categoryHref: "/pos",
      categoryLabel: "POS Software",
    },
  ];
}

const BASE_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  {
    feature: "Payment processing",
    productA: "Integrated payments, cards, contactless",
    productB: "Integrated payments, cards, contactless",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Inventory management",
    productA: "Items, stock levels, low-stock alerts",
    productB: "Items, stock levels, low-stock alerts",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Reporting and analytics",
    productA: "Sales by item, period, and payment type",
    productB: "Sales by item, period, and payment type",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Integrations",
    productA: "Accounting, ecommerce, and third-party apps",
    productB: "Accounting, ecommerce, and third-party apps",
    supportA: "supported",
    supportB: "supported",
  },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // ——— Square vs Shopify POS ———
  buildComparison("square-pos-vs-shopify-pos", "squarePos", "shopifyPos", {
    summaryParagraph:
      "Square and Shopify POS both serve small businesses at the register, but they target different priorities. Square is a flexible, general-purpose POS with no monthly software fee—ideal when you want simple setup and transparent pricing. Shopify POS is built for businesses that sell (or plan to sell) online on Shopify, so online and in-store sales and inventory live in one system.",
    quickRecommendationA:
      "Choose Square if you want a straightforward POS with no required subscription, flexible hardware, and pay-per-swipe pricing—especially for in-person-first or multi-type businesses.",
    quickRecommendationB:
      "Choose Shopify POS if your primary channel is or will be a Shopify store and you want one platform for ecommerce and in-person sales and inventory.",
    quickVerdictParagraphs: [
      "Square is our top pick for many small businesses because it’s easy to start: free software, low-cost hardware, and no long-term contract. You get payments, basic inventory, and reporting in one place. It works well for retailers, cafes, and service businesses that don’t need deep ecommerce or restaurant-specific workflows. The trade-off is that advanced features and multi-channel depth live in paid add-ons.",
      "Shopify POS shines when Shopify is already central to your business. If you run (or plan to run) an online store on Shopify, adding POS means one product catalog, one inventory, and one set of orders for both channels. That unification reduces double entry and overselling. The trade-off is the Shopify subscription—you’re paying for the full platform, so it’s less attractive for in-person-only stores with no ecommerce plans.",
      "If you want the lowest commitment and don’t need Shopify, Square is usually the better fit. If you’re all-in on Shopify for ecommerce, Shopify POS is the logical choice for in-person sales.",
    ],
    decisionGuideA: [
      "You want no monthly software fee and simple, transparent pricing.",
      "You sell in person (and maybe online) but don’t plan to build a full Shopify store.",
      "You prefer a general-purpose POS that works for retail, food service, or services.",
    ],
    decisionGuideB: [
      "You already sell or plan to sell online on Shopify.",
      "You want one system for online and in-store inventory and orders.",
      "You’re okay paying a Shopify subscription for the combined ecommerce and POS platform.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.7", productB: "4.6" },
      { category: "Ecommerce integration", productA: "4.2", productB: "4.8" },
      { category: "Pricing & value", productA: "4.7", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Ecommerce and online store",
        productA: "Optional Square Online; can connect to other platforms",
        productB: "Native Shopify store; online and in-store unified",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Monthly software cost",
        productA: "Free tier; paid add-ons optional",
        productB: "Requires Shopify plan (from ~$39/mo)",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Square offers free POS software; you pay for hardware (from around $49) and per-transaction processing. There’s no required monthly software fee. Shopify POS is included with Shopify plans, which start around $39/month; hardware is separate. For in-person-only businesses, Square is typically cheaper. For businesses that already need Shopify for ecommerce, the combined cost of Shopify plus POS can be competitive.",
    prosConsA: {
      pros: [
        "No monthly software fee; transparent, pay-per-swipe pricing.",
        "Simple setup and flexible hardware options.",
        "Works for retail, food service, and services without locking you into one vertical.",
      ],
      cons: [
        "Less depth than Shopify for unified online and in-store selling.",
        "Advanced features require paid add-ons or higher tiers.",
      ],
    },
    prosConsB: {
      pros: [
        "Single system for ecommerce and in-person sales and inventory.",
        "Strong fit when Shopify is already your storefront.",
        "Unified customer and order data across channels.",
      ],
      cons: [
        "Requires a Shopify subscription; not ideal for in-person-only businesses.",
        "Hardware and plan costs can exceed Square for simple use cases.",
      ],
    },
    bestFor: [
      {
        heading: "Best for in-person-first and flexible POS",
        body: "Square is the better fit if you want minimal commitment, no monthly software fee, and a POS that works across retail, food service, and services. It’s especially strong for small businesses that prioritize simplicity and transparent pricing.",
      },
      {
        heading: "Best for ecommerce-first businesses",
        body: "Shopify POS is the better fit if your primary sales channel is (or will be) a Shopify store and you want one platform for online and in-store. Inventory and orders stay in sync without juggling multiple systems.",
      },
    ],
    alternatives: [
      { name: "Clover", href: getPosReviewUrl("clover-pos"), description: "Another flexible POS with a broad hardware and app ecosystem.", logoSrc: POS_LOGOS.clover },
      { name: "Lightspeed", href: getPosReviewUrl("lightspeed-pos"), description: "Better for retail-focused businesses that need deeper inventory and multi-location.", logoSrc: POS_LOGOS.lightspeed },
    ],
    faqs: [
      {
        q: "Is Square or Shopify POS better for small businesses?",
        a: "Square is often better for small businesses that sell mainly in person and want no monthly software fee. Shopify POS is better when you already run or plan to run a Shopify online store and want one system for both channels.",
      },
      {
        q: "Can I use Square if I have a Shopify store?",
        a: "Yes. You can use Square for in-person sales and Shopify for online, but you’ll manage two systems and may need to sync inventory manually or via integrations. If you want one unified system, Shopify POS is simpler.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for no monthly fee", winner: "A" },
      { label: "Winner for unified ecommerce + POS", winner: "B" },
    ],
    moreComparisons: [
      { label: "Square vs Lightspeed", href: getPosCompareUrlFromSlug("square-pos-vs-lightspeed-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best for most SMBs (in-person)", winner: "A", reason: "Square offers free software and flexible hardware with no required subscription." },
      { label: "Best for Shopify stores", winner: "B", reason: "Shopify POS unifies online and in-store sales and inventory on one platform." },
    ],
  }),

  // ——— Square vs Clover ———
  buildComparison("square-pos-vs-clover-pos", "squarePos", "cloverPos", {
    summaryParagraph:
      "Square and Clover are both popular all-in-one options for small businesses. Square is known for free software and straightforward pricing; Clover offers a wider range of hardware and an app market so you can tailor the register to your workflow. Choosing between them often comes down to whether you prioritize lowest cost and simplicity (Square) or hardware choice and add-on apps (Clover).",
    quickRecommendationA:
      "Choose Square if you want the lowest upfront cost, no monthly software fee, and a simple setup that gets you taking payments quickly.",
    quickRecommendationB:
      "Choose Clover if you want more hardware options (terminals, registers, handhelds) and an app market to extend functionality without changing devices.",
    quickVerdictParagraphs: [
      "Square has built its reputation on simplicity and transparent pricing. There’s no monthly software fee for basic POS; you pay for hardware and per-transaction processing. That makes it easy to start and scale without long-term commitment. Hardware options are solid—readers, terminals, registers—but the lineup is more focused than Clover’s. For many small retailers, cafes, and service businesses, Square is the path of least resistance.",
      "Clover emphasizes choice. You can run a simple counter setup or a full register with multiple stations; you can add loyalty, scheduling, or industry-specific tools via the Clover App Market. The trade-off is that pricing typically bundles software and hardware into a monthly fee, so you’re rarely at zero monthly cost. For businesses that want to customize their checkout and don’t mind a subscription, Clover is a strong alternative.",
      "If your main goal is to get a POS running quickly with minimal cost and commitment, Square usually wins. If you care more about hardware flexibility and add-on apps, Clover is worth the extra monthly investment.",
    ],
    decisionGuideA: [
      "You want no or minimal monthly software cost.",
      "You prefer a simple, well-documented setup with fewer choices to make.",
      "You’re okay with Square’s hardware lineup and don’t need a large app ecosystem.",
    ],
    decisionGuideB: [
      "You want to choose from a wide variety of terminals, registers, and handhelds.",
      "You plan to add loyalty, scheduling, or other capabilities via apps.",
      "You’re comfortable with a monthly bundle that includes software and hardware.",
    ],
    ratingsComparison: [
      { category: "Pricing & value", productA: "4.7", productB: "4.0" },
      { category: "Hardware options", productA: "4.3", productB: "4.7" },
      { category: "Ease of use", productA: "4.7", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Hardware variety",
        productA: "Readers, terminals, registers; focused lineup",
        productB: "Wide range of devices and form factors; app market",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Monthly cost",
        productA: "Free software tier available",
        productB: "Typically bundled monthly fee with hardware",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Square offers free POS software; hardware starts around $49 and processing is per transaction. Clover typically bundles software and hardware into a monthly fee starting around $69. For businesses that want to minimize recurring cost, Square is usually cheaper. For those that value hardware choice and apps and are okay with a subscription, Clover’s bundle can be justified.",
    prosConsA: {
      pros: [
        "Free software and low upfront cost; no long-term contract.",
        "Simple setup and clear pricing.",
        "Good enough hardware range for most SMBs.",
      ],
      cons: [
        "Fewer hardware and app options than Clover.",
        "Advanced features require paid add-ons.",
      ],
    },
    prosConsB: {
      pros: [
        "Broad hardware selection and Clover App Market for add-ons.",
        "Flexible for retail, restaurant, and service businesses.",
        "Bundled pricing can simplify budgeting.",
      ],
      cons: [
        "Monthly cost is typically higher than Square’s free tier.",
        "Can feel fragmented when relying on many third-party apps.",
      ],
    },
    bestFor: [
      {
        heading: "Best for lowest cost and simplicity",
        body: "Square is the better fit if you want to get started quickly with minimal monthly cost and a straightforward hardware and software stack.",
      },
      {
        heading: "Best for hardware and app flexibility",
        body: "Clover is the better fit if you want to choose your devices and extend the system with apps, and you’re okay with a monthly bundle.",
      },
    ],
    alternatives: [
      { name: "Shopify POS", href: getPosReviewUrl("shopify-pos"), description: "Better when ecommerce is central and you want one system for online and in-store.", logoSrc: POS_LOGOS.shopify },
      { name: "Toast", href: getPosReviewUrl("toast-pos"), description: "Purpose-built for restaurants if you need table and kitchen management.", logoSrc: POS_LOGOS.toast },
    ],
    faqs: [
      {
        q: "Is Square or Clover better for small businesses?",
        a: "Square is often better for small businesses that want the lowest cost and simplest setup. Clover is better when you want more hardware options and an app market, and you’re okay with a monthly fee.",
      },
      {
        q: "Does Clover have a free option like Square?",
        a: "Clover typically bundles software and hardware into a monthly fee, so there isn’t a free-software tier like Square’s. You’re paying for the device and software together.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for low cost", winner: "A" },
      { label: "Winner for hardware choice", winner: "B" },
    ],
    moreComparisons: [
      { label: "Shopify POS vs Clover", href: getPosCompareUrlFromSlug("shopify-pos-vs-clover-pos") },
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
      { label: "Toast vs Square", href: getPosCompareUrlFromSlug("toast-pos-vs-square-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— Shopify POS vs Lightspeed ———
  buildComparison("shopify-pos-vs-lightspeed-pos", "shopifyPos", "lightspeedPos", {
    summaryParagraph:
      "Shopify POS and Lightspeed both serve retailers, but they start from different places. Shopify POS is built for stores that sell online on Shopify and want one system for ecommerce and in-person sales. Lightspeed is built for retail-first operations that need deeper inventory, multi-location, and reporting—whether or not they have a strong ecommerce presence.",
    quickRecommendationA:
      "Choose Shopify POS if your primary sales channel is (or will be) a Shopify store and you want unified online and in-store inventory and orders.",
    quickRecommendationB:
      "Choose Lightspeed if you’re a retail-first business that needs stronger inventory, multi-location, and operational reporting without requiring Shopify for ecommerce.",
    quickVerdictParagraphs: [
      "Shopify POS is the natural choice when Shopify is already your ecommerce platform. You get one product catalog, one inventory, and one order set for your website and your register. That unification is hard to replicate if you’re on another ecommerce platform or building a custom solution. The limitation is that you’re tied to Shopify’s ecosystem and pricing; if you don’t need a full online store, the subscription can feel heavy.",
      "Lightspeed is designed for retail operations that need more than basic POS. It offers deeper inventory management, multi-location support, purchasing and vendor management, and reporting that fits multi-store and merchandising decisions. It can connect to ecommerce platforms, but it doesn’t require you to run your online store on a specific platform. For retailers that are primarily in-person or that use a non-Shopify ecommerce stack, Lightspeed is often a better fit.",
      "If Shopify is central to your business, Shopify POS keeps everything in one place. If you’re retail-first and need operational depth without committing to Shopify, Lightspeed is the stronger option.",
    ],
    decisionGuideA: [
      "You already sell or plan to sell online on Shopify.",
      "You want one system for online and in-store product and order data.",
      "You’re okay with Shopify’s subscription and ecosystem.",
    ],
    decisionGuideB: [
      "You’re a retail-first business with or without a strong ecommerce presence.",
      "You need multi-location inventory and reporting.",
      "You want deeper retail operations without depending on Shopify.",
    ],
    ratingsComparison: [
      { category: "Ecommerce unification", productA: "4.8", productB: "4.2" },
      { category: "Retail operations depth", productA: "4.2", productB: "4.7" },
      { category: "Multi-location", productA: "4.3", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Online + in-store unification",
        productA: "Native Shopify store; single catalog and inventory",
        productB: "Ecommerce integrations; not tied to one platform",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
      {
        feature: "Retail inventory & multi-location",
        productA: "Good for single or few locations",
        productB: "Strong multi-location and retail inventory",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Shopify POS is included with Shopify plans (from around $39/month); hardware is separate. Lightspeed typically starts around $69/month and scales with locations and features; hardware and processing are separate. For businesses that need Shopify anyway, Shopify POS can be cost-effective. For retail-only or non-Shopify ecommerce, Lightspeed’s pricing is often more aligned with what you actually use.",
    prosConsA: {
      pros: [
        "Single system for Shopify ecommerce and in-person sales.",
        "Unified inventory and orders across channels.",
        "Strong app ecosystem and support.",
      ],
      cons: [
        "Requires Shopify; less attractive for non-Shopify retailers.",
        "Retail operational depth lags Lightspeed.",
      ],
    },
    prosConsB: {
      pros: [
        "Retail-focused inventory, multi-location, and reporting.",
        "Not tied to a single ecommerce platform.",
        "Strong for growing and multi-store retail.",
      ],
      cons: [
        "No native unified ecommerce like Shopify; integrations instead.",
        "Higher starting price than basic Shopify plans.",
      ],
    },
    bestFor: [
      {
        heading: "Best for Shopify-centric brands",
        body: "Shopify POS is the better fit when your online store is on Shopify and you want one platform for web and register. Inventory and orders stay in sync by default.",
      },
      {
        heading: "Best for retail-first operations",
        body: "Lightspeed is the better fit when you’re a retailer that needs deeper inventory, multi-location, and reporting, with or without a strong ecommerce component.",
      },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Simpler and lower cost for in-person-first businesses.", logoSrc: POS_LOGOS.square },
      { name: "Vend", href: getPosReviewUrl("vend-pos"), description: "Retail-focused POS in the Lightspeed family; similar positioning.", logoSrc: POS_LOGOS.vend },
    ],
    faqs: [
      {
        q: "Is Shopify POS or Lightspeed better for retail?",
        a: "Lightspeed is usually better for retail-first businesses that need multi-location and deeper inventory. Shopify POS is better when you’re already on Shopify for ecommerce and want one system for online and in-store.",
      },
      {
        q: "Can Lightspeed replace Shopify POS?",
        a: "Yes, if you don’t need Shopify for ecommerce. Lightspeed can connect to other ecommerce platforms and gives you stronger retail operations. If you’re committed to Shopify for online sales, replacing Shopify POS with Lightspeed would mean running two systems.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for Shopify stores", winner: "A" },
      { label: "Winner for retail depth", winner: "B" },
    ],
    moreComparisons: [
      { label: "Shopify POS vs Clover", href: getPosCompareUrlFromSlug("shopify-pos-vs-clover-pos") },
      { label: "Lightspeed vs Clover", href: getPosCompareUrlFromSlug("lightspeed-pos-vs-clover-pos") },
      { label: "Square vs Lightspeed", href: getPosCompareUrlFromSlug("square-pos-vs-lightspeed-pos") },
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
      { label: "Lightspeed vs Vend", href: getPosCompareUrlFromSlug("lightspeed-pos-vs-vend-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— Toast vs Square ———
  buildComparison("toast-pos-vs-square-pos", "toastPos", "squarePos", {
    summaryParagraph:
      "Toast and Square serve different segments of the market. Toast is built specifically for restaurants: table management, kitchen display systems, online ordering, and labor. Square is a general-purpose POS that can work for cafes and simple food service but doesn’t offer the same restaurant-specific depth. Choosing between them depends on whether you run a full-service or complex restaurant (Toast) or a simpler food operation (Square).",
    quickRecommendationA:
      "Choose Toast if you run a full-service or quick-service restaurant and need table management, kitchen display, online ordering, and restaurant-specific reporting.",
    quickRecommendationB:
      "Choose Square if you run a cafe, counter-service, or simple food operation and want straightforward setup with no monthly software fee.",
    quickVerdictParagraphs: [
      "Toast is purpose-built for restaurants. It handles tables, courses, kitchen display, online ordering, delivery integration, and labor in a way that general-purpose POS systems don’t. If you’re running a restaurant with servers, a kitchen that needs order routing, and off-premise orders, Toast is designed for that workflow. The trade-off is quote-based pricing and a commitment that’s often higher than Square’s.",
      "Square works for many small food businesses—cafes, food trucks, simple counters—that don’t need table management or a full kitchen display system. You get payments, items, basic reporting, and optional add-ons at a low or zero software cost. For full-service restaurants, Square can feel limited; for simple operations, it’s often the most cost-effective choice.",
      "If you’re a restaurant that needs the full front-of-house and back-of-house toolkit, Toast is the better fit. If you’re a smaller or simpler food business, Square is usually enough and easier on the budget.",
    ],
    decisionGuideA: [
      "You run a full-service or quick-service restaurant with table and kitchen workflows.",
      "You need kitchen display, online ordering, or delivery integration.",
      "You’re okay with quote-based pricing for restaurant-specific capability.",
    ],
    decisionGuideB: [
      "You run a cafe, counter-service, or simple food operation.",
      "You want minimal monthly cost and simple setup.",
      "You don’t need table management or advanced kitchen display.",
    ],
    ratingsComparison: [
      { category: "Restaurant features", productA: "4.8", productB: "4.0" },
      { category: "Pricing & value (simple ops)", productA: "4.0", productB: "4.7" },
      { category: "Ease of use", productA: "4.5", productB: "4.7" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Table & floor management",
        productA: "Full table and course management",
        productB: "Limited; more suited to counter service",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Kitchen display",
        productA: "Native KDS and order routing",
        productB: "Limited or via add-ons",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Monthly cost (simple food)",
        productA: "Quote-based; typically higher",
        productB: "Free software tier; pay per transaction",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Toast pricing is quote-based and typically includes software, hardware, and payment processing. It’s aimed at restaurants and is usually a larger investment than Square. Square offers free POS software and per-transaction processing, so simple food businesses can run at very low monthly cost. For full-service restaurants, Toast’s higher cost is justified by table and kitchen features; for cafes and counters, Square is often the better value.",
    prosConsA: {
      pros: [
        "Built for restaurants: table management, KDS, online ordering.",
        "Strong reporting for food cost, labor, and day-part performance.",
        "Integrated delivery and online ordering.",
      ],
      cons: [
        "Quote-based pricing; can be high for very small operations.",
        "Focused on restaurants—not for retail or general use.",
      ],
    },
    prosConsB: {
      pros: [
        "Free software and low cost for simple food operations.",
        "Easy setup; works for cafes and counters.",
        "No long-term commitment.",
      ],
      cons: [
        "Limited table and kitchen display features.",
        "Not purpose-built for full-service restaurant workflows.",
      ],
    },
    bestFor: [
      {
        heading: "Best for full-service and complex restaurants",
        body: "Toast is the better fit when you need table management, kitchen display, online ordering, and restaurant-specific reporting. It’s built for how restaurants operate.",
      },
      {
        heading: "Best for cafes and simple food service",
        body: "Square is the better fit for cafes, food trucks, and counter-service operations that don’t need full restaurant workflows and want low cost and simple setup.",
      },
    ],
    alternatives: [
      { name: "TouchBistro", href: getPosReviewUrl("touchbistro"), description: "Another restaurant-focused POS with tiered pricing.", logoSrc: POS_LOGOS.touchbistro },
      { name: "Clover", href: getPosReviewUrl("clover-pos"), description: "General-purpose POS with restaurant apps; less depth than Toast.", logoSrc: POS_LOGOS.clover },
    ],
    faqs: [
      {
        q: "Is Toast or Square better for restaurants?",
        a: "For full-service or complex restaurants, Toast is usually better because it’s built for table management, kitchen display, and restaurant workflows. For cafes and simple food service, Square is often better and cheaper.",
      },
      {
        q: "Can Square replace Toast for a restaurant?",
        a: "Square can work for very simple restaurants (e.g. counter-only or minimal table service). For full-service restaurants that need table and kitchen management, Toast or TouchBistro are more appropriate.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for restaurants", winner: "A" },
      { label: "Winner for simple food / low cost", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toast vs TouchBistro", href: getPosCompareUrlFromSlug("toast-pos-vs-touchbistro") },
      { label: "Clover vs Toast", href: getPosCompareUrlFromSlug("clover-pos-vs-toast-pos") },
      { label: "Square vs TouchBistro", href: getPosCompareUrlFromSlug("square-pos-vs-touchbistro") },
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— Lightspeed vs Vend ———
  buildComparison("lightspeed-pos-vs-vend-pos", "lightspeedPos", "vendPos", {
    summaryParagraph:
      "Lightspeed and Vend (now Lightspeed Retail) are both retail-focused POS systems. Lightspeed offers a broader product family (retail, restaurant, ecommerce); Vend is the retail-focused line that now lives under the Lightspeed brand. They share a similar DNA—strong inventory, multi-store, and reporting—so the choice often comes down to branding, packaging, and which product road map fits your plans.",
    quickRecommendationA:
      "Choose Lightspeed if you want the full Lightspeed retail platform and may later tap into other Lightspeed products (ecommerce, restaurant).",
    quickRecommendationB:
      "Choose Vend (Lightspeed Retail) if you want a dedicated retail POS with strong inventory and multi-store, with a clear path into the Lightspeed family.",
    quickVerdictParagraphs: [
      "Lightspeed is the broader brand: it offers retail POS, restaurant POS, and ecommerce solutions. The retail line gives you deep inventory, multi-location, purchasing, and reporting. It’s a strong fit for retailers that may want to add ecommerce or other modules later. Implementation and support are mature, and the product is well established.",
      "Vend was acquired by Lightspeed and is now positioned as Lightspeed Retail. It remains retail-focused with strong inventory and multi-store support. The experience and road map are aligned with Lightspeed, so you’re not choosing a completely different product—you’re choosing between the main Lightspeed retail product and the Vend/Lightspeed Retail line. For many retailers, either can work; the decision may come down to which packaging and sales channel you encounter.",
      "If you’re comparing the two today, look at current pricing, feature parity, and support. Both are credible retail POS options with similar strengths.",
    ],
    decisionGuideA: [
      "You want the main Lightspeed retail product and possible access to other Lightspeed modules.",
      "You’re a retailer that may add ecommerce or multi-brand later.",
      "You prefer the Lightspeed branding and road map.",
    ],
    decisionGuideB: [
      "You want a retail-focused POS that’s part of the Lightspeed family.",
      "You’re comparing Vend/Lightspeed Retail packaging and pricing.",
      "You need strong inventory and multi-store without needing other Lightspeed products.",
    ],
    ratingsComparison: [
      { category: "Retail features", productA: "4.6", productB: "4.4" },
      { category: "Multi-location", productA: "4.6", productB: "4.4" },
      { category: "Ecosystem breadth", productA: "4.5", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Product family",
        productA: "Full Lightspeed (retail, restaurant, ecommerce)",
        productB: "Lightspeed Retail (retail-focused line)",
        supportA: "supported",
        supportB: "supported",
      },
      {
        feature: "Retail inventory & multi-store",
        productA: "Strong multi-location and retail workflows",
        productB: "Strong multi-location and retail workflows",
        supportA: "supported",
        supportB: "supported",
      },
    ],
    pricingComparison:
      "Both Lightspeed and Vend (Lightspeed Retail) typically start in a similar price range (around $69/month and up) and scale with locations and features. Pricing and packaging may differ by region and sales channel. Compare current plans and terms for your store count and needs; the total cost of ownership is often similar for comparable capability.",
    prosConsA: {
      pros: [
        "Broad Lightspeed product family (retail, restaurant, ecommerce).",
        "Strong retail inventory and multi-location.",
        "Mature platform and support.",
      ],
      cons: [
        "Can be more than you need if you only want simple retail POS.",
        "Pricing is higher than Square or basic tools.",
      ],
    },
    prosConsB: {
      pros: [
        "Retail-focused with strong inventory and multi-store.",
        "Part of Lightspeed family; aligned road map.",
        "Good for retailers that want a dedicated retail POS.",
      ],
      cons: [
        "Less breadth than full Lightspeed suite.",
        "Branding in transition (Vend → Lightspeed Retail).",
      ],
    },
    bestFor: [
      {
        heading: "Best for full Lightspeed ecosystem",
        body: "Lightspeed is the better fit if you want the main Lightspeed retail product and may add ecommerce or other Lightspeed modules later.",
      },
      {
        heading: "Best for dedicated retail POS in Lightspeed family",
        body: "Vend (Lightspeed Retail) is the better fit if you want a retail-focused POS with a clear path into Lightspeed and similar capability to the main retail line.",
      },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Simpler and lower cost for single-location or straightforward retail.", logoSrc: POS_LOGOS.square },
      { name: "Shopify POS", href: getPosReviewUrl("shopify-pos"), description: "Better when ecommerce on Shopify is central.", logoSrc: POS_LOGOS.shopify },
    ],
    faqs: [
      {
        q: "Is Lightspeed the same as Vend?",
        a: "Vend is now part of Lightspeed and is sold as Lightspeed Retail. They share similar retail POS capability; Lightspeed is the broader brand that also includes restaurant and ecommerce products.",
      },
      {
        q: "Which is better for small retail—Lightspeed or Vend?",
        a: "Both are retail-focused and can work for small retail. Compare current Lightspeed vs Lightspeed Retail (Vend) pricing and features for your store count; capability is often similar.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for ecosystem breadth", winner: "A" },
      { label: "Winner for retail focus", winner: "B" },
    ],
    moreComparisons: [
      { label: "Square vs Lightspeed", href: getPosCompareUrlFromSlug("square-pos-vs-lightspeed-pos") },
      { label: "Lightspeed vs Clover", href: getPosCompareUrlFromSlug("lightspeed-pos-vs-clover-pos") },
      { label: "Lightspeed vs Toast", href: getPosCompareUrlFromSlug("lightspeed-pos-vs-toast-pos") },
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— Square vs Lightspeed ———
  buildComparison("square-pos-vs-lightspeed-pos", "squarePos", "lightspeedPos", {
    summaryParagraph:
      "Square and Lightspeed both run retail registers, but they optimize for different stages of growth. Square wins when you want free software, minimal commitment, and fast setup for a single location or simple operations. Lightspeed wins when inventory, purchasing, multi-location reporting, and retail workflows—not just checkout—drive the evaluation.",
    quickRecommendationA:
      "Choose Square if you want no monthly POS software fee, simple hardware, and a general-purpose register for retail, food, or services.",
    quickRecommendationB:
      "Choose Lightspeed if you are retail-first and need deeper inventory, multi-store visibility, and merchandising-oriented reporting.",
    quickVerdictParagraphs: [
      "We recommend Square for many new and small merchants because the path from signup to first sale is short and the pricing story is easy to explain to owners and bookkeepers. You trade away some operational depth: Lightspeed will still beat Square on purchase orders, vendor management, and multi-location rollups for serious retailers.",
      "Lightspeed is built for stores that think in SKUs, transfers, and locations. If you are opening store two and three, or your GM asks for category margin and stock-on-hand by warehouse, Lightspeed’s product story matches that job.",
      "If you are not sure, pilot Square for a single location; migrate when inventory spreadsheets become a bottleneck. If you already know you need retail ERP–lite features, shortlist Lightspeed alongside Shopify POS and compare total cost with hardware and processing.",
    ],
    decisionGuideA: [
      "You want the lowest recurring software cost and fastest go-live.",
      "You run one or few locations with straightforward inventory.",
      "You may also sell services or light food—not only traditional retail.",
    ],
    decisionGuideB: [
      "Multi-location inventory and transfers are weekly workflows.",
      "You need retail reporting that goes beyond basic sales summaries.",
      "You expect to grow into Lightspeed’s broader product family.",
    ],
    ratingsComparison: [
      { category: "Ease & speed to launch", productA: "4.8", productB: "4.3" },
      { category: "Retail inventory depth", productA: "4.0", productB: "4.7" },
      { category: "Multi-location fit", productA: "4.1", productB: "4.6" },
      { category: "Monthly software cost", productA: "4.8", productB: "4.0" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Multi-store inventory & purchasing",
        productA: "Good for simpler retail",
        productB: "Strong retail operations",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "POS software fee",
        productA: "Free tier available",
        productB: "Subscription typically from ~$69/mo",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Square charges per-transaction processing and can run with no monthly POS software fee on the free tier; optional Square subscriptions and add-ons apply if you use them. Lightspeed charges monthly software fees that typically start around $69 and scale with locations and modules, plus processing and hardware. Compare your real monthly stack on each side—processing plus every software line you would pay—not headline POS prices alone.",
    prosConsA: {
      pros: ["No required POS subscription for basic use.", "Flexible for mixed business types.", "Large ecosystem of integrations."],
      cons: ["Less native depth for complex retail supply chains.", "Advanced ops may require add-ons or workarounds."],
    },
    prosConsB: {
      pros: ["Retail-native workflows and reporting.", "Strong multi-location story.", "Path to ecommerce and restaurant lines under Lightspeed."],
      cons: ["Higher baseline cost than free Square.", "Steeper learning curve for advanced features."],
    },
    bestFor: [
      {
        heading: "Best for simple setup and low recurring POS cost",
        body: "Square is the better fit when you want to go live quickly, can use the free POS tier, and run one or a few locations with straightforward inventory. Lightspeed is the better fit when retail operations, multi-location inventory, and merchandising reports—not just checkout—drive the decision.",
      },
      {
        heading: "Best for retail operations depth",
        body: "Lightspeed is the better fit when purchasing, transfers between stores, and stock accuracy are weekly workflows and you expect to grow into deeper retail tooling.",
      },
      {
        heading: "Best for comparing total monthly cost",
        body: "Add Square processing, hardware, and any paid Square features you need, then compare to Lightspeed’s subscription, processing, and hardware for the same register count—pick the stack that matches the reports and inventory depth you will actually use.",
      },
    ],
    alternatives: [
      { name: "Shopify POS", href: getPosReviewUrl("shopify-pos"), description: "When Shopify ecommerce is central.", logoSrc: POS_LOGOS.shopify },
      { name: "Clover", href: getPosReviewUrl("clover-pos"), description: "When hardware choice and apps matter.", logoSrc: POS_LOGOS.clover },
    ],
    faqs: [
      { q: "Square vs Lightspeed for a boutique?", a: "Single-location boutiques often start on Square; multi-location or inventory-heavy boutiques lean Lightspeed. Compare reporting and stock needs." },
      { q: "Can Lightspeed replace Square later?", a: "Yes, but plan a cutover for items, prices, and inventory counts—run parallel testing before switching processors if needed." },
    ],
    sidebarWinners: [
      { label: "Winner for low cost / simplicity", winner: "A" },
      { label: "Winner for retail operations", winner: "B" },
    ],
    moreComparisons: [
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
      { label: "Lightspeed vs Clover", href: getPosCompareUrlFromSlug("lightspeed-pos-vs-clover-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best to start fast", winner: "A", reason: "Square keeps software cost and setup friction low." },
      { label: "Best for retail depth", winner: "B", reason: "Lightspeed is built around inventory and multi-store workflows." },
    ],
  }),

  // ——— Square vs Vend ———
  buildComparison("square-pos-vs-vend-pos", "squarePos", "vendPos", {
    summaryParagraph:
      "Square is a broad SMB POS with free software options; Vend (Lightspeed Retail) is a retail-focused POS in the Lightspeed family with strong inventory and multi-store features. Choose Square for flexibility and low entry cost; choose Vend when retail operations depth matters more than zero monthly fees.",
    quickRecommendationA:
      "Choose Square when you want the simplest pricing story and a POS that can flex across retail, food, and services.",
    quickRecommendationB:
      "Choose Vend when you want dedicated retail POS capability aligned with Lightspeed Retail and stronger merchandising workflows.",
    quickVerdictParagraphs: [
      "Square still wins many first-time POS buyers because the product is approachable and the hardware catalog is easy to understand. Vend competes when the buyer’s language shifts to “variants,” “outlets,” and “stock takes.”",
      "Because Vend is part of Lightspeed, you should compare current packaging: feature names and bundles change post-acquisition. Validate the exact modules you need for registers, ecommerce connectors, and analytics.",
      "We see Square + spreadsheets fail at scale; we see Vend (or Lightspeed) succeed when retailers commit to disciplined item master data—pick the tool that matches your willingness to maintain catalog quality.",
    ],
    decisionGuideA: [
      "You want minimal monthly POS software fees.",
      "Your retail catalog is relatively simple.",
      "You value one vendor for multiple business types.",
    ],
    decisionGuideB: [
      "You describe your business as retail-first.",
      "You need Lightspeed-family retail workflows and support.",
      "You are comparing against Lightspeed Retail specifically.",
    ],
    ratingsComparison: [
      { category: "Retail inventory", productA: "4.0", productB: "4.5" },
      { category: "Ease of adoption", productA: "4.8", productB: "4.4" },
      { category: "Ecosystem breadth (non-retail)", productA: "4.6", productB: "4.0" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Retail POS positioning",
        productA: "General-purpose SMB",
        productB: "Retail-focused (Lightspeed Retail)",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Free POS software tier",
        productA: "Available",
        productB: "Subscription model",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Square’s free tier can make total cost lower for small volume; Vend/Lightspeed Retail typically requires a monthly subscription. Compare quotes with the same register count and integration list.",
    prosConsA: {
      pros: ["Low barrier to start.", "Works beyond pure retail.", "Large user base and integrations."],
      cons: ["Less retail-specialized than Vend.", "Complex retail may outgrow defaults."],
    },
    prosConsB: {
      pros: ["Retail workflows and inventory focus.", "Aligned with Lightspeed roadmap.", "Good for multi-store retail."],
      cons: ["Less attractive for non-retail use cases.", "Ongoing subscription."],
    },
    bestFor: [
      { heading: "Best for flexible SMB checkout", body: "Square fits mixed or simple retail operations that prioritize speed and cost." },
      { heading: "Best for retail-centric Lightspeed buyers", body: "Vend fits retailers evaluating Lightspeed Retail against generalist POS tools." },
    ],
    alternatives: [
      { name: "Lightspeed", href: getPosReviewUrl("lightspeed-pos"), description: "Main Lightspeed retail line for broader ecosystem.", logoSrc: POS_LOGOS.lightspeed },
      { name: "Shopify POS", href: getPosReviewUrl("shopify-pos"), description: "When ecommerce unification matters.", logoSrc: POS_LOGOS.shopify },
    ],
    faqs: [
      { q: "Is Vend the same as Lightspeed?", a: "Vend is sold as Lightspeed Retail; capabilities overlap with Lightspeed’s retail products—confirm current naming with sales." },
      { q: "Square vs Vend for one store?", a: "One store with simple inventory often stays on Square; inventory-heavy retailers compare Vend/Lightspeed." },
    ],
    sidebarWinners: [
      { label: "Winner for simplicity & cost", winner: "A" },
      { label: "Winner for retail focus", winner: "B" },
    ],
    moreComparisons: [
      { label: "Lightspeed vs Vend", href: getPosCompareUrlFromSlug("lightspeed-pos-vs-vend-pos") },
      { label: "Square vs Lightspeed", href: getPosCompareUrlFromSlug("square-pos-vs-lightspeed-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best general SMB POS", winner: "A", reason: "Square stays easy and broad." },
      { label: "Best retail-specialized", winner: "B", reason: "Vend targets retail inventory and outlets." },
    ],
  }),

  // ——— Shopify POS vs Clover ———
  buildComparison("shopify-pos-vs-clover-pos", "shopifyPos", "cloverPos", {
    summaryParagraph:
      "Shopify POS extends your Shopify ecommerce stack to the register; Clover is a hardware-forward POS with an app marketplace and processor-tied bundles. Shopify wins when online and in-store must stay one catalog; Clover wins when terminal choice, peripherals, and app extensions matter more than Shopify lock-in.",
    quickRecommendationA:
      "Choose Shopify POS if Shopify is (or will be) your ecommerce platform and you want unified products, orders, and customers.",
    quickRecommendationB:
      "Choose Clover if you want a wide device lineup, Clover App Market add-ons, and a bundled POS + hardware relationship.",
    quickVerdictParagraphs: [
      "Shopify POS’s unfair advantage is channel unity: fewer reconciliation issues between web and store when both run on Shopify. The cost is subscription dependency—you are buying into Shopify’s world.",
      "Clover’s strength is modularity at the edge: kitchens, salons, and retailers can bolt on apps without changing the whole stack. Clover is less opinionated about ecommerce—you may still run WooCommerce, Amazon, or custom carts separately.",
      "Hybrid businesses should map data flows: if ecommerce is Shopify, POS on Shopify is usually cleaner. If ecommerce is elsewhere and you love Clover hardware, expect integration work.",
    ],
    decisionGuideA: [
      "Shopify powers your online revenue.",
      "You want one customer record across web and store.",
      "Staff already trained on Shopify admin.",
    ],
    decisionGuideB: [
      "You prioritize terminal and peripheral choice.",
      "You want app-market extensibility on the device.",
      "Shopify is not your ecommerce plan.",
    ],
    ratingsComparison: [
      { category: "Omnichannel (Shopify)", productA: "4.9", productB: "4.0" },
      { category: "Hardware & app ecosystem", productA: "4.2", productB: "4.7" },
      { category: "Subscription fit", productA: "4.2", productB: "4.3" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Native Shopify ecommerce",
        productA: "Core integration",
        productB: "Via apps / separate stacks",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Clover App Market",
        productA: "Shopify app ecosystem (different model)",
        productB: "Device-centric app market",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Shopify POS requires a Shopify plan plus hardware; Clover typically bundles monthly software with devices. Compare total cost including processing and the ecommerce subscription you already pay—or would pay—for Shopify.",
    prosConsA: {
      pros: ["Best omnichannel when on Shopify.", "Unified reporting across channels.", "Strong brand and partner ecosystem."],
      cons: ["Less compelling without Shopify ecommerce.", "Monthly platform fees."],
    },
    prosConsB: {
      pros: ["Flexible hardware.", "App market for vertical needs.", "Familiar to ISO/reseller channels."],
      cons: ["Split-stack if ecommerce is on Shopify elsewhere.", "Can get app-heavy."],
    },
    bestFor: [
      { heading: "Best for Shopify merchants", body: "Shopify POS fits brands that already merchandise and fulfill through Shopify online." },
      { heading: "Best for Clover hardware buyers", body: "Clover fits when device strategy and add-ons lead the decision." },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Lower-cost general POS alternative.", logoSrc: POS_LOGOS.square },
      { name: "Lightspeed", href: getPosReviewUrl("lightspeed-pos"), description: "Retail depth without Shopify dependency.", logoSrc: POS_LOGOS.lightspeed },
    ],
    faqs: [
      { q: "Shopify POS vs Clover for retail?", a: "If retail includes a Shopify site, Shopify POS. If retail is in-person-only or ecommerce is elsewhere, Clover may fit better." },
      { q: "Can Clover sync with Shopify?", a: "Integrations may exist but are not as native as Shopify POS—test inventory sync before committing." },
    ],
    sidebarWinners: [
      { label: "Winner for Shopify omnichannel", winner: "A" },
      { label: "Winner for hardware + apps", winner: "B" },
    ],
    moreComparisons: [
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best with Shopify online", winner: "A", reason: "Native catalog and orders across channels." },
      { label: "Best device flexibility", winner: "B", reason: "Clover’s hardware and app market stand out." },
    ],
  }),

  // ——— Lightspeed vs Clover ———
  buildComparison("lightspeed-pos-vs-clover-pos", "lightspeedPos", "cloverPos", {
    summaryParagraph:
      "Lightspeed and Clover both power serious retail and hospitality registers, but Lightspeed leads with retail operations—inventory, purchasing, and multi-location—while Clover leads with hardware variety and app-market customization at the terminal. Choose Lightspeed when store operations data matters; choose Clover when device strategy and modular apps lead.",
    quickRecommendationA:
      "Choose Lightspeed when you need retail-first inventory, reporting, and a path to Lightspeed ecommerce or restaurant products.",
    quickRecommendationB:
      "Choose Clover when you want a wide hardware lineup, Clover App Market extensions, and bundled POS packages common in reseller channels.",
    quickVerdictParagraphs: [
      "Lightspeed buyers often cite purchasing, stock takes, and outlet performance as reasons to upgrade from simpler POS tools. Clover buyers often cite specific peripherals, kitchen printers, or third-party apps that snap onto the device ecosystem.",
      "Neither is strictly “better”—mis-picks happen when a boutique retailer chooses Clover for apps but later needs Lightspeed-style purchasing, or when a multi-store operator chooses Lightspeed but underutilizes its depth.",
      "Demo both with your actual SKU count, return policy workflows, and gift card rules. Involve whoever reconciles inventory monthly—they feel the pain first.",
    ],
    decisionGuideA: [
      "You run multi-location retail with transfers and purchasing.",
      "You want merchandising and margin reporting beyond basic sales.",
      "You may adopt Lightspeed ecommerce later.",
    ],
    decisionGuideB: [
      "Hardware and peripheral mix is non-negotiable.",
      "You rely on Clover apps for loyalty, scheduling, or vertical features.",
      "You prefer bundled monthly POS + device pricing.",
    ],
    ratingsComparison: [
      { category: "Retail operations", productA: "4.7", productB: "4.2" },
      { category: "Hardware flexibility", productA: "4.2", productB: "4.7" },
      { category: "App extensibility", productA: "4.3", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Purchasing & advanced inventory",
        productA: "Strong retail ops",
        productB: "Varies by apps",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Clover App Market",
        productA: "Integrations; different model",
        productB: "Device-centric marketplace",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Lightspeed subscriptions typically start around $69/month and scale with features; Clover bundles vary by reseller and hardware. Compare quotes with the same register count, processing effective rate, and app fees.",
    prosConsA: {
      pros: ["Deep retail workflows.", "Multi-store reporting.", "Broad Lightspeed product family."],
      cons: ["Less hardware variety than Clover.", "Higher learning curve for advanced modules."],
    },
    prosConsB: {
      pros: ["Many devices and peripherals.", "App market for vertical needs.", "Popular with ISO/reseller buyers."],
      cons: ["Retail ops depth may rely on apps.", "Can fragment if too many add-ons."],
    },
    bestFor: [
      { heading: "Best for retail operators", body: "Lightspeed fits merchants managing inventory and locations as a system, not only checkout." },
      { heading: "Best for modular hardware stacks", body: "Clover fits when terminals, kitchens, and app extensions define the rollout." },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Simpler POS if operations are light.", logoSrc: POS_LOGOS.square },
      { name: "Shopify POS", href: getPosReviewUrl("shopify-pos"), description: "When Shopify ecommerce is the anchor.", logoSrc: POS_LOGOS.shopify },
    ],
    faqs: [
      { q: "Lightspeed vs Clover for a coffee shop?", a: "Counter-heavy shops with simple menus may use either; multi-location retail with purchasing leans Lightspeed; heavy app customization leans Clover." },
      { q: "Does Clover replace Lightspeed reporting?", a: "Depends on apps—validate inventory and margin reports in demo before switching." },
    ],
    sidebarWinners: [
      { label: "Winner for retail depth", winner: "A" },
      { label: "Winner for hardware + apps", winner: "B" },
    ],
    moreComparisons: [
      { label: "Square vs Lightspeed", href: getPosCompareUrlFromSlug("square-pos-vs-lightspeed-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best retail backbone", winner: "A", reason: "Lightspeed emphasizes inventory and multi-store operations." },
      { label: "Best modular checkout", winner: "B", reason: "Clover pairs devices with a broad app market." },
    ],
  }),

  // ——— Toast vs Shopify POS ———
  buildComparison("toast-pos-vs-shopify-pos", "toastPos", "shopifyPos", {
    summaryParagraph:
      "Toast is restaurant-native: tables, kitchen, and off-premise ordering. Shopify POS is commerce-native: one stack when Shopify runs your online store. They overlap for hybrid concepts (café + merch), but most buyers should decide based on whether the restaurant floor or the ecommerce catalog is the system of record.",
    quickRecommendationA:
      "Choose Toast when food service workflows—FOH, BOH, and delivery—dominate and you need restaurant-grade tooling.",
    quickRecommendationB:
      "Choose Shopify POS when Shopify ecommerce is central and in-person sales are secondary or tightly coupled to the same catalog.",
    quickVerdictParagraphs: [
      "We rarely recommend Shopify POS as a full replacement for Toast in busy full-service restaurants—the guest check, course firing, and KDS expectations differ. Conversely, Toast is the wrong default for a brand that lives on Shopify Plus with complex online merchandising.",
      "Hybrid brands should split responsibilities clearly: some run Toast for F&B and Shopify for retail SKUs with integration discipline; others simplify to one stack and accept trade-offs.",
      "Validate payment flows, tips, and third-party delivery handoffs in demo—those details decide satisfaction more than marketing pages.",
    ],
    decisionGuideA: [
      "Restaurant revenue drives the business.",
      "You need KDS, courses, and labor tuned to hospitality.",
      "Quote-based restaurant POS is acceptable.",
    ],
    decisionGuideB: [
      "Shopify is already your ecommerce hub.",
      "In-person is mostly retail merch or a simple café attach.",
      "You want unified Shopify customer and order data.",
    ],
    ratingsComparison: [
      { category: "Restaurant operations", productA: "4.9", productB: "3.8" },
      { category: "Shopify ecommerce unity", productA: "3.5", productB: "4.9" },
      { category: "Hybrid café + merch", productA: "4.2", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Kitchen & table service",
        productA: "Native restaurant suite",
        productB: "Limited vs Toast",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Shopify online store unity",
        productA: "Not Shopify-native",
        productB: "Core value",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Toast is typically quote-based with restaurant bundles; Shopify POS requires Shopify subscription fees. Model hybrid businesses with separate line items for FOH tech vs ecommerce platform costs.",
    prosConsA: {
      pros: ["Purpose-built for restaurants.", "Strong delivery and online ordering story.", "Labor and food-cost reporting."],
      cons: ["Not ideal as pure retail POS.", "Higher commitment than simple POS."],
    },
    prosConsB: {
      pros: ["Best when Shopify powers web sales.", "Unified catalog with online.", "Large partner ecosystem."],
      cons: ["Weaker than Toast for full-service restaurant workflows.", "Platform fees even if restaurant is primary."],
    },
    bestFor: [
      { heading: "Best for restaurant-first brands", body: "Toast fits when the dining experience and kitchen throughput set strategy." },
      { heading: "Best for Shopify-first brands", body: "Shopify POS fits when digital merchandising and DTC drive the business and stores support that story." },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Simpler counter POS alternative.", logoSrc: POS_LOGOS.square },
      { name: "TouchBistro", href: getPosReviewUrl("touchbistro"), description: "Restaurant POS between Toast and Square.", logoSrc: POS_LOGOS.touchbistro },
    ],
    faqs: [
      { q: "Toast vs Shopify for a bakery with online orders?", a: "If online is Shopify-heavy, test Shopify POS for pickup; if dine-in and kitchen complexity dominate, Toast or TouchBistro may fit better." },
      { q: "Can Shopify POS run a bar?", a: "Simple bars sometimes; busy bars with tabs and comps usually want restaurant POS depth." },
    ],
    sidebarWinners: [
      { label: "Winner for restaurants", winner: "A" },
      { label: "Winner for Shopify commerce", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toast vs Square", href: getPosCompareUrlFromSlug("toast-pos-vs-square-pos") },
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best for full-service ops", winner: "A", reason: "Toast is engineered around hospitality workflows." },
      { label: "Best for Shopify stack", winner: "B", reason: "Shopify POS extends your existing ecommerce catalog." },
    ],
  }),

  // ——— Clover vs Toast ———
  buildComparison("clover-pos-vs-toast-pos", "cloverPos", "toastPos", {
    summaryParagraph:
      "Clover is a flexible POS platform with hardware options and apps for many verticals; Toast is a restaurant platform with deep FOH/BOH features. Clover can serve restaurants with the right apps, but Toast is the safer default for complex dining rooms. Choose Clover when you want modular hardware across mixed concepts; choose Toast when restaurant throughput is the priority.",
    quickRecommendationA:
      "Choose Clover when you value hardware choice, app-market customization, and a POS that can flex across retail and food with add-ons.",
    quickRecommendationB:
      "Choose Toast when you operate a restaurant that needs native table service, kitchen display, and integrated restaurant ordering.",
    quickVerdictParagraphs: [
      "Clover wins evaluations where the same business operates retail and food under one hardware standard—apps patch gaps, but you must architect intentionally.",
      "Toast wins when general managers ask for coursing, fire times, and delivery handoffs out of the box—those are first-class, not bolt-ons.",
      "We recommend writing down your top ten daily workflows (voids, comps, split checks, third-party delivery) and testing each on demo hardware before signing.",
    ],
    decisionGuideA: [
      "You want one POS family for mixed retail + food.",
      "App Market features cover your niche needs.",
      "Restaurant complexity is moderate (counter or QSR).",
    ],
    decisionGuideB: [
      "Full-service or high-volume QSR is the norm.",
      "You need native KDS and restaurant reporting.",
      "You accept restaurant-platform pricing.",
    ],
    ratingsComparison: [
      { category: "Restaurant depth", productA: "4.0", productB: "4.9" },
      { category: "Hardware modularity", productA: "4.7", productB: "4.2" },
      { category: "Vertical flexibility", productA: "4.5", productB: "3.8" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Native restaurant suite",
        productA: "App-dependent",
        productB: "Core platform",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "App Market customization",
        productA: "Strong",
        productB: "Focused extensions",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Clover bundles vary by reseller; Toast is quote-based for restaurant packages. Compare all-in per location including devices, processing, and critical apps.",
    prosConsA: {
      pros: ["Flexible devices.", "Apps for loyalty, payroll, and more.", "Works beyond restaurants."],
      cons: ["Restaurant depth may lag Toast without careful app mix.", "Can get complex to support."],
    },
    prosConsB: {
      pros: ["Restaurant-native workflows.", "Integrated ordering and KDS.", "Strong for multi-unit restaurants."],
      cons: ["Less ideal for non-restaurant retail.", "Higher cost for simple counters."],
    },
    bestFor: [
      { heading: "Best for modular mixed-use", body: "Clover fits when hardware standardization and apps matter across concepts." },
      { heading: "Best for restaurant scale", body: "Toast fits dedicated restaurant operators who need operational depth." },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Simpler food and retail POS.", logoSrc: POS_LOGOS.square },
      { name: "TouchBistro", href: getPosReviewUrl("touchbistro"), description: "Restaurant POS with tiered plans.", logoSrc: POS_LOGOS.touchbistro },
    ],
    faqs: [
      { q: "Clover vs Toast for a diner?", a: "Busy diners with table service usually prefer Toast; simpler diners on Clover may work with restaurant apps—pilot workflows first." },
      { q: "Can Clover do kitchen display?", a: "Often via apps or peripherals—confirm latency and reliability in a live kitchen test." },
    ],
    sidebarWinners: [
      { label: "Winner for flexibility", winner: "A" },
      { label: "Winner for restaurants", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toast vs Square", href: getPosCompareUrlFromSlug("toast-pos-vs-square-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
      { label: "Toast vs TouchBistro", href: getPosCompareUrlFromSlug("toast-pos-vs-touchbistro") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best all-purpose + apps", winner: "A", reason: "Clover adapts through hardware and the App Market." },
      { label: "Best restaurant platform", winner: "B", reason: "Toast is built for hospitality operations end to end." },
    ],
  }),

  // ——— Toast vs TouchBistro ———
  buildComparison("toast-pos-vs-touchbistro", "toastPos", "touchbistroPos", {
    summaryParagraph:
      "Toast and TouchBistro both target restaurants with table management, menus, and kitchen workflows. Toast scales toward larger and multi-location restaurant groups with a broad platform; TouchBistro often fits independent and smaller chains with published tiers and a strong iPad-native experience. The decision is frequently scale, pricing model, and how complex your off-premise and labor stack needs to be.",
    quickRecommendationA:
      "Choose Toast when you run a growing or multi-unit restaurant group and want a comprehensive restaurant platform with enterprise-style rollout.",
    quickRecommendationB:
      "Choose TouchBistro when you want capable restaurant POS with tiered pricing and a focus on independent or small-chain operations without Toast’s enterprise positioning.",
    quickVerdictParagraphs: [
      "In our evaluation, Toast’s advantage shows up when operators need tightly integrated online ordering, delivery, and multi-location reporting with dedicated restaurant success teams. That comes with quote-based packaging and a longer buying cycle.",
      "TouchBistro remains compelling for owners who want restaurant-native screens and workflows but prefer clearer published plans and a lighter implementation footprint for one to a few locations.",
      "Always run a side-by-side on split checks, modifier routing, and third-party delivery tickets—those edge cases separate good demos from production-ready fits.",
      "Search intent: ‘Toast vs TouchBistro’ usually means you are sizing restaurant depth versus buying complexity—list your top five weekly pain points (voids, comps, 86s, delivery handoff, labor) and score each vendor in a matrix, not from memory after a single sales call.",
      "Payments sit adjacent to POS: once you shortlist hardware and software, compare integrated processing effective rates on our payment processing hub—POS demos rarely replace statement math.",
      "BeltStack does not join your kitchen expo line—we synthesize public positioning, typical rollout stories, and common failure modes from operator feedback themes; your GM and accountant still own the final pick.",
    ],
    decisionGuideA: [
      "You have or plan multiple locations under one brand.",
      "You need deep integrations across ordering, payroll, and marketing.",
      "Enterprise-style support and road map matter.",
      "You expect dedicated restaurant success resources during rollout.",
    ],
    decisionGuideB: [
      "You operate independent or small-chain restaurants.",
      "Published tier pricing helps you budget.",
      "You want strong iPad restaurant UX without full enterprise scope.",
      "You prefer a lighter implementation footprint for one to three locations.",
    ],
    ratingsComparison: [
      { category: "Multi-unit scale", productA: "4.8", productB: "4.2" },
      { category: "Indie restaurant fit", productA: "4.3", productB: "4.7" },
      { category: "Pricing clarity", productA: "4.0", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Enterprise restaurant suite",
        productA: "Broad platform",
        productB: "Strong but more SMB-oriented",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Tiered SMB pricing",
        productA: "Quote-based common",
        productB: "Published tiers common",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Toast is usually sold with custom quotes that bundle software, hardware, and payment processing. TouchBistro commonly publishes tiered monthly software plans (often starting around $69 and up) plus hardware and separate processing through supported partners. Compare all-in cost per location—software, devices, required add-ons, and processing—using written quotes from each vendor. Headline POS prices rarely match what you pay after hardware and payments.",
    prosConsA: {
      pros: [
        "Strong for multi-location restaurants and enterprise-style rollouts",
        "Deep ordering, delivery, and ops integrations on the platform roadmap",
        "Recognized restaurant brand with broad partner ecosystem",
      ],
      cons: ["Can be heavy for tiny cafes with simple menus", "Quote-based buying lengthens procurement", "Requires executive time to manage vendor relationship"],
    },
    prosConsB: {
      pros: [
        "Accessible for independents and small chains",
        "Restaurant workflows without full enterprise overhead",
        "Clearer published plan structures for budgeting",
      ],
      cons: ["Less oriented to very large groups than Toast at the far end of scale", "Retail use cases are out of scope", "Complex multi-brand portfolios may still evaluate Toast or enterprise suites"],
    },
    bestFor: [
      {
        heading: "Best for multi-unit and enterprise-style restaurant groups",
        body: "Toast is the better fit when you are scaling locations, need a broad restaurant platform, and are comfortable with quote-based buying and a longer rollout. TouchBistro is the better fit when you run independent or small-chain restaurants and want strong restaurant workflows with clearer published tiers.",
      },
      {
        heading: "Best for independents and small chains",
        body: "TouchBistro is the better fit when you need table service, kitchen-friendly flows, and iPad-native hospitality UX without Toast’s full enterprise scope.",
      },
      {
        heading: "Best for pricing clarity",
        body: "TouchBistro often makes it easier to budget from published plans; Toast’s value is in breadth and integrations—compare written all-in quotes per location for your menu, labor, and ordering stack before you decide.",
      },
    ],
    alternatives: [
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "For simple counters and cafes.", logoSrc: POS_LOGOS.square },
      { name: "Clover", href: getPosReviewUrl("clover-pos"), description: "Flexible POS with restaurant apps.", logoSrc: POS_LOGOS.clover },
    ],
    faqs: [
      { q: "Toast vs TouchBistro for one location?", a: "Either can work—compare total cost, support, and features for online ordering and labor you actually use." },
      { q: "Is TouchBistro cheaper than Toast?", a: "Often for smaller footprints, but verify hardware, processing, and add-ons—list prices alone mislead." },
      { q: "Which is better for third-party delivery?", a: "Test ticket injection, void rules, and KDS latency with your actual delivery partners—both vendors change integrations over time." },
      { q: "Does BeltStack get paid by Toast or TouchBistro?", a: "We do not accept pay-for-placement on comparison pages; affiliate links may exist elsewhere without changing this analysis." },
    ],
    sidebarWinners: [
      { label: "Winner for multi-unit scale", winner: "A" },
      { label: "Winner for indie value", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toast vs Square", href: getPosCompareUrlFromSlug("toast-pos-vs-square-pos") },
      { label: "Square vs TouchBistro", href: getPosCompareUrlFromSlug("square-pos-vs-touchbistro") },
      { label: "Clover vs Toast", href: getPosCompareUrlFromSlug("clover-pos-vs-toast-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best at enterprise scale", winner: "A", reason: "Toast targets multi-location restaurant operations." },
      { label: "Best for independents", winner: "B", reason: "TouchBistro balances restaurant depth with SMB-friendly tiers." },
      { label: "Buying clarity", winner: "B", reason: "Published tiers often make TouchBistro easier to budget before quotes finalize—Toast wins on platform breadth, not necessarily on first-call simplicity." },
    ],
  }),

  // ——— Square vs TouchBistro ———
  buildComparison("square-pos-vs-touchbistro", "squarePos", "touchbistroPos", {
    summaryParagraph:
      "Square is a general-purpose POS with free software options and broad SMB appeal; TouchBistro is restaurant-specific with table management and hospitality workflows. Square fits cafes, counters, and simple food; TouchBistro fits when you need real dining-room and kitchen coordination beyond what a general POS comfortably offers.",
    quickRecommendationA:
      "Choose Square for low-cost startup, minimal subscription, and operations that do not require full restaurant floor management.",
    quickRecommendationB:
      "Choose TouchBistro when you run a restaurant that needs table plans, courses, and kitchen-friendly order flow with iPad-native design.",
    quickVerdictParagraphs: [
      "Square keeps cash flow predictable for new operators—great for proving a concept before investing in hospitality-grade software.",
      "TouchBistro earns its keep when tickets get complex: splits, modifiers, and coursing are daily realities, not edge cases.",
      "If you outgrow Square’s restaurant limits, plan a migration window and train staff before peak season—data cleanup hurts less than doing it during Friday rush.",
      "Readers comparing ‘Square vs TouchBistro’ often undervalue floor training cost—budget two weeks of manager shadowing on whichever system you pick.",
      "Square integrates tightly with Square processing; TouchBistro pairs with supported processors—compare effective rates on our payment processing comparisons after you shortlist POS.",
      "BeltStack’s take is editorial: we do not run your pass or expo; validate every claim in demo with your actual menu JSON and peak-hour order mix.",
    ],
    decisionGuideA: [
      "You run a café, bakery counter, or food truck.",
      "You want the lowest software overhead.",
      "Table service is minimal.",
      "You may also sell retail or services from the same Square ecosystem.",
    ],
    decisionGuideB: [
      "You run dine-in with servers and tabs.",
      "You need restaurant reporting and floor tools.",
      "You accept monthly restaurant POS fees.",
      "You need iPad-native hospitality screens servers can learn quickly.",
    ],
    ratingsComparison: [
      { category: "Restaurant workflows", productA: "3.9", productB: "4.6" },
      { category: "Cost to start", productA: "4.9", productB: "4.0" },
      { category: "Ease for non-restaurants", productA: "4.8", productB: "3.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Table & course management",
        productA: "Limited",
        productB: "Restaurant-native",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Free POS software option",
        productA: "Yes",
        productB: "Subscription",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Square can run with no monthly POS software fee on the free tier; you pay processing and hardware, plus optional Square subscriptions if you add them. TouchBistro charges monthly software subscription (commonly from about $69 and up), hardware, and processing through supported partners. Compare all-in monthly cost per location including every module you need for floor and kitchen workflows. Tipping, chargebacks, and gift cards affect processing effective rate more than POS list prices—use quotes and sample statements, not brochures.",
    prosConsA: {
      pros: [
        "Very low barrier to start for counters and new concepts",
        "Flexible beyond restaurants when you diversify revenue",
        "Large integration ecosystem for scheduling and accounting",
      ],
      cons: ["Limited for busy dining rooms with complex tabs", "Restaurant power users may hit workflow ceilings", "Add-ons can stack—audit monthly subscriptions quarterly"],
    },
    prosConsB: {
      pros: [
        "Built for restaurants with table and menu workflows",
        "Clear hospitality UX on iPad for servers",
        "Strong fit when dine-in—not only counter—is the default",
      ],
      cons: ["Not for retail-first businesses as a primary POS", "Ongoing subscription versus Square’s free tier option", "Migration from Square needs item and price hygiene"],
    },
    bestFor: [
      {
        heading: "Best for cafes, counters, and lowest software overhead",
        body: "Square is the better fit when you run counter-service or simple food, want minimal monthly POS cost, and do not need full dining-room and kitchen coordination. TouchBistro is the better fit when dine-in, servers, tabs, and restaurant-specific reporting are daily requirements.",
      },
      {
        heading: "Best for full-service restaurant floors",
        body: "TouchBistro is the better fit when table plans, courses, modifiers, and hospitality workflows—not just taking payment—define what you buy.",
      },
      {
        heading: "Best for comparing total cost",
        body: "Add TouchBistro subscription, hardware, and processing to one column; add Square processing, hardware, and any paid Square features you would need for the same workflows in the other—then compare written quotes side by side.",
      },
    ],
    alternatives: [
      { name: "Toast", href: getPosReviewUrl("toast-pos"), description: "For larger or multi-unit restaurants.", logoSrc: POS_LOGOS.toast },
      { name: "Clover", href: getPosReviewUrl("clover-pos"), description: "Flexible hardware with restaurant apps.", logoSrc: POS_LOGOS.clover },
    ],
    faqs: [
      { q: "Square vs TouchBistro for a small restaurant?", a: "Counter-service may stay on Square; table-service usually benefits from TouchBistro or Toast." },
      { q: "Can I start on Square and switch?", a: "Yes—export item and sales history early and schedule training before switching processors if needed." },
      { q: "Which has better reporting?", a: "TouchBistro for hospitality-specific reports; Square for cross-vertical simplicity—export samples before you decide." },
      { q: "Is this comparison sponsored?", a: "No pay-for-placement; we may use general affiliate links elsewhere without changing scores." },
    ],
    sidebarWinners: [
      { label: "Winner for cost & simplicity", winner: "A" },
      { label: "Winner for restaurant floor", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toast vs TouchBistro", href: getPosCompareUrlFromSlug("toast-pos-vs-touchbistro") },
      { label: "Toast vs Square", href: getPosCompareUrlFromSlug("toast-pos-vs-square-pos") },
      { label: "Square vs Clover", href: getPosCompareUrlFromSlug("square-pos-vs-clover-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best to start lean", winner: "A", reason: "Square keeps fees and setup light for new operators." },
      { label: "Best for table service", winner: "B", reason: "TouchBistro is purpose-built for restaurant hospitality." },
      { label: "Vertical flexibility", winner: "A", reason: "Square flexes across retail and services if your concept expands beyond dine-in." },
    ],
  }),

  // ——— Lightspeed vs Toast ———
  buildComparison("lightspeed-pos-vs-toast-pos", "lightspeedPos", "toastPos", {
    summaryParagraph:
      "Lightspeed (retail-focused POS) and Toast (restaurant-focused POS) solve different jobs. Lightspeed excels at retail inventory, multi-location merchandising, and operations for stores; Toast excels at hospitality workflows, kitchen production, and restaurant ordering. Compare them only when you run a hybrid concept—otherwise default to the vertical that matches your revenue.",
    quickRecommendationA:
      "Choose Lightspeed when retail SKUs, stock, and multi-store transfers drive the business—even if you sell some food or beverages.",
    quickRecommendationB:
      "Choose Toast when dine-in, takeout, and kitchen throughput are the core—especially for multi-location restaurants.",
    quickVerdictParagraphs: [
      "Retail-heavy hybrids (gift shops attached to wineries, apparel with a café) sometimes standardize on Lightspeed retail and accept lighter food workflows—or add a dedicated food POS; there is no universal answer.",
      "Food halls and restaurant groups rarely standardize on retail POS—Toast (or TouchBistro) aligns with how BOH teams work.",
      "Document your SKU count, menu complexity, and whether purchasing runs through retail buyers or kitchen leads—your org chart hints at the right stack.",
      "If you typed ‘Lightspeed vs Toast,’ first answer which P&L line is larger: retail COGS or kitchen labor— that single split predicts satisfaction more than feature matrices.",
      "Processing: both stacks bundle payments differently—after POS selection, validate card-present versus online ordering economics on our payment processing comparisons hub.",
      "BeltStack does not operate your hybrid concept—we describe common hybrid patterns from public positioning and operator interviews; your GM and retail manager should co-sign the demo script.",
    ],
    decisionGuideA: [
      "Retail purchasing and inventory dominate time.",
      "You measure success in turns, margins, and stock accuracy.",
      "Restaurant is a small attach.",
      "You need multi-store transfers and merchandising reports weekly.",
    ],
    decisionGuideB: [
      "Kitchen and service labor dominate costs.",
      "You need KDS, delivery, and restaurant analytics.",
      "Retail merch is secondary.",
      "You run multiple restaurant locations with shared ops playbooks.",
    ],
    ratingsComparison: [
      { category: "Retail operations", productA: "4.8", productB: "3.5" },
      { category: "Restaurant operations", productA: "3.8", productB: "4.9" },
      { category: "Hybrid concepts", productA: "4.2", productB: "4.0" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Retail inventory depth",
        productA: "Core strength",
        productB: "Not retail-first",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Restaurant BOH tooling",
        productA: "Secondary",
        productB: "Core strength",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Lightspeed retail POS usually starts around $69/month and scales with locations and modules, plus hardware and processing. Toast is typically quote-based for restaurant software, hardware, and bundled processing. If you truly straddle retail and restaurant, budget either two systems, integrations, or accepted gaps—hybrid businesses often underestimate hardware, processing effective rate, and app fees when they only compare subscription list prices.",
    prosConsA: {
      pros: [
        "Excellent for retailers, inventory, and purchasing workflows",
        "Multi-location merchandising and transfers",
        "Path to Lightspeed ecommerce when online retail matters",
      ],
      cons: ["Not a Toast replacement for busy full-service kitchens", "Restaurant modules differ by Lightspeed product line—confirm SKU", "Hybrid food may need compromises or a second POS"],
    },
    prosConsB: {
      pros: [
        "Restaurant-native platform for FOH/BOH",
        "Strong off-premise ordering and delivery integrations",
        "Built for hospitality staffing and ticket workflows",
      ],
      cons: ["Weak choice for SKU-heavy retail as the primary system", "Quote-based complexity versus retail POS pricing", "Retail gift shops may still need a retail-first tool"],
    },
    bestFor: [
      {
        heading: "Best for retail-led hybrid concepts",
        body: "Lightspeed is the better fit when retail SKUs, inventory, purchasing, and merchandising drive the business and food is a smaller attach. Toast is the better fit when restaurant operations—kitchen, service, and off-premise ordering—are the core and retail is secondary.",
      },
      {
        heading: "Best for restaurant-led hybrid concepts",
        body: "Toast is the better fit when the P&L is dominated by food labor and ticket flow and you need restaurant-native tooling; use retail-specific tools alongside only if the retail line truly warrants its own stack.",
      },
      {
        heading: "Best for vertical fit",
        body: "If you are retail-only, compare retail POS head-to-heads (for example Shopify POS vs Lightspeed); if you are restaurant-only, compare restaurant-first options (for example Toast vs Square). This pairing is mainly for operators honestly split between two different checkout models.",
      },
    ],
    alternatives: [
      { name: "Shopify POS", href: getPosReviewUrl("shopify-pos"), description: "When unified ecommerce matters.", logoSrc: POS_LOGOS.shopify },
      { name: "Square", href: getPosReviewUrl("square-pos"), description: "Simpler combined stack for tiny hybrids.", logoSrc: POS_LOGOS.square },
    ],
    faqs: [
      { q: "Lightspeed vs Toast for a brewery taproom?", a: "Retail merch + packaged goods lean Lightspeed; busy kitchen and table service lean Toast—many breweries use two systems or integrations." },
      { q: "Does Lightspeed do restaurants?", a: "Lightspeed offers restaurant products separately—do not assume retail and restaurant are interchangeable without checking the specific product line." },
      { q: "One system or two?", a: "If both verticals are material revenue, budget integration or two POS stacks—trying to force one register to do everything often breaks reporting." },
      { q: "How does BeltStack stay independent?", a: "Editorial scoring without pay-for-placement on comparisons; vendors cannot buy winners on these pages." },
    ],
    sidebarWinners: [
      { label: "Winner for retail", winner: "A" },
      { label: "Winner for restaurants", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toast vs Shopify POS", href: getPosCompareUrlFromSlug("toast-pos-vs-shopify-pos") },
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
      { label: "Toast vs Square", href: getPosCompareUrlFromSlug("toast-pos-vs-square-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      { label: "Best for merchandising", winner: "A", reason: "Lightspeed is rooted in retail inventory and stores." },
      { label: "Best for hospitality", winner: "B", reason: "Toast is engineered for restaurant operations." },
      { label: "Hybrid honesty", winner: "A", reason: "When retail SKUs dominate, forcing Toast-first usually creates inventory pain—pick the revenue leader, then integrate." },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getPosComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getPosComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
