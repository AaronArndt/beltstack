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

/** Per-product rating copy (replaces one-size-fits-all blurbs). */
const RATING: Record<string, NonNullable<CallTrackingReviewData["ratingBreakdown"]>> = {
  callrail: [
    { category: "Features", score: "4.7", explanation: "Strong DNI, form tracking, recordings, and a wide integration marketplace for ads + CRM." },
    { category: "Pricing", score: "4.3", explanation: "Entry pricing is approachable; busy accounts should model numbers, minutes, and seats before annual commits." },
    { category: "Ease of Use", score: "4.5", explanation: "Marketing-friendly UI—still expect swap-script QA when templates or GBP numbers change." },
    { category: "Support", score: "4.2", explanation: "Solid docs and chat; complex telco edge cases may need patience or partners." },
    { category: "Contractor fit", score: "4.7", explanation: "Built for Google Ads, LSA, and website calls—the mix most trades actually run." },
  ],
  calltrackingmetrics: [
    { category: "Features", score: "4.7", explanation: "Multi-touch models, automation, and routing depth for teams that defend budgets weekly." },
    { category: "Pricing", score: "4.0", explanation: "Premium positioning—validate usage before you standardize across every sub-account." },
    { category: "Ease of Use", score: "4.0", explanation: "Powerful but not casual; needs an internal owner who likes configuration." },
    { category: "Support", score: "4.2", explanation: "Agency-oriented resources exist; expect more self-serve than white-glove for tiny teams." },
    { category: "Contractor fit", score: "4.4", explanation: "Best when paid search and franchise-style programs—not solo trucks ignoring dashboards." },
  ],
  whatconverts: [
    { category: "Features", score: "4.6", explanation: "Unified view of calls, forms, and chats with export-friendly reporting for stakeholders." },
    { category: "Pricing", score: "4.3", explanation: "Lead-tier pricing is predictable; watch volume jumps as marketing scales capture points." },
    { category: "Ease of Use", score: "4.5", explanation: "Cleaner lead inbox than many telco-first tools—less maze for owners." },
    { category: "Support", score: "4.1", explanation: "Adequate for SMBs; advanced routing may send you to specialists or other tools." },
    { category: "Contractor fit", score: "4.5", explanation: "Fits home-services funnels where web + phone leads must roll up for sales." },
  ],
  ringba: [
    { category: "Features", score: "4.6", explanation: "Carrier-grade routing, buyers, and monetization logic—overbuilt for casual SMB marketing." },
    { category: "Pricing", score: "4.0", explanation: "Custom and usage-driven—negotiate with real call economics, not slide-deck guesses." },
    { category: "Ease of Use", score: "3.6", explanation: "Steep learning curve; expect ops and possibly engineering partners." },
    { category: "Support", score: "4.0", explanation: "Serious when you are a real buyer volume customer; not hand-holding for dabblers." },
    { category: "Contractor fit", score: "3.5", explanation: "Wrong default for single-location trades unless you monetize or buy calls professionally." },
  ],
  invoca: [
    { category: "Features", score: "4.7", explanation: "Conversation AI, signal extraction, and enterprise integrations for regulated or franchise scale." },
    { category: "Pricing", score: "3.8", explanation: "Enterprise quotes plus services—budget implementation, not just licenses." },
    { category: "Ease of Use", score: "3.9", explanation: "Powerful admin; not a Friday-afternoon self-serve rollout for solos." },
    { category: "Support", score: "4.3", explanation: "Professional services ecosystem—appropriate for the buyer profile." },
    { category: "Contractor fit", score: "3.9", explanation: "National brands and complex programs—not the median two-truck operator." },
  ],
  twilio: [
    { category: "Features", score: "4.8", explanation: "Maximum flexibility: voice, SMS, Studio, serverless—if you can code it, Twilio can route it." },
    { category: "Pricing", score: "4.0", explanation: "Metered—easy to run up bills without alerts; finance should own guardrails." },
    { category: "Ease of Use", score: "3.5", explanation: "Developer-first; marketers need another layer unless your team ships internal tools." },
    { category: "Support", score: "4.2", explanation: "Documentation is excellent; TAM-scale support varies by spend." },
    { category: "Contractor fit", score: "3.8", explanation: "Great for custom dispatch or white-label stacks—poor fit when you need dashboards tomorrow." },
  ],
  phonewagon: [
    { category: "Features", score: "4.0", explanation: "Core DNI, recording, and reporting without enterprise extras—enough for lean tests." },
    { category: "Pricing", score: "4.3", explanation: "Approachable tiers; confirm pools and minutes vs your ad footprint." },
    { category: "Ease of Use", score: "4.4", explanation: "Fast onboarding—one reason agencies use it for small accounts." },
    { category: "Support", score: "4.0", explanation: "Fine for SMBs; do not expect Invoca-class services." },
    { category: "Contractor fit", score: "4.0", explanation: "Single-location PPC proofs and pilot programs before you standardize on a flagship." },
  ],
  nimbata: [
    { category: "Features", score: "4.1", explanation: "Solid website and ads call analytics with a privacy-forward story for EU-conscious buyers." },
    { category: "Pricing", score: "4.2", explanation: "Competitive entry tiers; validate recording and retention rules for your region." },
    { category: "Ease of Use", score: "4.2", explanation: "Straightforward dashboards—smaller ecosystem than US incumbents." },
    { category: "Support", score: "4.0", explanation: "Adequate for SMB; enterprise procurement may still prefer larger brands." },
    { category: "Contractor fit", score: "4.0", explanation: "EU-heavy or compliance-led teams; US contractors often default to CallRail-class breadth first." },
  ],
};

/** Max three cross-cluster links per review (see internal linking guidelines). */
const RELATED_CROSS = [
  { label: "Lead generation tools hub", href: "/lead-generation" },
  { label: "CRM software hub", href: "/crm" },
  { label: "SEO tools hub", href: "/seo-tools" },
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
      "CallRail pairs dynamic numbers with Google Ads, Local Services Ads, and organic landing pages so you can see which sources produce calls—not just which ones burn budget.",
      "The product shines when someone owns weekly QA: swap scripts after site launches, reconcile GBP numbers with tracked pools, and spot direct traffic inflation from broken tags.",
      "Integrations to HubSpot, Salesforce, GA4, and Zapier mean call events can land where ops already works—if you define CRM stages for booked jobs, not just answered rings.",
      "When teams outgrow simple logs, compare CallRail vs CallTrackingMetrics for multi-touch depth—or CallRail vs WhatConverts when marketing wants forms and chats in the same lead inbox.",
      "See our ranked swap list on the best CallRail alternatives page when pricing, caps, or workflow gaps push you to evaluate substitutes.",
    ],
    ratingBreakdown: RATING.callrail,
    compareLinks: [
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
    ],
    pros: [
      "Broad integration marketplace for ads, analytics, and CRM",
      "Keyword- and session-level context for search campaigns",
      "Form tracking alongside calls for fuller funnel pictures",
      "Recording and transcripts where policy allows",
      "Reporting most owners can scan without a data science hire",
    ],
    cons: [
      "Usage (minutes, numbers, seats) can surprise you at renewal if campaigns scale fast",
      "Not a contact center—routing depth stops where ACD-heavy platforms begin",
      "Requires ongoing script and pool checks after template or CMS changes",
      "Enterprise conversation-AI buyers may still graduate to Invoca-class stacks",
    ],
    bestForEditorial:
      "Contractors, home-services marketers, and agencies running Google Ads plus LSA plus website demand. CallRail is especially strong when you need credible proof for owners who do not live inside ad platforms but still ask which channels book jobs.",
    whoShouldAvoid:
      "Performance call buyers who need carrier-grade buyer waterfalls and monetization on day one (Ringba-class), or enterprises that mandated conversation AI and governance workflows (Invoca-class) before evaluating CallRail.",
    pricingSummary:
      "CallRail typically bills around tracked numbers, call minutes, and feature tiers. Model active campaigns, peak-season volume, and how many locations need separate pools—quiet-month math misleads renewals.",
    pricingTiers:
      "Plans stack features like form tracking, premium integrations, or higher usage caps. Agencies should align client tiers to realistic minute volume so downstream markups stay predictable.",
    costVsCompetitors:
      "CallRail often lands between budget trackers and premium analytics platforms: richer than PhoneWagon for ecosystem breadth, lighter on wallet than CallTrackingMetrics or Invoca for many SMB footprints.",
    features: ["Dynamic number insertion", "Form tracking", "Call recording", "Integrations"],
    keyFeatures: [
      { name: "Dynamic number insertion (DNI)", description: "Swap marketing numbers by session or campaign so inbound calls map to the correct source in reporting." },
      { name: "Source attribution", description: "Connect calls to keywords, ads, and landing pages—critical when LSA and PPC run together." },
      { name: "Form + call capture", description: "See web leads beside phone leads so marketing is not judged only on ring volume." },
      { name: "CRM and MAP handoffs", description: "Push call events into HubSpot, Salesforce, and other stacks so sales works from one timeline." },
      { name: "Call recording & playback", description: "Train CSRs and settle disputes—where legal and consent rules allow recording." },
      { name: "Reporting for stakeholders", description: "Export-friendly summaries that help agencies justify retainers to trade clients." },
    ],
    integrations: ["Google Ads", "Google LSA connectors (via workflows)", "GA4", "HubSpot", "Salesforce", "Zapier", "Meta Ads", "Microsoft Advertising"],
    integrationsIntro:
      "Most successful rollouts connect the ad platforms that spend money first, then CRM so booked-job outcomes reconcile with marketing source. Zapier fills long-tail tools when native connectors lag.",
    contractorUse: [
      "Attribute emergency and estimate calls from LSA and PPC to the correct campaign before you reallocate budget mid-season.",
      "Test new city or service pages and see which URLs earn phones—not just form fills.",
      "Give franchise or multi-brand operators per-location visibility without merging incompatible spreadsheets.",
      "Feed call outcomes into the CRM your dispatch team already uses so cost-per-booked-job replaces cost-per-ring.",
      "Pair with our SEO tools hub when organic pages and paid landing pages both drive phones.",
    ],
    alternatives: [
      alt("CallTrackingMetrics", "calltrackingmetrics", "Heavier multi-touch analytics and automation", "/Logos/calltrackingmetrics.jpeg"),
      alt("WhatConverts", "whatconverts", "Calls, forms, and chats in one marketing lead inbox", "/Logos/whatconverts.jpeg"),
      alt("PhoneWagon", "phonewagon", "Faster, lighter setup for small PPC tests", "/Logos/phonewagon.jpeg"),
      alt("Nimbata", "nimbata", "Privacy-forward option for EU-heavy programs", "/Logos/nimbata.png"),
    ],
    faqs: [
      { q: "CallRail vs free call forwarding?", a: "Forwarding hides marketing source; DNI preserves campaign and session context so ROI math is honest." },
      { q: "Does CallRail replace my CRM?", a: "No—it proves which touch produced the dial; your CRM should still record booked, lost, and bad-lead reasons." },
      { q: "Will CallRail hurt local SEO?", a: "Reputable DNI avoids NAP chaos when implemented correctly; follow vendor guidance on static vs dynamic numbers, especially on GBP." },
      { q: "When should we switch to CallTrackingMetrics?", a: "When paid teams need stronger multi-touch models, rules, and budget-defense workflows weekly—not monthly." },
    ],
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
      "CallTrackingMetrics (CTM) targets marketers who need multi-touch paths, automation, and rules—not just a list of which number rang.",
      "Configuration is real: you will name campaigns, map CRM stages, and tune triggers. The payoff is budget defense when finance asks which assists actually led to revenue.",
      "Pair CTM with honest CRM hygiene. If reps never mark booked vs lost, the fanciest attribution model still optimizes toward noise.",
      "Compare CallTrackingMetrics vs WhatConverts when stakeholders want simpler lead rollups, or CallRail vs CallTrackingMetrics when speed and ecosystem breadth beat maximum model depth.",
      "Our best CallTrackingMetrics alternatives guide ranks swaps when cost, admin load, or clarity push you elsewhere.",
    ],
    ratingBreakdown: RATING.calltrackingmetrics,
    compareLinks: [
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
      { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
    ],
    pros: [
      "Strong multi-touch and assist visibility for paid programs",
      "Automation and routing rules for scaling accounts",
      "Agency-friendly reporting when you manage many sub-accounts",
      "Depth that stands up in weekly performance reviews",
    ],
    cons: [
      "Steeper learning curve than CallRail or PhoneWagon",
      "Premium pricing—easy to overbuy before adoption catches up",
      "Needs an internal owner; shelfware hurts worse here than in lighter tools",
    ],
    bestForEditorial:
      "Paid-search-heavy operators, franchise marketing teams, and agencies managing complex Google Ads or multi-channel programs. CTM fits when someone is accountable for weekly optimization—not when the owner wants set-and-forget.",
    whoShouldAvoid:
      "Solo contractors who will not log in weekly, or teams that only need proof of calls without modeling touches. In those cases, CallRail or WhatConverts is usually the better first buy.",
    pricingSummary:
      "CTM is typically usage-based around minutes, numbers, and feature tiers. Validate agency markups, seat counts, and seasonal spikes before you annualize.",
    pricingTiers:
      "Higher tiers unlock more automation, routing, and reporting capacity. Match tier to active campaigns—not hypothetical growth three years out.",
    costVsCompetitors:
      "Expect to pay more than CallRail or WhatConverts for comparable footprint when you use advanced models—but less than Invoca when conversation AI is not the buying trigger.",
    features: ["Attribution", "Routing", "Forms", "Reporting"],
    keyFeatures: [
      { name: "Multi-touch attribution", description: "See assists and paths so you do not starve campaigns that feed converters upstream." },
      { name: "Automation & rules", description: "Tag, route, or notify based on events—useful when lead volume outpaces manual QA." },
      { name: "Forms alongside calls", description: "Unify capture types when your funnel is not phone-only." },
      { name: "Agency hierarchy", description: "Manage client accounts with permissions that match how your team actually works." },
      { name: "Deep ad platform hooks", description: "Google, Meta, and more—connect where spend actually lives." },
    ],
    integrations: ["Google Ads", "Google Analytics / GA4", "Meta Ads", "Salesforce", "HubSpot", "Zapier", "Microsoft Advertising"],
    integrationsIntro:
      "Connect paid media first for signal, then CRM so closed-won data completes the loop. Without CRM outcomes, CTM becomes an expensive call logger.",
    contractorUse: [
      "Defend LSA and PPC budgets with assist data when branded and non-brand campaigns interact.",
      "Run multi-location programs with consistent tagging across metros.",
      "Give franchise marketing ops one stack that scales reporting without duplicating spreadsheets.",
      "Automate alerts when call volume drops or quality flags trip—if you configure them.",
      "Feed results into the CRM your sales team trusts so marketing and ops argue from the same numbers.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "Faster rollout and broader SMB defaults", "/Logos/callrail.jpeg"),
      alt("WhatConverts", "whatconverts", "Simpler lead inbox when models are overkill", "/Logos/whatconverts.jpeg"),
      alt("Invoca", "invoca", "Enterprise conversation AI when legal mandates it", "/Logos/invoca.png"),
      alt("PhoneWagon", "phonewagon", "Budget-friendly tests before you commit to heavy analytics", "/Logos/phonewagon.jpeg"),
    ],
    faqs: [
      { q: "CTM for one truck?", a: "Often overkill until paid spend and reporting cadence justify the admin. Start lighter if nobody will own dashboards weekly." },
      { q: "CallTrackingMetrics vs CallRail?", a: "CallRail for speed and ecosystem; CTM when multi-touch and automation are non-negotiable." },
      { q: "Do we still need a CRM?", a: "Yes—CTM improves attribution; CRM still owns pipeline truth and booked revenue." },
    ],
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
      "WhatConverts centers the story on leads: calls, forms, chats, and often other capture points roll into one marketing-facing inbox.",
      "That matters for home-services teams where homeowners submit forms after hours but call during the day—you want one export, not three tabs.",
      "It is still not magic: define qualified leads vs spam, and push outcomes to CRM so booked jobs—not raw counts—drive decisions.",
      "Compare WhatConverts vs CallTrackingMetrics when analytics and automation outgrow simple rollups, or CallRail vs WhatConverts when calls are the only KPI today but forms are coming next.",
      "Browse best WhatConverts alternatives for ranked swaps when tiers, channels, or routing limits bite.",
    ],
    ratingBreakdown: RATING.whatconverts,
    compareLinks: [
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
    ],
    pros: [
      "Clear lead-level reporting for non-technical stakeholders",
      "Multi-channel capture beyond phone-only stacks",
      "Pricing tiers that map to lead volume for many SMBs",
      "Fast path to prove marketing-sourced pipeline in meetings",
    ],
    cons: [
      "Less carrier- and buyer-routing depth than Ringba-class platforms",
      "Advanced telco scenarios may require other tools or custom work",
      "Integration breadth can trail CallRail in niche corners of the stack",
    ],
    bestForEditorial:
      "SMB marketers, agency account managers, and owners who need to show total marketing-sourced leads—not only call logs. Strong when websites, LSA, and paid social all feed one funnel.",
    whoShouldAvoid:
      "Performance call buyers optimizing buyer payouts, or enterprises that already standardized on Invoca for conversation AI and governance.",
    pricingSummary:
      "WhatConverts typically tiers on leads captured and feature bundles. Align plan to real monthly qualified volume, not peak spam weeks.",
    pricingTiers:
      "Higher tiers add channels, users, or retention—audit which capture points you truly need before upgrading.",
    costVsCompetitors:
      "Often lands between budget trackers and premium analytics: more lead-centric than bare DNI, less ops-heavy than CTM for many teams.",
    features: ["Call tracking", "Form tracking", "Chat", "Reporting"],
    keyFeatures: [
      { name: "Unified lead inbox", description: "Calls, forms, and chats in one place so marketing is not judged on phones alone." },
      { name: "Lead quoting & export", description: "Pull proof for leadership or franchise reviews without rebuilding spreadsheets." },
      { name: "Source attribution", description: "Tie each lead back to campaigns and landing pages you actually control." },
      { name: "Multi-channel visibility", description: "See how paid, organic, and referral sources mix before you cut budget." },
    ],
    integrations: ["Google Ads", "Google Analytics", "HubSpot", "Salesforce", "Zapier", "Meta Ads", "Live chat tools (varies by plan)"],
    integrationsIntro:
      "Start with the capture points that already exist—usually ads and website—then expand chat and CRM connectors as habits form.",
    contractorUse: [
      "Report total leads from LSA, PPC, and website contact forms in one Friday dashboard.",
      "Show sales managers which sources produce qualified estimates—not just ring counts.",
      "Give franchise marketing a consistent template across brands without forcing everyone into ad UIs.",
      "Pair exports with CRM stages so booked-job rate by source replaces vanity metrics.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "Call-first stacks with huge integration breadth", "/Logos/callrail.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Heavier automation and multi-touch models", "/Logos/calltrackingmetrics.jpeg"),
      alt("PhoneWagon", "phonewagon", "Lighter budget when you are still proving PPC", "/Logos/phonewagon.jpeg"),
      alt("Nimbata", "nimbata", "Privacy-forward positioning for EU-sensitive clients", "/Logos/nimbata.png"),
    ],
    faqs: [
      { q: "WhatConverts vs analytics only?", a: "GA shows sessions; WhatConverts ties identifiable leads to sources with marketing-friendly rollups." },
      { q: "WhatConverts vs CallRail?", a: "CallRail when calls and ad workflows dominate; WhatConverts when forms and chats matter equally." },
      { q: "Does it replace CRM?", a: "No—it clarifies marketing capture; CRM still owns pipeline and revenue stages." },
    ],
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
      "Ringba is built for performance marketers, call buyers, and aggregators who need granular routing, pricing, and compliance at volume.",
      "If your problem is proving which Google Ads keyword drove a homeowner estimate, CallRail-class tools solve it faster. If your problem is which buyer pays what for which geo and duration, Ringba is in its element.",
      "Expect operational overhead: traffic managers, rules maintenance, and finance alignment on payouts—not a solo owner toggling a simple dashboard.",
      "Compare Ringba vs CallRail to see SMB marketing defaults next to buyer-marketplace depth.",
      "Our best Ringba alternatives page lists practical downgrades and enterprise-style upgrades when Ringba is the wrong fit.",
    ],
    ratingBreakdown: RATING.ringba,
    compareLinks: [
      { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
    ],
    pros: [
      "Deep routing and buyer logic for pay-per-call economics",
      "Scale-oriented reporting when calls are inventory",
      "Tooling aimed at monetization programs, not hobby trackers",
    ],
    cons: [
      "Steep learning curve and ops burden for SMB teams",
      "Poor default for typical single-location contractors",
      "Pricing and procurement rarely resemble self-serve SaaS checkout",
    ],
    bestForEditorial:
      "Performance networks, call buyers, and marketing orgs that monetize or arbitrage call flow. Also relevant when you have dedicated traffic staff—not when you have one marketer wearing twelve hats.",
    whoShouldAvoid:
      "Standard local service businesses optimizing LSA and website calls without buyer waterfalls. Start with CallRail or WhatConverts unless you truly run marketplace-style call programs.",
    pricingSummary:
      "Ringba is typically custom and usage-driven. Negotiate with real call volume, margin targets, and compliance requirements—not hypothetical scale.",
    pricingTiers:
      "Deals bundle features around routing, compliance, and buyer management. Expect professional services for serious rollouts.",
    costVsCompetitors:
      "Ringba is not priced to compete with PhoneWagon—it competes with other carrier-grade and buyer platforms. Compare total cost including ops headcount.",
    features: ["Routing", "Reporting", "Buyers", "Compliance tooling"],
    keyFeatures: [
      { name: "Buyer & publisher workflows", description: "Price, cap, and route calls between buyers with rules that match how you monetize." },
      { name: "Carrier-grade routing", description: "Logic built for volume programs—not just marketing DNI on a brochure site." },
      { name: "Compliance & quality tooling", description: "Support dispute workflows and QA when money moves per call." },
      { name: "Reporting for finance", description: "Reconcile payouts and performance when calls are the product." },
    ],
    integrations: ["Buyer marketplaces", "BI and data warehouse exports", "Custom telco stacks"],
    integrationsIntro:
      "Integrations skew toward performance ecosystems and data export—not every SMB CRM niche. Plan for technical partners if you need bespoke pipes.",
    contractorUse: [
      "Rare for single trucks; common for aggregators connecting homeowner intent to multiple buyers.",
      "Useful when call centers monetize overflow with rule-based routing.",
      "Not a substitute for GBP and website basics—local SEO still needs its own discipline.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "SMB marketing attribution without buyer marketplaces", "/Logos/callrail.jpeg"),
      alt("Invoca", "invoca", "Enterprise conversation intelligence and revenue signals", "/Logos/invoca.png"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Paid-media analytics without full buyer routing", "/Logos/calltrackingmetrics.jpeg"),
      alt("Twilio", "twilio", "Build custom routing when packaged UIs do not fit", "/Logos/twilio.jpeg"),
    ],
    faqs: [
      { q: "Ringba for my plumbing shop?", a: "Usually no—use CallRail-class tools unless you buy or sell call volume professionally." },
      { q: "Ringba vs CallRail?", a: "CallRail for local marketing proof; Ringba for performance routing and buyer economics." },
      { q: "Do I need engineers?", a: "Often yes for serious programs—ops and technical partners are common." },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("ringba"),
    alternativesPageLabel: "Best Ringba alternatives (2026)",
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
      "Invoca targets enterprises and sophisticated programs that need AI-driven signals, compliance workflows, and shared truth across marketing, sales, and legal.",
      "That can include national home-services brands, telecom-adjacent programs, or regulated verticals where transcripts and scoring feed revenue operations—not just weekly marketing PDFs.",
      "Implementation is a project: integrations, governance, and change management matter as much as feature checklists.",
      "Compare Invoca vs CallRail when you need a blunt SMB-vs-enterprise contrast before you invite procurement.",
      "See best Invoca alternatives for downgrades that still respect why you considered conversation AI in the first place.",
    ],
    ratingBreakdown: RATING.invoca,
    compareLinks: [
      { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
    ],
    pros: [
      "Conversation AI and signal extraction tied to revenue narratives",
      "Enterprise-grade integrations and governance patterns",
      "Strong fit when legal and finance co-own call data requirements",
    ],
    cons: [
      "High total cost of ownership—licenses plus services",
      "Longer time-to-value than SMB SaaS defaults",
      "Heavy admin; not a Friday signup for solos",
    ],
    bestForEditorial:
      "Franchise headquarters, national service brands, and regulated industries where call outcomes must be scored, audited, and piped into enterprise CRM and analytics stacks.",
    whoShouldAvoid:
      "Single-location contractors and lean agencies without dedicated ops. CallRail or CallTrackingMetrics usually matches reality better until AI requirements are explicit and funded.",
    pricingSummary:
      "Invoca is quoted enterprise pricing. Budget implementation partners, integrations, and ongoing admin—not just annual licenses.",
    pricingTiers:
      "Packaging varies by modules, volumes, and support tiers. Expect procurement cycles rather than self-serve upgrades.",
    costVsCompetitors:
      "Invoca sits above CallRail and WhatConverts for most footprints; compare against Ringba when routing economics—not NLP on transcripts—are the core problem.",
    features: ["Signal extraction", "Routing", "Integrations", "Compliance"],
    keyFeatures: [
      { name: "AI signals on calls", description: "Score intent, outcomes, and quality for routing and reporting." },
      { name: "Revenue & marketing alignment", description: "Share call truth across teams that each measure success differently." },
      { name: "Enterprise routing", description: "Policies that match complex org charts and programs." },
      { name: "Compliance workflows", description: "Support retention, consent, and audit needs where calls are sensitive." },
    ],
    integrations: ["Salesforce", "Adobe Experience Cloud", "Google Marketing Platform", "Custom enterprise connectors"],
    integrationsIntro:
      "Expect SI partners for mid-market and enterprise rollouts; Invoca is rarely a silent background tool without stakeholders.",
    contractorUse: [
      "National brands standardizing call quality and outcomes across regions.",
      "Franchise HQs auditing marketing and sales alignment on phone leads.",
      "Regulated programs where conversation evidence supports compliance—not typical mom-and-pop dispatch.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "Practical SMB marketing attribution", "/Logos/callrail.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Deep paid analytics without full conversation AI", "/Logos/calltrackingmetrics.jpeg"),
      alt("Ringba", "ringba", "Buyer routing and monetization depth", "/Logos/ringba.jpeg"),
      alt("WhatConverts", "whatconverts", "Unified marketing leads when AI is not the driver", "/Logos/whatconverts.jpeg"),
    ],
    faqs: [
      { q: "Invoca vs CallRail for contractors?", a: "CallRail unless you are enterprise-scale with AI, compliance, and integration mandates." },
      { q: "When is Invoca worth it?", a: "When conversation signals must flow into revenue ops with governance—not when you only need DNI." },
      { q: "Implementation timeline?", a: "Plan in quarters for serious programs, not weekends." },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("invoca"),
    alternativesPageLabel: "Best Invoca alternatives (2026)",
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
      "Twilio gives you programmable voice, SMS, and supporting services so you can route, record, and analyze calls exactly how your product or operations model demands.",
      "That power is also the tax: you own monitoring, metering, failover, and attribution logic. Marketing will not get a turnkey dashboard unless engineering ships one.",
      "Twilio shines for custom dispatch bridges, white-label apps, and compliance chains that off-the-shelf trackers cannot model.",
      "When you mainly need marketing proof for LSA and PPC, CallRail or WhatConverts returns value faster.",
      "Our best Twilio alternatives roundup compares packaged platforms that replace most custom telephony work.",
    ],
    ratingBreakdown: RATING.twilio,
    compareLinks: [
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
    ],
    pros: [
      "Maximum flexibility across voice, SMS, and orchestration",
      "Global number inventory and carrier relationships",
      "Excellent documentation and community patterns",
    ],
    cons: [
      "You build and maintain attribution—not a packaged marketing UI",
      "Metered pricing can spike without proactive alerts",
      "Requires ongoing engineering capacity—not a set-and-forget subscription",
    ],
    bestForEditorial:
      "Product and platform teams embedding telephony into software, plus operations teams with developers who can own custom routing. Also relevant when compliance or IVR complexity breaks canned trackers.",
    whoShouldAvoid:
      "Marketing-led SMBs that need DNI and reports this sprint without a dev roadmap. PhoneWagon or CallRail is almost always faster.",
    pricingSummary:
      "Twilio bills for usage: minutes, messages, phone numbers, and add-ons. Finance should own alerts and monthly reviews.",
    pricingTiers:
      "No classic SMB tiers—cost scales with traffic. Model worst-case campaign spikes, not average Tuesdays.",
    costVsCompetitors:
      "Engineering time plus Twilio usage often exceeds CallRail subscriptions unless your custom requirements are real and durable.",
    features: ["Voice API", "SMS", "Studio", "Functions"],
    keyFeatures: [
      { name: "Programmable Voice", description: "Build call flows, recording, and transcription pipelines you control in code." },
      { name: "SMS & messaging", description: "Pair text workflows with voice when homeowners expect both channels." },
      { name: "Studio & serverless", description: "Prototype IVR and routing without always provisioning servers." },
      { name: "Global numbers", description: "Provision local presence where regulations allow." },
    ],
    integrations: ["Your CRM via custom APIs", "Data warehouses", "Internal admin tools"],
    integrationsIntro:
      "Twilio integrates with anything you can code against. Plan API contracts, retries, and observability—marketing tools hide that work for you.",
    contractorUse: [
      "Custom bridges between dispatch software and telephony when off-the-shelf trackers cannot touch internal systems.",
      "White-label or marketplace products that need telephony as part of the SKU—not a side spreadsheet.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "Managed marketing dashboards and DNI", "/Logos/callrail.jpeg"),
      alt("PhoneWagon", "phonewagon", "Lightweight SMB tracker without building UI", "/Logos/phonewagon.jpeg"),
      alt("WhatConverts", "whatconverts", "Lead rollups when engineering should not own every webhook", "/Logos/whatconverts.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Operator analytics layer on top of standard stacks", "/Logos/calltrackingmetrics.jpeg"),
    ],
    faqs: [
      { q: "Twilio vs CallRail?", a: "Twilio when you build telephony; CallRail when marketing needs packaged attribution." },
      { q: "Can Twilio do call tracking?", a: "Yes—with your code. There is no default marketing report until you ship it." },
      { q: "Hidden costs?", a: "Watch minutes, numbers, recording storage, and third-party add-ons—spikes happen." },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("twilio"),
    alternativesPageLabel: "Best Twilio alternatives (2026)",
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
      "PhoneWagon targets lean agencies and SMBs that need working call tracking fast—especially when you are proving PPC before you commit to heavyweight analytics.",
      "The tradeoff is ceiling: multi-location scale, exotic integrations, and advanced automation may push you to CallRail or CallTrackingMetrics later.",
      "Treat CRM tagging as part of the stack. A simple UI does not fix sales teams that never log outcomes.",
      "Compare CallRail vs WhatConverts when you outgrow call-only reporting and need richer marketing proof.",
      "See best PhoneWagon alternatives for ranked upgrades when accounts graduate.",
    ],
    ratingBreakdown: RATING.phonewagon,
    compareLinks: [
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
    ],
    pros: [
      "Fast setup for small accounts and pilot campaigns",
      "Approachable pricing while you validate channels",
      "Simple UI that non-technical owners can navigate",
    ],
    cons: [
      "Less depth than CallRail or CTM for complex programs",
      "Smaller integration long tail than category leaders",
      "May strain when locations, seats, or channels multiply quickly",
    ],
    bestForEditorial:
      "New PPC programs, single-location shops, and agencies testing spend on behalf of cautious clients. PhoneWagon is a sensible bridge—not always the forever stack.",
    whoShouldAvoid:
      "Enterprises, heavy multi-touch operators, or call buyers who need Ringba-style routing. Those buyers should skip straight to appropriate flagship tools.",
    pricingSummary:
      "Confirm included numbers, pools, and minutes against your active campaigns. Cheap tiers sting when seasonal spikes arrive.",
    pricingTiers:
      "Higher tiers add capacity and features—audit whether you are paying for headroom you will use within 90 days.",
    costVsCompetitors:
      "PhoneWagon often undercuts CallRail on paper but may cost more in rework if you outgrow it in two quarters—model switching cost.",
    features: ["DNI", "Recording", "Reporting"],
    keyFeatures: [
      { name: "Quick provisioning", description: "Spin up tracked numbers without a long implementation calendar." },
      { name: "Core DNI", description: "Swap numbers for paid and organic landing pages." },
      { name: "Call recording", description: "Review CSRs where policy allows." },
      { name: "Lightweight reporting", description: "Enough to prove calls exist before you argue over assists." },
    ],
    integrations: ["Google Ads", "Google Analytics", "HubSpot", "Zapier"],
    integrationsIntro:
      "Connect ads first, then CRM or Zapier for downstream alerts. Expand only when clients actually use the data.",
    contractorUse: [
      "Prove PPC produces calls before you double ad spend next season.",
      "Give cautious owners a simple weekly number while habits form.",
      "Pilot programs for agencies before standardizing the whole book on CallRail.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "Standardize serious accounts with deeper integrations", "/Logos/callrail.jpeg"),
      alt("WhatConverts", "whatconverts", "Add forms and chats when calls tell half the story", "/Logos/whatconverts.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Graduate to automation and multi-touch", "/Logos/calltrackingmetrics.jpeg"),
      alt("Nimbata", "nimbata", "Privacy-forward clients needing EU positioning", "/Logos/nimbata.png"),
    ],
    faqs: [
      { q: "PhoneWagon enough long term?", a: "Often until spend, locations, or integration count demand CallRail-class depth." },
      { q: "PhoneWagon vs CallRail?", a: "PhoneWagon for speed; CallRail when ecosystem and scale matter." },
      { q: "Agency use?", a: "Great for pilots; plan migration paths before clients outgrow caps." },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("phonewagon"),
    alternativesPageLabel: "Best PhoneWagon alternatives (2026)",
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
      "Nimbata markets privacy-forward call analytics with solid website attribution—appealing when legal or EU clients ask where data lives and how recording works.",
      "US-heavy franchises may still choose CallRail for integration breadth, but Nimbata can win RFPs where compliance narrative is scored.",
      "You still need CRM discipline: privacy tools do not replace booked-job tagging.",
      "Compare CallRail vs WhatConverts when buyers want multi-channel lead clarity without changing privacy story.",
      "Our best Nimbata alternatives page lists US-centric and analytics-heavy swaps if Nimbata stalls in your market.",
    ],
    ratingBreakdown: RATING.nimbata,
    compareLinks: [
      { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
      { label: "CallTrackingMetrics vs WhatConverts", href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts") },
      { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
    ],
    pros: [
      "Privacy and EU-friendly positioning buyers understand",
      "Straightforward dashboards for core call analytics",
      "Competitive entry pricing for teams testing compliance-led stacks",
    ],
    cons: [
      "Smaller brand footprint than US incumbents",
      "Integration catalog may trail CallRail in niche tools",
      "Some features vary by region—validate before you standardize",
    ],
    bestForEditorial:
      "EU operators, agencies with GDPR-conscious clients, and marketing teams where legal reviews telephony vendors carefully. Also relevant for SMBs that want a lighter UI with a privacy story.",
    whoShouldAvoid:
      "Pure US contractors optimizing only for maximum ad connector coverage with zero compliance friction—CallRail is often simpler procurement.",
    pricingSummary:
      "Tiered plans with feature bundles. Confirm recording, storage region, and retention rules with counsel before rollout.",
    pricingTiers:
      "Higher tiers may add users, retention, or advanced capture—map upgrades to actual compliance requirements, not fear.",
    costVsCompetitors:
      "Nimbata can beat enterprise quotes while staying above bare trackers—compare total cost including legal review time.",
    features: ["Call analytics", "Website tracking", "Reports"],
    keyFeatures: [
      { name: "Privacy-forward analytics", description: "Messaging and controls aimed at GDPR-conscious teams." },
      { name: "Website call attribution", description: "Tie inbound calls to marketing sources on owned properties." },
      { name: "Reporting exports", description: "Share proof with stakeholders who audit data handling." },
    ],
    integrations: ["Google Ads", "Google Analytics", "Meta Ads", "HubSpot", "Zapier"],
    integrationsIntro:
      "Validate each connector for data residency expectations. Involve legal early on recording and transcript policies.",
    contractorUse: [
      "EU trades bidding work where prospects ask about data handling upfront.",
      "Agencies pitching privacy as a differentiator to franchise legal teams.",
      "SMBs testing lighter tools before committing to US-heavy incumbents.",
    ],
    alternatives: [
      alt("CallRail", "callrail", "Broadest US marketing integrations", "/Logos/callrail.jpeg"),
      alt("WhatConverts", "whatconverts", "Multi-channel lead clarity with different vendor posture", "/Logos/whatconverts.jpeg"),
      alt("PhoneWagon", "phonewagon", "Another lightweight SMB path when privacy is not the main trigger", "/Logos/phonewagon.jpeg"),
      alt("CallTrackingMetrics", "calltrackingmetrics", "Heavier ops controls when compliance + automation must scale", "/Logos/calltrackingmetrics.jpeg"),
    ],
    faqs: [
      { q: "Nimbata vs CallRail in the US?", a: "CallRail often wins on connector breadth; Nimbata when EU hosting and privacy marketing matter." },
      { q: "Recording compliance?", a: "Always align with counsel—tooling does not replace consent and retention policy." },
      { q: "Need forms too?", a: "Consider WhatConverts or CallRail when web capture outgrows call-only reporting." },
    ],
    relatedReading: RELATED_CROSS,
    alternativesPageHref: getCallTrackingAlternativeUrl("nimbata"),
    alternativesPageLabel: "Best Nimbata alternatives (2026)",
  },
};

export function getCallTrackingReviewBySlug(slug: string): CallTrackingReviewData | undefined {
  return reviews[slug];
}

export function getCallTrackingReviewSlugs(): string[] {
  return Object.keys(reviews);
}
