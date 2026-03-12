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
      body: "Jobber is a strong all-around fit for many electrical contractors. It gives you structured jobs, clear daily routes, and fast quotes and invoices—all in a way that is approachable for smaller shops. It’s a natural upgrade from spreadsheets and basic calendars when you have multiple techs.",
    },
    {
      heading: "Housecall Pro",
      body: "Housecall Pro stands out for home-service electricians because of its booking, notifications, and review tools. If most of your jobs are in homes and you want to keep trucks full with inbound leads and repeat work, its customer experience features are a real advantage.",
    },
    {
      heading: "Workiz",
      body: "Workiz makes sense when you are price-sensitive but still want to stop losing jobs to disorganized scheduling. It covers core scheduling, job tracking, and invoicing without forcing you into a more expensive platform earlier than you need.",
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

