/**
 * Inventory best-for page data.
 * Used by app/inventory/best-for/[scenario]/page.tsx via BestForTemplate.
 */

import { getInventoryReviewUrl, getInventoryCompareUrl } from "@/lib/routes";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryHubData";
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

const CATEGORY = { href: "/inventory", label: "Inventory management" };
const SEE_ALSO = {
  roundupLabel: "best inventory management software",
  roundupHref: "/inventory/best-inventory-software",
  compareLabel: "inventory software comparisons",
  compareHref: "/inventory/compare",
};

const LOGOS = {
  zoho: INVENTORY_LOGOS.zoho,
  cin7: INVENTORY_LOGOS.cin7,
  inflow: INVENTORY_LOGOS.inflow,
  katana: INVENTORY_LOGOS.katana,
  fishbowl: INVENTORY_LOGOS.fishbowl,
  sortly: INVENTORY_LOGOS.sortly,
  quickbooksCommerce: INVENTORY_LOGOS.quickbooksCommerce,
  unleashed: INVENTORY_LOGOS.unleashed,
  finale: INVENTORY_LOGOS.finale,
} as const;

// ——— Small business ———

export const SMALL_BUSINESS_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Inventory Management Software for Small Businesses (2026)",
  subtitle:
    "Compare inventory tools built for small businesses that need simple, reliable stock tracking, reordering, and visibility—without enterprise complexity.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses outgrow spreadsheets once orders pick up or more than one person touches inventory. The right software keeps counts accurate, reordering on time, and basic reporting clear—without drowning your team in configuration.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top inventory picks for small businesses.",
  editorialSub: "What to look for when you choose inventory software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "zoho-inventory",
      name: "Zoho Inventory",
      badge: "Best overall for small businesses",
      description:
        "Well-rounded inventory software with purchasing, orders, and multi-warehouse support that fits most growing small businesses.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getInventoryReviewUrl("zoho-inventory"),
      visitUrl: "https://www.zoho.com/inventory",
      logoSrc: LOGOS.zoho,
    },
    {
      slug: "inflow-inventory",
      name: "inFlow Inventory",
      badge: "Best for straightforward inventory tracking",
      description:
        "Practical inventory control and reordering for small teams that want more structure than spreadsheets but less complexity than mid-market platforms.",
      rating: "4.4",
      startingPrice: "From ~$89/mo",
      reviewHref: getInventoryReviewUrl("inflow-inventory"),
      visitUrl: "https://www.inflowinventory.com",
      logoSrc: LOGOS.inflow,
    },
    {
      slug: "sortly",
      name: "Sortly",
      badge: "Best for simple, visual tracking",
      description:
        "Visual, barcode-based inventory tracking that makes it easy for non-specialists to see what’s on hand and where it lives.",
      rating: "4.3",
      startingPrice: "From ~$39/mo",
      reviewHref: getInventoryReviewUrl("sortly"),
      visitUrl: "https://www.sortly.com",
      logoSrc: LOGOS.sortly,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "zoho-inventory",
      name: "Zoho Inventory",
      logoSrc: LOGOS.zoho,
      bestFor: "Small businesses that want room to grow",
      startingPrice: "Free tier",
      standoutFeature: "Balanced features and value for SMBs",
      reviewHref: getInventoryReviewUrl("zoho-inventory"),
    },
    {
      slug: "inflow-inventory",
      name: "inFlow Inventory",
      logoSrc: LOGOS.inflow,
      bestFor: "Straightforward stock tracking and reordering",
      startingPrice: "From ~$89/mo",
      standoutFeature: "Approachable workflows for everyday inventory tasks",
      reviewHref: getInventoryReviewUrl("inflow-inventory"),
    },
    {
      slug: "sortly",
      name: "Sortly",
      logoSrc: LOGOS.sortly,
      bestFor: "Very simple, visual tracking",
      startingPrice: "From ~$39/mo",
      standoutFeature: "Photos and barcodes for easy adoption",
      reviewHref: getInventoryReviewUrl("sortly"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Know when spreadsheets have stopped working",
      body: "If you routinely oversell, lose items, or spend hours reconciling counts, it’s a sign that spreadsheets are no longer enough. Small businesses don’t need mid-market inventory suites right away, but they do need one system of record that multiple people can trust.",
    },
    {
      heading: "Match inventory depth to your reality",
      body: "If you carry a modest number of SKUs and manage one or two locations, tools like Zoho Inventory and inFlow give you purchasing, selling, and basic warehouse control without overwhelming staff. If you mainly need to know what you have and where it is, Sortly’s visual approach is often enough.",
    },
    {
      heading: "Keep accounting and ecommerce in mind",
      body: "Inventory always touches accounting and, for many small businesses, ecommerce. Zoho Inventory integrates especially well with Zoho Books and common storefronts; inFlow and Sortly focus more on day-to-day stock control and basic integrations. Choose a tool that plays nicely with the systems you already rely on.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Zoho Inventory",
      body: "Zoho Inventory is the best default choice for many small businesses because it balances capability and price. You get products, orders, basic warehouse support, and strong integrations—especially if you also use Zoho Books or Zoho CRM—without committing to mid-market pricing.",
    },
    {
      heading: "inFlow Inventory",
      body: "inFlow Inventory is ideal when you want to graduate from spreadsheets into more disciplined inventory control, but don’t need multi-channel or manufacturing depth. It focuses on clear receiving, selling, and reordering workflows that small teams can adopt quickly.",
    },
    {
      heading: "Sortly",
      body: "Sortly fits very small teams and simpler environments—offices, field vehicles, small stockrooms—where people won’t log into a complex system. Its visual item records and barcodes make it easy for non-specialists to keep counts roughly accurate.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Zoho Inventory", href: getInventoryReviewUrl("zoho-inventory") },
    { name: "inFlow Inventory", href: getInventoryReviewUrl("inflow-inventory") },
    { name: "Sortly", href: getInventoryReviewUrl("sortly") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
    { label: "Sortly vs inFlow Inventory", href: getInventoryCompareUrl("sortly-vs-inflow-inventory") },
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    {
      label: "Best inventory software for small business (guide)",
      href: "/inventory/guides/best-inventory-software-for-small-business",
    },
    { label: "How to choose inventory management software", href: "/inventory/guides/how-to-choose-inventory-management-software" },
    { label: "How to track inventory for a small business", href: "/inventory/guides/best-inventory-software-for-small-business" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What inventory software is best for small businesses?",
      a: "For many small businesses, Zoho Inventory is the best overall fit: it combines inventory, purchasing, basic warehouse tools, and integrations at an approachable price. inFlow Inventory is a great choice if you want straightforward inventory control without committing to a broader ecosystem. Sortly works well when you mainly need a simple, visual way to track what you have and where it is.",
    },
    {
      q: "Do small businesses really need inventory software?",
      a: "If you have only a few products and very low volume, you might manage with spreadsheets. But once stockouts, overselling, or lost items become common—or more than one person needs to update counts—dedicated inventory software usually pays for itself in time saved and fewer mistakes.",
    },
    {
      q: "How should small businesses compare Zoho Inventory vs inFlow Inventory vs Sortly?",
      a: "Use Zoho Inventory if you want a deeper system with stronger integrations and room to grow, inFlow Inventory if you want practical stock control and reordering without mid-market complexity, and Sortly if your top priority is simple, visual tracking for a small team. Our inFlow vs Zoho Inventory and Sortly vs inFlow comparisons can help you decide.",
    },
  ] as BestForFaqItem[],
};

// ——— Ecommerce ———

export const ECOMMERCE_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Inventory Management Software for Ecommerce (2026)",
  subtitle:
    "Compare inventory tools that keep ecommerce stock in sync across stores, marketplaces, and warehouses—so you reduce overselling and keep orders flowing.",
  useCase: "ecommerce",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Ecommerce brands quickly run into trouble when each channel manages its own inventory. A central inventory platform keeps a single view of stock, pushes accurate availability back to storefronts, and gives your warehouse clearer workflows.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top inventory picks for ecommerce brands.",
  editorialSub: "What to look for when you choose inventory software for ecommerce.",
  whyThesePicksSub: "Why we chose these tools for ecommerce.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "cin7",
      name: "Cin7",
      badge: "Best for complex multi-channel ecommerce",
      description:
        "Multi-channel inventory and order management built for brands that sell through ecommerce, marketplaces, retail, and wholesale.",
      rating: "4.5",
      startingPrice: "From ~$349/mo",
      reviewHref: getInventoryReviewUrl("cin7"),
      visitUrl: "https://www.cin7.com",
      logoSrc: LOGOS.cin7,
    },
    {
      slug: "zoho-inventory",
      name: "Zoho Inventory",
      badge: "Best value for ecommerce-led SMBs",
      description:
        "A strong option for ecommerce-led small and midsize businesses that need multi-channel support without mid-market pricing.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getInventoryReviewUrl("zoho-inventory"),
      visitUrl: "https://www.zoho.com/inventory",
      logoSrc: LOGOS.zoho,
    },
    {
      slug: "finale-inventory",
      name: "Finale Inventory",
      badge: "Best for higher-volume ecommerce warehouses",
      description:
        "Cloud-based inventory and warehouse management tuned for higher-volume ecommerce and marketplace sellers.",
      rating: "4.4",
      startingPrice: "From ~$99/mo",
      reviewHref: getInventoryReviewUrl("finale-inventory"),
      visitUrl: "https://www.finaleinventory.com",
      logoSrc: LOGOS.finale,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "cin7",
      name: "Cin7",
      logoSrc: LOGOS.cin7,
      bestFor: "Multi-channel brands with real volume",
      startingPrice: "From ~$349/mo",
      standoutFeature: "Deep multi-channel and POS support",
      reviewHref: getInventoryReviewUrl("cin7"),
    },
    {
      slug: "zoho-inventory",
      name: "Zoho Inventory",
      logoSrc: LOGOS.zoho,
      bestFor: "Ecommerce-led SMBs on a budget",
      startingPrice: "Free tier",
      standoutFeature: "Strong integrations and value",
      reviewHref: getInventoryReviewUrl("zoho-inventory"),
    },
    {
      slug: "finale-inventory",
      name: "Finale Inventory",
      logoSrc: LOGOS.finale,
      bestFor: "High-volume ecommerce and warehouses",
      startingPrice: "From ~$99/mo",
      standoutFeature: "Scanner-friendly warehouse workflows",
      reviewHref: getInventoryReviewUrl("finale-inventory"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Centralize inventory across channels",
      body: "If each storefront or marketplace thinks it owns inventory, overselling is almost guaranteed under promotion or peak season. Ecommerce inventory tools should pull orders from every channel and push accurate availability back out so you maintain one trusted view of stock.",
    },
    {
      heading: "Align warehouse workflows with channels",
      body: "For ecommerce, the best inventory tool is also a good operational tool. Look for clear picking, packing, and shipping workflows that support scanners and multiple locations. Finale Inventory and Cin7 focus heavily on this; Zoho Inventory covers the basics for smaller teams.",
    },
    {
      heading: "Keep accounting and tax in view",
      body: "Higher ecommerce volume means more returns, fees, and landed costs to track. Confirm that your inventory system integrates cleanly with accounting and can support landed cost or at least give you enough data to keep margins clear.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Cin7",
      body: "Cin7 is built for brands that sell through multiple online stores, marketplaces, and retail or wholesale channels. It’s more than many early-stage ecommerce brands need, but for operations with real volume and complexity, it centralizes channels and inventory in a way lighter tools can’t match.",
    },
    {
      heading: "Zoho Inventory",
      body: "Zoho Inventory is ideal for ecommerce-led SMBs that want multi-channel support, purchasing, and basic warehouse tools without jumping straight into the cost and complexity of mid-market suites. It’s especially compelling when you also use Zoho Books or Zoho CRM.",
    },
    {
      heading: "Finale Inventory",
      body: "Finale Inventory fits ecommerce and warehouse operations that push significant volume across channels and lean on scanners and structured warehouse workflows. It sits between SMB inventory tools and full-blown WMS/ERP systems in both price and capability.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Cin7", href: getInventoryReviewUrl("cin7") },
    { name: "Zoho Inventory", href: getInventoryReviewUrl("zoho-inventory") },
    { name: "Finale Inventory", href: getInventoryReviewUrl("finale-inventory") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { label: "Cin7 vs Katana", href: getInventoryCompareUrl("cin7-vs-katana") },
    { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Inventory software for ecommerce", href: "/inventory/guides/inventory-software-for-ecommerce" },
    { label: "How to choose inventory management software", href: "/inventory/guides/how-to-choose-inventory-management-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What inventory software works best for ecommerce?",
      a: "For multi-channel brands with real volume, Cin7 and Finale Inventory are strong candidates. Zoho Inventory is a great fit for ecommerce-led small and midsize businesses that want multi-channel support at a friendlier price point. The best choice depends on your channel mix, order volume, and warehouse complexity.",
    },
    {
      q: "Can inventory tools sync stock across sales channels?",
      a: "Yes. Multi-channel inventory platforms connect to ecommerce stores, marketplaces, and POS so orders and stock updates stay in sync. This is one of the main reasons ecommerce brands adopt tools like Cin7, Zoho Inventory, or Finale Inventory instead of relying solely on storefront-native inventory.",
    },
    {
      q: "When should an ecommerce brand move beyond storefront-only inventory?",
      a: "Once you sell through more than one major channel or location—or once overselling and manual reconciliations become frequent—you likely need a central inventory system. If you’re scaling warehouse operations or adding marketplaces and wholesale, the benefits of dedicated inventory software compound quickly.",
    },
  ] as BestForFaqItem[],
};

// ——— Retail ———

export const RETAIL_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Inventory Management Software for Retail (2026)",
  subtitle:
    "Compare inventory tools that help retailers keep store shelves stocked, sync stock with POS and ecommerce, and understand which products actually move.",
  useCase: "retail",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Retailers care about what’s on shelves, what’s in the stockroom, and what’s inbound from suppliers—across one or many locations. The right inventory software ties stores, ecommerce, and purchasing together so you can keep popular items in stock without overbuying.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top inventory picks for retailers.",
  editorialSub: "What to look for when you choose inventory software for retail.",
  whyThesePicksSub: "Why we chose these tools for retail.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "cin7",
      name: "Cin7",
      badge: "Best for multi-location retail and wholesale",
      description:
        "Deep inventory and POS support for retailers and wholesalers that run multiple stores, channels, and warehouses.",
      rating: "4.5",
      startingPrice: "From ~$349/mo",
      reviewHref: getInventoryReviewUrl("cin7"),
      visitUrl: "https://www.cin7.com",
      logoSrc: LOGOS.cin7,
    },
    {
      slug: "zoho-inventory",
      name: "Zoho Inventory",
      badge: "Best for smaller retailers with ecommerce",
      description:
        "A strong choice for retailers that combine a few stores or a stockroom with ecommerce channels and want approachable pricing.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getInventoryReviewUrl("zoho-inventory"),
      visitUrl: "https://www.zoho.com/inventory",
      logoSrc: LOGOS.zoho,
    },
    {
      slug: "quickbooks-commerce",
      name: "QuickBooks Commerce",
      badge: "Best for QuickBooks-centric retailers",
      description:
        "Inventory and order management designed for businesses that rely heavily on QuickBooks and want close accounting alignment.",
      rating: "4.2",
      startingPrice: "Quote",
      reviewHref: getInventoryReviewUrl("quickbooks-commerce"),
      visitUrl: "https://quickbooks.intuit.com",
      logoSrc: LOGOS.quickbooksCommerce,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "cin7",
      name: "Cin7",
      logoSrc: LOGOS.cin7,
      bestFor: "Multi-store, multi-channel retail",
      startingPrice: "From ~$349/mo",
      standoutFeature: "Retail + POS + wholesale workflows",
      reviewHref: getInventoryReviewUrl("cin7"),
    },
    {
      slug: "zoho-inventory",
      name: "Zoho Inventory",
      logoSrc: LOGOS.zoho,
      bestFor: "Smaller retailers with ecommerce",
      startingPrice: "Free tier",
      standoutFeature: "Value-focused multi-channel inventory",
      reviewHref: getInventoryReviewUrl("zoho-inventory"),
    },
    {
      slug: "quickbooks-commerce",
      name: "QuickBooks Commerce",
      logoSrc: LOGOS.quickbooksCommerce,
      bestFor: "Retailers deep in QuickBooks",
      startingPrice: "Quote",
      standoutFeature: "Tight QuickBooks alignment",
      reviewHref: getInventoryReviewUrl("quickbooks-commerce"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Unify inventory across store, stockroom, and ecommerce",
      body: "Retailers often have inventory split between the sales floor, back room, and online channels. Your inventory system should unify those views so POS, ecommerce, and purchasing all reference the same counts and locations.",
    },
    {
      heading: "Match tool complexity to store count",
      body: "Single-location retailers can often succeed with Zoho Inventory plus lightweight POS integrations. As you add stores, warehouses, and wholesale accounts, tools like Cin7 or QuickBooks Commerce become more appealing because they handle more locations and routing logic.",
    },
    {
      heading: "Keep finance workflows in mind",
      body: "Retail inventory decisions have a direct impact on margins and cash flow. If your finance team lives in QuickBooks, QuickBooks Commerce and Fishbowl are attractive; if you prefer a vendor-neutral stack, Cin7 or Zoho Inventory may give you more flexibility.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Cin7",
      body: "Cin7 is a strong fit for retailers that juggle physical stores, ecommerce, and wholesale channels. It offers deeper retail workflows and POS options than lighter tools, which pays off once you manage multiple locations and channels.",
    },
    {
      heading: "Zoho Inventory",
      body: "Zoho Inventory works well for smaller retailers that sell through a store plus ecommerce and want strong features without a mid-market price tag. It’s especially compelling if you also use Zoho Books or Zoho CRM.",
    },
    {
      heading: "QuickBooks Commerce",
      body: "QuickBooks Commerce is best when your world revolves around QuickBooks. It keeps inventory and orders tightly tied to your accounting system, reducing reconciliation work for retail businesses that already commit heavily to Intuit’s ecosystem.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Cin7", href: getInventoryReviewUrl("cin7") },
    { name: "Zoho Inventory", href: getInventoryReviewUrl("zoho-inventory") },
    { name: "QuickBooks Commerce", href: getInventoryReviewUrl("quickbooks-commerce") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
    { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Inventory software for ecommerce", href: "/inventory/guides/inventory-software-for-ecommerce" },
    { label: "How to choose inventory management software", href: "/inventory/guides/how-to-choose-inventory-management-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What inventory software is best for retail stores?",
      a: "For multi-location or multi-channel retailers, Cin7 is often the best fit because it combines inventory and POS workflows for stores, ecommerce, and wholesale. Zoho Inventory works well for smaller retailers that sell in a few places, while QuickBooks Commerce is attractive if your finance team is deeply invested in QuickBooks.",
    },
    {
      q: "Do retailers need separate inventory and POS systems?",
      a: "Many retailers use inventory tools that integrate with or include POS. Cin7 and some POS suites include both capabilities; Zoho Inventory typically integrates with POS. Whether you run POS separately or inside your inventory tool, the important part is that stock counts stay synchronized.",
    },
    {
      q: "How should retailers choose between Zoho Inventory and Cin7?",
      a: "If you have one or two locations and modest wholesale or ecommerce volume, Zoho Inventory is often enough and more cost-effective. If you run multiple stores, channels, and warehouses, Cin7’s deeper retail and wholesale workflows usually justify the added complexity and price.",
    },
  ] as BestForFaqItem[],
};

// ——— Manufacturing ———

export const MANUFACTURING_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Inventory Management Software for Manufacturing (2026)",
  subtitle:
    "Compare inventory and production tools that help manufacturers track materials, work orders, and finished goods with far more control than spreadsheets.",
  useCase: "manufacturing",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Manufacturers have to understand what materials they have, what work orders are in progress, and what finished goods can ship—often across many SKUs and jobs. Manufacturing-aware inventory software connects materials, BOMs, and production so you’re not guessing about what you can build.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top inventory picks for manufacturers.",
  editorialSub: "What to look for when you choose inventory software for manufacturing.",
  whyThesePicksSub: "Why we chose these tools for manufacturers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "katana",
      name: "Katana",
      badge: "Best overall for small and midsize manufacturers",
      description:
        "Modern, cloud-based inventory and production planning that ties materials, BOMs, and work orders together.",
      rating: "4.5",
      startingPrice: "From ~$129/mo",
      reviewHref: getInventoryReviewUrl("katana"),
      visitUrl: "https://katanamrp.com",
      logoSrc: LOGOS.katana,
    },
    {
      slug: "fishbowl",
      name: "Fishbowl",
      badge: "Best for QuickBooks-centric manufacturers",
      description:
        "Long-standing inventory and manufacturing solution that pairs deeply with QuickBooks and focuses on operational control.",
      rating: "4.3",
      startingPrice: "Quote",
      reviewHref: getInventoryReviewUrl("fishbowl"),
      visitUrl: "https://www.fishbowlinventory.com",
      logoSrc: LOGOS.fishbowl,
    },
    {
      slug: "unleashed",
      name: "Unleashed",
      badge: "Best for inventory-heavy product businesses",
      description:
        "Mid-market inventory platform with deeper costing and reporting for wholesalers, distributors, and manufacturers.",
      rating: "4.4",
      startingPrice: "From ~$349/mo",
      reviewHref: getInventoryReviewUrl("unleashed"),
      visitUrl: "https://www.unleashedsoftware.com",
      logoSrc: LOGOS.unleashed,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "katana",
      name: "Katana",
      logoSrc: LOGOS.katana,
      bestFor: "Small and midsize manufacturers",
      startingPrice: "From ~$129/mo",
      standoutFeature: "Production planning tied tightly to inventory",
      reviewHref: getInventoryReviewUrl("katana"),
    },
    {
      slug: "fishbowl",
      name: "Fishbowl",
      logoSrc: LOGOS.fishbowl,
      bestFor: "QuickBooks-centric manufacturing and warehouses",
      startingPrice: "Quote",
      standoutFeature: "Deep operational workflows for QuickBooks users",
      reviewHref: getInventoryReviewUrl("fishbowl"),
    },
    {
      slug: "unleashed",
      name: "Unleashed",
      logoSrc: LOGOS.unleashed,
      bestFor: "Inventory-heavy wholesalers and manufacturers",
      startingPrice: "From ~$349/mo",
      standoutFeature: "Strong costing and margin reporting",
      reviewHref: getInventoryReviewUrl("unleashed"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Make BOMs and material availability first-class citizens",
      body: "Manufacturing inventory tools should let you define bills of materials, see whether you have enough inputs to complete jobs, and understand which orders are blocked by shortages. If a product can’t model BOMs and material reservations cleanly, it’s likely not a good long-term fit for serious manufacturing.",
    },
    {
      heading: "Connect production to sales and warehouses",
      body: "Your inventory system should sit between sales orders, production, and shipping. Tools like Katana are particularly strong at tying ecommerce and wholesale orders to work orders and finished goods, while Fishbowl and Unleashed lean more into deeper warehouse and costing workflows.",
    },
    {
      heading: "Plan for realistic implementation",
      body: "Manufacturing systems require data cleanup and process ownership. A cloud-first tool like Katana is usually easier to roll out than legacy MRPs; Fishbowl and Unleashed may demand more IT and implementation effort but reward you with more operational depth.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Katana",
      body: "Katana is our default recommendation for small and midsize manufacturers because it brings modern UX to classic MRP problems. It helps you manage BOMs, work orders, and material availability in a way that’s approachable for growing shops.",
    },
    {
      heading: "Fishbowl",
      body: "Fishbowl is a strong option for manufacturers and warehouses that have grown up around QuickBooks. It adds deep operational capabilities on top of QuickBooks’ accounting engine, which is attractive when finance teams don’t want to migrate systems.",
    },
    {
      heading: "Unleashed",
      body: "Unleashed suits inventory-heavy product businesses that care deeply about stock, costing, and margin analysis. It’s more of a mid-market inventory and reporting engine, which can be compelling once basic manufacturing control is in place and you want to get serious about analytics.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Katana", href: getInventoryReviewUrl("katana") },
    { name: "Fishbowl", href: getInventoryReviewUrl("fishbowl") },
    { name: "Unleashed", href: getInventoryReviewUrl("unleashed") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Cin7 vs Katana", href: getInventoryCompareUrl("cin7-vs-katana") },
    { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Inventory software for manufacturing", href: "/inventory/guides/inventory-software-for-manufacturing" },
    { label: "How to choose inventory management software", href: "/inventory/guides/how-to-choose-inventory-management-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What inventory software is best for manufacturing?",
      a: "For many small and midsize manufacturers, Katana is the best starting point: it focuses squarely on production planning and manufacturing inventory with a modern interface. Fishbowl and Unleashed are strong alternatives when QuickBooks alignment or deeper costing/reporting matter more.",
    },
    {
      q: "Do inventory tools support raw materials and production workflows?",
      a: "Yes—manufacturing-focused inventory platforms support bills of materials, work orders, and material availability checks. Generic inventory tools may only track finished goods, so if production is core to your business, choose a system that is explicitly built for manufacturing.",
    },
    {
      q: "How should manufacturers compare Katana vs Fishbowl vs Unleashed?",
      a: "Choose Katana when you want a modern, cloud-based system for BOMs and shop-floor visibility; Fishbowl when you are deeply tied to QuickBooks and need more traditional operational depth; Unleashed when you are inventory-heavy and want stronger costing and margin analytics across products and channels.",
    },
  ] as BestForFaqItem[],
};

// ——— Warehouses ———

export const WAREHOUSES_PAGE_PROPS: BestForTemplateProps = {
  title: "Best Inventory Management Software for Warehouses (2026)",
  subtitle:
    "Compare inventory tools that help warehouses and distribution centers run cleaner receiving, picking, packing, and shipping operations.",
  useCase: "warehouses",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Warehouse-heavy businesses care about location accuracy, pick efficiency, and throughput. Inventory software for warehouses focuses on locations, scanners, and workflows that keep items moving while keeping counts accurate.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top inventory picks for warehouses and distribution centers.",
  editorialSub: "What to look for when you choose inventory software for warehouses.",
  whyThesePicksSub: "Why we chose these tools for warehouses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "fishbowl",
      name: "Fishbowl",
      badge: "Best for QuickBooks-centric warehouses",
      description:
        "Warehouse and manufacturing workflows that go deeper than SMB tools, designed to sit alongside QuickBooks.",
      rating: "4.3",
      startingPrice: "Quote",
      reviewHref: getInventoryReviewUrl("fishbowl"),
      visitUrl: "https://www.fishbowlinventory.com",
      logoSrc: LOGOS.fishbowl,
    },
    {
      slug: "finale-inventory",
      name: "Finale Inventory",
      badge: "Best for ecommerce-focused warehouses",
      description:
        "Cloud-based inventory and WMS-style features tuned for higher-volume ecommerce and marketplace operations.",
      rating: "4.4",
      startingPrice: "From ~$99/mo",
      reviewHref: getInventoryReviewUrl("finale-inventory"),
      visitUrl: "https://www.finaleinventory.com",
      logoSrc: LOGOS.finale,
    },
    {
      slug: "cin7",
      name: "Cin7",
      badge: "Best for warehouses tied to multi-channel brands",
      description:
        "Inventory and order management that coordinates warehouses with ecommerce, retail, and wholesale channels.",
      rating: "4.5",
      startingPrice: "From ~$349/mo",
      reviewHref: getInventoryReviewUrl("cin7"),
      visitUrl: "https://www.cin7.com",
      logoSrc: LOGOS.cin7,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "fishbowl",
      name: "Fishbowl",
      logoSrc: LOGOS.fishbowl,
      bestFor: "Warehouse operations on QuickBooks",
      startingPrice: "Quote",
      standoutFeature: "Deep warehouse workflows around QuickBooks",
      reviewHref: getInventoryReviewUrl("fishbowl"),
    },
    {
      slug: "finale-inventory",
      name: "Finale Inventory",
      logoSrc: LOGOS.finale,
      bestFor: "High-volume ecommerce warehouses",
      startingPrice: "From ~$99/mo",
      standoutFeature: "Scanner-friendly, channel-aware WMS features",
      reviewHref: getInventoryReviewUrl("finale-inventory"),
    },
    {
      slug: "cin7",
      name: "Cin7",
      logoSrc: LOGOS.cin7,
      bestFor: "Multi-channel brands with serious warehouses",
      startingPrice: "From ~$349/mo",
      standoutFeature: "Warehouses tightly tied to channels and POS",
      reviewHref: getInventoryReviewUrl("cin7"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Clarify whether you need WMS or inventory software",
      body: "Basic inventory tools track stock and orders; warehouse management systems (WMS) add richer location, picking, routing, and labor features. Tools like Finale Inventory and Fishbowl sit between pure inventory and full WMS, which is often ideal for warehouses that are serious but not yet enterprise scale.",
    },
    {
      heading: "Think in locations, not just SKUs",
      body: "If you care about pick efficiency, your system should make bin and location-level tracking first-class. Fishbowl, Finale, and Cin7 all support richer location structures than SMB-focused tools, which becomes crucial as order volume and staff count rise.",
    },
    {
      heading: "Evaluate scanner and 3PL integrations",
      body: "Warehouse operations often depend on scanners, shipping tools, and sometimes 3PL partners. Confirm that your chosen platform integrates cleanly with the hardware and logistics stack you use today—or plan to use as you scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Fishbowl",
      body: "Fishbowl is a natural fit for warehouses that have grown around QuickBooks and need much deeper operational control than SMB inventory tools provide. It can handle higher SKU counts, more complex picking, and production workflows while keeping accounting in QuickBooks.",
    },
    {
      heading: "Finale Inventory",
      body: "Finale Inventory focuses specifically on higher-volume ecommerce and warehouse operations. It’s a good choice when you run scanners, multiple locations, and channel sync, but don’t yet need or want a heavyweight WMS or ERP.",
    },
    {
      heading: "Cin7",
      body: "Cin7 shines when warehouses exist to serve multi-channel brands. If your biggest challenge is connecting stores, marketplaces, and wholesale with warehouse operations, Cin7’s channel-aware design can simplify that puzzle.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Fishbowl", href: getInventoryReviewUrl("fishbowl") },
    { name: "Finale Inventory", href: getInventoryReviewUrl("finale-inventory") },
    { name: "Cin7", href: getInventoryReviewUrl("cin7") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Fishbowl vs Katana", href: getInventoryCompareUrl("fishbowl-vs-katana") },
    { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
    { label: "inFlow Inventory vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Inventory software for ecommerce", href: "/inventory/guides/inventory-software-for-ecommerce" },
    { label: "Warehouse management software vs inventory software", href: "/inventory/guides/inventory-software-for-manufacturing" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What inventory software works best for warehouses?",
      a: "For many small and midsize warehouses, Fishbowl and Finale Inventory are strong starting points; both go deeper on warehouse workflows than SMB inventory tools. Cin7 is a good fit when your warehouses primarily serve multi-channel brands and you want channels and stock tightly tied together.",
    },
    {
      q: "What is the difference between warehouse software and inventory software?",
      a: "Inventory software focuses on stock levels, purchasing, and orders. Warehouse software (or WMS) adds more detail around locations, picking, packing, routing, and sometimes labor. Tools like Fishbowl and Finale Inventory sit between the two, offering richer warehouse control without the full weight of enterprise WMS platforms.",
    },
    {
      q: "When should a warehouse move beyond simple inventory tools?",
      a: "Once you rely on scanners, have multiple aisles or buildings, or regularly struggle with picking inefficiencies and mis-picks, you’ve likely outgrown basic inventory apps. At that point, platforms with stronger warehouse workflows—like Fishbowl, Finale Inventory, or Cin7—are usually worth a serious look.",
    },
  ] as BestForFaqItem[],
};

