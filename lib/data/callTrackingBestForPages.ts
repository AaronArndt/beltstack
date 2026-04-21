import type {
  BestForComparisonLink,
  BestForEditorialBlock,
  BestForFaqItem,
  BestForFeaturedProduct,
  BestForGuideLink,
  BestForReviewLink,
  BestForTableRow,
  BestForTemplateProps,
} from "@/components/best/BestForTemplate";
import { getCallTrackingCompareUrl, getCallTrackingReviewUrl } from "@/lib/routes";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";

const GUIDES = "/call-tracking/guides";

const featuredProducts: BestForFeaturedProduct[] = [
  {
    slug: "callrail",
    name: "CallRail",
    badge: "Best SMB attribution",
    description: "Dynamic numbers, keyword context, and integrations most local marketers adopt.",
    rating: "4.6",
    startingPrice: "From ~$45/mo",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    visitUrl: "https://www.callrail.com",
    logoSrc: "/Logos/callrail.jpeg",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    badge: "Best lead rollups",
    description: "Calls, forms, and chats in one marketing lead inbox for owners and sales.",
    rating: "4.5",
    startingPrice: "From ~$30/mo",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    visitUrl: "https://www.whatconverts.com",
    logoSrc: "/Logos/whatconverts.jpeg",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    badge: "Best deep analytics",
    description: "Multi-touch models and automation for teams defending paid budgets weekly.",
    rating: "4.5",
    startingPrice: "From ~$120/mo",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    visitUrl: "https://www.calltrackingmetrics.com",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
  },
];

const comparisonTableRows: BestForTableRow[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    bestFor: "Marketing attribution",
    startingPrice: "From ~$45/mo",
    standoutFeature: "DNI + ad integrations",
    reviewHref: getCallTrackingReviewUrl("callrail"),
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    bestFor: "Lead reporting",
    startingPrice: "From ~$30/mo",
    standoutFeature: "Calls + forms + chats",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    bestFor: "Attribution depth",
    startingPrice: "From ~$120/mo",
    standoutFeature: "Automation + models",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
  },
];

const relatedReviews: BestForReviewLink[] = [
  { name: "CallRail", href: getCallTrackingReviewUrl("callrail") },
  { name: "CallTrackingMetrics", href: getCallTrackingReviewUrl("calltrackingmetrics") },
  { name: "WhatConverts", href: getCallTrackingReviewUrl("whatconverts") },
  { name: "Ringba", href: getCallTrackingReviewUrl("ringba") },
  { name: "Invoca", href: getCallTrackingReviewUrl("invoca") },
  { name: "Twilio", href: getCallTrackingReviewUrl("twilio") },
  { name: "PhoneWagon", href: getCallTrackingReviewUrl("phonewagon") },
  { name: "Nimbata", href: getCallTrackingReviewUrl("nimbata") },
];

const relatedComparisons: BestForComparisonLink[] = [
  { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
  { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
  {
    label: "CallTrackingMetrics vs WhatConverts",
    href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
  },
  { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
  { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
];

type CallToolSlug =
  | "callrail"
  | "whatconverts"
  | "calltrackingmetrics"
  | "invoca"
  | "ringba"
  | "twilio"
  | "phonewagon"
  | "nimbata";

const TOOL_SUMMARIES: Record<
  CallToolSlug,
  {
    name: string;
    badge: string;
    description: string;
    rating: string;
    startingPrice: string;
    visitUrl: string;
    logoSrc: string;
    bestFor: string;
    standout: string;
  }
> = {
  callrail: {
    name: "CallRail",
    badge: "Best SMB attribution",
    description: "Dynamic numbers and source tracking for local marketing teams.",
    rating: "4.6",
    startingPrice: "From ~$45/mo",
    visitUrl: "https://www.callrail.com",
    logoSrc: "/Logos/callrail.jpeg",
    bestFor: "SMB marketing attribution",
    standout: "DNI + ad integrations",
  },
  whatconverts: {
    name: "WhatConverts",
    badge: "Best lead rollups",
    description: "Calls, forms, and chats unified in one lead reporting stack.",
    rating: "4.5",
    startingPrice: "From ~$30/mo",
    visitUrl: "https://www.whatconverts.com",
    logoSrc: "/Logos/whatconverts.jpeg",
    bestFor: "Unified lead reporting",
    standout: "Calls + forms + chats",
  },
  calltrackingmetrics: {
    name: "CallTrackingMetrics",
    badge: "Best deep analytics",
    description: "Operator-grade routing and attribution for teams that defend budgets weekly.",
    rating: "4.5",
    startingPrice: "From ~$120/mo",
    visitUrl: "https://www.calltrackingmetrics.com",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    bestFor: "Advanced attribution",
    standout: "Automation + models",
  },
  invoca: {
    name: "Invoca",
    badge: "Best enterprise intelligence",
    description: "Conversation intelligence for enterprise call programs and governance-heavy stacks.",
    rating: "4.4",
    startingPrice: "Custom / enterprise",
    visitUrl: "https://www.invoca.com",
    logoSrc: "/Logos/invoca.png",
    bestFor: "Enterprise-scale operations",
    standout: "Conversation AI",
  },
  ringba: {
    name: "Ringba",
    badge: "Best buyer-grade routing",
    description: "Granular telco routing for high-volume pay-per-call or buyer workflows.",
    rating: "4.3",
    startingPrice: "Usage / custom",
    visitUrl: "https://www.ringba.com",
    logoSrc: "/Logos/ringba.jpeg",
    bestFor: "Routing-heavy programs",
    standout: "Carrier-grade routing",
  },
  twilio: {
    name: "Twilio",
    badge: "Best programmable stack",
    description: "API-first telephony for teams that need custom call tracking architecture.",
    rating: "4.2",
    startingPrice: "Pay-as-you-go",
    visitUrl: "https://www.twilio.com",
    logoSrc: "/Logos/twilio.jpeg",
    bestFor: "Custom engineering builds",
    standout: "Programmable voice APIs",
  },
  phonewagon: {
    name: "PhoneWagon",
    badge: "Best lightweight starter",
    description: "Simple setup for teams testing paid call attribution without heavy ops overhead.",
    rating: "4.1",
    startingPrice: "From ~$45/mo",
    visitUrl: "https://www.phonewagon.com",
    logoSrc: "/Logos/phonewagon.jpeg",
    bestFor: "Lean teams",
    standout: "Fast setup",
  },
  nimbata: {
    name: "Nimbata",
    badge: "Best privacy-forward option",
    description: "Call analytics for teams that prioritize privacy controls and regional compliance.",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
    visitUrl: "https://nimbata.com",
    logoSrc: "/Logos/nimbata.png",
    bestFor: "Compliance-focused teams",
    standout: "Privacy-first positioning",
  },
};

type TradeConfig = {
  slug: string;
  title: string;
  subtitle: string;
  intro: string;
  keywords: string[];
  picks: [CallToolSlug, CallToolSlug, CallToolSlug];
};

const TRADE_CONFIGS: TradeConfig[] = [
  { slug: "hvac", title: "Best Call Tracking Software for HVAC Businesses (2026)", subtitle: "Call attribution for HVAC teams managing seasonal demand, emergency intent, and dispatch realities.", intro: "HVAC companies need call tracking software that separates emergency and maintenance demand while tying source data to booked jobs and service mix.", keywords: ["best call tracking software for HVAC businesses", "HVAC call tracking software", "HVAC call attribution"], picks: ["callrail", "calltrackingmetrics", "whatconverts"] },
  { slug: "plumbing", title: "Best Call Tracking Software for Plumbing Companies (2026)", subtitle: "Call tracking tools for plumbing teams handling urgent-intent phone leads and rapid routing.", intro: "Plumbing companies rely on fast phone conversion, so call tracking should prove which sources generate qualified jobs instead of noisy ring volume.", keywords: ["best call tracking software for plumbing companies", "plumbing call tracking software", "plumber call attribution"], picks: ["callrail", "whatconverts", "phonewagon"] },
  { slug: "electricians", title: "Best Call Tracking Software for Electricians (2026)", subtitle: "Attribution software for electricians balancing commercial and residential call funnels.", intro: "Electrical contractors need call tracking that distinguishes high-value project leads from lower-value service inquiries across markets.", keywords: ["best call tracking software for electricians", "electrician call tracking", "electrical contractor call attribution"], picks: ["callrail", "calltrackingmetrics", "whatconverts"] },
  { slug: "painting", title: "Best Call Tracking Software for Painting Contractors (2026)", subtitle: "Call tracking picks for painting contractors focused on quote calls and campaign clarity.", intro: "Painting contractors need clear source visibility across local SEO and paid channels so estimate teams can prioritize high-quality inquiries.", keywords: ["best call tracking software for painting contractors", "painting call tracking software", "painter call attribution"], picks: ["whatconverts", "callrail", "phonewagon"] },
  { slug: "roofing", title: "Best Call Tracking Software for Roofing Companies (2026)", subtitle: "Call attribution for roofing teams separating storm, insurance, and retail lead funnels.", intro: "Roofing companies need attribution that keeps storm-driven surges from distorting long-term marketing decisions.", keywords: ["best call tracking software for roofing companies", "roofing call tracking software", "roofer call attribution"], picks: ["callrail", "whatconverts", "invoca"] },
  { slug: "general-contractors", title: "Best Call Tracking Software for General Contractors (2026)", subtitle: "Call tracking software for GCs managing multi-source lead channels and project-level qualification.", intro: "General contractors need call attribution tied to qualified opportunities, not just inbound volume, across residential and commercial programs.", keywords: ["best call tracking software for general contractors", "general contractor call tracking", "GC call attribution"], picks: ["calltrackingmetrics", "whatconverts", "callrail"] },
  { slug: "landscaping", title: "Best Call Tracking Software for Landscaping Companies (2026)", subtitle: "Call tracking tools for landscaping teams balancing seasonal demand and recurring local services.", intro: "Landscaping businesses need practical attribution that holds up through seasonal peaks and recurring service campaigns.", keywords: ["best call tracking software for landscaping companies", "landscaping call tracking software", "landscaper call attribution"], picks: ["whatconverts", "callrail", "nimbata"] },
  { slug: "construction", title: "Best Call Tracking Software for Construction Companies (2026)", subtitle: "Attribution platforms for construction companies requiring stronger reporting governance and signal quality.", intro: "Construction organizations need call tracking with disciplined reporting and clean CRM integration across longer sales cycles.", keywords: ["best call tracking software for construction companies", "construction call tracking software", "construction call attribution"], picks: ["calltrackingmetrics", "invoca", "callrail"] },
  { slug: "remodeling", title: "Best Call Tracking Software for Remodeling Businesses (2026)", subtitle: "Call tracking systems for remodelers where high-intent phone leads influence premium project close rates.", intro: "Remodeling businesses need source-level call visibility to protect CAC on longer consideration purchases.", keywords: ["best call tracking software for remodeling businesses", "remodeling call tracking software", "remodeler call attribution"], picks: ["callrail", "whatconverts", "calltrackingmetrics"] },
  { slug: "handyman", title: "Best Call Tracking Software for Handyman Businesses (2026)", subtitle: "Simple call tracking software for handyman teams proving which channels drive booked local jobs.", intro: "Handyman businesses need lean call tracking that avoids overconfiguration while still proving marketing ROI.", keywords: ["best call tracking software for handyman businesses", "handyman call tracking software", "handyman call attribution"], picks: ["phonewagon", "callrail", "whatconverts"] },
  { slug: "property-management", title: "Best Call Tracking Software for Property Management Companies (2026)", subtitle: "Call attribution tools for property managers with multi-location routing and portfolio reporting needs.", intro: "Property management teams need call tracking that supports multiple properties, sources, and stakeholder reporting layers.", keywords: ["best call tracking software for property management companies", "property management call tracking", "property call attribution"], picks: ["calltrackingmetrics", "invoca", "callrail"] },
  { slug: "pest-control", title: "Best Call Tracking Software for Pest Control Businesses (2026)", subtitle: "Call tracking software for pest-control teams converting urgent local demand into booked service.", intro: "Pest-control operators need fast source-level call attribution to optimize recurring and emergency service campaigns.", keywords: ["best call tracking software for pest control businesses", "pest control call tracking software", "pest service call attribution"], picks: ["callrail", "whatconverts", "phonewagon"] },
  { slug: "pool-service", title: "Best Call Tracking Software for Pool Service Companies (2026)", subtitle: "Attribution tools for pool service teams balancing seasonal promotions and recurring service calls.", intro: "Pool service companies need straightforward call tracking that proves which campaigns drive recurring-service conversations.", keywords: ["best call tracking software for pool service companies", "pool service call tracking software", "pool call attribution"], picks: ["whatconverts", "callrail", "nimbata"] },
  { slug: "junk-removal", title: "Best Call Tracking Software for Junk Removal Businesses (2026)", subtitle: "Call tracking picks for junk-removal teams handling fast-turn phone leads and localized campaigns.", intro: "Junk removal businesses need quick-turn attribution to distinguish high-intent local calls from lower-quality traffic.", keywords: ["best call tracking software for junk removal businesses", "junk removal call tracking software", "junk hauling call attribution"], picks: ["callrail", "whatconverts", "phonewagon"] },
  { slug: "moving", title: "Best Call Tracking Software for Moving Companies (2026)", subtitle: "Call attribution software for moving companies managing quote-intent calls and variable seasonality.", intro: "Moving companies need call tracking that supports quote-driven lead workflows and market-level demand volatility.", keywords: ["best call tracking software for moving companies", "moving company call tracking software", "moving call attribution"], picks: ["whatconverts", "calltrackingmetrics", "callrail"] },
];

function makePage(
  useCase: string,
  title: string,
  subtitle: string,
  introParagraph: string,
  editorialGuidance: BestForEditorialBlock[],
  whyThesePicks: BestForEditorialBlock[],
  faqItems: BestForFaqItem[],
  relatedGuides: BestForGuideLink[]
): BestForTemplateProps {
  const label = useCase.replace(/-/g, " ");
  return {
    title,
    subtitle,
    useCase,
    categoryHref: "/call-tracking",
    categoryLabel: "Call Tracking",
    introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top call tracking picks for ${label}.`,
    editorialSub: `What to evaluate when you're attributing phone leads as ${label}.`,
    whyThesePicksSub: `Why these tools fit ${label}.`,
    seeAlsoBlock: {
      roundupLabel: "Best call tracking software (2026) — full roundup",
      roundupHref: "/call-tracking/best-call-tracking-software",
      compareLabel: "Compare call tracking software",
      compareHref: "/call-tracking/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance,
    whyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides: [
      ...relatedGuides,
      { label: "How to choose a website builder", href: "/website-builders/guides/how-to-choose-a-website-builder" },
      {
        label: "Lead generation strategies for local business",
        href: "/lead-generation/guides/lead-generation-strategies-for-local-business",
      },
      { label: "CRM software hub", href: "/crm" },
    ],
    faqItems,
  };
}

function generatedScenario(slug: string) {
  const cfg = TRADE_CONFIGS.find((item) => item.slug === slug);
  const label = cfg ? cfg.title.replace("Best Call Tracking Software for ", "").replace(" (2026)", "").toLowerCase() : slug;
  const picks = cfg ? cfg.picks.map((pick) => TOOL_SUMMARIES[pick].name) : ["CallRail", "WhatConverts", "CallTrackingMetrics"];
  return {
    subtitle: cfg?.subtitle ?? `Call attribution workflows optimized for ${label}.`,
    intro: cfg?.intro ?? `The best call tracking software for ${label} should tie sources to qualified calls and booked outcomes without attribution blind spots.`,
    editorial: [
      { heading: "Align call attribution with CRM outcomes", body: "Source data only matters when qualified and booked results are mapped in CRM." },
      { heading: "Protect tracking after website updates", body: "Regression-test number swaps whenever templates or tracking scripts change." },
      { heading: "Segment campaigns by intent", body: "Separate emergency, maintenance, and project-style calls to avoid blended ROI errors." },
      { heading: "Model costs at peak demand", body: "Minute and number usage during busy seasons determines real annual economics." },
    ] as BestForEditorialBlock[],
    picks,
  };
}

function tradeFeatured(slug: string): BestForFeaturedProduct[] {
  const cfg = TRADE_CONFIGS.find((item) => item.slug === slug);
  if (!cfg) return featuredProducts;
  return cfg.picks.map((pick, idx) => {
    const t = TOOL_SUMMARIES[pick];
    return {
      slug: pick,
      name: t.name,
      badge: idx === 0 ? "Best overall fit" : idx === 1 ? "Best alternative fit" : "Best specialized fit",
      description: t.description,
      rating: t.rating,
      startingPrice: t.startingPrice,
      reviewHref: getCallTrackingReviewUrl(pick),
      visitUrl: t.visitUrl,
      logoSrc: t.logoSrc,
    };
  });
}

function tradeTable(slug: string): BestForTableRow[] {
  const cfg = TRADE_CONFIGS.find((item) => item.slug === slug);
  if (!cfg) return comparisonTableRows;
  return cfg.picks.map((pick) => {
    const t = TOOL_SUMMARIES[pick];
    return {
      slug: pick,
      name: t.name,
      logoSrc: t.logoSrc,
      bestFor: t.bestFor,
      startingPrice: t.startingPrice,
      standoutFeature: t.standout,
      reviewHref: getCallTrackingReviewUrl(pick),
    };
  });
}

function makeTradePage(config: TradeConfig): BestForTemplateProps {
  const g = generatedScenario(config.slug);
  return {
    title: config.title,
    subtitle: config.subtitle,
    useCase: config.slug,
    categoryHref: "/call-tracking",
    categoryLabel: "Call Tracking",
    introParagraph: config.intro,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top call tracking picks for ${config.title.replace("Best Call Tracking Software for ", "").replace(" (2026)", "").toLowerCase()}.`,
    editorialSub: `What to evaluate when selecting call attribution software for ${config.title.replace("Best Call Tracking Software for ", "").replace(" (2026)", "").toLowerCase()}.`,
    whyThesePicksSub: "Why these tools fit this trade.",
    seeAlsoBlock: {
      roundupLabel: "Best call tracking software (2026) — full roundup",
      roundupHref: "/call-tracking/best-call-tracking-software",
      compareLabel: "Compare call tracking software",
      compareHref: "/call-tracking/compare",
    },
    featuredProducts: tradeFeatured(config.slug),
    comparisonTableRows: tradeTable(config.slug),
    editorialGuidance: g.editorial,
    whyThesePicks: g.picks.map((tool) => ({
      heading: tool,
      body: `${tool} is a strong fit for this trade when implemented with disciplined CRM outcomes and weekly attribution QA. Validate source-to-booked-job accuracy during pilot before scaling spend decisions.`,
    })),
    relatedReviews,
    relatedComparisons,
    relatedGuides: [
      { label: "How to track phone call conversions", href: `${GUIDES}/how-to-track-phone-call-conversions` },
      { label: "What is call tracking", href: `${GUIDES}/what-is-call-tracking` },
      { label: "Call tracking vs Google Analytics", href: `${GUIDES}/call-tracking-vs-google-analytics` },
      { label: "Lead generation strategies for local business", href: "/lead-generation/guides/lead-generation-strategies-for-local-business" },
      { label: "CRM software hub", href: "/crm" },
    ],
    faqItems: [
      { q: `What is the best call tracking software for ${config.title.replace("Best Call Tracking Software for ", "").replace(" (2026)", "").toLowerCase()}?`, a: `${g.picks.join(", ")} are strong options depending on attribution depth and operational complexity.` },
      { q: "How should teams prove ROI?", a: "Track source-level calls, qualification rates, and booked outcomes in CRM by campaign and service line." },
      { q: "What should be tested in a pilot?", a: "DNI reliability, CRM mapping, number pool sizing, and lead-quality tagging during real call volume." },
      { q: "When should teams upgrade tools?", a: "Upgrade when current reporting can no longer defend spend decisions or support required workflow complexity." },
    ],
  };
}

export const CALL_TRACKING_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = Object.fromEntries(
  TRADE_CONFIGS.map((config) => [config.slug, makeTradePage(config)])
);

CALL_TRACKING_BEST_FOR_BY_SLUG.roofers = CALL_TRACKING_BEST_FOR_BY_SLUG.roofing;
CALL_TRACKING_BEST_FOR_BY_SLUG.plumbers = CALL_TRACKING_BEST_FOR_BY_SLUG.plumbing;
CALL_TRACKING_BEST_FOR_BY_SLUG.landscapers = CALL_TRACKING_BEST_FOR_BY_SLUG.landscaping;
CALL_TRACKING_BEST_FOR_BY_SLUG.painters = CALL_TRACKING_BEST_FOR_BY_SLUG.painting;

export function getCallTrackingBestForPageProps(slug: string): BestForTemplateProps | null {
  return CALL_TRACKING_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getCallTrackingBestForSlugs(): string[] {
  return TRADE_CONFIGS.map((config) => config.slug);
}

export const CALL_TRACKING_BEST_FOR_METADATA_BY_SLUG: Record<
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
