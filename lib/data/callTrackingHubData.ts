import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getCallTrackingBestForUrl, getCallTrackingCompareUrl } from "@/lib/routes";
import { getCallTrackingCompareUrlFromSlug } from "@/lib/data/callTrackingComparisons";

const GUIDES_BASE = "/call-tracking/guides";

export type CallTrackingGuideCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const CALL_TRACKING_HUB_GUIDES: CallTrackingGuideCard[] = [
  {
    slug: "what-is-call-tracking",
    title: "What Is Call Tracking?",
    description:
      "Definitions, dynamic numbers, and why service businesses use call tracking to defend ad and SEO spend.",
    href: `${GUIDES_BASE}/what-is-call-tracking`,
  },
  {
    slug: "how-call-tracking-works",
    title: "How Call Tracking Works",
    description:
      "Swap scripts, pools, integrations, and QA—so your reports match real dispatch and CRM outcomes.",
    href: `${GUIDES_BASE}/how-call-tracking-works`,
  },
  {
    slug: "call-tracking-for-contractors",
    title: "Call Tracking for Contractors",
    description:
      "Trades, LSA, PPC, and organic—how to attribute calls and measure booked jobs, not vanity ring counts.",
    href: `${GUIDES_BASE}/call-tracking-for-contractors`,
  },
  {
    slug: "call-tracking-vs-google-analytics",
    title: "Call Tracking vs Google Analytics",
    description:
      "What GA4 shows versus telephony attribution—and when you need both for honest funnel math.",
    href: `${GUIDES_BASE}/call-tracking-vs-google-analytics`,
  },
  {
    slug: "how-to-track-phone-call-conversions",
    title: "How to Track Phone Call Conversions",
    description:
      "Goals, CRM stages, and reporting loops that tie marketing sources to revenue for local operators.",
    href: `${GUIDES_BASE}/how-to-track-phone-call-conversions`,
  },
];

export const CALL_TRACKING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Contractors proving marketing ROI",
    body: "Calls spike from LSA, PPC, and organic—without DNI and CRM outcomes you cannot tell which channel produces booked jobs. Start with one platform, tag sources consistently, and review weekly with dispatch.",
    links: [
      { label: "Best call tracking for contractors →", href: getCallTrackingBestForUrl("contractors") },
      { label: "CallRail vs WhatConverts →", href: getCallTrackingCompareUrlFromSlug("callrail-vs-whatconverts") },
    ],
  },
  {
    title: "Deep analytics vs simple lead rollups",
    body: "Paid search teams often need CallTrackingMetrics-style depth; owners may prefer WhatConverts-style lead clarity. Pick based on who actually logs in weekly—not feature checklists alone.",
    links: [
      { label: "CallRail vs CallTrackingMetrics →", href: getCallTrackingCompareUrlFromSlug("callrail-vs-calltrackingmetrics") },
      {
        label: "CallTrackingMetrics vs WhatConverts →",
        href: getCallTrackingCompareUrlFromSlug("calltrackingmetrics-vs-whatconverts"),
      },
    ],
  },
  {
    title: "Pair calls with pipeline truth",
    body: "Call tracking shows which touch produced the dial; CRM shows whether it became revenue. Wire both before you scale lead vendors or ad spend.",
    links: [
      { label: "CRM software hub →", href: "/crm" },
      { label: "Lead generation hub →", href: "/lead-generation" },
    ],
  },
  {
    title: "Website and organic measurement",
    body: "After you publish service pages, call tracking proves which URLs and SEO efforts earn phones. Our website builder hub helps you ship pages; this hub helps you measure calls from them.",
    links: [
      { label: "Website builders for contractors →", href: "/website-builders/best-for/contractors" },
      { label: "SEO tools hub →", href: "/seo-tools" },
    ],
  },
];

export type CallTrackingHubComparisonLink = { label: string; slug: string; href: string };

export const CALL_TRACKING_HUB_POPULAR_COMPARISONS: CallTrackingHubComparisonLink[] = [
  {
    label: "CallRail vs CallTrackingMetrics",
    slug: "callrail-vs-calltrackingmetrics",
    href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics"),
  },
  {
    label: "CallRail vs WhatConverts",
    slug: "callrail-vs-whatconverts",
    href: getCallTrackingCompareUrl("callrail-vs-whatconverts"),
  },
  {
    label: "CallTrackingMetrics vs WhatConverts",
    slug: "calltrackingmetrics-vs-whatconverts",
    href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
  },
  { label: "Ringba vs CallRail", slug: "ringba-vs-callrail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
  { label: "Invoca vs CallRail", slug: "invoca-vs-callrail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
];
