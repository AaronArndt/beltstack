/**
 * Scheduling best-for page data.
 * Used by app/scheduling/best-for/[scenario]/page.tsx.
 */

import { getSchedulingReviewUrl, getSchedulingCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/scheduling", label: "Scheduling" };
const SEE_ALSO = {
  roundupLabel: "best scheduling software",
  roundupHref: "/scheduling/best-scheduling-software",
  compareLabel: "scheduling software comparisons",
  compareHref: "/scheduling/compare",
};

const LOGOS = {
  calendly: "/Logos/calendly.png",
  acuity: "/Logos/acuity.jpeg",
  youcanbookme: "/Logos/youcanbookme.jpeg",
  setmore: "/Logos/setmore.jpeg",
  simplybookme: "/Logos/simplybook.jpeg",
  square: "/Logos/square.jpeg",
  zoho: "/Logos/zoho.png",
} as const;

// ——— Freelancers ———
export const FREELANCERS_PAGE_PROPS = {
  title: "Best Scheduling Software for Freelancers (2026)",
  subtitle:
    "Compare scheduling tools built for freelancers: simple booking links, calendar sync, and reminders so you spend less time on back-and-forth and more on client work.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Freelancers need scheduling software that replaces 'when are you free?' emails with a single link. Clients pick a time, the tool syncs with your calendar and sends reminders, and you avoid double-booking and no-shows. The right tool is easy to set up, works with the calendar you already use, and doesn't cost much—or anything—for solo use.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top scheduling picks for freelancers.",
  editorialSub: "What to look for when you choose scheduling software as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "calendly",
      name: "Calendly",
      badge: "Best overall for freelancers",
      description:
        "Simple setup, widely recognized booking link, and strong calendar sync. Free tier for one event type; paid plans add more meeting types and remove branding.",
      rating: "4.7",
      startingPrice: "Free tier; from ~$10/mo",
      reviewHref: getSchedulingReviewUrl("calendly"),
      visitUrl: "https://calendly.com",
      logoSrc: LOGOS.calendly,
    },
    {
      slug: "youcanbookme",
      name: "YouCanBook.me",
      badge: "Best for freelancers who may add team booking later",
      description:
        "Straightforward calendar-based booking with buffer time and time-zone support. Competitive pricing if you later need round-robin or shared availability.",
      rating: "4.5",
      startingPrice: "From ~$10/mo",
      reviewHref: getSchedulingReviewUrl("youcanbookme"),
      visitUrl: "https://youcanbook.me",
      logoSrc: LOGOS.youcanbookme,
    },
    {
      slug: "simplybookme",
      name: "SimplyBook.me",
      badge: "Best for freelancers who want more customization",
      description:
        "Custom booking forms and industry templates at a lower price than Acuity. Good if you want more control over the booking experience without enterprise cost.",
      rating: "4.4",
      startingPrice: "From ~$8/mo",
      reviewHref: getSchedulingReviewUrl("simplybookme"),
      visitUrl: "https://simplybook.me",
      logoSrc: LOGOS.simplybookme,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, bestFor: "Simple booking", startingPrice: "Free; from ~$10/mo", standoutFeature: "Ease of use, brand recognition", reviewHref: getSchedulingReviewUrl("calendly") },
    { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, bestFor: "Solo or future team", startingPrice: "From ~$10/mo", standoutFeature: "Buffer time, team-ready", reviewHref: getSchedulingReviewUrl("youcanbookme") },
    { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, bestFor: "Customization on a budget", startingPrice: "From ~$8/mo", standoutFeature: "Custom forms, templates", reviewHref: getSchedulingReviewUrl("simplybookme") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Solo vs shared scheduling", body: "As a freelancer you usually need one calendar and one booking link. Make sure the tool syncs with Google Calendar, Outlook, or whatever you use so availability is accurate. If you might add a VA or partner later, pick a tool that supports multiple staff without a painful switch." },
    { heading: "Reminders and no-shows", body: "Automated email reminders (and optional SMS) cut no-shows and reduce last-minute reschedules. Look for customizable reminder timing and confirmation emails so clients know exactly when and how to join." },
    { heading: "Pricing and free tiers", body: "Calendly and Setmore offer free tiers for one event type or one user—often enough for freelancers. Upgrade when you need multiple meeting types, removal of vendor branding, or team features. See our best scheduling software roundup for full pricing comparison." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Calendly",
      body: "Calendly is our top pick for most freelancers because it turns “when are you free?” into one shareable scheduling link with fast setup and a booking flow many clients already trust. The free tier is enough to validate calendar sync, automated email reminders, and buffer rules before you pay for more event types or branding removal. During a trial, book yourself through the link on mobile and desktop, confirm Google or Outlook blocks time correctly, and test reschedule and cancellation emails. If you sell paid sessions later, note how you will handle deposits or intake—Calendly excels at simple one-to-one and group meetings. See our Calendly review and Calendly vs YouCanBook.me comparison.",
    },
    {
      heading: "YouCanBook.me",
      body: "YouCanBook.me gives freelancers dependable appointment scheduling with strong buffer time, time-zone handling, and room to grow into team or round-robin booking without migrating platforms. It is a practical choice when you want scheduling software pricing that stays predictable as you add a VA or subcontractor calendars. In a trial, stress-test overlapping personal and work calendars, reminder timing, and how quickly availability updates after a manual block. Compare SMS add-ons if no-shows are costly for your freelance niche. See our YouCanBook.me review.",
    },
    {
      heading: "SimplyBook.me",
      body: "SimplyBook.me suits freelancers who need more than a bare link: custom booking forms, industry templates, and a more tailored client journey at a lower cost than premium salon or clinic suites. Use a trial to map one real service with duration, intake questions, and confirmation copy so you see the full scheduling workflow end to end. Validate payment integrations if you plan to collect fees at booking, and check how reminders behave for recurring client sessions. It is ideal when customization and forms matter but Acuity-level spend does not fit yet. See our SimplyBook.me review and SimplyBook.me vs Setmore comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Calendly", href: getSchedulingReviewUrl("calendly") },
    { name: "YouCanBook.me", href: getSchedulingReviewUrl("youcanbookme") },
    { name: "Setmore", href: getSchedulingReviewUrl("setmore") },
    { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best scheduling software for freelancers", href: "/scheduling/guides/best-scheduling-software-for-freelancers" },
    { label: "How to choose scheduling software", href: "/scheduling/guides/how-to-choose-scheduling-software" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What is the easiest scheduling software for freelancers?", a: "Calendly is the easiest: share a link, set your availability, and clients book. Setmore also has a simple free tier. Both sync with Google and Outlook so you avoid double-booking." },
    { q: "Do freelancers need paid scheduling software?", a: "Many freelancers can start free with Calendly (one event type) or Setmore (one user). Upgrade when you need multiple meeting types, removal of branding, or team features." },
    { q: "When should freelancers choose Calendly vs YouCanBook.me?", a: "Choose Calendly for the simplest setup and widest client recognition. Choose YouCanBook.me if you want competitive pricing and may add team or round-robin booking later. See our Calendly vs YouCanBook.me comparison." },
  ] as BestForFaqItem[],
};

// ——— Consultants ———
export const CONSULTANTS_PAGE_PROPS = {
  title: "Best Scheduling Software for Consultants (2026)",
  subtitle:
    "Compare scheduling tools for consultants: intake forms, packages, payment at booking, and calendar sync so clients book and pay without back-and-forth.",
  useCase: "consultants",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Consultants and coaches need more than a simple calendar link. Intake forms, session packages, and payment at booking help you stay prepared and get paid upfront. The right scheduling software lets clients complete a short questionnaire, choose a package if you offer one, and pay before the session—all without leaving the booking flow.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top scheduling picks for consultants.",
  editorialSub: "What to look for when you choose scheduling software as a consultant.",
  whyThesePicksSub: "Why we chose these tools for consultants.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "calendly",
      name: "Calendly",
      badge: "Best for consultants who only need simple booking",
      description:
        "Widely recognized, easy to set up. Use when you don't need intake forms or packages and want the fastest path to a booking link.",
      rating: "4.7",
      startingPrice: "Free tier; from ~$10/mo",
      reviewHref: getSchedulingReviewUrl("calendly"),
      visitUrl: "https://calendly.com",
      logoSrc: LOGOS.calendly,
    },
    {
      slug: "acuity-scheduling",
      name: "Acuity Scheduling",
      badge: "Best for consultants who need intake forms and packages",
      description:
        "Custom intake forms, packages (e.g. five sessions), group classes, and payment at booking. Strong fit for coaches and consultants who tailor the client journey.",
      rating: "4.6",
      startingPrice: "From ~$16/mo",
      reviewHref: getSchedulingReviewUrl("acuity-scheduling"),
      visitUrl: "https://www.acuityscheduling.com",
      logoSrc: LOGOS.acuity,
    },
    {
      slug: "youcanbookme",
      name: "YouCanBook.me",
      badge: "Best for consultant teams sharing availability",
      description:
        "Team and round-robin scheduling so multiple consultants can share a booking page. Good when you have a small practice or offer group sessions.",
      rating: "4.5",
      startingPrice: "From ~$10/mo",
      reviewHref: getSchedulingReviewUrl("youcanbookme"),
      visitUrl: "https://youcanbook.me",
      logoSrc: LOGOS.youcanbookme,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, bestFor: "Simple booking", startingPrice: "Free; from ~$10/mo", standoutFeature: "Ease of use", reviewHref: getSchedulingReviewUrl("calendly") },
    { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, bestFor: "Forms & packages", startingPrice: "From ~$16/mo", standoutFeature: "Intake forms, packages, payments", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, bestFor: "Team booking", startingPrice: "From ~$10/mo", standoutFeature: "Round-robin, team availability", reviewHref: getSchedulingReviewUrl("youcanbookme") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Intake forms and packages", body: "If you need clients to answer questions before the session or sell packages (e.g. five coaching sessions), choose a tool with built-in forms and package support. Acuity Scheduling and SimplyBook.me offer this; Calendly's options are more limited." },
    { heading: "Payment at booking", body: "Collecting payment when the client books reduces no-shows and improves cash flow. Acuity and SimplyBook.me integrate payments into the flow; with Calendly you typically use a separate payment link or integration." },
    { heading: "Calendar and reminders", body: "All our picks sync with major calendars and send reminders. Ensure the tool supports your calendar (Google, Outlook, etc.) and that reminder timing is customizable." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Calendly",
      body: "Calendly is the right scheduling software when your consulting work is mostly discovery calls, office hours, or standard sessions without complex intake or packaged offerings. You get polished meeting scheduling, calendar sync, and reminders with minimal admin time—ideal for validating whether online booking alone fixes your pipeline. In a trial, run a paid or free session type through the full flow and confirm how handoffs work if you later add a scheduler or EA. Pair external payment links if you need deposits until you outgrow simple scheduling. See our Calendly review and Calendly vs Acuity comparison.",
    },
    {
      heading: "Acuity Scheduling",
      body: "Acuity Scheduling is built for consultants and coaches who need intake forms, multi-session packages, group offerings, and often payment at booking inside one scheduling flow. It reduces back-and-forth before the call and helps you qualify leads with structured questions about goals, budget, or prerequisites. During a trial, build a real package, attach a short intake form, and process a test payment through your chosen processor to confirm taxes, receipts, and refund behavior. Exercise reminder and cancellation policies so clients know how rescheduling affects retainers or prepayment. See our Acuity Scheduling review and Calendly vs Acuity comparison.",
    },
    {
      heading: "YouCanBook.me",
      body: "YouCanBook.me fits consulting practices where several advisors share one public booking page or you want round-robin assignment across a small team. Buffer rules and per-person calendars help you avoid double-booking when everyone maintains their own Outlook or Google schedule. Use a trial to simulate two consultants with different services and verify that the right person gets notified and that team reporting meets your needs. Check how multi-location or timezone clients experience the page if you serve regions globally. See our YouCanBook.me review.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Calendly", href: getSchedulingReviewUrl("calendly") },
    { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling") },
    { name: "YouCanBook.me", href: getSchedulingReviewUrl("youcanbookme") },
    { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Best scheduling software for consultants", href: "/scheduling/guides/best-scheduling-software-for-consultants" },
    { label: "How to choose scheduling software", href: "/scheduling/guides/how-to-choose-scheduling-software" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What scheduling software works best for consultants?", a: "Acuity Scheduling is often the best when you need intake forms, packages, and payment at booking. Calendly is best when you only need simple one-on-one or group meeting booking." },
    { q: "Can consultants collect payments through scheduling tools?", a: "Yes. Acuity Scheduling and SimplyBook.me let you collect payment at booking (e.g. via Stripe or PayPal). Calendly typically requires a separate payment integration or link." },
    { q: "When should consultants choose Acuity over Calendly?", a: "Choose Acuity when you need clients to complete intake forms, buy packages, or pay at booking. Choose Calendly when you only need a simple 'pick a time' link. See our Calendly vs Acuity Scheduling comparison." },
  ] as BestForFaqItem[],
};

// ——— Small business ———
export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Scheduling Software for Small Business (2026)",
  subtitle:
    "Compare scheduling tools for small businesses: free tiers, team features, and when to upgrade so one or a few staff can manage appointments without overpaying.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses often start with one person handling appointments and grow to two or more. Scheduling software should support that: a free or low-cost tier for solo use, and a clear upgrade path when you add staff or need more meeting types, reminders, or payments. The right tool keeps booking simple without locking you into a vendor that doesn't scale.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top scheduling picks for small businesses.",
  editorialSub: "What to look for when you choose scheduling software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "setmore",
      name: "Setmore",
      badge: "Best for small businesses that want a free start",
      description:
        "Free tier for one user; paid plans add staff, payments, and reminders. Popular with salons, clinics, and local service businesses.",
      rating: "4.4",
      startingPrice: "Free tier; from ~$9/mo",
      reviewHref: getSchedulingReviewUrl("setmore"),
      visitUrl: "https://www.setmore.com",
      logoSrc: LOGOS.setmore,
    },
    {
      slug: "simplybookme",
      name: "SimplyBook.me",
      badge: "Best for small businesses that want customization",
      description:
        "Custom forms and industry templates at a lower price than Acuity. Good for small teams that need more control over the booking experience.",
      rating: "4.4",
      startingPrice: "From ~$8/mo",
      reviewHref: getSchedulingReviewUrl("simplybookme"),
      visitUrl: "https://simplybook.me",
      logoSrc: LOGOS.simplybookme,
    },
    {
      slug: "square-appointments",
      name: "Square Appointments",
      badge: "Best for small businesses already using Square",
      description:
        "Booking built into Square so schedule and payments stay in one place. No extra subscription if you already use Square for POS or invoicing.",
      rating: "4.3",
      startingPrice: "Included with Square",
      reviewHref: getSchedulingReviewUrl("square-appointments"),
      visitUrl: "https://squareup.com",
      logoSrc: LOGOS.square,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, bestFor: "Free start", startingPrice: "Free; from ~$9/mo", standoutFeature: "Free tier, recurring appointments", reviewHref: getSchedulingReviewUrl("setmore") },
    { slug: "simplybookme", name: "SimplyBook.me", logoSrc: LOGOS.simplybookme, bestFor: "Customization", startingPrice: "From ~$8/mo", standoutFeature: "Custom forms, templates", reviewHref: getSchedulingReviewUrl("simplybookme") },
    { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, bestFor: "Square users", startingPrice: "Included with Square", standoutFeature: "One place for booking + payments", reviewHref: getSchedulingReviewUrl("square-appointments") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Free tiers and when to upgrade", body: "Setmore and Calendly offer free tiers that work for one user or one event type. Upgrade when you add staff, need multiple meeting types, or want to remove vendor branding. Model cost at your current size and 12–18 months out." },
    { heading: "Team size and shared scheduling", body: "If more than one person takes bookings, look for round-robin or per-person availability. YouCanBook.me and Calendly (paid) support this. Setmore and SimplyBook.me support multiple staff for service businesses." },
    { heading: "Payments and integrations", body: "If you take payment at booking, ensure the tool supports your processor. Square Appointments fits when you already use Square; Setmore and SimplyBook.me integrate with Stripe and PayPal. Check integrations with your CRM or invoicing tool if you use one." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Setmore",
      body: "Setmore is our top pick for small businesses that want appointment scheduling with a credible free tier, then a clear path to multiple staff, recurring visits, and customer reminders as you grow. It fits salons, clinics, coaches, and local shops that need service-based scheduling more than enterprise workflow engines. In a trial, add two staff members, create services with different durations, and send yourself SMS and email reminders to confirm carrier behavior and timing. If you take cards at booking, test one paid appointment end to end including refunds. See our Setmore review and Acuity vs Setmore comparison.",
    },
    {
      heading: "SimplyBook.me",
      body: "SimplyBook.me gives small teams customizable booking pages, forms, and templates without jumping straight to the highest-priced scheduling platforms. It is a strong middle ground when you outgrow a basic link but still need to control monthly software spend. During evaluation, clone your real service menu, attach intake or waiver fields if you use them, and confirm how the client portal looks on phones. Validate whether reporting on bookings and no-shows is enough for your front desk. See our SimplyBook.me review and SimplyBook.me vs Setmore comparison.",
    },
    {
      heading: "Square Appointments",
      body: "Square Appointments makes sense when your small business already runs on Square for POS, invoices, or card readers and you want scheduling, payments, and payouts in one familiar ecosystem. Clients book online while you keep reconciliation simple for the owner or bookkeeper. In a trial, book a test service, take a payment, and confirm how deposits, no-show fees, and customer notifications appear on receipts. If you add staff later, verify per-provider calendars and permission levels match how your shop actually operates. See our Square Appointments review and Square vs Acuity comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Setmore", href: getSchedulingReviewUrl("setmore") },
    { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme") },
    { name: "Square Appointments", href: getSchedulingReviewUrl("square-appointments") },
    { name: "Calendly", href: getSchedulingReviewUrl("calendly") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Scheduling tools for small business", href: "/scheduling/guides/scheduling-tools-for-small-business" },
    { label: "How to choose scheduling software", href: "/scheduling/guides/how-to-choose-scheduling-software" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What is the best free scheduling software for small business?", a: "Setmore and Calendly offer free tiers. Setmore is popular with service businesses (salons, clinics); Calendly is widely recognized. Upgrade when you need multiple staff or more meeting types." },
    { q: "When should a small business upgrade from free scheduling software?", a: "Upgrade when you need multiple staff, more meeting types, removal of vendor branding, or features like intake forms and packages. Compare paid plans in our best scheduling software roundup." },
    { q: "Do small businesses need team scheduling?", a: "If more than one person takes bookings, look for round-robin or collective availability. YouCanBook.me and Calendly (paid) support this; Setmore and SimplyBook.me support multiple staff for service businesses." },
  ] as BestForFaqItem[],
};

// ——— Service business ———
export const SERVICE_BUSINESS_PAGE_PROPS = {
  title: "Best Scheduling Software for Service Businesses (2026)",
  subtitle:
    "Compare scheduling tools for salons, clinics, and appointment-based service businesses: staff scheduling, recurring appointments, payments, and reminders.",
  useCase: "service-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Service businesses—salons, spas, clinics, fitness studios, and local providers—need scheduling that supports multiple staff, multiple services, recurring appointments, and often payment at booking or on arrival. The right tool lets clients book the right person and the right offering, sends reminders to cut no-shows, and can collect payment so you're not chasing money after the appointment.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top scheduling picks for service businesses.",
  editorialSub: "What to look for when you choose scheduling software for a service business.",
  whyThesePicksSub: "Why we chose these tools for service businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "square-appointments",
      name: "Square Appointments",
      badge: "Best for service businesses already using Square",
      description:
        "Booking and payments in one Square dashboard. No extra subscription if you already use Square for POS or invoicing.",
      rating: "4.3",
      startingPrice: "Included with Square",
      reviewHref: getSchedulingReviewUrl("square-appointments"),
      visitUrl: "https://squareup.com",
      logoSrc: LOGOS.square,
    },
    {
      slug: "acuity-scheduling",
      name: "Acuity Scheduling",
      badge: "Best for service businesses that need intake forms and packages",
      description:
        "Intake forms, packages, group classes, and payment at booking. Strong for consultants, coaches, and service providers who tailor the client journey.",
      rating: "4.6",
      startingPrice: "From ~$16/mo",
      reviewHref: getSchedulingReviewUrl("acuity-scheduling"),
      visitUrl: "https://www.acuityscheduling.com",
      logoSrc: LOGOS.acuity,
    },
    {
      slug: "setmore",
      name: "Setmore",
      badge: "Best for service businesses that want a free or low-cost start",
      description:
        "Free tier for one user; recurring appointments, staff scheduling, and payments on paid plans. Popular with salons, clinics, and coaches.",
      rating: "4.4",
      startingPrice: "Free tier; from ~$9/mo",
      reviewHref: getSchedulingReviewUrl("setmore"),
      visitUrl: "https://www.setmore.com",
      logoSrc: LOGOS.setmore,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "square-appointments", name: "Square Appointments", logoSrc: LOGOS.square, bestFor: "Square users", startingPrice: "Included with Square", standoutFeature: "Booking + payments in one place", reviewHref: getSchedulingReviewUrl("square-appointments") },
    { slug: "acuity-scheduling", name: "Acuity Scheduling", logoSrc: LOGOS.acuity, bestFor: "Forms & packages", startingPrice: "From ~$16/mo", standoutFeature: "Intake forms, packages, payments", reviewHref: getSchedulingReviewUrl("acuity-scheduling") },
    { slug: "setmore", name: "Setmore", logoSrc: LOGOS.setmore, bestFor: "Free start & value", startingPrice: "Free; from ~$9/mo", standoutFeature: "Recurring, staff, reminders", reviewHref: getSchedulingReviewUrl("setmore") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Staff and services", body: "You need multiple staff and service types so clients can book the right person and the right offering (e.g. haircut vs color, consultation vs follow-up). Setmore, SimplyBook.me, and Acuity support this; Square Appointments does as well when you're in the Square ecosystem." },
    { heading: "Recurring appointments and reminders", body: "Recurring slots help regular clients rebook the same time each week or month. Automated reminders (email and optionally SMS) cut no-shows. All our picks support reminders; Setmore and SimplyBook.me handle recurring appointments well." },
    { heading: "Payment collection", body: "Many service businesses take payment at booking or on arrival. Square Appointments keeps everything in Square; Setmore and SimplyBook.me integrate with Stripe and PayPal. Acuity has built-in payment options. Choose based on whether you're already on Square or need a standalone scheduler." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Square Appointments",
      body: "Square Appointments is ideal for appointment-based service businesses already standardized on Square terminals, invoicing, or e-commerce, because online booking stays tied to the same payment and customer records. You reduce duplicate entry for the front desk and simplify end-of-day reconciliation when deposits or retail upsells are part of the visit. During a trial, configure multiple staff and services, then run a full booking with card-on-file or checkout to see how refunds and receipts work. Confirm reminder templates match your cancellation policy for salons, spas, and clinics. See our Square Appointments review and Square vs Acuity comparison.",
    },
    {
      heading: "Acuity Scheduling",
      body: "Acuity Scheduling shines when your service business sells packages, classes, memberships, or needs detailed intake before the first appointment—common for med-adjacent, coaching, and high-touch providers. The scheduling software can carry deposits, waivers, and customized confirmation emails so clients arrive prepared. In a trial, build one package with a form attached and walk through payment-at-booking to validate your processor and tax settings. Stress-test group class capacity and waitlists if those drive recurring revenue. See our Acuity review and Acuity vs Setmore comparison.",
    },
    {
      heading: "Setmore",
      body: "Setmore offers service businesses an affordable on-ramp to multi-staff appointment scheduling, recurring bookings, and automated reminders without a heavy implementation. Growing shops often start here when phone tag and spreadsheets are the main pain. Use a trial to model your real weekly recurring clients, optional SMS reminders, and per-technician availability. If you need intake-heavy clinical flows later, compare whether native forms meet your compliance needs or whether Acuity is a better step up. See our Setmore review and SimplyBook.me vs Setmore comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Square Appointments", href: getSchedulingReviewUrl("square-appointments") },
    { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling") },
    { name: "Setmore", href: getSchedulingReviewUrl("setmore") },
    { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Square Appointments vs Acuity Scheduling", href: getSchedulingCompareUrl("square-appointments-vs-acuity-scheduling") },
    { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Appointment scheduling for service businesses", href: "/scheduling/guides/appointment-scheduling-for-service-businesses" },
    { label: "How to choose scheduling software", href: "/scheduling/guides/how-to-choose-scheduling-software" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What scheduling software works for appointment-based service businesses?", a: "Setmore, SimplyBook.me, Acuity Scheduling, and Square Appointments all support multiple staff, services, and payments. Setmore and SimplyBook.me are popular with salons and clinics; Square Appointments fits businesses already on Square." },
    { q: "Do scheduling tools support customer reminders?", a: "Yes. All the tools we recommend send automated email reminders; many support SMS. Reminders reduce no-shows and keep clients informed. Configure timing (e.g. 24 hours before) in the tool's settings." },
    { q: "Should service businesses use Square Appointments or a standalone scheduler?", a: "Use Square Appointments if you already use Square for POS or payments—booking and revenue stay in one place. Use a standalone tool like Setmore or Acuity if you're not on Square or need more customization (e.g. intake forms, packages) than Square offers." },
  ] as BestForFaqItem[],
};

// ——— Teams ———
export const TEAMS_PAGE_PROPS = {
  title: "Best Scheduling Software for Teams (2026)",
  subtitle:
    "Compare scheduling tools for teams: round-robin booking, collective availability, buffer time, and team-friendly pricing so multiple people can take appointments without chaos.",
  useCase: "teams",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "When more than one person takes bookings, you need scheduling software that supports team availability, round-robin (clients book with any available member), or both. The right tool lets you set buffer time between appointments, show collective or per-person availability, and scale pricing without paying per-seat surprises. Sales, support, and consulting teams all benefit from a single booking experience that routes to the right person.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top scheduling picks for teams.",
  editorialSub: "What to look for when you choose scheduling software for a team.",
  whyThesePicksSub: "Why we chose these tools for teams.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "calendly",
      name: "Calendly",
      badge: "Best for teams that want brand recognition and simplicity",
      description:
        "Team scheduling and round-robin on paid plans. Widely recognized booking experience; good when you want a polished, easy-to-adopt tool.",
      rating: "4.7",
      startingPrice: "Free tier; from ~$10/mo",
      reviewHref: getSchedulingReviewUrl("calendly"),
      visitUrl: "https://calendly.com",
      logoSrc: LOGOS.calendly,
    },
    {
      slug: "youcanbookme",
      name: "YouCanBook.me",
      badge: "Best for teams that want round-robin at competitive pricing",
      description:
        "Round-robin and team availability built in. Often costs less than Calendly for comparable team features; good for support and sales teams.",
      rating: "4.5",
      startingPrice: "From ~$10/mo",
      reviewHref: getSchedulingReviewUrl("youcanbookme"),
      visitUrl: "https://youcanbook.me",
      logoSrc: LOGOS.youcanbookme,
    },
    {
      slug: "zoho-bookings",
      name: "Zoho Bookings",
      badge: "Best for teams already using Zoho",
      description:
        "Scheduling that syncs with Zoho CRM and calendar. Appointments flow into your pipeline; good when you want one stack for scheduling and CRM.",
      rating: "4.2",
      startingPrice: "From ~$8/mo",
      reviewHref: getSchedulingReviewUrl("zoho-bookings"),
      visitUrl: "https://www.zoho.com/bookings",
      logoSrc: LOGOS.zoho,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    { slug: "calendly", name: "Calendly", logoSrc: LOGOS.calendly, bestFor: "Brand recognition", startingPrice: "Free; from ~$10/mo", standoutFeature: "Team plans, polish", reviewHref: getSchedulingReviewUrl("calendly") },
    { slug: "youcanbookme", name: "YouCanBook.me", logoSrc: LOGOS.youcanbookme, bestFor: "Team value", startingPrice: "From ~$10/mo", standoutFeature: "Round-robin, buffer time", reviewHref: getSchedulingReviewUrl("youcanbookme") },
    { slug: "zoho-bookings", name: "Zoho Bookings", logoSrc: LOGOS.zoho, bestFor: "Zoho ecosystem", startingPrice: "From ~$8/mo", standoutFeature: "CRM sync, team scheduling", reviewHref: getSchedulingReviewUrl("zoho-bookings") },
  ] as BestForTableRow[],

  editorialGuidance: [
    { heading: "Round-robin vs per-person booking", body: "Round-robin lets clients book with 'any available team member' so work is distributed evenly. Per-person booking lets them choose a specific person. Most tools support both. YouCanBook.me and Calendly (team plans) handle round-robin well." },
    { heading: "Buffer time and availability", body: "Buffer time between appointments prevents back-to-back bookings. Ensure the tool supports buffer time and that availability updates in real time from each team member's calendar. YouCanBook.me and Calendly both support this." },
    { heading: "Pricing and integrations", body: "Team plans are usually priced per user or per booking type. YouCanBook.me often costs less for comparable team features than Calendly. If you use Zoho CRM, Zoho Bookings keeps appointments in your pipeline. Check integrations with your CRM and video tools." },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Calendly",
      body: "Calendly is a strong team scheduling choice when adoption and external credibility matter—sales, CS, and recruiting teams often see higher show rates when the link looks familiar. Paid tiers unlock collective availability, round-robin routing, and admin controls so managers can standardize meeting types and branding. In a trial, add several users, test round-robin versus collective rules, and confirm calendar conflicts resolve the way your SLA expects. Integrate your CRM or video tool if handoffs to opportunities or recordings are part of the workflow. See our Calendly review and Calendly vs YouCanBook.me comparison.",
    },
    {
      heading: "YouCanBook.me",
      body: "YouCanBook.me is purpose-built for team scheduling: round-robin distribution, buffer time between calls, and flexible collective availability often at a lower total cost than comparable enterprise meeting tiers. It fits support pods, SDR teams, and consultancies that need fair load balancing without a long rollout. During evaluation, simulate high-volume booking with buffers and verify notification routing to the correct rep. If you charge for consultations, test any payment hooks or external checkout you plan to pair with the scheduler. See our YouCanBook.me review.",
    },
    {
      heading: "Zoho Bookings",
      body: "Zoho Bookings is the natural scheduling software pick when your organization already lives in Zoho CRM, Zoho Mail, or Zoho One and wants appointments to create or update records automatically. You reduce swivel-chair work between marketing, sales, and support calendars. In a trial, confirm how booked meetings map to leads or deals, which fields sync, and whether multi-staff resources behave correctly for your regions. Validate reminder templates and cancellation policies against your compliance guidelines before go-live. See our Zoho Bookings review.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Calendly", href: getSchedulingReviewUrl("calendly") },
    { name: "YouCanBook.me", href: getSchedulingReviewUrl("youcanbookme") },
    { name: "Zoho Bookings", href: getSchedulingReviewUrl("zoho-bookings") },
    { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
    { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Scheduling software for teams", href: "/scheduling/guides/scheduling-software-for-teams" },
    { label: "How to choose scheduling software", href: "/scheduling/guides/how-to-choose-scheduling-software" },
  ] as BestForGuideLink[],

  faqItems: [
    { q: "What is the best scheduling software for teams?", a: "YouCanBook.me and Calendly are both strong. YouCanBook.me often costs less for team and round-robin features; Calendly has stronger brand recognition. Zoho Bookings fits teams already using Zoho CRM. See our Calendly vs YouCanBook.me comparison." },
    { q: "Do teams need round-robin scheduling?", a: "Round-robin is useful when clients don't need to choose a specific person—e.g. support or sales. It distributes appointments evenly. YouCanBook.me and Calendly (team plans) support round-robin." },
    { q: "When should teams choose Zoho Bookings instead of Calendly?", a: "Choose Zoho Bookings when you already use Zoho CRM or other Zoho apps and want appointments to sync with your pipeline. Choose Calendly when you want a standalone scheduler with strong brand recognition and don't need Zoho integration." },
  ] as BestForFaqItem[],
};
