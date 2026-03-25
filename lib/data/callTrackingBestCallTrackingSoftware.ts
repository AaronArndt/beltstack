import {
  getCallTrackingBestForUrl,
  getCallTrackingCompareUrl,
  getCallTrackingReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";

export type BestCallTrackingPick = SoftwarePickCardContent & {
  standoutFeature: string;
};

export const TOP_PICKS: BestCallTrackingPick[] = [
  {
    slug: "callrail",
    name: "CallRail",
    badge: "Best for SMB marketing attribution",
    comparisonTableBestFor: "Dynamic numbers, form tracking, and CRM handoffs",
    description: "CallRail pairs clean attribution with workflows local marketers actually adopt.",
    rating: "4.6",
    startingPrice: "From ~$45/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.callrail.com",
    logoSrc: "/Logos/callrail.jpeg",
    compareSlugs: ["callrail-vs-calltrackingmetrics", "callrail-vs-whatconverts", "ringba-vs-callrail"],
    standoutFeature: "Keyword-level call attribution + integrations",
    editorialParagraph:
      "CallRail is the default shortlist when agencies and in-house teams need multi-channel attribution without enterprise procurement. Service businesses still need disciplined number pools and CRM hygieneâ€”software does not replace call scripts.",
    pros: ["Broad integration marketplace", "Keyword and session context", "Approachable reporting for owners"],
    cons: ["Costs scale with numbers and minutes", "Heavy ad platforms need ongoing QA", "Not a full contact center"],
    pricingSummary: "Per-number and usage tiersâ€”model against active campaigns and locations.",
    alternativesSlug: "callrail",
  },
  {
    slug: "calltrackingmetrics",
    name: "CallTrackingMetrics",
    badge: "Best operator-grade analytics",
    comparisonTableBestFor: "Deep reporting for paid search and multi-touch paths",
    description: "CTM focuses on marketers who live in attribution reports and budget defense.",
    rating: "4.5",
    startingPrice: "From ~$120/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.calltrackingmetrics.com",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    compareSlugs: ["callrail-vs-calltrackingmetrics", "calltrackingmetrics-vs-whatconverts", "ringba-vs-callrail"],
    standoutFeature: "Attribution depth + automation rules",
    editorialParagraph:
      "CallTrackingMetrics fits teams that defend ROI weeklyâ€”expect more configuration than lighter SMB tools. Pair with clear CRM stages so call outcomes map to revenue.",
    pros: ["Strong multi-touch models", "Automation and routing options", "Agency-friendly reporting"],
    cons: ["Steeper learning curve", "Premium positioning", "Needs internal owner"],
    pricingSummary: "Usage-based; validate seat and minute assumptions before annual commits.",
    alternativesSlug: "calltrackingmetrics",
  },
  {
    slug: "whatconverts",
    name: "WhatConverts",
    badge: "Best lead reporting clarity",
    comparisonTableBestFor: "Calls, forms, and chats in one lead inbox",
    description: "WhatConverts emphasizes lead-level reporting that owners and sales managers understand.",
    rating: "4.5",
    startingPrice: "From ~$30/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.whatconverts.com",
    logoSrc: "/Logos/whatconverts.jpeg",
    compareSlugs: ["callrail-vs-whatconverts", "calltrackingmetrics-vs-whatconverts"],
    standoutFeature: "Unified lead capture reporting",
    editorialParagraph:
      "WhatConverts wins when you need one place to prove marketing-sourced leadsâ€”not just call volume. Still wire outcomes into your CRM so booked jobs tell the truth.",
    pros: ["Clear lead-centric UI", "Multi-channel capture", "Good export and reporting basics"],
    cons: ["Advanced routing may need other tools", "Scaling pricing needs review", "Less telco depth than Ringba-class stacks"],
    pricingSummary: "Tiered by leads and featuresâ€”align to monthly qualified lead volume.",
    alternativesSlug: "whatconverts",
  },
  {
    slug: "invoca",
    name: "Invoca",
    badge: "Best enterprise conversation intelligence",
    comparisonTableBestFor: "High-volume programs with AI and compliance needs",
    description: "Invoca targets sophisticated paid media and franchise programs that need signal beyond simple DNI.",
    rating: "4.4",
    startingPrice: "Custom / enterprise",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.invoca.com",
    logoSrc: "/Logos/invoca.png",
    compareSlugs: ["invoca-vs-callrail", "callrail-vs-calltrackingmetrics"],
    standoutFeature: "AI + revenue signals at scale",
    editorialParagraph:
      "Invoca is overkill for a single-truck operatorâ€”but strong when marketing ops and legal need conversation analytics tied to revenue. SMBs usually start with CallRail-class stacks first.",
    pros: ["Conversation AI depth", "Enterprise integrations", "Strong for regulated verticals"],
    cons: ["Not self-serve cheap", "Implementation effort", "Heavy for solo trades"],
    pricingSummary: "Enterprise quotesâ€”budget implementation and ongoing admin.",
    alternativesSlug: "invoca",
  },
];

export const CALL_TRACKING_REGISTRY_SUPPLEMENT: SoftwarePickCardContent[] = [
  {
    slug: "ringba",
    name: "Ringba",
    badge: "Best for buyer / pay-per-call scale",
    comparisonTableBestFor: "Telco routing and buyer workflows",
    description: "Ringba is built for performance marketers and call buyers who need granular routingâ€”not a casual SMB dashboard.",
    rating: "4.3",
    startingPrice: "Usage / custom",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.ringba.com",
    logoSrc: "/Logos/ringba.jpeg",
    compareSlugs: ["ringba-vs-callrail", "callrail-vs-calltrackingmetrics"],
    standoutFeature: "Carrier-grade routing and monetization",
    editorialParagraph:
      "Ringba shines when calls are inventoryâ€”less so when a local contractor just needs one tracked line per Google Ads campaign.",
    pros: ["Deep routing logic", "Built for scale", "Buyer-centric tooling"],
    cons: ["Complex for beginners", "Not a gentle SMB onboarding", "Ops overhead"],
    pricingSummary: "Typically customâ€”align with call volume economics.",
    alternativesSlug: "ringba",
  },
  {
    slug: "twilio",
    name: "Twilio",
    badge: "Best programmable telephony",
    comparisonTableBestFor: "Custom call tracking on APIs",
    description: "Twilio lets developers build exactly the capture and routing you wantâ€”if you have engineering time.",
    rating: "4.2",
    startingPrice: "Pay-as-you-go",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.twilio.com",
    logoSrc: "/Logos/twilio.jpeg",
    compareSlugs: ["callrail-vs-calltrackingmetrics", "callrail-vs-whatconverts"],
    standoutFeature: "APIs + global numbers",
    editorialParagraph:
      "Choose Twilio when you need bespoke workflows; choose CallRail or WhatConverts when you want dashboards this week.",
    pros: ["Maximum flexibility", "Huge global footprint", "Strong docs"],
    cons: ["You build and maintain it", "Attribution is DIY", "Cost surprises without guardrails"],
    pricingSummary: "Metered usageâ€”model per minute and per number.",
    alternativesSlug: "twilio",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    badge: "Best simple agency starter",
    comparisonTableBestFor: "Lightweight DNI for small accounts",
    description: "PhoneWagon keeps call tracking approachable for lean agencies and SMBs testing paid search.",
    rating: "4.1",
    startingPrice: "From ~$45/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.phonewagon.com",
    logoSrc: "/Logos/phonewagon.jpeg",
    compareSlugs: ["callrail-vs-whatconverts", "callrail-vs-calltrackingmetrics"],
    standoutFeature: "Fast setup",
    editorialParagraph:
      "PhoneWagon trades some enterprise depth for speedâ€”great when you need proof of concept before standardizing on a flagship platform.",
    pros: ["Simple UI", "Quick number provisioning", "Affordable entry"],
    cons: ["Fewer advanced analytics", "Smaller integration long tail", "May outgrow on complex accounts"],
    pricingSummary: "Check included numbers and minutes vs your ad footprint.",
    alternativesSlug: "phonewagon",
  },
  {
    slug: "nimbata",
    name: "Nimbata",
    badge: "Best EU-friendly option",
    comparisonTableBestFor: "GDPR-conscious teams needing call analytics",
    description: "Nimbata focuses on privacy-minded call analytics with solid website attribution basics.",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://nimbata.com",
    logoSrc: "/Logos/nimbata.png",
    compareSlugs: ["callrail-vs-whatconverts", "calltrackingmetrics-vs-whatconverts"],
    standoutFeature: "Privacy-first positioning",
    editorialParagraph:
      "Consider Nimbata when compliance and EU hosting matter as much as keyword attributionâ€”US-heavy stacks may not fit.",
    pros: ["Privacy positioning", "Straightforward dashboards", "Website + ads focus"],
    cons: ["Smaller brand footprint", "Fewer telco power features", "Ecosystem varies by region"],
    pricingSummary: "Tiered plansâ€”confirm recording and storage rules for your region.",
    alternativesSlug: "nimbata",
  },
];

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for contractors",
    href: getCallTrackingBestForUrl("contractors"),
    description: "Dispatch-friendly attribution and CRM handoffs.",
  },
  {
    label: "Best for small business",
    href: getCallTrackingBestForUrl("small-business"),
    description: "Lean stacks that prove marketing ROI without shelfware.",
  },
  {
    label: "Best for HVAC",
    href: getCallTrackingBestForUrl("hvac"),
    description: "Seasonal demand, emergency calls, and LSA overlap.",
  },
  {
    label: "Best for home services",
    href: getCallTrackingBestForUrl("home-services"),
    description: "Multi-trade operators juggling numbers and markets.",
  },
  {
    label: "Best for plumbing",
    href: getCallTrackingBestForUrl("plumbing"),
    description: "Emergency calls, GBP alignment, and paid search proof.",
  },
  {
    label: "Best for electricians",
    href: getCallTrackingBestForUrl("electricians"),
    description: "Commercial vs residential intent and multi-county programs.",
  },
  {
    label: "Best for roofing",
    href: getCallTrackingBestForUrl("roofing"),
    description: "Retail vs storm funnels without blended ROI math.",
  },
];

export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "Contractors", href: getCallTrackingBestForUrl("contractors") },
  { label: "HVAC", href: getCallTrackingBestForUrl("hvac") },
  { label: "Plumbing", href: getCallTrackingBestForUrl("plumbing") },
  { label: "Electricians", href: getCallTrackingBestForUrl("electricians") },
  { label: "Roofing", href: getCallTrackingBestForUrl("roofing") },
  { label: "Home services", href: getCallTrackingBestForUrl("home-services") },
  { label: "Small business", href: getCallTrackingBestForUrl("small-business") },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
  { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
  { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
  { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
  { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "What is call tracking for contractors?",
    a: "Dynamic numbers and session data tie phone calls to marketing sourcesâ€”Google Ads, LSA, SEO landing pages, or directoriesâ€”so you know what actually produces booked jobs, not just ring volume.",
  },
  {
    q: "Do I need CallRail and a CRM?",
    a: "Call tracking proves source; CRM proves outcome. Push call events and outcomes together so cost-per-booked-job math is honest.",
  },
  {
    q: "Will call tracking hurt SEO?",
    a: "When implemented with swap scripts and consistent NAP, reputable tools avoid harming local SEO. Misconfigured hard-coded numbers on every page canâ€”follow vendor guidance.",
  },
];

export const MORE_CALL_TRACKING_OPTIONS: {
  slug: string;
  name: string;
  description: string;
  reviewHref: string;
  logoSrc: string;
}[] = [
  {
    slug: "ringba",
    name: "Ringba",
    description: "Performance routing for buyers and high-volume programs.",
    reviewHref: getCallTrackingReviewUrl("ringba"),
    logoSrc: "/Logos/ringba.jpeg",
  },
  {
    slug: "twilio",
    name: "Twilio",
    description: "Programmable voice and SMS for custom stacks.",
    reviewHref: getCallTrackingReviewUrl("twilio"),
    logoSrc: "/Logos/twilio.jpeg",
  },
  {
    slug: "phonewagon",
    name: "PhoneWagon",
    description: "Lightweight tracking for lean teams.",
    reviewHref: getCallTrackingReviewUrl("phonewagon"),
    logoSrc: "/Logos/phonewagon.jpeg",
  },
  {
    slug: "nimbata",
    name: "Nimbata",
    description: "Privacy-forward analytics for EU-heavy teams.",
    reviewHref: getCallTrackingReviewUrl("nimbata"),
    logoSrc: "/Logos/nimbata.png",
  },
];
