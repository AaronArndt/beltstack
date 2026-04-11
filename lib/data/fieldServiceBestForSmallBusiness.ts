import { getFieldServiceReviewUrl, getFieldServiceCompareUrl } from "@/lib/routes";
import type {
  BestForFeaturedProduct,
  BestForTableRow,
  BestForEditorialBlock,
  BestForReviewLink,
  BestForComparisonLink,
  BestForFaqItem,
  BestForGuideLink,
} from "@/components/best/BestForTemplate";

const CATEGORY = { href: "/field-service", label: "Field Service" };
const SEE_ALSO = {
  roundupLabel: "best field service management software",
  roundupHref: "/field-service/best-field-service-software",
  compareLabel: "field service software comparisons",
  compareHref: "/field-service/compare",
};

const LOGOS = {
  jobber: "/Logos/jobber.png",
  kickserv: "/Logos/kickserv.jpeg",
  workiz: "/Logos/workiz.jpeg",
} as const;

export const SMALL_BUSINESS_PAGE_PROPS = {
  title: "Best Field Service Software for Small Businesses (2026)",
  subtitle:
    "Compare field service tools for small service businesses that want modern scheduling, dispatch, and invoicing without enterprise complexity.",
  useCase: "small-business",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Small service businesses—plumbing, HVAC, electrical, cleaning, lawn care, and other trades—often outgrow paper calendars and group texts at the same time. Field service management (FSM) software gives you one place to see jobs, routes, and customer history so owners can stay on top of the day without living in spreadsheets.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top field service picks for small service businesses.",
  editorialSub: "What to look for when you choose field service software as a small business.",
  whyThesePicksSub: "Why we chose these tools for small businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "jobber",
      name: "Jobber",
      badge: "Best overall for most small service teams",
      description:
        "All-in-one FSM that balances power and simplicity. Good for owners who want one system for jobs, schedules, and invoices.",
      rating: "4.6",
      startingPrice: "From ~$69/mo",
      reviewHref: getFieldServiceReviewUrl("jobber"),
      visitUrl: "https://getjobber.com",
      logoSrc: LOGOS.jobber,
    },
    {
      slug: "kickserv",
      name: "Kickserv",
      badge: "Best budget-friendly option for small businesses",
      description:
        "Lightweight field service CRM and job management. Designed for smaller service teams that need structure without heavy complexity.",
      rating: "4.3",
      startingPrice: "From ~$55/mo",
      reviewHref: getFieldServiceReviewUrl("kickserv"),
      visitUrl: "https://www.kickserv.com",
      logoSrc: LOGOS.kickserv,
    },
    {
      slug: "workiz",
      name: "Workiz",
      badge: "Best for small field teams that live on the schedule",
      description:
        "Affordable FSM with a clear schedule and dispatch board, good when the owner wants quick visibility into where everyone is each day.",
      rating: "4.4",
      startingPrice: "From ~$29/mo",
      reviewHref: getFieldServiceReviewUrl("workiz"),
      visitUrl: "https://workiz.com",
      logoSrc: LOGOS.workiz,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "jobber",
      name: "Jobber",
      logoSrc: LOGOS.jobber,
      bestFor: "Most small service businesses",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Well-rounded jobs, invoicing, and reporting",
      reviewHref: getFieldServiceReviewUrl("jobber"),
    },
    {
      slug: "kickserv",
      name: "Kickserv",
      logoSrc: LOGOS.kickserv,
      bestFor: "Budget-conscious small teams",
      startingPrice: "From ~$55/mo",
      standoutFeature: "Simple CRM-style customer tracking",
      reviewHref: getFieldServiceReviewUrl("kickserv"),
    },
    {
      slug: "workiz",
      name: "Workiz",
      logoSrc: LOGOS.workiz,
      bestFor: "Schedule-focused owners",
      startingPrice: "From ~$29/mo",
      standoutFeature: "Straightforward scheduling and dispatch",
      reviewHref: getFieldServiceReviewUrl("workiz"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Why small service businesses move to FSM",
      body: "The trigger for most small service teams is missed calls, lost estimates, or confusion about where techs are supposed to be. When you have more than a few trucks on the road, keeping everything in a paper calendar or text thread starts to break down. FSM tools give you one source of truth for today’s work and what is coming next.",
    },
    {
      heading: "Owner visibility and simplicity",
      body: "If the owner or a single office manager is still running the whole operation, your FSM system needs to be easy to learn and maintain. That usually means clear dashboards, simple job setup, and minimal required configuration so you can spend your time on customers, not software administration.",
    },
    {
      heading: "Pricing and ROI at small headcounts",
      body: "At smaller crew sizes, every dollar matters. Pay attention to base fees, per-user pricing, and feature tiers so you do not overbuy. Tools like Kickserv and Workiz are attractive because they bring structure without forcing you into enterprise-level plans before you are ready.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Jobber",
      body: "Jobber is our overall pick for many small service businesses because it unifies scheduling, dispatch boards, quotes, invoices, and customer history without forcing a six-month enterprise implementation. Owners see today’s route and tomorrow’s capacity in one place while techs get mobile job details and payment capture. During a trial, import ten real customers, run a job from estimate to paid invoice, and test automated client reminders for upcoming appointments. Validate QuickBooks or Xero sync if your bookkeeper depends on it. Jobber scales from a two-truck crew to a growing multi-team shop if you govern how staff use custom fields.",
    },
    {
      heading: "Kickserv",
      body: "Kickserv fits budget-minded small shops that want a gentle step up from spreadsheets—a lightweight CRM plus job board that still tracks who owes what and where techs are headed. It trades some advanced automation for approachable pricing and shorter learning curves. In a trial, recreate your weekly job list, assign techs, and confirm recurring maintenance visits behave the way your contracts read. Test online booking or client notifications if those drive your leads. Kickserv wins when simplicity and cost matter more than deep pricebook analytics.",
    },
    {
      heading: "Workiz",
      body: "Workiz appeals when chaotic scheduling is the primary pain and you need an affordable dispatch-centric view of trucks without paying for features you will not touch this year. Status updates and messaging help small crews coordinate same-day changes. During evaluation, stress-test adding emergency jobs midday, verify SMS templates match your brand, and run card-present or invoice payments on a test ticket. Check reporting on technician utilization before you promise KPIs to partners. Workiz is a pragmatic first FSM when the calendar is on fire.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Jobber", href: getFieldServiceReviewUrl("jobber") },
    { name: "Kickserv", href: getFieldServiceReviewUrl("kickserv") },
    { name: "Workiz", href: getFieldServiceReviewUrl("workiz") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    {
      label: "Jobber vs Housecall Pro",
      href: getFieldServiceCompareUrl("jobber-vs-housecall-pro"),
    },
    {
      label: "Jobber vs Workiz",
      href: getFieldServiceCompareUrl("jobber-vs-workiz"),
    },
    {
      label: "Kickserv vs Jobber",
      href: getFieldServiceCompareUrl("kickserv-vs-jobber"),
    },
  ] as BestForComparisonLink[],

  relatedGuides: [
    {
      label: "Field service software for small business",
      href: "/field-service/guides/field-service-software-for-small-business",
    },
    {
      label: "Field service software pricing guide",
      href: "/field-service/guides/field-service-software-pricing-guide",
    },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "Do small service teams really need field service software?",
      a: "Once you have more than a few people on the road, a shared calendar and text messages start to break down. FSM software gives you one place to see jobs, track status, and send invoices so the owner is not living inside a chaotic group chat.",
    },
    {
      q: "What is the easiest field service software for small businesses?",
      a: "Jobber is easy to learn for most owners and office managers while still being powerful. Kickserv and Workiz offer simpler, more budget-friendly experiences that many very small shops appreciate when they are just moving off paper.",
    },
    {
      q: "How much does field service software cost for a small team?",
      a: "Expect entry‑level plans in the ~$30–$70/month range, with pricing that scales by user seats and advanced features. The right question is whether the tool will help you prevent enough missed jobs and late invoices to more than pay for itself, which it usually will if adoption is strong.",
    },
  ] as BestForFaqItem[],
};

