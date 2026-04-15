/**
 * CRM best-for pages by trade / company type.
 * Featured triples vary by trade; products map to canonical CRM reviews.
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
import { getCrmCompareUrl, getCrmReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/crm", label: "CRM" };
const SEE_ALSO = {
  roundupLabel: "best CRM software",
  roundupHref: "/crm/best-crm-software",
  compareLabel: "CRM software comparisons",
  compareHref: "/crm/compare",
};

const CRM_PRODUCT_CORE = {
  hubspot: {
    name: "HubSpot",
    logoSrc: "/Logos/hubspot.jpeg",
    rating: "4.6",
    startingPrice: "Free tier",
    visitUrl: "https://www.hubspot.com",
    defaultStandout: "Free CRM, marketing-sales alignment",
  },
  salesforce: {
    name: "Salesforce",
    logoSrc: "/Logos/salesforce.jpeg",
    rating: "4.5",
    startingPrice: "From $25/user/mo",
    visitUrl: "https://www.salesforce.com",
    defaultStandout: "Customization, scale, AppExchange",
  },
  "zoho-crm": {
    name: "Zoho CRM",
    logoSrc: "/Logos/zoho.png",
    rating: "4.4",
    startingPrice: "Free tier",
    visitUrl: "https://www.zoho.com/crm",
    defaultStandout: "Value, Zoho suite integration",
  },
  pipedrive: {
    name: "Pipedrive",
    logoSrc: "/Logos/pipedrive.jpeg",
    rating: "4.5",
    startingPrice: "From $14.90/user/mo",
    visitUrl: "https://www.pipedrive.com",
    defaultStandout: "Pipeline-first selling",
  },
  "monday-crm": {
    name: "Monday",
    logoSrc: "/Logos/monday.jpeg",
    rating: "4.4",
    startingPrice: "From $10/user/mo",
    visitUrl: "https://monday.com",
    defaultStandout: "Custom boards and workflows",
  },
  freshsales: {
    name: "Freshsales",
    logoSrc: "/Logos/freshsales.jpeg",
    rating: "4.3",
    startingPrice: "From $15/user/mo",
    visitUrl: "https://www.freshworks.com/crm/sales",
    defaultStandout: "AI, phone and email in one",
  },
  copper: {
    name: "Copper",
    logoSrc: "/Logos/copper.png",
    rating: "4.4",
    startingPrice: "From $29/user/mo",
    visitUrl: "https://www.copper.com",
    defaultStandout: "Google Workspace–native CRM",
  },
  close: {
    name: "Close",
    logoSrc: "/Logos/close.jpeg",
    rating: "4.5",
    startingPrice: "From $49/user/mo",
    visitUrl: "https://www.close.com",
    defaultStandout: "Built-in calling and pipeline",
  },
  keap: {
    name: "Keap",
    logoSrc: "/Logos/keap.jpeg",
    rating: "4.3",
    startingPrice: "From $159/mo",
    visitUrl: "https://keap.com",
    defaultStandout: "CRM plus marketing automation",
  },
} as const;

type CrmProductSlug = keyof typeof CRM_PRODUCT_CORE;

type ProductPick = {
  slug: CrmProductSlug;
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

const CRM_COMPARISONS: { label: string; compareSlug: string; products: [CrmProductSlug, CrmProductSlug] }[] = [
  { label: "HubSpot vs Salesforce", compareSlug: "hubspot-vs-salesforce", products: ["hubspot", "salesforce"] },
  { label: "HubSpot vs Zoho CRM", compareSlug: "hubspot-vs-zoho-crm", products: ["hubspot", "zoho-crm"] },
  { label: "Zoho CRM vs Pipedrive", compareSlug: "zoho-crm-vs-pipedrive", products: ["zoho-crm", "pipedrive"] },
  { label: "Monday vs HubSpot", compareSlug: "monday-crm-vs-hubspot", products: ["monday-crm", "hubspot"] },
  { label: "Freshsales vs Pipedrive", compareSlug: "freshsales-vs-pipedrive", products: ["freshsales", "pipedrive"] },
  { label: "HubSpot vs Pipedrive", compareSlug: "hubspot-vs-pipedrive", products: ["hubspot", "pipedrive"] },
  { label: "Salesforce vs Zoho CRM", compareSlug: "salesforce-vs-zoho-crm", products: ["salesforce", "zoho-crm"] },
  { label: "Close vs Pipedrive", compareSlug: "close-vs-pipedrive", products: ["close", "pipedrive"] },
  { label: "Copper vs HubSpot", compareSlug: "copper-vs-hubspot", products: ["copper", "hubspot"] },
  { label: "Keap vs HubSpot", compareSlug: "keap-vs-hubspot", products: ["keap", "hubspot"] },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
  { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
];

function buildRelatedComparisons(featured: CrmProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = CRM_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getCrmCompareUrl(c.compareSlug), score };
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

const REVIEW_FILL_ORDER: CrmProductSlug[] = [
  "hubspot",
  "salesforce",
  "zoho-crm",
  "pipedrive",
  "monday-crm",
  "freshsales",
  "copper",
  "close",
  "keap",
];

function buildRelatedReviews(featured: CrmProductSlug[]): BestForReviewLink[] {
  const ordered: CrmProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: CRM_PRODUCT_CORE[s].name,
    href: getCrmReviewUrl(s),
  }));
}

const COMMON_GUIDES: BestForGuideLink[] = [
  { label: "How to choose CRM software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "CRM for small business", href: "/crm/guides/crm-for-small-business" },
];

function buildTradeProps(p: TradeConfig): BestForTemplateProps {
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = CRM_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getCrmReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = CRM_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getCrmReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: CRM_PRODUCT_CORE[pick.slug].name,
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
    topPicksSub: "Our top CRM picks for this business type.",
    editorialSub: "What to look for when you choose CRM software for your operation.",
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

export const HVAC_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "hvac",
  title: "Best CRM Software for HVAC Businesses (2026)",
  subtitle:
    "Compare CRM tools for HVAC companies: estimate-to-install pipeline, membership renewals, seasonal marketing, and clear follow-up when leads spike in summer or winter.",
  introParagraph:
    "HVAC businesses live on repeat service, equipment replacements, and membership programs—not one-off retail carts. A good CRM centralizes leads from ads, referrals, and missed calls; tracks estimates and follow-ups; and helps the office nurture tune-up and replacement opportunities without losing context in spreadsheets.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best all-in-one for HVAC growth",
      description:
        "Free CRM core plus optional Marketing Hub for seasonal campaigns, forms, and email—when you want one system for lead capture and pipeline.",
      rowBestFor: "Marketing + pipeline",
      why: "HubSpot fits HVAC owners who want a credible free CRM for contacts and deals and room to add landing pages, email, and automation when you are ready to invest in demand. During a trial, import real leads from the last month, build two pipeline stages you actually use (for example estimate sent and follow-up), and log a week of calls and emails. Test mobile access for managers who sell from the truck. Before paying, map which Marketing or Sales Hub features you need for membership pushes versus one-off blasts—HubSpot shines when marketing and sales share one timeline.",
    },
    {
      slug: "pipedrive",
      badge: "Best pipeline discipline for estimates",
      description:
        "Activity-based selling with a clean deal view—strong when your bottleneck is quote follow-up, not fancy landing pages.",
      rowBestFor: "Quote follow-up",
      why: "Pipedrive is the honesty pick when HVAC teams need fewer dropped estimates and clearer next steps—not another marketing suite. Deal stages map cleanly to estimate sent, follow-up scheduled, and won/lost; reminders keep techs and CSRs from ghosting warm opportunities. Trial with your busiest estimator: log activities for real jobs for two weeks and watch where deals stall. Pair Pipedrive with your existing website or call-tracking tools if you already capture leads elsewhere. It trades marketing breadth for pipeline clarity, which many HVAC shops need first.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value and Zoho ecosystem",
      description:
        "Full CRM at lower cost with workflows and blueprints—strong if you also run Zoho Books or want tight budget control.",
      rowBestFor: "Value & automation",
      why: "Zoho CRM delivers strong capability per dollar and integrates with Zoho Books, Mail, and other suite apps when you want accounting adjacent to sales. Blueprints and workflow rules help standardize estimate follow-up and membership renewal touches without custom development. During evaluation, configure one automation (for example a task when a deal sits in “estimate sent” too long) and run a few test deals through it. Check email logging with your provider so field notes land on the record. Zoho wins when you want CRM depth without HubSpot-level spend.",
    },
  ],
  editorialGuidance: [
    E("Lead sources in one place", "Tag inbound as Google LSA, referral, or repeat so you know what to scale."),
    E("Estimate and follow-up cadence", "Use tasks or sequences so “we’ll call back” does not evaporate in busy season."),
    E("Membership and equipment opportunities", "Custom fields or deal types for agreement renewals and aging equipment help CSRs prioritize."),
    E("Field service vs CRM", "Dispatch and routing live in FSM; CRM owns pipeline, quotes, and marketing follow-up—integrate or export cleanly."),
  ],
  faqItems: [
    {
      q: "What is the best CRM software for HVAC businesses?",
      a: "We shortlist HubSpot for marketing and pipeline in one platform, Pipedrive for strict estimate follow-up and activity-based selling, and Zoho CRM for value and workflow depth—especially alongside other Zoho apps.",
    },
    {
      q: "Should HVAC companies use CRM or field service software first?",
      a: "Field service software handles dispatch and trucks; CRM handles leads, estimates, and nurture. Many growing HVAC businesses use both, with clear rules for when a lead becomes a job in FSM.",
    },
    {
      q: "Is there a free CRM for HVAC contractors?",
      a: "HubSpot and Zoho CRM both offer free CRM tiers with contacts and deals—enough to pilot pipeline discipline before you pay for automation or marketing add-ons.",
    },
  ],
  extraGuides: [{ label: "Best field service software for HVAC", href: "/field-service/best-for/hvac" }],
});

export const PLUMBING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "plumbing",
  title: "Best CRM Software for Plumbing Companies (2026)",
  subtitle:
    "Compare CRM tools for plumbers: emergency and planned leads, estimate tracking, referral follow-up, and clear handoff between CSR and field teams.",
  introParagraph:
    "Plumbing companies win on speed to the phone and consistency on follow-up for bigger jobs. CRM software helps you capture every lead—especially after hours—log the scope notes, and move opportunities through estimate and scheduling without losing details between dispatch and the crew that actually runs the job.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best for marketing and referrals",
      description:
        "Capture web and paid leads with forms; keep referral partners and commercial contacts in one place with deal history.",
      rowBestFor: "Inbound + referrals",
      why: "HubSpot helps plumbing brands that invest in local SEO, LSAs, or partner referrals and want one CRM for contacts, deals, and optional email nurture. Use the free tier to consolidate leads that used to live in voicemail and text threads. During a trial, connect your main email, build a simple pipeline for service vs replumb/repipe, and add properties for job address and referral source. Upgrade when you need sequences for commercial follow-up or marketing landing pages—not on day one.",
    },
    {
      slug: "freshsales",
      badge: "Best for call-heavy sales",
      description:
        "Built-in phone and email context on the record—useful when estimators and CSRs live on the phone.",
      rowBestFor: "Phone-first selling",
      why: "Freshsales suits plumbing sales teams that want calling, email, and pipeline in one place—helpful when you qualify emergencies vs booked work quickly. AI-assisted lead scoring and timelines reduce hunting through inboxes. Trial with two reps logging real calls for a week; confirm the mobile experience if estimators work from trucks. Freshsales is a strong fit when conversation volume is high and you need CRM to reflect it.",
    },
    {
      slug: "pipedrive",
      badge: "Best focused pipeline",
      description:
        "Simple stages and activity reminders so commercial bids and larger residential jobs do not stall after the first visit.",
      rowBestFor: "Deal discipline",
      why: "Pipedrive keeps larger opportunities—commercial accounts, repipes, water heater programs—moving with clear stages and next activities. It is lighter than full marketing suites, which fits shops that already generate enough demand but leak revenue on follow-through. Map your real stages (qualified, estimate, scheduled, won) and resist over-building. Pipedrive earns its place when your problem is execution on the pipeline, not lead volume.",
    },
  ],
  editorialGuidance: [
    E("Emergency vs project deals", "Separate pipelines or deal types so CSRs do not treat a burst pipe like a multi-day commercial bid."),
    E("Capture job context early", "Notes on access, photos, and scope reduce estimator callbacks and protect margin."),
    E("Referral and partner tracking", "Companies and property managers need relationship history, not just a phone number."),
    E("Integrate with scheduling", "Push won work to your dispatch or FSM tool with clear IDs so crews see CRM as helpful, not duplicate entry."),
  ],
  faqItems: [
    {
      q: "What CRM do plumbing companies use?",
      a: "Many evaluate HubSpot for inbound marketing and consolidated leads, Freshsales when phone and email volume drives the sale, and Pipedrive for strict pipeline stages on larger jobs.",
    },
    {
      q: "Can CRM help with after-hours plumbing leads?",
      a: "Yes—centralize leads from call tracking, forms, and chat so nothing sits in a single CSR’s inbox. Pair CRM with answering services or auto-responders for speed-to-lead.",
    },
    {
      q: "Free CRM for small plumbing shops?",
      a: "HubSpot’s free CRM is a common starting point; Zoho CRM also offers a free tier. Graduate to paid tiers when you need automation, more users, or integrated marketing.",
    },
  ],
  extraGuides: [{ label: "Best field service software for plumbing", href: "/field-service/best-for/plumbing" }],
});

export const ELECTRICIANS_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "electricians",
  title: "Best CRM Software for Electricians (2026)",
  subtitle:
    "Compare CRM tools for electrical contractors: commercial bids, service upsells, panel and EV charger opportunities, and follow-up that survives busy schedules.",
  introParagraph:
    "Electrical contractors often sell complex scopes—panel upgrades, commercial fit-outs, EV charger packages—where the sales cycle outlasts a single truck roll. CRM software gives estimators and project managers a shared record of quotes, stakeholders, and next steps so opportunities do not die when schedules get tight.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best default for growing electrical shops",
      description:
        "Contact and company records for GCs and property owners; optional marketing when you pursue commercial or builder programs.",
      rowBestFor: "B2B + mixed workflow",
      why: "HubSpot works well for electrical contractors balancing residential service with commercial or builder work—one place for companies, contacts, and deal history. Start with free CRM for pipeline and activities; add hubs when you run email campaigns to builders or facility managers. Trial by tracking five active bids with real stakeholders and attachment notes (single-line diagrams, load calcs). HubSpot fits when you want adoption-friendly software that still scales.",
    },
    {
      slug: "monday-crm",
      badge: "Best customizable boards",
      description:
        "Shape pipelines by job type—service, small projects, commercial—when one linear funnel does not fit.",
      rowBestFor: "Multi-type sales",
      why: "Monday CRM suits electrical teams that sell several motion—same-day service, quoted projects, and ongoing commercial accounts—and want boards or columns that reflect reality. Automations can nudge stalled estimates or handoffs between sales and operations. During evaluation, mirror one board per region or vertical and keep automations minimal until the team uses the basics daily. Monday shines when your process is visual and varies by customer segment.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value and depth",
      description:
        "Workflows and related lists for accounts with many sites—helpful for commercial electrical and multi-location customers.",
      rowBestFor: "Accounts & workflows",
      why: "Zoho CRM offers strong account hierarchy and automation value for electrical contractors managing commercial relationships with multiple job sites. If you already use Zoho Books or other Zoho apps, shared data reduces double entry. Pilot blueprint rules for handoffs between inside sales and estimators. Zoho is the pick when you need CRM horsepower on a tighter budget than Salesforce.",
    },
  ],
  editorialGuidance: [
    E("Commercial vs residential context", "Use company records and deal properties so everyone sees voltage, AHJ, and billing requirements."),
    E("Estimator workload", "Tasks and reminders replace sticky notes when bids stack up before inspection deadlines."),
    E("Change order and upsell tracking", "Optional deals or line items for panel upgrades, surge, and EV add-ons keep margin visible."),
    E("Handoff to project or service", "Clear won/lost reasons improve marketing and estimator coaching."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for electrical contractors?",
      a: "We recommend HubSpot for a scalable default with strong SMB adoption, Monday when you need flexible boards for multiple sales motions, and Zoho CRM for workflow depth and value—especially with other Zoho products.",
    },
    {
      q: "Do electricians need CRM if they use estimating software?",
      a: "Estimating tools price jobs; CRM tracks relationships, follow-ups, and multi-touch bids. Many teams connect both or at least link opportunity IDs in notes.",
    },
    {
      q: "Salesforce vs HubSpot for electrical?",
      a: "Salesforce wins at enterprise customization; HubSpot wins for faster setup and a generous free tier. Most independent electrical contractors start with HubSpot or Zoho unless they already employ a Salesforce admin.",
    },
  ],
  extraGuides: [{ label: "Best field service software for electricians", href: "/field-service/best-for/electricians" }],
});

export const PAINTING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "painting",
  title: "Best CRM Software for Painting Contractors (2026)",
  subtitle:
    "Compare CRM tools for painting companies: production calendars tied to sales, repeat and referral programs, and follow-up that keeps crews booked weeks out.",
  introParagraph:
    "Painting is production-heavy: you need steady booked work, clear scope on every estimate, and follow-up for color delays or add-ons. CRM software helps sales reps and owners track proposals, deposits, and next actions so the pipeline does not go quiet when crews are on-site all week.",
  picks: [
    {
      slug: "pipedrive",
      badge: "Best pipeline for booked-out crews",
      description:
        "Stages from lead to booked to in production help you see where estimates stall before the schedule gap appears.",
      rowBestFor: "Sales cadence",
      why: "Pipedrive fits painting contractors who need ruthless clarity on which estimates are still live and which need a nudge—without heavy marketing overhead. Color-code or filter by interior vs exterior, commercial vs residential, or crew. Trial during a busy season week and insist reps log activities daily. Pipedrive wins when sales discipline matters more than landing page builders.",
    },
    {
      slug: "monday-crm",
      badge: "Best visual ops + sales alignment",
      description:
        "Boards that can reflect production stages when you want sales and ops looking at similar language.",
      rowBestFor: "Visual workflows",
      why: "Monday CRM helps painting companies that want CRM fields and boards to mirror how jobs move—sold, materials ordered, start date, punch—especially if sales sits next to production in the same tool ecosystem. Keep CRM stages for presale; avoid duplicating full production scheduling unless your team will maintain it. Monday suits owners who think visually and want automations when cards sit too long in one column.",
    },
    {
      slug: "hubspot",
      badge: "Best for referrals and email nurture",
      description:
        "Lists, email, and forms for referral partners, designers, and past customers when repeat work drives margin.",
      rowBestFor: "Referrals & marketing",
      why: "HubSpot helps painting brands that lean on referrals, designers, and seasonal campaigns to fill the pipeline. Use CRM to segment past customers for touch-ups and exteriors, and add Marketing Hub when you are ready for structured email. Import a segment of last year’s customers and send one honest, helpful campaign during a trial. HubSpot fits when growth is as much about nurture as knocking doors.",
    },
  ],
  editorialGuidance: [
    E("Scope and color hold tracking", "Deal notes for selections and customer delays reduce finger-pointing later."),
    E("Deposit and change order moments", "Tasks tied to payment milestones keep cash flow aligned with production."),
    E("Referral partner visibility", "Know which designers or builders send work so you reciprocate."),
    E("Keep CRM pre-production", "Let production scheduling live in PM or FSM; CRM should stay focused on selling and customer communication."),
  ],
  faqItems: [
    {
      q: "What CRM should a painting company use?",
      a: "We like Pipedrive for estimate follow-up discipline, Monday for visual workflows that match how you sell, and HubSpot when referrals and email marketing are central to staying booked.",
    },
    {
      q: "Can CRM integrate with painting estimating tools?",
      a: "Many teams integrate via Zapier or native connectors; at minimum, link estimate PDFs and totals in deal notes for context.",
    },
    {
      q: "Do small painting crews need CRM?",
      a: "If one person sells and schedules everything, spreadsheets can work—until you miss follow-ups during peak season. Lightweight CRM pays for itself when estimates slip through cracks.",
    },
  ],
  extraGuides: [{ label: "Best scheduling software for painting contractors", href: "/scheduling/best-for/painting" }],
});

export const ROOFING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "roofing",
  title: "Best CRM Software for Roofing Companies (2026)",
  subtitle:
    "Compare CRM tools for roofers: storm and retail leads, supplement documentation handoffs, and follow-up sequences when homeowners need time to decide.",
  introParagraph:
    "Roofing sales are often high-ticket and emotionally driven—storms create spikes, and retail jobs need trust and financing clarity. CRM software helps you capture every inspection lead, document what was discussed, and run structured follow-up so reps do not rely on memory when three neighborhoods go active at once.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best for inbound and partner leads",
      description:
        "Forms, ads, and email in one ecosystem when you run storm campaigns, retail promos, or contractor partnerships.",
      rowBestFor: "Demand generation",
      why: "HubSpot supports roofing companies that invest heavily in lead generation—Google, LSAs, canvassing imports, or builder programs—and need CRM plus marketing tooling in one stack. Use deal properties for insurance vs cash, adjuster status, and supplement stage. Trial with a single territory or rep to keep data clean. HubSpot fits when marketing and sales must share one truth during volatile weather windows.",
    },
    {
      slug: "keap",
      badge: "Best for long-cycle follow-up",
      description:
        "CRM with marketing automation for multi-touch follow-up when homeowners pause after the inspection.",
      rowBestFor: "Automated nurture",
      why: "Keap combines CRM with campaigns, tags, and automation—useful when roofing reps need persistent, respectful follow-up after inspections or partial approvals. Build a simple sequence for “deciding later” leads rather than a complex enterprise journey. Trial one offer or territory; measure reply rates and appointments booked. Keap fits owner-led sales orgs that will invest in setup to stop ghosting money.",
    },
    {
      slug: "pipedrive",
      badge: "Best disciplined pipeline",
      description:
        "Clear stages for inspection, supplement, signed, and production handoff—great when reps manage many open opportunities.",
      rowBestFor: "Stage clarity",
      why: "Pipedrive keeps roofing sales teams honest about where each deal sits—especially when supplements and production scheduling add delays. Activity reminders reduce “I thought someone else called them” moments. Map stages to how you actually sell; avoid twenty micro-stages nobody updates. Pipedrive shines when volume is high and the primary leak is follow-through, not lead gen.",
    },
  ],
  editorialGuidance: [
    E("Storm vs retail segmentation", "Tags or pipelines separate cataclysm workflows from retail referrals—different speed and messaging."),
    E("Documentation to production", "Attach photos, measurements, and adjuster notes to the deal for handoff."),
    E("Financing and decision timelines", "Tasks for financing follow-up reduce silent losses on approved buyers."),
    E("Canvassing and referral sources", "Track source and rep to know what to scale after the storm passes."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for roofing companies?",
      a: "We shortlist HubSpot when marketing and CRM should stay tightly aligned, Keap when automated follow-up after inspections is the gap, and Pipedrive when deal stages and activities need discipline at high volume.",
    },
    {
      q: "Should roofers use industry-specific CRM only?",
      a: "Specialized roofing platforms exist; general CRM still wins for flexible pipelines, integrations, and marketing when you want one hub for leads and follow-up.",
    },
    {
      q: "Does CRM help with insurance supplements?",
      a: "CRM tracks stakeholder tasks and dates; supplement detail often lives in estimating or supplement tools—link or attach for context.",
    },
  ],
  extraGuides: [{ label: "Best field service software for roofing", href: "/field-service/best-for/roofing" }],
});

export const GENERAL_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "general-contractors",
  title: "Best CRM Software for General Contractors (2026)",
  subtitle:
    "Compare CRM tools for general contractors: multi-trade bids, owner and architect relationships, long sales cycles, and reporting leadership expects.",
  introParagraph:
    "General contractors sell complex projects with multiple stakeholders—owners, architects, subs, and sometimes lenders. CRM software gives your business development team a system of record for opportunities, proposals, and follow-ups instead of scattered email threads and shared drives.",
  picks: [
    {
      slug: "salesforce",
      badge: "Best for complex opportunities",
      description:
        "Accounts, opportunities, and customization depth when you run formal preconstruction and multi-phase pursuits.",
      rowBestFor: "Enterprise-style GC sales",
      why: "Salesforce remains the standard when GC pursuits involve many contacts per account, stage gates, and reporting across regions or business units. Expect admin time or partner help—reward is forecasting and roll-ups leadership trusts. Pilot one division or market with clear stage definitions tied to real gates (budget, LOI, contract). Salesforce fits when deal size and complexity justify dedicated CRM administration.",
    },
    {
      slug: "hubspot",
      badge: "Best SMB-friendly all-in-one",
      description:
        "Faster setup with marketing and sales alignment—strong for regional GCs who want CRM without a full-time admin.",
      rowBestFor: "Regional GC growth",
      why: "HubSpot gives growing general contractors a modern CRM with optional marketing tools and easier adoption than Salesforce for many teams. Use companies and deals for pursuits; add custom properties for project type, bond requirements, and GC/CM role. Trial with your top ten active pursuits and enforce weekly activity logging. HubSpot fits when you want professional pipeline management without enterprise overhead—knowing you may outgrow simpler reporting eventually.",
    },
    {
      slug: "monday-crm",
      badge: "Best flexible pursuit boards",
      description:
        "Visual pipelines for pursuits that do not fit a single linear funnel—design-build, negotiated, hard bid.",
      rowBestFor: "Visual pursuit tracking",
      why: "Monday CRM helps GC teams that want boards reflecting pursuit type, sector, or region—with automations when tasks stall before deadlines. It trades some traditional CRM reporting for flexibility; pair with strong naming discipline. Trial one pursuit type end-to-end. Monday suits BD leads who already think in boards and need stakeholders to see status at a glance.",
    },
  ],
  editorialGuidance: [
    E("Stakeholder maps", "Contact roles for owner rep, architect, CM—avoid one generic “customer” blob."),
    E("Pursuit milestones", "Align deal stages to real bid calendar events, not vanity percentages."),
    E("Handoff to operations", "Clear won process so estimating and project teams get clean packages."),
    E("Reporting for leadership", "Forecast on real next steps, not rep optimism."),
  ],
  faqItems: [
    {
      q: "What CRM should general contractors use?",
      a: "Salesforce when pursuits are large, multi-contact, and need deep customization; HubSpot for faster adoption and marketing alignment at regional scale; Monday for flexible visual pipelines across pursuit types.",
    },
    {
      q: "Is Salesforce overkill for a small GC?",
      a: "Often yes unless you have complex reporting needs or an admin. Many regional GCs succeed with HubSpot or Zoho until pursuit volume forces Salesforce discipline.",
    },
    {
      q: "CRM vs construction bid tools?",
      a: "Bid management software handles plan rooms and takeoffs; CRM tracks relationships and opportunity strategy—complementary, not interchangeable.",
    },
  ],
  extraGuides: [{ label: "Best project management software for general contractors", href: "/project-management/best-for/general-contractors" }],
});

export const LANDSCAPING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "landscaping",
  title: "Best CRM Software for Landscaping Companies (2026)",
  subtitle:
    "Compare CRM tools for landscapers: design-build pipeline, maintenance contract renewals, seasonal upsells, and marketing when spring demand hits.",
  introParagraph:
    "Landscaping businesses blend one-off installs, recurring maintenance, and snow or seasonal add-ons. CRM software helps you track proposals, renewal dates, and customer segments so account managers can prioritize outreach before the busy season—not after crews are already booked.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best for seasonal marketing",
      description:
        "Lists, email, and landing pages when you promote spring cleanups, mulching, or irrigation startups.",
      rowBestFor: "Campaigns + CRM",
      why: "HubSpot supports landscaping companies that rely on repeat customers and seasonal campaigns to level-load revenue. Segment contacts by service line and property type; automate reminders for renewals where appropriate. Trial one market with a simple spring campaign and measure booked estimates. HubSpot fits when marketing and sales should share one database.",
    },
    {
      slug: "pipedrive",
      badge: "Best estimate follow-up",
      description:
        "Keeps design-build and enhancement proposals moving with clear next activities.",
      rowBestFor: "Proposal discipline",
      why: "Pipedrive helps landscape sales reps who juggle many open proposals—hardscape, drainage, lighting—without letting follow-up slip. Activities and calendar integration beat sticky notes when weather delays decisions. Keep stages aligned to how you actually close. Pipedrive wins when the sales team’s problem is execution, not lack of leads.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value for growing crews",
      description:
        "Workflows for renewals and Zoho suite ties if you also use Zoho Books for billing.",
      rowBestFor: "Value & renewals",
      why: "Zoho CRM offers affordable automation for contract renewals, upsells, and territory routing—especially attractive if you already run Zoho Books or Invoice. Blueprints can assign tasks when contracts approach expiration. Trial renewal reminders on a subset of maintenance clients first. Zoho fits budget-conscious operators who still want structured CRM.",
    },
  ],
  editorialGuidance: [
    E("Maintenance contract visibility", "Fields or deals for start date, renewal, and scope reduce surprise churn."),
    E("Design vs maintenance mindset", "Separate pipelines or deal types so designers are not forced into route metrics."),
    E("Crew capacity reality", "Use CRM notes to flag scheduling constraints so sales stops overpromising."),
    E("Upsell timing", "Tag clients for irrigation, lighting, or snow based on property profile."),
  ],
  faqItems: [
    {
      q: "What CRM is best for landscaping companies?",
      a: "HubSpot when seasonal marketing and segmentation matter, Pipedrive for strict follow-up on proposals, and Zoho CRM for value and renewal workflows—often alongside Zoho financial apps.",
    },
    {
      q: "Can CRM track recurring maintenance?",
      a: "Yes—use deals, renewals, or custom objects depending on complexity; integrate with billing or route software for truth on contract status.",
    },
    {
      q: "Free CRM for landscapers?",
      a: "HubSpot and Zoho CRM both offer free tiers to pilot; add paid features when you need automation at scale.",
    },
  ],
  extraGuides: [{ label: "Best field service software for landscaping", href: "/field-service/best-for/landscaping" }],
});

export const CONSTRUCTION_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "construction",
  title: "Best CRM Software for Construction Companies (2026)",
  subtitle:
    "Compare CRM tools for construction firms: pursuit tracking, bid calendars, partner relationships, and handoffs that match how you actually win work.",
  introParagraph:
    "Construction sales cycles can run months and involve estimating, preconstruction, and operations touches. CRM software gives leadership visibility into active pursuits, next actions, and win/loss reasons—so you invest in relationships and markets that actually close.",
  picks: [
    {
      slug: "monday-crm",
      badge: "Best configurable pursuit boards",
      description:
        "Adapt columns to sector, project size, or JV partner—helpful when every pursuit looks different.",
      rowBestFor: "Flexible pursuits",
      why: "Monday CRM suits construction business developers who need visual pipelines that vary by vertical—commercial, multifamily, public—without forcing one rigid funnel. Automations can flag stalled pursuits before bid week. Governance matters: name deals consistently so reporting stays trustworthy. Monday fits teams that value flexibility and will maintain it.",
    },
    {
      slug: "salesforce",
      badge: "Best for multi-office construction orgs",
      description:
        "Deep customization and reporting when pursuits span regions and you need forecast discipline.",
      rowBestFor: "Scale & reporting",
      why: "Salesforce fits construction enterprises that need account hierarchies, opportunity splits, and executive forecasting—with AppExchange options for construction-specific add-ons. Budget for implementation and ongoing admin. Pilot one region with clean stage definitions. Salesforce wins when inaccuracy in the pipeline is more expensive than license cost.",
    },
    {
      slug: "hubspot",
      badge: "Best approachable all-in-one",
      description:
        "Companies, deals, and optional marketing for construction firms growing BD without a full RevOps team.",
      rowBestFor: "Growing BD teams",
      why: "HubSpot helps mid-size construction companies professionalize BD with less friction than enterprise CRM—contacts tied to companies, deal tracking, and email integration out of the box. Add marketing when you pursue inbound or nurture campaigns for developers and owners. Trial with real pursuits and weekly pipeline reviews. HubSpot fits when adoption speed and marketing alignment beat maximum customization.",
    },
  ],
  editorialGuidance: [
    E("Pursuit vs project clarity", "CRM tracks selling; project execution belongs in PM or ERP—link them."),
    E("Bid dates as first-class", "Tasks and reminders around addenda and submission windows reduce misses."),
    E("Partner and JV tracking", "Know who brought the relationship and how splits work before award."),
    E("Win/loss discipline", "Capture reasons when you lose—market, price, incumbency—to guide strategy."),
  ],
  faqItems: [
    {
      q: "What CRM do construction companies use?",
      a: "Monday for flexible visual pipelines, Salesforce for large organizations needing deep reporting, HubSpot for faster adoption and integrated marketing at mid-market scale.",
    },
    {
      q: "CRM vs preconstruction software?",
      a: "Precon tools manage estimates and documents; CRM manages relationships and opportunity strategy. Many firms use both with links between systems.",
    },
    {
      q: "Is Salesforce necessary for construction?",
      a: "Not for everyone—many contractors succeed with HubSpot or Zoho until complexity demands Salesforce-level structure and admin support.",
    },
  ],
  extraGuides: [{ label: "Best field service software for construction", href: "/field-service/best-for/construction" }],
});

export const REMODELING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "remodeling",
  title: "Best CRM Software for Remodeling Businesses (2026)",
  subtitle:
    "Compare CRM tools for remodelers: long design-build cycles, selection milestones, financing follow-up, and nurture when homeowners pause mid-project.",
  introParagraph:
    "Remodeling sales often stretch across design, selections, permits, and financing—far longer than a single visit close. CRM software helps designers and sales reps track conversations, deposits, and next meetings so opportunities do not go cold while homeowners juggle decisions.",
  picks: [
    {
      slug: "keap",
      badge: "Best nurture-heavy cycles",
      description:
        "Combine CRM with automation for long follow-up when clients stall on selections or financing.",
      rowBestFor: "Long-cycle nurture",
      why: "Keap fits remodeling businesses where the sale depends on sustained, helpful follow-up—photos, reminders, educational touches—rather than one-call closes. Tag leads by project type and budget band; build modest automations that feel human. Trial on one service line (for example kitchens) before you automate everything. Keap rewards teams that will invest in thoughtful campaigns, not spam.",
    },
    {
      slug: "hubspot",
      badge: "Best all-in-one sales and marketing",
      description:
        "Email, meetings, and pipeline in one place for design-build firms that market and sell together.",
      rowBestFor: "Design-build alignment",
      why: "HubSpot helps remodelers who run content, seminars, or paid acquisition and need CRM connected to landing pages and email performance. Deal records hold selections status and next meeting dates alongside marketing touch history. Use free CRM first; expand into Marketing Hub when you measure campaigns by booked appointments. HubSpot fits growth-minded remodelers with marketing ambition.",
    },
    {
      slug: "pipedrive",
      badge: "Best simple pipeline discipline",
      description:
        "Clear stages for consultation, design agreement, construction agreement, and start—when you want less software overhead.",
      rowBestFor: "Stage clarity",
      why: "Pipedrive supports remodeling sales teams that want a straightforward pipeline with relentless activity logging—great when your issue is follow-up discipline, not lack of marketing tools. Customize stages to your design-build process and resist bloat. Trial with your strongest rep first; expand when the process sticks. Pipedrive shines when simpler is honestly better.",
    },
  ],
  editorialGuidance: [
    E("Milestone-based tasks", "Selections, permits, and financing each deserve explicit next steps."),
    E("Deposit and contract tracking", "Deal values should reflect signed scope—not optimistic someday totals."),
    E("Designer and sales collaboration", "Shared notes reduce “I thought you told them” moments."),
    E("Pause and resume leads", "Automations or tasks for dormant deals protect Q4 backlog."),
  ],
  faqItems: [
    {
      q: "What CRM is best for remodeling contractors?",
      a: "Keap when long nurture and automation matter, HubSpot when marketing and sales should stay in one system, and Pipedrive when a clean pipeline with strong activity habits solves most of the problem.",
    },
    {
      q: "Do remodelers need CRM if they have project software?",
      a: "Project tools manage execution; CRM manages the sale and client relationship before and during design. Many successful remodelers run both.",
    },
    {
      q: "Can CRM track selections and allowances?",
      a: "Use deal notes, custom fields, or attachments; deep selections sometimes live in design tools—link out for detail.",
    },
  ],
  extraGuides: [{ label: "Best project management software for remodeling", href: "/project-management/best-for/remodeling" }],
});

export const HANDYMAN_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "handyman",
  title: "Best CRM Software for Handyman Businesses (2026)",
  subtitle:
    "Compare CRM tools for handyman services: quick quotes, repeat customers, simple pipelines, and affordable seats for owner-operators adding their first office person.",
  introParagraph:
    "Handyman businesses often run high transaction counts with smaller tickets—CRM should stay lightweight so you actually use it. The right tool captures repeat clients, tracks estimates waiting on approval, and reminds you to follow up without enterprise complexity.",
  picks: [
    {
      slug: "zoho-crm",
      badge: "Best budget-friendly depth",
      description:
        "Low-cost CRM with workflows when you want more than a spreadsheet but refuse bloated software.",
      rowBestFor: "Value",
      why: "Zoho CRM gives handyman businesses serious CRM features—workflows, blueprints, mobile—at a price that fits slim margins. If you add Zoho Books later, customer records stay connected. Start with a minimal pipeline: quoted, scheduled, completed, repeat nurture. Zoho fits owner-operators who want grown-up CRM without paying enterprise rent.",
    },
    {
      slug: "hubspot",
      badge: "Best free tier to start",
      description:
        "Free contacts and deals with easy adoption—ideal when your first hire handles phones and follow-up.",
      rowBestFor: "Easy adoption",
      why: "HubSpot’s free CRM is hard to beat for handyman brands testing whether CRM sticks: log calls and emails, track a handful of deal stages, and graduate to paid only when marketing features matter. Trial with every lead for two weeks—no exceptions. HubSpot wins when simplicity and familiar UX drive adoption.",
    },
    {
      slug: "pipedrive",
      badge: "Best when follow-up is the leak",
      description:
        "Activity reminders for open estimates—minimal setup, high accountability.",
      rowBestFor: "Follow-up focus",
      why: "Pipedrive helps handyman businesses that lose money on forgotten callbacks rather than lack of calls. Keep stages short; focus on next activity dates. It is paid-only, so choose it when you are committed to sales habits. Pipedrive earns its seat cost when discipline, not features, is the bottleneck.",
    },
  ],
  editorialGuidance: [
    E("Keep pipelines short", "Too many stages die on busy days—three to six real stages beat theater."),
    E("Repeat customer tagging", "Know who calls every spring so you market efficiently."),
    E("Photo and note habits", "Attach scope photos to deals to reduce disputes."),
    E("Avoid over-tooling", "If techs will not log data, choose the simplest CRM that owners will use daily."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for a handyman business?",
      a: "Zoho CRM for affordable depth and suite growth, HubSpot for a generous free tier and easy adoption, and Pipedrive when estimate follow-up discipline is the main leak.",
    },
    {
      q: "Do one-person handyman businesses need CRM?",
      a: "Not always—if you remember every quote, you may wait. CRM pays off when volume grows or you add office help.",
    },
    {
      q: "CRM vs handyman scheduling apps?",
      a: "Scheduling handles routes and appointments; CRM handles leads, quotes, and customer history—pair them as you scale.",
    },
  ],
  extraGuides: [{ label: "Best project management software for handyman", href: "/project-management/best-for/handyman" }],
});

export const PROPERTY_MANAGEMENT_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "property-management",
  title: "Best CRM Software for Property Management Companies (2026)",
  subtitle:
    "Compare CRM tools for property managers: owner relationships, new business development, renewals, and portfolios where Google Workspace is often the hub.",
  introParagraph:
    "Property management companies sell management agreements, onboard owners, and renew contracts across hundreds of doors. CRM software complements your property management platform by giving business development and owner relations a clear record of conversations, pursuits, and tasks—especially when leadership wants pipeline visibility beyond the rent roll.",
  picks: [
    {
      slug: "salesforce",
      badge: "Best for portfolio-scale BD",
      description:
        "Accounts, hierarchies, and forecasting when you pursue third-party management across markets.",
      rowBestFor: "Multi-market sales",
      why: "Salesforce fits larger PM firms acquiring doors through third-party management contracts—complex accounts, multiple stakeholders, and executive reporting. Expect implementation help. Pilot one market; define what a qualified opportunity means. Salesforce wins when pipeline accuracy drives capital and hiring decisions.",
    },
    {
      slug: "copper",
      badge: "Best Google Workspace fit",
      description:
        "CRM that lives beside Gmail and Calendar—natural for teams already running Google across the org.",
      rowBestFor: "Google-native",
      why: "Copper reduces tab-switching for property management teams living in Google Workspace—emails and meetings attach to accounts without heroic data entry. Trial with BD reps and owner relations leads first. Copper fits when adoption hinges on Gmail-centric workflows more than marketing automation depth.",
    },
    {
      slug: "hubspot",
      badge: "Best approachable growth stack",
      description:
        "Marketing and sales alignment when you pursue inbound owner leads, referrals, and nurture campaigns.",
      rowBestFor: "Inbound growth",
      why: "HubSpot helps regional PM companies investing in inbound marketing—local SEO, webinars, owner guides—and needing CRM tied to landing pages and email performance. Free CRM can start BD discipline; Marketing Hub scales campaigns. HubSpot fits when growth marketing and sales share KPIs.",
    },
  ],
  editorialGuidance: [
    E("CRM vs PM platform", "Your PM software runs leases and accounting; CRM runs relationships and new business."),
    E("Owner and investor personas", "Segment messaging for individual owners vs institutional clients."),
    E("Renewal and expansion", "Track upsell opportunities across portfolios you already serve."),
    E("Compliance and privacy", "Control sensitive owner data with permissions and audit-friendly processes."),
  ],
  faqItems: [
    {
      q: "What CRM should property management companies use?",
      a: "Salesforce for large, multi-market business development, Copper when Google Workspace adoption is the priority, and HubSpot for inbound-led growth with marketing and sales alignment.",
    },
    {
      q: "Do property managers need CRM if they have AppFolio or Buildium?",
      a: "Those platforms excel at operations; CRM still helps BD, owner relations, and pursuits that span beyond a single property record.",
    },
    {
      q: "Is Copper enough for institutional investors?",
      a: "Copper shines for Google-centric teams; institutional pursuits with heavy forecasting may still land on Salesforce or HubSpot Enterprise—match tool to account complexity.",
    },
  ],
  extraGuides: [{ label: "Best payroll software for property management", href: "/payroll/best-for/property-management" }],
});

export const PEST_CONTROL_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pest-control",
  title: "Best CRM Software for Pest Control Businesses (2026)",
  subtitle:
    "Compare CRM tools for pest control operators: route-adjacent upsells, commercial account development, referral programs, and follow-up beyond today’s stops.",
  introParagraph:
    "Pest control companies blend dense routes with commercial programs and seasonal pushes—termites, mosquitoes, exclusion. CRM software helps sales and office teams track commercial pursuits, referral sources, and follow-up tasks that route software does not always surface well.",
  picks: [
    {
      slug: "keap",
      badge: "Best for service upsell campaigns",
      description:
        "CRM plus automation for cross-sell sequences—mosquito programs, insulation, or warranty renewals—when you run structured promotions.",
      rowBestFor: "Promotions & nurture",
      why: "Keap supports pest control brands that monetize the customer base with timed campaigns and follow-up paths beyond the technician’s tablet. Keep automations honest and useful—education beats blast emails. Trial one promotion to a segment you can measure. Keap fits owner-operators who will build a few strong plays, not hundreds of brittle rules.",
    },
    {
      slug: "hubspot",
      badge: "Best marketing + CRM combo",
      description:
        "Lists and email performance tied to deals—strong when you invest in local marketing and referrals.",
      rowBestFor: "Marketing-led growth",
      why: "HubSpot connects CRM to landing pages, ads, and email so you see which campaigns produce signed programs, not just clicks. Segment homeowners vs commercial contacts. Start free; add Marketing Hub when you measure cost per acquisition seriously. HubSpot fits growth-focused pest operators with marketing staff or agencies.",
    },
    {
      slug: "freshsales",
      badge: "Best phone-centric commercial sales",
      description:
        "Built-in phone and email context when commercial reps prospect restaurants, HOAs, and multi-site accounts.",
      rowBestFor: "B2B prospecting",
      why: "Freshsales helps pest control teams building commercial books—call-heavy outreach, meeting scheduling, and pipeline visibility. AI features assist prioritization when lists are large. Trial with one commercial rep and weekly pipeline reviews. Freshsales shines when B2B prospecting is a dedicated role, not a route add-on.",
    },
  ],
  editorialGuidance: [
    E("Commercial vs residential records", "Separate pipelines or clear deal types to avoid mixed metrics."),
    E("Source tracking", "Know whether referrals, digital, or door knocking feed your best customers."),
    E("Technician upsell handoff", "CRM tasks for office follow-up on tech-noted opportunities."),
    E("Seasonality", "Plan campaigns before peak insect pressure, not during it."),
  ],
  faqItems: [
    {
      q: "What CRM is best for pest control companies?",
      a: "Keap when automated upsell and renewal campaigns matter, HubSpot when marketing and CRM should share one system, and Freshsales for commercial reps who live on the phone.",
    },
    {
      q: "CRM vs pest control route software?",
      a: "Route tools optimize stops; CRM manages account development, referrals, and multi-touch commercial pursuits.",
    },
    {
      q: "Can small pest operators skip CRM?",
      a: "Many start with their FSM alone; CRM becomes valuable when commercial accounts, marketing programs, or multi-branch coordination need a shared pipeline.",
    },
  ],
  extraGuides: [{ label: "Best project management software for pest control", href: "/project-management/best-for/pest-control" }],
});

export const POOL_SERVICE_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pool-service",
  title: "Best CRM Software for Pool Service Companies (2026)",
  subtitle:
    "Compare CRM tools for pool companies: equipment upgrade sales, route customer LTV, referral partners, and follow-up when seasonality spikes demand.",
  introParagraph:
    "Pool service businesses combine recurring routes with equipment sales and renovation-adjacent projects. CRM software helps you track homeowner opportunities, referral relationships, and follow-up tasks for quotes that outlive a single visit—without confusing CRM with your daily route board.",
  picks: [
    {
      slug: "pipedrive",
      badge: "Best pipeline for quotes and upgrades",
      description:
        "Clear stages for heater and equipment opportunities, renovation leads, and commercial accounts.",
      rowBestFor: "Upgrade sales",
      why: "Pipedrive keeps pool sales organized when multiple quotes are open—green-to-clean, heater swaps, automation upgrades. Activities ensure office staff follows up when parts are delayed. Map stages to your sales reality. Pipedrive fits when upgrades and projects drive margin beyond chemicals and weekly service.",
    },
    {
      slug: "hubspot",
      badge: "Best for referrals and email",
      description:
        "Marketing email and forms when you promote openings, closings, and equipment bundles to your customer base.",
      rowBestFor: "Customer marketing",
      why: "HubSpot helps pool companies that market to their own routes and past customers—email campaigns for openings, safety checks, and equipment promos tied to CRM segments. Start with free CRM; layer marketing when you can measure ROI. HubSpot fits when your database is an asset you actively mine.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value stack",
      description:
        "Affordable CRM with workflows—pairs with Zoho Books if you want tighter quote-to-cash alignment.",
      rowBestFor: "Value",
      why: "Zoho CRM offers strong automation value for pool operators who want structured follow-up without premium pricing. Integrate with Zoho Books or Invoice if billing lives there too. Trial workflows for equipment quote follow-up after a tech flags an aging pump. Zoho wins on price-performance for owner-led sales teams.",
    },
  ],
  editorialGuidance: [
    E("Route vs opportunity clarity", "CRM tracks sales opportunities; route tools schedule weekly visits—link customer IDs."),
    E("Referral partners", "Track builders, realtors, and pool builders who send equipment and renovation leads."),
    E("Seasonal campaigns", "Plan spring openings and fall closings with lists and tasks before you are underwater."),
    E("Warranty and service history", "Notes on equipment models inform ethical upsell conversations."),
  ],
  faqItems: [
    {
      q: "What CRM should pool service companies use?",
      a: "Pipedrive for upgrade and project quote discipline, HubSpot when you actively email and market to your customer list, and Zoho CRM for affordable automation and suite integration.",
    },
    {
      q: "Should pool CRM replace my service software?",
      a: "No—keep routing and chemistry in your FSM or pool platform; CRM handles leads, quotes, and customer marketing.",
    },
    {
      q: "Free CRM for pool startups?",
      a: "HubSpot and Zoho CRM free tiers help you pilot; expect to pay when multiple users need automation and reporting.",
    },
  ],
  extraGuides: [{ label: "Best field service software for pool service", href: "/field-service/best-for/pool-service" }],
});

export const JUNK_REMOVAL_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "junk-removal",
  title: "Best CRM Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare CRM tools for junk removal: phone-heavy booking, commercial accounts, multi-truck jobs, and sales follow-up that matches a fast-moving dispatch culture.",
  introParagraph:
    "Junk removal is schedule-first, but sales still matter—repeat commercial clients, estate jobs, and referrals from realtors or property managers. CRM software captures those relationships and open quotes while dispatch software handles trucks and routes.",
  picks: [
    {
      slug: "close",
      badge: "Best for call-heavy inside sales",
      description:
        "Built-in calling, SMS, and email with pipeline views—built for teams that sell and book from the phone.",
      rowBestFor: "Phone-first CRM",
      why: "Close fits junk removal brands with dedicated CSRs or sales reps handling high inbound call volume—power dialer workflows, inbox, and pipeline in one place. Expect higher per-seat cost; justify it with measured booking rates. Trial with real call spikes, not quiet afternoons. Close wins when speed-to-contact and call discipline drive revenue.",
    },
    {
      slug: "pipedrive",
      badge: "Best simple commercial pipeline",
      description:
        "Track B2B accounts, property managers, and recurring purge programs without heavyweight CRM.",
      rowBestFor: "Commercial deals",
      why: "Pipedrive helps junk removal owners building commercial books—offices, retail churn, property managers—with clear stages and next activities. Pair with your booking tool via integrations or disciplined copy-paste of job IDs. Pipedrive fits when commercial repeat work is strategic, not occasional.",
    },
    {
      slug: "hubspot",
      badge: "Best marketing + CRM",
      description:
        "Forms, chat, and email nurture when you invest in local SEO, partnerships, or referral campaigns.",
      rowBestFor: "Inbound growth",
      why: "HubSpot connects marketing spend to booked jobs when you run paid search, landing pages, or partner campaigns. Free CRM can unify leads that arrive from many channels. Upgrade marketing features when you measure cost per booked job religiously. HubSpot suits growth-focused junk removal brands, not only dispatch centers.",
    },
  ],
  editorialGuidance: [
    E("Speed-to-lead", "CRM should reflect how fast you return calls—tasks or SLAs for new leads."),
    E("Commercial account health", "Notes on gate access, lift needs, and billing preferences reduce friction."),
    E("Source tracking", "Know whether Google, referrals, or partnerships feed profitable work."),
    E("Integration honesty", "If CRM does not talk to dispatch, define who enters what—and when."),
  ],
  faqItems: [
    {
      q: "What CRM is best for junk removal businesses?",
      a: "Close when phone-heavy inside sales is central, Pipedrive for commercial pipeline discipline, and HubSpot when inbound marketing and multi-channel leads need one system.",
    },
    {
      q: "Do junk haulers need CRM?",
      a: "Residential-only shops with one dispatcher may wait; multi-truck and commercial-focused brands usually benefit early.",
    },
    {
      q: "CRM vs junk removal booking software?",
      a: "Booking software schedules trucks; CRM tracks relationships, B2B accounts, and marketing-sourced leads—use both with clear rules.",
    },
  ],
  extraGuides: [{ label: "Best project management software for junk removal", href: "/project-management/best-for/junk-removal" }],
});

export const MOVING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "moving",
  title: "Best CRM Software for Moving Companies (2026)",
  subtitle:
    "Compare CRM tools for movers: survey-to-booking pipeline, long-distance and corporate pursuits, referral partners, and follow-up when estimates go quiet.",
  introParagraph:
    "Moving companies sell under stress—customers compare multiple quotes quickly, and operations depend on accurate surveys. CRM software helps sales teams track opportunities from first touch to booked job, with notes on inventory, access, and partner involvement so handoffs stay clean.",
  picks: [
    {
      slug: "monday-crm",
      badge: "Best flexible move pipelines",
      description:
        "Boards for local vs long-distance, corporate vs consumer, when one funnel cannot describe your business.",
      rowBestFor: "Multi-segment sales",
      why: "Monday CRM suits moving companies with distinct sales motions—local summer peaks, corporate RFPs, military PCS—where flexible boards beat rigid stages. Automations can remind reps when estimates age. Trial one segment at a time to avoid messy boards. Monday fits BD-heavy movers more than truck-only dispatch.",
    },
    {
      slug: "hubspot",
      badge: "Best marketing alignment",
      description:
        "Landing pages, chat, and email tied to CRM when you buy leads or nurture realtor and corporate partners.",
      rowBestFor: "Inbound + partners",
      why: "HubSpot helps moving brands that invest in paid search, realtor partnerships, or corporate programs—CRM ties spend to booked moves when configured honestly. Start with free CRM for lead centralization; add marketing when you track CPL and booking rate by source. HubSpot fits growth-oriented movers with dedicated sales or marketing roles.",
    },
    {
      slug: "pipedrive",
      badge: "Best estimate follow-up",
      description:
        "Activity-driven pipeline for survey-to-booking—reduces ghosting when customers stall after the walkthrough.",
      rowBestFor: "Follow-up discipline",
      why: "Pipedrive keeps moving sales reps focused on next calls and tasks after surveys—where many deals die quietly. Stages might include survey scheduled, estimate sent, follow-up, booked. Trial with mandatory activity logging for two weeks. Pipedrive wins when your sales gap is follow-through, not lead volume.",
    },
  ],
  editorialGuidance: [
    E("Speed and trust", "Fast responses and clear notes on access and specialty items win moves—CRM supports both."),
    E("Partner channels", "Track realtors, corporate clients, and storage partners with source fields."),
    E("Long-distance complexity", "Separate tasks for origin, destination, and third-party partners when needed."),
    E("Integration with move management", "Link CRM opportunities to job numbers in dispatch or TMS when possible."),
  ],
  faqItems: [
    {
      q: "What CRM do moving companies use?",
      a: "Monday for flexible pipelines across move types, HubSpot when marketing and partner programs feed the funnel, and Pipedrive for disciplined survey-to-booking follow-up.",
    },
    {
      q: "CRM vs moving software?",
      a: "Moving systems handle dispatch, inventory, and tariffs; CRM handles selling the move and managing partner relationships.",
    },
    {
      q: "Free CRM for local movers?",
      a: "HubSpot’s free CRM is a common starting point to centralize leads; add paid tiers when multiple reps need automation and reporting.",
    },
  ],
  extraGuides: [{ label: "Best scheduling software for moving companies", href: "/scheduling/best-for/moving" }],
});
