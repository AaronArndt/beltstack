import { getTimeTrackingReviewUrl, getTimeTrackingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/time-tracking", label: "Time tracking" };
const SEE_ALSO = {
  roundupLabel: "best time tracking software roundup",
  roundupHref: "/time-tracking/best-time-tracking-software",
  compareLabel: "time tracking software comparisons",
  compareHref: "/time-tracking/compare",
};

export const AGENCIES_PAGE_PROPS = {
  title: "Best Time Tracking Software for Agencies (2026)",
  subtitle:
    "Compare time tracking tools built for agencies: project budgets, utilization reporting, and integrations with project management.",
  useCase: "agencies",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Agencies need to see how time turns into revenue: hours by client, project, and role, plus budgets and utilization. Our picks help you track time where work happens, keep projects on budget, and understand which engagements are most profitable.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top time tracking picks for agencies.",
  editorialSub: "What to look for when you choose time tracking software as an agency.",
  whyThesePicksSub: "Why we chose these tools for agencies.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "harvest",
      name: "Harvest",
      badge: "Best for time + invoicing",
      description:
        "Project-based time tracking, expenses, and invoicing in one tool. A natural fit for smaller agencies that bill by the hour or retainer.",
      rating: "4.4",
      startingPrice: "$12/user/mo",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
      visitUrl: "https://www.getharvest.com",
      logoSrc: "/Logos/harvest.png",
    },
    {
      slug: "everhour",
      name: "Everhour",
      badge: "Best for Asana/Trello teams",
      description:
        "Time tracking built directly into Asana, Trello, and other project tools. Ideal when your team already lives in those apps.",
      rating: "4.3",
      startingPrice: "From ~$8.50/user/mo",
      reviewHref: getTimeTrackingReviewUrl("everhour"),
      visitUrl: "https://everhour.com",
      logoSrc: "/Logos/everhour.png",
    },
    {
      slug: "toggl",
      name: "Toggl Track",
      badge: "Best for simple agency workflows",
      description:
        "Clean, flexible time tracking with strong reporting. Works well for agencies that combine retainer and project work.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
      visitUrl: "https://toggl.com/track",
      logoSrc: "/Logos/toggl.jpeg",
    },
    {
      slug: "timely",
      name: "Timely",
      badge: "Best for automatic tracking",
      description:
        "AI-based automatic tracking that reconstructs a team’s day, making timesheets easier for busy creative and consulting teams.",
      rating: "4.2",
      startingPrice: "From ~$11/user/mo",
      reviewHref: getTimeTrackingReviewUrl("timely"),
      visitUrl: "https://memory.ai/timely",
      logoSrc: "/Logos/timely.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "harvest",
      name: "Harvest",
      logoSrc: "/Logos/harvest.png",
      bestFor: "Time + invoicing",
      startingPrice: "$12/user/mo",
      standoutFeature: "Time, expenses, and invoices",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
    },
    {
      slug: "everhour",
      name: "Everhour",
      logoSrc: "/Logos/everhour.png",
      bestFor: "Embedded in project tools",
      startingPrice: "From ~$8.50/user/mo",
      standoutFeature: "Deep Asana/Trello integration",
      reviewHref: getTimeTrackingReviewUrl("everhour"),
    },
    {
      slug: "toggl",
      name: "Toggl Track",
      logoSrc: "/Logos/toggl.jpeg",
      bestFor: "Simple workflows",
      startingPrice: "Free tier",
      standoutFeature: "Flexible tagging & reports",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
    },
    {
      slug: "timely",
      name: "Timely",
      logoSrc: "/Logos/timely.png",
      bestFor: "Automatic timesheets",
      startingPrice: "From ~$11/user/mo",
      standoutFeature: "AI-assisted tracking",
      reviewHref: getTimeTrackingReviewUrl("timely"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Project budgets and profitability",
      body: "Agency time tracking should surface which projects are on budget, which clients consume the most hours, and which retainers are under- or over-served. Look for budget alerts, reports by client and project, and visibility into non-billable time.",
    },
    {
      heading: "Utilization and capacity",
      body: "You need to see how much of your team’s time is billable vs internal work, and whether people are under- or over-utilized. Tools with utilization reports, capacity planning, or at least clear billable vs non-billable flags are a strong plus.",
    },
    {
      heading: "Integrations with project management and invoicing",
      body: "If your team lives in Asana, Trello, ClickUp, or similar tools, tight integrations like Everhour’s can reduce friction. If you invoice inside accounting or invoicing software, make sure your time tracker exports or integrates cleanly.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Harvest",
      body: "Harvest is a great starting point for smaller agencies because it combines time tracking, expenses, and invoicing, with solid project reports.",
    },
    {
      heading: "Everhour",
      body: "Everhour is ideal when your team lives in Asana or Trello and you want time to appear inside those tools instead of a separate app.",
    },
    {
      heading: "Toggl Track",
      body: "Toggl Track is a flexible option for agencies that want clean tracking and reports without committing to a heavier all-in-one platform.",
    },
    {
      heading: "Timely",
      body: "Timely shines when your team forgets timers—its automatic tracking reduces the friction of accurate timesheets.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Harvest", href: getTimeTrackingReviewUrl("harvest") },
    { name: "Everhour", href: getTimeTrackingReviewUrl("everhour") },
    { name: "Toggl Track", href: getTimeTrackingReviewUrl("toggl") },
    { name: "Timely", href: getTimeTrackingReviewUrl("timely") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
    { label: "Everhour vs Harvest", href: getTimeTrackingCompareUrl("everhour-vs-harvest") },
    { label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Time tracking for agencies", href: "/time-tracking/guides/time-tracking-for-agencies" },
    { label: "Tracking billable hours", href: "/time-tracking/guides/tracking-billable-hours" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What makes time tracking different for agencies?",
      a: "Agencies care about billable utilization, project budgets, and client profitability. The best tools make it easy to track time by client and project, compare budgets to actuals, and spot over-servicing early.",
    },
    {
      q: "Should we track time inside our project management tool?",
      a: "If your team already lives in Asana, Trello, or similar tools, using a tracker like Everhour that embeds directly can improve adoption and reduce context switching.",
    },
  ] as BestForFaqItem[],
};

