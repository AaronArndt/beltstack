/**
 * Project management best-software roundup page data.
 * Used by app/project-management/best-project-management-software/page.tsx.
 */

import {
  getProjectManagementReviewUrl,
  getProjectManagementCompareUrl,
  getProjectManagementBestForUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

// Match hub logo paths (existing filenames in /public/Logos/)
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

export type BestProjectManagementPick = SoftwarePickCardContent;

export type ProjectManagementComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  rating: string;
  reviewHref: string;
};

export const TOP_PICKS: BestProjectManagementPick[] = [
  {
    slug: "asana",
    name: "Asana",
    badge: "Best overall",
    description:
      "Well-rounded project management for small teams and growing companies. Tasks, multiple views, and automations in one place.",
    rating: "4.6",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://asana.com",
    logoSrc: LOGOS.asana,
    compareSlugs: ["asana-vs-clickup", "asana-vs-monday"],
    editorialParagraph:
      "Asana is our top pick for most teams. It balances clarity and power: list and board views, timelines, dependencies, and automations without overwhelming complexity. Freelancers, agencies, and remote teams use it to plan work, assign tasks, and track progress. If you want one tool that scales from simple projects to more structured workflows, Asana is the default choice.",
    pros: [
      "Clear task and project structure; multiple views (list, board, timeline)",
      "Strong automation and integrations",
      "Free tier for small teams; transparent pricing",
      "Good for remote collaboration and status updates",
    ],
    cons: [
      "Can feel heavy for very lightweight use cases",
      "Some advanced features on higher tiers only",
      "Learning curve for power users who want maximum customization",
    ],
    pricingSummary:
      "Asana offers a free tier; paid plans add timelines, custom fields, and more automations. Pricing is per seat—check current plans for your team size.",
  },
  {
    slug: "clickup",
    name: "ClickUp",
    badge: "Best all-in-one value",
    description:
      "Highly flexible workspace with tasks, docs, goals, and dashboards in one tool. Strong for teams that want everything in one place.",
    rating: "4.5",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://clickup.com",
    logoSrc: LOGOS.clickup,
    compareSlugs: ["asana-vs-clickup", "clickup-vs-trello"],
    editorialParagraph:
      "ClickUp packs tasks, docs, goals, and dashboards into a single workspace. It's the all-in-one value pick: you get more features per dollar than many competitors, with strong customization. Best for teams that want to replace several tools with one. The interface can feel busy until you tailor it—worth it if you want maximum flexibility and value.",
    pros: [
      "Tasks, docs, goals, and dashboards in one platform",
      "Highly customizable views and custom fields",
      "Generous free tier and competitive paid plans",
      "Good for agencies and remote teams that need breadth",
    ],
    cons: [
      "Interface can feel dense; setup takes time to streamline",
      "Frequent updates and feature changes",
      "Can be overkill for very simple project needs",
    ],
    pricingSummary:
      "ClickUp has a free tier; paid plans add more views, goals, and integrations. Per-seat pricing—compare tiers for your team size.",
  },
  {
    slug: "monday",
    name: "Monday",
    badge: "Best for customizable workflows",
    description:
      "Board-based project management that adapts to many processes and teams. Visual workflows and strong automation.",
    rating: "4.4",
    startingPrice: "From ~$10/user/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://monday.com",
    logoSrc: LOGOS.monday,
    compareSlugs: ["asana-vs-monday", "monday-vs-wrike"],
    editorialParagraph:
      "Monday turns work into visual, customizable boards. You can model projects, sprints, and processes with columns and automations that fit your workflow. It suits teams that want to design how they work rather than follow a fixed structure. Strong for agencies, marketing teams, and anyone who likes board-based views and clear status at a glance.",
    pros: [
      "Highly customizable boards and workflows",
      "Strong automation and visual status",
      "Multiple views and integrations",
      "Good for agencies and cross-functional teams",
    ],
    cons: [
      "Pricing can add up with more seats and features",
      "Can require setup to match your exact process",
      "Less doc-centric than Notion or ClickUp",
    ],
    pricingSummary:
      "Monday uses per-seat pricing; plans often start around $10/user/month. Higher tiers add more automations and views—check current pricing.",
  },
  {
    slug: "trello",
    name: "Trello",
    badge: "Best for simplicity",
    description:
      "Kanban-style boards for lightweight task and project tracking. Easy to start and easy for everyone to use.",
    rating: "4.3",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://trello.com",
    logoSrc: LOGOS.trello,
    compareSlugs: ["clickup-vs-trello", "notion-vs-trello"],
    editorialParagraph:
      "Trello is the simplicity pick. Cards and columns make it easy to see what's in progress and what's done. Freelancers and small teams use it for client work, content calendars, and light project tracking without learning a complex tool. If you need more structure—dependencies, timelines, or heavy reporting—Asana or Monday scale better; for straightforward boards, Trello is hard to beat.",
    pros: [
      "Simple Kanban boards; minimal learning curve",
      "Free tier is usable for small teams",
      "Power-Ups add integrations and features",
      "Great for freelancers and simple workflows",
    ],
    cons: [
      "Limited structure compared to Asana or Monday",
      "Reporting and timelines require add-ons or upgrades",
      "Can get messy with very large or complex projects",
    ],
    pricingSummary:
      "Trello has a free tier; paid plans add more Power-Ups, automation, and views. Check current plans for your team size.",
  },
  {
    slug: "notion",
    name: "Notion",
    badge: "Best for docs + lightweight project planning",
    description:
      "Flexible docs, databases, and task views for teams that live in knowledge bases. Combines wikis with project tracking.",
    rating: "4.4",
    startingPrice: "Free tier",
    hasFreeTrial: true,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.notion.so",
    logoSrc: LOGOS.notion,
    compareSlugs: ["notion-vs-trello"],
    editorialParagraph:
      "Notion is the pick when docs and knowledge sharing come first. You get wikis, databases, and views that can act like boards or task lists—all in one workspace. Ideal for startups and remote teams that want a single place for documentation and lightweight project planning. For heavy project management (dependencies, Gantt, strict workflows), Asana or Monday are stronger; for docs-first teams, Notion fits well.",
    pros: [
      "Docs, wikis, and databases in one tool",
      "Flexible views (board, list, table, calendar)",
      "Strong for knowledge bases and team wikis",
      "Free tier for small teams; popular with startups",
    ],
    cons: [
      "Project management is lighter than dedicated PM tools",
      "Performance can lag with very large workspaces",
      "Learning curve for advanced database setups",
    ],
    pricingSummary:
      "Notion offers a free tier; paid plans add more collaborators, history, and features. Per-seat pricing—check current plans.",
  },
];

/** Comparison table: all 9 PM tools. Columns: Tool, Best for, Starting price, Rating, Read review */
export const COMPARISON_TABLE_ROWS: ProjectManagementComparisonTableRow[] = [
  { slug: "asana", name: "Asana", logoSrc: LOGOS.asana, bestFor: "Best overall", startingPrice: "Free tier", rating: "4.6", reviewHref: getProjectManagementReviewUrl("asana") },
  { slug: "clickup", name: "ClickUp", logoSrc: LOGOS.clickup, bestFor: "All-in-one value", startingPrice: "Free tier", rating: "4.5", reviewHref: getProjectManagementReviewUrl("clickup") },
  { slug: "monday", name: "Monday", logoSrc: LOGOS.monday, bestFor: "Customizable workflows", startingPrice: "From ~$10/user/mo", rating: "4.4", reviewHref: getProjectManagementReviewUrl("monday") },
  { slug: "trello", name: "Trello", logoSrc: LOGOS.trello, bestFor: "Simplicity", startingPrice: "Free tier", rating: "4.3", reviewHref: getProjectManagementReviewUrl("trello") },
  { slug: "notion", name: "Notion", logoSrc: LOGOS.notion, bestFor: "Docs + lightweight planning", startingPrice: "Free tier", rating: "4.4", reviewHref: getProjectManagementReviewUrl("notion") },
  { slug: "wrike", name: "Wrike", logoSrc: LOGOS.wrike, bestFor: "Complex project portfolios", startingPrice: "From ~$9.80/user/mo", rating: "4.3", reviewHref: getProjectManagementReviewUrl("wrike") },
  { slug: "teamwork", name: "Teamwork", logoSrc: LOGOS.teamwork, bestFor: "Client projects & agencies", startingPrice: "From ~$5.99/user/mo", rating: "4.2", reviewHref: getProjectManagementReviewUrl("teamwork") },
  { slug: "basecamp", name: "Basecamp", logoSrc: LOGOS.basecamp, bestFor: "Simple team communication", startingPrice: "Flat monthly", rating: "4.1", reviewHref: getProjectManagementReviewUrl("basecamp") },
  { slug: "smartsheet", name: "Smartsheet", logoSrc: LOGOS.smartsheet, bestFor: "Spreadsheet-style projects", startingPrice: "From ~$7/user/mo", rating: "4.4", reviewHref: getProjectManagementReviewUrl("smartsheet") },
];

/** More project management options (secondary tools, same card pattern as other roundups) */
export const MORE_PROJECT_MANAGEMENT_OPTIONS: { slug: string; name: string; description: string; reviewHref: string; logoSrc: string }[] = [
  { slug: "wrike", name: "Wrike", description: "Project and portfolio management for complex workflows. Strong reporting and dependencies.", reviewHref: getProjectManagementReviewUrl("wrike"), logoSrc: LOGOS.wrike },
  { slug: "teamwork", name: "Teamwork", description: "Client-focused project management for agencies. Time tracking, billing, and project templates.", reviewHref: getProjectManagementReviewUrl("teamwork"), logoSrc: LOGOS.teamwork },
  { slug: "basecamp", name: "Basecamp", description: "Simple team communication and to-dos. Flat pricing and minimal complexity.", reviewHref: getProjectManagementReviewUrl("basecamp"), logoSrc: LOGOS.basecamp },
  { slug: "smartsheet", name: "Smartsheet", description: "Spreadsheet-style project and work management. Good for grid lovers and reporting.", reviewHref: getProjectManagementReviewUrl("smartsheet"), logoSrc: LOGOS.smartsheet },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  { label: "Best for freelancers", href: getProjectManagementBestForUrl("freelancers"), description: "Lightweight project tools for solos and freelancers." },
  { label: "Best for small business", href: getProjectManagementBestForUrl("small-business"), description: "Project management that scales with your team." },
  { label: "Best for agencies", href: getProjectManagementBestForUrl("agencies"), description: "Manage clients and projects across accounts." },
  { label: "Best for startups", href: getProjectManagementBestForUrl("startups"), description: "Affordable PM with room to grow." },
  { label: "Best for remote teams", href: getProjectManagementBestForUrl("remote-teams"), description: "Collaboration and visibility for distributed teams." },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
  { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
  { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
  { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is the best project management software for small businesses?",
    a: "Asana and Monday are strong defaults for many small businesses: both offer clear structure, multiple views, and scalable pricing. ClickUp is a good fit if you want an all-in-one workspace. For very simple needs, Trello or Notion can handle basic task tracking and client projects.",
  },
  {
    q: "Is Asana better than ClickUp?",
    a: "It depends. Asana emphasizes clarity and ease of use with a polished interface; ClickUp offers more customization and all-in-one value (tasks, docs, goals) in one tool. Choose Asana if you want a focused project management experience; choose ClickUp if you want to replace multiple tools with one flexible workspace.",
  },
  {
    q: "What project management software is easiest to use?",
    a: "Trello is one of the easiest tools to start with, thanks to its simple boards and cards. Asana and Monday are also approachable but add more structure; ClickUp is powerful but can feel busier until you streamline your setup. Notion is easy for docs-first teams but has a learning curve for advanced databases.",
  },
  {
    q: "Is Trello enough for small teams?",
    a: "Yes, for many small teams. Trello works well for straightforward task and project tracking, content calendars, and client work. If you need dependencies, timelines, or heavy reporting, Asana or Monday scale better. For very small teams and simple workflows, Trello is often sufficient.",
  },
  {
    q: "What project management tool works best for agencies?",
    a: "Monday and Teamwork are strong for agencies: both support client workspaces, multiple projects, and time or billing features. Asana and ClickUp also work well for agency workflows with customizable views and client-facing updates. Choose based on whether you need built-in time tracking and billing (Teamwork) or maximum flexibility (Monday, ClickUp).",
  },
];
