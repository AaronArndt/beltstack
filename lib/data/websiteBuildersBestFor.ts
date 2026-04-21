import type { BestForTemplateProps } from "@/components/best/BestForTemplate";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import {
  getWebsiteBuildersBestForUrl,
  getWebsiteBuildersCompareUrl,
  getWebsiteBuildersReviewUrl,
} from "@/lib/routes";
import { getWebsiteBuilderLogoSrc } from "@/lib/data/websiteBuildersLogos";

type BuilderSlug =
  | "wix"
  | "squarespace"
  | "shopify"
  | "webflow"
  | "duda"
  | "godaddy-website-builder"
  | "hostinger-website-builder";

type TradeConfig = {
  slug: string;
  title: string;
  subtitle: string;
  introParagraph: string;
  description: string;
  keywords: string[];
  picks: [BuilderSlug, BuilderSlug, BuilderSlug];
};

const BUILDER_PROFILES: Record<
  BuilderSlug,
  {
    name: string;
    rating: string;
    startingPrice: string;
    visitUrl: string;
    bestFor: string;
    standout: string;
    description: string;
  }
> = {
  wix: {
    name: "Wix",
    rating: "4.6",
    startingPrice: "From $17/mo",
    visitUrl: "https://www.wix.com",
    bestFor: "Local service lead generation",
    standout: "Fast lead-gen page publishing",
    description: "Strong local-business feature set with lead forms, booking options, and rapid publishing.",
  },
  squarespace: {
    name: "Squarespace",
    rating: "4.4",
    startingPrice: "From $16/mo",
    visitUrl: "https://www.squarespace.com",
    bestFor: "Visual trust and branding",
    standout: "High-end design templates",
    description: "Polished design and portfolio presentation for businesses where visual credibility drives conversions.",
  },
  shopify: {
    name: "Shopify",
    rating: "4.5",
    startingPrice: "From $39/mo",
    visitUrl: "https://www.shopify.com",
    bestFor: "Service + ecommerce hybrid models",
    standout: "Best-in-class checkout stack",
    description: "Commerce-first platform for teams selling products, plans, or memberships alongside services.",
  },
  webflow: {
    name: "Webflow",
    rating: "4.3",
    startingPrice: "From $14/mo",
    visitUrl: "https://webflow.com",
    bestFor: "Advanced customization",
    standout: "Designer-level layout control",
    description: "Customizable website platform for teams that need performance and layout precision.",
  },
  duda: {
    name: "Duda",
    rating: "4.2",
    startingPrice: "From $19/mo",
    visitUrl: "https://www.duda.co",
    bestFor: "Multi-location and repeatable builds",
    standout: "Efficient multi-site management",
    description: "Strong builder for agencies and multi-location service businesses.",
  },
  "godaddy-website-builder": {
    name: "GoDaddy",
    rating: "4.1",
    startingPrice: "From $10/mo",
    visitUrl: "https://www.godaddy.com/websites/website-builder",
    bestFor: "Fast simple launch",
    standout: "Low-friction setup path",
    description: "Simple builder for quick launch of contact-forward local service websites.",
  },
  "hostinger-website-builder": {
    name: "Hostinger",
    rating: "4.0",
    startingPrice: "From $3/mo",
    visitUrl: "https://www.hostinger.com/website-builder",
    bestFor: "Budget-first websites",
    standout: "Very low entry pricing",
    description: "Budget-friendly website builder for early-stage operators that need speed and affordability.",
  },
};

const TRADE_CONFIGS: TradeConfig[] = [
  {
    slug: "hvac",
    title: "Best Website Builders for HVAC Businesses (2026)",
    subtitle: "Compare website builders for HVAC companies with strong local SEO controls, quote flows, and mobile conversion UX.",
    introParagraph: "HVAC businesses need websites that convert urgent mobile traffic into booked calls and tune-up leads. The best builders for HVAC teams support service-area pages, trust content, and fast campaign updates.",
    description: "Local SEO and conversion-focused website builder picks for HVAC businesses.",
    keywords: ["best website builders for HVAC businesses", "HVAC website builder", "HVAC company website platform"],
    picks: ["wix", "webflow", "squarespace"],
  },
  {
    slug: "plumbing",
    title: "Best Website Builders for Plumbing Companies (2026)",
    subtitle: "Website builder picks for plumbing companies prioritizing emergency-intent pages, click-to-call UX, and quote forms.",
    introParagraph: "Plumbing websites must handle urgent intent and trust-driven conversion. The best plumbing website builders make it easy to publish service + city pages and keep contact paths frictionless on mobile.",
    description: "Emergency-intent and local conversion website builder picks for plumbing companies.",
    keywords: ["best website builders for plumbing companies", "plumbing website builder", "plumber website platform"],
    picks: ["wix", "godaddy-website-builder", "squarespace"],
  },
  {
    slug: "electricians",
    title: "Best Website Builders for Electricians (2026)",
    subtitle: "Compare website builders for electricians with strong credibility pages, service funnels, and scalable local SEO.",
    introParagraph: "Electrical contractors need websites that communicate technical trust while still converting quickly. The best builders for electricians balance credibility content with high-intent lead capture.",
    description: "Credibility-first website builder picks for electricians and electrical contractors.",
    keywords: ["best website builders for electricians", "electrician website builder", "electrical contractor website platform"],
    picks: ["webflow", "wix", "squarespace"],
  },
  {
    slug: "painting",
    title: "Best Website Builders for Painting Contractors (2026)",
    subtitle: "Website builder picks for painting contractors focused on visual portfolios, quote conversion, and local discoverability.",
    introParagraph: "Painting contractors rely on before/after proof and neighborhood trust. The best painting website builders make visual storytelling and estimate-request conversion easy to maintain.",
    description: "Visual portfolio and conversion-focused website builder picks for painting contractors.",
    keywords: ["best website builders for painting contractors", "painting contractor website builder", "painter website platform"],
    picks: ["squarespace", "wix", "webflow"],
  },
  {
    slug: "roofing",
    title: "Best Website Builders for Roofing Companies (2026)",
    subtitle: "Compare roofing website builders for storm-response pages, gallery proof, and high-intent local lead generation.",
    introParagraph: "Roofing companies need websites that support fast campaign updates, inspection lead flows, and project-proof trust content. The right builder helps teams publish quickly during demand surges.",
    description: "Storm-response and trust-driven website builder picks for roofing companies.",
    keywords: ["best website builders for roofing companies", "roofing website builder", "roofer website platform"],
    picks: ["wix", "webflow", "duda"],
  },
  {
    slug: "general-contractors",
    title: "Best Website Builders for General Contractors (2026)",
    subtitle: "Website builder picks for general contractors balancing project credibility, service architecture, and conversion flow.",
    introParagraph: "General contractors need websites that present complex service offerings clearly while supporting quote and consultation conversion. The best platforms balance structure, trust, and operational maintainability.",
    description: "Project-focused website builder picks for general contractors.",
    keywords: ["best website builders for general contractors", "general contractor website builder", "GC website platform"],
    picks: ["webflow", "wix", "duda"],
  },
  {
    slug: "landscaping",
    title: "Best Website Builders for Landscaping Companies (2026)",
    subtitle: "Compare website builders for landscaping teams with visual service pages, seasonal offers, and local SEO workflows.",
    introParagraph: "Landscaping businesses need visual websites with easy seasonal updates and reliable lead forms. The best landscaping website builders support gallery-heavy pages without slowing weekly publishing.",
    description: "Visual and seasonal campaign website builder picks for landscaping companies.",
    keywords: ["best website builders for landscaping companies", "landscaping website builder", "landscaper website platform"],
    picks: ["squarespace", "wix", "hostinger-website-builder"],
  },
  {
    slug: "construction",
    title: "Best Website Builders for Construction Companies (2026)",
    subtitle: "Website builder picks for construction companies that need structured service architecture, proof content, and scalable SEO.",
    introParagraph: "Construction companies benefit from websites with clear service segmentation, strong credibility pages, and reliable lead handoff. The right builder should support content depth without operational drag.",
    description: "Structured-service website builder picks for construction companies.",
    keywords: ["best website builders for construction companies", "construction website builder", "construction company website platform"],
    picks: ["webflow", "duda", "wix"],
  },
  {
    slug: "remodeling",
    title: "Best Website Builders for Remodeling Businesses (2026)",
    subtitle: "Compare website builders for remodelers focused on high-trust design, long-cycle lead nurture, and gallery conversion.",
    introParagraph: "Remodeling websites need to convert longer decision cycles with visual trust, project storytelling, and structured service pages. The best builders help teams maintain premium positioning while capturing leads.",
    description: "High-trust website builder picks for remodeling businesses.",
    keywords: ["best website builders for remodeling businesses", "remodeling website builder", "remodeler website platform"],
    picks: ["squarespace", "webflow", "wix"],
  },
  {
    slug: "handyman",
    title: "Best Website Builders for Handyman Businesses (2026)",
    subtitle: "Website builder picks for handyman teams needing affordable launch, clear service pages, and easy weekly edits.",
    introParagraph: "Handyman businesses need practical, low-maintenance websites that still convert local traffic. The best handyman website builders balance affordability, speed, and simple lead flows.",
    description: "Affordable and simple website builder picks for handyman businesses.",
    keywords: ["best website builders for handyman businesses", "handyman website builder", "handyman website platform"],
    picks: ["godaddy-website-builder", "wix", "hostinger-website-builder"],
  },
  {
    slug: "property-management",
    title: "Best Website Builders for Property Management Companies (2026)",
    subtitle: "Compare website builders for property management companies with service segmentation, lead routing, and trust architecture.",
    introParagraph: "Property management websites must serve multiple audiences while converting owner and tenant-related inquiries cleanly. The best builders support structured navigation, trust content, and operational updates.",
    description: "Multi-audience website builder picks for property management companies.",
    keywords: ["best website builders for property management companies", "property management website builder", "property management website platform"],
    picks: ["duda", "wix", "webflow"],
  },
  {
    slug: "pest-control",
    title: "Best Website Builders for Pest Control Businesses (2026)",
    subtitle: "Website builder picks for pest control teams focused on urgent lead capture, service-area pages, and recurring campaign updates.",
    introParagraph: "Pest control businesses need websites built for urgency and trust. The best builders support quick service-area publishing, clear conversion paths, and reliable update workflows.",
    description: "Urgency-driven website builder picks for pest control businesses.",
    keywords: ["best website builders for pest control businesses", "pest control website builder", "pest service website platform"],
    picks: ["wix", "godaddy-website-builder", "duda"],
  },
  {
    slug: "pool-service",
    title: "Best Website Builders for Pool Service Companies (2026)",
    subtitle: "Compare website builders for pool service companies with seasonal campaign flexibility and recurring-service conversion pages.",
    introParagraph: "Pool service companies need websites that handle seasonal demand and recurring service messaging. The best builders make promo updates and lead capture easy without heavy technical overhead.",
    description: "Seasonal and recurring-service website builder picks for pool service companies.",
    keywords: ["best website builders for pool service companies", "pool service website builder", "pool maintenance website platform"],
    picks: ["wix", "squarespace", "hostinger-website-builder"],
  },
  {
    slug: "junk-removal",
    title: "Best Website Builders for Junk Removal Businesses (2026)",
    subtitle: "Website builder picks for junk removal teams needing fast lead conversion, local pages, and operational simplicity.",
    introParagraph: "Junk removal websites should convert high-intent local traffic quickly with direct contact paths and fast-loading service pages. The best builders prioritize speed to publish and conversion clarity.",
    description: "Fast-conversion website builder picks for junk removal businesses.",
    keywords: ["best website builders for junk removal businesses", "junk removal website builder", "junk hauling website platform"],
    picks: ["wix", "godaddy-website-builder", "duda"],
  },
  {
    slug: "moving",
    title: "Best Website Builders for Moving Companies (2026)",
    subtitle: "Compare website builders for moving companies with quote-flow UX, trust content, and campaign flexibility.",
    introParagraph: "Moving companies need websites that reduce quote friction and build confidence quickly. The best builders for movers combine conversion-focused forms, service-page structure, and easy promotional updates.",
    description: "Quote-flow and trust-focused website builder picks for moving companies.",
    keywords: ["best website builders for moving companies", "moving company website builder", "movers website platform"],
    picks: ["wix", "shopify", "duda"],
  },
];

function makeBestForPage(config: TradeConfig): BestForTemplateProps {
  const focusLc = config.title.replace("Best Website Builders for ", "").replace(" (2026)", "").toLowerCase();
  const [p1, p2, p3] = config.picks.map((slug) => BUILDER_PROFILES[slug]);
  return {
    title: config.title,
    subtitle: config.subtitle,
    useCase: config.slug,
    categoryHref: "/website-builders",
    categoryLabel: "Website Builders",
    introParagraph: config.introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Top picks for ${focusLc}.`,
    editorialSub: `What matters most when choosing a website builder for ${focusLc}.`,
    whyThesePicksSub: `Why these platforms rank best for ${focusLc}.`,
    seeAlsoBlock: {
      roundupLabel: "best website builders",
      roundupHref: "/website-builders/best-website-builders",
      compareLabel: "website builder comparisons",
      compareHref: "/website-builders/compare",
    },
    featuredProducts: [
      { slug: config.picks[0], name: p1.name, badge: "Best overall fit", description: p1.description, rating: p1.rating, startingPrice: p1.startingPrice, reviewHref: getWebsiteBuildersReviewUrl(config.picks[0]), visitUrl: p1.visitUrl, logoSrc: getWebsiteBuilderLogoSrc(config.picks[0]) },
      { slug: config.picks[1], name: p2.name, badge: "Best alternative fit", description: p2.description, rating: p2.rating, startingPrice: p2.startingPrice, reviewHref: getWebsiteBuildersReviewUrl(config.picks[1]), visitUrl: p2.visitUrl, logoSrc: getWebsiteBuilderLogoSrc(config.picks[1]) },
      { slug: config.picks[2], name: p3.name, badge: "Best specialized fit", description: p3.description, rating: p3.rating, startingPrice: p3.startingPrice, reviewHref: getWebsiteBuildersReviewUrl(config.picks[2]), visitUrl: p3.visitUrl, logoSrc: getWebsiteBuilderLogoSrc(config.picks[2]) },
    ],
    comparisonTableRows: [
      { slug: config.picks[0], name: p1.name, logoSrc: getWebsiteBuilderLogoSrc(config.picks[0]), bestFor: p1.bestFor, startingPrice: p1.startingPrice, standoutFeature: p1.standout, reviewHref: getWebsiteBuildersReviewUrl(config.picks[0]) },
      { slug: config.picks[1], name: p2.name, logoSrc: getWebsiteBuilderLogoSrc(config.picks[1]), bestFor: p2.bestFor, startingPrice: p2.startingPrice, standoutFeature: p2.standout, reviewHref: getWebsiteBuildersReviewUrl(config.picks[1]) },
      { slug: config.picks[2], name: p3.name, logoSrc: getWebsiteBuilderLogoSrc(config.picks[2]), bestFor: p3.bestFor, startingPrice: p3.startingPrice, standoutFeature: p3.standout, reviewHref: getWebsiteBuildersReviewUrl(config.picks[2]) },
    ],
    editorialGuidance: [
      {
        heading: "Prioritize conversion architecture first",
        body: "Structure pages around high-intent actions: calls, quote requests, booking, and contact forms. Clear hero messaging plus service-specific landing pages usually beats design flair for local lead generation.",
      },
      {
        heading: "Match builder complexity to the real owner",
        body: "Pick the platform the day-to-day operator can maintain. If office staff cannot publish pages and updates quickly, growth stalls regardless of feature depth.",
      },
      {
        heading: "Treat local SEO as an operating system",
        body: "You need editable metadata, URL control, internal linking, and rapid publishing for service + city pages. Ranking consistency comes from weekly execution, not one-time setup.",
      },
      {
        heading: "Model 12-month cost, not launch pricing",
        body: "Compare total cost including apps, seats, integrations, and migration friction. Cheap entry tiers often become expensive once marketing workflows are fully active.",
      },
    ],
    whyThesePicks: [
      {
        heading: p1.name,
        body: `${p1.name} is a strong option for ${focusLc} because it combines conversion-friendly templates with practical day-to-day publishing workflows. During evaluation, test live lead capture, service-page updates, and mobile UX for your highest-intent pages before committing annually.`,
      },
      {
        heading: p2.name,
        body: `${p2.name} earns its place when ${focusLc} teams need a balance of credibility, speed, and manageable operations. Validate how quickly office staff can publish updates and keep trust pages current without relying on external developer support.`,
      },
      {
        heading: p3.name,
        body: `${p3.name} is the specialized pick for ${focusLc} operators with specific workflow needs, such as advanced customization, multi-site management, or integrated commerce. Run a trial with real pages and conversion goals to verify long-term fit beyond launch speed.`,
      },
    ],
    relatedReviews: [
      { name: p1.name, href: getWebsiteBuildersReviewUrl(config.picks[0]) },
      { name: p2.name, href: getWebsiteBuildersReviewUrl(config.picks[1]) },
      { name: p3.name, href: getWebsiteBuildersReviewUrl(config.picks[2]) },
    ],
    relatedComparisons: [
      { label: "Wix vs Squarespace", href: getWebsiteBuildersCompareUrl("wix-vs-squarespace") },
      { label: "Wix vs Shopify", href: getWebsiteBuildersCompareUrl("wix-vs-shopify") },
      { label: "Squarespace vs Shopify", href: getWebsiteBuildersCompareUrl("squarespace-vs-shopify") },
      { label: "Hostinger vs Wix", href: getWebsiteBuildersCompareUrl("hostinger-website-builder-vs-wix") },
      { label: "GoDaddy vs Hostinger", href: getWebsiteBuildersCompareUrl("godaddy-website-builder-vs-hostinger-website-builder") },
    ],
    relatedGuides: [
      { label: "How to choose a website builder", href: "/website-builders/guides/how-to-choose-a-website-builder" },
      { label: "How to build a service business website", href: "/website-builders/guides/how-to-build-a-service-business-website" },
      { label: "Best website builder for local SEO", href: "/website-builders/guides/best-website-builder-for-local-seo" },
      { label: "Contractor website features", href: "/website-builders/guides/contractor-website-features" },
      { label: "Website builders vs WordPress", href: "/website-builders/guides/website-builders-vs-wordpress" },
      { label: "Lead generation tools hub", href: "/lead-generation" },
    ],
    faqItems: [
      {
        q: `What should ${focusLc} prioritize in a website builder?`,
        a: "Prioritize lead capture flow, mobile conversion UX, local SEO publishing speed, and ease of weekly updates. The best platform is the one your team can maintain without technical delays.",
      },
      {
        q: `What is the best website builder for ${focusLc}?`,
        a: `For most ${focusLc} teams, the best builder is the one that balances conversion flow, local SEO control, and weekly publishing speed. Use this page's top three picks to shortlist by workflow fit.`,
      },
      {
        q: "Is Wix or Squarespace better for service websites?",
        a: "Wix usually wins for operational flexibility and app-driven workflows; Squarespace wins when polished visual branding is the top priority. Use our Wix vs Squarespace comparison and both reviews before migrating.",
      },
      {
        q: "Should I use Shopify if I mainly need leads, not ecommerce?",
        a: "Usually no. Shopify is excellent for transaction-heavy operations, but service businesses focused on calls and quote forms often get better ROI from Wix or Squarespace unless checkout revenue is strategic.",
      },
      {
        q: "What should I read after this best-for page?",
        a: "Open the full best website builders roundup, compare head-to-head pages (Wix vs Squarespace, Wix vs Shopify), then validate your final shortlist in the detailed review pages linked above.",
      },
    ],
  };
}

export const WEBSITE_BUILDERS_BEST_FOR: Record<string, BestForTemplateProps> = {
  hvac: makeBestForPage(TRADE_CONFIGS[0]),
  plumbing: makeBestForPage(TRADE_CONFIGS[1]),
  electricians: makeBestForPage(TRADE_CONFIGS[2]),
  painting: makeBestForPage(TRADE_CONFIGS[3]),
  roofing: makeBestForPage(TRADE_CONFIGS[4]),
  "general-contractors": makeBestForPage(TRADE_CONFIGS[5]),
  landscaping: makeBestForPage(TRADE_CONFIGS[6]),
  construction: makeBestForPage(TRADE_CONFIGS[7]),
  remodeling: makeBestForPage(TRADE_CONFIGS[8]),
  handyman: makeBestForPage(TRADE_CONFIGS[9]),
  "property-management": makeBestForPage(TRADE_CONFIGS[10]),
  "pest-control": makeBestForPage(TRADE_CONFIGS[11]),
  "pool-service": makeBestForPage(TRADE_CONFIGS[12]),
  "junk-removal": makeBestForPage(TRADE_CONFIGS[13]),
  moving: makeBestForPage(TRADE_CONFIGS[14]),
  // legacy aliases
  plumbers: makeBestForPage(TRADE_CONFIGS[1]),
  roofers: makeBestForPage(TRADE_CONFIGS[4]),
  landscapers: makeBestForPage(TRADE_CONFIGS[6]),
  painters: makeBestForPage(TRADE_CONFIGS[3]),
};

export function getWebsiteBuildersBestForBySlug(slug: string): BestForTemplateProps | null {
  return WEBSITE_BUILDERS_BEST_FOR[slug] ?? null;
}

export function getWebsiteBuildersBestForSlugs(): string[] {
  return TRADE_CONFIGS.map((config) => config.slug);
}

export const WEBSITE_BUILDERS_BEST_FOR_INDEX = [
  { label: "Best Website Builders (2026)", href: "/website-builders/best-website-builders", description: "Full rankings for service-business websites." },
  ...TRADE_CONFIGS.map((config) => ({
    label: config.title,
    href: getWebsiteBuildersBestForUrl(config.slug),
    description: config.description,
  })),
];

export const WEBSITE_BUILDERS_BEST_FOR_METADATA_BY_SLUG: Record<
  string,
  { title: string; description: string; keywords: string[] }
> = Object.fromEntries(
  TRADE_CONFIGS.map((config) => [
    config.slug,
    {
      title: buildBestForMetaTitle(config.title),
      description: config.subtitle,
      keywords: config.keywords,
    },
  ])
);
