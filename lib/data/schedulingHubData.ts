/**
 * Scheduling software hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/scheduling/page.tsx.
 */

import { getSchedulingReviewUrl, getSchedulingCompareUrl, getSchedulingBestForUrl } from "@/lib/routes";
import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import type { FeaturedPickRef, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";
import { listSoftwarePicksBySlugs, toHubComparisonTableRow } from "@/lib/data/softwarePickCards";

// ——— Logo paths (public/Logos/) ———
const LOGOS = {
  calendly: "/Logos/calendly.png",
  acuity: "/Logos/acuity.jpeg",
  youcanbookme: "/Logos/youcanbookme.jpeg",
  setmore: "/Logos/setmore.jpeg",
  simplybookme: "/Logos/simplybook.jpeg",
  square: "/Logos/square.jpeg",
  appointy: "/Logos/appointy.jpeg",
  zoho: "/Logos/zoho.jpeg",
} as const;

/** Top scheduling picks — slugs resolve to canonical `schedulingBestSoftware` data */
export const SCHEDULING_FEATURED_PICKS: FeaturedPickRef[] = [
  { slug: "calendly" },
  { slug: "acuity-scheduling" },
  { slug: "youcanbookme" },
  { slug: "setmore" },
  { slug: "simplybookme" },
];

/** Comparison table rows for the hub — canonical pick data. */
export const SCHEDULING_COMPARISON_ROWS: ComparisonTableRow[] = [
  ...listSoftwarePicksBySlugs("scheduling", [
    "calendly",
    "acuity-scheduling",
    "youcanbookme",
    "setmore",
    "simplybookme",
    "square-appointments",
    "appointy",
    "zoho-bookings",
  ]).map(toHubComparisonTableRow),
];

/** Best scheduling software by use case. */
export const SCHEDULING_SCENARIO_LINKS = [
  { label: "Best scheduling software (roundup)", href: "/scheduling/best-scheduling-software" },
  { label: "Compare scheduling software", href: "/scheduling/compare" },
  { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
  { label: "Best for freelancers", href: getSchedulingBestForUrl("freelancers") },
  { label: "Best for small business", href: getSchedulingBestForUrl("small-business") },
  { label: "Best for consultants", href: getSchedulingBestForUrl("consultants") },
  { label: "Best for service business", href: getSchedulingBestForUrl("service-business") },
  { label: "Best for teams", href: getSchedulingBestForUrl("teams") },
] as const;

/** Identity-based entry points (routes exist under /scheduling/best-for/). */
export const SCHEDULING_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Freelancers & solos", href: getSchedulingBestForUrl("freelancers") },
  { label: "Consultants & coaches", href: getSchedulingBestForUrl("consultants") },
  { label: "Service businesses", href: getSchedulingBestForUrl("service-business") },
  { label: "Small business teams", href: getSchedulingBestForUrl("small-business") },
  { label: "Multi-seat & pooled booking", href: getSchedulingBestForUrl("teams") },
];

export const SCHEDULING_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "Browse by role or environment", links: SCHEDULING_BY_BUSINESS_TYPE },
];

/** Editorial “best scheduling by use case” — booking mechanics and volume, not identity label alone. */
export const SCHEDULING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Solo calendars and simple client booking",
    body: "Minimize friction: one link, reliable reminders, and payments only if you truly need them. Over-customizing meeting types early often slows adoption.",
    links: [
      { label: "Best scheduling for freelancers →", href: getSchedulingBestForUrl("freelancers") },
      { label: "Calendly review →", href: getSchedulingReviewUrl("calendly") },
    ],
  },
  {
    title: "Consultants with intake, packages, or deposits",
    body: "Forms, buffers, and paid bookings reduce no-shows and bad-fit calls. Compare whether clients can reschedule without creating email chains.",
    links: [
      { label: "Best scheduling for consultants →", href: getSchedulingBestForUrl("consultants") },
      { label: "Calendly vs Acuity →", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    ],
  },
  {
    title: "Field and service businesses with routes",
    body: "Travel time, capacity, and team dispatch are different problems than a solo calendar. Check mobile-first flows and whether job details carry into the appointment.",
    links: [
      { label: "Best scheduling for service businesses →", href: getSchedulingBestForUrl("service-business") },
      { label: "Service businesses guide →", href: "/scheduling/guides/appointment-scheduling-for-service-businesses" },
    ],
  },
  {
    title: "Team and round-robin scheduling",
    body: "Fairness rules, pooled availability, and CRM handoffs matter once multiple people book on behalf of the org. Pricing often jumps by seat—model your growth.",
    links: [
      { label: "Best scheduling for teams →", href: getSchedulingBestForUrl("teams") },
      { label: "YouCanBook.me review →", href: getSchedulingReviewUrl("youcanbookme") },
    ],
  },
  {
    title: "SMBs standardizing inbound booking across staff",
    body: "Once multiple people share inbound demand, you need pooled calendars, routing rules, and CRM hooks—not just a personal booking link. Compare seat pricing before you embed workflows.",
    links: [
      { label: "Best scheduling for small business →", href: getSchedulingBestForUrl("small-business") },
      { label: "Calendly vs YouCanBook.me →", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    ],
  },
];

/** Card data for Popular scheduling comparisons. */
export type SchedulingPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const SCHEDULING_POPULAR_COMPARISONS: SchedulingPopularComparisonCard[] = [
  {
    slug: "calendly-vs-acuity-scheduling",
    productA: { name: "Calendly", logoSrc: LOGOS.calendly },
    productB: { name: "Acuity Scheduling", logoSrc: LOGOS.acuity },
    summaryParagraph:
      "Calendly and Acuity are two of the most popular scheduling tools. Calendly is known for simplicity and wide adoption; Acuity offers more customization and intake forms for consultants.",
    href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling"),
  },
  {
    slug: "calendly-vs-youcanbookme",
    productA: { name: "Calendly", logoSrc: LOGOS.calendly },
    productB: { name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme },
    summaryParagraph:
      "Both support team scheduling and calendar sync. Calendly has a larger brand footprint; YouCanBook.me is strong for round-robin and team availability.",
    href: getSchedulingCompareUrl("calendly-vs-youcanbookme"),
  },
  {
    slug: "acuity-scheduling-vs-setmore",
    productA: { name: "Acuity Scheduling", logoSrc: LOGOS.acuity },
    productB: { name: "Setmore", logoSrc: LOGOS.setmore },
    summaryParagraph:
      "Acuity and Setmore both serve service businesses and consultants. Acuity leans into forms and packages; Setmore is popular with salons and local service providers.",
    href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore"),
  },
  {
    slug: "simplybookme-vs-setmore",
    productA: { name: "SimplyBook.me", logoSrc: LOGOS.simplybookme },
    productB: { name: "Setmore", logoSrc: LOGOS.setmore },
    summaryParagraph:
      "SimplyBook.me and Setmore offer customizable booking for service businesses. SimplyBook.me has more industry templates; Setmore has a strong free tier.",
    href: getSchedulingCompareUrl("simplybookme-vs-setmore"),
  },
  {
    slug: "square-appointments-vs-acuity-scheduling",
    productA: { name: "Square Appointments", logoSrc: LOGOS.square },
    productB: { name: "Acuity Scheduling", logoSrc: LOGOS.acuity },
    summaryParagraph:
      "Square Appointments fits businesses already on Square POS; Acuity is a standalone scheduling tool with deeper forms and package options.",
    href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling"),
  },
];

/** FAQ items for the hub. */
export const SCHEDULING_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is scheduling software?",
    a: "Scheduling software automates appointment booking so clients can book time with you or your team without back-and-forth emails or calls. It syncs with your calendar, sends reminders, and can handle payments and intake forms. Consultants, coaches, service businesses, and teams use it to reduce no-shows and free up admin time.",
  },
  {
    q: "What is the best scheduling software for small businesses?",
    a: "Calendly and Acuity Scheduling are strong choices for small businesses: both offer free or low-cost tiers, calendar sync, and reminders. Setmore and SimplyBook.me are also popular for service-based small businesses. Choose based on whether you need simple one-person booking (Calendly) or more customization and intake forms (Acuity, SimplyBook.me).",
  },
  {
    q: "What is the difference between Calendly and Acuity Scheduling?",
    a: "Calendly is known for ease of use and a simple, polished booking experience; it scales well for teams and has a large ecosystem of integrations. Acuity Scheduling offers more built-in customization: intake forms, packages, group classes, and payment options. Calendly is often the default for professionals who want minimal setup; Acuity suits consultants and coaches who want more control over the booking flow.",
  },
  {
    q: "Do scheduling tools integrate with CRM or invoicing software?",
    a: "Yes. Many scheduling tools integrate with CRM (e.g. HubSpot, Salesforce) and invoicing or payment tools (Stripe, Square, QuickBooks). Calendly, Acuity, and YouCanBook.me all offer integrations with popular business apps so bookings can sync with your pipeline or billing.",
  },
];

/** Guide cards for the Scheduling Guides section on the hub. */
export type SchedulingGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

const SCHEDULING_GUIDES_BASE = "/scheduling/guides";

export const SCHEDULING_HUB_GUIDES: SchedulingGuideItem[] = [
  {
    slug: "how-to-choose",
    title: "How to Choose Scheduling Software",
    href: `${SCHEDULING_GUIDES_BASE}/how-to-choose-scheduling-software`,
    description:
      "Evaluation framework: calendar sync, meeting types, reminders, team routing, and total cost.",
  },
  {
    slug: "scheduling-guides",
    title: "All Scheduling Guides",
    description: "Browse the full library of scheduling articles and deep dives.",
    href: SCHEDULING_GUIDES_BASE,
  },
  {
    slug: "freelancers",
    title: "Best Scheduling Software for Freelancers",
    href: `${SCHEDULING_GUIDES_BASE}/best-scheduling-software-for-freelancers`,
    description:
      "What solo pros need from booking links: simplicity, limits, and payment options—without enterprise bloat.",
  },
  {
    slug: "consultants",
    title: "Best Scheduling Software for Consultants",
    href: `${SCHEDULING_GUIDES_BASE}/best-scheduling-software-for-consultants`,
    description:
      "Intake forms, buffer time, and package pricing—concepts for consultative sales and discovery calls.",
  },
  {
    slug: "scheduling-teams",
    title: "Scheduling Software for Teams",
    href: `${SCHEDULING_GUIDES_BASE}/scheduling-software-for-teams`,
    description:
      "Round-robin, pooled availability, and admin controls when multiple people share inbound demand.",
  },
  {
    slug: "small-business",
    title: "Scheduling Tools for Small Business",
    href: `${SCHEDULING_GUIDES_BASE}/scheduling-tools-for-small-business`,
    description:
      "How SMBs balance client experience with staff workload—implementation considerations, not vendor shortlists.",
  },
  {
    slug: "scheduling-service",
    title: "Appointment Scheduling for Service Businesses",
    href: `${SCHEDULING_GUIDES_BASE}/appointment-scheduling-for-service-businesses`,
    description:
      "Field service, capacity, and reminders—what changes when appointments are operations-critical.",
  },
  {
    slug: "calendly-alternatives",
    title: "Calendly Alternatives",
    href: `${SCHEDULING_GUIDES_BASE}/calendly-alternatives`,
    description:
      "When to look beyond the default Calendly path: pricing cliffs, feature gaps, and migration risk.",
  },
  {
    slug: "acuity-alternatives",
    title: "Acuity Scheduling Alternatives",
    href: `${SCHEDULING_GUIDES_BASE}/acuity-scheduling-alternatives`,
    description:
      "Tradeoffs if you’re considering moving off Acuity: forms, packages, and payment workflows.",
  },
];

/** Methodology for the hub. */
export const SCHEDULING_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review scheduling software",
  sub: "Transparent process, booking-focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly. We evaluate scheduling tools on calendar integrations, booking automation, customer notifications, team and round-robin support, and reporting or integrations with CRM and invoicing.",
  bullets: [
    "We test core workflows: setting up meeting types, syncing calendars, sending reminders, and handling team or round-robin booking.",
    "We compare pricing tiers, booking limits, and feature sets so you understand cost at your volume.",
    "We look at integrations with calendar apps, CRM, payment processors, and video conferencing.",
  ],
};
