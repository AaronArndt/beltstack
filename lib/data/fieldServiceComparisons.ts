import { getFieldServiceReviewUrl, getFieldServiceBestForUrl, getFieldServiceCompareUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getFieldServiceCompareUrlFromSlug(slug: string): string {
  return `/field-service/compare/${slug}`;
}

/** Product refs for field service comparisons — reuse for consistent review links and logos */
const P = {
  jobber: {
    name: "Jobber",
    slug: "jobber",
    reviewHref: getFieldServiceReviewUrl("jobber"),
    logoSrc: "/Logos/jobber.png",
    visitUrl: "https://getjobber.com",
    bestForSummary: "Best overall for many contractors and home service teams.",
    rating: "4.6",
    startingPrice: "From ~$69/mo",
  },
  "housecall-pro": {
    name: "Housecall Pro",
    slug: "housecall-pro",
    reviewHref: getFieldServiceReviewUrl("housecall-pro"),
    logoSrc: "/Logos/housecallpro.jpeg",
    visitUrl: "https://housecallpro.com",
    bestForSummary: "Home service pros that care about customer experience and marketing.",
    rating: "4.5",
    startingPrice: "From ~$49/mo",
  },
  servicetitan: {
    name: "ServiceTitan",
    slug: "servicetitan",
    reviewHref: getFieldServiceReviewUrl("servicetitan"),
    logoSrc: "/Logos/servicetitan.png",
    visitUrl: "https://servicetitan.com",
    bestForSummary: "Larger, more operationally mature service companies.",
    rating: "4.5",
    startingPrice: "Custom pricing",
  },
  "service-fusion": {
    name: "Service Fusion",
    slug: "service-fusion",
    reviewHref: getFieldServiceReviewUrl("service-fusion"),
    logoSrc: "/Logos/servicefusion.jpg",
    visitUrl: "https://servicefusion.com",
    bestForSummary: "Value-focused FSM for HVAC and plumbing teams.",
    rating: "4.4",
    startingPrice: "From ~$99/mo",
  },
  workiz: {
    name: "Workiz",
    slug: "workiz",
    reviewHref: getFieldServiceReviewUrl("workiz"),
    logoSrc: "/Logos/workiz.jpeg",
    visitUrl: "https://workiz.com",
    bestForSummary: "Smaller field teams that want dispatch and communication tools.",
    rating: "4.4",
    startingPrice: "From ~$29/mo",
  },
  kickserv: {
    name: "Kickserv",
    slug: "kickserv",
    reviewHref: getFieldServiceReviewUrl("kickserv"),
    logoSrc: "/Logos/kickserv.jpeg",
    visitUrl: "https://www.kickserv.com",
    bestForSummary: "Smaller service businesses that want CRM-style customer tracking.",
    rating: "4.3",
    startingPrice: "From ~$55/mo",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for plumbing", href: getFieldServiceBestForUrl("plumbing") },
  { label: "Best for HVAC", href: getFieldServiceBestForUrl("hvac") },
  { label: "Best for electricians", href: getFieldServiceBestForUrl("electricians") },
  { label: "Best for small business", href: getFieldServiceBestForUrl("small-business") },
  { label: "Best for contractors", href: getFieldServiceBestForUrl("contractors") },
];

function buildComparison(
  slug: string,
  productAKey: keyof typeof P,
  productBKey: keyof typeof P,
  content: Omit<ComparisonTemplateProps, "productA" | "productB" | "categoryHref" | "categoryLabel">
): [string, ComparisonTemplateProps] {
  return [
    slug,
    {
      ...content,
      productA: P[productAKey],
      productB: P[productBKey],
      categoryHref: "/field-service",
      categoryLabel: "Field service",
    },
  ];
}

const BASE_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  {
    feature: "Scheduling & dispatch",
    productA: "Calendar and dispatch board",
    productB: "Calendar and dispatch board",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Mobile app for technicians",
    productA: "iOS and Android apps for field teams",
    productB: "iOS and Android apps for field teams",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Estimates & invoicing",
    productA: "Create estimates and invoices from jobs",
    productB: "Create estimates and invoices from jobs",
    supportA: "supported",
    supportB: "supported",
  },
  {
    feature: "Online payments",
    productA: "Cards/online payments",
    productB: "Cards/online payments",
    supportA: "supported",
    supportB: "supported",
  },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // Jobber vs Housecall Pro
  buildComparison("jobber-vs-housecall-pro", "jobber", "housecall-pro", {
    summaryParagraph:
      "Jobber and Housecall Pro are two of the most popular field service tools for contractors and home service companies. Both cover scheduling, dispatch, estimates, invoicing, and payments—but they take slightly different angles on customer experience and operations.",
    quickRecommendationA:
      "Choose Jobber if you want the most balanced all-in-one FSM for small and mid-size contractors, with strong job workflows and reporting.",
    quickRecommendationB:
      "Choose Housecall Pro if you primarily serve homeowners and care most about customer experience, communication, and built-in marketing tools.",
    quickVerdictParagraphs: [
      "Jobber is our default recommendation for many contractors: it balances ease of use, job workflows, and reporting in a way that fits a wide range of trades. Quotes, jobs, scheduling, and invoicing all live in one place, and the experience is consistent whether you are running HVAC, plumbing, landscaping, or general contracting crews.",
      "Housecall Pro leans harder into home-service-specific experience. Automated customer notifications, online booking, review requests, and postcard/email campaigns make it particularly attractive if most of your work is residential service and you rely heavily on repeat customers.",
      "If you want a generalist FSM that can grow with many different trade types, Jobber is usually the safer long-term bet. If most of your work is residential and you want marketing and customer communication baked in, Housecall Pro can be the better fit.",
    ],
    decisionGuideA: [
      "You run a mix of trades (HVAC, plumbing, electrical, landscaping, etc.) and want one system that works well across them.",
      "You value clear workflows for quotes → jobs → invoices and straightforward reporting on jobs and technicians.",
      "You want an FSM that scales comfortably from a few trucks to a larger crew without feeling heavyweight.",
    ],
    decisionGuideB: [
      "You primarily serve homeowners and want tools for online booking, reminders, and review generation.",
      "You care a lot about customer experience and keeping residential clients coming back season after season.",
      "You want built-in marketing (postcards, email campaigns) alongside your scheduling and jobs.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.7", productB: "4.6" },
      { category: "Customer communication", productA: "4.4", productB: "4.7" },
      { category: "Reporting & analytics", productA: "4.4", productB: "4.2" },
      { category: "Pricing & value", productA: "4.4", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Customer communication",
        productA: "Texts, emails, and reminders",
        productB: "Texts, emails, on-my-way, and review requests",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Marketing tools",
        productA: "Basic follow-up options",
        productB: "Postcards, email campaigns, and review automation",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Reporting",
        productA: "Job, revenue, and technician reporting",
        productB: "Operational reporting with lighter analytics",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Jobber and Housecall Pro both use tiered pricing based on seats and features. Entry-level plans for both are within reach for smaller crews, with costs increasing as you add technicians and more advanced capabilities like automations, marketing, and deeper reporting. In most scenarios, overall cost is similar—it’s more about which workflow and feature emphasis you prefer.",
    prosConsA: {
      pros: [
        "Strong end-to-end workflow for quotes, jobs, and invoices.",
        "Good reporting and visibility into schedule and revenue.",
        "Fits a wide range of trades and team sizes.",
      ],
      cons: [
        "Marketing tools are lighter than Housecall Pro’s.",
        "Pricing can feel high for very small or seasonal teams.",
      ],
    },
    prosConsB: {
      pros: [
        "Excellent customer communication and residential focus.",
        "Built-in marketing tools (postcards, email, reviews).",
        "Popular with HVAC, plumbing, and other home-service pros.",
      ],
      cons: [
        "Less of a generalist fit for non-home-service trades.",
        "Reporting and analytics are shallower than some competitors.",
      ],
    },
    bestFor: [
      {
        heading: "Best for mixed-trade service businesses",
        body: "Jobber is best if you run multiple trades or want an FSM that can adapt as your service mix and crew size change over time.",
      },
      {
        heading: "Best for home-service-focused contractors",
        body: "Housecall Pro is best if you primarily serve homeowners and want customer communication and marketing built into your FSM.",
      },
    ],
    alternatives: [
      {
        name: "ServiceTitan",
        href: getFieldServiceReviewUrl("servicetitan"),
        description: "Enterprise FSM for larger, more complex operations.",
      },
      {
        name: "Workiz",
        href: getFieldServiceReviewUrl("workiz"),
        description: "Budget-friendly FSM for small field teams and cleaning businesses.",
      },
    ],
    faqs: [
      {
        q: "Is Jobber or Housecall Pro better for HVAC companies?",
        a: "Both can work well for HVAC; Jobber is better if you want more general reporting and flexibility across trades, while Housecall Pro is better if your focus is residential customers and marketing.",
      },
      {
        q: "Which is cheaper: Jobber or Housecall Pro?",
        a: "Pricing is broadly similar at common crew sizes. The bigger decision is whether you value Jobber’s generalist workflows and reporting or Housecall Pro’s home-service and marketing focus.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for most contractors overall", winner: "A" },
      { label: "Winner for home service marketing", winner: "B" },
    ],
    moreComparisons: [
      { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
      { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best overall for many contractors",
        winner: "A",
        reason: "Jobber balances workflows, reporting, and pricing for a wide range of trade businesses.",
      },
      {
        label: "Best for home-service marketing",
        winner: "B",
        reason: "Housecall Pro leans into customer communication and marketing for residential work.",
      },
    ],
  }),

  // Housecall Pro vs ServiceTitan
  buildComparison("housecall-pro-vs-servicetitan", "housecall-pro", "servicetitan", {
    summaryParagraph:
      "Housecall Pro and ServiceTitan both target service contractors, but they serve different stages of growth. Housecall Pro fits small and mid-size home service businesses; ServiceTitan is designed for larger, operationally mature companies.",
    quickRecommendationA:
      "Choose Housecall Pro if you run a small or mid-size home service shop and want easier setup, strong customer communication, and marketing without enterprise complexity.",
    quickRecommendationB:
      "Choose ServiceTitan if you have many trucks, a busy call center, and managers who want deep reporting, pricebooks, and membership analytics.",
    quickVerdictParagraphs: [
      "Housecall Pro is built for everyday home service operations: scheduling, dispatch, job management, customer communication, and marketing that helps you keep the calendar full. It is easy to get running and keeps complexity in check for smaller teams.",
      "ServiceTitan is on another level in terms of depth. It layers CRM, call-center tools, pricebooks, memberships, financing, and detailed reporting into one platform. That makes it powerful for larger operations—but also more demanding to implement and pay for.",
      "If you are running a handful to a few dozen trucks, Housecall Pro is usually plenty. If you are running many crews across locations and want to manage everything by metrics, ServiceTitan is the stronger (but heavier) choice.",
    ],
    decisionGuideA: [
      "You are a small or mid-size shop primarily doing residential or light commercial service.",
      "You want an all-in-one operational tool that does not require a massive implementation.",
      "You care about customer communication and marketing but do not need deep enterprise analytics.",
    ],
    decisionGuideB: [
      "You run many trucks and locations with a staffed call center.",
      "You want to track calls, close rates, memberships, and revenue per tech in detail.",
      "You are ready for a larger software investment and a structured rollout project.",
    ],
    ratingsComparison: [
      { category: "Ease of implementation", productA: "4.6", productB: "3.8" },
      { category: "Call-center & CRM depth", productA: "4.0", productB: "4.8" },
      { category: "Reporting & analytics", productA: "4.1", productB: "4.8" },
      { category: "Pricing for small teams", productA: "4.5", productB: "3.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Call-center tools",
        productA: "Call handling with lighter analytics",
        productB: "Full call-center with detailed tracking",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Memberships & pricebooks",
        productA: "Service plans with lighter analytics",
        productB: "Deep membership and pricebook controls",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
      {
        feature: "Implementation complexity",
        productA: "Quick start for small teams",
        productB: "Formal implementation project",
        supportA: "supported",
        supportB: "supported",
        stronger: "A",
      },
    ],
    pricingComparison:
      "Housecall Pro uses published, tiered pricing that is accessible to small and mid-size contractors. ServiceTitan uses custom quotes and typically costs significantly more per user and overall. For most smaller teams, ServiceTitan’s ROI only makes sense once you reach a higher level of operational maturity and volume.",
    prosConsA: {
      pros: [
        "Approachable for small and mid-size home service businesses.",
        "Strong customer communication and marketing features.",
        "Transparent, published pricing.",
      ],
      cons: [
        "Less depth in call-center tooling and memberships than ServiceTitan.",
        "Reporting is solid but not enterprise-level.",
      ],
    },
    prosConsB: {
      pros: [
        "Enterprise-grade platform with deep reporting and analytics.",
        "Strong call-center, pricebook, and membership capabilities.",
        "Built to scale across many trucks and locations.",
      ],
      cons: [
        "Significantly more expensive than SMB FSM tools.",
        "Implementation requires more time and dedicated attention.",
      ],
    },
    bestFor: [
      {
        heading: "Best for small and mid-size home service teams",
        body: "Housecall Pro is best for contractors that want a strong all-in-one operational tool without enterprise overhead.",
      },
      {
        heading: "Best for large, metrics-driven operations",
        body: "ServiceTitan is best for companies that manage many trucks, track metrics closely, and are ready to invest in a deep platform.",
      },
    ],
    alternatives: [
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "Balanced FSM for a wide range of trades and team sizes.",
      },
      {
        name: "Service Fusion",
        href: getFieldServiceReviewUrl("service-fusion"),
        description: "Mid-market FSM targeted at HVAC and plumbing teams.",
      },
    ],
    faqs: [
      {
        q: "When should I upgrade from Housecall Pro to ServiceTitan?",
        a: "Consider ServiceTitan when you have many trucks, a staffed call center, and managers who want deep reporting and control over pricebooks and memberships—and you are willing to invest in implementation.",
      },
      {
        q: "Is ServiceTitan overkill for small contractors?",
        a: "For most small contractors, yes. Unless you have high volume and complex operations, tools like Housecall Pro or Jobber are easier to run and more cost-effective.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for small & mid-size teams", winner: "A" },
      { label: "Winner for large operations", winner: "B" },
    ],
    moreComparisons: [
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
      { label: "ServiceTitan vs Service Fusion", href: getFieldServiceCompareUrl("servicetitan-vs-service-fusion") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best for most home service contractors",
        winner: "A",
        reason: "Housecall Pro is easier to adopt and pay for at common crew sizes.",
      },
      {
        label: "Best for scaling and analytics",
        winner: "B",
        reason: "ServiceTitan gives larger operations deeper insights and controls.",
      },
    ],
  }),

  // Jobber vs Workiz
  buildComparison("jobber-vs-workiz", "jobber", "workiz", {
    summaryParagraph:
      "Jobber and Workiz both help field service teams schedule jobs, dispatch techs, and get paid. Jobber is the more full-featured platform; Workiz is a budget-friendly option for small crews.",
    quickRecommendationA:
      "Choose Jobber if you want a more complete FSM that can grow with your business and support more complex workflows over time.",
    quickRecommendationB:
      "Choose Workiz if you run a small team and primarily want affordable scheduling, dispatch, and basic job management.",
    quickVerdictParagraphs: [
      "Jobber offers deeper features, stronger reporting, and broader trade fit. It is built to support contractors as they add more trucks, trades, and processes, without jumping immediately to enterprise pricing or complexity.",
      "Workiz focuses on giving small teams the scheduling and job management tools they need at a lower price point. It is easier to justify early on in the business, especially for cleaning and light field service.",
      "If you expect to stay small for a while and want to minimize spend, Workiz is compelling. If you plan to grow or want more stable long-term tooling, Jobber is a safer investment.",
    ],
    decisionGuideA: [
      "You plan to grow your crew or expand into additional trades.",
      "You want more robust reporting and all-in-one workflows.",
      "You’re okay paying more for a richer platform.",
    ],
    decisionGuideB: [
      "You are cost-sensitive and want a lower starting price.",
      "You run a small field or cleaning team and mainly need scheduling and invoicing.",
      "You value simplicity over having every possible FSM feature.",
    ],
    ratingsComparison: [
      { category: "Feature depth", productA: "4.7", productB: "4.1" },
      { category: "Pricing for very small teams", productA: "4.1", productB: "4.6" },
      { category: "Ease of use", productA: "4.7", productB: "4.5" },
      { category: "Reporting & analytics", productA: "4.4", productB: "4.0" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Reporting",
        productA: "Stronger job and revenue reporting",
        productB: "Lighter reporting for small teams",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Pricing",
        productA: "Mid-range for SMB FSM",
        productB: "Budget-friendly entry pricing",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Workiz generally starts cheaper than Jobber at small crew sizes, while Jobber’s pricing reflects its broader feature set and scalability. Over time, the difference comes down to whether you will use Jobber’s extra capabilities enough to justify the additional spend.",
    prosConsA: {
      pros: [
        "Deeper features and reporting for growing teams.",
        "Designed to support more trades and more complex workflows.",
        "Well-known vendor with consistent product investment.",
      ],
      cons: [
        "Higher monthly cost than basic tools like Workiz.",
        "May feel like more tool than you need if you stay very small.",
      ],
    },
    prosConsB: {
      pros: [
        "Lower starting cost for very small crews.",
        "Simple scheduling and job management workflows.",
        "Good fit for cleaning and light field service niches.",
      ],
      cons: [
        "Less depth in reporting and advanced features.",
        "May require switching platforms as you scale.",
      ],
    },
    bestFor: [
      {
        heading: "Best for growing contractors",
        body: "Jobber is best for contractors that expect to add trucks and trades and want an FSM that can grow with them.",
      },
      {
        heading: "Best for budget-conscious small teams",
        body: "Workiz is best for small teams that need affordable scheduling and job management right now.",
      },
    ],
    alternatives: [
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Home-service-focused FSM with strong customer communication and marketing.",
      },
      {
        name: "Kickserv",
        href: getFieldServiceReviewUrl("kickserv"),
        description: "Simple FSM for small service businesses that value CRM-style customer views.",
      },
    ],
    faqs: [
      {
        q: "Is Jobber worth paying more for than Workiz?",
        a: "If you plan to grow or want deeper reporting and workflows, yes—Jobber’s extra capabilities often justify the additional cost. For very small, budget-conscious teams, Workiz can be plenty.",
      },
      {
        q: "Can I switch from Workiz to Jobber later?",
        a: "Yes. Many teams start with a lighter FSM and upgrade later. The downside is managing migration, so it can be easier to pick a long-term platform early if you expect growth.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for overall capability", winner: "A" },
      { label: "Winner for lowest starting price", winner: "B" },
    ],
    moreComparisons: [
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
      { label: "Kickserv vs Jobber", href: getFieldServiceCompareUrl("kickserv-vs-jobber") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best long-term platform",
        winner: "A",
        reason: "Jobber’s depth and reporting make it better suited to growing operations.",
      },
      {
        label: "Best for early-stage teams on a budget",
        winner: "B",
        reason: "Workiz’s pricing and simplicity appeal to very small crews.",
      },
    ],
  }),

  // ServiceTitan vs Service Fusion
  buildComparison("servicetitan-vs-service-fusion", "servicetitan", "service-fusion", {
    summaryParagraph:
      "ServiceTitan and Service Fusion both serve HVAC and plumbing teams, but they sit at different price and complexity levels. ServiceTitan is enterprise-grade; Service Fusion is a mid-market option.",
    quickRecommendationA:
      "Choose ServiceTitan if you are running a large, metrics-driven HVAC or plumbing company with many trucks and you want deep analytics and call-center tooling.",
    quickRecommendationB:
      "Choose Service Fusion if you want strong HVAC/plumbing-focused FSM without the cost and complexity of an enterprise platform.",
    quickVerdictParagraphs: [
      "ServiceTitan delivers deep capabilities for HVAC and plumbing companies that have already reached scale: call-center tools, detailed pricebooks, memberships, and robust reporting are all strengths.",
      "Service Fusion targets many of the same trades but at a different stage of growth. Its dispatch board, service agreement support, and invoicing are robust for mid-size teams without demanding an enterprise rollout.",
      "If your business is already large and highly structured, ServiceTitan may be worth the investment. If you are mid-market and want trade-specific FSM that is more accessible, Service Fusion is often the better match.",
    ],
    decisionGuideA: [
      "You have many trucks and locations with a formal call center.",
      "You want to manage memberships and pricebooks in detail.",
      "You can dedicate time and budget to a structured implementation.",
    ],
    decisionGuideB: [
      "You are an HVAC or plumbing shop at mid-market scale.",
      "You want trade-specific FSM with strong dispatch and service agreements.",
      "You prefer simpler pricing and implementation than ServiceTitan.",
    ],
    ratingsComparison: [
      { category: "Enterprise capabilities", productA: "4.8", productB: "4.1" },
      { category: "Implementation effort", productA: "3.7", productB: "4.2" },
      { category: "Pricing for mid-size teams", productA: "3.6", productB: "4.3" },
      { category: "Trade-specific focus (HVAC/plumbing)", productA: "4.7", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Call-center & CRM",
        productA: "Full call-center tooling and CRM",
        productB: "Lighter call handling, strong dispatch",
        supportA: "supported",
        supportB: "partial",
        stronger: "A",
      },
      {
        feature: "Service agreements & memberships",
        productA: "Advanced membership and agreement analytics",
        productB: "Strong agreement support for mid-size teams",
        supportA: "supported",
        supportB: "supported",
      },
      {
        feature: "Implementation complexity",
        productA: "Enterprise rollout and training",
        productB: "More straightforward for mid-size shops",
        supportA: "supported",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "ServiceTitan’s custom pricing reflects its position at the high end of the market; you pay for deep functionality and support. Service Fusion’s pricing is more accessible to mid-size HVAC and plumbing businesses that need strong FSM but not full enterprise depth.",
    prosConsA: {
      pros: [
        "Deepest analytics and pricebook controls.",
        "Powerful call-center and CRM features.",
        "Built to scale across many trucks and regions.",
      ],
      cons: [
        "High total cost of ownership.",
        "Implementation can be lengthy and complex.",
      ],
    },
    prosConsB: {
      pros: [
        "Trade-specific FSM at a more approachable price.",
        "Strong dispatch and service agreement support.",
        "Simpler implementation for mid-size teams.",
      ],
      cons: [
        "Less depth than ServiceTitan in analytics and call-center tooling.",
        "Ecosystem and marketplace are more limited.",
      ],
    },
    bestFor: [
      {
        heading: "Best for large, data-driven HVAC and plumbing companies",
        body: "ServiceTitan is best for organizations that already operate at scale and want to squeeze more insight and efficiency from their data.",
      },
      {
        heading: "Best for mid-market HVAC and plumbing teams",
        body: "Service Fusion is best for growing HVAC and plumbing shops that need strong FSM without committing to an enterprise platform.",
      },
    ],
    alternatives: [
      {
        name: "FieldEdge",
        href: getFieldServiceReviewUrl("fieldedge"),
        description: "HVAC/plumbing-focused FSM with trade-specific workflows.",
      },
      {
        name: "Jobber",
        href: getFieldServiceReviewUrl("jobber"),
        description: "General-purpose FSM that works well for many trades and sizes.",
      },
    ],
    faqs: [
      {
        q: "Is ServiceTitan worth the cost over Service Fusion?",
        a: "It can be if you are large enough to fully use its analytics, call-center tools, and membership features. For many mid-size shops, Service Fusion offers better value.",
      },
      {
        q: "Can a small HVAC company use ServiceTitan?",
        a: "They can, but smaller companies often find the cost and complexity harder to justify compared with mid-market tools like Service Fusion or Jobber.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for enterprise features", winner: "A" },
      { label: "Winner for mid-market value", winner: "B" },
    ],
    moreComparisons: [
      { label: "Housecall Pro vs ServiceTitan", href: getFieldServiceCompareUrl("housecall-pro-vs-servicetitan") },
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best if you already operate at scale",
        winner: "A",
        reason: "ServiceTitan’s depth pays off when you have many trucks and staff.",
      },
      {
        label: "Best if you’re still growing into scale",
        winner: "B",
        reason: "Service Fusion gives you strong trade-specific FSM without enterprise overhead.",
      },
    ],
  }),

  // Kickserv vs Jobber
  buildComparison("kickserv-vs-jobber", "kickserv", "jobber", {
    summaryParagraph:
      "Kickserv and Jobber both help service businesses manage customers, jobs, and schedules. Kickserv is a simpler, smaller-business option; Jobber is a more complete FSM for growing contractors.",
    quickRecommendationA:
      "Choose Kickserv if you’re a smaller service business that values CRM-style customer history and wants straightforward FSM at a lower price.",
    quickRecommendationB:
      "Choose Jobber if you want deeper workflows, stronger reporting, and a platform that can support more complex operations.",
    quickVerdictParagraphs: [
      "Kickserv is appealing for smaller service teams that want to track detailed client history and manage jobs without adopting a heavy platform. Its CRM-style view of customers can be a big upgrade from spreadsheets.",
      "Jobber, by contrast, is built to keep working as you add more trucks and processes. It has more robust workflows, reporting, and ecosystem support, making it better suited to teams that expect to grow.",
      "If you are early in your journey and cost-sensitive, Kickserv has an edge. If you have growth plans or want more structure around jobs and performance, Jobber is usually the better long-term fit.",
    ],
    decisionGuideA: [
      "You run a small service business and primarily need CRM-style customer tracking plus jobs.",
      "You want to keep software spend modest.",
      "You prefer a simpler tool with less to configure.",
    ],
    decisionGuideB: [
      "You expect to add more techs and possibly more trades.",
      "You value deeper workflows and reporting as you scale.",
      "You’re comfortable paying more for a richer platform and brand.",
    ],
    ratingsComparison: [
      { category: "CRM-style customer history", productA: "4.4", productB: "4.2" },
      { category: "Feature depth", productA: "4.0", productB: "4.7" },
      { category: "Pricing for very small teams", productA: "4.4", productB: "4.1" },
      { category: "Scalability", productA: "4.0", productB: "4.7" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      {
        feature: "Customer records",
        productA: "Strong focus on customer history",
        productB: "Good customer history plus broader FSM",
        supportA: "supported",
        supportB: "supported",
      },
      {
        feature: "Reporting",
        productA: "Basic reporting",
        productB: "Stronger reporting for growing teams",
        supportA: "partial",
        supportB: "supported",
        stronger: "B",
      },
    ],
    pricingComparison:
      "Kickserv’s pricing is generally lower than Jobber’s at small team sizes, reflecting its simpler feature set. Jobber’s higher price corresponds to deeper workflows, reporting, and brand maturity. The right choice depends on whether you expect to grow into those extra capabilities.",
    prosConsA: {
      pros: [
        "Accessible pricing for small service businesses.",
        "Customer-centric views that make relationship history easy to see.",
        "Simpler tool with less to configure.",
      ],
      cons: [
        "Less depth in advanced FSM features.",
        "May not scale as smoothly to larger operations.",
      ],
    },
    prosConsB: {
      pros: [
        "Deeper workflows and reporting for growing teams.",
        "Broad trade fit and strong brand recognition.",
        "Well-suited to contractors planning to scale.",
      ],
      cons: [
        "Higher monthly cost than Kickserv for small teams.",
        "More features to learn and configure.",
      ],
    },
    bestFor: [
      {
        heading: "Best for smaller, relationship-driven service businesses",
        body: "Kickserv is best for small outfits that focus on repeat clients and want CRM-style customer history at a lower cost.",
      },
      {
        heading: "Best for contractors planning to grow",
        body: "Jobber is best for contractors who see themselves adding trucks and processes and want a system that can support that growth.",
      },
    ],
    alternatives: [
      {
        name: "Workiz",
        href: getFieldServiceReviewUrl("workiz"),
        description: "Affordable FSM for small teams that prioritize basic scheduling.",
      },
      {
        name: "Housecall Pro",
        href: getFieldServiceReviewUrl("housecall-pro"),
        description: "Home-service FSM with strong customer communication and marketing.",
      },
    ],
    faqs: [
      {
        q: "Is Kickserv a cheaper alternative to Jobber?",
        a: "Yes. Kickserv is generally cheaper at small team sizes, but you give up some depth in workflows and reporting compared with Jobber.",
      },
      {
        q: "Will I need to switch from Kickserv to Jobber later?",
        a: "If you grow significantly or want more advanced reporting, you may eventually outgrow Kickserv. Some businesses start on Kickserv and later migrate to Jobber or another larger FSM.",
      },
    ],
    sidebarWinners: [
      { label: "Winner for smallest teams on a budget", winner: "A" },
      { label: "Winner for depth and growth", winner: "B" },
    ],
    moreComparisons: [
      { label: "Jobber vs Housecall Pro", href: getFieldServiceCompareUrl("jobber-vs-housecall-pro") },
      { label: "Jobber vs Workiz", href: getFieldServiceCompareUrl("jobber-vs-workiz") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      {
        label: "Best if you stay small",
        winner: "A",
        reason: "Kickserv’s pricing and simplicity suit small, relationship-driven shops.",
      },
      {
        label: "Best if you plan to scale",
        winner: "B",
        reason: "Jobber’s workflows and reporting support more complex operations.",
      },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getFieldServiceComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getFieldServiceComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}

