/**
 * Project management hub page: featured picks, comparison table, popular comparisons, FAQs, methodology.
 * Used by app/project-management/page.tsx.
 */

import { getProjectManagementReviewUrl, getProjectManagementCompareUrl, getProjectManagementBestForUrl } from "@/lib/routes";
import type { FeaturedPick, ComparisonTableRow } from "@/components/hubs/HubPageTemplate";

// ——— Logo paths ———
const LOGOS = {
  asana: "/Logos/asuna.jpeg",
  clickup: "/Logos/clickup.jpeg",
  monday: "/Logos/monday.jpeg",
  trello: "/Logos/trello.png",
  notion: "/Logos/notion.png",
  wrike: "/Logos/wrike.png",
  teamwork: "/Logos/teamwork.png",
  basecamp: "/Logos/vasecamp.jpeg",
  smartsheet: "/Logos/smartsheet.jpeg",
} as const;

/** Top project management picks for the hub hero section. */
export const PROJECT_MANAGEMENT_FEATURED_PICKS: FeaturedPick[] = [
  {
    slug: "asana",
    name: "Asana",
    badge: "Best overall",
    descriptor: "Well-rounded project management for small teams and growing companies.",
    rating: "4.6",
    price: "Free tier",
    features: ["Tasks & projects", "Multiple views", "Automations"],
    reviewHref: getProjectManagementReviewUrl("asana"),
    compareHref: getProjectManagementCompareUrl("asana-vs-clickup"),
    logoSrc: LOGOS.asana,
    visitUrl: "https://asana.com",
  },
  {
    slug: "clickup",
    name: "ClickUp",
    badge: "Best for customization",
    descriptor: "Highly flexible workspace with tasks, docs, goals, and dashboards in one tool.",
    rating: "4.5",
    price: "Free tier",
    features: ["Custom fields", "Views & dashboards", "Docs & whiteboards"],
    reviewHref: getProjectManagementReviewUrl("clickup"),
    compareHref: getProjectManagementCompareUrl("asana-vs-clickup"),
    logoSrc: LOGOS.clickup,
    visitUrl: "https://clickup.com",
  },
  {
    slug: "monday",
    name: "Monday",
    badge: "Best for visual workflows",
    descriptor: "Board-based project management that adapts to many processes and teams.",
    rating: "4.4",
    price: "From ~$10/user/mo",
    features: ["Boards & automations", "Multiple views", "Integrations"],
    reviewHref: getProjectManagementReviewUrl("monday"),
    compareHref: getProjectManagementCompareUrl("asana-vs-monday"),
    logoSrc: LOGOS.monday,
    visitUrl: "https://monday.com",
  },
  {
    slug: "trello",
    name: "Trello",
    badge: "Best for simple boards",
    descriptor: "Kanban-style boards for lightweight task and project tracking.",
    rating: "4.3",
    price: "Free tier",
    features: ["Kanban boards", "Checklists", "Power-Ups"],
    reviewHref: getProjectManagementReviewUrl("trello"),
    compareHref: getProjectManagementCompareUrl("clickup-vs-trello"),
    logoSrc: LOGOS.trello,
    visitUrl: "https://trello.com",
  },
  {
    slug: "notion",
    name: "Notion",
    badge: "Best for docs + projects",
    descriptor: "Flexible docs, databases, and task views for teams that live in knowledge bases.",
    rating: "4.4",
    price: "Free tier",
    features: ["Docs & wikis", "Databases & views", "Templates"],
    reviewHref: getProjectManagementReviewUrl("notion"),
    compareHref: getProjectManagementCompareUrl("notion-vs-trello"),
    logoSrc: LOGOS.notion,
    visitUrl: "https://www.notion.so",
  },
] as FeaturedPick[];

/** Comparison table rows for the hub (project management tools). */
export const PROJECT_MANAGEMENT_COMPARISON_ROWS: ComparisonTableRow[] = [
  { tool: "Asana", bestFor: "Most small teams overall", price: "Free tier", rating: "4.6", slug: "asana", logoSrc: LOGOS.asana },
  { tool: "ClickUp", bestFor: "Customizable workspaces", price: "Free tier", rating: "4.5", slug: "clickup", logoSrc: LOGOS.clickup },
  {
    tool: "Monday",
    bestFor: "Visual workflows and boards",
    price: "From ~$10/user/mo",
    rating: "4.4",
    slug: "monday",
    logoSrc: LOGOS.monday,
  },
  { tool: "Trello", bestFor: "Simple Kanban boards", price: "Free tier", rating: "4.3", slug: "trello", logoSrc: LOGOS.trello },
  { tool: "Notion", bestFor: "Docs + project databases", price: "Free tier", rating: "4.4", slug: "notion", logoSrc: LOGOS.notion },
  { tool: "Wrike", bestFor: "Complex project portfolios", price: "From ~$9.80/user/mo", rating: "4.3", slug: "wrike", logoSrc: LOGOS.wrike },
  { tool: "Teamwork", bestFor: "Client projects & agencies", price: "From ~$5.99/user/mo", rating: "4.2", slug: "teamwork", logoSrc: LOGOS.teamwork },
  { tool: "Basecamp", bestFor: "Simple team communication", price: "Flat monthly", rating: "4.1", slug: "basecamp", logoSrc: LOGOS.basecamp },
  { tool: "Smartsheet", bestFor: "Spreadsheet-style projects", price: "From ~$7/user/mo", rating: "4.4", slug: "smartsheet", logoSrc: LOGOS.smartsheet },
] as ComparisonTableRow[];

/** Best project management by use case (scenario) links. */
export const PROJECT_MANAGEMENT_SCENARIO_LINKS = [
  { label: "Freelancers", href: getProjectManagementBestForUrl("freelancers") },
  { label: "Small business", href: getProjectManagementBestForUrl("small-business") },
  { label: "Agencies", href: getProjectManagementBestForUrl("agencies") },
  { label: "Startups", href: getProjectManagementBestForUrl("startups") },
  { label: "Remote teams", href: getProjectManagementBestForUrl("remote-teams") },
] as const;

/** Project management by business type (trade-style links). */
export const PROJECT_MANAGEMENT_BY_BUSINESS_TYPE: { label: string; href: string }[] = [
  { label: "Agencies", href: getProjectManagementBestForUrl("agencies") },
  { label: "Startups", href: getProjectManagementBestForUrl("startups") },
  { label: "Freelancers", href: getProjectManagementBestForUrl("freelancers") },
  { label: "Remote teams", href: getProjectManagementBestForUrl("remote-teams") },
  { label: "Small business", href: getProjectManagementBestForUrl("small-business") },
];

export const PROJECT_MANAGEMENT_BY_BUSINESS_TYPE_GROUPS: { groupLabel: string; links: { label: string; href: string }[] }[] = [
  { groupLabel: "Primary business types", links: PROJECT_MANAGEMENT_BY_BUSINESS_TYPE.slice(0, 3) },
  { groupLabel: "Other business types", links: PROJECT_MANAGEMENT_BY_BUSINESS_TYPE.slice(3) },
];

/** Card data for Popular project management comparisons (logos + vs + summary + link). */
export type ProjectManagementPopularComparisonCard = {
  slug: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
  href: string;
};

export const PROJECT_MANAGEMENT_POPULAR_COMPARISONS: ProjectManagementPopularComparisonCard[] = [
  {
    slug: "asana-vs-clickup",
    productA: { name: "Asana", logoSrc: LOGOS.asana },
    productB: { name: "ClickUp", logoSrc: LOGOS.clickup },
    summaryParagraph:
      "Asana and ClickUp both cover robust project management; Asana emphasizes clarity and UX, while ClickUp leans into customization and an all-in-one workspace.",
    href: getProjectManagementCompareUrl("asana-vs-clickup"),
  },
  {
    slug: "asana-vs-monday",
    productA: { name: "Asana", logoSrc: LOGOS.asana },
    productB: { name: "Monday", logoSrc: LOGOS.monday },
    summaryParagraph:
      "Asana keeps projects organized with lists and boards; Monday turns workflows into customizable boards with more visual automation.",
    href: getProjectManagementCompareUrl("asana-vs-monday"),
  },
  {
    slug: "clickup-vs-trello",
    productA: { name: "ClickUp", logoSrc: LOGOS.clickup },
    productB: { name: "Trello", logoSrc: LOGOS.trello },
    summaryParagraph:
      "ClickUp can replace multiple tools with tasks, docs, and goals; Trello excels as a lightweight Kanban board for simple projects.",
    href: getProjectManagementCompareUrl("clickup-vs-trello"),
  },
  {
    slug: "notion-vs-trello",
    productA: { name: "Notion", logoSrc: LOGOS.notion },
    productB: { name: "Trello", logoSrc: LOGOS.trello },
    summaryParagraph:
      "Notion combines docs and databases that can act like boards; Trello focuses on straightforward cards and columns for task tracking.",
    href: getProjectManagementCompareUrl("notion-vs-trello"),
  },
  {
    slug: "monday-vs-wrike",
    productA: { name: "Monday", logoSrc: LOGOS.monday },
    productB: { name: "Wrike", logoSrc: LOGOS.wrike },
    summaryParagraph:
      "Monday makes it easy to spin up visual workflows; Wrike is better for complex portfolios, dependencies, and enterprise-style reporting.",
    href: getProjectManagementCompareUrl("monday-vs-wrike"),
  },
] as ProjectManagementPopularComparisonCard[];

/** FAQ items for the hub. */
export const PROJECT_MANAGEMENT_FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: "What is project management software?",
    a: "Project management software helps teams plan work, assign tasks, track progress, and collaborate. It replaces scattered spreadsheets and email threads with shared boards, timelines, and checklists so everyone knows who is doing what, by when.",
  },
  {
    q: "What project management software is best for small businesses?",
    a: "Asana and Monday are strong defaults for many small businesses; ClickUp is a good fit if you want a very customizable workspace. For very simple needs, Trello or Notion can handle basic task tracking and client projects.",
  },
  {
    q: "Is Asana better than Trello?",
    a: "Asana offers more structure—multiple views, dependencies, and reporting—while Trello keeps things simple with Kanban-style boards. If you only need lightweight task tracking, Trello may be enough; for growing teams and more complex projects, Asana usually scales better.",
  },
  {
    q: "What project management software is easiest to use?",
    a: "Trello is one of the easiest tools to start with, thanks to its simple boards and cards. Asana and Monday are also approachable but add more structure; ClickUp is powerful but can feel busier until you streamline your setup.",
  },
];

/** Methodology for the hub. */
export const PROJECT_MANAGEMENT_METHODOLOGY: {
  title: string;
  sub: string;
  introParagraph: string;
  bullets: string[];
} = {
  title: "How we review project management software",
  sub: "Transparent process, small-business–focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate project management tools on how well they help small teams plan work, collaborate, and ship projects on time.",
  bullets: [
    "We test core workflows: creating projects, assigning tasks, building views, and tracking deadlines.",
    "We compare pricing tiers, user limits, and automation caps so you understand total cost at your team size.",
    "We look at collaboration, reporting, and integrations with tools like time tracking, CRM, and documentation.",
  ],
};

