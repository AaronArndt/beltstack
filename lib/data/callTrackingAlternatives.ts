/**
 * Call tracking alternatives — CallRail, CallTrackingMetrics, WhatConverts.
 */

import type {
  AlternativesDetailBlock,
  AlternativesEditorialBlock,
  AlternativesLink,
  AlternativesTableRow,
  AlternativesTemplateProps,
  AlternativesTopPick,
} from "@/components/alternatives/AlternativesTemplate";
import { toAlternativesRelatedComparison } from "@/lib/alternatives/toAlternativesRelatedComparison";
import { getCallTrackingComparisonBySlug } from "@/lib/data/callTrackingComparisons";
import {
  getCallTrackingAlternativeUrl,
  getCallTrackingBestForUrl,
  getCallTrackingCompareUrl,
  getCallTrackingReviewUrl,
} from "@/lib/routes";

const CATEGORY = { href: "/call-tracking", label: "Call Tracking" };
const ROUNDUP_HREF = "/call-tracking/best-call-tracking-software";
const COMPARE_HUB = "/call-tracking/compare";
const GUIDES_HUB = "/call-tracking/guides";

const HUB_RELATED_RESOURCES: AlternativesLink[] = [
  { label: "Call tracking hub", href: CATEGORY.href },
  { label: "Best call tracking software", href: ROUNDUP_HREF },
  { label: "Compare call tracking software", href: COMPARE_HUB },
  { label: "Call tracking guides", href: GUIDES_HUB },
  { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
  { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
  { label: "Best for contractors", href: getCallTrackingBestForUrl("contractors") },
  { label: "Best for small business", href: getCallTrackingBestForUrl("small-business") },
  { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
  { label: "CRM software hub", href: "/crm" },
  { label: "SEO tools hub", href: "/seo-tools" },
];

function softwareReviewLinks(entries: [string, string][]): AlternativesLink[] {
  return entries.map(([slug, name]) => ({
    label: `${name} review`,
    href: getCallTrackingReviewUrl(slug),
  }));
}

const ALL_REVIEW_TUPLES: [string, string][] = [
  ["callrail", "CallRail"],
  ["calltrackingmetrics", "CallTrackingMetrics"],
  ["whatconverts", "WhatConverts"],
  ["ringba", "Ringba"],
  ["invoca", "Invoca"],
  ["twilio", "Twilio"],
  ["phonewagon", "PhoneWagon"],
  ["nimbata", "Nimbata"],
];

function rel(slug: string) {
  return toAlternativesRelatedComparison(getCallTrackingCompareUrl(slug), getCallTrackingComparisonBySlug(slug));
}

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  {
    heading: "CRM outcomes first",
    body: "Source-level call counts lie if nobody logs booked jobs. Push call events into CRM stages you already trust.",
  },
  {
    heading: "Number hygiene",
    body: "Dynamic pools need QA when pages, ads, or templates change—bad swaps create false organic or direct spikes.",
  },
  {
    heading: "Stack fit",
    body: "SMB trades rarely need buyer routers on day one; graduate when spend and complexity justify deeper analytics.",
  },
  {
    heading: "Pair with demand gen",
    body: "Call tracking proves which channels ring the phone—use our lead generation hub when you still need more raw opportunities.",
  },
];

function buildTableRows(original: AlternativesTableRow, alts: AlternativesTopPick[]): AlternativesTableRow[] {
  return [
    original,
    ...alts.map((a) => ({
      slug: a.slug,
      name: a.name,
      logoSrc: a.logoSrc,
      bestFor: a.bestFor,
      startingPrice: a.startingPrice ?? "—",
      standoutFeature: a.standoutFeature ?? a.bestFor,
      reviewHref: a.reviewHref,
    })),
  ];
}

const callrailAlts: AlternativesTopPick[] = [
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Heavier attribution",
    description: "When multi-touch models and automation matter more than fastest UI.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Attribution depth",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    rating: "4.5",
    bestFor: "Lead inbox clarity",
    description: "When you need calls + forms + chats in one marketing lead view.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$30/mo",
    standoutFeature: "Unified leads",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    logoSrc: "/Logos/phonewagon.jpeg",
    rating: "4.1",
    bestFor: "Lean tests",
    description: "Lightweight alternative when you are proving PPC before scaling.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Fast setup",
  },
  {
    slug: "invoca",
    name: "Invoca",
    logoSrc: "/Logos/invoca.png",
    rating: "4.4",
    bestFor: "Enterprise CI",
    description: "When conversation AI and compliance justify enterprise rollout.",
    reviewHref: getCallTrackingReviewUrl("invoca"),
    compareHref: getCallTrackingCompareUrl("invoca-vs-callrail"),
    startingPrice: "Enterprise",
    standoutFeature: "AI + governance",
  },
  {
    slug: "twilio",
    name: "Twilio",
    logoSrc: "/Logos/twilio.jpeg",
    rating: "4.2",
    bestFor: "Custom build",
    description: "Programmable telephony when off-the-shelf UIs will not fit.",
    reviewHref: getCallTrackingReviewUrl("twilio"),
    startingPrice: "Usage-based",
    standoutFeature: "API flexibility",
  },
];

const callrailOriginal: AlternativesTableRow = {
  slug: "callrail",
  name: "CallRail",
  logoSrc: "/Logos/callrail.jpeg",
  bestFor: "SMB marketing attribution",
  startingPrice: "From ~$45/mo",
  standoutFeature: "Integrations + DNI",
  reviewHref: getCallTrackingReviewUrl("callrail"),
};

const callrailDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallTrackingMetrics",
    heading: "Best deeper analytics",
    body: "When paid search teams need stronger multi-touch stories.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
  },
  {
    productName: "WhatConverts",
    heading: "Best lead rollups",
    body: "When marketing must show all capture types—not only calls.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
  },
  {
    productName: "PhoneWagon",
    heading: "Best quick start",
    body: "When you need proof on a small account before standardizing.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
  },
];

const callrailPage: AlternativesTemplateProps = {
  title: "Best CallRail Alternatives (2026)",
  subtitle:
    "If CallRail pricing, feature caps, or workflow gaps push you to switch—these alternatives span deeper analytics, lead rollups, and enterprise conversation intelligence.",
  productName: "CallRail",
  productSlug: "callrail",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("callrail"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallTrackingMetrics and WhatConverts are the common swaps—depth versus lead clarity. PhoneWagon fits lean tests; Invoca fits enterprise programs.",
    "Keep CRM tagging honest regardless of vendor.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Usage scaling", body: "Minutes and numbers climb faster than expected on busy accounts." },
    { heading: "Attribution depth", body: "Teams outgrow simpler models when budgets get scrutinized weekly." },
    { heading: "Lead types", body: "Marketing wants forms and chats in the same report as calls." },
  ],
  topAlternatives: callrailAlts,
  comparisonTableRows: buildTableRows(callrailOriginal, callrailAlts),
  detailedAlternatives: callrailDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    rel("callrail-vs-calltrackingmetrics"),
    rel("callrail-vs-whatconverts"),
    rel("ringba-vs-callrail"),
  ],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "Closest CallRail alternative?", a: "WhatConverts for lead rollups; CallTrackingMetrics for heavier attribution; PhoneWagon for lightweight entry." },
    { q: "Do I need Invoca instead?", a: "Only when enterprise AI, compliance, or franchise scale demands it—most local trades do not start there." },
  ],
};

const ctmAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "Faster SMB rollout",
    description: "When you want integrations and UI speed over maximum model depth.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Time-to-value",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    rating: "4.5",
    bestFor: "Lead clarity",
    description: "When stakeholders want simple lead proof—not telco dashboards.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
    startingPrice: "From ~$30/mo",
    standoutFeature: "Lead inbox",
  },
  {
    slug: "invoca",
    name: "Invoca",
    logoSrc: "/Logos/invoca.png",
    rating: "4.4",
    bestFor: "Enterprise upgrade",
    description: "When AI and governance justify a bigger stack.",
    reviewHref: getCallTrackingReviewUrl("invoca"),
    startingPrice: "Enterprise",
    standoutFeature: "Conversation AI",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    logoSrc: "/Logos/phonewagon.jpeg",
    rating: "4.1",
    bestFor: "Budget testing",
    description: "When you need to validate spend before committing to heavier tiers.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Simple UX",
  },
];

const ctmOriginal: AlternativesTableRow = {
  slug: "calltrackingmetrics",
  name: "CallTrackingMetrics",
  logoSrc: "/Logos/calltrackingmetrics.jpeg",
  bestFor: "Deep attribution",
  startingPrice: "From ~$120/mo",
  standoutFeature: "Automation + models",
  reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
};

const ctmDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best SMB speed",
    body: "When teams need working dashboards before modeling every touch.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
  },
  {
    productName: "WhatConverts",
    heading: "Best marketing lead view",
    body: "When calls are only part of the story.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
  },
  {
    productName: "Invoca",
    heading: "Best enterprise depth",
    body: "When conversation intelligence becomes mandatory.",
    reviewHref: getCallTrackingReviewUrl("invoca"),
  },
];

const ctmPage: AlternativesTemplateProps = {
  title: "Best CallTrackingMetrics Alternatives (2026)",
  subtitle:
    "If CallTrackingMetrics pricing, complexity, or integration gaps prompt a move—these tools cover lighter SMB stacks, lead rollups, and enterprise upgrades.",
  productName: "CallTrackingMetrics",
  productSlug: "calltrackingmetrics",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail is the common downgrade for speed; WhatConverts when marketing wants unified leads; Invoca when AI requirements appear.",
    "Document CRM stages before switching—otherwise the new tool inherits the same blind spots.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Admin load", body: "Some teams never finish configuration and pay for shelfware." },
    { heading: "Price vs usage", body: "Minutes and seats may outpace growth-stage budgets." },
    { heading: "Stakeholder clarity", body: "Owners may prefer simpler lead reports over deep funnels." },
  ],
  topAlternatives: ctmAlts,
  comparisonTableRows: buildTableRows(ctmOriginal, ctmAlts),
  detailedAlternatives: ctmDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    rel("callrail-vs-calltrackingmetrics"),
    rel("calltrackingmetrics-vs-whatconverts"),
    rel("ringba-vs-callrail"),
  ],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "Easier than CTM?", a: "Usually CallRail or WhatConverts depending on call-only vs multi-channel needs." },
    { q: "Still need CRM?", a: "Yes—attribution without outcomes still misallocates spend." },
  ],
};

const wcAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "Call-centric stacks",
    description: "When paid search and call workflows dominate and you want ecosystem breadth.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "DNI + ads",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Heavier models",
    description: "When you need automation and multi-touch beyond lead rollups.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Attribution",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    logoSrc: "/Logos/phonewagon.jpeg",
    rating: "4.1",
    bestFor: "Budget path",
    description: "When you want a lighter UI while testing channels.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Simple",
  },
  {
    slug: "nimbata",
    name: "Nimbata",
    logoSrc: "/Logos/nimbata.png",
    rating: "4.0",
    bestFor: "Privacy-led teams",
    description: "When EU hosting and compliance posture matter.",
    reviewHref: getCallTrackingReviewUrl("nimbata"),
    startingPrice: "From ~$29/mo",
    standoutFeature: "Privacy focus",
  },
];

const wcOriginal: AlternativesTableRow = {
  slug: "whatconverts",
  name: "WhatConverts",
  logoSrc: "/Logos/whatconverts.jpeg",
  bestFor: "Lead reporting",
  startingPrice: "From ~$30/mo",
  standoutFeature: "Calls + forms + chats",
  reviewHref: getCallTrackingReviewUrl("whatconverts"),
};

const wcDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best call-first alternative",
    body: "When phone attribution is the primary KPI.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
  },
  {
    productName: "CallTrackingMetrics",
    heading: "Best analytics upgrade",
    body: "When models and automation outgrow simple rollups.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
  },
  {
    productName: "PhoneWagon",
    heading: "Best lighter SMB",
    body: "When you need a smaller feature set and faster onboarding.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
  },
];

const wcPage: AlternativesTemplateProps = {
  title: "Best WhatConverts Alternatives (2026)",
  subtitle:
    "If WhatConverts limits, channel coverage, or pricing push you elsewhere—these options cover call-heavy stacks, deeper analytics, and lighter SMB tools.",
  productName: "WhatConverts",
  productSlug: "whatconverts",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("whatconverts"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail when calls dominate; CallTrackingMetrics when analytics must get heavier; PhoneWagon or Nimbata for budget or privacy positioning.",
    "Route outcomes to CRM regardless of vendor.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Channel gaps", body: "Some stacks need telco routing beyond marketing capture." },
    { heading: "Scaling tiers", body: "Lead volume may bump plans faster than expected." },
    { heading: "Depth vs clarity", body: "Operators sometimes want dashboards CallRail or CTM provide." },
  ],
  topAlternatives: wcAlts,
  comparisonTableRows: buildTableRows(wcOriginal, wcAlts),
  detailedAlternatives: wcDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    rel("callrail-vs-whatconverts"),
    rel("calltrackingmetrics-vs-whatconverts"),
    rel("callrail-vs-calltrackingmetrics"),
  ],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    { q: "Best WhatConverts alternative for contractors?", a: "Often CallRail for PPC + LSA call proof; add CRM tagging for booked jobs." },
    { q: "When choose CTM?", a: "When multi-touch defense and automation justify premium spend." },
  ],
};

const pages: Record<string, AlternativesTemplateProps> = {
  callrail: callrailPage,
  calltrackingmetrics: ctmPage,
  whatconverts: wcPage,
};

export function getCallTrackingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getCallTrackingAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
