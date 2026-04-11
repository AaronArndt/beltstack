/**
 * Inventory management best-for pages by trade / company type.
 * Featured triples vary by trade; products map to canonical inventory reviews.
 */

import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { getInventoryCompareUrl, getInventoryReviewUrl } from "@/lib/routes";
import { INVENTORY_LOGOS } from "@/lib/data/inventoryHubData";

const CATEGORY = { href: "/inventory", label: "Inventory management" };
const SEE_ALSO = {
  roundupLabel: "best inventory management software",
  roundupHref: "/inventory/best-inventory-software",
  compareLabel: "inventory software comparisons",
  compareHref: "/inventory/compare",
};

const INVENTORY_PRODUCT_CORE = {
  "zoho-inventory": {
    name: "Zoho Inventory",
    logoSrc: INVENTORY_LOGOS.zoho,
    rating: "4.6",
    startingPrice: "Free tier",
    visitUrl: "https://www.zoho.com/inventory",
    defaultStandout: "Orders, multi-warehouse, ecommerce integrations",
  },
  cin7: {
    name: "Cin7",
    logoSrc: INVENTORY_LOGOS.cin7,
    rating: "4.5",
    startingPrice: "From ~$349/mo",
    visitUrl: "https://www.cin7.com",
    defaultStandout: "Multi-channel retail, wholesale, and complex stock",
  },
  "inflow-inventory": {
    name: "inFlow Inventory",
    logoSrc: INVENTORY_LOGOS.inflow,
    rating: "4.4",
    startingPrice: "From ~$89/mo",
    visitUrl: "https://www.inflowinventory.com",
    defaultStandout: "Straightforward stock, POs, and barcodes for SMBs",
  },
  sortly: {
    name: "Sortly",
    logoSrc: INVENTORY_LOGOS.sortly,
    rating: "4.3",
    startingPrice: "From ~$39/mo",
    visitUrl: "https://www.sortly.com",
    defaultStandout: "Visual tracking, photos, and quick mobile counts",
  },
  katana: {
    name: "Katana",
    logoSrc: INVENTORY_LOGOS.katana,
    rating: "4.5",
    startingPrice: "From ~$129/mo",
    visitUrl: "https://katanamrp.com",
    defaultStandout: "BOMs, production, and materials for makers",
  },
  fishbowl: {
    name: "Fishbowl",
    logoSrc: INVENTORY_LOGOS.fishbowl,
    rating: "4.3",
    startingPrice: "Quote",
    visitUrl: "https://www.fishbowlinventory.com",
    defaultStandout: "Deeper warehouse and operational inventory",
  },
  unleashed: {
    name: "Unleashed",
    logoSrc: INVENTORY_LOGOS.unleashed,
    rating: "4.4",
    startingPrice: "From ~$349/mo",
    visitUrl: "https://www.unleashedsoftware.com",
    defaultStandout: "Margin, costing, and analytics for inventory-heavy ops",
  },
} as const;

type InventoryProductSlug = keyof typeof INVENTORY_PRODUCT_CORE;

type ProductPick = {
  slug: InventoryProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

type TradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  picks: [ProductPick, ProductPick, ProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

const INVENTORY_COMPARISONS: {
  label: string;
  compareSlug: string;
  products: [InventoryProductSlug, InventoryProductSlug];
}[] = [
  {
    label: "Zoho Inventory vs Cin7",
    compareSlug: "zoho-inventory-vs-cin7",
    products: ["zoho-inventory", "cin7"],
  },
  {
    label: "Cin7 vs Katana",
    compareSlug: "cin7-vs-katana",
    products: ["cin7", "katana"],
  },
  {
    label: "inFlow vs Zoho Inventory",
    compareSlug: "inflow-inventory-vs-zoho-inventory",
    products: ["inflow-inventory", "zoho-inventory"],
  },
  {
    label: "Sortly vs inFlow",
    compareSlug: "sortly-vs-inflow-inventory",
    products: ["sortly", "inflow-inventory"],
  },
  {
    label: "Fishbowl vs Katana",
    compareSlug: "fishbowl-vs-katana",
    products: ["fishbowl", "katana"],
  },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "Zoho Inventory vs Cin7", href: getInventoryCompareUrl("zoho-inventory-vs-cin7") },
  { label: "inFlow vs Zoho Inventory", href: getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory") },
  { label: "Sortly vs inFlow", href: getInventoryCompareUrl("sortly-vs-inflow-inventory") },
];

function buildRelatedComparisons(featured: InventoryProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = INVENTORY_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getInventoryCompareUrl(c.compareSlug), score };
  })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);
  const out: BestForComparisonLink[] = [];
  const seen = new Set<string>();
  for (const c of scored) {
    if (seen.has(c.href)) continue;
    seen.add(c.href);
    out.push({ label: c.label, href: c.href });
    if (out.length >= 5) break;
  }
  for (const f of DEFAULT_COMPARISON_FALLBACK) {
    if (out.length >= 3) break;
    if (seen.has(f.href)) continue;
    seen.add(f.href);
    out.push(f);
  }
  return out;
}

const REVIEW_FILL_ORDER: InventoryProductSlug[] = [
  "zoho-inventory",
  "inflow-inventory",
  "sortly",
  "cin7",
  "katana",
  "fishbowl",
  "unleashed",
];

function buildRelatedReviews(featured: InventoryProductSlug[]): BestForReviewLink[] {
  const ordered: InventoryProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: INVENTORY_PRODUCT_CORE[s].name,
    href: getInventoryReviewUrl(s),
  }));
}

const COMMON_GUIDES: BestForGuideLink[] = [
  {
    label: "How to choose inventory management software",
    href: "/inventory/guides/how-to-choose-inventory-management-software",
  },
  {
    label: "Cycle counting and inventory accuracy",
    href: "/inventory/guides/cycle-counting-and-inventory-accuracy",
  },
];

function buildTradeProps(p: TradeConfig): BestForTemplateProps {
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = INVENTORY_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getInventoryReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = INVENTORY_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getInventoryReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: INVENTORY_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const relatedGuides = [...(p.extraGuides ?? []), ...COMMON_GUIDES].filter(
    (item, i, arr) => arr.findIndex((x) => x.href === item.href) === i
  );

  return {
    title: p.title,
    subtitle: p.subtitle,
    useCase: p.useCase,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    introParagraph: p.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: "Our top inventory picks for this trade.",
    editorialSub: "What to look for when you choose inventory software for your operation.",
    whyThesePicksSub: "Why we recommend these tools for your use case.",
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: buildRelatedReviews(featuredSlugs),
    relatedComparisons: buildRelatedComparisons(featuredSlugs),
    relatedGuides,
    faqItems: p.faqItems,
  };
}

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

export const HVAC_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "hvac",
  title: "Best Inventory Management Software for HVAC Businesses (2026)",
  subtitle:
    "Compare inventory tools for HVAC: truck stock, parts rooms, warranty cores, and seasonal SKUs—without losing counts between installs and service.",
  introParagraph:
    "HVAC businesses carry filters, capacitors, refrigerant-related parts, and install-specific SKUs across vans and a shop. Inventory software helps you see what each truck has, what the warehouse owes a job, and when to reorder before peak season—especially once more than one person touches parts.",
  picks: [
    {
      slug: "zoho-inventory",
      badge: "Best balanced ops for growing HVAC",
      description: "Multi-location stock, purchase orders, and integrations when you outgrow the parts cage spreadsheet.",
      rowBestFor: "Shop + van visibility",
      why: "Zoho Inventory fits many HVAC shops that need real SKUs, purchase orders, and optional multi-warehouse views as you add trucks and a parts room. It scales further than photo-only trackers when you tie orders to stock. Trial with your top 50 SKUs, set reorder points for high runners, and confirm mobile or barcode workflow with your lead tech. See our Zoho Inventory review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best straightforward stock control",
      description: "Practical receiving, reordering, and barcode-friendly workflows for teams moving off paper.",
      rowBestFor: "Parts room discipline",
      why: "inFlow Inventory is a strong pick when the priority is clear on-hand counts, POs, and receiving without enterprise complexity—common for regional HVAC shops. Pilot one branch or the main warehouse first; train counter staff on adjustments and cycle counts. See our inFlow Inventory review and Sortly vs inFlow.",
    },
    {
      slug: "sortly",
      badge: "Best fast visual counts",
      description: "Photos and barcodes so techs see what a bin should hold—great for mixed truck stock.",
      rowBestFor: "Quick truck & bin audits",
      why: "Sortly is the honesty pick when adoption matters as much as depth: visual lists and barcodes help techs and helpers count truck stock without loving ERP screens. Use it when you need accuracy on fewer dimensions than full order management. See our Sortly review.",
    },
  ],
  editorialGuidance: [
    E(
      "Truck vs warehouse truth",
      "Decide whether each truck is a location or whether transfers from a central cage drive replenishment—then mirror that in software so counts reconcile."
    ),
    E(
      "Seasonal SKUs",
      "Tune reorder points before summer and winter peaks; archive or hide slow movers so searches stay fast."
    ),
    E(
      "Cores and returns",
      "Track warranty returns and core-eligible parts so money is not left on shelves or in vans."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software is best for HVAC companies?",
      a: "We shortlist Zoho Inventory for balanced order and stock workflows, inFlow Inventory for straightforward parts-room control, and Sortly when visual, mobile-friendly counts matter most.",
    },
    {
      q: "Do HVAC businesses need inventory software if they have field service software?",
      a: "FSM handles jobs and sometimes basic parts; dedicated inventory adds SKU discipline, POs, and counts across vans and shops. Many growing shops use both.",
    },
    {
      q: "Can we track refrigerant or regulated items?",
      a: "Use batch or serial fields where the tool supports them, and keep compliance documentation outside or integrated per vendor capabilities—validate during a pilot.",
    },
  ],
});

export const PLUMBING_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "plumbing",
  title: "Best Inventory Management Software for Plumbing Companies (2026)",
  subtitle:
    "Compare inventory tools for plumbers: fittings, water heaters, specialty tools, and multi-truck stock without mystery shrinkage.",
  introParagraph:
    "Plumbing contractors carry thousands of small-value SKUs that add up fast—fittings, valves, water heaters, and job-specific orders. Inventory software reduces truck-to-truck borrowing chaos and helps the office know what to buy before the next big job.",
  picks: [
    {
      slug: "inflow-inventory",
      badge: "Best practical parts control",
      description: "Receiving, POs, and barcodes tuned to shops stepping up from spreadsheets.",
      rowBestFor: "Shop & van stock",
      why: "inFlow Inventory fits plumbing operations that need dependable receiving, adjustments, and reorder discipline without a six-month ERP rollout. Start with your supply house’s fast movers and job kits. See our inFlow Inventory review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best when orders and stock must align",
      description: "Tie purchase and sales flows to stock when you sell materials or track job pulls formally.",
      rowBestFor: "Orders + multi-location",
      why: "Zoho Inventory helps when you want purchase orders, stock levels, and optional ecommerce or accounting alignment in one stack—especially if you already use Zoho Books. Trial multi-warehouse if shop and display stock diverge. See our Zoho Inventory review.",
    },
    {
      slug: "sortly",
      badge: "Best visual simplicity",
      description: "Photo-forward lists for vans and small yards where techs need to see—not guess—what is on hand.",
      rowBestFor: "Field-friendly audits",
      why: "Sortly works when your team resists heavy UIs but still needs cycle counts and bin clarity on trucks. See our Sortly review and Sortly vs inFlow.",
    },
  ],
  editorialGuidance: [
    E(
      "Kit and job templates",
      "Define common job kits (water heater changeout, repipe starter) as BOM-style lists or saved orders to speed picking."
    ),
    E(
      "Shrink and returns",
      "Separate damaged, warranty, and vendor return states so reporting stays honest."
    ),
    E(
      "Counter culture",
      "Who owns adjustments after hours? Lock down permissions once basics stick."
    ),
  ],
  faqItems: [
    {
      q: "What is the best inventory app for plumbing contractors?",
      a: "inFlow Inventory for straightforward stock and POs, Zoho Inventory when orders and integrations matter, Sortly for visual truck-and-bin tracking.",
    },
    {
      q: "Should each truck be its own warehouse?",
      a: "Often yes for accountability, with transfers from a main cage—pick a model and stick to it so month-end reconciles.",
    },
    {
      q: "Do small plumbing shops need this?",
      a: "When two trucks and a parts wall create constant ‘who took the 3/4 coupling?’ issues, software pays for itself in time and emergency buys.",
    },
  ],
});

export const ELECTRICIANS_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "electricians",
  title: "Best Inventory Management Software for Electricians (2026)",
  subtitle:
    "Compare inventory tools for electrical contractors: wire, breakers, fixtures, and conduit—tracked across vans and the shop.",
  introParagraph:
    "Electrical contractors juggle commodity items and project-specific material. Good inventory software shows what is committed to jobs, what is still on the shelf, and when to restock before inspectors or rough-in dates slip.",
  picks: [
    {
      slug: "zoho-inventory",
      badge: "Best SMB hub for stock and orders",
      description: "Multi-warehouse views and POs when panel jobs and service trucks share one purchasing brain.",
      rowBestFor: "Shop + project stock",
      why: "Zoho Inventory suits electrical shops that need structured SKUs, transfers, and purchase orders as panel upgrades and commercial jobs scale. Connect accounting if Zoho is already in play. See our Zoho Inventory review and inFlow vs Zoho.",
    },
    {
      slug: "sortly",
      badge: "Best fast mobile visibility",
      description: "Barcode and photo lists for vans and job trailers when techs need quick lookups.",
      rowBestFor: "Truck stock clarity",
      why: "Sortly helps when electricians need to see what is on the truck without deep training—ideal for mixed service and small project work. See our Sortly review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best no-nonsense control",
      description: "Straight PO and receiving loops for shops focused on accuracy over channel complexity.",
      rowBestFor: "Parts discipline",
      why: "inFlow Inventory is a solid middle ground when you want real inventory control without Cin7-level scope. Pilot with your top commodity SKUs. See our inFlow Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Job commits",
      "Decide how material is allocated to jobs (soft reserve vs hard pick) so available-to-promise is not lying to estimators."
    ),
    E(
      "Length and measure items",
      "Use consistent UOM for wire and conduit so partial lengths do not corrupt counts."
    ),
    E(
      "Tooling vs material",
      "Separate expensive tools from consumable SKUs if your team confuses the two on reports."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software do electrical contractors use?",
      a: "Zoho Inventory for structured multi-location stock, Sortly for visual van tracking, inFlow Inventory for practical PO and receiving workflows.",
    },
    {
      q: "Can inventory software integrate with estimating?",
      a: "Often via export or middleware—validate whether your estimating tool feeds SKU lists or only dollars; inventory still wins on hand quantities.",
    },
    {
      q: "When do electricians need Fishbowl or Unleashed?",
      a: "When multiple branches, landed cost, or manufacturing kitting dominate—see our full inventory comparisons from the hub picks on this page.",
    },
  ],
});

export const PAINTING_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "painting",
  title: "Best Inventory Management Software for Painting Contractors (2026)",
  subtitle:
    "Compare inventory tools for painters: gallons, sprayer parts, consumables, and color-matched special orders.",
  introParagraph:
    "Painting contractors stock paint, primer, sundries, and equipment across crews. Inventory software cuts waste from opened gallons, tracks sprayer parts, and helps you reorder before a production week—not after the store closes.",
  picks: [
    {
      slug: "sortly",
      badge: "Best crew-friendly tracking",
      description: "Visual lists for bins, trailers, and job cages—easy adoption for supers and leads.",
      rowBestFor: "Crew cages & trailers",
      why: "Sortly fits painting ops where supers manage physical bins and need photos plus barcodes more than purchase-order depth. Great for consumables and small parts. See our Sortly review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best shop reorder discipline",
      description: "POs and stock levels when you run a real paint shop or central cage feeding crews.",
      rowBestFor: "Central stockroom",
      why: "inFlow Inventory helps when one person owns purchasing and you need reliable min/max and receiving. See our inFlow Inventory review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best growth path to orders",
      description: "If you sell materials on change orders or run multiple depots, tie stock to orders more formally.",
      rowBestFor: "Multi-depot + orders",
      why: "Zoho Inventory suits painting companies adding locations or tighter order-to-stock alignment. See our Zoho Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Opened gallons",
      "Track partials as separate lot notes or adjustments so job costing does not assume full gallons every time."
    ),
    E(
      "Color-matched orders",
      "Flag special-mix SKUs so they are not treated like shelf stock for reorder rules."
    ),
    E(
      "Seasonality",
      "Bump exterior SKUs before spring; dial back in winter if your market slows."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software is best for painting contractors?",
      a: "Sortly for visual crew-level tracking, inFlow Inventory for shop PO discipline, Zoho Inventory when you add depots or tie stock to orders.",
    },
    {
      q: "Do painters need full ERP?",
      a: "Rarely at first—start with accurate counts and reordering; add depth if you run multiple branches or manufacturing.",
    },
    {
      q: "Can we track equipment separately?",
      a: "Yes—use categories or a parallel tool list so sprayers and ladders are not mixed with consumable COGS.",
    },
  ],
});

export const ROOFING_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "roofing",
  title: "Best Inventory Management Software for Roofing Companies (2026)",
  subtitle:
    "Compare inventory tools for roofers: shingles, underlayment, metal coils, and storm-season volume without stockouts.",
  introParagraph:
    "Roofing companies move heavy, high-cube material through yards, trucks, and job sites. Inventory software helps you know what is allocated to production, what is on order, and what disappeared after storm season—especially when multiple crews pull from the same yard.",
  picks: [
    {
      slug: "fishbowl",
      badge: "Best deeper yard and warehouse ops",
      description: "Stronger operational inventory when you run a real yard, multiple locations, or complex receiving.",
      rowBestFor: "Yard & warehouse depth",
      why: "Fishbowl is the tailored pick when roofing volume justifies deeper warehouse-style workflows than lightweight SMB apps—expect quotes and onboarding. Validate QuickBooks or accounting integration during sales process. See our Fishbowl review and Fishbowl vs Katana.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best SMB balance for multi-location",
      description: "Warehouses, POs, and stock transfers when you are not ready for full WMS pricing.",
      rowBestFor: "Multi-yard stock",
      why: "Zoho Inventory helps growing roofers with multiple yards or shop plus yard splits track transfers and POs without jumping straight to the highest tier. See our Zoho Inventory review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best straightforward yard counts",
      description: "Practical receiving and adjustments when supers own counts more than formal warehousing.",
      rowBestFor: "Simpler yard control",
      why: "inFlow Inventory fits regional roofers who need disciplined counts and POs without Fishbowl scope. See our inFlow Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Storm surges",
      "Pre-build approved vendor SKUs and safety stock rules before hail season so buyers are not guessing under pressure."
    ),
    E(
      "Job pulls vs yard on hand",
      "Align how production signals material needs—pick lists, transfers, or manual issues—so the system matches how supers actually work."
    ),
    E(
      "Returns and credits",
      "Track supplier returns for mis-orders; do not let them vanish from reporting."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software do roofing companies use?",
      a: "Fishbowl when yard and warehouse depth matter, Zoho Inventory for multi-location SMB balance, inFlow Inventory for straightforward receiving and counts.",
    },
    {
      q: "Do roofers need barcode scanning?",
      a: "Helpful at yard scale; start with fast movers and bundles, then expand once processes stick.",
    },
    {
      q: "When is Cin7 a better fit?",
      a: "When you also run complex retail, wholesale, and ecommerce channels beyond roofing supply—see Zoho Inventory vs Cin7.",
    },
  ],
});

export const GENERAL_CONTRACTORS_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "general-contractors",
  title: "Best Inventory Management Software for General Contractors (2026)",
  subtitle:
    "Compare inventory tools for general contractors: job materials, allowances, tool cribs, and multi-site visibility.",
  introParagraph:
    "General contractors coordinate material across active jobs, sometimes with consigned or owner-purchased items. Inventory software clarifies what the GC owns, what is staged on site, and what must be reordered—without relying on supers’ spreadsheets alone.",
  picks: [
    {
      slug: "cin7",
      badge: "Best when channels and complexity stack",
      description: "Multi-channel inventory depth when retail-like, wholesale, or multi-entity flows appear alongside jobs.",
      rowBestFor: "Complex stock + channels",
      why: "Cin7 is the honesty pick for GC-adjacent operators that also run supply, showroom, or multi-channel commerce—not every GC needs it. When your inventory story looks like a distributor plus jobs, Cin7 belongs on the shortlist despite price. See our Cin7 review and Zoho Inventory vs Cin7.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best balanced GC stack",
      description: "Warehouses, transfers, and POs when you run a cage feeding multiple sites.",
      rowBestFor: "Cage-to-job transfers",
      why: "Zoho Inventory fits many GCs consolidating a central cage or fab shop feeding multiple sites—without Cin7’s full weight. See our Zoho Inventory review.",
    },
    {
      slug: "fishbowl",
      badge: "Best operational depth",
      description: "Heavier warehouse and manufacturing-adjacent workflows when prefab or kitting grows.",
      rowBestFor: "Ops-heavy GCs",
      why: "Fishbowl suits GCs with real warehouse operations, prefab, or integrated accounting needs that outgrow lighter tools. See our Fishbowl review.",
    },
  ],
  editorialGuidance: [
    E(
      "Job costing alignment",
      "Decide whether inventory issues post to jobs in accounting automatically or via export—match whatever your controller will audit."
    ),
    E(
      "Owner-supplied material",
      "Tag or separate owner-furnished SKUs so they do not distort GC-owned valuation."
    ),
    E(
      "Tool crib vs job stock",
      "Keep rotating tools out of consumable COGS unless you intentionally capitalize differently."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software should general contractors use?",
      a: "Cin7 when multi-channel or distributor-style complexity is real; Zoho Inventory for many growing GCs with a central cage; Fishbowl for deeper warehouse or prefab ops.",
    },
    {
      q: "Does Procore replace inventory software?",
      a: "Construction platforms handle documents and commitments; you still need SKU-level truth for owned stock—often a dedicated inventory layer.",
    },
    {
      q: "Where do we start if we are small?",
      a: "Pilot Zoho Inventory or inFlow with one cage and two jobs before expanding—see our small-business best-for page too.",
    },
  ],
});

export const LANDSCAPING_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "landscaping",
  title: "Best Inventory Management Software for Landscaping Companies (2026)",
  subtitle:
    "Compare inventory tools for landscapers: plants, mulch, hardscape materials, and seasonal spikes.",
  introParagraph:
    "Landscaping companies juggle perishable and bulk inventory, often with spring peaks and fall cleanups. Software helps you see what is on trucks, what is in the yard, and what to pre-order before the season hits.",
  picks: [
    {
      slug: "sortly",
      badge: "Best yard and crew visibility",
      description: "Photos and simple lists for bins, trailers, and yard rows when teams think visually.",
      rowBestFor: "Yard & crew stock",
      why: "Sortly fits landscapers where supers and crews need fast visual audits of mulch, soil, and bagged goods without ERP training. See our Sortly review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best multi-location growth",
      description: "When you add a second yard or nursery and need transfers plus POs.",
      rowBestFor: "Multi-yard ops",
      why: "Zoho Inventory helps growing landscapers formalize transfers between yard, shop, and staging areas. See our Zoho Inventory review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best straightforward purchasing",
      description: "PO and receiving loops for bulk orders and supplier reliability tracking.",
      rowBestFor: "Purchasing discipline",
      why: "inFlow Inventory suits ops managers who own vendor orders and need clean receiving. See our inFlow Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Perishables",
      "Use notes or batches for living plant material if you track shrink from mortality separately."
    ),
    E(
      "Bulk vs bagged",
      "Consistent UOM prevents half-yard errors from breaking reports."
    ),
    E(
      "Seasonal prebuys",
      "Model pre-season POs so early spring does not empty the yard unexpectedly."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software works for landscaping companies?",
      a: "Sortly for visual yard and crew tracking, Zoho Inventory for multi-yard transfers and orders, inFlow Inventory for straightforward PO and receiving workflows.",
    },
    {
      q: "Do landscapers need barcode everything?",
      a: "Not day one—start with fast movers and high-shrink categories, then expand.",
    },
    {
      q: "Can this tie to routing software?",
      a: "Usually indirectly—inventory handles quantities; routing handles trucks. Integrate or export where vendors support it.",
    },
  ],
});

export const CONSTRUCTION_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "construction",
  title: "Best Inventory Management Software for Construction Companies (2026)",
  subtitle:
    "Compare inventory tools for construction firms: job sites, laydown yards, prefab, and materials committed to contracts.",
  introParagraph:
    "Construction inventory spans bulk commodity, long-lead equipment, and site-staged material. The right software helps supers and PMs see what is available to issue, what is on order, and what is burning rate on active jobs.",
  picks: [
    {
      slug: "fishbowl",
      badge: "Best warehouse and operational depth",
      description: "Deeper workflows for yards, prefab shops, and inventory-heavy subs.",
      rowBestFor: "Yard & prefab ops",
      why: "Fishbowl fits construction-adjacent inventory when laydown yards, prefab, or integrated accounting workflows matter. Expect scoping calls and quotes. See our Fishbowl review and Fishbowl vs Katana.",
    },
    {
      slug: "katana",
      badge: "Best materials + light production",
      description: "BOMs and production workflows when you fabricate assemblies or kits for sites.",
      rowBestFor: "Kits & fabrication",
      why: "Katana is tailored when you assemble panels, MEP skids, or repeatable kits—not every GC needs MRP, but fab shops on jobs do. See our Katana review and Cin7 vs Katana.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best SMB construction stock",
      description: "Transfers, POs, and multi-warehouse when you are not ready for Fishbowl scope.",
      rowBestFor: "Site + yard basics",
      why: "Zoho Inventory helps construction SMBs track central yard to site transfers with clearer PO discipline than spreadsheets. See our Zoho Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Issued vs on-hand",
      "Define when material moves from ‘available’ to ‘on job’ so reports match lien and billing discussions."
    ),
    E(
      "Long-lead equipment",
      "Track expected receipt dates on PO lines so schedules do not assume early arrival."
    ),
    E(
      "Scrap and waste",
      "Capture waste factors on high-variance commodities so forecasts improve over time."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software do construction companies use?",
      a: "Fishbowl for deeper yard and warehouse ops, Katana when fabrication and BOMs matter, Zoho Inventory for structured SMB stock and transfers.",
    },
    {
      q: "Is this the same as construction ERP?",
      a: "No—inventory tools focus on SKUs and movement; ERP adds financials, subs, and project control. Pair tools to your maturity.",
    },
    {
      q: "When should we pilot?",
      a: "Start with one yard and two active jobs; expand after month-end reconciles clean.",
    },
  ],
});

export const REMODELING_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "remodeling",
  title: "Best Inventory Management Software for Remodeling Businesses (2026)",
  subtitle:
    "Compare inventory tools for remodelers: allowances, finish materials, job cages, and selections-driven SKUs.",
  introParagraph:
    "Remodelers stock finish materials, repeat fixtures, and job-specific orders tied to selections. Inventory software reduces ‘we thought it was on site’ moments and helps designers align what was ordered with what is available to install.",
  picks: [
    {
      slug: "inflow-inventory",
      badge: "Best remodel-friendly control",
      description: "Straight PO and stock workflows for design-build shops with a materials cage.",
      rowBestFor: "Selections & cage stock",
      why: "inFlow Inventory fits remodeling firms moving off spreadsheets for cage stock, receiving, and reorders—without distributor-grade complexity. See our inFlow Inventory review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best growth and integrations",
      description: "When you tie orders to accounting or multiple finish rooms and warehouses.",
      rowBestFor: "Multi-room stock",
      why: "Zoho Inventory helps as you add finish rooms or integrate with Zoho Books for clearer COGS. See our Zoho Inventory review.",
    },
    {
      slug: "sortly",
      badge: "Best visual finish tracking",
      description: "Photos and labels for tile, cabinet hardware, and fragile SKUs stored on site.",
      rowBestFor: "Visual job staging",
      why: "Sortly helps teams that think in visuals—ideal for labeled job bins and finish closets. See our Sortly review.",
    },
  ],
  editorialGuidance: [
    E(
      "Allowance vs actual",
      "Track allowance SKUs separately from upgrade lines so margin stories stay honest."
    ),
    E(
      "Job bins",
      "Use locations or tags per job so finish material does not wander between projects."
    ),
    E(
      "Returns to supplier",
      "Log wrong-finish returns so designers see credit status, not mystery stock."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software do remodelers use?",
      a: "inFlow Inventory for practical cage and PO control, Zoho Inventory for multi-room growth and integrations, Sortly for visual finish and job-bin tracking.",
    },
    {
      q: "Do remodelers need manufacturing tools?",
      a: "Only if you fabricate; most need strong SKU and location discipline, not full MRP.",
    },
    {
      q: "Can designers use the same system?",
      a: "Yes—limit permissions so selections owners adjust catalog without breaking costing rules.",
    },
  ],
});

export const HANDYMAN_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "handyman",
  title: "Best Inventory Management Software for Handyman Businesses (2026)",
  subtitle:
    "Compare inventory tools for handyman services: van stock, fasteners, and small parts without enterprise overhead.",
  introParagraph:
    "Handyman businesses run lean vans with fast-turn SKUs. Inventory software prevents repeat hardware-store runs and shows which truck has the oddball parts you need on the next callback.",
  picks: [
    {
      slug: "sortly",
      badge: "Best simple van lists",
      description: "Visual, barcode-friendly lists techs actually maintain between jobs.",
      rowBestFor: "Van stock",
      why: "Sortly is the default when you want adoption: photos and quick counts beat heavy PO modules for many handyman vans. See our Sortly review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best when you add a shop wall",
      description: "Light PO and min/max when you centralize buying beyond truck junk drawers.",
      rowBestFor: "Shop + van",
      why: "inFlow Inventory helps once you have a real parts wall and want reorder discipline. See our inFlow Inventory review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best if you scale crews",
      description: "More structure when multiple vans and a small warehouse appear.",
      rowBestFor: "Growing multi-van ops",
      why: "Zoho Inventory suits handyman franchises or growing teams that need transfers and clearer purchasing. See our Zoho Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Minimum viable SKUs",
      "Start with the 80/20 of parts you buy weekly—expand after habits stick."
    ),
    E(
      "Consignment and customer parts",
      "Tag customer-owned material if you occasionally store it to avoid COGS confusion."
    ),
    E(
      "Tooling",
      "Keep expensive tools in a separate category from consumables."
    ),
  ],
  faqItems: [
    {
      q: "What is the best inventory app for a handyman business?",
      a: "Sortly for simple van lists, inFlow Inventory when a shop wall and POs appear, Zoho Inventory if you run multiple vans with transfers.",
    },
    {
      q: "Is a spreadsheet enough?",
      a: "Until two vans and callbacks multiply—then software saves more in fuel and time than it costs.",
    },
    {
      q: "Do I need barcodes?",
      a: "Helpful but optional; phone cameras and QR labels work for many small teams.",
    },
  ],
});

export const PROPERTY_MANAGEMENT_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "property-management",
  title: "Best Inventory Management Software for Property Management Companies (2026)",
  subtitle:
    "Compare inventory tools for property managers: unit turnovers, MRO stock, smart-lock parts, and capex materials.",
  introParagraph:
    "Property management companies stock paint, hardware, appliances, and recurring MRO items across portfolios. Inventory software helps coordinators see what the maintenance shop has, what is on order for turns, and what disappears to unlogged jobs.",
  picks: [
    {
      slug: "zoho-inventory",
      badge: "Best portfolio-scale stock",
      description: "Multi-warehouse or location-style views for central shops feeding many properties.",
      rowBestFor: "Central maintenance stock",
      why: "Zoho Inventory fits PM firms with a real maintenance cage or small warehouse supporting many units—POs and transfers clarify what each region can pull. See our Zoho Inventory review.",
    },
    {
      slug: "sortly",
      badge: "Best fast audits and visuals",
      description: "Photo lists for shelf standards, paint chips, and repeat turnover kits.",
      rowBestFor: "Turnover kits & shelves",
      why: "Sortly helps teams standardize turnover kits and shelf layouts with visuals—great for training new coordinators. See our Sortly review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best straightforward MRO control",
      description: "Receiving and adjustments when the shop manager owns counts end to end.",
      rowBestFor: "Shop discipline",
      why: "inFlow Inventory suits operators who want PO and receiving rigor without distributor complexity. See our inFlow Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Owner vs operator stock",
      "Separate owner-purchased capex from operator MRO if contracts require it."
    ),
    E(
      "Shrink and unlogged pulls",
      "Require reason codes on adjustments so mystery shrink surfaces in review."
    ),
    E(
      "Integration with work orders",
      "Decide whether inventory issues tie to WO systems via export or native integration."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software fits property management companies?",
      a: "Zoho Inventory for multi-location maintenance stock, Sortly for visual turnover kits and shelves, inFlow Inventory for straightforward shop control.",
    },
    {
      q: "Does this replace our property management platform?",
      a: "No—it complements it for SKU-level stock; leases and tickets still live in your PM software.",
    },
    {
      q: "Where should we pilot?",
      a: "One central shop serving one region—prove reorder accuracy before portfolio-wide rollout.",
    },
  ],
});

export const PEST_CONTROL_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pest-control",
  title: "Best Inventory Management Software for Pest Control Businesses (2026)",
  subtitle:
    "Compare inventory tools for pest control: chemicals, bait stations, PPE, and route truck stock with accountability.",
  introParagraph:
    "Pest control operators carry regulated products, baits, and equipment across dense routes. Inventory software improves accountability for what each truck holds, what was used on accounts, and what must be reordered—while staying compatible with how you already document treatments.",
  picks: [
    {
      slug: "zoho-inventory",
      badge: "Best structured SKU and PO control",
      description: "Batch-friendly fields (where supported), POs, and multi-location if shop plus trucks matter.",
      rowBestFor: "Shop + route stock",
      why: "Zoho Inventory helps pest operators formalize SKUs, purchase orders, and transfers between shop and route stock as they grow past spreadsheets. Validate regulatory logging still meets your compliance program. See our Zoho Inventory review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best practical receiving",
      description: "Straight receiving and adjustments when the shop orders weekly for routes.",
      rowBestFor: "Weekly replenishment",
      why: "inFlow Inventory fits when a shop buyer owns vendor orders and needs clean receiving loops. See our inFlow Inventory review.",
    },
    {
      slug: "unleashed",
      badge: "Best margin and costing depth",
      description: "When SKU count, landed cost, and analytics matter as much as counts—mid-market maturity required.",
      rowBestFor: "Heavy SKU analytics",
      why: "Unleashed is for inventory-heavy pest operators already disciplined on data—stronger margin and costing storytelling than lightweight apps, at higher price and setup. See our Unleashed review; pair with hub comparisons for adjacent tools.",
    },
  ],
  editorialGuidance: [
    E(
      "Compliance first",
      "Software supports counts; chemical application logs may still live in compliance or route tools—do not confuse the two."
    ),
    E(
      "Serialized or lot tracking",
      "Use vendor-supported batch/serial features where regulations require traceability."
    ),
    E(
      "Route replenishment",
      "Set par levels per truck class so Monday restocks are predictable."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software works for pest control companies?",
      a: "Zoho Inventory for structured SKUs and locations, inFlow Inventory for practical shop receiving, Unleashed when margin and costing analytics justify mid-market investment.",
    },
    {
      q: "Can technicians count on phones?",
      a: "Yes—prioritize mobile-friendly tools (Sortly is another option) if that is the main adoption barrier.",
    },
    {
      q: "Do we need Unleashed on day one?",
      a: "Usually no—graduate when finance and ops need deeper margin views than SMB apps provide.",
    },
  ],
});

export const POOL_SERVICE_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pool-service",
  title: "Best Inventory Management Software for Pool Service Companies (2026)",
  subtitle:
    "Compare inventory tools for pool companies: chemicals, filters, equipment, and seasonal opening/closing SKUs.",
  introParagraph:
    "Pool service companies stock chemicals, cartridges, heaters, and seasonal SKUs across routes and a small warehouse. Inventory software helps you reorder before Memorial Day weekend and track what each truck used on recurring accounts.",
  picks: [
    {
      slug: "sortly",
      badge: "Best route truck clarity",
      description: "Visual lists for chemical bins and small parts techs count between stops.",
      rowBestFor: "Truck chemical stock",
      why: "Sortly helps pool routes where fast mobile counts matter more than heavy PO modules. See our Sortly review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best shop plus route structure",
      description: "Transfers and POs when a central shop feeds many trucks.",
      rowBestFor: "Shop-to-route transfers",
      why: "Zoho Inventory suits operators with a real warehouse feeding routes—clearer transfers and reordering. See our Zoho Inventory review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best purchasing discipline",
      description: "Receiving and vendor management when seasonal buys spike cash flow.",
      rowBestFor: "Seasonal purchasing",
      why: "inFlow Inventory helps owners manage pre-season POs and receiving without overbuying. See our inFlow Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Hazmat handling",
      "Follow vendor guidance for storage fields; keep SDS and compliance outside the inventory record if required."
    ),
    E(
      "Seasonal curves",
      "Model opening and closing season SKUs separately from weekly route consumables."
    ),
    E(
      "Equipment vs consumables",
      "Separate heaters and pumps from test strips and acid so margin reporting makes sense."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software do pool service companies use?",
      a: "Sortly for truck-level visual tracking, Zoho Inventory for shop-to-route structure, inFlow Inventory for seasonal PO discipline.",
    },
    {
      q: "Can we integrate with route software?",
      a: "Often via export or vendor connectors—inventory still owns SKU truth.",
    },
    {
      q: "Do we need barcode scanners?",
      a: "Optional; phone-based QR can suffice for small teams.",
    },
  ],
});

export const JUNK_REMOVAL_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "junk-removal",
  title: "Best Inventory Management Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare inventory tools for junk removal: dollies, straps, PPE, and resale inventory if you sort donations or scrap.",
  introParagraph:
    "Junk removal is labor-first, but crews still burn through supplies and some operators maintain resale or donation sorting. Lightweight inventory software tracks what each truck should carry and what the shop must restock—without pretending you are a manufacturer.",
  picks: [
    {
      slug: "sortly",
      badge: "Best supplies and small tools",
      description: "Simple lists for straps, tarps, PPE, and truck boxes—fast adoption.",
      rowBestFor: "Crew supplies",
      why: "Sortly fits junk removal when the goal is accountable supplies and small tools per truck, not complex BOMs. See our Sortly review.",
    },
    {
      slug: "inflow-inventory",
      badge: "Best when resale SKUs appear",
      description: "If you sort sellable goods, basic SKU control beats spreadsheets quickly.",
      rowBestFor: "Resale / sorted goods",
      why: "inFlow Inventory helps when donation or resale SKUs need real counts and PO-style purchasing from suppliers. See our inFlow Inventory review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best multi-truck + shop scale",
      description: "When multiple yards or resale channels need transfers and clearer purchasing.",
      rowBestFor: "Multi-yard ops",
      why: "Zoho Inventory suits operators adding yards or light wholesale of sorted goods. See our Zoho Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Separate consumables from assets",
      "Trucks and packers are assets; straps and fuel additives are consumables—keep categories clean."
    ),
    E(
      "Donation flows",
      "If you track donated goods for reporting, tag those SKUs distinctly."
    ),
    E(
      "Minimal viable process",
      "Start with top 30 supply SKUs; expand if resale grows."
    ),
  ],
  faqItems: [
    {
      q: "Do junk removal companies need inventory software?",
      a: "For supplies and resale SKUs, yes—Sortly for simple truck lists, inFlow when resale counts matter, Zoho when multi-yard ops grow.",
    },
    {
      q: "Is this overkill for one truck?",
      a: "Maybe—once you run multiple trucks or resale, structure pays off.",
    },
    {
      q: "What about fleet maintenance parts?",
      a: "Track shop parts separately from job supplies if mechanics and crews share a cage.",
    },
  ],
});

export const MOVING_INVENTORY_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "moving",
  title: "Best Inventory Management Software for Moving Companies (2026)",
  subtitle:
    "Compare inventory tools for movers: boxes, packing material, dollies, and warehouse consumables across peak season.",
  introParagraph:
    "Moving companies stock boxes, wrap, and equipment that disappears peak season. Inventory software helps warehouses set par levels, track what crews checked out, and reorder before month-end crunch—without relying on gut feel alone.",
  picks: [
    {
      slug: "inflow-inventory",
      badge: "Best warehouse supply control",
      description: "POs, receiving, and adjustments for box rooms and equipment cages.",
      rowBestFor: "Warehouse supplies",
      why: "inFlow Inventory fits moving companies with real warehouse consumption patterns—clear receiving and counts before busy weekends. See our inFlow Inventory review.",
    },
    {
      slug: "sortly",
      badge: "Best equipment checkout visuals",
      description: "Photo lists for dollies, blankets, and barcoded bins per truck or crew.",
      rowBestFor: "Equipment lists",
      why: "Sortly helps when equipment checkout discipline matters and crews need visual cues. See our Sortly review.",
    },
    {
      slug: "zoho-inventory",
      badge: "Best multi-branch movers",
      description: "Transfers between warehouses when you operate more than one city or hub.",
      rowBestFor: "Multi-hub stock",
      why: "Zoho Inventory suits growing movers balancing stock across hubs with clearer transfers. See our Zoho Inventory review.",
    },
  ],
  editorialGuidance: [
    E(
      "Peak season buffers",
      "Raise par levels before summer and month-end; drop after slow weeks."
    ),
    E(
      "Damage and loss",
      "Track blanket and pad shrink separately so purchasing sees real utilization."
    ),
    E(
      "Customer-purchased boxes",
      "If you retail boxes, treat them as sellable SKUs distinct from internal consumables."
    ),
  ],
  faqItems: [
    {
      q: "What inventory software do moving companies use?",
      a: "inFlow Inventory for warehouse supply and PO control, Sortly for visual equipment lists, Zoho Inventory for multi-hub transfers.",
    },
    {
      q: "Do movers need ERP?",
      a: "Rarely for supplies alone—start with inventory discipline; add ERP when finance and fleet complexity demand it.",
    },
    {
      q: "Can this track customer inventory?",
      a: "That is usually warehouse management for vaulted goods—a different problem than supply SKUs; validate scope with vendors.",
    },
  ],
});
