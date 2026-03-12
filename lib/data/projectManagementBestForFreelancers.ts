/**
 * Project management best-for freelancers page data.
 * Used by app/project-management/best-for/freelancers/page.tsx.
 */

import { getProjectManagementReviewUrl, getProjectManagementCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/project-management", label: "Project Management" };
const SEE_ALSO = {
  roundupLabel: "best project management software",
  roundupHref: "/project-management/best-project-management-software",
  compareLabel: "project management software comparisons",
  compareHref: "/project-management/compare",
};

const LOGOS = {
  trello: "/Logos/trello.png",
  notion: "/Logos/notion.png",
  clickup: "/Logos/clickup.jpeg",
} as const;

export const FREELANCERS_PAGE_PROPS = {
  title: "Best Project Management Software for Freelancers (2026)",
  subtitle:
    "Compare project management tools built for freelancers: simple task and project tracking, lightweight boards, and affordable or free plans without enterprise complexity.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Freelancers need project management software that stays simple—task lists, boards, and due dates for client work and personal projects—without the cost or complexity of tools built for large teams. Our picks balance ease of use with room to grow if you add clients or collaborate with others.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top project management picks for freelancers.",
  editorialSub: "What to look for when you're choosing project management software as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "trello",
      name: "Trello",
      badge: "Best for simple boards",
      description:
        "Kanban-style boards and cards for tasks and projects. Free tier is generous; minimal learning curve so you can focus on work instead of the tool.",
      rating: "4.3",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("trello"),
      visitUrl: "https://trello.com",
      logoSrc: LOGOS.trello,
    },
    {
      slug: "notion",
      name: "Notion",
      badge: "Best for docs + tasks",
      description:
        "Flexible docs, databases, and task views in one place. Ideal for freelancers who want to combine notes, client briefs, and to-dos without switching apps.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("notion"),
      visitUrl: "https://www.notion.so",
      logoSrc: LOGOS.notion,
    },
    {
      slug: "clickup",
      name: "ClickUp",
      badge: "Best all-in-one value",
      description:
        "Tasks, docs, goals, and multiple views in one tool. Free tier is strong; good fit if you want more structure than Trello without enterprise pricing.",
      rating: "4.5",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("clickup"),
      visitUrl: "https://clickup.com",
      logoSrc: LOGOS.clickup,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "trello",
      name: "Trello",
      logoSrc: LOGOS.trello,
      bestFor: "Simple boards",
      startingPrice: "Free tier",
      standoutFeature: "Kanban boards, minimal setup",
      reviewHref: getProjectManagementReviewUrl("trello"),
    },
    {
      slug: "notion",
      name: "Notion",
      logoSrc: LOGOS.notion,
      bestFor: "Docs + tasks",
      startingPrice: "Free tier",
      standoutFeature: "Databases, docs, task views",
      reviewHref: getProjectManagementReviewUrl("notion"),
    },
    {
      slug: "clickup",
      name: "ClickUp",
      logoSrc: LOGOS.clickup,
      bestFor: "All-in-one value",
      startingPrice: "Free tier",
      standoutFeature: "Tasks, docs, views in one",
      reviewHref: getProjectManagementReviewUrl("clickup"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Task and project visibility",
      body: "Look for a single place to see what you're working on and what's due. A simple board (Trello) or list view is often enough; avoid tools that require heavy setup or many projects to be useful.",
    },
    {
      heading: "Simplicity vs flexibility",
      body: "Freelancers often need quick capture and clear due dates. Trello is the lightest; Notion adds docs and databases; ClickUp adds more views and structure. Choose based on whether you prefer minimal (Trello) or one tool for everything (Notion, ClickUp).",
    },
    {
      heading: "Pricing and growth",
      body: "Free tiers from Trello, Notion, and ClickUp let you start at no cost. Upgrade when you need more members, storage, or advanced views. See our project management pricing guide for how tiers compare.",
    },
    {
      heading: "Integrations",
      body: "If you use calendar, time tracking, or communication tools, check that your pick integrates so you don't duplicate work. Most modern project management tools offer key integrations on free or low-cost plans.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Trello",
      body: "Trello is our top pick for freelancers who want the simplest boards: create cards, move them through columns, add due dates and checklists. Free tier is generous; no learning curve. When to choose Trello: you want lightweight Kanban and don't need docs or complex views. See our Trello review and ClickUp vs Trello comparison.",
    },
    {
      heading: "Notion",
      body: "Notion fits freelancers who want docs, notes, and tasks in one place. You can keep client briefs, project notes, and to-dos in databases and switch between list and board views. Free tier is solid for solo use. When to choose Notion: you live in docs and want lightweight task views. See our Notion review and Notion vs Trello comparison.",
    },
    {
      heading: "ClickUp",
      body: "ClickUp offers tasks, docs, goals, and multiple views in one tool. Free tier is strong; you get more structure than Trello without enterprise complexity. Good if you outgrow Trello but don't need the doc-centric model of Notion. When to choose ClickUp: you want one tool that can do more as you grow. See our ClickUp review and Asana vs ClickUp comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Trello", href: getProjectManagementReviewUrl("trello") },
    { name: "Notion", href: getProjectManagementReviewUrl("notion") },
    { name: "ClickUp", href: getProjectManagementReviewUrl("clickup") },
    { name: "Asana", href: getProjectManagementReviewUrl("asana") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
    { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
    { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Project management for small business", href: "/project-management/guides/project-management-for-small-business" },
    { label: "How to choose project management software", href: "/project-management/guides/how-to-choose-project-management-software" },
    { label: "Kanban vs Scrum tools", href: "/project-management/guides/kanban-vs-scrum-tools" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Do freelancers really need project management software?",
      a: "If you have more than a handful of tasks or client deliverables and want to see what's due when, a lightweight tool beats scattered notes and email. Free tiers from Trello, Notion, or ClickUp make it low-risk to try.",
    },
    {
      q: "What is the easiest project management tool for freelancers?",
      a: "Trello is the easiest: create boards and cards, move them through columns, add due dates. Notion is easy if you like docs and databases; ClickUp is easy once you pick a view and stick with it. Start with Trello if you want minimal learning curve.",
    },
    {
      q: "When should a freelancer choose Trello over ClickUp or Notion?",
      a: "Choose Trello when you only need simple boards and want the least complexity. Choose Notion when you want docs and tasks together. Choose ClickUp when you want more views and structure but still want a single tool. See our ClickUp vs Trello and Notion vs Trello comparisons.",
    },
    {
      q: "Is free project management software enough for freelancers?",
      a: "For many freelancers, yes. Trello, Notion, and ClickUp offer free tiers that support solo use with multiple boards or projects. Upgrade when you need more members, storage, or advanced features like timeline view.",
    },
  ] as BestForFaqItem[],
};
