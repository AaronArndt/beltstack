/**
 * Field service alternatives page data.
 * Used by app/field-service/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live field service review pages.
 */

import { getFieldServiceReviewUrl, getFieldServiceCompareUrl, getFieldServiceBestForUrl } from "@/lib/routes";
import { getFieldServiceComparisonBySlug } from "@/lib/data/fieldServiceComparisons";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/field-service", label: "Field service" };
const ROUNDUP_HREF = "/field-service/best-field-service-software";
const COMPARE_HUB = "/field-service/compare";
const GUIDES_HUB = "/field-service/guides";

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

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Team size and pricing", body: "Small teams (1–5 techs) often fit Jobber, Housecall Pro, or Workiz with transparent pricing. ServiceTitan and FieldEdge target larger companies with custom pricing. Compare per-user or per-crew cost at your size." },
  { heading: "Trade focus", body: "Plumbing, HVAC, electrical, and cleaning have different needs. Some tools (Service Fusion, FieldEdge) are strong in HVAC and plumbing; others (Jobber, Housecall Pro) are more generalist. Match features to your trade." },
  { heading: "Scheduling and dispatch", body: "Drag-and-drop scheduling, route optimization, and mobile dispatch matter for multi-truck operations. Compare how well each tool handles recurring jobs and real-time updates." },
  { heading: "Estimates, invoicing, and payments", body: "Field service software often bundles estimates, invoices, and payment collection. Check if you need integrated payments or can connect to your existing processor." },
  { heading: "Mobile experience", body: "Technicians need a solid mobile app for job details, time tracking, and customer signatures. Compare mobile reviews and offline capability." },
];

function buildTableRows(
  originalRow: AlternativesTableRow,
  alternatives: AlternativesTopPick[]
): AlternativesTableRow[] {
  const altRows: AlternativesTableRow[] = alternatives.map((a) => ({
    slug: a.slug,
    name: a.name,
    logoSrc: a.logoSrc,
    bestFor: a.bestFor,
    startingPrice: a.startingPrice ?? "—",
    standoutFeature: a.standoutFeature ?? a.bestFor,
    reviewHref: a.reviewHref,
  }));
  return [originalRow, ...altRows];
}

function fsRel(slug: string) {
  return toAlternativesRelatedComparison(getFieldServiceCompareUrl(slug), getFieldServiceComparisonBySlug(slug));
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Field service hub", href: CATEGORY.href },
    { label: "Best field service software", href: ROUNDUP_HREF },
    { label: "Compare field service software", href: COMPARE_HUB },
    { label: "Field service guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getFieldServiceBestForUrl("small-business") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Jobber alternatives ———
const JOBBER_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service pros", description: "Strong for home service with lower starting price.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), compareHref: getFieldServiceCompareUrl("jobber-vs-housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service; value" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "dispatch-heavy trades", description: "Ops-forward FSM for growing contractor crews.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-jobber"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch; trade ops" },
  { slug: "zuper", name: "Zuper", logoSrc: LOGOS.zuper, rating: "4.4", bestFor: "flexible FSM", description: "Configurable field workflows and integrations.", reviewHref: getFieldServiceReviewUrl("zuper"), compareHref: getFieldServiceCompareUrl("zuper-vs-jobber"), startingPrice: "Custom / tiered", standoutFeature: "Flexible FSM" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), compareHref: getFieldServiceCompareUrl("jobber-vs-workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams; value" },
  { slug: "connecteam", name: "Connecteam", logoSrc: LOGOS.connecteam, rating: "4.3", bestFor: "workforce & shifts", description: "Deskless workforce scheduling and time tracking—pair with FSM if needed.", reviewHref: getFieldServiceReviewUrl("connecteam"), compareHref: getFieldServiceCompareUrl("connecteam-vs-jobber"), startingPrice: "From ~$29/mo", standoutFeature: "Workforce ops" },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "growing companies", description: "Enterprise-grade for larger operations.", reviewHref: getFieldServiceReviewUrl("servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise; depth" },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, rating: "4.3", bestFor: "small service businesses", description: "Straightforward FSM for small businesses.", reviewHref: getFieldServiceReviewUrl("kickserv"), compareHref: getFieldServiceCompareUrl("kickserv-vs-jobber"), startingPrice: "From ~$55/mo", standoutFeature: "Small business" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC & plumbing", description: "HVAC and plumbing value and depth.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
];

const jobberOriginalRow: AlternativesTableRow = {
  slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, bestFor: "overall contractors", startingPrice: "From ~$69/mo", standoutFeature: "All-in-one; balance", reviewHref: getFieldServiceReviewUrl("jobber"),
};

const jobberPage: AlternativesTemplateProps = {
  title: "Best Jobber Alternatives (2026)",
  subtitle: "If Jobber isn't the right fit—because of cost, trade focus, or scale—these field service management alternatives offer strong options for contractors and home service businesses.",
  productName: "Jobber",
  productSlug: "jobber",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getFieldServiceReviewUrl("jobber"),
  quickAnswerParagraphs: [
    "Jobber is a strong default for contractors; alternatives include Housecall Pro for home service pros at lower entry price, FieldPulse for dispatch-heavy trade operations, Workiz for small teams and value, ServiceTitan for growing companies, Kickserv for small service businesses, and Service Fusion for HVAC and plumbing. Housecall Pro and Workiz are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Housecall Pro and Workiz often have lower starting prices. For teams that want similar core features at lower cost." },
    { heading: "Scale", body: "ServiceTitan suits larger, growing companies. Jobber fits small to mid-size; ServiceTitan adds enterprise depth." },
    { heading: "Trade", body: "Service Fusion and FieldEdge are strong in HVAC and plumbing. For trade-specific depth." },
  ],
  topAlternatives: JOBBER_ALTERNATIVES,
  comparisonTableRows: buildTableRows(jobberOriginalRow, JOBBER_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Housecall Pro", heading: "Best for home service pros", body: "Housecall Pro is strong for home service with a lower starting price. For plumbers, HVAC, and electricians who want value.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), compareHref: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    { productName: "FieldPulse", heading: "Best for dispatch-heavy trade crews", body: "FieldPulse emphasizes operational dispatch and technician workflows for growing contractors. Compare when operations—not only marketing—drive the evaluation.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-jobber") },
    { productName: "Zuper", heading: "Best for flexible field workflows", body: "Zuper suits teams that need configurable automations and integrations beyond templated SMB defaults.", reviewHref: getFieldServiceReviewUrl("zuper"), compareHref: getFieldServiceCompareUrl("zuper-vs-jobber") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For businesses that want core FSM without Jobber's price.", reviewHref: getFieldServiceReviewUrl("workiz"), compareHref: getFieldServiceCompareUrl("jobber-vs-workiz") },
    { productName: "Connecteam", heading: "Best for workforce coordination", body: "Connecteam is workforce-first—pair with an FSM or choose Jobber alone if job-to-cash workflows are the main gap.", reviewHref: getFieldServiceReviewUrl("connecteam"), compareHref: getFieldServiceCompareUrl("connecteam-vs-jobber") },
    { productName: "ServiceTitan", heading: "Best for growing companies", body: "ServiceTitan is enterprise-grade for larger operations. For companies that have outgrown Jobber's scale.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    { productName: "Kickserv", heading: "Best for small service businesses", body: "Kickserv is straightforward FSM for small businesses. Compare with Jobber for fit and price.", reviewHref: getFieldServiceReviewUrl("kickserv"), compareHref: getFieldServiceCompareUrl("kickserv-vs-jobber") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion offers HVAC and plumbing value and depth. For trade-focused teams.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    fsRel("jobber-vs-housecall-pro"),
    fsRel("fieldpulse-vs-jobber"),
    fsRel("zuper-vs-jobber"),
    fsRel("jobber-vs-workiz"),
    fsRel("connecteam-vs-jobber"),
    fsRel("kickserv-vs-jobber"),
  ],
  relatedResources: defaultRelatedResources("Jobber", getFieldServiceReviewUrl("jobber")),
  faqItems: [
    { q: "What is the best Jobber alternative?", a: "Housecall Pro and Workiz are the best alternatives for most contractors. Housecall Pro for home service value; Workiz for small teams; ServiceTitan for larger companies." },
    { q: "Is Jobber better than Housecall Pro?", a: "Jobber is a strong all-around choice; Housecall Pro often has lower starting price and is popular with home service pros. Compare features and pricing for your trade." },
    { q: "Which field service software is cheaper than Jobber?", a: "Workiz and Housecall Pro often have lower entry prices. Compare per-user and feature limits at your team size." },
  ],
};

// ——— Housecall Pro alternatives ———
const HOUSECALL_PRO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "overall", description: "All-in-one balance for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("jobber-vs-housecall-pro"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one; balance" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "trade dispatch ops", description: "Ops-forward FSM when marketing is not the top pain.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-housecall-pro"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch; ops" },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "growing companies", description: "Enterprise-grade for larger operations.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams; value" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC & plumbing", description: "HVAC and plumbing value.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, rating: "4.3", bestFor: "small business", description: "Straightforward FSM for small businesses.", reviewHref: getFieldServiceReviewUrl("kickserv"), startingPrice: "From ~$55/mo", standoutFeature: "Small business" },
];

const housecallProPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Housecall Pro Alternatives (2026)",
  subtitle: "If Housecall Pro isn't the right fit—because of scale, trade focus, or features—these field service management alternatives offer strong options.",
  productName: "Housecall Pro",
  productSlug: "housecall-pro",
  originalReviewHref: getFieldServiceReviewUrl("housecall-pro"),
  quickAnswerParagraphs: [
    "Housecall Pro is strong for home service pros; alternatives include Jobber for all-around balance, FieldPulse when dispatch and field execution matter more than marketing automation, ServiceTitan for growing companies, Workiz for small teams and value, and Service Fusion or Kickserv for different trade focus. Jobber and ServiceTitan are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Scale", body: "ServiceTitan suits larger companies with more trucks and techs. Housecall Pro fits small to mid-size." },
    { heading: "All-around", body: "Jobber is often chosen for its balance of features and polish. Compare scheduling, invoicing, and mobile." },
    { heading: "Cost", body: "Workiz has lower entry price. For teams that need to minimize cost." },
  ],
  topAlternatives: HOUSECALL_PRO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, bestFor: "home service pros", startingPrice: "From ~$49/mo", standoutFeature: "Home service; value", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    HOUSECALL_PRO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best for overall", body: "Jobber offers all-in-one balance for contractors. For teams that want one platform with strong scheduling and invoicing.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    { productName: "FieldPulse", heading: "Best for ops-first trade teams", body: "FieldPulse fits when dispatch rigor and technician workflows beat postcard marketing as the buying criteria.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-housecall-pro") },
    { productName: "ServiceTitan", heading: "Best for growing companies", body: "ServiceTitan is enterprise-grade for larger operations. For companies that need more depth and scale.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion is strong for HVAC and plumbing value. For trade-focused teams.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
    { productName: "Kickserv", heading: "Best for small business", body: "Kickserv is straightforward FSM for small businesses. For simple needs.", reviewHref: getFieldServiceReviewUrl("kickserv") },
  ],
  relatedComparisons: [fsRel("jobber-vs-housecall-pro"), fsRel("housecall-pro-vs-servicetitan")],
  relatedResources: defaultRelatedResources("Housecall Pro", getFieldServiceReviewUrl("housecall-pro")),
  faqItems: [
    { q: "What is the best Housecall Pro alternative?", a: "Jobber for overall balance; ServiceTitan for scale; Workiz for value; Service Fusion for HVAC and plumbing." },
    { q: "Is Housecall Pro better than Jobber?", a: "Housecall Pro often has lower starting price; Jobber is a strong all-around choice. Compare scheduling, invoicing, and mobile for your trade." },
    { q: "Which field service software is for larger companies?", a: "ServiceTitan and FieldEdge target larger, growing companies. Housecall Pro and Jobber suit small to mid-size." },
  ],
};

// ——— ServiceTitan alternatives ———
const SERVICETITAN_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Lower cost for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), compareHref: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"), startingPrice: "From ~$49/mo", standoutFeature: "Home service; value" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC & plumbing", description: "HVAC and plumbing value; lower entry than ServiceTitan.", reviewHref: getFieldServiceReviewUrl("service-fusion"), compareHref: getFieldServiceCompareUrl("servicetitan-vs-service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
  { slug: "simpro", name: "Simpro", logoSrc: LOGOS.simpro, rating: "4.5", bestFor: "trade & inventory depth", description: "Trade operations platform for jobs, projects, and inventory.", reviewHref: getFieldServiceReviewUrl("simpro"), compareHref: getFieldServiceCompareUrl("simpro-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Trade ops; inventory" },
  { slug: "servicetrade", name: "ServiceTrade", logoSrc: LOGOS.servicetrade, rating: "4.5", bestFor: "commercial inspections", description: "Commercial service, inspections, and documentation depth.", reviewHref: getFieldServiceReviewUrl("servicetrade"), compareHref: getFieldServiceCompareUrl("servicetrade-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Commercial; compliance" },
  { slug: "buildops", name: "BuildOps", logoSrc: LOGOS.buildops, rating: "4.4", bestFor: "commercial mechanical", description: "Commercial mechanical operations and complex jobs.", reviewHref: getFieldServiceReviewUrl("buildops"), compareHref: getFieldServiceCompareUrl("buildops-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Commercial mechanical" },
  { slug: "oracle-field-service", name: "Oracle Field Service", logoSrc: LOGOS["oracle-field-service"], rating: "4.4", bestFor: "enterprise field programs", description: "Enterprise field service for Oracle-centric IT roadmaps.", reviewHref: getFieldServiceReviewUrl("oracle-field-service"), compareHref: getFieldServiceCompareUrl("oracle-field-service-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "contractors", description: "All-in-one for small to mid-size contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "fieldedge", name: "FieldEdge", logoSrc: LOGOS.fieldedge, rating: "4.3", bestFor: "HVAC & plumbing depth", description: "HVAC and plumbing depth; custom pricing.", reviewHref: getFieldServiceReviewUrl("fieldedge"), startingPrice: "Custom", standoutFeature: "HVAC; plumbing depth" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams" },
];

const servicetitanPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best ServiceTitan Alternatives (2026)",
  subtitle: "If ServiceTitan isn't the right fit—because of cost, team size, or preference for simpler tools—these field service management alternatives offer strong options.",
  productName: "ServiceTitan",
  productSlug: "servicetitan",
  originalReviewHref: getFieldServiceReviewUrl("servicetitan"),
  quickAnswerParagraphs: [
    "ServiceTitan targets growing service companies; alternatives include Housecall Pro and Jobber for small to mid-size, Service Fusion for HVAC and plumbing value, Simpro for trade operations and inventory depth, ServiceTrade for commercial inspection and documentation workflows, BuildOps for commercial mechanical operations, Oracle Field Service for enterprise Oracle stacks, FieldEdge for similar trade depth, and Workiz for lower cost. Housecall Pro and Service Fusion are common alternatives when cost or simplicity matters.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "ServiceTitan is custom-priced and often higher. Housecall Pro, Jobber, and Workiz have more transparent, lower entry pricing." },
    { heading: "Team size", body: "Smaller teams may not need ServiceTitan's depth. Jobber and Housecall Pro fit small to mid-size well." },
    { heading: "Trade", body: "Service Fusion offers HVAC and plumbing value at lower entry. FieldEdge is another enterprise-style option for trade depth." },
  ],
  topAlternatives: SERVICETITAN_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, bestFor: "growing companies", startingPrice: "Custom", standoutFeature: "Enterprise; depth", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    SERVICETITAN_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro offers lower cost for home service pros. For teams that don't need ServiceTitan's scale.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), compareHref: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion offers HVAC and plumbing value at lower entry than ServiceTitan. Compare features and pricing.", reviewHref: getFieldServiceReviewUrl("service-fusion"), compareHref: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
    { productName: "Simpro", heading: "Best for trade & inventory depth", body: "Simpro fits when jobs, projects, and materials workflows are as important as dispatch—compare head-to-head on real job types.", reviewHref: getFieldServiceReviewUrl("simpro"), compareHref: getFieldServiceCompareUrl("simpro-vs-servicetitan") },
    { productName: "ServiceTrade", heading: "Best for commercial inspection workflows", body: "ServiceTrade fits commercial service models where inspections, SLAs, and customer reporting matter as much as dispatch.", reviewHref: getFieldServiceReviewUrl("servicetrade"), compareHref: getFieldServiceCompareUrl("servicetrade-vs-servicetitan") },
    { productName: "BuildOps", heading: "Best for commercial mechanical contractors", body: "BuildOps targets commercial mechanical operations and complex job execution—compare when your workload is commercial-heavy.", reviewHref: getFieldServiceReviewUrl("buildops"), compareHref: getFieldServiceCompareUrl("buildops-vs-servicetitan") },
    { productName: "Oracle Field Service", heading: "Best for enterprise Oracle programs", body: "Oracle Field Service is for IT-led enterprise deployments—not typical contractor SMBs—compare only if Oracle is already your stack.", reviewHref: getFieldServiceReviewUrl("oracle-field-service"), compareHref: getFieldServiceCompareUrl("oracle-field-service-vs-servicetitan") },
    { productName: "Jobber", heading: "Best for contractors", body: "Jobber is all-in-one for small to mid-size contractors. For teams that want strong features without enterprise pricing.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldEdge", heading: "Best for HVAC & plumbing depth", body: "FieldEdge offers HVAC and plumbing depth with custom pricing. Alternative enterprise-style option.", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
  ],
  relatedComparisons: [
    fsRel("housecall-pro-vs-servicetitan"),
    fsRel("servicetitan-vs-service-fusion"),
    fsRel("simpro-vs-servicetitan"),
    fsRel("oracle-field-service-vs-servicetitan"),
    fsRel("servicetrade-vs-servicetitan"),
    fsRel("buildops-vs-servicetitan"),
  ],
  relatedResources: defaultRelatedResources("ServiceTitan", getFieldServiceReviewUrl("servicetitan")),
  faqItems: [
    { q: "What is the best ServiceTitan alternative?", a: "Housecall Pro and Jobber for small to mid-size; Service Fusion for HVAC and plumbing value; FieldEdge for similar trade depth; Workiz for lower cost." },
    { q: "Is ServiceTitan better than Jobber?", a: "ServiceTitan targets larger, growing companies; Jobber fits small to mid-size with transparent pricing. Choose by company size and budget." },
    { q: "Which field service software is cheaper than ServiceTitan?", a: "Housecall Pro, Jobber, Workiz, and Service Fusion typically have lower entry costs. ServiceTitan is custom-priced for larger operations." },
  ],
};

// ——— Service Fusion alternatives ———
const SERVICE_FUSION_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "enterprise", description: "Enterprise-grade for larger operations.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("servicetitan-vs-service-fusion"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "simpro", name: "Simpro", logoSrc: LOGOS.simpro, rating: "4.5", bestFor: "trade & inventory depth", description: "Trade operations when inventory and projects matter.", reviewHref: getFieldServiceReviewUrl("simpro"), compareHref: getFieldServiceCompareUrl("simpro-vs-service-fusion"), startingPrice: "Custom", standoutFeature: "Trade ops" },
  { slug: "buildops", name: "BuildOps", logoSrc: LOGOS.buildops, rating: "4.4", bestFor: "commercial mechanical", description: "Heavier commercial mechanical operations platform.", reviewHref: getFieldServiceReviewUrl("buildops"), compareHref: getFieldServiceCompareUrl("buildops-vs-service-fusion"), startingPrice: "Custom", standoutFeature: "Commercial mechanical" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Lower cost for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "contractors", description: "All-in-one for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "fieldedge", name: "FieldEdge", logoSrc: LOGOS.fieldedge, rating: "4.3", bestFor: "HVAC & plumbing depth", description: "HVAC and plumbing depth.", reviewHref: getFieldServiceReviewUrl("fieldedge"), startingPrice: "Custom", standoutFeature: "HVAC; plumbing" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams" },
];

const serviceFusionPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Service Fusion Alternatives (2026)",
  subtitle: "If Service Fusion isn't the right fit—because of scale, cost, or trade focus—these field service management alternatives offer strong options.",
  productName: "Service Fusion",
  productSlug: "service-fusion",
  originalReviewHref: getFieldServiceReviewUrl("service-fusion"),
  quickAnswerParagraphs: [
    "Service Fusion is strong for HVAC and plumbing value; alternatives include ServiceTitan for enterprise scale, Housecall Pro and Jobber for lower cost and generalist fit, FieldEdge for similar trade depth, and Workiz for small teams. ServiceTitan and Jobber are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Scale", body: "ServiceTitan targets larger companies. For operations that need more than Service Fusion's scope." },
    { heading: "Cost", body: "Housecall Pro and Workiz have lower entry prices. For teams that want to reduce cost." },
    { heading: "Generalist", body: "Jobber is a strong generalist for contractors. For teams that aren't solely HVAC/plumbing." },
  ],
  topAlternatives: SERVICE_FUSION_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, bestFor: "HVAC & plumbing value", startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing", reviewHref: getFieldServiceReviewUrl("service-fusion") },
    SERVICE_FUSION_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ServiceTitan", heading: "Best for enterprise", body: "ServiceTitan is enterprise-grade for larger operations. For companies that need more depth and scale.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
    { productName: "Simpro", heading: "Best for inventory & project-heavy trades", body: "Simpro fits when materials, purchasing, and staged work are central—not only dispatch.", reviewHref: getFieldServiceReviewUrl("simpro"), compareHref: getFieldServiceCompareUrl("simpro-vs-service-fusion") },
    { productName: "BuildOps", heading: "Best for commercial mechanical scale", body: "BuildOps fits commercial mechanical contractors evaluating heavier operations platforms—compare when commercial workload dominates.", reviewHref: getFieldServiceReviewUrl("buildops"), compareHref: getFieldServiceCompareUrl("buildops-vs-service-fusion") },
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro offers lower cost for home service pros. For plumbers, HVAC, and electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Jobber", heading: "Best for contractors", body: "Jobber is all-in-one for contractors. For generalist field service needs.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldEdge", heading: "Best for HVAC & plumbing depth", body: "FieldEdge offers HVAC and plumbing depth. For trade-focused teams that want similar depth.", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
  ],
  relatedComparisons: [fsRel("servicetitan-vs-service-fusion"), fsRel("simpro-vs-service-fusion"), fsRel("buildops-vs-service-fusion")],
  relatedResources: defaultRelatedResources("Service Fusion", getFieldServiceReviewUrl("service-fusion")),
  faqItems: [
    { q: "What is the best Service Fusion alternative?", a: "ServiceTitan for enterprise; Housecall Pro and Jobber for lower cost; FieldEdge for trade depth; Workiz for small teams." },
    { q: "Is Service Fusion better than ServiceTitan?", a: "Service Fusion often has lower entry cost for HVAC and plumbing; ServiceTitan targets larger companies. Choose by size and budget." },
    { q: "Which field service software is for HVAC and plumbing?", a: "Service Fusion, ServiceTitan, and FieldEdge are strong for HVAC and plumbing. Jobber and Housecall Pro are more generalist." },
  ],
};

// ——— Workiz alternatives ———
const WORKIZ_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "overall", description: "All-in-one balance for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("jobber-vs-workiz"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Strong for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, rating: "4.3", bestFor: "small business", description: "Straightforward FSM for small businesses.", reviewHref: getFieldServiceReviewUrl("kickserv"), startingPrice: "From ~$55/mo", standoutFeature: "Small business" },
  { slug: "servicem8", name: "ServiceM8", logoSrc: LOGOS.servicem8, rating: "4.3", bestFor: "mobile-first", description: "Mobile-first field service.", reviewHref: getFieldServiceReviewUrl("servicem8"), startingPrice: "From ~$29/mo", standoutFeature: "Mobile-first" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC & plumbing", description: "HVAC and plumbing value.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
];

const workizPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Workiz Alternatives (2026)",
  subtitle: "If Workiz isn't the right fit—because you need more features, different trade focus, or scale—these field service management alternatives offer strong options.",
  productName: "Workiz",
  productSlug: "workiz",
  originalReviewHref: getFieldServiceReviewUrl("workiz"),
  quickAnswerParagraphs: [
    "Workiz is strong for small field teams at lower cost; alternatives include Jobber for all-around balance, Housecall Pro for home service, Kickserv for small business, ServiceM8 for mobile-first, and Service Fusion for HVAC and plumbing. Jobber and Housecall Pro are the main alternatives when you need more features.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Features", body: "Jobber and Housecall Pro offer more breadth and polish. For teams that outgrow Workiz's scope." },
    { heading: "Trade", body: "Service Fusion is strong for HVAC and plumbing. For trade-specific depth." },
    { heading: "Mobile", body: "ServiceM8 is mobile-first. For teams that prioritize technician mobile experience." },
  ],
  topAlternatives: WORKIZ_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, bestFor: "small teams", startingPrice: "From ~$29/mo", standoutFeature: "Small teams; value", reviewHref: getFieldServiceReviewUrl("workiz") },
    WORKIZ_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best for overall", body: "Jobber offers all-in-one balance for contractors. For teams that want more features and polish.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("jobber-vs-workiz") },
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro is strong for home service pros. For plumbers, HVAC, and electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Kickserv", heading: "Best for small business", body: "Kickserv is straightforward FSM for small businesses. For simple needs.", reviewHref: getFieldServiceReviewUrl("kickserv") },
    { productName: "ServiceM8", heading: "Best for mobile-first", body: "ServiceM8 is mobile-first field service. For teams that prioritize tech app experience.", reviewHref: getFieldServiceReviewUrl("servicem8") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion offers HVAC and plumbing value. For trade-focused teams.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
  ],
  relatedComparisons: [fsRel("jobber-vs-workiz")],
  relatedResources: defaultRelatedResources("Workiz", getFieldServiceReviewUrl("workiz")),
  faqItems: [
    { q: "What is the best Workiz alternative?", a: "Jobber for overall balance; Housecall Pro for home service; Kickserv for small business; ServiceM8 for mobile-first; Service Fusion for HVAC and plumbing." },
    { q: "Is Workiz better than Jobber?", a: "Workiz often has lower cost; Jobber offers more features and polish. Choose by budget vs feature set." },
    { q: "Which field service software is cheapest?", a: "Workiz and ServiceM8 have low entry prices. Compare per-user and features for your team size." },
  ],
};

// ——— Kickserv alternatives ———
const KICKSERV_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "overall", description: "All-in-one balance for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("kickserv-vs-jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams; value" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Strong for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "servicem8", name: "ServiceM8", logoSrc: LOGOS.servicem8, rating: "4.3", bestFor: "mobile-first", description: "Mobile-first field service.", reviewHref: getFieldServiceReviewUrl("servicem8"), startingPrice: "From ~$29/mo", standoutFeature: "Mobile-first" },
  { slug: "mhelpdesk", name: "mHelpDesk", logoSrc: LOGOS.mhelpdesk, rating: "4.2", bestFor: "contractors", description: "Contractors and technicians.", reviewHref: getFieldServiceReviewUrl("mhelpdesk"), startingPrice: "From ~$49/mo", standoutFeature: "Contractors" },
];

const kickservPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Kickserv Alternatives (2026)",
  subtitle: "If Kickserv isn't the right fit—because you need more features, lower cost, or different focus—these field service management alternatives offer strong options.",
  productName: "Kickserv",
  productSlug: "kickserv",
  originalReviewHref: getFieldServiceReviewUrl("kickserv"),
  quickAnswerParagraphs: [
    "Kickserv is straightforward FSM for small businesses; alternatives include Jobber for all-around balance, Workiz for lower cost, Housecall Pro for home service, and ServiceM8 or mHelpDesk for different focus. Jobber and Workiz are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Features", body: "Jobber offers more features and polish. For teams that need more than Kickserv's scope." },
    { heading: "Cost", body: "Workiz has lower entry price. For teams that want to minimize cost." },
    { heading: "Home service", body: "Housecall Pro is strong for home service pros. For plumbers, HVAC, electricians." },
  ],
  topAlternatives: KICKSERV_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, bestFor: "small service businesses", startingPrice: "From ~$55/mo", standoutFeature: "Small business", reviewHref: getFieldServiceReviewUrl("kickserv") },
    KICKSERV_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best for overall", body: "Jobber offers all-in-one balance for contractors. For teams that want more features.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("kickserv-vs-jobber") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro is strong for home service pros. For plumbers, HVAC, and electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "ServiceM8", heading: "Best for mobile-first", body: "ServiceM8 is mobile-first field service. For teams that prioritize tech app.", reviewHref: getFieldServiceReviewUrl("servicem8") },
    { productName: "mHelpDesk", heading: "Best for contractors", body: "mHelpDesk serves contractors and technicians. For teams that want an alternative FSM.", reviewHref: getFieldServiceReviewUrl("mhelpdesk") },
  ],
  relatedComparisons: [fsRel("kickserv-vs-jobber")],
  relatedResources: defaultRelatedResources("Kickserv", getFieldServiceReviewUrl("kickserv")),
  faqItems: [
    { q: "What is the best Kickserv alternative?", a: "Jobber for overall; Workiz for value; Housecall Pro for home service; ServiceM8 for mobile-first; mHelpDesk for contractors." },
    { q: "Is Kickserv better than Jobber?", a: "Kickserv is simpler and may cost less; Jobber offers more features. Choose by feature needs vs simplicity." },
    { q: "Which field service software is similar to Kickserv?", a: "Workiz and ServiceM8 are in a similar price and scope range. Jobber and Housecall Pro add more features." },
  ],
};

// ——— ServiceM8 alternatives ———
const SERVICEM8_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "overall", description: "All-in-one balance for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Strong for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, rating: "4.3", bestFor: "small business", description: "Straightforward FSM for small businesses.", reviewHref: getFieldServiceReviewUrl("kickserv"), startingPrice: "From ~$55/mo", standoutFeature: "Small business" },
  { slug: "mhelpdesk", name: "mHelpDesk", logoSrc: LOGOS.mhelpdesk, rating: "4.2", bestFor: "contractors", description: "Contractors and technicians.", reviewHref: getFieldServiceReviewUrl("mhelpdesk"), startingPrice: "From ~$49/mo", standoutFeature: "Contractors" },
];

const servicem8Page: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best ServiceM8 Alternatives (2026)",
  subtitle: "If ServiceM8 isn't the right fit—because you need more features, different trade focus, or scale—these field service management alternatives offer strong options.",
  productName: "ServiceM8",
  productSlug: "servicem8",
  originalReviewHref: getFieldServiceReviewUrl("servicem8"),
  quickAnswerParagraphs: [
    "ServiceM8 is mobile-first field service; alternatives include Jobber for all-around balance, Workiz for small teams and value, Housecall Pro for home service, and Kickserv or mHelpDesk for different focus. Jobber and Workiz are common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Features", body: "Jobber and Housecall Pro offer more breadth. For teams that need more than mobile-first core." },
    { heading: "Cost", body: "Workiz has similar or lower entry price. Compare features and limits." },
    { heading: "Trade", body: "Housecall Pro and Jobber are strong for home service. For plumbers, HVAC, electricians." },
  ],
  topAlternatives: SERVICEM8_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "servicem8", name: "ServiceM8", logoSrc: LOGOS.servicem8, bestFor: "mobile-first", startingPrice: "From ~$29/mo", standoutFeature: "Mobile-first", reviewHref: getFieldServiceReviewUrl("servicem8") },
    SERVICEM8_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best for overall", body: "Jobber offers all-in-one balance for contractors. For teams that want more features.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro is strong for home service pros. For plumbers, HVAC, and electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Kickserv", heading: "Best for small business", body: "Kickserv is straightforward FSM for small businesses. For simple needs.", reviewHref: getFieldServiceReviewUrl("kickserv") },
    { productName: "mHelpDesk", heading: "Best for contractors", body: "mHelpDesk serves contractors and technicians. For alternative FSM fit.", reviewHref: getFieldServiceReviewUrl("mhelpdesk") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("ServiceM8", getFieldServiceReviewUrl("servicem8")),
  faqItems: [
    { q: "What is the best ServiceM8 alternative?", a: "Jobber for overall; Workiz for value; Housecall Pro for home service; Kickserv and mHelpDesk for different focus." },
    { q: "Is ServiceM8 better than Jobber?", a: "ServiceM8 is mobile-first; Jobber offers broader features. Choose by mobile emphasis vs full platform." },
    { q: "Which field service software is mobile-first?", a: "ServiceM8 is built mobile-first. Jobber, Housecall Pro, and others have strong mobile apps; compare tech experience." },
  ],
};

// ——— FieldEdge alternatives ———
const FIELDEDGE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "enterprise", description: "Enterprise-grade for growing companies.", reviewHref: getFieldServiceReviewUrl("servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC & plumbing", description: "HVAC and plumbing value.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "contractors", description: "All-in-one for small to mid-size.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Lower cost for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "mhelpdesk", name: "mHelpDesk", logoSrc: LOGOS.mhelpdesk, rating: "4.2", bestFor: "contractors", description: "Contractors and technicians.", reviewHref: getFieldServiceReviewUrl("mhelpdesk"), startingPrice: "From ~$49/mo", standoutFeature: "Contractors" },
];

const fieldedgePage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best FieldEdge Alternatives (2026)",
  subtitle: "If FieldEdge isn't the right fit—because of cost, scale, or preference for different features—these field service management alternatives offer strong options.",
  productName: "FieldEdge",
  productSlug: "fieldedge",
  originalReviewHref: getFieldServiceReviewUrl("fieldedge"),
  quickAnswerParagraphs: [
    "FieldEdge targets HVAC and plumbing depth; alternatives include ServiceTitan for enterprise scale, Service Fusion for HVAC and plumbing value, Jobber and Housecall Pro for lower cost and generalist fit. ServiceTitan and Service Fusion are the main trade-focused alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Scale", body: "ServiceTitan targets larger companies. For operations that need enterprise depth." },
    { heading: "Cost", body: "Service Fusion, Jobber, and Housecall Pro often have more transparent or lower entry pricing. For teams that want to reduce cost." },
    { heading: "Generalist", body: "Jobber and Housecall Pro are strong generalists. For contractors who aren't solely HVAC/plumbing." },
  ],
  topAlternatives: FIELDEDGE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "fieldedge", name: "FieldEdge", logoSrc: LOGOS.fieldedge, bestFor: "HVAC & plumbing depth", startingPrice: "Custom", standoutFeature: "HVAC; plumbing depth", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    FIELDEDGE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ServiceTitan", heading: "Best for enterprise", body: "ServiceTitan is enterprise-grade for growing companies. For larger operations.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion offers HVAC and plumbing value. For trade-focused teams at lower entry.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
    { productName: "Jobber", heading: "Best for contractors", body: "Jobber is all-in-one for small to mid-size contractors. For generalist needs.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro offers lower cost for home service pros. For plumbers, HVAC, electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "mHelpDesk", heading: "Best for contractors", body: "mHelpDesk serves contractors and technicians. For alternative FSM.", reviewHref: getFieldServiceReviewUrl("mhelpdesk") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("FieldEdge", getFieldServiceReviewUrl("fieldedge")),
  faqItems: [
    { q: "What is the best FieldEdge alternative?", a: "ServiceTitan for enterprise; Service Fusion for HVAC and plumbing value; Jobber and Housecall Pro for lower cost and generalist." },
    { q: "Is FieldEdge better than ServiceTitan?", a: "Both target HVAC and plumbing depth. FieldEdge and ServiceTitan are custom-priced; compare features and support for your size." },
    { q: "Which field service software is for HVAC and plumbing?", a: "FieldEdge, ServiceTitan, and Service Fusion are strong for HVAC and plumbing. Jobber and Housecall Pro are more generalist." },
  ],
};

// ——— mHelpDesk alternatives ———
const MHELPDESK_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "overall", description: "All-in-one balance for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Strong for home service pros.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams" },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, rating: "4.3", bestFor: "small business", description: "Straightforward FSM for small businesses.", reviewHref: getFieldServiceReviewUrl("kickserv"), startingPrice: "From ~$55/mo", standoutFeature: "Small business" },
  { slug: "servicem8", name: "ServiceM8", logoSrc: LOGOS.servicem8, rating: "4.3", bestFor: "mobile-first", description: "Mobile-first field service.", reviewHref: getFieldServiceReviewUrl("servicem8"), startingPrice: "From ~$29/mo", standoutFeature: "Mobile-first" },
];

const mhelpdeskPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best mHelpDesk Alternatives (2026)",
  subtitle: "If mHelpDesk isn't the right fit—because you need more features, different trade focus, or scale—these field service management alternatives offer strong options.",
  productName: "mHelpDesk",
  productSlug: "mhelpdesk",
  originalReviewHref: getFieldServiceReviewUrl("mhelpdesk"),
  quickAnswerParagraphs: [
    "mHelpDesk serves contractors and technicians; alternatives include Jobber for all-around balance, Housecall Pro for home service, Workiz for small teams and value, and Kickserv or ServiceM8 for different focus. Jobber and Housecall Pro are the main alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Features", body: "Jobber and Housecall Pro offer more features and polish. For teams that need broader FSM." },
    { heading: "Cost", body: "Workiz has lower entry price. For teams that want to minimize cost." },
    { heading: "Home service", body: "Housecall Pro is strong for home service pros. For plumbers, HVAC, electricians." },
  ],
  topAlternatives: MHELPDESK_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "mhelpdesk", name: "mHelpDesk", logoSrc: LOGOS.mhelpdesk, bestFor: "contractors & technicians", startingPrice: "From ~$49/mo", standoutFeature: "Contractors", reviewHref: getFieldServiceReviewUrl("mhelpdesk") },
    MHELPDESK_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best for overall", body: "Jobber offers all-in-one balance for contractors. For teams that want more features.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro is strong for home service pros. For plumbers, HVAC, and electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "Kickserv", heading: "Best for small business", body: "Kickserv is straightforward FSM for small businesses. For simple needs.", reviewHref: getFieldServiceReviewUrl("kickserv") },
    { productName: "ServiceM8", heading: "Best for mobile-first", body: "ServiceM8 is mobile-first field service. For teams that prioritize tech app.", reviewHref: getFieldServiceReviewUrl("servicem8") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("mHelpDesk", getFieldServiceReviewUrl("mhelpdesk")),
  faqItems: [
    { q: "What is the best mHelpDesk alternative?", a: "Jobber for overall; Housecall Pro for home service; Workiz for value; Kickserv and ServiceM8 for different focus." },
    { q: "Is mHelpDesk better than Jobber?", a: "Jobber offers more features and polish; mHelpDesk serves contractors and technicians. Compare features and pricing for your needs." },
    { q: "Which field service software is for contractors?", a: "Jobber, Housecall Pro, Workiz, Kickserv, and mHelpDesk all serve contractors. Compare trade focus and pricing." },
  ],
};

// ——— FieldPulse alternatives ———
const FIELDPULSE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "overall balance", description: "The most common generalist FSM for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one; polish" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service marketing", description: "Strong customer comms and marketing for residential work.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "enterprise scale", description: "Deep home-service enterprise features and reporting.", reviewHref: getFieldServiceReviewUrl("servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC & plumbing", description: "Mid-market trade FSM with approachable pricing.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams / value", description: "Lower cost scheduling and jobs for lean crews.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Budget" },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, rating: "4.3", bestFor: "CRM-style SMB", description: "Simple FSM with customer-centric records.", reviewHref: getFieldServiceReviewUrl("kickserv"), startingPrice: "From ~$55/mo", standoutFeature: "Small business" },
];

const fieldpulsePage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best FieldPulse Alternatives (2026)",
  subtitle:
    "If FieldPulse isn’t the right fit—because you want a bigger brand, lower cost, stronger home-service marketing, or a different trade focus—these field service management alternatives are worth shortlisting.",
  productName: "FieldPulse",
  productSlug: "fieldpulse",
  originalReviewHref: getFieldServiceReviewUrl("fieldpulse"),
  quickAnswerParagraphs: [
    "FieldPulse emphasizes dispatch and trade operations; common alternatives include Jobber for an all-in-one generalist default, Housecall Pro for residential marketing and customer experience, ServiceTitan for enterprise-scale home service, Service Fusion for HVAC/plumbing mid-market depth, Workiz for budget-conscious small teams, and Kickserv for simpler CRM-style FSM.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Brand and ecosystem", body: "Teams sometimes want the most recognized SMB FSM (often Jobber or Housecall Pro) for hiring, training, and community support." },
    { heading: "Cost", body: "Workiz and Kickserv can start cheaper. Compare per-tech pricing at your real headcount." },
    { heading: "Scale", body: "Fast-growing or high-volume residential operators may lean toward ServiceTitan; mid-market HVAC/plumbing shops often consider Service Fusion." },
  ],
  topAlternatives: FIELDPULSE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "fieldpulse",
      name: "FieldPulse",
      logoSrc: LOGOS.fieldpulse,
      bestFor: "dispatch-heavy trades",
      startingPrice: "From ~$99/mo",
      standoutFeature: "Ops & dispatch",
      reviewHref: getFieldServiceReviewUrl("fieldpulse"),
    },
    FIELDPULSE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best overall generalist", body: "Jobber is the default comparison when you want broad trade fit and polished SMB workflows.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-jobber") },
    { productName: "Housecall Pro", heading: "Best for home service marketing", body: "Housecall Pro when reviews, reminders, and homeowner experience matter as much as dispatch.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), compareHref: getFieldServiceCompareUrl("fieldpulse-vs-housecall-pro") },
    { productName: "ServiceTitan", heading: "Best for large home-service scale", body: "ServiceTitan when you are optimizing enterprise-style operations and reporting.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    { productName: "Service Fusion", heading: "Best HVAC/plumbing mid-market", body: "Service Fusion for strong trade FSM without jumping to the highest price tier.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
    { productName: "Workiz", heading: "Best budget small-team FSM", body: "Workiz when minimizing monthly cost is the top priority.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "Kickserv", heading: "Best simple CRM + FSM", body: "Kickserv for smaller teams that want relationship history without heavy configuration.", reviewHref: getFieldServiceReviewUrl("kickserv") },
  ],
  relatedComparisons: [fsRel("fieldpulse-vs-jobber"), fsRel("fieldpulse-vs-housecall-pro")],
  relatedResources: defaultRelatedResources("FieldPulse", getFieldServiceReviewUrl("fieldpulse")),
  faqItems: [
    { q: "What is the closest alternative to FieldPulse?", a: "Jobber is the most common head-to-head for general contractor FSM. If you care more about homeowner marketing, compare Housecall Pro." },
    { q: "Is FieldPulse cheaper than Jobber?", a: "Not always—compare quotes for your user count and modules. Workiz is usually cheaper at small team sizes." },
    { q: "When should I pick ServiceTitan instead?", a: "When you need enterprise depth for large home-service operations—not for every mid-size trade shop." },
  ],
};

// ——— ServiceTrade alternatives ———
const SERVICETRADE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "scaled home service", description: "Enterprise FSM for large HVAC/plumbing and mixed operations.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("servicetrade-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise home service" },
  { slug: "buildops", name: "BuildOps", logoSrc: LOGOS.buildops, rating: "4.4", bestFor: "commercial mechanical", description: "Operations platform for commercial mechanical contractors.", reviewHref: getFieldServiceReviewUrl("buildops"), startingPrice: "Custom", standoutFeature: "Commercial mechanical" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC/plumbing mid-market", description: "Strong trade FSM with clearer SMB pricing than enterprise suites.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "HVAC; plumbing" },
  { slug: "fieldedge", name: "FieldEdge", logoSrc: LOGOS.fieldedge, rating: "4.3", bestFor: "HVAC/plumbing depth", description: "Trade depth with enterprise-style expectations.", reviewHref: getFieldServiceReviewUrl("fieldedge"), startingPrice: "Custom", standoutFeature: "Trade depth" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "SMB generalist", description: "Approachable FSM when commercial complexity is lighter.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "SMB FSM" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "trade dispatch ops", description: "Mid-tier contractor ops and dispatch workflows.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch" },
];

const servicetradePage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best ServiceTrade Alternatives (2026)",
  subtitle:
    "If ServiceTrade isn’t the right fit—because you are more residential-heavy, need simpler SMB packaging, or want a different commercial stack—these field service platforms are common next steps.",
  productName: "ServiceTrade",
  productSlug: "servicetrade",
  originalReviewHref: getFieldServiceReviewUrl("servicetrade"),
  quickAnswerParagraphs: [
    "ServiceTrade fits commercial inspection and documentation-heavy service models; alternatives include ServiceTitan for large home-service scale, BuildOps for commercial mechanical operations, Service Fusion or FieldEdge for HVAC/plumbing depth, Jobber for straightforward SMB FSM, and FieldPulse for ops-forward trade teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Residential mix", body: "If most revenue is homeowner tickets, a residential-first FSM may be easier to adopt than a commercial-first platform." },
    { heading: "Pricing transparency", body: "Mid-market tools like Service Fusion publish clearer tiers than many enterprise evaluations." },
    { heading: "Mechanical vs inspection-led", body: "BuildOps often appears when commercial mechanical job complexity leads; FieldEdge when HVAC/plumbing trade depth is the priority." },
  ],
  topAlternatives: SERVICETRADE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "servicetrade",
      name: "ServiceTrade",
      logoSrc: LOGOS.servicetrade,
      bestFor: "Commercial inspections & docs",
      startingPrice: "Custom",
      standoutFeature: "Commercial service",
      reviewHref: getFieldServiceReviewUrl("servicetrade"),
    },
    SERVICETRADE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ServiceTitan", heading: "Best for large home-service operators", body: "ServiceTitan when residential volume and enterprise playbooks dominate.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("servicetrade-vs-servicetitan") },
    { productName: "BuildOps", heading: "Best for commercial mechanical", body: "BuildOps when mechanical operations and complex jobs—not only inspections—lead the evaluation.", reviewHref: getFieldServiceReviewUrl("buildops") },
    { productName: "Service Fusion", heading: "Best mid-market HVAC/plumbing", body: "Service Fusion for strong trade FSM with more approachable packaging than full enterprise suites.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
    { productName: "FieldEdge", heading: "Best trade-depth enterprise option", body: "FieldEdge for HVAC/plumbing teams evaluating enterprise-style depth.", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    { productName: "Jobber", heading: "Best SMB generalist", body: "Jobber when workflows are simpler and you want fast SMB adoption.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldPulse", heading: "Best ops-led contractor FSM", body: "FieldPulse for dispatch-centric trade teams without enterprise scope.", reviewHref: getFieldServiceReviewUrl("fieldpulse") },
  ],
  relatedComparisons: [fsRel("servicetrade-vs-servicetitan")],
  relatedResources: defaultRelatedResources("ServiceTrade", getFieldServiceReviewUrl("servicetrade")),
  faqItems: [
    { q: "What is the best ServiceTrade alternative for residential work?", a: "Jobber or Housecall Pro are common SMB picks. For large residential scale, evaluate ServiceTitan." },
    { q: "ServiceTrade vs ServiceTitan—how do I choose?", a: "ServiceTrade aligns to commercial inspection and documentation workflows; ServiceTitan fits many large residential home-service operators. Compare on your actual job types." },
  ],
};

// ——— WorkWave Service alternatives ———
const WORKWAVE_SERVICE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "general contractor FSM", description: "Flexible all-in-one for many trades and SMB teams.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("workwave-service-vs-jobber"), startingPrice: "From ~$69/mo", standoutFeature: "Generalist" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "budget small teams", description: "Affordable core scheduling and jobs.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Value" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "trade dispatch", description: "Contractor ops and dispatch without route-industry assumptions.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch" },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "high-volume home service", description: "Enterprise depth when call volume and fleets scale.", reviewHref: getFieldServiceReviewUrl("servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Residential-focused FSM with marketing tools.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC/plumbing", description: "Mid-market trade workflows.", reviewHref: getFieldServiceReviewUrl("service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "Trade FSM" },
];

const workwaveServicePage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best WorkWave Service Alternatives (2026)",
  subtitle:
    "If WorkWave Service isn’t the right fit—because you are not route-dense, want simpler SMB pricing, or prefer a generalist contractor tool—these field service platforms are common alternatives.",
  productName: "WorkWave Service",
  productSlug: "workwave-service",
  originalReviewHref: getFieldServiceReviewUrl("workwave-service"),
  quickAnswerParagraphs: [
    "WorkWave Service fits route-heavy and fleet-aware operations; alternatives include Jobber for a flexible generalist FSM, Workiz for budget small teams, FieldPulse for dispatch-led trade shops, ServiceTitan for enterprise home-service scale, Housecall Pro for residential marketing-led workflows, and Service Fusion for HVAC/plumbing mid-market depth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Route fit", body: "If you do not run dense recurring routes, a generalist FSM may be easier to roll out than a route-centric platform." },
    { heading: "Pricing clarity", body: "SMB tools with published tiers (Jobber, Workiz, Housecall Pro) can be faster to benchmark than custom enterprise quotes." },
    { heading: "Trade focus", body: "HVAC/plumbing teams often shortlist Service Fusion or ServiceTitan depending on size." },
  ],
  topAlternatives: WORKWAVE_SERVICE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "workwave-service",
      name: "WorkWave Service",
      logoSrc: LOGOS["workwave-service"],
      bestFor: "Route & fleet ops",
      startingPrice: "Custom",
      standoutFeature: "Routes",
      reviewHref: getFieldServiceReviewUrl("workwave-service"),
    },
    WORKWAVE_SERVICE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best generalist contractor FSM", body: "Jobber when you want broad trade fit without route-specialization assumptions.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("workwave-service-vs-jobber") },
    { productName: "Workiz", heading: "Best low-cost SMB", body: "Workiz for small crews that need core scheduling and invoicing.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "FieldPulse", heading: "Best dispatch-led trades", body: "FieldPulse for contractor ops when routes are not the whole story.", reviewHref: getFieldServiceReviewUrl("fieldpulse") },
    { productName: "ServiceTitan", heading: "Best enterprise home service", body: "ServiceTitan when you are optimizing large-scale residential operations.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    { productName: "Housecall Pro", heading: "Best residential marketing + FSM", body: "Housecall Pro for homeowner-focused growth.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Service Fusion", heading: "Best mid-market trade FSM", body: "Service Fusion for HVAC/plumbing teams sizing up from lighter tools.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
  ],
  relatedComparisons: [fsRel("workwave-service-vs-jobber")],
  relatedResources: defaultRelatedResources("WorkWave Service", getFieldServiceReviewUrl("workwave-service")),
  faqItems: [
    { q: "Is WorkWave only for pest and lawn businesses?", a: "Those industries are common fits, but evaluate based on route density and recurring stops—not the label on the truck." },
    { q: "What is the simplest alternative?", a: "Workiz is often the simplest and cheapest for very small teams; Jobber is the common generalist upgrade path." },
  ],
};

// ——— BuildOps alternatives ———
const BUILDOPS_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "large home service", description: "Enterprise FSM when residential scale and marketing depth matter.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("buildops-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "simpro", name: "Simpro", logoSrc: LOGOS.simpro, rating: "4.5", bestFor: "trade & inventory depth", description: "Trade operations platform—compare when inventory and projects matter.", reviewHref: getFieldServiceReviewUrl("simpro"), compareHref: getFieldServiceCompareUrl("buildops-vs-simpro"), startingPrice: "Custom", standoutFeature: "Trade ops" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "HVAC/plumbing mid-market", description: "Strong trade FSM with more approachable entry than heavy suites.", reviewHref: getFieldServiceReviewUrl("service-fusion"), compareHref: getFieldServiceCompareUrl("buildops-vs-service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "Mid-market trade" },
  { slug: "servicetrade", name: "ServiceTrade", logoSrc: LOGOS.servicetrade, rating: "4.5", bestFor: "commercial inspections", description: "Commercial service with inspection and documentation emphasis.", reviewHref: getFieldServiceReviewUrl("servicetrade"), startingPrice: "Custom", standoutFeature: "Commercial docs" },
  { slug: "fieldedge", name: "FieldEdge", logoSrc: LOGOS.fieldedge, rating: "4.3", bestFor: "HVAC/plumbing enterprise", description: "Trade depth for mechanical contractors.", reviewHref: getFieldServiceReviewUrl("fieldedge"), startingPrice: "Custom", standoutFeature: "HVAC; plumbing" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "SMB generalist", description: "Not a mechanical-enterprise replacement—only if scope is lighter.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "SMB" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "growing trade ops", description: "Mid-tier contractor FSM for dispatch-heavy teams.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch" },
];

const buildopsPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best BuildOps Alternatives (2026)",
  subtitle:
    "If BuildOps isn’t the right fit—because you are smaller, more residential, need clearer mid-market pricing, or want a different commercial stack—these field service and mechanical operations platforms are common alternatives.",
  productName: "BuildOps",
  productSlug: "buildops",
  originalReviewHref: getFieldServiceReviewUrl("buildops"),
  quickAnswerParagraphs: [
    "BuildOps targets commercial mechanical and complex field operations; alternatives include ServiceTitan for large home-service enterprise scale, Simpro for broad trade operations and inventory depth, Service Fusion for mid-market HVAC/plumbing FSM, ServiceTrade for commercial inspection-led workflows, FieldEdge for trade-depth enterprise options, and lighter SMB tools like Jobber or FieldPulse only when job complexity is materially lower.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Team size", body: "Owner-operators and small residential crews rarely need mechanical-enterprise scope—Jobber or Housecall Pro may fit better." },
    { heading: "Budget and TCO", body: "Mid-market trade FSM like Service Fusion can be easier to justify than full enterprise rollouts." },
    { heading: "Workflow fit", body: "Inspection-led commercial service may align with ServiceTrade; large residential mix may align with ServiceTitan." },
  ],
  topAlternatives: BUILDOPS_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "buildops",
      name: "BuildOps",
      logoSrc: LOGOS.buildops,
      bestFor: "Commercial mechanical",
      startingPrice: "Custom",
      standoutFeature: "Complex ops",
      reviewHref: getFieldServiceReviewUrl("buildops"),
    },
    BUILDOPS_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ServiceTitan", heading: "Best large home-service enterprise", body: "ServiceTitan when residential scale and enterprise tooling dominate.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("buildops-vs-servicetitan") },
    { productName: "Simpro", heading: "Best broad trade operations depth", body: "Simpro when inventory, projects, and mixed commercial/residential work share one operational system.", reviewHref: getFieldServiceReviewUrl("simpro"), compareHref: getFieldServiceCompareUrl("buildops-vs-simpro") },
    { productName: "Service Fusion", heading: "Best mid-market HVAC/plumbing", body: "Service Fusion when you need trade FSM depth without the heaviest enterprise scope.", reviewHref: getFieldServiceReviewUrl("service-fusion"), compareHref: getFieldServiceCompareUrl("buildops-vs-service-fusion") },
    { productName: "ServiceTrade", heading: "Best commercial inspection-led service", body: "ServiceTrade when documentation and inspection programs are central.", reviewHref: getFieldServiceReviewUrl("servicetrade") },
    { productName: "FieldEdge", heading: "Best HVAC/plumbing enterprise depth", body: "FieldEdge for trade-focused enterprise evaluations.", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    { productName: "Jobber", heading: "Best if scope is truly SMB", body: "Jobber only if your operations are simple enough that mechanical-enterprise tools are unnecessary.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldPulse", heading: "Best mid-tier dispatch FSM", body: "FieldPulse for growing trade teams that are not ready for full enterprise mechanical suites.", reviewHref: getFieldServiceReviewUrl("fieldpulse") },
  ],
  relatedComparisons: [fsRel("buildops-vs-servicetitan"), fsRel("buildops-vs-service-fusion"), fsRel("buildops-vs-simpro")],
  relatedResources: defaultRelatedResources("BuildOps", getFieldServiceReviewUrl("buildops")),
  faqItems: [
    { q: "Is Service Fusion enough instead of BuildOps?", a: "Often for mid-market HVAC/plumbing. If commercial mechanical complexity and multi-craft coordination dominate, compare heavier platforms with real job examples." },
    { q: "When is ServiceTitan the better pick?", a: "When large residential home-service operations and enterprise playbooks are the primary growth engine—not purely commercial mechanical work." },
  ],
};

// ——— Connecteam alternatives ———
const CONNECTEAM_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "full contractor FSM", description: "All-in-one job-to-cash workflows for contractors.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("connecteam-vs-jobber"), startingPrice: "From ~$69/mo", standoutFeature: "Full FSM" },
  { slug: "zuper", name: "Zuper", logoSrc: LOGOS.zuper, rating: "4.4", bestFor: "flexible FSM", description: "Configurable field workflows when you need more than templates.", reviewHref: getFieldServiceReviewUrl("zuper"), startingPrice: "Custom / tiered", standoutFeature: "Flexible FSM" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Home-service FSM with marketing and customer tools.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Affordable FSM for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Value" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "dispatch-heavy trades", description: "Ops-forward FSM for growing contractor crews.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch" },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "enterprise FSM", description: "Enterprise-grade when you need full FSM at scale.", reviewHref: getFieldServiceReviewUrl("servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
];

const connecteamPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Connecteam Alternatives (2026)",
  subtitle:
    "If Connecteam isn’t the right fit—because you need full job-to-cash FSM, deeper dispatch, or a different workforce model—these field service and contractor platforms are common next steps.",
  productName: "Connecteam",
  productSlug: "connecteam",
  originalReviewHref: getFieldServiceReviewUrl("connecteam"),
  quickAnswerParagraphs: [
    "Connecteam is workforce-first (scheduling, time tracking, communication). If you need quotes, dispatch depth, invoicing, and customer workflows, alternatives include Jobber for all-in-one contractor FSM, Zuper for flexible field workflows, Housecall Pro for home service, Workiz for value, FieldPulse for dispatch-heavy trades, and ServiceTitan for enterprise scale.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Need full FSM", body: "Connecteam is not a complete replacement for contractor FSM—Jobber or Zuper may fit when jobs and billing are the bottleneck." },
    { heading: "Cost & stack", body: "Pairing tools increases overhead—sometimes one primary FSM is simpler than workforce + FSM." },
    { heading: "Scale", body: "ServiceTitan enters the conversation for large home-service operations needing enterprise depth." },
  ],
  topAlternatives: CONNECTEAM_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "connecteam",
      name: "Connecteam",
      logoSrc: LOGOS.connecteam,
      bestFor: "Deskless workforce",
      startingPrice: "From ~$29/mo",
      standoutFeature: "Workforce ops",
      reviewHref: getFieldServiceReviewUrl("connecteam"),
    },
    CONNECTEAM_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best full contractor FSM", body: "Jobber when you need estimates through payment in one system.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("connecteam-vs-jobber") },
    { productName: "Zuper", heading: "Best flexible field FSM", body: "Zuper when configurable workflows and integrations lead the evaluation.", reviewHref: getFieldServiceReviewUrl("zuper") },
    { productName: "Housecall Pro", heading: "Best home service marketing + FSM", body: "Housecall Pro for residential-focused teams.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Workiz", heading: "Best value for small teams", body: "Workiz when budget matters and scope is lighter.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "FieldPulse", heading: "Best dispatch-led trades", body: "FieldPulse for contractor ops when field execution matters.", reviewHref: getFieldServiceReviewUrl("fieldpulse") },
    { productName: "ServiceTitan", heading: "Best enterprise home service", body: "ServiceTitan for large-scale residential operations.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
  ],
  relatedComparisons: [fsRel("connecteam-vs-jobber"), fsRel("zuper-vs-jobber")],
  relatedResources: defaultRelatedResources("Connecteam", getFieldServiceReviewUrl("connecteam")),
  faqItems: [
    { q: "Can I use Jobber and Connecteam together?", a: "Yes—many teams pair workforce tools with FSM. Model integration overhead and whether one primary system is simpler." },
    { q: "What is the closest Connecteam alternative for FSM?", a: "Jobber is the closest common all-in-one FSM comparison; Zuper is a flexible alternative when integrations matter." },
  ],
};

// ——— Oracle Field Service alternatives ———
const ORACLE_FIELD_SERVICE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "contractor enterprise scale", description: "Home-service enterprise FSM—different buyer than Oracle, but common contractor comparison.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("oracle-field-service-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Contractor FSM" },
  { slug: "simpro", name: "Simpro", logoSrc: LOGOS.simpro, rating: "4.5", bestFor: "trade operations", description: "Trade platform for jobs, inventory, and field execution.", reviewHref: getFieldServiceReviewUrl("simpro"), startingPrice: "Custom", standoutFeature: "Trade ops" },
  { slug: "servicetrade", name: "ServiceTrade", logoSrc: LOGOS.servicetrade, rating: "4.5", bestFor: "commercial inspections", description: "Commercial service with documentation-heavy workflows.", reviewHref: getFieldServiceReviewUrl("servicetrade"), startingPrice: "Custom", standoutFeature: "Commercial" },
  { slug: "buildops", name: "BuildOps", logoSrc: LOGOS.buildops, rating: "4.4", bestFor: "commercial mechanical", description: "Commercial mechanical operations platform.", reviewHref: getFieldServiceReviewUrl("buildops"), startingPrice: "Custom", standoutFeature: "Mechanical" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "SMB contractors", description: "If you landed here by mistake—SMB contractors usually start here.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "SMB FSM" },
];

const oracleFieldServicePage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Oracle Field Service Alternatives (2026)",
  subtitle:
    "Oracle Field Service is enterprise-scale. If your organization is evaluating contractor-first tools or mid-market trade platforms instead, these are more typical comparisons.",
  productName: "Oracle Field Service",
  productSlug: "oracle-field-service",
  originalReviewHref: getFieldServiceReviewUrl("oracle-field-service"),
  quickAnswerParagraphs: [
    "Oracle Field Service is enterprise IT-led field software. Contractor-focused alternatives include ServiceTitan for large home service, Simpro for trade operations and inventory depth, ServiceTrade for commercial inspection-led models, BuildOps for commercial mechanical operations, and Jobber for SMB contractors—if your needs are local service, not global ERP programs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost & complexity", body: "SMB contractors rarely fit Oracle’s buying motion—Jobber/ServiceTitan/Simpro are more common." },
    { heading: "Contractor workflows", body: "ServiceTitan and Simpro align to trade revenue workflows more directly than broad enterprise suites." },
    { heading: "Time to value", body: "Mid-market FSM can ship faster than enterprise field programs." },
  ],
  topAlternatives: ORACLE_FIELD_SERVICE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "oracle-field-service",
      name: "Oracle Field Service",
      logoSrc: LOGOS["oracle-field-service"],
      bestFor: "Enterprise field & asset",
      startingPrice: "Custom",
      standoutFeature: "Enterprise",
      reviewHref: getFieldServiceReviewUrl("oracle-field-service"),
    },
    ORACLE_FIELD_SERVICE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ServiceTitan", heading: "Best contractor enterprise home service", body: "ServiceTitan when you need enterprise contractor FSM—not ERP-only programs.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("oracle-field-service-vs-servicetitan") },
    { productName: "Simpro", heading: "Best trade operations platform", body: "Simpro when inventory and jobs/projects are central.", reviewHref: getFieldServiceReviewUrl("simpro") },
    { productName: "ServiceTrade", heading: "Best commercial inspection-led service", body: "ServiceTrade when documentation and inspection programs are central.", reviewHref: getFieldServiceReviewUrl("servicetrade") },
    { productName: "BuildOps", heading: "Best commercial mechanical", body: "BuildOps for commercial mechanical operations at scale.", reviewHref: getFieldServiceReviewUrl("buildops") },
    { productName: "Jobber", heading: "Best SMB contractor default", body: "Jobber for typical contractor shops—not enterprise Oracle evaluations.", reviewHref: getFieldServiceReviewUrl("jobber") },
  ],
  relatedComparisons: [fsRel("oracle-field-service-vs-servicetitan"), fsRel("simpro-vs-servicetitan")],
  relatedResources: defaultRelatedResources("Oracle Field Service", getFieldServiceReviewUrl("oracle-field-service")),
  faqItems: [
    { q: "Is Oracle Field Service for small businesses?", a: "Usually no—small contractors should compare mainstream FSM tools with faster onboarding." },
    { q: "Oracle vs ServiceTitan?", a: "Different buyers: Oracle is enterprise IT-led; ServiceTitan is contractor-operations-led for home service scale.", },
  ],
};

// ——— Simpro alternatives ———
const SIMPRO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "enterprise home service", description: "Large US home-service FSM benchmark.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("simpro-vs-servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, rating: "4.4", bestFor: "mid-market HVAC/plumbing", description: "Mid-market trade FSM with approachable pricing.", reviewHref: getFieldServiceReviewUrl("service-fusion"), compareHref: getFieldServiceCompareUrl("simpro-vs-service-fusion"), startingPrice: "From ~$99/mo", standoutFeature: "Mid-market" },
  { slug: "buildops", name: "BuildOps", logoSrc: LOGOS.buildops, rating: "4.4", bestFor: "commercial mechanical", description: "Commercial mechanical operations platform.", reviewHref: getFieldServiceReviewUrl("buildops"), compareHref: getFieldServiceCompareUrl("buildops-vs-simpro"), startingPrice: "Custom", standoutFeature: "Mechanical" },
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "SMB contractors", description: "All-in-one balance when scope is lighter.", reviewHref: getFieldServiceReviewUrl("jobber"), startingPrice: "From ~$69/mo", standoutFeature: "SMB" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "dispatch-heavy trades", description: "Mid-tier contractor FSM for growing crews.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Lower-cost home-service FSM.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
];

const simproPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Simpro Alternatives (2026)",
  subtitle:
    "If Simpro isn’t the right fit—because of cost, regional support, or workflow emphasis—these field service platforms are common alternatives for trade contractors.",
  productName: "Simpro",
  productSlug: "simpro",
  originalReviewHref: getFieldServiceReviewUrl("simpro"),
  quickAnswerParagraphs: [
    "Simpro is a trade operations platform; alternatives include ServiceTitan for enterprise home service, Service Fusion for mid-market HVAC/plumbing FSM, BuildOps for commercial mechanical depth, Jobber for SMB generalist workflows, FieldPulse for dispatch-heavy trades, and Housecall Pro for home service value.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Service Fusion and Housecall Pro can be easier to justify at mid-market and SMB budgets." },
    { heading: "US home service focus", body: "ServiceTitan is a frequent benchmark for large residential operators." },
    { heading: "Mechanical commercial", body: "BuildOps enters when commercial mechanical complexity dominates." },
  ],
  topAlternatives: SIMPRO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "simpro",
      name: "Simpro",
      logoSrc: LOGOS.simpro,
      bestFor: "Trade operations",
      startingPrice: "Custom",
      standoutFeature: "Jobs + inventory",
      reviewHref: getFieldServiceReviewUrl("simpro"),
    },
    SIMPRO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ServiceTitan", heading: "Best enterprise home service", body: "ServiceTitan when residential scale and enterprise tooling dominate.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("simpro-vs-servicetitan") },
    { productName: "Service Fusion", heading: "Best mid-market HVAC/plumbing", body: "Service Fusion when you want solid trade FSM with more approachable entry.", reviewHref: getFieldServiceReviewUrl("service-fusion"), compareHref: getFieldServiceCompareUrl("simpro-vs-service-fusion") },
    { productName: "BuildOps", heading: "Best commercial mechanical", body: "BuildOps when commercial mechanical complexity leads the evaluation.", reviewHref: getFieldServiceReviewUrl("buildops"), compareHref: getFieldServiceCompareUrl("buildops-vs-simpro") },
    { productName: "Jobber", heading: "Best SMB generalist", body: "Jobber when operations are simple enough that heavy trade suites are unnecessary.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldPulse", heading: "Best dispatch-led trades", body: "FieldPulse for contractor ops when you want mid-tier FSM without full enterprise scope.", reviewHref: getFieldServiceReviewUrl("fieldpulse") },
    { productName: "Housecall Pro", heading: "Best home service value", body: "Housecall Pro for residential-focused teams with tighter budgets.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
  ],
  relatedComparisons: [fsRel("simpro-vs-servicetitan"), fsRel("simpro-vs-service-fusion"), fsRel("buildops-vs-simpro")],
  relatedResources: defaultRelatedResources("Simpro", getFieldServiceReviewUrl("simpro")),
  faqItems: [
    { q: "Simpro vs ServiceTitan?", a: "ServiceTitan is a common US enterprise home-service pick; Simpro is strong when inventory and project workflows matter—compare on real job types." },
    { q: "Simpro vs Service Fusion?", a: "Service Fusion often wins on mid-market value; Simpro can win when operational depth and inventory scenarios dominate." },
  ],
};

// ——— Zuper alternatives ———
const ZUPER_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, rating: "4.6", bestFor: "all-in-one SMB", description: "Default contractor FSM for many teams.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("zuper-vs-jobber"), startingPrice: "From ~$69/mo", standoutFeature: "All-in-one" },
  { slug: "fieldpulse", name: "FieldPulse", logoSrc: LOGOS.fieldpulse, rating: "4.4", bestFor: "dispatch-heavy trades", description: "Ops-forward FSM for growing contractor crews.", reviewHref: getFieldServiceReviewUrl("fieldpulse"), startingPrice: "From ~$99/mo", standoutFeature: "Dispatch" },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, rating: "4.5", bestFor: "home service", description: "Home-service FSM with marketing tools.", reviewHref: getFieldServiceReviewUrl("housecall-pro"), startingPrice: "From ~$49/mo", standoutFeature: "Home service" },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Affordable FSM for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Value" },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, rating: "4.5", bestFor: "enterprise scale", description: "Enterprise FSM when you outgrow mid-market tools.", reviewHref: getFieldServiceReviewUrl("servicetitan"), startingPrice: "Custom", standoutFeature: "Enterprise" },
  { slug: "connecteam", name: "Connecteam", logoSrc: LOGOS.connecteam, rating: "4.3", bestFor: "workforce ops", description: "If your gap is shifts, time, and comms—not full FSM.", reviewHref: getFieldServiceReviewUrl("connecteam"), compareHref: getFieldServiceCompareUrl("connecteam-vs-jobber"), startingPrice: "From ~$29/mo", standoutFeature: "Workforce" },
];

const zuperPage: AlternativesTemplateProps = {
  ...jobberPage,
  title: "Best Zuper Alternatives (2026)",
  subtitle:
    "If Zuper isn’t the right fit—because you want simpler defaults, different trade focus, or a more established SMB brand—these field service platforms are common alternatives.",
  productName: "Zuper",
  productSlug: "zuper",
  originalReviewHref: getFieldServiceReviewUrl("zuper"),
  quickAnswerParagraphs: [
    "Zuper is a flexible field service platform; alternatives include Jobber for the simplest all-in-one SMB path, FieldPulse for dispatch-heavy trade operations, Housecall Pro for home service, Workiz for value, ServiceTitan for enterprise scale, and Connecteam when workforce coordination—not FSM—is the primary gap.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Simplicity", body: "Jobber and Housecall Pro are often easier to adopt for standard contractor workflows." },
    { heading: "Scale", body: "ServiceTitan enters when enterprise depth and playbooks matter." },
    { heading: "Workforce vs FSM", body: "Connecteam fits if scheduling/time tracking is the real bottleneck." },
  ],
  topAlternatives: ZUPER_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    {
      slug: "zuper",
      name: "Zuper",
      logoSrc: LOGOS.zuper,
      bestFor: "Flexible FSM",
      startingPrice: "Custom / tiered",
      standoutFeature: "Workflows",
      reviewHref: getFieldServiceReviewUrl("zuper"),
    },
    ZUPER_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Jobber", heading: "Best all-in-one SMB default", body: "Jobber when you want proven contractor workflows with minimal configuration.", reviewHref: getFieldServiceReviewUrl("jobber"), compareHref: getFieldServiceCompareUrl("zuper-vs-jobber") },
    { productName: "FieldPulse", heading: "Best dispatch-led trades", body: "FieldPulse for contractor ops when field execution matters.", reviewHref: getFieldServiceReviewUrl("fieldpulse") },
    { productName: "Housecall Pro", heading: "Best home service", body: "Housecall Pro for residential-focused teams.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Workiz", heading: "Best value", body: "Workiz for small teams on a budget.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "ServiceTitan", heading: "Best enterprise scale", body: "ServiceTitan when you need enterprise contractor tooling.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    { productName: "Connecteam", heading: "Best workforce coordination", body: "Connecteam when shifts, time tracking, and internal communication dominate.", reviewHref: getFieldServiceReviewUrl("connecteam"), compareHref: getFieldServiceCompareUrl("connecteam-vs-jobber") },
  ],
  relatedComparisons: [fsRel("zuper-vs-jobber"), fsRel("fieldpulse-vs-jobber")],
  relatedResources: defaultRelatedResources("Zuper", getFieldServiceReviewUrl("zuper")),
  faqItems: [
    { q: "Zuper vs Jobber?", a: "Jobber is usually easier to adopt for standard SMB contractor workflows; Zuper can win when customization and integrations are primary." },
    { q: "Is Zuper cheaper than ServiceTitan?", a: "Often yes at mid-market scale, but compare quotes—both can be custom depending on modules." },
  ],
};

// ——— Export ———
const FIELD_SERVICE_ALTERNATIVES_SLUGS = [
  "jobber",
  "housecall-pro",
  "servicetitan",
  "service-fusion",
  "workiz",
  "kickserv",
  "servicem8",
  "fieldedge",
  "mhelpdesk",
  "fieldpulse",
  "servicetrade",
  "workwave-service",
  "buildops",
  "connecteam",
  "oracle-field-service",
  "simpro",
  "zuper",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  jobber: jobberPage,
  "housecall-pro": housecallProPage,
  servicetitan: servicetitanPage,
  "service-fusion": serviceFusionPage,
  workiz: workizPage,
  kickserv: kickservPage,
  servicem8: servicem8Page,
  fieldedge: fieldedgePage,
  mhelpdesk: mhelpdeskPage,
  fieldpulse: fieldpulsePage,
  servicetrade: servicetradePage,
  "workwave-service": workwaveServicePage,
  buildops: buildopsPage,
  connecteam: connecteamPage,
  "oracle-field-service": oracleFieldServicePage,
  simpro: simproPage,
  zuper: zuperPage,
};

export function getFieldServiceAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getFieldServiceAlternativesSlugs(): string[] {
  return [...FIELD_SERVICE_ALTERNATIVES_SLUGS];
}
