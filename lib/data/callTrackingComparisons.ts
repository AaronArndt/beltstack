import type { ComparisonTemplateProps } from "@/components/comparisons/ComparisonTemplate";
import {
  getCallTrackingAlternativeUrl,
  getCallTrackingBestForUrl,
  getCallTrackingCompareUrl,
  getCallTrackingReviewUrl,
} from "@/lib/routes";

export function getCallTrackingCompareUrlFromSlug(slug: string): string {
  return `/call-tracking/compare/${slug}`;
}

const CALL_TRACKING_TRADE_LINKS = [
  { label: "Best call tracking for contractors", href: getCallTrackingBestForUrl("contractors") },
  { label: "Best for small business", href: getCallTrackingBestForUrl("small-business") },
  { label: "Best for HVAC", href: getCallTrackingBestForUrl("hvac") },
  { label: "Best for home services", href: getCallTrackingBestForUrl("home-services") },
];

const P = {
  callrail: {
    name: "CallRail",
    slug: "callrail",
    reviewHref: getCallTrackingReviewUrl("callrail"),
    logoSrc: "/Logos/callrail.jpeg",
    visitUrl: "https://www.callrail.com",
    bestForSummary: "Published-plan call attribution and conversation intelligence for SMBs and agencies.",
    rating: "4.6",
    startingPrice: "$55/mo ($50 annual)",
  },
  calltrackingmetrics: {
    name: "CallTrackingMetrics",
    slug: "calltrackingmetrics",
    reviewHref: getCallTrackingReviewUrl("calltrackingmetrics"),
    logoSrc: "/Logos/calltrackingmetrics.jpeg",
    visitUrl: "https://www.calltrackingmetrics.com",
    bestForSummary: "Deep multi-touch attribution and automation.",
    rating: "4.5",
    startingPrice: "From ~$120/mo",
  },
  whatconverts: {
    name: "WhatConverts",
    slug: "whatconverts",
    reviewHref: getCallTrackingReviewUrl("whatconverts"),
    logoSrc: "/Logos/whatconverts.jpeg",
    visitUrl: "https://www.whatconverts.com",
    bestForSummary: "Lead-level reporting across calls, forms, and chats.",
    rating: "4.5",
    startingPrice: "From ~$30/mo",
  },
  ringba: {
    name: "Ringba",
    slug: "ringba",
    reviewHref: getCallTrackingReviewUrl("ringba"),
    logoSrc: "/Logos/ringba.jpeg",
    visitUrl: "https://www.ringba.com",
    bestForSummary: "High-volume routing and buyer workflows.",
    rating: "4.3",
    startingPrice: "Custom / usage",
  },
  invoca: {
    name: "Invoca",
    slug: "invoca",
    reviewHref: getCallTrackingReviewUrl("invoca"),
    logoSrc: "/Logos/invoca.png",
    visitUrl: "https://www.invoca.com",
    bestForSummary: "Custom conversation outcomes, automated QA, and media/CRM activation.",
    rating: "4.4",
    startingPrice: "Quote required",
  },
} as const;

/** Products with dedicated `/call-tracking/alternatives/[slug]` pages (may extend beyond `P` comparison roster). */
const CALL_TRACKING_ALTERNATIVES_SLUGS = new Set([
  "callrail",
  "calltrackingmetrics",
  "whatconverts",
  "ringba",
  "invoca",
  "twilio",
  "phonewagon",
  "nimbata",
]);

const CALL_TRACKING_PRODUCT_NAMES: Record<string, string> = {
  callrail: "CallRail",
  calltrackingmetrics: "CallTrackingMetrics",
  whatconverts: "WhatConverts",
  ringba: "Ringba",
  invoca: "Invoca",
  twilio: "Twilio",
  phonewagon: "PhoneWagon",
  nimbata: "Nimbata",
};

function alternativesPageLinksForSlugs(slugs: string[]): { label: string; href: string }[] {
  const out: { label: string; href: string }[] = [];
  for (const s of slugs) {
    if (!CALL_TRACKING_ALTERNATIVES_SLUGS.has(s)) continue;
    const name = CALL_TRACKING_PRODUCT_NAMES[s];
    if (name == null) continue;
    out.push({
      label: `Best ${name} alternatives (ranked)`,
      href: getCallTrackingAlternativeUrl(s),
    });
  }
  return out;
}

function textRow(
  feature: string,
  productA: string,
  productB: string
): ComparisonTemplateProps["featureComparison"][number] {
  return { feature, productA, productB, supportA: "text", supportB: "text" };
}

function buildMoreComparisons(pa: (typeof P)[keyof typeof P], pb: (typeof P)[keyof typeof P]) {
  const fromSlugs = alternativesPageLinksForSlugs([pa.slug, pb.slug]);
  const fallback =
    fromSlugs.length === 0
      ? [{ label: "Best CallRail alternatives (ranked)", href: getCallTrackingAlternativeUrl("callrail") }]
      : [];
  const crossCluster = [
    { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
    { label: "CRM software hub", href: "/crm" },
    { label: "Website builders for contractors", href: "/website-builders/best-for/contractors" },
  ];
  return [
    { label: "CallRail vs CallTrackingMetrics", href: getCallTrackingCompareUrl("callrail-vs-calltrackingmetrics") },
    { label: "CallRail vs WhatConverts", href: getCallTrackingCompareUrl("callrail-vs-whatconverts") },
    {
      label: "CallTrackingMetrics vs WhatConverts",
      href: getCallTrackingCompareUrl("calltrackingmetrics-vs-whatconverts"),
    },
    { label: "Ringba vs CallRail", href: getCallTrackingCompareUrl("ringba-vs-callrail") },
    { label: "Invoca vs CallRail", href: getCallTrackingCompareUrl("invoca-vs-callrail") },
    ...fromSlugs,
    ...fallback,
    ...crossCluster,
  ];
}

function build(
  slug: string,
  a: keyof typeof P,
  b: keyof typeof P,
  summary: string,
  extra?: Partial<ComparisonTemplateProps>
): [string, ComparisonTemplateProps] {
  const pa = P[a];
  const pb = P[b];
  return [
    slug,
    {
      productA: pa,
      productB: pb,
      categoryHref: "/call-tracking",
      categoryLabel: "Call Tracking",
      summaryParagraph: summary,
      quickRecommendationA: `Choose ${pa.name} if you prioritize ${pa.bestForSummary.toLowerCase()}`,
      quickRecommendationB: `Choose ${pb.name} if you prioritize ${pb.bestForSummary.toLowerCase()}`,
      quickVerdictParagraphs: [summary],
      featureComparison: [
        {
          feature: "SMB onboarding speed",
          productA: a === "ringba" || a === "invoca" ? "Varies" : "Fast",
          productB: b === "ringba" || b === "invoca" ? "Varies" : "Fast",
          supportA: a === "ringba" || a === "invoca" ? "partial" : "supported",
          supportB: b === "ringba" || b === "invoca" ? "partial" : "supported",
        },
        {
          feature: "Attribution depth",
          productA: a === "calltrackingmetrics" || a === "invoca" ? "Advanced" : "Strong",
          productB: b === "calltrackingmetrics" || b === "invoca" ? "Advanced" : "Strong",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "CRM / ad integrations",
          productA: "Broad",
          productB: "Broad",
          supportA: "supported",
          supportB: "supported",
        },
        {
          feature: "Telco / routing power",
          productA: a === "ringba" ? "Very strong" : "Standard",
          productB: b === "ringba" ? "Very strong" : "Standard",
          supportA: a === "ringba" ? "supported" : "partial",
          supportB: b === "ringba" ? "supported" : "partial",
        },
      ],
      pricingComparison: `Both vendors price on usage—numbers, minutes, and seats. Model annual cost against booked-job economics, not raw call counts alone.`,
      prosConsA: {
        pros: ["Fits its target segment well", "Clear reporting story"],
        cons: ["Usage can scale quickly", "Needs CRM discipline"],
      },
      prosConsB: {
        pros: ["Complementary strengths", "Scales with documented ops"],
        cons: ["Configuration time", "Still needs human QA on numbers"],
      },
      bestFor: [
        {
          heading: "Choose by your funnel",
          body: "SMB trades often start with CallRail-class stacks; enterprise or buyer programs may need Invoca or Ringba depth. Always tag outcomes in CRM.",
        },
      ],
      alternatives: [
        {
          name: "CallRail",
          href: getCallTrackingReviewUrl("callrail"),
          logoSrc: "/Logos/callrail.jpeg",
          description: "SMB-friendly attribution.",
        },
        {
          name: "WhatConverts",
          href: getCallTrackingReviewUrl("whatconverts"),
          logoSrc: "/Logos/whatconverts.jpeg",
          description: "Lead inbox clarity.",
        },
        {
          name: "CallTrackingMetrics",
          href: getCallTrackingReviewUrl("calltrackingmetrics"),
          logoSrc: "/Logos/calltrackingmetrics.jpeg",
          description: "Deep attribution.",
        },
      ],
      faqs: [
        { q: `Which fits local contractors better—${pa.name} or ${pb.name}?`, a: summary },
        { q: "Do I still need CRM tags?", a: "Yes—source data without booked-job outcomes still hides bad spend." },
      ],
      sidebarWinners: [
        { label: "Workflow fit", winner: "A" },
        { label: "Alternate strength", winner: "B" },
      ],
      moreComparisons: buildMoreComparisons(pa, pb),
      relevantTradeLinks: CALL_TRACKING_TRADE_LINKS,
      ...extra,
    },
  ];
}

const entries: [string, ComparisonTemplateProps][] = [
  build(
    "callrail-vs-calltrackingmetrics",
    "callrail",
    "calltrackingmetrics",
    "CallRail wins on approachable SMB rollout and integration breadth; CallTrackingMetrics pulls ahead when teams need heavier multi-touch models and automation—both assume you wire CRM stages honestly.",
    {
      sidebarWinners: [
        { label: "Fast SMB adoption", winner: "A" },
        { label: "Attribution depth", winner: "B" },
      ],
    }
  ),
  build(
    "callrail-vs-whatconverts",
    "callrail",
    "whatconverts",
    "CallRail emphasizes call-centric marketing stacks; WhatConverts emphasizes unified lead reporting across calls, forms, and chats—pick based on whether calls or total leads are your north star.",
    {
      sidebarWinners: [
        { label: "Call + ad workflows", winner: "A" },
        { label: "Lead inbox simplicity", winner: "B" },
      ],
    }
  ),
  build(
    "calltrackingmetrics-vs-whatconverts",
    "calltrackingmetrics",
    "whatconverts",
    "CallTrackingMetrics targets operators defending complex paid programs; WhatConverts targets teams that want cleaner lead rollups without enterprise overhead.",
    {
      sidebarWinners: [
        { label: "Advanced analytics", winner: "A" },
        { label: "Lead clarity", winner: "B" },
      ],
    }
  ),
  build(
    "ringba-vs-callrail",
    "ringba",
    "callrail",
    "Ringba is built for performance routing and buyer economics; CallRail fits typical local service marketing stacks—most contractors should not start with Ringba unless calls are monetized inventory.",
    {
      sidebarWinners: [
        { label: "Routing / scale", winner: "A" },
        { label: "SMB marketing fit", winner: "B" },
      ],
    }
  ),
  build(
    "invoca-vs-callrail",
    "invoca",
    "callrail",
    "Both can attribute an inbound call to a campaign. The real split is whether you need CallRail’s published-plan marketing stack—or Invoca’s quote-based system for classifying call outcomes, scoring agents, and sending those signals into ads and CRM at contact-center scale.",
    {
      pageHeading: "Invoca vs CallRail (2026): Pricing & Key Differences",
      seoTitle: "Invoca vs CallRail (2026): Pricing & Key Differences | BeltStack",
      seoDescription:
        "Invoca vs CallRail is not two interchangeable trackers. CallRail publishes Lead Tracking plans from $55/mo ($50 annual) with 5 numbers and 250 minutes. Invoca is quote-based (Pro–Elite) with Signal AI, Quality Management, and PreSense as add-ons. Compare attribution, conversation intelligence, QA, and when to move.",
      quickVerdictHeading: "Both track calls. They are built to answer different questions.",
      quickVerdictSub: "CallRail publishes a marketing plan. Invoca quotes a revenue-and-operations stack.",
      quickRecommendationA:
        "Best when inbound volume, a contact center, or paid media needs classified outcomes—qualified vs junk—fed into ads, CRM, and automated QA, and you will run a quote and implementation.",
      quickRecommendationB:
        "Best when you need working DNI, recordings, transcription, and Google Ads/GA4 attribution on a public monthly plan without an enterprise sales cycle.",
      researchNote:
        "Pricing and product details verified September 2026 from CallRail’s public pricing page, CallRail vs Patient Prism starting-price copy, CallRail plan-type/help documentation, and Invoca’s pricing and llm-info pages. Invoca does not publish dollar prices; this page does not treat third-party estimates as facts. BeltStack has not installed either platform, routed calls, reviewed production transcripts, received an Invoca quote, or measured attribution accuracy.",
      quickVerdictParagraphs: [
        "CallRail and Invoca both do dynamic number insertion, call recording, and marketing-source attribution. That overlap is why the search exists. It is also why “which has more features?” is the wrong question. CallRail currently lists four self-serve plans (Lead Tracking, Lead Tracking Complete, Lead Conversion, Lead Conversion Complete) starting at $55/month or $50 billed annually. Every listed plan includes 5 local numbers and 250 local minutes. Invoca currently lists Pro, Enterprise, and Elite (plus Performance packages for pay-per-call) with Get Your Quote—no public dollar card.",
        "CallRail is not “basic call tracking.” Lead Tracking already includes recording, transcription, call flows, messaging, and Google Ads/Analytics integrations. Premium Conversation Intelligence—summaries, sentiment, conversion signals, Convert Assist coaching—sits on Lead Conversion plans and is billed as analysis minutes. Agency Account Center and some premium integrations are documented as add-ons on lower packages. Invoca’s extra problem is different: custom Signal AI models trained on your conversion definition, AI Quality Management that Invoca describes as scoring 100% of calls, PreSense (digital journey context to the agent), SIP/contact-center routing on Elite, and streaming those outcomes into a wider ad/CRM set (including Salesforce and Adobe as premium/higher-tier items).",
        "A five-location HVAC shop that needs to know which Google Ads produced booked estimates is usually buying CallRail. Paying Invoca for automated QA, custom outcome models, and PreSense you will not staff is unused infrastructure. A national home-services brand with a contact center that still optimizes Google on raw call counts—not qualified jobs—is buying Invoca’s job: classified outcomes plus agent performance. Do not pick Invoca because it sounds more advanced. Do not pick CallRail only because the sticker is public if you already need 100% QA and custom conversion models.",
      ],
      relationshipContext: {
        heading: "Invoca vs CallRail: what are you actually buying?",
        paragraphs: [
          "Layer 1 is call attribution: which source, campaign, keyword, or session produced the ring? Both products sell this. CallRail’s public Lead Tracking plan is built around it (DNI, recording, transcription, Google Ads and Analytics). Invoca Pro includes DNI, recording, custom IVRs, offline conversion import, and no-code integrations with Google Ads, GA4, Microsoft Ads, Meta Ads, HubSpot, and Slack.",
          "Layer 2 is conversation intelligence: what happened on the call? CallRail includes transcription and analysis on Lead Tracking; Premium Conversation Intelligence (Lead Conversion) adds summaries, sentiment, conversion tagging, and Convert Assist next-step/coaching copy. Invoca’s Signal AI suite is an add-on: Studio (custom models for intent, product interest, and outcome), keyword spotting, Discovery, transcripts, redaction, summaries, and sentiment. Do not treat every transcript as the same product as custom outcome models.",
          "Layer 3 is outcome and revenue intelligence: did the call become a qualified lead, appointment, or sale—and can that label go back to ads and CRM? CallRail’s conversion signals attempt this on Premium CI. Invoca’s pitch is custom Signals (5 / 50 / 100 by tier) plus importing offline conversions and revenue, then activating AI call data into ad platforms for bidding. Pro includes HubSpot; Salesforce CRM and Adobe Experience Cloud are listed as premium integrations / higher-tier extras—not as “both have CRM, so they are equal.”",
          "Layer 4 is operational intelligence: how did the agent or location perform across thousands of conversations? CallRail documents coaching tools on Premium CI (Convert Assist, sentiment, trend reports). Invoca sells a separate AI-Powered Quality Management add-on: scorecards on 100% of calls, Agent Voice ID, coaching UI, compliance/script checks. Elite adds PreSense (digital journey to the contact center) and intelligent routing / SIP. That is contact-center operations, not a bigger CallRail report.",
        ],
      },
      decisionGuideAHeading: "Choose Invoca if…",
      decisionGuideBHeading: "Choose CallRail if…",
      decisionGuideA: [
        "You need custom conversion definitions (appointment booked, policy sold, qualified vs junk) trained on your calls—not only keyword spotting.",
        "A contact center or large inbound team must QA more than a sample of calls, with scorecards and coaching.",
        "Paid media should optimize to qualified/revenue outcomes, including offline conversion import and (on higher tiers) SA360, Campaign Manager, Trade Desk, TikTok, and similar.",
        "Agents need the caller’s digital journey at pickup (PreSense on Elite / as an add-on) or SIP integration with the existing call center.",
        "You will complete a quote that includes Signal AI, Quality Management, numbers, implementation, and contract term—not a self-serve checkout.",
      ],
      decisionGuideB: [
        "You need campaign-level call attribution this month, with a 14-day trial and published plans (CallRail states no long-term contract on its public comparison pages).",
        "A local or multi-location service business, or an agency managing client accounts, is the buyer—not a contact-center QA program.",
        "Lead Tracking’s recording, transcription, DNI, and ad integrations are enough, or you will pay up to Lead Conversion for Premium CI summaries and conversion tagging.",
        "You want to see the monthly number before sales: $55/mo ($50 annual) for Lead Tracking, with the same 5 numbers / 250 minutes on every listed plan.",
        "You do not have staff to operationalize custom Signal models, automated scorecards, and enterprise onboarding.",
      ],
      decisionGuideNeither: [
        "You only need a business phone system or a single forwarding number—not marketing attribution.",
        "You primarily need contact-center telephony (ACD, workforce management) without marketing DNI—look at CCaaS, not these two.",
        "You need pay-per-call buyer waterfalls (Ringba-class) rather than brand-side attribution or QA.",
        "You want a simpler SMB tracker or unified calls+forms+chats inbox (PhoneWagon, WhatConverts) rather than CallRail’s usage model or Invoca’s quote.",
      ],
      featureComparisonColumnLabel: "What you’re comparing",
      featureComparisonSub:
        "CallRail already has conversation intelligence on public plans. Invoca’s difference is custom outcomes, 100% QA add-on, and activation into a larger revenue stack—not “AI vs no AI.”",
      featureComparison: [
        textRow("Primary job", "Quote-based revenue execution: attribute calls, classify outcomes, activate media, optionally QA every agent call.", "Self-serve marketing call tracking: which campaign caused the call, plus optional Premium CI for summaries and conversion tagging."),
        textRow("Pricing visibility", "Quote required. Pro / Enterprise / Elite (and Performance packages). No public dollar card.", "Four public plans. Lead Tracking from $55/mo ($50 billed annually). Extra numbers and minutes billed as usage."),
        textRow("Included usage (published)", "Pro 6,000 / Enterprise 12,000 / Elite 18,000 annual local or toll-free numbers; custom Signals 5 / 50 / 100. Dollar price still quoted.", "All listed plans: 5 local numbers and 250 local minutes (transcription included in that minute pool). 25 SMS after trial. Climbing tiers does not buy more minutes."),
        textRow("Call tracking / DNI", "Session-level DNI; enhanced digital capture (landing page, product ID, cart) on Enterprise+.", "DNI and source/campaign/keyword-style attribution on Lead Tracking. Session context for search campaigns."),
        textRow("Conversation intelligence", "Signal AI is an add-on: custom models, keyword spotting, Discovery, summaries, sentiment, redaction.", "Transcription and analysis on Lead Tracking. Premium CI (Lead Conversion): summaries, sentiment, conversion signals, Convert Assist. Analysis minutes billed on Premium CI."),
        textRow("Outcome / revenue loop", "Offline conversion and revenue import; custom Signals; real-time activation to ad platforms (Invoca’s described workflow).", "Premium CI conversion tagging. Google Ads / Analytics integrations on base tracking. Not the same as Invoca’s custom Signal Studio + value-based bidding narrative."),
        textRow("Contact-center QA", "Quality Management add-on: Invoca describes scoring 100% of calls, scorecards, coaching UI, Agent Voice ID.", "Premium CI coaching/conversion tools and sentiment. Help center does not describe Invoca-style 100% automated scorecards as the core product."),
        textRow("Form / SMS", "AI Messaging Agent is a separate Invoca product (not the Pro bullet list). Confirm in the quote.", "Text tracking on Lead Tracking. Form Tracking on Complete plans (help center: Form Tracking product; Complete tiers add forms)."),
        textRow("Agency / multi-account", "Agency and Performance (pay-per-call) packages exist. Built for large paid programs, not a 14-day client signup.", "CallRail states 7,000+ agencies; Account Center and agency tools (help center: add-on on some packages, included on higher CI packages). Unlimited users/companies except HIPAA exceptions."),
        textRow("HIPAA / security", "Invoca lists SOC 2 Type 2, ISO 27001, HIPAA BAA, GDPR, CCPA.", "HIPAA-supported Healthcare Plan with BAA; CallRail currently lists Healthcare plans from $150/month. Recording included; follow consent law."),
        textRow("Implementation", "Demo + quote; Invoca describes dedicated onboarding and success plans. Annual contract terms on llm-info.", "14-day trial, no credit card required (CallRail). Public pages state no long-term contract. Support hours listed weekdays 8:30am–7pm ET."),
        textRow("Biggest tradeoff", "You can classify and operationalize calls at contact-center scale. You cannot verify monthly cost from a webpage, and unused QM/Signal/PreSense is paid complexity.", "You can start from a price table. The included 5 numbers / 250 minutes is the same on every plan—usage, not the $50 headline, often drives the bill. Premium CI and forms are higher plans, not Invoca-depth QA."),
      ],
      pricingComparison:
        "CallRail publishes Lead Tracking from $55/month ($50 annually) with 5 numbers and 250 minutes. Invoca requires a quote for Pro, Enterprise, or Elite. Do not use third-party Invoca “starts at” figures.",
      pricingComparisonParagraphs: [
        "CallRail currently lists four packages on its pricing page. The yearly figures shown there are Lead Tracking $50/mo, Lead Tracking Complete $95/mo, Lead Conversion $150/mo, and Lead Conversion Complete $195/mo, each plus additional usage. CallRail’s own comparison copy states plans start at $55/month ($50 billed annually) with no long-term contract and a 14-day trial. Every listed plan includes 5 local numbers and 250 local minutes (the table notes additional fees may apply, and that local minutes include transcription). 25 SMS messages are listed as included after trial. Lead Tracking includes call and text attribution, recording and routing, transcription and analysis, and automation rules. Complete adds form tracking. Lead Conversion unlocks Premium Conversation Intelligence (summaries, sentiment, trend reports, automatic conversion tagging, coaching and conversion tools). Lead Conversion Complete combines forms plus Premium CI. CallRail’s pricing page lists Voice Assist starting at $95/month; help documentation prices the standard Voice Assist plan at $95/month including 50 answered calls, then $1 per additional call (calls under 15 seconds handled by Voice Assist do not count). Extra numbers, extra minutes, toll-free surcharges, and Premium CI analysis minutes appear as usage/activity charges. Confirm current extra-number and per-minute rates on CallRail’s pricing table—do not treat a third-party blog’s cents as the invoice. CallRail help: recording is in the base price; unlimited users and companies except HIPAA accounts.",
        "Invoca’s pricing page has no dollars. Pro / Enterprise / Elite are Get Your Quote. Invoca’s llm-info page (still dated June 2026 when re-checked in September 2026) states quote-based subscription with annual contract terms; pricing varies by organization size, number count, and contract length. Published package shape: Pro includes 6,000 annual numbers and 5 custom Signals; Enterprise 12,000 numbers and 50 Signals plus enhanced digital capture, extra ad/social integrations, advanced IVR, SAML SSO, sandbox; Elite 18,000 numbers and 100 Signals plus PreSense, intelligent routing, SIP, affiliate suite. Signal AI, Quality Management, and PreSense are listed as add-ons (PreSense is included on Elite). Salesforce CRM and Adobe Experience Cloud are premium integrations. Separate Performance packages exist for pay-per-call. Implementation, support level, and volume overages are not public dollar lines—ask.",
        "What to ask Invoca before you compare price: (1) quoted monthly/annual total for your call volume and number count; (2) which tier (Pro / Enterprise / Elite / Performance) and whether Signal AI, Quality Management, and PreSense are in that number; (3) whether transcription, summaries, and custom Signals are included or add-ons; (4) implementation / onboarding fees; (5) Salesforce, Adobe, Genesys, or other premium connectors; (6) what happens when volume or numbers exceed the included annual pool; (7) contract length, cancellation, and any documented auto-increase—confirm on the order form, not a third-party review; (8) support hours vs dedicated success; (9) HIPAA BAA if you are a covered entity. Match that quote to a CallRail scope: Lead Tracking vs Lead Conversion (Premium CI), form tracking, Voice Assist if used, extra numbers and minutes for the same call volume, and Healthcare Plan if you need a BAA.",
      ],
      roiGuidance: {
        heading: "What CallRail’s included 5 numbers and 250 minutes actually mean",
        paragraphs: [
          "These are illustrative using CallRail’s published allowances. They are not invoices. Extra-number and extra-minute rates must be read from CallRail’s current pricing table. Invoca at every row: quote required.",
          "Local service business — 5 tracking numbers, 500 minutes/month: included 5 numbers cover the pool; 250 minutes are extra usage on top of Lead Tracking’s $55/mo ($50 annual) base. You do not need Lead Conversion unless you want Premium CI summaries and conversion tagging. Invoca: quote required—likely more platform than this shop will operate.",
          "Growing multi-location — 20 numbers, 3,000 minutes: 15 numbers and 2,750 minutes sit outside the included pool on every CallRail plan. The $150-class Lead Conversion plan still includes only 250 minutes; you are buying CI features, not a bigger minute bucket. That is the usage trap. Invoca quotes a different unit (annual number pools in the thousands) but still without a public dollar rate.",
          "Agency — many client numbers: CallRail includes 5 numbers per listed plan and documents unlimited companies/users (non-HIPAA). Extra numbers are the usual bill driver. Account Center/agency tools may be an add-on depending on package. Invoca’s agency/Performance packages are for large paid or pay-per-call programs, not a typical local-client tracker signup.",
          "When is CallRail no longer enough? Not at a location count. Move when (a) marketing must optimize to qualified outcomes and generic conversion tags are not enough, (b) QA of a sample no longer represents the contact center, (c) digital-journey context must reach the agent, (d) enterprise ad/CRM connectors (Adobe, SA360, SIP) are required, or (e) security/governance needs match Invoca’s stated SOC 2 / ISO / HIPAA posture and dedicated onboarding. If those are not jobs you will staff, Invoca is more infrastructure than you need.",
        ],
        example: {
          heading: "Qualified call vs 30-second wrong number",
          body: "A roofing company does not only want Google to count a call. It wants the ad platform to treat a 30-second wrong number differently from a qualified roof-replacement conversation. CallRail can record, transcribe, and—on Premium CI—apply conversion signals and coaching. Invoca’s described workflow is custom Signal models plus offline conversion import and real-time activation so bidding can use those labels. Confirm both implementations in a trial (CallRail) or demo (Invoca); BeltStack has not measured either pipeline’s accuracy.",
        },
      },
      prosConsA: {
        pros: [
          "Custom Signal models and published Pro/Enterprise/Elite packaging (quote, not a hidden SKU)",
          "Quality Management add-on aimed at scoring 100% of agent calls",
          "PreSense + SIP/routing on Elite for contact-center context",
          "Offline conversion import and a wider enterprise ad/CRM catalog on higher tiers",
        ],
        cons: [
          "No public dollar pricing; annual-term quoting",
          "Signal AI, QM, and many connectors are add-ons or premium",
          "Implementation is a project, not a 14-day self-serve trial",
          "More than a local shop needs if the job is still “which ad rang the phone”",
        ],
      },
      prosConsB: {
        pros: [
          "Published plans from $55/mo ($50 annual); 14-day trial; no long-term contract on public pages",
          "DNI, recording, transcription, and ad integrations on Lead Tracking",
          "Premium CI and forms available as named higher plans—not “no intelligence”",
          "Agency Account Center and 7,000+ agency positioning; HIPAA Healthcare Plan from $150/mo",
        ],
        cons: [
          "Included usage is 5 numbers / 250 minutes on every listed plan—overages dominate at scale",
          "Premium CI and form tracking are higher plans; analysis minutes apply to Premium CI",
          "Not Invoca’s custom outcome models or 100% QM scorecards",
          "Agency tools and Salesforce/Marketo-class connectors may be add-ons on lower packages",
        ],
      },
      bestFor: [
        {
          heading: "5-location HVAC / home-services shop",
          body: "CallRail Lead Tracking (or Complete if forms matter) is usually the buy: public price, DNI, recordings, Google Ads. Invoca is the better fit only if that company already runs a real contact center and will use Signal/QA—not because five locations sounds “enterprise.”",
        },
        {
          heading: "Marketing agency tracking local clients",
          body: "CallRail’s trial, Account Center, and published plans match how agencies onboard clients. Invoca’s agency/Performance packages target large paid or affiliate call programs. Do not put a ten-client local roster on Invoca to look sophisticated.",
        },
        {
          heading: "200-location or contact-center brand",
          body: "Central conversion definitions, automated QA, CRM/ad feedback, and governance start to match Invoca’s stack. CallRail can still attribute calls; the gap is operationalizing thousands of conversations, not the existence of a transcript.",
        },
      ],
      faqs: [
        {
          q: "Is Invoca just enterprise CallRail?",
          a: "No. They overlap on DNI, recording, and source attribution. Invoca’s additional products are custom Signal models, Quality Management for agent scorecards, PreSense, and a quote-based Pro–Elite (plus Performance) catalog. CallRail already sells conversation intelligence on public Lead Conversion plans. The question is which job you need, not company size as a slogan.",
        },
        {
          q: "Does CallRail have conversation intelligence?",
          a: "Yes. Lead Tracking includes transcription and analysis. Premium Conversation Intelligence (Lead Conversion) adds summaries, sentiment, conversion signals, and Convert Assist. That is not the same as Invoca Signal AI Studio custom models or Invoca Quality Management.",
        },
        {
          q: "Which is cheaper, Invoca or CallRail?",
          a: "CallRail publishes Lead Tracking from $55/month ($50 annually) plus usage beyond 5 numbers and 250 minutes. Invoca does not publish prices. BeltStack cannot say Invoca costs more in dollars until you have a quote for equivalent scope (tracking + transcription + outcome models + QA + integrations + implementation).",
        },
        {
          q: "When should I move from CallRail to Invoca?",
          a: "When classified outcomes, 100%-style automated QA, digital-journey agent context, or enterprise media/CRM activation become the job—and someone will own implementation. Not at a magic employee or location count. If you only need cleaner Google Ads attribution, stay on CallRail or fix CRM dispositions first.",
        },
        {
          q: "If I run an agency, which should I use?",
          a: "For typical local-business clients: CallRail (trial, published plans, Account Center). For a pay-per-call or large-brand paid program: Invoca’s agency/Performance packages may match. Research the client’s actual call volume and QA needs; reputation alone does not award this to CallRail.",
        },
        {
          q: "Do both work with Google Ads?",
          a: "CallRail lists Google Ads and Analytics on Call Tracking Intelligence / Lead Tracking. Invoca Pro lists Google Ads, GA4, Microsoft Ads, and Meta Ads no-code integrations, plus offline conversion import. Higher Invoca tiers add SA360, Campaign Manager, Trade Desk, and more. Depth of offline conversion and value-based bidding should be confirmed in each product’s current integration docs.",
        },
      ],
      alternatives: [
        {
          name: "CallTrackingMetrics",
          href: getCallTrackingReviewUrl("calltrackingmetrics"),
          logoSrc: "/Logos/calltrackingmetrics.jpeg",
          description: "Heavier multi-touch marketing analytics without Invoca’s QM/Signal quote stack.",
        },
        {
          name: "WhatConverts",
          href: getCallTrackingReviewUrl("whatconverts"),
          logoSrc: "/Logos/whatconverts.jpeg",
          description: "Calls, forms, and chats in one lead inbox if that’s the gap—not contact-center QA.",
        },
        {
          name: "Invoca alternatives",
          href: getCallTrackingAlternativeUrl("invoca"),
          logoSrc: "/Logos/invoca.png",
          description: "Ranked options if Invoca’s quote or scope is not the fit.",
        },
        {
          name: "CallRail alternatives",
          href: getCallTrackingAlternativeUrl("callrail"),
          logoSrc: "/Logos/callrail.jpeg",
          description: "Ranked options if CallRail’s usage model or CI tier is not the fit.",
        },
      ],
      sidebarWinners: [
        { label: "Winner for published pricing", winner: "B" },
        { label: "Winner for custom outcomes + QA", winner: "A" },
        { label: "Winner for agency self-serve", winner: "B" },
      ],
      heroCallouts: [
        {
          label: "Winner for start-this-month attribution",
          winner: "B",
          reason: "CallRail publishes Lead Tracking from $55/mo ($50 annual) with a 14-day trial. Invoca still requires a quote.",
        },
        {
          label: "Winner for classified outcomes and agent QA",
          winner: "A",
          reason: "Invoca packages custom Signals plus optional Quality Management and PreSense. CallRail’s Premium CI is practical marketing intelligence, not that stack.",
        },
      ],
    }
  ),
];

const comparisons: Record<string, ComparisonTemplateProps> = Object.fromEntries(entries);

export function getCallTrackingComparisonBySlug(slug: string): ComparisonTemplateProps | null {
  return comparisons[slug] ?? null;
}

export function getCallTrackingComparisonSlugs(): string[] {
  return Object.keys(comparisons);
}
