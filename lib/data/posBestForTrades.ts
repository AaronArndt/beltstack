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
];

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
};

export const POS_TRADE_SCENARIO_NAV_LINKS: { label: string; href: string }[] = POS_TRADE_HUB_ORDER.map((slug) => ({
  label: POS_TRADE_NAV_LABELS[slug],
  href: getPosBestForUrl(slug),
}));
