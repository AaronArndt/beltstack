import {
  getProjectManagementReviewUrl,
  getProjectManagementCompareUrl,
  getProjectManagementBestForUrl,
} from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

type ProjectManagementReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const PROJECT_MANAGEMENT_COMPARE_HUB = "/project-management/compare";
const PROJECT_MANAGEMENT_GUIDES_HUB = "/project-management/guides";
const BEST_PROJECT_MANAGEMENT_HREF = "/project-management/best-project-management-software";

const PROJECT_MANAGEMENT_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for freelancers", href: getProjectManagementBestForUrl("freelancers") },
  { label: "Best for small business", href: getProjectManagementBestForUrl("small-business") },
  { label: "Best for agencies", href: getProjectManagementBestForUrl("agencies") },
  { label: "Best for startups", href: getProjectManagementBestForUrl("startups") },
  { label: "Best for remote teams", href: getProjectManagementBestForUrl("remote-teams") },
];

const PROJECT_MANAGEMENT_METHODOLOGY = {
  title: "How we review project management software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate project management tools for ease of use, collaboration, views, automation, and reporting.",
  bullets: [
    "We test core workflows: creating projects, assigning tasks, building views, and tracking deadlines.",
    "We compare pricing tiers, user limits, automations, and storage so you understand total cost.",
    "We look at collaboration, reporting, and integrations with tools like time tracking, CRM, and documentation.",
  ],
};

const reviews: Record<string, ProjectManagementReviewData> = {
  asana: {
    toolName: "Asana",
    category: "Project management",
    categoryHref: "/project-management",
    rating: "4.6",
    startingPrice: "Free tier",
    bestFor: "small teams and growing companies that want structured projects and clear task ownership",
    visitUrl: "https://asana.com",
    logoSrc: "/Logos/asuna.jpeg",
    quickVerdict:
      "Asana is a strong default for many small businesses: it balances structure and ease of use, with projects, tasks, and multiple views that scale as your work gets more complex.",
    quickVerdictParagraphs: [
      "Asana gives you projects, tasks, and subtasks with due dates, assignees, and comments. List, board, and calendar views make it easy to see what is due soon and who is responsible. Most small teams can get started with the free tier and a simple project template.",
      "As your workload grows, Asana’s sections, custom fields, and timeline view help you manage dependencies and longer initiatives. Rules automate routine work like routing tasks or updating statuses, and reporting dashboards give managers a snapshot of progress and workload.",
      "If you only need a lightweight Kanban board, Asana can feel like more tool than you need; Trello or Notion might be simpler. For teams that want more structure without going full enterprise, Asana is one of the safest picks.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.6",
        explanation:
          "Tasks, projects, multiple views, automations, and reporting fit most small teams well. Portfolios and advanced reporting live on higher tiers.",
      },
      {
        category: "Pricing",
        score: "4.4",
        explanation:
          "Free tier is generous for very small teams; paid plans are competitive but add up with headcount. Compare tiers based on needed features and collaborators.",
      },
      {
        category: "Ease of Use",
        score: "4.6",
        explanation:
          "New users can onboard quickly with list and board views; there is some learning curve around advanced features, but basic use is straightforward.",
      },
      {
        category: "Integrations",
        score: "4.5",
        explanation:
          "Integrates with tools like Slack, Google Workspace, Microsoft 365, and many others so tasks connect to where work starts.",
      },
    ],
    pros: [
      "Balanced mix of structure and simplicity for most teams",
      "Multiple views (list, board, calendar, timeline) on paid plans",
      "Automations reduce status-update busywork",
      "Strong for cross-functional projects and repeatable workflows",
    ],
    cons: [
      "Advanced features require paid tiers",
      "Can feel heavy for very simple task lists",
      "Per-seat pricing can climb with a large team of occasional users",
    ],
    bestForEditorial:
      "Asana is best for small and mid-size teams that have enough projects and handoffs to need structure, but do not want to manage a complex enterprise system. Agencies, marketing teams, product teams, and general operations groups all tend to be a good fit.",
    whoShouldAvoid:
      "Solo freelancers or tiny teams with only a handful of tasks may prefer Trello or Notion. Organizations that require portfolio-level budgeting and complex dependencies might look at Wrike or Smartsheet instead.",
    pricingSummary:
      "Asana offers a free tier with basic projects for small teams; paid plans add timeline, custom fields, advanced reporting, and more automations. Pricing is per user per month with discounts for annual billing.",
    pricingTiers:
      "The free plan covers simple projects with limited collaborators. Starter/Business plans add timeline, custom fields, approvals, portfolios, and more. Review which features matter before upgrading.",
    costVsCompetitors:
      "Asana generally sits in the middle of the project management market: more expensive than Trello’s free-leaning usage, often similar to Monday and ClickUp once you enable advanced features.",
    features: [],
    keyFeatures: [
      { name: "Projects, tasks, and subtasks", description: "Structure work into projects with tasks and subtasks, each with assignees, due dates, and comments." },
      { name: "Multiple views", description: "Switch between list, board, calendar, and timeline views so different roles can see work the way they prefer." },
      { name: "Rules and automations", description: "Automate repetitive steps like assigning tasks, moving work between sections, or updating fields when statuses change." },
      { name: "Reporting and dashboards", description: "Track project status, workload, and overdue tasks with dashboards and simple charts." },
    ],
    integrations: ["Slack", "Google Workspace", "Microsoft 365", "Time tracking tools", "File storage"],
    integrationsIntro:
      "Asana connects to communication, calendar, and file tools so tasks can be created from emails, messages, or documents and stay linked to their context.",
    contractorUse: [],
    alternatives: [
      {
        name: "ClickUp",
        href: getProjectManagementReviewUrl("clickup"),
        description: "More customization and all-in-one workspace features.",
      },
      {
        name: "Trello",
        href: getProjectManagementReviewUrl("trello"),
        description: "Simpler Kanban-style boards for lightweight projects.",
      },
    ],
    faqs: [
      {
        q: "Is Asana free?",
        a: "Asana has a free tier that supports basic projects and tasks for small teams. Paid plans add more views, automations, and reporting.",
      },
      {
        q: "Is Asana good for small business?",
        a: "Yes. Asana is a solid fit for many small businesses that manage multiple projects at once and want clearer ownership and deadlines.",
      },
    ],
    methodology: PROJECT_MANAGEMENT_METHODOLOGY,
    compareLinks: [
      { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
      { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
    ],
    compareSectionTitle: "Compare Asana with other project management software",
    bestPayrollSoftwareHref: BEST_PROJECT_MANAGEMENT_HREF,
    compareHubHref: PROJECT_MANAGEMENT_COMPARE_HUB,
    compareHubLabel: "Compare project management software",
    bestRoundupLabel: "Best project management software (2026) — full roundup",
    bestForSectionTitle: "Best project management software for different use cases",
    bestForSectionSub: "Find project management tools by scenario.",
    scenarioLinks: PROJECT_MANAGEMENT_SCENARIO_LINKS,
    guideHubHref: PROJECT_MANAGEMENT_GUIDES_HUB,
    guideHubLabel: "Project management guides",
    relatedReading: [
      { label: "Time tracking software hub", href: "/time-tracking" },
      { label: "CRM software hub", href: "/crm" },
    ],
  },
  clickup: {
    toolName: "ClickUp",
    category: "Project management",
    categoryHref: "/project-management",
    rating: "4.5",
    startingPrice: "Free tier",
    bestFor: "teams that want a highly customizable workspace with tasks, docs, and dashboards in one tool",
    visitUrl: "https://clickup.com",
    logoSrc: "/Logos/clickup.jpeg",
    quickVerdict:
      "ClickUp is one of the most flexible project management platforms: you can model almost any workflow, but you should budget time to tame the complexity and keep your setup simple.",
    quickVerdictParagraphs: [
      "ClickUp combines tasks, docs, goals, dashboards, and whiteboards in one product. Spaces, folders, and lists give you lots of freedom in how you structure work; custom fields and views can mirror everything from simple boards to complex team structures.",
      "The tradeoff for this flexibility is that ClickUp can feel busy until you streamline your setup. We recommend starting with a small number of spaces and standard views, then layering in automation and custom fields as your team gets comfortable.",
      "If you want a single app to replace multiple tools and are willing to invest some configuration time, ClickUp is compelling. If you prefer a more opinionated, out-of-the-box experience, Asana or Monday may be easier.",
    ],
    ratingBreakdown: [],
    pros: [
      "Extremely flexible structure that can model many workflows",
      "Tasks, docs, whiteboards, and dashboards in one platform",
      "Competitive pricing with a strong free tier",
    ],
    cons: [
      "Interface can feel overwhelming without careful setup",
      "Easy to over-customize, which can confuse new users",
      "Some advanced features require higher-tier plans",
    ],
    bestForEditorial:
      "ClickUp is best for teams that want an all-in-one workspace and have someone willing to own the initial configuration. Agencies, product teams, and operations groups that outgrow simple boards can benefit from its flexibility.",
    whoShouldAvoid:
      "Teams that want a minimal, out-of-the-box project tool may prefer Trello, Asana, or Notion. If no one has time to own configuration, ClickUp can become messy quickly.",
    pricingSummary:
      "ClickUp offers a free plan with generous limits and paid tiers that add more storage, security, and advanced features. Pricing is per user per month with typical discounts for annual billing.",
    features: [],
    keyFeatures: [],
    integrations: [],
    integrationsIntro:
      "ClickUp integrates with many popular tools and also aims to reduce the need for separate docs and whiteboard apps by including those features natively.",
    alternatives: [
      {
        name: "Asana",
        href: getProjectManagementReviewUrl("asana"),
        description: "More opinionated and polished; easier for many teams to adopt.",
      },
      {
        name: "Notion",
        href: getProjectManagementReviewUrl("notion"),
        description: "Doc-first with database views; good if documentation is your core need.",
      },
    ],
    faqs: [],
    pricingTiers: "",
    costVsCompetitors: "",
    contractorUse: [],
    methodology: PROJECT_MANAGEMENT_METHODOLOGY,
    scenarioLinks: PROJECT_MANAGEMENT_SCENARIO_LINKS,
    compareLinks: [
      { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
      { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
    ],
    compareSectionTitle: "Compare ClickUp with other project management software",
    bestPayrollSoftwareHref: BEST_PROJECT_MANAGEMENT_HREF,
    compareHubHref: PROJECT_MANAGEMENT_COMPARE_HUB,
    compareHubLabel: "Compare project management software",
    bestRoundupLabel: "Best project management software (2026) — full roundup",
    bestForSectionTitle: "Best project management software for different use cases",
    bestForSectionSub: "Find project management tools by scenario.",
    guideHubHref: PROJECT_MANAGEMENT_GUIDES_HUB,
    guideHubLabel: "Project management guides",
  },
  monday: {
    toolName: "Monday",
    category: "Project management",
    categoryHref: "/project-management",
    rating: "4.4",
    startingPrice: "From ~$10/user/mo",
    bestFor: "teams that want visual boards and automations that span projects and operations",
    visitUrl: "https://monday.com",
    logoSrc: "/Logos/monday.jpeg",
    quickVerdict:
      "Monday turns projects and workflows into flexible boards with multiple views and automations. It is a good fit when you want one system for projects, ops, and ad-hoc workflows—not just task lists.",
    quickVerdictParagraphs: [],
    ratingBreakdown: [],
    pros: [],
    cons: [],
    bestForEditorial: "",
    whoShouldAvoid: "",
    pricingSummary: "",
    pricingTiers: "",
    costVsCompetitors: "",
    features: [],
    keyFeatures: [],
    integrations: [],
    integrationsIntro: "",
    contractorUse: [],
    alternatives: [],
    faqs: [],
    methodology: PROJECT_MANAGEMENT_METHODOLOGY,
    compareLinks: [
      { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
      { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
    ],
    compareSectionTitle: "Compare Monday with other project management software",
    bestPayrollSoftwareHref: BEST_PROJECT_MANAGEMENT_HREF,
    compareHubHref: PROJECT_MANAGEMENT_COMPARE_HUB,
    compareHubLabel: "Compare project management software",
    bestRoundupLabel: "Best project management software (2026) — full roundup",
    bestForSectionTitle: "Best project management software for different use cases",
    bestForSectionSub: "Find project management tools by scenario.",
    scenarioLinks: PROJECT_MANAGEMENT_SCENARIO_LINKS,
    guideHubHref: PROJECT_MANAGEMENT_GUIDES_HUB,
    guideHubLabel: "Project management guides",
  },
};

export function getProjectManagementReviewBySlug(slug: string): ProjectManagementReviewData | null {
  return reviews[slug] ?? null;
}

export function getProjectManagementReviewSlugs(): string[] {
  return Object.keys(reviews);
}

