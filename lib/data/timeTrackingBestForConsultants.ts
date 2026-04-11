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
      body: "Toggl Track helps consultants defend scope with tagging that splits workshops, research, travel, and delivery so client conversations reference data instead of vibes. PDF or CSV exports support audit-friendly backup when stakeholders challenge invoices. During a trial, align tags with your statement of work phases, run a month of actuals against quoted hours, and test billable rates per engagement. Calendar integration reduces missed entries if you live in back-to-back calls. Toggl fits when credibility requires transparent time narratives.",
    },
    {
      heading: "Harvest",
      body: "Harvest moves consultants from approved hours to branded invoices and expense pass-throughs without re-keying line items—critical when retainers mix fixed and variable components. Clients see detailed supporting data if you choose to share it. In a trial, configure recurring retainers, log reimbursable expenses with receipts, and send a test invoice through your payment gateway. Validate multi-currency if you advise internationally. Harvest suits consultants who bill frequently and hate duplicate systems.",
    },
    {
      heading: "Timely",
      body: "Timely appeals to consultants who context-switch constantly and resent starting timers—automatic suggestions rebuild days from calendar, docs, and meetings with editable blocks. Trust and privacy policies should be reviewed with clients if work is sensitive. During a pilot, compare AI-reconstructed totals to a week you track manually in parallel. Tune project mapping rules so internal admin does not bill accidentally. Timely fits high-calendar consultants who still need defensible timesheets.",
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

