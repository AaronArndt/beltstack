/**
 * POS (Point of Sale) comparison data.
 * Used by app/pos/compare/page.tsx and app/pos/compare/[comparison]/page.tsx.
 */

import { getPosReviewUrl, getPosBestForUrl } from "@/lib/routes";
import { POS_LOGOS } from "./posHubData";
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
} as const;

const RELEVANT_LINKS = [
  { label: "Best POS software (roundup)", href: "/pos/best-pos-software" },
  { label: "Best for small business", href: getPosBestForUrl("small-business") },
  { label: "Best for retail", href: getPosBestForUrl("retail") },
  { label: "Best for restaurants", href: getPosBestForUrl("restaurants") },
  { label: "Best for ecommerce", href: getPosBestForUrl("ecommerce") },
  { label: "Best for multi-location", href: getPosBestForUrl("multi-location") },
] as const;

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
      { label: "Shopify POS vs Lightspeed", href: getPosCompareUrlFromSlug("shopify-pos-vs-lightspeed-pos") },
      { label: "Square vs Shopify POS", href: getPosCompareUrlFromSlug("square-pos-vs-shopify-pos") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getPosComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getPosComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
