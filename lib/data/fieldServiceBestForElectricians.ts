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

export const ELECTRICIANS_PAGE_PROPS = {
  title: "Best Field Service Software for Electricians (2026)",
  subtitle:
    "Compare field service platforms for electrical contractors: job scheduling, dispatch, estimates, and invoicing that work in the field.",
  useCase: "electricians",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "Electricians need tools that keep jobs organized, crews on schedule, and invoices going out on time—without dragging them into enterprise software. FSM tools give electrical contractors one place to manage calls, work orders, and customer history instead of spreading details across notebooks, texts, and spreadsheets.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top field service picks for electricians.",
  editorialSub: "What to look for when you choose field service software for an electrical business.",
  whyThesePicksSub: "Why we chose these tools for electricians.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "jobber",
      name: "Jobber",
      badge: "Best overall for electrical contractors",
      description:
        "All-in-one FSM for small and mid-size electrical businesses. Handles jobs, scheduling, quoting, and invoicing with a clear mobile app for techs.",
      rating: "4.6",
      startingPrice: "From ~$69/mo",
      reviewHref: getFieldServiceReviewUrl("jobber"),
      visitUrl: "https://getjobber.com",
      logoSrc: LOGOS.jobber,
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      badge: "Best for home-service electricians",
      description:
        "Home-service-focused FSM with strong customer communication and online reviews. Good fit for residential electrical work.",
      rating: "4.5",
      startingPrice: "From ~$49/mo",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
      visitUrl: "https://housecallpro.com",
      logoSrc: LOGOS.housecallpro,
    },
    {
      slug: "workiz",
      name: "Workiz",
      badge: "Best for small electrical crews on a budget",
      description:
        "Straightforward job scheduling and dispatch with a lower entry price—useful for small electrical teams getting off paper.",
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
      bestFor: "Most electrical contractors",
      startingPrice: "From ~$69/mo",
      standoutFeature: "Well-rounded jobs, scheduling, and invoicing",
      reviewHref: getFieldServiceReviewUrl("jobber"),
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      logoSrc: LOGOS.housecallpro,
      bestFor: "Home-service electricians",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Customer communication & review tools",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    },
    {
      slug: "workiz",
      name: "Workiz",
      logoSrc: LOGOS.workiz,
      bestFor: "Budget-conscious small crews",
      startingPrice: "From ~$29/mo",
      standoutFeature: "Affordable scheduling and dispatch",
      reviewHref: getFieldServiceReviewUrl("workiz"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Job types and repeat work",
      body: "Electricians work a mix of one-off projects, recurring service, and emergency calls. FSM should make it easy to see what is booked, which technicians are free, and which customers are due for follow-ups or panel upgrades—without building a giant project plan for every job.",
    },
    {
      heading: "Safety and documentation",
      body: "Electricians often need photos and notes for inspections, warranty claims, and safety records. A good field service app lets techs attach photos and notes to each job so the office and future techs can see exactly what was done.",
    },
    {
      heading: "Residential vs commercial electrical work",
      body: "Residential-focused platforms like Housecall Pro emphasize customer experience and inbound booking. Jobber and Workiz can handle both residential and light commercial work, but if most of your revenue comes from commercial/industrial projects, you may eventually look at more project-oriented tools as well.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Jobber",
      body: "Jobber fits electrical contractors who juggle service calls, panel upgrades, and small commercial work and need structured jobs, photos, and signed quotes on mobile before techs leave the site. Route views help dispatchers respect license-level assignments when apprentices cannot close certain tickets alone. During a trial, build estimate templates for common installs, track warranty parts on a test job, and confirm recurring inspection visits for property managers if you sell them. Sync invoices to accounting with the GL codes your CPA expects. Jobber balances field usability with back-office clarity.",
    },
    {
      heading: "Housecall Pro",
      body: "Housecall Pro targets residential electricians who win on fast booking, proactive texts, and review generation after every truck roll—critical when homeowners compare three Google results. Optional consumer financing can lift ticket size on panel-heavy jobs. In a trial, enable online booking for EV charger installs versus quick service calls with different durations, test automated follow-ups for unfinished estimates, and verify payment capture on larger deposits. Validate how pricebooks handle multi-option proposals your sales team sells. Housecall Pro excels when marketing and CX are as important as the truck stock.",
    },
    {
      heading: "Workiz",
      body: "Workiz suits price-sensitive electrical shops that still need dependable scheduling, dispatch statuses, and invoicing so estimators stop overlapping on the same client window. Lower base fees make FSM palatable while revenue scales. During evaluation, simulate a busy Monday with emergency calls cutting into booked installs, send customer texts from the field, and confirm techs can add line items mid-job. Review whether inventory tracking is deep enough before you promise asset-level history. Workiz is a lean bridge off whiteboards.",
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
      label: "Field service software for small business",
      href: "/field-service/guides/field-service-software-for-small-business",
    },
    {
      label: "How to choose field service management software",
      href: "/field-service/guides/how-to-choose-field-service-software",
    },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What field service software is best for electricians?",
      a: "For most small and mid-size electrical contractors, Jobber and Housecall Pro are strong starting points. Jobber offers a great all-around workflow; Housecall Pro is especially strong for home-service electricians. Workiz is a good option when you want to keep costs down while improving scheduling.",
    },
    {
      q: "Do electrician tools include scheduling and invoicing?",
      a: "Yes. Modern field service platforms used by electricians combine scheduling, dispatch, estimates, invoices, and payments. The goal is to keep job details, customer history, and billing in one system instead of across separate tools.",
    },
    {
      q: "Do these tools work for both residential and commercial electrical work?",
      a: "Yes, but the emphasis differs. Housecall Pro focuses on residential; Jobber and Workiz can support both residential and light commercial electrical work. If you primarily do large commercial or industrial projects, you may want to complement FSM with project‑management tools.",
    },
  ] as BestForFaqItem[],
};

