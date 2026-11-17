import {
  getSchedulingReviewUrl,
  getSchedulingCompareUrl,
  getSchedulingBestForUrl,
  getPosReviewUrl,
} from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import { overlayVerifiedStartingPrice } from "@/lib/data/verifiedStartingPrices";

type SchedulingReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const LOGOS = {
  calendly: "/Logos/calendly.png",
  acuity: "/Logos/acuity.jpeg",
  youcanbookme: "/Logos/youcanbookme.jpeg",
  setmore: "/Logos/setmore.jpeg",
  simplybookme: "/Logos/simplybook.jpeg",
  square: "/Logos/square.jpeg",
  appointy: "/Logos/appointy.jpeg",
  zoho: "/Logos/zoho.png",
  booksy: "/Logos/booksy.jpeg",
  sevenShifts: "/Logos/7shifts.jpeg",
} as const;

const SCHEDULING_HUB = "/scheduling";
const SCHEDULING_BEST_SOFTWARE = "/scheduling/best-scheduling-software";
const SCHEDULING_COMPARE_HUB = "/scheduling/compare";
const SCHEDULING_GUIDES_HUB = "/scheduling/guides";

const SCHEDULING_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for freelancers", href: getSchedulingBestForUrl("freelancers") },
  { label: "Best for small business", href: getSchedulingBestForUrl("small-business") },
  { label: "Best for consultants", href: getSchedulingBestForUrl("consultants") },
  { label: "Best for service business", href: getSchedulingBestForUrl("service-business") },
  { label: "Best for teams", href: getSchedulingBestForUrl("teams") },
];

const SCHEDULING_METHODOLOGY = {
  title: "How we review scheduling software",
  sub: "Transparent process, booking-focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate scheduling tools on calendar sync, booking automation, reminders and notifications, team and multi-staff support, and integrations.",
  bullets: [
    "We evaluate scheduling software around setting availability, sharing booking links, handling time zones, and managing reminders.",
    "We compare pricing tiers, event types, staff limits, and feature sets so you understand total cost for your use case.",
    "We look at calendar integrations, payment and intake options, and how well each tool fits consultants, service businesses, and teams.",
  ],
};

const reviews: Record<string, SchedulingReviewData> = {
  calendly: {
    toolName: "Calendly",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.7",
    startingPrice: "Free tier; from ~$10/mo",
    bestFor: "consultants, freelancers, and teams that want simple, polished appointment booking with minimal setup",
    visitUrl: "https://calendly.com",
    logoSrc: LOGOS.calendly,
    quickVerdict:
      "Calendly is our top overall pick for scheduling software: it’s easy to set up, widely recognized by clients, and scales from one person to teams without feeling complicated.",
    quickVerdictParagraphs: [
      "Calendly lets you share a booking link so clients pick a time without email back-and-forth. It syncs with Google Calendar, Outlook, and Apple Calendar so your availability stays accurate, and it handles time zones and reminders automatically. For most consultants, freelancers, and small teams, that’s exactly what’s needed: less admin, fewer no-shows, and a professional impression.",
      "We like Calendly for its balance of simplicity and capability. The free tier is enough for one event type and one calendar; paid plans add team scheduling, multiple event types, custom branding, and integrations with CRM and video tools. The product doesn’t try to be a full business suite—it focuses on booking—so you’re not wading through features you don’t need.",
      "Limitations to consider: advanced intake forms and payment flows are lighter than Acuity Scheduling, and team and round-robin features live on paid tiers. If you need heavy customization or built-in packages and classes, Acuity or SimplyBook.me may fit better. For straightforward “pick a time” scheduling with a brand people trust, Calendly remains the default choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.6", explanation: "Strong core: one-on-one and group events, calendar sync, reminders, and a growing set of integrations. Team scheduling and more event types on paid plans." },
      { category: "Pricing", score: "4.5", explanation: "Free tier is useful for solo use; paid plans are clear and competitive. You pay for team features and removal of Calendly branding." },
      { category: "Ease of Use", score: "4.8", explanation: "One of the easiest scheduling tools to set up. Clients recognize the booking experience, and admins can configure events in minutes." },
      { category: "Support", score: "4.5", explanation: "Help center, email support, and onboarding resources. Enterprise plans get dedicated support." },
      { category: "Integrations", score: "4.6", explanation: "Integrates with Google, Outlook, Zoom, Salesforce, HubSpot, and many other tools so bookings flow into your existing stack." },
    ],
    pros: [
      "Simple setup and widely recognized booking experience",
      "Strong calendar sync and reminder automation",
      "Free tier and clear upgrade path for teams",
      "Broad integration ecosystem",
    ],
    cons: [
      "Advanced customization and intake forms are lighter than Acuity",
      "Team and round-robin features on paid tiers only",
    ],
    bestForEditorial:
      "Calendly is best for consultants, freelancers, coaches, and small teams that want to automate appointment booking without learning a complex tool. It fits anyone who sends a lot of 'when are you free?' emails and wants to replace that with a single link. Sales and customer-success teams also use it for demos and check-ins.",
    whoShouldAvoid:
      "Businesses that need deep intake forms, packages, group classes, or payment collection tightly woven into the booking flow may prefer Acuity or SimplyBook.me. If you need heavy multi-location or multi-staff logic and want to minimize cost, YouCanBook.me or Setmore might offer more for less.",
    pricingSummary:
      "Calendly offers a free plan for one event type; paid plans start around $10/month per user and add team scheduling, more event types, custom branding, and integrations. Enterprise pricing is available for larger organizations.",
    pricingTiers:
      "Free covers one event type and one calendar. Essential and higher tiers add multiple event types, team scheduling, removal of Calendly branding, and more integrations. Compare tiers based on how many people book and how many event types you need.",
    costVsCompetitors:
      "Calendly sits in the mid-range: more than bare-bones tools, often similar to YouCanBook.me and Setmore when you add team features. Acuity is typically more expensive but adds intake forms and packages. The main differentiator is ease of use and brand recognition, not price alone.",
    features: [],
    keyFeatures: [
      { name: "Booking link and embed", description: "Share a link or embed a calendar on your site so clients choose a time without leaving their inbox or your website." },
      { name: "Calendar sync", description: "Sync with Google, Outlook, and Apple so availability updates in real time and you avoid double-booking." },
      { name: "Reminders and follow-ups", description: "Automated email reminders reduce no-shows; optional follow-up messages keep the conversation going after the meeting." },
      { name: "Team scheduling", description: "On paid plans, round-robin and collective availability let clients book with the right person or any available team member." },
      { name: "Integrations", description: "Connect to Zoom, Salesforce, HubSpot, Stripe, and others so bookings trigger the right follow-up actions in your stack." },
    ],
    integrations: ["Google Calendar", "Outlook", "Apple Calendar", "Zoom", "Salesforce", "HubSpot", "Stripe", "Slack"],
    integrationsIntro:
      "Calendly connects to the tools most professionals already use: calendars for availability, video for meetings, and CRM or sales tools so new bookings show up where you work.",
    alternatives: [
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms, packages, and customization for consultants and coaches.", logoSrc: LOGOS.acuity },
      { name: "YouCanBook.me", href: getSchedulingReviewUrl("youcanbookme"), description: "Strong team and round-robin scheduling at competitive pricing.", logoSrc: LOGOS.youcanbookme },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and service-business focus for salons, clinics, and solo practitioners.", logoSrc: LOGOS.setmore },
    ],
    faqs: [
      { q: "Is Calendly free?", a: "Calendly has a free plan that supports one event type and one calendar. Paid plans add more event types, team scheduling, and removal of Calendly branding." },
      { q: "Does Calendly work with Google Calendar?", a: "Yes. Calendly syncs with Google Calendar (and Outlook and Apple Calendar) so your availability stays up to date and you avoid double-booking." },
      { q: "What is the difference between Calendly and Acuity?", a: "Calendly is simpler and faster to set up; Acuity offers more built-in intake forms, packages, and payment options. Choose Calendly for straightforward booking; choose Acuity when you need a highly customized booking flow." },
      { q: "Can teams use Calendly?", a: "Yes. Paid plans support team scheduling, round-robin booking, and collective availability so clients can book with any available team member or a specific person." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
      { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    ],
    compareSectionTitle: "Compare Calendly with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
      { label: "CRM software", href: "/crm" },
    ],
  },

  "acuity-scheduling": {
    toolName: "Acuity Scheduling",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.6",
    startingPrice: "From ~$16/mo",
    bestFor: "consultants, coaches, and service providers who want intake forms, packages, and flexible booking flows",
    visitUrl: "https://www.acuityscheduling.com",
    logoSrc: LOGOS.acuity,
    quickVerdict:
      "Acuity Scheduling is our top pick when you need more than a simple calendar link: intake forms, packages, group classes, and payment collection are built in, so you can tailor the booking experience without coding.",
    quickVerdictParagraphs: [
      "Acuity gives you the usual scheduling basics—calendar sync, booking links, reminders—plus forms and questionnaires that run before or after booking. You can sell packages (e.g. five sessions), offer group classes, and collect payment at the point of booking. That makes it a strong fit for coaches, consultants, and service businesses that want the client to complete intake or pay upfront.",
      "We like Acuity for its flexibility. Multiple staff and locations are supported; you can customize branding, emails, and the booking flow so it matches your practice. The tradeoff is that the interface has more options than Calendly, so setup can take a bit longer. Once configured, clients get a cohesive experience from booking to reminder to follow-up.",
      "Pricing is higher than Calendly or Setmore, but you’re paying for built-in forms, packages, and payment tools. If you only need 'pick a time' and don’t care about intake or packages, a simpler tool may be enough. If you want one place to run the full booking and pre-session workflow, Acuity is among the best.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.7", explanation: "Rich set: intake forms, packages, group classes, payments, and multi-staff/location. More customizable than most scheduling-only tools." },
      { category: "Pricing", score: "4.2", explanation: "Plans start around $16/month and scale with features. Not the cheapest, but good value when you use forms and packages." },
      { category: "Ease of Use", score: "4.4", explanation: "Powerful but has a learning curve. Once set up, the booking experience is smooth for clients." },
      { category: "Support", score: "4.5", explanation: "Knowledge base, email support, and helpful onboarding. Users generally report good experiences." },
      { category: "Integrations", score: "4.5", explanation: "Integrates with PayPal, Stripe, QuickBooks, Mailchimp, and many other tools so payments and marketing stay connected." },
    ],
    pros: [
      "Intake forms and packages out of the box",
      "Good for consultants, coaches, and service businesses",
      "Payments and flexibility without coding",
      "Multi-staff and multi-location support",
    ],
    cons: [
      "Pricing is higher than some alternatives",
      "Interface can feel busy for very simple use cases",
    ],
    bestForEditorial:
      "Acuity is best for coaches, consultants, therapists, and service providers who want clients to complete intake forms, buy packages, or pay at booking. It fits practices that run one-on-one and group offerings and care about a polished, branded booking flow.",
    whoShouldAvoid:
      "If you only need a simple 'pick a time' link and don’t use intake forms or packages, Calendly or Setmore may be easier and cheaper. Very large or multi-brand operations may need to evaluate enterprise options elsewhere.",
    pricingSummary:
      "Acuity’s plans start around $16/month and scale with features like intake forms, packages, and branding removal. Higher tiers add more staff, locations, and advanced options. No free plan, but a trial is typically available.",
    pricingTiers:
      "Entry tiers cover core scheduling and a limited number of staff; mid and upper tiers add more staff, locations, intake forms, packages, and payment options. Check Acuity’s site for current plan names and limits.",
    costVsCompetitors:
      "Acuity is usually more expensive than Calendly, Setmore, or SimplyBook.me. You’re paying for built-in forms, packages, and payment flows. If those matter, the price is justified; if not, a simpler tool may suffice.",
    features: [],
    keyFeatures: [
      { name: "Intake forms and questionnaires", description: "Collect client information before or after booking so you’re prepared for each session and can automate follow-up." },
      { name: "Packages and memberships", description: "Sell packages (e.g. five sessions) or recurring memberships so clients commit upfront and you reduce no-shows." },
      { name: "Group classes and events", description: "Schedule group classes with capacity limits and optional payment at booking." },
      { name: "Payments", description: "Accept payment via PayPal or Stripe at booking so you get paid before the appointment." },
      { name: "Multi-staff and locations", description: "Manage multiple staff and locations so each person or place has the right availability and services." },
    ],
    integrations: ["PayPal", "Stripe", "QuickBooks", "Mailchimp", "Google Calendar", "Outlook", "Zoom"],
    integrationsIntro:
      "Acuity connects to payment processors, accounting software, and email marketing so bookings and payments flow into your existing tools.",
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Simpler setup and lower cost for straightforward booking.", logoSrc: LOGOS.calendly },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and lower cost for service businesses that need less customization.", logoSrc: LOGOS.setmore },
      { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme"), description: "More customization at a lower price point for salons and local services.", logoSrc: LOGOS.simplybookme },
    ],
    faqs: [
      { q: "How much does Acuity Scheduling cost?", a: "Acuity’s plans typically start around $16/month and scale with staff, locations, and features like intake forms and packages. There is no free plan, but a free trial is usually available." },
      { q: "Does Acuity have intake forms?", a: "Yes. Acuity supports custom intake forms and questionnaires that clients complete before or after booking, which is ideal for coaches and consultants." },
      { q: "Can I sell packages with Acuity?", a: "Yes. You can create packages (e.g. five sessions) and sell them through the booking flow so clients pay upfront and book over time." },
      { q: "Acuity vs Calendly: which should I choose?", a: "Choose Acuity if you need intake forms, packages, or payment at booking. Choose Calendly if you want the simplest setup and don’t need those extras." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
      { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
      { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
    ],
    compareSectionTitle: "Compare Acuity Scheduling with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
    ],
  },

  youcanbookme: {
    toolName: "YouCanBook.me",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.5",
    startingPrice: "Free",
    bestFor: "teams that need round-robin booking, collective availability, or multiple staff without enterprise pricing",
    visitUrl: "https://youcanbook.me",
    logoSrc: LOGOS.youcanbookme,
    quickVerdict:
      "YouCanBook.me is a strong choice for teams: round-robin and collective availability are built in, pricing is competitive, and it integrates well with Google and Outlook.",
    quickVerdictParagraphs: [
      "YouCanBook.me focuses on team scheduling. You can let clients book with 'any available team member' (round-robin) or choose a specific person. Buffer time between appointments, time-zone handling, and custom booking pages make it a good fit for support teams, sales teams, and small practices that share a calendar.",
      "We like it for the balance of team features and price. You get capabilities that often cost more in Calendly (team scheduling on higher tiers) at a lower entry point. The interface is functional rather than flashy; some users find it less polished than Calendly but more capable for multi-person booking.",
      "If you’re solo and only need one calendar link, Calendly’s free tier or Setmore might be simpler. If you have several people taking bookings and want one place to manage availability and round-robin, YouCanBook.me belongs on your shortlist.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Round-robin, team availability, buffer time, and time-zone support. Solid for teams without enterprise complexity." },
      { category: "Pricing", score: "4.6", explanation: "Competitive pricing for team use. Often cheaper than Calendly when you need multiple staff and event types." },
      { category: "Ease of Use", score: "4.3", explanation: "Straightforward once configured. Slightly less polished than Calendly but logical." },
      { category: "Support", score: "4.4", explanation: "Documentation and email support. Adequate for most teams." },
      { category: "Integrations", score: "4.4", explanation: "Google and Outlook sync, plus Zapier and other integrations for connecting to CRM and tools." },
    ],
    pros: [
      "Round-robin and team availability",
      "Buffer time and time-zone support",
      "Reasonable pricing for team use",
      "Google and Outlook sync",
    ],
    cons: [
      "Less brand recognition than Calendly",
      "Some advanced features on higher tiers",
    ],
    bestForEditorial:
      "YouCanBook.me is best for teams that take bookings collectively: support, sales, consulting firms, and small practices where clients can book with any available person or choose a specific team member. It fits when you want team scheduling without paying Calendly’s team-tier prices.",
    whoShouldAvoid:
      "Solo users who only need one event type may prefer Calendly’s free tier or a simpler tool. If you need heavy intake forms, packages, or payment flows like Acuity, YouCanBook.me is less focused on those.",
    pricingSummary:
      "YouCanBook.me has an ongoing free plan for one calendar connection. Team is $16.20 per member per month billed annually ($18 monthly) and is the first plan that covers five staff calendars.",
    pricingTiers:
      "Plans scale with the number of team members, booking types, and features like custom branding and integrations. Check YouCanBook.me’s pricing page for current tiers and limits.",
    costVsCompetitors:
      "Often more affordable than Calendly for team use when you factor in round-robin and multiple staff. Comparable to Setmore and SimplyBook.me; choose based on whether you prefer YouCanBook.me’s team-centric workflow.",
    features: [],
    keyFeatures: [
      { name: "Round-robin booking", description: "Let clients book with any available team member so work is distributed evenly and no one is overloaded." },
      { name: "Team availability", description: "Show collective or per-person availability so clients can pick a time and optionally choose who they meet." },
      { name: "Buffer time", description: "Add buffer between appointments so you have time to prepare or wrap up without blocking the calendar." },
      { name: "Calendar sync", description: "Sync with Google Calendar and Outlook so team availability stays accurate." },
      { name: "Reminders", description: "Automated email reminders to reduce no-shows and keep clients informed." },
    ],
    integrations: ["Google Calendar", "Outlook", "Zoom", "Zapier", "Slack"],
    integrationsIntro:
      "YouCanBook.me connects to the calendars and tools teams already use so bookings show up in the right place and can trigger follow-up actions.",
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Simpler and more recognizable for solo or light team use.", logoSrc: LOGOS.calendly },
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms and packages for consultants and coaches.", logoSrc: LOGOS.acuity },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and service-business focus.", logoSrc: LOGOS.setmore },
    ],
    faqs: [
      { q: "Does YouCanBook.me support round-robin?", a: "Yes. YouCanBook.me supports round-robin booking so clients can book with any available team member, and you can distribute appointments evenly." },
      { q: "How much does YouCanBook.me cost?", a: "YouCanBook.me has an ongoing free plan for one calendar connection. Team is $16.20 per member per month billed annually ($18 monthly)." },
      { q: "YouCanBook.me vs Calendly?", a: "YouCanBook.me often costs less for team scheduling and includes round-robin; Calendly has stronger brand recognition and a simpler solo experience. Choose YouCanBook.me for team-first use, Calendly for simplicity and name recognition." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    ],
    compareSectionTitle: "Compare YouCanBook.me with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
    ],
  },

  setmore: {
    toolName: "Setmore",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.4",
    startingPrice: "Free tier; from ~$9/mo",
    bestFor: "solo practitioners and service businesses like salons, clinics, and coaches that want a free or low-cost start",
    visitUrl: "https://www.setmore.com",
    logoSrc: LOGOS.setmore,
    quickVerdict:
      "Setmore is a practical choice for service businesses and solo practitioners: a free tier gets you started, and paid plans add staff, reminders, and payments without a big jump in cost.",
    quickVerdictParagraphs: [
      "Setmore targets salons, spas, clinics, and solo professionals. You get online booking, calendar sync, and reminders; paid plans add more staff, payment collection, and integrations. The free tier is genuinely useful for one person and one calendar, which makes it easy to try before committing.",
      "We like Setmore for value. You won’t get the same level of customization as Acuity or the brand recognition of Calendly, but for straightforward appointments with optional payments and multiple staff, it covers the basics well. Recurring appointments and class booking are available so you can support members and regular clients.",
      "If you need heavy intake forms, packages, or a highly branded flow, Acuity or SimplyBook.me may fit better. If you want to minimize cost and need simple booking with room to grow, Setmore is a solid option.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.3", explanation: "Core scheduling, reminders, payments, and multi-staff. Adequate for service businesses; less flexible than Acuity for complex flows." },
      { category: "Pricing", score: "4.6", explanation: "Free tier for solo use; paid plans start around $9/month. Good value for the feature set." },
      { category: "Ease of Use", score: "4.4", explanation: "Straightforward setup and daily use. Good for non-technical service providers." },
      { category: "Support", score: "4.3", explanation: "Help center and email support. Sufficient for most small businesses." },
      { category: "Integrations", score: "4.2", explanation: "Integrates with Google Calendar, payment processors, and some third-party tools. Ecosystem is smaller than Calendly or Acuity." },
    ],
    pros: [
      "Free tier for solo use",
      "Recurring appointments and staff scheduling",
      "Payments and reminders included",
      "Good fit for salons, clinics, and coaches",
    ],
    cons: [
      "Less flexible than Acuity for complex flows",
      "Reporting and integrations are adequate but not extensive",
    ],
    bestForEditorial:
      "Setmore is best for solo practitioners and small service businesses—salons, spas, clinics, coaches, and consultants—that want to move from phone or manual booking to an online calendar without a big spend. It fits when you need one or a few staff, optional payments, and reminders, but don’t need heavy customization.",
    whoShouldAvoid:
      "Businesses that need deep intake forms, packages, or a highly customized booking experience may prefer Acuity or SimplyBook.me. Teams that prioritize brand recognition and the smoothest client experience might choose Calendly despite the higher cost.",
    pricingSummary:
      "Setmore has a free plan for solo use; paid plans start around $9/month and add more staff, advanced reminders, payments, and integrations. Pricing is competitive with other SMB scheduling tools.",
    pricingTiers:
      "The free plan typically covers one user and core booking. Paid tiers add staff seats, payment processing, removal of Setmore branding, and more integrations. Check Setmore’s site for current plan details.",
    costVsCompetitors:
      "Setmore is often cheaper than Calendly and Acuity for comparable staff counts. Similar to SimplyBook.me; choose based on interface preference and which extras (e.g. classes, packages) you need.",
    features: [],
    keyFeatures: [
      { name: "Online booking", description: "Share a booking page or embed so clients pick a time; sync with your calendar to avoid double-booking." },
      { name: "Recurring appointments", description: "Set up recurring slots for regular clients or members so they can book the same time each week or month." },
      { name: "Staff scheduling", description: "Manage multiple staff and their availability so clients can book with the right person." },
      { name: "Payments and reminders", description: "Collect payment at booking and send automated reminders to reduce no-shows." },
      { name: "Classes and services", description: "Offer classes or service types with capacity limits and optional payment." },
    ],
    integrations: ["Google Calendar", "PayPal", "Stripe", "Mailchimp", "Zoom"],
    integrationsIntro:
      "Setmore connects to the tools many service businesses already use: calendar, payments, and basic marketing so you don’t have to re-enter data.",
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Stronger brand recognition and polish; higher cost for teams.", logoSrc: LOGOS.calendly },
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms and packages for consultants and coaches.", logoSrc: LOGOS.acuity },
      { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme"), description: "More customization and industry templates at similar pricing.", logoSrc: LOGOS.simplybookme },
    ],
    faqs: [
      { q: "Is Setmore free?", a: "Setmore has a free plan that supports one user and core booking features. Paid plans add more staff, payments, and advanced features." },
      { q: "Is Setmore good for salons?", a: "Yes. Setmore is built with service businesses in mind; salons, spas, and clinics can manage staff, services, and recurring appointments." },
      { q: "Setmore vs Acuity?", a: "Setmore is cheaper and simpler, with a free tier; Acuity offers more customization, intake forms, and packages. Choose Setmore for value and simplicity, Acuity for a tailored booking flow." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
      { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    ],
    compareSectionTitle: "Compare Setmore with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
    ],
  },

  simplybookme: {
    toolName: "SimplyBook.me",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.4",
    startingPrice: "Free",
    bestFor: "salons, fitness, and local services that want custom booking forms and industry templates at a lower price",
    visitUrl: "https://simplybook.me",
    logoSrc: LOGOS.simplybookme,
    quickVerdict:
      "SimplyBook.me offers a lot of customization and industry-specific templates at a lower price than Acuity, making it a good fit for salons, fitness, and local services that want control without a big budget.",
    quickVerdictParagraphs: [
      "SimplyBook.me gives you custom booking forms, multiple staff and services, and templates aimed at salons, fitness, and other local businesses. You can tailor the booking flow and branding more than Setmore, often at a lower cost than Acuity. The tradeoff is that setup can take longer and the interface is functional rather than sleek.",
      "We like it for value and flexibility. If you’ve outgrown a basic tool but don’t want to pay Acuity-level pricing, SimplyBook.me fills the gap. Payments, reminders, and multi-staff are included so you can run a small practice or location without stitching together multiple apps.",
      "If you want the simplest possible setup or the most polished client experience, Calendly or Acuity may be better. If you’re willing to invest some configuration time and want maximum control per dollar, SimplyBook.me is worth a close look.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.5", explanation: "Custom forms, industry templates, multi-staff and multi-service. Good breadth for the price." },
      { category: "Pricing", score: "4.6", explanation: "Ongoing free plan for 1 provider. Paid Basic is listed in EUR; a USD usable amount is not published. Do not convert EUR to USD." },
      { category: "Ease of Use", score: "4.2", explanation: "More options mean more setup time. Once configured, clients get a solid experience." },
      { category: "Support", score: "4.3", explanation: "Documentation and support are adequate. Some users report a learning curve." },
      { category: "Integrations", score: "4.3", explanation: "Integrates with payment processors, calendars, and various third-party tools." },
    ],
    pros: [
      "Custom forms and industry templates",
      "Multi-staff and multi-service support",
      "Competitive pricing",
      "Good for salons, fitness, and local services",
    ],
    cons: [
      "Setup can take longer than simpler tools",
      "UI is functional but less polished than top brands",
    ],
    bestForEditorial:
      "SimplyBook.me is best for salons, fitness studios, and local service businesses that want to customize the booking experience—forms, services, and branding—without paying Acuity-level prices. It fits when you have multiple staff or services and want one place to manage availability and payments.",
    whoShouldAvoid:
      "Solo users who only need a single calendar link may find it overkill. Teams that prioritize the sleekest, most recognizable booking experience might prefer Calendly even at higher cost.",
    pricingSummary:
      "SimplyBook.me has an ongoing free plan for 1 provider. Paid Basic is listed in EUR on the official pricing page; a USD usable amount is not published. Do not convert EUR to USD.",
    pricingTiers:
      "Entry tiers cover a set number of bookings and staff; higher tiers add more capacity, custom branding, and advanced options. Check SimplyBook.me’s pricing for current limits.",
    costVsCompetitors:
      "Often cheaper than Acuity for similar customization; comparable to Setmore. You get more control than Setmore and lower cost than Acuity; the tradeoff is a steeper setup and less polish.",
    features: [],
    keyFeatures: [
      { name: "Custom booking forms", description: "Build forms and questionnaires so you collect the right information before or after booking." },
      { name: "Industry templates", description: "Templates for salons, fitness, and other industries so you can get started quickly with sensible defaults." },
      { name: "Multiple staff and services", description: "Manage many staff and service types so clients can book the right person and the right offering." },
      { name: "Payments and reminders", description: "Accept payment at booking and send automated reminders to reduce no-shows." },
      { name: "Branding", description: "Customize colors, logo, and messaging so the booking experience matches your brand." },
    ],
    integrations: ["Google Calendar", "PayPal", "Stripe", "Zoom", "Mailchimp"],
    integrationsIntro:
      "SimplyBook.me connects to calendars, payment processors, and marketing tools so bookings and payments flow into your existing stack.",
    alternatives: [
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More polished and more intake/packages; higher price.", logoSrc: LOGOS.acuity },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Simpler and with a free tier; less customization.", logoSrc: LOGOS.setmore },
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Simpler setup and stronger brand recognition; less customization.", logoSrc: LOGOS.calendly },
    ],
    faqs: [
      { q: "How much does SimplyBook.me cost?", a: "SimplyBook.me has an ongoing free plan for 1 provider. Paid Basic is listed in EUR on the official pricing page; a USD usable amount is not published." },
      { q: "Is SimplyBook.me good for salons?", a: "Yes. SimplyBook.me offers templates and features aimed at salons and similar service businesses, including multiple staff and service types." },
      { q: "SimplyBook.me vs Setmore?", a: "SimplyBook.me offers more customization and industry templates; Setmore has a free tier and is often simpler to set up. Choose SimplyBook.me for control and value, Setmore for simplicity and free entry." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    ],
    compareSectionTitle: "Compare SimplyBook.me with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
    ],
  },

  "square-appointments": {
    toolName: "Square Appointments",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.3",
    startingPrice: "Included with Square",
    bestFor: "businesses that already use Square for payments and point-of-sale and want booking in the same ecosystem",
    visitUrl: "https://squareup.com",
    logoSrc: LOGOS.square,
    quickVerdict:
      "Square Appointments makes the most sense when you already run payments and POS with Square: you get booking, reminders, and payments in one place without adding another vendor or subscription.",
    quickVerdictParagraphs: [
      "Square Appointments is part of the Square ecosystem. If you already use Square for card payments, invoicing, or point-of-sale, adding appointments keeps everything in one dashboard: book a client, collect payment, and track revenue without switching apps. The booking experience is straightforward and suitable for service businesses—salons, consultants, and local services.",
      "We like it for integration and simplicity. You’re not paying a separate scheduling subscription if you’re already on Square; you get a single place to manage schedule and payments. The tradeoff is that Square Appointments doesn’t match Acuity or Calendly for advanced features like heavy intake forms, round-robin team scheduling, or a huge integration ecosystem.",
      "If you’re not committed to Square, Calendly or Acuity may offer more flexibility and features. If you are all-in on Square and want to add booking without another tool, Square Appointments is a logical choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Core booking, reminders, and payments tied to Square. Adequate for service businesses; fewer advanced options than dedicated scheduling tools." },
      { category: "Pricing", score: "4.5", explanation: "Included or low-cost as part of Square; no separate subscription for many users." },
      { category: "Ease of Use", score: "4.4", explanation: "Simple if you already use Square. One dashboard for appointments and payments." },
      { category: "Support", score: "4.3", explanation: "Square’s support and help center cover appointments as part of the broader product." },
      { category: "Integrations", score: "4.3", explanation: "Lives inside Square so it integrates with Square, payments, and invoicing. No need for separate calendar or payment connectors within Square." },
    ],
    pros: [
      "Integrated with Square and payments",
      "No extra subscription if you already use Square",
      "Straightforward for service businesses",
      "One place for schedule and revenue",
    ],
    cons: [
      "Best if you’re committed to Square; less compelling standalone",
      "Fewer advanced scheduling features than Acuity or Calendly",
    ],
    bestForEditorial:
      "Square Appointments is best for service businesses that already use Square for payments or POS—salons, spas, consultants, and local shops. It fits when you want to add online booking without introducing a new vendor and are happy with Square’s ecosystem.",
    whoShouldAvoid:
      "Businesses that don’t use Square and don’t plan to may get more flexibility from Calendly, Acuity, or Setmore. Teams that need heavy intake forms, packages, or round-robin scheduling might find Square Appointments limited.",
    pricingSummary:
      "Square Appointments is typically included with Square point-of-sale or available as part of Square’s service plans. Pricing depends on your Square setup; many users pay no separate subscription for appointments.",
    pricingTiers:
      "Square bundles appointments with its POS and software offerings. Check Square’s current plans to see whether appointments are included in your tier or available as an add-on.",
    costVsCompetitors:
      "If you’re already on Square, the effective cost is often zero or low compared to adding Calendly or Acuity. If you’re not on Square, compare total cost of Square plus appointments versus a dedicated scheduler.",
    features: [],
    keyFeatures: [
      { name: "Online booking", description: "Clients book through a Square-hosted page or your site; appointments show in your Square dashboard." },
      { name: "Payments", description: "Collect payment at booking or at the time of service using Square’s payment tools so everything stays in one place." },
      { name: "Reminders", description: "Automated reminders to reduce no-shows and keep clients informed." },
      { name: "Square dashboard", description: "View appointments alongside sales, inventory, and other Square data in one dashboard." },
      { name: "Staff and services", description: "Set up multiple staff and service types so clients can book the right person and offering." },
    ],
    integrations: ["Square", "Square Invoices", "Square Payroll", "Google Calendar"],
    integrationsIntro:
      "Square Appointments is part of Square, so it works with Square’s payment, POS, and business tools without separate connectors.",
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "More features and integrations if you’re not tied to Square.", logoSrc: LOGOS.calendly },
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms and packages for consultants and coaches.", logoSrc: LOGOS.acuity },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and standalone scheduling for non-Square users.", logoSrc: LOGOS.setmore },
    ],
    faqs: [
      { q: "Is Square Appointments free?", a: "Square Appointments is typically included with Square’s point-of-sale or software plans. You may not pay a separate subscription for appointments if you already use Square." },
      { q: "Do I need Square to use Square Appointments?", a: "Square Appointments is designed to work with Square. If you don’t use Square for payments or POS, a standalone scheduler like Calendly or Setmore may make more sense." },
      { q: "Square Appointments vs Acuity?", a: "Square Appointments fits best when you’re already on Square and want one ecosystem. Acuity offers more customization, intake forms, and packages; choose Acuity if you need those and aren’t committed to Square." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
    ],
    compareSectionTitle: "Compare Square Appointments with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
      { label: "Field service software", href: "/field-service" },
    ],
  },

  appointy: {
    toolName: "Appointy",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.3",
    startingPrice: "Free",
    bestFor: "businesses with multiple staff or locations that need structured scheduling and industry-specific features",
    visitUrl: "https://www.appointy.com",
    logoSrc: LOGOS.appointy,
    quickVerdict:
      "Appointy is built for businesses that need to manage many staff or locations: multi-location calendars, staff scheduling, and industry-focused features suit salons, clinics, and agencies that have outgrown single-operator tools.",
    quickVerdictParagraphs: [
      "Appointy emphasizes multi-staff and multi-location scheduling. You can manage several locations and many team members from one account, with industry-specific setups for salons, fitness, and professional services. Reporting and marketing tools help you see how bookings are performing and follow up with clients.",
      "We like it for scale and structure. If you’re past the solo or two-person stage and need a clear way to assign appointments across people and places, Appointy provides that without going full enterprise. The interface and feature set can feel like a step up from Setmore or SimplyBook.me, which also means a bit more to learn.",
      "Solo freelancers may find it more than they need. If you only have one or two staff and one location, Calendly or Setmore might be simpler. If you’re growing into multiple locations or a larger team, Appointy is worth evaluating.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.4", explanation: "Multi-location, multi-staff, industry templates, and marketing tools. Good for growing service businesses." },
      { category: "Pricing", score: "4.3", explanation: "Ongoing free plan for 1 staff. Growth is $19.99/month billed annually plus $5/month per extra staff; Professional includes 5 staff." },
      { category: "Ease of Use", score: "4.2", explanation: "More structure means more setup. Suitable for teams that need the organization." },
      { category: "Support", score: "4.3", explanation: "Documentation and support available. Adequate for most businesses." },
      { category: "Integrations", score: "4.2", explanation: "Integrates with calendars, payments, and some third-party tools. Ecosystem is smaller than Calendly or Acuity." },
    ],
    pros: [
      "Multi-location and multi-staff support",
      "Industry-focused features",
      "Marketing and reminder tools",
      "Structured for growing teams",
    ],
    cons: [
      "Can be overkill for solo freelancers",
      "Learning curve for full feature set",
    ],
    bestForEditorial:
      "Appointy is best for salons, clinics, agencies, and other service businesses that have multiple staff or locations and want one system to manage availability, bookings, and follow-up. It fits when you’ve outgrown single-operator tools and need clearer structure without enterprise complexity.",
    whoShouldAvoid:
      "Solo practitioners or very small teams with one location may find Calendly or Setmore simpler and cheaper. If you need the deepest intake forms and packages, Acuity may still be a better fit.",
    pricingSummary:
      "Appointy has an ongoing free plan for 1 staff. Growth is $19.99/month billed annually ($29.99 monthly) plus $5/month per extra staff. Professional includes 5 staff.",
    pricingTiers:
      "Entry tiers cover a set number of staff and locations; higher tiers add more capacity, advanced reporting, and marketing features. Verify current plan details on Appointy’s site.",
    costVsCompetitors:
      "Roughly in line with Setmore and YouCanBook.me for team use; less than Acuity. Choose based on whether you value Appointy’s multi-location and industry focus.",
    features: [],
    keyFeatures: [
      { name: "Multi-location scheduling", description: "Manage availability and bookings across multiple locations so each place has the right calendar and staff." },
      { name: "Staff scheduling", description: "Assign appointments to the right staff and control who can take which types of bookings." },
      { name: "Industry templates", description: "Pre-built setups for salons, fitness, and professional services so you can get started with sensible defaults." },
      { name: "Marketing and reminders", description: "Send reminders and follow-up messages and use simple marketing tools to fill the schedule." },
      { name: "Reporting", description: "See booking volume, revenue, and no-show trends so you can adjust offerings and follow-up." },
    ],
    integrations: ["Google Calendar", "Outlook", "PayPal", "Stripe", "Mailchimp"],
    integrationsIntro:
      "Appointy connects to calendars, payment processors, and marketing tools so bookings and payments stay in sync with the rest of your stack.",
    alternatives: [
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Simpler and with a free tier for smaller teams.", logoSrc: LOGOS.setmore },
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms and packages for consultants and coaches.", logoSrc: LOGOS.acuity },
      { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme"), description: "More customization at a lower price for single-location businesses.", logoSrc: LOGOS.simplybookme },
    ],
    faqs: [
      { q: "Does Appointy support multiple locations?", a: "Yes. Appointy supports multiple locations so you can manage availability and staff per location from one account." },
      { q: "How much does Appointy cost?", a: "Appointy has an ongoing free plan. Growth is $19.99/month billed annually ($29.99 monthly). Check their pricing page for current tiers." },
      { q: "Is Appointy good for salons?", a: "Yes. Appointy offers industry-focused features and templates for salons and similar service businesses with multiple staff and services." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
    ],
    compareSectionTitle: "Compare Appointy with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
    ],
  },

  "zoho-bookings": {
    toolName: "Zoho Bookings",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.2",
    startingPrice: "From ~$8/mo",
    bestFor: "businesses already using Zoho CRM, Zoho Mail, or other Zoho apps who want scheduling in the same ecosystem",
    visitUrl: "https://www.zoho.com/bookings",
    logoSrc: LOGOS.zoho,
    quickVerdict:
      "Zoho Bookings fits naturally if you use Zoho CRM or other Zoho products: appointments sync with your pipeline and calendar, so you keep scheduling and follow-up in one stack.",
    quickVerdictParagraphs: [
      "Zoho Bookings is part of the Zoho suite. If you already use Zoho CRM, Zoho Mail, or other Zoho apps, adding Bookings lets you schedule appointments and have them show up in your CRM, so leads and customers get a consistent experience and you don’t switch between tools. Team scheduling, reminders, and payment options are included.",
      "We like it for Zoho users. The scheduling experience is capable—you get booking links, calendar sync, and reminders—but the standout is integration with the rest of Zoho. If you’re not in the Zoho ecosystem, Calendly or Acuity typically offer a stronger standalone experience and broader third-party integrations.",
      "If you’re evaluating scheduling from scratch and don’t use Zoho, start with Calendly or Acuity. If you’re committed to Zoho and want appointments tied to your CRM and calendar, Zoho Bookings is the logical choice.",
    ],
    ratingBreakdown: [
      { category: "Features", score: "4.2", explanation: "Core booking, team scheduling, reminders, and Zoho integration. Adequate standalone; strongest when used with Zoho CRM and other apps." },
      { category: "Pricing", score: "4.4", explanation: "Reasonable as a standalone product or as part of Zoho’s suite. Often affordable for small teams." },
      { category: "Ease of Use", score: "4.2", explanation: "Familiar if you use Zoho; straightforward booking flow. Less polished than Calendly for net-new users." },
      { category: "Support", score: "4.2", explanation: "Zoho’s support and documentation cover Bookings as part of the suite." },
      { category: "Integrations", score: "4.5", explanation: "Deep integration with Zoho CRM, Mail, and other Zoho apps. Third-party integrations are more limited than Calendly." },
    ],
    pros: [
      "Integrates with Zoho CRM and other Zoho apps",
      "Team scheduling and reminders",
      "Reasonable price within Zoho suite",
      "Appointments flow into pipeline and calendar",
    ],
    cons: [
      "Most compelling for existing Zoho users",
      "Standalone scheduling features lag Calendly or Acuity",
    ],
    bestForEditorial:
      "Zoho Bookings is best for businesses that already use Zoho CRM, Zoho Mail, or other Zoho products and want to add appointment booking without leaving the ecosystem. It fits sales and service teams that want new bookings to show up in the CRM and calendar automatically.",
    whoShouldAvoid:
      "If you don’t use Zoho and aren’t planning to, Calendly or Acuity will usually offer a better standalone scheduling experience and more integrations. Teams that need the most advanced intake forms or packages may prefer Acuity.",
    pricingSummary:
      "Zoho Bookings is available as a standalone product or as part of Zoho’s suite; pricing typically starts around $8/month. Check Zoho’s site for current plans and bundle options.",
    pricingTiers:
      "Standalone and suite plans are available. Compare based on whether you need only Bookings or the full Zoho stack; suite pricing can make Bookings very affordable when combined with CRM and other apps.",
    costVsCompetitors:
      "Competitive when you’re already paying for Zoho; as a standalone, similar to Setmore or SimplyBook.me. The main value is integration with Zoho, not price alone.",
    features: [],
    keyFeatures: [
      { name: "Booking and calendar sync", description: "Share booking links and sync with Google and Outlook; when used with Zoho, appointments can flow into Zoho Calendar and CRM." },
      { name: "Zoho CRM integration", description: "New bookings can create or update records in Zoho CRM so your pipeline stays current." },
      { name: "Team scheduling", description: "Multiple staff can have their own availability; clients can book with a specific person or any available team member." },
      { name: "Reminders and follow-up", description: "Automated reminders reduce no-shows; optional follow-up keeps the conversation going." },
      { name: "Payments", description: "Accept payment at booking when using Zoho’s payment options or connectors." },
    ],
    integrations: ["Zoho CRM", "Zoho Mail", "Zoho Calendar", "Google Calendar", "Outlook", "Zoom"],
    integrationsIntro:
      "Zoho Bookings is strongest when used with other Zoho apps: CRM, Mail, and Calendar so appointments and follow-up stay in one place.",
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Stronger standalone experience and broader integrations.", logoSrc: LOGOS.calendly },
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms and packages for consultants and coaches.", logoSrc: LOGOS.acuity },
      { name: "YouCanBook.me", href: getSchedulingReviewUrl("youcanbookme"), description: "Strong team and round-robin scheduling for non-Zoho users.", logoSrc: LOGOS.youcanbookme },
    ],
    faqs: [
      { q: "Does Zoho Bookings integrate with Zoho CRM?", a: "Yes. Zoho Bookings can integrate with Zoho CRM so new appointments create or update records and your pipeline stays in sync." },
      { q: "Do I need other Zoho apps to use Zoho Bookings?", a: "No, but Zoho Bookings is most valuable when used with Zoho CRM or other Zoho apps. Standalone, Calendly or Acuity may offer more features and integrations." },
      { q: "How much does Zoho Bookings cost?", a: "Zoho Bookings typically starts around $8/month as a standalone product; pricing may be different when bundled with other Zoho apps. Check Zoho’s site for current plans." },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
    ],
    compareSectionTitle: "Compare Zoho Bookings with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software (2026)", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Compare scheduling software", href: SCHEDULING_COMPARE_HUB },
      { label: "Scheduling guides", href: SCHEDULING_GUIDES_HUB },
      { label: "Best scheduling software by use case", href: "/scheduling/best-for" },
    ],
  },

  booksy: {
    toolName: "Booksy Biz",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.1",
    startingPrice: "$29.99/month for one user",
    bestFor:
      "solo barbers, stylists, and nail techs who want online booking and a beauty marketplace in the same subscription",
    visitUrl: "https://biz.booksy.com/",
    logoSrc: LOGOS.booksy,
    quickVerdict:
      "Booksy Biz is booking software for beauty and wellness, with a consumer marketplace attached. One user is $29.99 a month and every extra staff calendar is $20. Boost is optional and bills 30% of a new Boost client's first visit, capped at $100.",
    quickVerdictParagraphs: [
      "Booksy Biz is appointment software for barbers, hairstylists, nail technicians, and salon owners. Clients book from a profile, an Instagram or Facebook button, Google, or the Booksy consumer app. The business runs the calendar, checkout, client notes, and marketing from Booksy Biz on a phone, and the heavier tools on the web or a tablet. A general scheduler such as Calendly manages people you already know. Booksy also lists the business where people are searching for a barber or a nail tech.",
      "The US pricing page, checked in November 2026, is one subscription: $29.99 a month plus tax for one user, and $20 a month for each additional user. There is no second tier for gift cards, memberships, waitlists, or reporting. SMS marketing includes 2,000 messages a month. Confirmations and reminders are not counted against that. A 14-day trial does not ask for a card. The pricing page does not publish an unlimited-staff price. An April 2026 brief that listed $119.99 for unlimited staff does not match this page.",
      "The marketplace listing is included, and you can turn visibility off and keep the booking tools. Booksy's own pages do not agree on the audience size: the about page says 44 million users, the features page says 44 million clients, and the marketplace page says 65 million customers. Booksy also says a listing does not guarantee new clients. Boost is the paid visibility layer. It has no monthly fee. A client who books for the first time while Boost is on can trigger a one-time 30% charge on that first visit, with a $10 floor and a $100 cap. Later visits are not charged.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Booking, reminders, deposits, a waitlist, client profiles, forms, gift cards, memberships, and marketing sit in the one subscription. Inventory and shifts are documented on the web and tablet. The phone app covers the calendar, clients, checkout, and marketing.",
      },
      {
        category: "Pricing",
        score: "4.3",
        explanation:
          "One user at $29.99 with the feature list included is a clear solo price. Each extra user is $20, so a five-person team is $109.99 before tax and processing. Boost, card rates, readers, and the 1.5% fast payout are separate.",
      },
      {
        category: "Ease of Use",
        score: "4.2",
        explanation:
          "The trial starts from a registration form, with no card, and clients book themselves once services and hours are set. The phone app and the web tools are not the same product surface, so a salon owner still needs the browser for inventory and shifts.",
      },
      {
        category: "Support",
        score: "4.0",
        explanation:
          "Booksy publishes a help center for Boost, payouts, inventory, and calendar import, and the pricing page says the trial includes setup guidance. Published response times are not on that page.",
      },
      {
        category: "Integrations",
        score: "3.6",
        explanation:
          "Instagram, Facebook, and Reserve with Google are booking buttons. Google and Apple calendars come in as a file import, not a live sync. The public pages do not offer a shop-owner API key, a Zapier app, or an Albato connector.",
      },
    ],
    pros: [
      "A beauty marketplace listing is included, and visibility can be turned off without losing the booking tools",
      "One subscription covers booking, reminders, waitlists, forms, gift cards, memberships, and 2,000 marketing texts a month",
      "Card reader, Tap to Pay, and keyed payments are built in, with a free next-business-day payout",
      "Deposits, cancellation fees, and a waitlist are the no-show tools, and clients are not charged a booking fee",
      "A solo user stays at $29.99 a month, with a 14-day trial and no card required",
    ],
    cons: [
      "Each extra staff user is $20 a month, and the current pricing page has no unlimited-staff price",
      "Boost can bill 30% of a new client's first visit, with a $10 minimum and a $100 cap, and only if you leave it on",
      "Inventory and shifts are on the web and tablet, not in the phone app",
      "Google Calendar is a one-time file import, not a two-way sync, and there is no public Zapier or Albato connector",
      "The marketplace is for beauty and wellness search. A consultant or a clinic is outside the audience Booksy is built to attract",
    ],
    bestForEditorial:
      "Booksy fits a solo barber, stylist, or nail tech, and a small salon that wants clients to book without a phone tag and wants to be findable by people already searching Booksy. A one-chair shop pays $29.99 and can leave Boost off. A shop adding chairs pays $20 for each extra calendar. Wellness providers who sell appointments the same way, such as a lash or brow tech, are in the same product. A consultant, a medical office, or a team that needs live Google Calendar sync and a CRM connection should use a general scheduler.",
    whoShouldAvoid:
      "Skip Booksy if the work is not a bookable beauty or wellness service. The marketplace will not fill a consulting calendar. Skip it if the team is large and the $20 staff fee is the budget problem: five users are $109.99 a month before tax, processing, and any Boost charges. Skip it if bookings must stay in two-way sync with Google Calendar or flow into another CRM. Square Appointments is the comparison when you already take payments on Square and do not need Booksy's marketplace. Setmore and Acuity are the comparison when you want scheduling without a beauty app.",
    pricingSummary:
      "As of November 2026, Booksy's US pricing page lists $29.99 a month plus tax for one user and $20 a month for each additional user. Two users are $49.99. Five users are $109.99. Those totals are the published per-user math, and Booksy's own pricing article uses the same figures. The page does not list a flat unlimited-staff plan. The subscription is month to month and can be canceled. A 14-day trial does not require a card. Tax is extra. Payment processing, card readers, and Boost are not inside the $29.99.",
    pricingTiers:
      "There is one feature set. Booking, marketing, client tools, reports, waitlists, forms, gift cards, memberships, and no-show tools are listed as included. Marketing texts include 2,000 a month. Appointment confirmations and reminders are separate and are not metered. Gift cards and no-show charges use the standard mobile processing rate. Mobile and keyed payments are 2.69% + $0.30. The Booksy card reader is 2.49% + $0.10. Tap to Pay is 2.49% + $0.20. The Stripe Reader M2 is $53.10 plus shipping. The Stripe Reader S710 is $299 plus shipping. Next-business-day payouts are free, with some exclusions. A fast payout, in 30 minutes or less, costs 1.5% of the payout and only covers that day's Booksy-processed funds, paid to a verified debit card. Boost has no monthly fee. If a client books for the first time while Boost is on, Booksy charges 30% of that first visit, at least $10 and at most $100. A $50 haircut is a $15 charge in Booksy's own example. Tips are not included. A later visit by that client is not charged. Mark a no-show the same day or the Boost charge can still apply. Clients who book through your own profile link are how Booksy says you avoid the Boost fee while it is on. New clients who find you with Boost off are not commissioned.",
    costVsCompetitors:
      "A solo user at $29.99 is the price to set next to Square Appointments and Setmore, with processing and a reader on top if you take cards in the chair. The staff line is the part that moves: each calendar is another $20, and nothing on the current page caps that. Boost is a customer-acquisition cost, not a software cost, and it only applies to first visits Booksy attributes while the feature is on. Calendly and Acuity do not sell a beauty marketplace, and they do not bill a commission on a haircut. They also do not put the shop in front of people searching for a barber.",
    features: [],
    keyFeatures: [
      {
        name: "Online booking",
        description:
          "Clients see open times and book themselves, including from the Booksy app. Confirmations and reminders are included and are not drawn from the marketing-text allowance. The calendar can be color-coded, and appointments can be moved on the grid. You can accept or decline a request and block a client. A waitlist is included for slots that open up. Reserve with Google, an Instagram Book Now button, and a Facebook booking button are the other doors into the same calendar.",
      },
      {
        name: "Marketplace and Boost",
        description:
          "The listing is part of the subscription. Clients search for a service and a place, then open a profile with services, prices, photos, and reviews. Booksy's about page says 44 million users. The marketplace page says 65 million customers and also says new clients are not guaranteed, because discovery depends on location, demand, and the profile. You can hide the listing and keep using Booksy to book people you already have. Boost is optional extra visibility, including a recommended placement. It is free to switch on and bills only a qualifying first visit.",
      },
      {
        name: "Payments and no-shows",
        description:
          "Checkout can be a keyed or mobile charge, Tap to Pay on the phone, or a Booksy card reader. Deposits and cancellation fees are the published no-show tools, and they process at the mobile rate. They do not collect every missed appointment by themselves. A waitlist is the other tool when a slot opens. Standard payouts are the next business day. The 30-minute payout is the 1.5% option, limited to funds processed in Booksy that day.",
      },
      {
        name: "Clients, marketing, and the back office",
        description:
          "A client record holds contact details, booking history, photos, and notes. Custom forms and liability waivers are included. Gift cards and memberships are included, with processing fees on the card sale. Message blasts use the 2,000-text allowance. Inventory, including stock by location, is documented as a web and tablet tool for the owner, a manager, or a receptionist. Shifts and time off are marked as a web and tablet feature. The phone app is the calendar, clients, checkout, and marketing. Deeper reports are on the web and tablet. Booksy's feature page says the web product includes more than 16 revenue reports. A help article puts the newer report set above 20.",
      },
    ],
    integrations: [
      "Reserve with Google",
      "Instagram booking button",
      "Facebook booking button",
      "Google and Apple calendar file import",
      "Booksy card reader and Tap to Pay",
    ],
    integrationsIntro:
      "Booksy's public connections are booking doors and a calendar file, not a sync platform. Instagram and Facebook add a book button. Reserve with Google lists the business on Search and Maps. A Google or Apple calendar can be imported from an .ics file of up to 5,000 events. Imported events become walk-in appointments on the person who uploaded the file, from the start of the current month through two years ahead. That is not a live two-way sync. The US product pages do not list a Square connection. Booksy processes its own cards. Albato's published app directory does not list Booksy, and Booksy does not give a shop a self-serve API key or a Zapier app. Client data leaves through the product's own export, not through an automation connector.",
    alternatives: [
      {
        name: "Square Appointments",
        href: getSchedulingReviewUrl("square-appointments"),
        description:
          "Appointments inside Square payments, for a shop that already runs on Square and does not need Booksy's marketplace.",
        logoSrc: LOGOS.square,
      },
      {
        name: "Setmore",
        href: getSchedulingReviewUrl("setmore"),
        description:
          "A lower-priced scheduler with a free tier, for a service business that is not trying to be found in a beauty app.",
        logoSrc: LOGOS.setmore,
      },
      {
        name: "Acuity Scheduling",
        href: getSchedulingReviewUrl("acuity-scheduling"),
        description:
          "Intake forms and packages for consultants and coaches, without a barber marketplace.",
        logoSrc: LOGOS.acuity,
      },
      {
        name: "SimplyBook.me",
        href: getSchedulingReviewUrl("simplybookme"),
        description:
          "A customizable booking site for salons and local services that want the calendar more than the consumer app.",
        logoSrc: LOGOS.simplybookme,
      },
    ],
    faqs: [
      {
        q: "How much does Booksy cost?",
        a: "Booksy's US pricing page, checked in November 2026, lists $29.99 a month plus tax for one user and $20 a month for each additional user. Five users are $109.99 before tax. Processing, card readers, and Boost are extra. The page does not list an unlimited-staff price.",
      },
      {
        q: "What does Booksy Boost cost?",
        a: "Boost has no monthly fee. If a client books for the first time while Boost is on, Booksy charges 30% of that first visit, at least $10 and at most $100. A later visit is not charged. Mark a no-show the same day or the fee can still be billed. Clients who book through your own profile link are excluded, according to Booksy.",
      },
      {
        q: "Does Booksy charge for every new client?",
        a: "No. Booksy says it does not take a commission on clients who find you through your own marketing, or on Booksy when Boost is off. The 30% charge is only for a first visit Booksy attributes while Boost is on.",
      },
      {
        q: "Will Booksy's marketplace fill the book?",
        a: "Booksy says it can, and also says it is not guaranteed. Discovery depends on the city, demand, and the profile. Booksy's pages cite 44 million and 65 million for the audience, so treat either figure as the company's, not a promise of bookings. You can hide the listing and still take appointments.",
      },
      {
        q: "What are Booksy's card rates?",
        a: "Mobile and keyed payments are 2.69% + $0.30. The Booksy card reader is 2.49% + $0.10. Tap to Pay is 2.49% + $0.20. Next-business-day payouts are free. A payout in 30 minutes costs 1.5% and only covers that day's Booksy payments, sent to a verified debit card.",
      },
      {
        q: "Can I run Booksy from the phone?",
        a: "The phone app covers the calendar, clients, checkout, and marketing. Inventory is documented as web and tablet only. Shifts and the deeper reports are on the web and tablet as well.",
      },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Square Appointments vs Acuity", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
      { label: "Acuity vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
      { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    ],
    compareSectionTitle: "Compare Booksy with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Best for service businesses", href: getSchedulingBestForUrl("service-business") },
      { label: "Best for freelancers", href: getSchedulingBestForUrl("freelancers") },
      { label: "Scheduling for salons and spas", href: "/scheduling/guides/how-scheduling-software-helps-salons-and-spas" },
      { label: "How scheduling software reduces no-shows", href: "/scheduling/guides/how-scheduling-software-reduces-no-shows" },
      { label: "Online booking software", href: "/scheduling/guides/online-booking-software-explained" },
      { label: "How appointment reminders work", href: "/scheduling/guides/how-appointment-reminders-work" },
      { label: "How much scheduling software costs", href: "/scheduling/guides/how-much-scheduling-software-costs" },
      { label: "Appointment scheduling for service businesses", href: "/scheduling/guides/appointment-scheduling-for-service-businesses" },
    ],
  },

  "7shifts": {
    toolName: "7shifts",
    category: "Scheduling",
    categoryHref: SCHEDULING_HUB,
    rating: "4.2",
    startingPrice: "Free for 1 location, or from $39.99/location/mo billed annually",
    bestFor:
      "restaurants that schedule hourly staff against sales and need a time clock, labor tools, and a POS connection",
    visitUrl: "https://www.7shifts.com/",
    logoSrc: LOGOS.sevenShifts,
    quickVerdict:
      "7shifts is restaurant workforce software: schedules, a time clock, labor cost, and team chat. Comp is free for one location and 15 people. Paid plans run $44.99 to $149.99 per location each month. Payroll is a separate product, and two 7shifts pages describe its price differently.",
    quickVerdictParagraphs: [
      "7shifts is built for the restaurant schedule, not for booking a guest a table. Managers publish shifts, employees set availability and request time off, and the phone app shows the schedule. A time clock, labor cost against POS sales, tips, and tasks sit on higher plans. It does not take guest orders or keep the books. 7shifts says more than 55,000 restaurants use it. That figure is the company's.",
      "The plans page, checked in November 2026, lists four plans, priced per location, with 10% off for annual billing. Comp is free, one location, up to 15 employees: basic scheduling, availability, time off, and one-way announcements. Essentials is $44.99 a month, or $39.99 billed annually, for up to 30 employees, and adds templates, team chat, a basic time clock, and custom permissions. Pro is $89.99, or $79.99 billed annually, with unlimited employees on this page, plus labor cost and compliance tools, role wages, PTO balances, and a manager log book. Premium is $149.99, or $134.99 billed annually, and adds tip management, task lists, an hourly labor forecast, and labor recommendations. A new account gets 14 days of Pro with no card. After that, the account moves to Comp, a paid plan, or it expires.",
      "A second location is another full subscription. Franchise pricing is a quote. Payroll is not the scheduling fee. One payroll page prices 7shifts Payroll at $39.99 per location plus $6 per employee paid, added to any paid plan. Another says Payroll is included in Premium and still charges $6 per employee paid, and that the same $39.99 location fee applies on Essentials or Pro. That page also caps Pro at 60 employees, while the plans page says Pro is unlimited. Use the plans page for the scheduling price, and confirm the payroll line and the Pro headcount before you buy.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Scheduling, availability, and shift trades start on the free plan. Chat, a time clock, labor cost, tips, and tasks are plan-gated. The product is a workforce system for restaurants, not a POS.",
      },
      {
        category: "Pricing",
        score: "3.8",
        explanation:
          "Comp is free inside a 15-person, one-location limit. Paid plans are per location, from $39.99 to $134.99 a month on annual billing. Tip management, tasks, and the manager log can be add-ons. Payroll is extra, and the published payroll price is not the same on every 7shifts page.",
      },
      {
        category: "Ease of Use",
        score: "4.2",
        explanation:
          "The phone app carries the schedule, announcements, and chat on the plans that include them. The 14-day trial opens Pro without a card. POS connections are set up in the web app, and some systems need the POS vendor in the loop.",
      },
      {
        category: "Support",
        score: "4.0",
        explanation:
          "The plan comparison lists chat and live support for the first 60 days. The payroll pages say implementation and a payroll specialist are included with that product. Ongoing support after 60 days is not spelled out on the plans page.",
      },
      {
        category: "Integrations",
        score: "4.4",
        explanation:
          "Self-serve POS connections include Toast, Square, Clover, TouchBistro, Lightspeed, SpotOn, and Shift4. Silverware, CAKE, Revel, and Squirrel need the POS partner and about seven days. Toast charges its own $50 per location for integration access.",
      },
    ],
    pros: [
      "Schedules, availability, time off, shift trades, and the phone app start on the free Comp plan",
      "Labor cost and compliance tools on Pro use POS sales, so the schedule can be checked against what the store is actually doing",
      "Self-serve connections for Toast, Square, Clover, TouchBistro, Lightspeed, SpotOn, and Shift4",
      "Tip management and task lists can be bought alone or taken inside Premium",
      "A 14-day Pro trial does not ask for a card, and a paid plan is month to month unless you take an enterprise term",
    ],
    cons: [
      "Comp stops at one location and 15 employees, and it does not include team chat or a time clock",
      "Every paid plan is per location, so a second restaurant is a second subscription",
      "Payroll is not in the scheduling price, and 7shifts publishes two different payroll offers",
      "The plans page says Pro has unlimited employees. A payroll landing page still says Pro stops at 60",
      "Toast's integration access is a Toast charge of $50 per location, on top of 7shifts",
    ],
    bestForEditorial:
      "7shifts fits an independent restaurant, cafe, coffee shop, bar, quick-service counter, or full-service dining room that builds a weekly schedule around hourly roles and wants that schedule on the employee's phone. A single site with 15 or fewer people can stay on Comp if chat and a time clock are not required. A site that needs the clock, templates, and messaging is on Essentials, up to 30 people. Labor cost, overtime warnings, role wages, and PTO balances are the reason to move to Pro. Premium is the plan when tips, task lists, and the hourly forecast should be in the subscription instead of add-ons. A group or franchise should ask for the enterprise quote rather than multiplying the card price and hoping it holds.",
    whoShouldAvoid:
      "Skip 7shifts if the business is not a restaurant. The labor tools assume shifts, roles, tips, and a POS. A salon or a clinic that needs guest booking is looking at a different product. Skip it if you need a register: 7shifts does not replace Toast, Square, or Clover. Skip it if the only job is a simple staff rota and the per-location price is more than that rota is worth. And do not buy Premium assuming payroll is a settled line item until 7shifts confirms whether the $39.99 location fee is included.",
    pricingSummary:
      "As of November 2026, 7shifts prices new customers per location. Comp is free for one location and up to 15 employees. Essentials is $44.99 a month, or $39.99 a month billed annually, up to 30 employees. Pro is $89.99, or $79.99 billed annually. Premium is $149.99, or $134.99 billed annually. Annual billing is the advertised 10% discount. The plans page says these are new-customer prices and can change. Payment is by card, or ACH on request. Cancel and you are billed for the current month unless an enterprise term says otherwise. There is no published setup fee for the scheduling product.",
    pricingTiers:
      "Comp includes building and publishing a schedule, shift offers, trades, and open shifts, availability, time off, the mobile app, and one-way announcements. Essentials adds schedule templates, approval of availability changes, paid and unpaid breaks on the schedule, team chat, SMS reminders, a basic time clock on a tablet, computer, phone, or POS, punch edits, a tip-declaration prompt, and custom permissions. Pro adds labor compliance and labor cost tools, wages by role, PTO and sick balances, break tracking, overtime notices, and the manager log book. Premium adds tip management, task management, permission templates, an advanced hourly labor forecast, labor recommendations, and deeper reporting. Tip management is also $49.99 per location as an add-on, plus $1 per instant tip payout, paid by the restaurant or the employee. Task lists are $12.99 per location. The manager log book is $14.99 per location on plans that do not already include it. Payroll, on one product page, is $39.99 per location plus $6 per employee paid and can be added to any paid plan, with free onboarding. A second page says Premium includes payroll and still charges the $6, and that Essentials and Pro add payroll at $39.99 plus $6. Confirm that line. The same page lists QuickBooks as the accounting connection for payroll journals.",
    costVsCompetitors:
      "Judge 7shifts by the location count first. One small restaurant can start at $0 and pay only when it needs chat, a clock, or labor math. Two sites on Pro, billed monthly, are $179.98 before payroll, tips, or tasks. That is the published location price times two, not a negotiated enterprise rate. A guest-booking tool such as Square Appointments does not do this job. A general staff scheduler may be cheaper when you do not need POS sales in the labor budget. 7shifts is the product when the schedule and the sales should sit in one place, and the POS on your counter is one it actually connects.",
    features: [],
    keyFeatures: [
      {
        name: "Scheduling",
        description:
          "Managers build and publish a schedule. Employees offer a shift, trade, or claim an open one, and they submit availability and time off. That set is on Comp. Essentials adds templates, a manager's approval on availability changes, and paid or unpaid breaks on the schedule. The comparison also lists sections, stations, and a weather forecast as scheduling context on the advanced set. The phone app shows the published schedule, hours, and time off. A second location needs its own subscription. Comp cannot be the plan for a group.",
      },
      {
        name: "Time clock and attendance",
        description:
          "A time clock starts on Essentials: tablet, computer, phone, or the POS, with punch edits and a prompt for employees to declare tips. Pro is where role wages, PTO accruals, and break tracking sit, along with the labor-compliance tools. Those include a warning before overtime, a block on clocking in away from the restaurant, and state labor-law tools with custom attestations. Timecards are the bridge to payroll. They are not payroll. Comp has no clock. A 2026 plan notice says Comp accounts lose 7punches.",
      },
      {
        name: "Labor cost",
        description:
          "Pro is the plan that names labor cost and compliance. The idea is to set a labor target against projected sales and see scheduled labor next to sales the POS already recorded. Premium adds an hourly forecast and labor recommendations, and the comparison lists schedules that can be generated from those targets. None of this saves labor by itself. It shows the gap between the roster and the sales. POS sales have to be connected, and that connection is configured in the web app. Budgeting by department is listed with the labor tools. Confirm it is on the plan you are quoted, because the plan cards name labor cost on Pro and the hourly forecast on Premium.",
      },
      {
        name: "Chat, tips, tasks, and the team record",
        description:
          "Essentials adds individual and group chat, SMS reminders for new schedules and shift-pool requests, read receipts on announcements, and shift notes. Comp is one-way announcements only. Pro adds a record of sick days, late arrivals, and no-shows, recognition, stored documents, certification expiry, shift feedback, and a performance note over time, plus the manager log book. Premium, or the add-ons, cover tip pools and task lists. Tip management can pay tips instantly, send them to payroll, and show employees a mobile tip report. Hiring tools, including job posts and interview scheduling, are not on Comp. The comparison lists them without a plan name, so confirm the tier.",
      },
    ],
    integrations: [
      "Toast",
      "Square",
      "Clover",
      "TouchBistro",
      "Lightspeed L-Series, U-Series, and K-Series",
      "SpotOn",
      "Shift4 (POSitouch, Harbortouch, Future POS)",
      "Silverware, CAKE, Revel, and Squirrel",
      "7shifts Payroll",
      "QuickBooks (payroll journals)",
    ],
    integrationsIntro:
      "A POS connection is how 7shifts gets sales and, when you turn it on, actual labor. The help center lists a self-serve setup for Toast, Square, TouchBistro, Clover, Lightspeed, SpotOn, and the Shift4 family. Silverware, CAKE, Revel, and Squirrel start in 7shifts and finish with the POS partner, in about seven days. You map roles, import employees, and choose sales, labor, and schedule enforcement if that POS supports it. Settings live in the web app. Connecting does not rewrite the POS. Toast bills $50 per location for its own integration access, and Toast wage sync is hourly roles only. The plan comparison splits basic integrations (POS, timecards, API) from advanced ones (schedule enforcement and payroll). Confirm schedule enforcement is on your plan. Payroll can sync tips and hours. It is priced separately from the scheduling subscription, and the two payroll pages do not describe that price the same way.",
    alternatives: [
      {
        name: "Square Appointments",
        href: getSchedulingReviewUrl("square-appointments"),
        description:
          "Guest booking inside Square, for a shop that needs appointments. It is not a restaurant labor schedule.",
        logoSrc: LOGOS.square,
      },
      {
        name: "Booksy Biz",
        href: getSchedulingReviewUrl("booksy"),
        description:
          "Client booking and a marketplace for barbers and salons, not hourly restaurant labor.",
        logoSrc: LOGOS.booksy,
      },
      {
        name: "Toast",
        href: getPosReviewUrl("toast-pos"),
        description:
          "The restaurant POS. 7shifts connects to it for sales and labor. Toast still runs the register.",
        logoSrc: "/Logos/toast.png",
      },
    ],
    faqs: [
      {
        q: "How much does 7shifts cost?",
        a: "The plans page, checked in November 2026, lists Comp at $0 for one location and up to 15 employees. Essentials is $44.99 per location each month, or $39.99 billed annually, up to 30 employees. Pro is $89.99, or $79.99 annually. Premium is $149.99, or $134.99 annually. A second location is another subscription. Franchise pricing is a quote.",
      },
      {
        q: "Is there a free 7shifts plan?",
        a: "Yes. Comp is free for a single location with up to 15 employees. It includes basic scheduling, availability, time off, shift trades, the mobile app, and one-way announcements. Team chat and the time clock start on Essentials. New accounts also get 14 days of Pro with no card. If you do not pick Comp or a paid plan when the trial ends, the account expires.",
      },
      {
        q: "Does 7shifts include payroll?",
        a: "Not in the scheduling price. One payroll page lists $39.99 per location plus $6 per employee paid, added to any paid plan. Another says Payroll is included in Premium, still plus $6 per employee, and that Essentials and Pro add it at $39.99 plus $6. Confirm which offer applies to the plan you are buying.",
      },
      {
        q: "Does 7shifts work with Toast and Square?",
        a: "Yes. Both are self-serve connections, along with Clover, TouchBistro, Lightspeed, SpotOn, and Shift4. The link can bring in sales and labor. Toast charges $50 per location for Toast integration access. Schedule enforcement depends on the POS and on your 7shifts plan.",
      },
      {
        q: "Can one 7shifts account cover several restaurants?",
        a: "Each location is priced on its own. Comp is limited to one location. Groups and franchises are told to contact sales for a quote. The plans page does not publish a volume discount.",
      },
      {
        q: "Is 7shifts a restaurant POS?",
        a: "No. It schedules staff, clocks time, and, on higher plans, compares labor with POS sales. Orders, payments, and the guest check stay in the POS.",
      },
    ],
    methodology: SCHEDULING_METHODOLOGY,
    compareLinks: [
      { label: "Square Appointments vs Acuity", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
      { label: "Acuity vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
      { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    ],
    compareSectionTitle: "Compare 7shifts with other scheduling software",
    bestPayrollSoftwareHref: SCHEDULING_BEST_SOFTWARE,
    compareHubHref: SCHEDULING_COMPARE_HUB,
    compareHubLabel: "Compare scheduling software",
    bestRoundupLabel: "Best scheduling software (2026) — full roundup",
    bestForSectionTitle: "Best scheduling software for different use cases",
    bestForSectionSub: "Find scheduling tools by scenario.",
    scenarioLinks: SCHEDULING_SCENARIO_LINKS,
    guideHubHref: SCHEDULING_GUIDES_HUB,
    guideHubLabel: "Scheduling guides",
    relatedReading: [
      { label: "Scheduling software hub", href: SCHEDULING_HUB },
      { label: "Best scheduling software", href: SCHEDULING_BEST_SOFTWARE },
      { label: "Best for teams", href: getSchedulingBestForUrl("teams") },
      { label: "Scheduling for restaurants", href: "/scheduling/guides/how-scheduling-software-helps-restaurants" },
      { label: "How shift scheduling works", href: "/scheduling/guides/how-shift-scheduling-software-works" },
      { label: "Appointments vs employee scheduling", href: "/scheduling/guides/appointment-scheduling-vs-employee-scheduling" },
      { label: "How scheduling affects labor cost", href: "/scheduling/guides/how-scheduling-software-affects-labor-costs" },
      { label: "Employee scheduling laws", href: "/scheduling/guides/employee-scheduling-laws-businesses-should-know" },
      { label: "Time clocks and POS", href: "/pos/guides/employee-time-clocks-and-labor-with-pos" },
      { label: "POS software hub", href: "/pos" },
    ],
  },
};

export function getSchedulingReviewBySlug(slug: string): SchedulingReviewData | null {
  const review = reviews[slug];
  if (!review) return null;
  return {
    ...review,
    startingPrice: overlayVerifiedStartingPrice(slug, review.startingPrice, "scheduling"),
  };
}

export function getSchedulingReviewSlugs(): string[] {
  return Object.keys(reviews);
}
