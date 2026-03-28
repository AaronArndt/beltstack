/**
 * SEO tools alternatives — dedicated pages for Semrush, Ahrefs, and Moz Pro.
 * Editorial copy emphasizes local/trades workflows, first-party verification (GSC), limits of tooling vs execution, and independence from vendors.
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
import { getSeoToolsComparisonBySlug } from "@/lib/data/seoToolsComparisons";
import {
  getSeoToolsAlternativeUrl,
  getSeoToolsBestForUrl,
  getSeoToolsCompareUrl,
  getSeoToolsReviewUrl,
} from "@/lib/routes";

const CATEGORY = { href: "/seo-tools", label: "SEO Tools" };
const ROUNDUP_HREF = "/seo-tools/best-seo-tools";
const COMPARE_HUB = "/seo-tools/compare";
const GUIDES_HUB = "/seo-tools/guides";

const HUB_RELATED_RESOURCES: AlternativesLink[] = [
  { label: "SEO tools hub", href: CATEGORY.href },
  { label: "Best SEO tools", href: ROUNDUP_HREF },
  { label: "Compare SEO tools", href: COMPARE_HUB },
  { label: "SEO tools guides", href: GUIDES_HUB },
  { label: "Semrush vs Ahrefs", href: getSeoToolsCompareUrl("semrush-vs-ahrefs") },
  { label: "BrightLocal vs Whitespark", href: getSeoToolsCompareUrl("brightlocal-vs-whitespark") },
  { label: "Best for contractors", href: getSeoToolsBestForUrl("contractors") },
  { label: "Best for local SEO", href: getSeoToolsBestForUrl("local-seo") },
  { label: "Best website builders (2026)", href: "/website-builders/best-website-builders" },
  { label: "Best lead generation tools (2026)", href: "/lead-generation/best-lead-generation-tools" },
  { label: "CRM software hub", href: "/crm" },
];

function softwareReviewLinks(entries: [string, string][]): AlternativesLink[] {
  return entries.map(([slug, name]) => ({
    label: `${name} review`,
    href: getSeoToolsReviewUrl(slug),
  }));
}

const ALL_REVIEW_TUPLES: [string, string][] = [
  ["semrush", "Semrush"],
  ["ahrefs", "Ahrefs"],
  ["moz-pro", "Moz Pro"],
  ["ubersuggest", "Ubersuggest"],
  ["brightlocal", "BrightLocal"],
  ["whitespark", "Whitespark"],
  ["se-ranking", "SE Ranking"],
  ["google-search-console", "Google Search Console"],
];

function rel(slug: string) {
  return toAlternativesRelatedComparison(getSeoToolsCompareUrl(slug), getSeoToolsComparisonBySlug(slug));
}

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  {
    heading: "Local execution first",
    body: "Google Business Profile photos, primary categories, review responses, and truthful service areas move the needle when they are maintained weekly. Dashboards and keyword lists only help if someone acts on them—our alternatives pages assume you are budgeting labor or an agency, not magic automation.",
  },
  {
    heading: "Verify with first-party data",
    body: "Keep every property in Google Search Console. When a paid tool’s keyword ideas, rank positions, or traffic estimates disagree with your Performance and Coverage reports, trust your verified property data and spot-check high-value queries in the browser—not the tool’s defaults alone.",
  },
  {
    heading: "Stack discipline",
    body: "One primary research suite plus Search Console is enough for many HVAC, plumbing, and home-services teams. Add BrightLocal or Whitespark when Map Pack grids, citations, or multi-location reporting—not national content research—is the bottleneck.",
  },
  {
    heading: "Limit and seat math",
    body: "Model tracked keywords, crawl credits, locations, and user seats before you annualize. Headline pricing rarely matches checkout; confirm current quotas on each vendor’s site so you are not paying for enterprise depth nobody logs into.",
  },
  {
    heading: "Editorial independence",
    body: "BeltStack does not sell placement on these lists. Rankings reflect typical contractor and local-SMB workflows; we may earn affiliate commissions on some outbound links elsewhere on the site—those fees do not change how we describe trade-offs between tools.",
  },
  {
    heading: "Measure booked jobs",
    body: "Tie SEO time and software cost to calls, forms, and booked revenue from service pages and Maps—not vanity national rankings that never produce a truck roll. If a tool cannot connect to how you actually win work, simplify the stack.",
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

const semrushAlts: AlternativesTopPick[] = [
  {
    slug: "ahrefs",
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: "4.7",
    bestFor: "Backlinks and content gap research",
    description:
      "Best when competitor links and content gaps steer your roadmap; reconcile link targets with what your site can earn ethically and what GSC shows is already working.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
    startingPrice: "From ~$129/mo",
    standoutFeature: "Link index depth",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    bestFor: "Value all-in-one SEO",
    description:
      "Solid rank tracking and audits at a lower tier than flagship suites—validate rank movements against Search Console and your lead data before trusting every alert.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    compareHref: getSeoToolsCompareUrl("se-ranking-vs-semrush"),
    startingPrice: "From ~$65/mo",
    standoutFeature: "Price-to-feature balance",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    bestFor: "Local SEO operations",
    description:
      "GBP, citations, and local rank grids when Maps is the focus; pair with on-site service pages and review discipline or grids become pretty reports only.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    startingPrice: "From ~$39/mo",
    standoutFeature: "Map Pack workflows",
  },
  {
    slug: "moz-pro",
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: "4.3",
    bestFor: "Approachable SMB suite",
    description: "Easier onboarding with credible fundamentals and education—strong when your team needs adoption, not when raw link-index depth is the only success metric.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    startingPrice: "From ~$99/mo",
    standoutFeature: "Training + UX",
  },
  {
    slug: "google-search-console",
    name: "Google Search Console",
    logoSrc: "/Logos/google.jpeg",
    rating: "4.8",
    bestFor: "Free performance truth",
    description:
      "Queries, coverage, and indexing signals straight from Google—non-negotiable on every domain; use it to sanity-check any paid suite’s picture of your property.",
    reviewHref: getSeoToolsReviewUrl("google-search-console"),
    startingPrice: "Free",
    standoutFeature: "Authoritative data",
  },
];

const semrushOriginal: AlternativesTableRow = {
  slug: "semrush",
  name: "Semrush",
  logoSrc: "/Logos/semrush.jpeg",
  bestFor: "All-in-one SEO and marketing research",
  startingPrice: "From ~$139/mo",
  standoutFeature: "Broad datasets + workflows",
  reviewHref: getSeoToolsReviewUrl("semrush"),
};

const semrushDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Ahrefs",
    heading: "Best for link-led strategy",
    body: "Choose Ahrefs when backlink gap analysis, content explorer, and historical link context drive prioritization more than Semrush’s extra marketing and advertising modules. Local service businesses still need GBP hygiene and service-area pages—Ahrefs informs what to build and who links in your niche, not whether your tech shows up on time. Cross-check any “must win” keyword with Search Console queries you already earn before you chase national volume.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
  },
  {
    productName: "SE Ranking",
    heading: "Best value all-in-one",
    body: "SE Ranking is the pragmatic swap when Semrush’s project limits, seats, or renewal total overshoot what your team actually opens each month. You still get audits, rank tracking, and competitor views—just model keyword quotas and audit frequency on the plan you would buy, not the marketing page teaser. Pair with GSC exports monthly so leadership sees clicks and impressions next to rank charts.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    compareHref: getSeoToolsCompareUrl("se-ranking-vs-semrush"),
  },
  {
    productName: "BrightLocal",
    heading: "Best local SEO add-on",
    body: "BrightLocal fits when Semrush’s local features are not where your team lives day to day—grid reports, citation cleanup, and client PDFs for multi-location or agency workflows. It does not replace strong on-page copy or review culture; it makes Map Pack and directory work visible and accountable. If you only run one truck in one city, still confirm you will use grids and listings monthly before you subscribe.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const semrushPage: AlternativesTemplateProps = {
  title: "Best Semrush Alternatives (2026)",
  subtitle:
    "If Semrush pricing, UI weight, or feature overlap pushes you to switch, these picks reflect how local service businesses actually stack SEO software: one credible research layer, Search Console as ground truth, and optional local tooling when Maps and citations—not more dashboards—are the constraint.",
  productName: "Semrush",
  productSlug: "semrush",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSeoToolsReviewUrl("semrush"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Teams pivot from Semrush when they want deeper backlinks (Ahrefs), lower-cost all-in-one (SE Ranking), or a dedicated local platform (BrightLocal) alongside Search Console.",
    "Verify you are not paying for enterprise depth you never open—local contractors often need one suite plus disciplined GBP execution, not every module on the pricing page.",
    "We do not have access to your Search Console or ad accounts; treat our shortlists as workflow guidance, then confirm plans, limits, and regional pricing on each vendor’s site before you commit.",
    "Moz Pro and Ubersuggest are honorable mentions in the broader ecosystem—see our Moz Pro alternatives page and Semrush vs Ubersuggest comparison when education or entry price drives the decision.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Price at scale",
      body: "Seats, projects, and tracked keywords climb quickly for multi-location brands; finance often asks for the same reporting with a smaller line item.",
    },
    {
      heading: "Feature overlap",
      body: "If you only use audits, position tracking, and occasional keyword research, a lighter all-in-one or a specialist tool plus GSC may reduce noise and login fatigue.",
    },
    {
      heading: "Local-first workflows",
      body: "Map Pack operators sometimes prefer BrightLocal or Whitespark for daily GBP, grid, and citation work while keeping Semrush-class research elsewhere—or dropping it entirely if local demand is the whole game.",
    },
    {
      heading: "Accuracy expectations",
      body: "When stakeholders want rank and traffic estimates to match real phones ringing, teams reconcile Semrush with GSC and call tracking; mismatches push some buyers toward simpler stacks they can explain in a weekly ops meeting.",
    },
  ],
  topAlternatives: semrushAlts,
  comparisonTableRows: buildTableRows(semrushOriginal, semrushAlts),
  detailedAlternatives: semrushDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("semrush-vs-ahrefs"), rel("semrush-vs-ubersuggest"), rel("se-ranking-vs-semrush")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "What is the closest alternative to Semrush?",
      a: "Ahrefs for link-first teams; SE Ranking for budget all-in-one; add BrightLocal when local listings dominate your roadmap. Semrush remains a strong default when you want breadth and adjacent marketing modules in one login.",
    },
    {
      q: "Can I replace Semrush with free tools?",
      a: "Google Search Console is essential on every verified site, but competitor research, scalable crawls, and historical rank context usually need a paid suite as you add pages and markets. Start with GSC and honest ops capacity, then add paid tooling when free exports are blocking decisions.",
    },
    {
      q: "How does BeltStack choose Semrush alternatives?",
      a: "We prioritize local service business and agency workflows—not vendor sponsorship. Alternatives lists can change when products ship new limits or pricing; always confirm current terms on the vendor’s site and against your own analytics.",
    },
    {
      q: "Do affiliate links affect these recommendations?",
      a: "We may earn commissions on some outbound links site-wide; they do not buy placement here. Use our reviews and comparisons as a starting point, then run your own trial and invoice math.",
    },
  ],
};

const ahrefsAlts: AlternativesTopPick[] = [
  {
    slug: "semrush",
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: "4.6",
    bestFor: "Broader marketing OS + SEO",
    description:
      "When you want research, audits, and adjacent marketing modules in one login—expect a heavier UI; validate that you will use the extra modules versus Ahrefs’ link-first focus.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
    startingPrice: "From ~$139/mo",
    standoutFeature: "Platform breadth",
  },
  {
    slug: "moz-pro",
    name: "Moz Pro",
    logoSrc: "/Logos/mozpro.jpeg",
    rating: "4.3",
    bestFor: "SMB-friendly fundamentals",
    description:
      "Less intimidating UX with solid rank tracking and on-page guidance; better for adoption across owners and ops than for teams that live in raw link exports.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
    startingPrice: "From ~$99/mo",
    standoutFeature: "Education + onboarding",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    bestFor: "Budget rank tracking + audits",
    description:
      "Pragmatic alternative when Ahrefs credits feel heavy for your usage—audit what you actually query each month before assuming you need flagship crawl depth.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    startingPrice: "From ~$65/mo",
    standoutFeature: "Value pricing",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    bestFor: "Local SEO depth",
    description:
      "Adds Map Pack and citation workflows Ahrefs does not natively replace; still requires consistent NAP, reviews, and service-area pages to mean anything in the field.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    startingPrice: "From ~$39/mo",
    standoutFeature: "Local grids + GBP",
  },
  {
    slug: "ubersuggest",
    name: "Ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    rating: "4.0",
    bestFor: "Entry-level research",
    description:
      "Lightweight keyword and audit tooling before flagship pricing—useful for experiments; cross-check volume and difficulty claims with GSC and live SERPs for your cities.",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ubersuggest"),
    startingPrice: "From ~$29/mo",
    standoutFeature: "Low entry cost",
  },
];

const ahrefsOriginal: AlternativesTableRow = {
  slug: "ahrefs",
  name: "Ahrefs",
  logoSrc: "/Logos/ahrefs.jpeg",
  bestFor: "Backlink intelligence and content research",
  startingPrice: "From ~$129/mo",
  standoutFeature: "Link index + content explorer",
  reviewHref: getSeoToolsReviewUrl("ahrefs"),
};

const ahrefsDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Semrush",
    heading: "Best all-in-one breadth",
    body: "Semrush is the usual swap when leadership wants SEO, content workflows, and adjacent marketing surfaces in one vendor relationship instead of Ahrefs’ link-and-content-research center of gravity. You trade some link-index obsession for platform sprawl—assign module owners so renewals match actual usage. Local contractors should still treat GBP and reviews as operational work; Semrush helps prioritize pages and terms, not truck rolls.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
  },
  {
    productName: "Moz Pro",
    heading: "Best approachable suite",
    body: "Moz Pro fits when your team finds Ahrefs dense or when stakeholders need clearer education and gentler onboarding without abandoning rank tracking and on-page guidance. It is not a full substitute for Ahrefs-level link exploration for advanced practitioners—be honest about whether Domain Authority charts or raw backlink rows drive your roadmap. Pair with Search Console for query reality checks.",
    reviewHref: getSeoToolsReviewUrl("moz-pro"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
  },
  {
    productName: "BrightLocal",
    heading: "Best local complement",
    body: "BrightLocal is the specialist layer when Map Pack grids, citations, and client reporting—not national keyword volumes—are the constraint. Ahrefs can inform which service pages to build; BrightLocal helps operationalize listings and local measurement. If you are a single-location shop, confirm you will act on grid and citation tasks monthly; software without execution is an easy write-off.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
  },
];

const ahrefsPage: AlternativesTemplateProps = {
  title: "Best Ahrefs Alternatives (2026)",
  subtitle:
    "If Ahrefs pricing, seat limits, or local workflow gaps push you elsewhere, this page maps practical swaps: flagship breadth (Semrush), approachable fundamentals (Moz Pro), value all-in-one (SE Ranking), entry research (Ubersuggest), and local execution (BrightLocal)—always anchored by Search Console on your verified properties.",
  productName: "Ahrefs",
  productSlug: "ahrefs",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSeoToolsReviewUrl("ahrefs"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Semrush is the common enterprise-style swap; Moz Pro fits teams wanting gentler onboarding; SE Ranking targets value buyers; BrightLocal covers Map Pack execution; Ubersuggest can suffice for light research before you graduate to heavier indexes.",
    "Keep Google Search Console on every property regardless of paid suite—it is the authoritative view of queries, pages, and indexing for your own site.",
    "Ahrefs still leads for many teams on link intelligence and content gap discovery; alternatives win on price, UX, marketing breadth, or local ops—not always on raw backlink rows.",
    "We summarize trade-offs from public pricing and typical SMB usage patterns; your cart, tax, and add-ons may differ—confirm on each vendor’s site before annual billing.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Budget and credits",
      body: "Ahrefs plans can feel premium when you only need rank tracking, occasional site audits, and a handful of link checks each month—buyers look for tools priced closer to that actual usage pattern.",
    },
    {
      heading: "Local SEO workload",
      body: "Ahrefs informs content and links; GBP hygiene, reviews, and citations often need BrightLocal, Whitespark, or a disciplined manual process that no national suite fully replaces.",
    },
    {
      heading: "Team skill mix",
      body: "Not every office wants deep link indexes and explorer views—sometimes simpler reporting, training, and shared vocabulary win adoption across owners, marketers, and agencies.",
    },
    {
      heading: "Vendor consolidation",
      body: "Some organizations prefer one vendor for SEO plus adjacent workflows (content, ads, social) even if link depth is slightly less of a daily habit than it was for the previous agency.",
    },
  ],
  topAlternatives: ahrefsAlts,
  comparisonTableRows: buildTableRows(ahrefsOriginal, ahrefsAlts),
  detailedAlternatives: ahrefsDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("semrush-vs-ahrefs"), rel("ahrefs-vs-moz-pro"), rel("se-ranking-vs-semrush")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "What is the best Ahrefs alternative for local contractors?",
      a: "Often Semrush or SE Ranking for keyword and audit depth plus BrightLocal or Whitespark for Map Pack and citations—Search Console stays free either way. Choose based on who will log in weekly and what your GSC data says is already driving impressions.",
    },
    {
      q: "Is Moz Pro easier than Ahrefs?",
      a: "Many SMBs find Moz’s education and UI more approachable for shared teams; Ahrefs still leads for raw link intelligence and competitive content research when that is the bottleneck.",
    },
    {
      q: "Can I rely on this list if my market is very competitive?",
      a: "Competitive legal, medical, or large-metro markets may justify staying on Ahrefs or Semrush for depth—our list explains common pivots, not a guarantee that a cheaper tool matches enterprise-grade research needs. Consult a qualified SEO when the revenue at stake warrants it.",
    },
    {
      q: "How current is this Ahrefs alternatives guide?",
      a: "Product limits and pricing change without notice. Use BeltStack for orientation, then verify features, quotas, and contracts on each vendor’s official site and in your own trial period.",
    },
  ],
};

const mozAlts: AlternativesTopPick[] = [
  {
    slug: "ahrefs",
    name: "Ahrefs",
    logoSrc: "/Logos/ahrefs.jpeg",
    rating: "4.7",
    bestFor: "Link-first research",
    description:
      "When competitor backlinks and content gaps drive strategy—expect a steeper learning curve; balance link chasing with what your site can sustain and what GSC shows.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
    startingPrice: "From ~$129/mo",
    standoutFeature: "Link index depth",
  },
  {
    slug: "semrush",
    name: "Semrush",
    logoSrc: "/Logos/semrush.jpeg",
    rating: "4.6",
    bestFor: "Full marketing + SEO stack",
    description:
      "When you outgrow mid-market limits and want broader workflows—price total seats and projects; Semrush’s breadth only helps if someone owns each module you pay for.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ahrefs"),
    startingPrice: "From ~$139/mo",
    standoutFeature: "Dataset breadth",
  },
  {
    slug: "se-ranking",
    name: "SE Ranking",
    logoSrc: "/Logos/seranking.jpeg",
    rating: "4.4",
    bestFor: "Value all-in-one",
    description:
      "Competitive audits and tracking without flagship spend—ideal when Moz’s limits bite but you do not need every flagship dataset; reconcile ranks with GSC weekly.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
    compareHref: getSeoToolsCompareUrl("se-ranking-vs-semrush"),
    startingPrice: "From ~$65/mo",
    standoutFeature: "SMB pricing",
  },
  {
    slug: "ubersuggest",
    name: "Ubersuggest",
    logoSrc: "/Logos/ubersuggest.webp",
    rating: "4.0",
    bestFor: "Budget experimentation",
    description:
      "Lower-cost keyword and audit entry before larger suites—treat metrics as directional; confirm priority terms in Search Console and live local SERPs.",
    reviewHref: getSeoToolsReviewUrl("ubersuggest"),
    compareHref: getSeoToolsCompareUrl("semrush-vs-ubersuggest"),
    startingPrice: "From ~$29/mo",
    standoutFeature: "Affordable start",
  },
  {
    slug: "brightlocal",
    name: "BrightLocal",
    logoSrc: "/Logos/brightlocal.jpeg",
    rating: "4.5",
    bestFor: "Local SEO platform",
    description:
      "When Moz handles fundamentals but Map Pack needs dedicated tooling—still requires review responses and accurate categories, not just dashboards.",
    reviewHref: getSeoToolsReviewUrl("brightlocal"),
    startingPrice: "From ~$39/mo",
    standoutFeature: "GBP + citations",
  },
];

const mozOriginal: AlternativesTableRow = {
  slug: "moz-pro",
  name: "Moz Pro",
  logoSrc: "/Logos/mozpro.jpeg",
  bestFor: "SMB SEO fundamentals",
  startingPrice: "From ~$99/mo",
  standoutFeature: "Rank tracking + on-page",
  reviewHref: getSeoToolsReviewUrl("moz-pro"),
};

const mozDetailed: AlternativesDetailBlock[] = [
  {
    productName: "Ahrefs",
    heading: "Best for advanced links",
    body: "Ahrefs is the natural step up when Moz’s link data and exploration workflows no longer answer competitive questions you face weekly—especially in niches where referrals and publishers move rankings. It does not absolve you of local fundamentals: service pages, GBP, and reviews still need owners. Read our Ahrefs vs Moz Pro comparison for side-by-side nuance before you switch billing.",
    reviewHref: getSeoToolsReviewUrl("ahrefs"),
    compareHref: getSeoToolsCompareUrl("ahrefs-vs-moz-pro"),
  },
  {
    productName: "Semrush",
    heading: "Best enterprise-style depth",
    body: "Semrush fits when you need broader datasets, more aggressive keyword and SERP intelligence, and optional marketing-adjacent modules beyond Moz’s SMB-friendly scope. Expect a busier UI and higher renewal math—document which workflows (audit, tracking, content, local) each seat will touch. Local service businesses should still pair any flagship suite with operational GBP discipline.",
    reviewHref: getSeoToolsReviewUrl("semrush"),
  },
  {
    productName: "SE Ranking",
    heading: "Best budget all-in-one",
    body: "SE Ranking appeals when Moz’s limits or price push you toward more features per dollar without jumping to the largest flagship contracts. Audit the plan tier for keywords tracked, audit frequency, and user seats; many contractors land on a middle tier once they model every city or service line. Keep exporting GSC performance so leadership trusts the same numbers the SEO tool shows.",
    reviewHref: getSeoToolsReviewUrl("se-ranking"),
  },
];

const mozPage: AlternativesTemplateProps = {
  title: "Best Moz Pro Alternatives (2026)",
  subtitle:
    "If Moz Pro limits, link depth, or local workflows prompt a change, these alternatives span flagship research stacks (Ahrefs, Semrush), value all-in-ones (SE Ranking), affordable starters (Ubersuggest), and dedicated local platforms (BrightLocal)—with Search Console as the non-negotiable baseline on every site you control.",
  productName: "Moz Pro",
  productSlug: "moz-pro",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getSeoToolsReviewUrl("moz-pro"),
  showPayrollTypesColumn: false,
  quickAnswerParagraphs: [
    "Ahrefs and Semrush are the common upgrades for research depth; SE Ranking and Ubersuggest fit tighter budgets; BrightLocal complements any suite when Maps and citations dominate the growth plan.",
    "Pair paid tools with Google Search Console on every verified domain so indexing issues and real query demand are visible before you chase third-party keyword scores.",
    "Moz Pro still earns its place when education, approachable UX, and credible fundamentals matter more than living inside the deepest link graph—do not upgrade blindly if your bottleneck is execution, not data.",
    "BeltStack’s picks reflect typical contractor and SMB workflows; high-stakes migrations, penalties, or enterprise sites may need a specialist audit regardless of which tool you subscribe to.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Link index expectations",
      body: "Power users sometimes need deeper crawl cadence, historical link context, and explorer workflows that mid-market suites do not optimize for—especially in competitive national or B2B niches.",
    },
    {
      heading: "Local execution",
      body: "Moz helps fundamentals and rank tracking; Map Pack operators still invest in GBP categories, reviews, photos, and citations—often with BrightLocal, Whitespark, or agency process alongside any research tool.",
    },
    {
      heading: "Price vs usage",
      body: "If you only track a handful of keywords and run a monthly audit, lighter tiers or value all-in-ones may align invoices with reality; unused seats are a common reason teams re-shop.",
    },
    {
      heading: "Reporting expectations",
      body: "Stakeholders sometimes ask for competitor narratives and share-of-voice style reporting that pushes buyers toward broader suites—even when Moz covered the basics competently.",
    },
  ],
  topAlternatives: mozAlts,
  comparisonTableRows: buildTableRows(mozOriginal, mozAlts),
  detailedAlternatives: mozDetailed,
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [rel("ahrefs-vs-moz-pro"), rel("semrush-vs-ahrefs"), rel("se-ranking-vs-semrush")],
  relatedResources: [...HUB_RELATED_RESOURCES, ...softwareReviewLinks(ALL_REVIEW_TUPLES)],
  faqItems: [
    {
      q: "Is Ahrefs better than Moz Pro?",
      a: "For backlink intelligence and competitive content research, Ahrefs usually leads; Moz can win on approachable education, gentler onboarding, and SMB workflows—see our Ahrefs vs Moz Pro comparison for your use case.",
    },
    {
      q: "What is the best Moz alternative for local contractors?",
      a: "Keep Search Console, add BrightLocal or Whitespark for listings and grids when Maps is core, and choose Semrush, Ahrefs, or SE Ranking for keyword and audit depth based on budget and who will use the UI weekly.",
    },
    {
      q: "Should I switch from Moz if my rankings dropped?",
      a: "A ranking drop is rarely solved by swapping SEO tools. Check Search Console coverage, recent site or template changes, GBP edits, and real-world competition before you change software; consider a qualified audit when revenue is at risk.",
    },
    {
      q: "Are these Moz alternatives ranked by sponsorship?",
      a: "No. BeltStack lists reflect editorial judgment for service businesses and agencies. We may use affiliate links on the broader site; they do not determine order or wording here. Confirm pricing and features with each vendor.",
    },
  ],
};

const pages: Record<string, AlternativesTemplateProps> = {
  semrush: semrushPage,
  ahrefs: ahrefsPage,
  "moz-pro": mozPage,
};

export function getSeoToolsAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getSeoToolsAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
