/**
 * CRM best-for sales teams page data.
 * Used by app/crm/best-for/sales-teams/page.tsx.
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
  salesforce: "/Logos/salesforce.jpeg",
  hubspot: "/Logos/hubspot.jpeg",
  pipedrive: "/Logos/pipedrive.jpeg",
  close: "/Logos/close.jpeg",
} as const;

export const SALES_TEAMS_PAGE_PROPS = {
  title: "Best CRM Software for Sales Teams (2026)",
  subtitle:
    "Compare CRM tools built for sales teams: pipeline management, rep workflows, reporting, automation, and forecasting for inside and field sales.",
  useCase: "sales-teams",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Sales teams need a CRM that puts the pipeline front and center, makes it easy to log calls and emails, and delivers reporting and forecasting so managers can coach and plan. Our picks range from pipeline-focused tools for small and mid-size teams to enterprise-grade platforms for larger orgs—all with strong rep workflows and visibility.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top CRM picks for sales teams.",
  editorialSub: "What to look for when you're choosing CRM for your sales team.",
  whyThesePicksSub: "Why we chose these tools for sales teams.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "salesforce",
      name: "Salesforce",
      badge: "Best for enterprise sales teams",
      description:
        "Enterprise CRM with maximum customization, AppExchange, and scale. Best when you need deep control, advanced forecasting, and large teams.",
      rating: "4.5",
      startingPrice: "From $25/user/mo",
      reviewHref: getCrmReviewUrl("salesforce"),
      visitUrl: "https://www.salesforce.com",
      logoSrc: LOGOS.salesforce,
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      badge: "Best overall for many sales teams",
      description:
        "Free CRM plus Sales Hub: pipeline, activity tracking, sequences, and reporting. Strong for small and mid-size teams that want marketing alignment.",
      rating: "4.6",
      startingPrice: "Free tier",
      reviewHref: getCrmReviewUrl("hubspot"),
      visitUrl: "https://www.hubspot.com",
      logoSrc: LOGOS.hubspot,
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      badge: "Best for pipeline visibility",
      description:
        "Pipeline-first CRM built for salespeople. Clear deal stages, activity tracking, and reporting so reps and managers see what's in play.",
      rating: "4.5",
      startingPrice: "From $14.90/user/mo",
      reviewHref: getCrmReviewUrl("pipedrive"),
      visitUrl: "https://www.pipedrive.com",
      logoSrc: LOGOS.pipedrive,
    },
    {
      slug: "close",
      name: "Close",
      badge: "Best for inside sales teams",
      description:
        "Inside sales CRM with built-in calling, email, and pipeline in one. Built for teams that spend time on the phone and want everything in one place.",
      rating: "4.5",
      startingPrice: "From $49/user/mo",
      reviewHref: getCrmReviewUrl("close"),
      visitUrl: "https://close.com",
      logoSrc: LOGOS.close,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "salesforce",
      name: "Salesforce",
      logoSrc: LOGOS.salesforce,
      bestFor: "Enterprise teams",
      startingPrice: "From $25/user/mo",
      standoutFeature: "Customization, AppExchange, scale",
      reviewHref: getCrmReviewUrl("salesforce"),
    },
    {
      slug: "hubspot",
      name: "HubSpot",
      logoSrc: LOGOS.hubspot,
      bestFor: "Best overall",
      startingPrice: "Free tier",
      standoutFeature: "Free CRM, Sales Hub, marketing",
      reviewHref: getCrmReviewUrl("hubspot"),
    },
    {
      slug: "pipedrive",
      name: "Pipedrive",
      logoSrc: LOGOS.pipedrive,
      bestFor: "Pipeline visibility",
      startingPrice: "From $14.90/user/mo",
      standoutFeature: "Deal stages, activity tracking",
      reviewHref: getCrmReviewUrl("pipedrive"),
    },
    {
      slug: "close",
      name: "Close",
      logoSrc: LOGOS.close,
      bestFor: "Inside sales",
      startingPrice: "From $49/user/mo",
      standoutFeature: "Built-in calling, email, pipeline",
      reviewHref: getCrmReviewUrl("close"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Pipeline management and visibility",
      body: "Sales teams need a clear view of deal stages, value per stage, and movement over time. Look for a CRM where the pipeline is central—not buried in menus—and where reps can update deals and log activities quickly. Pipeline and forecast reports should be built in so managers don't rely on spreadsheets.",
    },
    {
      heading: "Rep workflows and lead handoffs",
      body: "Day to day, reps use CRM to see their pipeline, log calls and emails, and get reminders. Lead assignment and handoff matter when leads come from marketing or when deals move between SDRs and closers. Choose a tool that makes ownership and next steps obvious and supports round-robin or rule-based assignment if you need it.",
    },
    {
      heading: "Reporting and forecasting",
      body: "Managers need pipeline value by stage and rep, activity reports, and forecast visibility (weighted or commit). Good CRM reporting provides dashboards and reports out of the box; some tools offer advanced forecasting or integrate with dedicated forecast apps. Consider your team size and how much customization you need.",
    },
    {
      heading: "Automation and integrations",
      body: "Workflow automation—moving deals when stages change, sending reminders, assigning tasks—reduces manual updates. Email and calendar sync keep activities logging automatically. For inside sales, built-in calling (e.g. Close) can streamline rep workflow. See our how to choose CRM software guide for evaluation criteria.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Salesforce",
      body: "Salesforce remains the CRM benchmark for large sales organizations that need custom objects, advanced forecasting, territory management, and AppExchange apps to match complex selling motions. It scales when you have admins, governance, and budget to maintain the platform year over year. During a pilot, configure a slice of your real process—stages, products, and approval rules—and run parallel entry against your old system to catch gaps. Test integration with CPQ, billing, or data warehouses if those drive forecasts. Expect implementation work; validate ROI on reporting and pipeline hygiene before you expand seats broadly.",
    },
    {
      heading: "HubSpot",
      body: "HubSpot is our top pick for many small and mid-market sales teams that want fast adoption: a free CRM core with Sales Hub layers for sequences, playbooks, and manager visibility without Salesforce-level overhead. Reps see clear pipelines and tasks; leaders get dashboards that surface stalled deals and activity gaps. In a trial, import active opportunities, turn on email logging, and run a two-week cadence test on a single segment. Confirm Marketing Hub connectivity if leads originate from campaigns. Check how permissions scale as you add SDRs, AEs, and CS handoffs.",
    },
    {
      heading: "Pipedrive",
      body: "Pipedrive keeps sales teams focused on the deal board, activities, and outcomes instead of navigating a sprawling CRM menu—ideal when discipline and speed matter more than enterprise customization. Onboarding stays short because the product is intentionally narrow and excellent at pipeline hygiene. During a trial, enforce activity reminders on every open deal and review weekly reports with managers to see if lagging stages surface automatically. Test integrations with your dialer or LinkedIn workflow if outbound is core. Choose Pipedrive when you want a pure sales CRM without marketing baggage.",
    },
    {
      heading: "Close",
      body: "Close is purpose-built for inside sales and high-velocity calling teams that want VoIP, SMS, email, and pipeline in one CRM so reps never tab away during a live conversation. Power dialer workflows and searchable call history help managers coach from reality, not guesses. In a trial, run a small team through real call lists, measuring connect rates and note quality inside Close. Validate compliance needs for recording and consent in your regions. Compare total telephony cost against standalone dialers plus a lighter CRM. See our Close vs Pipedrive comparison for more.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Salesforce", href: getCrmReviewUrl("salesforce") },
    { name: "HubSpot", href: getCrmReviewUrl("hubspot") },
    { name: "Pipedrive", href: getCrmReviewUrl("pipedrive") },
    { name: "Close", href: getCrmReviewUrl("close") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    { label: "HubSpot vs Salesforce", href: getCrmCompareUrl("hubspot-vs-salesforce") },
    { label: "HubSpot vs Pipedrive", href: getCrmCompareUrl("hubspot-vs-pipedrive") },
    { label: "Close vs Pipedrive", href: getCrmCompareUrl("close-vs-pipedrive") },
  ] as BestForComparisonLink[],

  relatedGuides: [
    { label: "CRM for sales teams", href: "/crm/guides/crm-for-sales-teams" },
    { label: "How to choose CRM software", href: "/crm/guides/how-to-choose-crm-software" },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What CRM do sales teams use?",
      a: "Sales teams often use HubSpot, Pipedrive, Salesforce, or Close—depending on team size and whether they need marketing alignment, pipeline focus, enterprise scale, or built-in calling. See our CRM for sales teams guide and best CRM software roundup.",
    },
    {
      q: "What is the best CRM for inside sales?",
      a: "Close and Freshsales offer built-in calling and pipeline; Pipedrive is pipeline-focused and integrates with dialers. Choose Close when you want calling and CRM in one; Pipedrive when you want a clean pipeline at lower cost. See our Close vs Pipedrive comparison.",
    },
    {
      q: "How do sales reps use CRM daily?",
      a: "Reps use CRM to see their pipeline, log calls and emails, get reminders for follow-ups, and move deals through stages. The best CRMs for sales teams make data entry fast and put the pipeline front and center so reps actually use it.",
    },
  ] as BestForFaqItem[],
};
