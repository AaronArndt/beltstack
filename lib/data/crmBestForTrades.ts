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
  /** “Why we recommend” card body: ~3–5 sentences; trade-specific rationale and trial guidance. */
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

export const APPLIANCE_REPAIR_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "appliance-repair",
  title: "Best CRM Software for Appliance Repair Businesses (2026)",
  subtitle:
    "Compare CRM tools for appliance repair: warranty and COD leads, estimate follow-up, membership and extended-service renewals, and marketing when seasonal demand spikes.",
  introParagraph:
    "Appliance repair businesses juggle OEM warranty calls, retail COD tickets, and repeat customers who need fast scheduling—not a generic ecommerce funnel. CRM software centralizes leads from LSAs, referrals, and manufacturer programs; tracks follow-up on estimates for replacements; and helps the office nurture maintenance plans without losing context between CSR and field techs.",
  picks: [
    {
      slug: "freshsales",
      badge: "Best phone-heavy CSR and estimator teams",
      description:
        "Built-in phone, email, and timelines on the record—built for shops where CSRs qualify warranty vs cash jobs on the phone.",
      rowBestFor: "Call-first appliance sales",
      why: "Freshsales fits appliance repair teams that live on the phone—routing emergencies, quoting extended warranties, and logging what the homeowner actually said before the truck rolls. Built-in telephony and AI-assisted scoring reduce tab-hopping between inbox and CRM when CSRs are underwater during heat waves or holidays. Trial with two reps logging real calls for a week; confirm mobile access if your lead estimator works from a laptop between ride-alongs. Freshsales shines when conversation volume is high and the CRM must reflect it without custom dev.",
    },
    {
      slug: "hubspot",
      badge: "Best inbound marketing + unified leads",
      description:
        "Forms, chat, and optional Marketing Hub when you buy local search, LSAs, or run seasonal replacement campaigns.",
      rowBestFor: "Inbound + campaigns",
      why: "HubSpot helps appliance repair brands that invest in Google Local Services, paid search, or email campaigns for tune-ups and replacement promos—one database for ad-sourced leads, referrals, and repeat customers. Use deal types or pipelines to separate warranty dispatch-driven work from retail equipment sales. During a trial, import last month’s leads, tag source honestly, and build stages that match estimate sent, parts ordered, and scheduled install. HubSpot fits when marketing and CSR share one timeline instead of three spreadsheets.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value and Zoho stack alignment",
      description:
        "Affordable workflows and blueprints—strong if you also use Zoho Books or want tight quote-to-cash beside operations.",
      rowBestFor: "Value & automation",
      why: "Zoho CRM delivers strong automation per dollar for owner-led shops that still need structured follow-up on replacement quotes and recurring maintenance touches. Blueprints can nudge deals stuck after “estimate sent” when parts delays or homeowner indecision stall the job. If billing lives in Zoho Books, shared customer records reduce double entry between sales and back office. Trial one automation and one integration path to your dispatch or FSM—Zoho wins when you want CRM depth without HubSpot-level spend.",
    },
  ],
  editorialGuidance: [
    E("Warranty vs retail segmentation", "Separate pipelines or deal types so CSRs do not treat OEM paperwork like a cash coil sale."),
    E("Speed-to-lead on emergencies", "Tasks or SLAs for inbound calls—CRM should reflect how fast you actually call back."),
    E("Membership and add-on fields", "Track extended plans and filter subscriptions so renewals become proactive, not reactive."),
    E("CRM vs dispatch", "Routing lives in FSM; CRM owns pipeline, quotes, and nurture—link job IDs in notes when possible."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for appliance repair businesses?",
      a: "We shortlist Freshsales for call-heavy CSRs and estimators, HubSpot when inbound marketing and multi-channel leads need one system, and Zoho CRM for value and automation—especially alongside other Zoho apps.",
    },
    {
      q: "Do appliance repair shops need CRM or only field service software?",
      a: "Field service handles trucks and work orders; CRM handles selling replacements, following up on estimates, and marketing to your customer list. Many growing shops use both with clear handoff rules.",
    },
    {
      q: "Is there a free CRM for small appliance repair companies?",
      a: "HubSpot and Zoho CRM offer free tiers to pilot contacts and deals; add paid tiers when multiple users need automation, sequences, or integrated phone.",
    },
  ],
});

export const GARAGE_DOOR_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "garage-door",
  title: "Best CRM Software for Garage Door Companies (2026)",
  subtitle:
    "Compare CRM tools for garage door dealers: new construction and retrofit pipelines, commercial rolling-door pursuits, and follow-up on high-ticket residential quotes.",
  introParagraph:
    "Garage door companies sell large-ticket installs and ongoing service—often across builder programs, commercial accounts, and retail homeowners. CRM software gives sales and estimating a shared record of opportunities, deposit milestones, and next steps so spring construction peaks and storm-driven service spikes do not bury warm quotes.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best marketing + CRM for dealer growth",
      description:
        "Forms, ads, and email when you run local campaigns, builder partnerships, or nurture homeowners after estimates.",
      rowBestFor: "Dealer marketing + pipeline",
      why: "HubSpot suits garage door dealers investing in LSAs, home-show leads, or builder programs—CRM plus optional Marketing Hub keeps spend tied to booked installs when configured with discipline. Segment contacts by single-family, multifamily, or commercial rolling applications; track deal stages for measure, order, install, and service contract add-ons. Trial with one sales pod and enforce weekly activity logging. HubSpot fits when growth depends on marketing and sales sharing one database—not only dispatch throughput.",
    },
    {
      slug: "salesforce",
      badge: "Best for multi-location and complex accounts",
      description:
        "Account hierarchy, opportunities, and reporting when you run several branches, commercial teams, or formal builder pursuits.",
      rowBestFor: "Scaling door dealers",
      why: "Salesforce earns its seat cost when garage door organizations manage many contacts per builder or property manager, multi-branch forecasting, and leadership reporting that must roll up cleanly. Expect admin effort or partner help—reward is pipeline truth across territories. Pilot one region with stages tied to real gates (spec approved, opening measured, deposit received). Salesforce fits when deal complexity and headcount justify dedicated CRM operations—not for three-person residential shops on day one.",
    },
    {
      slug: "pipedrive",
      badge: "Best disciplined residential pipeline",
      description:
        "Activity-based selling for owner-led teams that need clear next steps after measures and estimates—not another enterprise suite.",
      rowBestFor: "Estimate follow-up",
      why: "Pipedrive keeps garage door sales honest about which homeowner quotes are still live after measures—where money hides when crews stay busy on booked work. Reminders and mobile-friendly activities beat sticky notes for “call back after spouse approval.” Map stages to how you actually sell; avoid fifteen micro-stages nobody updates. Pipedrive wins when the leak is follow-through on high-ticket residential, not lack of lead volume.",
    },
  ],
  editorialGuidance: [
    E("Builder vs walk-in mindset", "Different sales motions deserve different pipelines or deal types."),
    E("Deposit and scheduling handoffs", "Notes on door SKU, lead times, and opener pairings reduce production callbacks."),
    E("Commercial rolling doors", "Longer cycles—use company records and tasks for spec reviews and submittals."),
    E("Service upsell path", "CRM tags for aging openers help ethical upgrade conversations after service calls."),
  ],
  faqItems: [
    {
      q: "What CRM should garage door companies use?",
      a: "HubSpot when marketing and inbound leads are central, Salesforce for multi-branch or complex commercial pursuits with serious reporting needs, and Pipedrive for disciplined follow-up on residential estimates.",
    },
    {
      q: "Garage door CRM vs industry-specific software?",
      a: "Specialized dealer tools exist; general CRM still wins for flexible pipelines, integrations, and marketing when you want one hub for sales—not only order entry.",
    },
    {
      q: "Free CRM for garage door startups?",
      a: "HubSpot’s free CRM is a common pilot for contacts and deals; graduate to paid tiers when automation and multi-user discipline matter.",
    },
  ],
});

export const LOCKSMITH_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "locksmith",
  title: "Best CRM Software for Locksmith Businesses (2026)",
  subtitle:
    "Compare CRM tools for locksmiths: emergency and scheduled leads, commercial rekey programs, and speed-to-contact workflows that match mobile, phone-heavy sales.",
  introParagraph:
    "Locksmiths win on minutes—not weeks—especially for emergencies and automotive lockouts. CRM software still matters for commercial rekeys, property managers, and quoted access-control work: it captures recurring accounts, logs scope notes, and prevents commercial follow-ups from vanishing between dispatch and the owner who actually signs.",
  picks: [
    {
      slug: "close",
      badge: "Best high-velocity call and SMS sales",
      description:
        "Built-in calling, SMS, Power Dialer culture—when CSRs and owners convert leads from the phone all day.",
      rowBestFor: "Phone-first locksmith CRM",
      why: "Close fits locksmith brands with dedicated inside sales or owners who personally work high lead volume—power dialer workflows, unified inbox, and pipeline views built for speed. Expect higher per-seat pricing; justify it with measured close rates on commercial and automotive upsells, not only emergency dispatch. Trial during real peak hours with mandatory activity logging. Close wins when your bottleneck is contact speed and disciplined follow-up, not landing pages.",
    },
    {
      slug: "copper",
      badge: "Best Google Workspace–native shops",
      description:
        "CRM in Gmail and Calendar—ideal for lean teams that live in Workspace and hate switching apps.",
      rowBestFor: "Gmail-centric locksmiths",
      why: "Copper suits small locksmith operations that run from Gmail and Calendar—suggested records next to threads, light pipeline for quoted master-key systems or access projects, and fast adoption because reps never “leave email.” Trial by linking commercial property managers and tagging deal value for rekey programs. Copper fits owner-operators and micro-teams who will not tolerate heavy CRM training but still need pipeline for non-emergency revenue.",
    },
    {
      slug: "pipedrive",
      badge: "Best simple pipeline for quoted work",
      description:
        "Clear stages for commercial quotes, access-control scopes, and automotive fleet programs—without enterprise weight.",
      rowBestFor: "Quoted commercial deals",
      why: "Pipedrive helps locksmiths building recurring commercial books—rekeys, padlock programs, small safe work—with stages and activities that survive when the owner is back in the van. Pair with call tracking or forms; keep emergency dispatch in your existing tools. Trial two weeks with mandatory next-step tasks on open quotes. Pipedrive shines when quoted and account-based work is strategic, not occasional one-offs.",
    },
  ],
  editorialGuidance: [
    E("Emergency vs quoted pipelines", "Separate motions so CSRs do not treat a lockout like a master-key bid."),
    E("Property manager accounts", "Company records with gate codes and billing preferences reduce repeat questions."),
    E("Source tracking", "Know whether Google, roadside, or referrals feed profitable work."),
    E("CRM vs dispatch", "Dispatch handles trucks; CRM owns commercial pipeline and follow-up discipline."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for locksmith businesses?",
      a: "Close when phone and SMS volume drives revenue and you will invest in per-seat cost, Copper for Google Workspace–centric lean teams, and Pipedrive for clear pipelines on quoted commercial work.",
    },
    {
      q: "Do locksmiths need CRM software?",
      a: "Residential-only shops with one dispatcher may delay; brands building commercial accounts, automotive fleets, or multi-tech sales usually benefit early.",
    },
    {
      q: "CRM vs locksmith dispatch software?",
      a: "Dispatch schedules jobs; CRM tracks accounts, quotes, and follow-up—use both with clear rules for when a lead becomes a job.",
    },
  ],
});

export const FLOORING_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "flooring",
  title: "Best CRM Software for Flooring Contractors (2026)",
  subtitle:
    "Compare CRM tools for flooring companies: showroom and designer-led sales, long material lead times, and follow-up when homeowners pause on selections or deposits.",
  introParagraph:
    "Flooring contractors sell design-heavy projects with deposits, material orders, and subcontractor coordination—often weeks between first visit and install. CRM software helps sales and project coordinators track opportunities, stakeholder notes, and next actions so estimates and selections do not stall silently while crews stay busy elsewhere.",
  picks: [
    {
      slug: "monday-crm",
      badge: "Best visual pipelines for design-build selling",
      description:
        "Boards for showroom vs commercial, phase gates, and automations when one linear funnel cannot describe your sales.",
      rowBestFor: "Multi-phase flooring sales",
      why: "Monday CRM suits flooring dealers that sell across showrooms, builder programs, and commercial bid work—flexible columns for selections pending, material on order, and install week without forcing every deal into identical stages. Automations can flag stalled deals when deposits or signed approvals lag. Trial one vertical at a time to keep boards clean. Monday fits owners and sales managers who think visually and want sales and ops language to align—without duplicating full production scheduling in CRM.",
    },
    {
      slug: "hubspot",
      badge: "Best designer and referral nurture",
      description:
        "Lists, email, and forms for builders, designers, and past customers when repeat and referral work drives margin.",
      rowBestFor: "Referrals + marketing",
      why: "HubSpot helps flooring brands that depend on designers, builders, and repeat homeowners—CRM segments for nurture, optional email campaigns for promotions, and deal history so referrals feel personal. Import a cohort of last year’s customers and test one honest follow-up campaign during evaluation. HubSpot fits when growth is as much about relationships and timing as knocking new doors.",
    },
    {
      slug: "pipedrive",
      badge: "Best estimate follow-up discipline",
      description:
        "Activity reminders and clean stages when quotes stall after measures—common when material delays or spouse decisions slow the job.",
      rowBestFor: "Sales cadence",
      why: "Pipedrive keeps flooring sales teams focused on next calls and tasks after measures and quotes—where margin leaks when crews are booked and nobody chases deposits. Stages might include measure complete, estimate sent, deposit received, material ordered. Trial during a busy month with daily activity logging. Pipedrive wins when execution on open opportunities matters more than marketing breadth.",
    },
  ],
  editorialGuidance: [
    E("Selections and delays", "Deal notes for product holds and ETA changes reduce miscommunication with production."),
    E("Deposit milestones", "Tasks tied to payments keep cash aligned with material orders."),
    E("Commercial vs residential", "Separate pipelines or properties so bid deadlines do not look like showroom follow-ups."),
    E("Integrate with estimating", "Link estimate PDFs or totals in deals for context when handoffs span people."),
  ],
  faqItems: [
    {
      q: "What CRM should flooring contractors use?",
      a: "Monday for flexible visual pipelines across project types, HubSpot when designer and referral nurture are central, and Pipedrive for strict follow-up on open estimates.",
    },
    {
      q: "CRM vs flooring estimating software?",
      a: "Estimating tools price materials and labor; CRM tracks relationships, stalled deals, and marketing—complementary systems.",
    },
    {
      q: "Free CRM for flooring showrooms?",
      a: "HubSpot’s free CRM helps pilot contacts and deals; add paid tiers when automation and multi-user adoption matter.",
    },
  ],
});

export const FENCE_DECK_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "fence-deck",
  title: "Best CRM Software for Fence & Deck Builders (2026)",
  subtitle:
    "Compare CRM tools for fence and deck builders: residential and commercial pursuits, permit-driven timelines, and follow-up when weather or material delays pause decisions.",
  introParagraph:
    "Fence and deck builders sell outdoor projects with permits, subs, and seasonal peaks—often mixing retail homeowners with small commercial enclosures. CRM software gives estimators and owners a system of record for open quotes, stakeholder notes, and next steps so spring and summer demand does not bury follow-ups on signed contracts.",
  picks: [
    {
      slug: "salesforce",
      badge: "Best for multi-crew and commercial pursuits",
      description:
        "Accounts, opportunities, and reporting when you pursue GC work, HOAs, or multi-phase outdoor packages.",
      rowBestFor: "Complex outdoor sales",
      why: "Salesforce fits growing fence and deck companies that pursue commercial or multi-location work—many stakeholders, formal bid calendars, and leadership forecasting that must roll up without shadow spreadsheets. Expect configuration and admin time; pilot one market or division with realistic stages tied to permit and submittal gates. Salesforce earns its place when average deal size and pursuit volume justify CRM administration—not for two-person residential crews on day one.",
    },
    {
      slug: "hubspot",
      badge: "Best SMB growth and inbound",
      description:
        "Faster adoption with optional marketing—strong for regional builders investing in local SEO, partnerships, or showroom consults.",
      rowBestFor: "Regional builder CRM",
      why: "HubSpot gives fence and deck brands a modern CRM with forms, chat, and email when you generate leads from search, realtor partnerships, or seasonal campaigns. Use companies and deals for builder and HOA relationships; log permit milestones in notes or custom properties. Trial with your top twenty open opportunities. HubSpot fits when you want professional pipeline management without a full-time Salesforce admin.",
    },
    {
      slug: "monday-crm",
      badge: "Best flexible boards for mixed sales",
      description:
        "Visual pipelines when you sell residential packages, commercial enclosures, and maintenance differently.",
      rowBestFor: "Visual pursuit tracking",
      why: "Monday CRM helps outdoor contractors that need different columns or boards for residential package sales versus commercial bids—with automations when cards sit too long awaiting permit or deposit. Keep CRM focused on selling; avoid mirroring full job costing unless the team will maintain it. Monday suits BD-heavy owners who already think in boards and want status visible to sales and ops leads.",
    },
  ],
  editorialGuidance: [
    E("Permit and inspection tasks", "Deal tasks for AHJ milestones reduce surprises that blow schedules."),
    E("Change order communication", "Notes when homeowners add linear feet or upgrade materials after sign-off."),
    E("Commercial vs HOA context", "Company records with contact roles beat one generic customer field."),
    E("Handoff to production", "Clear won process so crews get scope, photos, and gate access expectations."),
  ],
  faqItems: [
    {
      q: "What CRM do fence and deck companies use?",
      a: "Salesforce for complex commercial pursuits and forecasting, HubSpot for inbound-heavy regional growth with easier adoption, and Monday for flexible visual pipelines across residential and commercial motions.",
    },
    {
      q: "Fence CRM vs construction project software?",
      a: "Project tools schedule crews and subs; CRM tracks selling the job, relationships, and follow-ups—pair both with clear IDs.",
    },
    {
      q: "Small deck builder CRM?",
      a: "Start with HubSpot’s free CRM or Pipedrive trials; scale when multiple estimators need shared truth.",
    },
  ],
});

export const GLASS_WINDOW_INSTALLERS_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "glass-window-installers",
  title: "Best CRM Software for Glass & Window Installers (2026)",
  subtitle:
    "Compare CRM tools for glass and window companies: residential replacement funnels, commercial glazing pursuits, and follow-up when custom orders and lead times stretch decisions.",
  introParagraph:
    "Glass and window installers balance quick residential replacements with measured commercial work—often involving insurance, landlords, or GC coordination. CRM software centralizes leads from canvassing, referrals, and inbound calls; tracks stakeholder notes on measurements and products; and keeps follow-up moving when orders sit in fabrication queues.",
  picks: [
    {
      slug: "pipedrive",
      badge: "Best pipeline discipline for measured sales",
      description:
        "Stages from lead to measure to order placed—reduces ghosting when homeowners or PMs go quiet mid-process.",
      rowBestFor: "Deal execution",
      why: "Pipedrive helps glass and window sales teams manage many open opportunities across residential and light commercial—clear next activities after measures, deposit milestones, and production handoffs. Filters help reps see which deals stalled waiting on HOA approval or spouse sign-off. Trial with mandatory logging for two weeks during a busy season. Pipedrive wins when follow-through—not lead gen—is the gap.",
    },
    {
      slug: "freshsales",
      badge: "Best call-heavy commercial and property work",
      description:
        "Phone and email context on the record—useful when you sell to property managers, facility teams, and multi-site customers.",
      rowBestFor: "Account-based selling",
      why: "Freshsales suits window and glass teams that qualify opportunities on the phone—calling landlords, facility managers, and builders—with timelines and conversations attached to deals. AI scoring and unified timelines reduce hunting through inboxes when multiple people touch an account. Trial with commercial reps logging real outreach. Freshsales fits when B2B-style account work complements residential retail.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value and suite integration",
      description:
        "Workflows and account hierarchy at lower cost—strong alongside Zoho Books if finance lives in Zoho too.",
      rowBestFor: "Value & accounts",
      why: "Zoho CRM offers affordable depth for installers managing accounts with multiple sites or contacts—workflows for follow-up when fabrication delays push install dates. If billing uses Zoho Books, fewer silos exist between quoted work and invoices. Pilot blueprint rules for handoffs between inside sales and field measurers. Zoho wins on price-performance for growing regional installers.",
    },
  ],
  editorialGuidance: [
    E("Residential vs commercial pipelines", "Different velocity and stakeholders—segment accordingly."),
    E("Insurance and landlord notes", "Attach photos and scope summaries for clarity on disputed or managed properties."),
    E("Custom order lead times", "Deal tasks when factory ETAs slip—proactive customer updates beat silence."),
    E("CRM vs fabrication systems", "Production tracks glass orders; CRM tracks selling and customer communication."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for glass and window installers?",
      a: "Pipedrive for disciplined pipelines on measured sales, Freshsales for phone-heavy commercial account work, and Zoho CRM for value and account hierarchy—often with other Zoho apps.",
    },
    {
      q: "Window CRM vs industry ERP?",
      a: "Specialized glass ERPs handle fabrication; CRM handles leads, relationships, and sales follow-up—integrate or link job IDs where possible.",
    },
    {
      q: "Free CRM for window sales reps?",
      a: "HubSpot and Zoho CRM free tiers support pilots; expect to pay for automation at scale.",
    },
  ],
});

export const CONCRETE_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "concrete-contractors",
  title: "Best CRM Software for Concrete Contractors (2026)",
  subtitle:
    "Compare CRM tools for concrete contractors: commercial and residential pursuits, bid calendars, and relationship tracking with GCs, owners, and municipalities.",
  introParagraph:
    "Concrete contractors sell on schedules, specs, and trust—often through GCs, developers, and direct owners with long paths to signed work. CRM software gives business development and estimators a shared record of pursuits, deadlines, and stakeholders instead of scattered email and plan-room noise.",
  picks: [
    {
      slug: "salesforce",
      badge: "Best for formal pursuits and forecasting",
      description:
        "Opportunities, accounts, and roll-up reporting when you pursue multi-phase flatwork, structural, or paving programs.",
      rowBestFor: "Enterprise-style BD",
      why: "Salesforce fits concrete firms that pursue larger opportunities with many contacts per account, formal stage gates, and leadership forecasting across regions. Expect admin investment or partner support—reward is pipeline discipline leadership trusts. Pilot one division with stages tied to real bid dates and go/no-go meetings. Salesforce fits when pursuit complexity and deal size justify CRM operations—not for owner-only residential flatwork shops.",
    },
    {
      slug: "zoho-crm",
      badge: "Best mid-market value",
      description:
        "Account hierarchy, workflows, and lower TCO when you need structured BD without Salesforce overhead.",
      rowBestFor: "Growing concrete BD teams",
      why: "Zoho CRM delivers strong capability per dollar for concrete contractors scaling BD—blueprints for handoffs between estimators, workflows when pursuits stall before deadlines, and related lists for GC relationships with many jobs. If operations use Zoho apps elsewhere, data stays closer together. Trial pursuits for one GC vertical first. Zoho fits regional contractors who outgrew spreadsheets but are not ready for Salesforce total cost.",
    },
    {
      slug: "monday-crm",
      badge: "Best visual pursuit boards",
      description:
        "Boards for pursuit type, region, or bid month when linear stages do not describe your BD reality.",
      rowBestFor: "Visual pipelines",
      why: "Monday CRM helps concrete BD leads who want boards reflecting pursuit clusters—hard bid, negotiated, design-build, maintenance—without forcing one funnel. Automations can surface tasks before addenda or walk dates. Trial one pursuit type end-to-end. Monday suits visually minded teams that need status clarity more than traditional CRM reports on day one.",
    },
  ],
  editorialGuidance: [
    E("GC and owner contacts", "Role-based contact records reduce “who owns this relationship?” confusion."),
    E("Bid calendar alignment", "Deal stages should mirror real dates—not vanity percentages."),
    E("Bonding and prequal data", "Custom fields for limits and expirations support honest go/no-go."),
    E("Handoff to estimating", "Attach ITBs, addenda links, and scope notes to opportunities."),
  ],
  faqItems: [
    {
      q: "What CRM should concrete contractors use?",
      a: "Salesforce for complex pursuits and forecasting at scale, Zoho CRM for structured BD at strong value, and Monday for flexible visual boards across pursuit types.",
    },
    {
      q: "CRM vs construction bid tools?",
      a: "Plan rooms and bid management handle documents; CRM tracks relationships, pursuits, and follow-ups—use both.",
    },
    {
      q: "Small concrete company CRM?",
      a: "Many start with HubSpot or Zoho free tiers; add depth when BD headcount grows.",
    },
  ],
});

export const EXCAVATION_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "excavation",
  title: "Best CRM Software for Excavation Companies (2026)",
  subtitle:
    "Compare CRM tools for excavation and earthwork: pursuit tracking with GCs and developers, long-cycle bids, and follow-up when schedules slip or scopes change.",
  introParagraph:
    "Excavation companies pursue site work packages that depend on relationships, prequalification, and tight bid windows—often with multiple stakeholders per job. CRM software helps BD teams track opportunities, contacts, and next actions so pursuits do not live only in estimators’ inboxes.",
  picks: [
    {
      slug: "salesforce",
      badge: "Best for multi-pursuit civil BD",
      description:
        "Accounts, opportunities, and reporting when you run regional pursuits across public and private work.",
      rowBestFor: "Civil-scale sales",
      why: "Salesforce supports excavation firms that pursue many simultaneous opportunities with complex account maps—GCs, developers, agencies—and need roll-up forecasting by region or division. Expect configuration discipline; pilot with real pursuit stages tied to pre-bid meetings and addenda reviews. Salesforce fits when leadership needs trusted pipeline reporting and deal size justifies admin investment.",
    },
    {
      slug: "hubspot",
      badge: "Best approachable CRM for growing earthwork brands",
      description:
        "Companies, deals, and optional marketing when you invest in relationships and inbound alongside cold pursuits.",
      rowBestFor: "Relationship + inbound",
      why: "HubSpot gives growing excavation companies a faster-adoption CRM for tracking contacts, deals, and activities—optional marketing when you promote capabilities or nurture past GC relationships. Use custom properties for project type, bond needs, and equipment constraints. Trial with active pursuits only—clean data beats imported junk. HubSpot fits regional BD teams that want professional CRM without a full Salesforce program on day one.",
    },
    {
      slug: "pipedrive",
      badge: "Best disciplined follow-up on bids",
      description:
        "Activity reminders when estimators chase addenda, quotes, and post-bid clarifications across many files.",
      rowBestFor: "Bid follow-through",
      why: "Pipedrive helps excavation estimators and BD reps who juggle many deadlines—tasks for addenda downloads, scope questions, and follow-up calls after bid day. Simplicity keeps adoption higher than bloated configs. Map stages to how you actually win work. Pipedrive shines when the risk is dropped balls on follow-up, not lack of opportunities.",
    },
  ],
  editorialGuidance: [
    E("Prequal and insurance fields", "Track expiration dates and limits on accounts—avoid last-minute surprises."),
    E("Joint venture and teaming", "Notes on partner roles and revenue splits on complex pursuits."),
    E("Weather and schedule risk", "Deal notes when owners push schedules—relationship context matters on the next pursuit."),
    E("CRM vs estimating", "Estimating tools price dirt; CRM tracks who to call and when."),
  ],
  faqItems: [
    {
      q: "What CRM do excavation companies use?",
      a: "Salesforce for complex regional pursuits and reporting, HubSpot for approachable CRM with marketing options, and Pipedrive for activity-driven bid follow-up.",
    },
    {
      q: "Excavation CRM vs heavy equipment telematics?",
      a: "Telematics tracks iron; CRM tracks customer relationships and pursuits—complementary systems.",
    },
    {
      q: "Affordable CRM for small excavators?",
      a: "Zoho CRM and HubSpot free tiers support pilots; scale with paid automation as BD headcount grows.",
    },
  ],
});

export const AUTO_REPAIR_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "auto-repair",
  title: "Best CRM Software for Auto Repair Shops (2026)",
  subtitle:
    "Compare CRM tools for auto repair: service advisor workflows, declined work follow-up, fleet and commercial accounts, and marketing to your customer database.",
  introParagraph:
    "Auto repair shops live in the SMS—but growth still depends on tracking fleet accounts, declined recommendations, and marketing to existing customers. CRM software complements shop management: it gives advisors and owners a place to manage B2B relationships, follow up on estimates, and run campaigns without spamming every RO.",
  picks: [
    {
      slug: "freshsales",
      badge: "Best phone- and advisor-centric workflows",
      description:
        "Built-in phone, email, and AI assist—useful when service advisors and BDRs work accounts from the counter and the phone.",
      rowBestFor: "Advisor-heavy shops",
      why: "Freshsales fits multi-bay shops that want CRM-style timelines for fleet accounts, commercial motor pool contacts, and high-value follow-ups—without forcing shop software to be a full relationship system. Phone and email context on the record speeds coaching and handoffs between advisors. Trial with real account lists and measure activities logged per week. Freshsales shines when human conversation drives fleet and commercial upsell—not only RO automation.",
    },
    {
      slug: "zoho-crm",
      badge: "Best value for multi-location groups",
      description:
        "Affordable seats and workflows—pairs with Zoho apps if you want marketing or finance adjacent to CRM.",
      rowBestFor: "Value & scale",
      why: "Zoho CRM offers strong automation per dollar for independent chains and franchise-style groups that need territories, recurring follow-up tasks, and integration options without Salesforce economics. Blueprints can assign tasks when declined work ages past a threshold—if your team commits to honest data entry from the SMS. Trial one store before rolling out. Zoho fits operators who want CRM depth on a budget.",
    },
    {
      slug: "keap",
      badge: "Best CRM plus customer marketing automation",
      description:
        "Tags, campaigns, and automation when you actively market services, inspections, and seasonal promotions to your list.",
      rowBestFor: "Marketing + CRM",
      why: "Keap combines CRM with campaigns—useful for shops that monetize their database with reminders, seasonal offers, and declined-work sequences without building a separate marketing stack. Expect setup time; measure lift on booked hours, not just opens. Trial one segment (for example fleet PM reminders) before blasting everyone. Keap fits owner-led marketing teams that will invest in automation discipline.",
    },
  ],
  editorialGuidance: [
    E("CRM vs shop management system", "SMS owns ROs; CRM owns accounts, pursuits, and marketing lists—sync or export with clear rules."),
    E("Declined work follow-up", "Tags or deals for high-dollar recommendations that did not sell on first visit."),
    E("Fleet and commercial accounts", "Company records with vehicle counts, billing, and gate protocols."),
    E("Marketing consent", "Honor opt-outs—trust beats volume."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for auto repair shops?",
      a: "Freshsales for advisor- and phone-centric account work, Zoho CRM for value and workflows across bays or locations, and Keap when customer marketing automation is as important as pipeline tracking.",
    },
    {
      q: "Do auto shops need CRM if they have shop software?",
      a: "Shop software runs the bay; CRM helps manage commercial accounts, follow-ups, and marketing—many growing shops add CRM when relationship revenue matters.",
    },
    {
      q: "Free CRM for auto repair?",
      a: "HubSpot’s free CRM can centralize contacts for pilots; add paid tiers when multiple users need automation.",
    },
  ],
  extraGuides: [{ label: "Best scheduling software for small business", href: "/scheduling/best-for/small-business" }],
});

export const MOBILE_MECHANICS_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "mobile-mechanics",
  title: "Best CRM Software for Mobile Mechanics (2026)",
  subtitle:
    "Compare CRM tools for mobile mechanics: fast lead response, simple pipelines for fleet and repeat clients, and lightweight CRM that fits van-first work.",
  introParagraph:
    "Mobile mechanics often run lean—solo or with a partner—selling from the road with texts and calls. CRM software still helps when you pursue small fleets, motor clubs, and repeat customers: it keeps contact history, follow-ups, and quoted work from living only in one phone.",
  picks: [
    {
      slug: "copper",
      badge: "Best Google Workspace–native solo pros",
      description:
        "CRM inside Gmail—minimal context switching for owners who will not adopt heavy software.",
      rowBestFor: "Gmail-first mobile ops",
      why: "Copper suits solo and two-person mobile mechanics who live in Gmail on their phones—opportunities for quoted jobs, suggested records next to threads, and light pipeline without a second app culture. Trial by tracking three fleet prospects and recurring commercial contacts. Copper wins when adoption friction is the enemy and relationship memory matters more than enterprise reporting.",
    },
    {
      slug: "close",
      badge: "Best high-touch call and SMS follow-up",
      description:
        "Built-in calling and SMS with pipeline views—when you actively work motor club, fleet, or referral leads.",
      rowBestFor: "Velocity selling",
      why: "Close helps mobile mechanics who dedicate time to outbound—calling shops, property managers, or leads from ads—with unified SMS and call logging. Higher per-seat cost must be justified by recurring commercial or fleet work, not one-off driveways. Trial during weeks when you actually have bandwidth to follow up. Close fits when speed-to-contact and persistent touch drive revenue.",
    },
    {
      slug: "pipedrive",
      badge: "Best simple pipeline for quoted work",
      description:
        "Clear stages for quotes, scheduled jobs, and won fleet accounts—without marketing suite bloat.",
      rowBestFor: "Lightweight pipeline",
      why: "Pipedrive gives mobile mechanics a straightforward place to track open quotes and small B2B pursuits—activities and reminders so commercial follow-ups do not die when you are under a truck. Pair with your calendar; keep invoices in accounting tools. Trial with mandatory next-step tasks. Pipedrive shines when you need pipeline discipline without becoming a CRM administrator.",
    },
  ],
  editorialGuidance: [
    E("Keep CRM minimal", "Solo operators fail when CRM has more fields than they will maintain."),
    E("Fleet and motor club notes", "Rate structures and gate codes belong on the account record."),
    E("Handoff to invoicing", "Link to invoice or job IDs in notes for clean year-end review."),
    E("Speed first", "If CRM slows you down at the curb, simplify stages."),
  ],
  faqItems: [
    {
      q: "What CRM should mobile mechanics use?",
      a: "Copper for Gmail-centric solo pros, Close when call and SMS volume drives fleet and commercial work, and Pipedrive for simple pipelines on quoted opportunities.",
    },
    {
      q: "Do solo mechanics need CRM?",
      a: "Optional until fleet, motor club, or referral accounts matter—then lightweight CRM beats sticky notes.",
    },
    {
      q: "Mobile mechanic CRM vs accounting software?",
      a: "Accounting tracks money; CRM tracks relationships and follow-up—use both with clear roles.",
    },
  ],
});

export const CLEANING_FRANCHISES_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "cleaning-franchises",
  title: "Best CRM Software for Cleaning Franchises (2026)",
  subtitle:
    "Compare CRM tools for cleaning franchises: territory sales, recurring commercial contracts, franchise reporting rhythms, and marketing that respects brand standards.",
  introParagraph:
    "Cleaning franchisees and regional operators sell recurring routes—residential and commercial—with onboarding complexity and brand-mandated follow-ups. CRM software helps track prospects across territories, handoffs between sales and operations, and renewal or upsell conversations without losing accountability when teams scale.",
  picks: [
    {
      slug: "keap",
      badge: "Best CRM plus territory-style automation",
      description:
        "Tags, campaigns, and automation for onboarding sequences, quotes, and follow-ups—when you will invest in setup.",
      rowBestFor: "Automation-heavy franchise ops",
      why: "Keap combines CRM with marketing automation—useful for cleaning franchises that need repeatable onboarding, quote follow-ups, and nurture within brand guidelines. Measure booked cleans and commercial proposals, not email vanity metrics. Pilot one territory before system-wide rollout. Keap fits owner-operators who will configure campaigns with franchise compliance in mind.",
    },
    {
      slug: "zoho-crm",
      badge: "Best Zoho stack value",
      description:
        "Workflows, territories, and affordable scaling—strong if you also run Zoho Books or other Zoho ops tools.",
      rowBestFor: "Zoho ecosystem franchises",
      why: "Zoho CRM offers territory management, workflows, and lower seat cost for multi-unit cleaning brands that need structured handoffs between sales and ops—especially when Zoho Books or other Zoho apps already run the business. Blueprints can enforce steps after a commercial walkthrough. Trial with real franchise territories and naming discipline. Zoho wins on integrated value when you commit to the suite.",
    },
    {
      slug: "hubspot",
      badge: "Best inbound marketing + CRM alignment",
      description:
        "Forms, chat, and email tied to CRM when territories invest in local inbound and partner channels.",
      rowBestFor: "Inbound growth",
      why: "HubSpot helps cleaning franchises that buy local leads or invest in partnerships—CRM ties spend to booked contracts when attribution is configured honestly. Free CRM can unify inbound before you pay for Marketing Hub. Segment lists for residential versus commercial playbooks. HubSpot fits growth-focused territories with dedicated sales or marketing time.",
    },
  ],
  editorialGuidance: [
    E("Franchise compliance", "Confirm approved messaging and data use before automations go live."),
    E("Commercial vs residential", "Separate pipelines or deal types—sales motions differ."),
    E("Territory hygiene", "Naming and ownership rules prevent reps from fighting over the same ZIP."),
    E("Renewal and upsell", "Tasks or deals for contract anniversaries and add-on services."),
  ],
  faqItems: [
    {
      q: "What CRM is best for cleaning franchises?",
      a: "Keap when CRM plus marketing automation is central, Zoho CRM for territory workflows and suite value, and HubSpot when inbound marketing and lead attribution matter.",
    },
    {
      q: "Franchise CRM vs brand-provided tools?",
      a: "Use franchisor systems where required; add CRM when local B2B sales, marketing ROI, and territory accountability need a dedicated hub.",
    },
    {
      q: "Affordable CRM for janitorial startups?",
      a: "HubSpot and Zoho CRM free tiers support pilots; expect paid automation as territories add reps.",
    },
  ],
});

export const EVENT_SERVICES_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "event-services",
  title: "Best CRM Software for Event Services (2026)",
  subtitle:
    "Compare CRM tools for event production: fast proposal cycles, B2B pursuits, vendor-heavy projects, and follow-up when clients compare multiple vendors quickly.",
  introParagraph:
    "Event services—AV, staging, rentals, catering support—sell deadline-driven projects with many stakeholders and tight handoffs. CRM software helps sales and producers track opportunities, proposal versions, and next actions so high-season volume does not bury follow-ups on signed contracts.",
  picks: [
    {
      slug: "hubspot",
      badge: "Best B2B event sales and marketing",
      description:
        "Companies, deals, and optional marketing when you pursue corporate programs, agencies, and venue partnerships.",
      rowBestFor: "Corporate + agency CRM",
      why: "HubSpot supports event services firms that sell to planners, marketing teams, and agencies—one place for contacts, deal history, and optional email sequences for nurture. Use custom properties for event date, load-in window, and technical requirements. Trial with active pursuits only and enforce attachment discipline for scopes. HubSpot fits when growth depends on relationship selling plus measurable inbound.",
    },
    {
      slug: "monday-crm",
      badge: "Best visual deal + production alignment",
      description:
        "Boards for event type, month, or producer—when sales and ops need shared language without duplicating full PM software.",
      rowBestFor: "Visual event pipelines",
      why: "Monday CRM helps event companies that want boards reflecting show clusters, verticals, or producers—with automations when proposals age past internal SLA. Keep CRM focused on selling; production detail may live elsewhere. Trial one vertical (for example corporate annual meetings) before expanding. Monday suits teams that think visually and need status clarity across sales and ops leads.",
    },
    {
      slug: "pipedrive",
      badge: "Best fast-cycle follow-up",
      description:
        "Activity-driven pipeline for short decision windows—reduces silent losses after proposals go out.",
      rowBestFor: "Deal discipline",
      why: "Pipedrive keeps event sales teams focused on next calls when clients compare multiple vendors on tight timelines—stages like qualified, proposal sent, revision, signed. Mobile-friendly activities matter when producers sell from venues. Trial during a busy booking season with daily logging. Pipedrive wins when execution on open deals is the bottleneck.",
    },
  ],
  editorialGuidance: [
    E("Event date and load-in fields", "Custom properties reduce scope misunderstandings."),
    E("Stakeholder maps", "Planners, agencies, technical directors—know who actually signs."),
    E("Revision tracking", "Notes or attachments for proposal versions—avoid “which PDF is final?” fights."),
    E("CRM vs event PM tools", "Production scheduling may live elsewhere; CRM tracks selling and client communication."),
  ],
  faqItems: [
    {
      q: "What CRM should event services companies use?",
      a: "HubSpot for B2B event sales with optional marketing, Monday for visual pipelines aligned to how you sell shows, and Pipedrive for strict follow-up on fast-cycle proposals.",
    },
    {
      q: "Event CRM vs rental inventory software?",
      a: "Inventory systems track gear; CRM tracks customer relationships, pursuits, and follow-ups—integrate IDs where possible.",
    },
    {
      q: "Small event company CRM?",
      a: "Start with HubSpot’s free CRM or Pipedrive trials; add marketing when you measure ROI.",
    },
  ],
});

export const HOME_INSPECTORS_CRM_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "home-inspectors",
  title: "Best CRM Software for Home Inspectors (2026)",
  subtitle:
    "Compare CRM tools for home inspectors: agent and direct-to-consumer pipelines, inspection add-ons, and follow-up that keeps referral relationships warm.",
  introParagraph:
    "Home inspectors sell fixed-price services in a referral-heavy market—agents, past clients, and online leads all matter. CRM software gives solo inspectors and small teams a place to track relationships, automate reminders, and segment marketing without blasting every contact the same way.",
  picks: [
    {
      slug: "copper",
      badge: "Best Gmail-native inspector offices",
      description:
        "CRM in Google Workspace—minimal friction for owners who live in email with agents and coordinators.",
      rowBestFor: "Gmail-centric inspectors",
      why: "Copper fits home inspection businesses built on Gmail and Calendar—suggested records next to agent threads, simple pipelines for quoted add-ons or commercial walkthroughs, and fast adoption because inspectors are not living in another app between reports. Trial by linking top agent offices and tagging referral sources honestly. Copper wins when relationship memory and lightweight pipeline beat enterprise features.",
    },
    {
      slug: "hubspot",
      badge: "Best marketing + database growth",
      description:
        "Lists, email, and forms when you nurture agents, past clients, and online leads with segmented outreach.",
      rowBestFor: "Growth-focused inspectors",
      why: "HubSpot helps inspection brands that invest in SEO, agent partnerships, or email nurture—CRM segments for buyers, sellers, agents, and past clients with optional campaigns for seasonal reminders. Start with free CRM; add Marketing Hub when you can measure cost per booked inspection. Import clean data only—bad lists make bad automation. HubSpot fits teams ready to treat the database as a growth asset.",
    },
    {
      slug: "pipedrive",
      badge: "Best simple pipeline for commercial and multi-inspector teams",
      description:
        "Clear stages for quotes, scheduled inspections, and add-on upsells—lightweight enough to maintain.",
      rowBestFor: "Pipeline discipline",
      why: "Pipedrive gives growing inspection firms a straightforward place to track commercial opportunities, multi-inspector scheduling handoffs, and upsell paths for radon or sewer scopes—activities and reminders so nothing dies in shared inboxes. Trial with one pipeline per revenue line. Pipedrive shines when modest structure beats chaos without Salesforce overhead.",
    },
  ],
  editorialGuidance: [
    E("Agent relationship notes", "Track who refers consistently—reciprocity matters."),
    E("Add-on opportunities", "Deals or tasks for ancillaries tied to property profile."),
    E("Compliance and brand", "Automation must respect state marketing rules and franchise standards if applicable."),
    E("CRM vs report software", "Reporting tools deliver deliverables; CRM tracks selling and relationships."),
  ],
  faqItems: [
    {
      q: "What is the best CRM for home inspectors?",
      a: "Copper for Gmail-centric offices, HubSpot when marketing and segmented outreach drive growth, and Pipedrive for clear pipelines on commercial work and add-ons.",
    },
    {
      q: "Do solo home inspectors need CRM?",
      a: "Spreadsheets work until referral follow-up and marketing lists outgrow memory—lightweight CRM often pays for itself.",
    },
    {
      q: "Free CRM for home inspection businesses?",
      a: "HubSpot’s free CRM is a common pilot; add paid tiers when automation and multi-user access matter.",
    },
  ],
});
