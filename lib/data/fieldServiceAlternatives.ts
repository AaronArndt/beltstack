/**
 * Field service alternatives page data.
 * Used by app/field-service/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live field service review pages.
 */

import { getFieldServiceReviewUrl, getFieldServiceCompareUrl, getFieldServiceBestForUrl } from "@/lib/routes";
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
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, rating: "4.4", bestFor: "small teams", description: "Lower cost for small field teams.", reviewHref: getFieldServiceReviewUrl("workiz"), compareHref: getFieldServiceCompareUrl("jobber-vs-workiz"), startingPrice: "From ~$29/mo", standoutFeature: "Small teams; value" },
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
    "Jobber is a strong default for contractors; alternatives include Housecall Pro for home service pros at lower entry price, Workiz for small teams and value, ServiceTitan for growing companies, Kickserv for small service businesses, and Service Fusion for HVAC and plumbing. Housecall Pro and Workiz are the most common alternatives.",
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
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For businesses that want core FSM without Jobber's price.", reviewHref: getFieldServiceReviewUrl("workiz"), compareHref: getFieldServiceCompareUrl("jobber-vs-workiz") },
    { productName: "ServiceTitan", heading: "Best for growing companies", body: "ServiceTitan is enterprise-grade for larger operations. For companies that have outgrown Jobber's scale.", reviewHref: getFieldServiceReviewUrl("servicetitan") },
    { productName: "Kickserv", heading: "Best for small service businesses", body: "Kickserv is straightforward FSM for small businesses. Compare with Jobber for fit and price.", reviewHref: getFieldServiceReviewUrl("kickserv"), compareHref: getFieldServiceCompareUrl("kickserv-vs-jobber") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion offers HVAC and plumbing value and depth. For trade-focused teams.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
    { label: "Kickserv vs Jobber", href: getFieldServiceCompareUrl("kickserv-vs-jobber") },
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
    "Housecall Pro is strong for home service pros; alternatives include Jobber for all-around balance, ServiceTitan for growing companies, Workiz for small teams and value, and Service Fusion or Kickserv for different trade focus. Jobber and ServiceTitan are the main alternatives.",
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
    { productName: "ServiceTitan", heading: "Best for growing companies", body: "ServiceTitan is enterprise-grade for larger operations. For companies that need more depth and scale.", reviewHref: getFieldServiceReviewUrl("servicetitan"), compareHref: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
    { productName: "Service Fusion", heading: "Best for HVAC & plumbing", body: "Service Fusion is strong for HVAC and plumbing value. For trade-focused teams.", reviewHref: getFieldServiceReviewUrl("service-fusion") },
    { productName: "Kickserv", heading: "Best for small business", body: "Kickserv is straightforward FSM for small businesses. For simple needs.", reviewHref: getFieldServiceReviewUrl("kickserv") },
  ],
  relatedComparisons: [
    { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
  ],
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
    "ServiceTitan targets growing service companies; alternatives include Housecall Pro and Jobber for small to mid-size, Service Fusion for HVAC and plumbing value, FieldEdge for similar trade depth, and Workiz for lower cost. Housecall Pro and Service Fusion are common alternatives when cost or simplicity matters.",
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
    { productName: "Jobber", heading: "Best for contractors", body: "Jobber is all-in-one for small to mid-size contractors. For teams that want strong features without enterprise pricing.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldEdge", heading: "Best for HVAC & plumbing depth", body: "FieldEdge offers HVAC and plumbing depth with custom pricing. Alternative enterprise-style option.", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
  ],
  relatedComparisons: [
    { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
    { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
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
    { productName: "Housecall Pro", heading: "Best for home service", body: "Housecall Pro offers lower cost for home service pros. For plumbers, HVAC, and electricians.", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
    { productName: "Jobber", heading: "Best for contractors", body: "Jobber is all-in-one for contractors. For generalist field service needs.", reviewHref: getFieldServiceReviewUrl("jobber") },
    { productName: "FieldEdge", heading: "Best for HVAC & plumbing depth", body: "FieldEdge offers HVAC and plumbing depth. For trade-focused teams that want similar depth.", reviewHref: getFieldServiceReviewUrl("fieldedge") },
    { productName: "Workiz", heading: "Best for small teams", body: "Workiz offers lower cost for small field teams. For value-focused businesses.", reviewHref: getFieldServiceReviewUrl("workiz") },
  ],
  relatedComparisons: [
    { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
  ],
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
  relatedComparisons: [
    { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
  ],
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
  relatedComparisons: [
    { label: "Kickserv vs Jobber", href: getFieldServiceCompareUrl("kickserv-vs-jobber") },
  ],
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

// ——— Export ———
const FIELD_SERVICE_ALTERNATIVES_SLUGS = [
  "jobber", "housecall-pro", "servicetitan", "service-fusion", "workiz",
  "kickserv", "servicem8", "fieldedge", "mhelpdesk",
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
};

export function getFieldServiceAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getFieldServiceAlternativesSlugs(): string[] {
  return [...FIELD_SERVICE_ALTERNATIVES_SLUGS];
}
