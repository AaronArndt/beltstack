import { getTimeTrackingReviewUrl, getTimeTrackingCompareUrl } from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestTimeTrackingPick = SoftwarePickCardContent & {
  standoutFeature: string;
};

export type TimeTrackingComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  standoutFeature: string;
  reviewHref: string;
};

export const TOP_PICKS: BestTimeTrackingPick[] = [
  {
    slug: "toggl",
    name: "Toggl Track",
    badge: "Best overall",
    description:
      "Intuitive time tracking with strong reporting and integrations. Great default for freelancers, agencies, and small teams.",
    rating: "4.6",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://toggl.com/track",
    logoSrc: "/Logos/toggl.jpeg",
    compareSlugs: ["toggl-vs-harvest", "clockify-vs-toggl", "timely-vs-toggl"],
    standoutFeature: "Clean UX and powerful reporting",
    editorialParagraph:
      "Toggl Track is our top pick for most teams that want simple, accurate time tracking with strong analytics. The interface is easy enough that people actually use it, while reports make it clear where time and money go. The free plan works for small teams; paid plans add billable rates, more granular reporting, and advanced permissions.",
    pros: [
      "Simple, intuitive interface; people actually use it",
      "Strong reporting and analytics",
      "Generous free plan for small teams",
      "Wide integrations and API",
    ],
    cons: [
      "Paid plans needed for billable rates and advanced permissions",
      "Less built-in invoicing than Harvest",
      "Some features only on higher tiers",
    ],
    pricingSummary:
      "Toggl Track offers a free tier; paid plans start around $10/user/month and add billable rates, more reporting, and advanced permissions. Check current pricing on Toggl's site.",
  },
  {
    slug: "harvest",
    name: "Harvest",
    badge: "Best for billing & invoicing",
    description:
      "Project-based time tracking with built-in invoicing and expenses. Ideal for agencies and service businesses that bill by the hour.",
    rating: "4.4",
    startingPrice: "$12/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.getharvest.com",
    logoSrc: "/Logos/harvest.png",
    compareSlugs: ["toggl-vs-harvest", "harvest-vs-clockify", "everhour-vs-harvest"],
    standoutFeature: "Time tracking tied to invoices",
    editorialParagraph:
      "Harvest is a strong choice when time tracking and billing live close together. You log time against projects and tasks, then turn that time into invoices inside the same tool. Expense tracking and lightweight reporting round things out. It’s especially good for small agencies and studios that want to keep their stack simple.",
    pros: [
      "Time tracking and invoicing in one place",
      "Project-based tracking; turn hours into invoices",
      "Expense tracking and reporting included",
      "Good for agencies and service businesses",
    ],
    cons: [
      "Less flexible than Toggl for non-billing use cases",
      "Per-user pricing can add up for large teams",
      "Reporting depth below dedicated analytics tools",
    ],
    pricingSummary:
      "Harvest charges per user (around $12/user/month); free tier is limited. Compare with Toggl or Clockify if you don't need built-in invoicing.",
  },
  {
    slug: "clockify",
    name: "Clockify",
    badge: "Best free option",
    description:
      "Popular freemium time tracker with unlimited users on the free plan. Good for teams that want time tracking without a big budget.",
    rating: "4.3",
    startingPrice: "Free",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://clockify.me",
    logoSrc: "/Logos/clockify.jpeg",
    compareSlugs: ["clockify-vs-toggl", "harvest-vs-clockify"],
    standoutFeature: "Unlimited free users",
    editorialParagraph:
      "Clockify is compelling if you need basic time tracking across a larger team at low cost. The free plan supports unlimited users and projects; paid tiers add approvals, reminders, and more detailed controls. It’s less opinionated than Toggl or Harvest, which can be a pro or con depending on how much structure you want.",
    pros: [
      "Unlimited users and projects on free plan",
      "Low cost for basic time tracking",
      "Approvals and reminders on paid tiers",
      "Flexible; less opinionated structure",
    ],
    cons: [
      "UX and reporting less polished than Toggl",
      "No built-in invoicing like Harvest",
      "Paid features needed for advanced controls",
    ],
    pricingSummary:
      "Clockify's free plan supports unlimited users; paid plans start around $4/user/month for extra features. Best value for teams that need many seats on a budget.",
  },
  {
    slug: "hubstaff",
    name: "Hubstaff",
    badge: "Best for remote teams",
    description:
      "Time tracking with productivity monitoring, GPS, and payroll. Built for distributed and field teams that need accountability.",
    rating: "4.4",
    startingPrice: "$4.99/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://hubstaff.com",
    logoSrc: "/Logos/hubstaff.jpeg",
    compareSlugs: ["hubstaff-vs-time-doctor"],
    standoutFeature: "Activity and location tracking",
    editorialParagraph:
      "Hubstaff is designed for teams that care about both hours and how they’re spent. It includes activity scores, optional screenshots, GPS/location tracking, and simple payroll for contractors and employees. That makes it powerful for remote and field teams—but it’s also more intrusive than lighter tools like Toggl or Clockify.",
    pros: [
      "Activity scores, optional screenshots, GPS tracking",
      "Simple payroll for contractors and employees",
      "Built for remote and field teams",
      "Strong accountability features",
    ],
    cons: [
      "More intrusive than lighter tools",
      "Privacy and culture considerations",
      "Overkill for teams that only need simple tracking",
    ],
    pricingSummary:
      "Hubstaff starts around $4.99/user/month; higher tiers add more monitoring and payroll features. Compare with Toggl or Clockify if you don't need monitoring.",
  },
];

export const COMPARISON_TABLE_ROWS: TimeTrackingComparisonTableRow[] = [
  {
    slug: "toggl",
    name: "Toggl Track",
    logoSrc: "/Logos/toggl.jpeg",
    bestFor: "Best overall",
    startingPrice: "Free tier",
    standoutFeature: "Simple tracking, strong reports",
    reviewHref: getTimeTrackingReviewUrl("toggl"),
  },
  {
    slug: "harvest",
    name: "Harvest",
    logoSrc: "/Logos/harvest.png",
    bestFor: "Billing & invoicing",
    startingPrice: "$12/user/mo",
    standoutFeature: "Time → invoices workflow",
    reviewHref: getTimeTrackingReviewUrl("harvest"),
  },
  {
    slug: "clockify",
    name: "Clockify",
    logoSrc: "/Logos/clockify.jpeg",
    bestFor: "Free teams",
    startingPrice: "Free",
    standoutFeature: "Unlimited free users",
    reviewHref: getTimeTrackingReviewUrl("clockify"),
  },
  {
    slug: "hubstaff",
    name: "Hubstaff",
    logoSrc: "/Logos/hubstaff.jpeg",
    bestFor: "Remote / field teams",
    startingPrice: "$4.99/user/mo",
    standoutFeature: "Activity & GPS tracking",
    reviewHref: getTimeTrackingReviewUrl("hubstaff"),
  },
  {
    slug: "time-doctor",
    name: "Time Doctor",
    logoSrc: "/Logos/timedoctor.jpeg",
    bestFor: "Monitoring-heavy teams",
    startingPrice: "From ~$7/user/mo",
    standoutFeature: "Deep activity monitoring",
    reviewHref: getTimeTrackingReviewUrl("time-doctor"),
  },
  {
    slug: "rescuetime",
    name: "RescueTime",
    logoSrc: "/Logos/rescuetime.jpeg",
    bestFor: "Personal productivity",
    startingPrice: "Free tier",
    standoutFeature: "Automatic focus tracking",
    reviewHref: getTimeTrackingReviewUrl("rescuetime"),
  },
  {
    slug: "everhour",
    name: "Everhour",
    logoSrc: "/Logos/everhour.png",
    bestFor: "Project teams",
    startingPrice: "From ~$8.50/user/mo",
    standoutFeature: "Deep project integrations",
    reviewHref: getTimeTrackingReviewUrl("everhour"),
  },
  {
    slug: "timely",
    name: "Timely",
    logoSrc: "/Logos/timely.png",
    bestFor: "Automatic tracking",
    startingPrice: "From ~$11/user/mo",
    standoutFeature: "AI-powered auto tracking",
    reviewHref: getTimeTrackingReviewUrl("timely"),
  },
];

export const USE_CASE_LINKS = [
  {
    label: "Best for freelancers",
    href: "/time-tracking/best-for/freelancers",
    description: "Time tracking tools that make it easy to log billable hours and invoice clients.",
  },
  {
    label: "Best for agencies",
    href: "/time-tracking/best-for/agencies",
    description: "Track time across clients and projects, manage utilization, and keep budgets healthy.",
  },
  {
    label: "Best for consultants",
    href: "/time-tracking/best-for/consultants",
    description: "Log client work, retainers, and billable vs non-billable time in one place.",
  },
  {
    label: "Best for small business",
    href: "/time-tracking/best-for/small-business",
    description: "Lightweight time tracking that fits simple teams without adding complexity.",
  },
  {
    label: "Best for remote teams",
    href: "/time-tracking/best-for/remote-teams",
    description: "Time tracking plus monitoring for distributed and hybrid teams.",
  },
];

export const RELATED_COMPARISONS = [
  { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
  { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
  { label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
];

export const FAQ_ITEMS = [
  {
    q: "What is the best time tracking software?",
    a: "Toggl Track is our default pick for most teams: it’s easy to use, has a generous free tier, and offers strong reporting. Harvest is better if you want billing and invoicing built in; Clockify is best when you need free time tracking for many users; Hubstaff and Time Doctor make more sense for remote teams that require monitoring features.",
  },
  {
    q: "Which tools are best for freelancers and agencies?",
    a: "Freelancers often gravitate to Toggl Track, Harvest, or Everhour because they integrate well with project tools and make it easy to turn hours into invoices. Agencies should look at Harvest, Everhour, or Timely for project-centric time tracking and budget visibility.",
  },
  {
    q: "Do I need employee monitoring features?",
    a: "Many businesses only need simple tracking with timers and basic reports. Monitoring-heavy tools like Hubstaff and Time Doctor add screenshots, activity scores, and GPS. They can increase accountability for remote or field teams, but they also raise privacy and culture considerations.",
  },
  {
    q: "How much does time tracking software cost?",
    a: "Most tools offer free tiers or trials, then charge per user per month—often between $4 and $15 per user. Clockify’s free plan supports unlimited users, while Toggl, Harvest, and others meter features and seats by plan. Compare total cost at your team size and consider whether you need advanced reporting or monitoring.",
  },
];

