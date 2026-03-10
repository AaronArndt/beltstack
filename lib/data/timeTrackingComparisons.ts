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
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getTimeTrackingComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getTimeTrackingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

