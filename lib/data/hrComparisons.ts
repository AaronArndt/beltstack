import { getHrReviewUrl, getHrBestForUrl, getHrCompareUrl } from "@/lib/routes";
import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";

export function getHrCompareUrlFromSlug(slug: string): string {
  return `/hr/compare/${slug}`;
}

/** Product refs for HR comparisons — reuse for consistent review links and logos */
const P = {
  gusto: {
    name: "Gusto",
    slug: "gusto",
    reviewHref: getHrReviewUrl("gusto"),
    logoSrc: "/Logos/gusto.jpeg",
    visitUrl: "https://gusto.com",
    bestForSummary: "Best overall HR + payroll for SMBs; strong combination of payroll, benefits, and HR.",
    rating: "4.8",
    startingPrice: "From ~$49/mo",
  },
  bamboohr: {
    name: "BambooHR",
    slug: "bamboohr",
    reviewHref: getHrReviewUrl("bamboohr"),
    logoSrc: "/Logos/bamboohr.png",
    visitUrl: "https://www.bamboohr.com",
    bestForSummary: "Best HRIS for employee management; strong hiring, onboarding, and HR workflows; payroll via integration.",
    rating: "4.6",
    startingPrice: "Quote",
  },
  rippling: {
    name: "Rippling",
    slug: "rippling",
    reviewHref: getHrReviewUrl("rippling"),
    logoSrc: "/Logos/rippling.jpeg",
    visitUrl: "https://www.rippling.com",
    bestForSummary: "Best for HR + IT automation; unified HR, payroll, benefits, and device provisioning.",
    rating: "4.6",
    startingPrice: "Quote",
  },
  deel: {
    name: "Deel",
    slug: "deel",
    reviewHref: getHrReviewUrl("deel"),
    logoSrc: "/Logos/deel.jpeg",
    visitUrl: "https://www.deel.com",
    bestForSummary: "Best for global hiring and compliance; EOR and contractor management across countries.",
    rating: "4.6",
    startingPrice: "Quote",
  },
  adp: {
    name: "ADP Workforce Now",
    slug: "adp-workforce-now",
    reviewHref: getHrReviewUrl("adp-workforce-now"),
    logoSrc: "/Logos/adp.jpeg",
    visitUrl: "https://www.adp.com",
    bestForSummary: "Enterprise payroll and HR; strong compliance and support for larger organizations.",
    rating: "4.5",
    startingPrice: "Quote",
  },
  paychex: {
    name: "Paychex",
    slug: "paychex",
    reviewHref: getHrReviewUrl("paychex"),
    logoSrc: "/Logos/paychex.jpeg",
    visitUrl: "https://www.paychex.com",
    bestForSummary: "Payroll + HR services for SMB; full-service with bundled support.",
    rating: "4.4",
    startingPrice: "Quote",
  },
  trinet: {
    name: "TriNet",
    slug: "trinet",
    reviewHref: getHrReviewUrl("trinet"),
    logoSrc: "/Logos/trinet.jpeg",
    visitUrl: "https://www.trinet.com",
    bestForSummary: "PEO for mid-market; benefits and compliance through co-employment.",
    rating: "4.4",
    startingPrice: "Quote",
  },
  justworks: {
    name: "Justworks",
    slug: "justworks",
    reviewHref: getHrReviewUrl("justworks"),
    logoSrc: "/Logos/justworks.jpeg",
    visitUrl: "https://justworks.com",
    bestForSummary: "Simple PEO for small businesses; payroll, benefits, and HR support.",
    rating: "4.5",
    startingPrice: "Quote",
  },
} as const;

const RELEVANT_LINKS = [
  { label: "Best for freelancers", href: getHrBestForUrl("freelancers") },
  { label: "Best for small business", href: getHrBestForUrl("small-business") },
  { label: "Best for startups", href: getHrBestForUrl("startups") },
  { label: "Best for agencies", href: getHrBestForUrl("agencies") },
  { label: "Best for global teams", href: getHrBestForUrl("global-teams") },
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
      categoryHref: "/hr",
      categoryLabel: "HR",
    },
  ];
}

const BASE_FEATURE_ROWS: ComparisonTemplateProps["featureComparison"] = [
  { feature: "Payroll", productA: "Full-service", productB: "Full-service / integration", supportA: "supported", supportB: "supported" },
  { feature: "Benefits administration", productA: "Built-in or add-on", productB: "Built-in or add-on", supportA: "supported", supportB: "supported" },
  { feature: "Hiring & onboarding", productA: "Included or module", productB: "Included or module", supportA: "supported", supportB: "supported" },
  { feature: "Employee records & HR", productA: "Core", productB: "Core", supportA: "supported", supportB: "supported" },
];

const comparisonEntries: [string, ComparisonTemplateProps][] = [
  // Gusto vs BambooHR
  buildComparison("gusto-vs-bamboohr", "gusto", "bamboohr", {
    summaryParagraph:
      "Gusto and BambooHR both serve SMBs but with different strengths: Gusto is an all-in-one payroll and HR platform with transparent pricing; BambooHR is a best-in-class HRIS focused on employee records, hiring, and onboarding, with payroll handled via integration. Choose Gusto for one vendor for pay and HR; choose BambooHR for the strongest HR experience when you’re fine pairing with a separate payroll provider.",
    quickRecommendationA:
      "Choose Gusto if you want one platform for payroll, benefits, hiring, and HR with clear pricing and minimal vendor management.",
    quickRecommendationB:
      "Choose BambooHR if you want the best HRIS for hiring, onboarding, and people operations and plan to use a separate payroll provider (or already have one).",
    quickVerdictParagraphs: [
      "Gusto is our top pick for most small and midsize businesses that want payroll and HR in one place. You get full-service payroll, benefits administration, hiring, and onboarding without juggling multiple vendors. Pricing is transparent, setup is straightforward, and support is geared to SMBs. For companies that prefer a single relationship for pay runs and HR basics, Gusto is the default.",
      "BambooHR is the stronger choice when HR operations are the priority and payroll can stay with another provider. Its applicant tracking, onboarding, time off, and performance tools are among the best in the SMB space. You get a single source of truth for people data and workflows; payroll integrates with Gusto, Rippling, ADP, and others. The tradeoff is managing two vendors and quote-based pricing.",
      "If you want to simplify to one vendor and don’t need best-in-class HRIS depth, Gusto is the better fit. If you want the strongest HR platform and are okay with separate payroll, BambooHR is the better fit.",
    ],
    decisionGuideA: [
      "You want one vendor for payroll, benefits, and HR with published or transparent pricing.",
      "You’re okay with capable (not best-in-class) hiring and onboarding in exchange for simplicity.",
      "You value ease of use and SMB-focused support.",
    ],
    decisionGuideB: [
      "You want the strongest HRIS for hiring, onboarding, and people workflows.",
      "You already have or prefer a separate payroll provider.",
      "You’re willing to manage two systems for HR depth.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.8", productB: "4.6" },
      { category: "Payroll + HR breadth", productA: "4.8", productB: "4.0" },
      { category: "HRIS / hiring depth", productA: "4.2", productB: "4.7" },
      { category: "Pricing transparency", productA: "4.6", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Native payroll", productA: "Yes", productB: "No (integration)", supportA: "supported", supportB: "partial", stronger: "A" },
      { feature: "Applicant tracking & hiring", productA: "Good", productB: "Best-in-class", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Pricing model", productA: "Published tiers", productB: "Quote-based", supportA: "supported", supportB: "supported", stronger: "A" },
    ],
    pricingComparison:
      "Gusto typically starts around $49/month plus per-person fees with clear tier structure. BambooHR is quote-based and scales with employee count and modules; you also pay for a payroll provider. For all-in-one cost, Gusto is often easier to budget; for HR-only plus your choice of payroll, BambooHR’s value is in HR depth, not lower total cost.",
    prosConsA: {
      pros: ["All-in-one payroll and HR.", "Transparent pricing.", "Strong support and ease of use.", "Hiring and onboarding included."],
      cons: ["HRIS depth lags BambooHR.", "No IT/device provisioning."],
    },
    prosConsB: {
      pros: ["Best-in-class HRIS and hiring.", "Strong onboarding and time off.", "Flexibility to choose payroll.", "Performance and culture tools."],
      cons: ["Payroll via integration only.", "Quote-based pricing."],
    },
    bestFor: [
      { heading: "Best for one-vendor payroll + HR", body: "Gusto is best if you want a single platform for payroll, benefits, and HR with transparent pricing and minimal vendor count." },
      { heading: "Best for HRIS-first teams", body: "BambooHR is best if you prioritize people operations and hiring and are fine pairing with Gusto, Rippling, or another payroll provider." },
    ],
    alternatives: [
      { name: "Rippling", href: getHrReviewUrl("rippling"), description: "HR, payroll, and IT in one platform.", logoSrc: P.rippling.logoSrc },
      { name: "Zenefits", href: getHrReviewUrl("zenefits"), description: "All-in-one HR and benefits at a lower entry price.", logoSrc: "/Logos/zenefits.jpeg" },
    ],
    faqs: [
      { q: "Does BambooHR have payroll?", a: "BambooHR does not run payroll itself. It integrates with Gusto, Rippling, ADP, and others so you use BambooHR for HR and a separate provider for payroll." },
      { q: "Gusto vs BambooHR for small business?", a: "Gusto is better if you want one vendor for payroll and HR. BambooHR is better if you want the strongest HR and hiring tools and will use a separate payroll provider." },
    ],
    sidebarWinners: [
      { label: "Winner for all-in-one", winner: "A" },
      { label: "Winner for HRIS depth", winner: "B" },
    ],
    moreComparisons: [
      { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
      { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best all-in-one", winner: "A", reason: "Gusto bundles payroll, benefits, and HR in one platform." },
      { label: "Best HRIS", winner: "B", reason: "BambooHR leads on hiring and people workflows." },
    ],
  }),

  // Rippling vs Gusto
  buildComparison("rippling-vs-gusto", "rippling", "gusto", {
    summaryParagraph:
      "Rippling and Gusto both offer HR and payroll, but Rippling adds IT provisioning and automation across people and technology while Gusto stays focused on payroll and HR with simpler, more transparent pricing. Choose Rippling when you want one system for HR and IT; choose Gusto when you want straightforward SMB payroll and HR without complexity.",
    quickRecommendationA:
      "Choose Rippling if you want HR, payroll, benefits, and IT (devices, apps) in one platform and are ready for quote-based pricing and more configuration.",
    quickRecommendationB:
      "Choose Gusto if you want straightforward payroll and HR with transparent pricing and minimal setup—and don’t need IT or device management.",
    quickVerdictParagraphs: [
      "Rippling unifies HR, payroll, benefits, and IT so you can onboard someone and provision their laptop and apps from one place. Workflows span people and technology, which is valuable for growing companies that want to automate beyond basic HR. The downside is quote-based pricing and more complexity than SMB-first tools; it’s best when you have or expect operational sophistication.",
      "Gusto focuses on making payroll and HR easy for small and midsize businesses. You get clear pricing, a simple interface, and strong support without IT or device management. For most SMBs that only need pay runs, benefits, and HR basics, Gusto is the easier and often more cost-effective choice.",
      "If you need HR and IT in one system and will use the automation, Rippling is the better fit. If you only need payroll and HR and prefer simplicity and transparency, Gusto is the better fit.",
    ],
    decisionGuideA: [
      "You want to provision devices and apps when you hire (or already manage IT in-house).",
      "You value automation across HR and technology systems.",
      "You’re okay with quote-based pricing and more configuration.",
    ],
    decisionGuideB: [
      "You want the simplest path to payroll and HR with published pricing.",
      "You don’t need IT or device management in the same platform.",
      "You prefer SMB-focused support and ease of use.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.4", productB: "4.8" },
      { category: "HR + IT breadth", productA: "4.8", productB: "4.0" },
      { category: "Pricing transparency", productA: "4.2", productB: "4.6" },
      { category: "Automation", productA: "4.8", productB: "4.4" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "IT & device provisioning", productA: "Yes", productB: "No", supportA: "supported", supportB: "none", stronger: "A" },
      { feature: "Pricing model", productA: "Quote", productB: "Published tiers", supportA: "supported", supportB: "supported", stronger: "B" },
      { feature: "Setup complexity", productA: "Higher", productB: "Lower", supportA: "supported", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Rippling is quote-based; cost depends on modules (HR, payroll, benefits, IT) and headcount. Gusto typically starts around $49/month plus per-person fees with published tiers. For simple payroll and HR, Gusto is usually cheaper and easier to budget; Rippling justifies its cost when you use HR and IT together.",
    prosConsA: {
      pros: ["HR, payroll, and IT in one.", "Strong automation.", "Device and app provisioning.", "Scales with complexity."],
      cons: ["Quote-based; can be complex.", "Heavier than Gusto for basic needs."],
    },
    prosConsB: {
      pros: ["Transparent pricing.", "Simple setup and support.", "Strong for SMB.", "No IT overhead."],
      cons: ["No IT or device management.", "Less automation than Rippling."],
    },
    bestFor: [
      { heading: "Best for HR + IT", body: "Rippling is best when you want one platform for people and technology—onboarding that provisions devices and apps." },
      { heading: "Best for simple payroll + HR", body: "Gusto is best when you want straightforward payroll and HR with clear pricing and minimal configuration." },
    ],
    alternatives: [
      { name: "BambooHR", href: getHrReviewUrl("bamboohr"), description: "Best HRIS; pair with payroll.", logoSrc: P.bamboohr.logoSrc },
      { name: "Deel", href: getHrReviewUrl("deel"), description: "Global hiring and payroll.", logoSrc: P.deel.logoSrc },
    ],
    faqs: [
      { q: "Rippling vs Gusto for small business?", a: "Gusto is usually better for small businesses that only need payroll and HR; Rippling is better when you also need IT provisioning and automation." },
      { q: "Does Rippling cost more than Gusto?", a: "Often yes for comparable payroll and HR, because Rippling’s breadth includes IT. Gusto is typically cheaper for payroll-and-HR-only use." },
    ],
    sidebarWinners: [
      { label: "Winner for HR + IT", winner: "A" },
      { label: "Winner for simplicity", winner: "B" },
    ],
    moreComparisons: [
      { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
      { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
      { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for HR + IT", winner: "A", reason: "Rippling adds device and app provisioning." },
      { label: "Best for simplicity", winner: "B", reason: "Gusto offers transparent pricing and easier setup." },
    ],
  }),

  // BambooHR vs Rippling
  buildComparison("bamboohr-vs-rippling", "bamboohr", "rippling", {
    summaryParagraph:
      "BambooHR is a best-in-class HRIS focused on people operations; Rippling is a unified platform for HR, payroll, benefits, and IT. BambooHR excels at hiring and onboarding and pairs with your choice of payroll; Rippling includes payroll and IT provisioning in one system. Choose BambooHR for HR depth and payroll flexibility; choose Rippling for all-in-one plus IT.",
    quickRecommendationA:
      "Choose BambooHR if you want the strongest HRIS for hiring and people workflows and will use a separate payroll provider.",
    quickRecommendationB:
      "Choose Rippling if you want HR, payroll, benefits, and IT in one platform with automation across people and technology.",
    quickVerdictParagraphs: [
      "BambooHR gives you best-in-class applicant tracking, onboarding, time off, and performance tools. It doesn’t run payroll—you integrate Gusto, Rippling, ADP, or others—so you get maximum HR depth and the freedom to choose or change payroll. Ideal for HR-led teams that care more about people operations than single-vendor simplicity.",
      "Rippling gives you HR, payroll, benefits, and IT in one place. Onboarding can provision devices and apps; workflows can span systems. You pay for that breadth with quote-based pricing and more configuration. Best when you want one vendor for people and technology.",
      "If HRIS quality and payroll flexibility matter most, BambooHR wins. If you want one platform that includes payroll and IT, Rippling wins.",
    ],
    decisionGuideA: [
      "You want the best HRIS for hiring, onboarding, and people workflows.",
      "You’re fine using a separate payroll provider.",
      "You don’t need IT or device management in the same system.",
    ],
    decisionGuideB: [
      "You want HR, payroll, and IT in one platform.",
      "You value automating onboarding (including devices and apps).",
      "You’re okay with quote-based pricing and more setup.",
    ],
    ratingsComparison: [
      { category: "HRIS / hiring depth", productA: "4.7", productB: "4.5" },
      { category: "All-in-one breadth", productA: "4.0", productB: "4.8" },
      { category: "Ease of use", productA: "4.6", productB: "4.4" },
      { category: "Payroll included", productA: "No", productB: "Yes" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Native payroll", productA: "No (integration)", productB: "Yes", supportA: "partial", supportB: "supported", stronger: "B" },
      { feature: "IT provisioning", productA: "No", productB: "Yes", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "ATS & hiring", productA: "Best-in-class", productB: "Strong", supportA: "supported", supportB: "supported", stronger: "A" },
    ],
    pricingComparison:
      "BambooHR is quote-based and you add a payroll provider. Rippling is quote-based but includes payroll and optional IT. Total cost depends on headcount and modules; BambooHR plus a payroll provider can be similar to or higher than Rippling when you need both HR and payroll.",
    prosConsA: {
      pros: ["Best-in-class HRIS and hiring.", "Flexibility to choose payroll.", "Strong onboarding and time off.", "Performance and culture tools."],
      cons: ["No native payroll.", "No IT provisioning.", "Quote-based."],
    },
    prosConsB: {
      pros: ["HR, payroll, benefits, and IT in one.", "Automation and workflows.", "Device and app provisioning.", "Single vendor."],
      cons: ["More complex than BambooHR-only.", "Quote-based pricing."],
    },
    bestFor: [
      { heading: "Best for HRIS-first", body: "BambooHR is best when you want the strongest hiring and people platform and will pair it with the payroll provider of your choice." },
      { heading: "Best for all-in-one + IT", body: "Rippling is best when you want one platform for HR, payroll, and IT with automation." },
    ],
    alternatives: [
      { name: "Gusto", href: getHrReviewUrl("gusto"), description: "All-in-one payroll and HR; simpler than Rippling.", logoSrc: P.gusto.logoSrc },
      { name: "Deel", href: getHrReviewUrl("deel"), description: "Global hiring and payroll.", logoSrc: P.deel.logoSrc },
    ],
    faqs: [
      { q: "BambooHR vs Rippling for hiring?", a: "BambooHR has the edge on hiring and ATS depth; Rippling has strong hiring plus payroll and IT in one. Choose BambooHR for HR focus; Rippling for breadth." },
      { q: "Does Rippling replace BambooHR?", a: "Rippling can replace BambooHR if you want one vendor for HR and payroll (and IT). If you want best-in-class HRIS and separate payroll, BambooHR is the better fit." },
    ],
    sidebarWinners: [
      { label: "Winner for HRIS", winner: "A" },
      { label: "Winner for breadth", winner: "B" },
    ],
    moreComparisons: [
      { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
      { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
      { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best HRIS", winner: "A", reason: "BambooHR leads on hiring and people workflows." },
      { label: "Best all-in-one + IT", winner: "B", reason: "Rippling adds payroll and IT to HR." },
    ],
  }),

  // ADP vs Paychex
  buildComparison("adp-vs-paychex", "adp", "paychex", {
    summaryParagraph:
      "ADP and Paychex are both established full-service payroll and HR providers for small to mid-market and enterprise. Both offer payroll, tax, benefits, and HR support; both use quote-based pricing. The main differentiators are product emphasis, support model, and fit for your size and industry—compare them side by side to see which aligns better with your needs.",
    quickRecommendationA:
      "Choose ADP if you need enterprise-grade payroll and HR with strong compliance and support for larger or more complex organizations.",
    quickRecommendationB:
      "Choose Paychex if you want full-service payroll and HR with strong support and a relationship model suited to small and mid-sized businesses.",
    quickVerdictParagraphs: [
      "ADP Workforce Now is built for mid-market and enterprise: robust payroll, tax, benefits, and HR with the depth and support that scaling organizations need. Implementation and ongoing service are part of the offering. It’s a strong fit when you’ve outgrown SMB-only tools and need compliance and multi-entity capability.",
      "Paychex serves a wide range of sizes with full-service payroll, benefits, and HR. Many customers value the support and the ability to lean on Paychex for compliance and questions. Pricing is quote-based; you’re paying for software plus service.",
      "Both are credible; the choice often comes down to which relationship, product fit, and pricing structure work better for your company. We recommend getting quotes from both.",
    ],
    decisionGuideA: [
      "You’re mid-market or enterprise and need robust compliance and reporting.",
      "You value ADP’s brand and enterprise track record.",
      "You have or expect multi-entity or complex payroll needs.",
    ],
    decisionGuideB: [
      "You want full-service payroll and HR with strong support.",
      "You prefer a provider known for SMB and mid-market service.",
      "You value the relationship and bundled support model.",
    ],
    ratingsComparison: [
      { category: "Enterprise fit", productA: "4.6", productB: "4.3" },
      { category: "SMB support", productA: "4.3", productB: "4.6" },
      { category: "Compliance depth", productA: "4.6", productB: "4.5" },
      { category: "Ease of use", productA: "4.2", productB: "4.3" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Enterprise scale", productA: "Strong", productB: "Good", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "Support model", productA: "Dedicated / enterprise", productB: "Full-service relationship", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Both ADP and Paychex use quote-based pricing that varies by payroll size, benefits, and services. Request quotes from each and compare total cost, implementation, and what’s included for your headcount and needs.",
    prosConsA: {
      pros: ["Enterprise payroll and compliance.", "Strong support and implementation.", "Multi-state and multi-entity.", "Depth for larger orgs."],
      cons: ["Heavier and more expensive for small teams.", "Quote-based pricing."],
    },
    prosConsB: {
      pros: ["Full-service payroll and HR.", "Strong support relationship.", "Wide range of business sizes.", "Established provider."],
      cons: ["Quote-based; less transparent.", "Can be more than Gusto for simple needs."],
    },
    bestFor: [
      { heading: "Best for enterprise", body: "ADP is best when you need enterprise-grade payroll, compliance, and HR with the support that larger organizations expect." },
      { heading: "Best for full-service SMB/mid-market", body: "Paychex is best when you want full-service payroll and HR with a support model suited to small and mid-sized businesses." },
    ],
    alternatives: [
      { name: "Gusto", href: getHrReviewUrl("gusto"), description: "Simpler payroll and HR with transparent pricing.", logoSrc: P.gusto.logoSrc },
      { name: "Rippling", href: getHrReviewUrl("rippling"), description: "HR, payroll, and IT in one platform.", logoSrc: P.rippling.logoSrc },
    ],
    faqs: [
      { q: "ADP vs Paychex for small business?", a: "Both serve small businesses. Paychex is often positioned for SMB service; ADP has small-business offerings but is also strong in mid-market and enterprise. Get quotes from both." },
      { q: "Which is more expensive: ADP or Paychex?", a: "Both are quote-based. Cost depends on your size, benefits, and services. Compare quotes rather than list prices." },
    ],
    sidebarWinners: [
      { label: "Winner for enterprise", winner: "A" },
      { label: "Winner for SMB service", winner: "B" },
    ],
    moreComparisons: [
      { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
      { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for enterprise", winner: "A", reason: "ADP offers enterprise-grade depth and support." },
      { label: "Best for SMB service", winner: "B", reason: "Paychex is known for full-service SMB relationships." },
    ],
  }),

  // Deel vs Rippling
  buildComparison("deel-vs-rippling", "deel", "rippling", {
    summaryParagraph:
      "Deel is built for global hiring and payroll; Rippling covers HR, payroll, and IT domestically and internationally. Deel excels at EOR and contractor management across countries; Rippling excels at unifying HR and IT (including device provisioning) in one platform. Choose Deel for global-first needs; choose Rippling for unified HR and IT with global options.",
    quickRecommendationA:
      "Choose Deel if your priority is hiring and paying employees and contractors across many countries with strong compliance and contracts.",
    quickRecommendationB:
      "Choose Rippling if you want one platform for HR, payroll, benefits, and IT (including provisioning) with domestic and global capability.",
    quickVerdictParagraphs: [
      "Deel is purpose-built for global teams: hire and pay employees (via EOR) or contractors in hundreds of countries with contracts and compliance handled. If your workforce is or will be distributed across borders, Deel reduces the need for multiple local payroll or EOR providers. It’s the stronger choice when global employment is the core need.",
      "Rippling offers HR, payroll, benefits, and IT in one system—including device and app provisioning—and supports global workforce as part of a broader platform. You get automation across people and technology; global is one piece. Best when you want one vendor for HR and IT and need domestic and international coverage.",
      "If you’re global-first and want the deepest EOR and contractor experience, Deel wins. If you want unified HR and IT with global as part of the story, Rippling wins.",
    ],
    decisionGuideA: [
      "Your workforce is largely or entirely distributed across countries.",
      "You need EOR and contractor management as core capabilities.",
      "You want a platform focused on global compliance and contracts.",
    ],
    decisionGuideB: [
      "You want HR, payroll, and IT (including provisioning) in one platform.",
      "You have a mix of domestic and global and value one system.",
      "You want automation across people and technology.",
    ],
    ratingsComparison: [
      { category: "Global hiring & EOR", productA: "4.8", productB: "4.4" },
      { category: "HR + IT unified", productA: "4.0", productB: "4.8" },
      { category: "Domestic payroll", productA: "4.2", productB: "4.6" },
      { category: "Compliance", productA: "4.7", productB: "4.5" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "Global EOR & contractors", productA: "Core strength", productB: "Supported", supportA: "supported", supportB: "supported", stronger: "A" },
      { feature: "IT provisioning", productA: "No", productB: "Yes", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Domestic focus", productA: "Secondary", productB: "Strong", supportA: "partial", supportB: "supported", stronger: "B" },
    ],
    pricingComparison:
      "Both are quote-based. Deel’s pricing is tied to country, employment type (EOR vs contractor), and headcount. Rippling’s pricing depends on modules and headcount. For global-heavy use, Deel is often competitive; for domestic-plus-global with IT, Rippling’s bundle may be more relevant.",
    prosConsA: {
      pros: ["Best for global hiring and EOR.", "Contractor and employee in one.", "Compliance and contracts.", "One platform for many countries."],
      cons: ["Domestic-only may overpay.", "No IT provisioning."],
    },
    prosConsB: {
      pros: ["HR, payroll, and IT in one.", "Device and app provisioning.", "Domestic and global.", "Strong automation."],
      cons: ["Global depth lags Deel.", "Quote-based; can be complex."],
    },
    bestFor: [
      { heading: "Best for global-first", body: "Deel is best when you hire and pay people in many countries and want one platform for EOR, contractors, and compliance." },
      { heading: "Best for HR + IT + global", body: "Rippling is best when you want one platform for people and technology with domestic and global coverage." },
    ],
    alternatives: [
      { name: "Gusto", href: getHrReviewUrl("gusto"), description: "Domestic SMB payroll and HR.", logoSrc: P.gusto.logoSrc },
      { name: "BambooHR", href: getHrReviewUrl("bamboohr"), description: "Best HRIS; pair with global payroll.", logoSrc: P.bamboohr.logoSrc },
    ],
    faqs: [
      { q: "Deel vs Rippling for global teams?", a: "Deel is built first for global hiring and payroll; Rippling offers global as part of a broader HR and IT platform. Choose Deel for global-first; Rippling for unified HR+IT with global." },
      { q: "Does Rippling do EOR?", a: "Rippling has global workforce capabilities including EOR in many countries. Deel is more focused on EOR and contractor management as its core product." },
    ],
    sidebarWinners: [
      { label: "Winner for global", winner: "A" },
      { label: "Winner for HR + IT", winner: "B" },
    ],
    moreComparisons: [
      { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
      { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
      { label: "BambooHR vs Rippling", href: getHrCompareUrl("bamboohr-vs-rippling") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for global", winner: "A", reason: "Deel is built for global hiring and EOR." },
      { label: "Best for HR + IT", winner: "B", reason: "Rippling unifies HR, payroll, and IT." },
    ],
  }),

  // Gusto vs Rippling (optional)
  buildComparison("gusto-vs-rippling", "gusto", "rippling", {
    summaryParagraph:
      "Gusto and Rippling both offer HR and payroll; Gusto is simpler and more transparent for SMBs while Rippling adds IT provisioning and automation. Choose Gusto for straightforward payroll and HR with clear pricing; choose Rippling when you want HR and IT in one platform.",
    quickRecommendationA:
      "Choose Gusto if you want simple payroll and HR with transparent pricing and don’t need IT or device management.",
    quickRecommendationB:
      "Choose Rippling if you want HR, payroll, and IT (including device and app provisioning) in one platform.",
    quickVerdictParagraphs: [
      "Gusto is the easier choice for most SMBs: one platform for payroll, benefits, and HR with published tiers and strong support. You don’t get IT or device management, but you get a clear path from signup to first pay run.",
      "Rippling adds IT and automation: onboard someone and provision their laptop and apps from the same system. That’s valuable when you want one vendor for people and technology. The tradeoff is quote-based pricing and more configuration.",
      "For payroll and HR only, Gusto is usually the better fit. For HR and IT together, Rippling is the better fit.",
    ],
    decisionGuideA: [
      "You want the simplest payroll and HR with transparent pricing.",
      "You don’t need IT or device provisioning in the same platform.",
      "You prefer SMB-focused support and ease of use.",
    ],
    decisionGuideB: [
      "You want to provision devices and apps when you hire.",
      "You value automation across HR and IT.",
      "You’re okay with quote-based pricing and more setup.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.8", productB: "4.4" },
      { category: "HR + IT breadth", productA: "4.0", productB: "4.8" },
      { category: "Pricing transparency", productA: "4.6", productB: "4.2" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "IT provisioning", productA: "No", productB: "Yes", supportA: "none", supportB: "supported", stronger: "B" },
      { feature: "Pricing", productA: "Published", productB: "Quote", supportA: "supported", supportB: "supported", stronger: "A" },
    ],
    pricingComparison:
      "Gusto has published pricing (e.g. from ~$49/mo plus per person). Rippling is quote-based. For comparable payroll and HR, Gusto is often cheaper; Rippling’s cost includes potential IT and automation value.",
    prosConsA: {
      pros: ["Transparent pricing.", "Simple setup.", "Strong SMB support.", "No IT complexity."],
      cons: ["No IT or device management.", "Less automation than Rippling."],
    },
    prosConsB: {
      pros: ["HR, payroll, and IT in one.", "Automation and provisioning.", "Scales with complexity."],
      cons: ["Quote-based.", "Heavier for basic needs."],
    },
    bestFor: [
      { heading: "Best for simple payroll + HR", body: "Gusto is best when you want straightforward payroll and HR with clear pricing." },
      { heading: "Best for HR + IT", body: "Rippling is best when you want one platform for people and technology." },
    ],
    alternatives: [
      { name: "BambooHR", href: getHrReviewUrl("bamboohr"), description: "Best HRIS; pair with payroll.", logoSrc: P.bamboohr.logoSrc },
      { name: "Deel", href: getHrReviewUrl("deel"), description: "Global hiring and payroll.", logoSrc: P.deel.logoSrc },
    ],
    faqs: [
      { q: "Gusto vs Rippling for small business?", a: "Gusto is usually better for small businesses that only need payroll and HR; Rippling is better when you also need IT provisioning." },
      { q: "Is Rippling more expensive than Gusto?", a: "Often yes for payroll-and-HR-only, because Rippling’s scope includes IT. Compare quotes if you’re considering both." },
    ],
    sidebarWinners: [
      { label: "Winner for simplicity", winner: "A" },
      { label: "Winner for HR + IT", winner: "B" },
    ],
    moreComparisons: [
      { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
      { label: "Rippling vs Gusto", href: getHrCompareUrl("rippling-vs-gusto") },
      { label: "Deel vs Rippling", href: getHrCompareUrl("deel-vs-rippling") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for simplicity", winner: "A", reason: "Gusto has transparent pricing and easier setup." },
      { label: "Best for HR + IT", winner: "B", reason: "Rippling adds IT provisioning and automation." },
    ],
  }),

  // Justworks vs TriNet (optional)
  buildComparison("justworks-vs-trinet", "justworks", "trinet", {
    summaryParagraph:
      "Justworks and TriNet are both PEOs that offer payroll, benefits, compliance, and HR support through co-employment. Justworks is often positioned for small businesses with a simpler experience; TriNet has a strong mid-market presence. Choose Justworks for a straightforward PEO for small teams; choose TriNet for PEO with mid-market depth and support.",
    quickRecommendationA:
      "Choose Justworks if you want a simple PEO experience for small businesses with payroll, benefits, and support in one place.",
    quickRecommendationB:
      "Choose TriNet if you want a PEO with strong mid-market focus and benefits and compliance support for growing companies.",
    quickVerdictParagraphs: [
      "Justworks makes the PEO model accessible for small businesses: you get payroll, benefits, and compliance through co-employment with a platform that’s easier to use than many legacy PEOs. Setup and day-to-day are straightforward; support is available. A good fit when you want PEO benefits and support without heavy complexity.",
      "TriNet has been serving mid-market and larger SMBs for a long time. You get similar PEO benefits—access to better benefits, compliance support, HR resources—with a relationship and support model that some growing companies prefer. Pricing is quote-based for both.",
      "If you’re a small team and want the simplest PEO experience, Justworks is often the better fit. If you’re mid-market or value TriNet’s track record, compare both and get quotes.",
    ],
    decisionGuideA: [
      "You’re a small business and want a simple PEO platform.",
      "You value ease of use and straightforward onboarding.",
      "You want PEO benefits and support without heavy configuration.",
    ],
    decisionGuideB: [
      "You’re mid-market or growing and want PEO with strong support.",
      "You prefer TriNet’s brand and market position.",
      "You want a long-standing PEO relationship.",
    ],
    ratingsComparison: [
      { category: "Ease of use", productA: "4.6", productB: "4.3" },
      { category: "Mid-market fit", productA: "4.2", productB: "4.6" },
      { category: "Support", productA: "4.5", productB: "4.6" },
    ],
    featureComparison: [
      ...BASE_FEATURE_ROWS,
      { feature: "PEO model", productA: "Co-employment", productB: "Co-employment", supportA: "supported", supportB: "supported" },
      { feature: "Target size", productA: "Small business", productB: "SMB / mid-market", supportA: "supported", supportB: "supported" },
    ],
    pricingComparison:
      "Both use quote-based pricing, typically per employee. Request quotes from each; compare total cost, benefits options, and support for your size and location.",
    prosConsA: {
      pros: ["Simple PEO experience.", "Good for small businesses.", "Payroll, benefits, compliance.", "Support included."],
      cons: ["Co-employment model.", "Quote-based."],
    },
    prosConsB: {
      pros: ["Strong mid-market PEO.", "HR support and expertise.", "Benefits and compliance.", "Established provider."],
      cons: ["Co-employment.", "Quote-based."],
    },
    bestFor: [
      { heading: "Best for simple PEO", body: "Justworks is best when you want a straightforward PEO for small businesses with a simple platform and support." },
      { heading: "Best for mid-market PEO", body: "TriNet is best when you want a PEO with strong mid-market focus and support." },
    ],
    alternatives: [
      { name: "Gusto", href: getHrReviewUrl("gusto"), description: "Software-only payroll and HR; no PEO.", logoSrc: P.gusto.logoSrc },
      { name: "Rippling", href: getHrReviewUrl("rippling"), description: "HR, payroll, and IT; no PEO.", logoSrc: P.rippling.logoSrc },
    ],
    faqs: [
      { q: "Justworks vs TriNet?", a: "Justworks is often simpler and geared to small businesses; TriNet has a strong mid-market presence. Both are PEOs; compare pricing and support for your size." },
      { q: "Are Justworks and TriNet both PEOs?", a: "Yes. Both operate as PEOs and use co-employment to provide benefits, payroll, and compliance support." },
    ],
    sidebarWinners: [
      { label: "Winner for simplicity", winner: "A" },
      { label: "Winner for mid-market", winner: "B" },
    ],
    moreComparisons: [
      { label: "Gusto vs Justworks", href: getHrCompareUrl("gusto-vs-justworks") },
      { label: "Gusto vs BambooHR", href: getHrCompareUrl("gusto-vs-bamboohr") },
    ],
    relevantTradeLinks: RELEVANT_LINKS,
    heroCallouts: [
      { label: "Best for simple PEO", winner: "A", reason: "Justworks offers a straightforward PEO for small businesses." },
      { label: "Best for mid-market", winner: "B", reason: "TriNet has strong mid-market PEO support." },
    ],
  }),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(comparisonEntries);

export function getHrComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getHrComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
