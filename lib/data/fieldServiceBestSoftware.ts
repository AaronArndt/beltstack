import { getFieldServiceReviewUrl, getFieldServiceCompareUrl, getFieldServiceBestForUrl } from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

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

export type BestFieldServicePick = SoftwarePickCardContent;

export type FieldServiceComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export const TOP_PICKS: BestFieldServicePick[] = [
  {
    slug: "jobber",
    name: "Jobber",
    badge: "Best overall for contractors",
    description:
      "All-in-one field service platform with scheduling, dispatch, invoicing, and customer management for home service businesses.",
    rating: "4.6",
    startingPrice: "From ~$69/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://getjobber.com",
    logoSrc: LOGOS.jobber,
    compareSlugs: ["jobber-vs-housecall-pro", "jobber-vs-workiz", "kickserv-vs-jobber"],
    editorialParagraph:
      "Jobber is our top pick for most field service businesses. It combines scheduling, dispatch, job management, and invoicing in one system that is approachable for small teams but still scales as you add trucks. Contractors use Jobber to keep the schedule full, jobs organized, and invoices going out quickly—without needing a patchwork of tools.",
    pros: [
      "All-in-one toolkit for scheduling, jobs, and invoicing",
      "Easy for office staff and technicians to learn",
      "Strong customer and property history",
      "Good fit for home service contractors of many trades",
    ],
    cons: [
      "Pricing can feel high for solo operators on tight budgets",
      "Advanced features locked to higher tiers",
      "Less enterprise depth than ServiceTitan",
    ],
    pricingSummary:
      "Jobber typically charges a base monthly fee that scales by plan and users. Entry tiers fit smaller teams; higher tiers add more automations, quoting options, and reporting. Check Jobber’s current pricing by team size.",
  },
  {
    slug: "housecall-pro",
    name: "Housecall Pro",
    badge: "Best for home service pros",
    description:
      "Scheduling, dispatch, and payments for home service businesses that want a modern, mobile-friendly FSM platform.",
    rating: "4.5",
    startingPrice: "From ~$49/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://housecallpro.com",
    logoSrc: LOGOS.housecallpro,
    compareSlugs: ["jobber-vs-housecall-pro", "housecall-pro-vs-servicetitan"],
    editorialParagraph:
      "Housecall Pro is built specifically for home service pros—think HVAC, plumbing, electrical, and cleaning companies that want clean scheduling and simple job flows. The mobile app is strong, online booking is well executed, and payments are built in. It’s a natural fit for teams that want something more powerful than spreadsheets without the complexity of full enterprise software.",
    pros: [
      "Modern mobile app for technicians",
      "Online booking and customer communication tools",
      "Integrated payments and invoicing",
      "Good fit for home service trades",
    ],
    cons: [
      "Feature depth below ServiceTitan for large organizations",
      "Some advanced automations and marketing on higher tiers",
      "Pricing grows with users and add-ons",
    ],
    pricingSummary:
      "Housecall Pro offers tiered plans starting around $49/month, scaling with seats and features such as advanced automations and marketing. Review current tiers to match your crew size and feature needs.",
  },
  {
    slug: "servicetitan",
    name: "ServiceTitan",
    badge: "Best for growing service companies",
    description:
      "Enterprise-grade field service software with advanced dispatch, pricing, marketing, and reporting for larger trade businesses.",
    rating: "4.5",
    startingPrice: "Custom pricing",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://servicetitan.com",
    logoSrc: LOGOS.servicetitan,
    compareSlugs: ["housecall-pro-vs-servicetitan", "servicetitan-vs-service-fusion"],
    editorialParagraph:
      "ServiceTitan is designed for established HVAC, plumbing, and electrical companies that need deep visibility into operations. It includes advanced dispatch, pricebooks, marketing tools, and extensive reporting. The tradeoff is cost and complexity—implementation takes time, but in return you get fine-grained control that smaller tools can’t match.",
    pros: [
      "Advanced dispatch, pricebook, and job management",
      "Built-in marketing, call tracking, and reporting",
      "Designed for larger, growing service companies",
      "Strong industry focus on HVAC, plumbing, and trades",
    ],
    cons: [
      "Custom pricing that can be high for smaller teams",
      "Implementation and onboarding take time",
      "Too heavy for very small contractors",
    ],
    pricingSummary:
      "ServiceTitan uses custom, per-account pricing and often requires a minimum contract. It fits teams that can justify higher software spend with larger job volume and revenue.",
  },
  {
    slug: "service-fusion",
    name: "Service Fusion",
    badge: "Best for HVAC & plumbing value",
    description:
      "Field service management with scheduling, dispatch, and invoicing for HVAC, plumbing, and other trade businesses.",
    rating: "4.4",
    startingPrice: "From ~$99/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://servicefusion.com",
    logoSrc: LOGOS.servicefusion,
    compareSlugs: ["servicetitan-vs-service-fusion"],
    editorialParagraph:
      "Service Fusion focuses on the core FSM workflows—scheduling, dispatch, job management, and invoicing—at a price point many mid-size trade companies can handle. It’s particularly popular with HVAC and plumbing shops that need structure and mobile apps without going all-in on a full enterprise platform.",
    pros: [
      "Solid scheduling and dispatch tools",
      "Good fit for HVAC and plumbing",
      "Easier to adopt than some enterprise platforms",
    ],
    cons: [
      "Less breadth than ServiceTitan for marketing and analytics",
      "UI can feel busy in some areas",
      "Smaller ecosystem than the largest players",
    ],
    pricingSummary:
      "Service Fusion generally starts around $99/month with tiers that scale by users and features. Check current pricing and user limits before committing.",
  },
  {
    slug: "workiz",
    name: "Workiz",
    badge: "Best for small field teams",
    description:
      "FSM platform for cleaning, locksmith, junk removal, and other service businesses that want straightforward job and schedule management.",
    rating: "4.4",
    startingPrice: "From ~$29/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://workiz.com",
    logoSrc: LOGOS.workiz,
    compareSlugs: ["jobber-vs-workiz"],
    editorialParagraph:
      "Workiz is a strong option for smaller field teams that want to get out of pen-and-paper scheduling without paying enterprise prices. It covers scheduling, jobs, invoicing, and payments with an interface that is friendly to techs. It’s especially attractive to cleaning, junk removal, and similar service businesses.",
    pros: [
      "Affordable entry-level pricing",
      "Straightforward scheduling and dispatch",
      "Good fit for cleaning and light service trades",
    ],
    cons: [
      "Less depth than Jobber for some workflows",
      "Smaller ecosystem of integrations",
      "Might be outgrown by rapidly scaling companies",
    ],
    pricingSummary:
      "Workiz typically starts around $29/month with plans scaling by users and features. It can be one of the most budget-friendly ways to modernize scheduling and invoicing.",
  },
  {
    slug: "kickserv",
    name: "Kickserv",
    badge: "Best for small service businesses",
    description:
      "Field service CRM and job management for small service businesses that want simple scheduling and customer tracking.",
    rating: "4.3",
    startingPrice: "From ~$55/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.kickserv.com",
    logoSrc: LOGOS.kickserv,
    compareSlugs: ["kickserv-vs-jobber"],
    editorialParagraph:
      "Kickserv blends CRM-style customer tracking with field service scheduling and job management. It’s a good fit for smaller service businesses that want to move beyond a basic calendar but don’t need heavy-weight enterprise features.",
    pros: [
      "Simple CRM plus job management in one tool",
      "Designed for small service teams",
      "Clear scheduling and dispatch board",
    ],
    cons: [
      "Less automation and marketing than larger platforms",
      "UI and workflows feel more modest than top-end tools",
      "May be outgrown by rapidly scaling companies",
    ],
    pricingSummary:
      "Kickserv offers tiered plans starting around $55/month. Plans vary by user count and features; check current tiers for exact pricing.",
  },
  {
    slug: "servicem8",
    name: "ServiceM8",
    badge: "Best for mobile-first field service",
    description:
      "Mobile-first field service management built for small field teams that live on their phones and tablets.",
    rating: "4.3",
    startingPrice: "From ~$29/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.servicem8.com",
    logoSrc: LOGOS.servicem8,
    compareSlugs: [],
    editorialParagraph:
      "ServiceM8 is focused on mobile: it’s built to run from the field, with strong apps and job workflows optimized for phones and tablets. It can be a great fit for very small teams that want to keep the office light and give techs most of the power in their pockets.",
    pros: [
      "Mobile-first design for technicians",
      "Good for very small crews",
      "Simple job flows and checklists",
    ],
    cons: [
      "Less suited to complex organizations and large back offices",
      "Feature set narrower than enterprise systems",
      "Requires comfort with mobile-first workflows",
    ],
    pricingSummary:
      "ServiceM8 generally offers lower-cost plans based on job volume and features. Review current tiers to make sure limits fit your job volume.",
  },
  {
    slug: "fieldedge",
    name: "FieldEdge",
    badge: "Best for HVAC & plumbing depth",
    description:
      "Trade-focused FSM with deep features for HVAC and plumbing businesses that need strong dispatch and flat-rate pricing.",
    rating: "4.3",
    startingPrice: "Custom pricing",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://fieldedge.com",
    logoSrc: LOGOS.fieldedge,
    compareSlugs: [],
    editorialParagraph:
      "FieldEdge targets HVAC and plumbing companies that want deeper dispatch and pricing tools tailored to their trade. It offers strong service agreement, flat-rate pricing, and integration options, making it attractive to companies that have outgrown generic tools.",
    pros: [
      "Trade-focused feature set for HVAC and plumbing",
      "Strong dispatch and pricing tools",
      "Service agreement support",
    ],
    cons: [
      "Custom pricing and longer sales process",
      "Can be overkill for smaller or non-trade businesses",
      "Implementation effort similar to other advanced FSM tools",
    ],
    pricingSummary:
      "FieldEdge typically uses custom pricing and implementation. It’s best evaluated via demo and quote once you are certain you need trade-specific depth.",
  },
  {
    slug: "mhelpdesk",
    name: "mHelpDesk",
    badge: "Best for contractors & technicians",
    description:
      "Field service software for contractors and technicians that need job, schedule, and invoicing tools in one platform.",
    rating: "4.2",
    startingPrice: "From ~$49/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.mhelpdesk.com",
    logoSrc: LOGOS.mhelpdesk,
    compareSlugs: [],
    editorialParagraph:
      "mHelpDesk gives contractors and technicians a single place to manage jobs, schedules, and invoices. It’s a solid middle-ground option for teams that need more than a calendar but don’t require the full complexity of top-end enterprise platforms.",
    pros: [
      "Job, schedule, and invoicing tools in one app",
      "Designed for contractors and technicians",
      "Supports a range of service trades",
    ],
    cons: [
      "Interface and UX less polished than some newer tools",
      "Smaller ecosystem and brand recognition",
      "Advanced features may require higher tiers",
    ],
    pricingSummary:
      "mHelpDesk typically starts around $49/month with plans scaling by users and features. Confirm current pricing and limits before you commit.",
  },
];

/** Comparison table: all 9 FSM tools. */
export const COMPARISON_TABLE_ROWS: FieldServiceComparisonTableRow[] = [
  { slug: "jobber", name: "Jobber", logoSrc: LOGOS.jobber, bestFor: "Best overall for contractors", startingPrice: "From ~$69/mo", rating: "4.6", reviewHref: getFieldServiceReviewUrl("jobber") },
  { slug: "housecall-pro", name: "Housecall Pro", logoSrc: LOGOS.housecallpro, bestFor: "Home service pros", startingPrice: "From ~$49/mo", rating: "4.5", reviewHref: getFieldServiceReviewUrl("housecall-pro") },
  { slug: "servicetitan", name: "ServiceTitan", logoSrc: LOGOS.servicetitan, bestFor: "Growing service companies", startingPrice: "Custom pricing", rating: "4.5", reviewHref: getFieldServiceReviewUrl("servicetitan") },
  { slug: "service-fusion", name: "Service Fusion", logoSrc: LOGOS.servicefusion, bestFor: "HVAC & plumbing value", startingPrice: "From ~$99/mo", rating: "4.4", reviewHref: getFieldServiceReviewUrl("service-fusion") },
  { slug: "workiz", name: "Workiz", logoSrc: LOGOS.workiz, bestFor: "Small field teams", startingPrice: "From ~$29/mo", rating: "4.4", reviewHref: getFieldServiceReviewUrl("workiz") },
  { slug: "kickserv", name: "Kickserv", logoSrc: LOGOS.kickserv, bestFor: "Small service businesses", startingPrice: "From ~$55/mo", rating: "4.3", reviewHref: getFieldServiceReviewUrl("kickserv") },
  { slug: "servicem8", name: "ServiceM8", logoSrc: LOGOS.servicem8, bestFor: "Mobile-first field service", startingPrice: "From ~$29/mo", rating: "4.3", reviewHref: getFieldServiceReviewUrl("servicem8") },
  { slug: "fieldedge", name: "FieldEdge", logoSrc: LOGOS.fieldedge, bestFor: "HVAC & plumbing depth", startingPrice: "Custom pricing", rating: "4.3", reviewHref: getFieldServiceReviewUrl("fieldedge") },
  { slug: "mhelpdesk", name: "mHelpDesk", logoSrc: LOGOS.mhelpdesk, bestFor: "Contractors & technicians", startingPrice: "From ~$49/mo", rating: "4.2", reviewHref: getFieldServiceReviewUrl("mhelpdesk") },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for plumbing",
    href: getFieldServiceBestForUrl("plumbing"),
    description: "Field service tools tailored to plumbing jobs, service agreements, and emergency calls.",
  },
  {
    label: "Best for HVAC",
    href: getFieldServiceBestForUrl("hvac"),
    description: "FSM platforms that handle seasonal demand, maintenance agreements, and multiple trucks.",
  },
  {
    label: "Best for electricians",
    href: getFieldServiceBestForUrl("electricians"),
    description: "Software that supports electrical contractors with job history, estimates, and safety notes.",
  },
  {
    label: "Best for small business",
    href: getFieldServiceBestForUrl("small-business"),
    description: "FSM tools that give small shops modern scheduling and invoicing without enterprise complexity.",
  },
  {
    label: "Best for contractors",
    href: getFieldServiceBestForUrl("contractors"),
    description: "All-in-one field service software for general contractors and mixed trade crews.",
  },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
  { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
  { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
  { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
  { label: "Kickserv vs Jobber", href: getFieldServiceCompareUrl("kickserv-vs-jobber") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is field service management software?",
    a: "Field service management (FSM) software helps contractors and service businesses schedule jobs, dispatch technicians, manage customers, and handle estimates, invoices, and payments. It replaces paper, spreadsheets, and text threads with one system so you can see who is going where, what jobs are due, and whether invoices have been sent and paid.",
  },
  {
    q: "Why do contractors use field service software?",
    a: "Contractors use FSM tools to keep the schedule full and organized, reduce missed appointments, and make sure techs have the right information before they roll. With a good system, jobs, estimates, invoices, and customer history all live together—saving time for both the office and the field.",
  },
  {
    q: "What is the best field service software for small businesses?",
    a: "Jobber and Housecall Pro are strong defaults for many small service companies, thanks to their balance of features and ease of use. Workiz and Kickserv are also good options when you want something more affordable. Larger, growing teams may prefer ServiceTitan or FieldEdge for deeper trade-specific capabilities.",
  },
  {
    q: "Do field service tools combine scheduling, dispatch, invoicing, and CRM?",
    a: "Yes. Most modern FSM platforms combine scheduling and dispatch with job management, estimates, invoices, payments, and basic CRM capabilities like customer and property history. The goal is to run the day-to-day of the business—calendar, jobs, customers, and cash flow—from one place.",
  },
];

