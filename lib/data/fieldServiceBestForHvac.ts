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
  housecallpro: "/Logos/housecallpro.jpeg",
  servicetitan: "/Logos/servicetitan.png",
  servicefusion: "/Logos/servicefusion.jpg",
} as const;

export const HVAC_PAGE_PROPS = {
  title: "Best Field Service Software for HVAC Businesses (2026)",
  subtitle:
    "Compare field service tools for HVAC contractors: dispatch, maintenance agreements, installs, and emergency calls in one system.",
  useCase: "hvac",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  introParagraph:
    "HVAC companies rely on field service software to keep seasonal tune‑ups, maintenance agreements, emergency calls, and installs all running through the same schedule and dispatch board. The right FSM platform helps you dispatch the right technician, keep customers informed, and turn every visit into accurate invoices and long-term revenue.",
  freshnessText: "Updated for 2026",
  topPicksSub: "Our top field service picks for HVAC businesses.",
  editorialSub: "What to look for when you choose field service software for an HVAC company.",
  whyThesePicksSub: "Why we chose these tools for HVAC.",
  seeAlsoBlock: SEE_ALSO,

  featuredProducts: [
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      badge: "Best for residential HVAC",
      description:
        "Scheduling, dispatch, customer communication, and payments tuned to residential HVAC. A strong fit for small and mid-size shops.",
      rating: "4.5",
      startingPrice: "From ~$49/mo",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
      visitUrl: "https://housecallpro.com",
      logoSrc: LOGOS.housecallpro,
    },
    {
      slug: "servicetitan",
      name: "ServiceTitan",
      badge: "Best for larger HVAC operations",
      description:
        "Enterprise-grade FSM with advanced dispatch, memberships, pricebooks, and reporting—built for HVAC companies running many trucks and a call center.",
      rating: "4.5",
      startingPrice: "Custom pricing",
      reviewHref: getFieldServiceReviewUrl("servicetitan"),
      visitUrl: "https://servicetitan.com",
      logoSrc: LOGOS.servicetitan,
    },
    {
      slug: "service-fusion",
      name: "Service Fusion",
      badge: "Best value for HVAC & plumbing",
      description:
        "Mid-market FSM focused on HVAC and plumbing teams that want strong dispatch, service agreements, and invoicing without full enterprise complexity.",
      rating: "4.4",
      startingPrice: "From ~$99/mo",
      reviewHref: getFieldServiceReviewUrl("service-fusion"),
      visitUrl: "https://servicefusion.com",
      logoSrc: LOGOS.servicefusion,
    },
  ] as BestForFeaturedProduct[],

  comparisonTableRows: [
    {
      slug: "housecall-pro",
      name: "Housecall Pro",
      logoSrc: LOGOS.housecallpro,
      bestFor: "Residential HVAC shops",
      startingPrice: "From ~$49/mo",
      standoutFeature: "Customer communication & marketing",
      reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    },
    {
      slug: "servicetitan",
      name: "ServiceTitan",
      logoSrc: LOGOS.servicetitan,
      bestFor: "Larger multi-truck HVAC operations",
      startingPrice: "Custom pricing",
      standoutFeature: "Deep dispatch, memberships, and analytics",
      reviewHref: getFieldServiceReviewUrl("servicetitan"),
    },
    {
      slug: "service-fusion",
      name: "Service Fusion",
      logoSrc: LOGOS.servicefusion,
      bestFor: "Mid-market HVAC & plumbing",
      startingPrice: "From ~$99/mo",
      standoutFeature: "Strong dispatch and agreement support",
      reviewHref: getFieldServiceReviewUrl("service-fusion"),
    },
  ] as BestForTableRow[],

  editorialGuidance: [
    {
      heading: "Dispatching around peaks and emergencies",
      body: "HVAC schedules are spiky: summer and winter peak seasons, shoulder-season tune‑ups, and emergency calls when equipment fails. You want a dispatch board that shows maintenance work and open capacity while letting you insert urgent calls without blowing up the entire day.",
    },
    {
      heading: "Memberships and maintenance agreements",
      body: "Maintenance agreements and memberships are key to smoothing HVAC demand and building recurring revenue. Your FSM system should track who has an active plan, which equipment they own, and automatically generate seasonal visits so you are not rebuilding the schedule from scratch every year.",
    },
    {
      heading: "Call-center workflows and sales",
      body: "Larger HVAC companies run a call center that must capture leads, book jobs, and assign them to techs. Enterprise tools like ServiceTitan offer deep call tracking and sales reporting; lighter systems like Housecall Pro focus more on keeping the calendar full and customers informed.",
    },
    {
      heading: "Tech experience and upsell tools",
      body: "Technicians should be able to see equipment history, capture photos, and present options and financing from the field. The more complex your ticket sizes and upsells, the more you benefit from FSM that includes good on-site sales tools.",
    },
  ] as BestForEditorialBlock[],

  whyThesePicks: [
    {
      heading: "Housecall Pro",
      body: "Housecall Pro fits residential HVAC teams that need dispatch, customer texting, online booking, and payment capture without a ServiceTitan-scale implementation—ideal when you run a handful of trucks and live or die on inbound leads and reviews. Seasonal reminders and follow-ups help you refill maintenance agreements before peak heat or cold. During a trial, configure tune-up versus diagnostic versus install job types with honest durations, test on-my-way messages for tight arrival windows, and run financing on a high-ticket replacement quote. Validate membership billing if recurring revenue is core to your model. Housecall Pro balances homeowner experience with operator simplicity.",
    },
    {
      heading: "ServiceTitan",
      body: "ServiceTitan suits larger HVAC operators with call centers, aggressive membership programs, and pricebooks complex enough to need governance—where revenue-per-technician reporting and marketing attribution justify premium spend and dedicated admins. Dispatch consoles, call recordings, and sold-hour analytics change how leadership runs morning meetings when adopted fully. In a pilot, load your real pricebook, run membership renewals through automation, and stress-test peak-season dispatch with true emergency volume. Partner with implementation specialists; half-configured Titan wastes money. This is enterprise FSM for shops ready to operate like chains.",
    },
    {
      heading: "Service Fusion",
      body: "Service Fusion targets mid-market HVAC and plumbing companies that outgrew lightweight tools but want strong dispatch, service agreements, and invoicing at lower cost and complexity than Titan-class platforms. It bridges spreadsheets and enterprise when you need agreement tracking without a year-long rollout. During a trial, model maintenance plans with seasonal visit generation, test QuickBooks sync for progressive billing on installs, and confirm mobile workflows for photo-heavy jobs. Review reporting on agreement compliance before you promise KPI dashboards. Service Fusion is the pragmatic middle when you need depth without Titan overhead.",
    },
  ] as BestForEditorialBlock[],

  relatedReviews: [
    { name: "Housecall Pro", href: getFieldServiceReviewUrl("housecall-pro") },
    { name: "ServiceTitan", href: getFieldServiceReviewUrl("servicetitan") },
    { name: "Service Fusion", href: getFieldServiceReviewUrl("service-fusion") },
  ] as BestForReviewLink[],

  relatedComparisons: [
    {
      label: "Housecall Pro vs ServiceTitan",
      href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan"),
    },
    {
      label: "ServiceTitan vs Service Fusion",
      href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion"),
    },
  ] as BestForComparisonLink[],

  relatedGuides: [
    {
      label: "Field service software for HVAC companies",
      href: "/field-service/guides/field-service-software-for-hvac",
    },
    {
      label: "How to choose field service management software",
      href: "/field-service/guides/how-to-choose-field-service-software",
    },
  ] as BestForGuideLink[],

  faqItems: [
    {
      q: "What is the best HVAC scheduling software?",
      a: "For many residential and light commercial HVAC teams, Housecall Pro is a strong scheduling and dispatch option. Larger, multi-truck operations often evaluate ServiceTitan for deeper dispatch and analytics, and Service Fusion for mid-market trade-specific features.",
    },
    {
      q: "Do HVAC field service tools integrate with accounting software?",
      a: "Yes. Most modern FSM systems for HVAC integrate with accounting platforms like QuickBooks or Xero, so invoices and payments flow into your books. Confirm your stack before you choose a platform so you do not end up re-entering revenue by hand.",
    },
    {
      q: "When should an HVAC company choose ServiceTitan over lighter tools?",
      a: "ServiceTitan tends to make sense when you have many techs and a call center, run serious membership programs, and have managers who will use detailed reports to tune operations. Smaller shops usually get better ROI from more approachable tools like Housecall Pro or Service Fusion.",
    },
  ] as BestForFaqItem[],
};

