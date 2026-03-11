/**
 * CRM best-for small business page data.
 * Used by app/crm/best-for/small-business/page.tsx.
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
  zoho: "/Logos/zoho.jpeg",
  pipedrive: "/Logos/pipedrive.jpeg",
  freshsales: "/Logos/freshsales.jpeg",
} as const;

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best CRM Software for Small Businesses (2026)",
  subtitle:
    "Compare CRM tools built for small businesses: lead management, simple automation, reporting, and affordable pricing without enterprise complexity.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small businesses need a CRM that's easy to run, supports lead and deal tracking, and delivers basic automation and reporting without a big budget or long implementation. Our picks offer a balance of ease of use and features so you can move beyond spreadsheets and keep the whole team aligned.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top CRM picks for small businesses.",
  editorialSub: "What to look for when you're choosing CRM as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "hubspot",
      name: "HubSpot",
      badge: "Best overall",
      description:
        "Free CRM plus optional Sales and Marketing Hubs. Strong fit for small teams that want one place for leads, deals, and marketing.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("hubspot"),
      visitUrl: "https://www.hubspot.com",
      logoSrc: LOGOS.hubspot,
    },
    {
      slug: "zoho-crm",
      name: "Zoho CRM",
      badge: "Best value for small businesses",
      description:
        "Full-featured CRM with a free tier and affordable paid plans. Integrates with Zoho suite and scales with your team.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("zoho-crm"),
      visitUrl: "https://www.zoho.com/crm",
      logoSrc: LOGOS.zoho,
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      badge: "Best for simple sales pipelines",
      description:
        "Pipeline-first CRM that keeps deals and activities front and center. Easy to adopt for sales-focused small teams.",
      rating: "4.5",
      startingPrice: "From $14.90/user/mo",
      reviewHref: getCrmReviewUrl("pipedrive"),
      visitUrl: "https://www.pipedrive.com",
      logoSrc: LOGOS.pipedrive,
    },
    {
      slug: "freshsales",
      name: "Freshsales",
      badge: "Best SMB alternative",
      description:
        "AI-powered CRM with built-in phone and email. Good for small teams that want automation and engagement tools without enterprise pricing.",
      rating: "4.3",
      startingPrice: "From $15/user/mo",
      reviewHref: getCrmReviewUrl("freshsales"),
      visitUrl: "https://www.freshworks.com/crm",
      logoSrc: LOGOS.freshsales,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "hubspot",
      name: "HubSpot",
      logoSrc: LOGOS.hubspot,
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Free CRM, marketing & sales hubs",
      reviewHref: getCrmReviewUrl("hubspot"),
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
      slug: "pipedrive",
      name: "Pipedrive",
      logoSrc: LOGOS.pipedrive,
      bestFor: "Simple pipelines",
      startingPrice: "From $14.90/user/mo",
      standoutFeature: "Pipeline-first, activity tracking",
      reviewHref: getCrmReviewUrl("pipedrive"),
    },
    {
      slug: "freshsales",
      name: "Freshsales",
      logoSrc: LOGOS.freshsales,
      bestFor: "SMB alternative",
      startingPrice: "From $15/user/mo",
      standoutFeature: "AI, built-in phone & email",
      reviewHref: getCrmReviewUrl("freshsales"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Lead management and pipeline",
      body: "Look for a clear pipeline view so everyone sees which leads are in play and what stage they're in. Contact and company records should be easy to update and share. Moving beyond spreadsheets means one source of truth and no duplicate copies.",
    },
    {
      heading: "Automation and reporting",
      body: "Even small teams benefit from reminders, simple workflows, and basic reports (pipeline value, conversion by stage). Choose a CRM that offers these without requiring heavy configuration. HubSpot and Zoho CRM include solid basics on free or low-cost tiers.",
    },
    {
      heading: "Ease of use and adoption",
      body: "Your team will use the CRM daily; pick a tool that's quick to learn and doesn't get in the way. Free trials help. If you're leaving spreadsheets, see our CRM vs spreadsheets guide for when and how to make the move.",
    },
    {
      heading: "Pricing and growth",
      body: "Free tiers from HubSpot and Zoho CRM let you start at no cost. As you add users or need marketing automation, compare per-seat pricing and add-ons so total cost stays predictable. Pipedrive and Freshsales offer clear SMB plans.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "HubSpot",
      body: "HubSpot is our top pick for most small businesses: free CRM core, optional Sales and Marketing Hubs, and a familiar name. Setup is straightforward and the platform scales as you add users and campaigns without forcing you into enterprise complexity.",
    },
    {
      heading: "Zoho CRM",
      body: "Zoho CRM delivers strong value with a free tier and affordable paid plans. Pipeline, automation, and reporting are solid; it fits small teams that want full CRM features without HubSpot-level spend. Good Zoho suite integration if you use it.",
    },
    {
      heading: "Pipedrive",
      body: "Pipedrive is built for sales-focused small teams that want a clean pipeline and activity tracking. Less marketing-heavy than HubSpot; easier to adopt for teams that only need deal and contact management. Clear pricing and simple setup.",
    },
    {
      heading: "Freshsales",
      body: "Freshsales offers modern SMB CRM with AI, built-in calling, and email. A good alternative when you want automation and engagement tools without the breadth of HubSpot or the strict pipeline focus of Pipedrive.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "HubSpot", href: getCrmReviewUrl("hubspot") },
    { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm") },
    { name: "Pipedrive", href: getCrmReviewUrl("pipedrive") },
    { name: "Freshsales", href: getCrmReviewUrl("freshsales") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { label: "Zoho CRM vs Pipedrive", href: getCrmCompareUrl("zoho-crm-vs-pipedrive") },
    { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
    { label: "Freshsales vs Pipedrive", href: getCrmCompareUrl("freshsales-vs-pipedrive") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "CRM for small business", href: "/crm/guides/crm-for-small-business" },
    { label: "CRM vs spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best CRM for small business?",
      a: "HubSpot is our top pick for most small businesses: free CRM and optional hubs. Zoho CRM is best value; Pipedrive is best for sales-only teams. Choose based on whether you need marketing automation (HubSpot), low cost (Zoho), or a simple pipeline (Pipedrive).",
    },
    {
      q: "Can small businesses use free CRM?",
      a: "Yes. HubSpot and Zoho CRM offer free tiers with contacts, deals, and pipeline. Sufficient for many small teams; upgrade when you need more users, sequences, or marketing tools. See our CRM for small business guide.",
    },
    {
      q: "When should a small business move from spreadsheets to CRM?",
      a: "Move when multiple people touch leads or deals, you need reminders and pipeline reports, or you want email and calendar tied to contacts. Free CRM tiers make the switch low-risk. Our CRM vs spreadsheets guide has more detail.",
    },
  ] as BestForFaqItem[],
};
