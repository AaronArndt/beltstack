/**
 * CRM best-for startups page data.
 * Used by app/crm/best-for/startups/page.tsx.
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
  pipedrive: "/Logos/pipedrive.jpeg",
  zoho: "/Logos/zoho.jpeg",
  monday: "/Logos/monday.jpeg",
} as const;

export const STARTUPS_PAGE_PROPS = {
  title: "Best CRM Software for Startups (2026)",
  subtitle:
    "Compare CRM tools built for startups: founder-led sales, lean teams, fast setup, and flexibility without overbuying or enterprise complexity.",
  useCase: "startups",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Startups need a CRM that's easy to adopt, scales with growth, and doesn't require a big budget. Free or low-cost tiers let you run pipeline and contacts from day one; as you add reps or marketing, the same platform can grow with you. Our picks avoid overbuying while keeping the door open to automation and reporting.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top CRM picks for startups.",
  editorialSub: "What to look for when you're choosing CRM as a startup.",
  whyThesePicksSub: "Why we chose these tools for startups.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "hubspot",
      name: "HubSpot",
      badge: "Best overall for startups",
      description:
        "Free CRM plus optional Sales and Marketing Hubs. Scale from founder-led pipeline to team and campaigns without switching tools.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("hubspot"),
      visitUrl: "https://www.hubspot.com",
      logoSrc: LOGOS.hubspot,
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      badge: "Best for simple early-stage pipelines",
      description:
        "Pipeline-first CRM with clear deal stages and activity tracking. Ideal when you want to move fast and keep sales focus simple.",
      rating: "4.5",
      startingPrice: "From $14.90/user/mo",
      reviewHref: getCrmReviewUrl("pipedrive"),
      visitUrl: "https://www.pipedrive.com",
      logoSrc: LOGOS.pipedrive,
    },
    {
      slug: "zoho-crm",
      name: "Zoho CRM",
      badge: "Best value",
      description:
        "Full CRM with free tier and affordable paid plans. Strong for startups that want features and room to grow without high spend.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("zoho-crm"),
      visitUrl: "https://www.zoho.com/crm",
      logoSrc: LOGOS.zoho,
    },
    {
      slug: "monday-crm",
      name: "Monday",
      badge: "Best for customizable startup workflows",
      description:
        "Board-based CRM you can adapt to your process. Suits startups that want flexibility and visual pipelines as the team grows.",
      rating: "4.4",
      startingPrice: "From $10/user/mo",
      reviewHref: getCrmReviewUrl("monday-crm"),
      visitUrl: "https://monday.com",
      logoSrc: LOGOS.monday,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "hubspot",
      name: "HubSpot",
      logoSrc: LOGOS.hubspot,
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Free CRM, scale with hubs",
      reviewHref: getCrmReviewUrl("hubspot"),
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      logoSrc: LOGOS.pipedrive,
      bestFor: "Early-stage pipeline",
      startingPrice: "From $14.90/user/mo",
      standoutFeature: "Pipeline-first, fast setup",
      reviewHref: getCrmReviewUrl("pipedrive"),
    },
    {
      slug: "zoho-crm",
      name: "Zoho CRM",
      logoSrc: LOGOS.zoho,
      bestFor: "Best value",
      startingPrice: "Free tier",
      standoutFeature: "Full CRM at low cost",
      reviewHref: getCrmReviewUrl("zoho-crm"),
    },
    {
      slug: "monday-crm",
      name: "Monday",
      logoSrc: LOGOS.monday,
      bestFor: "Custom workflows",
      startingPrice: "From $10/user/mo",
      standoutFeature: "Boards and flexibility",
      reviewHref: getCrmReviewUrl("monday-crm"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Founder-led sales and lean teams",
      body: "Early on, founders often own the pipeline. Look for a CRM that's easy for one person to run—contact and deal tracking, reminders—and that supports handoff when you hire first sales reps. Clear pipeline views and activity logs keep everyone aligned.",
    },
    {
      heading: "Fast setup and flexibility",
      body: "Startups need to move quickly. Choose a tool with short setup and minimal configuration so you can start tracking leads and deals right away. Avoid overbuying: start with free or starter tiers and add users or automation as you grow.",
    },
    {
      heading: "Scaling into automation and reporting",
      body: "As you add reps or marketing, you'll want email sequences, workflow automation, and basic reporting. Pick a platform that can add these without a disruptive migration. HubSpot's free-to-paid path and Zoho's tiers both support that progression.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "HubSpot",
      body: "HubSpot is the default for many startups: free CRM, optional Sales and Marketing Hubs, and a clear upgrade path. You can run founder-led pipeline today and add sequences and campaigns later without switching tools.",
    },
    {
      heading: "Pipedrive",
      body: "Pipedrive fits startups that want a simple, sales-focused pipeline from day one. Clear deal stages and activity tracking; less marketing breadth than HubSpot but easier to adopt for teams that only need pipeline and follow-up.",
    },
    {
      heading: "Zoho CRM",
      body: "Zoho CRM offers strong value with a free tier and affordable paid plans. Good for startups that want full CRM features and room to scale without the cost of HubSpot or Salesforce. Solid automation and reporting as you grow.",
    },
    {
      heading: "Monday",
      body: "Monday suits startups that prefer boards and custom views. You can model your pipeline and client work your way; good fit when you want flexibility and visual workflows as the team and process evolve.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "HubSpot", href: getCrmReviewUrl("hubspot") },
    { name: "Pipedrive", href: getCrmReviewUrl("pipedrive") },
    { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm") },
    { name: "Monday", href: getCrmReviewUrl("monday-crm") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "CRM for startups", href: "/crm/guides/crm-for-startups" },
    { label: "How to choose CRM software", href: "/crm/guides/how-to-choose-crm-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What CRM do startups use?",
      a: "Many startups use HubSpot (free CRM and scaling hubs), Zoho CRM (value), or Pipedrive (sales focus). Choose by budget and whether you need marketing automation. See our CRM for startups guide for more.",
    },
    {
      q: "Is free CRM enough for a startup?",
      a: "Free tiers from HubSpot or Zoho CRM are often enough for early-stage pipeline and contacts. Upgrade when you add users or need sequences and workflows. Many startups stay on free or starter tiers for 12–24 months.",
    },
    {
      q: "HubSpot vs Salesforce for startups?",
      a: "HubSpot is usually a better fit for early-stage startups: free CRM, easier setup, clear per-seat pricing. Salesforce scales for enterprise but adds complexity and cost. See our HubSpot vs Salesforce comparison.",
    },
  ] as BestForFaqItem[],
};
