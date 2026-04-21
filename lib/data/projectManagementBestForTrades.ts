/**
 * Project management best-for pages by trade / company type.
 * Featured triples vary by trade (not the same three argued everywhere); products map to canonical PM reviews.
 */

import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { getProjectManagementCompareUrl, getProjectManagementReviewUrl } from "@/lib/routes";

const CATEGORY = { href: "/project-management", label: "Project Management" };
const SEE_ALSO = {
  roundupLabel: "best project management software",
  roundupHref: "/project-management/best-project-management-software",
  compareLabel: "project management software comparisons",
  compareHref: "/project-management/compare",
};

const PM_PRODUCT_CORE = {
  asana: {
    name: "Asana",
    logoSrc: "/Logos/asuna.jpeg",
    rating: "4.6",
    startingPrice: "Free tier",
    visitUrl: "https://asana.com",
    defaultStandout: "Projects, timeline, clear ownership",
  },
  clickup: {
    name: "ClickUp",
    logoSrc: "/Logos/clickup.jpeg",
    rating: "4.5",
    startingPrice: "Free tier",
    visitUrl: "https://clickup.com",
    defaultStandout: "All-in-one workspace, custom views",
  },
  monday: {
    name: "Monday",
    logoSrc: "/Logos/monday.jpeg",
    rating: "4.4",
    startingPrice: "From ~$10/user/mo",
    visitUrl: "https://monday.com",
    defaultStandout: "Boards, automations, templates",
  },
  trello: {
    name: "Trello",
    logoSrc: "/Logos/trello.png",
    rating: "4.3",
    startingPrice: "Free tier",
    visitUrl: "https://trello.com",
    defaultStandout: "Simple Kanban, fast crew adoption",
  },
  notion: {
    name: "Notion",
    logoSrc: "/Logos/notion.png",
    rating: "4.4",
    startingPrice: "Free tier",
    visitUrl: "https://www.notion.so",
    defaultStandout: "Docs and databases beside tasks",
  },
  wrike: {
    name: "Wrike",
    logoSrc: "/Logos/wrike.png",
    rating: "4.3",
    startingPrice: "From ~$9.80/user/mo",
    visitUrl: "https://www.wrike.com",
    defaultStandout: "Dependencies, Gantt, portfolio views",
  },
  teamwork: {
    name: "Teamwork",
    logoSrc: "/Logos/teamwork.png",
    rating: "4.2",
    startingPrice: "From ~$5.99/user/mo",
    visitUrl: "https://www.teamwork.com",
    defaultStandout: "Client projects, milestones, time tracking",
  },
  basecamp: {
    name: "Basecamp",
    logoSrc: "/Logos/vasecamp.jpeg",
    rating: "4.1",
    startingPrice: "Flat monthly",
    visitUrl: "https://basecamp.com",
    defaultStandout: "Flat pricing, simple to-dos and messages",
  },
  smartsheet: {
    name: "Smartsheet",
    logoSrc: "/Logos/smartsheet.jpeg",
    rating: "4.4",
    startingPrice: "From ~$7/user/mo",
    visitUrl: "https://www.smartsheet.com",
    defaultStandout: "Grid-based sheets, Gantt, automations",
  },
} as const;

type PmProductSlug = keyof typeof PM_PRODUCT_CORE;

type ProductPick = {
  slug: PmProductSlug;
  badge: string;
  description: string;
  rowBestFor: string;
  standoutFeature?: string;
  why: string;
};

type TradeConfig = {
  useCase: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  picks: [ProductPick, ProductPick, ProductPick];
  editorialGuidance: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
  extraGuides?: BestForGuideLink[];
};

const PM_COMPARISONS: { label: string; compareSlug: string; products: [PmProductSlug, PmProductSlug] }[] = [
  { label: "Asana vs ClickUp", compareSlug: "asana-vs-clickup", products: ["asana", "clickup"] },
  { label: "Asana vs Monday", compareSlug: "asana-vs-monday", products: ["asana", "monday"] },
  { label: "ClickUp vs Trello", compareSlug: "clickup-vs-trello", products: ["clickup", "trello"] },
  { label: "Notion vs Trello", compareSlug: "notion-vs-trello", products: ["notion", "trello"] },
  { label: "Monday vs Wrike", compareSlug: "monday-vs-wrike", products: ["monday", "wrike"] },
];

const DEFAULT_COMPARISON_FALLBACK: BestForComparisonLink[] = [
  { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
  { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
  { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
];

function buildRelatedComparisons(featured: PmProductSlug[]): BestForComparisonLink[] {
  const set = new Set(featured);
  const scored = PM_COMPARISONS.map((c) => {
    const [a, b] = c.products;
    const score = (set.has(a) ? 1 : 0) + (set.has(b) ? 1 : 0);
    return { label: c.label, href: getProjectManagementCompareUrl(c.compareSlug), score };
  })
    .filter((c) => c.score > 0)
    .sort((a, b) => b.score - a.score);
  const out: BestForComparisonLink[] = [];
  const seen = new Set<string>();
  for (const c of scored) {
    if (seen.has(c.href)) continue;
    seen.add(c.href);
    out.push({ label: c.label, href: c.href });
    if (out.length >= 5) break;
  }
  for (const f of DEFAULT_COMPARISON_FALLBACK) {
    if (out.length >= 3) break;
    if (seen.has(f.href)) continue;
    seen.add(f.href);
    out.push(f);
  }
  return out;
}

const REVIEW_FILL_ORDER: PmProductSlug[] = [
  "asana",
  "clickup",
  "monday",
  "trello",
  "notion",
  "wrike",
  "teamwork",
  "basecamp",
  "smartsheet",
];

function buildRelatedReviews(featured: PmProductSlug[]): BestForReviewLink[] {
  const ordered: PmProductSlug[] = [...featured];
  for (const s of REVIEW_FILL_ORDER) {
    if (!ordered.includes(s)) ordered.push(s);
    if (ordered.length >= 6) break;
  }
  return ordered.map((s) => ({
    name: PM_PRODUCT_CORE[s].name,
    href: getProjectManagementReviewUrl(s),
  }));
}

function buildTradeProps(p: TradeConfig): BestForTemplateProps {
  const featuredProducts: BestForFeaturedProduct[] = p.picks.map((pick) => {
    const core = PM_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      badge: pick.badge,
      description: pick.description,
      rating: core.rating,
      startingPrice: core.startingPrice,
      reviewHref: getProjectManagementReviewUrl(pick.slug),
      visitUrl: core.visitUrl,
      logoSrc: core.logoSrc,
    };
  });

  const comparisonTableRows: BestForTableRow[] = p.picks.map((pick) => {
    const core = PM_PRODUCT_CORE[pick.slug];
    return {
      slug: pick.slug,
      name: core.name,
      logoSrc: core.logoSrc,
      bestFor: pick.rowBestFor,
      startingPrice: core.startingPrice,
      standoutFeature: pick.standoutFeature ?? core.defaultStandout,
      reviewHref: getProjectManagementReviewUrl(pick.slug),
    };
  });

  const whyThesePicks: BestForEditorialBlock[] = p.picks.map((pick) => ({
    heading: PM_PRODUCT_CORE[pick.slug].name,
    body: pick.why,
  }));

  const featuredSlugs = p.picks.map((x) => x.slug);
  const relatedGuides = [...(p.extraGuides ?? []), ...COMMON_GUIDES].filter(
    (item, i, arr) => arr.findIndex((x) => x.href === item.href) === i
  );

  return {
    title: p.title,
    subtitle: p.subtitle,
    useCase: p.useCase,
    categoryHref: CATEGORY.href,
    categoryLabel: CATEGORY.label,
    introParagraph: p.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: "Our top project management picks for this trade.",
    editorialSub: "What to look for when you choose project management software for your operation.",
    whyThesePicksSub: "Why we recommend these tools for your use case.",
    seeAlsoBlock: SEE_ALSO,
    featuredProducts,
    comparisonTableRows,
    editorialGuidance: p.editorialGuidance,
    whyThesePicks,
    relatedReviews: buildRelatedReviews(featuredSlugs),
    relatedComparisons: buildRelatedComparisons(featuredSlugs),
    relatedGuides,
    faqItems: p.faqItems,
  };
}

const COMMON_GUIDES: BestForGuideLink[] = [
  {
    label: "How to choose project management software",
    href: "/project-management/guides/how-to-choose-project-management-software",
  },
  {
    label: "Project management for small business",
    href: "/project-management/guides/project-management-for-small-business",
  },
  { label: "Project management pricing guide", href: "/project-management/guides/project-management-pricing-guide" },
];

const E = (heading: string, body: string): BestForEditorialBlock => ({ heading, body });

export const HVAC_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "hvac",
  title: "Best Project Management Software for HVAC Businesses (2026)",
  subtitle:
    "Compare PM tools for HVAC: install and service job tracking, maintenance agreement renewals, crew handoffs, and office–field alignment without spreadsheet chaos.",
  introParagraph:
    "HVAC businesses run installs, tune-ups, emergency calls, and membership programs at once. Project management software helps you track jobs as projects—with tasks, owners, and deadlines—so sales, dispatch, and techs share one timeline instead of losing details in texts and email threads.",
  picks: [
    {
      slug: "asana",
      badge: "Best structured PM for HVAC ops",
      description: "Clear projects, tasks, and timeline views for installs, change orders, and seasonal campaigns.",
      rowBestFor: "Install & service projects",
      why: "Asana remains a strong default when you want dependable project structure—sections, dependencies, and timeline—for installs and internal initiatives without overwhelming techs. During a trial, model one residential changeout and one commercial maintenance rollout with real assignees and due dates. Confirm mobile usability for leads who walk job sites. Asana fits when clarity and adoption beat maximum customization.",
    },
    {
      slug: "smartsheet",
      badge: "Best grid-style planning for HVAC ops",
      description: "Sheet-based trackers for equipment stages, capacity, and recurring program tasks if you think in rows.",
      rowBestFor: "Ops grids & program tracking",
      why: "Smartsheet fits HVAC operators who already plan in spreadsheets and want shared grids with automations, Gantt, and reporting on top. Use it for seasonal surge planning, equipment staging checklists, or cross-branch KPI sheets while keeping field execution tools separate. Trial one install template and one membership renewal tracker. Smartsheet shines when the office team lives in Excel today.",
    },
    {
      slug: "monday",
      badge: "Best visual boards for HVAC workflows",
      description: "Tailor columns and automations for job types, equipment stages, or regional teams.",
      rowBestFor: "Custom job pipelines",
      why: "Monday.com suits HVAC owners who want color-coded boards for job type, region, or equipment—with automations when permits clear or inspections schedule. Trial your busiest workflow with real columns; invite a resistant dispatcher to own one board. Validate guest access if subs or builders need read-only views. Monday shines when every stage must be obvious at a glance.",
    },
  ],
  editorialGuidance: [
    E("Jobs as projects, not just tickets", "Treat large installs or changeout projects with milestones—rough-in, startup, punch—so everyone sees what blocks the next phase."),
    E("Maintenance and membership follow-through", "Recurring tune-ups and renewals need repeating tasks or templates."),
    E("Handoffs between sales and production", "Use assignees, comments, and attachments for load calculations, photos, and permit status."),
    E("Reporting without enterprise overhead", "Dashboards on open jobs, overdue tasks, or capacity by crew help owners steer weekly."),
  ],
  faqItems: [
    {
      q: "What is the best project management software for HVAC companies?",
      a: "We shortlist Asana for structured timelines, Smartsheet if your team prefers spreadsheet-style operational grids, and Monday for highly visual boards and automations. Pick based on how your office already plans work and how much field adoption you need.",
    },
    {
      q: "Can PM software replace HVAC field service software?",
      a: "PM tools organize tasks and projects; field service software handles dispatch, routing, and truck-level workflows. Many shops use both—PM for installs and internal programs, FSM for day-to-day service.",
    },
    {
      q: "Is there a free option for small HVAC teams?",
      a: "Asana and Monday offer free tiers for small teams; Smartsheet’s entry pricing is per user—compare current limits on each vendor’s site before you roll out.",
    },
  ],
});

export const PLUMBING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "plumbing",
  title: "Best Project Management Software for Plumbing Companies (2026)",
  subtitle:
    "Compare PM tools for plumbers: multi-day jobs, emergency vs planned work, estimates-to-production handoffs, and clear accountability across crews.",
  introParagraph:
    "Plumbing companies balance emergency response with repipes, water heater replacements, and commercial jobs that span days. Project management software gives each job a single place for tasks, photos, permits, and billing checkpoints—so the estimator’s notes still exist when a different tech finishes the job.",
  picks: [
    {
      slug: "asana",
      badge: "Best for structured plumbing projects",
      description: "Tasks, timelines, and approvals for repipes, remodel plumbing, and multi-visit jobs.",
      rowBestFor: "Multi-day & commercial jobs",
      why: "Asana is excellent for plumbing companies that need reliable task hierarchy and timeline visibility on jobs that outlast a single truck roll. Trial a repipe with phases and a water heater swap as a lighter template side by side. Asana fits when your bottleneck is coordination, not lack of a whiteboard.",
    },
    {
      slug: "wrike",
      badge: "Best for formal multi-visit jobs",
      description: "Dependencies, Gantt, and approvals when commercial or repipe work behaves like a real project plan.",
      rowBestFor: "Heavy jobs & approvals",
      why: "Wrike fits plumbing shops running complex commercial work, tight inspection sequences, or multiple subs where dependencies and approvals matter as much as tasks. It is heavier than Trello—pilot on one PM-led job before you standardize. Wrike earns its place when missed handoffs are expensive and you will staff the setup.",
    },
    {
      slug: "clickup",
      badge: "Best all-in-one for plumbing ops",
      description: "Combine checklists, docs, and job templates when you want one workspace for office and leads.",
      rowBestFor: "Templates + internal docs",
      why: "ClickUp helps plumbing businesses that want PM tightly coupled with internal wikis, pricebook notes, or training checklists. Start with one List per region or service line to contain scope creep. ClickUp fits growing shops consolidating Slack pins and Google Docs into one system.",
    },
  ],
  editorialGuidance: [
    E("Emergency vs project work", "Same-day calls need lightweight tasks; repipes need milestones. Use templates per pattern."),
    E("Documentation and liability", "Attach photos, scope notes, and signed change orders to the project."),
    E("Crew and subcontractor visibility", "Shared projects reduce gaps on slab work, inspections, or rough-in completions."),
    E("Office and field alignment", "Comment threads and @mentions beat long group texts when schedules slip."),
  ],
  faqItems: [
    {
      q: "Do plumbers need project management software?",
      a: "If you run jobs that span multiple visits or crews, PM software reduces dropped handoffs. One-truck emergency-only shops may stay lighter.",
    },
    {
      q: "Asana or Wrike for a plumbing company?",
      a: "Choose Asana for straightforward projects and fast adoption. Choose Wrike when you need stronger dependencies, approvals, and portfolio-style control on bigger jobs.",
    },
    {
      q: "Can I track permits in PM tools?",
      a: "Yes—use tasks or custom fields for permit submission, approval, and inspection dates, with attachments for PDFs.",
    },
  ],
});

export const ELECTRICIANS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "electricians",
  title: "Best Project Management Software for Electricians (2026)",
  subtitle:
    "Compare PM tools for electrical contractors: panel upgrades, multi-day commercial work, service tickets, and clean handoffs between estimators and crews.",
  introParagraph:
    "Electrical contractors juggle service calls, EV charger installs, and larger projects with inspections and code-aware sequencing. Project management software keeps tasks, permits, and punch lists in one place so apprentices and leads see the same plan when the job spans multiple shifts.",
  picks: [
    {
      slug: "asana",
      badge: "Best structured PM for electrical jobs",
      description: "Projects and timelines for jobs with inspection gates, material pulls, and phased closeout.",
      rowBestFor: "Phased commercial & upgrades",
      why: "Asana is a top pick for electricians who need clear project structure when jobs depend on inspections or utility coordination. During a trial, map a panel upgrade and a multi-day commercial fit-out. Asana fits when discipline and clarity beat novelty.",
    },
    {
      slug: "wrike",
      badge: "Best for inspection-driven sequencing",
      description: "Gantt, dependencies, and workload views when rough-in, trim, and energize steps must stay ordered.",
      rowBestFor: "Dependencies & formal schedules",
      why: "Wrike suits electrical contractors who want explicit dependencies and Gantt-style visibility across rough, trim, inspection, and energize milestones—common on commercial and larger residential work. Expect more setup than a board tool; reward is fewer sequencing mistakes. Trial with one lead PM owning the template.",
    },
    {
      slug: "smartsheet",
      badge: "Best grid-based job tracking",
      description: "Sheet-style trackers for material pulls, crew assignments, and inspection dates if your office plans in grids.",
      rowBestFor: "Spreadsheet-native planning",
      why: "Smartsheet fits teams that already track jobs in spreadsheets and want the same mental model with collaboration, automations, and reporting. Model one service-upgrade template and one multi-week commercial job. Smartsheet wins when estimators and ops leads think in rows and columns.",
    },
  ],
  editorialGuidance: [
    E("Inspection-driven sequencing", "Model rough-in, trim, and inspection tasks so nothing energizes before the right sign-off."),
    E("Estimator-to-crew packages", "Attach load calcs, photos, and scope PDFs to the project."),
    E("Service vs project templates", "Keep quick service templates separate from multi-day project templates."),
    E("Safety and training tasks", "Recurring PM items for tool checks or code updates can live as repeating tasks."),
  ],
  faqItems: [
    {
      q: "What PM software do electrical contractors use?",
      a: "Many evaluate Asana for general structure, Wrike when dependencies and approvals matter, and Smartsheet when the office prefers grid-based planning. Match the tool to how you schedule work—not just brand familiarity.",
    },
    {
      q: "Can PM tools help with job costing?",
      a: "They support task-level accountability and timelines; deep job costing often pairs with accounting or FSM. Use PM for execution visibility first.",
    },
    {
      q: "Free PM for small electrical shops?",
      a: "Asana’s free tier supports small teams; Wrike and Smartsheet have limited free or trial options—confirm current plans with each vendor.",
    },
  ],
});

export const PAINTING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "painting",
  title: "Best Project Management Software for Painting Contractors (2026)",
  subtitle:
    "Compare PM tools for painters: room-by-room production, crew scheduling, color and materials notes, and punch lists tied to estimates.",
  introParagraph:
    "Painting contractors run production-heavy jobs—prep, coat cycles, dry time, punch—with crews moving between sites. Project management software tracks each job as a project so supers, estimators, and office staff share tasks, photos, and completion criteria without losing scope in group chats.",
  picks: [
    {
      slug: "monday",
      badge: "Best production pipeline visibility",
      description: "Visual stages from booked to prep, coat, punch, and invoiced with automations that match how crews move.",
      rowBestFor: "Production pipeline",
      why: "Monday.com suits paint operations that want high-signal boards—by crew, region, or job—with automations when cards stall in prep or punch. Trial during a busy production week and trim columns to what you actually update daily. Monday shines when the owner needs a control-tower view without opening every thread.",
    },
    {
      slug: "trello",
      badge: "Best lightweight boards for crews",
      description: "Fast Kanban for room-by-room or job-level cards techs can grasp on mobile with minimal training.",
      rowBestFor: "Simple crew boards",
      why: "Trello is the honesty pick for painting crews that will not adopt heavy software: boards, lists, and cards for each job or room with photos on cards. It trades advanced reporting for speed-to-adoption—ideal for smaller shops and floaters who live on phones. Add Power-Ups only after the basics stick.",
    },
    {
      slug: "asana",
      badge: "Best structured multi-room jobs",
      description: "Sections per area or phase with timeline-friendly planning when jobs are larger or commercial.",
      rowBestFor: "Phased residential & commercial",
      why: "Asana fits painting contractors managing parallel jobs with clear phases and owners—especially when supers need timelines, not just columns. Trial a full interior with per-room sections and a smaller exterior job. Asana fits when you outgrow informal boards but do not need construction-ERP depth.",
    },
  ],
  editorialGuidance: [
    E("Room and phase breakdown", "Structure tasks by space or coat cycle so crews know daily targets."),
    E("Materials and color tracking", "Attach color numbers, sheen, and gallon counts to tasks."),
    E("Crew handoffs between sites", "Use assignees and due dates so floaters know priorities."),
    E("Client walkthrough and punch", "Dedicated punch tasks with photo proof speed final billing."),
  ],
  faqItems: [
    {
      q: "What is the best project management tool for painters?",
      a: "Monday for visual production pipelines, Trello when you need the simplest possible crew boards, and Asana when jobs need clearer phased structure and timelines.",
    },
    {
      q: "Can PM software replace scheduling paint crews?",
      a: "PM organizes tasks and handoffs; crew scheduling may still use calendars or FSM. Many teams use PM for job execution detail and a calendar for truck routing.",
    },
    {
      q: "How do free tiers work for small paint companies?",
      a: "Trello and Asana offer usable free tiers for small teams; Monday’s free tier has limits—validate guests and automation caps on each site.",
    },
  ],
});

export const ROOFING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "roofing",
  title: "Best Project Management Software for Roofing Companies (2026)",
  subtitle:
    "Compare PM tools for roofers: inspection-to-production timelines, supplement documentation, crew days, and punch tied to warranty and billing.",
  introParagraph:
    "Roofing companies coordinate inspections, material orders, tear-off and install days, and post-job punch. Project management software centralizes tasks and files per job so sales, production, and office staff align when weather, supplements, or crew changes disrupt the plan.",
  picks: [
    {
      slug: "clickup",
      badge: "Best for document-heavy roofing jobs",
      description: "Tasks beside photo sets, PDFs, and checklists when supplements and production notes pile up.",
      rowBestFor: "Docs + photo workflows",
      why: "ClickUp helps roofing offices drowning in photos and PDFs who want everything adjacent to tasks—folders per job reduce search pain. Limit spaces and notifications early so production actually uses it. ClickUp fits when documentation volume is the bottleneck, not task lists alone.",
    },
    {
      slug: "asana",
      badge: "Best milestone timelines for re-roofs",
      description: "Dependencies for inspection, order, production, and closeout when dates slip with weather.",
      rowBestFor: "Milestone-heavy re-roofs",
      why: "Asana is excellent for roofing companies that need timeline and dependency clarity across inspection, production, and closeout. Pilot with a retail job and a supplement-heavy job in parallel. Asana fits when missed handoffs cost more than software.",
    },
    {
      slug: "monday",
      badge: "Best stage boards for production control",
      description: "Move jobs across stages with automations for material and crew readiness.",
      rowBestFor: "Production stage control",
      why: "Monday.com suits roofing owners who want production control towers—boards by crew, region, or job type—with alerts when jobs idle. Keep automations simple at first so the board stays truthful.",
    },
  ],
  editorialGuidance: [
    E("Documentation for supplements", "Tasks and attachments for photos, adjuster notes, and revised scopes."),
    E("Crew-day planning", "Break production into load, tear, dry-in, install, and punch with owners."),
    E("Retail vs storm workflows", "Separate templates if sales and production steps differ."),
    E("Warranty and service callbacks", "Link follow-up tasks to original projects."),
  ],
  faqItems: [
    {
      q: "Do roofing companies use project management software?",
      a: "Yes—especially for supplement-heavy or multi-day production. ClickUp helps when files explode; Asana and Monday help when timelines and stages need discipline.",
    },
    {
      q: "Which is better for roofers: Asana or Monday?",
      a: "Asana leans toward timelines and task clarity; Monday leans toward visual boards and automations. Trial both on a real job week.",
    },
    {
      q: "Can we track material orders in PM tools?",
      a: "Use tasks or custom fields for order placed, delivery, and load dates with vendor notes attached.",
    },
  ],
});

export const GENERAL_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "general-contractors",
  title: "Best Project Management Software for General Contractors (2026)",
  subtitle:
    "Compare PM tools for general contractors: multi-trade coordination, owner updates, sub handoffs, and job closeout without losing documents.",
  introParagraph:
    "General contractors orchestrate subs, inspections, owner selections, and schedule pressure on every job. Project management software gives each project a backbone of tasks, owners, and files—so framing, MEP, and finishes do not depend on memory when the GC runs multiple sites.",
  picks: [
    {
      slug: "wrike",
      badge: "Best portfolio-style control for GC work",
      description: "Cross-project views, dependencies, and approvals when many trades and jobs run at once.",
      rowBestFor: "Multi-job & formal workflows",
      why: "Wrike fits GCs who need stronger portfolio and dependency behavior than lightweight boards—especially when supers manage parallel jobs with inspection gates and sub deliverables. It demands more admin than Trello; trial on two active jobs before you commit. Wrike earns its place when coordination risk is high.",
    },
    {
      slug: "asana",
      badge: "Best cross-trade structure",
      description: "Projects with sections per trade or phase; timeline for master schedule alignment.",
      rowBestFor: "Multi-phase GC jobs",
      why: "Asana is a leading choice for general contractors who want scalable project structure across trades without enterprise PM bloat. Trial two concurrent jobs with different supers. Asana fits disciplined GCs standardizing execution.",
    },
    {
      slug: "clickup",
      badge: "Best all-in-one GC workspace",
      description: "Tasks, docs, and wikis for specs, RFIs, and internal playbooks together.",
      rowBestFor: "Specs + tasks unified",
      why: "ClickUp suits GCs that want RFIs, safety topics, and training embedded with job tasks. Governance matters—define who can create Spaces. ClickUp fits tech-forward builders consolidating knowledge.",
    },
  ],
  editorialGuidance: [
    E("Trade-based or phase-based structure", "Pick one primary axis and mirror how supers run sites."),
    E("Owner and architect communication", "Use comment threads and approvals on selections and change tasks."),
    E("Subcontractor accountability", "Tasks with due dates and clear acceptance criteria beat vague email chains."),
    E("Closeout packages", "Punch, lien releases, and warranty docs deserve a closing checklist template."),
  ],
  faqItems: [
    {
      q: "What is the best project management software for general contractors?",
      a: "We favor Wrike when portfolio and dependency depth matter, Asana for clear cross-trade structure many supers adopt, and ClickUp when docs and wikis must sit next to tasks. None replace full construction suites for every firm—match scope to your jobs.",
    },
    {
      q: "Does PM software replace Procore or construction ERP?",
      a: "These tools focus on task and collaboration layers; heavy financials, bid management, or drawing versioning may still need construction-specific platforms. Many SMB GCs start here and integrate as they grow.",
    },
    {
      q: "Can owners get guest access?",
      a: "Yes—use guest rules carefully and limit to comment or specific projects to control cost and data.",
    },
  ],
});

export const LANDSCAPING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "landscaping",
  title: "Best Project Management Software for Landscaping Companies (2026)",
  subtitle:
    "Compare PM tools for landscapers: install projects, maintenance programs, design revisions, and crew coordination across seasons.",
  introParagraph:
    "Landscaping companies blend recurring maintenance with design-build installs and seasonal surges. Project management software helps you track each install or enhancement as a project—with tasks for grading, planting, irrigation, and punch—while templates support repeating seasonal work.",
  picks: [
    {
      slug: "asana",
      badge: "Best for install and enhancement projects",
      description: "Phased tasks for hardscape, plant, and irrigation milestones with timelines.",
      rowBestFor: "Design-build phases",
      why: "Asana is strong for landscaping companies delivering phased installs where timeline and ownership clarity matter. Trial a patio job and a planting-heavy job. Asana fits owner-operators scaling past whiteboards.",
    },
    {
      slug: "notion",
      badge: "Best docs + plans beside tasks",
      description: "Wikis, plant lists, and client notes in the same workspace as lightweight project tracking.",
      rowBestFor: "Design notes & knowledge",
      why: "Notion fits design-build landscapers who want inspiration boards, plant palettes, and revision history adjacent to execution tasks—especially when sales and design iterate before shovels hit dirt. It is lighter on formal PM than Asana; pair with discipline on database structure. Notion shines when documentation and creativity share one home.",
    },
    {
      slug: "monday",
      badge: "Best seasonal and crew boards",
      description: "Automations and views tuned to account managers, installs, and recurring program follow-ups.",
      rowBestFor: "Ops & account visibility",
      why: "Monday.com suits landscaping operations that want portfolio views across account managers or regions. Automate handoffs when designs approve to production. Monday fits when leadership wants dashboards, not only task lists.",
    },
  ],
  editorialGuidance: [
    E("Install vs maintenance mindset", "Use different templates: long projects with milestones versus lighter recurring checklists."),
    E("Design revisions", "Track revision rounds as tasks with attachments so crews install the approved plan."),
    E("Weather and reschedule handling", "Comment updates and shifted due dates should stay on the same project record."),
    E("Multi-crew coordination", "Assign crews or leads per section so floaters know daily priorities."),
  ],
  faqItems: [
    {
      q: "What PM software works for landscaping businesses?",
      a: "Asana for phased installs, Notion when design docs and notes matter as much as tasks, and Monday for visual ops visibility across accounts or regions.",
    },
    {
      q: "Can PM tools handle recurring maintenance?",
      a: "Use recurring tasks or templates; for dense routing you may pair PM with scheduling or FSM tools.",
    },
    {
      q: "Free options for small landscapers?",
      a: "Notion and Asana offer free tiers for small teams; validate limits before you invite clients or large crews.",
    },
  ],
});

export const CONSTRUCTION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "construction",
  title: "Best Project Management Software for Construction Companies (2026)",
  subtitle:
    "Compare PM tools for construction firms: site tasks, sub coordination, inspection readiness, and document handoffs on active jobs.",
  introParagraph:
    "Construction companies—commercial and residential—need task-level discipline across sites: safety walks, inspections, deliverables, and closeout. Project management software complements estimating and accounting by giving supers and PMs one place for what must happen this week on each job.",
  picks: [
    {
      slug: "smartsheet",
      badge: "Best sheet-based job and program tracking",
      description: "Grids for inspections, sub logs, and weekly lookahead if your team plans like Excel power users.",
      rowBestFor: "Site logs & lookahead grids",
      why: "Smartsheet fits construction teams that think in sheets—lookahead logs, inspection matrices, punch tracking—and want collaboration and automations without losing the grid. Pilot on two active jobs; train one champion super. Smartsheet wins when estimating and ops already live in spreadsheets.",
    },
    {
      slug: "wrike",
      badge: "Best for dependencies and portfolios",
      description: "Gantt, dependencies, and cross-job visibility when subs, inspections, and long-lead items stack up.",
      rowBestFor: "Complex schedules",
      why: "Wrike suits construction PMs juggling dependencies, approvals, and multiple concurrent jobs where lightweight boards feel naive. Expect onboarding effort; reward is clearer critical-path thinking. Trial with one senior PM before rolling site-wide.",
    },
    {
      slug: "asana",
      badge: "Best approachable structure per job",
      description: "Projects per job with sections for precon, active work, inspections, and closeout.",
      rowBestFor: "Job-based execution",
      why: "Asana is excellent for construction companies that need consistent job templates and timeline visibility without forcing every user through heavy construction software. Pilot on two active sites with real supers. Asana fits SMB builders professionalizing field execution.",
    },
  ],
  editorialGuidance: [
    E("One project per job", "Keeps history clean; sub-projects only if truly independent contracts."),
    E("Inspection readiness checklists", "Repeatable tasks reduce failed inspections and reschedule costs."),
    E("Sub deliverables", "Tasks with clear owners for shop drawings, mockups, and long-lead equipment."),
    E("Safety and quality themes", "Recurring tasks or templates for toolbox talks and QA walks if you standardize them."),
  ],
  faqItems: [
    {
      q: "Is Smartsheet used in construction?",
      a: "Yes—many teams use Smartsheet-style grids for logs and schedules. Pair it with Asana or Wrike evaluations based on whether you need simpler task structure or deeper dependencies.",
    },
    {
      q: "PM vs construction management software?",
      a: "PM tools excel at tasks, ownership, and communication; CM platforms add deeper drawing, RFIs, and cost modules. Choose based on project complexity and budget.",
    },
    {
      q: "Can subs use guest access?",
      a: "Yes—define guest projects and permissions so subs see only their scope.",
    },
  ],
});

export const REMODELING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "remodeling",
  title: "Best Project Management Software for Remodeling Businesses (2026)",
  subtitle:
    "Compare PM tools for remodelers: phased jobs, selections, change orders, punch, and client-ready updates in one system.",
  introParagraph:
    "Remodeling lives on phases—demo, rough-in, finishes, punch—and decisions that change scope midstream. Project management software tracks tasks, approvals, and files per job so designers, supers, and homeowners align on what is done, what changed, and what is next.",
  picks: [
    {
      slug: "notion",
      badge: "Best selections and docs hub",
      description: "Pages and databases for allowances, finishes, and meeting notes beside task boards.",
      rowBestFor: "Selections & client context",
      why: "Notion is a strong fit for design-build remodelers where selections, allowances, and meeting notes are as important as task lists—everything can live in linked pages and databases. It is not a replacement for heavy PMO tooling; it is the honesty pick when your remodels are decision-dense. Trial one kitchen project with a disciplined page structure.",
    },
    {
      slug: "asana",
      badge: "Best phased remodel projects",
      description: "Sections per phase with dependencies for inspections and owner approvals.",
      rowBestFor: "Design-build phases",
      why: "Asana is top project management software for remodeling businesses running predictable phase templates with dependencies on inspections and owner sign-offs. Trial a kitchen and a bath concurrently. Asana fits remodelers who need clarity under schedule pressure.",
    },
    {
      slug: "monday",
      badge: "Best visual stage tracking",
      description: "Boards from design to production with automations for overdue selections or punch.",
      rowBestFor: "Stage visibility",
      why: "Monday.com suits remodelers who want stylized boards owners can understand at a glance—when paired with clear guest permissions. Automate nags for overdue selections without spamming the whole team.",
    },
  ],
  editorialGuidance: [
    E("Selections and approvals", "Tasks for each selection milestone with attachments reduce disputes."),
    E("Change order discipline", "Dedicated tasks or subprojects for approved changes with signed docs attached."),
    E("Punch and warranty", "Explicit punch tasks with photo completion criteria speed final pay."),
    E("Client communication", "Use guest views where appropriate; keep internal noise separate."),
  ],
  faqItems: [
    {
      q: "What PM tool is best for remodeling?",
      a: "Notion when selections and documentation are central, Asana for disciplined phased schedules, and Monday for visual stage tracking and automations.",
    },
    {
      q: "Can homeowners use these tools?",
      a: "Guest or limited access is possible; scope permissions so clients see updates without internal chatter.",
    },
    {
      q: "Do remodelers need PM if they have FSM?",
      a: "FSM handles trucks and tickets; PM helps multi-week projects, selections, and change documentation. Many use both.",
    },
  ],
});

export const HANDYMAN_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "handyman",
  title: "Best Project Management Software for Handyman Businesses (2026)",
  subtitle:
    "Compare PM tools for handyman services: quick job templates, recurring checklists, crew task lists, and simple client updates.",
  introParagraph:
    "Handyman businesses run many small jobs per week—often similar scopes with different addresses. Project management software provides lightweight templates, assignees, and completion checklists so techs and office staff stay aligned without overbuilding process.",
  picks: [
    {
      slug: "trello",
      badge: "Fastest to adopt for small jobs",
      description: "Kanban cards per job or checklist—minimal training for techs who will not live in complex software.",
      rowBestFor: "Simple job boards",
      why: "Trello is the honesty pick for handyman businesses: most jobs are small, similar, and phone-first. Boards and cards with checklists and photos beat heavy PM suites when adoption is the real constraint. Start with one board per crew or per week; add automation only after the team uses it daily.",
    },
    {
      slug: "basecamp",
      badge: "Best flat-price simplicity",
      description: "To-dos and messages without per-seat math—good when you add helpers seasonally.",
      rowBestFor: "Small team coordination",
      why: "Basecamp fits owner-operators who want calm, simple coordination—message-style threads, to-dos, and schedules—without paying per seat every time you add a helper. You trade advanced PM features for predictability and ease. Trial alongside Trello if you hate board metaphors.",
    },
    {
      slug: "asana",
      badge: "Best when you outgrow sticky notes",
      description: "Templates and task lists when you add crews and need repeatable job patterns.",
      rowBestFor: "Template-driven jobs",
      why: "Asana is practical when handyman businesses add multiple techs and need repeatable templates without ClickUp-level complexity. Trial ten real jobs; trim template length to what techs complete. Asana fits owner-operators adding helpers who are ready for slightly more structure.",
    },
  ],
  editorialGuidance: [
    E("Templates for common jobs", "Drywall patch, door swap, minor electrical—save minutes per dispatch."),
    E("Photo and note discipline", "Short attachments on closeout reduce callbacks and disputes."),
    E("Recurring maintenance clients", "Repeating tasks for quarterly or annual visits."),
    E("Keep it light", "Avoid enterprise features that techs will not touch on a phone."),
  ],
  faqItems: [
    {
      q: "What is the simplest PM for handyman businesses?",
      a: "Trello for bare-bones boards, Basecamp for flat-priced team coordination, and Asana when you need stronger templates as you add crews.",
    },
    {
      q: "Do handyman businesses need PM software?",
      a: "Once you run multiple techs or high job volume, lightweight PM reduces dropped tasks and improves billing consistency.",
    },
    {
      q: "Free PM for solo handyman?",
      a: "Trello and Asana free tiers can suffice; Basecamp offers a flat team price—compare current plans.",
    },
  ],
});

export const PROPERTY_MANAGEMENT_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "property-management",
  title: "Best Project Management Software for Property Management Companies (2026)",
  subtitle:
    "Compare PM tools for property managers: turnovers, work orders, owner projects, and vendor tasks across large portfolios.",
  introParagraph:
    "Property management companies coordinate turnovers, capital projects, and recurring maintenance across many units. Project management software gives coordinators projects per job—with tasks for vendors, inspections, and owner approvals—so nothing falls through when volume spikes.",
  picks: [
    {
      slug: "monday",
      badge: "Best portfolio dashboards",
      description: "Boards by property, region, or project type with automations for stalled turnovers.",
      rowBestFor: "Portfolio visibility",
      why: "Monday.com suits property management executives and ops leads who want cross-portfolio visibility—jobs at risk, vendor delays—with automations pinging coordinators. Start with one region before you mirror everywhere. Monday shines when you manage many parallel projects, not one job site.",
    },
    {
      slug: "smartsheet",
      badge: "Best grid-style turnover trackers",
      description: "Spreadsheet-native trackers for make-readies, capex lines, and vendor status across large unit counts.",
      rowBestFor: "Turnover & capex grids",
      why: "Smartsheet fits PM companies that already track make-readies and capex in spreadsheets and want the same model with permissions, automations, and reporting. Build one master turnover sheet and validate vendor update habits before scaling. Smartsheet wins when coordinators think in grids.",
    },
    {
      slug: "asana",
      badge: "Best structured projects per job",
      description: "Per-turnover or per-capital project with tasks, dates, and attachments.",
      rowBestFor: "Per-project execution",
      why: "Asana is strong for property management companies standardizing turnovers and capex jobs with repeatable templates and clear owners. Trial a make-ready and a small renovation in parallel. Asana fits ops teams drowning in email threads.",
    },
  ],
  editorialGuidance: [
    E("Project per turnover or capex job", "Keeps vendors, keys, and photos scoped cleanly."),
    E("Owner approval gates", "Tasks for owner sign-off on scope or spend thresholds."),
    E("Vendor task clarity", "Due dates and acceptance criteria reduce back-and-forth."),
    E("Integration with PM software", "Dedicated property suites handle leases; PM still coordinates internal projects."),
  ],
  faqItems: [
    {
      q: "What PM tools fit property management companies?",
      a: "Monday for portfolio dashboards, Smartsheet for grid-heavy turnover tracking, and Asana for clear per-project task structure.",
    },
    {
      q: "PM vs property management software?",
      a: "Dedicated PM platforms excel at tasks and collaboration across arbitrary projects; property suites excel at leases and accounting. Often both exist in mature shops.",
    },
    {
      q: "Guest access for owners?",
      a: "Use guest projects or limited comments for owner approvals; control sensitive files via permissions.",
    },
  ],
});

export const PEST_CONTROL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pest-control",
  title: "Best Project Management Software for Pest Control Businesses (2026)",
  subtitle:
    "Compare PM tools for pest control: route-adjacent projects, termite jobs, commercial accounts, and internal initiatives beyond daily stops.",
  introParagraph:
    "Pest control operators run dense routes but also multi-visit termite jobs, commercial IPM programs, and internal projects—training, marketing pushes, equipment rollouts. Project management software organizes those non-route efforts with tasks, owners, and deadlines so managers see progress beyond today’s stops.",
  picks: [
    {
      slug: "trello",
      badge: "Lightweight projects beside the route board",
      description: "Simple boards for termite retreats, commercial programs, or internal initiatives without heavy setup.",
      rowBestFor: "Quick multi-visit projects",
      why: "Trello is the right-sized tool when most work is still route-based but you need a place for termite programs, commercial account rollouts, or seasonal campaigns that are not a single stop. Cards and checklists beat enterprise PM for branch managers who will not admin a complex system.",
    },
    {
      slug: "asana",
      badge: "Best when programs get structured",
      description: "Templates with milestones for multi-visit jobs and internal projects when accountability needs scale.",
      rowBestFor: "Structured programs",
      why: "Asana fits pest control businesses coordinating termite retreats, commercial programs, and internal projects that need clearer ownership than a loose board. Trial a termite job template and a hiring sprint. Asana fits growing regional operators.",
    },
    {
      slug: "clickup",
      badge: "HQ hub for SOPs and initiatives",
      description: "Docs, training, and cross-functional projects when you run branches and need one internal system.",
      rowBestFor: "Ops + training hub",
      why: "ClickUp helps pest control HQ teams centralizing SOPs, training, and cross-functional initiatives alongside structured projects. ClickUp fits multi-branch orgs willing to govern spaces and notifications.",
    },
  ],
  editorialGuidance: [
    E("Separate route work from projects", "Use PM for initiatives and multi-visit jobs; keep route density in scheduling or FSM."),
    E("Commercial account programs", "Tasks for inspections, reports, and renewals on structured timelines."),
    E("Training and certification", "Recurring or templated projects for seasonal training pushes."),
    E("Marketing and growth experiments", "Lightweight projects track owners and outcomes."),
  ],
  faqItems: [
    {
      q: "Do pest control companies need PM software?",
      a: "If you run structured multi-visit programs or HQ initiatives beyond routing, Trello, Asana, or ClickUp can help—pick weight based on adoption, not features alone.",
    },
    {
      q: "PM vs pest route software?",
      a: "Route tools optimize stops; PM tools coordinate projects with multiple tasks and stakeholders over time.",
    },
    {
      q: "Free tiers for small operators?",
      a: "Trello and Asana free plans help small teams pilot before scaling seats.",
    },
  ],
});

export const POOL_SERVICE_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "pool-service",
  title: "Best Project Management Software for Pool Service Companies (2026)",
  subtitle:
    "Compare PM tools for pool companies: openings, equipment upgrades, renovation-adjacent work, and internal projects beyond weekly routes.",
  introParagraph:
    "Pool service companies live on routes but also openings, equipment replacements, and larger repair projects. Project management software tracks those multi-step jobs—with tasks for parts, return visits, and customer sign-off—while leadership runs internal projects like hiring or new market launches in the same system if desired.",
  picks: [
    {
      slug: "trello",
      badge: "Simple multi-step jobs off the route",
      description: "Cards for heater swaps, openings, or multi-visit green-to-clean style work with checklists and photos.",
      rowBestFor: "Equipment & repair cards",
      why: "Trello fits pool companies that need PM only for the exceptions—equipment jobs, openings, and return visits—while routes stay in scheduling or FSM. Crews understand cards quickly; keep boards scoped by team or week to avoid clutter.",
    },
    {
      slug: "asana",
      badge: "Clear owners on multi-visit work",
      description: "Tasks for parts ordered, return trips, and customer sign-off when jobs span multiple touches.",
      rowBestFor: "Multi-step pool projects",
      why: "Asana is strong for pool service companies managing equipment projects and multi-visit repairs with clear owners and dates. Trial a heater replacement and a multi-visit repair. Asana fits shops scaling beyond pure route cards.",
    },
    {
      slug: "clickup",
      badge: "Training and SOPs beside jobs",
      description: "Chemistry guides, repair playbooks, and internal projects in one workspace for multi-location operators.",
      rowBestFor: "Training + templates",
      why: "ClickUp helps pool companies embedding chemistry cheat sheets, repair SOPs, and training next to job tasks. ClickUp fits multi-location operators who will govern notification rules.",
    },
  ],
  editorialGuidance: [
    E("Route vs project clarity", "PM shines on jobs with parts delays and return visits."),
    E("Parts and vendor follow-up", "Tasks for ordered parts, ETA updates, and return trips."),
    E("Seasonal hiring and training", "Project templates for onboarding each spring."),
    E("Customer communication tasks", "Reminders for warranty explanations or upsell follow-ups."),
  ],
  faqItems: [
    {
      q: "What PM software is good for pool service?",
      a: "Trello for the lightest multi-step jobs, Asana when ownership and dates matter, and ClickUp when training and docs should live next to tasks.",
    },
    {
      q: "Can we track parts orders?",
      a: "Yes—use tasks for order placed, received, and scheduled return with vendor notes.",
    },
    {
      q: "Free tools for small pool companies?",
      a: "Trello and Asana free tiers support small teams starting with PM discipline.",
    },
  ],
});

export const JUNK_REMOVAL_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "junk-removal",
  title: "Best Project Management Software for Junk Removal Businesses (2026)",
  subtitle:
    "Compare PM tools for junk removal: multi-truck jobs, estate cleanouts, commercial purges, and internal projects like hiring and marketing.",
  introParagraph:
    "Junk removal is schedule-intensive, but large cleanouts and commercial jobs behave like projects—multiple trucks, disposal milestones, and customer billing checkpoints. Project management software tracks those jobs with tasks and files so dispatch and field leads stay aligned when loads run long or access changes.",
  picks: [
    {
      slug: "monday",
      badge: "Best sales-to-job pipeline",
      description: "Visual pipelines from lead to booked to complete with automations for stalled estimates.",
      rowBestFor: "Sales-to-job pipeline",
      why: "Monday.com suits junk removal brands that are sales-heavy and want pipeline visibility—lead source, booking, completion—alongside execution tasks. Keep automations tied to real behaviors so boards stay honest. Monday fits growth-focused operators, not only dispatchers.",
    },
    {
      slug: "trello",
      badge: "Simple boards for big jobs",
      description: "Lightweight cards for estate cleanouts and commercial purges when crews need clarity, not enterprise PM.",
      rowBestFor: "Estate & commercial cards",
      why: "Trello fits when the priority is fast clarity on large jobs—lists for load, haul, disposal, invoice—with photos on cards. It is intentionally lighter than Monday or ClickUp; use it when tech adoption beats feature depth.",
    },
    {
      slug: "clickup",
      badge: "Ops documentation with jobs",
      description: "SOPs, pricing notes, and training beside project templates for multi-truck organizations.",
      rowBestFor: "Ops documentation",
      why: "ClickUp helps junk removal owners who want disposal SOPs, pricing matrices, and crew training embedded with job templates. ClickUp fits multi-truck organizations willing to invest in setup.",
    },
  ],
  editorialGuidance: [
    E("Big jobs as projects", "Break load, haul, and disposal into tasks with owners when multiple crews touch the job."),
    E("Access and safety notes", "Attach gate codes, lift requirements, and hazard photos."),
    E("Commercial account rollouts", "Template projects for recurring purge programs."),
    E("Internal growth projects", "Hiring, new territories, or truck purchases as PM initiatives."),
  ],
  faqItems: [
    {
      q: "Do junk removal companies use PM software?",
      a: "Larger operators often adopt Monday for pipeline visibility, Trello for simple large-job boards, or ClickUp when ops docs must live with jobs.",
    },
    {
      q: "Monday vs Trello for junk removal?",
      a: "Monday emphasizes pipeline stages and automations across the business; Trello stays lighter for individual large jobs. Choose Monday if sales and ops share one board; choose Trello if crews only need job cards.",
    },
    {
      q: "Can PM track disposal compliance?",
      a: "Use tasks and attachments for manifest or ticket follow-up; specialized compliance may need additional tools.",
    },
  ],
});

export const MOVING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "moving",
  title: "Best Project Management Software for Moving Companies (2026)",
  subtitle:
    "Compare PM tools for movers: survey-to-move-day projects, multi-day pack and load, long-distance coordination, and internal hiring initiatives.",
  introParagraph:
    "Moving companies coordinate surveys, packing, load, transit, and delivery—often across teams and days. Project management software gives each move a project backbone with tasks for inventory, crew assignment, truck prep, and customer communication so nothing slips between sales and the truck crew.",
  picks: [
    {
      slug: "teamwork",
      badge: "Best for client-based move projects",
      description: "Projects with milestones and time context when you bill or plan labor around each move.",
      rowBestFor: "Client moves & deliverables",
      why: "Teamwork is the tailored pick for service businesses running client projects—moves map cleanly to projects with tasks, milestones, and optional time tracking when you connect work to billing or capacity. It is less famous than Asana but more purpose-built for client delivery than generic boards. Trial local vs long-distance templates with your ops lead.",
    },
    {
      slug: "asana",
      badge: "Best phased move structure",
      description: "Pack, load, transit, and delivery as tasks with dependencies for multi-day and long-distance jobs.",
      rowBestFor: "Multi-day moves",
      why: "Asana is top project management software for moving companies that need phased tasks and clear ownership from survey through delivery. Trial local and long-distance templates. Asana fits independent movers professionalizing coordination.",
    },
    {
      slug: "clickup",
      badge: "Docs and inventory beside tasks",
      description: "Attach agreements, photos, and inventory notes directly to move projects for multi-branch brands.",
      rowBestFor: "Docs + move tasks",
      why: "ClickUp helps movers who attach photos, inventory PDFs, and customer agreements directly to move projects. ClickUp fits multi-branch moving brands that will govern permissions and notifications.",
    },
  ],
  editorialGuidance: [
    E("One project per move", "Keeps inventory notes, special items, and access issues unified."),
    E("Crew and truck tasks", "Separate tasks for labor plan, equipment, and parking permits when needed."),
    E("Long-distance handoffs", "Tasks for origin vs destination teams with clear ownership."),
    E("Claims and punch", "Post-move tasks with documentation discipline."),
  ],
  faqItems: [
    {
      q: "What PM software do moving companies use?",
      a: "Teamwork when client projects and time-to-billing context matter, Asana for phased schedules, and ClickUp when documents must sit on every move record.",
    },
    {
      q: "Can PM replace moving CRM?",
      a: "PM handles execution tasks; CRM handles leads. Many teams use both with clear handoff rules.",
    },
    {
      q: "Free PM for small movers?",
      a: "Asana and ClickUp free tiers support small teams; Teamwork offers trials—check current pricing for your crew size.",
    },
  ],
});

export const APPLIANCE_REPAIR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "appliance-repair",
  title: "Best Project Management Software for Appliance Repair Businesses (2026)",
  subtitle: "Compare PM tools for appliance repair: callback follow-up, parts delays, return visits, and office-to-tech handoffs.",
  introParagraph:
    "Appliance repair businesses juggle fast service volume with multi-visit jobs that depend on parts and warranty workflows. Project management software keeps each follow-up visible with clear owners and due dates so callbacks do not slip.",
  picks: [
    { slug: "trello", badge: "Best lightweight callback tracking", description: "Simple boards for parts, callbacks, and return visits with fast team adoption.", rowBestFor: "Parts + callback workflows", why: "Trello earns this spot because most appliance repair bottlenecks are workflow clarity problems, not feature problems. In real small-team rollouts, teams adopt Trello quickly when boards mirror real statuses like Diagnosed, Waiting on Parts, Ready to Return, and Closed. That speed matters for reducing missed callbacks and improving first-time completion on second visits. If your team avoids complex software, Trello is often the safest starting point and can still support SEO-relevant operational goals like faster turnaround and improved customer response consistency." },
    { slug: "asana", badge: "Best structured multi-visit repairs", description: "Clear owners and dates for diagnosis, parts ordering, return scheduling, and closeout.", rowBestFor: "Multi-step repair coordination", why: "Asana is the better choice when your shop has outgrown basic boards and needs stronger owner-based accountability. It supports repeatable templates for refrigerator, washer, and HVAC-adjacent appliance workflows, plus clear due dates and dependencies. That makes it easier to enforce SLAs, reduce aging jobs, and improve team-level execution quality. For buyers searching best project management software for appliance repair businesses, Asana usually wins when operational discipline is the top priority." },
    { slug: "clickup", badge: "Best SOP + execution hub", description: "Track jobs while keeping troubleshooting SOPs and internal playbooks in one workspace.", rowBestFor: "Knowledge-driven repair ops", why: "ClickUp stands out for repair teams that need both project tracking and institutional knowledge in one system. You can combine appliance-specific SOPs, model troubleshooting guides, warranty policies, and active job workflows without splitting tools. That supports EEAT-style trust signals in operations: documented standards, repeatable process, and auditable handoffs. For multi-tech companies investing in long-term process maturity, ClickUp provides the deepest operational upside once governance is in place." },
  ],
  editorialGuidance: [
    E("Parts-delay control", "Track order date, ETA, vendor, and return-visit owner for every delayed repair. A strong appliance repair PM setup should surface jobs that are blocked for more than 48 hours and automatically notify the assigned coordinator."),
    E("Callback discipline", "Use explicit statuses, due dates, and escalation rules so unresolved jobs surface quickly. This is the core difference between average and high-performing shops: every callback has a next action, owner, and date."),
    E("Office-field handoff quality", "Attach diagnosis notes, part numbers, customer constraints, and photos so the second visit is prepared before dispatch. Better handoff data improves technician efficiency and customer trust."),
    E("SOP consistency", "Store repeatable troubleshooting and warranty workflows beside active tasks. Standardization protects quality as new techs onboard and supports Google-style EEAT signals through documented process authority."),
  ],
  faqItems: [
    { q: "What is the best project management software for appliance repair businesses?", a: "The best fit depends on operating model. Trello is usually best for small teams that need immediate callback visibility, Asana is best for structured multi-visit workflow accountability, and ClickUp is best for process-driven teams that want SOPs and execution in one platform. Choose based on adoption speed, not feature count." },
    { q: "Can PM software replace dispatch software?", a: "Not completely. Dispatch software remains the system of record for routing and technician scheduling, while project management software improves follow-up execution, callback control, and inter-team accountability. Most mature shops use both tools together." },
    { q: "How do we reduce missed return visits?", a: "Standardize statuses, assign a single owner per blocked job, and add automated reminders for parts-dependent work. The most reliable pattern is simple: every callback must have a next step, a due date, and clear ownership." },
    { q: "What should we test in a 30-day PM trial?", a: "Pilot your three most common high-friction workflows: parts-delayed repair, warranty callback, and customer no-response follow-up. Measure aging jobs, missed callbacks, and average time-to-close before and after the pilot." },
  ],
});

export const GARAGE_DOOR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "garage-door",
  title: "Best Project Management Software for Garage Door Companies (2026)",
  subtitle: "Compare PM tools for garage door companies: install pipelines, parts coordination, and sales-to-field handoffs.",
  introParagraph:
    "Garage door companies run both rapid service jobs and staged install projects. Project management software keeps each stage aligned from quote and measurement through parts arrival, installation, and final punch.",
  picks: [
    { slug: "monday", badge: "Best visual install pipeline", description: "Color-coded boards for sold, measured, ordered, installed, and punch-complete jobs.", rowBestFor: "Sales-to-install visibility", why: "Monday is ideal for garage door operators who need one shared production board across sales, scheduling, and installation teams. Its visual stage model makes blocked jobs obvious, especially when parts or site access delays occur. In practice, teams get the most value when they define strict stage criteria and track time-in-stage as a KPI. For buyers comparing project management software for garage door companies, Monday is usually the strongest fit when live operational visibility is the main problem." },
    { slug: "asana", badge: "Best structured install templates", description: "Repeatable tasks for measurement, ordering, installation readiness, and QA closeout.", rowBestFor: "Standardized install execution", why: "Asana is a better fit when you want repeatable execution discipline, not just stage-level visibility. You can standardize measurement verification, ordering, installation readiness, and QA closeout workflows so jobs run consistently even as volume increases. That reduces tribal knowledge risk and improves new team member onboarding. Asana works best for companies that value process reliability and clear owner-based accountability." },
    { slug: "teamwork", badge: "Best milestone communication", description: "Milestones and client-facing updates for larger property-manager or commercial jobs.", rowBestFor: "Client project updates", why: "Teamwork stands out when garage door projects involve commercial clients, property managers, or HOAs that need milestone-level status updates. It keeps client-facing communication connected to delivery tasks instead of splitting updates across email threads. This improves trust and helps teams deliver a more professional project experience. Teamwork is a strong choice when communication quality is as important as operational execution." },
  ],
  editorialGuidance: [
    E("Stage ownership", "Define who advances each job between sales, measurement, ordering, and install. If stage ownership is ambiguous, delays multiply and customer communication degrades."),
    E("Parts readiness", "Track supplier ETAs, damaged shipments, and blocked installs before crews are scheduled. Readiness visibility directly impacts utilization and margin."),
    E("Template quality", "Use one install template per high-volume job type and enforce completion standards. Template consistency is the fastest route to execution quality at scale."),
    E("Commercial communication", "Use milestones for property manager, HOA, and commercial stakeholder updates. Predictable status communication improves trust and referral outcomes."),
  ],
  faqItems: [
    { q: "What PM software is best for garage door companies?", a: "Monday is best for visual install pipeline management, Asana is best for repeatable task-based execution, and Teamwork is best when client milestone communication is a core requirement. The right choice depends on whether your biggest issue is visibility, execution discipline, or communication." },
    { q: "Can PM software help with opener replacements and warranty installs?", a: "Yes. Use templates for measurement confirmation, product ordering, schedule coordination, install QA, and final customer handoff. Standardized workflows reduce avoidable revisits." },
    { q: "How should small teams start implementation?", a: "Start with one high-frequency job type, define 5-7 essential statuses, and train one team lead as workflow owner. Expand only after 2-3 weeks of consistent usage data." },
    { q: "What KPIs should garage door teams track in PM software?", a: "Track days in stage, installs delayed by parts, install reschedule rate, and average time from sold to completed. These metrics tie directly to customer experience and gross margin." },
  ],
});

export const LOCKSMITH_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "locksmith",
  title: "Best Project Management Software for Locksmith Businesses (2026)",
  subtitle: "Compare PM tools for locksmith businesses: rekey projects, access-control installs, and service follow-up accountability.",
  introParagraph:
    "Locksmith businesses handle urgent calls and planned security projects with different workflow needs. Project management software helps teams keep planned work, documentation, and approvals organized beyond day-of dispatch.",
  picks: [
    { slug: "clickup", badge: "Best SOP-first locksmith operations", description: "Tasks, playbooks, and security workflow docs in a single workspace.", rowBestFor: "Process-heavy locksmith ops", why: "ClickUp is the strongest fit for locksmith operators building a process-first business with documented standards. You can manage rekey workflows, access-control installation tasks, and internal security SOPs in one workspace with audit-ready records. That supports EEAT-style operational trust: clear procedures, repeatable delivery, and accountable handoffs. ClickUp performs best when one ops lead owns taxonomy and governance." },
    { slug: "trello", badge: "Best lightweight service follow-up", description: "Simple cards for urgent service follow-up and short-cycle project tasks.", rowBestFor: "Quick-turn service workflows", why: "Trello works well for locksmith teams that need speed and simplicity, especially for short-cycle service and callback workflows. Most teams can launch usable boards in days, not weeks, which improves adoption and reduces missed follow-up. It is intentionally lightweight, but that is often the advantage for field-first operations. Trello is the practical choice when your bottleneck is consistency, not advanced reporting." },
    { slug: "wrike", badge: "Best for complex commercial installs", description: "Dependencies and approvals for multi-site access-control and phased security projects.", rowBestFor: "Commercial dependency planning", why: "Wrike is better suited to locksmith businesses handling high-stakes commercial installations where dependency errors are costly. It provides stronger controls for phased sequencing, approval checkpoints, and cross-site coordination than simpler board tools. If your team manages multi-location access projects, Wrike reduces risk through structure. It is the right choice when project complexity justifies deeper process overhead." },
  ],
  editorialGuidance: [
    E("Emergency vs planned work split", "Use separate templates so emergency lockouts do not pollute planned rekey or access-control project visibility."),
    E("Security recordkeeping", "Attach approvals, site notes, and implementation records to each project. In security workflows, documentation quality is part of service quality."),
    E("Dependency management", "Use milestone gates for phased commercial installations and multi-site rollouts. This prevents sequencing errors that create compliance risk."),
    E("Closeout standards", "Require final verification checks before completion, including customer sign-off and documentation confirmation."),
  ],
  faqItems: [
    { q: "What is the best project management software for locksmith businesses?", a: "ClickUp is strongest for SOP-first locksmith operations, Trello is best for lightweight service follow-up workflows, and Wrike is best for complex commercial sequencing with formal approvals." },
    { q: "Can PM tools support rekey and access-control projects?", a: "Yes. Build templates for survey, scope approval, procurement, installation, and verification. This improves handoff quality and reduces missed requirements." },
    { q: "Is Wrike too heavy for small locksmith teams?", a: "Often yes unless you run complex commercial programs. Smaller teams usually get faster ROI with Trello or Asana, then graduate to Wrike when dependency risk increases." },
    { q: "How does PM software support trust and EEAT in locksmith operations?", a: "Documented workflows, clear approvals, and auditable completion records reinforce expertise and operational authority, especially for commercial and regulated environments." },
  ],
});

export const FLOORING_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "flooring",
  title: "Best Project Management Software for Flooring Contractors (2026)",
  subtitle: "Compare PM tools for flooring contractors: material lead times, room sequencing, and install closeout workflows.",
  introParagraph:
    "Flooring contractors coordinate measurement, procurement, prep, install, and punch across multiple jobs. Project management software helps teams enforce phase discipline and material readiness without relying on inbox updates.",
  picks: [
    { slug: "asana", badge: "Best phased flooring execution", description: "Templates for measure, prep, install, and final walkthrough with clear ownership.", rowBestFor: "Phase-based project control", why: "Asana is a strong fit for flooring contractors that need dependable phase-based execution across residential and commercial jobs. It supports repeatable templates, clear ownership, and due-date discipline that reduce scope drift between office and field. Teams often see fewer missed handoffs once prep, install, and punch are standardized. Asana is best when consistency and accountability matter more than custom dashboard complexity." },
    { slug: "smartsheet", badge: "Best material lead-time tracking", description: "Grid-based workflow for SKU ETAs, scheduling dependencies, and readiness dashboards.", rowBestFor: "Material-heavy operations", why: "Smartsheet shines when flooring operations are procurement-heavy and planning already lives in spreadsheets. You can track SKU-level ETAs, substitutions, and readiness dependencies in a familiar grid model while adding automation and team visibility. That reduces install-day surprises and protects schedule reliability. For spreadsheet-native operations teams, Smartsheet often delivers the fastest operational ROI." },
    { slug: "monday", badge: "Best visual production board", description: "Board view for sales handoff, install progress, delays, and punch completion.", rowBestFor: "Production pipeline visibility", why: "Monday is best for owners and production managers who need at-a-glance visibility across many active flooring jobs. Its board and dashboard views make blockers visible quickly, especially for material and scheduling delays. The platform performs best when stage definitions are strict and team usage is standardized. Monday is the right pick when leadership visibility and pipeline control are top priorities." },
  ],
  editorialGuidance: [
    E("Material dependency tracking", "Track order confirmation, ETA shifts, and damage replacements so installs can be re-sequenced before customer impact escalates."),
    E("Phase template discipline", "Use standardized templates for LVP, tile, hardwood, and commercial jobs. Standardization is the fastest path to fewer handoff errors."),
    E("Crew assignment clarity", "Keep each phase task owner-based and date-based so field and office teams stay synchronized on scope and readiness."),
    E("Punch closeout rigor", "Track completion photos, customer notes, and sign-off tasks before invoicing. Clean closeout reduces callbacks and protects reviews."),
  ],
  faqItems: [
    { q: "What PM software is best for flooring contractors?", a: "Asana is best for structured phase execution, Smartsheet is best for material and spreadsheet-style planning, and Monday is best for visual production oversight across jobs." },
    { q: "Can PM tools handle supplier delays and schedule changes?", a: "Yes. Use dependency fields, ETA status updates, and automation alerts so delayed materials automatically surface impacted installation tasks." },
    { q: "How should flooring teams implement PM software?", a: "Start with one high-volume job template, define mandatory stage gates, and train a project owner to enforce data hygiene for the first 30 days." },
    { q: "What metrics matter most for flooring operations?", a: "Track sold-to-install days, jobs delayed by materials, punch-list reopen rate, and install completion on original date." },
  ],
});

export const FENCE_DECK_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "fence-deck",
  title: "Best Project Management Software for Fence & Deck Builders (2026)",
  subtitle: "Compare PM tools for fence and deck builders: permitting, material staging, install milestones, and final punch workflows.",
  introParagraph:
    "Fence and deck builders deal with permit dependencies, material timing, and weather-sensitive scheduling. Project management software helps teams track each project from signed quote to final walkthrough with fewer handoff errors.",
  picks: [
    { slug: "monday", badge: "Best visual build pipeline", description: "Stage-driven boards for quote, permit, material-ready, install, and punch.", rowBestFor: "Sales-to-production control", why: "Monday is highly effective for fence and deck builders who need one real-time pipeline from sold project to final walkthrough. Permit blockers, material delays, and crew readiness are easy to spot when stage logic is well-defined. This helps teams protect schedule commitments and communicate confidently with homeowners. Monday is usually the top choice when production visibility is the primary pain point." },
    { slug: "wrike", badge: "Best for complex phased builds", description: "Dependency and timeline controls for larger projects with inspection gates.", rowBestFor: "Complex project sequencing", why: "Wrike fits builders handling larger or multi-phase projects where sequencing and inspection timing create material risk. Its dependency controls and timeline depth help teams avoid costly misalignment between permitting, staging, and field execution. If your projects involve many moving parts and stakeholder approvals, Wrike provides stronger guardrails than lighter tools. It is best for complexity-heavy operations with dedicated process ownership." },
    { slug: "trello", badge: "Best lightweight field coordination", description: "Simple cards and checklists for smaller crews and mobile-first updates.", rowBestFor: "Small-team execution", why: "Trello remains a strong option for smaller fence and deck teams that need straightforward field coordination without software overhead. Card-based checklists keep updates simple and mobile-friendly, which improves daily adoption. When teams consistently update status, Trello can materially reduce missed steps and callback risk. It is the practical choice for businesses that value speed and usability over advanced reporting." },
  ],
  editorialGuidance: [
    E("Permit checkpoint tracking", "Use milestone tasks for zoning, permit, and inspection gates before crews are committed."),
    E("Material readiness management", "Track supplier ETAs, substitutions, and site staging so install starts with full readiness."),
    E("Field checklist discipline", "Standardize build phase tasks across fence and deck types to improve consistency and reduce rework."),
    E("Walkthrough closeout", "Capture punch items, completion photos, and client sign-off in one project record for cleaner billing."),
  ],
  faqItems: [
    { q: "What is the best project management software for fence and deck builders?", a: "Monday is best for live pipeline visibility, Wrike is best for complex phased dependency management, and Trello is best for smaller teams that need lightweight field coordination." },
    { q: "Can PM software help with permit delays?", a: "Yes. Milestone tracking and blocked-status alerts make permit issues visible early enough to protect schedules and customer communication." },
    { q: "When should teams move beyond Trello?", a: "Move when you need cross-project reporting, stronger dependency controls, or stakeholder-level dashboards that basic board workflows cannot provide." },
    { q: "What should be included in a fence/deck project template?", a: "Include permit readiness, material staging, pre-install site checks, build phase tasks, punch completion, and walkthrough sign-off." },
  ],
});

export const GLASS_WINDOW_INSTALLERS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "glass-window-installers",
  title: "Best Project Management Software for Glass & Window Installers (2026)",
  subtitle: "Compare PM tools for glass and window installers: measure-to-install workflows, supplier ETAs, and customer milestone updates.",
  introParagraph:
    "Glass and window installers rely on measurement accuracy, supplier lead times, and installation sequencing. Project management software helps teams prevent avoidable delays by tracking dependencies and ownership from order to closeout.",
  picks: [
    { slug: "smartsheet", badge: "Best supplier and order tracking", description: "Grid-first tracking for measurements, order status, ETAs, and readiness.", rowBestFor: "Procurement-driven workflows", why: "Smartsheet is the leading fit for glass and window installers that depend on precise ordering workflows and supplier lead-time control. The grid model works naturally for measurement records, SKU tracking, ETA changes, and install readiness rollups. This reduces scheduling surprises and improves predictability across crews. For procurement-centric operations, Smartsheet usually provides the strongest operational control." },
    { slug: "asana", badge: "Best structured install execution", description: "Template tasks for site check, delivery, install, and punch completion.", rowBestFor: "Repeatable install templates", why: "Asana is a dependable choice for teams that need repeatable install execution from site verification through closeout. It supports owner-based accountability and due-date discipline that reduce handoff failures between office and field. Asana is especially effective when teams manage high install volume and need consistent quality standards. It balances structure and usability well for mixed-role crews." },
    { slug: "teamwork", badge: "Best milestone-based client updates", description: "Client project context and milestone communication for larger jobs.", rowBestFor: "Client-facing project delivery", why: "Teamwork is well-suited for window and glass businesses that serve commercial clients or property managers who expect proactive milestone communication. It keeps customer-facing updates tied to task progress, which reduces status confusion and trust gaps. This is valuable when relationship quality and delivery transparency affect repeat business. Teamwork is strongest for service teams where communication is a competitive differentiator." },
  ],
  editorialGuidance: [
    E("Measurement handoff quality", "Require approved measurements, product specs, and client confirmations before ordering tasks begin."),
    E("ETA dependency visibility", "Track delayed orders and affected install dates in one view so scheduling decisions are proactive, not reactive."),
    E("Install QA checklists", "Use standardized QA tasks for prep, fit, seal, and final inspection on every install."),
    E("Stakeholder updates", "Use milestone updates for homeowners, property managers, and GC partners to maintain trust and reduce status calls."),
  ],
  faqItems: [
    { q: "What PM software is best for glass and window installers?", a: "Smartsheet is best for order/ETA-heavy operations, Asana is best for structured install execution, and Teamwork is best for milestone-driven client communication." },
    { q: "Can PM software track custom-order windows and lead times?", a: "Yes. Use SKU-level fields, supplier ETA statuses, and dependency links to protect install dates and customer commitments." },
    { q: "Do we still need estimating tools?", a: "Yes. Estimating software handles pricing and quoting, while PM software manages post-sale execution quality and accountability." },
    { q: "How can installers improve closeout quality?", a: "Use standardized QA and documentation checklists, then require final sign-off before billing." },
  ],
});

export const CONCRETE_CONTRACTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "concrete-contractors",
  title: "Best Project Management Software for Concrete Contractors (2026)",
  subtitle: "Compare PM tools for concrete contractors: prep/pour sequencing, inspection checkpoints, QA logs, and crew coordination.",
  introParagraph:
    "Concrete contractors manage strict sequencing where delays cascade into cost and schedule risk. Project management software improves visibility from prep and pour through cure, inspection, and closeout.",
  picks: [
    { slug: "wrike", badge: "Best dependency management for pours", description: "Timeline and dependency controls for prep, pour, cure, and handoff.", rowBestFor: "Critical-path sequencing", why: "Wrike is the best option for concrete contractors managing schedules where dependency failures are expensive. It supports formal critical-path control for prep, pour windows, cure milestones, and downstream handoffs. That structure reduces preventable delays and helps teams react faster when site conditions change. Wrike is most valuable for complex operations that need rigorous sequencing control." },
    { slug: "smartsheet", badge: "Best QA and field log tracking", description: "Grid workflows for inspection readiness, test logs, and completion records.", rowBestFor: "Quality/compliance tracking", why: "Smartsheet is highly effective for QA-heavy concrete workflows because it combines spreadsheet familiarity with shared operational control. Teams can track inspection readiness, test data, and closeout records in one structured environment. This improves documentation quality and reduces compliance risk across projects. For process-centric field teams, Smartsheet often delivers immediate clarity." },
    { slug: "asana", badge: "Best standardized concrete templates", description: "Repeatable task structures for common concrete project workflows.", rowBestFor: "Template-driven execution", why: "Asana is a strong fit for contractors that need consistent template-driven execution without enterprise complexity. It helps teams standardize core workflows and maintain owner-level accountability on each phase. This improves repeatability and makes onboarding easier as crews scale. Asana is best when teams want structure with high adoption potential." },
  ],
  editorialGuidance: [
    E("Critical-path visibility", "Map dependencies so delayed prep, weather shifts, and equipment constraints are visible before pour windows are lost."),
    E("Inspection gate control", "Use milestone tasks for pre-pour readiness and post-pour QA checkpoints with explicit owners."),
    E("Resource coordination", "Assign labor, equipment, and material readiness tasks to named owners to reduce last-minute bottlenecks."),
    E("Documentation consistency", "Attach test reports, photos, and completion records in-system for cleaner closeout and future reference."),
  ],
  faqItems: [
    { q: "What PM software is best for concrete contractors?", a: "Wrike is best for critical-path dependency control, Smartsheet is best for QA and field-log workflows, and Asana is best for approachable template-driven execution." },
    { q: "Can PM tools manage prep/pour/cure sequencing?", a: "Yes. Use dependency-linked tasks and milestone gates to control each phase and reduce avoidable schedule slips." },
    { q: "How should teams roll out a PM tool?", a: "Pilot one project type, validate field update discipline, then standardize templates and reporting before full deployment." },
    { q: "What concrete KPIs are useful in PM software?", a: "Track on-time pour starts, blocked dependency count, failed inspection rate, and punch reopen percentage." },
  ],
});

export const EXCAVATION_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "excavation",
  title: "Best Project Management Software for Excavation Companies (2026)",
  subtitle: "Compare PM tools for excavation companies: utility coordination, site readiness, phase dependencies, and multi-site control.",
  introParagraph:
    "Excavation companies coordinate utility locates, mobilization, earthwork phases, and handoffs to other trades. Project management software helps operations teams keep readiness and dependencies visible across active sites.",
  picks: [
    { slug: "smartsheet", badge: "Best site readiness grids", description: "Grid-first tracking for locates, permits, equipment, and mobilization status.", rowBestFor: "Pre-job planning workflows", why: "Smartsheet is the top fit for excavation companies whose planning workflows are already grid-centric. It handles permit, locate, equipment, and mobilization readiness tracking in a model teams already understand. This minimizes change resistance while improving shared visibility across office and field. Smartsheet is especially effective when readiness discipline is the key operational gap." },
    { slug: "wrike", badge: "Best dependency-heavy excavation schedules", description: "Formal timeline controls for phase sequencing and approvals.", rowBestFor: "Complex multi-phase projects", why: "Wrike is stronger for excavation businesses managing multi-phase schedules with significant cross-trade dependency risk. Its formal dependency and timeline controls help operations teams protect sequence integrity and reduce schedule slippage. It is best suited for organizations willing to invest in process governance. For complex sitework, Wrike adds meaningful risk control." },
    { slug: "monday", badge: "Best visual multi-site oversight", description: "Portfolio dashboards for status, blockers, and crew utilization.", rowBestFor: "Operations leadership visibility", why: "Monday is ideal for leadership teams that need quick cross-site status visibility without requiring deep PM administration from every field user. Dashboards surface blockers, at-risk jobs, and utilization patterns in a format executives can act on quickly. This supports faster escalation and better operational decision-making. Monday is best when oversight and alignment across many active sites are the priority." },
  ],
  editorialGuidance: [
    E("Readiness gating", "Track locates, permits, mobilization, and equipment readiness before any field start commitment."),
    E("Dependency sequencing", "Map upstream and downstream trade constraints so conflicts surface early and schedule risk is controlled."),
    E("Crew/equipment ownership", "Assign accountable owners for every critical readiness dependency across field and office teams."),
    E("Escalation rules", "Use blocker flags, aging thresholds, and automated alerts for stalled high-risk items."),
  ],
  faqItems: [
    { q: "What PM software is best for excavation companies?", a: "Smartsheet is best for grid-based pre-job planning, Wrike is best for dependency-heavy schedule control, and Monday is best for visual multi-site operational oversight." },
    { q: "Can PM tools track utility locate dependencies?", a: "Yes. Use prerequisite tasks, due-date gates, and escalation rules before excavation phases can start." },
    { q: "Do excavation teams need PM plus scheduling tools?", a: "In most cases yes. Scheduling tools manage day-level dispatch while PM tools manage multi-phase readiness, dependencies, and accountability." },
    { q: "What should excavation teams prioritize first?", a: "Start with readiness workflow discipline: permits, locates, mobilization, and equipment confirmation before live production." },
  ],
});

export const AUTO_REPAIR_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "auto-repair",
  title: "Best Project Management Software for Auto Repair Shops (2026)",
  subtitle: "Compare PM tools for auto repair shops: parts follow-up, approvals, warranty workflows, and advisor-to-tech handoffs.",
  introParagraph:
    "Auto repair shops move quickly, but non-linear jobs still require structured follow-up across diagnostics, approvals, and parts delays. Project management software helps teams reduce dropped handoffs and aging work orders.",
  picks: [
    { slug: "clickup", badge: "Best SOP-driven shop workflow", description: "Combine repair process docs and multi-step task execution in one workspace.", rowBestFor: "Process-heavy shop operations", why: "ClickUp is the strongest option for auto repair shops building a documented, SOP-driven operation. It allows teams to tie repair workflows, diagnostic playbooks, and internal standards to active work in one system. This reduces handoff variability and supports better training consistency across advisors and technicians. ClickUp is best when long-term process maturity is the strategic goal." },
    { slug: "trello", badge: "Best lightweight parts follow-up board", description: "Simple job status cards for waiting on parts, approvals, and return visits.", rowBestFor: "Aging job follow-up control", why: "Trello is highly practical for shops that need immediate visibility into aging and blocked jobs without major implementation overhead. Service advisors can quickly update part status, approvals, and revisit tasks in a shared board. That simplicity drives usage, which is often more valuable than extra features. Trello is a strong fit for small and mid-size shops focused on reducing missed follow-ups." },
    { slug: "asana", badge: "Best structured multi-touch repairs", description: "Template-based task ownership for diagnostics, approvals, and completion QA.", rowBestFor: "Repeatable repair workflows", why: "Asana provides clear structure for multi-touch repair workflows where owner accountability and due-date discipline matter. Shops can standardize diagnostics, approval checkpoints, and completion QA across service categories. This improves predictability and reduces dropped handoffs as volume grows. Asana is usually the best middle ground between simplicity and operational rigor." },
  ],
  editorialGuidance: [
    E("Approval/parts checkpoints", "Track customer approvals, parts ETA, and blocked status with clear owner and due date at each gate."),
    E("Advisor-tech handoffs", "Capture diagnostics, recommendations, and required follow-up context for each transfer to reduce rework."),
    E("Warranty workflow templates", "Use dedicated templates for warranty claims, callbacks, and escalation workflows."),
    E("Aging-job visibility", "Use dashboards that highlight overdue and blocked jobs by owner, not just by status."),
  ],
  faqItems: [
    { q: "What is the best project management software for auto repair shops?", a: "ClickUp is best for SOP-heavy process systems, Trello is best for lightweight parts-follow-up boards, and Asana is best for structured multi-step accountability across advisor and tech teams." },
    { q: "Can PM software replace shop management systems?", a: "No. Shop systems remain core for repair orders, invoicing, and customer records. PM software is the execution layer that improves follow-through and internal accountability." },
    { q: "How do we reduce delayed handoffs?", a: "Use standardized templates with mandatory owner fields, handoff notes, and due dates for every diagnostic, approval, and parts-dependent step." },
    { q: "What should a shop measure during rollout?", a: "Measure aging jobs, blocked jobs over 48 hours, revisit rates, and advisor follow-up completion rates before and after implementation." },
  ],
});

export const MOBILE_MECHANICS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "mobile-mechanics",
  title: "Best Project Management Software for Mobile Mechanics (2026)",
  subtitle: "Compare PM tools for mobile mechanics: phone-first follow-up tracking, parts delays, return visits, and team communication.",
  introParagraph:
    "Mobile mechanics need systems that are easy to update from the field while still managing multi-visit work. Project management software helps track unresolved jobs and ownership without adding desktop-heavy friction.",
  picks: [
    { slug: "trello", badge: "Best phone-first workflow", description: "Simple cards and checklists for active jobs, return visits, and parts status.", rowBestFor: "Field-first job tracking", why: "Trello is the best fit for mobile mechanics that need field-first updates with minimal friction. Technicians can update statuses quickly from phones, which improves real-world adoption and keeps office visibility accurate. For mobile workflows, consistent usage often matters more than advanced features. Trello wins when speed and simplicity are the deciding factors." },
    { slug: "asana", badge: "Best structured follow-up accountability", description: "Clear assignees and deadlines for diagnostics, approvals, and revisits.", rowBestFor: "Multi-visit ownership control", why: "Asana is stronger when mobile mechanic teams need tighter owner-based accountability across multi-visit jobs. It supports clear assignment, due-date enforcement, and template-driven consistency across common service types. That reduces dropped follow-ups and improves completion reliability. Asana is ideal when teams are scaling beyond purely informal coordination." },
    { slug: "basecamp", badge: "Best simple small-team coordination", description: "Flat-priced communication and task tracking for owner-led mobile teams.", rowBestFor: "Small-team communication", why: "Basecamp is a practical choice for owner-led mobile teams that prioritize straightforward communication and predictable flat pricing. It keeps conversations and tasks in one place without requiring heavy process administration. For small crews that want order without complexity, this can be the best operational balance. Basecamp is best when calm coordination is the primary need." },
  ],
  editorialGuidance: [
    E("Mobile usability first", "Choose workflows technicians can update in under a minute with minimal taps."),
    E("Return-visit structure", "Treat parts-dependent revisits as explicit tracked tasks with owner and deadline."),
    E("Field note quality", "Capture concise diagnostics, photos, and customer constraints for office follow-through."),
    E("Communication centralization", "Keep updates in one system to reduce missed texts, duplicate calls, and task drift."),
  ],
  faqItems: [
    { q: "What PM software is best for mobile mechanics?", a: "Trello is best for lightweight field-first workflows, Asana is best for structured multi-visit accountability, and Basecamp is best for simple communication in small owner-led teams." },
    { q: "Can mobile teams reliably use PM software?", a: "Yes, if workflows are mobile-first, status choices are simple, and updates are required at each customer handoff point." },
    { q: "Do solo mobile mechanics need PM tools?", a: "Not always, but once parts-delayed follow-ups and callbacks increase, lightweight PM tracking can prevent missed revenue and customer churn." },
    { q: "What should be included in a mobile mechanic template?", a: "Include diagnosis summary, parts status, revisit scheduling, customer communication task, and completion verification." },
  ],
});

export const CLEANING_FRANCHISES_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "cleaning-franchises",
  title: "Best Project Management Software for Cleaning Franchises (2026)",
  subtitle: "Compare PM tools for cleaning franchises: multi-location initiatives, onboarding workflows, quality programs, and accountability.",
  introParagraph:
    "Cleaning franchises coordinate launches, training, audits, and operational initiatives across many locations. Project management software gives HQ and local operators shared visibility on timelines, owners, and execution risk.",
  picks: [
    { slug: "monday", badge: "Best multi-location operational visibility", description: "Portfolio dashboards for launches, audits, and initiative tracking by location.", rowBestFor: "Franchise network oversight", why: "Monday is the strongest option for cleaning franchises that need clear HQ-level visibility across many locations. Its dashboards make at-risk initiatives and inconsistent execution visible quickly, which helps leadership intervene earlier. This is valuable when network consistency is tied to brand performance. Monday is typically the top choice for franchise-wide operational oversight." },
    { slug: "smartsheet", badge: "Best compliance/audit tracking", description: "Grid-based workflows for quality checks, remediation tasks, and recurring compliance programs.", rowBestFor: "Quality and compliance workflows", why: "Smartsheet is a strong fit for franchises running frequent audits and remediation workflows in spreadsheet-like systems. It improves traceability, accountability, and reporting without forcing a completely new planning model. Teams can manage recurring compliance cycles with better control and less manual chasing. Smartsheet is best when audit rigor is the primary requirement." },
    { slug: "clickup", badge: "Best SOP + onboarding execution", description: "Combine training docs, playbooks, and initiative tasks in one system.", rowBestFor: "Operational standardization", why: "ClickUp is ideal for franchise operators focused on repeatable SOP execution and scalable onboarding quality. It centralizes playbooks, training paths, and initiative tasks, which supports consistent delivery across locations. This improves operational authority and EEAT-style trust through documented standards and measurable execution. ClickUp is strongest when process standardization is a strategic priority." },
  ],
  editorialGuidance: [
    E("HQ-to-location alignment", "Define ownership for each initiative at the local level and enforce review cadence."),
    E("Recurring audit cadence", "Use repeating templates for inspections, remediation, and re-verification workflows."),
    E("Onboarding consistency", "Track launch milestones from hiring and training through operational readiness."),
    E("Executive rollup reporting", "Use dashboards to identify at-risk locations early and focus support where it matters."),
  ],
  faqItems: [
    { q: "What is the best project management software for cleaning franchises?", a: "Monday is best for executive-level multi-location visibility, Smartsheet is best for compliance and audit-heavy operations, and ClickUp is best for SOP-driven operational standardization." },
    { q: "Can PM tools support franchise onboarding?", a: "Yes. Standardized onboarding templates for hiring, training, staffing, and launch readiness improve consistency across locations." },
    { q: "How do franchises improve audit follow-through?", a: "Assign remediation owners, define due dates, and set escalation triggers for overdue actions. Follow-up quality improves when accountability is explicit." },
    { q: "What does EEAT look like in franchise operations content?", a: "Documented standards, repeatable workflows, and measurable quality controls demonstrate operational expertise and authority across the network." },
  ],
});

export const EVENT_SERVICES_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "event-services",
  title: "Best Project Management Software for Event Services (2026)",
  subtitle: "Compare PM tools for event services: timeline planning, vendor coordination, setup logistics, and post-event closeout.",
  introParagraph:
    "Event services teams manage deadline-heavy projects where missed dependencies can cascade quickly. Project management software keeps planning, ownership, and communication centralized from pre-production through teardown.",
  picks: [
    { slug: "teamwork", badge: "Best client delivery structure", description: "Milestones, tasks, and service-delivery context for event projects.", rowBestFor: "Client-driven event execution", why: "Teamwork is the best fit for event service teams delivering client-facing projects with milestone commitments and frequent status expectations. It keeps deliverables, timelines, and communication context tightly connected, which reduces confusion and escalation risk. This is especially valuable for agencies and production teams handling multiple concurrent clients. Teamwork wins when service delivery clarity is the top priority." },
    { slug: "asana", badge: "Best dependency-based event timelines", description: "Structured timelines for planning, setup, live delivery, and closeout.", rowBestFor: "Timeline and task sequencing", why: "Asana is excellent for dependency-heavy event planning where one missed task can impact an entire run-of-show. Teams can map setup, staffing, vendor dependencies, and closeout with clear owner-based accountability. This improves execution reliability and protects day-of performance under pressure. Asana is a strong fit when timeline control is your biggest risk area." },
    { slug: "notion", badge: "Best runbooks and creative context", description: "Docs-first planning for briefs, vendor notes, and run-of-show support.", rowBestFor: "Documentation-heavy planning", why: "Notion is best for event teams where planning depth depends on detailed briefs, playbooks, and shared context between creative and operations stakeholders. It centralizes runbooks, vendor notes, and decision history in a way that improves team alignment. While lighter on formal PM controls, it excels at planning quality and institutional knowledge. Notion is the right choice when documentation quality is the competitive edge." },
  ],
  editorialGuidance: [
    E("Milestone discipline", "Set fixed checkpoints for logistics, staffing, procurement, and final readiness."),
    E("Vendor accountability", "Assign owners for confirmations, contracts, and deliverables with escalation dates."),
    E("Run-of-show clarity", "Keep runbooks, contingency plans, and owner-based tasks in the same workspace."),
    E("Post-event follow-through", "Track debriefs, billing, and lessons-learned actions so process quality improves event to event."),
  ],
  faqItems: [
    { q: "What PM software is best for event services?", a: "Teamwork is best for client-delivery and milestone context, Asana is best for dependency-driven planning control, and Notion is best for documentation-rich pre-production collaboration." },
    { q: "Can PM software manage run-of-show workflows?", a: "Yes. Build run-of-show milestones, dependency-linked tasks, and contingency workflows in a single project view to reduce day-of execution risk." },
    { q: "Which tool is easiest for mixed creative and operations teams?", a: "Notion is usually easiest for shared briefs and planning context, while Asana and Teamwork are stronger for strict operational execution and accountability." },
    { q: "What should event teams measure after rollout?", a: "Track missed milestones, vendor delay impact, day-of escalations, and post-event action completion to evaluate process improvement." },
  ],
});

export const HOME_INSPECTORS_PROJECT_MANAGEMENT_BEST_FOR_PAGE_PROPS = buildTradeProps({
  useCase: "home-inspectors",
  title: "Best Project Management Software for Home Inspectors (2026)",
  subtitle: "Compare PM tools for home inspectors: report QA, follow-up tasks, team workflows, and operational consistency.",
  introParagraph:
    "Home inspection businesses need reliable internal workflows around report quality, revisions, and follow-up communication. Project management software helps growing teams standardize these processes without relying on memory.",
  picks: [
    { slug: "asana", badge: "Best structured inspection workflow", description: "Templates for prep, report QA, delivery, and follow-up actions.", rowBestFor: "Standardized inspection ops", why: "Asana is the strongest fit for home inspection businesses that need repeatable, owner-based workflow discipline around report quality and follow-up. It supports clear templates for pre-inspection prep, QA review, revision handling, and delivery handoffs, which reduces missed steps as volume grows. Teams also benefit from better accountability across inspectors and admin staff. For firms searching best project management software for home inspectors, Asana typically wins when consistency and process control are the main goals." },
    { slug: "notion", badge: "Best SOP and training knowledge base", description: "Combine training content, standards, and lightweight workflow tracking.", rowBestFor: "Documentation-centric teams", why: "Notion stands out for inspection teams that prioritize standards documentation, onboarding quality, and knowledge retention. You can centralize SOPs, sample findings, reporting standards, and internal training material while still managing lightweight workflows. This supports EEAT-style authority through documented expertise and repeatable quality standards. Notion is best when institutional knowledge is a core part of service quality." },
    { slug: "trello", badge: "Best lightweight follow-up management", description: "Simple boards for pending reports, revisions, and client action items.", rowBestFor: "Small-team follow-up boards", why: "Trello is a practical option for smaller home inspection teams that need immediate follow-up visibility without complex implementation. Boards for Pending QA, Revision Needed, Sent to Client, and Awaiting Response are easy to maintain and improve day-to-day execution reliability. That simplicity improves adoption and reduces dropped tasks. Trello is the best starting point when teams need quick operational wins with minimal setup." },
  ],
  editorialGuidance: [
    E("Report QA repeatability", "Use templates for review, quality checks, revisions, and delivery handoffs."),
    E("Follow-up accountability", "Assign owners and due dates for report revisions, client questions, and agent follow-up requests."),
    E("Training consistency", "Keep standards, SOPs, and sample reports in one searchable workspace for faster onboarding."),
    E("Scale readiness", "Standardize recurring workflows before team volume grows to protect quality and consistency."),
  ],
  faqItems: [
    { q: "What is the best project management software for home inspectors?", a: "Asana is best for structured inspection workflow execution, Notion is best for SOP and training-heavy operations, and Trello is best for lightweight follow-up tracking in smaller teams." },
    { q: "Do home inspectors need PM software if they already use report tools?", a: "Yes, if internal handoffs are inconsistent. Report tools capture findings, while PM software improves process control for QA, revisions, and follow-up accountability." },
    { q: "What is easiest for small home inspection teams?", a: "Trello is usually the easiest starting point due to low complexity. Asana becomes the better fit when volume, team size, or QA requirements increase." },
    { q: "How can inspection teams improve EEAT signals operationally?", a: "Use documented standards, repeatable QA workflows, and auditable follow-up processes. Consistent process quality reinforces expertise and trust." },
  ],
});
