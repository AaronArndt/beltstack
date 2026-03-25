/**
 * Call tracking software reviews — cluster parity with lead-generation / SEO tools.
 */

import type { ReviewTemplateProps } from "@/components/reviews/ReviewTemplate";
import {
  getCallTrackingAlternativeUrl,
  getCallTrackingBestForUrl,
  getCallTrackingCompareUrl,
  getCallTrackingReviewUrl,
} from "@/lib/routes";

export type CallTrackingReviewData = Omit<ReviewTemplateProps, "categoryHref"> & { categoryHref: string };

const CATEGORY_HREF = "/call-tracking";
const ROUNDUP_HREF = "/call-tracking/best-call-tracking-software";
const COMPARE_HUB = "/call-tracking/compare";
const GUIDES_HREF = "/call-tracking/guides";

const SCENARIOS = [
  { label: "Contractors", href: getCallTrackingBestForUrl("contractors") },
  { label: "Small business", href: getCallTrackingBestForUrl("small-business") },
  { label: "HVAC", href: getCallTrackingBestForUrl("hvac") },
  { label: "Plumbing", href: getCallTrackingBestForUrl("plumbing") },
  { label: "Home services", href: getCallTrackingBestForUrl("home-services") },
];

const METHODOLOGY: CallTrackingReviewData["methodology"] = {
  title: "How we review call tracking software",
  sub: "Local service business lens.",
  introParagraph:
    "We evaluate call tracking for how it helps contractors and marketers prove which channels produce booked jobs—not vanity ring counts.",
  bullets: [
    "We stress-test attribution for Google Ads, LSA, SEO pages, and directories.",
    "We compare pricing that scales with numbers, minutes, and seats.",
    "We map tools to realistic CRM follow-up and QA habits.",
  ],
};

const CT_SHELL: Pick<
  CallTrackingReviewData,
  | "category"
  | "categoryHref"
  | "methodology"
  | "compareSectionTitle"
  | "bestPayrollSoftwareHref"
  | "compareHubHref"
  | "compareHubLabel"
  | "bestRoundupLabel"
  | "bestForSectionTitle"
  | "bestForSectionSub"
  | "scenarioLinks"
  | "guideHubHref"
  | "guideHubLabel"
  | "popularIndustryLinks"
> = {
  category: "Call Tracking",
  categoryHref: CATEGORY_HREF,
  methodology: METHODOLOGY,
  compareSectionTitle: "Compare with other call tracking platforms",
  bestPayrollSoftwareHref: ROUNDUP_HREF,
  compareHubHref: COMPARE_HUB,
  compareHubLabel: "Compare call tracking software",
  bestRoundupLabel: "Best call tracking software (2026) — full roundup",
  bestForSectionTitle: "Best call tracking software for different use cases",
  bestForSectionSub: "Scenario picks for service businesses and agencies.",
  scenarioLinks: SCENARIOS,
  guideHubHref: GUIDES_HREF,
  guideHubLabel: "Call tracking guides",
  popularIndustryLinks: [
    { label: "Best for contractors", href: getCallTrackingBestForUrl("contractors") },
    { label: "Best for HVAC", href: getCallTrackingBestForUrl("hvac") },
    { label: "Best for plumbers", href: getCallTrackingBestForUrl("plumbing") },
    { label: "Best for roofers", href: getCallTrackingBestForUrl("roofing") },
    { label: "Best for home services", href: getCallTrackingBestForUrl("home-services") },
  ],
};

function alt(name: string, slug: string, description: string, logo: string) {
  return { name, href: getCallTrackingReviewUrl(slug), description, logoSrc: logo };
}

function rb(tool: string): NonNullable<CallTrackingReviewData["ratingBreakdown"]> {
  return [
    { category: "Features", score: "4.5", explanation: `${tool} covers DNI, reporting, and integrations local teams need.` },
    { category: "Pricing", score: "4.2", explanation: "Usage and number pools drive renewals—model minutes honestly." },
    { category: "Ease of Use", score: "4.3", explanation: "Dashboards vary; expect setup time for swap scripts and QA." },
    { category: "Support", score: "4.1", explanation: "Quality tracks with tier; SMBs often rely on docs and chat." },
    { category: "Contractor fit", score: "4.4", explanation: "Weighted toward LSA, Google Ads, and website call proof." },
  ];
}

const RELATED_CROSS = [
  { label: "Lead generation tools hub", href: "/lead-generation" },
  { label: "CRM software hub", href: "/crm" },
  { label: "SEO tools hub", href: "/seo-tools" },
  { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
];

const reviews: Record<string, CallTrackingReviewData> = {
  callrail: {
    ...CT_SHELL,
    toolName: "CallRail",
    rating: "4.6",
    startingPrice: "From ~$45/mo",
    bestFor: "SMB and agency teams needing keyword-level call attribution",
    visitUrl: "https://www.callrail.com",
    logoSrc: "/Logos/callrail.jpeg",
    quickVerdict: "CallRail is the pragmatic default when local marketers need working DNI without enterprise procurement.",
    quickVerdictParagraphs: [
      "CallRail pairs swap numbers with Google Ads, LSA, and organic landing pages so you can defend spend with call outcomes—not guesses.",
      "Still tag booked jobs in your CRM; attribution without outcomes hides bad channels.",
      "Compare CallRail vs CallTrackingMetrics when analytics depth matters more than speed.",
    ],
    ratingBreakdown: rb("CallRail"),
    compareLinks: [
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
    ],
    pros: ["Broad integrations", "Keyword and session context", "Owner-friendly reporting"],
    cons: ["Usage can climb with scale", "Needs ongoing swap QA", "Not a contact center"],
    bestForEditorial: "Contractors, agencies, and SMB marketers running paid + organic together.",
    whoShouldAvoid: "Pure call buyers needing carrier-grade monetization routing day one.",
    pricingSummary: "Per-number and usage tiers—confirm pools per location.",
    features: ["Dynamic number insertion", "Form tracking", "Call recording", "Integrations"],
    keyFeatures: [
      { name: "Source attribution", description: "Tie calls to campaigns, keywords, and landing pages." },
      { name: "CRM handoffs", description: "Push events into pipelines you already run." },
    ],
    integrations: ["Google Ads", "GA4", "HubSpot", "Salesforce", "Zapier"],
    integrationsIntro: "Most teams connect ads and CRM within the first two weeks.",
    contractorUse: ["LSA + PPC proof", "SEO page testing", "Franchise rollups"],
    alternatives: [
      alt("CallTrackingMetrics", "calltrackingmetrics", "Deeper attribution models", "/Logos/calltrackingmetrics.jpeg"),
      alt("WhatConverts", "whatconverts", "Lead inbox reporting", "/Logos/whatconverts.jpeg"),
      alt("PhoneWagon", "phonewagon", "Lightweight alternative", "/Logos/phonewagon.jpeg"),
    ],
    faqs: [{ q: "CallRail vs free call forwarding?", a: "Forwarding hides source; DNI preserves campaign context for ROI math." }],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("callrail"),
    alternativesPageLabel: "Best CallRail alternatives (2026)",
  },
  calltrackingmetrics: {
    ...CT_SHELL,
    toolName: "CallTrackingMetrics",
    rating: "4.5",
    startingPrice: "From ~$120/mo",
    bestFor: "Teams that need multi-touch attribution and automation",
    visitUrl: "https://www.calltrackingmetrics.com",
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    quickVerdict: "CallTrackingMetrics rewards teams that live in dashboards defending paid budgets.",
    quickVerdictParagraphs: [
      "Expect more configuration than lighter tools—and more signal when CRM stages are clean.",
      "See CallTrackingMetrics vs WhatConverts when lead rollups matter as much as call paths.",
    ],
    ratingBreakdown: rb("CallTrackingMetrics"),
    compareLinks: [
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
      { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
    ],
    pros: ["Strong attribution models", "Automation", "Agency reporting"],
    cons: ["Learning curve", "Premium pricing", "Needs an internal owner"],
    bestForEditorial: "Paid search heavy operators and agencies managing complex accounts.",
    whoShouldAvoid: "Solo owners who will never open reporting weekly.",
    pricingSummary: "Usage-based—validate minutes and seats.",
    features: ["Attribution", "Routing", "Forms", "Reporting"],
    keyFeatures: [
      { name: "Multi-touch", description: "Map assists and calls to campaigns." },
      { name: "Rules", description: "Automate tags and routes after qualifying events." },
    ],
    integrations: ["Google Ads", "Meta", "Salesforce", "HubSpot"],
    integrationsIntro: "Connect ad platforms first, then CRM for closed-loop proof.",
    contractorUse: ["Multi-location PPC", "Franchise marketing ops"],
    alternatives: [
      alt("CallRail", "callrail", "Faster SMB rollout", "/Logos/callrail.jpeg"),
      alt("WhatConverts", "whatconverts", "Lead-centric UI", "/Logos/whatconverts.jpeg"),
    ],
    faqs: [{ q: "CTM for one truck?", a: "Often overkill until paid spend justifies deeper analytics." }],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("calltrackingmetrics"),
    alternativesPageLabel: "Best CallTrackingMetrics alternatives (2026)",
  },
  whatconverts: {
    ...CT_SHELL,
    toolName: "WhatConverts",
    rating: "4.5",
    startingPrice: "From ~$30/mo",
    bestFor: "Teams that want calls, forms, and chats in one lead view",
    visitUrl: "https://www.whatconverts.com",
    logoSrc: "/Logos/whatconverts.jpeg",
    quickVerdict: "WhatConverts makes marketing-sourced leads legible for owners who do not live in ad platforms.",
    quickVerdictParagraphs: [
      "Great when you need one inbox to prove marketing—not just Telco metrics.",
      "Pair with CRM so qualified vs booked is obvious.",
    ],
    ratingBreakdown: rb("WhatConverts"),
    compareLinks: [
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
    ],
    pros: ["Lead clarity", "Multi-channel capture", "Straightforward pricing tiers"],
    cons: ["Less telco depth than Ringba", "Advanced routing may need partners", "Integration depth varies"],
    bestForEditorial: "SMB marketers proving total leads to sales leaders.",
    whoShouldAvoid: "Call monetization programs needing buyer routing.",
    pricingSummary: "Lead-based tiers—match to monthly qualified volume.",
    features: ["Call tracking", "Form tracking", "Chat", "Reporting"],
    keyFeatures: [
      { name: "Lead inbox", description: "See every marketing lead in one place." },
      { name: "Quotes", description: "Export proof for stakeholders fast." },
    ],
    integrations: ["Google Ads", "CRM connectors", "Analytics"],
    integrationsIntro: "Start with ads + website capture, then expand channels.",
    contractorUse: ["Home services funnels", "Website + LSA blends"],
    alternatives: [
      alt("CallRail", "callrail", "Call-forward workflows", "/Logos/callrail.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Heavier analytics", "/Logos/calltrackingmetrics.jpeg"),
    ],
    faqs: [{ q: "WhatConverts vs analytics only?", a: "GA shows sessions; WhatConverts ties identifiable leads to sources." }],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("whatconverts"),
    alternativesPageLabel: "Best WhatConverts alternatives (2026)",
  },
  ringba: {
    ...CT_SHELL,
    toolName: "Ringba",
    rating: "4.3",
    startingPrice: "Custom / usage",
    bestFor: "Performance marketers and call buyers at scale",
    visitUrl: "https://www.ringba.com",
    logoSrc: "/Logos/ringba.jpeg",
    quickVerdict: "Ringba is telco muscle for people who treat calls as inventory—not a gentle SMB onboarding.",
    quickVerdictParagraphs: [
      "Local contractors rarely start here unless they buy or sell call volume professionally.",
      "See Ringba vs CallRail for SMB-oriented contrast.",
    ],
    ratingBreakdown: rb("Ringba"),
    compareLinks: [
      { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
    ],
    pros: ["Routing depth", "Buyer workflows", "Scale"],
    cons: ["Complex", "Not beginner-friendly", "Ops overhead"],
    bestForEditorial: "Pay-per-call and performance programs.",
    whoShouldAvoid: "Typical single-location trades without call monetization.",
    pricingSummary: "Custom—negotiate on volume.",
    features: ["Routing", "Reporting", "Buyers", "Compliance tooling"],
    keyFeatures: [{ name: "Carrier logic", description: "Route and price calls programmatically." }],
    integrations: ["Buyer platforms", "BI exports"],
    integrationsIntro: "Expect engineering or ops partners for setup.",
    contractorUse: ["Large buyer programs", "Aggregators"],
    alternatives: [
      alt("CallRail", "callrail", "SMB marketing stack", "/Logos/callrail.jpeg"),
      alt("Invoca", "invoca", "Enterprise CI", "/Logos/invoca.png"),
    ],
    faqs: [{ q: "Ringba for my plumbing shop?", a: "Usually no—start with CallRail-class tools unless you monetize calls." }],
    relatedReading: RELATED_CROSS,
  },
  invoca: {
    ...CT_SHELL,
    toolName: "Invoca",
    rating: "4.4",
    startingPrice: "Enterprise / custom",
    bestFor: "Enterprise programs needing AI and compliance on calls",
    visitUrl: "https://www.invoca.com",
    logoSrc: "/Logos/invoca.png",
    quickVerdict: "Invoca adds conversation intelligence where revenue and risk require proof—not for the average two-truck HVAC shop.",
    quickVerdictParagraphs: [
      "Strong when legal, finance, and marketing all need the same call truth.",
      "Compare Invoca vs CallRail for pragmatic SMB contrast.",
    ],
    ratingBreakdown: rb("Invoca"),
    compareLinks: [
      { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
    ],
    pros: ["Conversation AI", "Enterprise integrations", "Governance"],
    cons: ["Cost", "Implementation", "Heavy admin"],
    bestForEditorial: "Franchise, telecom-adjacent, and regulated verticals at scale.",
    whoShouldAvoid: "Solo operators without marketing ops.",
    pricingSummary: "Quoted—budget services, not just licenses.",
    features: ["Signal extraction", "Routing", "Integrations", "Compliance"],
    keyFeatures: [{ name: "AI signals", description: "Score outcomes and intent on calls." }],
    integrations: ["Adobe", "Salesforce", "Google", "Custom"],
    integrationsIntro: "Implementation partners common for mid-market+.",
    contractorUse: ["National brands", "Franchise HQs"],
    alternatives: [
      alt("CallRail", "callrail", "SMB-friendly", "/Logos/callrail.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Mid-market analytics", "/Logos/calltrackingmetrics.jpeg"),
    ],
    faqs: [{ q: "Invoca vs CallRail for contractors?", a: "CallRail unless you are enterprise-scale with AI requirements." }],
    relatedReading: RELATED_CROSS,
  },
  twilio: {
    ...CT_SHELL,
    toolName: "Twilio",
    rating: "4.2",
    startingPrice: "Pay-as-you-go",
    bestFor: "Teams building custom call tracking on APIs",
    visitUrl: "https://www.twilio.com",
    logoSrc: "/Logos/twilio.jpeg",
    quickVerdict: "Twilio is the build-it-yourself path—powerful if you have developers, slow if you do not.",
    quickVerdictParagraphs: [
      "Use Twilio when off-the-shelf attribution cannot fit your routing or compliance model.",
      "Compare CallRail vs WhatConverts when you want dashboards out of the box.",
    ],
    ratingBreakdown: rb("Twilio"),
    compareLinks: [
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
    ],
    pros: ["Infinite flexibility", "Global numbers", "Strong docs"],
    cons: ["You maintain it", "Attribution is DIY", "Metering risk"],
    bestForEditorial: "Product teams wiring telephony into custom stacks.",
    whoShouldAvoid: "Owners who need a working dashboard this week without engineers.",
    pricingSummary: "Per minute and number—set billing alerts.",
    features: ["Voice API", "SMS", "Studio", "Functions"],
    keyFeatures: [{ name: "Programmable voice", description: "Record, route, and measure calls in code." }],
    integrations: ["Any system you build"],
    integrationsIntro: "You own integrations end-to-end.",
    contractorUse: ["Custom dispatch bridges", "White-label stacks"],
    alternatives: [
      alt("CallRail", "callrail", "Managed attribution UI", "/Logos/callrail.jpeg"),
      alt("PhoneWagon", "phonewagon", "Simpler SMB option", "/Logos/phonewagon.jpeg"),
    ],
    faqs: [{ q: "Twilio vs CallRail?", a: "Twilio if you build; CallRail if you buy." }],
    relatedReading: RELATED_CROSS,
  },
  phonewagon: {
    ...CT_SHELL,
    toolName: "PhoneWagon",
    rating: "4.1",
    startingPrice: "From ~$45/mo",
    bestFor: "Lean agencies and SMBs testing paid search tracking",
    visitUrl: "https://www.phonewagon.com",
    logoSrc: "/Logos/phonewagon.jpeg",
    quickVerdict: "PhoneWagon keeps onboarding light—good first step before standardizing on a flagship platform.",
    quickVerdictParagraphs: [
      "Pair with CRM tags so you outgrow the tool for the right reasons—not because data was hollow.",
    ],
    ratingBreakdown: rb("PhoneWagon"),
    compareLinks: [
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
    ],
    pros: ["Simple", "Fast setup", "Affordable"],
    cons: ["Less depth at scale", "Smaller integration footprint"],
    bestForEditorial: "Small accounts proving PPC calls quickly.",
    whoShouldAvoid: "Complex multi-brand enterprises.",
    pricingSummary: "Check pools and minutes vs campaigns.",
    features: ["DNI", "Recording", "Reporting"],
    keyFeatures: [{ name: "Speed", description: "Numbers live quickly for tests." }],
    integrations: ["Google Ads", "Common CRMs"],
    integrationsIntro: "Connect ads first; expand as you mature.",
    contractorUse: ["New PPC tests", "Single-location shops"],
    alternatives: [
      alt("CallRail", "callrail", "Deeper ecosystem", "/Logos/callrail.jpeg"),
      alt("WhatConverts", "whatconverts", "Lead rollups", "/Logos/whatconverts.jpeg"),
    ],
    faqs: [{ q: "PhoneWagon enough long term?", a: "Often until spend or locations demand deeper analytics." }],
    relatedReading: RELATED_CROSS,
  },
  nimbata: {
    ...CT_SHELL,
    toolName: "Nimbata",
    rating: "4.0",
    startingPrice: "From ~$29/mo",
    bestFor: "Privacy-conscious teams needing EU-friendly call analytics",
    visitUrl: "https://nimbata.com",
    logoSrc: "/Logos/nimbata.png",
    quickVerdict: "Nimbata fits when GDPR posture matters as much as attribution—not the default US contractor pick.",
    quickVerdictParagraphs: [
      "Still connect outcomes to CRM for booked-job truth.",
    ],
    ratingBreakdown: rb("Nimbata"),
    compareLinks: [
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
    ],
    pros: ["Privacy positioning", "Straightforward UI", "Website focus"],
    cons: ["Smaller footprint", "Regional variance", "Fewer telco extras"],
    bestForEditorial: "EU operators and compliance-led marketing teams.",
    whoShouldAvoid: "US teams needing deepest ad network coverage only.",
    pricingSummary: "Tiered—confirm recording rules.",
    features: ["Call analytics", "Website tracking", "Reports"],
    keyFeatures: [{ name: "Compliance-friendly positioning", description: "Built for privacy-minded orgs." }],
    integrations: ["Major ads", "CRM (varies)"],
    integrationsIntro: "Validate data residency needs before buying.",
    contractorUse: ["EU trades", "Franchise compliance"],
    alternatives: [
      alt("CallRail", "callrail", "US-heavy stacks", "/Logos/callrail.jpeg"),
      alt("WhatConverts", "whatconverts", "Lead clarity", "/Logos/whatconverts.jpeg"),
    ],
    faqs: [{ q: "Nimbata vs CallRail in the US?", a: "CallRail often wins on ecosystem; Nimbata when EU hosting matters." }],
    relatedReading: RELATED_CROSS,
  },
};

export function getCallTrackingReviewBySlug(slug: string): CallTrackingReviewData | undefined {
  return reviews[slug];
}

export function getCallTrackingReviewSlugs(): string[] {
  return Object.keys(reviews);
}
