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
  /** Used for `<meta name="description">` when set; otherwise `subtitle` is used. */
  metaDescription?: string;
  keywords: string[];
  picks: [CallToolSlug, CallToolSlug, CallToolSlug];
};

type TradeDeepOverride = {
  editorialGuidance: BestForEditorialBlock[];
  whyThesePicks: BestForEditorialBlock[];
  faqItems: BestForFaqItem[];
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
  {
    slug: "appliance-repair",
    title: "Best Call Tracking Software for Appliance Repair Businesses (2026)",
    subtitle: "Dispatch-friendly call attribution for warranty-heavy appliance repair demand.",
    intro: "Appliance repair shops need call tracking that proves which ads and local listings produce booked truck rolls—not just ring counts—while staying easy to maintain when dispatch is slammed.",
    metaDescription:
      "Compare the best call tracking software for appliance repair businesses in 2026: lightweight starters, privacy-aware options, and CallRail-class attribution tied to booked jobs and service areas.",
    keywords: ["best call tracking software for appliance repair businesses", "appliance repair call tracking", "appliance service call attribution"],
    picks: ["phonewagon", "nimbata", "callrail"],
  },
  {
    slug: "garage-door",
    title: "Best Call Tracking Software for Garage Door Companies (2026)",
    subtitle: "Source clarity for emergency springs, installs, and commercial door programs.",
    intro: "Garage door companies split demand between urgent break-ins and scheduled installs; call tracking should separate intent so you do not overfund channels that only create price-shopping noise.",
    metaDescription:
      "Find the best call tracking software for garage door companies in 2026: DNI for paid and LSA, unified lead reporting for calls and forms, and deeper models when you defend large media budgets.",
    keywords: ["best call tracking software for garage door companies", "garage door call tracking", "garage door installer call attribution"],
    picks: ["callrail", "whatconverts", "calltrackingmetrics"],
  },
  {
    slug: "locksmith",
    title: "Best Call Tracking Software for Locksmith Businesses (2026)",
    subtitle: "High-intent mobile call attribution for 24/7 lockout and rekey demand.",
    intro: "Locksmith buyers call fast from maps and ads; you need tracking that survives after-hours spikes and proves which geos and keywords produce paying jobs—not hang-ups.",
    metaDescription:
      "Choose call tracking software for locksmith businesses in 2026: proven SMB DNI, buyer-grade routing when volume scales, and unified lead rollups across calls and web forms.",
    keywords: ["best call tracking software for locksmith businesses", "locksmith call tracking", "locksmith call attribution software"],
    picks: ["callrail", "ringba", "whatconverts"],
  },
  {
    slug: "flooring-contractors",
    title: "Best Call Tracking Software for Flooring Contractors (2026)",
    subtitle: "Quote-call attribution for showroom visits, measures, and long-cycle installs.",
    intro: "Flooring contractors need call tracking that ties marketing sources to measure appointments and high-ticket installs, including form fills that precede phone tags.",
    metaDescription:
      "See the best call tracking software for flooring contractors in 2026: calls plus forms in one lead inbox, strong ad integrations, and advanced attribution when you run layered paid programs.",
    keywords: ["best call tracking software for flooring contractors", "flooring contractor call tracking", "hardwood installer call attribution"],
    picks: ["whatconverts", "callrail", "calltrackingmetrics"],
  },
  {
    slug: "fence-deck-builders",
    title: "Best Call Tracking Software for Fence & Deck Builders (2026)",
    subtitle: "Lean attribution for outdoor builders juggling weather slips and multi-visit jobs.",
    intro: "Fence and deck builders need practical call proof across seasonal pushes and referral spikes without enterprise overhead they will not administer.",
    metaDescription:
      "Best call tracking software for fence and deck builders in 2026: fast setup, CallRail-class local attribution, and privacy-forward controls when neighbors and HOAs amplify scrutiny.",
    keywords: ["best call tracking software for fence and deck builders", "deck builder call tracking", "fence contractor call attribution"],
    picks: ["phonewagon", "callrail", "nimbata"],
  },
  {
    slug: "glass-window-installers",
    title: "Best Call Tracking Software for Glass & Window Installers (2026)",
    subtitle: "Attribution for retrofit, GC, and commercial glazing call funnels.",
    intro: "Glass and window installers run mixed retail replacement and construction-adjacent work; call tracking must segment sources so retail promos do not pollute B2B pipeline reporting.",
    metaDescription:
      "Compare call tracking software for glass and window installers in 2026: enterprise conversation intelligence, deep multi-touch models, and dependable SMB DNI for retail campaigns.",
    keywords: ["best call tracking software for glass and window installers", "window replacement call tracking", "glass company call attribution"],
    picks: ["invoca", "calltrackingmetrics", "callrail"],
  },
  {
    slug: "concrete-contractors",
    title: "Best Call Tracking Software for Concrete Contractors (2026)",
    subtitle: "Governance-ready call reporting for flatwork, decorative, and GC-driven bids.",
    intro: "Concrete contractors need attribution that supports longer bid cycles, multiple stakeholders, and defensible ROI conversations when weather and schedules slip.",
    metaDescription:
      "Top call tracking software for concrete contractors in 2026: operator-grade analytics, enterprise AI for large programs, and unified lead capture when forms and calls both matter.",
    keywords: ["best call tracking software for concrete contractors", "concrete contractor call tracking", "flatwork contractor call attribution"],
    picks: ["calltrackingmetrics", "invoca", "whatconverts"],
  },
  {
    slug: "excavation",
    title: "Best Call Tracking Software for Excavation Companies (2026)",
    subtitle: "B2B-heavy call attribution for sitework, utilities, and developer-driven demand.",
    intro: "Excavation firms often win by phone through GCs and developers; tracking should map sources to qualified opportunities and support custom routing when programs scale.",
    metaDescription:
      "Call tracking software for excavation companies in 2026: deep attribution stacks, programmable telco for bespoke workflows, and enterprise intelligence for multi-region programs.",
    keywords: ["best call tracking software for excavation companies", "excavation contractor call tracking", "sitework call attribution"],
    picks: ["calltrackingmetrics", "twilio", "invoca"],
  },
  {
    slug: "auto-repair-shops",
    title: "Best Call Tracking Software for Auto Repair Shops (2026)",
    subtitle: "High-volume bay attribution for paid, organic, and referral phone leads.",
    intro: "Auto repair shops live on phone volume; call tracking must handle busy lunch hours, multi-location groups, and tight integration with ad platforms and GBP.",
    metaDescription:
      "Best call tracking software for auto repair shops in 2026: CallRail-style DNI, unified calls and forms, and deeper multi-touch reporting when you defend large paid budgets.",
    keywords: ["best call tracking software for auto repair shops", "auto repair call tracking", "mechanic shop call attribution"],
    picks: ["callrail", "whatconverts", "calltrackingmetrics"],
  },
  {
    slug: "mobile-mechanics",
    title: "Best Call Tracking Software for Mobile Mechanics (2026)",
    subtitle: "Programmable and lean stacks for road-based automotive service calls.",
    intro: "Mobile mechanics need call tracking that fits one-truck brands and small fleets—often with custom SMS flows—without paying for enterprise modules nobody uses.",
    metaDescription:
      "Lean call tracking software for mobile mechanics in 2026: API-first Twilio builds, PhoneWagon-style quick setup, and CallRail when you want turnkey DNI without engineering overhead.",
    keywords: ["best call tracking software for mobile mechanics", "mobile mechanic call tracking", "roadside mechanic call attribution"],
    picks: ["twilio", "phonewagon", "callrail"],
  },
  {
    slug: "cleaning-franchises",
    title: "Best Call Tracking Software for Cleaning Franchises (2026)",
    subtitle: "Multi-territory call governance and portfolio reporting for cleaning franchises.",
    intro: "Cleaning franchises need consistent tracking across territories, clear rollups for franchisors, and conversation intelligence when brand risk spans many markets.",
    metaDescription:
      "Call tracking software for cleaning franchises in 2026: enterprise conversation AI, operator-grade analytics, and proven SMB attribution for franchisee-led local spend.",
    keywords: ["best call tracking software for cleaning franchises", "cleaning franchise call tracking", "maid service franchise call attribution"],
    picks: ["invoca", "calltrackingmetrics", "callrail"],
  },
  {
    slug: "event-services",
    title: "Best Call Tracking Software for Event Services (2026)",
    subtitle: "Peak-season call routing and marketing attribution for event operators.",
    intro: "Event services spike around weekends and seasons; call tracking should handle burst volume, buyer routing when you sell leads, and clear source tags for RFP-style inquiries.",
    metaDescription:
      "Best call tracking software for event services in 2026: carrier-grade routing for high-volume programs, CallRail for local campaigns, and unified lead reporting across calls and chats.",
    keywords: ["best call tracking software for event services", "event rental call tracking", "event company call attribution"],
    picks: ["ringba", "callrail", "whatconverts"],
  },
  {
    slug: "home-inspectors",
    title: "Best Call Tracking Software for Home Inspectors (2026)",
    subtitle: "Privacy-respecting attribution for solo inspectors and small multi-inspector firms.",
    intro: "Home inspectors need lightweight call proof for agent referrals and local SEO without looking invasive; tracking should stay simple and ethically easy to explain.",
    metaDescription:
      "Compare call tracking software for home inspectors in 2026: privacy-forward analytics, PhoneWagon-style quick setup, and unified lead capture when buyers also submit web forms.",
    keywords: ["best call tracking software for home inspectors", "home inspector call tracking", "property inspection call attribution"],
    picks: ["nimbata", "phonewagon", "whatconverts"],
  },
];

const TRADE_DEEP_OVERRIDES: Partial<Record<string, TradeDeepOverride>> = {
  "appliance-repair": {
    editorialGuidance: [
      { heading: "Tie calls to booked truck rolls", body: "Tag outcomes in CRM—warranty recall versus paid repair—so Google LSA and branded search are not given false credit for parts-delay frustration calls." },
      { heading: "Regression-test after website template swaps", body: "Appliance sites change seasonally; re-verify DNI and swap pools whenever you add chat widgets or new landing pages." },
      { heading: "Separate transactional from marketing numbers", body: "Dispatch confirmation lines should not pollute paid-attribution pools; keep reporting honest for owner decisions." },
      { heading: "Model minute costs on peak heat weeks", body: "When AC demand spikes, number pools and concurrent calls can surprise budgets—forecast summer peaks before annual commits." },
    ],
    whyThesePicks: [
      { heading: "PhoneWagon", body: "PhoneWagon fits lean appliance shops that need working DNI fast without standing up a MAP team—ideal when the owner still answers after-hours overflow. Pilot on one paid channel first and confirm CRM lead creation includes appliance type and ZIP. It wins when simplicity beats shelfware." },
      { heading: "Nimbata", body: "Nimbata helps when homeowners worry about data use and you want privacy-forward positioning alongside basic attribution. Validate that softer positioning still feeds the dashboards your agency needs. Pair with clear consent language on web forms." },
      { heading: "CallRail", body: "CallRail is the default when you run layered Google, LSA, and local SEO and need dependable keyword-level context plus integrations to common CRMs. Trial number pool sizing against simultaneous CSR load; undersized pools leak attribution during storms." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for appliance repair businesses?", a: "PhoneWagon and Nimbata suit lean and privacy-conscious teams; CallRail is the common choice when paid search depth and integrations matter." },
      { q: "Should appliance repair shops use number pools?", a: "Yes when multiple simultaneous calls hit dispatch; size pools against real peak minutes, not average Tuesdays." },
      { q: "How do we attribute warranty calls fairly?", a: "Use CRM disposition tags and exclude non-revenue outcomes from paid ROI dashboards while still monitoring quality." },
      { q: "What should a pilot test?", a: "DNI accuracy on mobile, CRM mapping, call recording compliance, and booked-job match rates by source." },
      { q: "When is CallTrackingMetrics worth it?", a: "When you defend large multi-channel budgets weekly and need multi-touch models beyond first-click simplicity." },
      { q: "Do we need conversation AI day one?", a: "Usually not—start with clean source-to-booked mapping; add AI when volume justifies coaching and QA automation." },
    ],
  },
  "garage-door": {
    editorialGuidance: [
      { heading: "Split emergency from install funnels", body: "Different keywords, landing pages, and CSR scripts produce different call quality—blend them in one bucket and budgets drift wrong." },
      { heading: "Capture form + call journeys", body: "Many shoppers submit a form then call; unified lead reporting avoids double-counting and shows true assisted paths." },
      { heading: "Stress-test after-hours routing", body: "Spring emergencies spike at night; confirm tracking still attributes when overflow forwards to cell lines." },
      { heading: "Defend spend with weekly QA", body: "Assign one owner to review tagged junk calls versus booked jobs before scaling LSA or branded bids." },
    ],
    whyThesePicks: [
      { heading: "CallRail", body: "CallRail is the workhorse for garage door paid search and LSA programs where keyword context and swap reliability matter. Connect real booking outcomes before trusting CPL improvements. It fits most growing local operators." },
      { heading: "WhatConverts", body: "WhatConverts helps when web forms, chats, and calls all feed one sales inbox—common when homeowners request quotes online then call to confirm arrival windows. Map duplicates carefully so reporting stays honest." },
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics enters when you run layered retargeting, branded, and non-brand programs and need stronger multi-touch defense in weekly budget reviews. Expect higher admin lift and validate models against booked revenue, not vanity calls." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for garage door companies?", a: "CallRail for classic DNI plus ads, WhatConverts when forms and calls must rollup together, CallTrackingMetrics when multi-touch proof becomes mandatory." },
      { q: "How should garage door teams tag calls?", a: "At minimum separate emergency, repair, install, and commercial; tag outcomes booked versus lost to tune bids." },
      { q: "Does LSA need separate tracking?", a: "Treat LSA as its own channel in reporting; do not assume organic branded credit for those calls." },
      { q: "What breaks attribution most often?", a: "Website swaps without DNI QA, call forwarding changes, and CSR cell routes that bypass tracked numbers." },
      { q: "When is Ringba appropriate?", a: "When you monetize or route buyer-grade call flows at very high concurrency—not typical single-location installers." },
      { q: "How fast should pilots run?", a: "Two to four weeks across real weather swings so emergency and scheduled calls both appear in data." },
    ],
  },
  locksmith: {
    editorialGuidance: [
      { heading: "Measure qualified jobs, not ring volume", body: "After-hours spam and wrong-number spikes distort metrics—use disposition tags tied to booked revenue." },
      { heading: "Scale pools for concurrent emergencies", body: "Multiple vans in one metro can exhaust small pools; size for Friday-night demand, not midday averages." },
      { heading: "Route buyer programs carefully", body: "If you buy shared leads, Ringba-style routing can help—document compliance and recording consent by state." },
      { heading: "Keep GBP and paid keywords aligned", body: "Mismatch between ad promise and landing headline produces junk calls that look like conversions until tagged." },
    ],
    whyThesePicks: [
      { heading: "CallRail", body: "CallRail remains the default for locksmith Google and LSA mixes where speed-to-setup and integration breadth beat custom engineering. Validate geo granularity so suburban campaigns are not over-credited for downtown noise." },
      { heading: "Ringba", body: "Ringba fits locksmith operations selling or routing high-volume buyer calls or running multi-buyer programs where granular telco control reduces waste. It is overkill for single-van shops—trial only when concurrency truly demands it." },
      { heading: "WhatConverts", body: "WhatConverts helps when web click-to-call, forms, and chat all feed one coordinator—common for commercial rekey programs alongside residential lockouts. Deduplicate leads before ROI meetings." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for locksmith businesses?", a: "CallRail for most local marketing stacks, Ringba when buyer-grade routing or very high concurrency matters, WhatConverts when web plus call funnels must unify." },
      { q: "How do locksmiths reduce fake conversions?", a: "Tag wrong numbers, spam, and price-only shoppers; exclude them from paid ROI views while still monitoring trends." },
      { q: "Should we record calls?", a: "Follow state consent rules; use recordings for QA and dispute resolution, not marketing voyeurism." },
      { q: "What KPI matters most?", a: "Booked jobs and average ticket by source after CSR qualification—not raw call counts." },
      { q: "Is Twilio necessary?", a: "Only when you need bespoke SMS plus voice orchestration; most locksmiths succeed with packaged DNI first." },
      { q: "How long to pilot?", a: "At least 14 days including a weekend to capture nightlife demand patterns." },
    ],
  },
  "flooring-contractors": {
    editorialGuidance: [
      { heading: "Unify showroom and web journeys", body: "Measure calls that follow form fills for measure appointments—flooring buyers often touch both before booking." },
      { heading: "Segment by product line", body: "Hardwood, LVP, and tile campaigns produce different ticket sizes; blended reporting hides winners." },
      { heading: "Protect attribution on visual-heavy sites", body: "Image carousels and lazy loading can delay swap scripts—test mobile Safari paths weekly." },
      { heading: "Model longer sales cycles", body: "Use CRM stages so nurture assists get credit even when the call closes days later." },
    ],
    whyThesePicks: [
      { heading: "WhatConverts", body: "WhatConverts is ideal when flooring teams capture leads from Houzz-style galleries, website forms, and phone in one rollup—reduces double attribution when designers email then call. Keep dedupe rules tight." },
      { heading: "CallRail", body: "CallRail supports fast-moving local paid programs and showroom-driven search where keyword context still matters. Trial with separate pools for each store if you run multi-location." },
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics helps when you stack branded, non-brand, and display retargeting and need weekly multi-touch defense with ops-heavy marketing. Budget admin time." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for flooring contractors?", a: "WhatConverts when forms plus calls matter, CallRail for standard paid/local attribution, CallTrackingMetrics for deeper multi-touch models." },
      { q: "Should each showroom have its own pool?", a: "Usually yes for clean geo reporting; centralize dashboards but keep numbers local." },
      { q: "How do we credit designer referrals?", a: "Use source and campaign tags plus CSR notes so partner-driven calls are not mislabeled as generic organic." },
      { q: "What should pilots include?", a: "Measure booking rate, not just calls, and compare assisted versus last-click paths for big-ticket installs." },
      { q: "When is Invoca overkill?", a: "For single-showroom operators without enterprise QA requirements—lighter stacks often ship faster ROI." },
      { q: "What is the biggest pitfall?", a: "Treating every ring as a lead—tag price-only shoppers and vendor calls out of paid ROI." },
    ],
  },
  "fence-deck-builders": {
    editorialGuidance: [
      { heading: "Keep summer peaks honest", body: "Seasonal surges can inflate perceived channel performance—compare year-over-year weeks, not only month totals." },
      { heading: "Track referral and paid separately", body: "Neighbor referrals behave like branded search; label them clearly to avoid overfunding broad paid." },
      { heading: "Privacy optics in tight neighborhoods", body: "When HOAs scrutinize vendors, choose vendors that explain tracking plainly on sites and consent flows." },
      { heading: "Weather delay call patterns", body: "Rain weeks shift call timing; do not pause QA just because volume dips—broken swaps hide until the next dry spell." },
    ],
    whyThesePicks: [
      { heading: "PhoneWagon", body: "PhoneWagon fits lean outdoor crews that need credible attribution without hiring a telecom admin—great for first paid tests and seasonal postcard pushes." },
      { heading: "CallRail", body: "CallRail is the upgrade path when you add LSA, search, and social concurrently and need integration depth plus keyword context for estimator scheduling." },
      { heading: "Nimbata", body: "Nimbata helps when privacy-forward positioning matters in affluent subdivisions or HOA-heavy markets while you still need baseline dashboards." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for fence and deck builders?", a: "PhoneWagon for fast lean starts, CallRail for integrated local marketing, Nimbata when privacy-forward positioning is a sales asset." },
      { q: "Do deck builders need enterprise tools?", a: "Rarely at first—prove booked jobs per source, then scale complexity with revenue." },
      { q: "How should we tag commercial versus residential?", a: "Use separate numbers or tags so commercial GC calls do not pollute homeowner CPL math." },
      { q: "What is a good pilot metric?", a: "Booked site visits and signed contracts by source after CSR qualification." },
      { q: "Should we track missed calls?", a: "Yes—missed calls often explain lost estimates during busy build weeks." },
      { q: "When do we add forms tracking?", a: "When even 15% of leads originate on web before calling—unified rollups reduce blind spots." },
    ],
  },
  "glass-window-installers": {
    editorialGuidance: [
      { heading: "Separate retail replacement from GC programs", body: "Different sales cycles, prices, and compliance needs—shared pools muddy CPL and coaching." },
      { heading: "Govern conversation data", body: "Enterprise AI is powerful; define who listens, trains models, and deletes recordings to reduce risk." },
      { heading: "Integrate with CRM opportunities", body: "Long glazing bids need opportunity IDs on calls so assists credit correctly weeks later." },
      { heading: "QA mobile click-to-call", body: "Commercial buyers research on phones; verify DNI on iOS Safari for spec-heavy pages." },
    ],
    whyThesePicks: [
      { heading: "Invoca", body: "Invoca suits multi-location window dealers and manufacturer programs that need conversation intelligence, compliance workflows, and executive-ready rollups. Expect enterprise onboarding." },
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics helps sophisticated marketing teams defend layered paid programs with multi-touch models tied to CRM outcomes. Requires clean opportunity data." },
      { heading: "CallRail", body: "CallRail remains the pragmatic choice for retail replacement campaigns and local SEO where fast DNI and broad integrations beat bespoke telco builds." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for glass and window installers?", a: "Invoca for enterprise-grade programs, CallTrackingMetrics for deep attribution, CallRail for turnkey local marketing stacks." },
      { q: "When is conversation AI worth it?", a: "When call volume and revenue justify QA automation and coaching—not for occasional one-off residential leads alone." },
      { q: "How should commercial teams pilot?", a: "Start with one region and opportunity type; validate CRM mapping before national rollout." },
      { q: "What compliance steps matter?", a: "Recording consent, data retention policies, and role-based access to sensitive calls." },
      { q: "Do we still need form tracking?", a: "Often yes—specifiers email PDFs then call; unified reporting prevents blind spots." },
      { q: "What proves ROI fastest?", a: "Opportunity stage progression and won revenue by marketing source—not raw call volume." },
    ],
  },
  "concrete-contractors": {
    editorialGuidance: [
      { heading: "Align to bid milestones", body: "GC calls often convert weeks later—use opportunity stages so mid-funnel assists keep credit." },
      { heading: "Segment homeowner flatwork", body: "Driveway promos behave differently than commercial pours; separate numbers or tags." },
      { heading: "Weekly budget defense", body: "Concrete marketing competes with weather noise—review junk tags and booked outcomes every Monday." },
      { heading: "Integrate dispatcher notes", body: "CSR qualification fields improve downstream reporting more than doubling number pools." },
    ],
    whyThesePicks: [
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics supports teams that need multi-touch clarity when running layered local and regional programs with real CRM discipline." },
      { heading: "Invoca", body: "Invoca fits larger concrete enterprises or dealer networks needing AI QA, compliance, and governance across regions—heavy stack, high value when utilized." },
      { heading: "WhatConverts", body: "WhatConverts helps when RFIs and web forms precede phone conversations—rollup reduces double counting between estimating portals and inbound calls." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for concrete contractors?", a: "CallTrackingMetrics for advanced models, Invoca for enterprise conversation programs, WhatConverts when forms and calls must unify." },
      { q: "Should residential and commercial share tracking?", a: "Share a platform but separate pools or tags to keep CPL honest." },
      { q: "What pilot evidence matters?", a: "Qualified opportunities and won job value by source—not answer rate alone." },
      { q: "How do weather delays affect data?", a: "Tag seasonality in reports so paused pours do not look like creative failure." },
      { q: "When is Twilio sensible?", a: "When you already employ engineers for custom routing or telephony—not for typical flatwork shops." },
      { q: "What is the first integration?", a: "CRM or estimating tool so calls attach to opportunities automatically." },
    ],
  },
  excavation: {
    editorialGuidance: [
      { heading: "B2B truth in CRM", body: "Developer and GC calls should map to accounts and bids, not anonymous web leads." },
      { heading: "Custom routing for multi-region ops", body: "Programmable flows help when acquisitions add new area codes and forward trees." },
      { heading: "Enterprise governance", body: "Safety-adjacent calls may need stricter retention and access controls—plan before scaling AI." },
      { heading: "Prove marketing separately from RFP inbound", body: "Tag RFP sources versus outbound nurture so budgets reflect controllable spend." },
    ],
    whyThesePicks: [
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics anchors excavation marketing teams that need defensible multi-touch reporting across regions and longer bid cycles." },
      { heading: "Twilio", body: "Twilio suits excavation IT-led orgs building bespoke call flows, IVR, and SMS handoffs across dispersed offices—requires engineering capacity." },
      { heading: "Invoca", body: "Invoca fits enterprise programs with conversation intelligence requirements, multi-brand governance, and strict compliance on large civil-adjacent campaigns." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for excavation companies?", a: "CallTrackingMetrics for attribution depth, Twilio for custom programmable stacks, Invoca for enterprise conversation intelligence." },
      { q: "Do small excavators need Invoca?", a: "Usually not until call volume, brands, or compliance needs justify enterprise spend." },
      { q: "What should integrations include?", a: "CRM opportunities, bid tools, and marketing automation for clean account linkage." },
      { q: "How long should pilots run?", a: "At least one full bid cycle plus a busy dirt season window for representative mix." },
      { q: "What KPI matters?", a: "Qualified opportunities advanced and won contract value influenced by marketing touches." },
      { q: "When is Ringba used?", a: "Primarily for buyer networks or monetized call flows—not typical civil GC sales motions." },
    ],
  },
  "auto-repair-shops": {
    editorialGuidance: [
      { heading: "Handle lunch-hour concurrency", body: "Size pools for simultaneous rings across bays; missed-call spikes destroy marketing trust if unmeasured." },
      { heading: "Separate fleet from retail", body: "Account-based fleet calls skew CPL and CSR coaching—tag them distinctly." },
      { heading: "Tie to DMS or shop CRM", body: "RO outcomes beat raw rings—sync closed repair orders where possible." },
      { heading: "Audit LSA and search weekly", body: "Automotive CPC moves fast; stale negative keyword insight hides inside aggregate call counts." },
    ],
    whyThesePicks: [
      { heading: "CallRail", body: "CallRail is the common default for multi-bay shops running Google, LSA, and Facebook concurrently with tight integration needs." },
      { heading: "WhatConverts", body: "WhatConverts helps when online scheduling, chat, and calls all feed the same BDC—dedupe matters for honest CPL." },
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics supports groups spending heavily on layered digital and needing multi-touch weekly defense tied to CRM revenue." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for auto repair shops?", a: "CallRail for standard integrated stacks, WhatConverts when forms and chats matter, CallTrackingMetrics for deeper multi-touch reporting." },
      { q: "Should shops record every call?", a: "Follow local consent laws; use recordings for QA and dispute resolution with clear policies." },
      { q: "How do we filter wrong-number calls?", a: "Train CSRs on disposition codes and exclude them from paid ROI dashboards." },
      { q: "What is the biggest setup mistake?", a: "Forwarding tracked numbers to untracked cell lines—breaks attribution silently." },
      { q: "When is Twilio used in automotive?", a: "When custom IVR, SMS, and voice need one programmable platform—usually multi-site groups with dev staff." },
      { q: "What proves ROI?", a: "RO revenue and accepted recommendations by marketing source after qualification." },
    ],
  },
  "mobile-mechanics": {
    editorialGuidance: [
      { heading: "Keep stacks lean", body: "One-truck operators stall on heavy MAPs—start with working DNI and expand only after discipline exists." },
      { heading: "Programmable SMS plus voice", body: "Roadside workflows often need bespoke SMS confirmations alongside tracked voice—API stacks shine when you have help." },
      { heading: "Mobile browser QA", body: "Customers tap ads on phones in parking lots; verify click-to-call and swap latency." },
      { heading: "Tag fleet versus retail", body: "Small fleet accounts need different follow-up and reporting from consumer rescues." },
    ],
    whyThesePicks: [
      { heading: "Twilio", body: "Twilio fits mobile mechanics partnering with developers to stitch SMS ETA updates with tracked voice—powerful when you can maintain it." },
      { heading: "PhoneWagon", body: "PhoneWagon gives fast DNI for solo operators testing paid without hiring ops—ship first, optimize later." },
      { heading: "CallRail", body: "CallRail bridges when you outgrow barebones setups and want integrations, keyword context, and dashboards without full custom telephony." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for mobile mechanics?", a: "Twilio for custom programmable flows, PhoneWagon for quick lean DNI, CallRail for integrated marketing attribution as you scale." },
      { q: "Do mobile mechanics need Ringba?", a: "Rarely—reserve for monetized call routing programs, not typical roadside service." },
      { q: "What should pilots measure?", a: "Booked appointments and average ticket by channel after excluding spam." },
      { q: "How do we handle after-hours forwarding?", a: "Track forwarded paths and test that swaps still attribute when cells answer." },
      { q: "Is conversation AI needed?", a: "Optional—prioritize clean source mapping and CSR dispositions first." },
      { q: "What integration matters?", a: "Scheduling or invoicing tools so revenue ties back to calls automatically." },
    ],
  },
  "cleaning-franchises": {
    editorialGuidance: [
      { heading: "Standardize across territories", body: "Franchisors need template swaps and naming conventions so local marketers do not fork broken scripts." },
      { heading: "Portfolio rollups", body: "Executive reporting should compare territories on qualified calls and booked cleans—not vanity rings." },
      { heading: "AI governance", body: "When using conversation intelligence, define retention, access, and coaching policies before franchisees opt in." },
      { heading: "Separate brand and local campaigns", body: "Corporate promos versus local LSA should not share attribution pools blindly." },
    ],
    whyThesePicks: [
      { heading: "Invoca", body: "Invoca supports franchise systems that need AI, compliance, and multi-brand governance at scale—expect enterprise effort." },
      { heading: "CallTrackingMetrics", body: "CallTrackingMetrics helps franchisors and agencies defend multi-channel spend with weekly multi-touch reporting tied to CRM outcomes." },
      { heading: "CallRail", body: "CallRail remains the pragmatic workhorse for franchisees running Google and LSA locally with minimal admin overhead." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for cleaning franchises?", a: "Invoca for enterprise-grade programs, CallTrackingMetrics for deep multi-location attribution, CallRail for franchisee-friendly DNI." },
      { q: "Should franchisors pick one vendor?", a: "Often yes for reporting consistency; allow local spend only within approved templates." },
      { q: "What metrics should royalty reviews use?", a: "Booked recurring cleans and upsell attach by territory—not raw call counts." },
      { q: "How do we onboard new territories?", a: "Clone number pools, verify site swaps, and run parallel QA for two weeks post-launch." },
      { q: "When is Nimbata used?", a: "When privacy positioning or regional compliance is a brand requirement for certain markets." },
      { q: "What is the biggest risk?", a: "Unmaintained swaps after rebrands—audit numbers after every name change." },
    ],
  },
  "event-services": {
    editorialGuidance: [
      { heading: "Burst capacity planning", body: "Saturday wedding surges can exhaust pools—model peaks, not averages." },
      { heading: "Buyer routing transparency", body: "If you monetize calls, document buyer rules and compliance to avoid attribution fights." },
      { heading: "Unify chats and calls", body: "Planners DM Instagram then call—rollup tools reduce blind assisted credit." },
      { heading: "Corporate versus social leads", body: "Different funnels deserve different tags and CPL expectations." },
    ],
    whyThesePicks: [
      { heading: "Ringba", body: "Ringba fits event operators running buyer networks or high-concurrency routing where granular telco control cuts waste during peak season." },
      { heading: "CallRail", body: "CallRail supports local operators buying Google and social with straightforward DNI and solid integrations for lean teams." },
      { heading: "WhatConverts", body: "WhatConverts helps when planners submit web forms, use chat, and call—common for corporate events and venue partnerships." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for event services?", a: "Ringba for high-volume routing programs, CallRail for standard local marketing, WhatConverts when chats and forms must unify with calls." },
      { q: "Do small rental shops need Ringba?", a: "Only when concurrency or buyer routing truly demands it; otherwise start simpler." },
      { q: "What should pilots capture?", a: "Booked events and upsell revenue by channel after excluding vendor and spam calls." },
      { q: "How do we handle seasonal spikes?", a: "Temporarily expand pools and staffing QA windows during peak months." },
      { q: "Is Invoca common here?", a: "Usually for large corporate event brands with enterprise governance—not typical single-market rentals." },
      { q: "What integration matters?", a: "CRM or booking software so assists tie to deposits and contracts." },
    ],
  },
  "home-inspectors": {
    editorialGuidance: [
      { heading: "Lightweight and explainable", body: "Agents and buyers should understand why numbers swap—clear site copy reduces suspicion." },
      { heading: "Privacy-forward positioning", body: "Choose vendors and settings that match inspector ethics and state recording rules." },
      { heading: "Form + call paths", body: "Many buyers schedule via web then confirm by phone—dedupe gently." },
      { heading: "Avoid over-engineering", body: "Solo inspectors rarely need enterprise AI—ship attribution you will actually review monthly." },
    ],
    whyThesePicks: [
      { heading: "Nimbata", body: "Nimbata supports inspectors who want privacy-forward positioning while still proving which sources feed the calendar." },
      { heading: "PhoneWagon", body: "PhoneWagon helps solo inspectors launch credible tracking quickly between report-writing blocks—minimal admin." },
      { heading: "WhatConverts", body: "WhatConverts helps small multi-inspector firms unify website inquiries and calls so partner agents see consistent reporting." },
    ],
    faqItems: [
      { q: "What is the best call tracking software for home inspectors?", a: "Nimbata for privacy-forward positioning, PhoneWagon for lean quick setup, WhatConverts when forms and calls should rollup together." },
      { q: "Should inspectors record everything?", a: "Only with clear consent and a documented policy—many states restrict unannounced recording." },
      { q: "What metric matters?", a: "Booked inspections and referral volume from trusted agents—not raw rings." },
      { q: "Do inspectors need CallTrackingMetrics?", a: "Rarely unless you run sophisticated multi-channel spend with dedicated marketing staff." },
      { q: "How long to pilot?", a: "Two to three weeks across varied property types to see real mix." },
      { q: "What is the first integration?", a: "Scheduling or CRM so calls map to appointments without manual spreadsheets." },
    ],
  },
};

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
  const deep = TRADE_DEEP_OVERRIDES[config.slug];
  const editorialGuidance = deep?.editorialGuidance ?? g.editorial;
  const whyThesePicks =
    deep?.whyThesePicks ??
    g.picks.map((tool) => ({
      heading: tool,
      body: `${tool} is a strong fit for this trade when implemented with disciplined CRM outcomes and weekly attribution QA. Validate source-to-booked-job accuracy during pilot before scaling spend decisions.`,
    }));
  const faqItems =
    deep?.faqItems ??
    [
      {
        q: `What is the best call tracking software for ${config.title.replace("Best Call Tracking Software for ", "").replace(" (2026)", "").toLowerCase()}?`,
        a: `${g.picks.join(", ")} are strong options depending on attribution depth and operational complexity.`,
      },
      { q: "How should teams prove ROI?", a: "Track source-level calls, qualification rates, and booked outcomes in CRM by campaign and service line." },
      { q: "What should be tested in a pilot?", a: "DNI reliability, CRM mapping, number pool sizing, and lead-quality tagging during real call volume." },
      { q: "When should teams upgrade tools?", a: "Upgrade when current reporting can no longer defend spend decisions or support required workflow complexity." },
    ];
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
    editorialGuidance,
    whyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides: [
      { label: "How to track phone call conversions", href: `${GUIDES}/how-to-track-phone-call-conversions` },
      { label: "What is call tracking", href: `${GUIDES}/what-is-call-tracking` },
      { label: "Call tracking vs Google Analytics", href: `${GUIDES}/call-tracking-vs-google-analytics` },
      { label: "Lead generation strategies for local business", href: "/lead-generation/guides/lead-generation-strategies-for-local-business" },
      { label: "CRM software hub", href: "/crm" },
    ],
    faqItems,
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
      description: config.metaDescription ?? config.subtitle,
      keywords: config.keywords,
    },
  ])
);
