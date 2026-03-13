import { getSchedulingReviewUrl, getSchedulingBestForUrl, getSchedulingCompareUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getSchedulingCompareUrlFromSlug(slug: string): string {
  return `/scheduling/compare/${slug}`;
}

/** Product refs for scheduling comparisons — reuse for consistent review links and logos */
const P = {
  calendly: {
    name: "Calendly",
    slug: "calendly",
    reviewHref: getSchedulingReviewUrl("calendly"),
    logoSrc: "/Logos/calendly.png",
    visitUrl: "https://calendly.com",
    bestForSummary: "Best overall for many solo users and teams; simple and widely adopted.",
    rating: "4.7",
    startingPrice: "Free tier; from ~$10/mo",
  },
  "acuity-scheduling": {
    name: "Acuity Scheduling",
    slug: "acuity-scheduling",
    reviewHref: getSchedulingReviewUrl("acuity-scheduling"),
    logoSrc: "/Logos/acuity.jpeg",
    visitUrl: "https://www.acuityscheduling.com",
    bestForSummary: "Best for flexibility and more customizable booking workflows; strong for consultants and coaches.",
    rating: "4.6",
    startingPrice: "From ~$16/mo",
  },
  youcanbookme: {
    name: "YouCanBook.me",
    slug: "youcanbookme",
    reviewHref: getSchedulingReviewUrl("youcanbookme"),
    logoSrc: "/Logos/youcanbookme.jpeg",
    visitUrl: "https://youcanbook.me",
    bestForSummary: "Good for teams and straightforward calendar-based booking; round-robin and team availability.",
    rating: "4.5",
    startingPrice: "From ~$10/mo",
  },
  setmore: {
    name: "Setmore",
    slug: "setmore",
    reviewHref: getSchedulingReviewUrl("setmore"),
    logoSrc: "/Logos/setmore.jpeg",
    visitUrl: "https://www.setmore.com",
    bestForSummary: "Strong value option; good for service businesses needing booking plus basic business features.",
    rating: "4.4",
    startingPrice: "Free tier; from ~$9/mo",
  },
  simplybookme: {
    name: "SimplyBook.me",
    slug: "simplybookme",
    reviewHref: getSchedulingReviewUrl("simplybookme"),
    logoSrc: "/Logos/simplybook.jpeg",
    visitUrl: "https://simplybook.me",
    bestForSummary: "Strong for customization and business-specific booking flows; good for appointment-heavy businesses.",
    rating: "4.4",
    startingPrice: "From ~$8/mo",
  },
  "square-appointments": {
    name: "Square Appointments",
    slug: "square-appointments",
    reviewHref: getSchedulingReviewUrl("square-appointments"),
    logoSrc: "/Logos/square.jpeg",
    visitUrl: "https://squareup.com",
    bestForSummary: "Strong fit for businesses already using Square; payments + booking in one ecosystem.",
    rating: "4.3",
    startingPrice: "Included with Square",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getSchedulingBestForUrl("freelancers") },
  { label: "Best for small business", href: getSchedulingBestForUrl("small-business") },
  { label: "Best for consultants", href: getSchedulingBestForUrl("consultants") },
  { label: "Best for service business", href: getSchedulingBestForUrl("service-business") },
  { label: "Best for teams", href: getSchedulingBestForUrl("teams") },
];

function buildComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  content: Omit<ComparisonTemplateProps, "productA" | "productB" | "categoryHref" | "categoryLabel">
): [string, ComparisonTemplateProps] {
  return [
    slug,
    {
      ...content,
      productA: P[productAKey],
      productB: P[productBKey],
      categoryHref: "/scheduling",
      categoryLabel: "Scheduling",
    },
  ];
}

const BASE_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  { feature: "Calendar sync", productA: "Google, Outlook, Apple", productB: "Google, Outlook, Apple", supportA: "supported", supportB: "supported" },
  { feature: "Booking link / embed", productA: "Shareable link and embed", productB: "Shareable link and embed", supportA: "supported", supportB: "supported" },
  { feature: "Reminders & notifications", productA: "Email and optional SMS", productB: "Email and optional SMS", supportA: "supported", supportB: "supported" },
  { feature: "Team / multi-staff", productA: "Team plans", productB: "Multi-staff support", supportA: "supported", supportB: "supported" },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // Calendly vs Acuity Scheduling
  buildComparison("calendly-vs-acuity-scheduling", "calendly", "acuity-scheduling", {
    summaryParagraph:
      "Calendly and Acuity Scheduling are two of the most popular scheduling tools. Calendly is known for simplicity and wide adoption; Acuity offers more customization, intake forms, and packages for consultants and coaches. Both sync with major calendars and support team scheduling—the main difference is how much you want to tailor the booking experience.",
    quickRecommendationA:
      "Choose Calendly if you want the simplest setup and a booking experience clients already recognize. Best for solo professionals and teams that need reliable scheduling without heavy customization.",
    quickRecommendationB:
      "Choose Acuity Scheduling if you need intake forms, packages, group classes, or payment at booking. Best for consultants, coaches, and service providers who want a highly customizable flow.",
    quickVerdictParagraphs: [
      "Calendly is our default recommendation for most people who need scheduling software. It’s easy to set up, works with Google and Outlook, and lets clients book without email back-and-forth. The free tier is useful for one event type; paid plans add team scheduling, more meeting types, and integrations. Consultants, freelancers, and small teams use it to cut no-shows and free up admin time.",
      "Acuity Scheduling goes further for practitioners who need more than a calendar link. Intake forms, packages (e.g. five sessions), group classes, and payment collection are built in. You can tailor the booking flow and branding without coding. The tradeoff is higher pricing and a busier interface than Calendly.",
      "If you only need 'pick a time' and don’t care about forms or packages, Calendly is usually the better fit. If you want one place to collect client info, sell packages, and get paid at booking, Acuity is the stronger choice.",
    ],
    decisionGuideA: [
      "You want the fastest setup and a booking experience that feels familiar to clients.",
      "You’re okay with minimal customization and don’t need intake forms or packages.",
      "You value brand recognition and a large integration ecosystem.",
    ],
    decisionGuideB: [
      "You need clients to complete intake forms or questionnaires before or after booking.",
      "You sell packages (e.g. session bundles) or group classes and want that built into the flow.",
      "You want strong control over branding, emails, and the booking experience.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.8", productB: "4.4" },
      { category: "Customization & forms", productA: "4.0", productB: "4.7" },
      { category: "Pricing & value", productA: "4.5", productB: "4.2" },
      { category: "Integrations", productA: "4.6", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Intake forms / questionnaires", productA: "Limited", productB: "Full custom forms", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Packages & memberships", productA: "Not built-in", productB: "Packages and group classes", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Payment at booking", productA: "Via integrations", productB: "Built-in (PayPal, Stripe)", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Brand recognition", productA: "Widely recognized", productB: "Less known", supportA: "supported", supportB: "supported", stronger: "A" },
    ],
    pricingComparison:
      "Calendly offers a free plan for one event type; paid plans start around $10/month per user and add team scheduling and more event types. Acuity has no free plan; pricing typically starts around $16/month and scales with staff, locations, and features like intake forms and packages. For solo users who don’t need forms or packages, Calendly is often cheaper. For consultants and coaches who use Acuity’s full feature set, the higher price is justified.",
    prosConsA: {
      pros: [
        "Simple setup and widely recognized booking experience.",
        "Strong calendar sync and reminder automation.",
        "Free tier and clear upgrade path for teams.",
      ],
      cons: [
        "Advanced customization and intake forms are lighter than Acuity.",
        "Team and round-robin features on paid tiers only.",
      ],
    },
    prosConsB: {
      pros: [
        "Intake forms and packages out of the box.",
        "Strong for consultants, coaches, and service businesses.",
        "Payments and flexibility without coding.",
      ],
      cons: [
        "Pricing is higher than some alternatives.",
        "Interface can feel busy for very simple use cases.",
      ],
    },
    bestFor: [
      { heading: "Best for simple, fast scheduling", body: "Calendly is best if you want to share a link and let clients pick a time with minimal setup and no need for forms or packages." },
      { heading: "Best for customizable booking flows", body: "Acuity is best if you need intake forms, packages, group classes, or payment at booking and want one tool to run the full flow." },
    ],
    alternatives: [
      { name: "YouCanBook.me", href: getSchedulingReviewUrl("youcanbookme"), description: "Strong team and round-robin scheduling at competitive pricing." },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and service-business focus for salons and solo practitioners." },
    ],
    faqs: [
      { q: "Is Calendly or Acuity better for consultants?", a: "Acuity is usually better for consultants who need intake forms and packages. Calendly is better if you only need simple one-on-one or group meeting booking." },
      { q: "Which is cheaper: Calendly or Acuity?", a: "Calendly has a free tier and often lower entry cost. Acuity starts around $16/month with no free plan. Compare based on whether you need Acuity’s forms and packages." },
    ],
    sidebarWinners: [
      { label: "Winner for simplicity & adoption", winner: "A" },
      { label: "Winner for customization & forms", winner: "B" },
    ],
    moreComparisons: [
      { label: "Calendly vs YouCanBook.me", href: getSchedulingCompareUrl("calendly-vs-youcanbookme") },
      { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best overall for many users", winner: "A", reason: "Calendly is simpler to set up and widely recognized." },
      { label: "Best for forms & packages", winner: "B", reason: "Acuity offers intake forms and packages built in." },
    ],
  }),

  // Calendly vs YouCanBook.me
  buildComparison("calendly-vs-youcanbookme", "calendly", "youcanbookme", {
    summaryParagraph:
      "Calendly and YouCanBook.me both support team scheduling and calendar sync. Calendly has a larger brand footprint and is often the default choice for solo professionals; YouCanBook.me is strong for round-robin and team availability and often costs less for multi-person booking. Both integrate with Google and Outlook.",
    quickRecommendationA:
      "Choose Calendly if you want the most recognizable booking experience and the simplest setup for solo or light team use.",
    quickRecommendationB:
      "Choose YouCanBook.me if you need round-robin or team scheduling and want competitive pricing without sacrificing capability.",
    quickVerdictParagraphs: [
      "Calendly is the name most clients already know. You get a polished booking link, calendar sync, and reminders with minimal configuration. Team scheduling and more event types live on paid tiers, so cost can add up as you add people.",
      "YouCanBook.me is built for teams from the start. Round-robin booking, collective availability, and buffer time are core features. Pricing is often more favorable when you have several people taking bookings. The interface is functional rather than flashy.",
      "If you’re solo or have a small team and value brand recognition, Calendly is the safer default. If you have multiple staff and want team scheduling at a lower price, YouCanBook.me is worth a close look.",
    ],
    decisionGuideA: [
      "You’re solo or have a small team and want the simplest, most recognizable booking experience.",
      "You value a large ecosystem of integrations and name recognition.",
      "You’re okay paying more for team features on higher tiers.",
    ],
    decisionGuideB: [
      "You have several people taking bookings and want round-robin or collective availability.",
      "You want to minimize cost while still getting solid team scheduling.",
      "You’re fine with a less well-known brand in exchange for capability.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.8", productB: "4.3" },
      { category: "Team scheduling", productA: "4.4", productB: "4.6" },
      { category: "Pricing for teams", productA: "4.2", productB: "4.6" },
      { category: "Integrations", productA: "4.6", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Round-robin booking", productA: "On team plans", productB: "Core feature", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Buffer time", productA: "Supported", productB: "Supported", supportA: "supported", supportB: "supported" },
      { feature: "Brand recognition", productA: "Widely recognized", productB: "Less known", supportA: "supported", supportB: "supported", stronger: "A" },
    ],
    pricingComparison:
      "Calendly has a free tier for one event type; paid plans start around $10/month per user. YouCanBook.me typically has no permanent free plan but offers paid plans starting around $10/month that include team features. For team use, YouCanBook.me often delivers more for the same or lower cost.",
    prosConsA: {
      pros: ["Simpler and more recognizable.", "Strong calendar sync and ecosystem.", "Free tier for solo use."],
      cons: ["Team features on paid tiers only.", "Can cost more for multi-person booking."],
    },
    prosConsB: {
      pros: ["Round-robin and team availability built in.", "Competitive pricing for teams.", "Buffer time and time-zone support."],
      cons: ["Less brand recognition than Calendly.", "Interface less polished than Calendly."],
    },
    bestFor: [
      { heading: "Best for solo & brand recognition", body: "Calendly is best if you’re solo or small team and want the most recognizable, easiest-to-set-up experience." },
      { heading: "Best for team scheduling value", body: "YouCanBook.me is best if you have multiple staff and want round-robin and team features at a lower price." },
    ],
    alternatives: [
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More intake forms and packages." },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and service-business focus." },
    ],
    faqs: [
      { q: "Does YouCanBook.me support round-robin?", a: "Yes. YouCanBook.me supports round-robin so clients can book with any available team member." },
      { q: "Calendly vs YouCanBook.me for teams?", a: "YouCanBook.me often costs less for team use and includes round-robin; Calendly has stronger brand recognition and a simpler solo experience." },
    ],
    sidebarWinners: [
      { label: "Winner for solo & simplicity", winner: "A" },
      { label: "Winner for team value", winner: "B" },
    ],
    moreComparisons: [
      { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
      { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for solo & recognition", winner: "A", reason: "Calendly is the most widely recognized and simplest to set up." },
      { label: "Best for team value", winner: "B", reason: "YouCanBook.me offers strong team scheduling at competitive pricing." },
    ],
  }),

  // Acuity Scheduling vs Setmore
  buildComparison("acuity-scheduling-vs-setmore", "acuity-scheduling", "setmore", {
    summaryParagraph:
      "Acuity Scheduling and Setmore both serve service businesses and consultants. Acuity leans into intake forms, packages, and customization; Setmore offers a free tier and straightforward booking for salons, clinics, and solo practitioners. Choose Acuity for a tailored flow; choose Setmore for value and simplicity.",
    quickRecommendationA:
      "Choose Acuity Scheduling if you need intake forms, packages, or a highly customized booking experience and are okay with higher pricing.",
    quickRecommendationB:
      "Choose Setmore if you want a free or low-cost start and straightforward booking for one or a few staff without heavy customization.",
    quickVerdictParagraphs: [
      "Acuity gives you the most control over the booking flow: custom forms, packages, group classes, and payment at booking. It’s a strong fit for coaches, consultants, and service providers who want clients to complete intake or pay upfront. The tradeoff is cost—no free plan and pricing that starts higher than Setmore.",
      "Setmore targets salons, spas, clinics, and solo professionals. You get online booking, calendar sync, reminders, and optional payments. The free tier is genuinely useful for one person; paid plans add staff and more features without a big jump in price.",
      "If you need forms and packages and will use them, Acuity is worth the extra cost. If you mainly need 'pick a time' with optional payments and reminders, Setmore is the better value.",
    ],
    decisionGuideA: [
      "You need clients to complete intake forms or questionnaires.",
      "You sell packages (e.g. session bundles) or group classes.",
      "You want strong control over branding and the booking flow.",
    ],
    decisionGuideB: [
      "You want to minimize cost and are okay with less customization.",
      "You run a salon, clinic, or similar service business with one or a few staff.",
      "You need recurring appointments and basic payments, not heavy forms.",
    ],
    ratingsComparison: [
      { category: "Customization & forms", productA: "4.7", productB: "4.0" },
      { category: "Pricing & value", productA: "4.2", productB: "4.6" },
      { category: "Ease of use", productA: "4.4", productB: "4.4" },
      { category: "Service-business fit", productA: "4.5", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Intake forms", productA: "Full custom forms", productB: "Limited", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Packages & classes", productA: "Packages and group classes", productB: "Classes and recurring", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Free tier", productA: "No free plan", productB: "Free for solo use", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Recurring appointments", productA: "Supported", productB: "Supported", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Acuity has no free plan; pricing typically starts around $16/month and scales with staff and features. Setmore has a free plan for solo use; paid plans start around $9/month. For comparable staff counts, Setmore is usually cheaper. Acuity justifies its price when you use intake forms, packages, and payment flows; otherwise Setmore is the better value.",
    prosConsA: {
      pros: ["Intake forms and packages built in.", "Strong for consultants and coaches.", "Highly customizable flow."],
      cons: ["No free plan; higher entry cost.", "Can feel busy for simple use cases."],
    },
    prosConsB: {
      pros: ["Free tier for solo use.", "Recurring appointments and staff scheduling.", "Good value for service businesses."],
      cons: ["Less flexible than Acuity for complex flows.", "Reporting and integrations adequate but not extensive."],
    },
    bestFor: [
      { heading: "Best for forms & packages", body: "Acuity is best if you need intake forms, packages, or group classes and want one tool to run the full booking and pre-session workflow." },
      { heading: "Best for value & simplicity", body: "Setmore is best if you want to start free or low-cost and need straightforward booking for salons, clinics, or solo practitioners." },
    ],
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Simpler setup and wider recognition." },
      { name: "SimplyBook.me", href: getSchedulingReviewUrl("simplybookme"), description: "More customization at a lower price than Acuity." },
    ],
    faqs: [
      { q: "Is Setmore free?", a: "Setmore has a free plan for one user and core booking. Acuity has no free plan." },
      { q: "Acuity vs Setmore for salons?", a: "Both work for salons. Setmore is often chosen for value and a free start; Acuity is chosen when you need more forms and package options." },
    ],
    sidebarWinners: [
      { label: "Winner for customization", winner: "A" },
      { label: "Winner for value", winner: "B" },
    ],
    moreComparisons: [
      { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
      { label: "SimplyBook.me vs Setmore", href: getSchedulingCompareUrl("simplybookme-vs-setmore") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for forms & packages", winner: "A", reason: "Acuity offers intake forms and packages built in." },
      { label: "Best for free start & value", winner: "B", reason: "Setmore has a free tier and lower-cost paid plans." },
    ],
  }),

  // SimplyBook.me vs Setmore
  buildComparison("simplybookme-vs-setmore", "simplybookme", "setmore", {
    summaryParagraph:
      "SimplyBook.me and Setmore both offer customizable booking for service businesses. SimplyBook.me has more industry templates and custom forms at a lower price than Acuity; Setmore has a strong free tier and is popular with salons and local service providers. Both support multi-staff, payments, and reminders.",
    quickRecommendationA:
      "Choose SimplyBook.me if you want more customization and industry-specific templates at a competitive price, and are okay with a bit more setup.",
    quickRecommendationB:
      "Choose Setmore if you want to start free and need straightforward booking with minimal configuration.",
    quickVerdictParagraphs: [
      "SimplyBook.me gives you custom forms, multiple staff and services, and templates for salons, fitness, and local businesses. You get more control over the booking experience than Setmore, often at a lower price than Acuity. The tradeoff is that setup can take longer and the interface is functional rather than sleek.",
      "Setmore focuses on getting you live quickly: free tier for solo use, simple paid plans that add staff and payments. It’s a good fit when you don’t need heavy customization and want to minimize cost.",
      "If you value customization and are willing to configure, SimplyBook.me delivers more for the price. If you want the fastest path to a working calendar with minimal spend, Setmore is the better fit.",
    ],
    decisionGuideA: [
      "You want custom forms and industry templates (salon, fitness, etc.).",
      "You have multiple staff and services and want one place to manage them.",
      "You’re okay with more setup in exchange for more control.",
    ],
    decisionGuideB: [
      "You want to start free or with minimal monthly cost.",
      "You need simple booking with reminders and optional payments.",
      "You prefer less configuration and a quicker go-live.",
    ],
    ratingsComparison: [
      { category: "Customization", productA: "4.5", productB: "4.0" },
      { category: "Pricing & value", productA: "4.6", productB: "4.6" },
      { category: "Ease of use", productA: "4.2", productB: "4.4" },
      { category: "Service-business fit", productA: "4.5", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Custom booking forms", productA: "Custom forms and templates", productB: "Basic customization", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Industry templates", productA: "Salon, fitness, etc.", productB: "General", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Free tier", productA: "No free plan", productB: "Free for solo", supportA: "none", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "SimplyBook.me plans typically start around $8/month; Setmore has a free plan and paid plans from around $9/month. SimplyBook.me often undercuts Acuity for similar customization; Setmore undercuts both when you use the free tier or a low-cost paid plan. Choose based on whether you need SimplyBook.me’s extra customization or Setmore’s free start.",
    prosConsA: {
      pros: ["Custom forms and industry templates.", "Multi-staff and multi-service.", "Competitive pricing for the feature set."],
      cons: ["Setup can take longer.", "UI less polished than top brands."],
    },
    prosConsB: {
      pros: ["Free tier for solo use.", "Recurring appointments and staff scheduling.", "Simple to get started."],
      cons: ["Less flexible than SimplyBook.me for complex flows.", "Fewer industry-specific options."],
    },
    bestFor: [
      { heading: "Best for customization on a budget", body: "SimplyBook.me is best if you want custom forms and industry templates without paying Acuity-level prices." },
      { heading: "Best for free start & simplicity", body: "Setmore is best if you want to start free and need straightforward booking for one or a few staff." },
    ],
    alternatives: [
      { name: "Acuity Scheduling", href: getSchedulingReviewUrl("acuity-scheduling"), description: "More polished and more intake/packages; higher price." },
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Simpler and more recognizable; less customization." },
    ],
    faqs: [
      { q: "SimplyBook.me vs Setmore for salons?", a: "SimplyBook.me offers more salon-focused templates and customization; Setmore has a free tier and is easier to start with. Choose based on how much customization you need." },
      { q: "Which is cheaper?", a: "Setmore can be free for solo use; paid plans are similar. SimplyBook.me has no free plan but often undercuts Acuity for comparable customization." },
    ],
    sidebarWinners: [
      { label: "Winner for customization", winner: "A" },
      { label: "Winner for free start", winner: "B" },
    ],
    moreComparisons: [
      { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
      { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for customization", winner: "A", reason: "SimplyBook.me offers more forms and templates for the price." },
      { label: "Best for free start", winner: "B", reason: "Setmore has a free tier for solo practitioners." },
    ],
  }),

  // Square Appointments vs Acuity Scheduling
  buildComparison("square-appointments-vs-acuity-scheduling", "square-appointments", "acuity-scheduling", {
    summaryParagraph:
      "Square Appointments and Acuity Scheduling serve different needs. Square Appointments fits businesses that already use Square for payments and point-of-sale—you get booking in the same ecosystem. Acuity is a standalone scheduling tool with deeper intake forms, packages, and customization. Choose Square if you’re all-in on Square; choose Acuity if you need more booking flexibility.",
    quickRecommendationA:
      "Choose Square Appointments if you already use Square for POS or payments and want to add booking without a separate vendor or subscription.",
    quickRecommendationB:
      "Choose Acuity Scheduling if you need intake forms, packages, or a highly customizable booking flow and are not committed to Square.",
    quickVerdictParagraphs: [
      "Square Appointments makes sense when you’re already running payments and often POS with Square. Booking, reminders, and payments stay in one dashboard, so you don’t add another subscription or switch apps. The experience is straightforward for service businesses—salons, consultants, local shops—but it doesn’t match Acuity for forms, packages, or round-robin team scheduling.",
      "Acuity is built for practitioners who want to control the full booking experience: intake forms, packages, group classes, and payment at booking. It’s standalone, so you’re not tied to Square. If you don’t use Square and need more than basic 'pick a time' booking, Acuity is the stronger choice.",
      "If you’re committed to Square and only need straightforward appointments, Square Appointments is the logical add-on. If you need forms and packages or aren’t on Square, Acuity is the better fit.",
    ],
    decisionGuideA: [
      "You already use Square for payments, POS, or invoicing.",
      "You want one place to manage schedule and revenue without adding another vendor.",
      "You need basic booking with reminders and payments, not heavy forms or packages.",
    ],
    decisionGuideB: [
      "You need intake forms, packages, or group classes built into the flow.",
      "You’re not committed to Square and want a dedicated scheduling tool.",
      "You want strong control over branding and the booking experience.",
    ],
    ratingsComparison: [
      { category: "Square ecosystem fit", productA: "4.8", productB: "—" },
      { category: "Customization & forms", productA: "4.0", productB: "4.7" },
      { category: "Standalone scheduling", productA: "4.0", productB: "4.6" },
      { category: "Pricing (if not on Square)", productA: "3.5", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Square integration", productA: "Native; one dashboard", productB: "Not applicable", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Intake forms", productA: "Limited", productB: "Full custom forms", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "Packages & classes", productA: "Basic", productB: "Packages and group classes", supportA: "partial", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Square Appointments is typically included or low-cost as part of Square’s offerings; effective cost is often zero if you already pay for Square. Acuity has no free plan and typically starts around $16/month. If you’re not on Square, Acuity’s standalone pricing is comparable to other dedicated schedulers. The main decision is ecosystem: stay in Square or use a standalone tool with more booking features.",
    prosConsA: {
      pros: ["Integrated with Square POS and payments.", "No extra subscription if you use Square.", "One place for schedule and revenue."],
      cons: ["Best only if you use Square.", "Fewer advanced scheduling features than Acuity."],
    },
    prosConsB: {
      pros: ["Intake forms and packages built in.", "Standalone; not tied to one payment provider.", "Strong for consultants and coaches."],
      cons: ["No free plan; higher entry cost.", "Separate from Square if you use it."],
    },
    bestFor: [
      { heading: "Best for Square users", body: "Square Appointments is best if you already use Square and want to add booking without another vendor." },
      { heading: "Best for forms & packages", body: "Acuity is best if you need intake forms, packages, or a highly customizable booking flow, whether or not you use Square." },
    ],
    alternatives: [
      { name: "Calendly", href: getSchedulingReviewUrl("calendly"), description: "Simpler standalone scheduling." },
      { name: "Setmore", href: getSchedulingReviewUrl("setmore"), description: "Free tier and service-business focus." },
    ],
    faqs: [
      { q: "Do I need Square to use Square Appointments?", a: "Square Appointments is designed to work with Square. If you don’t use Square, a standalone scheduler like Acuity or Calendly usually makes more sense." },
      { q: "Square Appointments vs Acuity for consultants?", a: "Acuity is usually better for consultants who need intake forms and packages. Square Appointments fits consultants who already run their business on Square and want booking in the same place." },
    ],
    sidebarWinners: [
      { label: "Winner for Square users", winner: "A" },
      { label: "Winner for forms & packages", winner: "B" },
    ],
    moreComparisons: [
      { label: "Calendly vs Acuity Scheduling", href: getSchedulingCompareUrl("calendly-vs-acuity-scheduling") },
      { label: "Acuity Scheduling vs Setmore", href: getSchedulingCompareUrl("acuity-scheduling-vs-setmore") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best if you use Square", winner: "A", reason: "Square Appointments keeps booking and payments in one ecosystem." },
      { label: "Best for customization", winner: "B", reason: "Acuity offers intake forms and packages without tying you to Square." },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getSchedulingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getSchedulingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
