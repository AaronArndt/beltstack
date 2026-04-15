/**
 * Accounting best-for pages by trade / business type.
 * Featured triples vary by trade; products map to canonical accounting reviews and comparisons.
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
import { getAccountingBestForUrl, getAccountingCompareUrl, getAccountingReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/accounting", label: "Accounting" };
const SEE_ALSO = {
  roundupLabel: "accounting software hub",
  roundupHref: "/accounting",
  compareLabel: "accounting software comparisons",
  compareHref: "/accounting/compare",
};

const ACCOUNTING_PRODUCT_CORE = {
  "quickbooks-online": {
    name: "QuickBooks Online",
    logoSrc: "/Logos/quickbooks.png",
    rating: "4.6",
    startingPrice: "$30/mo",
    visitUrl: "https://quickbooks.intuit.com",
    defaultStandout: "Job costing, reporting, largest app ecosystem",
  },
  xero: {
    name: "Xero",
    logoSrc: "/Logos/xero.png",
    rating: "4.5",
    startingPrice: "$15/mo",
    visitUrl: "https://www.xero.com",
    defaultStandout: "Clean UI, projects, accountant-friendly workflows",
  },
  freshbooks: {
    name: "FreshBooks",
    logoSrc: "/Logos/freshbooks.jpeg",
    rating: "4.5",
    startingPrice: "$19/mo",
    visitUrl: "https://www.freshbooks.com",
    defaultStandout: "Invoicing, time tracking, service-business UX",
  },
  "zoho-books": {
    name: "Zoho Books",
    logoSrc: "/Logos/zoho.png",
    rating: "4.4",
    startingPrice: "$15/mo",
    visitUrl: "https://www.zoho.com/books",
    defaultStandout: "Automation, projects, value in the Zoho stack",
  },
  wave: {
    name: "Wave",
    logoSrc: "/Logos/wave.jpeg",
    rating: "4.3",
    startingPrice: "Free",
    visitUrl: "https://www.waveapps.com",
    defaultStandout: "Free core accounting and invoicing",
  },
  "sage-accounting": {
    name: "Sage",
    logoSrc: "/Logos/sage.png",
    rating: "4.3",
    startingPrice: "Quote",
    visitUrl: "https://www.sage.com/en-us/products/sage-business-cloud-accounting",
    defaultStandout: "Compliance-minded core ledger for SMBs",
  },
} as const;

export type AccountingTradeProductSlug = keyof typeof ACCOUNTING_PRODUCT_CORE;

export type AccountingTradeProductPick = {
  slug: AccountingTradeProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

export type AccountingTradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  hubTeaser: string;
  introParagraph: string;
  picks: [AccountingTradeProductPick, AccountingTradeProductPick, AccountingTradeProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

const ACCOUNTING_PAIR_COMPARISONS: {
  label: string;
  compareSlug: string;
  products: [AccountingTradeProductSlug, AccountingTradeProductSlug];
}[] = [
  { label: "QuickBooks Online vs Xero", compareSlug: "quickbooks-online-vs-xero", products: ["quickbooks-online", "xero"] },
  { label: "QuickBooks Online vs FreshBooks", compareSlug: "quickbooks-online-vs-freshbooks", products: ["quickbooks-online", "freshbooks"] },
  { label: "QuickBooks Online vs Zoho Books", compareSlug: "quickbooks-online-vs-zoho-books", products: ["quickbooks-online", "zoho-books"] },
  { label: "QuickBooks Online vs Wave", compareSlug: "quickbooks-online-vs-wave", products: ["quickbooks-online", "wave"] },
  { label: "Xero vs FreshBooks", compareSlug: "xero-vs-freshbooks", products: ["xero", "freshbooks"] },
  { label: "Xero vs Zoho Books", compareSlug: "xero-vs-zoho-books", products: ["xero", "zoho-books"] },
  { label: "Wave vs FreshBooks", compareSlug: "wave-vs-freshbooks", products: ["wave", "freshbooks"] },
  { label: "Zoho Books vs FreshBooks", compareSlug: "zoho-books-vs-freshbooks", products: ["zoho-books", "freshbooks"] },
  { label: "Zoho Books vs Wave", compareSlug: "zoho-books-vs-wave", products: ["zoho-books", "wave"] },
  { label: "Sage vs QuickBooks Online", compareSlug: "sage-accounting-vs-quickbooks-online", products: ["sage-accounting", "quickbooks-online"] },
  { label: "Sage vs Xero", compareSlug: "sage-accounting-vs-xero", products: ["sage-accounting", "xero"] },
  { label: "Sage vs FreshBooks", compareSlug: "sage-accounting-vs-freshbooks", products: ["sage-accounting", "freshbooks"] },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "QuickBooks Online vs Xero", href: getAccountingCompareUrl("quickbooks-online-vs-xero") },
  { label: "QuickBooks Online vs FreshBooks", href: getAccountingCompareUrl("quickbooks-online-vs-freshbooks") },
  { label: "Xero vs Zoho Books", href: getAccountingCompareUrl("xero-vs-zoho-books") },
];

function buildRelatedComparisons(featured: AccountingTradeProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = ACCOUNTING_PAIR_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getAccountingCompareUrl(c.compareSlug), score };
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

const REVIEW_FILL_ORDER: AccountingTradeProductSlug[] = [
  "quickbooks-online",
  "xero",
  "freshbooks",
  "zoho-books",
  "wave",
  "sage-accounting",
];

function buildRelatedReviews(featured: AccountingTradeProductSlug[]): BestForReviewLink[] {
  const ordered: AccountingTradeProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: ACCOUNTING_PRODUCT_CORE[s].name,
    href: getAccountingReviewUrl(s),
  }));
}

const EDITORIAL_FAQ_PICKS: BestForFaqItem = {
  q: "How does BeltStack pick accounting software for these trades?",
  a: "We weigh job- or project-based reporting, invoicing and deposits, bank feeds, payroll and field-tool handoffs, and what your accountant can support—not pay-for-placement. Pricing changes; confirm current tiers on each vendor’s site and run a trial on real jobs before you migrate.",
};

const EDITORIAL_FAQ_AFFILIATE: BestForFaqItem = {
  q: "Do affiliate links change these recommendations?",
  a: "We may earn commissions on some outbound links site-wide; they do not buy rankings on BeltStack. Use reviews and comparisons as orientation, then validate exports and workflows with your bookkeeper.",
};

const COMMON_GUIDES: BestForGuideLink[] = [
  { label: "Accounting for contractors", href: "/accounting/guides/accounting-for-contractors" },
  { label: "Accounting software pricing explained", href: "/accounting/guides/accounting-software-pricing" },
  { label: "How accounting software works", href: "/accounting/guides/how-accounting-software-works" },
];

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

function buildAccountingTradeProps(p: AccountingTradeConfig): BestForTemplateProps {
  const label = p.useCase.replace(/-/g, " ");
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = ACCOUNTING_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getAccountingReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = ACCOUNTING_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getAccountingReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: ACCOUNTING_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const names = p.picks.map((pk) => ACCOUNTING_PRODUCT_CORE[pk.slug].name);
  const [n1, n2, n3] = names;
  const featuredNameSet = new Set(names);
  const others = REVIEW_FILL_ORDER.map((s) => ACCOUNTING_PRODUCT_CORE[s].name).filter((n) => !featuredNameSet.has(n));

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
    topPicksSub: `Editorial accounting picks for ${label}. Model tiers, seats, and payroll add-ons on each vendor’s site—our shortlist is a workflow map, not a substitute for your own close process.`,
    editorialSub: `What matters for ${label}: job or project visibility, invoicing that matches how you collect cash, and clean handoffs to tax and payroll.`,
    whyThesePicksSub: `Why ${n1}, ${n2}, and ${n3} lead this shortlist for ${label}. ${others.length > 0 ? `${others.join(", ")} appear in related reviews when a different price band or ledger style fits better.` : ""}`,
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

const TRADE_CONFIGS: AccountingTradeConfig[] = [
  {
    useCase: "hvac",
    title: "Best Accounting Software for HVAC Businesses (2026)",
    subtitle:
      "Job costing, maintenance-contract billing, and seasonal cash flow for HVAC shops that split time between installs, service vans, and the office.",
    hubTeaser: "Job visibility, recurring service billing, and integrations with field tools and payroll.",
    introParagraph:
      "HVAC companies juggle install jobs, service agreements, and parts-heavy tickets. Accounting software should tie revenue and costs to jobs or projects where it matters, support progress or recurring billing for maintenance plans, and export cleanly to your accountant. Our shortlist favors tools trades already adopt—then we rank by how honestly they handle deposits, change orders, and WIP-style visibility without forcing enterprise ERP.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best overall for mixed install + service",
        description:
          "Job costing, classes, and a deep app market for payroll and field service when you outgrow spreadsheets.",
        rowBestFor: "Install + service accounting",
        why: "QuickBooks Online remains the practical default when HVAC owners need job-level P&L, vendor bills tied to work orders, and integrations with common field and payroll stacks. In a trial, tag a week of real tickets—residential changeouts, commercial PM contracts, and truck stock—and confirm your bookkeeper is comfortable with your chart of accounts. Budget for the tier that unlocks the job reports you actually open each Monday.",
      },
      {
        slug: "freshbooks",
        badge: "Best for fast invoicing & deposits",
        description:
          "Simple estimates-to-invoice flows when owners still touch billing and want clients paying online quickly.",
        rowBestFor: "Service-first billing UX",
        why: "FreshBooks fits HVAC teams that prioritize deposit invoices, change-order emails, and online pay links over heavy WIP accounting. Test recurring templates for maintenance plans and sales tax on materials vs labor where your state differs. If you later need deeper job costing, plan whether exports plus a strong bookkeeper suffice before you replatform.",
      },
      {
        slug: "xero",
        badge: "Best modern ledger + app depth",
        description:
          "Cloud accounting with projects, approvals, and integrations when you want QuickBooks alternatives with accountant buy-in.",
        rowBestFor: "Cloud GL + project tracking",
        why: "Xero suits HVAC operators who want a contemporary general ledger, purchase approvals, and an app ecosystem for specialized add-ons. During evaluation, reconcile a month of bank activity with job tags or tracking categories your PM trusts. Xero wins when flexibility and UX beat Intuit muscle memory—still validate multi-location and inventory add-ons if you stock multiple warehouses.",
      },
    ],
    editorialGuidance: [
      E("Maintenance vs install revenue", "Separate recurring service from project revenue in reports so seasonality doesn’t hide margin leaks."),
      E("Inventory reality", "Decide if parts live in accounting, inventory software, or the FSM—then avoid double systems without reconciliation."),
    ],
    faqItems: [
      {
        q: "What accounting software do HVAC businesses use?",
        a: "Many use QuickBooks Online for job costing and ecosystem breadth, FreshBooks when invoicing speed matters most, and Xero as a strong QuickBooks alternative with modern workflows.",
      },
      {
        q: "Do HVAC companies need job costing?",
        a: "If you run installs with materials and labor, job- or project-level P&L helps you see which ticket types pay for truck rolls. Light service-only shops may start simpler and add depth as volume grows.",
      },
    ],
  },
  {
    useCase: "plumbing",
    title: "Best Accounting Software for Plumbing Companies (2026)",
    subtitle:
      "Emergency calls, time and materials tickets, and multi-truck operations need accounting that tracks jobs, subs, and deposits without slowing the office.",
    hubTeaser: "Project tags, subcontractor 1099 readiness, and invoicing that matches emergency + booked work.",
    introParagraph:
      "Plumbing shops balance after-hours emergencies, quoted jobs, and materials pulled from stock. Books should connect bank activity to jobs, keep subcontractor records clean for 1099s, and let you invoice deposits and finals without a parallel spreadsheet system. We favor platforms plumbers’ accountants already recognize, then judge how well each handles progress billing and mobile approvals between dispatch and the desk.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best default for job-based plumbing",
        description:
          "Full bookkeeping with job costing, vendor bills, and integrations when multiple crews run at once.",
        rowBestFor: "Multi-crew job accounting",
        why: "QuickBooks Online anchors plumbing companies that need vendor bills, job profitability, and payroll integrations under one roof. Trial with real scenarios: slab leaks with large material draws, water heater swaps, and commercial service agreements. Confirm user permissions so field tablets can’t see sensitive payroll while PMs can approve bills.",
      },
      {
        slug: "xero",
        badge: "Best QuickBooks alternative",
        description:
          "Strong cloud ledger with project tracking and a broad app marketplace for specialized plumbing add-ons.",
        rowBestFor: "Modern GL + integrations",
        why: "Xero fits plumbing owners who want cleaner collaboration with remote bookkeepers and flexible project dimensions. Test purchase approvals for supply-house runs and attachment habits for permit-related expenses. Pick Xero when you value UX and open integrations over staying on Intuit by default.",
      },
      {
        slug: "zoho-books",
        badge: "Best value & automation",
        description:
          "Project-centric accounting and workflows at a friendly price—especially if you already use Zoho CRM or FSM.",
        rowBestFor: "Automation + Zoho stack",
        why: "Zoho Books helps plumbing companies watching software spend while still needing projects, recurring billing, and client portals. Automate monthly drain-maintenance plans and route tax rules for materials vs labor. If you live in Zoho elsewhere, the handoff beats bolting generic accounting beside siloed CRM.",
      },
    ],
    editorialGuidance: [
      E("Subs and COIs", "Track subcontractor payouts as vendor expenses with clean W-9 discipline before year-end."),
      E("Deposits vs refunds", "Align invoice numbering and credit memo habits with how you handle failed digs or warranty callbacks."),
    ],
    faqItems: [
      {
        q: "QuickBooks or Xero for plumbers?",
        a: "QuickBooks Online when you want the largest contractor integration ecosystem; Xero when you prefer a modern interface and strong project tracking with different app choices.",
      },
      {
        q: "Is free accounting enough for plumbing?",
        a: "Very small shops may start on Wave for core invoicing, but growing plumbers with subs and inventory complexity usually outgrow free tiers—plan for job visibility before tax season surprises you.",
      },
    ],
  },
  {
    useCase: "electricians",
    title: "Best Accounting Software for Electricians (2026)",
    subtitle:
      "Panel upgrades, service tickets, and small materials pulls need lean accounting with clear job tags and accountant-friendly exports.",
    hubTeaser: "Project tracking, clean invoicing for T&M work, and integrations electricians’ CPAs already support.",
    introParagraph:
      "Electrical contractors often run labor-heavy jobs with a thinner materials mix than GCs. You still need deposits, change orders, and vendor bills tied to work so you know which job types fund truck rolls. These picks prioritize straightforward job dimensions, strong invoicing, and ecosystems that play nicely with payroll and time tools your crews already use.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best overall for electrical contractors",
        description:
          "Established job and class tracking with the integration breadth electricians need as they add crews.",
        rowBestFor: "Job costing + scale",
        why: "QuickBooks Online supports electrical shops scaling from owner-operator to multi-van teams without reinventing the chart of accounts accountants expect. Trial job profitability on service upgrades vs new construction feeds. Validate sales tax on fixtures and smart-home SKUs if you retail from the truck.",
      },
      {
        slug: "zoho-books",
        badge: "Best project automation on a budget",
        description:
          "Client projects, recurring maintenance, and automation when you want depth without enterprise pricing.",
        rowBestFor: "Value + projects",
        why: "Zoho Books fits electricians who want project workflows, approvals, and recurring revenue from maintenance plans at a lower entry price. Connect Zoho FSM or CRM if those teams already live there. Test mobile approvals for owners between inspections.",
      },
      {
        slug: "freshbooks",
        badge: "Best for owner-led billing",
        description:
          "Fast estimates, deposits, and final invoices when the owner or a small office handles every client touch.",
        rowBestFor: "Invoicing-first workflows",
        why: "FreshBooks suits electrical contractors who live in estimates and invoices more than deep WIP journals—common for residential service upgrades. Run trials on deposit policies and online payment fees against your average ticket. Add accounting depth elsewhere if commercial GC billing demands AIA-style schedules.",
      },
    ],
    editorialGuidance: [
      E("License and permit costs", "Tag permit and inspection fees consistently so job margins reflect true burdened cost."),
      E("Retail vs contract revenue", "If you sell SKUs at counter margin, separate those line items from pure labor for cleaner reporting."),
    ],
    faqItems: [
      {
        q: "Do electricians need QuickBooks?",
        a: "Not mandatory—but QuickBooks Online is the most common default because accountants and apps know it. Xero and Zoho Books are strong alternatives when price or UX matters more.",
      },
      {
        q: "Can FreshBooks handle commercial electrical work?",
        a: "It handles invoicing and time well; complex retainage or multi-phase GC billing may push you toward QuickBooks or Xero with contractor-savvy bookkeeping.",
      },
    ],
  },
  {
    useCase: "painting",
    title: "Best Accounting Software for Painting Contractors (2026)",
    subtitle:
      "Seasonal crews, deposit-heavy jobs, and simple COGS need accounting that stays easy for rotating office help.",
    hubTeaser: "Deposits, final draws, and low-friction invoicing when crews turn over each season.",
    introParagraph:
      "Painting contractors run on estimates, deposits, and completion draws—often with seasonal office staff. Accounting should stay simple enough to train quickly while still tracking job costs for materials and subs. We weight invoicing UX, online payments, and the path to year-end books without forcing construction ERP on residential repaint shops.",
    picks: [
      {
        slug: "freshbooks",
        badge: "Best for painting workflows",
        description:
          "Estimate-to-invoice speed, time and expenses on jobs, and client-friendly pay links for deposit-heavy work.",
        rowBestFor: "Service painting billing",
        why: "FreshBooks maps cleanly to how painting companies sell: proposals, deposits, color-change fees, and finals. Trial with your peak-season estimate templates and refund edge cases. Owners who still send every invoice personally will move faster here than in heavy GL screens.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best when job costing matures",
        description:
          "Full bookkeeping when you add commercial work, subs, or multiple crews and need structured job P&L.",
        rowBestFor: "Growing paint contractors",
        why: "QuickBooks Online steps up when painting companies add commercial repaint programs, subcontracted crews, or materials accounts that deserve true job costing. Connect payroll and time apps once foremen need disciplined labor allocation.",
      },
      {
        slug: "wave",
        badge: "Best free start",
        description:
          "Free accounting and invoicing for very small painting crews watching every software dollar.",
        rowBestFor: "Lean residential shops",
        why: "Wave fits solo painters or tiny partnerships that need professional invoices and bank feeds before they justify paid tiers. Watch payment processing fees on card-present vs online pay. Plan an upgrade path before you need multi-user approvals or deep job classes.",
      },
    ],
    editorialGuidance: [
      E("Crew payroll timing", "Align weekly payroll exports with job tags so overtime spikes don’t distort job margins."),
      E("Warranty callbacks", "Decide how you book warranty labor—separate service type or absorbed overhead—then stay consistent."),
    ],
    faqItems: [
      {
        q: "What is the best accounting app for painters?",
        a: "FreshBooks leads for fast client billing; QuickBooks Online when job costing and subs matter; Wave for the smallest shops starting free.",
      },
      {
        q: "Do painters need inventory modules?",
        a: "Usually no—track materials as job costs or COGS categories unless you run a real retail supply counter.",
      },
    ],
  },
  {
    useCase: "roofing",
    title: "Best Accounting Software for Roofing Companies (2026)",
    subtitle:
      "Storm seasons, supplements, and large material draws need accounting that survives high-ticket jobs and insurer documentation.",
    hubTeaser: "High-ticket job tracking, supplement paperwork, and subcontractor payouts at scale.",
    introParagraph:
      "Roofing companies move large material and labor dollars per job, often with insurance-driven documentation and supplement cycles. Accounting should handle vendor deposits to suppliers, subcontractor payouts, and clear job profitability when storms compress timelines. We prioritize ledgers that tolerate heavy vendor activity and integrations with estimating tools your production team trusts.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best for storm-volume operations",
        description:
          "Job costing, vendor bills, and payroll integrations when you run multiple crews and supplier pulls daily.",
        rowBestFor: "High-volume roofing",
        why: "QuickBooks Online handles the vendor bill volume and job dimensions common in roofing when supplements and material returns create accounting noise. Trial month-end job reports against production’s job file. Lock down user roles so sales can’t alter posted expenses.",
      },
      {
        slug: "xero",
        badge: "Best modern alternative",
        description:
          "Cloud accounting with strong projects and approvals when you want cleaner UX than legacy Intuit habits.",
        rowBestFor: "Project-centric roofing",
        why: "Xero supports roofing finance teams that want purchase approvals, document attachments for supplement packets, and collaboration with outsourced bookkeeping. Validate multi-currency only if you cross-border; most US roofers focus on projects and payables.",
      },
      {
        slug: "sage-accounting",
        badge: "Best compliance-minded option",
        description:
          "Core SMB accounting with a compliance lens when your advisor prefers Sage workflows on complex filings.",
        rowBestFor: "Advisor-driven Sage shops",
        why: "Sage Accounting fits roofing companies whose CPA or fractional controller standardizes on Sage for reporting discipline. Expect quote-based pricing—model TCO against QuickBooks tiers. Choose it when your firm’s templates and review cadence already assume Sage exports.",
      },
    ],
    editorialGuidance: [
      E("Supplier deposits", "Match supplier prepayments to jobs or POs so cash out doesn’t look like mystery GL noise."),
      E("Supplement income timing", "Align revenue recognition habits with how your accountant treats approved supplements vs pending."),
    ],
    faqItems: [
      {
        q: "What accounting software do roofers use?",
        a: "QuickBooks Online is most common at scale; Xero is a strong alternative; Sage can fit when your accounting firm standardizes on it.",
      },
      {
        q: "How do roofers track job profitability?",
        a: "Tag income and direct costs to jobs or projects, allocate labor and subs consistently, and review gross margin by job type (retail vs insurance) monthly.",
      },
    ],
  },
  {
    useCase: "general-contractors",
    title: "Best Accounting Software for General Contractors (2026)",
    subtitle:
      "Multi-trade jobs, retainage, and subcontractor-heavy workflows need accounting that supports serious job reporting.",
    hubTeaser: "Job costing, retainage-friendly invoicing, and GC-grade payables discipline.",
    introParagraph:
      "General contractors coordinate subs, materials, and owner billing across long-running jobs. Accounting software should support job or project dimensions deep enough for retainage, AIA-style schedules where you use them, and clean 1099 workflows. This shortlist favors platforms GC bookkeepers already know, with clear upgrade paths as bond and banking covenants demand tighter reporting.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best overall for GCs",
        description:
          "Job costing, classes, and integrations with construction payroll and time tools at the center of the US market.",
        rowBestFor: "Full GC accounting",
        why: "QuickBooks Online remains the pragmatic hub for GCs balancing owner draws, sub payables, and lender reporting. Map your actual billing format—G702/G703 style exports often still touch Excel; confirm what stays in accounting vs project software. Trial with one commercial job and one residential build to stress-test classes.",
      },
      {
        slug: "xero",
        badge: "Best alternative ecosystem",
        description:
          "Modern ledger with projects and purchase controls when your finance lead wants non-Intuit architecture.",
        rowBestFor: "Cloud-native GC finance",
        why: "Xero fits GCs that want purchase approvals, clean bank rules, and construction apps that integrate without QuickBooks lock-in. Validate job cost dimensions against how supers tag commitments in the field.",
      },
      {
        slug: "zoho-books",
        badge: "Best value for growing GCs",
        description:
          "Project workflows and automation at lower cost—strong when paired with Zoho CRM or other Zoho ops tools.",
        rowBestFor: "Budget-conscious GCs",
        why: "Zoho Books helps growing GCs that need structured projects and vendor bills without enterprise license creep. Automate recurring overhead invoices and use client portals sparingly for owner draws documentation.",
      },
    ],
    editorialGuidance: [
      E("Retainage and waivers", "Align lien waiver tracking between accounting and project software—don’t duplicate conflicting states."),
      E("Bonding reporting", "Confirm job schedules your surety expects map to reports you can pull monthly without manual rework."),
    ],
    faqItems: [
      {
        q: "What is the best accounting software for general contractors?",
        a: "QuickBooks Online leads for breadth; Xero for modern cloud GC finance; Zoho Books when value and automation matter alongside other Zoho tools.",
      },
      {
        q: "Do GCs need construction-specific accounting?",
        a: "You need job-aware accounting; sometimes that’s QuickBooks plus construction PM software. Pick tools your controller will reconcile every week, not only at year-end.",
      },
    ],
  },
  {
    useCase: "landscaping",
    title: "Best Accounting Software for Landscaping Companies (2026)",
    subtitle:
      "Recurring maintenance, install projects, and crew payroll spikes need accounting that separates contract types cleanly.",
    hubTeaser: "Recurring billing, job tags for installs vs maintenance, and seasonal labor reporting.",
    introParagraph:
      "Landscaping operators mix recurring route revenue with design-build installs and snow-adjacent spikes. Accounting should automate recurring invoices where possible, tag jobs by revenue type, and keep payroll and OT visible against margin. We favor tools that handle both service-style billing and project deposits without forcing retail inventory complexity.",
    picks: [
      {
        slug: "freshbooks",
        badge: "Best for recurring + project mix",
        description:
          "Recurring profiles and project-friendly invoicing when owners sell maintenance plans beside one-off installs.",
        rowBestFor: "Service-forward landscapers",
        why: "FreshBooks helps landscaping companies sell maintenance programs with less friction than heavyweight ERP trials. Pair recurring invoices with project tracking for hardscape jobs. Test sales tax on materials delivery vs labor where your state distinguishes them.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best when operations scale",
        description:
          "Classes, job costing, and payroll integrations when you add multiple crews, shops, and equipment loans.",
        rowBestFor: "Scaling landscape operations",
        why: "QuickBooks Online takes over when landscaping companies add equipment debt service, multi-location overhead, and detailed job costing for large installs. Connect time tracking before OT surprises job margins.",
      },
      {
        slug: "xero",
        badge: "Best modern ledger",
        description:
          "Projects and approvals with a clean UI when you want strong accounting without Intuit defaults.",
        rowBestFor: "Cloud-forward finance",
        why: "Xero supports landscaping finance managers who want purchase approvals for nursery pulls and clean collaboration with remote bookkeepers. App choices differ from QuickBooks—validate fleet and job tools early.",
      },
    ],
    editorialGuidance: [
      E("Seasonality", "Model winter cash with clear classes so snow or dormant months don’t hide overhead drag."),
      E("Subcontracted crews", "Treat long-term subs consistently for 1099 vs W-2—software won’t fix classification mistakes."),
    ],
    faqItems: [
      {
        q: "FreshBooks or QuickBooks for landscaping?",
        a: "FreshBooks when recurring maintenance billing dominates and teams are lean; QuickBooks when multi-crew job costing and payroll complexity justify a fuller ledger.",
      },
      {
        q: "How should landscapers track jobs?",
        a: "Use projects or classes to split maintenance revenue from install projects, then review gross margin by type monthly.",
      },
    ],
  },
  {
    useCase: "construction",
    title: "Best Accounting Software for Construction Companies (2026)",
    subtitle:
      "Job costing, equipment, and subcontractor payables need accounting that survives audit-friendly job files.",
    hubTeaser: "Heavy job costing, equipment notes, and sub-heavy payables in one ledger.",
    introParagraph:
      "Construction companies—beyond single-trade subs—need disciplined job costing, equipment and loan tracking, and clean subcontractor records. These picks emphasize platforms construction CPAs support daily, with enough project depth to explain over-under billing to owners and lenders without living entirely in spreadsheets.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best market default",
        description:
          "Broad job costing, payroll tie-ins, and integrations that match how construction firms actually close months.",
        rowBestFor: "Construction accounting core",
        why: "QuickBooks Online anchors most construction SMBs because banks, CPAs, and apps expect it. Trial with a job that has equipment rental allocations, multiple sub tiers, and owner retention. Confirm advanced reporting needs before you assume Simple Start is enough.",
      },
      {
        slug: "sage-accounting",
        badge: "Best Sage-aligned firms",
        description:
          "Sage ecosystem fit when your controller prefers Sage reporting templates and compliance posture.",
        rowBestFor: "Sage-native workflows",
        why: "Sage Accounting suits construction businesses already standardized on Sage with advisors who optimize around it. Compare quote-based fees honestly against QuickBooks renewal math.",
      },
      {
        slug: "xero",
        badge: "Best Intuit alternative",
        description:
          "Projects, payables, and modern collaboration when you want cloud accounting outside QuickBooks.",
        rowBestFor: "Non-Intuit construction",
        why: "Xero fits construction finance teams prioritizing purchase workflows and cleaner UX. Pair with construction-specific apps for scheduling and field data; accounting stays the financial source of truth.",
      },
    ],
    editorialGuidance: [
      E("Equipment vs job cost", "Decide whether equipment hits balance sheet, job burden, or overhead—and keep capitalization consistent."),
      E("WIP discipline", "If you use WIP journals, reconcile them to project software weekly, not only at year-end."),
    ],
    faqItems: [
      {
        q: "Is QuickBooks enough for construction?",
        a: "For many SMB construction firms, yes—especially with disciplined job classes and add-ons. Larger contractors may add construction ERP later; start where your controller will reconcile daily.",
      },
      {
        q: "When does Sage beat QuickBooks?",
        a: "When your accounting firm, reporting pack, or multi-entity needs already assume Sage workflows and you’ve priced TCO accordingly.",
      },
    ],
  },
  {
    useCase: "remodeling",
    title: "Best Accounting Software for Remodeling Businesses (2026)",
    subtitle:
      "Selections, change orders, and phased draws need accounting that mirrors how remodelers bill homeowners.",
    hubTeaser: "Progress billing, change-order discipline, and job-level margin for residential remodel.",
    introParagraph:
      "Remodelers live in change orders, design allowances, and phased draws. Accounting should connect deposits, vendor bills, and sub costs to jobs so you see true margin per project—not only cash in the door. These tools balance homeowner-friendly invoicing with enough structure for remodel-savvy bookkeepers.",
    picks: [
      {
        slug: "quickbooks-online",
        badge: "Best overall for remodel job costing",
        description:
          "Job dimensions, vendor bills, and integrations when kitchens and baths run simultaneously across crews.",
        rowBestFor: "Remodel job P&L",
        why: "QuickBooks Online supports remodelers juggling selections credits, vendor returns, and sub draw requests. Trial change-order billing patterns your PMs actually use. Lock templates so designers don’t invent new income accounts per job.",
      },
      {
        slug: "freshbooks",
        badge: "Best client-facing billing",
        description:
          "Polished estimates and invoices when owners sell high-touch residential work and live in client emails.",
        rowBestFor: "Design-build billing UX",
        why: "FreshBooks helps remodelers whose bottleneck is client communication and payment speed more than GL complexity. Use projects to group change orders; export to your CPA if you need deeper WIP later.",
      },
      {
        slug: "xero",
        badge: "Best collaborative ledger",
        description:
          "Approvals and attachments when designers, PMs, and bookkeepers share responsibility for receipts.",
        rowBestFor: "Team-based remodel finance",
        why: "Xero fits remodel firms with distributed finance support—attachments on bills matter when selections live in email threads. Validate project dimensions against how you stage jobs (demo, rough-in, finish).",
      },
    ],
    editorialGuidance: [
      E("Allowance vs actual", "Track allowances as separate dimensions so selection overruns don’t distort base contract margin."),
      E("Client financing", "If lenders disburse draws, match deposit timing in books to avoid phantom revenue."),
    ],
    faqItems: [
      {
        q: "What accounting software do remodelers use?",
        a: "QuickBooks Online for structured job costing; FreshBooks when client billing UX is the priority; Xero for collaborative payables and approvals.",
      },
      {
        q: "How should remodelers handle change orders?",
        a: "Issue revised invoices or credit memo patterns your accountant accepts, and always tie additional sub costs to the same job tag.",
      },
    ],
  },
  {
    useCase: "handyman",
    title: "Best Accounting Software for Handyman Businesses (2026)",
    subtitle:
      "High-volume small tickets, simple COGS, and owner-operators need accounting that stays lightweight and cheap.",
    hubTeaser: "Low-cost invoicing, bank feeds, and minimal training for rotating helpers.",
    introParagraph:
      "Handyman businesses stack many small jobs with thin administrative time. Accounting should be fast to invoice, easy to reconcile, and cheap until you hire real back-office help. This shortlist leads with free and simple paid tiers, then QuickBooks when complexity justifies it.",
    picks: [
      {
        slug: "wave",
        badge: "Best free core accounting",
        description:
          "Free invoicing and accounting with bank feeds when you’re owner-operated and watching overhead.",
        rowBestFor: "Solo handyman start",
        why: "Wave fits handymen who need professional invoices and basic P&L without monthly software rent. Watch payment processing fees; they’re the real cost. Upgrade when you need multi-user permissions or deeper classes.",
      },
      {
        slug: "freshbooks",
        badge: "Best paid simplicity",
        description:
          "Fast mobile invoicing and expense capture when you want polish beyond free tools.",
        rowBestFor: "Mobile-first billing",
        why: "FreshBooks helps handymen who send estimates from the van and want clients paying online the same day. Trial mileage and receipt capture if you deduct vehicle and small tools aggressively.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best when you add employees",
        description:
          "Payroll-ready accounting when you hire W-2 helpers and need cleaner quarterly reporting.",
        rowBestFor: "Growing handyman crews",
        why: "QuickBooks Online steps in when handyman businesses add payroll, workers’ comp audits, and job tagging for profitability by service type. Don’t jump here until recurring admin time justifies the subscription.",
      },
    ],
    editorialGuidance: [
      E("Mixed 1099 vs W-2", "Software tracks payments; it doesn’t classify workers—lock that with your accountant."),
      E("Sales tax on minor retail", "If you resell fixtures, confirm tax rules so invoices don’t create surprises."),
    ],
    faqItems: [
      {
        q: "Can a handyman use Wave?",
        a: "Yes—many start on Wave for free invoicing and bank feeds, then move to FreshBooks or QuickBooks when payroll and job detail matter.",
      },
      {
        q: "When should a handyman upgrade from FreshBooks?",
        a: "When you need payroll, deeper job classes, or accountant-driven reporting that assumes QuickBooks conventions.",
      },
    ],
  },
  {
    useCase: "property-management",
    title: "Best Accounting Software for Property Management Companies (2026)",
    subtitle:
      "Owner statements, trust accounting edges, and portfolio overhead need accounting that scales with doors under management.",
    hubTeaser: "Multi-entity tags, owner reporting, and automation across portfolios.",
    introParagraph:
      "Property management companies juggle management fees, owner remittances, and operating expenses across portfolios. While dedicated PM software often holds trust accounting, your books still need clean class or location dimensions, strong payables, and integrations with banking reality. We weight tools that automate recurring owner charges and play well with Zoho-style operational stacks.",
    picks: [
      {
        slug: "zoho-books",
        badge: "Best automation + portfolio tags",
        description:
          "Projects, automation, and multi-entity-style workflows—especially alongside Zoho CRM or other Zoho ops tools.",
        rowBestFor: "Portfolio-centric workflows",
        why: "Zoho Books fits PM shops that want automation for recurring management fees, vendor bills tagged by property, and client portals where appropriate. If you already run Zoho CRM for owners and vendors, accounting stops being the odd system out.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best accountant familiarity",
        description:
          "Classes and locations for portfolios when your CPA expects QuickBooks month-end close packs.",
        rowBestFor: "QB-standard PM accounting",
        why: "QuickBooks Online remains the safe choice when fractional controllers standardize on Intuit and you need payroll plus property-level P&L. Map classes to owners or buildings explicitly in training docs.",
      },
      {
        slug: "xero",
        badge: "Best modern multi-entity feel",
        description:
          "Tracking categories and approvals when remote bookkeepers manage multiple LLCs from one login culture.",
        rowBestFor: "Distributed PM finance",
        why: "Xero supports PM finance teams that want purchase approvals, clean bank rules, and advisor collaboration without desktop relics. Validate trust-account nuances—some activity may still live in PM software with journal summaries.",
      },
    ],
    editorialGuidance: [
      E("Trust accounting boundaries", "Decide what lives in PM software vs the GL; ambiguous commingling fails audits."),
      E("Owner distributions", "Template owner statements so accounting exports match what owners see in portals."),
    ],
    faqItems: [
      {
        q: "Do property managers use QuickBooks?",
        a: "Many do for operating company books; trust accounting often sits in PM platforms. Zoho Books is strong when you want automation inside a broader Zoho stack.",
      },
      {
        q: "Can Zoho Books replace PM software?",
        a: "Usually no for trust ledgers—pair Zoho Books for management company accounting with a PM system for tenant and owner trust workflows.",
      },
    ],
  },
  {
    useCase: "pest-control",
    title: "Best Accounting Software for Pest Control Businesses (2026)",
    subtitle:
      "Recurring service plans, route density, and chemical COGS need accounting aligned with subscription-style revenue.",
    hubTeaser: "Recurring billing, route-friendly expense tagging, and simple multi-crew payroll handoffs.",
    introParagraph:
      "Pest control operators sell annual plans and route-based service with steady recurring revenue and periodic chemical spend. Accounting should automate recurring charges, separate COGS for treatments, and integrate with payroll as techs scale. We favor invoicing-friendly tools plus QuickBooks when job dimensions and payroll complexity grow.",
    picks: [
      {
        slug: "freshbooks",
        badge: "Best for recurring service billing",
        description:
          "Recurring invoices and client reminders when residential plans renew on predictable cadences.",
        rowBestFor: "Plan renewals + pay links",
        why: "FreshBooks maps well to pest control’s subscription-style customer relationships: renewals, auto-pay, and quick adjustments when coverage changes. Trial sales tax on bundled treatment SKUs if you itemize chemicals.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best operational scale",
        description:
          "Classes, payroll, and inventory-adjacent tracking when you add commercial routes and multiple branches.",
        rowBestFor: "Growing pest control ops",
        why: "QuickBooks Online takes over when pest control companies add W-2 techs across branches, equipment loans, and detailed COGS by product line. Integrate with route software exports carefully—map clearing accounts to avoid duplicate revenue.",
      },
      {
        slug: "zoho-books",
        badge: "Best value automation",
        description:
          "Workflow automation and client portals at lower cost—strong with Zoho CRM for sales-to-cash handoff.",
        rowBestFor: "Automation-heavy pest control",
        why: "Zoho Books helps pest control brands automating plan upsells and cross-sells inside Zoho. Use recurring profiles and webhook-style integrations cautiously—reconcile automated invoices to actual service delivery.",
      },
    ],
    editorialGuidance: [
      E("Chemical inventory", "Decide if chemicals are expensed immediately or inventoried—stay consistent for margin math."),
      E("Route credits", "Document credit memo patterns when callbacks are free revisits so revenue isn’t double-counted."),
    ],
    faqItems: [
      {
        q: "What accounting software is best for pest control?",
        a: "FreshBooks for recurring residential plans; QuickBooks Online when payroll and multi-location complexity grow; Zoho Books for automation inside the Zoho suite.",
      },
      {
        q: "Should pest control use FreshBooks or QuickBooks?",
        a: "Start FreshBooks if renewals and simple COGS dominate; move to QuickBooks when you need deeper classes, payroll, and lender-ready reporting.",
      },
    ],
  },
  {
    useCase: "pool-service",
    title: "Best Accounting Software for Pool Service Companies (2026)",
    subtitle:
      "Weekly routes, chemical COGS, and equipment repair tickets need accounting that handles recurring + project revenue.",
    hubTeaser: "Recurring route billing, repair-job tagging, and chemical expense clarity.",
    introParagraph:
      "Pool service blends route subscriptions with repair projects and seasonal open/close packages. Accounting should automate recurring customer billing, let you tag non-route jobs separately, and keep chemical and equipment COGS visible. These picks balance service-business invoicing with structured projects as you add retail chemicals or renovation upsells.",
    picks: [
      {
        slug: "freshbooks",
        badge: "Best route + repair mix",
        description:
          "Recurring invoices for weekly service plus project-style billing for equipment jobs and openings.",
        rowBestFor: "Service + repair billing",
        why: "FreshBooks helps pool operators bill recurring routes while still running larger repair tickets as projects. Test how you handle mid-season chemical price spikes passed through to customers.",
      },
      {
        slug: "zoho-books",
        badge: "Best Zoho-integrated ops",
        description:
          "Automation and projects when CRM or FSM already lives in Zoho and you want unified customer records.",
        rowBestFor: "Zoho ecosystem pools",
        why: "Zoho Books fits pool companies consolidating sales, service, and accounting inside Zoho. Automate monthly billing but reconcile route skips and vacation credits so AR stays honest.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best payroll + scale",
        description:
          "Classes and payroll integrations when you add multiple trucks, retail chemical sales, and seasonal staff spikes.",
        rowBestFor: "Scaling pool businesses",
        why: "QuickBooks Online supports pool operators adding retail SKUs, equipment debt, and multi-state payroll complexity. Map classes to route vs retail vs construction-style remodel upsells if you diversify revenue.",
      },
    ],
    editorialGuidance: [
      E("Seasonal hiring", "Align 1099 vs W-2 route helpers with documented policies—software only records what you configure."),
      E("Retail add-ons", "If you sell chemicals at counter margin, separate SKUs from labor-only route lines."),
    ],
    faqItems: [
      {
        q: "What accounting app should pool service companies use?",
        a: "FreshBooks for recurring routes with repair projects; Zoho Books inside a Zoho ops stack; QuickBooks Online when payroll and retail complexity grow.",
      },
      {
        q: "How should pool companies track chemicals?",
        a: "Expense or inventory them consistently; tag COGS to routes or jobs so margin reflects true chemical usage.",
      },
    ],
  },
  {
    useCase: "junk-removal",
    title: "Best Accounting Software for Junk Removal Businesses (2026)",
    subtitle:
      "Load-based pricing, dump fees, and truck payroll need simple accounting that survives high transaction volume.",
    hubTeaser: "Fast invoicing, dump-fee expense tagging, and low-cost starts for truck-heavy ops.",
    introParagraph:
      "Junk removal businesses price by load or truck time, pay dump fees frequently, and often run lean back offices. Accounting should make it easy to invoice or receipt jobs quickly, categorize disposal and fuel consistently, and scale to payroll when you add crews. We start with free and simple tools, then QuickBooks when lenders or multi-truck complexity demand structure.",
    picks: [
      {
        slug: "wave",
        badge: "Best free lean start",
        description:
          "Free invoicing and accounting for owner-operators running trucks with minimal admin time.",
        rowBestFor: "Single-truck start",
        why: "Wave fits junk removal founders who need bank feeds and basic P&L before they hire bookkeepers. Model card processing fees on on-site payments; they matter on ticket averages.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best multi-truck discipline",
        description:
          "Classes for trucks or territories, payroll, and integrations when you scale beyond one crew.",
        rowBestFor: "Fleet junk removal",
        why: "QuickBooks Online helps junk haulers adding trucks, dump-fee reimbursements, and W-2 helpers with consistent job tagging. Reconcile cash tips or split payments if CSRs collect in the field.",
      },
      {
        slug: "freshbooks",
        badge: "Best fast mobile invoicing",
        description:
          "Quick estimates-to-invoice when you quote on-site and want pay-before-leave workflows.",
        rowBestFor: "On-site sales flow",
        why: "FreshBooks supports junk removal teams that close jobs on the driveway with emailed receipts and card pay links. Use expense categories for dump and fuel; review monthly to catch miscoded transfers.",
      },
    ],
    editorialGuidance: [
      E("Disposal fees", "Tag dump tickets to jobs or trucks so you see true margin per market."),
      E("Transfer station accounts", "If you use house accounts at dumps, reconcile statements weekly."),
    ],
    faqItems: [
      {
        q: "Can junk removal use Wave?",
        a: "Yes for early-stage truck ops; move to QuickBooks or FreshBooks when payroll, multiple trucks, or lender reporting requires richer classes.",
      },
      {
        q: "FreshBooks or QuickBooks for junk removal?",
        a: "FreshBooks when on-site invoicing speed dominates; QuickBooks when payroll, multiple entities, or detailed truck P&L matters.",
      },
    ],
  },
  {
    useCase: "moving",
    title: "Best Accounting Software for Moving Companies (2026)",
    subtitle:
      "Deposits, weight-based tariffs, and seasonal labor spikes need accounting that tracks jobs without retail complexity.",
    hubTeaser: "Deposit invoicing, job-based costs, and payroll spikes around month-end.",
    introParagraph:
      "Moving companies collect deposits, settle balances on delivery, and surge seasonal labor. Accounting should connect job revenue to labor, fuel, and claims reserves without pretending you’re a retailer. These picks emphasize invoicing and deposits first, with QuickBooks when interstate rules, storage revenue, and payroll complexity stack up.",
    picks: [
      {
        slug: "freshbooks",
        badge: "Best deposit-to-final billing",
        description:
          "Estimates, deposits, and final invoices with client-friendly pay links for household moves.",
        rowBestFor: "Household move billing",
        why: "FreshBooks matches how movers sell: binding/non-binding estimates, deposits, and finals with card and ACH options. Trial how you record cancelled jobs and deposit forfeitures consistently.",
      },
      {
        slug: "quickbooks-online",
        badge: "Best multi-revenue movers",
        description:
          "Classes for moving vs storage, payroll integrations, and reporting when you add warehouses and fleets.",
        rowBestFor: "Moving + storage scale",
        why: "QuickBooks Online supports movers adding storage rent, multiple locations, and larger payroll. Map revenue types clearly so P&L separates linehaul, local, and warehouse rent.",
      },
      {
        slug: "xero",
        badge: "Best collaborative finance",
        description:
          "Purchase approvals and multi-user workflows when owners, dispatch, and outsourced accountants share the books.",
        rowBestFor: "Distributed mover finance",
        why: "Xero helps moving companies with fractional CFOs who want modern payables and attachments for claims documentation. Validate sales tax on packing materials if you retail supplies.",
      },
    ],
    editorialGuidance: [
      E("Interstate vs intrastate", "Regulatory complexity lives outside accounting—still tag revenue by authority for internal KPIs."),
      E("Claims reserves", "Discuss contingency accruals with your CPA; don’t hide claims exposure in uncategorized expenses."),
    ],
    faqItems: [
      {
        q: "What accounting software do movers use?",
        a: "FreshBooks for deposit-heavy household sales funnels; QuickBooks Online when storage and payroll complexity grow; Xero for collaborative payables with outsourced finance.",
      },
      {
        q: "Should movers use job costing?",
        a: "Tag jobs at least for revenue, labor, and fuel so you know which lanes and crews pay for themselves.",
      },
    ],
  },
];

export const ACCOUNTING_TRADE_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = Object.fromEntries(
  TRADE_CONFIGS.map((cfg) => [cfg.useCase, buildAccountingTradeProps(cfg)])
);

export const ACCOUNTING_TRADE_HUB_ORDER = [
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

export type AccountingTradeBestForHubCard = { label: string; href: string; description: string };

/** Hub card labels use each trade page `title` (same H1 as /accounting/best-for/[scenario]). */
export function getAccountingTradeBestForHubCards(): AccountingTradeBestForHubCard[] {
  return ACCOUNTING_TRADE_HUB_ORDER.map((slug) => {
    const cfg = TRADE_CONFIGS.find((c) => c.useCase === slug);
    if (!cfg) throw new Error(`Missing accounting trade config: ${slug}`);
    return {
      label: cfg.title,
      href: getAccountingBestForUrl(slug),
      description: cfg.hubTeaser,
    };
  });
}

const ACCOUNTING_TRADE_NAV_LABELS: Record<(typeof ACCOUNTING_TRADE_HUB_ORDER)[number], string> = {
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

export const ACCOUNTING_TRADE_SCENARIO_NAV_LINKS: { label: string; href: string }[] = ACCOUNTING_TRADE_HUB_ORDER.map((slug) => ({
  label: ACCOUNTING_TRADE_NAV_LABELS[slug],
  href: getAccountingBestForUrl(slug),
}));
