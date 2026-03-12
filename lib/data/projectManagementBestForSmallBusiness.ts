/**
 * Project management best-for small business page data.
 * Used by app/project-management/best-for/small-business/page.tsx.
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

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Project Management Software for Small Business (2026)",
  subtitle:
    "Compare project management tools built for small businesses: task and project tracking, collaboration, and clear pricing without enterprise complexity.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses need project management software that balances structure and simplicity—tasks, projects, multiple views, and collaboration so the whole team stays aligned. Our picks offer ease of use, scalable pricing, and room to grow without the cost or complexity of tools built for large organizations.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top project management picks for small businesses.",
  editorialSub: "What to look for when you're choosing project management software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "asana",
      name: "Asana",
      badge: "Best overall for small business",
      description:
        "Well-rounded project management with tasks, projects, list and board views, and automations. Free tier works for small teams; paid tiers add timeline and advanced reporting.",
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
        "Tasks, docs, goals, and multiple views in one tool. Strong free tier and affordable paid plans; good for small teams that want flexibility without juggling multiple apps.",
      rating: "4.5",
      startingPrice: "Free tier",
      reviewHref: getProjectManagementReviewUrl("clickup"),
      visitUrl: "https://clickup.com",
      logoSrc: LOGOS.clickup,
    },
    {
      slug: "monday",
      name: "Monday",
      badge: "Best for customizable workflows",
      description:
        "Board-based project management that adapts to your process. Strong automation and views; good for small teams that want to model work their way.",
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
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Structure + ease of use, multiple views",
      reviewHref: getProjectManagementReviewUrl("asana"),
    },
    {
      slug: "clickup",
      name: "ClickUp",
      logoSrc: LOGOS.clickup,
      bestFor: "All-in-one value",
      startingPrice: "Free tier",
      standoutFeature: "Tasks, docs, dashboards in one",
      reviewHref: getProjectManagementReviewUrl("clickup"),
    },
    {
      slug: "monday",
      name: "Monday",
      logoSrc: LOGOS.monday,
      bestFor: "Customizable workflows",
      startingPrice: "From ~$10/user/mo",
      standoutFeature: "Boards, automations, integrations",
      reviewHref: getProjectManagementReviewUrl("monday"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Team size and workflow",
      body: "Match the tool to how many people need access and how structured you want work to be. Small teams (e.g. 5–20) often need list and board views, assignees, and due dates. Avoid enterprise tools that require dedicated admin; choose something the team can adopt quickly.",
    },
    {
      heading: "Views and collaboration",
      body: "Look for at least list and board views; timeline or calendar helps with deadlines. Comments, @mentions, and file attachments keep context in one place. Asana, ClickUp, and Monday all offer these on free or entry-level tiers.",
    },
    {
      heading: "Automation and reporting",
      body: "Simple automations (e.g. when status changes, notify someone) and basic reporting on workload and project status reduce manual updates. Check what's included at each pricing tier—see our project management pricing guide.",
    },
    {
      heading: "Pricing and growth",
      body: "Free tiers from Asana and ClickUp let you start at no cost; Monday starts paid but offers strong customization. Model total cost at your expected team size for the next 12–18 months. Compare in our project management comparisons hub.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Asana",
      body: "Asana is our top pick for most small businesses: clear structure, multiple views, and a generous free tier. Teams can run projects and tasks without complexity; paid tiers add timeline and advanced reporting when you need them. When to choose Asana vs ClickUp: Asana is simpler to adopt; ClickUp offers more customization. See our Asana review and Asana vs ClickUp comparison.",
    },
    {
      heading: "ClickUp",
      body: "ClickUp delivers strong value with tasks, docs, and multiple views in one tool. Free tier is robust; good for small teams that want one place for projects and knowledge. When to choose ClickUp vs Asana: ClickUp if you want maximum flexibility; Asana if you prefer a cleaner, more opinionated structure. See our ClickUp review and Asana vs ClickUp comparison.",
    },
    {
      heading: "Monday",
      body: "Monday fits small businesses that want highly customizable boards and workflows. No free tier but pricing is clear; strong automation and integrations. When to choose Monday: you want to model work exactly your way and are okay with paid-from-day-one. See our Monday review and Asana vs Monday comparison.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Asana", href: getProjectManagementReviewUrl("asana") },
    { name: "ClickUp", href: getProjectManagementReviewUrl("clickup") },
    { name: "Monday", href: getProjectManagementReviewUrl("monday") },
    { name: "Trello", href: getProjectManagementReviewUrl("trello") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Asana vs ClickUp", href: getProjectManagementCompareUrl("asana-vs-clickup") },
    { label: "Asana vs Monday", href: getProjectManagementCompareUrl("asana-vs-monday") },
    { label: "ClickUp vs Trello", href: getProjectManagementCompareUrl("clickup-vs-trello") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "Project management for small business", href: "/project-management/guides/project-management-for-small-business" },
    { label: "How to choose project management software", href: "/project-management/guides/how-to-choose-project-management-software" },
    { label: "Project management pricing guide", href: "/project-management/guides/project-management-pricing-guide" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best project management software for small business?",
      a: "Asana is our top pick for most small businesses: free tier, clear structure, and multiple views. ClickUp offers the best all-in-one value; Monday is best for highly customizable workflows. Compare in our best project management software roundup and Asana vs ClickUp guide.",
    },
    {
      q: "Can small businesses use free project management software?",
      a: "Yes. Asana and ClickUp offer free tiers with tasks, projects, and collaboration. Sufficient for many small teams; upgrade when you need more members, timeline view, or advanced automation. See our project management for small business guide.",
    },
    {
      q: "When should a small business choose Asana over ClickUp or Monday?",
      a: "Choose Asana when you want the best balance of structure and ease of use with a free tier. Choose ClickUp when you want tasks and docs in one tool with maximum flexibility. Choose Monday when you want to customize workflows heavily and don't need a free tier.",
    },
    {
      q: "How much does project management software cost for a small business?",
      a: "Many tools offer free tiers; paid plans often start around $8–15 per user per month. Total cost depends on team size and features. See our project management pricing guide and individual reviews for current pricing.",
    },
  ] as BestForFaqItem[],
};
