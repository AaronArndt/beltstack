import { getTimeTrackingReviewUrl } from "@/lib/routes";
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

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Time Tracking Software for Small Businesses (2026)",
  subtitle:
    "Compare time tracking software for small businesses: simple setup, clear pricing, and the right level of reporting.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses often need time tracking to support payroll, job costing, or client billing—but without enterprise complexity. Our picks focus on tools that are easy to roll out, affordable at small-team headcounts, and flexible enough to support different roles.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top time tracking picks for small businesses.",
  editorialSub: "What to look for when you choose time tracking software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "clockify",
      name: "Clockify",
      badge: "Best for free teams",
      description:
        "Unlimited free users for core time tracking. Great starting point for small businesses that want data before committing budget.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getTimeTrackingReviewUrl("clockify"),
      visitUrl: "https://clockify.me",
      logoSrc: "/Logos/clockify.jpeg",
    },
    {
      slug: "toggl",
      name: "Toggl Track",
      badge: "Best for ease of use",
      description:
        "Simple timers and strong reporting that small teams actually use. Good for knowledge work and mixed roles.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
      visitUrl: "https://toggl.com/track",
      logoSrc: "/Logos/toggl.jpeg",
    },
    {
      slug: "harvest",
      name: "Harvest",
      badge: "Best for service businesses",
      description:
        "Time tracking, expenses, and invoicing for businesses that bill clients for hours and projects.",
      rating: "4.4",
      startingPrice: "$12/user/mo",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
      visitUrl: "https://www.getharvest.com",
      logoSrc: "/Logos/harvest.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "clockify",
      name: "Clockify",
      logoSrc: "/Logos/clockify.jpeg",
      bestFor: "Free tracking",
      startingPrice: "Free",
      standoutFeature: "Unlimited users on free tier",
      reviewHref: getTimeTrackingReviewUrl("clockify"),
    },
    {
      slug: "toggl",
      name: "Toggl Track",
      logoSrc: "/Logos/toggl.jpeg",
      bestFor: "Ease of use",
      startingPrice: "Free tier",
      standoutFeature: "Clean timers & reports",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
    },
    {
      slug: "harvest",
      name: "Harvest",
      logoSrc: "/Logos/harvest.png",
      bestFor: "Service businesses",
      startingPrice: "$12/user/mo",
      standoutFeature: "Time + invoicing",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Why small businesses use time tracking",
      body: "Time tracking helps small businesses see where hours go, support payroll or job costing, and bill clients accurately. Even basic tracking can reveal which services and jobs are truly profitable.",
    },
    {
      heading: "Integrations with payroll, invoicing, and accounting",
      body: "If you already use payroll or accounting software, look for time tracking tools that export data or integrate cleanly. That reduces manual entry and keeps books accurate.",
    },
    {
      heading: "Adoption and training",
      body: "The best time tracker is the one your team will actually use. Prioritize tools with clear interfaces, simple timer workflows, and minimal friction so employees adopt the habit.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Clockify",
      body: "Clockify is the pragmatic pick when a small business needs company-wide time tracking on a tight budget—unlimited users on the free tier make rollout feasible for hourly retail, light manufacturing, or service teams. Managers can add approvals or kiosk mode later without switching vendors. During a trial, enforce project codes you will actually audit, run a payroll test export, and confirm overtime rules match your state. Review whether screenshot features are necessary before enabling them. Clockify wins on speed to deploy and total cost.",
    },
    {
      heading: "Toggl Track",
      body: "Toggl Track gives small teams polished timers, strong mobile apps, and profitability insights without the surveillance feel of heavier workforce tools. Leaders see utilization trends instead of keystroke counts. In a trial, connect calendars for prefilled suggestions, compare billable versus overhead weekly, and integrate with your PM or invoicing stack if supported. Validate SSO and admin roles before you exceed a handful of seats. Toggl fits culture-conscious SMBs that still need accountability.",
    },
    {
      heading: "Harvest",
      body: "Harvest links tracked hours and expenses directly to invoices for service SMBs where cash flow depends on accurate billable data—consultancies, trades with T&M tickets, or agencies on milestones. Budget alerts on projects prevent silent overruns. During evaluation, run one billing cycle end to end inside Harvest, reconcile taxes and discounts your customers expect, and test accountant exports. Check whether you need native invoicing or just time data feeding QuickBooks. Harvest anchors billing-first operations.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Clockify", href: getTimeTrackingReviewUrl("clockify") },
    { name: "Toggl Track", href: getTimeTrackingReviewUrl("toggl") },
    { name: "Harvest", href: getTimeTrackingReviewUrl("harvest") },
  ] as BestForReviewLink[],

  relatedComparisons: [] as BestForComparisonLink[],

  relatedGuides: [
    { label: "How time tracking software works", href: "/time-tracking/guides/how-time-tracking-software-works" },
    { label: "Time tracking vs timesheets", href: "/time-tracking/guides/time-tracking-vs-timesheets" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Do all small businesses need time tracking software?",
      a: "Not every business needs formal time tracking, but it’s useful whenever you bill for time, want to understand job costs, or manage a mix of billable and internal work.",
    },
    {
      q: "Is free time tracking good enough for a small business?",
      a: "Free plans like Clockify’s can be more than enough to start. As your needs grow—approvals, deeper reporting, or monitoring—you may move to a paid tier or more specialized tool.",
    },
  ] as BestForFaqItem[],
};

