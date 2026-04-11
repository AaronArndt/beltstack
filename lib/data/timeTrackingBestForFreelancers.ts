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

export const FREELANCERS_PAGE_PROPS = {
  title: "Best Time Tracking Software for Freelancers (2026)",
  subtitle:
    "Compare time tracking tools built for freelancers: simple timers, billable rates, reporting, and exports for invoicing.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Freelancers need to capture billable hours accurately without spending more time on timesheets than on client work. Our picks focus on ease of use, billable rates, exports for invoicing, and integrations with the tools you already use.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top time tracking picks for freelancers.",
  editorialSub: "What to look for when you choose time tracking software as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "toggl",
      name: "Toggl Track",
      badge: "Best overall for freelancers",
      description:
        "Simple time tracking with strong reporting and tags. Easy to adopt and flexible across different client projects.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
      visitUrl: "https://toggl.com/track",
      logoSrc: "/Logos/toggl.jpeg",
    },
    {
      slug: "harvest",
      name: "Harvest",
      badge: "Best for time + invoicing",
      description:
        "Track time and expenses, then turn them into invoices in one place. Great for freelancers who bill hourly.",
      rating: "4.4",
      startingPrice: "$12/user/mo",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
      visitUrl: "https://www.getharvest.com",
      logoSrc: "/Logos/harvest.png",
    },
    {
      slug: "clockify",
      name: "Clockify",
      badge: "Best free option",
      description:
        "Unlimited free time tracking for freelancers and small teams. Paid plans add approvals and more controls.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getTimeTrackingReviewUrl("clockify"),
      visitUrl: "https://clockify.me",
      logoSrc: "/Logos/clockify.jpeg",
    },
    {
      slug: "everhour",
      name: "Everhour",
      badge: "Best for project tools",
      description:
        "Time tracking embedded in tools like Asana and Trello. Ideal for project-based freelancers and small agencies.",
      rating: "4.3",
      startingPrice: "From ~$8.50/user/mo",
      reviewHref: getTimeTrackingReviewUrl("everhour"),
      visitUrl: "https://everhour.com",
      logoSrc: "/Logos/everhour.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "toggl",
      name: "Toggl Track",
      logoSrc: "/Logos/toggl.jpeg",
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Clean timers & reports",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
    },
    {
      slug: "harvest",
      name: "Harvest",
      logoSrc: "/Logos/harvest.png",
      bestFor: "Time + invoices",
      startingPrice: "$12/user/mo",
      standoutFeature: "Time → invoice workflow",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
    },
    {
      slug: "clockify",
      name: "Clockify",
      logoSrc: "/Logos/clockify.jpeg",
      bestFor: "Free tracking",
      startingPrice: "Free",
      standoutFeature: "Unlimited free users",
      reviewHref: getTimeTrackingReviewUrl("clockify"),
    },
    {
      slug: "everhour",
      name: "Everhour",
      logoSrc: "/Logos/everhour.png",
      bestFor: "Project tool integrations",
      startingPrice: "From ~$8.50/user/mo",
      standoutFeature: "Deep Asana/Trello integration",
      reviewHref: getTimeTrackingReviewUrl("everhour"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Billable vs non-billable time",
      body: "Freelancers need to separate billable client work from admin and non-billable time. Look for tools that support billable rates, internal projects, and reporting that shows how much of your week is actually billable.",
    },
    {
      heading: "Exports and invoicing",
      body: "If you already invoice through accounting or invoicing software, exports and integrations matter more than built-in invoices. If you prefer everything in one place, consider Harvest or similar tools that combine time tracking and billing.",
    },
    {
      heading: "Client and project visibility",
      body: "Good time tracking makes it easy to see which clients, projects, and tasks are profitable. Reports should help you adjust rates, scope, or effort based on actual data, not guesses.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Toggl Track",
      body: "Toggl Track is an excellent freelancer time tracker because one-click timers, rich tags, and reports show where billable hours actually go before you underprice the next proposal. Calendar integrations can pre-fill entries if you discipline yourself to review them daily. During a trial, run two weeks of real client work, export a CSV your invoicing tool accepts, and test billable rates per project. Validate idle detection so breaks do not inflate client bills. Toggl shines when honest utilization data matters more than surveillance.",
    },
    {
      heading: "Harvest",
      body: "Harvest pairs time tracking with invoicing and expenses so freelancers who bill hourly or hybrid fees can move from timer to paid invoice without retyping line items. Retainer burn reports help you warn clients before you eat margin silently. In a trial, create a few projects, log expenses with receipts, and generate an invoice draft your accountant recognizes. Test approval flows if you later subcontract help. Harvest fits when AR speed depends on accurate timesheets.",
    },
    {
      heading: "Clockify",
      body: "Clockify is the default free time tracking option for freelancers who need unlimited timers and basic reporting before revenue supports premium apps. Paid tiers add approvals or kiosk modes if you hire VA support later. During evaluation, map tags to clients and tasks you actually use—avoid tag sprawl that makes reports useless. Export a week of entries to see if your billing spreadsheet still needs massage. Clockify wins on price and simplicity, not deep invoicing.",
    },
    {
      heading: "Everhour",
      body: "Everhour embeds timers inside Asana, Trello, ClickUp, or other PM tools so freelancers who live in boards do not context-switch to another app just to log minutes. Budget bars on tasks surface scope creep early. In a trial, connect your real project board, track a sprint’s worth of tasks, and confirm sync latency is acceptable. Validate rounding rules before you invoice legalistic clients. Everhour suits delivery-first freelancers who hate duplicate entry.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Toggl Track", href: getTimeTrackingReviewUrl("toggl") },
    { name: "Harvest", href: getTimeTrackingReviewUrl("harvest") },
    { name: "Clockify", href: getTimeTrackingReviewUrl("clockify") },
    { name: "Everhour", href: getTimeTrackingReviewUrl("everhour") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
    { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
    { label: "Everhour vs Harvest", href: getTimeTrackingCompareUrl("everhour-vs-harvest") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Time tracking for freelancers", href: "/time-tracking/guides/time-tracking-for-freelancers" },
    { label: "Tracking billable hours", href: "/time-tracking/guides/tracking-billable-hours" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Do freelancers really need time tracking software?",
      a: "If you bill hourly, time tracking software keeps your invoices accurate and defensible. Even if you bill fixed-fee, tracking hours helps you understand effective rates and scope creep.",
    },
    {
      q: "Which time tracker is best for a solo freelancer?",
      a: "Toggl Track is our default pick for most freelancers. If you also want invoicing in the same tool, Harvest is a great alternative; Clockify works well when cost is the main concern.",
    },
    {
      q: "Can I use time tracking with my existing invoicing or accounting tool?",
      a: "Yes. Most tools export time entries or integrate with invoicing and accounting software so you can keep billing where it already lives.",
    },
    {
      q: "How much does time tracking software cost for one person?",
      a: "Many tools have free tiers for solo users. Paid plans typically start around $8–$15 per user per month with more features and higher limits.",
    },
  ] as BestForFaqItem[],
};

