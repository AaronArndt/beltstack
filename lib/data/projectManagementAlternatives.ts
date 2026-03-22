/**
 * Project management alternatives page data.
 * Used by app/project-management/alternatives/[slug]/page.tsx with AlternativesTemplate.
 * Only includes products that have live project management review pages.
 */

import { getProjectManagementReviewUrl, getProjectManagementCompareUrl, getProjectManagementBestForUrl } from "@/lib/routes";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getProjectManagementComparison } from "@/lib/data/projectManagementComparisons";
import type {
  AlternativesTemplateProps,
  AlternativesTopPick,
  AlternativesTableRow,
  AlternativesEditorialBlock,
  AlternativesDetailBlock,
  AlternativesLink,
  AlternativesFaqItem,
} from "@/components/alternatives/AlternativesTemplate";

const CATEGORY = { href: "/project-management", label: "Project management" };
const ROUNDUP_HREF = "/project-management/best-project-management-software";
const COMPARE_HUB = "/project-management/compare";
const GUIDES_HUB = "/project-management/guides";

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  { heading: "Tasks, projects, and views", body: "Most teams need list, board, and calendar or timeline views. Choose a tool that supports the views your team actually uses. Lightweight teams may prefer Trello or Notion; structured teams may prefer Asana or Monday." },
  { heading: "Collaboration", body: "Comments, file attachments, and notifications keep work in one place. Check how assignees, due dates, and status updates work so everyone stays aligned." },
  { heading: "Automation", body: "Rules and automations reduce busywork—routing tasks, updating statuses, and sending reminders. Asana, Monday, and ClickUp offer strong automation; Trello uses Power-Ups." },
  { heading: "Integrations", body: "Project tools should connect to Slack, email, calendar, and time tracking. Asana and Monday have broad integrations; Notion and ClickUp offer docs and wikis in the same workspace." },
  { heading: "Pricing and scale", body: "Free tiers suit small teams; paid plans add views, automations, and reporting. Compare per-seat cost and feature limits at your team size." },
];

function buildTableRows(
  originalRow: AlternativesTableRow,
  alternatives: AlternativesTopPick[]
): AlternativesTableRow[] {
  const altRows: AlternativesTableRow[] = alternatives.map((a) => ({
    slug: a.slug,
    name: a.name,
    logoSrc: a.logoSrc,
    bestFor: a.bestFor,
    startingPrice: a.startingPrice ?? "—",
    standoutFeature: a.standoutFeature ?? a.bestFor,
    reviewHref: a.reviewHref,
  }));
  return [originalRow, ...altRows];
}

function pmRel(slug: string) {
  return toAlternativesRelatedComparison(getProjectManagementCompareUrl(slug), getProjectManagementComparison(slug));
}

function defaultRelatedResources(productName: string, originalReviewHref: string): AlternativesLink[] {
  return [
    { label: "Project management hub", href: CATEGORY.href },
    { label: "Best project management software", href: ROUNDUP_HREF },
    { label: "Compare project management software", href: COMPARE_HUB },
    { label: "Project management guides", href: GUIDES_HUB },
    { label: "Best for small business", href: getProjectManagementBestForUrl("small-business") },
    { label: `${productName} review`, href: originalReviewHref },
  ];
}

// ——— Asana alternatives ———
const ASANA_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "Highly customizable workspace with tasks, docs, goals, and dashboards.", reviewHref: getProjectManagementReviewUrl("clickup"), compareHref: getProjectManagementCompareUrl("asana-vs-clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "Board-based project management with strong automations.", reviewHref: getProjectManagementReviewUrl("monday"), compareHref: getProjectManagementCompareUrl("asana-vs-monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards; automations" },
  { slug: "trello", name: "Trello", logoSrc: "/Logos/trello.png", rating: "4.3", bestFor: "simple boards", description: "Lightweight Kanban boards for straightforward task tracking.", reviewHref: getProjectManagementReviewUrl("trello"), startingPrice: "Free tier", standoutFeature: "Simple Kanban" },
  { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", rating: "4.4", bestFor: "docs + projects", description: "Docs, databases, and task views in one flexible workspace.", reviewHref: getProjectManagementReviewUrl("notion"), startingPrice: "Free tier", standoutFeature: "Docs and databases" },
  { slug: "wrike", name: "Wrike", logoSrc: "/Logos/wrike.png", rating: "4.3", bestFor: "enterprise and portfolios", description: "Portfolio and dependency management for larger teams.", reviewHref: getProjectManagementReviewUrl("wrike"), startingPrice: "From ~$9.80/user/mo", standoutFeature: "Portfolios; enterprise" },
];

const asanaOriginalRow: AlternativesTableRow = {
  slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", bestFor: "most small teams overall", startingPrice: "Free tier", standoutFeature: "Balance of structure and ease", reviewHref: getProjectManagementReviewUrl("asana"),
};

const asanaPage: AlternativesTemplateProps = {
  title: "Best Asana Alternatives (2026)",
  subtitle: "If Asana isn't the right fit—because of cost, complexity, or workflow—these project management alternatives offer strong options for small teams and growing companies.",
  productName: "Asana",
  productSlug: "asana",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getProjectManagementReviewUrl("asana"),
  quickAnswerParagraphs: [
    "Asana is a strong default for many teams; alternatives include ClickUp for more customization, Monday for visual workflows, Trello for simplicity, Notion for docs and databases, and Wrike for enterprise and portfolios. ClickUp and Monday are the closest full alternatives; Trello and Notion suit lighter needs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Customization", body: "ClickUp offers more flexible views, custom fields, and all-in-one docs and tasks. Teams that want one workspace for everything may prefer ClickUp." },
    { heading: "Visual workflows", body: "Monday is board-centric with strong automations. Good for teams that think in boards and workflows." },
    { heading: "Simplicity", body: "Trello and Notion are lighter. Trello is simple Kanban; Notion is docs and databases with task views." },
  ],
  topAlternatives: ASANA_ALTERNATIVES,
  comparisonTableRows: buildTableRows(asanaOriginalRow, ASANA_ALTERNATIVES),
  detailedAlternatives: [
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers a highly customizable workspace with tasks, docs, goals, and dashboards in one tool. Strong for teams that want more flexibility than Asana.", reviewHref: getProjectManagementReviewUrl("clickup"), compareHref: getProjectManagementCompareUrl("asana-vs-clickup") },
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday is board-based with strong automations. For teams that prefer visual workflows and adaptable boards.", reviewHref: getProjectManagementReviewUrl("monday"), compareHref: getProjectManagementCompareUrl("asana-vs-monday") },
    { productName: "Trello", heading: "Best for simple boards", body: "Trello offers lightweight Kanban boards. For teams that don't need Asana's structure and prefer simplicity.", reviewHref: getProjectManagementReviewUrl("trello") },
    { productName: "Notion", heading: "Best for docs + projects", body: "Notion combines docs, databases, and task views. For teams that want a flexible knowledge base and lightweight project views.", reviewHref: getProjectManagementReviewUrl("notion") },
    { productName: "Wrike", heading: "Best for enterprise and portfolios", body: "Wrike focuses on portfolios, dependencies, and enterprise reporting. For teams that need more depth than Asana.", reviewHref: getProjectManagementReviewUrl("wrike") },
  ],
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    pmRel("asana-vs-clickup"),
    pmRel("asana-vs-monday"),
  ],
  relatedResources: defaultRelatedResources("Asana", getProjectManagementReviewUrl("asana")),
  faqItems: [
    { q: "What is the best Asana alternative?", a: "ClickUp and Monday are the best full alternatives. ClickUp offers more customization; Monday offers more visual workflows. Trello and Notion suit lighter needs." },
    { q: "Is Asana better than ClickUp?", a: "Asana is simpler to adopt; ClickUp offers more customization and all-in-one docs and tasks. Choose Asana for ease; ClickUp for flexibility." },
    { q: "Which project management software is cheaper than Asana?", a: "Trello and Notion have generous free tiers. ClickUp and Monday have free tiers too; compare paid plans at your team size." },
  ],
};

// ——— ClickUp alternatives ———
const CLICKUP_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "balance and ease", description: "Structured projects and tasks with simpler onboarding.", reviewHref: getProjectManagementReviewUrl("asana"), compareHref: getProjectManagementCompareUrl("asana-vs-clickup"), startingPrice: "Free tier", standoutFeature: "Balance; ease of use" },
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "Board-based with strong automations.", reviewHref: getProjectManagementReviewUrl("monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "trello", name: "Trello", logoSrc: "/Logos/trello.png", rating: "4.3", bestFor: "simple boards", description: "Lightweight Kanban; less complexity.", reviewHref: getProjectManagementReviewUrl("trello"), compareHref: getProjectManagementCompareUrl("clickup-vs-trello"), startingPrice: "Free tier", standoutFeature: "Simple Kanban" },
  { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", rating: "4.4", bestFor: "docs + projects", description: "Docs and databases with task views.", reviewHref: getProjectManagementReviewUrl("notion"), startingPrice: "Free tier", standoutFeature: "Docs and databases" },
  { slug: "wrike", name: "Wrike", logoSrc: "/Logos/wrike.png", rating: "4.3", bestFor: "enterprise", description: "Portfolios and dependencies for larger teams.", reviewHref: getProjectManagementReviewUrl("wrike"), startingPrice: "From ~$9.80/user/mo", standoutFeature: "Portfolios; enterprise" },
];

const clickupPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best ClickUp Alternatives (2026)",
  subtitle: "If ClickUp isn't the right fit—because of complexity, preference for simpler tools, or different workflow—these project management alternatives offer strong options.",
  productName: "ClickUp",
  productSlug: "clickup",
  originalReviewHref: getProjectManagementReviewUrl("clickup"),
  quickAnswerParagraphs: [
    "ClickUp is highly customizable; teams look for alternatives when they want simpler onboarding (Asana, Trello), visual workflows (Monday), or docs-first flexibility (Notion). Asana is the best balance of structure and ease; Monday suits board-centric teams; Trello and Notion suit lighter needs.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Complexity", body: "ClickUp can feel overwhelming. Asana and Trello offer simpler onboarding and fewer features to configure." },
    { heading: "Workflow", body: "Monday is more visual and board-centric; Notion is docs and databases first. Different fits for different teams." },
    { heading: "Scale", body: "Wrike and Smartsheet suit enterprise and portfolio needs." },
  ],
  topAlternatives: CLICKUP_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", bestFor: "customizable workspaces", startingPrice: "Free tier", standoutFeature: "All-in-one; customization", reviewHref: getProjectManagementReviewUrl("clickup") },
    CLICKUP_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Asana", heading: "Best for balance and ease", body: "Asana offers structured projects and tasks with simpler onboarding. For teams that want less configuration than ClickUp.", reviewHref: getProjectManagementReviewUrl("asana"), compareHref: getProjectManagementCompareUrl("asana-vs-clickup") },
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday is board-based with strong automations. For teams that prefer visual workflows.", reviewHref: getProjectManagementReviewUrl("monday") },
    { productName: "Trello", heading: "Best for simple boards", body: "Trello offers lightweight Kanban. For teams that want less complexity than ClickUp.", reviewHref: getProjectManagementReviewUrl("trello"), compareHref: getProjectManagementCompareUrl("clickup-vs-trello") },
    { productName: "Notion", heading: "Best for docs + projects", body: "Notion combines docs, databases, and task views. Different approach from ClickUp's task-centric model.", reviewHref: getProjectManagementReviewUrl("notion") },
    { productName: "Wrike", heading: "Best for enterprise", body: "Wrike focuses on portfolios and dependencies. For larger teams that need enterprise depth.", reviewHref: getProjectManagementReviewUrl("wrike") },
  ],
  relatedComparisons: [
    pmRel("asana-vs-clickup"),
    pmRel("clickup-vs-trello"),
  ],
  relatedResources: defaultRelatedResources("ClickUp", getProjectManagementReviewUrl("clickup")),
  faqItems: [
    { q: "What is the best ClickUp alternative?", a: "Asana is the best alternative for balance and ease. Monday suits visual workflows; Trello and Notion suit simpler or docs-first needs." },
    { q: "Is ClickUp better than Asana?", a: "ClickUp offers more customization and all-in-one features; Asana is simpler to adopt. Choose ClickUp for flexibility; Asana for ease." },
    { q: "Which project management software is simpler than ClickUp?", a: "Asana, Trello, and Notion are often simpler to get started with. Trello is the lightest; Asana adds structure without ClickUp's depth." },
  ],
};

// ——— Monday alternatives ———
const MONDAY_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "balance and ease", description: "Structured projects and tasks. Simpler onboarding.", reviewHref: getProjectManagementReviewUrl("asana"), compareHref: getProjectManagementCompareUrl("asana-vs-monday"), startingPrice: "Free tier", standoutFeature: "Balance; ease of use" },
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "Highly customizable workspace with tasks, docs, and dashboards.", reviewHref: getProjectManagementReviewUrl("clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "wrike", name: "Wrike", logoSrc: "/Logos/wrike.png", rating: "4.3", bestFor: "enterprise and portfolios", description: "Portfolio and dependency management.", reviewHref: getProjectManagementReviewUrl("wrike"), compareHref: getProjectManagementCompareUrl("monday-vs-wrike"), startingPrice: "From ~$9.80/user/mo", standoutFeature: "Portfolios; enterprise" },
  { slug: "trello", name: "Trello", logoSrc: "/Logos/trello.png", rating: "4.3", bestFor: "simple boards", description: "Lightweight Kanban boards.", reviewHref: getProjectManagementReviewUrl("trello"), startingPrice: "Free tier", standoutFeature: "Simple Kanban" },
  { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", rating: "4.4", bestFor: "docs + projects", description: "Docs, databases, and task views.", reviewHref: getProjectManagementReviewUrl("notion"), startingPrice: "Free tier", standoutFeature: "Docs and databases" },
];

const mondayPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Monday Alternatives (2026)",
  subtitle: "If Monday isn't the right fit—because of cost, preference for different structure, or workflow—these project management alternatives offer strong options.",
  productName: "Monday",
  productSlug: "monday",
  originalReviewHref: getProjectManagementReviewUrl("monday"),
  quickAnswerParagraphs: [
    "Monday is board-centric with strong automations; alternatives include Asana for balance and ease, ClickUp for customization, Wrike for enterprise and portfolios, and Trello or Notion for simpler or docs-first workflows. Asana and ClickUp are the closest full alternatives.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Pricing", body: "Monday's per-user pricing can add up. Asana, Trello, and Notion have free tiers that suit small teams." },
    { heading: "Structure", body: "Asana is more list and project oriented; ClickUp is more customizable. Different approaches to the same goal." },
    { heading: "Simplicity", body: "Trello and Notion are lighter for teams that don't need Monday's breadth." },
  ],
  topAlternatives: MONDAY_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", bestFor: "visual workflows and boards", startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards; automations", reviewHref: getProjectManagementReviewUrl("monday") },
    MONDAY_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Asana", heading: "Best for balance and ease", body: "Asana offers structured projects and tasks with a different balance of views and ease of use.", reviewHref: getProjectManagementReviewUrl("asana"), compareHref: getProjectManagementCompareUrl("asana-vs-monday") },
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers highly customizable workspaces with tasks, docs, and dashboards.", reviewHref: getProjectManagementReviewUrl("clickup") },
    { productName: "Wrike", heading: "Best for enterprise and portfolios", body: "Wrike focuses on portfolios, dependencies, and enterprise reporting. Compare with Monday for scale.", reviewHref: getProjectManagementReviewUrl("wrike"), compareHref: getProjectManagementCompareUrl("monday-vs-wrike") },
    { productName: "Trello", heading: "Best for simple boards", body: "Trello offers lightweight Kanban. For teams that want simpler boards than Monday.", reviewHref: getProjectManagementReviewUrl("trello") },
    { productName: "Notion", heading: "Best for docs + projects", body: "Notion combines docs, databases, and task views. Docs-first alternative to Monday.", reviewHref: getProjectManagementReviewUrl("notion") },
  ],
  relatedComparisons: [
    pmRel("asana-vs-monday"),
    pmRel("monday-vs-wrike"),
  ],
  relatedResources: defaultRelatedResources("Monday", getProjectManagementReviewUrl("monday")),
  faqItems: [
    { q: "What is the best Monday alternative?", a: "Asana and ClickUp are the best full alternatives. Asana for balance and ease; ClickUp for customization. Trello and Notion suit simpler or docs-first needs." },
    { q: "Is Monday better than Asana?", a: "Monday is more board-centric and visual; Asana is more list and project oriented. Both are strong; choose by preference for boards vs structure." },
    { q: "Which project management software is cheaper than Monday?", a: "Asana, Trello, and Notion have free tiers. Compare paid plans at your team size; Monday's per-user pricing can be higher." },
  ],
};

// ——— Trello alternatives ———
const TRELLO_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "More features and views; boards plus list, calendar, docs.", reviewHref: getProjectManagementReviewUrl("clickup"), compareHref: getProjectManagementCompareUrl("clickup-vs-trello"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "structure", description: "Projects, tasks, and multiple views. More structure than Trello.", reviewHref: getProjectManagementReviewUrl("asana"), startingPrice: "Free tier", standoutFeature: "Balance; structure" },
  { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", rating: "4.4", bestFor: "docs + boards", description: "Databases and docs with board views. Flexible.", reviewHref: getProjectManagementReviewUrl("notion"), compareHref: getProjectManagementCompareUrl("notion-vs-trello"), startingPrice: "Free tier", standoutFeature: "Docs and databases" },
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "Board-based with strong automations.", reviewHref: getProjectManagementReviewUrl("monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "basecamp", name: "Basecamp", logoSrc: "/Logos/vasecamp.jpeg", rating: "4.2", bestFor: "simplicity and flat pricing", description: "Simple projects and communication. Flat fee.", reviewHref: getProjectManagementReviewUrl("basecamp"), startingPrice: "Flat fee", standoutFeature: "Simplicity; flat pricing" },
];

const trelloPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Trello Alternatives (2026)",
  subtitle: "If Trello isn't the right fit—because you need more structure, views, or features—these project management alternatives offer strong options.",
  productName: "Trello",
  productSlug: "trello",
  originalReviewHref: getProjectManagementReviewUrl("trello"),
  quickAnswerParagraphs: [
    "Trello is simple Kanban; teams look for alternatives when they need more views (ClickUp, Asana), docs and databases (Notion), or visual workflows (Monday). ClickUp and Asana add structure; Notion adds docs and flexibility; Basecamp offers simplicity with flat pricing.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "More views and structure", body: "ClickUp and Asana add list, calendar, and timeline views plus projects and subtasks. Better for growing teams." },
    { heading: "Docs and databases", body: "Notion combines boards with docs and databases. For teams that want more than cards." },
    { heading: "Automation", body: "Monday and ClickUp offer stronger built-in automations than Trello's Power-Ups." },
  ],
  topAlternatives: TRELLO_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "trello", name: "Trello", logoSrc: "/Logos/trello.png", bestFor: "simple Kanban boards", startingPrice: "Free tier", standoutFeature: "Simple Kanban", reviewHref: getProjectManagementReviewUrl("trello") },
    TRELLO_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers boards plus list, calendar, docs, and dashboards. Natural step up from Trello.", reviewHref: getProjectManagementReviewUrl("clickup"), compareHref: getProjectManagementCompareUrl("clickup-vs-trello") },
    { productName: "Asana", heading: "Best for structure", body: "Asana adds projects, tasks, and multiple views. For teams that outgrow Trello's simplicity.", reviewHref: getProjectManagementReviewUrl("asana") },
    { productName: "Notion", heading: "Best for docs + boards", body: "Notion offers databases and docs with board views. Different flexibility from Trello.", reviewHref: getProjectManagementReviewUrl("notion"), compareHref: getProjectManagementCompareUrl("notion-vs-trello") },
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday is board-based with strong automations. For teams that want more than Trello.", reviewHref: getProjectManagementReviewUrl("monday") },
    { productName: "Basecamp", heading: "Best for simplicity and flat pricing", body: "Basecamp offers simple projects and communication with a flat fee. Another simple alternative.", reviewHref: getProjectManagementReviewUrl("basecamp") },
  ],
  relatedComparisons: [
    pmRel("clickup-vs-trello"),
    pmRel("notion-vs-trello"),
  ],
  relatedResources: defaultRelatedResources("Trello", getProjectManagementReviewUrl("trello")),
  faqItems: [
    { q: "What is the best Trello alternative?", a: "ClickUp and Asana are the best alternatives with more structure. Notion adds docs and databases; Monday adds visual workflows; Basecamp offers simplicity and flat pricing." },
    { q: "Is Trello better than ClickUp?", a: "Trello is simpler and lighter; ClickUp offers more features and views. Choose Trello for simplicity; ClickUp for growth." },
    { q: "Which project management software is free like Trello?", a: "Asana, ClickUp, and Notion have free tiers. Trello's free tier is generous; compare limits and features." },
  ],
};

// ——— Notion alternatives ———
const NOTION_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "trello", name: "Trello", logoSrc: "/Logos/trello.png", rating: "4.3", bestFor: "simple boards", description: "Lightweight Kanban. Simpler than Notion for task-only use.", reviewHref: getProjectManagementReviewUrl("trello"), compareHref: getProjectManagementCompareUrl("notion-vs-trello"), startingPrice: "Free tier", standoutFeature: "Simple Kanban" },
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "structure", description: "Structured projects and tasks. More PM-focused.", reviewHref: getProjectManagementReviewUrl("asana"), startingPrice: "Free tier", standoutFeature: "Balance; structure" },
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "Tasks, docs, and dashboards in one workspace.", reviewHref: getProjectManagementReviewUrl("clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "Board-based project management.", reviewHref: getProjectManagementReviewUrl("monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "basecamp", name: "Basecamp", logoSrc: "/Logos/vasecamp.jpeg", rating: "4.2", bestFor: "simplicity", description: "Simple projects and communication. Flat fee.", reviewHref: getProjectManagementReviewUrl("basecamp"), startingPrice: "Flat fee", standoutFeature: "Simplicity; flat pricing" },
];

const notionPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Notion Alternatives (2026)",
  subtitle: "If Notion isn't the right fit—because you need more project structure, simpler boards, or different workflow—these project management alternatives offer strong options.",
  productName: "Notion",
  productSlug: "notion",
  originalReviewHref: getProjectManagementReviewUrl("notion"),
  quickAnswerParagraphs: [
    "Notion combines docs and databases with task views; alternatives include Trello for simple boards, Asana and ClickUp for more project structure, Monday for visual workflows, and Basecamp for simplicity. Trello is the closest lightweight alternative; Asana and ClickUp add PM depth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Project structure", body: "Asana and ClickUp offer more built-in project and task structure. Better for teams that need clear ownership and due dates." },
    { heading: "Simplicity", body: "Trello is simpler for board-only use. Basecamp is simpler for projects and communication." },
    { heading: "Visual workflows", body: "Monday is more board-centric and workflow oriented." },
  ],
  topAlternatives: NOTION_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", bestFor: "docs and databases", startingPrice: "Free tier", standoutFeature: "Docs and databases", reviewHref: getProjectManagementReviewUrl("notion") },
    NOTION_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Trello", heading: "Best for simple boards", body: "Trello offers lightweight Kanban. For teams that want simpler task tracking than Notion.", reviewHref: getProjectManagementReviewUrl("trello"), compareHref: getProjectManagementCompareUrl("notion-vs-trello") },
    { productName: "Asana", heading: "Best for structure", body: "Asana offers structured projects and tasks. More PM-focused than Notion's flexible databases.", reviewHref: getProjectManagementReviewUrl("asana") },
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp combines tasks, docs, and dashboards. Alternative all-in-one to Notion.", reviewHref: getProjectManagementReviewUrl("clickup") },
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday is board-based with strong automations.", reviewHref: getProjectManagementReviewUrl("monday") },
    { productName: "Basecamp", heading: "Best for simplicity", body: "Basecamp offers simple projects and communication with flat pricing.", reviewHref: getProjectManagementReviewUrl("basecamp") },
  ],
  relatedComparisons: [
    pmRel("notion-vs-trello"),
  ],
  relatedResources: defaultRelatedResources("Notion", getProjectManagementReviewUrl("notion")),
  faqItems: [
    { q: "What is the best Notion alternative?", a: "Trello for simple boards; Asana and ClickUp for more project structure; Monday for visual workflows; Basecamp for simplicity." },
    { q: "Is Notion better than Trello?", a: "Notion offers docs and databases with flexible views; Trello is simple Kanban. Choose Notion for flexibility; Trello for simplicity." },
    { q: "Which project management software is free like Notion?", a: "Asana, ClickUp, and Trello have free tiers. Notion's free tier is generous; compare limits." },
  ],
};

// ——— Wrike alternatives ———
const WRIKE_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "Board-based with strong automations. Often easier to adopt.", reviewHref: getProjectManagementReviewUrl("monday"), compareHref: getProjectManagementCompareUrl("monday-vs-wrike"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "balance", description: "Lighter structure; easier onboarding for mid-size teams.", reviewHref: getProjectManagementReviewUrl("asana"), startingPrice: "Free tier", standoutFeature: "Balance; ease of use" },
  { slug: "smartsheet", name: "Smartsheet", logoSrc: "/Logos/smartsheet.jpeg", rating: "4.3", bestFor: "spreadsheet-style", description: "Grid-based project and work management.", reviewHref: getProjectManagementReviewUrl("smartsheet"), startingPrice: "Quote", standoutFeature: "Spreadsheet-style" },
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "Highly customizable workspace.", reviewHref: getProjectManagementReviewUrl("clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "teamwork", name: "Teamwork", logoSrc: "/Logos/teamwork.png", rating: "4.2", bestFor: "client projects", description: "Project management with time tracking and client focus.", reviewHref: getProjectManagementReviewUrl("teamwork"), startingPrice: "Quote", standoutFeature: "Client projects; time tracking" },
];

const wrikePage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Wrike Alternatives (2026)",
  subtitle: "If Wrike isn't the right fit—because of cost, preference for different UX, or team size—these project management alternatives offer strong options.",
  productName: "Wrike",
  productSlug: "wrike",
  originalReviewHref: getProjectManagementReviewUrl("wrike"),
  quickAnswerParagraphs: [
    "Wrike focuses on portfolios and enterprise; alternatives include Monday for visual workflows, Asana for lighter structure, Smartsheet for spreadsheet-style planning, and ClickUp or Teamwork for different depth. Monday is the closest visual alternative; Asana suits teams that don't need Wrike's portfolio depth.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Ease of use", body: "Monday and Asana are often easier to adopt. Wrike can feel heavy for mid-size teams." },
    { heading: "Pricing", body: "Asana and ClickUp have free tiers. Monday's pricing can be more transparent." },
    { heading: "Workflow", body: "Smartsheet is spreadsheet-style; Teamwork is client and time tracking focused." },
  ],
  topAlternatives: WRIKE_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "wrike", name: "Wrike", logoSrc: "/Logos/wrike.png", bestFor: "enterprise and portfolios", startingPrice: "From ~$9.80/user/mo", standoutFeature: "Portfolios; dependencies", reviewHref: getProjectManagementReviewUrl("wrike") },
    WRIKE_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday offers board-based project management with strong automations. Often easier to adopt than Wrike.", reviewHref: getProjectManagementReviewUrl("monday"), compareHref: getProjectManagementCompareUrl("monday-vs-wrike") },
    { productName: "Asana", heading: "Best for balance", body: "Asana offers lighter structure and easier onboarding. For teams that don't need Wrike's portfolio depth.", reviewHref: getProjectManagementReviewUrl("asana") },
    { productName: "Smartsheet", heading: "Best for spreadsheet-style", body: "Smartsheet is grid-based for teams that prefer spreadsheet-style planning.", reviewHref: getProjectManagementReviewUrl("smartsheet") },
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers highly customizable workspaces with free tier options.", reviewHref: getProjectManagementReviewUrl("clickup") },
    { productName: "Teamwork", heading: "Best for client projects", body: "Teamwork focuses on client projects and time tracking. Alternative for agencies and professional services.", reviewHref: getProjectManagementReviewUrl("teamwork") },
  ],
  relatedComparisons: [
    pmRel("monday-vs-wrike"),
  ],
  relatedResources: defaultRelatedResources("Wrike", getProjectManagementReviewUrl("wrike")),
  faqItems: [
    { q: "What is the best Wrike alternative?", a: "Monday is the best visual alternative. Asana for lighter structure; Smartsheet for spreadsheet-style; ClickUp for customization; Teamwork for client projects." },
    { q: "Is Wrike better than Monday?", a: "Wrike offers more portfolio and enterprise depth; Monday is often easier to adopt and more visual. Choose Wrike for enterprise; Monday for visual workflows." },
    { q: "Which project management software is cheaper than Wrike?", a: "Asana and ClickUp have free tiers. Monday's pricing is often more transparent. Compare at your team size and needs." },
  ],
};

// ——— Teamwork alternatives ———
const TEAMWORK_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "More visual and customizable; broader workflow flexibility.", reviewHref: getProjectManagementReviewUrl("monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "general PM", description: "Strong project management; add time tracking via integrations.", reviewHref: getProjectManagementReviewUrl("asana"), startingPrice: "Free tier", standoutFeature: "Balance; ease of use" },
  { slug: "basecamp", name: "Basecamp", logoSrc: "/Logos/vasecamp.jpeg", rating: "4.2", bestFor: "simplicity", description: "Simpler and flat-priced; less complexity.", reviewHref: getProjectManagementReviewUrl("basecamp"), startingPrice: "Flat fee", standoutFeature: "Simplicity; flat pricing" },
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "All-in-one workspace with time tracking and docs.", reviewHref: getProjectManagementReviewUrl("clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "wrike", name: "Wrike", logoSrc: "/Logos/wrike.png", rating: "4.3", bestFor: "enterprise", description: "Portfolio and dependency management for larger teams.", reviewHref: getProjectManagementReviewUrl("wrike"), startingPrice: "From ~$9.80/user/mo", standoutFeature: "Portfolios; enterprise" },
];

const teamworkPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Teamwork Alternatives (2026)",
  subtitle: "If Teamwork isn't the right fit—because of cost, workflow, or features—these project management alternatives offer strong options for client-focused teams.",
  productName: "Teamwork",
  productSlug: "teamwork",
  originalReviewHref: getProjectManagementReviewUrl("teamwork"),
  quickAnswerParagraphs: [
    "Teamwork combines project management with time tracking and client focus; alternatives include Monday for visual workflows, Asana for general PM, Basecamp for simplicity, ClickUp for all-in-one, and Wrike for enterprise. Monday and Asana are the main alternatives; Basecamp suits teams that want less complexity.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Workflow", body: "Monday is more visual; Asana is simpler for general PM. Different fits for different teams." },
    { heading: "Simplicity", body: "Basecamp offers simpler projects and flat pricing. For teams that don't need Teamwork's depth." },
    { heading: "Pricing", body: "Asana and ClickUp have free tiers. Compare total cost at your team size." },
  ],
  topAlternatives: TEAMWORK_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "teamwork", name: "Teamwork", logoSrc: "/Logos/teamwork.png", bestFor: "client projects and time tracking", startingPrice: "Quote", standoutFeature: "Client projects; time tracking", reviewHref: getProjectManagementReviewUrl("teamwork") },
    TEAMWORK_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday offers more visual and customizable workflows. For teams that want broader flexibility.", reviewHref: getProjectManagementReviewUrl("monday") },
    { productName: "Asana", heading: "Best for general PM", body: "Asana offers strong project management; add time tracking via integrations if needed.", reviewHref: getProjectManagementReviewUrl("asana") },
    { productName: "Basecamp", heading: "Best for simplicity", body: "Basecamp is simpler with flat pricing. For teams that want less complexity and no per-seat scaling.", reviewHref: getProjectManagementReviewUrl("basecamp") },
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers all-in-one workspace with time tracking and docs.", reviewHref: getProjectManagementReviewUrl("clickup") },
    { productName: "Wrike", heading: "Best for enterprise", body: "Wrike focuses on portfolios and dependencies for larger teams.", reviewHref: getProjectManagementReviewUrl("wrike") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Teamwork", getProjectManagementReviewUrl("teamwork")),
  faqItems: [
    { q: "What is the best Teamwork alternative?", a: "Monday and Asana are the best alternatives. Monday for visual workflows; Asana for general PM. Basecamp for simplicity; ClickUp for all-in-one." },
    { q: "Is Teamwork better than Monday?", a: "Teamwork is strong for client projects and time tracking; Monday is more visual and customizable. Choose by workflow and client needs." },
    { q: "Which project management software is simpler than Teamwork?", a: "Basecamp is simpler with flat pricing. Asana can be simpler for general project management without client billing depth." },
  ],
};

// ——— Basecamp alternatives ———
const BASECAMP_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "trello", name: "Trello", logoSrc: "/Logos/trello.png", rating: "4.3", bestFor: "simple boards", description: "Simple boards and cards; more visual and flexible.", reviewHref: getProjectManagementReviewUrl("trello"), startingPrice: "Free tier", standoutFeature: "Simple Kanban" },
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "structure", description: "More structure and project views; good if you outgrow Basecamp.", reviewHref: getProjectManagementReviewUrl("asana"), startingPrice: "Free tier", standoutFeature: "Balance; structure" },
  { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", rating: "4.4", bestFor: "docs + projects", description: "Docs and databases with lightweight task views.", reviewHref: getProjectManagementReviewUrl("notion"), startingPrice: "Free tier", standoutFeature: "Docs and databases" },
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "Board-based with more features. Per-user pricing.", reviewHref: getProjectManagementReviewUrl("monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "Highly customizable workspace. Free tier.", reviewHref: getProjectManagementReviewUrl("clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
];

const basecampPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Basecamp Alternatives (2026)",
  subtitle: "If Basecamp isn't the right fit—because you need more structure, views, or per-user features—these project management alternatives offer strong options.",
  productName: "Basecamp",
  productSlug: "basecamp",
  originalReviewHref: getProjectManagementReviewUrl("basecamp"),
  quickAnswerParagraphs: [
    "Basecamp offers simplicity and flat pricing; alternatives include Trello for simple boards, Asana for more structure, Notion for docs and flexibility, and Monday or ClickUp for more features. Trello and Asana are the main alternatives; Notion suits docs-first teams.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "More structure", body: "Asana adds project views, timeline, and more granular task management. For teams that outgrow Basecamp's simplicity." },
    { heading: "More views", body: "Trello offers boards; Notion offers docs and databases; Monday and ClickUp offer multiple views and automations." },
    { heading: "Pricing model", body: "Many alternatives use per-user pricing with free tiers. Compare total cost for your team size." },
  ],
  topAlternatives: BASECAMP_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "basecamp", name: "Basecamp", logoSrc: "/Logos/vasecamp.jpeg", bestFor: "simplicity and flat pricing", startingPrice: "Flat fee", standoutFeature: "Simplicity; flat pricing", reviewHref: getProjectManagementReviewUrl("basecamp") },
    BASECAMP_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Trello", heading: "Best for simple boards", body: "Trello offers simple boards and cards. More visual and flexible for task tracking.", reviewHref: getProjectManagementReviewUrl("trello") },
    { productName: "Asana", heading: "Best for structure", body: "Asana adds more structure and project views. For teams that outgrow Basecamp's simplicity.", reviewHref: getProjectManagementReviewUrl("asana") },
    { productName: "Notion", heading: "Best for docs + projects", body: "Notion offers docs and databases with lightweight task views. Different flexibility from Basecamp.", reviewHref: getProjectManagementReviewUrl("notion") },
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday is board-based with more features. Per-user pricing.", reviewHref: getProjectManagementReviewUrl("monday") },
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers highly customizable workspace with a free tier.", reviewHref: getProjectManagementReviewUrl("clickup") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Basecamp", getProjectManagementReviewUrl("basecamp")),
  faqItems: [
    { q: "What is the best Basecamp alternative?", a: "Trello and Asana are the best alternatives. Trello for simple boards; Asana for more structure. Notion for docs and flexibility; Monday and ClickUp for more features." },
    { q: "Is Basecamp better than Trello?", a: "Basecamp bundles projects, communication, and simplicity with flat pricing; Trello is board-focused with free tier. Choose Basecamp for all-in-one simplicity; Trello for boards." },
    { q: "Which project management software has flat pricing like Basecamp?", a: "Basecamp is one of the few with a flat fee. Most alternatives use per-user pricing; compare total cost at your team size." },
  ],
};

// ——— Smartsheet alternatives ———
const SMARTSHEET_ALTERNATIVES: AlternativesTopPick[] = [
  { slug: "monday", name: "Monday", logoSrc: "/Logos/monday.jpeg", rating: "4.4", bestFor: "visual workflows", description: "More visual and board-centric; good if you prefer boards over spreadsheets.", reviewHref: getProjectManagementReviewUrl("monday"), startingPrice: "From ~$10/user/mo", standoutFeature: "Visual boards" },
  { slug: "wrike", name: "Wrike", logoSrc: "/Logos/wrike.png", rating: "4.3", bestFor: "enterprise", description: "Traditional project and portfolio focus; PM depth without grid model.", reviewHref: getProjectManagementReviewUrl("wrike"), startingPrice: "From ~$9.80/user/mo", standoutFeature: "Portfolios; enterprise" },
  { slug: "asana", name: "Asana", logoSrc: "/Logos/asuna.jpeg", rating: "4.6", bestFor: "list and board", description: "List and board focus; easier for many teams to adopt.", reviewHref: getProjectManagementReviewUrl("asana"), startingPrice: "Free tier", standoutFeature: "Balance; ease of use" },
  { slug: "clickup", name: "ClickUp", logoSrc: "/Logos/clickup.jpeg", rating: "4.5", bestFor: "customization", description: "Customizable workspace with multiple views including table.", reviewHref: getProjectManagementReviewUrl("clickup"), startingPrice: "Free tier", standoutFeature: "All-in-one; customization" },
  { slug: "notion", name: "Notion", logoSrc: "/Logos/notion.png", rating: "4.4", bestFor: "docs and databases", description: "Databases and docs with flexible views.", reviewHref: getProjectManagementReviewUrl("notion"), startingPrice: "Free tier", standoutFeature: "Docs and databases" },
];

const smartsheetPage: AlternativesTemplateProps = {
  ...asanaPage,
  title: "Best Smartsheet Alternatives (2026)",
  subtitle: "If Smartsheet isn't the right fit—because you prefer boards, different UX, or pricing—these project management alternatives offer strong options.",
  productName: "Smartsheet",
  productSlug: "smartsheet",
  originalReviewHref: getProjectManagementReviewUrl("smartsheet"),
  quickAnswerParagraphs: [
    "Smartsheet is spreadsheet-style project and work management; alternatives include Monday for visual boards, Wrike for traditional PM depth, Asana for list and board focus, and ClickUp or Notion for different flexibility. Monday and Asana are the main alternatives for teams that prefer boards or lists over grids.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "UX preference", body: "Many teams prefer board or list UX over spreadsheet grids. Monday and Asana are easier for them to adopt." },
    { heading: "Pricing", body: "Asana, ClickUp, and Notion have free tiers. Smartsheet typically uses quote-based pricing." },
    { heading: "Workflow", body: "Wrike offers traditional project and portfolio focus without the grid model." },
  ],
  topAlternatives: SMARTSHEET_ALTERNATIVES,
  comparisonTableRows: buildTableRows(
    { slug: "smartsheet", name: "Smartsheet", logoSrc: "/Logos/smartsheet.jpeg", bestFor: "spreadsheet-style planning", startingPrice: "Quote", standoutFeature: "Spreadsheet-style", reviewHref: getProjectManagementReviewUrl("smartsheet") },
    SMARTSHEET_ALTERNATIVES
  ),
  detailedAlternatives: [
    { productName: "Monday", heading: "Best for visual workflows", body: "Monday is more visual and board-centric. For teams that prefer boards over spreadsheets.", reviewHref: getProjectManagementReviewUrl("monday") },
    { productName: "Wrike", heading: "Best for enterprise", body: "Wrike offers traditional project and portfolio focus without the grid model. Good if you need PM depth.", reviewHref: getProjectManagementReviewUrl("wrike") },
    { productName: "Asana", heading: "Best for list and board", body: "Asana offers list and board focus. Easier for many teams to adopt than spreadsheet-style tools.", reviewHref: getProjectManagementReviewUrl("asana") },
    { productName: "ClickUp", heading: "Best for customization", body: "ClickUp offers customizable workspace with multiple views including table.", reviewHref: getProjectManagementReviewUrl("clickup") },
    { productName: "Notion", heading: "Best for docs and databases", body: "Notion offers databases and docs with flexible views. Alternative flexibility to Smartsheet.", reviewHref: getProjectManagementReviewUrl("notion") },
  ],
  relatedComparisons: [],
  relatedResources: defaultRelatedResources("Smartsheet", getProjectManagementReviewUrl("smartsheet")),
  faqItems: [
    { q: "What is the best Smartsheet alternative?", a: "Monday and Asana are the best alternatives. Monday for visual boards; Asana for list and board focus. Wrike for enterprise; ClickUp and Notion for different flexibility." },
    { q: "Is Smartsheet better than Monday?", a: "Smartsheet is spreadsheet-style; Monday is board-based and visual. Choose Smartsheet for grid-based planning; Monday for visual workflows." },
    { q: "Which project management software is easier than Smartsheet?", a: "Asana and Monday are often easier to adopt for teams that don't prefer spreadsheet-style UX. Both have more visual interfaces." },
  ],
};

// ——— Export ———
const PROJECT_MANAGEMENT_ALTERNATIVES_SLUGS = [
  "asana", "clickup", "monday", "trello", "notion", "wrike", "teamwork", "basecamp", "smartsheet",
] as const;

const PAGES: Record<string, AlternativesTemplateProps> = {
  asana: asanaPage,
  clickup: clickupPage,
  monday: mondayPage,
  trello: trelloPage,
  notion: notionPage,
  wrike: wrikePage,
  teamwork: teamworkPage,
  basecamp: basecampPage,
  smartsheet: smartsheetPage,
};

export function getProjectManagementAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return PAGES[slug] ?? null;
}

export function getProjectManagementAlternativesSlugs(): string[] {
  return [...PROJECT_MANAGEMENT_ALTERNATIVES_SLUGS];
}
