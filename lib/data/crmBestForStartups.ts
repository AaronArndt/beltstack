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
  zoho: "/Logos/zoho.png",
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
      body: "HubSpot is the default startup CRM when founders need free contact and deal tracking now with room to add sequences, marketing automation, and service inbox later without a painful migration. The platform’s familiarity helps early hires onboard fast. During a trial, instrument one real funnel—from demo request to closed-won—and enforce simple hygiene rules like required next steps. Test startup program pricing if you qualify. Before stacking hubs, confirm which analytics and automation gates actually block your next milestone.",
    },
    {
      heading: "Pipedrive",
      body: "Pipedrive fits lean startups that want a sales pipeline on day one without configuring marketing modules they are not ready to run. Stages, activities, and lightweight reporting keep the team honest about follow-up. In a trial, limit custom fields to what you will truly maintain, then run weekly founder reviews straight from the pipeline view. Integrate email so call notes do not live in silos. Choose Pipedrive when speed and clarity beat all-in-one breadth until you hire marketing.",
    },
    {
      heading: "Zoho CRM",
      body: "Zoho CRM gives startups enterprise-grade workflow and customization at startup-friendly pricing, helpful when you expect process complexity before you can afford Salesforce. The free tier and Zoho bundle discounts stretch runway. During evaluation, prototype one automation for inbound leads and measure whether tasks actually fire for your team. Test Zoho One economics if you also need mail, books, or support tools. Validate API limits if product-led growth will sync large event volumes.",
    },
    {
      heading: "Monday",
      body: "Monday CRM appeals to startups that visualize work as boards—fundraising, pilots, and customer success tasks alongside deals—in one flexible workspace. It adapts as your GTM motion shifts from founder-led to team selling. In a trial, mirror your current operating cadence (weekly reviews, OKRs, customer onboarding) and see if automations reduce Slack noise. Check permissions as contractors join. Pick Monday when project delivery and sales motion are intertwined, not sequential handoffs only.",
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
