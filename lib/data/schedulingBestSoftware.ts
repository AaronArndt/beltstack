import { getSchedulingReviewUrl, getSchedulingCompareUrl, getSchedulingBestForUrl } from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

const LOGOS = {
  calendly: "/Logos/calendly.png",
  acuity: "/Logos/acuity.jpeg",
  youcanbookme: "/Logos/youcanbookme.jpeg",
  setmore: "/Logos/setmore.jpeg",
  simplybookme: "/Logos/simplybook.jpeg",
  square: "/Logos/square.jpeg",
  appointy: "/Logos/appointy.jpeg",
  zoho: "/Logos/zoho.png",
} as const;

export type BestSchedulingPick = SoftwarePickCardContent;

export type SchedulingComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export const TOP_PICKS: BestSchedulingPick[] = [
  {
    slug: "calendly",
    name: "Calendly",
    badge: "Best overall",
    description:
      "Automated appointment scheduling and calendar sync for individuals and teams.",
    rating: "4.7",
    startingPrice: "Free tier; from ~$10/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://calendly.com",
    logoSrc: LOGOS.calendly,
    compareSlugs: ["calendly-vs-acuity-scheduling", "calendly-vs-youcanbookme"],
    editorialParagraph:
      "Calendly is our top pick for most people who need scheduling software. It’s easy to set up, works with Google and Outlook, and lets clients book time without email back-and-forth. Consultants, freelancers, and small teams use it to cut no-shows and free up admin time. The free tier is generous; paid plans add team scheduling, more meeting types, and integrations.",
    pros: [
      "Simple setup and widely recognized booking experience",
      "Strong calendar sync and reminder automation",
      "Free tier and clear upgrade path for teams",
    ],
    cons: [
      "Advanced customization and intake forms are lighter than Acuity",
      "Team and round-robin features on paid tiers only",
    ],
    pricingSummary:
      "Calendly offers a free plan for one event type; paid plans start around $10/month per user and add team scheduling, more event types, and remove branding.",
  },
  {
    slug: "acuity-scheduling",
    name: "Acuity Scheduling",
    badge: "Best for flexibility",
    description:
      "Scheduling with intake forms, packages, and strong customization for consultants and coaches.",
    rating: "4.6",
    startingPrice: "From ~$16/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.acuityscheduling.com",
    logoSrc: LOGOS.acuity,
    compareSlugs: ["calendly-vs-acuity-scheduling", "acuity-scheduling-vs-setmore"],
    editorialParagraph:
      "Acuity Scheduling is ideal when you need more than a simple calendar link. Intake forms, packages, group classes, and payment collection are built in, making it a strong fit for coaches, consultants, and service providers who want a tailored booking flow. It syncs with major calendars and supports multiple staff and locations.",
    pros: [
      "Intake forms and packages out of the box",
      "Good for consultants, coaches, and service businesses",
      "Payments and flexibility without coding",
    ],
    cons: [
      "Pricing is higher than some alternatives",
      "Interface can feel busy for very simple use cases",
    ],
    pricingSummary:
      "Acuity’s plans start around $16/month and scale with features like intake forms, packages, and branding removal. Higher tiers add more staff and locations.",
  },
  {
    slug: "youcanbookme",
    name: "YouCanBook.me",
    badge: "Best for teams",
    description:
      "Team scheduling with round-robin, buffer time, and calendar integrations.",
    rating: "4.5",
    startingPrice: "From ~$10/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://youcanbook.me",
    logoSrc: LOGOS.youcanbookme,
    compareSlugs: ["calendly-vs-youcanbookme"],
    editorialParagraph:
      "YouCanBook.me is built for teams that need collective availability or round-robin booking. Multiple team members, buffer time between appointments, and time-zone handling make it a good choice when the whole team takes bookings. It integrates with Google and Outlook and is popular with support and sales teams.",
    pros: [
      "Round-robin and team availability",
      "Buffer time and time-zone support",
      "Reasonable pricing for team use",
    ],
    cons: [
      "Less brand recognition than Calendly",
      "Some advanced features on higher tiers",
    ],
    pricingSummary:
      "YouCanBook.me offers paid plans starting around $10/month that add team features, more booking types, and integrations.",
  },
  {
    slug: "setmore",
    name: "Setmore",
    badge: "Best for service businesses",
    description:
      "Appointment booking for salons, clinics, and service providers with payments and reminders.",
    rating: "4.4",
    startingPrice: "Free tier; from ~$9/mo",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.setmore.com",
    logoSrc: LOGOS.setmore,
    compareSlugs: ["acuity-scheduling-vs-setmore", "simplybookme-vs-setmore"],
    editorialParagraph:
      "Setmore targets service businesses like salons, spas, and clinics. Recurring appointments, staff scheduling, and payment collection are central. The free tier is useful for solo practitioners; paid plans add more staff, reminders, and integrations. It’s a solid option when you need straightforward booking without heavy customization.",
    pros: [
      "Free tier for solo use",
      "Recurring appointments and staff scheduling",
      "Payments and reminders included",
    ],
    cons: [
      "Less flexible than Acuity for complex flows",
      "Reporting and integrations are adequate but not extensive",
    ],
    pricingSummary:
      "Setmore has a free plan; paid plans start around $9/month and add more staff, advanced reminders, and integrations.",
  },
  {
    slug: "simplybookme",
    name: "SimplyBook.me",
    badge: "Best for customization",
    description:
      "Scheduling with custom booking forms, multiple staff, and industry templates.",
    rating: "4.4",
    startingPrice: "From ~$8/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://simplybook.me",
    logoSrc: LOGOS.simplybookme,
    compareSlugs: ["simplybookme-vs-setmore"],
    editorialParagraph:
      "SimplyBook.me offers a lot of customization at a lower price point. Custom booking forms, multiple staff and services, and industry-specific templates suit salons, fitness, and local services. It can feel more complex to configure than Calendly or Setmore, but you get more control over the booking experience.",
    pros: [
      "Custom forms and industry templates",
      "Multi-staff and multi-service support",
      "Competitive pricing",
    ],
    cons: [
      "Setup can take longer than simpler tools",
      "UI is functional but less polished than top brands",
    ],
    pricingSummary:
      "SimplyBook.me plans start around $8/month and scale with staff, services, and features like payments and reminders.",
  },
  {
    slug: "square-appointments",
    name: "Square Appointments",
    badge: "Best for Square users",
    description:
      "Appointment scheduling built into Square for businesses that already use Square for payments.",
    rating: "4.3",
    startingPrice: "Included with Square",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://squareup.com",
    logoSrc: LOGOS.square,
    compareSlugs: ["square-appointments-vs-acuity-scheduling"],
    editorialParagraph:
      "Square Appointments makes sense when you already run payments and point-of-sale with Square. Booking, reminders, and payments stay in one ecosystem, so you don’t add another vendor. It’s geared toward service businesses and is included or low-cost as part of Square’s tools.",
    pros: [
      "Integrated with Square and payments",
      "No extra subscription if you already use Square",
      "Straightforward for service businesses",
    ],
    cons: [
      "Best if you’re committed to Square; less compelling standalone",
      "Fewer advanced scheduling features than Acuity or Calendly",
    ],
    pricingSummary:
      "Square Appointments is typically included with Square point-of-sale or available as part of Square’s service plans; pricing depends on your Square setup.",
  },
  {
    slug: "appointy",
    name: "Appointy",
    badge: "Best for multi-location & staff",
    description:
      "Scheduling for businesses with multiple staff, locations, or high booking volume.",
    rating: "4.3",
    startingPrice: "From ~$10/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.appointy.com",
    logoSrc: LOGOS.appointy,
    compareSlugs: [],
    editorialParagraph:
      "Appointy is built for businesses that need to manage many staff or locations. Multi-location calendars, staff scheduling, and industry-specific features suit salons, clinics, and agencies. It’s a step up in structure from single-operator tools and can scale with your team.",
    pros: [
      "Multi-location and multi-staff support",
      "Industry-focused features",
      "Marketing and reminder tools",
    ],
    cons: [
      "Can be overkill for solo freelancers",
      "Learning curve for full feature set",
    ],
    pricingSummary:
      "Appointy plans start around $10/month and scale with staff, locations, and features like payments and marketing.",
  },
  {
    slug: "zoho-bookings",
    name: "Zoho Bookings",
    badge: "Best for Zoho ecosystem",
    description:
      "Scheduling from Zoho for businesses already using Zoho CRM, Mail, or other Zoho apps.",
    rating: "4.2",
    startingPrice: "From ~$8/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.zoho.com/bookings",
    logoSrc: LOGOS.zoho,
    compareSlugs: [],
    editorialParagraph:
      "Zoho Bookings fits naturally if you use Zoho CRM, Zoho Mail, or other Zoho products. Appointments can sync with your pipeline and calendar, keeping everything in one stack. It’s capable for team scheduling and reminders, though the experience is best when you’re already in the Zoho ecosystem.",
    pros: [
      "Integrates with Zoho CRM and other Zoho apps",
      "Team scheduling and reminders",
      "Reasonable price within Zoho suite",
    ],
    cons: [
      "Most compelling for existing Zoho users",
      "Standalone scheduling features lag Calendly or Acuity",
    ],
    pricingSummary:
      "Zoho Bookings is available as a standalone product or as part of Zoho’s suite; pricing typically starts around $8/month.",
  },
];

/** Comparison table: all 8 scheduling tools. */
export const COMPARISON_TABLE_ROWS: SchedulingComparisonTableRow[] = [
  { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, bestFor: "Best overall for most users", startingPrice: "Free; from ~$10/mo", rating: "4.7", reviewHref: getSchedulingReviewUrl("calendly") },
  { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, bestFor: "Consultants & coaches", startingPrice: "From ~$16/mo", rating: "4.6", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
  { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, bestFor: "Teams & round-robin", startingPrice: "From ~$10/mo", rating: "4.5", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, bestFor: "Service businesses", startingPrice: "Free; from ~$9/mo", rating: "4.4", reviewHref: getSchedulingReviewUrl("setmore") },
  { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, bestFor: "Custom booking flows", startingPrice: "From ~$8/mo", rating: "4.4", reviewHref: getSchedulingReviewUrl("simplybookme") },
  { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, bestFor: "Square users", startingPrice: "Included with Square", rating: "4.3", reviewHref: getSchedulingReviewUrl("square-appointments") },
  { slug: "appointy", name: "Appointy", logoSrc: LOGOS.appointy, bestFor: "Multi-location & staff", startingPrice: "From ~$10/mo", rating: "4.3", reviewHref: getSchedulingReviewUrl("appointy") },
  { slug: "zoho-bookings", name: "Zoho Bookings", logoSrc: LOGOS.zoho, bestFor: "Zoho ecosystem", startingPrice: "From ~$8/mo", rating: "4.2", reviewHref: getSchedulingReviewUrl("zoho-bookings") },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best scheduling software (roundup)", href: "/scheduling/best-scheduling-software", description: "Full rankings and top picks for scheduling software." },
  { label: "Compare scheduling software", href: "/scheduling/compare", description: "Side-by-side comparisons of popular scheduling tools." },
  { label: "Scheduling guides", href: "/scheduling/guides", description: "How to choose and use scheduling software." },
  { label: "Best scheduling software by use case", href: "/scheduling/best-for", description: "Browse scheduling picks by use case (freelancers, consultants, teams, and more)." },
  { label: "Best for freelancers", href: getSchedulingBestForUrl("freelancers"), description: "Scheduling tools that fit solo consultants and freelancers." },
  { label: "Best for small business", href: getSchedulingBestForUrl("small-business"), description: "Scheduling software for small teams and service businesses." },
  { label: "Best for consultants", href: getSchedulingBestForUrl("consultants"), description: "Tools with intake forms and packages for consultants." },
  { label: "Best for service business", href: getSchedulingBestForUrl("service-business"), description: "Appointment booking for salons, clinics, and local services." },
  { label: "Best for teams", href: getSchedulingBestForUrl("teams"), description: "Team and round-robin scheduling for multiple staff." },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
  { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
  { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
  { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
  { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is scheduling software?",
    a: "Scheduling software automates appointment booking so clients can book time with you or your team without back-and-forth emails or calls. It syncs with your calendar, sends reminders, and often supports payments and intake forms. Consultants, coaches, service businesses, and teams use it to reduce no-shows and free up admin time.",
  },
  {
    q: "What is the best scheduling software for small businesses?",
    a: "Calendly and Acuity Scheduling are strong choices for small businesses: both offer free or low-cost tiers, calendar sync, and reminders. Setmore and SimplyBook.me are also popular for service-based small businesses. Choose based on whether you need simple one-person booking (Calendly) or more customization and intake forms (Acuity, SimplyBook.me).",
  },
  {
    q: "Do scheduling tools integrate with CRM or invoicing software?",
    a: "Yes. Many scheduling tools integrate with CRM (e.g. HubSpot, Salesforce) and invoicing or payment tools (Stripe, Square, QuickBooks). Calendly, Acuity, and YouCanBook.me all offer integrations with popular business apps so bookings can sync with your pipeline or billing.",
  },
  {
    q: "What is the difference between Calendly and Acuity Scheduling?",
    a: "Calendly is known for ease of use and a simple, polished booking experience; it scales well for teams and has a large ecosystem of integrations. Acuity Scheduling offers more built-in customization: intake forms, packages, group classes, and payment options. Calendly is often the default for professionals who want minimal setup; Acuity suits consultants and coaches who want more control over the booking flow.",
  },
];
