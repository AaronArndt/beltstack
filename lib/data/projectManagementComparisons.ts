import { getProjectManagementReviewUrl, getProjectManagementCompareUrl, getProjectManagementBestForUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getProjectManagementCompareUrlFromSlug(slug: string): string {
  return `/project-management/compare/${slug}`;
}

/** Product refs for project management comparisons — reuse for consistent review links. */
const P = {
  asana: {
    name: "Asana",
    slug: "asana",
    reviewHref: getProjectManagementReviewUrl("asana"),
    logoSrc: "/Logos/asuna.jpeg",
    visitUrl: "https://asana.com",
    bestForSummary: "Structured projects and tasks for small teams.",
    rating: "4.6",
    startingPrice: "Free tier",
  },
  clickup: {
    name: "ClickUp",
    slug: "clickup",
    reviewHref: getProjectManagementReviewUrl("clickup"),
    logoSrc: "/Logos/clickup.jpeg",
    visitUrl: "https://clickup.com",
    bestForSummary: "Highly customizable workspace with tasks, docs, and dashboards.",
    rating: "4.5",
    startingPrice: "Free tier",
  },
  monday: {
    name: "Monday",
    slug: "monday",
    reviewHref: getProjectManagementReviewUrl("monday"),
    logoSrc: "/Logos/monday.jpeg",
    visitUrl: "https://monday.com",
    bestForSummary: "Visual boards and automations for projects and operations.",
    rating: "4.4",
    startingPrice: "From ~$10/user/mo",
  },
  trello: {
    name: "Trello",
    slug: "trello",
    reviewHref: getProjectManagementReviewUrl("trello"),
    logoSrc: "/Logos/trello.png",
    visitUrl: "https://trello.com",
    bestForSummary: "Simple Kanban boards for lightweight projects.",
    rating: "4.3",
    startingPrice: "Free tier",
  },
  notion: {
    name: "Notion",
    slug: "notion",
    reviewHref: getProjectManagementReviewUrl("notion"),
    logoSrc: "/Logos/notion.png",
    visitUrl: "https://www.notion.so",
    bestForSummary: "Docs and databases that can double as project boards.",
    rating: "4.4",
    startingPrice: "Free tier",
  },
  wrike: {
    name: "Wrike",
    slug: "wrike",
    reviewHref: getProjectManagementReviewUrl("wrike"),
    logoSrc: "/Logos/wrike.png",
    visitUrl: "https://www.wrike.com",
    bestForSummary: "Complex portfolios, dependencies, and enterprise reporting.",
    rating: "4.3",
    startingPrice: "From ~$9.80/user/mo",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getProjectManagementBestForUrl("freelancers") },
  { label: "Best for small business", href: getProjectManagementBestForUrl("small-business") },
  { label: "Best for agencies", href: getProjectManagementBestForUrl("agencies") },
  { label: "Best for startups", href: getProjectManagementBestForUrl("startups") },
  { label: "Best for remote teams", href: getProjectManagementBestForUrl("remote-teams") },
  { label: "Best for HVAC", href: getProjectManagementBestForUrl("hvac") },
  { label: "Best for plumbing", href: getProjectManagementBestForUrl("plumbing") },
  { label: "Best for electricians", href: getProjectManagementBestForUrl("electricians") },
  { label: "Best for painting", href: getProjectManagementBestForUrl("painting") },
  { label: "Best for roofing", href: getProjectManagementBestForUrl("roofing") },
  { label: "Best for general contractors", href: getProjectManagementBestForUrl("general-contractors") },
  { label: "Best for landscaping", href: getProjectManagementBestForUrl("landscaping") },
  { label: "Best for construction", href: getProjectManagementBestForUrl("construction") },
  { label: "Best for remodeling", href: getProjectManagementBestForUrl("remodeling") },
  { label: "Best for handyman", href: getProjectManagementBestForUrl("handyman") },
  { label: "Best for property management", href: getProjectManagementBestForUrl("property-management") },
  { label: "Best for pest control", href: getProjectManagementBestForUrl("pest-control") },
  { label: "Best for pool service", href: getProjectManagementBestForUrl("pool-service") },
  { label: "Best for junk removal", href: getProjectManagementBestForUrl("junk-removal") },
  { label: "Best for moving companies", href: getProjectManagementBestForUrl("moving") },
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
      categoryHref: "/project-management",
      categoryLabel: "Project management",
    },
  ];
}

const BASE_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  {
    feature: "Tasks & projects",
    productA: "Projects, tasks, and subtasks",
    productB: "Projects, tasks, and subtasks",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Views",
    productA: "List, board, calendar",
    productB: "List, board, calendar",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Collaboration",
    productA: "Comments & file attachments",
    productB: "Comments & file attachments",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Integrations",
    productA: "Popular work tools & integrations",
    productB: "Popular work tools & integrations",
    supportA: "supported",
    supportB: "supported",
  },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  buildComparison("asana-vs-clickup", "asana", "clickup", {
    summaryParagraph:
      "Asana and ClickUp both deliver capable project management. Asana focuses on clarity and structured projects, while ClickUp leans into extreme flexibility and an all-in-one workspace.",
    quickRecommendationA:
      "Choose Asana if you want a polished, opinionated project tool that most teams can adopt quickly.",
    quickRecommendationB:
      "Choose ClickUp if you want to model many different workflows in one workspace and are willing to invest in setup.",
    quickVerdictParagraphs: [
      "Asana is often easier for mixed teams to adopt: list and board views, clear assignees, and straightforward project structures. It gives you enough configuration to mirror most small-business workflows without overwhelming people.",
      "ClickUp offers more flexibility: spaces, folders, lists, custom fields, docs, and dashboards can handle everything from product roadmaps to operations. The tradeoff is complexity—someone should own the setup so the workspace stays navigable.",
      "If you value simplicity and fast adoption, Asana usually wins. If you need to consolidate many tools and have appetite for configuration, ClickUp can be the better long-term home.",
    ],
    decisionGuideA: [
      "You want a structured, easy-to-understand project tool.",
      "You have cross-functional teams that need a clear shared view.",
      "You prefer a simpler configuration story over maximum flexibility.",
    ],
    decisionGuideB: [
      "You want one workspace for tasks, docs, and dashboards.",
      "You have complex or varied workflows across teams.",
      "You are comfortable assigning an owner to maintain the setup.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.6", productB: "4.2" },
      { category: "Customization", productA: "4.3", productB: "4.7" },
      { category: "Pricing & value", productA: "4.4", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Workspace breadth",
        productA: "Projects and tasks only",
        productB: "Tasks, docs, whiteboards, dashboards",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Both tools offer free tiers and per-user paid plans. Asana’s paid plans focus on extra views, custom fields, and reporting. ClickUp’s paid plans unlock more storage, automation, and advanced workspace features; its free tier is generous.",
    prosConsA: {
      pros: [
        "Balanced feature set that fits many teams.",
        "Clean interface and strong adoption story.",
        "Multiple views without overwhelming configuration.",
      ],
      cons: [
        "Less flexible than ClickUp for unusual workflows.",
        "Advanced reporting and portfolios on higher tiers.",
      ],
    },
    prosConsB: {
      pros: [
        "Very flexible structure that can model many processes.",
        "Docs and dashboards in the same tool as tasks.",
        "Competitive pricing, especially at scale.",
      ],
      cons: [
        "Can feel complex without careful setup.",
        "Easy to over-configure and confuse new users.",
      ],
    },
    bestFor: [
      {
        heading: "Best for teams that want structure without complexity",
        body: "Asana is best for small and mid-size teams that want a clear project tool that most people can use without training.",
      },
      {
        heading: "Best for teams that want an all-in-one workspace",
        body: "ClickUp is best for teams that want to consolidate tasks, docs, and dashboards and are comfortable investing in configuration.",
      },
    ],
    alternatives: [
      {
        name: "Monday",
        href: getProjectManagementReviewUrl("monday"),
        description: "Visual boards and automations if you want a more visual alternative.",
      },
      {
        name: "Notion",
        href: getProjectManagementReviewUrl("notion"),
        description: "Doc- and database-first approach to projects.",
      },
    ],
    faqs: [
      {
        q: "Is Asana or ClickUp easier to use?",
        a: "Most teams find Asana easier to adopt quickly thanks to its more opinionated structure. ClickUp can be just as usable once configured, but takes more work to get there.",
      },
      {
        q: "Which is cheaper: Asana or ClickUp?",
        a: "Both offer free tiers and paid plans. ClickUp is often slightly more aggressive on pricing for the amount of functionality it includes.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for ease of use", winner: "A" },
      { label: "Winner for customization", winner: "B" },
    ],
    moreComparisons: [
      { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
      { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
      { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for most small teams",
        winner: "A",
        reason: "Asana offers a simpler, more opinionated project model that fits many teams with minimal setup.",
      },
      {
        label: "Best for consolidation",
        winner: "B",
        reason: "ClickUp can replace several tools if you configure it well.",
      },
    ],
  }),

  buildComparison("asana-vs-monday", "asana", "monday", {
    summaryParagraph:
      "Asana and Monday both give you modern project management. Asana leans toward structured projects and tasks; Monday leans toward visual boards and workflows that can span projects and operations.",
    quickRecommendationA:
      "Choose Asana if you primarily need clear projects, tasks, and deadlines with a familiar list-and-board feel.",
    quickRecommendationB:
      "Choose Monday if you want highly visual boards, automations, and the option to manage more than just projects in one system.",
    quickVerdictParagraphs: [
      "Asana works well when your main need is project execution: planning tasks, tracking deadlines, and giving each owner a clear to-do list.",
      "Monday is especially strong when you treat many business processes as boards—content production, hiring, support queues, and more.",
      "If you want a focused project tool, Asana is often enough. If you’d like your project system to double as a broader work OS, Monday may be the better fit.",
    ],
    decisionGuideA: [
      "You mostly run projects and tasks, not complex operational workflows.",
      "You prefer a classic project structure with sections, lists, and boards.",
    ],
    decisionGuideB: [
      "You want to build visual boards for many types of work.",
      "You care about automations that update boards and notify teammates.",
    ],
    ratingsComparison: [],
    featureComparison: BASE_FEATURE_ROWS,
    pricingComparison:
      "Both tools use per-user pricing with several tiers. Monday often bundles more views and automation into earlier plans; Asana’s pricing is competitive when you focus on project management only.",
    prosConsA: {
      pros: ["Clear project structure", "Strong for task ownership", "Multiple useful views"],
      cons: ["Less flexible than Monday for ops-style workflows"],
    },
    prosConsB: {
      pros: ["Highly visual boards", "Strong automations", "Good for many types of work beyond projects"],
      cons: ["Can be more than you need if you only run a few projects"],
    },
    bestFor: [
      {
        heading: "Best for project-focused teams",
        body: "Asana fits teams whose main need is planning and delivering projects with clear task lists and owners.",
      },
      {
        heading: "Best for teams that want a work OS",
        body: "Monday fits teams that want one visual system for projects, ops, and other recurring workflows.",
      },
    ],
    alternatives: [],
    faqs: [],
    sidebarWinners: [
      { label: "Winner for classic projects", winner: "A" },
      { label: "Winner for visual workflows", winner: "B" },
    ],
    moreComparisons: [
      { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
      { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [],
  }),

  buildComparison("clickup-vs-trello", "clickup", "trello", {
    summaryParagraph:
      "ClickUp and Trello both use boards to organize work. ClickUp can replace multiple tools with tasks, docs, and dashboards; Trello is a lightweight Kanban board that excels at simple projects.",
    quickRecommendationA:
      "Choose ClickUp if you want one flexible workspace that can scale beyond basic boards.",
    quickRecommendationB:
      "Choose Trello if you want the simplest possible board for yourself or a small team.",
    quickVerdictParagraphs: [
      "Trello is one of the easiest tools for teams to adopt. Cards on a board with checklists and due dates are enough for many personal and small-team projects.",
      "ClickUp brings more structure and additional building blocks—spaces, lists, docs, and dashboards. That helps when you outgrow basic boards but increases complexity.",
      "If your current struggle is that everything is scattered and under-structured, ClickUp is appealing. If you simply need a shared board that everyone understands in minutes, Trello is hard to beat.",
    ],
    decisionGuideA: [
      "You know you will eventually outgrow a basic board.",
      "You want reporting, docs, and more customizable structures.",
    ],
    decisionGuideB: [
      "You need a fast, simple shared board today.",
      "You do not have a dedicated owner for configuring tools.",
    ],
    ratingsComparison: [],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Workspace breadth",
        productA: "Tasks, docs, dashboards, goals",
        productB: "Boards and cards",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Both tools have strong free plans. Trello’s paid plans add more automation and Power-Ups; ClickUp’s paid plans add storage, advanced features, and more automation.",
    prosConsA: {
      pros: ["All-in-one workspace potential", "Deeper reporting and structure", "Good value per seat"],
      cons: ["Setup effort required", "Can feel busy for very small teams"],
    },
    prosConsB: {
      pros: ["Extremely simple and approachable", "Great for ad-hoc projects and personal boards"],
      cons: ["Limited structure for scaling teams", "Reporting and cross-board views are basic"],
    },
    bestFor: [
      {
        heading: "Best for scaling teams",
        body: "ClickUp is better if you expect to manage many projects and want more tooling around them.",
      },
      {
        heading: "Best for simple boards",
        body: "Trello is better if you want to stay lean and avoid managing a complex tool.",
      },
    ],
    alternatives: [],
    faqs: [],
    sidebarWinners: [
      { label: "Winner for simplicity", winner: "B" },
      { label: "Winner for long-term flexibility", winner: "A" },
    ],
    moreComparisons: [
      { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
      { label: "Notion vs Trello", href: getProjectManagementCompareUrl("notion-vs-trello") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [],
  }),

  buildComparison("notion-vs-trello", "notion", "trello", {
    summaryParagraph:
      "Notion and Trello can both manage projects. Notion is doc-first with databases and rich pages; Trello is board-first with simple cards and checklists.",
    quickRecommendationA:
      "Choose Notion if documentation and knowledge sharing are central and you want projects to live in the same place.",
    quickRecommendationB:
      "Choose Trello if you just need simple Kanban boards for tasks with minimal setup.",
    quickVerdictParagraphs: [
      "Notion shines when you maintain docs, wikis, and databases alongside task tracking. You can build lightweight CRMs, content calendars, and project trackers all from the same building blocks.",
      "Trello is optimized for one thing: visual boards with cards moving across columns. It is less flexible as a knowledge base but faster to set up for task lists.",
      "If your team spends as much time in docs as in task lists, Notion is often the better long-term home. If you just want to see tasks in columns, Trello remains a classic.",
    ],
    decisionGuideA: [],
    decisionGuideB: [],
    ratingsComparison: [],
    featureComparison: BASE_FEATURE_ROWS,
    pricingComparison:
      "Both tools offer free plans and modestly priced paid tiers. Pricing differences usually matter less than which model—doc-first vs board-first—your team prefers.",
    prosConsA: {
      pros: [],
      cons: [],
    },
    prosConsB: {
      pros: [],
      cons: [],
    },
    bestFor: [],
    alternatives: [],
    faqs: [],
    sidebarWinners: [],
    moreComparisons: [
      { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
      { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [],
  }),

  buildComparison("monday-vs-wrike", "monday", "wrike", {
    summaryParagraph:
      "Monday and Wrike both target teams that manage many projects. Monday is friendlier and board-based; Wrike is better for complex portfolios, dependencies, and enterprise-style reporting.",
    quickRecommendationA:
      "Choose Monday if you want a visual, approachable work OS that can cover projects and other workflows.",
    quickRecommendationB:
      "Choose Wrike if you manage complex portfolios with many dependencies, approvals, and enterprise requirements.",
    quickVerdictParagraphs: [
      "Monday is strong for small and mid-size teams that want visual boards, automations, and easy-to-understand views.",
      "Wrike is more at home in environments with PMOs, multiple portfolios, and deeper reporting needs.",
      "If you are a growing small business or agency, Monday tends to be the easier fit. If you are replacing legacy PM systems at scale, Wrike may be worth the extra complexity.",
    ],
    decisionGuideA: [],
    decisionGuideB: [],
    ratingsComparison: [],
    featureComparison: BASE_FEATURE_ROWS,
    pricingComparison:
      "Monday and Wrike both use per-user pricing; Wrike’s enterprise-focused tiers can cost more but include additional governance and reporting features.",
    prosConsA: {
      pros: [],
      cons: [],
    },
    prosConsB: {
      pros: [],
      cons: [],
    },
    bestFor: [],
    alternatives: [],
    faqs: [],
    sidebarWinners: [],
    moreComparisons: [
      { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
      { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
      { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getProjectManagementComparison(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getProjectManagementComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

