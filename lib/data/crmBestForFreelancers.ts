/**
 * CRM best-for freelancers page data.
 * Used by app/crm/best-for/freelancers/page.tsx.
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
  zoho: "/Logos/zoho.png",
  monday: "/Logos/monday.jpeg",
  keap: "/Logos/keap.jpeg",
} as const;

export const FREELANCERS_PAGE_PROPS = {
  title: "Best CRM Software for Freelancers (2026)",
  subtitle:
    "Compare CRM tools built for freelancers: client tracking, leads and follow-ups, and lightweight sales process without enterprise complexity.",
  useCase: "freelancers",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Freelancers need a CRM that stays simple—contact and deal tracking, reminders, and maybe light automation—without the cost or complexity of tools built for large sales teams. Our picks balance ease of use with room to grow if you add clients or start running email sequences.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top CRM picks for freelancers.",
  editorialSub: "What to look for when you're choosing CRM as a freelancer.",
  whyThesePicksSub: "Why we chose these tools for freelancers.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "hubspot",
      name: "HubSpot",
      badge: "Best overall for freelancers",
      description:
        "Free CRM with contacts, deals, and pipeline. Easy to adopt solo; add Sales or Marketing Hub later if you need sequences and automation.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("hubspot"),
      visitUrl: "https://www.hubspot.com",
      logoSrc: LOGOS.hubspot,
    },
    {
      slug: "zoho-crm",
      name: "Zoho CRM",
      badge: "Best value",
      description:
        "Full-featured CRM with a free tier and affordable paid plans. Good for freelancers who want pipeline and automation without spending much.",
      rating: "4.4",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("zoho-crm"),
      visitUrl: "https://www.zoho.com/crm",
      logoSrc: LOGOS.zoho,
    },
    {
      slug: "monday-crm",
      name: "Monday",
      badge: "Best for flexible workflows",
      description:
        "Board-based CRM you can shape around clients and projects. Suits freelancers who like visual pipelines and custom views.",
      rating: "4.4",
      startingPrice: "From $10/user/mo",
      reviewHref: getCrmReviewUrl("monday-crm"),
      visitUrl: "https://monday.com",
      logoSrc: LOGOS.monday,
    },
    {
      slug: "keap",
      name: "Keap",
      badge: "Best for solo business automation",
      description:
        "CRM plus marketing automation in one. Fits freelancers who run email campaigns, nurture leads, and want automation without juggling multiple tools.",
      rating: "4.3",
      startingPrice: "From $159/mo",
      reviewHref: getCrmReviewUrl("keap"),
      visitUrl: "https://keap.com",
      logoSrc: LOGOS.keap,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "hubspot",
      name: "HubSpot",
      logoSrc: LOGOS.hubspot,
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Free CRM, optional hubs as you grow",
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
      slug: "monday-crm",
      name: "Monday",
      logoSrc: LOGOS.monday,
      bestFor: "Flexible workflows",
      startingPrice: "From $10/user/mo",
      standoutFeature: "Customizable boards and views",
      reviewHref: getCrmReviewUrl("monday-crm"),
    },
    {
      slug: "keap",
      name: "Keap",
      logoSrc: LOGOS.keap,
      bestFor: "Solo automation",
      startingPrice: "From $159/mo",
      standoutFeature: "CRM + marketing in one",
      reviewHref: getCrmReviewUrl("keap"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Client and lead tracking",
      body: "Look for a single place to store contacts and deals so you know who you're talking to and what stage they're in. Pipeline or board views should make it easy to see next steps without spreadsheets.",
    },
    {
      heading: "Follow-ups and reminders",
      body: "Freelancers often juggle multiple prospects; task reminders and optional email sequences help you stay on top of follow-ups without manual tracking. Free tiers from HubSpot or Zoho CRM include basics; Keap adds full automation.",
    },
    {
      heading: "Simplicity vs future growth",
      body: "Start with the minimum you need—contact and deal tracking, maybe a few automations. Choose a tool that can add users, sequences, or marketing later so you don't have to migrate when you scale.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "HubSpot",
      body: "HubSpot’s free CRM tier is our default for freelancers who need contact and deal tracking without another subscription line item, with a familiar upgrade path into sequences and campaigns when marketing matures. You can centralize leads from your website, referrals, and outbound in one pipeline instead of scattered spreadsheets. During a trial, import a small real list, build two deal stages you actually use, and log a week of activities to see if reminders and tasks stick. Test email tracking and meeting links if client conversations live in Gmail or Outlook. Before paying, confirm which automation and reporting features unlock on the plan you expect to need in six months.",
    },
    {
      heading: "Zoho CRM",
      body: "Zoho CRM delivers full-featured customer relationship management with a credible free tier and affordable paid jumps—strong when you want workflows, blueprints, and reporting depth without HubSpot-level spend. Freelancers who already use Zoho Books or Mail gain extra synergy when contacts and invoices stay related. In a trial, configure one automation (for example follow-up tasks when a stage changes) and run sample leads through it. Validate mobile access if you sell on the road. Check how email integration behaves with your provider so logging conversations is not manual drudgery.",
    },
    {
      heading: "Monday",
      body: "Monday CRM works well for freelancers who think in boards and timelines rather than rigid sales stages, letting you model retainers, deliverables, and prospects in one visual workspace. Custom columns and views adapt when you juggle multiple clients with different contract shapes. During evaluation, recreate one active client portfolio as a board and test @mentions with a collaborator if you have a VA. Confirm whether you need the CRM-specific product versus a general workspace so reporting matches how you sell. Export a sample view to see if your accountant or partner can follow your pipeline.",
    },
    {
      heading: "Keap",
      body: "Keap (formerly Infusionsoft) combines CRM with serious marketing automation—tags, campaigns, and follow-up sequences—when your freelance business is ready to nurture leads beyond manual reminders. It fits coaches, agencies, and consultants who sell repeatable programs and want one system for email plus pipeline. In a trial, build a simple nurture path for a single offer and send test contacts through it, watching how tasks and opportunities update. Validate payment or appointment integrations if you sell low-ticket workshops or discovery calls. Budget time for setup; the payoff is fewer dropped follow-ups once automations are live.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "HubSpot", href: getCrmReviewUrl("hubspot") },
    { name: "Zoho CRM", href: getCrmReviewUrl("zoho-crm") },
    { name: "Monday", href: getCrmReviewUrl("monday-crm") },
    { name: "Keap", href: getCrmReviewUrl("keap") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
    { label: "Monday vs HubSpot", href: getCrmCompareUrl("monday-crm-vs-hubspot") },
    { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "CRM for small business", href: "/crm/guides/crm-for-small-business" },
    { label: "How to choose CRM software", href: "/crm/guides/how-to-choose-crm-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Do freelancers need CRM?",
      a: "If you have more than a handful of leads or clients and want to track who's in the pipeline and what to do next, a lightweight CRM beats spreadsheets. Free tiers from HubSpot or Zoho CRM make it low-risk to try.",
    },
    {
      q: "What is the best free CRM for freelancers?",
      a: "HubSpot and Zoho CRM both offer free CRM tiers with contacts, deals, and pipeline. HubSpot is easier for most; Zoho adds more features on the free plan. See our CRM for small business guide for more context.",
    },
    {
      q: "When should a freelancer upgrade from free CRM?",
      a: "Upgrade when you need more users, email sequences, or marketing tools (campaigns, landing pages) in the same platform. Many freelancers stay on free or starter tiers for a long time.",
    },
  ] as BestForFaqItem[],
};
