/**
 * Field service management hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/field-service/page.tsx.
 */

import {
  getFieldServiceReviewUrl,
  getFieldServiceCompareUrl,
  getFieldServiceBestForUrl,
  getFieldServiceAlternativeUrl,
} from "@/lib/routes";
import type { FeaturedPickRef, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";

// ——— Logo paths (place under /public/Logos/) ———
const LOGOS = {
  jobber: "/Logos/jobber.png",
  housecallpro: "/Logos/housecallpro.jpeg",
  servicetitan: "/Logos/servicetitan.png",
  servicefusion: "/Logos/servicefusion.jpg",
  workiz: "/Logos/workiz.jpeg",
  kickserv: "/Logos/kickserv.jpeg",
  servicem8: "/Logos/servicem8.png",
  fieldedge: "/Logos/fieldedge.jpeg",
  mhelpdesk: "/Logos/mhelpdesk.png",
  fieldpulse: "/Logos/fieldpulse.png",
  servicetrade: "/Logos/servicetrade.jpeg",
  "workwave-service": "/Logos/workwave.jpeg",
  buildops: "/Logos/buildops.jpeg",
  connecteam: "/Logos/connecteam.jpeg",
  "oracle-field-service": "/Logos/oracle.png",
  simpro: "/Logos/simpro.jpeg",
  zuper: "/Logos/zuper.jpeg",
} as const;

/** Top field service picks — slugs resolve to canonical `fieldServiceBestSoftware` data */
export const FIELD_SERVICE_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "jobber" },
  { slug: "housecall-pro" },
  { slug: "servicetitan" },
  { slug: "service-fusion" },
  { slug: "simpro" },
  { slug: "workiz" },
  { slug: "fieldpulse" },
  { slug: "zuper" },
];

/** Comparison table rows for the hub (field service tools) — canonical pick data. */
export const FIELD_SERVICE_COMPARISON_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("field-service", [
    "jobber",
    "housecall-pro",
    "servicetitan",
    "service-fusion",
    "fieldpulse",
    "servicetrade",
    "workwave-service",
    "buildops",
    "workiz",
    "kickserv",
    "servicem8",
    "fieldedge",
    "mhelpdesk",
  ]).map(toHubComparisonTableRow),
];

/** Best field service software by use case (scenario) links — default pill hub UI; field-service hub uses editorial blocks instead. */
export const FIELD_SERVICE_SCENARIO_LINKS = [
  { label: "Best for plumbing", href: getFieldServiceBestForUrl("plumbing") },
  { label: "Best for HVAC", href: getFieldServiceBestForUrl("hvac") },
  { label: "Best for electricians", href: getFieldServiceBestForUrl("electricians") },
  { label: "Best for small business", href: getFieldServiceBestForUrl("small-business") },
  { label: "Best for general contractors", href: getFieldServiceBestForUrl("contractors") },
  { label: "Best for painting", href: getFieldServiceBestForUrl("painting") },
  { label: "Best for roofing", href: getFieldServiceBestForUrl("roofing") },
  { label: "Best for landscaping", href: getFieldServiceBestForUrl("landscaping") },
  { label: "Best for pool service", href: getFieldServiceBestForUrl("pool-service") },
  { label: "All best-for scenarios →", href: "/field-service/best-for" },
] as const;

/**
 * Trade / company-type entry points (identity navigation). Only routes that exist under /field-service/best-for/.
 */
export const FIELD_SERVICE_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "HVAC businesses", href: getFieldServiceBestForUrl("hvac") },
  { label: "Plumbing companies", href: getFieldServiceBestForUrl("plumbing") },
  { label: "Electricians", href: getFieldServiceBestForUrl("electricians") },
  { label: "General contractors", href: getFieldServiceBestForUrl("contractors") },
  { label: "Painting contractors", href: getFieldServiceBestForUrl("painting") },
  { label: "Roofing companies", href: getFieldServiceBestForUrl("roofing") },
  { label: "Construction companies", href: getFieldServiceBestForUrl("construction") },
  { label: "Remodeling businesses", href: getFieldServiceBestForUrl("remodeling") },
  { label: "Handyman businesses", href: getFieldServiceBestForUrl("handyman") },
  { label: "Landscaping companies", href: getFieldServiceBestForUrl("landscaping") },
  { label: "Property management", href: getFieldServiceBestForUrl("property-management") },
  { label: "Pest control", href: getFieldServiceBestForUrl("pest-control") },
  { label: "Pool service", href: getFieldServiceBestForUrl("pool-service") },
  { label: "Junk removal", href: getFieldServiceBestForUrl("junk-removal") },
  { label: "Moving companies", href: getFieldServiceBestForUrl("moving") },
  { label: "Small business", href: getFieldServiceBestForUrl("small-business") },
  { label: "All use cases", href: "/field-service/best-for" },
];

/** Optional: single group label for business-type section */
export const FIELD_SERVICE_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "Browse by trade or company type", links: FIELD_SERVICE_BY_BUSINESS_TYPE },
];

/** Editorial “by use case” blocks for the field service hub (scenario-based recommendations, not trade identity). */
export const FIELD_SERVICE_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Best for small teams and local ops",
    body:
      "If you run a lean crew or solo operation, you need scheduling, dispatch, and invoicing without enterprise implementation drag. The goal is fewer tools and faster adoption—mobile apps that techs actually use and clear billing from the job. We focus on platforms that stay approachable at low headcount while still replacing spreadsheets.",
    links: [
      { label: "Best field service software for small business →", href: getFieldServiceBestForUrl("small-business") },
      { label: "Mobile FSM apps for technicians (guide) →", href: "/field-service/guides/mobile-field-service-apps-for-technicians" },
      { label: "See our full rankings →", href: "/field-service/best-field-service-software" },
    ],
  },
  {
    title: "Best for growing, dispatch-heavy operations",
    body:
      "When call volume grows and you’re juggling multiple trucks, dispatch boards, capacity planning, and reporting become the bottleneck. Lightweight tools can feel underpowered; you need routing, job costing visibility, and often marketing or reporting depth. That’s where platforms built for scale—ServiceTitan is a common example—earn their place.",
    links: [
      { label: "Full rankings & picks for growing teams →", href: "/field-service/best-field-service-software" },
      { label: "Dispatch & capacity planning (guide) →", href: "/field-service/guides/dispatch-and-capacity-planning-for-field-service" },
      { label: "Jobber vs ServiceTitan →", href: getFieldServiceCompareUrl("jobber-vs-servicetitan") },
      { label: "Housecall Pro vs ServiceTitan →", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
      { label: "FieldPulse vs Jobber (ops-heavy trades) →", href: getFieldServiceCompareUrl("fieldpulse-vs-jobber") },
    ],
  },
  {
    title: "Commercial service, inspections, and mechanical scale",
    body:
      "When your revenue looks like contracts, inspection rounds, SLAs, or commercial mechanical work—not only homeowner tickets—your shortlist shifts. Documentation, customer-facing reporting, and job complexity matter as much as dispatch speed. Compare platforms on real commercial workflows, not residential demos alone.",
    links: [
      { label: "ServiceTrade vs ServiceTitan →", href: getFieldServiceCompareUrl("servicetrade-vs-servicetitan") },
      { label: "BuildOps vs Service Fusion →", href: getFieldServiceCompareUrl("buildops-vs-service-fusion") },
      { label: "Simpro vs ServiceTitan →", href: getFieldServiceCompareUrl("simpro-vs-servicetitan") },
    ],
  },
  {
    title: "Best for general contractors coordinating jobs and crews",
    body:
      "General and mixed-trade contractors need one place for jobs, change orders, estimates, and customer communication—without losing visibility across crews. The right fit is less about a single trade and more about workflow: estimates to invoice, document storage, and how subs and techs get updates in the field.",
    links: [
      { label: "Best field service software for general contractors →", href: getFieldServiceBestForUrl("contractors") },
      { label: "Connecteam vs Housecall Pro (workforce vs FSM) →", href: getFieldServiceCompareUrl("connecteam-vs-housecall-pro") },
    ],
  },
  {
    title: "Strong field ops on a tighter budget",
    body:
      "Not every shop needs a full enterprise stack. If price sensitivity matters, look for transparent per-user or per-tech pricing, solid core scheduling and invoicing, and room to grow without forced add-ons. Compare how lower-cost contenders stack up against all-in-one leaders before you commit.",
    links: [
      { label: "Jobber vs Workiz (value vs features) →", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
      { label: "FSM & accounting integration (guide) →", href: "/field-service/guides/field-service-software-and-accounting-integration" },
      { label: "See our full rankings →", href: "/field-service/best-field-service-software" },
    ],
  },
  {
    title: "Trade-specific workflows (HVAC, plumbing, electrical)",
    body:
      "Team size and budget are one lens; your trade is another. HVAC, plumbing, and electrical shops often need industry-specific workflows—recurring maintenance, estimates tied to equipment, or code-aware job documentation. For identity-based “software for my trade” entry points, use the business-type section below rather than repeating those links here.",
    links: [{ label: "Go to field service by business type →", href: "#by-trade" }],
  },
];

/** Card data for Popular field service comparisons. */
export type FieldServicePopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const FIELD_SERVICE_POPULAR_COMPARISONS: FieldServicePopularComparisonCard[] = [
  {
    slug: "jobber-vs-housecall-pro",
    productA: { name: "Jobber", logoSrc: LOGOS.jobber },
    productB: { name: "Housecall Pro", logoSrc: LOGOS.housecallpro },
    summaryParagraph:
      "Jobber and Housecall Pro both serve home service contractors with scheduling, dispatch, and invoicing. Jobber offers broader plan options; Housecall Pro is tuned for home service pros.",
    href: getFieldServiceCompareUrl("jobber-vs-housecall-pro"),
  },
  {
    slug: "jobber-vs-servicetitan",
    productA: { name: "Jobber", logoSrc: LOGOS.jobber },
    productB: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    summaryParagraph:
      "Jobber is the SMB-friendly all-in-one FSM; ServiceTitan is the enterprise home-service platform for high-volume shops that need call-center depth, pricebooks, and heavy analytics. We compare fit, cost, and implementation—not logos.",
    href: getFieldServiceCompareUrl("jobber-vs-servicetitan"),
  },
  {
    slug: "housecall-pro-vs-servicetitan",
    productA: { name: "Housecall Pro", logoSrc: LOGOS.housecallpro },
    productB: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    summaryParagraph:
      "Housecall Pro suits smaller teams and solo pros; ServiceTitan targets growing companies with more advanced dispatch, marketing, and reporting.",
    href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"),
  },
  {
    slug: "connecteam-vs-housecall-pro",
    productA: { name: "Connecteam", logoSrc: LOGOS.connecteam },
    productB: { name: "Housecall Pro", logoSrc: LOGOS.housecallpro },
    summaryParagraph:
      "Connecteam is workforce-first—shifts, time tracking, and internal comms for deskless teams. Housecall Pro is full home-service FSM. This guide clarifies which problem you are solving so you do not buy the wrong category.",
    href: getFieldServiceCompareUrl("connecteam-vs-housecall-pro"),
  },
  {
    slug: "connecteam-vs-servicetitan",
    productA: { name: "Connecteam", logoSrc: LOGOS.connecteam },
    productB: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    summaryParagraph:
      "ServiceTitan is built for large trade and home service operations end-to-end; Connecteam adds dedicated workforce tooling that some enterprises layer on top. We explain when to combine, when to choose one, and what you give up either way.",
    href: getFieldServiceCompareUrl("connecteam-vs-servicetitan"),
  },
  {
    slug: "jobber-vs-workiz",
    productA: { name: "Jobber", logoSrc: LOGOS.jobber },
    productB: { name: "Workiz", logoSrc: LOGOS.workiz },
    summaryParagraph:
      "Jobber and Workiz both cover scheduling, jobs, and invoicing. Jobber has a wider feature set; Workiz is strong for cleaning and field teams on a budget.",
    href: getFieldServiceCompareUrl("jobber-vs-workiz"),
  },
  {
    slug: "servicetitan-vs-service-fusion",
    productA: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    productB: { name: "Service Fusion", logoSrc: LOGOS.servicefusion },
    summaryParagraph:
      "ServiceTitan and Service Fusion serve HVAC and plumbing with dispatch and estimating. ServiceTitan adds marketing and scale; Service Fusion focuses on core FSM.",
    href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion"),
  },
  {
    slug: "kickserv-vs-jobber",
    productA: { name: "Kickserv", logoSrc: LOGOS.kickserv },
    productB: { name: "Jobber", logoSrc: LOGOS.jobber },
    summaryParagraph:
      "Kickserv and Jobber both help contractors manage jobs and customers. Jobber is more all-in-one; Kickserv suits small service businesses that want straightforward scheduling and CRM.",
    href: getFieldServiceCompareUrl("kickserv-vs-jobber"),
  },
  {
    slug: "fieldpulse-vs-jobber",
    productA: { name: "FieldPulse", logoSrc: LOGOS.fieldpulse },
    productB: { name: "Jobber", logoSrc: LOGOS.jobber },
    summaryParagraph:
      "FieldPulse and Jobber both serve trade contractors with dispatch and mobile workflows. Jobber is the broader SMB default; FieldPulse leans into operational field execution for growing crews.",
    href: getFieldServiceCompareUrl("fieldpulse-vs-jobber"),
  },
  {
    slug: "servicetrade-vs-servicetitan",
    productA: { name: "ServiceTrade", logoSrc: LOGOS.servicetrade },
    productB: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    summaryParagraph:
      "ServiceTrade and ServiceTitan compete for serious field budgets: ServiceTitan leads many large home-service evaluations, while ServiceTrade aligns to commercial inspection and documentation-heavy service models.",
    href: getFieldServiceCompareUrl("servicetrade-vs-servicetitan"),
  },
  {
    slug: "simpro-vs-servicetitan",
    productA: { name: "Simpro", logoSrc: LOGOS.simpro },
    productB: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    summaryParagraph:
      "Simpro and ServiceTitan both serve trade contractors at scale: ServiceTitan is the US home-service enterprise benchmark, while Simpro emphasizes job, inventory, and project workflows across mixed work types.",
    href: getFieldServiceCompareUrl("simpro-vs-servicetitan"),
  },
  {
    slug: "zuper-vs-jobber",
    productA: { name: "Zuper", logoSrc: LOGOS.zuper },
    productB: { name: "Jobber", logoSrc: LOGOS.jobber },
    summaryParagraph:
      "Zuper and Jobber both run field operations for contractors: Jobber is the common SMB default, while Zuper fits teams that need flexible workflows and integration-heavy setups.",
    href: getFieldServiceCompareUrl("zuper-vs-jobber"),
  },
];

/** Cross-links for “alternatives to X” pages (hub, guides footer, compare hero). */
export const FIELD_SERVICE_ALTERNATIVES_QUICK_LINKS: { label: string; href: string }[] = [
  { label: "FieldPulse", href: getFieldServiceAlternativeUrl("fieldpulse") },
  { label: "ServiceTrade", href: getFieldServiceAlternativeUrl("servicetrade") },
  { label: "WorkWave Service", href: getFieldServiceAlternativeUrl("workwave-service") },
  { label: "BuildOps", href: getFieldServiceAlternativeUrl("buildops") },
  { label: "Connecteam", href: getFieldServiceAlternativeUrl("connecteam") },
  { label: "Oracle Field Service", href: getFieldServiceAlternativeUrl("oracle-field-service") },
  { label: "Simpro", href: getFieldServiceAlternativeUrl("simpro") },
  { label: "Zuper", href: getFieldServiceAlternativeUrl("zuper") },
];

/** FAQ items for the hub. */
export const FIELD_SERVICE_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is field service management software?",
    a: "Field service management (FSM) software helps contractors and service businesses schedule jobs, dispatch technicians, manage customers, and handle invoicing and payments. It replaces spreadsheets and paper with one system so you can see who is going where, what jobs are due, and get paid faster.",
  },
  {
    q: "What software do contractors use to manage jobs?",
    a: "Contractors often use field service software like Jobber, Housecall Pro, ServiceTitan, Service Fusion, Simpro, FieldPulse, Zuper, Workiz, or WorkWave Service. These tools combine scheduling, dispatch, customer records, estimates, and invoicing so plumbers, HVAC techs, electricians, and other field teams can run jobs from one place.",
  },
  {
    q: "What is the best field service software for small businesses?",
    a: "Jobber and Housecall Pro are strong choices for small service businesses: both offer scheduling, dispatch, invoicing, and mobile apps at reasonable prices. Workiz and Kickserv are also good for smaller teams. Choose based on your trade, team size, and whether you need heavy customization or a simple setup.",
  },
  {
    q: "Do field service tools include invoicing and scheduling?",
    a: "Yes. Most field service management tools include both scheduling and invoicing. You can assign jobs to technicians, track status, and send estimates and invoices from the same platform. Many also support online payments and recurring billing for maintenance contracts.",
  },
  {
    q: "Where can I find alternatives to a specific field service platform?",
    a: "BeltStack publishes dedicated alternatives pages for major FSM tools—each lists comparable products with pricing context, comparison links, and paths to full reviews. Start from the field service hub links to FieldPulse, ServiceTrade, WorkWave Service, BuildOps, Connecteam, Oracle Field Service, Simpro, or Zuper alternatives, or open the same pages from product reviews and SoftwarePick cards.",
  },
];

/** Methodology for the hub. */
export const FIELD_SERVICE_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review field service management software",
  sub: "Transparent process, contractor-focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate FSM tools on scheduling and dispatch, mobile experience, invoicing and payments, customer management, and reporting.",
  bullets: [
    "We test core workflows: creating jobs, scheduling and dispatching technicians, sending estimates and invoices, and tracking payments.",
    "We compare pricing tiers, user limits, and feature sets so you understand total cost at your team size.",
    "We look at mobile apps for technicians, customer portals, and integrations with accounting and payment tools.",
  ],
};
