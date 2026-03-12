/**
 * Field service management hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/field-service/page.tsx.
 */

import { getFieldServiceReviewUrl, getFieldServiceCompareUrl, getFieldServiceBestForUrl } from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

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
} as const;

/** Top field service management picks for the hub hero section. */
export const FIELD_SERVICE_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "jobber",
    name: "Jobber",
    badge: "Best overall",
    descriptor: "All-in-one field service software for scheduling, dispatch, invoicing, and customer management.",
    rating: "4.6",
    price: "From ~$69/mo",
    features: ["Scheduling & dispatch", "Invoicing & payments", "Mobile app"],
    reviewHref: getFieldServiceReviewUrl("jobber"),
    compareHref: getFieldServiceCompareUrl("jobber-vs-housecall-pro"),
    logoSrc: LOGOS.jobber,
    visitUrl: "https://getjobber.com",
  },
  {
    slug: "housecall-pro",
    name: "Housecall Pro",
    badge: "Best for home service pros",
    descriptor: "Scheduling, dispatching, and payment tools built for home service contractors.",
    rating: "4.5",
    price: "From ~$49/mo",
    features: ["Dispatching", "Estimates & invoicing", "Customer portal"],
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    compareHref: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"),
    logoSrc: LOGOS.housecallpro,
    visitUrl: "https://housecallpro.com",
  },
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    badge: "Best for growing companies",
    descriptor: "Enterprise-grade FSM with dispatch, pricing, marketing, and reporting for larger teams.",
    rating: "4.5",
    price: "Custom pricing",
    features: ["Dispatch & routing", "Estimating & invoicing", "Marketing suite"],
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
    compareHref: getFieldServiceCompareUrl("servicetitan-vs-service-fusion"),
    logoSrc: LOGOS.servicetitan,
    visitUrl: "https://servicetitan.com",
  },
  {
    slug: "service-fusion",
    name: "Service Fusion",
    badge: "Best for HVAC & plumbing",
    descriptor: "Field service software with scheduling, dispatch, and integration with trade-specific workflows.",
    rating: "4.4",
    price: "From ~$99/mo",
    features: ["Scheduling", "Dispatch board", "Invoicing"],
    reviewHref: getFieldServiceReviewUrl("service-fusion"),
    compareHref: getFieldServiceCompareUrl("servicetitan-vs-service-fusion"),
    logoSrc: LOGOS.servicefusion,
    visitUrl: "https://servicefusion.com",
  },
  {
    slug: "workiz",
    name: "Workiz",
    badge: "Best for field teams",
    descriptor: "Scheduling, job management, and invoicing for cleaning, HVAC, and home service businesses.",
    rating: "4.4",
    price: "From ~$29/mo",
    features: ["Scheduling", "Job management", "Invoicing"],
    reviewHref: getFieldServiceReviewUrl("workiz"),
    compareHref: getFieldServiceCompareUrl("jobber-vs-workiz"),
    logoSrc: LOGOS.workiz,
    visitUrl: "https://workiz.com",
  },
];

/** Comparison table rows for the hub (field service tools). */
export const FIELD_SERVICE_COMPARISON_ROWS: ComparisonTableRow[] = [
  { tool: "Jobber", bestFor: "Best overall for contractors", price: "From ~$69/mo", rating: "4.6", slug: "jobber", logoSrc: LOGOS.jobber },
  { tool: "Housecall Pro", bestFor: "Home service pros", price: "From ~$49/mo", rating: "4.5", slug: "housecall-pro", logoSrc: LOGOS.housecallpro },
  { tool: "ServiceTitan", bestFor: "Growing service companies", price: "Custom pricing", rating: "4.5", slug: "servicetitan", logoSrc: LOGOS.servicetitan },
  { tool: "Service Fusion", bestFor: "HVAC & plumbing", price: "From ~$99/mo", rating: "4.4", slug: "service-fusion", logoSrc: LOGOS.servicefusion },
  { tool: "Workiz", bestFor: "Field teams", price: "From ~$29/mo", rating: "4.4", slug: "workiz", logoSrc: LOGOS.workiz },
  { tool: "Kickserv", bestFor: "Small service businesses", price: "From ~$55/mo", rating: "4.3", slug: "kickserv", logoSrc: LOGOS.kickserv },
  { tool: "ServiceM8", bestFor: "Mobile-first field service", price: "From ~$29/mo", rating: "4.3", slug: "servicem8", logoSrc: LOGOS.servicem8 },
  { tool: "FieldEdge", bestFor: "HVAC & plumbing", price: "Custom pricing", rating: "4.3", slug: "fieldedge", logoSrc: LOGOS.fieldedge },
  { tool: "mHelpDesk", bestFor: "Contractors & technicians", price: "From ~$49/mo", rating: "4.2", slug: "mhelpdesk", logoSrc: LOGOS.mhelpdesk },
];

/** Best field service software by use case (scenario) links. */
export const FIELD_SERVICE_SCENARIO_LINKS = [
  { label: "Best for plumbing", href: getFieldServiceBestForUrl("plumbing") },
  { label: "Best for HVAC", href: getFieldServiceBestForUrl("hvac") },
  { label: "Best for electricians", href: getFieldServiceBestForUrl("electricians") },
  { label: "Best for small business", href: getFieldServiceBestForUrl("small-business") },
  { label: "Best for contractors", href: getFieldServiceBestForUrl("contractors") },
] as const;

/** Field service by business type (industry links). */
export const FIELD_SERVICE_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Plumbing", href: getFieldServiceBestForUrl("plumbing") },
  { label: "HVAC", href: getFieldServiceBestForUrl("hvac") },
  { label: "Electrical", href: getFieldServiceBestForUrl("electricians") },
  { label: "Cleaning services", href: getFieldServiceBestForUrl("cleaning-services") },
  { label: "Lawn care", href: getFieldServiceBestForUrl("lawn-care") },
];

export const FIELD_SERVICE_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "Primary industries", links: FIELD_SERVICE_BY_BUSINESS_TYPE },
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
    slug: "housecall-pro-vs-servicetitan",
    productA: { name: "Housecall Pro", logoSrc: LOGOS.housecallpro },
    productB: { name: "ServiceTitan", logoSrc: LOGOS.servicetitan },
    summaryParagraph:
      "Housecall Pro suits smaller teams and solo pros; ServiceTitan targets growing companies with more advanced dispatch, marketing, and reporting.",
    href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"),
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
];

/** FAQ items for the hub. */
export const FIELD_SERVICE_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is field service management software?",
    a: "Field service management (FSM) software helps contractors and service businesses schedule jobs, dispatch technicians, manage customers, and handle invoicing and payments. It replaces spreadsheets and paper with one system so you can see who is going where, what jobs are due, and get paid faster.",
  },
  {
    q: "What software do contractors use to manage jobs?",
    a: "Contractors often use field service software like Jobber, Housecall Pro, ServiceTitan, Service Fusion, or Workiz. These tools combine scheduling, dispatch, customer records, estimates, and invoicing so plumbers, HVAC techs, electricians, and other field teams can run jobs from one place.",
  },
  {
    q: "What is the best field service software for small businesses?",
    a: "Jobber and Housecall Pro are strong choices for small service businesses: both offer scheduling, dispatch, invoicing, and mobile apps at reasonable prices. Workiz and Kickserv are also good for smaller teams. Choose based on your trade, team size, and whether you need heavy customization or a simple setup.",
  },
  {
    q: "Do field service tools include invoicing and scheduling?",
    a: "Yes. Most field service management tools include both scheduling and invoicing. You can assign jobs to technicians, track status, and send estimates and invoices from the same platform. Many also support online payments and recurring billing for maintenance contracts.",
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
