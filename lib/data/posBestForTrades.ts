/**
 * POS best-for pages by trade / business type.
 * Featured triples vary by trade; products map to canonical POS reviews and comparisons in `posComparisons`.
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
import { POS_LOGOS } from "@/lib/data/posHubData";
import { getPosBestForUrl, getPosCompareUrl, getPosReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/pos", label: "POS Software" };
const SEE_ALSO = {
  roundupLabel: "best POS software",
  roundupHref: "/pos/best-pos-software",
  compareLabel: "POS software comparisons",
  compareHref: "/pos/compare",
};

const POS_PRODUCT_CORE = {
  "square-pos": {
    name: "Square",
    logoSrc: POS_LOGOS.square,
    rating: "4.6",
    startingPrice: "Free software, hardware from $49",
    visitUrl: "https://squareup.com",
    defaultStandout: "Simple setup, mobile payments, transparent processing",
  },
  "clover-pos": {
    name: "Clover",
    logoSrc: POS_LOGOS.clover,
    rating: "4.3",
    startingPrice: "From ~$69/mo (with hardware)",
    visitUrl: "https://www.clover.com",
    defaultStandout: "Hardware choice + app market for custom workflows",
  },
  "shopify-pos": {
    name: "Shopify POS",
    logoSrc: POS_LOGOS.shopify,
    rating: "4.5",
    startingPrice: "From $39/mo (with Shopify plan)",
    visitUrl: "https://www.shopify.com/pos",
    defaultStandout: "Unified catalog when you sell online + in person",
  },
  "lightspeed-pos": {
    name: "Lightspeed",
    logoSrc: POS_LOGOS.lightspeed,
    rating: "4.4",
    startingPrice: "From ~$69/mo",
    visitUrl: "https://www.lightspeedhq.com",
    defaultStandout: "Retail inventory, purchasing, multi-location depth",
  },
  "vend-pos": {
    name: "Vend (Lightspeed Retail)",
    logoSrc: POS_LOGOS.vend,
    rating: "4.3",
    startingPrice: "From ~$69/mo",
    visitUrl: "https://www.lightspeedhq.com/vend",
    defaultStandout: "Retail-first inventory and multi-store control",
  },
} as const;

export type PosProductSlug = keyof typeof POS_PRODUCT_CORE;

export type PosProductPick = {
  slug: PosProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

export type PosTradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  picks: [PosProductPick, PosProductPick, PosProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

const POS_COMPARISONS: {
  label: string;
  compareSlug: string;
  products: [PosProductSlug, PosProductSlug];
}[] = [
  { label: "Square vs Shopify POS", compareSlug: "square-pos-vs-shopify-pos", products: ["square-pos", "shopify-pos"] },
  { label: "Square vs Clover", compareSlug: "square-pos-vs-clover-pos", products: ["square-pos", "clover-pos"] },
  { label: "Shopify POS vs Lightspeed", compareSlug: "shopify-pos-vs-lightspeed-pos", products: ["shopify-pos", "lightspeed-pos"] },
  { label: "Square vs Lightspeed", compareSlug: "square-pos-vs-lightspeed-pos", products: ["square-pos", "lightspeed-pos"] },
  { label: "Square vs Vend", compareSlug: "square-pos-vs-vend-pos", products: ["square-pos", "vend-pos"] },
  { label: "Shopify POS vs Clover", compareSlug: "shopify-pos-vs-clover-pos", products: ["shopify-pos", "clover-pos"] },
  { label: "Lightspeed vs Clover", compareSlug: "lightspeed-pos-vs-clover-pos", products: ["lightspeed-pos", "clover-pos"] },
  { label: "Lightspeed vs Vend", compareSlug: "lightspeed-pos-vs-vend-pos", products: ["lightspeed-pos", "vend-pos"] },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "Square vs Shopify POS", href: getPosCompareUrl("square-pos-vs-shopify-pos") },
  { label: "Square vs Clover", href: getPosCompareUrl("square-pos-vs-clover-pos") },
  { label: "Lightspeed vs Vend", href: getPosCompareUrl("lightspeed-pos-vs-vend-pos") },
];

function buildRelatedComparisons(featured: PosProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = POS_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getPosCompareUrl(c.compareSlug), score };
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

const REVIEW_FILL_ORDER: PosProductSlug[] = [
  "square-pos",
  "lightspeed-pos",
  "clover-pos",
  "shopify-pos",
  "vend-pos",
];

function buildRelatedReviews(featured: PosProductSlug[]): BestForReviewLink[] {
  const ordered: PosProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: POS_PRODUCT_CORE[s].name,
    href: getPosReviewUrl(s),
  }));
}

const EDITORIAL_FAQ_PICKS: BestForFaqItem = {
  q: "How does BeltStack pick POS systems for these trades?",
  a: "We weigh mobile and counter checkout reality, parts or materials inventory, multi-crew permissions, and total cost (software, hardware, processing)—not pay-for-placement. Pricing and features change; confirm quotes on each vendor’s site and pilot with real tickets before you standardize.",
};

const EDITORIAL_FAQ_AFFILIATE: BestForFaqItem = {
  q: "Do affiliate links change these recommendations?",
  a: "We may earn commissions on some outbound links site-wide; they do not buy rankings on BeltStack. Use reviews and comparisons as orientation, then validate fit with your own transactions and accounting workflow.",
};

const COMMON_GUIDES: BestForGuideLink[] = [
  { label: "How to choose a POS system", href: "/pos/guides/how-to-choose-pos-system" },
  { label: "POS software pricing guide", href: "/pos/guides/pos-software-pricing-guide" },
  { label: "POS and inventory integration", href: "/pos/guides/pos-inventory-integration" },
];

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

function buildPosTradeProps(p: PosTradeConfig): BestForTemplateProps {
  const label = p.useCase.replace(/-/g, " ");
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = POS_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getPosReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = POS_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getPosReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: POS_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const names = p.picks.map((pk) => POS_PRODUCT_CORE[pk.slug].name);
  const [n1, n2, n3] = names;
  const featuredNameSet = new Set(names);
  const others = REVIEW_FILL_ORDER.map((s) => POS_PRODUCT_CORE[s].name).filter((n) => !featuredNameSet.has(n));

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
    topPicksSub: `Editorial POS picks for ${label}. Model hardware, processing, and add-ons on each vendor’s site—our shortlist is a workflow map, not a substitute for your own invoice math.`,
    editorialSub: `What matters for ${label}: honest inventory of parts or SKUs, checkout speed on service calls, and reporting your office can reconcile.`,
    whyThesePicksSub: `Why ${n1}, ${n2}, and ${n3} lead this shortlist for ${label}. ${others.length > 0 ? `${others.join(", ")} appear in related reviews when a different price band or retail depth fits better.` : ""}`,
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: buildRelatedReviews(featuredSlugs),
    relatedComparisons: buildRelatedComparisons(featuredSlugs),
    relatedGuides,
    faqItems: [...p.faqItems, EDITORIAL_FAQ_PICKS, EDITORIAL_FAQ_AFFILIATE],
  };
}

const TRADE_CONFIGS: PosTradeConfig[] = [
  {
    useCase: "hvac",
    title: "Best POS Software for HVAC Businesses (2026)",
    subtitle:
      "Counter, truck, and seasonal parts demand POS that handles mobile checkout, basic inventory, and hardware that survives the shop floor.",
    introParagraph:
      "HVAC businesses often run a parts counter, dispatch invoices, and sell maintenance plans in the same week. The right POS keeps line-busting fast during heat waves, tracks filters and common SKUs without a full ERP, and lets techs or CSRs take payments on the go when policy allows. BeltStack assumes you will reconcile processing and per-terminal fees against your ticket mix—confirm pricing on each vendor’s site before you outfit every truck.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best fast mobile + counter start",
        description: "Free software and mobile readers for deposits and field-friendly checkout without a long implementation.",
        rowBestFor: "Trucks, pop-up counters, low-friction signup",
        why: "Square fits HVAC shops that need to start taking chip and contactless payments today—whether at a temporary counter during peak season or on a tablet workflow you control with permissions. Trial with your busiest SKUs and tax rules, then stress-test returns and deposits against how your office actually closes jobs. It is not a full parts-room WMS; pair discipline in Search Console–level inventory hygiene with realistic stock counts. Upgrade modules only when adoption proves someone opens them weekly.",
      },
      {
        slug: "clover-pos",
        badge: "Best app + hardware flexibility",
        description: "Terminals and apps for service add-ons, loyalty, or industry workflows when one register layout does not fit all.",
        rowBestFor: "Customizable registers and peripheral choice",
        why: "Clover helps when you want countertop stations with printers, customer displays, and an app market for loyalty or lightweight job hooks—without building everything custom. Pilot the exact terminal model your CSRs will touch during rushes; ergonomics matter when lines form on the first hot day. Expect monthly bundles—model 24-month TCO including processing. Validate app support quality during trial; third-party apps vary. Choose Clover when hardware flexibility beats Square’s flatter stack.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best parts-room retail depth",
        description: "Inventory, purchasing, and multi-bin discipline when the parts cage is as important as the front counter.",
        rowBestFor: "SKU-heavy counter + stock control",
        why: "Lightspeed earns its keep when HVAC parts SKUs, vendor catalogs, and low-stock discipline drive cash flow—not only payments. Trial receiving, adjustments, and transfers between truck stock and shop if you run both. Connect accounting expectations early; deeper retail POS reduces spreadsheet shadow systems. It costs more than Square because it replaces informal inventory. Choose Lightspeed when parts accuracy—not only swipe speed—is the bottleneck.",
      },
    ],
    editorialGuidance: [
      E("Seasonal rushes", "Heat waves and cold snaps spike counter traffic—pick hardware and training that keep lines moving when trainees are on shift."),
      E("Truck vs shop inventory", "Decide whether van stock is tracked in POS or only the warehouse; mixed models break reporting if you are not explicit."),
      E("Processing math", "Compare effective rates on your average ticket—including keyed or invoice flows—not headline marketing rates alone."),
    ],
    faqItems: [
      {
        q: "What POS is best for HVAC businesses?",
        a: "We shortlist Square for fast mobile and counter starts, Clover when app and hardware flexibility matter, and Lightspeed when parts inventory and purchasing depth justify higher monthly cost.",
      },
      {
        q: "Do HVAC companies need retail-grade inventory?",
        a: "If a parts counter moves meaningful margin, retail POS inventory beats generic item lists. If you only sell a few SKUs, start simpler and upgrade when stockouts cost jobs.",
      },
    ],
  },
  {
    useCase: "plumbing",
    title: "Best POS Software for Plumbing Companies (2026)",
    subtitle:
      "Emergency dispatch, supply-house pickups, and showroom SKUs need checkout speed and inventory that matches how plumbers actually work.",
    introParagraph:
      "Plumbing companies juggle after-hours calls, wholesale-style parts usage, and sometimes a small retail shelf. POS should make it easy to ring common SKUs, handle deposits, and keep the office aligned with what techs pull from stock—without forcing restaurant software onto a trade counter. Validate tax, service-area, and warranty SKUs in trial, not only happy-path card taps.",
    picks: [
      {
        slug: "clover-pos",
        badge: "Best counter hardware + apps",
        description: "Flexible terminals when your front desk doubles as dispatch intake and parts pickup.",
        rowBestFor: "Busy counter + optional service apps",
        why: "Clover fits plumbing shops with a real counter: customers pay deposits, pick up water heaters, or grab fittings while the phone rings. Use the trial to test receipt branding, open tickets, and any apps you rely on for quick lookups. Bundle pricing means you should model hardware swaps if you expand bays. Clover wins when you need peripheral choice more than the absolute lowest software friction.",
      },
      {
        slug: "square-pos",
        badge: "Best simple field-ready payments",
        description: "Low-commitment registers and mobile readers when you want payments live this week.",
        rowBestFor: "Fast setup, mobile + counter",
        why: "Square is the honest pick when plumbing owners need dependable card acceptance before they perfect inventory taxonomy. Run trial transactions for deposits, progress draws, and counter sales; reconcile against your accounting export habits. Add inventory fields only as you trust counts—phantom stock hurts dispatch credibility. Square stays lean until Lightspeed-class depth is clearly earning its renewal.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best SKU and vendor discipline",
        description: "Purchasing, receiving, and stock alerts when the parts room is a profit center.",
        rowBestFor: "Parts inventory + purchasing",
        why: "Lightspeed helps plumbing operations that stock SKUs across bins and vendors and need low-stock signals before the next slab-leak weekend. Trial vendor catalogs and purchase orders with whoever actually receives freight. Permissions should separate cost visibility from counter staff. If you only sell services with incidental parts, you may not need this depth—choose it when inventory mistakes show up as lost jobs.",
      },
    ],
    editorialGuidance: [
      E("Deposits and progress billing", "If you take deposits, ensure POS workflows match your contract language and refund policy—avoid ad hoc Venmo beside the register."),
      E("After-hours reality", "Decide who can issue refunds or voids; trade businesses bleed margin on friendly fraud when controls are loose."),
    ],
    faqItems: [
      {
        q: "What POS do plumbing companies use first?",
        a: "Many start with Square or Clover for counter + mobile payments, then add Lightspeed when parts-room SKUs and purchasing need retail-grade control.",
      },
      {
        q: "Clover or Square for plumbers?",
        a: "Square if lowest friction and free software matter most; Clover if you want broader hardware and app customization. See our Square vs Clover comparison.",
      },
    ],
  },
  {
    useCase: "electricians",
    title: "Best POS Software for Electricians (2026)",
    subtitle:
      "Panel upgrades, service calls, and small parts sales need POS that handles estimates-to-payment handoffs without slowing licensed techs.",
    introParagraph:
      "Electrical contractors often sell high-trust labor with a thin catalog of materials—wire, breakers, smart devices. POS should support clear invoices, deposits, and fast chip/contactless checkout while staying simple enough that the owner or office manager maintains it without a full IT hire. BeltStack favors stacks you can reconcile to job costing; confirm export formats with your accountant during trial.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best default for mixed service + parts",
        description: "Invoices, registers, and mobile readers when jobs range from truck rolls to counter pickups.",
        rowBestFor: "Flexible service workflows + low overhead",
        why: "Square fits many electrical shops that sell labor-forward jobs with occasional counter SKUs. Trial estimate-to-payment flows your CSRs actually use—including change orders reflected as line items or notes your accountant accepts. Free software lowers the cost of mistakes while you refine categories. Add Square modules only when someone owns them weekly; shelfware POS is as bad as shelfware SEO tools.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best when materials tracking matters",
        description: "Inventory depth when you stock breakers, fixtures, or smart-home SKUs across bins or vans.",
        rowBestFor: "Parts SKUs + purchasing visibility",
        why: "Lightspeed belongs when electrical contractors run a real materials business—not only time-and-materials billing in accounting. Pilot stock counts on high-shrink SKUs and validate vendor receiving workflows. If every job is purely labor with pass-through materials on invoices, you may overbuy here. Pick Lightspeed when the parts cage or van bins need truth tied to POS sales.",
      },
      {
        slug: "clover-pos",
        badge: "Best hardware + app extensibility",
        description: "When you want customer-facing displays, loyalty, or niche apps alongside the register.",
        rowBestFor: "Counter-heavy electrical supply counters",
        why: "Clover helps electrical supply counters or showrooms that want app-market extensibility and varied terminal layouts. Trial during a week with real EV charger accessory sales or smart-panel bundles—complex receipts expose weak configs. Compare total bundle cost against Square; Clover wins on flexibility, not always on lowest TCO.",
      },
    ],
    editorialGuidance: [
      E("License and permit language", "POS line items should match how you describe work on proposals—customers and inspectors notice mismatches."),
      E("Job costing handoff", "If POS feeds accounting, map GL codes or categories before you go live on a new system."),
    ],
    faqItems: [
      {
        q: "Best POS for electrical contractors?",
        a: "Square for many mixed service-and-parts shops, Lightspeed when inventory and purchasing are central, and Clover when hardware and app customization beat a minimal stack.",
      },
      {
        q: "Do electricians need retail POS?",
        a: "If you only invoice in accounting software and rarely swipe cards at a counter, POS may be lighter—but most still want integrated card present for deposits and retail SKUs.",
      },
    ],
  },
  {
    useCase: "painting",
    title: "Best POS Software for Painting Contractors (2026)",
    subtitle:
      "Deposits, change orders, and small retail (supplies) need POS that stays simple for seasonal crews and office staff.",
    introParagraph:
      "Painting businesses live on estimates, deposits, and final draws—sometimes with a shelf of supplies or touch-up products. POS should make it easy to collect cards on site or at the office, run promotions cleanly, and avoid double systems between QuickBooks-style invoicing and the register. Pick tools your summer help can learn in one shift.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best deposit and final-draw flows",
        description: "Mobile and counter payments when crews move between job sites and the office.",
        rowBestFor: "Flexible checkout + low training burden",
        why: "Square matches painting contractors who collect deposits before ladders go up and final balances on completion. Trial with real discount and tax scenarios for your state’s rules on materials vs labor where applicable. Keep item lists short and descriptive—confused CSRs create reconciliation pain. Square is the default until retail inventory complexity proves itself.",
      },
      {
        slug: "vend-pos",
        badge: "Best retail-style supply counter",
        description: "When you retail brushes, tape, or contractor packs from a small storefront or showroom.",
        rowBestFor: "Light retail inventory + clean receipts",
        why: "Vend (Lightspeed Retail) helps painting companies that actually move SKUs across a counter—not only project invoices. Trial stocktakes on SKUs you intend to carry consistently; sporadic pop-up SKUs belong in a simpler list. It sits in the Lightspeed ecosystem—validate roadmap and support region before you commit. Choose Vend when the supply counter is real revenue, not a closet shelf.",
      },
      {
        slug: "clover-pos",
        badge: "Best branded counter experience",
        description: "Customer displays and apps when the office wants a polished checkout for walk-ins.",
        rowBestFor: "Hardware + app flexibility",
        why: "Clover fits painting offices that want polished customer-facing displays, printed contracts beside payment, or app add-ons for lightweight CRM hooks. Model monthly bundles with the terminals you will actually deploy. If you never host walk-in retail, Clover may be more hardware than you need—Square stays leaner.",
      },
    ],
    editorialGuidance: [
      E("Seasonal staffing", "Choose POS screens clerks can learn in an hour—turnover is real in painting season."),
      E("Deposit policy clarity", "Align POS receipts with contract language on refunds and color-change fees."),
    ],
    faqItems: [
      {
        q: "What POS should painting contractors use?",
        a: "Square for most deposit-heavy workflows; Vend when a real supply counter needs retail inventory; Clover when hardware and customer-facing polish matter at the office.",
      },
      {
        q: "Do painters need inventory modules?",
        a: "Only if you stock and sell products repeatedly—otherwise keep catalogs minimal to reduce count drift.",
      },
    ],
  },
  {
    useCase: "roofing",
    title: "Best POS Software for Roofing Companies (2026)",
    subtitle:
      "Large tickets, insurance-adjacent deposits, and sometimes material resale need POS with strong controls and room to grow into inventory.",
    introParagraph:
      "Roofing companies often process high-dollar deposits and final payments tied to staged jobs—sometimes alongside shingle bundles or accessories sold at the yard. POS should support clear audit trails, manager permissions, and inventory if you run a small supply operation. Storm season is the wrong time to learn a new UI; pilot before peak.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best materials + multi-role control",
        description: "Inventory and user permissions when materials move through a yard or small retail counter.",
        rowBestFor: "SKU tracking + purchasing signals",
        why: "Lightspeed fits roofing operations with yard counters, shingle SKUs, or accessory resale where stockouts delay crews. Trial receiving and adjustments with the yard manager, not only marketing. Use roles so sales reps cannot casually discount beyond policy. If you never sell materials from stock, Square may suffice—Lightspeed is for inventory truth.",
      },
      {
        slug: "square-pos",
        badge: "Best large-ticket simplicity",
        description: "Straightforward card present for deposits and finals when inventory is light.",
        rowBestFor: "High-trust payments without retail complexity",
        why: "Square is the pragmatic pick when roofing payments are mostly deposits and completions without a heavy parts business. Test signature capture, emailed receipts, and multi-location reporting if you run storm pods in other cities. Keep permissions tight on refunds during chaotic weeks. Add retail modules only when counts justify them.",
      },
      {
        slug: "clover-pos",
        badge: "Best counter polish + peripherals",
        description: "When the office wants printed proposals beside payment or dual displays for homeowners.",
        rowBestFor: "Flexible hardware layouts",
        why: "Clover helps roofing offices that want specific printer layouts, customer displays, or app workflows alongside payments. Bundle pricing should be compared against Square’s effective rate on your average roof ticket. Trial void and refund paths—storm weeks expose training gaps.",
      },
    ],
    editorialGuidance: [
      E("Storm-season fraud awareness", "Train CSRs on card-present best practices when urgency peaks."),
      E("Insurance documentation", "Receipt descriptors should match proposals without promising coverage you cannot control."),
    ],
    faqItems: [
      {
        q: "What POS fits roofing companies?",
        a: "Lightspeed when materials inventory matters; Square for deposit-heavy simplicity; Clover when counter hardware and apps need customization.",
      },
      {
        q: "Should roofers track inventory in POS?",
        a: "If you stock and sell materials, yes—otherwise keep POS focused on payments and let accounting carry job costing.",
      },
    ],
  },
  {
    useCase: "general-contractors",
    title: "Best POS Software for General Contractors (2026)",
    subtitle:
      "Allowances, multi-project deposits, and occasional supply sales need POS that scales with ops—without restaurant-only features.",
    introParagraph:
      "General contractors often coordinate subs and owners while still swiping cards for deposits, allowances, or small yard sales. POS should support clear approvals, multiple users, and—when needed—retail inventory for project materials sold through the office. BeltStack assumes you will align POS receipts with lien-sensitive billing practices; involve finance before go-live.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best project-adjacent retail depth",
        description: "Inventory and purchasing when GC yards behave like small supply operations.",
        rowBestFor: "Materials SKUs + disciplined counts",
        why: "Lightspeed suits GCs running yard counters or standardized SKUs across jobs where stockouts delay schedules. Trial permissions so project managers cannot override cost visibility inappropriately. Integrate accounting expectations up front. Skip it if all purchasing flows through vendors billed to jobs without POS stock.",
      },
      {
        slug: "vend-pos",
        badge: "Best multi-site retail standardization",
        description: "When you standardize catalogs across offices or model homes with light retail.",
        rowBestFor: "Retail consistency across locations",
        why: "Vend helps GC brands standardize a small retail catalog—finish samples, safety gear, or branded merch—across locations with clearer inventory than spreadsheets. Confirm Lightspeed family fit and support. If retail is immaterial, this is optional depth.",
      },
      {
        slug: "square-pos",
        badge: "Best pragmatic payments layer",
        description: "Deposits and card present without forcing retail complexity on day one.",
        rowBestFor: "Flexible payments + fast rollout",
        why: "Square remains the default payment layer for many GCs who invoice large work in accounting but still need reliable card capture for deposits and allowances. Trial multi-user PINs and refund controls. Expand only when operational pain—not software curiosity—demands it.",
      },
    ],
    editorialGuidance: [
      E("Approval chains", "Large voids and refunds should require manager PINs—GC offices are high-trust environments that still need controls."),
      E("Separate retail from job deposits", "Use categories or locations so reporting stays legible to finance."),
    ],
    faqItems: [
      {
        q: "Do general contractors need POS?",
        a: "If you take card-present deposits or sell materials at a yard, yes—Lightspeed or Vend when inventory matters; Square when payments are the core need.",
      },
      {
        q: "Lightspeed or Vend for GC retail?",
        a: "Both sit in the Lightspeed retail family—compare packaging and support for your regions; see Lightspeed vs Vend.",
      },
    ],
  },
  {
    useCase: "landscaping",
    title: "Best POS Software for Landscaping Companies (2026)",
    subtitle:
      "Seasonal crews, maintenance contracts, and nursery-style SKUs need POS that survives outdoor-adjacent ops and busy spring counters.",
    introParagraph:
      "Landscaping businesses mix route billing, counter sales for mulch and plants, and spikes in foot traffic every spring. POS should be easy to train, work on hardware you can secure in trucks or trailers where appropriate, and support basic inventory for SKUs you actually count. Confirm tax rules for plants and hardgoods in your state during trial.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best seasonal ramp speed",
        description: "Fast setup when you hire seasonal counter help and open pop-up yards.",
        rowBestFor: "Quick training + mobile flexibility",
        why: "Square fits landscaping spikes—temporary registers, mobile payments for events, and simple catalogs new hires can learn fast. Trial tax categories for plants vs hardscapes if your state differentiates. Turn off features you will not use; clutter slows spring lines.",
      },
      {
        slug: "clover-pos",
        badge: "Best counter hardware options",
        description: "Rugged-feeling layouts when the office yard sees dust, gloves, and high foot traffic.",
        rowBestFor: "Flexible terminals + apps",
        why: "Clover helps landscaping yards that want specific printers, customer displays, or loyalty apps for repeat maintenance customers. Model bundle costs against Square; flexibility has a price. Validate app vendors before peak season.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best nursery-style inventory",
        description: "When you carry hundreds of SKUs—plants, soil, tools—and need low-stock discipline.",
        rowBestFor: "Retail inventory + purchasing",
        why: "Lightspeed is for landscaping retail that behaves like a garden center: variants, vendors, and counts that matter to margin. Trial with your true fast movers—not a demo catalog. If you only sell a dozen SKUs, stay lighter.",
      },
    ],
    editorialGuidance: [
      E("Variant reality", "Plants often need size/color variants—confirm POS can represent what you actually price."),
      E("Moisture and dust", "Choose hardware placement and cases suited to yard environments—not all tablets survive spring."),
    ],
    faqItems: [
      {
        q: "Best POS for landscaping companies?",
        a: "Square for fast seasonal ramps, Clover for flexible yard-counter hardware, Lightspeed when SKU counts and purchasing need retail depth.",
      },
      {
        q: "Do landscapers need barcode scanning?",
        a: "If SKU volume is high, scanners pay for themselves; for tiny catalogs, manual picks may be fine.",
      },
    ],
  },
  {
    useCase: "construction",
    title: "Best POS Software for Construction Companies (2026)",
    subtitle:
      "Yard sales, tool cribs, and project deposits need POS aligned with job costing—not a restaurant floor plan.",
    introParagraph:
      "Construction firms may run tool cribs, small supply windows, or model-home retail while finance tracks jobs elsewhere. POS should keep SKUs honest where stock is real, and stay out of the way when payments are mostly deposits captured at the office. Safety and compliance copy on receipts should match legal-approved language.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best supply-window inventory",
        description: "Receiving, counts, and purchasing when a yard window behaves like retail.",
        rowBestFor: "Materials SKUs + audit-friendly reporting",
        why: "Lightspeed fits construction yards that issue materials against projects and need inventory truth tied to sales or transfers. Trial role separation between yard clerks and finance viewers. If everything is non-stock issue to jobs, you may not need this—pick it when shrink and availability hurt schedules.",
      },
      {
        slug: "vend-pos",
        badge: "Best standardized multi-yard catalogs",
        description: "When several sites sell the same small set of SKUs or PPE.",
        rowBestFor: "Retail consistency",
        why: "Vend helps standardize catalogs and counts across construction satellite yards or training centers with light retail. Validate Lightspeed ecosystem support for your regions. Skip if retail is negligible.",
      },
      {
        slug: "clover-pos",
        badge: "Best flexible counter hardware",
        description: "Dual displays and printers when owners pay at site trailers or offices.",
        rowBestFor: "Hardware + app flexibility",
        why: "Clover suits construction offices that want specific peripherals for contracts-plus-payment workflows. Compare bundle pricing to Square for your average ticket size. Train refund paths before busy bid weeks.",
      },
    ],
    editorialGuidance: [
      E("Job vs retail separation", "Keep POS categories aligned with how finance allocates costs—avoid mystery SKUs."),
      E("Theft controls", "High-value small tools need manager approvals for discounts and voids."),
    ],
    faqItems: [
      {
        q: "What POS do construction companies use?",
        a: "Lightspeed and Vend when yard retail or tool cribs need inventory; Clover for flexible office hardware; many still add Square for simple deposit capture—match stack to where money actually changes hands.",
      },
      {
        q: "Is Toast or TouchBistro right for construction?",
        a: "Usually no—restaurant POS optimizes for tables and kitchens. Prefer retail- or general-purpose POS unless you run a true food service outlet.",
      },
    ],
  },
  {
    useCase: "remodeling",
    title: "Best POS Software for Remodeling Businesses (2026)",
    subtitle:
      "Showrooms, allowances, and design-center SKUs need POS that ties to how homeowners pay deposits and upgrades.",
    introParagraph:
      "Remodelers often run design centers or showrooms where clients select finishes and pay change orders. POS should support polished receipts, potentially ecommerce-linked catalogs if you sell upgrades online, and inventory for tiles or fixtures you stock. BeltStack favors stacks design staff can learn between client appointments.",
    picks: [
      {
        slug: "shopify-pos",
        badge: "Best unified showroom + online catalog",
        description: "When upgrades or merch live on Shopify and you need the register to match web inventory.",
        rowBestFor: "Omnichannel retail + in-person design center",
        why: "Shopify POS fits remodelers who already merchandise finishes or packages on Shopify and need one spine for web and showroom stock. Trial exchanges and returns across channels with SKUs your designers actually sell—not demo data. Requires Shopify commitment; if you are not on Shopify, Square or Lightspeed is simpler.",
      },
      {
        slug: "square-pos",
        badge: "Best fast deposits and upgrades",
        description: "Simple registers when most revenue is deposits and card-present completions at the office.",
        rowBestFor: "Low-friction payments + quick staff training",
        why: "Square matches remodelers whose POS needs are primarily card present for deposits and final payments while selections live in design software elsewhere. Trial line-item clarity for allowances clients will screenshot to lenders. Add inventory depth only when counts are trustworthy.",
      },
      {
        slug: "clover-pos",
        badge: "Best polished client checkout",
        description: "Customer displays and peripherals when the showroom experience matters as much as the contract.",
        rowBestFor: "Premium counter experience",
        why: "Clover helps remodel showrooms that want branded displays, printed agreements beside payment, and app add-ons. Compare monthly bundles against Square on your upgrade ticket averages.",
      },
    ],
    editorialGuidance: [
      E("Lender-friendly receipts", "Descriptions should align with contracts homeowners submit for draws."),
      E("Designer permissions", "Not every designer should issue refunds—role POS like you role CRM."),
    ],
    faqItems: [
      {
        q: "Best POS for remodeling showrooms?",
        a: "Shopify POS when ecommerce and showroom share one catalog; Square for payment-first simplicity; Clover for premium counter hardware and apps.",
      },
      {
        q: "Do remodelers need Shopify?",
        a: "Only if your upgrade catalog truly lives there—otherwise Square or Lightspeed may be less tangled.",
      },
    ],
  },
  {
    useCase: "handyman",
    title: "Best POS Software for Handyman Businesses (2026)",
    subtitle:
      "Small tickets, varied SKUs, and solo owners need POS that is cheap to run and easy to fix when something breaks.",
    introParagraph:
      "Handyman businesses often run from a phone, truck, and kitchen table. POS should take payments in seconds, support simple item lists for common tasks, and avoid monthly bloat you will not use. BeltStack favors tools you can support yourself after hours.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best solo-operator default",
        description: "Free software and readers that fit glove-friendly mobile workflows.",
        rowBestFor: "Mobile + occasional counter",
        why: "Square is the honest default for handyman owners who need card present anywhere without IT overhead. Trial QuickBooks or other export habits early. Keep SKUs coarse—twenty clear buttons beat two hundred stale ones.",
      },
      {
        slug: "clover-pos",
        badge: "Best when you add a helper counter",
        description: "Hardware options when you open a micro retail corner or shared office desk.",
        rowBestFor: "Flexible terminals",
        why: "Clover helps when you graduate from phone-only swipes to a dedicated counter with printers and displays. Model monthly cost against Square; Clover wins on hardware choice, not always lowest TCO.",
      },
      {
        slug: "shopify-pos",
        badge: "Best if you sell small jobs online",
        description: "Unified stock when you book or sell handyman packages through Shopify.",
        rowBestFor: "Online + in-person in one catalog",
        why: "Shopify POS only fits handyman brands that already run Shopify for lead-gen products or packaged services online. If you are not on Shopify, skip this pick—Square stays simpler.",
      },
    ],
    editorialGuidance: [
      E("Keep SKUs honest", "Do not micro-itemize every screw—reporting becomes noise."),
      E("Keyed-entry risk", "Minimize keyed transactions; they cost more and invite disputes."),
    ],
    faqItems: [
      {
        q: "What POS should a handyman use?",
        a: "Square for most solos and small teams; Clover when you want richer counter hardware; Shopify POS only if Shopify already powers your online offers.",
      },
      {
        q: "Free POS for handyman businesses?",
        a: "Square’s free software tier is the common starting point—budget for processing and hardware, not surprise monthly fees.",
      },
    ],
  },
  {
    useCase: "property-management",
    title: "Best POS Software for Property Management Companies (2026)",
    subtitle:
      "Application fees, retail-style fees at desks, and sometimes small storefronts need POS with reporting your portfolio teams can audit.",
    introParagraph:
      "Property managers may take card payments for applications, lockouts, or ancillary services—and occasionally run small retail (keys, supplies). POS should support multiple users, clear receipts, and exports finance can reconcile across entities. Confirm whether each LLC needs separate merchant identities before you standardize one stack.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best when desks behave like retail",
        description: "Inventory and multi-user controls when you stock SKUs or run multiple desks.",
        rowBestFor: "Structured retail + permissions",
        why: "Lightspeed fits PM companies with repeatable SKUs—supplies, fees packaged as products, or small shops—where inventory and roles matter. Trial consolidated reporting vs per-entity needs; accounting may require separate accounts. Skip if you only take occasional application cards online.",
      },
      {
        slug: "vend-pos",
        badge: "Best standardized multi-office catalogs",
        description: "Align SKUs across branches when each office sells the same ancillary items.",
        rowBestFor: "Multi-site retail consistency",
        why: "Vend helps standardize catalogs and stock across PM offices that sell the same ancillary items. Confirm Lightspeed roadmap fit. If payments are mostly portal-based, POS may be secondary.",
      },
      {
        slug: "square-pos",
        badge: "Best lightweight card present",
        description: "Simple terminals when payments are episodic and training must be minimal.",
        rowBestFor: "Fast setup + transparent processing",
        why: "Square suits PM desks that only need dependable card present for fees and services without retail depth. Trial user roles and receipt descriptors compliance approves.",
      },
    ],
    editorialGuidance: [
      E("Entity separation", "Align merchant accounts with legal entities if required—do not commingle by accident."),
      E("Receipt wording", "Fees must match lease and application disclosures."),
    ],
    faqItems: [
      {
        q: "Do property managers need POS?",
        a: "If you take in-person card payments for fees or retail SKUs, yes—Lightspeed or Vend when inventory matters; Square when simplicity wins.",
      },
      {
        q: "Multi-location property management POS?",
        a: "Lightspeed and Vend target retail-grade multi-site control; Square adds locations with lighter depth—match to your reporting needs.",
      },
    ],
  },
  {
    useCase: "pest-control",
    title: "Best POS Software for Pest Control Businesses (2026)",
    subtitle:
      "Route renewals, service add-ons, and counter sales of supplies need POS that is fast for CSRs and honest on recurring charges.",
    introParagraph:
      "Pest control operators juggle route renewals, one-time treatments, and sometimes counter products. POS should make phone-and-counter payments quick, support basic inventory if you sell supplies, and keep manager controls tight on refunds. Confirm PCI habits for stored cards if your software stack handles vaulting elsewhere.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best fast office payments",
        description: "Simple registers for CSRs booking routes and taking cards at the desk.",
        rowBestFor: "Speed + low training cost",
        why: "Square fits pest control offices that need reliable card present without retail complexity. Trial during a busy swarm week—CSRs should not fight the UI. Use roles to lock down refunds.",
      },
      {
        slug: "clover-pos",
        badge: "Best CSR hardware + apps",
        description: "When you want customer displays, printed agreements, or apps for upsells at the counter.",
        rowBestFor: "Flexible front-desk setup",
        why: "Clover helps pest brands with branded counters and peripheral needs beyond a bare reader. Compare bundle costs vs Square; flexibility trades off with monthly minimums.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best supply retail discipline",
        description: "When you retail traps, repellents, or accessories from a lobby shelf with real counts.",
        rowBestFor: "Light retail inventory",
        why: "Lightspeed matters if lobby retail is meaningful revenue—not a few dusty boxes. Trial low-stock alerts on SKUs you reorder. Otherwise Square stays leaner.",
      },
    ],
    editorialGuidance: [
      E("Refund policy", "Route disputes spike in summer—train CSRs on evidence requirements."),
      E("Tax for products vs services", "Get tax categories right for your state’s treatment of treatments vs goods."),
    ],
    faqItems: [
      {
        q: "Best POS for pest control companies?",
        a: "Square for many offices, Clover for richer desk hardware and apps, Lightspeed if lobby retail inventory needs discipline.",
      },
      {
        q: "Should pest control use restaurant POS?",
        a: "No—choose general retail/service POS unless you operate unrelated food service.",
      },
    ],
  },
  {
    useCase: "pool-service",
    title: "Best POS Software for Pool Service Companies (2026)",
    subtitle:
      "Route billing, chemical sales, and retail accessories need POS that survives busy opening season and clear training.",
    introParagraph:
      "Pool service businesses collect recurring route payments, sell chemicals and parts, and spike every spring. POS should keep counter lines short, support SKUs you actually stock, and work on hardware you trust near water-adjacent counters. BeltStack assumes you will validate chemical product tax rules locally.",
    picks: [
      {
        slug: "clover-pos",
        badge: "Best spring-rush counter setup",
        description: "Hardware options when homeowners line up for openings, tests, and impulse buys.",
        rowBestFor: "Busy seasonal counter",
        why: "Clover fits pool shops that need printers, displays, and app add-ons during spring crush. Trial receipt speed with real SKUs, not five demo items. Bundle pricing should be modeled across the full season.",
      },
      {
        slug: "square-pos",
        badge: "Best simple routes + counter",
        description: "Mobile readers for field payments and registers for the shop when you want minimal overhead.",
        rowBestFor: "Flexible payments + easy training",
        why: "Square matches pool routes that take payment on site plus a shop that needs simple checkout. Keep catalogs tight; pool retail has enough variants without POS bloat.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best chemical and parts inventory",
        description: "When you stock test kits, chemicals, and parts with real reorder points.",
        rowBestFor: "Retail inventory + purchasing",
        why: "Lightspeed helps pool retail with meaningful SKU counts and vendor reordering. Trial with chemicals you actually keep on hand—regulatory storage rules still live outside POS.",
      },
    ],
    editorialGuidance: [
      E("Hazmat reality", "POS tracks SKUs; it does not replace MSDS and storage compliance."),
      E("Seasonal hiring", "Choose flows a new counter hire can run day one."),
    ],
    faqItems: [
      {
        q: "What POS should pool service companies use?",
        a: "Clover for hardware-flexible busy counters, Square for simpler route + shop payments, Lightspeed when chemical and parts inventory needs retail discipline.",
      },
      {
        q: "Pool service and ecommerce?",
        a: "If you sell online, Shopify POS may enter the mix—see our ecommerce POS page—but many pool shops start with Square or Clover.",
      },
    ],
  },
  {
    useCase: "junk-removal",
    title: "Best POS Software for Junk Removal Businesses (2026)",
    subtitle:
      "On-site quotes, deposits, and office payments need POS that is fast on phones and still works at the yard.",
    introParagraph:
      "Junk removal brands often quote on site, collect deposits, and finalize at the truck or office. POS should prioritize mobile reliability, clear receipts homeowners can forward, and simple reporting for franchise-style ops. BeltStack favors stacks that work when gloves are on and time is short.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best truck-and-office payments",
        description: "Mobile-first readers and registers that deploy the same day you win the job.",
        rowBestFor: "Field + counter simplicity",
        why: "Square fits junk removal when CSRs and crews need card present fast with minimal training. Trial deposit receipts that match your cancellation policy. Use locations if franchises need separated reporting.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best when yards sell retail or SKUs",
        description: "Inventory for supplies, bags, or franchise-packaged SKUs you actually count.",
        rowBestFor: "Retail inventory at the yard",
        why: "Lightspeed helps if the yard sells SKUs or you track standardized supplies—not only services. Trial counts with the ops manager. If everything is service invoiced, stay on Square.",
      },
      {
        slug: "clover-pos",
        badge: "Best branded office checkout",
        description: "Customer-facing displays and printers when homeowners pay at the office after booking.",
        rowBestFor: "Counter hardware flexibility",
        why: "Clover suits offices that want polished counters with dual displays while trucks still run Square—or consolidate if you prefer one vendor. Compare TCO across fleet size.",
      },
    ],
    editorialGuidance: [
      E("Chargeback readiness", "Document job completion; high-ticket services attract disputes."),
      E("Franchise reporting", "Separate merchant accounts if contracts require it."),
    ],
    faqItems: [
      {
        q: "Best POS for junk removal?",
        a: "Square for mobile-first payments; Lightspeed if yard retail or SKU discipline matters; Clover for flexible office hardware.",
      },
      {
        q: "Should junk removal use invoicing instead of POS?",
        a: "Many still want POS for card present at the job—pick tools that export cleanly to accounting.",
      },
    ],
  },
  {
    useCase: "moving",
    title: "Best POS Software for Moving Companies (2026)",
    subtitle:
      "Deposits, binding estimates, and sometimes storage retail need POS with clear receipts and multi-location options as you scale.",
    introParagraph:
      "Moving companies collect deposits, balance payments, and sometimes sell supplies or storage access at desks. POS should produce lender- and customer-friendly receipts, support multiple branches if you franchise, and stay simple for seasonal CSRs. Involve compliance on interstate marketing claims separately—POS only records what you configure.",
    picks: [
      {
        slug: "shopify-pos",
        badge: "Best if storage retail is online too",
        description: "Unified inventory when boxes, locks, or merch sell on Shopify and at the desk.",
        rowBestFor: "Omnichannel light retail",
        why: "Shopify POS fits movers who merchandise packing supplies online and in-branch with one catalog spine. If you do not use Shopify, skip—Square plus accounting is simpler.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best multi-branch retail control",
        description: "When several offices stock the same SKUs or sell standardized add-ons.",
        rowBestFor: "Multi-location inventory + reporting",
        why: "Lightspeed helps moving brands with real retail SKUs across branches—boxes, locks, mattress bags—with counts that matter. Trial transfers if trucks restock from offices.",
      },
      {
        slug: "square-pos",
        badge: "Best deposit-heavy simplicity",
        description: "Straightforward card present for bookings and finals without retail complexity.",
        rowBestFor: "Payments-first movers",
        why: "Square remains the default for movers whose primary need is reliable deposits and completions with minimal POS surface area. Trial multi-location reporting if you operate several booking desks.",
      },
    ],
    editorialGuidance: [
      E("Receipt clarity", "Customers forward receipts to lenders—descriptions should match estimates."),
      E("Refund windows", "Align POS policies with your tariff and dispute process."),
    ],
    faqItems: [
      {
        q: "What POS fits moving companies?",
        a: "Shopify POS when Shopify powers online supply sales; Lightspeed for multi-branch SKU control; Square for payment-first operations.",
      },
      {
        q: "Do movers need inventory POS?",
        a: "Only if you stock and sell products beyond labor—otherwise prioritize clean payment capture and exports.",
      },
    ],
  },
  {
    useCase: "appliance-repair",
    title: "Best POS Software for Appliance Repair Businesses (2026)",
    subtitle:
      "House calls, shop counters, and parts sales need POS that handles mobile checkout, deposits, and optional inventory without slowing technicians.",
    introParagraph:
      "Appliance repair shops juggle dispatch deposits, warranty co-pays, and sometimes a parts counter for filters, belts, and hoses. The right POS keeps card-present capture fast on the truck or at the bench, produces receipts homeowners can forward to manufacturers, and scales only if you truly sell SKUs from stock. BeltStack prioritizes tools you can pilot on real tickets—confirm processing and hardware bundles on each vendor’s site before you standardize every van.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best mobile-first service payments",
        description: "Readers and transparent software for field deposits, completions, and simple counter swipes.",
        rowBestFor: "Trucks and small parts counters",
        why: "Square fits appliance repair when most revenue is labor and deposits captured on-site with minimal training. Trial tax rules for your service area, keyed-entry policies for phone orders, and how receipts read for warranty paperwork. It is not a deep parts WMS—pair realistic stock counts if you only carry fast movers. Choose Square when speed and adoption beat retail complexity.",
      },
      {
        slug: "clover-pos",
        badge: "Best counter + app flexibility",
        description: "Hardware options and an app market when the front desk runs warranties, add-ons, or branded checkout.",
        rowBestFor: "Showroom-style counters",
        why: "Clover helps shops that want dual displays, printers, and optional apps for lightweight workflows beyond bare payments. Pilot the exact terminal your CSRs will use during rushes; ergonomics matter when homeowners pick up parts. Model 24-month TCO including processing and peripherals. Choose Clover when you need register flexibility more than Square’s flatter stack.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best when parts inventory matters",
        description: "Retail depth for SKUs, vendors, and counts when the parts room is a profit center—not an afterthought.",
        rowBestFor: "SKU-heavy parts cage",
        why: "Lightspeed earns its place when you stock enough SKUs that shrink and reorder discipline affect cash flow. Trial receiving, adjustments, and how transfers work if vans carry stock. Connect accounting expectations early—deeper POS replaces informal spreadsheets. Choose Lightspeed when inventory accuracy—not only swipe speed—is the bottleneck.",
      },
    ],
    editorialGuidance: [
      E("Warranty receipts", "Descriptions should match manufacturer expectations for reimbursement disputes."),
      E("Keyed vs present", "Train teams on card-present policy; appliance tickets are high enough to attract scrutiny."),
    ],
    faqItems: [
      {
        q: "What POS is best for appliance repair?",
        a: "Square for mobile-first payments and simple counters; Clover when flexible register hardware and apps matter; Lightspeed when parts SKUs and purchasing depth justify higher monthly cost.",
      },
      {
        q: "Do appliance repair shops need inventory POS?",
        a: "Only if you truly stock and turn parts—otherwise start with payments-first tools and upgrade when stockouts cost jobs.",
      },
    ],
  },
  {
    useCase: "garage-door",
    title: "Best POS Software for Garage Door Companies (2026)",
    subtitle:
      "Showrooms, openers, and install deposits need POS that supports retail SKUs, multi-line tickets, and reliable field capture.",
    introParagraph:
      "Garage door dealers often sell doors, openers, and accessories from a showroom while crews collect deposits and balances in the field. POS should handle higher average tickets cleanly, support optional inventory for springs and remotes, and stay simple enough for seasonal front-desk staff. Confirm how each vendor prices hardware bundles and processing on your mix of keyed vs present transactions before you commit fleet-wide.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best showroom + SKU control",
        description: "Inventory, purchasing, and reporting when you stock doors, openers, or parts across bins or locations.",
        rowBestFor: "Retail-heavy dealers",
        why: "Lightspeed fits dealers who run a real parts and accessory business—not only project invoices. Trial transfers between warehouse and showroom, low-stock alerts, and how kits or assemblies behave for common packages. Expect more admin than Square; the payoff is fewer spreadsheet shadows. Choose Lightspeed when SKU discipline drives margin.",
      },
      {
        slug: "square-pos",
        badge: "Best deposits and field simplicity",
        description: "Straightforward mobile readers for sales visits, deposits, and balance collection without retail overhead.",
        rowBestFor: "Install-first, lighter retail",
        why: "Square remains the default when your primary need is reliable card capture on-site and at a small counter. Stress-test receipts against your estimate language and refund windows for custom orders. If showroom retail grows later, you can add modules or revisit Lightspeed—don’t buy retail depth you will not operate weekly.",
      },
      {
        slug: "vend-pos",
        badge: "Best multi-store retail alignment",
        description: "Retail-first controls when you standardize catalogs across branches with consistent pricing and counts.",
        rowBestFor: "Multi-location showrooms",
        why: "Vend (Lightspeed Retail lineage) suits multi-branch garage door groups that need consistent item masters and store-level reporting. Validate how service deposits flow if you also run project accounting elsewhere. Choose Vend when retail operations—not only payments—justify the stack.",
      },
    ],
    editorialGuidance: [
      E("Deposit clarity", "Custom doors generate disputes—receipt text should mirror contract milestones."),
      E("Showroom staffing", "Pick hardware CSRs can operate during Saturday rushes without IT on call."),
    ],
    faqItems: [
      {
        q: "Which POS fits garage door companies?",
        a: "Lightspeed when showroom inventory and purchasing matter; Square for payment-first operations; Vend when you need consistent retail control across multiple showrooms.",
      },
      {
        q: "Should garage door dealers use retail or service POS?",
        a: "If you stock and turn SKUs, retail-capable POS wins. If you invoice projects elsewhere, keep POS focused on clean payments and exports.",
      },
    ],
  },
  {
    useCase: "locksmith",
    title: "Best POS Software for Locksmith Businesses (2026)",
    subtitle:
      "Mobile jobs, key retail, and storefront counters need POS that is fast on the road and accurate for blanks and accessories.",
    introParagraph:
      "Locksmiths often combine emergency mobile work with a shop that sells keys, locks, and small goods. POS should keep mobile checkout frictionless, support barcode-friendly retail where you stock inventory, and produce receipts customers and insurers expect. BeltStack assumes you will reconcile processing against a mix of small tickets and after-hours premiums—validate rates for your real volume on each vendor’s site.",
    picks: [
      {
        slug: "vend-pos",
        badge: "Best retail key and accessory control",
        description: "Inventory-oriented checkout when blanks, fobs, and hardware SKUs turn often enough to count.",
        rowBestFor: "Shop retail depth",
        why: "Vend helps storefronts that treat key blanks and accessories as retail—not only invoice lines. Trial counts, adjustments, and how fast cashiers can find SKUs during lunch rushes. If you barely stock retail, this is overkill—stay on Square. Choose Vend when shelf accuracy pays for itself.",
      },
      {
        slug: "square-pos",
        badge: "Best mobile emergency payments",
        description: "Portable readers for roadside and after-hours jobs with minimal setup and predictable hardware paths.",
        rowBestFor: "Van-first locksmiths",
        why: "Square wins when most revenue is service tickets captured on-site with rotating techs. Configure permissions, tipping if applicable, and receipt details for commercial accounts. It will not run a deep parts room alone—pair disciplined lists if you carry stock. Choose Square for adoption and speed in the field.",
      },
      {
        slug: "clover-pos",
        badge: "Best counter + peripheral choice",
        description: "Terminals, printers, and apps when the shop wants a full register experience with customer-facing displays.",
        rowBestFor: "High-traffic storefront",
        why: "Clover fits busy counters where dual screens and receipt printers matter for trust and speed. Pilot app quality for any niche workflows; third-party apps vary. Compare total monthly cost against Square if your needs are mostly standard payments. Choose Clover when hardware ergonomics beat minimalist readers.",
      },
    ],
    editorialGuidance: [
      E("After-hours pricing", "Ensure receipts reflect quoted premiums to reduce chargebacks."),
      E("SKU hygiene", "If you sell blanks retail, decide whether van stock lives in POS or only the shop."),
    ],
    faqItems: [
      {
        q: "What POS do locksmiths use most?",
        a: "Vend when retail SKUs need counts; Square for mobile-first service; Clover for flexible countertop hardware at busy shops.",
      },
      {
        q: "Do locksmiths need inventory POS?",
        a: "If you turn meaningful retail SKUs, yes. If you mostly invoice labor and special orders, prioritize payment capture and accounting exports.",
      },
    ],
  },
  {
    useCase: "flooring",
    title: "Best POS Software for Flooring Contractors (2026)",
    subtitle:
      "Showrooms, samples, and large material orders need POS that ties in-person sales to catalogs—especially when you also sell online.",
    introParagraph:
      "Flooring contractors often run design-forward showrooms, sell materials and labor on deposits, and sometimes mirror inventory on the web. POS should unify catalog truth where possible, support high-ticket receipts, and avoid duplicate item masters that confuse crews. BeltStack favors tools you can trial on sample sales and stock orders—confirm Shopify plan requirements and Lightspeed modules before you replatform mid-season.",
    picks: [
      {
        slug: "shopify-pos",
        badge: "Best unified showroom + online catalog",
        description: "One product spine when samples, underlayment, or merch sell on Shopify and at the design desk.",
        rowBestFor: "Omnichannel flooring retail",
        why: "Shopify POS fits when your website already carries SKUs or appointments and you want the showroom on the same catalog. If you do not use Shopify online, skip—Lightspeed or Square plus accounting may be simpler. Trial how deposits, refunds, and special orders read on receipts for long lead times. Choose Shopify POS when omnichannel is real—not aspirational.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best retail inventory depth",
        description: "Purchasing, counts, and multi-location retail when stockrooms and showrooms carry overlapping material SKUs.",
        rowBestFor: "Inventory-heavy dealers",
        why: "Lightspeed helps flooring operations that manage meaningful on-hand material—not only drop-ship projects. Test vendor catalogs, transfers, and low-stock workflows with your purchaser. Expect more training than Square. Choose Lightspeed when stock accuracy and purchasing—not only payments—justify the stack.",
      },
      {
        slug: "square-pos",
        badge: "Best simple deposits and counter checkout",
        description: "Straightforward POS for contractors who invoice projects elsewhere but need clean card capture at the desk.",
        rowBestFor: "Payments-first showrooms",
        why: "Square suits teams whose primary POS need is reliable deposits and balance payments while project detail lives in estimating software. Keep receipts aligned with contract milestones to reduce disputes on large tickets. Choose Square when you will not operate retail-grade inventory weekly.",
      },
    ],
    editorialGuidance: [
      E("Lead times", "Receipt language should match deposit vs balance rules on custom orders."),
      E("Sample vs job stock", "Decide whether samples are non-inventory, tracked, or written off consistently."),
    ],
    faqItems: [
      {
        q: "What is the best POS for flooring showrooms?",
        a: "Shopify POS when Shopify powers online + in-store catalog unity; Lightspeed for retail inventory and purchasing depth; Square for payment-first counters with project detail elsewhere.",
      },
      {
        q: "Should flooring contractors use retail POS?",
        a: "Yes when you stock and sell materials from inventory; otherwise prioritize estimates and use POS for deposits and card-present policy you can reconcile.",
      },
    ],
  },
  {
    useCase: "fence-deck",
    title: "Best POS Software for Fence & Deck Builders (2026)",
    subtitle:
      "Material-heavy jobs and seasonal rushes need POS that handles deposits, optional lumber or hardware SKUs, and clear receipts.",
    introParagraph:
      "Fence and deck builders often run deposits for long-lead materials, sell add-ons at the office, and sometimes stock fasteners, stains, or gate hardware. POS should stay simple for crews in the field while supporting retail discipline if you truly move SKUs through a yard or mini warehouse. Model processing on your average improvement ticket—including keyed approvals for phone sales—before you pick hardware for every truck.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best yard and materials retail",
        description: "Inventory and purchasing when you stock lumber, hardware packs, or accessories with real counts.",
        rowBestFor: "SKU-driven yards",
        why: "Lightspeed fits builders who combine project work with retail-like material movement. Trial how assemblies or kits behave for common packages and whether transfers match how trucks reload from yard stock. Choose Lightspeed when inventory—not only invoicing—is where margin leaks.",
      },
      {
        slug: "square-pos",
        badge: "Best field and office simplicity",
        description: "Mobile readers and transparent software for deposits, progress draws, and occasional counter sales.",
        rowBestFor: "Payments-first builders",
        why: "Square is the pragmatic default when POS mainly captures card-present payments while estimating and job costing live elsewhere. Train crews on receipt notes that mirror contract language. Choose Square when adoption and hardware cost matter more than retail depth.",
      },
      {
        slug: "clover-pos",
        badge: "Best flexible office checkout",
        description: "Counter hardware options when homeowners pay at the office and you want printers or customer displays.",
        rowBestFor: "Branch-style payment desks",
        why: "Clover helps offices that want polished counters with peripherals and optional apps for lightweight add-ons. Compare monthly bundles against Square for your ticket mix. Choose Clover when the front desk—not only the field—needs a full register experience.",
      },
    ],
    editorialGuidance: [
      E("Draw schedules", "Align POS receipts with how contracts describe deposits and progress payments."),
      E("Seasonal volume", "Stress-test hardware during spring peaks when temporary staff help the desk."),
    ],
    faqItems: [
      {
        q: "What POS should fence and deck companies use?",
        a: "Lightspeed when you stock and count materials; Square for straightforward deposits and completions; Clover for flexible office counter hardware.",
      },
      {
        q: "Do deck builders need inventory POS?",
        a: "Only if you run a yard or stock that turns like retail. Otherwise keep POS focused on payments and let estimating software own job detail.",
      },
    ],
  },
  {
    useCase: "glass-window-installers",
    title: "Best POS Software for Glass & Window Installers (2026)",
    subtitle:
      "Custom orders, showrooms, and high-ticket installs need POS with clear receipts, optional retail depth, and dependable counter hardware.",
    introParagraph:
      "Glass and window shops sell measured orders with long lead times, often from showrooms that also move screens, hardware, and small accessories. POS should produce lender- and customer-friendly documentation, support deposits that match contract milestones, and add inventory only if you truly stock SKUs. Confirm how each platform handles partial refunds and order changes when manufacturers revise lead times.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best accessory and hardware retail",
        description: "Inventory discipline for SKUs you keep on hand—clips, sealants, or standard sizes alongside custom orders.",
        rowBestFor: "Showroom + stockroom",
        why: "Lightspeed helps when accessory sales and vendor catalogs are part of weekly operations—not occasional one-offs. Trial special orders vs stocked items and how receiving matches vendor invoices. Choose Lightspeed when retail processes—not only project deposits—justify monthly cost.",
      },
      {
        slug: "clover-pos",
        badge: "Best polished showroom checkout",
        description: "Flexible terminals and displays when homeowners pay at the counter after measurements or approvals.",
        rowBestFor: "Customer-facing registers",
        why: "Clover suits showrooms that want dual displays and printers for professional handoffs on high-ticket jobs. Pilot ergonomics for CSRs quoting deposits alongside custom order paperwork. Choose Clover when counter experience—not minimalist readers—is the priority.",
      },
      {
        slug: "square-pos",
        badge: "Best lightweight payments core",
        description: "Simple card capture for deposits and balances when retail complexity stays minimal.",
        rowBestFor: "Deposit-first installers",
        why: "Square fits teams whose POS scope is reliable payments while order detail lives in glass software or spreadsheets. Keep receipt descriptions tight to contract language. Choose Square when you will not run retail-grade inventory week to week.",
      },
    ],
    editorialGuidance: [
      E("Custom order deposits", "Receipts should reference order IDs your office can trace when glass schedules slip."),
      E("Warranty paperwork", "Ensure customer names and addresses print consistently for manufacturer registrations."),
    ],
    faqItems: [
      {
        q: "What POS works for glass and window companies?",
        a: "Lightspeed for stocked accessory retail; Clover for flexible showroom hardware; Square for straightforward deposits and balances with order detail elsewhere.",
      },
      {
        q: "Do window installers need Shopify or Lightspeed?",
        a: "Choose Shopify POS only if Shopify already runs your online catalog. Otherwise Lightspeed suits retail inventory; Square suits payments-first workflows.",
      },
    ],
  },
  {
    useCase: "concrete-contractors",
    title: "Best POS Software for Concrete Contractors (2026)",
    subtitle:
      "Large deposits, occasional material retail, and seasonal crews need POS that captures payments reliably without pretending to be a full batch plant system.",
    introParagraph:
      "Concrete contractors collect substantial deposits for pours, flatwork, and repairs—sometimes selling sealers or cure products from a yard. POS should prioritize clear receipts, keyed-entry policies for office approvals, and optional retail only where you truly count bags and additives. BeltStack recommends piloting on real job deposits before you outfit every estimator with hardware; processing math matters more than feature lists on six-figure tickets.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best job-site and office deposits",
        description: "Readers and software that stay simple for rotating crews and seasonal office staff.",
        rowBestFor: "High-ticket deposits",
        why: "Square fits concrete when POS mainly captures deposits and finals while job costing lives in estimating tools. Configure roles so not everyone can key large transactions without oversight. Choose Square when adoption and hardware simplicity beat retail modules you will not maintain.",
      },
      {
        slug: "vend-pos",
        badge: "Best small retail at the yard",
        description: "Retail controls when you stock sealers, tools, or additives with barcode-friendly turnover.",
        rowBestFor: "Yard counter SKUs",
        why: "Vend helps if you run a real counter that moves product SKUs—not only invoice lines. Trial counts and shrink workflows; concrete dust and outdoor storage punish sloppy habits. Choose Vend when retail margin—not only labor—incentivizes discipline.",
      },
      {
        slug: "clover-pos",
        badge: "Best flexible counter hardware",
        description: "Printers and displays when homeowners pay inside and you want a full register footprint.",
        rowBestFor: "Office payment desks",
        why: "Clover suits yards with indoor payment desks that need peripherals and optional apps. Compare TCO with Square if workflows are mostly standard payments. Choose Clover when hardware flexibility at the counter matters.",
      },
    ],
    editorialGuidance: [
      E("Keyed transaction policy", "Large tickets attract scrutiny—document authorization paths."),
      E("Weather delays", "Align refund and void rules with how contracts treat postponements."),
    ],
    faqItems: [
      {
        q: "What POS should concrete contractors use?",
        a: "Square for deposit-heavy simplicity; Vend when you retail products from a yard; Clover for flexible office counter hardware.",
      },
      {
        q: "Do concrete companies need inventory POS?",
        a: "Only if you stock and sell materials like retail. Most pours are project-invoiced—keep POS aligned with payment capture and accounting exports.",
      },
    ],
  },
  {
    useCase: "excavation",
    title: "Best POS Software for Excavation Companies (2026)",
    subtitle:
      "Heavy deposits, equipment-adjacent sales, and office billing need POS that stays simple for field supervisors while supporting professional receipts.",
    introParagraph:
      "Excavation companies often invoice large earthwork contracts while still taking card payments for mobilization fees, smaller jobs, or occasional retail at the yard. POS should not replace heavy equipment accounting—but it should capture payments cleanly, support authorized keyed entries, and produce documentation owners and municipalities expect. Trial each stack with your office manager on real ticket sizes before you standardize readers across crews.",
    picks: [
      {
        slug: "clover-pos",
        badge: "Best office counter presence",
        description: "Full-featured registers when customers pay at the office and you want printers and displays for professional handoffs.",
        rowBestFor: "Branch payment desks",
        why: "Clover fits excavation offices that want a traditional counter experience for deposits and balance payments on smaller scopes or retail add-ons. Validate app needs; most excavation workflows still live in project software. Choose Clover when the front desk—not field tablets—owns card-present volume.",
      },
      {
        slug: "square-pos",
        badge: "Best simple field and yard capture",
        description: "Portable readers for supervisors and yard staff without long implementations.",
        rowBestFor: "Mobile payments",
        why: "Square wins when you need dependable capture on-site or at the yard with minimal training across rotating staff. Configure permissions for large tickets and document who can key transactions. Choose Square when simplicity and cost matter more than retail inventory.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best if you retail parts or attachments",
        description: "Inventory depth when you stock wear parts, fluids, or attachment SKUs with real turnover.",
        rowBestFor: "Yard retail operations",
        why: "Lightspeed helps if excavation bleeds into retail-like SKU movement—not only service invoices. Trial vendor catalogs only if buyers will maintain them. Choose Lightspeed when stockouts cost uptime and margin.",
      },
    ],
    editorialGuidance: [
      E("Municipal paperwork", "Some customers need receipts formatted for reimbursement—test print layouts."),
      E("Project vs retail", "Keep POS scope to payments unless yard retail is a separate profit center with owners."),
    ],
    faqItems: [
      {
        q: "What POS fits excavation contractors?",
        a: "Clover for professional office counters; Square for simple mobile and yard capture; Lightspeed if you run meaningful SKU retail from a yard.",
      },
      {
        q: "Do excavators need specialized POS?",
        a: "Rarely—prioritize clean payment capture, authorization rules, and exports to accounting or project systems you already run.",
      },
    ],
  },
  {
    useCase: "auto-repair",
    title: "Best POS Software for Auto Repair Shops (2026)",
    subtitle:
      "Parts counters, bays, and warranty paperwork need POS that pairs with your shop system—or stays ruthlessly simple for payments only.",
    introParagraph:
      "Auto repair shops often run dedicated shop management for ROs and parts ordering; POS is frequently the card-present layer at the counter. The right choice either integrates with that world or stays minimal so you are not double-entering labor lines. BeltStack shortlists tools with strong retail and peripheral options where bays hand off to service advisors—confirm integrations on each vendor’s roadmap before you rip out a working counter.",
    picks: [
      {
        slug: "clover-pos",
        badge: "Best flexible service counter",
        description: "Hardware and app options when advisors need printers, displays, and peripherals at the front counter.",
        rowBestFor: "Advisor-heavy front counters",
        why: "Clover suits shops that want a full counter stack with peripheral choice while RO detail still lives in shop software. Pilot terminal models during morning rushes; latency loses customers. Compare monthly bundles against Square if workflows are mostly payments. Choose Clover when counter ergonomics—not only readers—drive throughput.",
      },
      {
        slug: "lightspeed-pos",
        badge: "Best parts retail discipline",
        description: "Inventory-oriented POS when you stock fast-moving filters, fluids, or tires with counts that matter.",
        rowBestFor: "Parts retail + counts",
        why: "Lightspeed helps when the parts department behaves like retail—not only job costing lines. Trial receiving and adjustments against your parts manager’s habits. If parts live entirely in shop software, don’t duplicate in POS without a plan. Choose Lightspeed when shelf accuracy is operational—not theoretical.",
      },
      {
        slug: "square-pos",
        badge: "Best payments-only simplicity",
        description: "Straightforward checkout when shop management owns ROs and you only need reliable card capture.",
        rowBestFor: "Counter payments without retail POS",
        why: "Square fits shops that refuse duplicate systems and only need compliant card present with transparent hardware paths. Keep receipts aligned with RO numbers in your SMS. Choose Square when integration sprawl is the enemy and payments are the only POS job.",
      },
    ],
    editorialGuidance: [
      E("RO alignment", "Avoid entering labor in two systems—decide the system of record."),
      E("Warranty cores", "Receipt notes should match how you handle deposits on special-order parts."),
    ],
    faqItems: [
      {
        q: "What POS do auto repair shops use?",
        a: "Clover for flexible counter hardware; Lightspeed when parts retail needs inventory discipline; Square for minimal payment capture alongside shop management software.",
      },
      {
        q: "Should auto shops use automotive-specific POS?",
        a: "Often shop management software handles ROs; use POS for card present unless you have a clear integration story for inventory.",
      },
    ],
  },
  {
    useCase: "mobile-mechanics",
    title: "Best POS Software for Mobile Mechanics (2026)",
    subtitle:
      "Roadside and driveway repairs need POS that works from a van, supports deposits, and optionally ties to online parts or booking.",
    introParagraph:
      "Mobile mechanics quote on-site, collect deposits for parts orders, and complete tickets without a traditional service lane. POS should be genuinely mobile-first, survive glove-friendly workflows, and stay simple enough that solo operators do not fight settings nightly. If you also sell parts or merch online, omnichannel tools can reduce double entry—only adopt them when the catalog is real.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best van-native payments",
        description: "Compact readers, offline-aware workflows, and fast onboarding for owner-operators and small fleets.",
        rowBestFor: "Field-first mechanics",
        why: "Square is the default for mobile mechanics who need chip and contactless capture without a storefront. Test battery and connectivity patterns for your service area; rural routes punish flaky setups. Choose Square when reliability and simplicity matter more than retail modules.",
      },
      {
        slug: "shopify-pos",
        badge: "Best if you sell parts or merch online",
        description: "Unified catalog when Shopify powers a parts store, apparel, or booking-adjacent SKUs alongside van sales.",
        rowBestFor: "Omnichannel add-ons",
        why: "Shopify POS fits when you already run Shopify for online sales and want the van on the same item spine. If you do not use Shopify, skip—Square plus your SMS is simpler. Choose Shopify POS when ecommerce—not only field swipes—is active weekly.",
      },
      {
        slug: "clover-pos",
        badge: "Best when you add a small counter",
        description: "Full registers if you open a bay or partner with a shop for overflow work.",
        rowBestFor: "Hybrid mobile + desk",
        why: "Clover helps when a mobile business grows a physical payment desk with printers and displays. Model cost against ticket volume; a second system has overhead. Choose Clover when the desk—not only the van—owns meaningful card volume.",
      },
    ],
    editorialGuidance: [
      E("Roadside safety", "Train tap/chip flows that do not distract in traffic-adjacent jobs."),
      E("Parts deposits", "Receipts should reference authorization for special orders you front on cards."),
    ],
    faqItems: [
      {
        q: "What POS is best for mobile mechanics?",
        a: "Square for mobile-first payments; Shopify POS when Shopify runs your online catalog; Clover if you add a counter with full register hardware.",
      },
      {
        q: "Do mobile mechanics need inventory POS?",
        a: "Usually not for van stock—prioritize payments and integration with your shop or estimating tool unless you retail SKUs seriously.",
      },
    ],
  },
  {
    useCase: "cleaning-franchises",
    title: "Best POS Software for Cleaning Franchises (2026)",
    subtitle:
      "Recurring contracts, upsells, and multi-territory branding need POS that scales reporting without drowning franchisees in retail complexity.",
    introParagraph:
      "Cleaning franchises often bill recurring services through specialized software while still using POS for one-time deep cleans, supply sales, or card-on-file style workflows at territory offices. POS should centralize enough reporting for franchisors, stay simple for owner-operators, and support multi-location patterns only where territories actually share processes. Confirm franchise agreement rules on merchant-of-record before you pick a single processor across regions.",
    picks: [
      {
        slug: "lightspeed-pos",
        badge: "Best multi-location retail reporting",
        description: "When territories sell standardized SKUs or supplies with counts and consolidated visibility.",
        rowBestFor: "Franchise supply retail",
        why: "Lightspeed helps franchise systems that need consistent item masters and reporting across locations—not only independent Square accounts. Trial permissions so franchisees see only their data while brand ops see rollups. Choose Lightspeed when retail operations—not only recurring billing—justify shared POS discipline.",
      },
      {
        slug: "square-pos",
        badge: "Best fast rollout for franchisees",
        description: "Simple signup and hardware paths that owner-operators can adopt without IT projects.",
        rowBestFor: "Territory payment capture",
        why: "Square fits franchises whose POS need is mostly card present for upsells, supplies, or occasional jobs while subscriptions live elsewhere. Standardize receipt branding and chart-of-accounts mapping in accounting. Choose Square when speed-to-train beats deep retail.",
      },
      {
        slug: "clover-pos",
        badge: "Best branded counter flexibility",
        description: "Hardware and app options for offices that want customer-facing displays and printers.",
        rowBestFor: "Office-first territories",
        why: "Clover suits territories with walk-in payment desks that want peripherals and optional loyalty-style apps. Compare monthly bundles against Square for your average ticket. Choose Clover when counter experience—not only mobile readers—matters.",
      },
    ],
    editorialGuidance: [
      E("Franchise billing rules", "Align merchant accounts and reporting with FDD expectations and royalty audits."),
      E("Recurring vs POS", "Don’t duplicate subscription charges in POS—pick a system of record."),
    ],
    faqItems: [
      {
        q: "What POS works for cleaning franchises?",
        a: "Lightspeed for multi-location retail and reporting; Square for simple territory adoption; Clover for flexible office counter hardware.",
      },
      {
        q: "Do cleaning companies need retail POS?",
        a: "Only if you sell supplies or products with inventory discipline. Many brands lean on field service or subscription billing for core revenue.",
      },
    ],
  },
  {
    useCase: "event-services",
    title: "Best POS Software for Event Services (2026)",
    subtitle:
      "Pop-up venues, rental SKUs, and weekend spikes need POS that handles fast lines, deposits, and optional ecommerce for packages.",
    introParagraph:
      "Event services businesses sell packages, rentals, and last-minute add-ons—often with seasonal staff and pop-up checkout locations. POS should survive unreliable connectivity, print or email receipts clients expect, and unify catalogs when you also sell tickets or packages online. BeltStack favors tools you can rehearse during a simulated rush; processing delays at the tent lose more than a bad microphone.",
    picks: [
      {
        slug: "shopify-pos",
        badge: "Best online packages + onsite selling",
        description: "Unified catalog when Shopify sells packages, rentals, or merch online and staff fulfill on-site.",
        rowBestFor: "Omnichannel event brands",
        why: "Shopify POS fits when your web store is the product spine for SKUs staff pick up or deliver at events. If Shopify is not in your stack, Square is usually simpler for pop-ups alone. Trial offline behavior and staff permissions before peak season. Choose Shopify POS when omnichannel is operational—not a brochure claim.",
      },
      {
        slug: "square-pos",
        badge: "Best pop-up and line-busting",
        description: "Fast hardware swaps, mobile readers, and simple training for seasonal teams.",
        rowBestFor: "On-site event checkout",
        why: "Square wins for tents, parking lots, and venues where you need many readers and fast onboarding. Configure tipping, discounts, and roles before the first big weekend. Choose Square when throughput and simplicity beat deep retail.",
      },
      {
        slug: "clover-pos",
        badge: "Best fixed counter at venues",
        description: "Full registers when you operate semi-permanent desks with printers and customer displays.",
        rowBestFor: "Box office style desks",
        why: "Clover helps when you run a stable counter footprint with peripherals and want app options for loyalty or add-ons. Compare footprint and cost against Square for short events. Choose Clover for desk-heavy operations—not one-hour pop-ups.",
      },
    ],
    editorialGuidance: [
      E("Connectivity", "Have offline or backup payment paths for outdoor venues."),
      E("Deposit vs final", "Receipts should mirror contract milestones for large event packages."),
    ],
    faqItems: [
      {
        q: "What POS is best for event services?",
        a: "Shopify POS when Shopify powers online packages and onsite fulfillment; Square for fast pop-up checkout; Clover for fixed counters with full register hardware.",
      },
      {
        q: "Do event companies need retail POS?",
        a: "You need reliable card present and clear refunds—retail depth only if you stock SKUs with counts across locations.",
      },
    ],
  },
  {
    useCase: "home-inspectors",
    title: "Best POS Software for Home Inspectors (2026)",
    subtitle:
      "Inspection fees, ancillary services, and occasional product sales need POS that stays lightweight—inspectors live on calendars, not retail aisles.",
    introParagraph:
      "Home inspectors mostly sell fixed-fee inspections and add-ons like radon or thermal imaging; POS is there to capture card payments cleanly at booking or after the report. The best stack avoids retail complexity you will not staff, produces professional receipts for clients and agents, and scales if you later sell courses or merch. BeltStack assumes low daily swipe volume—optimize for simplicity and accounting exports rather than warehouse modules.",
    picks: [
      {
        slug: "square-pos",
        badge: "Best solo and small team simplicity",
        description: "Minimal surface area for card present, invoices, and keyed entry when agents pay by phone.",
        rowBestFor: "Low-volume professional services",
        why: "Square fits inspectors who need dependable payments without a retail operations burden. Connect receipts to your CRM or scheduling tool in accounting, not duplicate customer records in POS. Choose Square when your week is inspections—not stocking SKUs.",
      },
      {
        slug: "clover-pos",
        badge: "Best if you add a small office counter",
        description: "Hardware flexibility when clients pay in person and you want printed receipts for walk-ins.",
        rowBestFor: "Office payment desk",
        why: "Clover helps if you operate a reception desk with printers and want a fuller register experience. Compare monthly cost against Square on low swipe volume—hardware has to earn its keep. Choose Clover when in-person professionalism—not pocket readers—is the brand expectation.",
      },
      {
        slug: "shopify-pos",
        badge: "Best if you sell reports, courses, or merch",
        description: "Unified catalog when Shopify powers ancillary products online and you occasionally sell in person.",
        rowBestFor: "Ancillary ecommerce",
        why: "Shopify POS matters when you already monetize education, merch, or digital goods on Shopify and want the same catalog at events or open houses. Skip if you do not run Shopify—Square handles occasional merch without another platform. Choose Shopify POS when ancillary SKUs are real revenue—not hypothetical.",
      },
    ],
    editorialGuidance: [
      E("Agent workflows", "Many payments are coordinated by agents—receipts should name the property or order ID clearly."),
      E("Add-on disclosure", "Keep ancillary charges transparent to reduce disputes on bundled services."),
    ],
    faqItems: [
      {
        q: "What POS should home inspectors use?",
        a: "Square for lightweight payment capture; Clover if you want full counter hardware at an office; Shopify POS when Shopify already sells ancillary products online.",
      },
      {
        q: "Do home inspectors need inventory POS?",
        a: "Rarely—prioritize invoicing, scheduling integration, and clean payment exports unless you truly retail products.",
      },
    ],
  },
];

/** SEO keywords for trade POS pages — used by `app/pos/best-for/[scenario]/page.tsx` metadata. */
const POS_TRADE_META_KEYWORDS: Partial<Record<string, readonly string[]>> = {
  "appliance-repair": [
    "POS for appliance repair",
    "appliance repair payment software",
    "field service POS",
    "small business POS",
    "mobile credit card reader",
    "parts counter POS",
  ],
  "garage-door": [
    "POS for garage door dealers",
    "garage door showroom POS",
    "contractor payment processing",
    "retail POS inventory",
    "deposit POS system",
  ],
  locksmith: [
    "locksmith POS system",
    "mobile locksmith payments",
    "key shop POS",
    "retail POS small store",
    "locksmith credit card processing",
  ],
  flooring: [
    "flooring showroom POS",
    "flooring contractor payments",
    "Shopify POS flooring",
    "materials deposit POS",
    "retail POS for contractors",
  ],
  "fence-deck": [
    "fence contractor POS",
    "deck builder payments",
    "construction deposit POS",
    "contractor credit card reader",
  ],
  "glass-window-installers": [
    "window company POS",
    "glass shop point of sale",
    "custom window deposit payments",
    "showroom POS system",
  ],
  "concrete-contractors": [
    "concrete contractor POS",
    "construction payment processing",
    "job deposit POS",
    "contractor mobile payments",
  ],
  excavation: [
    "excavation company POS",
    "heavy equipment contractor payments",
    "construction office POS",
    "contractor card reader",
  ],
  "auto-repair": [
    "auto repair shop POS",
    "automotive service counter POS",
    "car repair payments",
    "parts counter point of sale",
  ],
  "mobile-mechanics": [
    "mobile mechanic POS",
    "roadside mechanic payments",
    "van credit card reader",
    "automotive mobile payments",
  ],
  "cleaning-franchises": [
    "cleaning franchise POS",
    "janitorial payment processing",
    "multi-location POS",
    "franchise retail POS",
  ],
  "event-services": [
    "event services POS",
    "pop-up POS system",
    "rental business payments",
    "event company credit card processing",
  ],
  "home-inspectors": [
    "home inspector POS",
    "inspection payment software",
    "professional services POS",
    "small business card reader",
  ],
};

export function getPosTradeMetaKeywords(useCase: string): string[] | undefined {
  const k = POS_TRADE_META_KEYWORDS[useCase];
  return k ? [...k] : undefined;
}

export const POS_TRADE_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = Object.fromEntries(
  TRADE_CONFIGS.map((cfg) => [cfg.useCase, buildPosTradeProps(cfg)])
);

const POS_TRADE_HUB_ORDER = [
  "hvac",
  "plumbing",
  "electricians",
  "painting",
  "roofing",
  "general-contractors",
  "landscaping",
  "construction",
  "remodeling",
  "handyman",
  "property-management",
  "pest-control",
  "pool-service",
  "junk-removal",
  "moving",
  "appliance-repair",
  "garage-door",
  "locksmith",
  "flooring",
  "fence-deck",
  "glass-window-installers",
  "concrete-contractors",
  "excavation",
  "auto-repair",
  "mobile-mechanics",
  "cleaning-franchises",
  "event-services",
  "home-inspectors",
] as const;

export type PosTradeBestForHubCard = { label: string; href: string; description: string };

export function getPosTradeBestForHubCards(): PosTradeBestForHubCard[] {
  return POS_TRADE_HUB_ORDER.map((slug) => {
    const props = POS_TRADE_BEST_FOR_BY_SLUG[slug];
    if (!props) throw new Error(`Missing POS trade best-for: ${slug}`);
    return {
      label: props.title,
      href: getPosBestForUrl(slug),
      description: props.subtitle,
    };
  });
}

/** Short labels for review sidebars and nav—keep in sync with `POS_TRADE_HUB_ORDER`. */
const POS_TRADE_NAV_LABELS: Record<(typeof POS_TRADE_HUB_ORDER)[number], string> = {
  hvac: "HVAC businesses",
  plumbing: "Plumbing companies",
  electricians: "Electricians",
  painting: "Painting contractors",
  roofing: "Roofing companies",
  "general-contractors": "General contractors",
  landscaping: "Landscaping companies",
  construction: "Construction companies",
  remodeling: "Remodeling businesses",
  handyman: "Handyman businesses",
  "property-management": "Property management companies",
  "pest-control": "Pest control businesses",
  "pool-service": "Pool service companies",
  "junk-removal": "Junk removal businesses",
  moving: "Moving companies",
  "appliance-repair": "Appliance repair businesses",
  "garage-door": "Garage door companies",
  locksmith: "Locksmith businesses",
  flooring: "Flooring contractors",
  "fence-deck": "Fence & deck builders",
  "glass-window-installers": "Glass & window installers",
  "concrete-contractors": "Concrete contractors",
  excavation: "Excavation companies",
  "auto-repair": "Auto repair shops",
  "mobile-mechanics": "Mobile mechanics",
  "cleaning-franchises": "Cleaning franchises",
  "event-services": "Event services",
  "home-inspectors": "Home inspectors",
};

export const POS_TRADE_SCENARIO_NAV_LINKS: { label: string; href: string }[] = POS_TRADE_HUB_ORDER.map((slug) => ({
  label: POS_TRADE_NAV_LABELS[slug],
  href: getPosBestForUrl(slug),
}));
