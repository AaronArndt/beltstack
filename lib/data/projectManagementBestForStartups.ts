/**
 * Project management best-for startups page data.
 * Used by app/project-management/best-for/startups/page.tsx.
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
  clickup: "/Logos/clickup.jpeg",
  notion: "/Logos/notion.png",
  asana: "/Logos/asuna.jpeg",
} as const;

export const STARTUPS_PAGE_PROPS = {
  title: "Best Project Management Software for Startups (2026)",
  subtitle:
    "Compare project management tools built for startups: fast setup, flexible workflows, and affordable or free plans that scale as you grow.",
  useCase: "startups",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Startups need project management software that is quick to adopt, flexible enough to change as the team and product evolve, and affordable—often free or low-cost at early stage. Our picks balance ease of use, customization, and room to grow without enterprise pricing or complexity.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top project management picks for startups.",
  editorialSub: "What to look for when you're choosing project management software as a startup.",
  whyThesePicksSub: "Why we chose these tools for startups.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "clickup",
      name: "ClickUp",
      badge: "Best all-in-one for startups",
      description:
        "Tasks, docs, goals, and multiple views in one tool. Strong free tier and flexible workspaces; good for startups that want one place for product, ops, and knowledge.",
      rating: "4.5",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("clickup"),
      visitUrl: "https://clickup.com",
      logoSrc: LOGOS.clickup,
    },
    {
      slug: "notion",
      name: "Notion",
      badge: "Best for docs + lightweight planning",
      description:
        "Flexible docs, databases, and task views. Startups use it for wikis, specs, and project tracking in one place. Free tier is generous for small teams.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("notion"),
      visitUrl: "https://www.notion.so",
      logoSrc: LOGOS.notion,
    },
    {
      slug: "asana",
      name: "Asana",
      badge: "Best for structured projects",
      description:
        "Clear projects, tasks, and multiple views. Easy to adopt; free tier works for small teams. Good when you want more structure than Notion without the breadth of ClickUp.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("asana"),
      visitUrl: "https://asana.com",
      logoSrc: LOGOS.asana,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "clickup",
      name: "ClickUp",
      logoSrc: LOGOS.clickup,
      bestFor: "All-in-one for startups",
      startingPrice: "Free tier",
      standoutFeature: "Tasks, docs, goals, views in one",
      reviewHref: getProjectManagementReviewUrl("clickup"),
    },
    {
      slug: "notion",
      name: "Notion",
      logoSrc: LOGOS.notion,
      bestFor: "Docs + lightweight planning",
      startingPrice: "Free tier",
      standoutFeature: "Databases, docs, task views",
      reviewHref: getProjectManagementReviewUrl("notion"),
    },
    {
      slug: "asana",
      name: "Asana",
      logoSrc: LOGOS.asana,
      bestFor: "Structured projects",
      startingPrice: "Free tier",
      standoutFeature: "Projects, list/board/timeline",
      reviewHref: getProjectManagementReviewUrl("asana"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Fast setup and adoption",
      body: "Startups need to move quickly. Choose a tool the team can adopt in days, not weeks. Free tiers from ClickUp, Notion, and Asana let you start without commitment; pick one and iterate.",
    },
    {
      heading: "Flexibility as you grow",
      body: "Your process will change. Look for tools that support multiple views (list, board, timeline) and customizable fields so you can adapt without switching platforms. Avoid over-engineering early.",
    },
    {
      heading: "Collaboration and visibility",
      body: "Everyone should see what's in progress and what's due. Comments, @mentions, and clear assignees reduce back-and-forth. All three picks support this on free or entry tiers.",
    },
    {
      heading: "Pricing at scale",
      body: "Model cost at 10–20 people. Free tiers often cap members or features; paid plans are usually per user. See our project management pricing guide and compare in our comparisons hub.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "ClickUp",
      body: "ClickUp is our top pick for startups that want one project management workspace for tasks, docs, goals, and whiteboards so the stack does not fragment as headcount grows. The free tier is unusually deep, which helps pre-seed teams model real workflows before they pay. During a trial, stand up one sprint board, one doc hub, and one automation (status change to Slack) to see if the team actually lives in the tool. Watch notification noise—tune defaults so engineers are not spammed. See our ClickUp review and Asana vs ClickUp comparison.",
    },
    {
      heading: "Notion",
      body: "Notion fits startups where specs, fundraising memos, and task databases should live together instead of splitting between wikis and a separate PM app. Boards and relational databases flex as your process changes weekly in early stage. In a trial, migrate one critical doc set (product roadmap or hiring pipeline) and test comments with async teammates across time zones. Validate permissions before inviting investors or advisors view-only. If tasks need heavy dependencies and reporting, pair Notion with a lighter task tracker or accept its limits. See our Notion review and Notion vs Trello comparison.",
    },
    {
      heading: "Asana",
      body: "Asana gives startups an opinionated, easy-to-adopt structure—projects, sections, assignees, and due dates—without the configuration rabbit holes of all-in-one suites. The free tier supports small teams through early customer delivery. During evaluation, run a real two-week milestone with dependencies in timeline view if available on your tier. Test integrations with GitHub or Figma if engineering and design need visibility. Choose Asana when you want disciplined execution more than infinite customization. See our Asana review and Asana vs ClickUp comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "ClickUp", href: getProjectManagementReviewUrl("clickup") },
    { name: "Notion", href: getProjectManagementReviewUrl("notion") },
    { name: "Asana", href: getProjectManagementReviewUrl("asana") },
    { name: "Monday", href: getProjectManagementReviewUrl("monday") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
    { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
    { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Project management for small business", href: "/project-management/guides/project-management-for-small-business" },
    { label: "How to choose project management software", href: "/project-management/guides/how-to-choose-project-management-software" },
    { label: "Project management pricing guide", href: "/project-management/guides/project-management-pricing-guide" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best project management software for startups?",
      a: "ClickUp is our top pick for startups that want one tool for tasks and docs; Notion is best for docs-first teams; Asana is best for simple structured projects. All offer free tiers. See our best project management software roundup and Asana vs ClickUp comparison.",
    },
    {
      q: "Can startups use free project management software?",
      a: "Yes. ClickUp, Notion, and Asana offer free tiers that support small teams. Sufficient for many early-stage startups; upgrade when you need more members, timeline view, or advanced automation.",
    },
    {
      q: "When should a startup choose ClickUp over Notion or Asana?",
      a: "Choose ClickUp when you want tasks, docs, and goals in one tool with strong customization. Choose Notion when docs and knowledge bases are primary. Choose Asana when you want the simplest path to project and task structure.",
    },
    {
      q: "How do startups typically use project management software?",
      a: "Startups use it for product and feature tracking, sprint or milestone planning, and cross-team visibility. Many start with boards or lists and add timeline views as work gets more complex. See our project management for small business and remote teams guides.",
    },
  ] as BestForFaqItem[],
};
