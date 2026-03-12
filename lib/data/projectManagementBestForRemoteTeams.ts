/**
 * Project management best-for remote teams page data.
 * Used by app/project-management/best-for/remote-teams/page.tsx.
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
  asana: "/Logos/asuna.jpeg",
  clickup: "/Logos/clickup.jpeg",
  monday: "/Logos/monday.jpeg",
} as const;

export const REMOTE_TEAMS_PAGE_PROPS = {
  title: "Best Project Management Software for Remote Teams (2026)",
  subtitle:
    "Compare project management tools built for remote and distributed teams: clear task visibility, async collaboration, and alignment without constant meetings.",
  useCase: "remote-teams",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Remote teams need a single source of truth for tasks, assignees, and due dates so everyone can stay aligned asynchronously. Our picks offer strong collaboration, multiple views, and integrations with communication tools so work stays visible across time zones and schedules.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top project management picks for remote teams.",
  editorialSub: "What to look for when you're choosing project management software for remote work.",
  whyThesePicksSub: "Why we chose these tools for remote teams.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "asana",
      name: "Asana",
      badge: "Best overall for remote teams",
      description:
        "Clear tasks, projects, and multiple views so everyone sees what's in progress and what's due. Strong collaboration and integrations with Slack, Teams, and calendar; good default for distributed teams.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("asana"),
      visitUrl: "https://asana.com",
      logoSrc: LOGOS.asana,
    },
    {
      slug: "clickup",
      name: "ClickUp",
      badge: "Best all-in-one for remote work",
      description:
        "Tasks, docs, and views in one workspace. Comments and @mentions keep context in one place; good for remote teams that want one tool for execution and knowledge.",
      rating: "4.5",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("clickup"),
      visitUrl: "https://clickup.com",
      logoSrc: LOGOS.clickup,
    },
    {
      slug: "monday",
      name: "Monday",
      badge: "Best for customizable remote workflows",
      description:
        "Board-based project management that adapts to how your remote team works. Strong automation and visibility; good when you want to model work exactly your way.",
      rating: "4.4",
      startingPrice: "From ~$10/user/mo",
      reviewHref: getProjectManagementReviewUrl("monday"),
      visitUrl: "https://monday.com",
      logoSrc: LOGOS.monday,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "asana",
      name: "Asana",
      logoSrc: LOGOS.asana,
      bestFor: "Best overall for remote",
      startingPrice: "Free tier",
      standoutFeature: "Structure, collaboration, integrations",
      reviewHref: getProjectManagementReviewUrl("asana"),
    },
    {
      slug: "clickup",
      name: "ClickUp",
      logoSrc: LOGOS.clickup,
      bestFor: "All-in-one for remote work",
      startingPrice: "Free tier",
      standoutFeature: "Tasks, docs, comments, views",
      reviewHref: getProjectManagementReviewUrl("clickup"),
    },
    {
      slug: "monday",
      name: "Monday",
      logoSrc: LOGOS.monday,
      bestFor: "Customizable remote workflows",
      startingPrice: "From ~$10/user/mo",
      standoutFeature: "Boards, automations, visibility",
      reviewHref: getProjectManagementReviewUrl("monday"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Single source of truth",
      body: "Everyone should see tasks, assignees, and due dates in one place so they can catch up asynchronously. Choose a tool the team will actually update—simplicity often beats feature count for remote adoption.",
    },
    {
      heading: "Comments and context",
      body: "Keep discussion on tasks so context isn't lost in email or scattered chat. @mentions and notifications help remote team members stay in the loop. Asana, ClickUp, and Monday all support this well.",
    },
    {
      heading: "Views and time zones",
      body: "List, board, and calendar or timeline views help coordinate deadlines and handoffs across time zones. Ensure the tool supports the views your team uses daily.",
    },
    {
      heading: "Integrations",
      body: "Slack, Microsoft Teams, or email integrations mean updates can flow where the team already works. Calendar integration helps with deadlines and availability. Check each tool's integration list.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Asana",
      body: "Asana is our top pick for most remote teams: clear structure, multiple views, and strong collaboration. Status updates and comments keep everyone aligned without constant meetings. When to choose Asana: you want the best balance of structure and ease of use. See our Asana review and Asana vs ClickUp comparison.",
    },
    {
      heading: "ClickUp",
      body: "ClickUp fits remote teams that want tasks and docs in one place. Comments and @mentions keep context in the tool; multiple views support different workflows. When to choose ClickUp: you want all-in-one value and flexibility. See our ClickUp review and ClickUp vs Trello comparison.",
    },
    {
      heading: "Monday",
      body: "Monday fits remote teams that want highly customizable boards and workflows. Strong automation and visibility; good when you want to model work exactly your way. When to choose Monday: you prefer boards and custom fields and are okay with paid-from-day-one. See our Monday review and Monday vs Wrike comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Asana", href: getProjectManagementReviewUrl("asana") },
    { name: "ClickUp", href: getProjectManagementReviewUrl("clickup") },
    { name: "Monday", href: getProjectManagementReviewUrl("monday") },
    { name: "Notion", href: getProjectManagementReviewUrl("notion") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
    { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
    { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
    { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Project management for remote teams", href: "/project-management/guides/project-management-for-remote-teams" },
    { label: "How to choose project management software", href: "/project-management/guides/how-to-choose-project-management-software" },
    { label: "Kanban vs Scrum tools", href: "/project-management/guides/kanban-vs-scrum-tools" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best project management software for remote teams?",
      a: "Asana is our top pick for most remote teams: clear tasks and collaboration, multiple views, and strong integrations. ClickUp offers all-in-one value; Monday offers highly customizable workflows. All support async collaboration. See our project management for remote teams guide.",
    },
    {
      q: "How do remote teams stay aligned with project management software?",
      a: "Use one tool as the source of truth for tasks, assignees, and due dates. Everyone updates status and comments in the tool so others can catch up asynchronously. Choose a tool the team will actually use—simplicity helps adoption.",
    },
    {
      q: "Do remote teams need different features than in-office teams?",
      a: "Remote teams benefit from strong async collaboration (comments, updates), clear ownership and due dates, and visibility into who is doing what. Integrations with chat and calendar help. See our project management for remote teams guide for more.",
    },
    {
      q: "Can you use Asana or ClickUp for remote teams?",
      a: "Yes. Both are widely used by remote teams for task and project visibility. Asana is simpler to adopt; ClickUp adds docs and more views. Compare in our Asana vs ClickUp and project management for remote teams guide.",
    },
  ] as BestForFaqItem[],
};
