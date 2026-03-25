/**
 * Call tracking alternatives — full product set with dedicated pages for each reviewed vendor.
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
  { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
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
    body: "Source-level call counts lie if nobody logs booked jobs. Push call events into CRM stages you already trust, and define qualified leads versus spam or wrong-number calls before you blame the platform.",
  },
  {
    heading: "Number hygiene and DNI QA",
    body: "Audit pools after site launches, template refreshes, and GBP edits—broken swaps inflate direct or organic and make every alternative look magical until you fix the underlying tag problem.",
  },
  {
    heading: "Match depth to who owns the login",
    body: "Operator-grade analytics pay off when someone reviews dashboards weekly. If nobody has that habit, a clearer roll-up tool often beats a powerful stack that goes unused.",
  },
  {
    heading: "Migration discipline",
    body: "Export historical summaries where you can, freeze UTM and integration patterns, and run parallel reporting for one cycle when budget allows—cuts backward-looking fights that derail renewals.",
  },
  {
    heading: "Reconcile LSA, PPC, and organic",
    body: "Local Services Ads, paid search, and SEO pages often touch the same homeowner. Align tags and attribution rules so you are not double-counting credit when you evaluate a swap.",
  },
  {
    heading: "Separate volume from proof",
    body: "Call tracking proves which touch earned the dial; it does not replace thin demand. If the real issue is not enough opportunities, fix SEO pages, lead programs, and creative—not only the tracker.",
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
    "CallTrackingMetrics and WhatConverts are the common swaps—multi-touch depth versus unified calls, forms, and chats in one marketing-facing inbox. PhoneWagon fits lean PPC proofs; Invoca only when conversation AI, compliance, or franchise governance truly mandates it.",
    "Most local service marketers still default to CallRail-class breadth for Google Ads plus LSA plus website DNI—switch because of real limits, not because a competitor’s deck looked shinier.",
    "Keep CRM tagging and booked-job stages honest regardless of vendor—otherwise every alternative inherits the same blind spots inside prettier charts.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Usage scaling", body: "Minutes, numbers, and seats climb faster than finance modeled—especially when seasonal demand and extra locations hit the same account." },
    { heading: "Attribution depth", body: "Paid teams outgrow first-touch vanity when budgets get defended weekly and assists actually matter to leadership." },
    { heading: "Lead types", body: "Marketing wants forms, chats, and calls in one export so sales does not argue over channel credit in spreadsheets." },
    { heading: "Integration or routing edge cases", body: "Niche CRM fields, franchise roll-ups, or telco scenarios sometimes push teams toward a specialist stack sooner than expected." },
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
    {
      q: "What is the closest CallRail alternative?",
      a: "WhatConverts when marketing needs one inbox for calls, forms, and chats; CallTrackingMetrics when paid search teams need stronger models and automation; PhoneWagon when you only need a fast PPC proof before you standardize.",
    },
    {
      q: "Do I need Invoca instead of CallRail?",
      a: "Only when conversation intelligence, compliance workflows, and revenue-system integrations are non-negotiable—typical two-truck operators and lean agencies rarely start there.",
    },
    {
      q: "Will switching platforms fix bad attribution?",
      a: "Not if CRM stages, number pools, or UTM hygiene are broken. Fix swaps, reconcile GBP and site numbers, and train reps on dispositions before you pay migration costs.",
    },
    {
      q: "CallRail vs call forwarding or a single tracked line?",
      a: "Forwarding hides marketing context; DNI preserves session and campaign data so cost-per-booked-job math is honest. A single static line works for smoke tests, not scaling PPC plus LSA.",
    },
    {
      q: "How long should a CallRail migration take?",
      a: "Simple SMB footprints often move in days; multi-brand or franchise programs need longer if you parallel-run reporting, re-tag CRM fields, and QA pools after launch—plan one clean cutover window, not endless overlap.",
    },
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
    "CallRail is the usual downgrade when you need approachable UI and integrations faster than you can finish CTM-style configuration; WhatConverts when stakeholders want unified marketing leads, not telco dashboards.",
    "Invoca still belongs on the shortlist only when conversation AI and enterprise governance are explicit requirements—not when admins are simply underwater on CTM setup.",
    "Document CRM stages, conversion definitions, and integration contracts before you switch—otherwise the replacement tool inherits the same pipeline blind spots in a new interface.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Admin load", body: "Teams that never finish rules, tags, and automation pay for shelfware while finance asks why dashboards are still empty." },
    { heading: "Price vs usage", body: "Minutes, seats, and sub-accounts can outpace growth-stage budgets—especially when agencies multiply small accounts under one mothership." },
    { heading: "Stakeholder clarity", body: "Owners and sales leaders may prefer simple lead rollups over deep funnel models nobody reviews." },
    { heading: "Vendor fatigue", body: "Renewals sharpen when a flagship platform feels heavy for the problems you actually solve weekly—lighter tools win on habits, not feature matrices." },
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
    {
      q: "What is easier than CallTrackingMetrics for a small team?",
      a: "CallRail when call-centric marketing and integrations matter most; WhatConverts when you need calls plus forms and chats in one roll-up without heavy admin.",
    },
    {
      q: "Do I still need a CRM if I use CallTrackingMetrics?",
      a: "Yes—attribution shows which touch produced the dial; CRM shows booked revenue and loss reasons. Without both, you still misallocate budget toward noisy channels.",
    },
    {
      q: "When is CallTrackingMetrics worth the premium?",
      a: "When someone owns weekly budget defense, multi-touch models, or automation—and actually logs in. If nobody will maintain rules, a lighter stack saves money and blame.",
    },
    {
      q: "Should agencies standardize every client on CTM?",
      a: "Only when client workload justifies admin time. Small local accounts often need CallRail- or WhatConverts-class simplicity; reserve CTM for accounts that need depth and pay for the hours.",
    },
    {
      q: "Can I downgrade from CTM without losing historical proof?",
      a: "Export reports and key metrics where possible, snapshot integration mappings, and run parallel tagging for at least one cycle. You will lose some model nuance—communicate the tradeoff to leadership before you cut over.",
    },
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
    "CallRail when phone attribution and ad workflows dominate; CallTrackingMetrics when automation and multi-touch defense outgrow simple lead roll-ups; PhoneWagon for budget-friendly pilots; Nimbata when EU privacy posture is part of the scorecard.",
    "WhatConverts wins clarity for marketing-sourced leads—if your pain is buyer routing at massive scale, you are comparing the wrong category and may need Ringba-class tooling instead.",
    "Route outcomes into CRM regardless of vendor so booked jobs and bad-lead reasons—not ring counts—drive spend decisions.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Channel or routing gaps", body: "Pure marketing capture may not satisfy telco-heavy routing, marketplace programs, or exotic integration requirements." },
    { heading: "Scaling tiers", body: "Qualified lead volume jumps can move you between pricing bands faster than quarterly planning assumed." },
    { heading: "Depth vs clarity tension", body: "Operators sometimes want CallRail- or CTM-style dashboards when roll-ups feel too shallow for their defense narrative." },
    { heading: "Stakeholder reporting", body: "Franchise or multi-brand reporting templates may push teams toward a different export or drill-down story than WhatConverts emphasizes out of the box." },
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
    {
      q: "What is the best WhatConverts alternative for contractors?",
      a: "CallRail is the common default for Google Ads, LSA, and website DNI with broad integrations; pair it with disciplined CRM stages for booked jobs. Choose CallTrackingMetrics when paid teams need heavier models weekly.",
    },
    {
      q: "When should I pick CallTrackingMetrics over WhatConverts?",
      a: "When multi-touch attribution, rules, and automation—not just a clean lead inbox—justify premium spend and you have an owner who maintains configuration.",
    },
    {
      q: "Does WhatConverts replace my CRM?",
      a: "No—it clarifies marketing-sourced capture; CRM still owns pipeline, revenue stages, and dispatch outcomes.",
    },
    {
      q: "What if we only care about calls today but forms are coming?",
      a: "WhatConverts is built for that transition. If you know calls will stay the only KPI for years, CallRail may feel more native—but revisit before multi-channel reporting becomes mandatory.",
    },
    {
      q: "How do I avoid double-counting LSA and PPC?",
      a: "Align UTM, integration mapping, and weekly reconciliation with ops—no call tracker fixes policy fights if credit rules differ by department.",
    },
  ],
};

const ringbaOriginal: AlternativesTableRow = {
  slug: "ringba",
  name: "Ringba",
  logoSrc: "/Logos/ringba.jpeg",
  bestFor: "Buyer routing & pay-per-call scale",
  startingPrice: "Custom / usage",
  standoutFeature: "Carrier-grade routing",
  reviewHref: getCallTrackingReviewUrl("ringba"),
};

const ringbaAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "SMB marketing stacks",
    description: "When you need DNI and dashboards without operating a telco control plane.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("ringba-vs-callrail"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Time-to-value",
  },
  {
    slug: "invoca",
    name: "Invoca",
    logoSrc: "/Logos/invoca.png",
    rating: "4.4",
    bestFor: "Enterprise conversation AI",
    description: "When regulated or franchise programs need signal extraction, not just routing trees.",
    reviewHref: getCallTrackingReviewUrl("invoca"),
    compareHref: getCallTrackingCompareUrl("invoca-vs-callrail"),
    startingPrice: "Enterprise",
    standoutFeature: "AI + governance",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Paid-search attribution",
    description: "When marketing ops still need multi-touch stories without full buyer-marketplace depth.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Attribution depth",
  },
  {
    slug: "twilio",
    name: "Twilio",
    logoSrc: "/Logos/twilio.jpeg",
    rating: "4.2",
    bestFor: "Fully custom build",
    description: "When engineers need APIs instead of a packaged buyer UI.",
    reviewHref: getCallTrackingReviewUrl("twilio"),
    startingPrice: "Usage-based",
    standoutFeature: "Programmable voice",
  },
];

const ringbaDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best path back to SMB marketing",
    body: "Most local contractors who trial Ringba by mistake belong on CallRail-class stacks first.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("ringba-vs-callrail"),
  },
  {
    productName: "Invoca",
    heading: "Best enterprise upgrade",
    body: "When AI, compliance, and revenue teams need shared call truth—not just ping trees.",
    reviewHref: getCallTrackingReviewUrl("invoca"),
  },
  {
    productName: "Twilio",
    heading: "Best DIY telco",
    body: "When your product team must own routing logic in code.",
    reviewHref: getCallTrackingReviewUrl("twilio"),
  },
];

const ringbaPage: AlternativesTemplateProps = {
  title: "Best Ringba Alternatives (2026)",
  subtitle:
    "If Ringba buyer workflows and ops overhead exceed what your team runs today—these tools cover SMB attribution, enterprise conversation intelligence, and custom telephony builds.",
  productName: "Ringba",
  productSlug: "ringba",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("ringba"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail is the usual downgrade for marketing-led local businesses that need DNI and honest campaign proof—not buyer payouts and waterfall logic. Invoca enters when conversation AI and compliance are the mandate; Twilio when engineers must own routing in code.",
    "Ringba fits pay-per-call economics and traffic desks—if your problem is which LSA keyword booked jobs, you probably needed CallRail-class marketing attribution first.",
    "Keep buyer economics and lead-quality truth separate—deeper routing does not fix junk calls if sourcing and caps are misaligned.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Ops load", body: "Ringba shines with dedicated traffic managers, finance alignment on payouts, and QA habits—many SMBs lack that bench." },
    { heading: "Contractor reality", body: "Single-location trades rarely need buyer waterfalls on day one; they need credible proof for Ads, LSA, and website CTAs." },
    { heading: "Faster proof", body: "Marketing teams often want working swap scripts and dashboards this sprint—not a multi-week telco implementation." },
    { heading: "Procurement and stack fit", body: "Enterprise buyers sometimes discover Ringba is the wrong category entirely and need marketing attribution or CI—not marketplace routing." },
  ],
  topAlternatives: ringbaAlts,
  comparisonTableRows: buildTableRows(ringbaOriginal, ringbaAlts),
  detailedAlternatives: ringbaDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("ringba-vs-callrail"), rel("invoca-vs-callrail"), rel("callrail-vs-calltrackingmetrics")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "Ringba vs CallRail for contractors—which do I pick?",
      a: "CallRail for typical local marketing attribution—Google Ads, LSA, and website calls. Ringba when you buy or monetize call volume at scale with buyer rules, caps, and payouts—not for a single-truck SEO plus PPC shop.",
    },
    {
      q: "When is Ringba the right pick?",
      a: "Pay-per-call programs, aggregators, and teams that treat calls as inventory with margin rules, disputes, and operational staff to run them.",
    },
    {
      q: "Can I run Ringba for one location?",
      a: "You can, but the economics rarely justify the overhead. Unless calls are a traded asset, marketing DNI stacks usually return value faster with lower ops burden.",
    },
    {
      q: "Ringba vs Invoca—how do I choose?",
      a: "Ringba when routing, buyers, and payout logic dominate; Invoca when conversation intelligence, compliance, and revenue signals tied to enterprise CRM are the driver. Many SMBs need neither on day one.",
    },
    {
      q: "What should I document before leaving Ringba?",
      a: "Buyer contracts, routing rules, dispute workflows, and finance reconciliation habits—downgrading without mapping those flows creates instant revenue and QA chaos.",
    },
  ],
};

const invocaOriginal: AlternativesTableRow = {
  slug: "invoca",
  name: "Invoca",
  logoSrc: "/Logos/invoca.png",
  bestFor: "Enterprise conversation intelligence",
  startingPrice: "Enterprise / custom",
  standoutFeature: "AI + revenue signals",
  reviewHref: getCallTrackingReviewUrl("invoca"),
};

const invocaAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "Pragmatic SMB path",
    description: "When you need attribution without enterprise procurement and services-heavy rollout.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("invoca-vs-callrail"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "DNI + integrations",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Deep paid-media analytics",
    description: "When marketing ops need automation and models but not full conversation-AI suites.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Multi-touch",
  },
  {
    slug: "ringba",
    name: "Ringba",
    logoSrc: "/Logos/ringba.jpeg",
    rating: "4.3",
    bestFor: "Buyer & routing scale",
    description: "When performance routing and call monetization—not AI scoring—are the core problem.",
    reviewHref: getCallTrackingReviewUrl("ringba"),
    compareHref: getCallTrackingCompareUrl("ringba-vs-callrail"),
    startingPrice: "Custom / usage",
    standoutFeature: "Telco routing",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    rating: "4.5",
    bestFor: "Unified marketing leads",
    description: "When stakeholders want calls, forms, and chats in one roll-up—not conversation models.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$30/mo",
    standoutFeature: "Lead inbox",
  },
];

const invocaDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best SMB replacement",
    body: "When two-truck operators or lean agencies do not need AI governance committees.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("invoca-vs-callrail"),
  },
  {
    productName: "CallTrackingMetrics",
    heading: "Best analytics without full CI",
    body: "When paid search teams need defense-ready models before conversation AI is justified.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
  },
  {
    productName: "Ringba",
    heading: "Best routing-first alternative",
    body: "When buyers and waterfalls matter more than NLP on transcripts.",
    reviewHref: getCallTrackingReviewUrl("ringba"),
  },
];

const invocaPage: AlternativesTemplateProps = {
  title: "Best Invoca Alternatives (2026)",
  subtitle:
    "If Invoca cost, implementation timeline, or feature depth exceeds your stage—these options span SMB attribution, operator-grade analytics, buyer routing, and simpler lead rollups.",
  productName: "Invoca",
  productSlug: "invoca",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("invoca"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail covers most local service marketers who need credible DNI and integrations; CallTrackingMetrics when paid programs need heavier models and automation; WhatConverts when marketing wants one roll-up for calls, forms, and chats.",
    "Ringba belongs in the conversation when routing and buyer economics—not NLP on transcripts—are the core pain, though that is a different buyer profile than typical Invoca replacement projects.",
    "Document legal, retention, and data-processing requirements before you rip out Invoca—compliance and audit workflows are often the original purchase trigger.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Budget reset", body: "Enterprise quotes plus implementation partners can outpace mid-market ARR and procurement patience." },
    { heading: "Time to value", body: "Lean teams may need working dashboards in weeks while Invoca-class programs measure quarters." },
    { heading: "Feature fit", body: "Not every brand needs conversation scoring on every line—sometimes honest source tags and CRM stages solve 80% of the argument." },
    { heading: "Org change", body: "Champions leave, programs get deprioritized, and a lighter stack matches the team you have—not the roadmap you postponed." },
  ],
  topAlternatives: invocaAlts,
  comparisonTableRows: buildTableRows(invocaOriginal, invocaAlts),
  detailedAlternatives: invocaDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("invoca-vs-callrail"), rel("callrail-vs-calltrackingmetrics"), rel("callrail-vs-whatconverts")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "What is the closest Invoca alternative?",
      a: "CallTrackingMetrics for analytics-heavy marketing teams that need models and rules; CallRail for typical contractor and SMB stacks focused on ads and website attribution; WhatConverts when marketing wants unified leads without full conversation AI.",
    },
    {
      q: "When should we keep Invoca?",
      a: "When AI scoring, compliance workflows, revenue integrations, and governance are non-negotiable—and stakeholders will fund administration, not just licenses.",
    },
    {
      q: "What do we lose leaving Invoca for CallRail or WhatConverts?",
      a: "Enterprise-grade conversation intelligence depth, some governance patterns, and possibly specific revenue connectors. You may gain speed, simpler admin, and lower TCO—if those tradeoffs match legal sign-off.",
    },
    {
      q: "Invoca vs CallTrackingMetrics for paid search teams?",
      a: "CTM when weekly budget defense and automation are the job; Invoca when transcript-level signals must flow into enterprise revenue ops with strict controls.",
    },
    {
      q: "How should we plan an Invoca downgrade?",
      a: "Run a requirements matrix with legal and finance, export historical reports, map CRM and ad integrations, and plan parallel tagging before you cut conversation workflows sales relies on.",
    },
  ],
};

const twilioOriginal: AlternativesTableRow = {
  slug: "twilio",
  name: "Twilio",
  logoSrc: "/Logos/twilio.jpeg",
  bestFor: "Programmable telephony",
  startingPrice: "Pay-as-you-go",
  standoutFeature: "APIs + global reach",
  reviewHref: getCallTrackingReviewUrl("twilio"),
};

const twilioAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "Managed marketing UI",
    description: "When you want DNI, reporting, and ad integrations without owning telephony code.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Attribution UI",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    logoSrc: "/Logos/phonewagon.jpeg",
    rating: "4.1",
    bestFor: "Lightweight SMB",
    description: "When Twilio was overkill but you still need a simple tracked number story.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Fast setup",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    rating: "4.5",
    bestFor: "Lead rollups",
    description: "When marketing needs calls plus forms and chats—not raw SIP plumbing.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$30/mo",
    standoutFeature: "Multi-channel",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Operator analytics",
    description: "When you outgrow spreadsheets but still do not want to maintain voice infrastructure.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Automation",
  },
];

const twilioDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best buy over build",
    body: "Default recommendation when engineering time is the bottleneck.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
  },
  {
    productName: "PhoneWagon",
    heading: "Best quick compromise",
    body: "When you need a UI this week while you plan a longer Twilio architecture.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
  },
  {
    productName: "WhatConverts",
    heading: "Best marketing-led stack",
    body: "When leads are multi-channel and product does not want to own every webhook.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
  },
];

const twilioPage: AlternativesTemplateProps = {
  title: "Best Twilio Alternatives (2026)",
  subtitle:
    "If maintaining voice APIs, metering, and attribution logic in-house is slowing you down—these platforms ship dashboards, DNI, and CRM handoffs so your team focuses on campaigns—not telco ops.",
  productName: "Twilio",
  productSlug: "twilio",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("twilio"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail is the usual escape hatch when marketing needs packaged DNI, reports, and ad integrations; WhatConverts when forms and chats must sit beside calls; PhoneWagon for lean proofs before you pick a flagship.",
    "CallTrackingMetrics fits when you need operator analytics without owning voice infrastructure end-to-end.",
    "Keep Twilio when embedded telephony in your product, exotic compliance chains, or routing logic that breaks canned UIs truly requires code you intend to maintain.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Engineering cost", body: "Every new attribution question becomes a ticket when dashboards are DIY—marketing churn waits on deploys." },
    { heading: "Meter surprises", body: "Usage bills spike without alerts and budgets non-technical owners can read." },
    { heading: "Time to insight", body: "Leaders want Friday answers—not a backlog of telco chores." },
    { heading: "Operational risk", body: "On-call burden for voice outages and webhook failures may belong with a vendor SLA, not your smallest engineering team." },
  ],
  topAlternatives: twilioAlts,
  comparisonTableRows: buildTableRows(twilioOriginal, twilioAlts),
  detailedAlternatives: twilioDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("callrail-vs-whatconverts"), rel("callrail-vs-calltrackingmetrics"), rel("calltrackingmetrics-vs-whatconverts")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "Twilio vs CallRail—which should we pick?",
      a: "Twilio when engineers own programmable voice and you accept ongoing build and metering discipline; CallRail when marketing needs working DNI and integrations without shipping internal software.",
    },
    {
      q: "When does staying on Twilio still make sense?",
      a: "When embedded telephony is part of your product, when compliance recording chains cannot be replicated in SMB trackers, or when routing logic truly exceeds packaged UIs.",
    },
    {
      q: "How do we control Twilio billing surprises?",
      a: "Finance-owned alerts, caps on numbers and minutes, monthly reviews, and clear ownership of recording storage—metered stacks punish optimistic assumptions.",
    },
    {
      q: "Can Twilio replace marketing call tracking entirely?",
      a: "Only if you build the attribution layer yourself—there is no default marketing dashboard until your team ships it.",
    },
    {
      q: "What is the fastest path off Twilio for an SMB marketer?",
      a: "PhoneWagon for quick tests; CallRail or WhatConverts when integrations and longevity matter—validate CRM handoffs in a pilot before you commit.",
    },
  ],
};

const phonewagonOriginal: AlternativesTableRow = {
  slug: "phonewagon",
  name: "PhoneWagon",
  logoSrc: "/Logos/phonewagon.jpeg",
  bestFor: "Lean PPC call tracking",
  startingPrice: "From ~$45/mo",
  standoutFeature: "Simple onboarding",
  reviewHref: getCallTrackingReviewUrl("phonewagon"),
};

const phonewagonAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "Scale & integrations",
    description: "When accounts grow past a few numbers and need a deeper integration marketplace.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Ecosystem",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    rating: "4.5",
    bestFor: "Lead inbox",
    description: "When you need forms and chats alongside calls in one export-friendly view.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$30/mo",
    standoutFeature: "Multi-channel",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Heavier analytics",
    description: "When budget defense requires automation and multi-touch—not just call logs.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Models + rules",
  },
  {
    slug: "nimbata",
    name: "Nimbata",
    logoSrc: "/Logos/nimbata.png",
    rating: "4.0",
    bestFor: "Privacy positioning",
    description: "When EU clients or legal ask for a privacy-forward analytics story.",
    reviewHref: getCallTrackingReviewUrl("nimbata"),
    startingPrice: "From ~$29/mo",
    standoutFeature: "GDPR-friendly",
  },
];

const phonewagonDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best standard upgrade",
    body: "When locations, seats, or integration count outgrow PhoneWagon’s sweet spot.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
  },
  {
    productName: "WhatConverts",
    heading: "Best when leads are not just calls",
    body: "When marketing reports need web forms and chat in the same frame as phones.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
  },
  {
    productName: "CallTrackingMetrics",
    heading: "Best analytics step-up",
    body: "When paid search teams need more than basic DNI reporting.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
  },
];

const phonewagonPage: AlternativesTemplateProps = {
  title: "Best PhoneWagon Alternatives (2026)",
  subtitle:
    "If PhoneWagon’s limits on scale, channels, or integrations show up as you grow—these tools add ecosystem depth, lead rollups, analytics, or privacy positioning without forcing enterprise Day One.",
  productName: "PhoneWagon",
  productSlug: "phonewagon",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("phonewagon"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail is the natural graduation when agencies standardize on broader integrations, more seats, and multi-location reality; WhatConverts when marketing must report calls, forms, and chats in one export for skeptical stakeholders.",
    "CallTrackingMetrics enters when paid programs need automation and budget defense—not just call logs—from accounts that outgrew pilot pricing.",
    "Validate CRM tagging, answer speed, and disposition habits before you blame the UI—lightweight tools often look broken when process, not capability, is the gap.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Multi-location scale", body: "Pools, permissions, and reporting can strain lighter tiers when brands multiply trucks or cities." },
    { heading: "Channel mix", body: "Teams adding heavy web-form or chat volume want unified lead views PhoneWagon may not emphasize." },
    { heading: "Client expectations", body: "Enterprise-leaning brands may demand connectors and governance PhoneWagon does not prioritize on the roadmap." },
    { heading: "Retention economics", body: "Renewals force honest math—sometimes a flagship costs less than staff time lost to workarounds." },
  ],
  topAlternatives: phonewagonAlts,
  comparisonTableRows: buildTableRows(phonewagonOriginal, phonewagonAlts),
  detailedAlternatives: phonewagonDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("callrail-vs-whatconverts"), rel("callrail-vs-calltrackingmetrics"), rel("calltrackingmetrics-vs-whatconverts")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "PhoneWagon vs CallRail—when do I switch?",
      a: "PhoneWagon when you need a fast PPC proof or pilot; CallRail when integration breadth, scale, and client standardization make rework expensive.",
    },
    {
      q: "What is the cheapest upgrade if we need forms and chats too?",
      a: "WhatConverts often wins when multi-channel lead proof is the real gap—compare tiers to your qualified lead volume, not peak spam weeks.",
    },
    {
      q: "How do agencies run pilots without painting themselves into a corner?",
      a: "Document the migration path to your standard stack upfront, align on client tiers, and avoid bespoke setups you cannot repeat—pilots should validate process, not one-off hacks.",
    },
    {
      q: "Should we consider Nimbata after PhoneWagon?",
      a: "When EU clients or legal reviews care about privacy positioning and data-handling narrative—not every US-heavy shop needs that detour.",
    },
    {
      q: "Does PhoneWagon replace Invoca or Ringba?",
      a: "No—those buyers solve different problems. If you are in pilot territory with PhoneWagon, you are unlikely to need enterprise CI or buyer waterfalls yet.",
    },
  ],
};

const nimbataOriginal: AlternativesTableRow = {
  slug: "nimbata",
  name: "Nimbata",
  logoSrc: "/Logos/nimbata.png",
  bestFor: "Privacy-forward call analytics",
  startingPrice: "From ~$29/mo",
  standoutFeature: "EU-friendly positioning",
  reviewHref: getCallTrackingReviewUrl("nimbata"),
};

const nimbataAlts: AlternativesTopPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    logoSrc: "/Logos/callrail.jpeg",
    rating: "4.6",
    bestFor: "US-heavy stacks",
    description: "When you need the broadest ad and CRM ecosystem and US operations dominate.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Integrations",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    logoSrc: "/Logos/whatconverts.jpeg",
    rating: "4.5",
    bestFor: "Lead clarity",
    description: "When marketing wants simple rollups and exports—similar buyer to Nimbata’s SMB focus.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
    startingPrice: "From ~$30/mo",
    standoutFeature: "Lead inbox",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    logoSrc: "/Logos/phonewagon.jpeg",
    rating: "4.1",
    bestFor: "Budget simplicity",
    description: "Another lightweight option when privacy is not the primary buying trigger.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
    startingPrice: "From ~$45/mo",
    standoutFeature: "Fast setup",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    rating: "4.5",
    bestFor: "Deep compliance + ops",
    description: "When legal and marketing jointly need granular controls beyond a slim UI.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    compareHref: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
    startingPrice: "From ~$120/mo",
    standoutFeature: "Automation",
  },
];

const nimbataDetailed: AlternativesDetailBlock[] = [
  {
    productName: "CallRail",
    heading: "Best ecosystem breadth",
    body: "When US campaigns need every mainstream integration—even if privacy marketing is quieter.",
    reviewHref: getCallTrackingReviewUrl("callrail"),
  },
  {
    productName: "WhatConverts",
    heading: "Best comparable lead UX",
    body: "When you still want marketing-friendly rollups with a different vendor posture.",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    compareHref: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
  },
  {
    productName: "CallTrackingMetrics",
    heading: "Best operator-grade controls",
    body: "When GDPR is only one part of a broader governance story.",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
  },
];

const nimbataPage: AlternativesTemplateProps = {
  title: "Best Nimbata Alternatives (2026)",
  subtitle:
    "If Nimbata’s footprint, channel coverage, or roadmap does not match your market—these options cover US-heavy integrations, multi-channel lead inboxes, and heavier marketing ops platforms.",
  productName: "Nimbata",
  productSlug: "nimbata",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getCallTrackingReviewUrl("nimbata"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "CallRail or WhatConverts are common when teams pivot back to US-centric stacks with broader connector marketplaces; CallTrackingMetrics when compliance conversations pair with automation and weekly ops discipline.",
    "PhoneWagon can be a pragmatic bridge when you need simplicity and the privacy story is not the primary trigger.",
    "Involve legal early on recording, storage region, retention, and consent language before you migrate—tools do not replace counsel-approved policies.",
  ],
  whyPeopleLookForAlternatives: [
    { heading: "Geography and certification", body: "US franchises may prioritize vendors their agencies and procurement already certify, even when EU posture was the initial hook." },
    { heading: "Connector gaps", body: "Some ad platforms or CRM edge cases are stronger in incumbents with larger integration long tails." },
    { heading: "Growth path", body: "Maturing marketing ops sometimes needs routing or automation depth Nimbata does not emphasize on paper." },
    { heading: "RFP scoring reality", body: "Privacy positioning may win evaluations while day-to-day users still demand familiar export paths and ad workflows." },
  ],
  topAlternatives: nimbataAlts,
  comparisonTableRows: buildTableRows(nimbataOriginal, nimbataAlts),
  detailedAlternatives: nimbataDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("callrail-vs-whatconverts"), rel("calltrackingmetrics-vs-whatconverts"), rel("callrail-vs-calltrackingmetrics")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "Nimbata vs CallRail in the US—which wins?",
      a: "CallRail usually wins on mainstream ad and CRM connector breadth for US-heavy footprints; Nimbata when EU privacy positioning, data residency narrative, or procurement scoring favors it.",
    },
    {
      q: "We need forms and calls in one view—what is next after Nimbata?",
      a: "WhatConverts is a common next look for unified marketing leads with a different vendor posture; validate channel list and export needs before you rip integrations.",
    },
    {
      q: "How do we handle call recording and GDPR together?",
      a: "Align with counsel on consent, retention, storage region, and access controls—vendor choice does not replace documented policy your team actually follows.",
    },
    {
      q: "When is Nimbata the right long-term pick?",
      a: "When ongoing compliance narrative, EU client mix, and roadmap trust match your risk profile—not when the only pain is a missing niche US connector you need next quarter.",
    },
    {
      q: "What should we export before switching away from Nimbata?",
      a: "Reports, integration field maps, and consent documentation snapshots—parallel-tag a subset of campaigns if leadership needs continuity through a full quarter.",
    },
  ],
};

const pages: Record<string, AlternativesTemplateProps> = {
  callrail: callrailPage,
  calltrackingmetrics: ctmPage,
  whatconverts: wcPage,
  ringba: ringbaPage,
  invoca: invocaPage,
  twilio: twilioPage,
  phonewagon: phonewagonPage,
  nimbata: nimbataPage,
};

export function getCallTrackingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getCallTrackingAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
