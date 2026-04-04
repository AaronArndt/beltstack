import { getTimeTrackingReviewUrl, getTimeTrackingCompareUrl, getTimeTrackingBestForUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getTimeTrackingCompareUrlFromSlug(slug: string): string {
  return `/time-tracking/compare/${slug}`;
}

/** Product refs for time tracking comparisons — reuse for consistent review links and logos */
const P = {
  toggl: {
    name: "Toggl Track",
    slug: "toggl",
    reviewHref: getTimeTrackingReviewUrl("toggl"),
    logoSrc: "/Logos/toggl.jpeg",
    visitUrl: "https://toggl.com/track",
    bestForSummary: "Best overall balance of ease of use and reporting.",
    rating: "4.6",
    startingPrice: "Free tier",
  },
  harvest: {
    name: "Harvest",
    slug: "harvest",
    reviewHref: getTimeTrackingReviewUrl("harvest"),
    logoSrc: "/Logos/harvest.png",
    visitUrl: "https://www.getharvest.com",
    bestForSummary: "Time tracking with built-in invoicing for agencies and service teams.",
    rating: "4.4",
    startingPrice: "$12/user/mo",
  },
  clockify: {
    name: "Clockify",
    slug: "clockify",
    reviewHref: getTimeTrackingReviewUrl("clockify"),
    logoSrc: "/Logos/clockify.jpeg",
    visitUrl: "https://clockify.me",
    bestForSummary: "Unlimited free time tracking for teams on a budget.",
    rating: "4.3",
    startingPrice: "Free",
  },
  hubstaff: {
    name: "Hubstaff",
    slug: "hubstaff",
    reviewHref: getTimeTrackingReviewUrl("hubstaff"),
    logoSrc: "/Logos/hubstaff.jpeg",
    visitUrl: "https://hubstaff.com",
    bestForSummary: "Remote and field teams that want monitoring and GPS.",
    rating: "4.4",
    startingPrice: "$4.99/user/mo",
  },
  "time-doctor": {
    name: "Time Doctor",
    slug: "time-doctor",
    reviewHref: getTimeTrackingReviewUrl("time-doctor"),
    logoSrc: "/Logos/timedoctor.jpeg",
    visitUrl: "https://www.timedoctor.com",
    bestForSummary: "Strict oversight and productivity monitoring for remote teams.",
    rating: "4.2",
    startingPrice: "From ~$7/user/mo",
  },
  everhour: {
    name: "Everhour",
    slug: "everhour",
    reviewHref: getTimeTrackingReviewUrl("everhour"),
    logoSrc: "/Logos/everhour.png",
    visitUrl: "https://everhour.com",
    bestForSummary: "Project teams using tools like Asana, Trello, or ClickUp.",
    rating: "4.3",
    startingPrice: "From ~$8.50/user/mo",
  },
  timely: {
    name: "Timely",
    slug: "timely",
    reviewHref: getTimeTrackingReviewUrl("timely"),
    logoSrc: "/Logos/timely.png",
    visitUrl: "https://memory.ai/timely",
    bestForSummary: "Automatic AI-based tracking for knowledge workers.",
    rating: "4.2",
    startingPrice: "From ~$11/user/mo",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getTimeTrackingBestForUrl("freelancers") },
  { label: "Best for agencies", href: getTimeTrackingBestForUrl("agencies") },
  { label: "Best for consultants", href: getTimeTrackingBestForUrl("consultants") },
  { label: "Best for small business", href: getTimeTrackingBestForUrl("small-business") },
  { label: "Best for remote teams", href: getTimeTrackingBestForUrl("remote-teams") },
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
      categoryHref: "/time-tracking",
      categoryLabel: "Time tracking",
    },
  ];
}

/** Shared feature rows for time tracking comparisons (can be extended per comparison) */
const BASE_TIME_TRACKING_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  {
    feature: "Core time tracking",
    productA: "Timers and timesheets",
    productB: "Timers and timesheets",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Projects & clients",
    productA: "Projects, clients, and tags",
    productB: "Projects, clients, and tags",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Reporting & analytics",
    productA: "Reports by client, project, and user",
    productB: "Reports by client, project, and user",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Integrations",
    productA: "Project, invoicing, and accounting tools",
    productB: "Project, invoicing, and accounting tools",
    supportA: "supported",
    supportB: "supported",
  },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // Toggl vs Harvest
  buildComparison("toggl-vs-harvest", "toggl", "harvest", {
    summaryParagraph:
      "Toggl Track and Harvest both handle core time tracking, but Toggl focuses on simplicity and analytics while Harvest adds invoicing and expenses. Both are popular with freelancers, agencies, and service businesses.",
    quickRecommendationA:
      "Choose Toggl Track if you want the cleanest time tracking experience and strong reports, and already have billing covered elsewhere.",
    quickRecommendationB:
      "Choose Harvest if you want to go from tracked hours to invoices in one tool and run a project-based service business.",
    quickVerdictParagraphs: [
      "Toggl Track is easier to roll out to teams that just need fast timers and high adoption. The UI is very clean, and tagging by client/project makes reporting powerful without heavy admin.",
      "Harvest is stronger when you want tracking, expenses, and invoicing in one place. Agencies and service businesses that bill from timesheets often prefer Harvest’s built-in billing and budget views.",
      "If you already have invoicing and accounting covered, Toggl is often the better fit; if you want to keep time and billing tightly connected, Harvest is usually the better default.",
    ],
    decisionGuideA: [
      "You already invoice from another tool and just need time tracking and reporting.",
      "You care most about adoption and a frictionless timer interface.",
      "You want granular tagging and flexible reports for internal analysis.",
    ],
    decisionGuideB: [
      "You bill clients directly from tracked time and expenses.",
      "You run an agency or service business with project-based retainers or budgets.",
      "You prefer one tool to cover tracking, expenses, and invoices.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.8", productB: "4.5" },
      { category: "Billing & invoicing", productA: "3.5", productB: "4.6" },
      { category: "Reporting", productA: "4.6", productB: "4.3" },
      { category: "Integrations", productA: "4.6", productB: "4.3" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Invoicing & expenses",
        productA: "Exports to invoicing/accounting",
        productB: "Built-in invoices and expenses",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Toggl Track offers a generous free tier for individuals and small teams, with paid plans adding billable rates, more granular permissions, and advanced reporting. Harvest uses straightforward per-user pricing that includes time tracking, expenses, and invoicing; there is a limited free tier for solo users.",
    prosConsA: {
      pros: [
        "Very clean interface that’s easy for teams to adopt.",
        "Strong tagging and reporting for internal analysis.",
        "Generous free tier and competitive paid plans.",
      ],
      cons: [
        "No built-in invoicing; you still need a billing tool.",
        "More setup needed if you want detailed job-costing in accounting.",
        "Monitoring features are intentionally light—may not fit teams that want oversight.",
      ],
    },
    prosConsB: {
      pros: [
        "Time tracking, expenses, and invoicing in one product.",
        "Clear project budget and billable vs non-billable reporting.",
        "Good fit for agencies and project-based service businesses.",
      ],
      cons: [
        "Per-user pricing can feel high as your team grows.",
        "UI is a bit more utilitarian than Toggl’s.",
        "Less appealing if you already have a strong invoicing tool.",
      ],
    },
    bestFor: [
      {
        heading: "Best for teams that want lightweight tracking",
        body: "Toggl Track is best when you want simple timers, strong reporting, and low-friction adoption—and you’re comfortable keeping invoicing separate.",
      },
      {
        heading: "Best for agencies that bill from timesheets",
        body: "Harvest is best for agencies and service businesses that want to log hours, track expenses, and send invoices from one system.",
      },
    ],
    alternatives: [
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Unlimited free time tracking with optional approvals and monitoring.",
        logoSrc: "/Logos/clockify.jpeg",
      },
      {
        name: "Everhour",
        href: getTimeTrackingReviewUrl("everhour"),
        description: "Deep project tool integrations for Asana, Trello, and more.",
        logoSrc: "/Logos/everhour.png",
      },
    ],
    faqs: [
      {
        q: "Is Toggl Track better than Harvest?",
        a: "Toggl Track is better if you want simple tracking and strong reports without built-in invoicing; Harvest is better if you want time tracking and invoicing in one place.",
      },
      {
        q: "Can I use Toggl Track with Harvest or other invoicing tools?",
        a: "Yes. Toggl exports time data that can be imported into invoicing and accounting tools. If you want one vendor for time and billing, Harvest may be simpler; if you prefer mixing tools, Toggl works well.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for ease of use", winner: "A" },
      { label: "Winner for time + invoicing", winner: "B" },
    ],
    moreComparisons: [
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
      { label: "Toggl vs Hubstaff", href: getTimeTrackingCompareUrl("toggl-vs-hubstaff") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for simple tracking",
        winner: "A",
        reason: "Cleaner UI and lower friction if you already handle invoicing elsewhere.",
      },
      {
        label: "Best for billing from time",
        winner: "B",
        reason: "Built-in invoices and expenses tied directly to tracked hours.",
      },
    ],
  }),

  // Clockify vs Toggl
  buildComparison("clockify-vs-toggl", "clockify", "toggl", {
    summaryParagraph:
      "Clockify and Toggl Track are very similar for core time tracking. Clockify leans on a generous free tier and optional monitoring; Toggl emphasizes UX polish and analytics.",
    quickRecommendationA:
      "Choose Clockify if you want unlimited free time tracking for many users and are comfortable with a more utilitarian UI.",
    quickRecommendationB:
      "Choose Toggl if you prefer a refined interface and deeper reporting, and are okay paying per user once you grow past the free tier.",
    quickVerdictParagraphs: [
      "Clockify maximizes value for budget-conscious teams: you can put your whole company on the free plan, then layer in approvals and monitoring on paid tiers.",
      "Toggl Track delivers a smoother experience and better reports if your team actually uses the tool consistently.",
      "If budget is the constraint, Clockify usually wins; if you want the best adoption and analytics, Toggl is worth paying for.",
    ],
    decisionGuideA: [
      "You want unlimited free tracking for many people.",
      "You may want approvals, reminders, or monitoring on higher tiers.",
      "You’re okay with a slightly busier interface.",
    ],
    decisionGuideB: [
      "You care most about ease of use and adoption.",
      "You want polished reports and tagging for analysis.",
      "You don’t mind paying per user once you grow beyond the free tier.",
    ],
    ratingsComparison: [
      { category: "Pricing & value", productA: "4.8", productB: "4.3" },
      { category: "Ease of use", productA: "4.1", productB: "4.8" },
      { category: "Monitoring options", productA: "4.3", productB: "3.5" },
      { category: "Reporting", productA: "4.2", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Free plan",
        productA: "Unlimited users and projects",
        productB: "Best for individuals and small teams",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
      {
        feature: "Monitoring & approvals",
        productA: "Approvals, reminders, monitoring on paid tiers",
        productB: "Lightweight tracking, no heavy monitoring",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Clockify’s value comes from its unlimited free plan; many teams never pay. Paid tiers add approvals, reminders, and monitoring. Toggl Track’s pricing is per user per month with a solid free tier for individuals and very small teams.",
    prosConsA: {
      pros: [
        "Unlimited free users and projects on the free plan.",
        "Approvals, reminders, and monitoring options on paid tiers.",
        "Flexible enough for many different team types.",
      ],
      cons: [
        "Interface is more utilitarian than Toggl’s.",
        "Feature set can feel scattered across tiers.",
        "Monitoring features require careful communication.",
      ],
    },
    prosConsB: {
      pros: [
        "One of the cleanest UIs in time tracking.",
        "Excellent tagging and reporting abilities.",
        "Strong browser extension and integrations.",
      ],
      cons: [
        "No heavy monitoring; not suited if you need screenshots/GPS.",
        "Per-user pricing adds up for very large teams.",
        "Free plan is less attractive if you must track many users indefinitely.",
      ],
    },
    bestFor: [
      {
        heading: "Best for large, budget-conscious teams",
        body: "Clockify is best for large teams that want broad coverage at minimal software cost, plus optional approvals and monitoring.",
      },
      {
        heading: "Best for smaller teams focused on adoption",
        body: "Toggl Track is best for smaller teams and agencies that care most about ease of use and reporting quality.",
      },
    ],
    alternatives: [
      {
        name: "Harvest",
        href: getTimeTrackingReviewUrl("harvest"),
        description: "Time tracking plus invoicing for service teams.",
        logoSrc: "/Logos/harvest.png",
      },
      {
        name: "Timely",
        href: getTimeTrackingReviewUrl("timely"),
        description: "Automatic tracking with AI-assisted timesheets.",
        logoSrc: "/Logos/timely.png",
      },
    ],
    faqs: [
      {
        q: "Is Clockify really free?",
        a: "Yes. Clockify’s free plan supports unlimited users and projects with core time tracking. Paid tiers add approvals, reminders, and monitoring features.",
      },
      {
        q: "When is Toggl Track worth paying for over Clockify?",
        a: "Toggl Track is worth paying for when a better interface and stronger reporting lead to higher adoption and better data.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for free teams", winner: "A" },
      { label: "Winner for UX & reporting", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") },
      { label: "Clockify vs Hubstaff", href: getTimeTrackingCompareUrl("clockify-vs-hubstaff") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for free at scale",
        winner: "A",
        reason: "Unlimited free users make Clockify ideal for large, budget-conscious teams.",
      },
      {
        label: "Best for experience",
        winner: "B",
        reason: "Toggl offers a more polished interface and analytics for teams that value UX.",
      },
    ],
  }),

  // Hubstaff vs Time Doctor
  buildComparison("hubstaff-vs-time-doctor", "hubstaff", "time-doctor", {
    summaryParagraph:
      "Hubstaff and Time Doctor both provide monitoring-heavy time tracking with screenshots, activity metrics, and detailed logs. Both target teams that want oversight of remote or distributed work, but they differ in emphasis and ecosystems.",
    quickRecommendationA:
      "Choose Hubstaff if you want monitoring plus GPS, job sites, and optional payroll for remote or field teams.",
    quickRecommendationB:
      "Choose Time Doctor if your priority is detailed productivity reporting and distraction alerts for desk-heavy work.",
    quickVerdictParagraphs: [
      "Both Hubstaff and Time Doctor require careful rollout and communication because of their monitoring features.",
      "Hubstaff feels more like a broad operational platform for remote/field teams: GPS, job sites, optional payroll, and scheduling.",
      "Time Doctor leans harder into productivity analytics: app/website usage, distraction alerts, and productivity reports.",
    ],
    decisionGuideA: [
      "You manage field or job-site teams and want GPS and job sites.",
      "You might want to run payroll directly from tracked hours.",
      "You prefer an operational tool over a pure productivity tracker.",
    ],
    decisionGuideB: [
      "You mostly manage desk-based or remote knowledge work.",
      "You want detailed productivity reporting and distraction alerts.",
      "You’re focused more on focus metrics than GPS or job sites.",
    ],
    ratingsComparison: [
      { category: "Monitoring depth", productA: "4.5", productB: "4.6" },
      { category: "Field team support", productA: "4.6", productB: "3.8" },
      { category: "Productivity analytics", productA: "4.2", productB: "4.5" },
      { category: "Integrations", productA: "4.3", productB: "4.1" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Screenshots & activity",
        productA: "Screenshots and activity scores",
        productB: "Screenshots and activity scores",
        supportA: "supported",
        supportB: "supported",
      },
      {
        feature: "GPS & job sites",
        productA: "GPS tracking and job sites for field teams",
        productB: "Primarily desk-focused monitoring",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Distraction alerts",
        productA: "Basic productivity insights",
        productB: "Strong distraction and productivity alerts",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Both Hubstaff and Time Doctor use per-user pricing across multiple tiers. Entry-level plans are reasonably priced for smaller teams; costs increase as you add seats and advanced features.",
    prosConsA: {
      pros: [
        "Strong for remote and field teams with GPS and job sites.",
        "Optional payroll and scheduling on higher tiers.",
        "Good integrations with project, accounting, and payroll tools.",
      ],
      cons: [
        "Monitoring can feel intrusive without clear policy.",
        "Configuration is more complex than lightweight trackers.",
        "Costs climb as you enable more advanced features.",
      ],
    },
    prosConsB: {
      pros: [
        "Deep productivity and distraction reporting for desk work.",
        "Screenshots and app/website usage for oversight.",
        "Optional payroll and integrations for some workflows.",
      ],
      cons: [
        "Monitoring-heavy approach can be controversial with staff.",
        "Less suited for field teams that need GPS and job sites.",
        "Requires time to tune alerts and reporting to your culture.",
      ],
    },
    bestFor: [
      {
        heading: "Best for remote and field operations",
        body: "Hubstaff is best for companies that manage remote or field staff and need GPS, job sites, and optional payroll alongside monitoring.",
      },
      {
        heading: "Best for desk-based productivity oversight",
        body: "Time Doctor is best for teams that explicitly want detailed productivity metrics and distraction alerts for desk work.",
      },
    ],
    alternatives: [
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Lighter tracking with optional monitoring on higher tiers.",
        logoSrc: "/Logos/clockify.jpeg",
      },
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Lightweight tracking and reporting without heavy monitoring.",
        logoSrc: "/Logos/toggl.jpeg",
      },
    ],
    faqs: [
      {
        q: "Is Hubstaff or Time Doctor better for remote teams?",
        a: "For remote knowledge workers, Time Doctor often wins if you want detailed productivity analytics; for remote or field teams that also need GPS and job-site management, Hubstaff is usually better.",
      },
      {
        q: "Are monitoring tools like Hubstaff and Time Doctor right for my culture?",
        a: "They can be, but they require clear communication and consent. Many teams prefer lighter tools like Toggl or Harvest unless there’s a specific compliance or oversight requirement.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for field teams", winner: "A" },
      { label: "Winner for productivity analytics", winner: "B" },
    ],
    moreComparisons: [
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") },
      { label: "Harvest vs Hubstaff", href: getTimeTrackingCompareUrl("harvest-vs-hubstaff") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for field operations",
        winner: "A",
        reason: "GPS, job sites, and optional payroll make Hubstaff stronger for field and job-site work.",
      },
      {
        label: "Best for productivity metrics",
        winner: "B",
        reason: "Time Doctor focuses on detailed productivity and distraction reporting for desk-based work.",
      },
    ],
  }),

  // Harvest vs Clockify
  buildComparison("harvest-vs-clockify", "harvest", "clockify", {
    summaryParagraph:
      "Harvest focuses on time tracking plus invoicing and expenses; Clockify prioritizes broad access with an unlimited free plan and optional monitoring.",
    quickRecommendationA:
      "Choose Harvest if invoicing clients from tracked time and expenses in one tool is a priority.",
    quickRecommendationB:
      "Choose Clockify if free or low-cost tracking for many people matters more than native invoicing.",
    quickVerdictParagraphs: [
      "Harvest is opinionated toward agencies and service teams: you log hours and expenses, then turn them into invoices. That makes it a strong fit if your client billing, budgets, and project reporting should live in one product.",
      "Clockify is more flexible and value-focused. Its free plan and low-cost tiers let you roll tracking out across a large team, then layer approvals and monitoring when needed.",
      "Pick Harvest when you want tracking plus billing in one place; pick Clockify when budget and headcount matter more than built-in invoicing.",
    ],
    decisionGuideA: [
      "You run an agency or service business billing clients by the hour or project.",
      "You want invoices and expenses to live in the same product as time tracking.",
      "You care more about billing workflows than unlimited free seats.",
    ],
    decisionGuideB: [
      "You need to track time for many users at low or no software cost.",
      "You may want approvals, reminders, or monitoring on higher tiers.",
      "You’re comfortable sending invoices from another tool.",
    ],
    ratingsComparison: [
      { category: "Billing & invoicing", productA: "4.6", productB: "3.5" },
      { category: "Pricing & value", productA: "4.1", productB: "4.7" },
      { category: "Ease of use", productA: "4.5", productB: "4.1" },
      { category: "Integrations", productA: "4.3", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Invoicing & expenses",
        productA: "Built-in invoices and expenses",
        productB: "Exports to invoicing/accounting",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Free plan",
        productA: "Limited free tier for solo users",
        productB: "Unlimited users and projects on free plan",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Harvest uses straightforward per-user pricing with a limited free tier; you pay for each user that needs to track time and invoice. Clockify offers one of the most generous free plans on the market, then charges per user per month for advanced features.",
    prosConsA: {
      pros: [
        "Tight connection between tracking, expenses, and invoicing.",
        "Clear project and budget reporting for agencies.",
        "Simple pricing model for small to mid-size teams.",
      ],
      cons: [
        "Less attractive if you already have invoicing solved elsewhere.",
        "Per-user pricing adds up as your team grows.",
        "Monitoring options are limited compared with Clockify.",
      ],
    },
    prosConsB: {
      pros: [
        "Unlimited free users and projects on the free plan.",
        "Approvals, reminders, and monitoring on higher tiers.",
        "Flexible across many industries and team types.",
      ],
      cons: [
        "No native invoicing; you’ll still need a billing tool.",
        "More complex UI than tools like Toggl.",
        "Advanced features spread across several tiers.",
      ],
    },
    bestFor: [
      {
        heading: "Best for agencies that bill from time",
        body: "Harvest is best for agencies and project-based service teams that want to log hours and expenses, then invoice clients directly from the same system.",
      },
      {
        heading: "Best for large teams on a budget",
        body: "Clockify is best for large teams and organizations that want broad time tracking coverage at minimal software cost.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Lightweight time tracking with strong reporting.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Everhour",
        href: getTimeTrackingReviewUrl("everhour"),
        description: "Great for teams that live in Asana or Trello.",
        logoSrc: "/Logos/everhour.png",
      },
    ],
    faqs: [
      {
        q: "Is Harvest or Clockify better for agencies?",
        a: "Harvest is usually better for agencies that bill from timesheets and want budgets and invoices in one product. Clockify can work too, but typically pairs with a separate billing tool.",
      },
      {
        q: "Can I export time from Clockify or Harvest to other tools?",
        a: "Yes. Both export time data and integrate with project and accounting tools so you can feed hours into billing and reporting.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for invoicing", winner: "A" },
      { label: "Winner for budget-conscious teams", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Harvest vs Hubstaff", href: getTimeTrackingCompareUrl("harvest-vs-hubstaff") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for billing",
        winner: "A",
        reason: "Harvest ties tracked time and expenses directly into invoices.",
      },
      {
        label: "Best for free and scale",
        winner: "B",
        reason: "Clockify supports unlimited free users, then adds power on paid tiers.",
      },
    ],
  }),

  // Everhour vs Harvest
  buildComparison("everhour-vs-harvest", "everhour", "harvest", {
    summaryParagraph:
      "Everhour and Harvest both serve project-based teams, but differ in how they integrate into your tools. Everhour goes deeper into embedding inside tools like Asana and Trello; Harvest is a standalone app with built-in invoicing and expenses.",
    quickRecommendationA:
      "Choose Everhour if your team already lives in tools like Asana or Trello and you want time fields and reports right inside them.",
    quickRecommendationB:
      "Choose Harvest if you prefer a standalone app that also handles invoicing and expenses.",
    quickVerdictParagraphs: [
      "Everhour’s value grows the more your work is driven by integrated project tools. Time fields, budgets, and reports appear directly in Asana, Trello, and other connected apps.",
      "Harvest is more self-contained: you log time, track expenses, and send invoices from one app. Integrations exist, but the core experience is in Harvest itself.",
      "If your team is deeply embedded in Asana/Trello, Everhour is often the better experience; if you want a central place for time and billing, Harvest is usually stronger.",
    ],
    decisionGuideA: [
      "You manage projects in Asana, Trello, or similar tools.",
      "You want time and budgets to live inside the tools your team already uses.",
      "You’re comfortable pairing time tracking with a separate invoicing or accounting tool.",
    ],
    decisionGuideB: [
      "You want one app to handle time, expenses, and invoicing.",
      "You prefer a standalone time tracking and billing hub.",
      "You’re less concerned about deep Asana/Trello embedding.",
    ],
    ratingsComparison: [
      { category: "Embedded project integrations", productA: "4.7", productB: "4.1" },
      { category: "Invoicing & expenses", productA: "3.7", productB: "4.6" },
      { category: "Reporting", productA: "4.4", productB: "4.3" },
      { category: "Pricing & value", productA: "4.2", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Deep project tool integrations",
        productA: "Strong Asana/Trello embedding",
        productB: "Project integrations; more standalone",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Invoicing",
        productA: "Exports and light billing workflows",
        productB: "Full invoicing and expenses",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Everhour and Harvest both charge per user per month, with tiers that add features as you go. Pricing is broadly comparable; the right choice depends more on whether you value embedded project integrations (Everhour) or built-in invoicing and expenses (Harvest).",
    prosConsA: {
      pros: [
        "Excellent integrations with tools like Asana, Trello, and ClickUp.",
        "Budgets and reports where your team already works.",
        "Good reporting for project and client profitability.",
      ],
      cons: [
        "Less compelling if you don’t rely on supported project tools.",
        "Billing workflows may still require another invoicing tool.",
        "Learning curve around embedded configuration in each tool.",
      ],
    },
    prosConsB: {
      pros: [
        "Time tracking, expenses, and invoicing in one product.",
        "Clear project budgets and billable vs non-billable reporting.",
        "Good fit for agencies and project-based teams.",
      ],
      cons: [
        "Less deeply embedded in project tools than Everhour.",
        "Per-user pricing adds up as your team grows.",
        "Reporting and integrations are solid but not as embedded as Everhour’s.",
      ],
    },
    bestFor: [
      {
        heading: "Best for teams living in project tools",
        body: "Everhour is best for teams that run everything through Asana, Trello, or similar tools and want time data and budgets to live there.",
      },
      {
        heading: "Best for teams that want time + billing in one app",
        body: "Harvest is best for teams that want tracking, expenses, and invoicing in a central, standalone tool.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Simple cross-tool tracking with strong reports.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Free and flexible tracking with approvals and monitoring options.",
        logoSrc: "/Logos/clockify.jpeg",
      },
    ],
    faqs: [
      {
        q: "Is Everhour or Harvest better for Asana and Trello users?",
        a: "Everhour is usually better for Asana/Trello users because time fields, budgets, and reports appear directly in those tools. Harvest integrates, but its core experience stays in Harvest.",
      },
      {
        q: "Can I invoice from Everhour the way I can from Harvest?",
        a: "Everhour supports exports and some billing workflows but does not replace a dedicated invoicing tool as completely as Harvest does.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for embedded integrations", winner: "A" },
      { label: "Winner for time + invoices", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
      { label: "Everhour vs Toggl", href: getTimeTrackingCompareUrl("everhour-vs-toggl") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best inside Asana/Trello",
        winner: "A",
        reason: "Everhour’s deep integrations make time tracking feel native to your project tools.",
      },
      {
        label: "Best for time + invoices",
        winner: "B",
        reason: "Harvest combines time tracking, expenses, and invoicing in one app.",
      },
    ],
  }),

  // Timely vs Toggl
  buildComparison("timely-vs-toggl", "timely", "toggl", {
    summaryParagraph:
      "Timely and Toggl Track both emphasize good UX and strong reports, but they differ in how time is captured. Timely leans on automatic tracking and AI-assisted timesheets; Toggl uses traditional manual timers and timesheets.",
    quickRecommendationA:
      "Choose Timely if your team struggles to remember timers and you want automatic tracking to build accurate timesheets.",
    quickRecommendationB:
      "Choose Toggl if you’re comfortable with manual timers and want a simpler, more traditional model at a slightly lower price point.",
    quickVerdictParagraphs: [
      "Timely reduces the cognitive load of tracking by automatically capturing app, website, and document activity, then turning that activity into suggested time entries.",
      "Toggl Track is easier to understand and control: you start and stop timers or enter time manually. There’s less automation, but also less background tracking, which some teams prefer.",
      "If your team routinely forgets timers or reconstructs days after the fact, Timely can be a big upgrade. If you’re already disciplined with timers, Toggl is often simpler and cheaper.",
    ],
    decisionGuideA: [
      "Your team frequently forgets to start/stop timers.",
      "You do a lot of meeting- and document-heavy work.",
      "You’re comfortable with more background activity tracking to get better timesheets.",
    ],
    decisionGuideB: [
      "Your team already uses manual timers consistently.",
      "You prefer more control and less automatic tracking.",
      "You want a simpler mental model and may want to pay a bit less per user.",
    ],
    ratingsComparison: [
      { category: "Automatic tracking", productA: "4.8", productB: "3.0" },
      { category: "Ease of use", productA: "4.4", productB: "4.8" },
      { category: "Reporting", productA: "4.4", productB: "4.6" },
      { category: "Pricing", productA: "4.0", productB: "4.3" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Automatic tracking",
        productA: "Automatic capture with AI-assisted timesheets",
        productB: "Manual timers and timesheets",
        supportA: "supported",
        supportB: "none",
        stronger: "A",
      },
      {
        feature: "Privacy controls",
        productA: "Configurable activity capture and privacy controls",
        productB: "Less background tracking; mostly explicit timers",
        supportA: "supported",
        supportB: "supported",
      },
    ],
    pricingComparison:
      "Both tools use per-user pricing across several tiers. Timely’s automatic tracking typically commands a higher per-seat price, but can save time and improve data quality. Toggl Track’s pricing is competitive, particularly for smaller teams or those already disciplined with manual tracking.",
    prosConsA: {
      pros: [
        "Automatic tracking drastically reduces missed time.",
        "AI-assisted timesheets make it easier to reconstruct days.",
        "Strong fit for consulting and knowledge-work teams.",
      ],
      cons: [
        "More complex to explain and configure for privacy.",
        "Higher per-user price than many manual trackers.",
        "Not everyone is comfortable with extensive background logging.",
      ],
    },
    prosConsB: {
      pros: [
        "Very clean manual-tracking experience.",
        "Strong tagging and reporting without heavy monitoring.",
        "Competitive pricing and a useful free tier.",
      ],
      cons: [
        "Relies on people remembering to start/stop timers.",
        "Reconstructing days can still be manual work.",
        "No automatic tracking for teams that want it.",
      ],
    },
    bestFor: [
      {
        heading: "Best for busy knowledge workers",
        body: "Timely is best for teams that jump between meetings, documents, and deep work and want software to reconstruct their time automatically.",
      },
      {
        heading: "Best for teams comfortable with manual timers",
        body: "Toggl Track is best for teams that already use manual timers well and prefer a simpler model without extensive background tracking.",
      },
    ],
    alternatives: [
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Free manual tracking with optional monitoring on higher tiers.",
        logoSrc: "/Logos/clockify.jpeg",
      },
      {
        name: "RescueTime",
        href: getTimeTrackingReviewUrl("rescuetime"),
        description: "Automatic personal productivity tracking and focus insights.",
        logoSrc: "/Logos/rescuetime.jpeg",
      },
    ],
    faqs: [
      {
        q: "Is automatic tracking in Timely worth paying for?",
        a: "If your team frequently forgets timers or has trouble reconstructing days, automatic tracking can pay for itself by improving billable accuracy and saving admin time.",
      },
      {
        q: "Does Timely’s automatic tracking create privacy issues?",
        a: "Timely offers controls for what’s tracked and how long data is stored, but it still requires clear communication and consent.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for automatic tracking", winner: "A" },
      { label: "Winner for simplicity & price", winner: "B" },
    ],
    moreComparisons: [
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Timely vs Harvest", href: getTimeTrackingCompareUrl("timely-vs-harvest") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for auto-tracking",
        winner: "A",
        reason: "Timely automatically records activity and suggests entries, reducing missed time.",
      },
      {
        label: "Best for classic timers",
        winner: "B",
        reason: "Toggl keeps tracking explicit and simple for teams used to manual timers.",
      },
    ],
  }),

  // Toggl vs Hubstaff
  buildComparison("toggl-vs-hubstaff", "toggl", "hubstaff", {
    summaryParagraph:
      "Toggl Track and Hubstaff both log hours for teams, but they reflect opposite philosophies: Toggl is built for fast adoption and reporting without surveillance, while Hubstaff adds screenshots, activity metrics, GPS, and operational features for organizations that want measurable oversight.",
    quickRecommendationA:
      "Choose Toggl Track if you want lightweight, trust-based time tracking with strong reports and minimal controversy during rollout.",
    quickRecommendationB:
      "Choose Hubstaff if you need monitoring, optional GPS for field staff, and a broader workforce-ops stack—not just a timer.",
    quickVerdictParagraphs: [
      "In our evaluation, Toggl Track consistently wins when the goal is honest timesheets and clean exports for billing or analysis, without asking employees to accept screen capture or idle detection. That makes it a better default for agencies, consultancies, and creative teams where culture and retention matter as much as the clock.",
      "Hubstaff is built for a different question: “What did people work on, and can we prove it?” Screenshots, activity levels, and optional GPS support compliance-heavy or distributed operations where visibility is a requirement, not a nice-to-have.",
      "If you are unsure, pilot Toggl first when oversight is optional; choose Hubstaff when policy, clients, or insurance explicitly require monitoring—or when you manage crews in the field and need location-aware data alongside time.",
    ],
    decisionGuideA: [
      "You want high adoption and a tool people do not perceive as surveillance.",
      "You already invoice or run payroll elsewhere and mainly need accurate, taggable time.",
      "Your buyers care about billable reporting and client-ready summaries more than idle alerts.",
    ],
    decisionGuideB: [
      "You need screenshots, URL/app tracking, or activity scores for accountability.",
      "You manage remote or hybrid staff where productivity metrics are part of management.",
      "Field teams need GPS, job sites, or proof-of-work adjacent to tracked hours.",
    ],
    ratingsComparison: [
      { category: "Ease of adoption", productA: "4.8", productB: "4.0" },
      { category: "Monitoring & oversight", productA: "3.2", productB: "4.7" },
      { category: "Reporting for billing", productA: "4.6", productB: "4.2" },
      { category: "Field / GPS workflows", productA: "3.0", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Screenshots & activity monitoring",
        productA: "Not a focus; trust-based tracking",
        productB: "Screenshots, activity scores, idle detection",
        supportA: "none",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "GPS & job sites",
        productA: "Not designed for field GPS workflows",
        productB: "GPS and job-site features for mobile teams",
        supportA: "none",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Toggl Track offers a usable free tier and per-user paid plans that stay predictable if you only need tracking and reports. Hubstaff tiers bundle monitoring depth, seats, and add-ons like payroll or scheduling, so total cost often reflects operational features—not just timers. Compare both at your real seat count and list the monitoring features you will actually turn on.",
    prosConsA: {
      pros: [
        "Low-friction UX that teams actually keep using.",
        "Strong tagging and exports without surveillance optics.",
        "Fits billable professional services and consultant workflows.",
      ],
      cons: [
        "No native screenshots, GPS, or deep productivity enforcement.",
        "Invoicing still lives in another product.",
        "Large teams pay per seat without unlimited-free fallback.",
      ],
    },
    prosConsB: {
      pros: [
        "Deep monitoring and proof-of-work style data when required.",
        "GPS and job sites for field and mobile crews.",
        "Can grow into payroll and scheduling for ops-heavy businesses.",
      ],
      cons: [
        "Rollout requires clear policy and often legal/HR review.",
        "Heavier admin than lightweight trackers.",
        "Can be overkill if you only need simple billable hours.",
      ],
    },
    bestFor: [
      {
        heading: "Best for trust-first and billable professional teams",
        body: "Toggl Track fits teams that want accurate time for invoices and retrospectives without monitoring-style features that can erode morale.",
      },
      {
        heading: "Best for monitored remote and field operations",
        body: "Hubstaff fits when oversight, GPS, or activity proof is part of the job—not an optional add-on—and you are prepared to communicate policy clearly.",
      },
    ],
    alternatives: [
      {
        name: "Harvest",
        href: getTimeTrackingReviewUrl("harvest"),
        description: "Time plus invoicing when billing should stay beside tracked hours.",
        logoSrc: "/Logos/harvest.png",
      },
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Free-friendly tracking with optional monitoring on higher tiers.",
        logoSrc: "/Logos/clockify.jpeg",
      },
    ],
    faqs: [
      {
        q: "Is Toggl Track or Hubstaff better for agencies?",
        a: "Most client-facing agencies choose Toggl Track when culture and simple billable reporting matter. Hubstaff can still fit if contracts require monitoring or you run blended desk and field teams—compare policy requirements before you buy.",
      },
      {
        q: "Can we switch from Hubstaff to Toggl Track later?",
        a: "Yes, but plan for change management: monitoring-heavy tools train people to expect oversight, while Toggl assumes self-reported timers. Export historical time, align on billing tags, and run a short pilot so reports stay comparable for clients.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for lightweight tracking", winner: "A" },
      { label: "Winner for monitoring & GPS", winner: "B" },
    ],
    moreComparisons: [
      { label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
      { label: "Clockify vs Hubstaff", href: getTimeTrackingCompareUrl("clockify-vs-hubstaff") },
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for culture & adoption",
        winner: "A",
        reason: "Toggl keeps tracking explicit and respectful—ideal when you do not need surveillance.",
      },
      {
        label: "Best for oversight & field ops",
        winner: "B",
        reason: "Hubstaff layers monitoring, activity data, and GPS when policy or operations require it.",
      },
    ],
  }),

  // Toggl vs Time Doctor
  buildComparison("toggl-vs-time-doctor", "toggl", "time-doctor", {
    summaryParagraph:
      "Toggl Track and Time Doctor both answer “how long did work take?” but Time Doctor adds distraction alerts, screenshots, and granular productivity analytics, while Toggl stays focused on timers, tags, and clean reporting for people who do not want a surveillance stack.",
    quickRecommendationA:
      "Choose Toggl Track when you want the simplest path to accurate billable time and team-wide adoption.",
    quickRecommendationB:
      "Choose Time Doctor when management needs app and site visibility, screenshots, and nudges to reduce off-task time.",
    quickVerdictParagraphs: [
      "Toggl Track’s strength is speed: start a timer, pick a project, and export summaries. We see it work best when leadership trusts contributors and cares about invoice-ready data—not keystroke-style accountability.",
      "Time Doctor targets organizations that want to quantify focus: which applications dominated the day, when idle periods occurred, and how to coach remote staff. That depth helps some teams; others find it heavy-handed without a documented policy.",
      "If your search intent is “best time tracker for freelancers and agencies,” Toggl is usually the closer match. If your intent is “employee monitoring software with time tracking,” Time Doctor belongs on the short list alongside Hubstaff.",
    ],
    decisionGuideA: [
      "Billable accuracy and client reports matter more than screen-level proof.",
      "You want integrations and extensions without configuring alert rules.",
      "You prefer tools that feel like productivity software, not compliance surveillance.",
    ],
    decisionGuideB: [
      "Managers need screenshots or URL/app reports for audits or coaching.",
      "You want distraction alerts and productivity scoring built in.",
      "Remote BPO or support-style teams need structured oversight.",
    ],
    ratingsComparison: [
      { category: "Simplicity & speed", productA: "4.8", productB: "4.0" },
      { category: "Productivity analytics", productA: "3.8", productB: "4.6" },
      { category: "Monitoring depth", productA: "3.0", productB: "4.7" },
      { category: "Billable reporting", productA: "4.6", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Screenshots & website/app tracking",
        productA: "Not core to the product",
        productB: "Screenshots and detailed usage logs",
        supportA: "none",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Distraction alerts",
        productA: "Reminders; not behavior enforcement",
        productB: "Alerts and productivity coaching flows",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Both charge per user on paid tiers. Toggl’s free tier can cover light use; Time Doctor’s value proposition assumes you will use monitoring features—factor that into ROI. Always reconcile quoted prices with each vendor’s current public pricing before purchase.",
    prosConsA: {
      pros: [
        "Fast onboarding and minimal training.",
        "Excellent for billable tags and exports.",
        "Less legal/HR friction than monitoring tools.",
      ],
      cons: [
        "No screenshot or deep productivity enforcement.",
        "Not built for heavy BPO-style oversight.",
        "Still requires discipline to start timers.",
      ],
    },
    prosConsB: {
      pros: [
        "Strong visibility into apps, sites, and idle time.",
        "Useful for distributed teams with formal oversight policies.",
        "Can support payroll-oriented workflows on some plans.",
      ],
      cons: [
        "Requires careful communication and consent.",
        "More configuration than lightweight trackers.",
        "Can be mismatched for high-trust creative teams.",
      ],
    },
    bestFor: [
      {
        heading: "Best for high-trust billable work",
        body: "Toggl Track suits consultants, designers, and agencies that sell expertise and need clean time data without monitoring optics.",
      },
      {
        heading: "Best for coached, metrics-driven remote teams",
        body: "Time Doctor fits when productivity metrics and screenshots are already part of how you manage performance.",
      },
    ],
    alternatives: [
      {
        name: "Hubstaff",
        href: getTimeTrackingReviewUrl("hubstaff"),
        description: "Monitoring plus GPS and field-friendly workflows.",
        logoSrc: "/Logos/hubstaff.jpeg",
      },
      {
        name: "Harvest",
        href: getTimeTrackingReviewUrl("harvest"),
        description: "Invoicing-centric tracking for service businesses.",
        logoSrc: "/Logos/harvest.png",
      },
    ],
    faqs: [
      {
        q: "Is Time Doctor “better” than Toggl Track?",
        a: "Only if you need monitoring. For straightforward billable time and team adoption, Toggl Track is usually easier. For screenshots, distraction alerts, and granular productivity analytics, Time Doctor is purpose-built.",
      },
      {
        q: "Do we need legal review before using Time Doctor?",
        a: "Often yes—jurisdictions differ on notice, consent, and what you may capture. Pair vendor documentation with your HR or counsel review; our methodology page explains how we think about disclosure and independence.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for simple billable tracking", winner: "A" },
      { label: "Winner for monitoring & coaching", winner: "B" },
    ],
    moreComparisons: [
      { label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
      { label: "Toggl vs Hubstaff", href: getTimeTrackingCompareUrl("toggl-vs-hubstaff") },
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for fast, trusted tracking",
        winner: "A",
        reason: "Toggl minimizes friction so people actually log time consistently.",
      },
      {
        label: "Best for productivity enforcement",
        winner: "B",
        reason: "Time Doctor is built around visibility into apps, sites, and focus time.",
      },
    ],
  }),

  // Harvest vs Hubstaff
  buildComparison("harvest-vs-hubstaff", "harvest", "hubstaff", {
    summaryParagraph:
      "Harvest and Hubstaff both serve businesses that need reliable time data, but Harvest orients the product around client billing—budgets, expenses, and invoices—while Hubstaff emphasizes workforce visibility with monitoring, GPS, and operational add-ons that go beyond a service invoice.",
    quickRecommendationA:
      "Choose Harvest when tracked time should flow into invoices, retainers, and project profitability in one app.",
    quickRecommendationB:
      "Choose Hubstaff when you need deeper oversight, field tracking, or an ops platform adjacent to payroll.",
    quickVerdictParagraphs: [
      "Harvest remains one of the clearest answers to “we bill clients from timesheets.” Budgets, billable flags, and expense capture sit next to invoicing, which keeps AR workflows tight for agencies and consultancies.",
      "Hubstaff can still export hours to other systems, but its differentiation is operational: activity signals, optional screenshots, GPS paths, and features aimed at distributed or mobile teams—not a replacement for a full invoicing ledger.",
      "We recommend Harvest when finance and client billing own the decision; recommend Hubstaff when operations, HR, or compliance own the decision and invoices may still live in QuickBooks, Xero, or another stack.",
    ],
    decisionGuideA: [
      "Project-based billing and expense recovery are weekly realities.",
      "You want one place to see budget burn against logged hours.",
      "Monitoring is not a primary buying criterion.",
    ],
    decisionGuideB: [
      "You need proof-of-work style data or GPS for crews.",
      "Payroll or scheduling integrations matter as much as invoices.",
      "You are okay pairing Hubstaff with a separate accounting or invoicing hub.",
    ],
    ratingsComparison: [
      { category: "Invoicing & AR", productA: "4.7", productB: "3.6" },
      { category: "Monitoring & GPS", productA: "3.2", productB: "4.7" },
      { category: "Project budgeting", productA: "4.5", productB: "4.2" },
      { category: "Ease for billers", productA: "4.5", productB: "4.0" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Native invoicing & expenses",
        productA: "Invoices and expenses tied to time entries",
        productB: "Exports; invoicing not the core story",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Activity monitoring & GPS",
        productA: "Lightweight; not a monitoring suite",
        productB: "Screenshots, activity, optional GPS",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Harvest prices per user with a limited free tier; expect to pay for everyone who tracks and bills. Hubstaff also scales per seat but tiers bundle monitoring depth—compare at the feature level you will enable, not just the headline per-user rate.",
    prosConsA: {
      pros: [
        "Strong agency workflow from time to invoice.",
        "Clear budgets and billable vs non-billable views.",
        "Less controversial rollout than monitoring tools.",
      ],
      cons: [
        "Not built for heavy surveillance or GPS-first ops.",
        "Per-user cost rises with headcount.",
        "Less field-job orchestration than Hubstaff.",
      ],
    },
    prosConsB: {
      pros: [
        "Operational depth for remote and mobile teams.",
        "Monitoring features when policy allows.",
        "Optional payroll and scheduling paths.",
      ],
      cons: [
        "Weaker as a standalone invoicing system versus Harvest.",
        "Requires governance for monitoring features.",
        "Finance teams may still need a dedicated billing tool.",
      ],
    },
    bestFor: [
      {
        heading: "Best for invoice-driven agencies",
        body: "Harvest fits when account managers and finance need one system to explain what was worked, what it cost, and what to bill.",
      },
      {
        heading: "Best for monitored operations teams",
        body: "Hubstaff fits distributed support, logistics, or hybrid crews where location and activity data matter as much as hours on a timesheet.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Lightweight tracking when Harvest is too much but you still need clean reports.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Time Doctor",
        href: getTimeTrackingReviewUrl("time-doctor"),
        description: "Desk-heavy monitoring alternative to compare policies side by side.",
        logoSrc: "/Logos/timedoctor.jpeg",
      },
    ],
    faqs: [
      {
        q: "Can Hubstaff replace Harvest for invoicing?",
        a: "Usually not completely. Hubstaff can feed hours into other systems, but Harvest’s product story is built around invoices, expenses, and client budgets. If invoicing is central, Harvest typically stays ahead; pair Hubstaff with accounting if you need both.",
      },
      {
        q: "Which integrates better with QuickBooks or Xero?",
        a: "Both categories integrate with major accounting tools, but the cleanest “time → invoice → sync” story often still runs through Harvest or your accounting hub. Verify the exact connector you need on each vendor’s site before switching.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for invoicing workflows", winner: "A" },
      { label: "Winner for monitoring & field ops", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
      { label: "Toggl vs Hubstaff", href: getTimeTrackingCompareUrl("toggl-vs-hubstaff") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for billing from time",
        winner: "A",
        reason: "Harvest connects hours, expenses, and invoices without bolting on another billing app.",
      },
      {
        label: "Best for workforce visibility",
        winner: "B",
        reason: "Hubstaff prioritizes operational proof and GPS-friendly workflows over native invoicing.",
      },
    ],
  }),

  // Everhour vs Toggl
  buildComparison("everhour-vs-toggl", "everhour", "toggl", {
    summaryParagraph:
      "Everhour and Toggl Track both integrate with popular work tools, but Everhour’s depth is embedding—time fields, budgets, and estimates inside Asana, Trello, ClickUp, and similar apps—while Toggl is a standalone tracker known for speed, polish, and reporting that sits beside your stack.",
    quickRecommendationA:
      "Choose Everhour if your team rarely leaves Asana/Trello-style boards and you want time entry where tasks already live.",
    quickRecommendationB:
      "Choose Toggl Track if you want a single, consistent tracker across tools with best-in-class simplicity and exports.",
    quickVerdictParagraphs: [
      "Everhour shines when project management is the source of truth. Seeing budgets beside tasks reduces context switching and helps PMs catch overruns early—especially for retainers and fixed-fee engagements.",
      "Toggl wins when people work across many surfaces: email, meetings, ad hoc tools, and multiple PM systems. Its extensions and universal timer mean you are not locked to one vendor’s task model.",
      "For SEO-style buyer journeys (“Asana time tracking”), Everhour is often the better semantic fit. For “simple time tracker for mixed stacks,” Toggl remains the default we recommend in pilots.",
    ],
    decisionGuideA: [
      "You standardized on one or two supported PM tools.",
      "Embedded budgets and estimates matter for PMs and account leads.",
      "You accept a separate invoicing path compared with Harvest-style suites.",
    ],
    decisionGuideB: [
      "Teams use many tools or change PM software occasionally.",
      "You want the fastest learning curve for new hires.",
      "Reporting flexibility and tag models matter more than in-card widgets.",
    ],
    ratingsComparison: [
      { category: "Embedded PM experience", productA: "4.7", productB: "4.2" },
      { category: "Universal ease of use", productA: "4.2", productB: "4.8" },
      { category: "Reporting depth", productA: "4.3", productB: "4.6" },
      { category: "Pricing clarity", productA: "4.2", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "In-tool embedding (Asana, Trello, etc.)",
        productA: "Deep native-style embeds in supported PM tools",
        productB: "Integrations + extensions; standalone hub",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Cross-tool consistency",
        productA: "Best inside supported integrations",
        productB: "Consistent experience everywhere Toggl runs",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Both products charge per user with tiered features. Everhour’s ROI shows up when embedded budgets reduce PM overhead; Toggl’s ROI shows up when higher adoption improves data quality. Model three scenarios: solo, 10 seats, and 50 seats, including annual discounts.",
    prosConsA: {
      pros: [
        "Excellent when tasks and budgets should live together.",
        "Strong for agencies running disciplined PM hygiene.",
        "Helpful for fixed-fee and retainer visibility.",
      ],
      cons: [
        "Less compelling if your PM stack is unsupported or fragmented.",
        "Invoicing still usually pairs with another product.",
        "Requires admin to keep projects and mappings tidy.",
      ],
    },
    prosConsB: {
      pros: [
        "Fast for mixed stacks and changing tools.",
        "Polished UX with strong reporting exports.",
        "Free tier for light use cases.",
      ],
      cons: [
        "Less “inside the card” than Everhour on supported tools.",
        "No invoicing; pairs with billing separately.",
        "Still depends on people starting timers.",
      ],
    },
    bestFor: [
      {
        heading: "Best for PM-centric agencies",
        body: "Everhour fits teams that live in Asana, Trello, or ClickUp and want budgets beside tasks without opening another app.",
      },
      {
        heading: "Best for cross-tool teams",
        body: "Toggl Track fits organizations where work spans many systems and you need one tracker that stays easy at scale.",
      },
    ],
    alternatives: [
      {
        name: "Harvest",
        href: getTimeTrackingReviewUrl("harvest"),
        description: "When you want time and invoices unified rather than embedded-only.",
        logoSrc: "/Logos/harvest.png",
      },
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Budget option with broad integrations and optional monitoring.",
        logoSrc: "/Logos/clockify.jpeg",
      },
    ],
    faqs: [
      {
        q: "Is Everhour better than Toggl for Asana users?",
        a: "Usually yes for in-board budgeting and time-on-task visibility. Toggl can still work via integration, but Everhour’s embed model matches Asana-first workflows closely.",
      },
      {
        q: "Can we use Toggl and Everhour together?",
        a: "Technically possible but rarely advisable—double logging creates reconciliation pain. Pick one system of record; if you outgrow your choice, migrate with a defined cutover week and frozen tags.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for embedded PM tracking", winner: "A" },
      { label: "Winner for universal simplicity", winner: "B" },
    ],
    moreComparisons: [
      { label: "Everhour vs Harvest", href: getTimeTrackingCompareUrl("everhour-vs-harvest") },
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best inside project tools",
        winner: "A",
        reason: "Everhour puts hours and budgets next to the tasks people already manage.",
      },
      {
        label: "Best all-around tracker",
        winner: "B",
        reason: "Toggl stays fast and consistent whether or not tasks live in a supported PM app.",
      },
    ],
  }),

  // Clockify vs Hubstaff
  buildComparison("clockify-vs-hubstaff", "clockify", "hubstaff", {
    summaryParagraph:
      "Clockify and Hubstaff both scale to larger teams, but Clockify leads with an unlimited free tier and optional monitoring add-ons, while Hubstaff targets organizations that want deeper operational telemetry—GPS, job sites, and richer workforce features—from day one.",
    quickRecommendationA:
      "Choose Clockify when cost coverage for many users matters most and you may or may not enable monitoring later.",
    quickRecommendationB:
      "Choose Hubstaff when GPS, job proofing, and deeper activity analytics are non-negotiable requirements.",
    quickVerdictParagraphs: [
      "Clockify’s free plan is a genuine differentiator: you can deploy tracking org-wide before you have budget approval, then turn on approvals or monitoring only where policy requires it.",
      "Hubstaff typically wins evaluations where the RFP mentions screenshots, routes, or activity scoring for compliance. The product assumes you will use those levers, not just log hours.",
      "For mixed organizations, a pragmatic pattern is Clockify for internal, high-trust teams and Hubstaff (or a pilot group) for outsourced or regulated desks—document the split so payroll and billing stay auditable.",
    ],
    decisionGuideA: [
      "You need many seats at zero or low software cost.",
      "You want optional monitoring rather than monitoring-first design.",
      "You prefer to add approvals and reminders before advanced oversight.",
    ],
    decisionGuideB: [
      "Field services need GPS trails tied to jobs.",
      "Clients or regulators expect demonstrable oversight.",
      "You want payroll-adjacent features in the same vendor orbit.",
    ],
    ratingsComparison: [
      { category: "Free / low-cost scale", productA: "4.9", productB: "4.0" },
      { category: "Monitoring depth", productA: "4.0", productB: "4.7" },
      { category: "GPS & job sites", productA: "3.5", productB: "4.6" },
      { category: "Ease of UI polish", productA: "4.1", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Unlimited free tracking",
        productA: "Unlimited users on free plan",
        productB: "Trial-limited; paid for sustained use",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "GPS & workforce ops",
        productA: "Lighter GPS/field story vs Hubstaff",
        productB: "Strong GPS, job sites, operational tooling",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Clockify’s headline value is free breadth; paid tiers unlock governance. Hubstaff’s pricing reflects monitoring and operations—benchmark both vendors with the same seat count and feature checklist your legal team approves.",
    prosConsA: {
      pros: [
        "Unlimited free users for core tracking.",
        "Flexible path from lightweight to monitored use.",
        "Good for education, internal IT, and nonprofit rollouts.",
      ],
      cons: [
        "UI less polished than premium-focused trackers.",
        "Deep field ops may still push you toward Hubstaff.",
        "Monitoring requires the same policy rigor as any vendor.",
      ],
    },
    prosConsB: {
      pros: [
        "Purpose-built for oversight and proof.",
        "Strong GPS and distributed team stories.",
        "Ecosystem around payroll and scheduling.",
      ],
      cons: [
        "Higher baseline cost than free Clockify seats.",
        "Not a substitute for full invoicing suites.",
        "Heavier cultural lift during rollout.",
      ],
    },
    bestFor: [
      {
        heading: "Best for maximum seat coverage on a budget",
        body: "Clockify lets you instrument whole departments without a PO fight, then tighten controls selectively.",
      },
      {
        heading: "Best for GPS and compliance-heavy oversight",
        body: "Hubstaff fits when the business case explicitly includes location, activity, or audit-style visibility.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Premium simplicity when Clockify feels too busy.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Time Doctor",
        href: getTimeTrackingReviewUrl("time-doctor"),
        description: "Desk-centric monitoring alternative worth shortlisting beside Hubstaff.",
        logoSrc: "/Logos/timedoctor.jpeg",
      },
    ],
    faqs: [
      {
        q: "Does Clockify monitor employees like Hubstaff?",
        a: "Clockify can add monitoring-style capabilities on paid tiers, but Hubstaff’s core story is deeper operational telemetry and GPS. Compare feature flags side by side and involve HR before enabling capture.",
      },
      {
        q: "Which is cheaper at 100 users?",
        a: "Clockify often wins on software fees because of the free tier, but total cost includes admin time, integrations, and which paid modules you enable. Hubstaff may still be cheaper than a patchwork if it replaces multiple point tools—run your own TCO worksheet.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for free / broad rollout", winner: "A" },
      { label: "Winner for deep monitoring & GPS", winner: "B" },
    ],
    moreComparisons: [
      { label: "Toggl vs Hubstaff", href: getTimeTrackingCompareUrl("toggl-vs-hubstaff") },
      { label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") },
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for cost at scale",
        winner: "A",
        reason: "Unlimited free users let you deploy widely before committing budget.",
      },
      {
        label: "Best for ops-grade oversight",
        winner: "B",
        reason: "Hubstaff is engineered around monitoring, GPS, and workforce visibility.",
      },
    ],
  }),

  // Timely vs Harvest
  buildComparison("timely-vs-harvest", "timely", "harvest", {
    summaryParagraph:
      "Timely and Harvest both help professional services teams understand where time goes, but Timely automates capture with AI-assisted reconstruction while Harvest assumes deliberate timers and ties those hours directly into invoices, expenses, and project budgets.",
    quickRecommendationA:
      "Choose Timely when missed timers are costing billable revenue and you want software to suggest entries from real work activity.",
    quickRecommendationB:
      "Choose Harvest when disciplined logging plus client-ready invoices is the workflow you need to protect cash flow.",
    quickVerdictParagraphs: [
      "Timely reduces the shame tax of blank timesheets: it watches calendars, documents, and apps (within your privacy settings) to propose blocks you approve. Consultants who live in meetings often recover hours they used to forget.",
      "Harvest still rewards teams that can start/stop timers or batch entries, but finance gets a straight line from those hours to invoices. That matters when AR aging is a bigger risk than missed minutes.",
      "We see buyers shortlist both when they want better data; the deciding question is whether the bottleneck is remembering to track (Timely) or billing quickly after tracking (Harvest).",
    ],
    decisionGuideA: [
      "Calendar-heavy days make manual timers unreliable.",
      "You are willing to tune privacy rules and explain them to staff.",
      "You already have invoicing handled or can pair another tool.",
    ],
    decisionGuideB: [
      "Invoices and expenses must originate next to approved hours.",
      "Your team can maintain timer hygiene with light coaching.",
      "You want fewer vendors touching client billing data.",
    ],
    ratingsComparison: [
      { category: "Automatic capture", productA: "4.8", productB: "3.2" },
      { category: "Invoicing & AR", productA: "3.6", productB: "4.7" },
      { category: "Project budgeting", productA: "4.3", productB: "4.5" },
      { category: "Privacy controls", productA: "4.2", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "AI / automatic time reconstruction",
        productA: "Automatic suggestions from activity",
        productB: "Manual timers and entries",
        supportA: "supported",
        supportB: "none",
        stronger: "A",
      },
      {
        feature: "Native invoicing",
        productA: "Exports / partner workflows; not Harvest-class billing",
        productB: "Invoices and expenses in-product",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Timely’s automation typically carries a higher per-seat price than manual trackers, justified when recovered billables exceed the subscription. Harvest’s pricing bundles billing value—compare both against your average recovered hours per month and your AR workflow.",
    prosConsA: {
      pros: [
        "Catches forgotten time across fragmented days.",
        "Strong narrative for consulting and hybrid remote work.",
        "Less manual reconstruction on Sunday nights.",
      ],
      cons: [
        "Requires upfront privacy conversations.",
        "Not a full replacement for Harvest-style invoicing.",
        "Higher price if automation is underutilized.",
      ],
    },
    prosConsB: {
      pros: [
        "Time, expenses, and invoices stay unified.",
        "Excellent for agencies billing from retainers or milestones.",
        "Predictable manual model for finance review.",
      ],
      cons: [
        "Still depends on logging discipline.",
        "No AI reconstruction for chaotic calendars.",
        "Per-user cost without automatic capture upside.",
      ],
    },
    bestFor: [
      {
        heading: "Best for calendar chaos and billable leakage",
        body: "Timely suits consultants and leaders who jump contexts all day and need software to rebuild what actually happened.",
      },
      {
        heading: "Best for invoice-ready agencies",
        body: "Harvest suits teams that can enforce time entry standards and want billing to be the immediate next step.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Manual tracking with excellent reporting if Timely feels too automatic.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Everhour",
        href: getTimeTrackingReviewUrl("everhour"),
        description: "Embedded PM tracking when your bottleneck is task visibility, not memory.",
        logoSrc: "/Logos/everhour.png",
      },
    ],
    faqs: [
      {
        q: "Can Timely replace Harvest?",
        a: "Only if you no longer need Harvest-grade invoicing inside the same product. Many teams pair automatic capture with a billing hub; others choose Harvest when AR workflows must stay in one place.",
      },
      {
        q: "Is automatic tracking compliant for our industry?",
        a: "Depends on jurisdiction, client contracts, and internal policy. Document what is captured, retention windows, and opt-out paths. When in doubt, involve counsel—automatic tools need the same rigor as monitoring products.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for automatic capture", winner: "A" },
      { label: "Winner for time-to-invoice", winner: "B" },
    ],
    moreComparisons: [
      { label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") },
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Everhour vs Harvest", href: getTimeTrackingCompareUrl("everhour-vs-harvest") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for recovering lost hours",
        winner: "A",
        reason: "Timely proposes time from real activity so busy days still reconcile.",
      },
      {
        label: "Best for billing in one flow",
        winner: "B",
        reason: "Harvest connects approved hours to invoices and expenses without another hop.",
      },
    ],
  }),

  // Everhour vs Clockify
  buildComparison("everhour-vs-clockify", "everhour", "clockify", {
    summaryParagraph:
      "Everhour and Clockify both integrate with popular business tools, but Everhour optimizes for teams that want time and budgets embedded inside project management apps, while Clockify optimizes for cost—especially unlimited free users—and flexible add-ons like approvals or light monitoring.",
    quickRecommendationA:
      "Choose Everhour when Asana, Trello, or similar tools are your system of record and embedded budgets matter.",
    quickRecommendationB:
      "Choose Clockify when you need the lowest software cost per seat, including a true free tier for everyone.",
    quickVerdictParagraphs: [
      "Everhour’s pricing only makes sense when embedded PM workflows save PM hours each week. If your team already lives inside tasks, seeing burn against estimates inside the same card is a tangible productivity win.",
      "Clockify wins total-cost-of-ownership conversations for startups, schools, and internal IT groups that simply need timesheets everywhere. You trade some polish for coverage.",
      "When buyers compare these two, we anchor on two metrics: (1) percentage of time logged inside the PM tool versus elsewhere, and (2) annual software spend per seat including paid modules.",
    ],
    decisionGuideA: [
      "Project managers need budget signals beside tasks.",
      "You run fixed-fee or hybrid billing tied to estimates.",
      "You are willing to pay per seat for embedded depth.",
    ],
    decisionGuideB: [
      "Free org-wide tracking is the gating requirement.",
      "Teams are okay opening Clockify alongside tasks.",
      "You may need approvals or monitoring without switching vendors.",
    ],
    ratingsComparison: [
      { category: "PM embed quality", productA: "4.7", productB: "3.9" },
      { category: "Free / value", productA: "3.8", productB: "4.9" },
      { category: "Reporting", productA: "4.3", productB: "4.2" },
      { category: "Ease of rollout", productA: "4.1", productB: "4.3" },
    ],
    featureComparison: [
      ...BASE_TIME_TRACKING_FEATURE_ROWS,
      {
        feature: "Embedded PM experience",
        productA: "Deep embeds in supported tools",
        productB: "Integrations; primarily standalone UI",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Unlimited free users",
        productA: "Paid-first positioning",
        productB: "Unlimited users on free plan",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Model Everhour against PM time saved; model Clockify against seats × optional paid modules. If Everhour prevents even one blown budget monthly, it often pays for itself—if not, Clockify keeps cash in the business.",
    prosConsA: {
      pros: [
        "Excellent for agencies disciplined about task hygiene.",
        "Budget visibility without exporting to spreadsheets.",
        "Strong fit for retainer and milestone tracking.",
      ],
      cons: [
        "Less compelling without supported PM tools.",
        "No unlimited-free equivalent.",
        "Requires ongoing admin to keep mappings clean.",
      ],
    },
    prosConsB: {
      pros: [
        "Unlimited free tier is hard to beat.",
        "Optional monitoring and approvals when policies evolve.",
        "Works across industries with minimal setup.",
      ],
      cons: [
        "Less native inside PM cards than Everhour.",
        "UI can feel busy on large accounts.",
        "Deep field or invoicing needs may point elsewhere.",
      ],
    },
    bestFor: [
      {
        heading: "Best for embedded PM finance visibility",
        body: "Everhour suits teams that want hours, estimates, and burn rates visible where PMs already work.",
      },
      {
        heading: "Best for org-wide coverage on minimal budget",
        body: "Clockify suits leaders who need every contractor and employee on a timer without negotiating a PO first.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Middle ground: polished standalone tracker with great reporting.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Harvest",
        href: getTimeTrackingReviewUrl("harvest"),
        description: "When embedded PM tracking still needs native invoicing next door.",
        logoSrc: "/Logos/harvest.png",
      },
    ],
    faqs: [
      {
        q: "Is Everhour worth it over free Clockify?",
        a: "If embedded budgets save PM time or prevent write-offs, yes. If you only need basic totals and rarely look at estimates inside tasks, Clockify’s free tier is likely enough.",
      },
      {
        q: "Which is easier for non-technical staff?",
        a: "Clockify’s standalone timer is easy to explain. Everhour is easy for people who already live in their PM tool but requires them to respect task structure. Pick the workflow that matches actual behavior, not ideal behavior.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for PM embeds", winner: "A" },
      { label: "Winner for free scale", winner: "B" },
    ],
    moreComparisons: [
      { label: "Everhour vs Toggl", href: getTimeTrackingCompareUrl("everhour-vs-toggl") },
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best inside Asana & Trello",
        winner: "A",
        reason: "Everhour aligns time with the tasks your PMs already manage.",
      },
      {
        label: "Best for $0 seat cost",
        winner: "B",
        reason: "Clockify’s unlimited free plan covers whole organizations when budget is tight.",
      },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getTimeTrackingComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getTimeTrackingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

