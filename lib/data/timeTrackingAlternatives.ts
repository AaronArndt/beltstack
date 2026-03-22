/**
 * Time tracking alternatives page data.
 * Used by app/time-tracking/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live time tracking review pages.
 */

import { getTimeTrackingReviewUrl, getTimeTrackingCompareUrl, getTimeTrackingBestForUrl } from "@/lib/routes";
import { getTimeTrackingComparison } from "@/lib/data/timeTrackingComparisons";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/time-tracking", label: "Time tracking" };
const ROUNDUP_HREF = "/time-tracking/best-time-tracking-software";
const COMPARE_HUB = "/time-tracking/compare";
const GUIDES_HUB = "/time-tracking/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Manual vs automatic tracking", body: "Most tools use manual start/stop timers or timesheet entry. A few (e.g. Timely, RescueTime) offer automatic or passive tracking. Choose based on how your team works: explicit timers vs background activity." },
  { heading: "Billing and invoicing", body: "If you bill by time, look for billable rates, project budgets, and export or integration with invoicing. Harvest has built-in invoicing; Toggl and Clockify focus on tracking and export to other tools." },
  { heading: "Reporting and visibility", body: "Reports by client, project, and user matter for billing and capacity. Compare how easy it is to filter, export, and share time data." },
  { heading: "Integrations", body: "Time trackers often plug into project management (Asana, Trello, Jira), invoicing, and payroll. Check that your stack is supported." },
  { heading: "Monitoring and compliance", body: "Remote teams that need screenshots, activity levels, or GPS should look at Hubstaff or Time Doctor. Most other tools avoid heavy monitoring—choose by policy." },
  { heading: "Pricing and scale", body: "Free tiers (Toggl, Clockify) suit individuals and small teams. Paid plans add features and seats. Compare per-user cost and limits at your team size." },
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

function ttRel(slug: string) {
  return toAlternativesRelatedComparison(getTimeTrackingCompareUrl(slug), getTimeTrackingComparison(slug));
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Time tracking hub", href: CATEGORY.href },
    { label: "Best time tracking software", href: ROUNDUP_HREF },
    { label: "Compare time tracking software", href: COMPARE_HUB },
    { label: "Time tracking guides", href: GUIDES_HUB },
    { label: "Best for freelancers", href: getTimeTrackingBestForUrl("freelancers") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Toggl alternatives ———
const TOGGL_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "time tracking + invoicing", description: "Time tracking with built-in invoicing for agencies and service teams.", reviewHref: getTimeTrackingReviewUrl("harvest"), compareHref: getTimeTrackingCompareUrl("toggl-vs-harvest"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "unlimited free", description: "Unlimited free time tracking for teams on a budget.", reviewHref: getTimeTrackingReviewUrl("clockify"), compareHref: getTimeTrackingCompareUrl("clockify-vs-toggl"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "timely", name: "Timely", logoSrc: "/Logos/timely.png", rating: "4.2", bestFor: "automatic tracking", description: "AI-based automatic time tracking for knowledge workers.", reviewHref: getTimeTrackingReviewUrl("timely"), compareHref: getTimeTrackingCompareUrl("timely-vs-toggl"), startingPrice: "From ~$11/user/mo", standoutFeature: "Automatic tracking" },
  { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.3", bestFor: "project tool integration", description: "Integrates inside Asana, Trello, ClickUp for project-based tracking.", reviewHref: getTimeTrackingReviewUrl("everhour"), startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration" },
  { slug: "hubstaff", name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", rating: "4.4", bestFor: "remote monitoring", description: "Time tracking with optional screenshots and activity for remote teams.", reviewHref: getTimeTrackingReviewUrl("hubstaff"), startingPrice: "$4.99/user/mo", standoutFeature: "Monitoring; GPS" },
];

const togglOriginalRow: AlternativesTableRow = {
  slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", bestFor: "simple tracking and reporting", startingPrice: "Free tier", standoutFeature: "Ease of use; reporting", reviewHref: getTimeTrackingReviewUrl("toggl"),
};

const togglPage: AlternativesTemplateProps = {
  title: "Best Toggl Track Alternatives (2026)",
  subtitle: "If Toggl Track isn't the right fit—because you need invoicing, unlimited free users, or different workflow—these time tracking alternatives offer strong options for freelancers and teams.",
  productName: "Toggl Track",
  productSlug: "toggl",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getTimeTrackingReviewUrl("toggl"),
  quickAnswerParagraphs: [
    "Toggl Track is a strong default for simple time tracking and reporting; alternatives include Harvest for built-in invoicing, Clockify for unlimited free tracking, Timely for automatic tracking, Everhour for project-tool integration, and Hubstaff for remote monitoring. Harvest and Clockify are the most common switches.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Invoicing", body: "Toggl doesn't include invoicing. Harvest combines time tracking with invoicing; others export to invoicing tools." },
    { heading: "Free tier limits", body: "Clockify offers unlimited free users. Teams on a tight budget may prefer Clockify." },
    { heading: "Automatic tracking", body: "Timely and RescueTime offer automatic or passive tracking. Different workflow from manual timers." },
  ],
  topAlternatives: TOGGL_ALTERNATIVES,
  comparisonTableRows: buildTableRows(togglOriginalRow, TOGGL_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "Harvest", heading: "Best for time tracking + invoicing", body: "Harvest adds built-in invoicing and expense tracking. For agencies and service teams that want one tool for time and billing.", reviewHref: getTimeTrackingReviewUrl("harvest"), compareHref: getTimeTrackingCompareUrl("toggl-vs-harvest") },
    { productName: "Clockify", heading: "Best for unlimited free", body: "Clockify offers unlimited free time tracking. For teams that need to minimize cost while still tracking by project and client.", reviewHref: getTimeTrackingReviewUrl("clockify"), compareHref: getTimeTrackingCompareUrl("clockify-vs-toggl") },
    { productName: "Timely", heading: "Best for automatic tracking", body: "Timely uses AI to suggest and categorize time. For knowledge workers who prefer less manual timer discipline.", reviewHref: getTimeTrackingReviewUrl("timely"), compareHref: getTimeTrackingCompareUrl("timely-vs-toggl") },
    { productName: "Everhour", heading: "Best for project tool integration", body: "Everhour lives inside Asana, Trello, ClickUp, and others. For teams that want time tracking in the same place as tasks.", reviewHref: getTimeTrackingReviewUrl("everhour") },
    { productName: "Hubstaff", heading: "Best for remote monitoring", body: "Hubstaff adds optional screenshots, activity levels, and GPS. For remote or field teams that need oversight.", reviewHref: getTimeTrackingReviewUrl("hubstaff") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    ttRel("toggl-vs-harvest"),
    ttRel("clockify-vs-toggl"),
    ttRel("timely-vs-toggl"),
  ],
  relatedResources: defaultRelatedResources("Toggl Track", getTimeTrackingReviewUrl("toggl")),
  faqItems: [
    { q: "What is the best Toggl alternative?", a: "Harvest and Clockify are the best alternatives. Harvest adds invoicing; Clockify offers unlimited free users. Timely suits automatic tracking; Everhour suits project-tool integration." },
    { q: "Is Toggl better than Harvest?", a: "Toggl is simpler and has a strong free tier; Harvest adds built-in invoicing. Choose Toggl for ease and reporting; Harvest when you need time and invoicing in one tool." },
    { q: "Which time tracking software is free like Toggl?", a: "Clockify offers unlimited free tracking. Toggl's free tier has limits; compare user and feature limits for your team size." },
  ],
};

// ——— Harvest alternatives ———
const HARVEST_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "simplicity and reporting", description: "Simpler time tracking with strong reporting; pair with separate invoicing.", reviewHref: getTimeTrackingReviewUrl("toggl"), compareHref: getTimeTrackingCompareUrl("toggl-vs-harvest"), startingPrice: "Free tier", standoutFeature: "Ease of use; reporting" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "unlimited free", description: "Unlimited free tracking; export or integrate for billing.", reviewHref: getTimeTrackingReviewUrl("clockify"), compareHref: getTimeTrackingCompareUrl("harvest-vs-clockify"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.3", bestFor: "project integration", description: "Time tracking inside Asana, Trello, ClickUp; billing features.", reviewHref: getTimeTrackingReviewUrl("everhour"), compareHref: getTimeTrackingCompareUrl("everhour-vs-harvest"), startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration" },
  { slug: "hubstaff", name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", rating: "4.4", bestFor: "monitoring", description: "Time tracking with optional monitoring and payroll.", reviewHref: getTimeTrackingReviewUrl("hubstaff"), startingPrice: "$4.99/user/mo", standoutFeature: "Monitoring; GPS" },
  { slug: "timely", name: "Timely", logoSrc: "/Logos/timely.png", rating: "4.2", bestFor: "automatic tracking", description: "AI-based automatic time tracking.", reviewHref: getTimeTrackingReviewUrl("timely"), startingPrice: "From ~$11/user/mo", standoutFeature: "Automatic tracking" },
];

const harvestPage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best Harvest Alternatives (2026)",
  subtitle: "If Harvest isn't the right fit—because of cost, preference for simpler tracking, or different features—these time tracking alternatives offer strong options for agencies and service teams.",
  productName: "Harvest",
  productSlug: "harvest",
  originalReviewHref: getTimeTrackingReviewUrl("harvest"),
  quickAnswerParagraphs: [
    "Harvest combines time tracking with invoicing; alternatives include Toggl Track for simpler tracking and reporting, Clockify for unlimited free tracking, Everhour for project-tool integration, and Hubstaff or Timely for different workflows. Toggl and Clockify are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Cost", body: "Harvest is paid per user. Clockify offers unlimited free; Toggl has a generous free tier." },
    { heading: "Simplicity", body: "Toggl is lighter if you don't need built-in invoicing and use another tool for billing." },
    { heading: "Workflow", body: "Everhour lives inside project tools; Timely offers automatic tracking." },
  ],
  topAlternatives: HARVEST_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", bestFor: "time + invoicing", startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing", reviewHref: getTimeTrackingReviewUrl("harvest") },
    HARVEST_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Toggl Track", heading: "Best for simplicity and reporting", body: "Toggl focuses on tracking and reporting; use a separate tool for invoicing. For teams that prefer best-of-breed.", reviewHref: getTimeTrackingReviewUrl("toggl"), compareHref: getTimeTrackingCompareUrl("toggl-vs-harvest") },
    { productName: "Clockify", heading: "Best for unlimited free", body: "Clockify offers unlimited free time tracking. For cost-conscious teams that can use export or integrations for billing.", reviewHref: getTimeTrackingReviewUrl("clockify"), compareHref: getTimeTrackingCompareUrl("harvest-vs-clockify") },
    { productName: "Everhour", heading: "Best for project integration", body: "Everhour integrates inside Asana, Trello, ClickUp with billing features. For teams that live in a project tool.", reviewHref: getTimeTrackingReviewUrl("everhour"), compareHref: getTimeTrackingCompareUrl("everhour-vs-harvest") },
    { productName: "Hubstaff", heading: "Best for monitoring", body: "Hubstaff adds optional monitoring and payroll. For remote teams that need oversight.", reviewHref: getTimeTrackingReviewUrl("hubstaff") },
    { productName: "Timely", heading: "Best for automatic tracking", body: "Timely uses AI for automatic time tracking. Different workflow from manual timers.", reviewHref: getTimeTrackingReviewUrl("timely") },
  ],
  relatedComparisons: [
    ttRel("toggl-vs-harvest"),
    ttRel("harvest-vs-clockify"),
    ttRel("everhour-vs-harvest"),
  ],
  relatedResources: defaultRelatedResources("Harvest", getTimeTrackingReviewUrl("harvest")),
  faqItems: [
    { q: "What is the best Harvest alternative?", a: "Toggl Track and Clockify are the best alternatives. Toggl for simplicity and reporting; Clockify for unlimited free. Everhour for project-tool integration." },
    { q: "Is Harvest better than Toggl?", a: "Harvest adds built-in invoicing; Toggl is simpler and has a strong free tier. Choose Harvest when you want time and invoicing in one; Toggl when you prefer separate tools." },
    { q: "Which time tracking software is cheaper than Harvest?", a: "Clockify is free for unlimited users. Toggl has a free tier. Compare paid plans and invoicing needs." },
  ],
};

// ——— Clockify alternatives ———
const CLOCKIFY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "ease and reporting", description: "Simpler UX and stronger reporting; free tier available.", reviewHref: getTimeTrackingReviewUrl("toggl"), compareHref: getTimeTrackingCompareUrl("clockify-vs-toggl"), startingPrice: "Free tier", standoutFeature: "Ease of use; reporting" },
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "invoicing", description: "Time tracking with built-in invoicing.", reviewHref: getTimeTrackingReviewUrl("harvest"), compareHref: getTimeTrackingCompareUrl("harvest-vs-clockify"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
  { slug: "timely", name: "Timely", logoSrc: "/Logos/timely.png", rating: "4.2", bestFor: "automatic tracking", description: "AI-based automatic time tracking.", reviewHref: getTimeTrackingReviewUrl("timely"), startingPrice: "From ~$11/user/mo", standoutFeature: "Automatic tracking" },
  { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.3", bestFor: "project integration", description: "Integrates inside Asana, Trello, ClickUp.", reviewHref: getTimeTrackingReviewUrl("everhour"), startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration" },
  { slug: "hubstaff", name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", rating: "4.4", bestFor: "monitoring", description: "Time tracking with optional monitoring.", reviewHref: getTimeTrackingReviewUrl("hubstaff"), startingPrice: "$4.99/user/mo", standoutFeature: "Monitoring; GPS" },
];

const clockifyPage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best Clockify Alternatives (2026)",
  subtitle: "If Clockify isn't the right fit—because you want stronger reporting, invoicing, or a different workflow—these time tracking alternatives offer strong options.",
  productName: "Clockify",
  productSlug: "clockify",
  originalReviewHref: getTimeTrackingReviewUrl("clockify"),
  quickAnswerParagraphs: [
    "Clockify offers unlimited free tracking; alternatives include Toggl Track for ease and reporting, Harvest for built-in invoicing, Timely for automatic tracking, and Everhour or Hubstaff for different features. Toggl and Harvest are the most common alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Reporting and UX", body: "Toggl is often preferred for reporting and simpler interface. Teams may switch for better insights." },
    { heading: "Invoicing", body: "Harvest includes invoicing. Clockify focuses on tracking; you need another tool for billing." },
    { heading: "Workflow", body: "Timely and Everhour offer automatic or in-context tracking." },
  ],
  topAlternatives: CLOCKIFY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", bestFor: "unlimited free", startingPrice: "Free", standoutFeature: "Unlimited free", reviewHref: getTimeTrackingReviewUrl("clockify") },
    CLOCKIFY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Toggl Track", heading: "Best for ease and reporting", body: "Toggl offers simpler UX and strong reporting. For teams that want a more polished experience than Clockify.", reviewHref: getTimeTrackingReviewUrl("toggl"), compareHref: getTimeTrackingCompareUrl("clockify-vs-toggl") },
    { productName: "Harvest", heading: "Best for invoicing", body: "Harvest adds built-in invoicing. For teams that want time and billing in one tool.", reviewHref: getTimeTrackingReviewUrl("harvest"), compareHref: getTimeTrackingCompareUrl("harvest-vs-clockify") },
    { productName: "Timely", heading: "Best for automatic tracking", body: "Timely uses AI for automatic time tracking. Different workflow from manual timers.", reviewHref: getTimeTrackingReviewUrl("timely") },
    { productName: "Everhour", heading: "Best for project integration", body: "Everhour lives inside project tools. For teams that want tracking in Asana, Trello, or ClickUp.", reviewHref: getTimeTrackingReviewUrl("everhour") },
    { productName: "Hubstaff", heading: "Best for monitoring", body: "Hubstaff adds optional monitoring and GPS. For remote or field teams.", reviewHref: getTimeTrackingReviewUrl("hubstaff") },
  ],
  relatedComparisons: [
    ttRel("clockify-vs-toggl"),
    ttRel("harvest-vs-clockify"),
  ],
  relatedResources: defaultRelatedResources("Clockify", getTimeTrackingReviewUrl("clockify")),
  faqItems: [
    { q: "What is the best Clockify alternative?", a: "Toggl Track and Harvest are the best alternatives. Toggl for ease and reporting; Harvest for invoicing. Timely and Everhour suit different workflows." },
    { q: "Is Clockify better than Toggl?", a: "Clockify offers unlimited free users; Toggl is often preferred for reporting and ease of use. Choose by priority: free seats vs UX and insights." },
    { q: "Which time tracking software has invoicing like Clockify?", a: "Clockify doesn't include invoicing. Harvest has built-in invoicing; Toggl and others export to invoicing tools." },
  ],
};

// ——— Hubstaff alternatives ———
const HUBSTAFF_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "time-doctor", name: "Time Doctor", logoSrc: "/Logos/timedoctor.jpeg", rating: "4.2", bestFor: "strict monitoring", description: "Productivity and monitoring for remote teams.", reviewHref: getTimeTrackingReviewUrl("time-doctor"), compareHref: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor"), startingPrice: "From ~$7/user/mo", standoutFeature: "Strict oversight" },
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "no monitoring", description: "Simple time tracking without screenshots or activity tracking.", reviewHref: getTimeTrackingReviewUrl("toggl"), startingPrice: "Free tier", standoutFeature: "Ease of use; no monitoring" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "free tracking", description: "Unlimited free tracking; no monitoring features.", reviewHref: getTimeTrackingReviewUrl("clockify"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "invoicing", description: "Time tracking with built-in invoicing.", reviewHref: getTimeTrackingReviewUrl("harvest"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
  { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.3", bestFor: "project integration", description: "Time tracking inside project tools.", reviewHref: getTimeTrackingReviewUrl("everhour"), startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration" },
];

const hubstaffPage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best Hubstaff Alternatives (2026)",
  subtitle: "If Hubstaff isn't the right fit—because you need stricter monitoring, no monitoring, or different features—these time tracking alternatives offer strong options for remote and field teams.",
  productName: "Hubstaff",
  productSlug: "hubstaff",
  originalReviewHref: getTimeTrackingReviewUrl("hubstaff"),
  quickAnswerParagraphs: [
    "Hubstaff combines time tracking with optional monitoring and GPS; alternatives include Time Doctor for stricter oversight, Toggl or Clockify for tracking without monitoring, and Harvest or Everhour for different workflows. Time Doctor is the closest monitoring alternative; Toggl and Clockify suit teams that don't need oversight.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Monitoring level", body: "Time Doctor offers stricter productivity monitoring. Toggl and Clockify have no monitoring—tracking only." },
    { heading: "Policy", body: "Some teams prefer trust-based tracking. Toggl and Clockify focus on time only." },
    { heading: "Invoicing", body: "Harvest adds built-in invoicing; Hubstaff focuses on time and optional payroll." },
  ],
  topAlternatives: HUBSTAFF_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "hubstaff", name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", bestFor: "remote monitoring and GPS", startingPrice: "$4.99/user/mo", standoutFeature: "Monitoring; GPS", reviewHref: getTimeTrackingReviewUrl("hubstaff") },
    HUBSTAFF_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Time Doctor", heading: "Best for strict monitoring", body: "Time Doctor focuses on productivity and strict oversight for remote teams. Compare with Hubstaff for monitoring depth.", reviewHref: getTimeTrackingReviewUrl("time-doctor"), compareHref: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
    { productName: "Toggl Track", heading: "Best for no monitoring", body: "Toggl offers simple time tracking without screenshots or activity tracking. For trust-based teams.", reviewHref: getTimeTrackingReviewUrl("toggl") },
    { productName: "Clockify", heading: "Best for free tracking", body: "Clockify offers unlimited free tracking with no monitoring. For cost-conscious teams that don't need oversight.", reviewHref: getTimeTrackingReviewUrl("clockify") },
    { productName: "Harvest", heading: "Best for invoicing", body: "Harvest adds built-in invoicing. For agencies that need time and billing in one tool.", reviewHref: getTimeTrackingReviewUrl("harvest") },
    { productName: "Everhour", heading: "Best for project integration", body: "Everhour integrates inside project tools. For teams that want tracking in context.", reviewHref: getTimeTrackingReviewUrl("everhour") },
  ],
  relatedComparisons: [ttRel("hubstaff-vs-time-doctor")],
  relatedResources: defaultRelatedResources("Hubstaff", getTimeTrackingReviewUrl("hubstaff")),
  faqItems: [
    { q: "What is the best Hubstaff alternative?", a: "Time Doctor for stricter monitoring; Toggl and Clockify for tracking without monitoring; Harvest for invoicing." },
    { q: "Is Hubstaff better than Time Doctor?", a: "Both offer monitoring; Time Doctor is often seen as stricter. Hubstaff has strong GPS for field work. Choose by policy and feature emphasis." },
    { q: "Which time tracking software does not have monitoring?", a: "Toggl Track, Clockify, and Harvest focus on time tracking only—no screenshots or activity monitoring." },
  ],
};

// ——— Time Doctor alternatives ———
const TIME_DOCTOR_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "hubstaff", name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", rating: "4.4", bestFor: "monitoring + GPS", description: "Time tracking with optional monitoring and GPS for field work.", reviewHref: getTimeTrackingReviewUrl("hubstaff"), compareHref: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor"), startingPrice: "$4.99/user/mo", standoutFeature: "Monitoring; GPS" },
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "no monitoring", description: "Simple time tracking without monitoring.", reviewHref: getTimeTrackingReviewUrl("toggl"), startingPrice: "Free tier", standoutFeature: "Ease of use" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "free tracking", description: "Unlimited free tracking; no monitoring.", reviewHref: getTimeTrackingReviewUrl("clockify"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "rescuetime", name: "RescueTime", logoSrc: "/Logos/rescuetime.jpeg", rating: "4.2", bestFor: "passive productivity", description: "Passive activity tracking and focus insights; different from strict oversight.", reviewHref: getTimeTrackingReviewUrl("rescuetime"), startingPrice: "Quote", standoutFeature: "Passive; focus" },
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "invoicing", description: "Time tracking with built-in invoicing.", reviewHref: getTimeTrackingReviewUrl("harvest"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
];

const timeDoctorPage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best Time Doctor Alternatives (2026)",
  subtitle: "If Time Doctor isn't the right fit—because you need different monitoring, less oversight, or other features—these time tracking alternatives offer strong options.",
  productName: "Time Doctor",
  productSlug: "time-doctor",
  originalReviewHref: getTimeTrackingReviewUrl("time-doctor"),
  quickAnswerParagraphs: [
    "Time Doctor focuses on strict oversight and productivity monitoring; alternatives include Hubstaff for monitoring with GPS, Toggl and Clockify for tracking without monitoring, RescueTime for passive productivity insights, and Harvest for invoicing. Hubstaff is the closest monitoring alternative.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Monitoring style", body: "Hubstaff offers similar monitoring with GPS; some teams prefer its balance. Toggl and Clockify have no monitoring." },
    { heading: "Policy", body: "Teams that don't want strict oversight may prefer Toggl, Clockify, or RescueTime (passive only)." },
    { heading: "Invoicing", body: "Harvest combines time tracking with invoicing; Time Doctor focuses on monitoring and productivity." },
  ],
  topAlternatives: TIME_DOCTOR_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "time-doctor", name: "Time Doctor", logoSrc: "/Logos/timedoctor.jpeg", bestFor: "strict oversight", startingPrice: "From ~$7/user/mo", standoutFeature: "Strict oversight", reviewHref: getTimeTrackingReviewUrl("time-doctor") },
    TIME_DOCTOR_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Hubstaff", heading: "Best for monitoring + GPS", body: "Hubstaff offers time tracking with optional monitoring and GPS. For remote and field teams; compare monitoring depth with Time Doctor.", reviewHref: getTimeTrackingReviewUrl("hubstaff"), compareHref: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
    { productName: "Toggl Track", heading: "Best for no monitoring", body: "Toggl is simple time tracking only. For teams that don't want oversight.", reviewHref: getTimeTrackingReviewUrl("toggl") },
    { productName: "Clockify", heading: "Best for free tracking", body: "Clockify offers unlimited free tracking with no monitoring.", reviewHref: getTimeTrackingReviewUrl("clockify") },
    { productName: "RescueTime", heading: "Best for passive productivity", body: "RescueTime tracks activity passively and offers focus insights. Different approach from strict monitoring.", reviewHref: getTimeTrackingReviewUrl("rescuetime") },
    { productName: "Harvest", heading: "Best for invoicing", body: "Harvest adds built-in invoicing. For teams that need time and billing in one tool.", reviewHref: getTimeTrackingReviewUrl("harvest") },
  ],
  relatedComparisons: [ttRel("hubstaff-vs-time-doctor")],
  relatedResources: defaultRelatedResources("Time Doctor", getTimeTrackingReviewUrl("time-doctor")),
  faqItems: [
    { q: "What is the best Time Doctor alternative?", a: "Hubstaff for similar monitoring with GPS; Toggl and Clockify for no monitoring; RescueTime for passive productivity; Harvest for invoicing." },
    { q: "Is Time Doctor better than Hubstaff?", a: "Time Doctor is often seen as stricter on productivity; Hubstaff adds GPS for field work. Choose by policy and feature needs." },
    { q: "Which time tracking software does not monitor employees?", a: "Toggl Track, Clockify, and Harvest focus on time tracking only—no screenshots or activity monitoring." },
  ],
};

// ——— RescueTime alternatives ———
const RESCUETIME_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "manual tracking", description: "Manual timers and timesheets; strong reporting.", reviewHref: getTimeTrackingReviewUrl("toggl"), startingPrice: "Free tier", standoutFeature: "Ease of use; reporting" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "free manual tracking", description: "Unlimited free time tracking.", reviewHref: getTimeTrackingReviewUrl("clockify"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "timely", name: "Timely", logoSrc: "/Logos/timely.png", rating: "4.2", bestFor: "automatic tracking", description: "AI-based automatic time tracking.", reviewHref: getTimeTrackingReviewUrl("timely"), startingPrice: "From ~$11/user/mo", standoutFeature: "Automatic tracking" },
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "invoicing", description: "Time tracking with built-in invoicing.", reviewHref: getTimeTrackingReviewUrl("harvest"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
  { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.3", bestFor: "project integration", description: "Time tracking inside project tools.", reviewHref: getTimeTrackingReviewUrl("everhour"), startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration" },
];

const rescuetimePage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best RescueTime Alternatives (2026)",
  subtitle: "If RescueTime isn't the right fit—because you need manual timers, invoicing, or different insights—these time tracking alternatives offer strong options.",
  productName: "RescueTime",
  productSlug: "rescuetime",
  originalReviewHref: getTimeTrackingReviewUrl("rescuetime"),
  quickAnswerParagraphs: [
    "RescueTime focuses on passive activity tracking and focus insights; alternatives include Toggl and Clockify for manual time tracking, Timely for automatic tracking, and Harvest or Everhour for billing and project integration. Toggl and Clockify are the main alternatives for explicit time tracking.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Manual timers", body: "RescueTime is passive. Toggl and Clockify use manual start/stop or timesheet entry for billable time." },
    { heading: "Invoicing", body: "Harvest and Everhour support billing; RescueTime is focused on productivity insights." },
    { heading: "Automatic tracking", body: "Timely uses AI to categorize time; different model from RescueTime's passive tracking." },
  ],
  topAlternatives: RESCUETIME_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "rescuetime", name: "RescueTime", logoSrc: "/Logos/rescuetime.jpeg", bestFor: "passive productivity", startingPrice: "Quote", standoutFeature: "Passive; focus", reviewHref: getTimeTrackingReviewUrl("rescuetime") },
    RESCUETIME_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Toggl Track", heading: "Best for manual tracking", body: "Toggl uses manual timers and timesheets with strong reporting. For teams that need explicit time tracking.", reviewHref: getTimeTrackingReviewUrl("toggl") },
    { productName: "Clockify", heading: "Best for free manual tracking", body: "Clockify offers unlimited free time tracking with manual entry.", reviewHref: getTimeTrackingReviewUrl("clockify") },
    { productName: "Timely", heading: "Best for automatic tracking", body: "Timely uses AI for automatic time tracking. Alternative to passive tools like RescueTime.", reviewHref: getTimeTrackingReviewUrl("timely") },
    { productName: "Harvest", heading: "Best for invoicing", body: "Harvest adds built-in invoicing. For teams that need to bill by time.", reviewHref: getTimeTrackingReviewUrl("harvest") },
    { productName: "Everhour", heading: "Best for project integration", body: "Everhour lives inside project tools. For teams that want tracking in context.", reviewHref: getTimeTrackingReviewUrl("everhour") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("RescueTime", getTimeTrackingReviewUrl("rescuetime")),
  faqItems: [
    { q: "What is the best RescueTime alternative?", a: "Toggl Track and Clockify for manual time tracking; Timely for automatic tracking; Harvest for invoicing." },
    { q: "Is RescueTime better than Toggl?", a: "RescueTime is passive and focus-oriented; Toggl is manual and report-oriented. Choose by whether you need explicit timers for billing or productivity insights." },
    { q: "Which time tracking software is free like RescueTime?", a: "Clockify and Toggl have free tiers. RescueTime pricing varies; compare features and limits." },
  ],
};

// ——— Everhour alternatives ———
const EVERHOUR_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "invoicing", description: "Time tracking with built-in invoicing.", reviewHref: getTimeTrackingReviewUrl("harvest"), compareHref: getTimeTrackingCompareUrl("everhour-vs-harvest"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "standalone tracking", description: "Simple time tracking and reporting; integrations to PM tools.", reviewHref: getTimeTrackingReviewUrl("toggl"), startingPrice: "Free tier", standoutFeature: "Ease of use; reporting" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "free tracking", description: "Unlimited free tracking.", reviewHref: getTimeTrackingReviewUrl("clockify"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "timely", name: "Timely", logoSrc: "/Logos/timely.png", rating: "4.2", bestFor: "automatic tracking", description: "AI-based automatic time tracking.", reviewHref: getTimeTrackingReviewUrl("timely"), startingPrice: "From ~$11/user/mo", standoutFeature: "Automatic tracking" },
  { slug: "hubstaff", name: "Hubstaff", logoSrc: "/Logos/hubstaff.jpeg", rating: "4.4", bestFor: "monitoring", description: "Time tracking with optional monitoring.", reviewHref: getTimeTrackingReviewUrl("hubstaff"), startingPrice: "$4.99/user/mo", standoutFeature: "Monitoring; GPS" },
];

const everhourPage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best Everhour Alternatives (2026)",
  subtitle: "If Everhour isn't the right fit—because you need invoicing, different project tools, or a standalone tracker—these time tracking alternatives offer strong options.",
  productName: "Everhour",
  productSlug: "everhour",
  originalReviewHref: getTimeTrackingReviewUrl("everhour"),
  quickAnswerParagraphs: [
    "Everhour integrates inside Asana, Trello, ClickUp and similar tools; alternatives include Harvest for invoicing, Toggl and Clockify for standalone tracking with integrations, and Timely for automatic tracking. Harvest is the main alternative when you want time and invoicing in one tool.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Invoicing", body: "Harvest has built-in invoicing. Everhour focuses on tracking and project integration." },
    { heading: "Standalone", body: "Toggl and Clockify work as standalone trackers with integrations to PM tools. Different from in-context Everhour." },
    { heading: "Workflow", body: "Timely offers automatic tracking; different from manual timers in project tools." },
  ],
  topAlternatives: EVERHOUR_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", bestFor: "project tool integration", startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration", reviewHref: getTimeTrackingReviewUrl("everhour") },
    EVERHOUR_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Harvest", heading: "Best for invoicing", body: "Harvest adds built-in invoicing. For teams that need time and billing in one tool.", reviewHref: getTimeTrackingReviewUrl("harvest"), compareHref: getTimeTrackingCompareUrl("everhour-vs-harvest") },
    { productName: "Toggl Track", heading: "Best for standalone tracking", body: "Toggl works as a standalone tracker with integrations. For teams that don't need tracking inside the project tool.", reviewHref: getTimeTrackingReviewUrl("toggl") },
    { productName: "Clockify", heading: "Best for free tracking", body: "Clockify offers unlimited free tracking with integrations.", reviewHref: getTimeTrackingReviewUrl("clockify") },
    { productName: "Timely", heading: "Best for automatic tracking", body: "Timely uses AI for automatic time tracking.", reviewHref: getTimeTrackingReviewUrl("timely") },
    { productName: "Hubstaff", heading: "Best for monitoring", body: "Hubstaff adds optional monitoring. For remote teams that need oversight.", reviewHref: getTimeTrackingReviewUrl("hubstaff") },
  ],
  relatedComparisons: [ttRel("everhour-vs-harvest")],
  relatedResources: defaultRelatedResources("Everhour", getTimeTrackingReviewUrl("everhour")),
  faqItems: [
    { q: "What is the best Everhour alternative?", a: "Harvest for invoicing; Toggl and Clockify for standalone tracking; Timely for automatic tracking." },
    { q: "Is Everhour better than Harvest?", a: "Everhour lives inside project tools; Harvest has built-in invoicing. Choose by whether you want in-context tracking or time + billing in one tool." },
    { q: "Which time tracking software integrates with Asana?", a: "Everhour, Toggl, and Clockify integrate with Asana. Everhour embeds inside Asana; Toggl and Clockify sync from the outside." },
  ],
};

// ——— Timely alternatives ———
const TIMELY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "toggl", name: "Toggl Track", logoSrc: "/Logos/toggl.jpeg", rating: "4.6", bestFor: "manual tracking", description: "Manual timers and strong reporting.", reviewHref: getTimeTrackingReviewUrl("toggl"), compareHref: getTimeTrackingCompareUrl("timely-vs-toggl"), startingPrice: "Free tier", standoutFeature: "Ease of use; reporting" },
  { slug: "clockify", name: "Clockify", logoSrc: "/Logos/clockify.jpeg", rating: "4.3", bestFor: "free tracking", description: "Unlimited free time tracking.", reviewHref: getTimeTrackingReviewUrl("clockify"), startingPrice: "Free", standoutFeature: "Unlimited free" },
  { slug: "rescuetime", name: "RescueTime", logoSrc: "/Logos/rescuetime.jpeg", rating: "4.2", bestFor: "passive productivity", description: "Passive activity and focus insights.", reviewHref: getTimeTrackingReviewUrl("rescuetime"), startingPrice: "Quote", standoutFeature: "Passive; focus" },
  { slug: "harvest", name: "Harvest", logoSrc: "/Logos/harvest.png", rating: "4.4", bestFor: "invoicing", description: "Time tracking with built-in invoicing.", reviewHref: getTimeTrackingReviewUrl("harvest"), startingPrice: "$12/user/mo", standoutFeature: "Built-in invoicing" },
  { slug: "everhour", name: "Everhour", logoSrc: "/Logos/everhour.png", rating: "4.3", bestFor: "project integration", description: "Time tracking inside project tools.", reviewHref: getTimeTrackingReviewUrl("everhour"), startingPrice: "From ~$8.50/user/mo", standoutFeature: "PM integration" },
];

const timelyPage: AlternativesTemplateProps = {
  ...togglPage,
  title: "Best Timely Alternatives (2026)",
  subtitle: "If Timely isn't the right fit—because you prefer manual timers, lower cost, or different features—these time tracking alternatives offer strong options.",
  productName: "Timely",
  productSlug: "timely",
  originalReviewHref: getTimeTrackingReviewUrl("timely"),
  quickAnswerParagraphs: [
    "Timely uses AI for automatic time tracking; alternatives include Toggl and Clockify for manual tracking, RescueTime for passive productivity, and Harvest or Everhour for invoicing and project integration. Toggl is the main alternative for teams that prefer explicit timers.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Manual timers", body: "Toggl and Clockify use manual start/stop. Teams that want explicit control may prefer them." },
    { heading: "Cost", body: "Clockify is free; Toggl has a free tier. Timely is typically higher priced." },
    { heading: "Passive vs automatic", body: "RescueTime is passive; Timely is AI-automatic. Different approaches to reducing manual entry." },
  ],
  topAlternatives: TIMELY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "timely", name: "Timely", logoSrc: "/Logos/timely.png", bestFor: "automatic tracking", startingPrice: "From ~$11/user/mo", standoutFeature: "Automatic tracking", reviewHref: getTimeTrackingReviewUrl("timely") },
    TIMELY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Toggl Track", heading: "Best for manual tracking", body: "Toggl uses manual timers with strong reporting. For teams that prefer explicit control over automatic.", reviewHref: getTimeTrackingReviewUrl("toggl"), compareHref: getTimeTrackingCompareUrl("timely-vs-toggl") },
    { productName: "Clockify", heading: "Best for free tracking", body: "Clockify offers unlimited free time tracking. For cost-conscious teams.", reviewHref: getTimeTrackingReviewUrl("clockify") },
    { productName: "RescueTime", heading: "Best for passive productivity", body: "RescueTime tracks activity passively. Different approach from Timely's AI-based automatic tracking.", reviewHref: getTimeTrackingReviewUrl("rescuetime") },
    { productName: "Harvest", heading: "Best for invoicing", body: "Harvest adds built-in invoicing. For teams that need to bill by time.", reviewHref: getTimeTrackingReviewUrl("harvest") },
    { productName: "Everhour", heading: "Best for project integration", body: "Everhour lives inside project tools. For teams that want tracking in context.", reviewHref: getTimeTrackingReviewUrl("everhour") },
  ],
  relatedComparisons: [ttRel("timely-vs-toggl")],
  relatedResources: defaultRelatedResources("Timely", getTimeTrackingReviewUrl("timely")),
  faqItems: [
    { q: "What is the best Timely alternative?", a: "Toggl Track and Clockify for manual tracking; RescueTime for passive productivity; Harvest for invoicing." },
    { q: "Is Timely better than Toggl?", a: "Timely is automatic; Toggl is manual. Choose by preference: less manual entry (Timely) vs explicit control (Toggl)." },
    { q: "Which time tracking software is cheaper than Timely?", a: "Clockify is free; Toggl has a free tier. Timely is typically higher priced; compare at your team size." },
  ],
};

// ——— Export ———
const TIME_TRACKING_ALTERNATIVES_SLUGS = [
  "toggl", "harvest", "clockify", "hubstaff", "time-doctor", "rescuetime", "everhour", "timely",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  toggl: togglPage,
  harvest: harvestPage,
  clockify: clockifyPage,
  hubstaff: hubstaffPage,
  "time-doctor": timeDoctorPage,
  rescuetime: rescuetimePage,
  everhour: everhourPage,
  timely: timelyPage,
};

export function getTimeTrackingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getTimeTrackingAlternativesSlugs(): string[] {
  return [...TIME_TRACKING_ALTERNATIVES_SLUGS];
}
