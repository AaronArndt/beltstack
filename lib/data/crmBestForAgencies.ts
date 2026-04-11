/**
 * CRM best-for agencies page data.
 * Used by app/crm/best-for/agencies/page.tsx.
 */

import { getCrmReviewUrl, getCrmCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/crm", label: "CRM" };
const SEE_ALSO = {
  roundupLabel: "best CRM software",
  roundupHref: "/crm/best-crm-software",
  compareLabel: "CRM software comparisons",
  compareHref: "/crm/compare",
};

const LOGOS = {
  hubspot: "/Logos/hubspot.jpeg",
  monday: "/Logos/monday.jpeg",
  pipedrive: "/Logos/pipedrive.jpeg",
  zoho: "/Logos/zoho.png",
} as const;

export const AGENCIES_PAGE_PROPS = {
  title: "Best CRM Software for Agencies (2026)",
  subtitle:
    "Compare CRM tools built for agencies: client and deal management, reporting, collaboration, and process customization across multiple accounts.",
  useCase: "agencies",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Agencies need a CRM that supports multiple clients or pipelines, keeps deal and contact data organized, and enables team collaboration. Whether you run a marketing agency, design studio, or consulting shop, you're managing both your own sales pipeline and client work—our picks fit agency workflows and scale with your team.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top CRM picks for agencies.",
  editorialSub: "What to look for when you're choosing CRM as an agency.",
  whyThesePicksSub: "Why we chose these tools for agencies.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "hubspot",
      name: "HubSpot",
      badge: "Best overall for agencies",
      description:
        "All-in-one CRM with pipelines, segments, and marketing. Manage client work and your own sales pipeline in one platform with strong reporting.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("hubspot"),
      visitUrl: "https://www.hubspot.com",
      logoSrc: LOGOS.hubspot,
    },
    {
      slug: "monday-crm",
      name: "Monday",
      badge: "Best for customizable agency workflows",
      description:
        "Board-based CRM with flexible views per client or project. Suits agencies that want pipeline plus project-style boards and collaboration.",
      rating: "4.4",
      startingPrice: "From $10/user/mo",
      reviewHref: getCrmReviewUrl("monday-crm"),
      visitUrl: "https://monday.com",
      logoSrc: LOGOS.monday,
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      badge: "Best for sales pipelines",
      description:
        "Pipeline-first CRM for agency new-business and deal tracking. Clear stages and activity tracking when sales is the priority.",
      rating: "4.5",
      startingPrice: "From $14.90/user/mo",
      reviewHref: getCrmReviewUrl("pipedrive"),
      visitUrl: "https://www.pipedrive.com",
      logoSrc: LOGOS.pipedrive,
    },
    {
      slug: "zoho-crm",
      name: "Zoho CRM",
      badge: "Best value for growing agencies",
      description:
        "Full CRM at competitive pricing with multi-currency and reporting. Good for agencies that want features and client visibility without high cost.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("zoho-crm"),
      visitUrl: "https://www.zoho.com/crm",
      logoSrc: LOGOS.zoho,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "hubspot",
      name: "HubSpot",
      logoSrc: LOGOS.hubspot,
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Pipelines, segments, marketing",
      reviewHref: getCrmReviewUrl("hubspot"),
    },
    {
      slug: "monday-crm",
      name: "Monday",
      logoSrc: LOGOS.monday,
      bestFor: "Custom workflows",
      startingPrice: "From $10/user/mo",
      standoutFeature: "Boards and client workspaces",
      reviewHref: getCrmReviewUrl("monday-crm"),
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      logoSrc: LOGOS.pipedrive,
      bestFor: "Sales pipelines",
      startingPrice: "From $14.90/user/mo",
      standoutFeature: "Pipeline and activity focus",
      reviewHref: getCrmReviewUrl("pipedrive"),
    },
    {
      slug: "zoho-crm",
      name: "Zoho CRM",
      logoSrc: LOGOS.zoho,
      bestFor: "Best value",
      startingPrice: "Free tier",
      standoutFeature: "Full CRM, multi-currency",
      reviewHref: getCrmReviewUrl("zoho-crm"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Agency sales pipeline and client management",
      body: "Agencies often need both: a pipeline for new business (inbound leads, proposals) and a way to manage client work—deliverables, follow-ups, renewals. Look for a CRM that supports multiple pipelines or segments so you can separate client work from your own sales. HubSpot and Monday both support this; Pipedrive is strongest when your main need is deal and activity tracking.",
    },
    {
      heading: "Reporting and collaboration",
      body: "Strong reporting matters for agencies: pipeline and revenue by client, activity per team member, and visibility for client reviews. Dashboards and reports that filter by client or pipeline reduce spreadsheets. Collaboration features—shared views, task assignment, follow-up reminders—keep handoffs and client touchpoints from falling through the cracks.",
    },
    {
      heading: "Process customization",
      body: "Agencies vary in how they track clients and deals. Some want traditional pipelines; others prefer boards or project-style views. Choose a tool that matches how you work: HubSpot for pipelines and segments, Monday for boards and workspaces, Pipedrive for a strict sales pipeline. See our CRM for agencies guide for more on fit.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "HubSpot",
      body: "HubSpot fits agencies that want marketing and sales alignment—pipelines, segmented lists, email nurture, and dashboards—in one CRM platform so new business and client expansion stay visible to leadership. You can separate pipelines for outbound, inbound, and upsell while sharing a common contact record. During a trial, mirror your real proposal stages, assign owners per deal, and test collaboration on notes and tasks. Validate reporting on activity per rep and deal velocity before you commit seats. Confirm integrations with your project delivery stack so won deals hand off cleanly to delivery teams.",
    },
    {
      heading: "Monday",
      body: "Monday CRM suits agencies that live in boards and timelines and want client work modeled beside pipeline stages without forcing everything into classic opportunity objects. Workspaces per client or program keep context next to deal data for account managers. In a trial, build a template board for a typical engagement and connect it to a lightweight pipeline view your sales lead will actually update. Test permissions so freelancers see only their clients. Check automations for handoffs from sales to delivery when a deal marked “won.”",
    },
    {
      heading: "Pipedrive",
      body: "Pipedrive is the focused CRM choice when your agency is sales-led and the priority is a clean pipeline, disciplined activity logging, and forecasting—not a full marketing hub. Reps adopt quickly because the interface stays deal-centric. During a trial, load a quarter of real opportunities, enforce required fields you care about, and run weekly reports on stalled stages. Test email sync and meeting activity capture so managers see true effort. If you only need visibility into proposals and follow-ups, Pipedrive often beats heavier suites on speed to value.",
    },
    {
      heading: "Zoho CRM",
      body: "Zoho CRM offers strong dollar value, multi-currency support, and deep customization for agencies billing internationally or running several brands under one roof. Automation and sandbox options grow with you without jumping straight to enterprise pricing. In a trial, configure currencies and tax fields you actually invoice in, then run collaboration tests with account and creative leads sharing one account record. Validate Zoho ecosystem ties if you already use Zoho Books or Projects. Review mobile workflows for principals who approve deals between client meetings.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "HubSpot", href: getCrmReviewUrl("hubspot") },
    { name: "Monday", href: getCrmReviewUrl("monday-crm") },
    { name: "Pipedrive", href: getCrmReviewUrl("pipedrive") },
    { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "CRM for agencies", href: "/crm/guides/crm-for-agencies" },
    { label: "CRM vs marketing automation", href: "/crm/guides/crm-vs-marketing-automation" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What CRM is best for agencies?",
      a: "HubSpot and Monday are strong options: HubSpot for all-in-one marketing and sales with pipelines and segments; Monday for boards and customizable client workspaces. Pipedrive fits sales-focused agencies; Zoho CRM offers value and multi-currency. See our CRM for agencies guide.",
    },
    {
      q: "Can agencies use one CRM for all clients?",
      a: "Yes. Many agencies use a single CRM with pipelines or segments per client, or custom objects/tags to keep client data separate. HubSpot and Monday both support this; some tools offer dedicated agency or multi-tenant features.",
    },
    {
      q: "HubSpot vs Monday for agencies?",
      a: "HubSpot offers all-in-one marketing and sales with pipelines and segments; Monday emphasizes boards and project-style views. Choose HubSpot for strong marketing automation and sales in one place; Monday for visual boards and client workspaces. See our Monday vs HubSpot comparison.",
    },
  ] as BestForFaqItem[],
};
