import { getTimeTrackingReviewUrl, getTimeTrackingCompareUrl, getTimeTrackingBestForUrl } from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

type ReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const BEST_TIME_TRACKING_HREF = "/time-tracking/best-time-tracking-software";
const TIME_TRACKING_COMPARE_HUB = "/time-tracking/compare";
const TIME_TRACKING_GUIDES_HUB = "/time-tracking/guides";

const TIME_TRACKING_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for freelancers", href: getTimeTrackingBestForUrl("freelancers") },
  { label: "Best for agencies", href: getTimeTrackingBestForUrl("agencies") },
  { label: "Best for consultants", href: getTimeTrackingBestForUrl("consultants") },
  { label: "Best for small business", href: getTimeTrackingBestForUrl("small-business") },
  { label: "Best for remote teams", href: getTimeTrackingBestForUrl("remote-teams") },
];

const TIME_TRACKING_METHODOLOGY = {
  title: "How we review time tracking software",
  sub: "Transparent process, use-case–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate time tracking software for ease of use, reporting, integrations, and how well it supports billing and team workflows.",
  bullets: [
    "We test core workflows: starting and stopping timers, editing time, approving timesheets, and exporting data.",
    "We compare pricing tiers, user limits, and billing features so you understand total cost for your team.",
    "We look at reporting, project visibility, and integrations with project management, invoicing, accounting, and payroll tools.",
  ],
};

const reviews: Record<string, ReviewData> = {
  toggl: {
    toolName: "Toggl Track",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.6",
    startingPrice: "Free tier",
    bestFor: "teams that want simple, reliable time tracking with strong reporting",
    visitUrl: "https://toggl.com/track",
    logoSrc: "/Logos/toggl.jpeg",
    quickVerdict:
      "Toggl Track is a great default for freelancers, agencies, and small teams that want easy time tracking and useful reports without heavy admin.",
    quickVerdictParagraphs: [
      "Toggl Track focuses on doing one job well: tracking time. The interface is clean, starting a timer is frictionless, and it works across web, desktop, and mobile. Tagging time by client, project, and task makes reporting powerful without forcing complex setup.",
      "Reporting is where Toggl Track stands out: you can quickly see where hours go by client, project, or user, and export summaries for billing or internal analysis. Integrations with tools like Asana, Trello, Jira, and others mean you can start timers from where work actually happens.",
      "Toggl Track does not include built-in invoicing or employee monitoring; you pair it with invoicing or accounting tools if you need those features. That's a trade-off: less all-in-one convenience, but a more focused experience that teams are willing to adopt.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Covers timers, timesheets, projects, tags, budgets, reminders, and reporting. No heavy monitoring or payroll—intentionally focused on tracking and insights.",
      },
      {
        category: "Pricing",
        score: "4.6",
        explanation:
          "Generous free tier for individuals and very small teams; paid plans are competitive for the feature set. Costs scale by user.",
      },
      {
        category: "Ease of Use",
        score: "4.8",
        explanation:
          "One of the easiest time trackers to get teams using consistently. Clean UI, simple workflows, and good onboarding UX.",
      },
      {
        category: "Integrations",
        score: "4.6",
        explanation:
          "Integrates with common project and productivity tools, plus browser extensions. No built-in invoicing; instead, it connects to other apps.",
      },
    ],
    pros: [
      "Very easy to use across web, desktop, and mobile",
      "Strong reporting with flexible filters and exports",
      "Good fit for freelancers, agencies, and small teams",
      "Free tier for light use; paid plans unlock more structure",
    ],
    cons: [
      "No built-in invoicing or quotes—requires another tool for billing",
      "No deep employee monitoring features (screenshots, GPS)",
      "Per-user pricing can add up for larger teams",
    ],
    keyFeatures: [
      { name: "Timers and timesheets", description: "Track time with live timers or manual entry across projects and clients." },
      { name: "Projects and budgets", description: "Assign time to projects, set budgets, and watch progress to avoid overruns." },
      { name: "Reporting", description: "Summaries by client, project, user, and tag, with exports for billing and analysis." },
      { name: "Integrations", description: "Browser extensions and integrations with popular project management tools." },
    ],
    pricingSummary:
      "Toggl Track offers a free tier and several paid plans with additional features for larger teams and more advanced reporting.",
    pricingTiers:
      "The free plan supports basic time tracking for individuals and small teams. Paid plans add billable rates, more granular permissions, and advanced reporting. Pricing is per user per month, with discounts for annual billing. It's generally competitive with other focused time tracking tools.",
    integrations: [],
    integrationsIntro:
      "Toggl Track integrates with project management tools, calendars, and browsers, making it easy to start timers from the context of work. It also exports time data that can be used in invoicing and accounting systems.",
    bestForEditorial:
      "Toggl Track is best for teams that prioritize ease of use and reporting over heavy monitoring or all-in-one billing. It fits freelancers, agencies, and knowledge workers who live in project tools and want low-friction tracking.",
    whoShouldAvoid:
      "Organizations that require detailed monitoring (screenshots, GPS, keystrokes) or built-in invoicing may prefer tools like Hubstaff, Time Doctor, or Harvest.",
    compareLinks: [
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") },
    ],
    faqs: [
      {
        q: "Is Toggl Track free?",
        a: "Toggl Track offers a free tier with core time tracking features. Paid plans add billable rates, more granular permissions, and advanced reporting.",
      },
      {
        q: "Does Toggl Track handle invoicing?",
        a: "Toggl Track does not include full invoicing. You export time data or connect it to invoicing and accounting tools for billing.",
      },
    ],
    alternatives: [
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Unlimited free users and projects; good if you want free time tracking at scale.",
        logoSrc: "/Logos/clockify.jpeg",
      },
      {
        name: "Harvest",
        href: getTimeTrackingReviewUrl("harvest"),
        description: "Time tracking plus built-in invoicing and expenses.",
        logoSrc: "/Logos/harvest.png",
      },
    ],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [
      { label: "Best time tracking for freelancers", href: getTimeTrackingBestForUrl("freelancers") },
      { label: "Best time tracking for agencies", href: getTimeTrackingBestForUrl("agencies") },
    ],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
    relatedReading: [
      { label: "Invoicing software hub", href: "/invoicing" },
      { label: "Accounting software hub", href: "/accounting" },
    ],
  },
  harvest: {
    toolName: "Harvest",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.4",
    startingPrice: "$12/user/mo",
    bestFor: "teams that want time tracking tied directly to invoicing",
    visitUrl: "https://www.getharvest.com",
    logoSrc: "/Logos/harvest.png",
    quickVerdict:
      "Harvest is a strong fit for agencies and service businesses that bill for time and want to turn hours into invoices without extra tools.",
    quickVerdictParagraphs: [
      "Harvest combines time tracking, expenses, and invoicing in one package. You log time against projects and tasks, then generate invoices based on billable hours and rates. That makes it particularly appealing for agencies and service businesses.",
      "Reporting is focused on project budgets and billable vs non-billable time so you can see which clients and projects are profitable. Integrations with tools like Asana, Trello, and Slack help bring tracking closer to where work happens.",
      "On the downside, Harvest's pricing has crept up over time, and larger teams may outgrow its reporting depth. For teams that only need tracking and analytics, Toggl or Clockify may be simpler and cheaper.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.4",
        explanation: "Time tracking, expenses, invoicing, and simple reporting for project-based work.",
      },
      {
        category: "Pricing",
        score: "4.1",
        explanation: "Per-user pricing; good value for small teams, but costs can climb with seat count.",
      },
      {
        category: "Ease of Use",
        score: "4.5",
        explanation: "Easy for teams to adopt; UI is straightforward and focused on projects and clients.",
      },
      {
        category: "Integrations",
        score: "4.3",
        explanation: "Connects to project management and accounting tools, plus a decent API.",
      },
    ],
    pros: [
      "Built-in invoicing and expenses tied to time entries",
      "Good for agencies and project-based billing",
      "Clear project and budget reporting",
    ],
    cons: [
      "Pricing can feel high for larger teams",
      "Reporting is less deep than some analytics-focused tools",
      "Limited employee monitoring features",
    ],
    keyFeatures: [
      { name: "Time & project tracking", description: "Track time by client, project, and task with simple timers." },
      { name: "Invoicing", description: "Turn tracked time into invoices directly inside Harvest." },
      { name: "Expenses", description: "Log and bill expenses alongside time entries." },
    ],
    pricingSummary:
      "Harvest uses per-user pricing with a single main plan that includes time tracking, expenses, and invoicing.",
    pricingTiers:
      "There is a free plan for solo users with limited projects; most teams will need the paid plan at around $12/user/month. The model is simple, but total cost increases with team size.",
    integrations: [],
    integrationsIntro:
      "Harvest integrates with project management tools, calendars, and accounting platforms, making it relatively easy to fit into an existing stack.",
    bestForEditorial:
      "Harvest is best for small agencies and service businesses that want an end-to-end flow from tracked time to invoices without cobbling tools together.",
    whoShouldAvoid:
      "Teams that just need tracking and analytics (and already have invoicing elsewhere) may find Toggl or Clockify more focused and cost-effective.",
    compareLinks: [
      { label: "Toggl vs Harvest", href: getTimeTrackingCompareUrl("toggl-vs-harvest") },
      { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
      { label: "Everhour vs Harvest", href: getTimeTrackingCompareUrl("everhour-vs-harvest") },
    ],
    faqs: [
      {
        q: "Does Harvest include invoicing?",
        a: "Yes. Harvest includes built-in invoicing so you can bill for tracked time and expenses directly.",
      },
      {
        q: "Is Harvest good for agencies?",
        a: "Harvest is a popular choice for agencies because it ties hours, budgets, and invoices together at the project level.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "Better if you want focused tracking and deeper reporting without invoicing.",
        logoSrc: "/Logos/toggl.jpeg",
      },
      {
        name: "Everhour",
        href: getTimeTrackingReviewUrl("everhour"),
        description: "Built for project teams with deep integrations into tools like Asana and Trello.",
        logoSrc: "/Logos/everhour.png",
      },
    ],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [
      { label: "Best time tracking for agencies", href: getTimeTrackingBestForUrl("agencies") },
      { label: "Best time tracking for small business", href: getTimeTrackingBestForUrl("small-business") },
    ],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
    relatedReading: [
      { label: "Best invoicing software (2026)", href: "/invoicing/best-invoicing-software" },
      { label: "Accounting software hub", href: "/accounting" },
    ],
  },
  clockify: {
    toolName: "Clockify",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.3",
    startingPrice: "Free",
    bestFor: "teams that need unlimited free time tracking with optional paid upgrades",
    visitUrl: "https://clockify.me",
    logoSrc: "/Logos/clockify.jpeg",
    quickVerdict:
      "Clockify is a strong option if you want time tracking for many users without paying much—or at all—for core features.",
    quickVerdictParagraphs: [
      "Clockify's main selling point is its free plan with unlimited users and projects. That makes it easy to roll out time tracking to a whole organization without immediate budget impact.",
      "Paid plans add approval workflows, reminders, time-off management, and more detailed controls. The UI is serviceable but less polished than some competitors; in exchange, you get a lot of functionality for the price.",
      "Monitoring features like screenshots and GPS can be enabled on higher tiers, making Clockify a flexible middle ground between light trackers and heavy monitoring tools.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.3",
        explanation:
          "Timers, timesheets, projects, approvals, basic scheduling, and optional monitoring features on higher tiers.",
      },
      {
        category: "Pricing",
        score: "4.7",
        explanation: "Excellent value for the free tier and competitive pricing for paid plans.",
      },
      {
        category: "Ease of Use",
        score: "4.1",
        explanation: "Straightforward but slightly busier UI than Toggl; still approachable for most teams.",
      },
      {
        category: "Integrations",
        score: "4.2",
        explanation: "Good set of integrations, though less extensive than some competitors.",
      },
    ],
    pros: [
      "Unlimited free users and projects on the free plan",
      "Optional approvals, reminders, and monitoring on paid tiers",
      "Flexible enough for many different team types",
    ],
    cons: [
      "Interface is more utilitarian than polished",
      "Monitoring features may feel heavy-handed in some cultures",
      "Advanced features scattered across multiple paid tiers",
    ],
    keyFeatures: [
      { name: "Free time tracking", description: "Unlimited users and projects on the free plan with basic tracking." },
      { name: "Approvals and reminders", description: "Timesheet approvals and reminders help keep data complete." },
      { name: "Monitoring options", description: "Screenshots and activity tracking on higher tiers for accountability." },
    ],
    pricingSummary:
      "Clockify offers a robust free plan and several paid tiers with additional controls for approvals, monitoring, and administration.",
    pricingTiers:
      "The free plan is enough for many teams to start with. Paid tiers add advanced features and better admin controls. Costs are per user per month.",
    integrations: [],
    integrationsIntro:
      "Clockify integrates with popular tools via browser extensions and direct integrations, making it easy to log time from existing workflows.",
    bestForEditorial:
      "Clockify is best for budget-conscious teams that still want flexible time tracking and optional monitoring features.",
    whoShouldAvoid:
      "If you value a very clean interface and focused feature set over breadth, Toggl may be a better fit.",
    compareLinks: [
      { label: "Clockify vs Toggl", href: getTimeTrackingCompareUrl("clockify-vs-toggl") },
      { label: "Harvest vs Clockify", href: getTimeTrackingCompareUrl("harvest-vs-clockify") },
    ],
    faqs: [
      {
        q: "Is Clockify really free?",
        a: "Clockify's core time tracking features are free for unlimited users and projects. Advanced features live on paid tiers.",
      },
    ],
    alternatives: [
      {
        name: "Toggl Track",
        href: getTimeTrackingReviewUrl("toggl"),
        description: "More polished interface and reporting, but no unlimited free tier for larger teams.",
        logoSrc: "/Logos/toggl.jpeg",
      },
    ],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [
      { label: "Best time tracking for small business", href: getTimeTrackingBestForUrl("small-business") },
      { label: "Best time tracking for remote teams", href: getTimeTrackingBestForUrl("remote-teams") },
    ],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
  },
  "hubstaff": {
    toolName: "Hubstaff",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.4",
    startingPrice: "$4.99/user/mo",
    bestFor: "remote and field teams that need activity and location tracking",
    visitUrl: "https://hubstaff.com",
    logoSrc: "/Logos/hubstaff.jpeg",
    quickVerdict:
      "Hubstaff is built for organizations that want time tracking paired with detailed productivity monitoring and location tracking.",
    quickVerdictParagraphs: [
      "Hubstaff tracks time, captures activity metrics, and can take periodic screenshots. GPS tracking supports field teams and job sites. Together, these features make it popular with organizations that need visibility into how remote or distributed teams spend their time.",
      "Payroll, invoices, scheduling, and time-off features are available on higher plans, giving Hubstaff an all-in-one angle for some teams.",
      "The flip side is that monitoring features are more intrusive than lightweight trackers. It's important to consider culture and communication before rolling them out.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Time tracking, screenshots, activity scores, GPS tracking, payroll, and scheduling cover a wide range of needs.",
      },
      {
        category: "Pricing",
        score: "4.2",
        explanation: "Entry-level plans are affordable; advanced features require higher tiers.",
      },
      {
        category: "Ease of Use",
        score: "4.1",
        explanation: "More complex than simple trackers due to the breadth of features and configuration options.",
      },
      {
        category: "Integrations",
        score: "4.3",
        explanation: "Good set of integrations with project, accounting, and payroll tools.",
      },
    ],
    pros: [
      "Strong monitoring capabilities (screenshots, activity, GPS)",
      "Built-in payroll, invoicing, and scheduling options",
      "Good fit for remote, field, and distributed teams",
    ],
    cons: [
      "Monitoring features can feel invasive if not communicated well",
      "Configuration is more complex than lightweight tools",
      "Some features locked to higher tiers",
    ],
    keyFeatures: [
      { name: "Activity monitoring", description: "Screenshots and activity scores show how time is spent." },
      { name: "GPS & job sites", description: "Location tracking for field teams and job-based work." },
      { name: "Payroll & invoicing", description: "Optional built-in payroll and invoices based on tracked time." },
    ],
    pricingSummary:
      "Hubstaff uses per-user pricing with several plans; monitoring and payroll features live on mid and higher tiers.",
    pricingTiers:
      "Entry-level plans are competitively priced for remote teams that need monitoring. Advanced features like schedules, time-off, and payroll cost more; compare to Time Doctor and Clockify's higher tiers.",
    integrations: [],
    integrationsIntro:
      "Hubstaff integrates with project, accounting, and payroll tools so that tracked time flows into existing systems.",
    bestForEditorial:
      "Hubstaff is best for companies that need accountability for remote or field staff and are comfortable with monitoring.",
    whoShouldAvoid:
      "Teams that value autonomy and low-surveillance cultures may prefer tools like Toggl or Harvest without screenshots.",
    compareLinks: [{ label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") }],
    faqs: [
      {
        q: "Does Hubstaff take screenshots?",
        a: "Yes. Hubstaff can take periodic screenshots and capture activity metrics; both can be configured per project.",
      },
    ],
    alternatives: [
      {
        name: "Time Doctor",
        href: getTimeTrackingReviewUrl("time-doctor"),
        description: "Similar monitoring-focused tool with a slightly different approach to reporting.",
        logoSrc: "/Logos/timedoctor.jpeg",
      },
      {
        name: "Clockify",
        href: getTimeTrackingReviewUrl("clockify"),
        description: "Adds monitoring on higher tiers but starts as a lighter tracker.",
        logoSrc: "/Logos/clockify.jpeg",
      },
    ],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [
      { label: "Best time tracking for remote teams", href: getTimeTrackingBestForUrl("remote-teams") },
      { label: "Best time tracking for small business", href: getTimeTrackingBestForUrl("small-business") },
    ],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
  },
  "time-doctor": {
    toolName: "Time Doctor",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.2",
    startingPrice: "From ~$7/user/mo",
    bestFor: "teams that want strict oversight and productivity metrics",
    visitUrl: "https://www.timedoctor.com",
    logoSrc: "/Logos/timedoctor.jpeg",
    quickVerdict:
      "Time Doctor is a monitoring-heavy time tracking tool with screenshots, activity metrics, and distraction alerts aimed at improving productivity.",
    quickVerdictParagraphs: [
      "Time Doctor captures detailed data about how team members spend their time, including app and website usage. It can take screenshots and trigger alerts when people spend too long on unproductive sites.",
      "The tool is positioned as a way to improve focus and reduce time waste, especially for remote teams.",
      "As with any monitoring-heavy tool, it needs careful rollout and clear communication to avoid trust issues.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.4",
        explanation:
          "Rich monitoring features, time tracking, optional payroll, and productivity reporting.",
      },
      {
        category: "Pricing",
        score: "4.0",
        explanation: "Per-user pricing with multiple tiers; reasonable for the feature set but not the cheapest.",
      },
      {
        category: "Ease of Use",
        score: "4.0",
        explanation: "More complex onboarding and settings than lightweight trackers.",
      },
      {
        category: "Integrations",
        score: "4.1",
        explanation: "Integrates with project and help desk tools, plus APIs.",
      },
    ],
    pros: [
      "Detailed productivity and distraction reporting",
      "Strong monitoring for remote and outsourced teams",
      "Optional payroll features",
    ],
    cons: [
      "Monitoring may feel invasive without strong communication",
      "Heavier setup and configuration",
      "Overkill for teams that just need basic tracking",
    ],
    keyFeatures: [
      { name: "Productivity reports", description: "Shows time spent on apps, websites, and tasks." },
      { name: "Screenshots & alerts", description: "Optional screenshots and alerts for unproductive time." },
    ],
    pricingSummary:
      "Time Doctor offers several plans with different monitoring and reporting capabilities; pricing is per user per month.",
    pricingTiers:
      "Lower tiers cover basic tracking; higher tiers add more monitoring and reporting options. Compare total cost to Hubstaff and Clockify's monitoring tiers for your team size.",
    integrations: [],
    integrationsIntro:
      "Integrates with project tools, help desk systems, and more; helps tie tracked time to tickets or tasks.",
    bestForEditorial:
      "Time Doctor is best for companies that explicitly want strict oversight of remote or outsourced work.",
    whoShouldAvoid:
      "Teams that prefer trust-based cultures or client-service environments where screenshots are inappropriate should avoid monitoring-heavy tools.",
    compareLinks: [{ label: "Hubstaff vs Time Doctor", href: getTimeTrackingCompareUrl("hubstaff-vs-time-doctor") }],
    faqs: [],
    alternatives: [
      {
        name: "Hubstaff",
        href: getTimeTrackingReviewUrl("hubstaff"),
        description: "Similar monitoring focus with GPS and job-site tooling.",
        logoSrc: "/Logos/hubstaff.jpeg",
      },
    ],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [{ label: "Best time tracking for remote teams", href: getTimeTrackingBestForUrl("remote-teams") }],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
  },
  rescuetime: {
    toolName: "RescueTime",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.1",
    startingPrice: "Free tier",
    bestFor: "individuals and small teams focused on personal productivity",
    visitUrl: "https://www.rescuetime.com",
    logoSrc: "/Logos/rescuetime.jpeg",
    quickVerdict:
      "RescueTime automatically tracks how you spend time on your devices and surfaces insights to help you focus—less about billing, more about habits.",
    quickVerdictParagraphs: [
      "RescueTime runs in the background, automatically categorizing apps and websites as productive or distracting.",
      "You get daily and weekly summaries, focus scores, and tools to block distracting sites when you need to focus.",
      "It is not built for billing clients or managing team timesheets; it's more about coaching and self-management.",
    ],
    ratingBreakdown: [],
    pros: [
      "Automatic tracking with minimal manual input",
      "Great for understanding personal productivity patterns",
    ],
    cons: [
      "Not designed for client billing or payroll",
      "Team features are limited compared to other tools",
    ],
    keyFeatures: [],
    pricingSummary:
      "RescueTime offers a free tier and paid plans with more advanced focus and blocking features.",
    integrations: [],
    integrationsIntro:
      "Integrates with calendars and browsers to better understand how your time is spent across tools.",
    bestForEditorial:
      "Best for individuals and small teams who want automatic tracking and productivity coaching, not detailed project billing.",
    whoShouldAvoid:
      "If you need project-based billing, invoicing, or team timesheets, choose tools like Toggl, Harvest, or Clockify instead.",
    compareLinks: [],
    faqs: [],
    alternatives: [
      {
        name: "Timely",
        href: getTimeTrackingReviewUrl("timely"),
        description: "Another automatic tracker focused on teams and projects.",
        logoSrc: "/Logos/timely.png",
      },
    ],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
  },
  everhour: {
    toolName: "Everhour",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.3",
    startingPrice: "From ~$8.50/user/mo",
    bestFor: "teams that live in project management tools like Asana or Trello",
    visitUrl: "https://everhour.com",
    logoSrc: "/Logos/everhour.png",
    quickVerdict:
      "Everhour is built for project teams that want time tracking deeply embedded into tools like Asana, Trello, and ClickUp.",
    quickVerdictParagraphs: [],
    ratingBreakdown: [],
    pros: [],
    cons: [],
    keyFeatures: [],
    pricingSummary: "",
    integrations: [],
    integrationsIntro:
      "Everhour's main draw is how tightly it integrates with project management tools—time fields and reports appear right in the tools your team already uses.",
    bestForEditorial:
      "Best for agencies and teams that already manage all work in tools like Asana, Trello, or ClickUp and want time tracking to live there too.",
    whoShouldAvoid:
      "If you don't rely on those project tools, Everhour's strengths matter less; general trackers like Toggl or Harvest may be simpler.",
    compareLinks: [{ label: "Everhour vs Harvest", href: getTimeTrackingCompareUrl("everhour-vs-harvest") }],
    faqs: [],
    alternatives: [],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [{ label: "Best time tracking for agencies", href: getTimeTrackingBestForUrl("agencies") }],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
  },
  timely: {
    toolName: "Timely",
    category: "Time tracking",
    categoryHref: "/time-tracking",
    features: [],
    rating: "4.2",
    startingPrice: "From ~$11/user/mo",
    bestFor: "teams that want automatic tracking with AI-assisted timesheets",
    visitUrl: "https://memory.ai/timely",
    logoSrc: "/Logos/timely.png",
    quickVerdict:
      "Timely automatically records app, website, and document activity so you can build accurate timesheets without starting and stopping timers manually.",
    quickVerdictParagraphs: [],
    ratingBreakdown: [],
    pros: [],
    cons: [],
    keyFeatures: [],
    pricingSummary: "",
    integrations: [],
    integrationsIntro:
      "Timely connects to calendars and tools to reconstruct your day and suggest time entries, making it easier to log time for busy knowledge workers.",
    bestForEditorial:
      "Best for teams that struggle to remember to start timers and want auto-captured activity to build accurate timesheets.",
    whoShouldAvoid:
      "If manual timers are fine and budgets are tight, simpler tools like Toggl or Clockify may be more cost-effective.",
    compareLinks: [{ label: "Timely vs Toggl", href: getTimeTrackingCompareUrl("timely-vs-toggl") }],
    faqs: [],
    alternatives: [],
    scenarioLinks: TIME_TRACKING_SCENARIO_LINKS,
    methodology: TIME_TRACKING_METHODOLOGY,
    useCaseLinks: [],
    compareHubHref: TIME_TRACKING_COMPARE_HUB,
    bestPayrollSoftwareHref: BEST_TIME_TRACKING_HREF,
    guideHubHref: TIME_TRACKING_GUIDES_HUB,
    guideHubLabel: "Time tracking guides",
  },
};

export function getTimeTrackingReviewBySlug(slug: string): ReviewData | null {
  return reviews[slug] ?? null;
}

export function getTimeTrackingReviewSlugs(): string[] {
  return Object.keys(reviews);
}

