import {
  getInventoryReviewUrl,
  getInventoryBestForUrl,
} from "@/lib/routes";
import { INVENTORY_LOGOS } from "./inventoryHubData";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getInventoryCompareUrlFromSlug(slug: string): string {
  return `/inventory/compare/${slug}`;
}

// ——— Product refs for inventory comparisons ———

const P = {
  zohoInventory: {
    name: "Zoho Inventory",
    slug: "zoho-inventory",
    reviewHref: getInventoryReviewUrl("zoho-inventory"),
    logoSrc: INVENTORY_LOGOS.zoho,
    visitUrl: "https://www.zoho.com/inventory",
    bestForSummary: "Best overall inventory software for many small and midsize businesses.",
    rating: "4.6",
    startingPrice: "Free tier",
  },
  cin7: {
    name: "Cin7",
    slug: "cin7",
    reviewHref: getInventoryReviewUrl("cin7"),
    logoSrc: INVENTORY_LOGOS.cin7,
    visitUrl: "https://www.cin7.com",
    bestForSummary: "Best for complex, multi-channel inventory across ecommerce, retail, and wholesale.",
    rating: "4.5",
    startingPrice: "From ~$349/mo",
  },
  inflow: {
    name: "inFlow Inventory",
    slug: "inflow-inventory",
    reviewHref: getInventoryReviewUrl("inflow-inventory"),
    logoSrc: INVENTORY_LOGOS.inflow,
    visitUrl: "https://www.inflowinventory.com",
    bestForSummary: "Best for straightforward small business inventory tracking and reordering.",
    rating: "4.4",
    startingPrice: "From ~$89/mo",
  },
  sortly: {
    name: "Sortly",
    slug: "sortly",
    reviewHref: getInventoryReviewUrl("sortly"),
    logoSrc: INVENTORY_LOGOS.sortly,
    visitUrl: "https://www.sortly.com",
    bestForSummary: "Best for simple, visual inventory tracking with barcodes and photos.",
    rating: "4.3",
    startingPrice: "From ~$39/mo",
  },
  katana: {
    name: "Katana",
    slug: "katana",
    reviewHref: getInventoryReviewUrl("katana"),
    logoSrc: INVENTORY_LOGOS.katana,
    visitUrl: "https://katanamrp.com",
    bestForSummary: "Best for manufacturing inventory and production planning.",
    rating: "4.5",
    startingPrice: "From ~$129/mo",
  },
  fishbowl: {
    name: "Fishbowl",
    slug: "fishbowl",
    reviewHref: getInventoryReviewUrl("fishbowl"),
    logoSrc: INVENTORY_LOGOS.fishbowl,
    visitUrl: "https://www.fishbowlinventory.com",
    bestForSummary: "Strong for warehouses and manufacturers that need deeper operational inventory.",
    rating: "4.3",
    startingPrice: "Quote",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best inventory software (roundup)", href: "/inventory/best-inventory-software" },
  { label: "Best for small business", href: getInventoryBestForUrl("small-business") },
  { label: "Best for ecommerce", href: getInventoryBestForUrl("ecommerce") },
  { label: "Best for retail", href: getInventoryBestForUrl("retail") },
  { label: "Best for manufacturing", href: getInventoryBestForUrl("manufacturing") },
  { label: "Best for warehouses", href: getInventoryBestForUrl("warehouses") },
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
      categoryHref: "/inventory",
      categoryLabel: "Inventory management",
    },
  ];
}

const BASE_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  {
    feature: "Core inventory tracking",
    productA: "On-hand, committed, and available stock",
    productB: "On-hand, committed, and available stock",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Purchase orders & reordering",
    productA: "POs, reorder points, vendor management",
    productB: "POs, reorder points, vendor management",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Sales orders & fulfillment",
    productA: "Sales orders, allocations, and fulfillment",
    productB: "Sales orders, allocations, and fulfillment",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Integrations",
    productA: "Ecommerce, accounting, and shipping integrations",
    productB: "Ecommerce, accounting, and shipping integrations",
    supportA: "supported",
    supportB: "supported",
  },
] as const;

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // ——— Zoho Inventory vs Cin7 ———
  buildComparison("zoho-inventory-vs-cin7", "zohoInventory", "cin7", {
    summaryParagraph:
      "Zoho Inventory and Cin7 both offer modern inventory and order management, but they serve different levels of complexity. Zoho Inventory is a flexible, budget-friendly choice for many small and midsize businesses—especially if you use other Zoho apps. Cin7 is stronger for complex, multi-channel operations with physical retail, wholesale, and deeper inventory requirements.",
    quickRecommendationA:
      "Choose Zoho Inventory if you want capable inventory software with strong integrations and automation at a lower price point, especially for small and midsize businesses.",
    quickRecommendationB:
      "Choose Cin7 if you run multi-channel operations with retail, ecommerce, and wholesale and need deeper inventory visibility, routing, and POS options.",
    quickVerdictParagraphs: [
      "Zoho Inventory is often the better fit for small and midsize businesses that need modern inventory, orders, and integrations without committing to an enterprise-grade system. It works well when you primarily sell through ecommerce, simple wholesale, or a small number of locations and want tight connections to tools like Zoho Books, Shopify, or major marketplaces.",
      "Cin7 is designed for more complex inventory environments. It shines when you have multiple warehouses, retail locations, and channels to coordinate, or when you need deeper features around EDI, routing, and compliance. The tradeoff is higher pricing and more implementation overhead.",
      "If you are a growing small business looking to move off spreadsheets, Zoho Inventory usually offers more than enough capability at a friendlier price. If you already operate at multi-channel scale—or will very soon—Cin7 can be worth the extra cost and complexity.",
    ],
    decisionGuideA: [
      "You are upgrading from spreadsheets or basic inventory tools and want a modern, budget-friendly platform.",
      "You already use other Zoho apps or want a flexible system that plays nicely with multiple accounting and ecommerce tools.",
      "You have a handful of warehouses or locations, not a large, multi-location network.",
    ],
    decisionGuideB: [
      "You sell across ecommerce, retail, and wholesale channels and need a single inventory picture.",
      "You want deeper tools around routing, EDI, and B2B workflows that simpler systems struggle with.",
      "You are comfortable with a higher price point in exchange for richer operational depth.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.5", productB: "4.1" },
      { category: "Multi-channel depth", productA: "4.1", productB: "4.7" },
      { category: "Pricing & value", productA: "4.7", productB: "4.0" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Multi-channel inventory",
        productA: "Good for ecommerce + basic wholesale",
        productB: "Built for complex multi-channel operations",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Ecosystem fit",
        productA: "Deep tie-ins to Zoho apps and popular SMB tools",
        productB: "Stronger for retail and wholesale ecosystems",
        supportA: "supported",
        supportB: "supported",
      },
      {
        feature: "Implementation complexity",
        productA: "Lightweight setup for most SMBs",
        productB: "Heavier implementation for multi-entity operations",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Zoho Inventory has transparent, tiered pricing with a generous free tier and paid plans that scale based on orders and users. Cin7 sits at a higher price point, with plans typically starting in the low hundreds per month and scaling with locations, channels, and advanced modules. For most small businesses, Zoho Inventory will be significantly more affordable. For larger, multi-channel operations, Cin7’s higher price can be justified by deeper capabilities and consolidated workflows.",
    prosConsA: {
      pros: [
        "Budget-friendly pricing with a free tier for very small teams.",
        "Strong integrations with Zoho apps, ecommerce platforms, and marketplaces.",
        "Good balance of inventory, orders, and automation for SMBs.",
      ],
      cons: [
        "Not as deep as Cin7 for complex retail and wholesale operations.",
        "Some advanced features require higher tiers or other Zoho apps.",
      ],
    },
    prosConsB: {
      pros: [
        "Very strong multi-channel and multi-location inventory capabilities.",
        "Good fit for retailers, wholesalers, and brands with complex operations.",
        "Built-in options for POS and B2B workflows.",
      ],
      cons: [
        "Higher price point than most SMB-focused tools.",
        "More complex to implement and maintain than Zoho Inventory.",
      ],
    },
    bestFor: [
      {
        heading: "Best for growing small and midsize businesses",
        body: "Zoho Inventory is the better fit if you want modern inventory and order management without jumping into enterprise pricing and complexity. It works well for ecommerce-led businesses and smaller wholesalers.",
      },
      {
        heading: "Best for complex multi-channel operations",
        body: "Cin7 is the better fit if you run multi-warehouse, multi-channel operations and need deeper tools for routing, EDI, and retail or wholesale workflows.",
      },
    ],
    alternatives: [
      {
        name: "inFlow Inventory",
        href: getInventoryReviewUrl("inflow-inventory"),
        description: "Good middle ground for small businesses that want more structure than spreadsheets.",
        logoSrc: INVENTORY_LOGOS.inflow,
      },
      {
        name: "Unleashed",
        href: getInventoryReviewUrl("unleashed"),
        description: "Another option for inventory-heavy product businesses.",
        logoSrc: INVENTORY_LOGOS.unleashed,
      },
    ],
    faqs: [
      {
        q: "Is Zoho Inventory or Cin7 better for small businesses?",
        a: "For most small and midsize businesses, Zoho Inventory is the better starting point. It is easier to implement, more affordable, and still covers core inventory, orders, and integrations. Cin7 is better once you have complex multi-channel operations and multiple locations to coordinate.",
      },
      {
        q: "Does Cin7 replace Zoho Inventory for ecommerce brands?",
        a: "Cin7 can replace Zoho Inventory for ecommerce brands that have grown into multi-channel retail and wholesale with several warehouses or stores. If you primarily sell online through a few stores and marketplaces, Zoho Inventory usually offers plenty of capability at a lower price.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for SMB value", winner: "A" },
      { label: "Winner for complex multi-channel", winner: "B" },
    ],
    moreComparisons: [
      { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrlFromSlug("inflow-inventory-vs-zoho-inventory") },
      { label: "Fishbowl vs Katana", href: getInventoryCompareUrlFromSlug("fishbowl-vs-katana") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [
      {
        label: "Best for most SMBs",
        winner: "A",
        reason: "Zoho Inventory balances features and price for many small and midsize businesses.",
      },
      {
        label: "Best for complex operations",
        winner: "B",
        reason: "Cin7 offers deeper multi-channel and multi-location capabilities.",
      },
    ],
  }),

  // ——— Cin7 vs Katana ———
  buildComparison("cin7-vs-katana", "cin7", "katana", {
    summaryParagraph:
      "Cin7 and Katana both support inventory-centric businesses, but they focus on different operational models. Cin7 is built for multi-channel retailers and wholesalers; Katana is built for manufacturers that need tight coordination between materials, work orders, and finished goods.",
    quickRecommendationA:
      "Choose Cin7 if you are a product brand or retailer selling across multiple channels and locations and need one inventory system of record.",
    quickRecommendationB:
      "Choose Katana if you are a manufacturer and need clear visibility into materials, production orders, and capacity planning.",
    quickVerdictParagraphs: [
      "Cin7 is strongest for businesses that treat inventory as a distribution problem: moving finished goods through warehouses, retail, ecommerce, and wholesale channels. It gives you good control over stock across locations and channels, plus tools for routing, compliance, and B2B workflows.",
      "Katana is built for manufacturers that need to understand what materials are on hand, what work orders are in progress, and when finished goods will be ready to ship. Its bill of materials, production planning, and shop floor tools are more specialized for production than Cin7’s inventory focus.",
      "If you primarily resell finished goods through multiple channels, Cin7 is usually a better fit. If you convert raw materials into finished products and need clarity on production, Katana is more aligned with your workflows.",
    ],
    decisionGuideA: [
      "You are a retailer, wholesaler, or brand selling finished goods across channels.",
      "You need one system to coordinate inventory across warehouses, stores, and ecommerce.",
    ],
    decisionGuideB: [
      "You run discrete or light manufacturing and need visibility into materials and work orders.",
      "You want clearer production planning and capacity insights than a pure inventory system provides.",
    ],
    ratingsComparison: [
      { category: "Best for retail/wholesale", productA: "4.7", productB: "4.0" },
      { category: "Best for manufacturing", productA: "4.1", productB: "4.7" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Manufacturing features",
        productA: "Basic support via add-ons and workflows",
        productB: "Bills of materials, production planning, shop floor tools",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Retail & POS support",
        productA: "Strong retail and POS options",
        productB: "More limited retail tooling",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Both Cin7 and Katana use quote-based or tiered pricing that scales with complexity. In practice, Cin7 often lands at a higher price point for multi-channel retailers and wholesalers. Katana’s pricing is tied more closely to manufacturing-centric workflows and user counts. Expect both to cost more than lightweight SMB inventory tools; choose based on whether your core problem is distribution (Cin7) or production (Katana).",
    prosConsA: {
      pros: [
        "Very strong for multi-channel retail and wholesale operations.",
        "Good tools for managing inventory across many locations.",
      ],
      cons: [
        "More complex and expensive than SMB-focused tools.",
        "Manufacturing depth lags Katana’s production tooling.",
      ],
    },
    prosConsB: {
      pros: [
        "Purpose-built for manufacturers with strong production planning.",
        "Clear connection between materials, work orders, and finished goods.",
      ],
      cons: [
        "Less suited to pure retail/wholesale operations without production.",
        "Still an investment compared with simpler SMB inventory tools.",
      ],
    },
    bestFor: [
      {
        heading: "Best for inventory-led brands and wholesalers",
        body: "Cin7 is the better choice if your primary challenge is coordinating finished goods across channels, not managing production complexity.",
      },
      {
        heading: "Best for manufacturers",
        body: "Katana is the better choice if you need strong visibility into materials, work orders, and production schedules.",
      },
    ],
    alternatives: [
      {
        name: "Zoho Inventory",
        href: getInventoryReviewUrl("zoho-inventory"),
        description: "A more budget-friendly option for simpler inventory-led businesses.",
        logoSrc: INVENTORY_LOGOS.zoho,
      },
      {
        name: "Fishbowl",
        href: getInventoryReviewUrl("fishbowl"),
        description: "Another long-standing choice for inventory-heavy manufacturers and warehouses.",
        logoSrc: INVENTORY_LOGOS.fishbowl,
      },
    ],
    faqs: [
      {
        q: "Is Cin7 or Katana better for manufacturers?",
        a: "For most manufacturers, Katana is the better starting point because it focuses specifically on production planning, bills of materials, and shop floor workflows. Cin7 is stronger when your main challenge is moving finished goods through retail, ecommerce, and wholesale channels.",
      },
      {
        q: "Can retailers still use Katana?",
        a: "Retailers that also run light manufacturing or kitting can use Katana, but if production is minimal and most of your work is distribution, Cin7 or a simpler inventory tool may be a better fit.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for multi-channel retail", winner: "A" },
      { label: "Winner for manufacturing", winner: "B" },
    ],
    moreComparisons: [
      { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrlFromSlug("zoho-inventory-vs-cin7") },
      { label: "Fishbowl vs Katana", href: getInventoryCompareUrlFromSlug("fishbowl-vs-katana") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— inFlow Inventory vs Zoho Inventory ———
  buildComparison("inflow-inventory-vs-zoho-inventory", "inflow", "zohoInventory", {
    summaryParagraph:
      "inFlow Inventory and Zoho Inventory both help small businesses move beyond spreadsheets. inFlow focuses on straightforward inventory tracking and reordering; Zoho Inventory layers in more automation, integrations, and multi-warehouse depth.",
    quickRecommendationA:
      "Choose inFlow Inventory if you want a focused, approachable inventory tool for small business stock tracking and reordering.",
    quickRecommendationB:
      "Choose Zoho Inventory if you want more automation, integrations, and multi-warehouse capabilities and can use the broader Zoho ecosystem.",
    quickVerdictParagraphs: [
      "inFlow Inventory is designed to make core inventory tracking approachable for small businesses. It handles products, stock movements, purchase orders, sales, and basic reporting without forcing you into a complex setup. Many teams like it as a first real inventory system after spreadsheets.",
      "Zoho Inventory goes a bit further. It adds more automation, stronger integrations with ecommerce, accounting, and Zoho apps, and better support for multiple warehouses and locations. The tradeoff is slightly more complexity and configuration.",
      "If you primarily need clear visibility into what you have, what’s on order, and when to reorder—and you want something your team can pick up quickly—inFlow is compelling. If you want to lean into automation, integrations, and multi-warehouse support, Zoho Inventory is often the better long-term home.",
    ],
    decisionGuideA: [
      "You are replacing manual spreadsheets or very basic tools.",
      "You want a clean, approachable interface for small teams.",
      "You care more about clarity than maximum automation.",
    ],
    decisionGuideB: [
      "You already use or plan to use other Zoho apps.",
      "You have multiple locations or channels and want deeper automation and integrations.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.5", productB: "4.4" },
      { category: "Automation & integrations", productA: "4.1", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Multi-warehouse support",
        productA: "Good for simple multi-location setups",
        productB: "Stronger for multi-warehouse operations",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Learning curve",
        productA: "Very approachable for small teams",
        productB: "Slightly steeper but still manageable",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Both inFlow Inventory and Zoho Inventory use tiered pricing that scales with usage and features. inFlow tends to be straightforward for small teams that need a limited number of users and locations. Zoho Inventory often delivers more automation and integrations per dollar, especially if you already use Zoho apps, but total cost depends on your order volume and add-ons. Either way, both are more affordable than enterprise-grade inventory systems.",
    prosConsA: {
      pros: [
        "Approachable interface for teams moving off spreadsheets.",
        "Good balance of features for small business stock tracking and reordering.",
        "Clear workflows for sales and purchase orders.",
      ],
      cons: [
        "Fewer automations and integrations than Zoho Inventory.",
        "Less ideal as operations become very complex or multi-channel.",
      ],
    },
    prosConsB: {
      pros: [
        "Stronger integrations, automation, and multi-warehouse depth.",
        "Good fit for businesses that already use Zoho apps.",
      ],
      cons: [
        "Slightly steeper learning curve for some teams.",
        "Can feel like more than you need for very simple operations.",
      ],
    },
    bestFor: [
      {
        heading: "Best for straightforward inventory tracking",
        body: "inFlow Inventory is the better fit if your main need is to keep accurate counts, manage orders, and reorder on time without overcomplicating things.",
      },
      {
        heading: "Best for integrated, automated workflows",
        body: "Zoho Inventory is the better fit if you want to lean into automation, integrations, and multi-warehouse operations—especially inside the Zoho ecosystem.",
      },
    ],
    alternatives: [
      {
        name: "Sortly",
        href: getInventoryReviewUrl("sortly"),
        description: "A simpler, more visual inventory tracker for very lightweight needs.",
        logoSrc: INVENTORY_LOGOS.sortly,
      },
    ],
    faqs: [
      {
        q: "Is inFlow Inventory easier to use than Zoho Inventory?",
        a: "Many small teams find inFlow slightly easier to adopt because it focuses on core inventory tasks without as many additional modules. Zoho Inventory is still approachable but adds more configuration and automation options.",
      },
      {
        q: "Which is better for multi-warehouse operations?",
        a: "Zoho Inventory is generally stronger for multi-warehouse operations, especially if you need to coordinate inventory across several locations with more automation and integrations.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for simplicity", winner: "A" },
      { label: "Winner for automation & integrations", winner: "B" },
    ],
    moreComparisons: [
      { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrlFromSlug("zoho-inventory-vs-cin7") },
      { label: "Sortly vs inFlow", href: getInventoryCompareUrlFromSlug("sortly-vs-inflow-inventory") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— Sortly vs inFlow Inventory ———
  buildComparison("sortly-vs-inflow-inventory", "sortly", "inflow", {
    summaryParagraph:
      "Sortly and inFlow Inventory both target small businesses that want to get out of spreadsheet chaos. Sortly emphasizes visual, barcode-driven tracking that is easy to adopt; inFlow adds more structured order workflows, reporting, and purchasing features.",
    quickRecommendationA:
      "Choose Sortly if you want the simplest possible way for your team to scan, photograph, and track items with minimal training.",
    quickRecommendationB:
      "Choose inFlow Inventory if you need clearer order workflows, reporting, and purchasing tools on top of basic stock tracking.",
    quickVerdictParagraphs: [
      "Sortly shines in environments where many people touch inventory but few are inventory specialists: field teams, small warehouses, or office supply rooms. The app makes it easy to scan barcodes, attach photos, and see where items live without a heavy system.",
      "inFlow Inventory is more structured. It expects you to work through purchase orders, sales orders, and clear stock movements. That makes it better suited to businesses that need consistent processes, audit trails, and fuller reporting.",
      "If your main struggle is simply knowing what you have and where it is, Sortly is hard to beat for ease of adoption. If you also need cleaner ordering, purchasing, and reporting, inFlow Inventory is usually worth the extra structure.",
    ],
    decisionGuideA: [
      "You want a very low-friction, mobile-friendly way to track items.",
      "You care more about quick adoption than detailed process control.",
    ],
    decisionGuideB: [
      "You need clear workflows for sales and purchase orders.",
      "You want better reporting on stock, orders, and reordering.",
    ],
    ratingsComparison: [
      { category: "Ease of adoption", productA: "4.7", productB: "4.3" },
      { category: "Depth of workflows", productA: "4.0", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Barcode & visual tracking",
        productA: "Very strong barcode and photo tracking",
        productB: "Barcode support; more traditional inventory UI",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
      {
        feature: "Order workflows",
        productA: "Simpler order handling",
        productB: "More complete sales and purchasing workflows",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Both Sortly and inFlow Inventory price based on users and usage limits. Sortly’s lower tiers are attractive if you mostly need scanning and visual tracking for a small team. inFlow’s pricing reflects its broader functionality and is often a better value when you fully use its order, purchasing, and reporting features. In both cases, compare tiers based on how many people will use the system and how complex your workflows are.",
    prosConsA: {
      pros: [
        "Very easy for non-specialists to use, especially via mobile apps.",
        "Strong visual catalog with photos and barcodes.",
      ],
      cons: [
        "Less structured around orders and purchasing than inFlow.",
        "Reporting and deeper workflows are more limited.",
      ],
    },
    prosConsB: {
      pros: [
        "More complete order, purchasing, and reporting workflows.",
        "Stronger fit for small businesses that want process consistency.",
      ],
      cons: [
        "Slightly higher learning curve for teams that just want simple tracking.",
        "May feel like more than you need if you only track a small set of items.",
      ],
    },
    bestFor: [
      {
        heading: "Best for simple, visual tracking",
        body: "Sortly is the better choice if your priority is making it easy for anyone to scan and find items with minimal training.",
      },
      {
        heading: "Best for structured small-business workflows",
        body: "inFlow Inventory is the better choice if you want clearer order and purchasing workflows plus better reporting.",
      },
    ],
    alternatives: [
      {
        name: "Zoho Inventory",
        href: getInventoryReviewUrl("zoho-inventory"),
        description: "A step up in automation and integrations if you outgrow both Sortly and inFlow.",
        logoSrc: INVENTORY_LOGOS.zoho,
      },
    ],
    faqs: [
      {
        q: "Is Sortly or inFlow better for very small teams?",
        a: "For very small teams that mainly need to know where items are and keep counts roughly accurate, Sortly is often easier to adopt. If you also want to manage orders and purchasing more formally, inFlow is usually a better long-term fit.",
      },
      {
        q: "Can I start with Sortly and move to inFlow later?",
        a: "Yes. Many businesses start with a simple visual tracker like Sortly and later graduate to a more structured system like inFlow or Zoho Inventory as order volume and complexity grow.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for fastest adoption", winner: "A" },
      { label: "Winner for structured workflows", winner: "B" },
    ],
    moreComparisons: [
      { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrlFromSlug("inflow-inventory-vs-zoho-inventory") },
      { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrlFromSlug("zoho-inventory-vs-cin7") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),

  // ——— Fishbowl vs Katana ———
  buildComparison("fishbowl-vs-katana", "fishbowl", "katana", {
    summaryParagraph:
      "Fishbowl and Katana both serve inventory-heavy manufacturers and distributors, but they sit at slightly different points in the market. Fishbowl is a long-standing option with strong ties to QuickBooks; Katana is a newer, cloud-native platform focused on modern SMB manufacturers.",
    quickRecommendationA:
      "Choose Fishbowl if you have deep QuickBooks workflows and want mature manufacturing and warehouse features tied to your existing accounting.",
    quickRecommendationB:
      "Choose Katana if you want a more modern, cloud-native manufacturing inventory tool with cleaner UX and strong production planning.",
    quickVerdictParagraphs: [
      "Fishbowl has been around for years and is widely used by manufacturers and distributors that rely on QuickBooks. It brings deeper manufacturing and warehouse features than many basic inventory tools, but can feel more old-school in UI and deployment.",
      "Katana is built as a modern SaaS platform for small and midsize manufacturers. Its interface is cleaner, and its focus on production planning and shop floor workflows feels more contemporary for fast-growing brands.",
      "If your current world revolves around QuickBooks and you want something that slots into that environment with more depth, Fishbowl can be a fit. If you want a more modern experience and are comfortable investing in a newer platform, Katana is appealing.",
    ],
    decisionGuideA: [
      "You rely heavily on QuickBooks and want deeper manufacturing and warehouse features connected to it.",
      "You value proven, long-standing tools and don’t mind a more traditional interface.",
    ],
    decisionGuideB: [
      "You want a modern, cloud-native manufacturing inventory system.",
      "You care a lot about production planning, work orders, and shop floor visibility.",
    ],
    ratingsComparison: [
      { category: "QuickBooks alignment", productA: "4.7", productB: "4.0" },
      { category: "Modern UX", productA: "3.9", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "QuickBooks integration",
        productA: "Deep, long-standing QuickBooks integration",
        productB: "Good accounting integrations, but less QuickBooks-specific",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
      {
        feature: "Production planning UX",
        productA: "Capable but more traditional interface",
        productB: "Modern, visual production planning",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Both Fishbowl and Katana use quote-based pricing. Fishbowl’s total cost often reflects perpetual or long-term licensing models plus implementation, while Katana leans more into subscription pricing. For many small and midsize manufacturers, Katana’s SaaS model will feel more predictable, while Fishbowl may be more familiar for organizations used to traditional software purchasing. Exact pricing depends heavily on user counts, modules, and implementation scope.",
    prosConsA: {
      pros: [
        "Deep manufacturing and warehouse features with strong QuickBooks alignment.",
        "Long track record and broad installed base.",
      ],
      cons: [
        "Interface and deployment can feel more traditional compared with newer SaaS tools.",
        "Implementation and maintenance may require more IT involvement.",
      ],
    },
    prosConsB: {
      pros: [
        "Modern, cloud-native UX designed for SMB manufacturers.",
        "Clear focus on production planning and shop floor workflows.",
      ],
      cons: [
        "Newer platform with a shorter track record than Fishbowl.",
        "Less specifically tied to QuickBooks than Fishbowl.",
      ],
    },
    bestFor: [
      {
        heading: "Best for QuickBooks-centric manufacturers",
        body: "Fishbowl is the better fit if QuickBooks is at the center of your financial workflows and you want deep manufacturing and warehouse capabilities attached to it.",
      },
      {
        heading: "Best for modern SMB manufacturers",
        body: "Katana is the better fit if you want a modern, cloud-first experience with strong production planning and shop floor visibility.",
      },
    ],
    alternatives: [
      {
        name: "Unleashed",
        href: getInventoryReviewUrl("unleashed"),
        description: "Another option for inventory-heavy product businesses that want strong reporting.",
        logoSrc: INVENTORY_LOGOS.unleashed,
      },
    ],
    faqs: [
      {
        q: "Is Fishbowl or Katana easier to implement?",
        a: "Katana typically offers a smoother SaaS-style implementation with a more modern interface. Fishbowl can be more involved to implement and maintain but may align better with companies that already run a more traditional IT stack tied closely to QuickBooks.",
      },
      {
        q: "Which tool is better for QuickBooks users?",
        a: "Fishbowl is usually the better fit for organizations that are deeply invested in QuickBooks and want manufacturing and warehouse depth that stays tightly connected to their accounting.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for QuickBooks alignment", winner: "A" },
      { label: "Winner for modern UX", winner: "B" },
    ],
    moreComparisons: [
      { label: "Cin7 vs Katana", href: getInventoryCompareUrlFromSlug("cin7-vs-katana") },
      { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrlFromSlug("zoho-inventory-vs-cin7") },
    ],
    relevantTradeLinks: RELEVANT_LINKS as any,
    heroCallouts: [],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getInventoryComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getInventoryComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

