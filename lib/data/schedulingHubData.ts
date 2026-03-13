/**
 * Scheduling software hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/scheduling/page.tsx.
 */

import { getSchedulingReviewUrl, getSchedulingCompareUrl, getSchedulingBestForUrl } from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

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

/** Top scheduling picks for the hub hero section. */
export const SCHEDULING_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "calendly",
    name: "Calendly",
    badge: "Best overall",
    descriptor: "Automated appointment scheduling and calendar sync for individuals and teams.",
    rating: "4.7",
    price: "Free tier; from ~$10/mo",
    features: ["Calendar sync", "Meeting types", "Reminders & follow-up"],
    reviewHref: getSchedulingReviewUrl("calendly"),
    compareHref: getSchedulingCompareUrl("calendly-vs-acuity-scheduling"),
    logoSrc: LOGOS.calendly,
    visitUrl: "https://calendly.com",
  },
  {
    slug: "acuity-scheduling",
    name: "Acuity Scheduling",
    badge: "Best for flexibility",
    descriptor: "Scheduling with intake forms, packages, and strong customization for consultants and coaches.",
    rating: "4.6",
    price: "From ~$16/mo",
    features: ["Intake forms", "Packages & memberships", "Payments"],
    reviewHref: getSchedulingReviewUrl("acuity-scheduling"),
    compareHref: getSchedulingCompareUrl("calendly-vs-acuity-scheduling"),
    logoSrc: LOGOS.acuity,
    visitUrl: "https://www.acuityscheduling.com",
  },
  {
    slug: "youcanbookme",
    name: "YouCanBook.me",
    badge: "Best for teams",
    descriptor: "Team scheduling with round-robin, buffer time, and calendar integrations.",
    rating: "4.5",
    price: "From ~$10/mo",
    features: ["Team availability", "Round-robin booking", "Integrations"],
    reviewHref: getSchedulingReviewUrl("youcanbookme"),
    compareHref: getSchedulingCompareUrl("calendly-vs-youcanbookme"),
    logoSrc: LOGOS.youcanbookme,
    visitUrl: "https://youcanbook.me",
  },
  {
    slug: "setmore",
    name: "Setmore",
    badge: "Best for service businesses",
    descriptor: "Appointment booking for salons, clinics, and service providers with payments and reminders.",
    rating: "4.4",
    price: "Free tier; from ~$9/mo",
    features: ["Recurring appointments", "Payments", "Customer reminders"],
    reviewHref: getSchedulingReviewUrl("setmore"),
    compareHref: getSchedulingCompareUrl("acuity-scheduling-vs-setmore"),
    logoSrc: LOGOS.setmore,
    visitUrl: "https://www.setmore.com",
  },
  {
    slug: "simplybookme",
    name: "SimplyBook.me",
    badge: "Best for customization",
    descriptor: "Scheduling with custom booking forms, multiple staff, and industry templates.",
    rating: "4.4",
    price: "From ~$8/mo",
    features: ["Custom forms", "Multi-staff", "Industry templates"],
    reviewHref: getSchedulingReviewUrl("simplybookme"),
    compareHref: getSchedulingCompareUrl("simplybookme-vs-setmore"),
    logoSrc: LOGOS.simplybookme,
    visitUrl: "https://simplybook.me",
  },
];

/** Comparison table rows for the hub. */
export const SCHEDULING_COMPARISON_ROWS: ComparisonTableRow[] = [
  { tool: "Calendly", bestFor: "Best overall for most users", price: "Free; from ~$10/mo", rating: "4.7", slug: "calendly", logoSrc: LOGOS.calendly },
  { tool: "Acuity Scheduling", bestFor: "Consultants & coaches", price: "From ~$16/mo", rating: "4.6", slug: "acuity-scheduling", logoSrc: LOGOS.acuity },
  { tool: "YouCanBook.me", bestFor: "Teams & round-robin", price: "From ~$10/mo", rating: "4.5", slug: "youcanbookme", logoSrc: LOGOS.youcanbookme },
  { tool: "Setmore", bestFor: "Service businesses", price: "Free; from ~$9/mo", rating: "4.4", slug: "setmore", logoSrc: LOGOS.setmore },
  { tool: "SimplyBook.me", bestFor: "Custom booking flows", price: "From ~$8/mo", rating: "4.4", slug: "simplybookme", logoSrc: LOGOS.simplybookme },
  { tool: "Square Appointments", bestFor: "Square POS users", price: "Included with Square", rating: "4.3", slug: "square-appointments", logoSrc: LOGOS.square },
  { tool: "Appointy", bestFor: "Multi-location & staff", price: "From ~$10/mo", rating: "4.3", slug: "appointy", logoSrc: LOGOS.appointy },
  { tool: "Zoho Bookings", bestFor: "Zoho ecosystem", price: "From ~$8/mo", rating: "4.2", slug: "zoho-bookings", logoSrc: LOGOS.zoho },
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

/** Scheduling by business type. */
export const SCHEDULING_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Consultants", href: getSchedulingBestForUrl("consultants") },
  { label: "Coaches", href: getSchedulingBestForUrl("coaches") },
  { label: "Service businesses", href: getSchedulingBestForUrl("service-business") },
  { label: "Sales teams", href: getSchedulingBestForUrl("sales-teams") },
  { label: "Customer support teams", href: getSchedulingBestForUrl("customer-support") },
];

export const SCHEDULING_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "By business type", links: SCHEDULING_BY_BUSINESS_TYPE },
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
    slug: "scheduling-guides",
    title: "Scheduling Guides",
    description: "Browse guides on how to choose and use scheduling software for consultants, service businesses, and teams.",
    href: SCHEDULING_GUIDES_BASE,
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
