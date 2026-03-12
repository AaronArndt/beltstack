/**
 * Project management best-for agencies page data.
 * Used by app/project-management/best-for/agencies/page.tsx.
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
  teamwork: "/Logos/teamwork.png",
  asana: "/Logos/asuna.jpeg",
  clickup: "/Logos/clickup.jpeg",
} as const;

export const AGENCIES_PAGE_PROPS = {
  title: "Best Project Management Software for Agencies (2026)",
  subtitle:
    "Compare project management tools built for agencies: multiple clients, deliverables, time tracking, and team collaboration without enterprise complexity.",
  useCase: "agencies",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Agencies need project management software that supports multiple clients and projects, clear task assignment and deadlines, and often time tracking for billing or capacity. Our picks balance client separation, collaboration, and scalability so you can run client work in one place.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top project management picks for agencies.",
  editorialSub: "What to look for when you're choosing project management software for agency work.",
  whyThesePicksSub: "Why we chose these tools for agencies.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "teamwork",
      name: "Teamwork",
      badge: "Best for client work",
      description:
        "Built for agencies: separate workspaces per client, time tracking, billing, and project templates. Strong fit when client projects and capacity are central to your workflow.",
      rating: "4.2",
      startingPrice: "From ~$5.99/user/mo",
      reviewHref: getProjectManagementReviewUrl("teamwork"),
      visitUrl: "https://www.teamwork.com",
      logoSrc: LOGOS.teamwork,
    },
    {
      slug: "asana",
      name: "Asana",
      badge: "Best overall flexibility",
      description:
        "Projects, tasks, multiple views, and solid collaboration. Use workspaces or projects per client; scales well for agencies that don't need native time tracking in the same tool.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("asana"),
      visitUrl: "https://asana.com",
      logoSrc: LOGOS.asana,
    },
    {
      slug: "clickup",
      name: "ClickUp",
      badge: "Best all-in-one value",
      description:
        "Tasks, docs, and multiple views in one workspace. Organize by client with spaces or folders; strong customization and optional time tracking. Good for agencies that want one tool for everything.",
      rating: "4.5",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("clickup"),
      visitUrl: "https://clickup.com",
      logoSrc: LOGOS.clickup,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "teamwork",
      name: "Teamwork",
      logoSrc: LOGOS.teamwork,
      bestFor: "Client projects & agencies",
      startingPrice: "From ~$5.99/user/mo",
      standoutFeature: "Time tracking, billing, client workspaces",
      reviewHref: getProjectManagementReviewUrl("teamwork"),
    },
    {
      slug: "asana",
      name: "Asana",
      logoSrc: LOGOS.asana,
      bestFor: "Best overall flexibility",
      startingPrice: "Free tier",
      standoutFeature: "Projects, views, collaboration",
      reviewHref: getProjectManagementReviewUrl("asana"),
    },
    {
      slug: "clickup",
      name: "ClickUp",
      logoSrc: LOGOS.clickup,
      bestFor: "All-in-one value",
      startingPrice: "Free tier",
      standoutFeature: "Tasks, docs, spaces, time tracking",
      reviewHref: getProjectManagementReviewUrl("clickup"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Client separation and visibility",
      body: "Look for a way to organize work by client—separate workspaces, folders, or projects—so teams and clients see only what's relevant. Teamwork is built for this; Asana and ClickUp support it via workspaces or custom fields.",
    },
    {
      heading: "Task assignment and timelines",
      body: "Assign work to team members, set due dates, and see capacity across projects. Timeline or Gantt views help when deliverables depend on each other or on client feedback. All three picks support this.",
    },
    {
      heading: "Time tracking and billing",
      body: "If you bill by time or need to track capacity, native time tracking (Teamwork) or integrations matter. Teamwork includes time tracking and billing; Asana and ClickUp integrate with time-tracking tools.",
    },
    {
      heading: "Collaboration and reporting",
      body: "Comments, file sharing, and reporting on progress and utilization help you manage client work and report up. Choose a tool that makes status visible without constant meetings.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Teamwork",
      body: "Teamwork is built for agencies: client workspaces, time tracking, billing, and project templates. When agencies should choose Teamwork: you want agency-specific features out of the box and time tracking in the same tool. See our Teamwork review.",
    },
    {
      heading: "Asana",
      body: "Asana is a strong general-purpose pick for agencies: organize work by workspace or project per client, use multiple views and automation. When to choose Asana vs Teamwork: you don't need native time tracking in the PM tool or prefer a more flexible structure. See our Asana review and Asana vs Monday comparison.",
    },
    {
      heading: "ClickUp",
      body: "ClickUp offers one workspace for tasks, docs, and views with strong customization. Organize by client with spaces or folders; optional time tracking. When to choose ClickUp: you want all-in-one value and don't need the agency-specific focus of Teamwork. See our ClickUp review and Asana vs ClickUp comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Teamwork", href: getProjectManagementReviewUrl("teamwork") },
    { name: "Asana", href: getProjectManagementReviewUrl("asana") },
    { name: "ClickUp", href: getProjectManagementReviewUrl("clickup") },
    { name: "Monday", href: getProjectManagementReviewUrl("monday") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
    { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
    { label: "Monday vs Wrike", href: getProjectManagementCompareUrl("monday-vs-wrike") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Project management for agencies", href: "/project-management/guides/project-management-for-agencies" },
    { label: "How to choose project management software", href: "/project-management/guides/how-to-choose-project-management-software" },
    { label: "Project management pricing guide", href: "/project-management/guides/project-management-pricing-guide" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What project management software is best for client work?",
      a: "Teamwork is built for client work with workspaces per client, time tracking, and billing. Asana and ClickUp are widely used by agencies too—organize by workspace or project and add time tracking via integrations if needed.",
    },
    {
      q: "Which project management tools support client collaboration?",
      a: "Teamwork offers client-facing features; Asana and ClickUp support guest access and shared projects. Check each tool's guest or client portal options. See our project management for agencies guide for more.",
    },
    {
      q: "When should an agency choose Teamwork over Asana or ClickUp?",
      a: "Choose Teamwork when you want native time tracking and billing and agency-focused features. Choose Asana or ClickUp when you want maximum flexibility and may use a separate time-tracking tool. Compare in our best project management software roundup.",
    },
    {
      q: "How much does project management software cost for an agency?",
      a: "Cost depends on team size. Teamwork starts around $5.99/user/mo; Asana and ClickUp have free tiers and paid plans in a similar range. See our project management pricing guide and individual reviews.",
    },
  ] as BestForFaqItem[],
};
