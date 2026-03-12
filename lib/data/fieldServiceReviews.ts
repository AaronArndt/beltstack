import {
  getFieldServiceReviewUrl,
  getFieldServiceCompareUrl,
  getFieldServiceBestForUrl,
} from "@/lib/routes";
import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";

type FieldServiceReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const LOGOS = {
  jobber: "/Logos/jobber.png",
  housecallpro: "/Logos/housecallpro.jpeg",
  servicetitan: "/Logos/servicetitan.png",
  servicefusion: "/Logos/servicefusion.jpg",
  workiz: "/Logos/workiz.jpeg",
  kickserv: "/Logos/kickserv.jpeg",
  servicem8: "/Logos/servicem8.png",
  fieldedge: "/Logos/fieldedge.jpeg",
  mhelpdesk: "/Logos/mhelpdesk.png",
} as const;

const FIELD_SERVICE_HUB = "/field-service";
const FIELD_SERVICE_BEST_SOFTWARE = "/field-service/best-field-service-software";
const FIELD_SERVICE_COMPARE_HUB = "/field-service/compare";
const FIELD_SERVICE_GUIDES_HUB = "/field-service/guides";

const FIELD_SERVICE_SCENARIO_LINKS: { label: string; href: string }[] = [
  { label: "Best for plumbing", href: getFieldServiceBestForUrl("plumbing") },
  { label: "Best for HVAC", href: getFieldServiceBestForUrl("hvac") },
  { label: "Best for electricians", href: getFieldServiceBestForUrl("electricians") },
  { label: "Best for small business", href: getFieldServiceBestForUrl("small-business") },
  { label: "Best for contractors", href: getFieldServiceBestForUrl("contractors") },
];

const FIELD_SERVICE_METHODOLOGY = {
  title: "How we review field service management software",
  sub: "Transparent process, contractor-focused criteria.",
  introParagraph:
    "Our reviews are independent and updated regularly so you get current pricing and feature information. We evaluate field service management (FSM) tools on scheduling and dispatch, mobile experience, estimates and invoicing, payments, customer management, and reporting.",
  bullets: [
    "We test core workflows: booking jobs, scheduling and dispatching technicians, sending estimates and invoices, and collecting payments.",
    "We compare pricing tiers, user limits, and feature sets so you understand total cost at your crew size and number of trucks.",
    "We look at mobile apps for techs in the field, customer communication, and integrations with accounting and payment processors.",
  ],
};

const reviews: Record<string, FieldServiceReviewData> = {
  jobber: {
    toolName: "Jobber",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.6",
    startingPrice: "From ~$69/mo",
    bestFor: "contractors and home service businesses that want one system for jobs, scheduling, and invoicing",
    visitUrl: "https://getjobber.com",
    logoSrc: LOGOS.jobber,
    quickVerdict:
      "Jobber is our top overall pick for most contractors and home service businesses that want an all-in-one FSM platform without feeling like enterprise software.",
    quickVerdictParagraphs: [
      "Jobber is our top overall pick for most contractors and home service businesses. It combines quoting, scheduling, dispatch, job tracking, and invoicing in one system that feels approachable for small teams. Crews see their day on a clean mobile app; office staff see who is where, which jobs are scheduled, and what still needs to be invoiced.",
      "We like Jobber because it is opinionated in the right ways for trade businesses: you build quotes, convert them to jobs, schedule technicians, and turn completed work into invoices with a few clicks. Online payments, client reminders, and automated follow‑ups help you get paid faster and keep work from slipping through the cracks.",
      "The tradeoff is that Jobber is not the absolute cheapest tool on the market, and it is not as enterprise-heavy as ServiceTitan. For most small and mid-size teams that want to get off paper, spreadsheets, or text-message scheduling, Jobber hits the sweet spot between ease of use and power.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.7",
        explanation:
          "Covers the full FSM lifecycle—quotes, jobs, scheduling, dispatch, invoicing, payments, and basic reporting. Add‑ons like client reminders and online booking reduce admin work.",
      },
      {
        category: "Pricing",
        score: "4.4",
        explanation:
          "Plans start around ~$69/month and scale with users and features. Not the cheapest, but competitive for an all‑in‑one platform that can replace multiple tools.",
      },
      {
        category: "Ease of Use",
        score: "4.7",
        explanation:
          "Clean interface and guided workflows. Office staff and field techs can usually adopt Jobber quickly, even if they have never used FSM software before.",
      },
      {
        category: "Support",
        score: "4.5",
        explanation:
          "Responsive support, onboarding help, and a knowledge base focused on contractors. Many small teams report good experiences getting started.",
      },
      {
        category: "Integrations",
        score: "4.4",
        explanation:
          "Integrates with QuickBooks, Xero, and payment processors. Covers the essentials for small service businesses, though the ecosystem is smaller than enterprise tools.",
      },
    ],
    pros: [
      "All‑in‑one FSM for quoting, scheduling, dispatch, and invoicing",
      "Easy for office staff and techs to learn",
      "Mobile app keeps crews updated in the field",
      "Online payments and automation help you get paid faster",
      "Good fit for a wide range of trades and team sizes",
    ],
    cons: [
      "Pricing can feel high for very small or seasonal teams",
      "Less enterprise reporting depth than ServiceTitan",
      "Some advanced automations and features locked to higher tiers",
    ],
    bestForEditorial:
      "Jobber is best for small and mid-size contractors that want to replace clipboards, text-message scheduling, and manual invoicing with one modern system. It is a strong fit for HVAC, plumbing, electrical, landscaping, cleaning, and other home service businesses that run multiple trucks and need clear visibility into the schedule and cash flow.",
    whoShouldAvoid:
      "Solo operators who only run a few jobs a week may find Jobber more tool than they need and might prefer a lighter app or simple invoicing plus calendar combo. Very large, multi‑location operations that need call‑center tooling, deep reporting, and complex pricebooks may outgrow Jobber and lean toward ServiceTitan or another enterprise FSM.",
    pricingSummary:
      "Jobber typically prices plans based on user count and feature bundles. Entry tiers cover core scheduling, jobs, and invoicing for small teams; higher tiers add automation, more advanced reporting, and additional users. Expect to pay more than a basic invoicing app but less than enterprise‑grade FSM, especially if you consolidate several tools into Jobber.",
    pricingTiers:
      "Lower‑tier plans focus on core job management and scheduling for a handful of users. Mid and upper tiers add features like quote follow‑ups, more robust reporting, additional locations, and more seats. Always check Jobber’s current pricing page for up‑to‑date plan names and limits.",
    costVsCompetitors:
      "Jobber usually sits above ultra‑budget tools and below enterprise FSM like ServiceTitan. Compared with Housecall Pro and Workiz, pricing is broadly similar once you normalize for user counts and feature sets. The main question is whether you want Jobber’s workflow and interface versus alternatives—not a huge price delta at typical crew sizes.",
    features: [],
    keyFeatures: [
      {
        name: "Quotes and estimates",
        description:
          "Build professional quotes with line items, pricing, and optional add‑ons. Convert accepted quotes into scheduled jobs without re‑entering data.",
      },
      {
        name: "Scheduling and dispatch",
        description:
          "Drag‑and‑drop schedule board shows each tech’s day. Dispatch jobs with one click; techs see assignments, details, and notes on the mobile app.",
      },
      {
        name: "Invoicing and payments",
        description:
          "Turn completed jobs into invoices, send them via email or text, and accept card payments online. Automated reminders reduce overdue invoices.",
      },
      {
        name: "Customer management",
        description:
          "Keep customer history, notes, and job records in one place so your team can see past work before they arrive on site.",
      },
      {
        name: "Mobile app for crews",
        description:
          "Technicians can view their schedule, job details, and directions, upload photos, capture notes, and mark jobs complete from their phones.",
      },
    ],
    integrations: ["QuickBooks Online", "Xero", "Payment processors", "Calendar tools (via sync)", "Basic email and SMS"],
    integrationsIntro:
      "Jobber focuses on the essentials: keeping your books in sync with QuickBooks or Xero and helping you collect payments. For many small contractors, that is enough—time and job data stay aligned with accounting and you do not have to re‑enter numbers.",
    contractorUse: [
      "HVAC company using Jobber to schedule seasonal maintenance visits and track which systems are due for service.",
      "Plumbing business dispatching techs based on zone and skill, with the office seeing which jobs are in progress and what has been invoiced.",
      "Landscaping crew using Jobber to manage recurring jobs, generate invoices each month, and collect payments online.",
    ],
    alternatives: [
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Home‑service‑focused FSM with strong marketing and customer communication tools.",
        logoSrc: LOGOS.housecallpro,
      },
      {
        name: "ServiceTitan",
        href: getFieldServiceReviewUrl("servicetitan"),
        description: "Enterprise‑grade FSM for larger teams that need deeper reporting and call‑center tools.",
        logoSrc: LOGOS.servicetitan,
      },
      {
        name: "Workiz",
        href: getFieldServiceReviewUrl("workiz"),
        description: "Budget‑friendly option for cleaning and field service teams that want solid scheduling and job management.",
        logoSrc: LOGOS.workiz,
      },
      {
        name: "Kickserv",
        href: getFieldServiceReviewUrl("kickserv"),
        description: "Straightforward FSM for small service businesses that want CRM‑style customer tracking.",
        logoSrc: LOGOS.kickserv,
      },
    ],
    faqs: [
      {
        q: "Is Jobber good for small contractors?",
        a: "Yes. Jobber is built for small and mid‑size contractors that want one system for jobs, scheduling, and invoicing. It is usually overkill only for solo operators with a low job volume.",
      },
      {
        q: "How much does Jobber cost?",
        a: "Jobber’s plans typically start around ~$69/month and scale with users and features. You will pay more than for a simple invoicing app but less than for most enterprise FSM tools. Check Jobber’s pricing page for current tiers.",
      },
      {
        q: "Does Jobber integrate with QuickBooks?",
        a: "Yes. Jobber integrates with QuickBooks Online so invoices and payments can sync to your accounting system. That keeps your books and job history aligned.",
      },
      {
        q: "Who should choose Jobber over ServiceTitan?",
        a: "Choose Jobber if you are a small or mid‑size shop that wants an easy‑to‑run FSM system. Choose ServiceTitan if you have many trucks, multiple locations, or need call‑center tooling and deeper reporting.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
      { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
      { label: "Kickserv vs Jobber", href: getFieldServiceCompareUrl("kickserv-vs-jobber") },
    ],
    compareSectionTitle: "Compare Jobber with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  "housecall-pro": {
    toolName: "Housecall Pro",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.5",
    startingPrice: "From ~$49/mo",
    bestFor: "home service pros that want scheduling, dispatch, and marketing tools tuned to residential work",
    visitUrl: "https://housecallpro.com",
    logoSrc: LOGOS.housecallpro,
    quickVerdict:
      "Housecall Pro is a strong fit for home service contractors that care as much about customer experience and marketing as they do about scheduling and jobs.",
    quickVerdictParagraphs: [
      "Housecall Pro focuses on residential and light commercial service businesses. You get scheduling, dispatch, job management, invoicing, and payments—but the product also leans into customer communication, marketing, and repeat business. Online booking, postcard and email campaigns, and review requests help you keep trucks busy once the basics are in place.",
      "The interface is friendly and built around the way home service teams actually work: get a job on the calendar, dispatch the right tech, keep the customer updated, collect payment, and encourage repeat work. Techs use the mobile app to see jobs, capture photos, and update status; office staff coordinate the schedule and cash flow.",
      "Pricing is competitive with other SMB FSM tools. Housecall Pro is not a construction ERP or an enterprise platform—and that is the point. If you primarily serve homeowners and want software built around that motion, it belongs on your shortlist.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.6",
        explanation:
          "Scheduling, dispatch, job management, invoicing, payments, and customer communication. Marketing tools like postcards and email campaigns are a differentiator.",
      },
      {
        category: "Pricing",
        score: "4.4",
        explanation:
          "Plans start around ~$49/month and scale with users. Good value for the mix of FSM and marketing, though you will pay more than for bare‑bones scheduling tools.",
      },
      {
        category: "Ease of Use",
        score: "4.6",
        explanation:
          "Built for non‑technical field teams. The schedule, job cards, and mobile app are straightforward, and onboarding materials target home service pros.",
      },
      {
        category: "Support",
        score: "4.4",
        explanation:
          "Support, onboarding, and an active user community focused on trades. Quality is generally strong, though some advanced configuration may require patience.",
      },
      {
        category: "Integrations",
        score: "4.3",
        explanation:
          "Integrates with QuickBooks and payment processors plus a handful of other tools. Ecosystem is narrower than enterprise FSM but covers the basics.",
      },
    ],
    pros: [
      "Home‑service‑specific features and workflows",
      "Strong customer communication and marketing tools",
      "Good mobile experience for technicians",
      "Online booking and review requests help drive repeat work",
      "Competitive pricing for small to mid‑size teams",
    ],
    cons: [
      "Less suited to heavy commercial or industrial work",
      "Reporting depth and customization trail enterprise platforms",
      "Some features locked behind higher‑tier plans",
    ],
    bestForEditorial:
      "Housecall Pro is best for HVAC, plumbing, electrical, cleaning, and other home service contractors that want to modernize the end‑to‑end customer journey—from booking to payment and follow‑up marketing. If your business lives and dies by repeat residential work, the marketing and review tools are a meaningful differentiator.",
    whoShouldAvoid:
      "Contractors focused on large commercial or industrial jobs, with complex estimating and project management needs, may want a construction‑specific suite instead. Very large operations that need advanced reporting, call‑center tooling, or multi‑location governance might outgrow Housecall Pro and look at ServiceTitan.",
    pricingSummary:
      "Housecall Pro’s pricing is tiered by users and features. Lower tiers focus on core scheduling, dispatch, and invoicing; higher tiers add automations, advanced reporting, and marketing tools. Expect to pay in a similar range to Jobber or Workiz for comparable team sizes.",
    pricingTiers:
      "Entry plans cover a handful of users and core FSM features. Higher plans unlock more automation, advanced communications, and bulk marketing capabilities. Always verify current plan names and inclusions on the Housecall Pro website.",
    costVsCompetitors:
      "Compared with Jobber and Workiz, pricing is generally similar for small and mid‑size teams. Housecall Pro stands out when you specifically value its marketing and customer‑experience features; if you only need simple scheduling, a cheaper tool may suffice.",
    features: [],
    keyFeatures: [
      {
        name: "Scheduling and dispatch",
        description:
          "Visual schedule board to assign jobs to techs, adjust routes, and see who is available. Techs receive updates on the mobile app.",
      },
      {
        name: "Customer communication",
        description:
          "Automated text and email notifications let customers know when a tech is on the way, confirm appointments, and reduce no‑shows.",
      },
      {
        name: "Invoicing and payments",
        description:
          "Create invoices from completed jobs and accept card payments onsite or online. Payment status stays tied to each job.",
      },
      {
        name: "Marketing tools",
        description:
          "Postcards, email campaigns, and review requests help you follow up with customers, drive repeat work, and grow reviews on platforms that matter.",
      },
      {
        name: "Mobile app for techs",
        description:
          "Field technicians see job details, customer info, and directions; they can capture photos, notes, and signatures from the app.",
      },
    ],
    integrations: ["QuickBooks Online", "Payment processors", "Basic calendar and email", "Review and marketing channels"],
    integrationsIntro:
      "Housecall Pro’s integrations focus on keeping your books accurate and your customer communications consistent. For many home service pros, QuickBooks plus Housecall Pro is the core of the back office.",
    contractorUse: [
      "HVAC shop using Housecall Pro to schedule installs and maintenance visits, send automated appointment reminders, and follow up with review requests.",
      "Plumbing business that relies on online booking and postcards to keep a steady pipeline of residential jobs.",
      "Cleaning company using the mobile app to keep crews on schedule and ensure every visit is invoiced the same day.",
    ],
    alternatives: [
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "All‑around FSM for a wide range of trades with strong job and invoice workflows.",
        logoSrc: LOGOS.jobber,
      },
      {
        name: "ServiceTitan",
        href: getFieldServiceReviewUrl("servicetitan"),
        description: "Heavyweight FSM for larger, more complex operations that need deeper reporting and pricebook control.",
        logoSrc: LOGOS.servicetitan,
      },
      {
        name: "Workiz",
        href: getFieldServiceReviewUrl("workiz"),
        description: "Budget‑friendly option for small teams that still want online booking and solid job scheduling.",
        logoSrc: LOGOS.workiz,
      },
    ],
    faqs: [
      {
        q: "Is Housecall Pro good for HVAC and plumbing?",
        a: "Yes. Housecall Pro is built for home service trades like HVAC and plumbing, with features for dispatch, estimates, invoices, and strong customer communication.",
      },
      {
        q: "How is Housecall Pro priced?",
        a: "Pricing is based on user count and features. Plans start around ~$49/month and increase as you add technicians and advanced options. Check the Housecall Pro site for current details.",
      },
      {
        q: "Can Housecall Pro help with marketing?",
        a: "Yes. Housecall Pro includes marketing features like postcards, email campaigns, and review requests to help you drive repeat work and improve your online reputation.",
      },
      {
        q: "How does Housecall Pro compare to Jobber?",
        a: "Housecall Pro leans more into customer communication and marketing, while Jobber emphasizes all‑around job workflows and reporting. Both are strong FSM options for home service teams.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
      { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
    ],
    compareSectionTitle: "Compare Housecall Pro with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  servicetitan: {
    toolName: "ServiceTitan",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.5",
    startingPrice: "Custom pricing",
    bestFor: "larger and growing service companies that need enterprise‑grade FSM, reporting, and call‑center tools",
    visitUrl: "https://servicetitan.com",
    logoSrc: LOGOS.servicetitan,
    quickVerdict:
      "ServiceTitan is the heavyweight choice for larger home service and trade companies that need deep reporting, call‑center tooling, and fine‑grained control over pricebooks and performance.",
    quickVerdictParagraphs: [
      "ServiceTitan is built for serious scale. It combines CRM, call‑center tools, dispatch, job and pricebook management, marketing, and reporting into one tightly integrated platform. For companies with dozens of trucks and multiple locations, that centralization can unlock real gains in efficiency and revenue per tech.",
      "We see ServiceTitan as a fit when you have the volume and management team to take advantage of its depth. You can track every phone call, conversion rate by CSR, close rate by tech, and revenue per campaign. Detailed job costing, memberships, and complex pricebooks make sense when you are running a sophisticated operation.",
      "The downsides are complexity, implementation effort, and cost. ServiceTitan is overkill for many small outfits and typically requires a serious onboarding project. If you are still on paper or spreadsheets, a simpler FSM like Jobber or Housecall Pro is usually a better first step.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.8",
        explanation:
          "End‑to‑end platform including CRM, call‑center, dispatch, job management, pricebooks, memberships, marketing, and robust reporting. One of the deepest FSM toolsets available.",
      },
      {
        category: "Pricing",
        score: "4.0",
        explanation:
          "Custom quotes and higher overall cost than SMB‑focused FSM. Pricing can be well justified for large operations but is usually too high for small teams.",
      },
      {
        category: "Ease of Use",
        score: "4.1",
        explanation:
          "Powerful but complex. Office staff and managers will need training; techs get a polished mobile app but also more options to learn.",
      },
      {
        category: "Support",
        score: "4.5",
        explanation:
          "Implementation support, account management, and resources aimed at growing service businesses. Support expectations and SLAs are generally stronger than SMB tools.",
      },
      {
        category: "Integrations",
        score: "4.6",
        explanation:
          "Integrates with accounting, financing, and other key back‑office tools. API and partner ecosystem are broader than many SMB FSM vendors.",
      },
    ],
    pros: [
      "Enterprise‑grade FSM with deep reporting and analytics",
      "Integrated call‑center tools and CRM for tracking every lead",
      "Strong support for memberships, recurring service, and pricebooks",
      "Powerful mobile app with sales tools for techs in the field",
      "Good fit for multi‑location and high‑volume operations",
    ],
    cons: [
      "Too complex and expensive for many small contractors",
      "Implementation can be lengthy and requires dedicated attention",
      "Requires process discipline to get full value from the platform",
    ],
    bestForEditorial:
      "ServiceTitan is best for larger and rapidly growing home service companies with multiple crews, a busy call center, and a management team that actively tracks metrics like close rates and revenue per tech. HVAC, plumbing, and electrical businesses that sell memberships and big‑ticket installs tend to benefit most.",
    whoShouldAvoid:
      "Smaller contractors without a strong back office, those still experimenting with their processes, or shops that only run a handful of jobs per day will usually be better served by Jobber, Housecall Pro, or Workiz. If you are not ready to commit to a structured, data‑driven way of running the business, ServiceTitan is overkill.",
    pricingSummary:
      "ServiceTitan uses custom, contract‑based pricing and is typically at the high end of the FSM market. You pay for the depth of features, onboarding, and an ecosystem designed for large service companies. Budget both for licensing and for the time it will take your team to adopt new workflows.",
    pricingTiers:
      "Details vary by deal, but expect packaging based on modules, number of users, and possibly location count. Implementation and training may be billed separately. Always work with ServiceTitan’s sales team to understand the total cost of ownership.",
    costVsCompetitors:
      "Compared to Jobber, Housecall Pro, and Workiz, ServiceTitan is significantly more expensive per user—but it also does far more. For operations that can actually use its reporting and call‑center capabilities, the ROI can justify the price; for small teams, it rarely does.",
    features: [],
    keyFeatures: [
      {
        name: "Call‑center and CRM",
        description:
          "Track every inbound and outbound call, tie calls to customers and jobs, and see conversion rates by CSR and campaign.",
      },
      {
        name: "Advanced dispatch and capacity planning",
        description:
          "Dispatch board with zone controls, capacity planning, and routing to keep busy schedules running efficiently.",
      },
      {
        name: "Pricebooks and memberships",
        description:
          "Rich pricebook management and membership programs for recurring maintenance, including financing and upsell tools.",
      },
      {
        name: "Reporting and analytics",
        description:
          "Detailed dashboards on revenue, close rates, technician performance, campaign ROI, and more for data‑driven decisions.",
      },
      {
        name: "Mobile app for techs",
        description:
          "Technicians can see jobs, present options, capture signatures, collect payments, and update job status from the field.",
      },
    ],
    integrations: ["QuickBooks", "Other accounting platforms", "Financing partners", "Call tracking", "Marketing tools"],
    integrationsIntro:
      "ServiceTitan is often the center of a large service‑business tech stack. Its integrations focus on accounting, financing, marketing, and call tracking so you can see performance across the business.",
    contractorUse: [
      "HVAC company with dozens of trucks using ServiceTitan to manage call‑center operations, dispatch, memberships, and installs.",
      "Multi‑location plumbing business tracking close rates and revenue per tech across branches.",
      "Electrical contractor using detailed reporting to optimize marketing spend and technician performance.",
    ],
    alternatives: [
      {
        name: "Service Fusion",
        href: getFieldServiceReviewUrl("service-fusion"),
        description: "More affordable FSM aimed at HVAC and plumbing teams that want solid dispatch and invoicing.",
        logoSrc: LOGOS.servicefusion,
      },
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Better fit for smaller home service shops that want strong customer communication.",
        logoSrc: LOGOS.housecallpro,
      },
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "All‑around FSM for small and mid‑size contractors who want simplicity and good workflows.",
        logoSrc: LOGOS.jobber,
      },
    ],
    faqs: [
      {
        q: "Who is ServiceTitan best for?",
        a: "ServiceTitan is best for larger or fast‑growing home service and trade companies with multiple crews and a busy call center. Smaller contractors usually do not need its full depth.",
      },
      {
        q: "How much does ServiceTitan cost?",
        a: "ServiceTitan is priced by custom quote. Expect higher per‑user and overall costs than SMB‑focused FSM tools, plus implementation and training expenses.",
      },
      {
        q: "Does ServiceTitan integrate with accounting systems?",
        a: "Yes. ServiceTitan integrates with major accounting platforms like QuickBooks so invoices and payments can sync with your general ledger.",
      },
      {
        q: "How does ServiceTitan compare to Service Fusion?",
        a: "ServiceTitan offers deeper reporting, call‑center tooling, and pricebook management; Service Fusion is simpler and more affordable for many HVAC and plumbing shops.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
      { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
    ],
    compareSectionTitle: "Compare ServiceTitan with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  "service-fusion": {
    toolName: "Service Fusion",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.4",
    startingPrice: "From ~$99/mo",
    bestFor: "HVAC and plumbing teams that want dispatch, jobs, and invoicing with strong trade‑specific workflows",
    visitUrl: "https://servicefusion.com",
    logoSrc: LOGOS.servicefusion,
    quickVerdict:
      "Service Fusion is a solid mid‑market FSM option for HVAC, plumbing, and similar trades that want robust dispatch and invoicing without going full enterprise.",
    quickVerdictParagraphs: [
      "Service Fusion targets HVAC, plumbing, and similar trades with a strong focus on scheduling, dispatch, and invoicing. The dispatch board and job workflows feel tailored to traditional service businesses—assigning techs, tracking job status, and generating estimates and invoices from the same screen.",
      "We like Service Fusion for teams that have outgrown basic scheduling apps but are not ready for the complexity and cost of ServiceTitan. You still get features like GPS tracking, service agreements, and decent reporting, but in a package that is easier to adopt for many mid‑size shops.",
      "Pricing sits above the very small‑team tools and below enterprise FSM. If you are primarily HVAC or plumbing and want something sturdy and trade‑focused, Service Fusion is worth a close look.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.5",
        explanation:
          "Scheduling, dispatch, GPS tracking, service agreements, estimates, invoices, and payment collection. Strong coverage for common HVAC and plumbing workflows.",
      },
      {
        category: "Pricing",
        score: "4.2",
        explanation:
          "Plans start around ~$99/month. More than entry‑level FSM but less than enterprise platforms. Good value for teams that can use its depth.",
      },
      {
        category: "Ease of Use",
        score: "4.3",
        explanation:
          "More complex than very small‑business tools, but still approachable for office staff and techs with a bit of training.",
      },
      {
        category: "Support",
        score: "4.3",
        explanation:
          "Trade‑focused support and onboarding. The company understands HVAC and plumbing workflows, which helps during rollout.",
      },
      {
        category: "Integrations",
        score: "4.3",
        explanation:
          "Integrates with accounting and payments plus a handful of other tools. Not as broad as enterprise ecosystems but sufficient for many shops.",
      },
    ],
    pros: [
      "Trade‑focused features for HVAC and plumbing",
      "Strong scheduling and dispatch board",
      "Service agreements and recurring jobs support",
      "More affordable than enterprise FSM like ServiceTitan",
    ],
    cons: [
      "Too much for very small teams",
      "Interface can feel busy compared with simpler tools",
      "Ecosystem and marketplace smaller than big‑name platforms",
    ],
    bestForEditorial:
      "Service Fusion is best for established HVAC and plumbing companies that have multiple techs on the road and need a more structured way to manage tickets, service agreements, and invoicing. It hits a middle ground between entry‑level FSM and full enterprise platforms.",
    whoShouldAvoid:
      "Solo operators or very small teams that mainly need simple scheduling and invoicing will be better off with lighter tools. Very large or multi‑branch operations that demand deep analytics and call‑center tooling might prefer ServiceTitan.",
    pricingSummary:
      "Service Fusion uses tiered plans starting around ~$99/month. You pay more than bare‑bones scheduling apps but less than full enterprise FSM. For mid‑size HVAC and plumbing teams, the pricing is often reasonable relative to the value.",
    pricingTiers:
      "Lower tiers cover core dispatch and invoicing for smaller teams. Upper tiers add advanced features such as GPS tracking, more automation, and possibly additional integrations. Confirm current packaging with Service Fusion’s sales team.",
    costVsCompetitors:
      "Compared with Jobber and Housecall Pro, Service Fusion is often similar or slightly higher in price but with more HVAC/plumbing‑specific capabilities. Compared with ServiceTitan, it is usually substantially cheaper but with less enterprise depth.",
    features: [],
    keyFeatures: [
      {
        name: "Dispatch and scheduling",
        description:
          "Dispatch board and calendars to assign jobs, manage busy seasons, and see which techs are available.",
      },
      {
        name: "Service agreements",
        description:
          "Contract and membership support for recurring maintenance visits, especially valuable in HVAC and plumbing.",
      },
      {
        name: "Estimates and invoices",
        description:
          "Create estimates, convert them to jobs, and generate invoices when work is complete—keeping the full job history in one system.",
      },
      {
        name: "GPS and technician tracking",
        description:
          "Optional GPS tracking helps you see where trucks are and make smarter dispatch and routing decisions.",
      },
    ],
    integrations: ["Accounting platforms", "Payment processors", "Basic communication tools"],
    integrationsIntro:
      "Service Fusion’s integrations center on getting accurate numbers into accounting and payments while letting you keep job workflows inside the FSM.",
    contractorUse: [
      "HVAC contractor using Service Fusion to manage maintenance agreements, schedule seasonal tune‑ups, and invoice work quickly.",
      "Plumbing shop tracking jobs, estimates, and invoices for multiple techs across a metro area.",
    ],
    alternatives: [
      {
        name: "ServiceTitan",
        href: getFieldServiceReviewUrl("servicetitan"),
        description: "Enterprise‑grade FSM with deeper analytics and call‑center tooling for larger operations.",
        logoSrc: LOGOS.servicetitan,
      },
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "All‑around FSM that is easier for many small and mid‑size teams to adopt.",
        logoSrc: LOGOS.jobber,
      },
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Home‑service‑focused FSM with strong customer communication and marketing features.",
        logoSrc: LOGOS.housecallpro,
      },
    ],
    faqs: [
      {
        q: "Is Service Fusion good for HVAC companies?",
        a: "Yes. Service Fusion is designed with HVAC and plumbing in mind, including dispatch, service agreements, and job workflows suited to those trades.",
      },
      {
        q: "How does Service Fusion pricing work?",
        a: "Pricing is tiered and starts around ~$99/month. Plans scale with users and features. Expect to pay more than for basic scheduling apps but less than for ServiceTitan.",
      },
      {
        q: "Service Fusion vs ServiceTitan: which is better?",
        a: "Service Fusion is typically better for mid‑size HVAC and plumbing shops that want strong FSM without enterprise overhead. ServiceTitan is better for larger operations that can fully use its advanced reporting and call‑center features.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
    ],
    compareSectionTitle: "Compare Service Fusion with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  workiz: {
    toolName: "Workiz",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.4",
    startingPrice: "From ~$29/mo",
    bestFor: "small field service teams and cleaning companies that want affordable scheduling and job management",
    visitUrl: "https://workiz.com",
    logoSrc: LOGOS.workiz,
    quickVerdict:
      "Workiz is a budget‑friendly FSM platform for small field service and cleaning teams that want solid scheduling, job tracking, and invoicing without heavy complexity.",
    quickVerdictParagraphs: [
      "Workiz appeals to smaller field service and cleaning businesses that want to get off spreadsheets and text‑message scheduling without jumping straight into a high‑priced FSM. It offers straightforward scheduling, job management, invoicing, and payments in a UI that most users can understand quickly.",
      "We like Workiz for its value: you get key FSM building blocks at a price point that is accessible for very small teams. The mobile app helps keep techs aligned, and online payments are available so you are not chasing paper checks.",
      "The tradeoff is that Workiz does not go as deep into enterprise features, memberships, or reporting as some competitors. For many small crews, that is a feature, not a bug—less to configure and maintain.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.3",
        explanation:
          "Core FSM features like scheduling, jobs, estimates, invoices, and payments. Enough for many small teams, but not as deep as enterprise platforms.",
      },
      {
        category: "Pricing",
        score: "4.5",
        explanation:
          "Entry pricing is lower than many competitors, making Workiz attractive for new and small businesses.",
      },
      {
        category: "Ease of Use",
        score: "4.5",
        explanation:
          "Intuitive interface that prioritizes simple scheduling and job workflows. Techs and office staff can usually get productive quickly.",
      },
      {
        category: "Support",
        score: "4.2",
        explanation:
          "Support and onboarding tailored to small service companies. Less white‑glove than enterprise tools but adequate for the target market.",
      },
      {
        category: "Integrations",
        score: "4.1",
        explanation:
          "Covers core accounting and payments. Ecosystem is narrower than larger vendors but typically enough for small teams.",
      },
    ],
    pros: [
      "Lower starting price than many FSM tools",
      "Simple scheduling and job management",
      "Good fit for cleaning and small field service teams",
      "Mobile app keeps crews on the same page",
    ],
    cons: [
      "Less depth in reporting and enterprise features",
      "Fewer advanced automations and integration options",
      "May be outgrown as operations become more complex",
    ],
    bestForEditorial:
      "Workiz is best for small field service teams—especially cleaning, junk removal, and similar businesses—that want to organize jobs, schedules, and invoicing without committing to a heavy tool. It is a good stepping stone off paper and spreadsheets.",
    whoShouldAvoid:
      "Larger contractors, or those planning to scale aggressively and add call‑center operations, may outgrow Workiz quickly and should look at Jobber, Housecall Pro, or ServiceTitan. Very feature‑hungry teams may find the platform limiting.",
    pricingSummary:
      "Workiz offers relatively low starting prices, making it approachable for small and early‑stage businesses. Plans scale with user count and features, so costs will rise as you add techs and capabilities.",
    pricingTiers:
      "Entry‑level plans focus on core scheduling and job management. Higher tiers add more features and capacity. Always check Workiz’s current pricing to confirm limits and inclusions.",
    costVsCompetitors:
      "Workiz is typically cheaper than Jobber, Housecall Pro, and Service Fusion at similar user counts, though those tools offer more depth. It is significantly cheaper than ServiceTitan.",
    features: [],
    keyFeatures: [
      {
        name: "Job scheduling",
        description:
          "Create and assign jobs on a calendar, adjust as things change, and keep techs informed.",
      },
      {
        name: "Job management and notes",
        description:
          "Track job status, store notes and photos, and see history so techs arrive prepared.",
      },
      {
        name: "Estimates and invoices",
        description:
          "Build estimates, convert accepted work into jobs, and send invoices efficiently.",
      },
      {
        name: "Payments",
        description:
          "Accept card payments and keep payment status tied to each job to reduce manual reconciliation.",
      },
    ],
    integrations: ["Accounting tools", "Payment processors", "Basic communication tools"],
    integrationsIntro:
      "Workiz focuses on making sure your revenue data lands in accounting and that customers can pay easily. For many small teams, that is the essential integration story.",
    contractorUse: [
      "Cleaning company using Workiz to schedule recurring weekly and monthly visits and keep track of which jobs have been invoiced.",
      "Small field service crew managing daily job routes and payments without needing a heavier FSM.",
    ],
    alternatives: [
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "More all‑around FSM with broader feature depth for growing teams.",
        logoSrc: LOGOS.jobber,
      },
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Home‑service‑focused FSM with stronger marketing and communication tools.",
        logoSrc: LOGOS.housecallpro,
      },
    ],
    faqs: [
      {
        q: "Is Workiz good for small businesses?",
        a: "Yes. Workiz is designed for small field service and cleaning businesses that want to modernize scheduling and invoicing without a big price tag.",
      },
      {
        q: "How does Workiz pricing compare to Jobber?",
        a: "Workiz generally starts at a lower price point than Jobber, but Jobber offers more depth in features and reporting. For very small teams, Workiz can be more budget‑friendly.",
      },
      {
        q: "Will I outgrow Workiz?",
        a: "If you plan to add many trucks, locations, or complex workflows, you may eventually outgrow Workiz and move to a more robust FSM. For many small teams, it is a good starting point.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    ],
    compareSectionTitle: "Compare Workiz with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  kickserv: {
    toolName: "Kickserv",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.3",
    startingPrice: "From ~$55/mo",
    bestFor: "small service businesses that want CRM‑style customer tracking and straightforward FSM",
    visitUrl: "https://www.kickserv.com",
    logoSrc: LOGOS.kickserv,
    quickVerdict:
      "Kickserv blends FSM with CRM‑style customer tracking, making it a good fit for small service businesses that care about client history as much as individual jobs.",
    quickVerdictParagraphs: [
      "Kickserv combines job scheduling and dispatch with CRM‑style customer records. You can see the full history of work, notes, and invoices per client, which is useful for repeat service businesses that want context before every visit.",
      "We like Kickserv for its balance of simplicity and customer‑centric workflows. It is not trying to be the biggest FSM platform; instead, it focuses on helping smaller teams manage relationships and jobs without drowning in complexity.",
      "Pricing is competitive for small businesses, and the platform is approachable. Some advanced enterprise features are missing, but that is acceptable for the target audience.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.2",
        explanation:
          "Job scheduling, dispatch, estimates, invoices, payments, and customer history. Enough for many small service companies, with an emphasis on client records.",
      },
      {
        category: "Pricing",
        score: "4.3",
        explanation:
          "Plans start around ~$55/month, positioning Kickserv as accessible for small teams that need more than a basic calendar.",
      },
      {
        category: "Ease of Use",
        score: "4.4",
        explanation:
          "Interface and workflows are straightforward for office staff and field techs. Some configuration required, but overall approachable.",
      },
      {
        category: "Support",
        score: "4.2",
        explanation:
          "Support and onboarding materials aimed at small service businesses. Not as white‑glove as enterprise platforms but sufficient.",
      },
      {
        category: "Integrations",
        score: "4.1",
        explanation:
          "Integrations focus on accounting and basic communication. Ecosystem is modest but covers typical small‑business needs.",
      },
    ],
    pros: [
      "Customer‑centric view with strong client history",
      "Simple job scheduling and dispatch",
      "Built for small service businesses and trades",
      "Pricing accessible for early‑stage teams",
    ],
    cons: [
      "Less depth in advanced FSM features",
      "Limited ecosystem compared with larger vendors",
      "May not scale as well for very large operations",
    ],
    bestForEditorial:
      "Kickserv is best for small service businesses—like HVAC, plumbing, cleaning, and general contractors—that want to keep detailed records per client and manage jobs in one place. It is especially appealing if you value CRM‑style views of customer relationships over heavy enterprise tooling.",
    whoShouldAvoid:
      "Very small teams that only need a calendar and basic invoicing might use an even simpler tool. Large or rapidly scaling companies that need deep analytics, call‑center tools, or complex pricebooks should look at Jobber, ServiceTitan, or other enterprise‑leaning FSM.",
    pricingSummary:
      "Kickserv’s pricing typically starts around ~$55/month, scaling with users and features. Costs are generally within reach for small and growing trades businesses.",
    pricingTiers:
      "Lower tiers focus on a small number of users and core FSM features. Higher tiers may add more capacity and integrations. Always check Kickserv’s pricing page for current details.",
    costVsCompetitors:
      "Kickserv is often cheaper than Jobber for very small teams and cheaper than ServiceTitan by a wide margin, while offering more FSM depth than a simple calendar and invoicing app.",
    features: [],
    keyFeatures: [
      {
        name: "Customer records",
        description:
          "View full history of jobs, notes, and invoices per client, helping techs and office staff know what has been done before every visit.",
      },
      {
        name: "Job scheduling and dispatch",
        description:
          "Create jobs, schedule them, and dispatch techs from an organized calendar and job board.",
      },
      {
        name: "Estimates and invoices",
        description:
          "Turn estimates into jobs and jobs into invoices without duplicate data entry, keeping your workflow consistent.",
      },
      {
        name: "Payments",
        description:
          "Collect payments and keep records tied to each client and job, simplifying reconciliation.",
      },
    ],
    integrations: ["Popular accounting tools", "Payment processors"],
    integrationsIntro:
      "Kickserv integrates with accounting and payments so revenue flows cleanly into your books while keeping all job‑level context in one place.",
    contractorUse: [
      "Small HVAC business tracking system history and invoices per homeowner.",
      "Cleaning service keeping detailed records for recurring clients and their preferences.",
    ],
    alternatives: [
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "More feature‑rich FSM with broader reporting and automation.",
        logoSrc: LOGOS.jobber,
      },
      {
        name: "Workiz",
        href: getFieldServiceReviewUrl("workiz"),
        description: "Budget‑friendly FSM for small teams that care more about basic scheduling than CRM depth.",
        logoSrc: LOGOS.workiz,
      },
    ],
    faqs: [
      {
        q: "Is Kickserv good for small service businesses?",
        a: "Yes. Kickserv is designed for small service businesses that want CRM‑style customer tracking plus scheduling and invoicing.",
      },
      {
        q: "How does Kickserv compare to Jobber?",
        a: "Kickserv leans into customer records and keeps costs accessible, while Jobber offers more depth in workflows and reporting. The right choice depends on your size and growth plans.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Kickserv vs Jobber", href: getFieldServiceCompareUrl("kickserv-vs-jobber") },
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    ],
    compareSectionTitle: "Compare Kickserv with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  servicem8: {
    toolName: "ServiceM8",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.3",
    startingPrice: "From ~$29/mo",
    bestFor: "mobile‑first field service teams that want a modern app experience and simple office workflows",
    visitUrl: "https://www.servicem8.com",
    logoSrc: LOGOS.servicem8,
    quickVerdict:
      "ServiceM8 is a mobile‑first FSM platform that works especially well for small, tech‑savvy teams that want to run most of the business from phones and tablets.",
    quickVerdictParagraphs: [
      "ServiceM8 stands out for its polished mobile app experience. Techs can see jobs, capture photos, complete checklists, and generate invoices directly from their devices. The office side is lighter than some competitors, but that is part of the appeal for small, mobile‑centric teams.",
      "We like ServiceM8 for businesses that want a modern, app‑driven workflow and do not need as much back‑office heaviness. The product fits especially well in regions where ServiceM8 has a strong user base and partner ecosystem.",
      "As with other lightweight FSM tools, the tradeoff is less depth in enterprise reporting, call‑center tooling, and complex pricebooks. For many small trades businesses, that is an acceptable compromise.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.2",
        explanation:
          "Scheduling, job management, checklists, photos, invoicing, and payments with a strong mobile focus. Covers the basics well for many small teams.",
      },
      {
        category: "Pricing",
        score: "4.4",
        explanation:
          "Lower starting price than heavy FSM platforms, making ServiceM8 attractive for early‑stage and small businesses.",
      },
      {
        category: "Ease of Use",
        score: "4.5",
        explanation:
          "Intuitive mobile app and straightforward workflows. Some configuration required, but generally easy to learn.",
      },
      {
        category: "Support",
        score: "4.1",
        explanation:
          "Support and partner network with a stronger presence in some regions than others. Check availability in your market.",
      },
      {
        category: "Integrations",
        score: "4.1",
        explanation:
          "Integrations focus on accounting and payments. Ecosystem is not as broad as the largest vendors but adequate for many small teams.",
      },
    ],
    pros: [
      "Excellent mobile experience for techs",
      "Simple scheduling and job workflows",
      "Lower starting price than heavy FSM",
      "Good fit for tech‑savvy small teams",
    ],
    cons: [
      "Less depth in back‑office and reporting features",
      "Partner and support network stronger in some regions than others",
      "Not ideal for very large or highly complex operations",
    ],
    bestForEditorial:
      "ServiceM8 is best for small, mobile‑first field service teams—such as electricians, plumbers, cleaners, and general contractors—that want an app‑centric way to manage jobs and invoices. If your team lives on their phones, it is worth a look.",
    whoShouldAvoid:
      "Larger teams with heavier reporting needs or complex call‑center operations may want more robust FSM such as Jobber, Housecall Pro, or ServiceTitan.",
    pricingSummary:
      "ServiceM8 uses tiered pricing with lower entry‑level costs than many FSM tools. It is designed to be affordable for small teams, with prices scaling as you add jobs and features.",
    pricingTiers:
      "Lower tiers limit job volume and features, while higher tiers add capacity and more advanced capabilities. Always check the latest pricing and tier details on ServiceM8’s site.",
    costVsCompetitors:
      "ServiceM8 is generally cheaper than Jobber, Service Fusion, and ServiceTitan at similar usage levels, particularly for very small teams. The tradeoff is lighter back‑office functionality.",
    features: [],
    keyFeatures: [
      {
        name: "Mobile job management",
        description:
          "Techs see their schedule, job details, and checklists on their phones and can update jobs in real time.",
      },
      {
        name: "Photos and documentation",
        description:
          "Capture and store photos and notes per job from the field to maintain a clear record of work.",
      },
      {
        name: "Invoicing from the field",
        description:
          "Generate and send invoices directly from completed jobs while still onsite, speeding up cash collection.",
      },
    ],
    integrations: ["Accounting platforms", "Payment processors"],
    integrationsIntro:
      "ServiceM8 integrates with accounting and payments so you can keep books accurate while running most job workflows from the app.",
    contractorUse: [
      "Electrical contractor using ServiceM8 to assign jobs, capture photos, and invoice customers on the spot.",
      "Cleaning business running day‑to‑day operations almost entirely from mobile devices.",
    ],
    alternatives: [
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "Broader FSM feature set for teams that need more reporting and back‑office tools.",
        logoSrc: LOGOS.jobber,
      },
      {
        name: "Workiz",
        href: getFieldServiceReviewUrl("workiz"),
        description: "Affordable FSM with a focus on simple scheduling for small teams.",
        logoSrc: LOGOS.workiz,
      },
    ],
    faqs: [
      {
        q: "Is ServiceM8 mobile‑only?",
        a: "ServiceM8 is mobile‑first, but there is also a web interface for office staff. Many teams run most workflows from the mobile app.",
      },
      {
        q: "How does ServiceM8 pricing compare to Jobber?",
        a: "ServiceM8 typically starts at a lower price point than Jobber, but Jobber offers more depth in reporting and back‑office features. For very small teams, ServiceM8 can be cheaper.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
    ],
    compareSectionTitle: "Compare ServiceM8 with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  fieldedge: {
    toolName: "FieldEdge",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.3",
    startingPrice: "Custom pricing",
    bestFor: "HVAC and plumbing companies that want FSM built specifically for those trades",
    visitUrl: "https://fieldedge.com",
    logoSrc: LOGOS.fieldedge,
    quickVerdict:
      "FieldEdge is a trade‑specific FSM platform focused on HVAC and plumbing companies that want deep support for service agreements, dispatch, and job costing.",
    quickVerdictParagraphs: [
      "FieldEdge specializes in HVAC and plumbing, with features tuned to how those trades run service calls, maintenance agreements, and installs. It offers dispatch, job management, service agreements, and solid reporting designed with those businesses in mind.",
      "We like FieldEdge for contractors who want a vendor that truly understands HVAC and plumbing workflows and terminology. The platform is more focused than general FSM tools, which can make implementation smoother when you match its ideal customer profile.",
      "Pricing is custom and typically sits in the mid‑to‑higher range of the FSM market. If you are an HVAC or plumbing company evaluating FSM platforms, FieldEdge is worth including alongside ServiceTitan and Service Fusion.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.4",
        explanation:
          "Dispatch, service agreements, job management, and reporting tuned for HVAC and plumbing. Strong coverage for recurring maintenance and installs.",
      },
      {
        category: "Pricing",
        score: "4.0",
        explanation:
          "Custom quotes with pricing typically above entry‑level tools and comparable to other mid‑to‑high‑end FSM.",
      },
      {
        category: "Ease of Use",
        score: "4.2",
        explanation:
          "Trade‑focused UI that matches HVAC and plumbing workflows. More complex than very small‑team tools, but understandable for established shops.",
      },
      {
        category: "Support",
        score: "4.3",
        explanation:
          "Support and onboarding from a vendor that focuses on HVAC and plumbing. Industry‑specific expertise is a plus.",
      },
      {
        category: "Integrations",
        score: "4.2",
        explanation:
          "Integrates with accounting and payments, with additional trade‑friendly integrations. Ecosystem smaller than enterprise vendors but suited to target customers.",
      },
    ],
    pros: [
      "Built specifically for HVAC and plumbing",
      "Strong support for service agreements and recurring maintenance",
      "Trade‑focused dispatch and job workflows",
      "Reporting aligned with how HVAC and plumbing shops measure performance",
    ],
    cons: [
      "Custom pricing can be a barrier for smaller shops",
      "Less flexible for non‑HVAC/plumbing trades",
      "May be too heavy for very small teams",
    ],
    bestForEditorial:
      "FieldEdge is best for established HVAC and plumbing companies that want FSM designed specifically around their trade’s needs—especially service agreements, maintenance plans, and installs.",
    whoShouldAvoid:
      "Non‑HVAC/plumbing contractors, very small teams, or businesses that want a more general‑purpose FSM may be better served by Jobber, Housecall Pro, or Workiz.",
    pricingSummary:
      "FieldEdge uses custom pricing, generally in the mid‑to‑higher tier of the FSM market. It is often a fit for companies that have already grown to multiple crews and want stronger process control and reporting.",
    pricingTiers:
      "Details vary by contract; expect pricing to depend on user count, modules, and service levels. Request a quote from FieldEdge for specifics.",
    costVsCompetitors:
      "FieldEdge will generally cost more than entry‑level tools and be competitive with mid‑market and enterprise FSM. The primary question is fit, not just price—whether its HVAC/plumbing focus matches your business.",
    features: [],
    keyFeatures: [
      {
        name: "Trade‑specific dispatch",
        description:
          "Dispatch and scheduling tuned to HVAC and plumbing service call patterns and seasons.",
      },
      {
        name: "Service agreements",
        description:
          "Support for maintenance plans and contracts, helping you build steady recurring revenue.",
      },
      {
        name: "Job management and costing",
        description:
          "Track labor and materials per job to understand profitability and performance at a detailed level.",
      },
    ],
    integrations: ["Accounting systems", "Payment processors"],
    integrationsIntro:
      "FieldEdge integrates with accounting and payments so your financials reflect the detailed work you manage in the FSM.",
    contractorUse: [
      "HVAC company managing thousands of maintenance agreements and seasonal tune‑ups through FieldEdge.",
      "Plumbing contractor analyzing job profitability and technician performance using trade‑specific reports.",
    ],
    alternatives: [
      {
        name: "ServiceTitan",
        href: getFieldServiceReviewUrl("servicetitan"),
        description: "Broader enterprise FSM with deeper analytics and call‑center capabilities.",
        logoSrc: LOGOS.servicetitan,
      },
      {
        name: "Service Fusion",
        href: getFieldServiceReviewUrl("service-fusion"),
        description: "Mid‑market FSM option with strong HVAC/plumbing support at lower cost.",
        logoSrc: LOGOS.servicefusion,
      },
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "General‑purpose FSM for a wide range of trades and team sizes.",
        logoSrc: LOGOS.jobber,
      },
    ],
    faqs: [
      {
        q: "Is FieldEdge only for HVAC?",
        a: "FieldEdge is focused on HVAC and plumbing, though other service trades may also use it. Its features and workflows are tuned heavily to those industries.",
      },
      {
        q: "How does FieldEdge compare to ServiceTitan?",
        a: "Both target HVAC and plumbing, but ServiceTitan is broader and more enterprise‑oriented. FieldEdge is often a better fit for contractors that want trade‑specific FSM without the full weight of an enterprise platform.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
    ],
    compareSectionTitle: "Compare FieldEdge with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },

  mhelpdesk: {
    toolName: "mHelpDesk",
    category: "Field service management",
    categoryHref: FIELD_SERVICE_HUB,
    rating: "4.2",
    startingPrice: "From ~$49/mo",
    bestFor: "contractors and technicians that want established FSM with job tracking and invoicing",
    visitUrl: "https://www.mhelpdesk.com",
    logoSrc: LOGOS.mhelpdesk,
    quickVerdict:
      "mHelpDesk is an established FSM platform that gives contractors the core tools to track jobs, schedule crews, and get invoices out the door.",
    quickVerdictParagraphs: [
      "mHelpDesk has been in the FSM market for years, serving contractors and technicians with scheduling, job tracking, invoicing, and payments. It is a mature product that covers the basics well and has a track record with service businesses.",
      "We see mHelpDesk as a solid, if less flashy, option for contractors who want a proven system and are not chasing the very latest UI trends. It handles the core operational workflows contractors care about and integrates with accounting and payments.",
      "Pricing is mid‑range, and the platform’s age means you should evaluate the current interface and roadmap to make sure it aligns with where your business is headed.",
    ],
    ratingBreakdown: [
      {
        category: "Features",
        score: "4.2",
        explanation:
          "Scheduling, job tracking, invoicing, and payments plus some additional FSM features. Solid coverage for many contractors.",
      },
      {
        category: "Pricing",
        score: "4.1",
        explanation:
          "Mid‑range pricing that reflects its position as an established FSM vendor rather than a budget or enterprise tool.",
      },
      {
        category: "Ease of Use",
        score: "4.1",
        explanation:
          "Learnable for office staff and techs, though the interface feels more traditional than some newer tools.",
      },
      {
        category: "Support",
        score: "4.2",
        explanation:
          "Support and onboarding from a vendor that has worked with contractors for many years.",
      },
      {
        category: "Integrations",
        score: "4.1",
        explanation:
          "Integrates with accounting and payments and some additional tools. Ecosystem is not as large as newer, high‑growth vendors but covers essentials.",
      },
    ],
    pros: [
      "Mature FSM platform with a long track record",
      "Handles core jobs, scheduling, and invoicing needs",
      "Integrates with accounting and payments",
      "Familiar workflows for many contractors",
    ],
    cons: [
      "Interface feels more traditional than newer tools",
      "Less marketing buzz and ecosystem than fast‑growing competitors",
      "May not innovate as quickly as newer entrants",
    ],
    bestForEditorial:
      "mHelpDesk is best for contractors and service businesses that want a proven FSM product to manage jobs, crews, and invoicing without chasing the latest platform. It fits teams that value stability and core functionality over bleeding‑edge features.",
    whoShouldAvoid:
      "Contractors that want the most modern UI, heavy marketing tools, or deep enterprise analytics may find more excitement in platforms like Jobber, Housecall Pro, or ServiceTitan.",
    pricingSummary:
      "mHelpDesk pricing generally starts around the mid‑range for FSM tools, with costs scaling as you add users and features. It is neither the cheapest nor the most expensive option, which can be comfortable for established businesses.",
    pricingTiers:
      "Tiered plans scale with users and feature sets. Check with mHelpDesk for the latest packaging and any add‑on costs.",
    costVsCompetitors:
      "mHelpDesk is typically priced similarly to other mid‑market FSM tools. The key comparison points are its maturity and feature mix rather than a dramatic price advantage.",
    features: [],
    keyFeatures: [
      {
        name: "Job tracking",
        description:
          "Track jobs from initial request through scheduling, completion, and invoicing so nothing falls through the cracks.",
      },
      {
        name: "Scheduling and dispatch",
        description:
          "Assign crews to jobs, manage calendars, and keep the field and office on the same page.",
      },
      {
        name: "Invoicing and payments",
        description:
          "Generate invoices from completed jobs and collect payments, tying revenue directly back to work performed.",
      },
    ],
    integrations: ["Accounting tools", "Payment processors"],
    integrationsIntro:
      "mHelpDesk integrates with accounting and payments so your financial systems reflect the work you manage inside the FSM.",
    contractorUse: [
      "Contractor using mHelpDesk to manage a consistent volume of service calls and ensure every completed job is invoiced promptly.",
    ],
    alternatives: [
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "Modern all‑in‑one FSM with strong workflows and reporting.",
        logoSrc: LOGOS.jobber,
      },
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Home‑service‑focused FSM with more emphasis on marketing and customer communication.",
        logoSrc: LOGOS.housecallpro,
      },
      {
        name: "Service Fusion",
        href: getFieldServiceReviewUrl("service-fusion"),
        description: "Mid‑market FSM with trade‑specific focus, often at competitive prices.",
        logoSrc: LOGOS.servicefusion,
      },
    ],
    faqs: [
      {
        q: "Is mHelpDesk still a good FSM option?",
        a: "Yes. mHelpDesk remains a viable FSM option for contractors that want a proven platform for jobs, scheduling, and invoicing. Evaluate its current interface and roadmap alongside newer tools to decide if it fits your needs.",
      },
      {
        q: "How does mHelpDesk compare to newer tools like Jobber?",
        a: "Jobber offers a more modern UI and faster product velocity, while mHelpDesk provides a mature, established platform. The right choice depends on how much you value cutting‑edge features versus stability and familiarity.",
      },
    ],
    methodology: FIELD_SERVICE_METHODOLOGY,
    compareLinks: [
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
      { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
    ],
    compareSectionTitle: "Compare mHelpDesk with other field service software",
    bestPayrollSoftwareHref: FIELD_SERVICE_BEST_SOFTWARE,
    compareHubHref: FIELD_SERVICE_COMPARE_HUB,
    compareHubLabel: "Compare field service software",
    bestRoundupLabel: "Best field service management software (2026) — full roundup",
    bestForSectionTitle: "Best field service software for different use cases",
    bestForSectionSub: "Find FSM tools by trade and scenario.",
    scenarioLinks: FIELD_SERVICE_SCENARIO_LINKS,
    guideHubHref: FIELD_SERVICE_GUIDES_HUB,
    guideHubLabel: "Field service guides",
    relatedReading: [
      { label: "Field service software hub", href: FIELD_SERVICE_HUB },
      { label: "Best field service management software", href: FIELD_SERVICE_BEST_SOFTWARE },
      { label: "Compare field service software", href: FIELD_SERVICE_COMPARE_HUB },
      { label: "Field service guides", href: FIELD_SERVICE_GUIDES_HUB },
    ],
  },
};

export function getFieldServiceReviewBySlug(slug: string): FieldServiceReviewData | null {
  return reviews[slug] ?? null;
}

export function getFieldServiceReviewSlugs(): string[] {
  return Object.keys(reviews);
}

