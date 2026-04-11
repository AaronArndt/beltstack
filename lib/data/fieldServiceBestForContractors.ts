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
  servicetitan: "/Logos/servicetitan.png",
} as const;

export const CONTRACTORS_PAGE_PROPS = {
  title: "Best Field Service Software for General Contractors (2026)",
  subtitle:
    "Compare field service platforms for general contractors and mixed-trade crews: scheduling, dispatch, job management, and invoicing across multiple services.",
  useCase: "general-contractors",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "General contractors that run plumbing, HVAC, electrical, and other trades under one roof need field service software that works across services. The right FSM platform gives you a unified schedule, consistent job workflows, and clear reporting so you can see how each line of business is performing.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top field service picks for general contractors.",
  editorialSub: "What to look for when you choose field service software for a general contracting business.",
  whyThesePicksSub: "Why we chose these tools for general contractors.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "jobber",
      name: "Jobber",
      badge: "Best overall for many contractors",
      description:
        "All-in-one FSM that supports a mix of services—ideal for contractors who want one place to manage jobs and invoices across trades.",
      rating: "4.6",
      startingPrice: "From ~$69/mo",
      reviewHref: getFieldServiceReviewUrl("jobber"),
      visitUrl: "https://getjobber.com",
      logoSrc: LOGOS.jobber,
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      badge: "Best for home-service contractors",
      description:
        "Home-service FSM built for contractors serving homeowners. Strong communication tools, online booking, and review collection.",
      rating: "4.5",
      startingPrice: "From ~$49/mo",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
      visitUrl: "https://housecallpro.com",
      logoSrc: LOGOS.housecallpro,
    },
    {
      slug: "servicetitan",
      name: "ServiceTitan",
      badge: "Best for larger, multi-trade operations",
      description:
        "Enterprise-grade FSM for contractors running multiple trades at scale, with advanced dispatch, pricebooks, and analytics.",
      rating: "4.5",
      startingPrice: "Custom pricing",
      reviewHref: getFieldServiceReviewUrl("servicetitan"),
      visitUrl: "https://servicetitan.com",
      logoSrc: LOGOS.servicetitan,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "jobber",
      name: "Jobber",
      logoSrc: LOGOS.jobber,
      bestFor: "Many small and mid-size contractors",
      startingPrice: "From ~$69/mo",
      standoutFeature: "All-around FSM across trades",
      reviewHref: getFieldServiceReviewUrl("jobber"),
    },
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      logoSrc: LOGOS.housecallpro,
      bestFor: "Home-service contractors",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Customer communication & booking",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    },
    {
      slug: "servicetitan",
      name: "ServiceTitan",
      logoSrc: LOGOS.servicetitan,
      bestFor: "Larger, multi-trade operations",
      startingPrice: "Custom pricing",
      standoutFeature: "Deep dispatch, pricebook, and reporting",
      reviewHref: getFieldServiceReviewUrl("servicetitan"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Running multiple trades in one system",
      body: "Contractors often combine plumbing, HVAC, electrical, and other services. Your FSM should support all of them without forcing you into separate calendars or workflows. Look for tools that let you tag jobs by trade, filter the schedule, and still keep a single customer and property record.",
    },
    {
      heading: "Standardizing job workflows and pricing",
      body: "As you add services and crews, inconsistencies in quoting and invoicing become expensive. A good FSM platform helps you standardize job templates and pricebooks so techs present the right options and the office does not have to untangle one‑off invoices for every trade.",
    },
    {
      heading: "Knowing which services are truly profitable",
      body: "When you run multiple trades, it is easy to lose track of which lines of business drive profit. FSM tools with basic job and revenue reporting make it much easier to see which services to double down on and which to adjust or exit.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Jobber",
      body: "Jobber is our primary recommendation for many multi-trade contractors who need one field service platform for scheduling, job costing light, quotes, and invoicing across HVAC, plumbing, electrical, or handyman lines without bespoke ERP work. Client hub history helps techs see notes before they ring the doorbell. During a trial, configure services and line items you actually sell, dispatch a week of mixed jobs, and test progress billing or deposits if commercial work requires it. Integrate accounting early if finance rejects duplicate AR entries. Jobber balances flexibility with a UI owners can still learn nights and weekends.",
    },
    {
      heading: "Housecall Pro",
      body: "Housecall Pro shines for contractors focused on residential routes where online booking, on-my-way texts, review requests, and marketing add-ons keep trucks full and reputations fresh. Customer experience automation often pays for itself when referrals drive revenue. In a trial, enable consumer booking for one trade, map follow-up automations after job completion, and confirm payment capture matches how you close tickets in homes. Validate pricebook depth against your SKU count before you promise dynamic estimates. Housecall Pro fits home-service brands competing on speed and polish.",
    },
    {
      heading: "ServiceTitan",
      body: "ServiceTitan targets contractors who already run many techs, multiple dispatch boards, and a call center that lives on recordings, memberships, and tight pricebook governance—where revenue per technician justifies premium software and dedicated admins. Reporting on campaigns, memberships, and sold hours can transform management meetings when data is trusted. During a pilot, load a representative pricebook, run membership renewals, and test dispatch drag-and-drop under peak call volume. Budget implementation partners and training; the ROI depends on disciplined adoption. ServiceTitan is enterprise-grade FSM for operators ready to run like one.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Jobber", href: getFieldServiceReviewUrl("jobber") },
    { name: "Housecall Pro", href: getFieldServiceReviewUrl("housecall-pro") },
    { name: "ServiceTitan", href: getFieldServiceReviewUrl("servicetitan") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    {
      label: "Jobber vs Housecall Pro",
      href: getFieldServiceCompareUrl("jobber-vs-housecall-pro"),
    },
    {
      label: "Housecall Pro vs ServiceTitan",
      href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"),
    },
    {
      label: "Jobber vs Workiz",
      href: getFieldServiceCompareUrl("jobber-vs-workiz"),
    },
  ] as BestForComparisonLink[],

  relatedGuides: [
    {
      label: "How to choose field service management software",
      href: "/field-service/guides/how-to-choose-field-service-software",
    },
    {
      label: "Field service software pricing guide",
      href: "/field-service/guides/field-service-software-pricing-guide",
    },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best field service software for general contractors?",
      a: "For many small and mid-size general contractors that run multiple trades, Jobber is a strong default because it works well across services without requiring a heavy implementation. Housecall Pro is excellent for home-service contractors, and ServiceTitan becomes attractive once you reach larger scale and want deeper analytics.",
    },
    {
      q: "Can one field service platform support multiple trades?",
      a: "Yes. Tools like Jobber, Housecall Pro, and ServiceTitan all support mixed trade work. The key is configuring your job types, pricebooks, and reporting so you can still see how each trade is performing without splitting into separate systems.",
    },
    {
      q: "When should contractors upgrade from lighter tools to ServiceTitan?",
      a: "Contractors usually consider ServiceTitan once they have many techs and dispatchers, care deeply about membership and pricebook discipline, and want more analytic insight across trades. Before that, lighter platforms like Jobber and Housecall Pro typically offer better ROI and faster implementation.",
    },
  ] as BestForFaqItem[],
};

