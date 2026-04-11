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
      {
        heading: "CallRail",
        body: "CallRail is the default for small businesses blending Google Ads, Local Services Ads, and website CTAs because dynamic number insertion and source-level reporting survive real-world template edits when configured carefully. During a trial, place numbers on your top money pages and paid landing pages, then click-test after any CMS publish—broken scripts silently steal attribution. Tag calls in CRM with campaign and keyword fields your sales team will actually fill so booked-job ROI is honest. Validate pool sizing against peak concurrent visitors so repeat customers do not see wrong sources. CallRail pays off when leadership reviews cost per booked job, not vanity ring counts.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts fits when marketing must roll calls, forms, and chats into one lead ledger for owners who refuse three disconnected exports. Trial with live web forms and chat widgets; confirm each submission maps to the same attribution fields as phone calls. Test spam filtering and dedupe rules so paid metrics do not inflate on bots. Pair with CRM stages so “lead” versus “qualified” versus “won” tells the truth about wasted spend. Choose WhatConverts when multi-touch proof matters more than telephony depth alone.",
      },
      {
        heading: "CallTrackingMetrics",
        body: "CallTrackingMetrics helps paid search teams defend budgets with deeper attribution models, automation, and integrations when CallRail-class basics no longer answer finance’s questions. Pilot during a month you trust—run parallel reporting against your existing tool to reconcile discrepancies before you switch contracts. Validate seat costs, minute pools, and webhook limits against your actual call volume, not demos. Document how multi-touch credit maps to your CRM so sales behavior does not break the story. It belongs when sophisticated marketing ops—not only SMB simplicity—is the constraint.",
      },
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
      {
        heading: "CallRail",
        body: "Contractors splitting spend across Google Ads, LSA, and organic or referral site pages need CallRail-style DNI to show which sources produce booked jobs once CRM ties outcomes. Trial on service-area pages that match truck routes—misaligned geo targeting makes attribution look successful while dispatch burns margin. Train CSRs to confirm source on the first ring without interrogating customers; friction drops conversion. After website or GBP updates, regression-test scripts the same day trucks go live. CallRail wins when marketing and ops share one honest funnel story.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts helps contractor sales leaders who want forms, chat, and calls in one dashboard when homeowners bounce between “request quote” and click-to-call on mobile. During trial, map each capture type into CRM with identical UTM hygiene so LSA, PPC, and organic credit stays comparable. Validate lead scoring or spam filters with real dispatch feedback—junk leads masquerade as ROI if nobody marks them bad. Review weekly with ops to tag “bad lead vendor” reasons back into marketing. It fits when multi-channel capture is messy but leadership wants one rollup.",
      },
      {
        heading: "CallTrackingMetrics",
        body: "CallTrackingMetrics suits growing contractor marketing ops teams that need stronger attribution, routing rules, and automation when weekly budget reviews get contentious. Pilot alongside existing tracking until numbers reconcile; arguing about two systems wastes the pilot window. Confirm integrations to ad platforms and CRM objects your estimators actually update. Model minute and seat costs against summer or storm peaks—quiet-month trials lie. Choose it when you outgrow basic DNI but can assign an admin owner.",
      },
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
      {
        heading: "CallRail",
        body: "HVAC marketers running LSA beside PPC and supporting organic service pages need CallRail to separate emergency repair intent from tune-up campaigns without double-counting the same homeowner journey. Trial with tight naming conventions in UTM and LSA reporting exports so CRM dashboards stay legible during July spikes. Test number pools on high-traffic pages to avoid session collisions when heat waves hit. Review weekly with dispatch to mark disqualified leads—cheap clicks that never book should not look like wins. CallRail fits when seasonality demands fast, trustworthy source data.",
      },
      {
        heading: "CallTrackingMetrics",
        body: "CallTrackingMetrics helps HVAC teams under weekly budget scrutiny model multi-touch paths across LSA, brand search, and remarketing when finance wants more than last-click stories. During pilot, align call outcomes with CRM job types—repair versus replace—so optimization targets the tickets you want. Validate automation rules do not over-write human dispatch notes. Compare subscription tiers against your multi-location footprint before annualizing. It belongs when marketing ops maturity—not only call logging—is the gap.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts fits HVAC when web forms and chat capture maintenance plan leads while phones handle emergencies—one rollup prevents summer chaos in spreadsheets. Trial form-to-call handoffs on mobile; many homeowners start typed then call when anxious. Ensure spam and competitor tests do not pollute paid metrics. Tie each lead to a branch or ZIP for capacity planning, not only marketing applause. Pick WhatConverts when multimodal capture is real, not theoretical.",
      },
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
      {
        heading: "CallRail",
        body: "Plumbers leaning on Google Ads and high-intent local landing pages use CallRail to attribute burst traffic from emergency keywords to actual booked trucks, not just rings. Trial during a normal week and a surge week to validate pool sizing and script placement after WordPress or builder updates. Sync tagged calls into CRM so CSRs cannot skip source fields when pace gets frantic. Pair with GBP insights qualitatively—Maps and ads overlap in plumbing more than many trades admit. CallRail is the common pick because it balances ease and depth for local PPC.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts helps plumbing shops where quote forms catch commercial PMs while phones catch homeowners with burst pipes—marketing needs both in one attribution feed. During trial, test dedupe when the same person submits a form then calls; credit rules should reflect reality, not double wins. Validate notifications reach on-call rotations without breaching quiet hours policies. Review bad-lead reasons weekly and push them back to campaigns. It fits when multimodal leads are core to the business, not edge cases.",
      },
      {
        heading: "PhoneWagon",
        body: "PhoneWagon offers a lightweight entry when plumbers experiment in a new PPC geo or niche keyword set before committing to a heavier stack—quick numbers, simple dashboards, fewer knobs. Trial with tight spend caps and manual QA on first-dozen calls to ensure tracking numbers swap correctly on mobile. Plan migration paths if you graduate to CallRail or CTM; export historical mapping early. Validate compliance with ad platform policies on call-only ads and forwarding. Use it as a scrappy test harness, not a forever enterprise hub.",
      },
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
      {
        heading: "CallRail",
        body: "Electrical contractors blending county-targeted PPC, LSA, and organic pages for EV, panel, and emergency services use CallRail to keep each geography’s performance visible without mixing unrelated markets. Trial with separate number pools or tracking rules per territory if licensing boundaries demand it. Regression-test after adding schema or redesigning service pages—electricians iterate sites often around new code cycles. Feed tagged calls into CRM opportunities for commercial bids versus residential service. CallRail fits when multi-county attribution clarity drives spend decisions.",
      },
      {
        heading: "CallTrackingMetrics",
        body: "CallTrackingMetrics helps when electricians run layered campaigns—brand, nonbrand, remarketing, LSA—and finance demands defended weekly reporting beyond surface dashboards. Pilot with explicit rules for commercial versus residential landing pages so credit lands on the right funnel. Validate automation does not strip human notes estimators rely on. Compare subscription footprint to your actual seats and minutes before contract signature. Choose CTM when marketing ops needs muscle, not when a solo owner just needs a tracker.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts suits electrical shops where web RFQs for commercial projects arrive alongside emergency phone calls from homeowners—one timeline prevents sales from arguing about sources. During trial, align form fields with CRM required data so attribution survives handoffs. Test chat widgets if you use them for after-hours triage; missed chat equals invisible demand. Review weekly with sales to label junk leads—unqualified tenders should not inflate ROI. It belongs when both capture modes materially affect pipeline.",
      },
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
      {
        heading: "CallRail",
        body: "Roofers running multi-market paid programs—retail replacement versus storm-response funnels—rely on CallRail to keep campaigns separated so calm-month ROI does not hide CAT-month distortion. Trial with distinct tracking templates per funnel and weekly QA after landing page swaps common post-weather. Tie calls to CRM job types and insurance flags when relevant so marketing stops optimizing for unbookable leads. Validate number pools on high-traffic storm pages to avoid collisions when spikes hit. CallRail stays reliable when geography and funnel honesty matter more than buzzwords.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts helps roofers when surge periods dump both insurance-style form submissions and frantic phone calls into sales—one lead inbox keeps triage sane. During trial, stress-test notifications and mobile views for reps in the field estimating on tablets. Build dedupe when homeowners submit online then call the office minutes later. Push disqualified leads back to marketing with reasons—storm tourists versus real damage. It fits when forms plus calls spike together and spreadsheets break.",
      },
      {
        heading: "Invoca",
        body: "Invoca enters the roofing conversation at enterprise scale when conversation intelligence, buyer routing, or buyer-network economics—not simple marketing attribution—justify premium contracts and implementation depth. Pilot only if you have clean CRM hygiene and a team to tune AI labels against real outcomes; otherwise insights rot. Compare TCO to CallRail-class stacks for local operators; most regional roofers never activate Invoca’s full value. Trial should include legal review of recording consent in your states. Consider it when national complexity demands it, not by default.",
      },
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
      {
        heading: "CallRail",
        body: "Home-service groups juggling brands, lead vendors, and owned demand use CallRail as a broad-fit layer for mixed paid and organic programs when each brand needs clean source tags inside CRM. Trial with a governance doc: who names campaigns, who fixes broken scripts, who audits weekly. Test after every website template change across franchises—one rogue deploy nukes trust in dashboards. Map marketplace leads separately from site and ads so cost-per-booked-job stays honest. CallRail scales when discipline exists; without owners, any tool lies.",
      },
      {
        heading: "WhatConverts",
        body: "WhatConverts gives leadership one rollup when calls, forms, chats, and even text captures from different trades must report together without manual Friday spreadsheets. During trial, standardize UTM templates across branches and enforce them in ad accounts—garbage in breaks executive summaries. Validate role-based access so local managers see their markets only. Review disqualification reasons in ops meetings and feed them back to vendor negotiations. It fits multi-capture portfolios that need clarity at the top.",
      },
      {
        heading: "CallTrackingMetrics",
        body: "CallTrackingMetrics helps sophisticated home-service marketing ops standardize attribution, automation, and cross-channel models when multiple ad platforms and CRMs interact daily. Pilot with parallel tracking until finance signs off on number alignment—switching mid-quarter confuses everyone. Document how each trade’s CRM objects map to call outcomes so rolled-up dashboards do not blur HVAC with plumbing unintentionally. Validate costs against peak seasons and expansion markets before multi-year deals. Choose CTM when you have admins, not when branches self-serve alone.",
      },
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
