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
  housecallpro: "/Logos/housecallpro.jpeg",
  workiz: "/Logos/workiz.jpeg",
} as const;

export const PLUMBING_PAGE_PROPS = {
  title: "Best Field Service Software for Plumbing Businesses (2026)",
  subtitle:
    "Compare field service management tools for plumbing businesses: job scheduling, dispatch, estimates, invoices, and customer history in one place.",
  useCase: "plumbing",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Plumbing companies juggle planned work, emergency calls, and recurring jobs. Field service management (FSM) software gives you one system to schedule jobs, dispatch plumbers, track job details, and send invoices—so you can stop relying on memory, group texts, and paper work orders.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top field service picks for plumbing businesses.",
  editorialSub: "What to look for when you choose field service software for a plumbing company.",
  whyThesePicksSub: "Why we chose these tools for plumbing businesses.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "jobber",
      name: "Jobber",
      badge: "Best overall for plumbing contractors",
      description:
        "All-in-one FSM for scheduling, dispatch, quoting, and invoicing. Great fit for small and mid-size plumbing teams that want one tool to keep jobs and cash flow organized.",
      rating: "4.6",
      startingPrice: "From ~$69/mo",
      reviewHref: getFieldServiceReviewUrl("jobber"),
      visitUrl: "https://getjobber.com",
      logoSrc: LOGOS.jobber,
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      badge: "Best for residential plumbing",
      description:
        "FSM tuned to home-service work, with strong customer communication, online booking, and payment tools. Popular with residential plumbing shops.",
      rating: "4.5",
      startingPrice: "From ~$49/mo",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
      visitUrl: "https://housecallpro.com",
      logoSrc: LOGOS.housecallpro,
    },
    {
      slug: "workiz",
      name: "Workiz",
      badge: "Best for budget-conscious plumbing teams",
      description:
        "Straightforward scheduling and job management at a lower starting price. A strong option for small plumbing crews getting off paper and spreadsheets.",
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
      bestFor: "Most plumbing contractors",
      startingPrice: "From ~$69/mo",
      standoutFeature: "All-in-one jobs, scheduling, and invoicing",
      reviewHref: getFieldServiceReviewUrl("jobber"),
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      logoSrc: LOGOS.housecallpro,
      bestFor: "Home-service plumbing teams",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Customer communication & online booking",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    },
    {
      slug: "workiz",
      name: "Workiz",
      logoSrc: LOGOS.workiz,
      bestFor: "Budget-conscious plumbing crews",
      startingPrice: "From ~$29/mo",
      standoutFeature: "Affordable scheduling and dispatch",
      reviewHref: getFieldServiceReviewUrl("workiz"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Why plumbers adopt field service software",
      body: "Plumbing businesses adopt FSM tools when a shared calendar and memory are no longer enough. As the number of jobs and techs grows, it becomes too easy to forget callbacks, lose track of which jobs were invoiced, or double-book techs. FSM gives you one view of the schedule, jobs, and money.",
    },
    {
      heading: "Scheduling and dispatch for mixed plumbing work",
      body: "Most plumbing teams mix planned work with emergencies and warranty visits. Look for drag-and-drop schedules, clear day/week views, and the ability to slot emergencies into gaps without breaking the whole day. Tools like Jobber, Housecall Pro, and Workiz all provide a visual board for plumbing dispatch.",
    },
    {
      heading: "Quoting, invoicing, and getting paid",
      body: "Estimates, change orders, and invoices should all live in the same system as your jobs. The best field service tools let plumbers generate estimates, capture approvals, and convert them to invoices in a few taps—then accept card payments on site or via links, so cash flow stays healthy.",
    },
    {
      heading: "Customer and job history",
      body: "For repeat customers and property managers, being able to see past jobs, notes, and equipment at a glance matters. FSM tools store that history per property so any plumber can show up prepared, even if they have never been to the site before.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Jobber",
      body: "Jobber is our default recommendation for many plumbing shops because it balances simplicity with enough structure to grow. Scheduling, dispatch, quoting, invoicing, and customer history all live in one place. It’s a strong fit if you want one system that can support 2–20 plumbers without feeling like enterprise software.",
    },
    {
      heading: "Housecall Pro",
      body: "Housecall Pro is particularly strong for residential plumbing: you get online booking, on-the-way texts, and review requests that help keep the schedule full and customers happy. If most of your plumbing work is in homes rather than large commercial sites, its home-service focus is an advantage.",
    },
    {
      heading: "Workiz",
      body: "Workiz appeals to small, budget-conscious plumbing teams that want to move off paper and simple calendars. It covers scheduling, job tracking, and invoicing at a lower base price than many competitors, making it easier for small crews to justify FSM early.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Jobber", href: getFieldServiceReviewUrl("jobber") },
    { name: "Housecall Pro", href: getFieldServiceReviewUrl("housecall-pro") },
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
  ] as BestForComparisonLink[],

  relatedGuides: [
    {
      label: "Field service software for plumbing businesses",
      href: "/field-service/guides/field-service-software-for-plumbing",
    },
    {
      label: "How to choose field service management software",
      href: "/field-service/guides/how-to-choose-field-service-software",
    },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What software do plumbing companies use to manage jobs?",
      a: "Plumbing companies commonly use field service tools like Jobber, Housecall Pro, and Workiz to manage jobs, schedules, and invoicing. These platforms replace paper work orders and scattered spreadsheets with a single job and customer history for each property.",
    },
    {
      q: "Do plumbing tools include scheduling and invoicing?",
      a: "Yes. Modern field service platforms for plumbers combine job scheduling, dispatch, estimates, invoices, and payments. You can schedule a call, dispatch a plumber, and turn the completed job into an invoice without leaving the system.",
    },
    {
      q: "Which field service software is best for small plumbing teams?",
      a: "Jobber and Housecall Pro are strong fits for most small plumbing teams. Jobber leans toward all-around workflows and reporting; Housecall Pro leans into home-service customer experience. Workiz is a good choice if you need something more budget-friendly to get started.",
    },
  ] as BestForFaqItem[],
};

