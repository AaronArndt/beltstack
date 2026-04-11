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

export const REMOTE_TEAMS_PAGE_PROPS = {
  title: "Best Time Tracking Software for Remote Teams (2026)",
  subtitle:
    "Compare time tracking tools for remote and distributed teams: monitoring options, GPS, and reporting that supports accountability.",
  useCase: "remote-teams",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Remote teams need visibility into hours and outcomes without creating a culture of surveillance. Our picks span simple trackers, monitoring-heavy tools, and options with GPS for field teams so you can match oversight to your culture.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top time tracking picks for remote teams.",
  editorialSub: "What to look for when you choose time tracking for remote and distributed teams.",
  whyThesePicksSub: "Why we chose these tools for remote teams.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "hubstaff",
      name: "Hubstaff",
      badge: "Best for field & remote teams",
      description:
        "Time tracking with GPS, activity monitoring, and optional payroll. Strong fit for distributed and field teams needing accountability.",
      rating: "4.4",
      startingPrice: "$4.99/user/mo",
      reviewHref: getTimeTrackingReviewUrl("hubstaff"),
      visitUrl: "https://hubstaff.com",
      logoSrc: "/Logos/hubstaff.jpeg",
    },
    {
      slug: "time-doctor",
      name: "Time Doctor",
      badge: "Best for strict monitoring",
      description:
        "Monitoring-heavy tracking with screenshots and distraction alerts. Fits teams that explicitly want detailed oversight.",
      rating: "4.2",
      startingPrice: "From ~$7/user/mo",
      reviewHref: getTimeTrackingReviewUrl("time-doctor"),
      visitUrl: "https://www.timedoctor.com",
      logoSrc: "/Logos/timedoctor.jpeg",
    },
    {
      slug: "clockify",
      name: "Clockify",
      badge: "Best for flexible policies",
      description:
        "Starts as a lightweight time tracker with an unlimited free plan, then adds monitoring on higher tiers if you need it.",
      rating: "4.3",
      startingPrice: "Free",
      reviewHref: getTimeTrackingReviewUrl("clockify"),
      visitUrl: "https://clockify.me",
      logoSrc: "/Logos/clockify.jpeg",
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "hubstaff",
      name: "Hubstaff",
      logoSrc: "/Logos/hubstaff.jpeg",
      bestFor: "Field & remote teams",
      startingPrice: "$4.99/user/mo",
      standoutFeature: "GPS & activity monitoring",
      reviewHref: getTimeTrackingReviewUrl("hubstaff"),
    },
    {
      slug: "time-doctor",
      name: "Time Doctor",
      logoSrc: "/Logos/timedoctor.jpeg",
      bestFor: "Strict oversight",
      startingPrice: "From ~$7/user/mo",
      standoutFeature: "Screenshots & distraction alerts",
      reviewHref: getTimeTrackingReviewUrl("time-doctor"),
    },
    {
      slug: "clockify",
      name: "Clockify",
      logoSrc: "/Logos/clockify.jpeg",
      bestFor: "Flexible policies",
      startingPrice: "Free",
      standoutFeature: "Optional monitoring on paid tiers",
      reviewHref: getTimeTrackingReviewUrl("clockify"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Monitoring vs trust",
      body: "Monitoring tools like Hubstaff and Time Doctor can provide visibility but also impact trust. Decide up front how much oversight you actually need and communicate clearly with your team about what’s being tracked and why.",
    },
    {
      heading: "Field vs desk work",
      body: "Field teams benefit from GPS and job-site tracking, while desk-based teams may only need basic time tracking and light monitoring. Choose tools that match where and how work happens.",
    },
    {
      heading: "Integrations with payroll and HR",
      body: "If you pay hourly remote staff, integrate time tracking with payroll so hours flow directly into pay runs. Many tools export to or integrate with payroll and HR systems.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Hubstaff",
      body: "Hubstaff suits distributed teams that mix desk workers with occasional field staff and need GPS-verified visits, optional screenshots, and app usage signals—not just passive timers. Payroll and invoice exports reduce manual reconciliation when hourly pay is tied to proof of work. During a trial, run a two-week pilot with transparent policies, review false positives on idle time, and confirm integrations with your payroll system. Validate mobile battery impact for traveling employees. Hubstaff fits when compliance or client billing demands verifiable hours.",
    },
    {
      heading: "Time Doctor",
      body: "Time Doctor targets organizations that explicitly prioritize productivity analytics—distraction alerts, website categorization, and manager dashboards—alongside straightforward time tracking for remote staff. It works when leadership communicates why monitoring exists and how data is used. In a trial, limit monitoring to work devices, test exception rules for creative research time, and export reports your HR counsel approves. Compare per-seat cost against trust-based tools if culture matters. Time Doctor is for teams that chose oversight deliberately.",
    },
    {
      heading: "Clockify",
      body: "Clockify lets remote teams start with lightweight timers, projects, and approvals before deciding whether to add screenshot or GPS features on higher tiers. The free core lowers friction for global contractors paid hourly. During evaluation, define required fields (client, task, billable flag) so reports stay clean across time zones. Test kiosk or shared-device scenarios if support shifts rotate. Clockify balances affordability with room to grow into stricter governance later.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Hubstaff", href: getTimeTrackingReviewUrl("hubstaff") },
    { name: "Time Doctor", href: getTimeTrackingReviewUrl("time-doctor") },
    { name: "Clockify", href: getTimeTrackingReviewUrl("clockify") },
  ] as BestForReviewLink[],

  relatedComparisons: [] as BestForComparisonLink[],

  relatedGuides: [
    { label: "How time tracking software works", href: "/time-tracking/guides/how-time-tracking-software-works" },
    { label: "Time tracking vs timesheets", href: "/time-tracking/guides/time-tracking-vs-timesheets" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Should remote teams use monitoring features like screenshots?",
      a: "Monitoring can increase accountability but also affect morale and trust. Use it only when there is a clear business need and pair it with transparent policies and communication.",
    },
    {
      q: "Do we need GPS tracking?",
      a: "GPS and job-site tracking are useful for field teams that move between locations. For fully remote desk-based teams, simple time tracking is often enough.",
    },
  ] as BestForFaqItem[],
};

