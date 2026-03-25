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

export const CALL_TRACKING_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage(
    "small-business",
    "Best Call Tracking Software for Small Business (2026)",
    "Prove which ads, pages, and directories drive calls—without enterprise overhead or shelfware.",
    "Small businesses win when every tracked call ties to a source and booked-job outcomes land in CRM. Start with one primary platform, verify number pools after site changes, and add depth only when usage justifies cost.",
    [
      { heading: "CRM discipline", body: "Source tags without closed-won stages still hide waste spend." },
      { heading: "Avoid duplicate tools", body: "Do not pay for two DNI layers—pick one system of record." },
      { heading: "Minute math", body: "Model renewals against peak season call volume, not quiet weeks." },
    ],
    [
      { heading: "CallRail", body: "Best default when you run Google Ads, LSA, and website leads together." },
      { heading: "WhatConverts", body: "Best when marketing must show forms and chats alongside calls." },
      { heading: "CallTrackingMetrics", body: "Best when paid search teams need stronger attribution stories." },
    ],
    [{ q: "Free call forwarding enough?", a: "Forwarding hides marketing source—use DNI when you spend on ads or SEO pages." }],
    [
      { label: "What is call tracking", href: `${GUIDES}/what-is-call-tracking` },
      { label: "How call tracking works", href: `${GUIDES}/how-call-tracking-works` },
    ]
  ),
  contractors: makePage(
    "contractors",
    "Best Call Tracking for Contractors (2026)",
    "Dispatch-heavy trades need honest source data on emergency and estimate calls—not vanity ring counts.",
    "Contractors live on the phone: LSA, PPC, organic, and referrals blend fast. Call tracking should show which channels produce booked jobs when paired with CRM stages—not just which ads rang most.",
    [
      { heading: "Speed to lead", body: "Shared marketplace leads punish slow answer—tracking proves which sources your team actually converts." },
      { heading: "Service-area honesty", body: "Geo-targeted numbers should match trucks, not fantasy ZIPs." },
      { heading: "Website + ads together", body: "Swap scripts must survive template updates and seasonal landing pages." },
    ],
    [
      { heading: "CallRail", body: "Strong when you juggle Ads, LSA, and website CTAs for crews." },
      { heading: "WhatConverts", body: "Useful when sales wants one lead feed from web forms and calls." },
      { heading: "CallTrackingMetrics", body: "Fits growing ops teams defending multi-channel spend weekly." },
    ],
    [{ q: "Call tracking vs CRM alone?", a: "CRM shows outcomes; call tracking shows which marketing touch produced the dial—use both." }],
    [
      { label: "Call tracking for contractors", href: `${GUIDES}/call-tracking-for-contractors` },
      { label: "How to track phone call conversions", href: `${GUIDES}/how-to-track-phone-call-conversions` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best Call Tracking for HVAC (2026)",
    "Seasonal spikes and emergency intent mean you must know which campaigns survive heat waves.",
    "HVAC marketers often scale spend in summer without knowing which keywords survived after-hours volume. Attribution should align with dispatch reality and CRM close reasons.",
    [
      { heading: "Segment campaigns", body: "Separate repair, replace, and maintenance sources before judging ROI." },
      { heading: "After-hours proof", body: "Track whether night/weekend calls book or burn minutes." },
      { heading: "LSA + PPC overlap", body: "Use consistent tagging so double-counting does not inflate perceived performance." },
    ],
    [
      { heading: "CallRail", body: "Solid when LSA and PPC run in parallel with organic pages." },
      { heading: "CallTrackingMetrics", body: "Helps when budgets are scrutinized weekly across channels." },
      { heading: "WhatConverts", body: "Good when web forms and chat augment phone during peak season." },
    ],
    [{ q: "HVAC need Invoca?", a: "Usually not until franchise or enterprise conversation-AI requirements appear." }],
    [
      { label: "Call tracking vs Google Analytics", href: `${GUIDES}/call-tracking-vs-google-analytics` },
      { label: "How call tracking works", href: `${GUIDES}/how-call-tracking-works` },
    ]
  ),
  plumbing: makePage(
    "plumbing",
    "Best Call Tracking for Plumbers (2026)",
    "Emergency searches convert on the phone—know which pages and ads earn those dials.",
    "Plumbing demand is urgent; call tracking ties bursts to campaigns and landing pages. Pair with CRM so booked jobs—not raw rings—define success.",
    [
      { heading: "Keyword honesty", body: "Cheap clicks that never book still show as calls—score outcomes." },
      { heading: "GBP + site alignment", body: "Numbers on GBP and website should reconcile in reporting." },
      { heading: "Review velocity", body: "Tracking proves marketing-sourced calls; reviews still influence close rate." },
    ],
    [
      { heading: "CallRail", body: "Common pick for Google Ads and local landing pages." },
      { heading: "WhatConverts", body: "Helps when quote forms and calls both matter." },
      { heading: "PhoneWagon", body: "Lightweight when testing a new PPC market." },
    ],
    [{ q: "Plumbers: cheapest option?", a: "PhoneWagon or WhatConverts entry tiers can work—upgrade when multi-location or complex attribution appears." }],
    [
      { label: "Call tracking for contractors", href: `${GUIDES}/call-tracking-for-contractors` },
      { label: "How to track phone call conversions", href: `${GUIDES}/how-to-track-phone-call-conversions` },
    ]
  ),
  electricians: makePage(
    "electricians",
    "Best Call Tracking for Electricians (2026)",
    "Commercial vs residential intent differs—segment sources before you scale spend.",
    "Electrical contractors need clarity on which campaigns produce panel upgrades versus quick service calls. Call tracking plus CRM stages prevents optimizing for the wrong ticket type.",
    [
      { heading: "Intent alignment", body: "Match landing pages to the jobs your licensed crew wants." },
      { heading: "Trust and compliance", body: "Recorded calls can help QA—follow consent rules in your state." },
      { heading: "Multi-location brands", body: "Number pools per territory reduce cross-market confusion." },
    ],
    [
      { heading: "CallRail", body: "Works well for paid + organic blends across counties." },
      { heading: "CallTrackingMetrics", body: "Useful when multiple campaigns need defended reporting." },
      { heading: "WhatConverts", body: "Helps when web leads and calls both feed sales." },
    ],
    [{ q: "Electricians need Ringba?", a: "Rarely unless you monetize or buy call volume at scale." }],
    [
      { label: "What is call tracking", href: `${GUIDES}/what-is-call-tracking` },
      { label: "Call tracking vs Google Analytics", href: `${GUIDES}/call-tracking-vs-google-analytics` },
    ]
  ),
  roofing: makePage(
    "roofing",
    "Best Call Tracking for Roofers (2026)",
    "Retail replacement and storm surges need different funnels—do not blend their economics in one bucket.",
    "Roofing marketers often spike spend after weather events. Call tracking should show which sources still work when demand normalizes—and which only looked good during CAT mode.",
    [
      { heading: "Segment campaigns", body: "Tag storm, insurance, and retail funnels separately." },
      { heading: "Photo + proof pages", body: "Calls from strong project pages behave differently than generic city pages." },
      { heading: "Franchise caution", body: "After acquisitions, reconcile numbers and CRM fields before trusting old reports." },
    ],
    [
      { heading: "CallRail", body: "Reliable for multi-market paid programs." },
      { heading: "WhatConverts", body: "Helps when forms and calls both feed sales during surges." },
      { heading: "Invoca", body: "Consider only at enterprise scale with conversation-AI requirements." },
    ],
    [{ q: "Roofing and Invoca?", a: "National brands sometimes justify it; most local roofers start with CallRail-class stacks." }],
    [
      { label: "Call tracking for contractors", href: `${GUIDES}/call-tracking-for-contractors` },
      { label: "How call tracking works", href: `${GUIDES}/how-call-tracking-works` },
    ]
  ),
  "home-services": makePage(
    "home-services",
    "Best Call Tracking for Home Services (2026)",
    "Multi-trade operators need one attribution story—without double-counting leads across brands.",
    "Home services groups juggle brands, zip codes, and lead vendors. Call tracking should map sources cleanly into CRM so cost-per-booked-job is honest across trades.",
    [
      { heading: "Single source of truth", body: "Avoid parallel DNI stacks that disagree on the same landing page." },
      { heading: "Vendor + owned demand", body: "Tag marketplace leads separately from website and ads." },
      { heading: "Ops feedback loop", body: "Dispatch should confirm bad lead reasons so marketing stops buying them." },
    ],
    [
      { heading: "CallRail", body: "Broad fit for mixed paid + organic programs." },
      { heading: "WhatConverts", body: "Strong when multiple capture types must roll up for leadership." },
      { heading: "CallTrackingMetrics", body: "Helps sophisticated marketing ops teams standardize reporting." },
    ],
    [{ q: "Home services need enterprise tools?", a: "Start mid-market; graduate when compliance, AI, or buyer routing demands it." }],
    [
      { label: "Lead generation strategies for local business", href: "/lead-generation/guides/lead-generation-strategies-for-local-business" },
      { label: "How to track phone call conversions", href: `${GUIDES}/how-to-track-phone-call-conversions` },
    ]
  ),
};

export function getCallTrackingBestForPageProps(slug: string): BestForTemplateProps | null {
  return CALL_TRACKING_BEST_FOR_BY_SLUG[slug] ?? null;
}

export function getCallTrackingBestForSlugs(): string[] {
  return Object.keys(CALL_TRACKING_BEST_FOR_BY_SLUG);
}
