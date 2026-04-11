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
  title: "Best Field Service Software for Plumbing Companies (2026)",
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
      body: "Jobber is our default recommendation for many plumbing shops because it handles emergency inserts, scheduled maintenance, and multi-plumber dispatch in one field service workflow without drowning a small office in configuration. Quotes convert to jobs and invoices so ticket details do not re-key three times. During a trial, model after-hours premiums, attach photos on a slab leak job, and test client notifications for arrival windows. Validate integrations with your accounting package if AP expects job-level tagging. Jobber grows from a two-truck residential shop to light commercial without forcing an immediate ServiceTitan-scale rollout.",
    },
    {
      heading: "Housecall Pro",
      body: "Housecall Pro fits residential plumbers who compete on fast response, online booking, and polished homeowner communication—on-my-way texts, review prompts, and optional financing flows keep conversion high after the first visit. Marketing automations matter when Angi or Google leads are expensive. In a trial, turn on consumer booking for drain cleans versus water heater installs separately, test SMS templates for emergency versus booked work, and confirm payment links match how techs collect in the field. Review pricebook maintenance effort before you promise flat-rate menus. Housecall Pro wins when inbound residential demand is the growth engine.",
    },
    {
      heading: "Workiz",
      body: "Workiz appeals to budget-conscious plumbing crews that need to escape paper tickets and group texts with affordable scheduling, dispatch, and invoicing—often the first paid FSM a three-plumber shop can justify. It keeps daily boards readable when dispatchers juggle callbacks and installs. During evaluation, stress-test same-day job stacking, verify inventory notes if you track trucks loosely, and run card payments on completed jobs. Check if reporting on average ticket meets your needs or if you will export to spreadsheets monthly. Workiz is the pragmatic on-ramp before heavier platforms.",
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

