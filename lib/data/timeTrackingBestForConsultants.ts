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

export const CONSULTANTS_PAGE_PROPS = {
  title: "Best Time Tracking Software for Consultants (2026)",
  subtitle:
    "Compare time tracking tools built for consultants: billable rates, retainers, project reporting, and exports for invoicing and accounting.",
  useCase: "consultants",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Consultants need to justify fees with clear records of billable work. The right time tracking tool makes it easy to log client work, manage retainers, and share time reports with clients or your finance stack.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top time tracking picks for consultants.",
  editorialSub: "What to look for when you choose time tracking software as a consultant.",
  whyThesePicksSub: "Why we chose these tools for consultants.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "toggl",
      name: "Toggl Track",
      badge: "Best overall for consultants",
      description:
        "Clean time tracking, tagging, and reporting. Great default when you need accurate timesheets and clear client reports.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
      visitUrl: "https://toggl.com/track",
      logoSrc: "/Logos/toggl.jpeg",
    },
    {
      slug: "harvest",
      name: "Harvest",
      badge: "Best for retainers and billing",
      description:
        "Track client work, manage budgets, and turn hours into invoices. Ideal for consulting teams that bill by the hour or retainer.",
      rating: "4.4",
      startingPrice: "$12/user/mo",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
      visitUrl: "https://www.getharvest.com",
      logoSrc: "/Logos/harvest.png",
    },
    {
      slug: "timely",
      name: "Timely",
      badge: "Best for busy consultants",
      description:
        "Automatic tracking that reconstructs your day so you can build accurate timesheets after client calls and deep work.",
      rating: "4.2",
      startingPrice: "From ~$11/user/mo",
      reviewHref: getTimeTrackingReviewUrl("timely"),
      visitUrl: "https://memory.ai/timely",
      logoSrc: "/Logos/timely.png",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "toggl",
      name: "Toggl Track",
      logoSrc: "/Logos/toggl.jpeg",
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Flexible tagging & reports",
      reviewHref: getTimeTrackingReviewUrl("toggl"),
    },
    {
      slug: "harvest",
      name: "Harvest",
      logoSrc: "/Logos/harvest.png",
      bestFor: "Retainers & billing",
      startingPrice: "$12/user/mo",
      standoutFeature: "Time → invoices",
      reviewHref: getTimeTrackingReviewUrl("harvest"),
    },
    {
      slug: "timely",
      name: "Timely",
      logoSrc: "/Logos/timely.png",
      bestFor: "Automatic capture",
      startingPrice: "From ~$11/user/mo",
      standoutFeature: "AI-assisted tracking",
      reviewHref: getTimeTrackingReviewUrl("timely"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Billable rates and retainers",
      body: "Consultants often work on a mix of hourly, fixed-fee, and retainer engagements. Look for tools that support billable rates, retainers, and easy reporting by client and project so you can show where time went.",
    },
    {
      heading: "Client-friendly reporting",
      body: "Time tracking should make it easy to share summaries with clients—by phase, project, or workstream. Clean exports and shareable reports reduce back-and-forth on invoices.",
    },
    {
      heading: "Exports to invoicing and accounting",
      body: "If you send invoices from accounting or invoicing software, make sure your time tracker exports data in formats that map cleanly to your billing and revenue tracking.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Toggl Track",
      body: "Great when you want straightforward tracking, strong tagging, and flexible reports for client conversations.",
    },
    {
      heading: "Harvest",
      body: "Best when you want to go from logged hours and expenses to invoices in the same system.",
    },
    {
      heading: "Timely",
      body: "Ideal when you jump between meetings and deep work and prefer automatic capture over manual timers.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Toggl Track", href: getTimeTrackingReviewUrl("toggl") },
    { name: "Harvest", href: getTimeTrackingReviewUrl("harvest") },
    { name: "Timely", href: getTimeTrackingReviewUrl("timely") },
  ] as BestForReviewLink[],

  relatedComparisons: [] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Time tracking for freelancers", href: "/time-tracking/guides/time-tracking-for-freelancers" },
    { label: "Tracking billable hours", href: "/time-tracking/guides/tracking-billable-hours" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Can I use the same time tracking tool for multiple consulting clients?",
      a: "Yes. All of our recommended tools support clients and projects so you can separate work, rates, and reports by engagement.",
    },
    {
      q: "Do I need automatic tracking as a consultant?",
      a: "Automatic tracking is helpful if you jump between meetings, research, and deliverables and often forget timers. If your workflow is more structured, tools like Toggl or Harvest may be enough.",
    },
  ] as BestForFaqItem[],
};

