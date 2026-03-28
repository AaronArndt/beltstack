/**
 * Payment processing alternatives pages — editorial data for AlternativesTemplate (E-E-A-T: channel fit,
 * effective-rate verification, independence, statement literacy). Sitemap entries come from getPaymentProcessingAlternativesSlugs().
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
import { getPaymentProcessingComparisonBySlug } from "@/lib/data/paymentProcessingComparisons";
import { paymentProcessingLogoForSlug } from "@/lib/data/paymentProcessingLogos";
import {
  getPaymentProcessingAlternativeUrl,
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";

const CATEGORY = { href: "/payment-processing", label: "Payment Processing" };
const ROUNDUP_HREF = "/payment-processing/best-payment-processing-software";
const COMPARE_HUB = "/payment-processing/compare";
const GUIDES_HUB = "/payment-processing/guides";

const HUB_RELATED: AlternativesLink[] = [
  { label: "Payment processing hub", href: CATEGORY.href },
  { label: "Best payment processing software", href: ROUNDUP_HREF },
  { label: "Compare payment processing", href: COMPARE_HUB },
  { label: "Payment processing guides", href: GUIDES_HUB },
  { label: "Best for contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "Invoicing software hub", href: "/invoicing" },
  { label: "POS software hub", href: "/pos" },
  { label: "CRM software hub", href: "/crm" },
  { label: "Website builders hub", href: "/website-builders" },
  { label: "Email marketing hub", href: "/email-marketing" },
];

const ALL_REVIEW_TUPLES: [string, string][] = [
  ["stripe", "Stripe"],
  ["square", "Square"],
  ["paypal-business", "PayPal Business"],
  ["shopify-payments", "Shopify Payments"],
  ["helcim", "Helcim"],
  ["stax", "Stax"],
  ["authorize-net", "Authorize.net"],
  ["clover", "Clover"],
];

function softwareReviewLinks(entries: [string, string][] = ALL_REVIEW_TUPLES): AlternativesLink[] {
  return entries.map(([slug, name]) => ({
    label: `${name} review`,
    href: getPaymentProcessingReviewUrl(slug),
  }));
}

const ALTERNATIVE_PAGE_LINKS: AlternativesLink[] = ALL_REVIEW_TUPLES.map(([slug, name]) => ({
  label: `Best ${name} alternatives`,
  href: getPaymentProcessingAlternativeUrl(slug),
}));

function relatedResourcesForProduct(excludeSlug: string): AlternativesLink[] {
  return [
    ...HUB_RELATED,
    ...ALTERNATIVE_PAGE_LINKS.filter((l) => l.href !== getPaymentProcessingAlternativeUrl(excludeSlug)),
    ...softwareReviewLinks(),
  ];
}

function rel(slug: string) {
  return toAlternativesRelatedComparison(getPaymentProcessingCompareUrl(slug), getPaymentProcessingComparisonBySlug(slug));
}

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

const HOW_TO_CHOOSE: AlternativesEditorialBlock[] = [
  {
    heading: "Channel truth first",
    body: "List where money actually enters: truck swipes, emailed invoices, website checkout, or recurring memberships. Pick the alternative that wins that channel—not the one with the prettiest homepage. Service businesses often over-weight the tool they wish they used instead of the path that clears 80% of dollars today.",
  },
  {
    heading: "Compute effective rate",
    body: "Export 90 days of transactions and divide total fees (including chargebacks and instant-transfer costs) by gross volume. Marketing percentages hide keyed penalties, rewards cards, AMEX, international cards, and dispute losses—your statement is the honest scorecard.",
  },
  {
    heading: "Reconciliation ownership",
    body: "Two processors means two settlement rhythms and two exception queues—only add complexity if analytics show higher completion or lower net cost. Finance time is a real line item; ‘best’ software that doubles bookkeeping work is not best for your P&L.",
  },
  {
    heading: "Pair with invoicing and CRM",
    body: "Deposits should tie to job IDs, line items, and customer records. Send invoices and take payments through stacks that share those fields—see our invoicing and CRM hubs when workflows span tools so dispute evidence stays attached.",
  },
  {
    heading: "POS vs processor clarity",
    body: "Heavy retail counters may need POS depth from our POS hub; lightweight field ops often stop at readers plus accounting sync. Do not buy countertop complexity because a competitor has it—buy what matches how crews actually collect final payment.",
  },
  {
    heading: "Email follow-up",
    body: "Payment reminders and deposit requests land better with disciplined, compliant email—our email marketing hub covers cadences that avoid spam traps and preserve trust.",
  },
  {
    heading: "How we rank alternatives",
    body: "These pages are editorial picks for trades and local service businesses: we weigh channel fit, typical SMB surfaces, and transparent pricing stories. Vendors cannot pay for placement or ranking. Affiliate links may appear elsewhere on the site; they do not change how we shortlist alternatives here.",
  },
  {
    heading: "Verify with your own data",
    body: "We do not see your merchant category, reserve history, or card mix. Before you switch, pull written quotes, confirm contract and termination terms, and—when possible—run a parallel month or cohort test so savings are proven, not assumed.",
  },
];

const stripeAlts: AlternativesTopPick[] = [
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "Mobile + countertop card-present",
    description:
      "Square shines when techs swipe or tap after walkthroughs and you want retail-style hardware without gateway projects. Invoices and payment links cover many deposits; flat-rate simplicity helps budgeting, though very large tickets deserve a statement check against interchange-plus.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "Field hardware simplicity",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: "4.4",
    bestFor: "Wallet checkout",
    description:
      "PayPal still helps when emailed estimates stall on card-only checkout—buyers recognize the wallet and sometimes complete deposits faster. Fee grids are product-specific, so pair wallet wins with statement exports; it often coexists with Stripe or Square rather than replacing them entirely.",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Buyer recognition",
  },
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    rating: "4.5",
    bestFor: "Interchange-plus clarity",
    description:
      "Helcim fits finance-minded owners who want interchange separated from processor markup on the statement—useful when HVAC, roofing, or commercial phases drive high average tickets. Savings depend on card mix and whether crews avoid keyed downgrades; read statements monthly, not only the sales quote.",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
    startingPrice: "Interchange-plus",
    standoutFeature: "Statement transparency",
  },
  {
    slug: "shopify-payments",
    name: "Shopify Payments",
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    rating: "4.5",
    bestFor: "Shopify carts",
    description:
      "Choose Shopify Payments when orders, refunds, and payouts should live in the same admin as your cart—common for parts SKUs, maintenance products, or deposits sold as line items. It is a poor fit if your marketing site is not Shopify; confirm acceptable business categories with Shopify before you depend on it.",
    reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
    compareHref: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe"),
    startingPrice: "Per charge + Shopify plan",
    standoutFeature: "Shopify-native payouts",
  },
  {
    slug: "stax",
    name: "Stax",
    logoSrc: paymentProcessingLogoForSlug("stax"),
    rating: "4.3",
    bestFor: "Membership economics",
    description:
      "Stax replaces stacked per-transaction margin with a platform fee plus pass-through interchange—worth modeling when card volume is steady month to month. Seasonal trades should stress-test slow months; membership math that works in July can feel expensive in January if truck rolls drop.",
    reviewHref: getPaymentProcessingReviewUrl("stax"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Monthly + interchange",
    standoutFeature: "Predictable platform fee",
  },
];

const squareAlts: AlternativesTopPick[] = [
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Online + Billing",
    description:
      "Stripe is the usual upgrade when deposits, memberships, and change orders flow through your website or custom software—not only through readers. Payment Links and Billing reduce manual invoice chasing; expect to own webhooks, test environments, and dispute exports like any serious online stack.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "APIs + Billing",
  },
  ...stripeAlts.filter((a) => a.slug !== "square"),
];

const paypalAlts: AlternativesTopPick[] = [
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Programmable checkout",
    description:
      "Move to Stripe when you need hosted checkout you can tune, server-side confirmation, and webhooks—not only a wallet button. Teams that outgrow PayPal’s product silos often standardize on Stripe for online while optionally keeping PayPal as a second rail if data proves conversion lift.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Developer-led UX",
  },
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "Field + invoice",
    description:
      "Square picks up where PayPal leaves off for card-present: mobile readers, counter workflows, and Square Invoices under one operational brand. Best when trucks collect final payment on site; reconcile how PayPal and Square settlements hit the bank if you run both.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("square-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Crew card-present",
  },
  ...stripeAlts.filter((a) => !["stripe", "square", "paypal-business"].includes(a.slug)),
];

function detailFromPick(p: AlternativesTopPick): AlternativesDetailBlock {
  return {
    productName: p.name,
    heading: p.bestFor,
    body: p.description,
    reviewHref: p.reviewHref,
    ...(p.compareHref != null ? { compareHref: p.compareHref } : {}),
  };
}

const stripeOriginal: AlternativesTableRow = {
  slug: "stripe",
  name: "Stripe",
  logoSrc: paymentProcessingLogoForSlug("stripe"),
  bestFor: "Online payments and Billing",
  startingPrice: "Per successful charge",
  standoutFeature: "APIs + Payment Links",
  reviewHref: getPaymentProcessingReviewUrl("stripe"),
};

const stripePage: AlternativesTemplateProps = {
  title: "Best Stripe Alternatives (2026)",
  subtitle:
    "Independent picks for service businesses and trades: when Square-style field hardware, PayPal wallet checkout, Helcim or Stax-style statement economics, or Shopify-native checkout fits better than Stripe’s developer-first spine—and how to verify that with your own statements, not ours.",
  productName: "Stripe",
  productSlug: "stripe",
  categoryHref: CATEGORY.href,
  categoryLabel: CATEGORY.label,
  originalReviewHref: getPaymentProcessingReviewUrl("stripe"),
  quickAnswerParagraphs: [
    "Square replaces Stripe when crews swipe most revenue and you want retail-friendly hardware without gateway projects. PayPal helps when remote homeowners only convert behind a wallet button. Helcim and Stax matter when transparent interchange-plus or membership pricing beats your effective flat rate. Shopify Payments wins when the cart already lives in Shopify.",
    "Stripe is rarely ‘wrong’—it is mis-matched when nobody will maintain web flows and 90% of cash is card-present in vans.",
    "We do not have access to your Stripe Radar settings, payout schedule, or reserve history—those change the real recommendation. Use this page to shortlist by channel, then confirm fees, holds, and implementation scope with each vendor and your bookkeeper before you migrate tokens or customer cards.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Field operations first",
      body: "Square’s reader ecosystem and POS surfaces get trucks live faster than Terminal projects when you lack developer time or a partner on retainer.",
    },
    {
      heading: "Wallet conversion",
      body: "PayPal still lifts completion for some demographics on emailed deposits—A/B test completion and effective rate on identical job cohorts before you dismiss it.",
    },
    {
      heading: "Pricing transparency",
      body: "Large average tickets make Helcim-style interchange-plus or Stax membership math worth quarterly modeling against your actual card mix, refunds, and chargebacks.",
    },
    {
      heading: "Shopify checkout unity",
      body: "If parts and memberships sell through Shopify, fragmenting gateways adds reconciliation drag—compare Shopify Payments vs Stripe for admin unity, not only headline rates.",
    },
    {
      heading: "Support and ownership fatigue",
      body: "Some teams leave Stripe when webhook failures, tax edge cases, or dispute exports consume more hours than the business can support—alternatives with more packaged surfaces can win on operational load even if APIs are less flexible.",
    },
  ],
  topAlternatives: stripeAlts,
  comparisonTableRows: buildTableRows(stripeOriginal, stripeAlts),
  detailedAlternatives: stripeAlts.map(detailFromPick),
  howToChoose: HOW_TO_CHOOSE,
  relatedComparisons: [
    rel("stripe-vs-square"),
    rel("stripe-vs-paypal"),
    rel("shopify-payments-vs-stripe"),
    rel("helcim-vs-stax"),
  ],
  relatedResources: relatedResourcesForProduct("stripe"),
  faqItems: [
    {
      q: "What is the best Stripe alternative for contractors?",
      a: "Square when crews collect cards on-site; PayPal when wallet checkout lifts remote deposits; Helcim or Stax when statements show flat-rate drag on large tickets.",
    },
    {
      q: "Is Square cheaper than Stripe?",
      a: "Depends on card-present vs online mix and average ticket. Export statements and compute effective rate for each.",
    },
    {
      q: "Should I leave Stripe if I only use Payment Links?",
      a: "Only if another tool measurably improves completion or lowers net cost—links are already a lightweight Stripe surface.",
    },
    {
      q: "Does switching processors fix chargebacks?",
      a: "No—documentation, scope clarity, and refund policies determine outcomes; processors only move money.",
    },
    {
      q: "How do invoicing tools fit in?",
      a: "Many stacks pair Stripe or Square with invoicing software—see our invoicing hub to align line items and payments.",
    },
    {
      q: "What about POS for showrooms?",
      a: "Evaluate dedicated POS systems from our POS hub when inventory and registers matter beyond simple readers.",
    },
    {
      q: "How does BeltStack pick Stripe alternatives?",
      a: "We rank by channel fit and typical contractor workflows using public product information—not pay-to-play placement. Your effective rate and operational pain points should still drive the final call; we are a map, not your CFO.",
    },
    {
      q: "Can I trust online ‘best alternatives’ lists?",
      a: "Treat them as structured questions: where does money enter, what does reconciliation cost, and what do statements say? Cross-check any list against your exports and written quotes; no editorial site replaces underwriting or your merchant agreement.",
    },
  ],
};

const squareOriginal: AlternativesTableRow = {
  slug: "square",
  name: "Square",
  logoSrc: paymentProcessingLogoForSlug("square"),
  bestFor: "In-person + simple online",
  startingPrice: "Per transaction",
  standoutFeature: "Hardware ecosystem",
  reviewHref: getPaymentProcessingReviewUrl("square"),
};

const squarePage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best Square Alternatives (2026)",
  subtitle:
    "Editorial alternatives when Stripe-style web checkout, interchange-plus statements, Shopify-native carts, or wallet-heavy remote payers outperform Square’s all-in-one field bundle—always validated against your keyed vs chip mix and real effective rate.",
  productName: "Square",
  productSlug: "square",
  originalReviewHref: getPaymentProcessingReviewUrl("square"),
  quickAnswerParagraphs: [
    "Stripe is the top alternative when online deposits, hosted checkout, and recurring plans need APIs and Billing. PayPal helps wallet-heavy remote payers. Helcim and Stax challenge flat-rate economics on large tickets. Shopify Payments fits Shopify merchants.",
    "Square is strongest when simplicity and hardware speed matter—switch for capability gaps, not buzzwords.",
    "If you rely heavily on keyed transactions or see rate creep on large card-not-present deposits, pull three months of Square statements before assuming another processor will fix economics—sometimes process changes (chip, AVS, invoicing discipline) move the needle as much as switching vendors.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Developer-led ecommerce",
      body: "Stripe wins custom storefronts, headless setups, and subscription engines that outgrow Square’s defaults—especially when you need webhooks and fine-grained checkout control.",
    },
    {
      heading: "Interchange-plus savings",
      body: "High-ticket HVAC or electrical jobs may net more under transparent interchange-plus when downgrades are controlled—model with historical data, not a single busy month.",
    },
    {
      heading: "Wallet-first buyers",
      body: "PayPal can coexist with Square for specific remote segments if finance accepts dual reconciliation and you document which jobs pay on which rail.",
    },
    {
      heading: "Platform or policy constraints",
      body: "Some teams outgrow Square when they need marketplace-style payouts, multi-entity reporting, or deep ERP token portability—those are Stripe or gateway-era problems, not reader problems.",
    },
  ],
  topAlternatives: squareAlts,
  comparisonTableRows: buildTableRows(squareOriginal, squareAlts),
  detailedAlternatives: squareAlts.map(detailFromPick),
  relatedComparisons: [rel("stripe-vs-square"), rel("square-vs-paypal"), rel("stripe-vs-paypal"), rel("shopify-payments-vs-stripe")],
  relatedResources: relatedResourcesForProduct("square"),
  faqItems: [
    {
      q: "What is the best Square alternative for small business?",
      a: "Stripe for web-heavy businesses; Helcim or Stax when statements justify interchange-plus; Clover for counter-heavy retail hybrids.",
    },
    {
      q: "Square vs Stripe for plumbers?",
      a: "Square if trucks swipe final payment daily; Stripe if most money arrives through website deposits and payment links.",
    },
    {
      q: "Why switch off Square?",
      a: "Common triggers: ecommerce depth, subscription billing, transparent pricing, or Shopify-native checkout requirements.",
    },
    {
      q: "Will I save money switching?",
      a: "Only if effective rate improves after hardware, software, and transfer fees—verify with parallel months when possible.",
    },
    {
      q: "Square vs Helcim for HVAC?",
      a: "Square for field speed; Helcim when large replacement tickets make interchange-plus worth modeling on statements.",
    },
    {
      q: "How do invoicing tools fit?",
      a: "Pair Square with invoicing software for line items while Square moves money—see our invoicing hub.",
    },
    {
      q: "Does BeltStack get paid to recommend Square competitors?",
      a: "No—ranking here is editorial. We may earn affiliate commissions on some site links elsewhere, but that does not determine which alternatives appear on this page. Compare written quotes and your statements like you would for any capital decision.",
    },
    {
      q: "What should I document before leaving Square?",
      a: "Export customer and payment history, note which integrations depend on Square IDs, and read termination or hardware return terms. Card-on-file migration often needs customer consent and technical planning—budget time, not only a weekend cutover.",
    },
  ],
};

const paypalOriginal: AlternativesTableRow = {
  slug: "paypal-business",
  name: "PayPal Business",
  logoSrc: paymentProcessingLogoForSlug("paypal-business"),
  bestFor: "Wallet checkout + pay links",
  startingPrice: "Per transaction",
  standoutFeature: "Trusted wallet",
  reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
};

const paypalPage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best PayPal Business Alternatives (2026)",
  subtitle:
    "Practical alternatives when PayPal’s fee grids, field-hardware limits, or wallet-first checkout no longer match how you collect deposits and final balances—grounded in service-business workflows and the need to verify every path against your own exports.",
  productName: "PayPal Business",
  productSlug: "paypal-business",
  originalReviewHref: getPaymentProcessingReviewUrl("paypal-business"),
  quickAnswerParagraphs: [
    "Stripe replaces PayPal when you need hosted checkout you control, webhooks, and Billing-class subscriptions. Square replaces PayPal when crews need mobile readers and invoices under one operational brand. Helcim and Stax matter for statement transparency and volume-based membership pricing.",
    "Keep PayPal if data shows it lifts completion—otherwise standardize on fewer rails to reduce finance workload.",
    "PayPal buyer protection and dispute standards differ from plain card acceptance—document scopes, signatures, and message trails the same way you would for any card-not-present channel. Alternatives do not remove dispute risk; they change tooling and economics.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Fee complexity",
      body: "PayPal’s grids span invoicing, online, and in-person products; teams want a single effective rate story or clearer interchange-plus statements they can reconcile in accounting without detective work.",
    },
    {
      heading: "Field card-present",
      body: "PayPal is not a full Square replacement for high-volume swipes—hardware depth, staff training paths, and counter workflows differ. Match the tool to where dollars actually clear.",
    },
    {
      heading: "Custom web flows",
      body: "Stripe’s APIs fit portals, dynamic invoices, and SaaS-style service plans better than wallet-first defaults when the website is a revenue engine, not an afterthought.",
    },
    {
      heading: "Reserves and cash-flow predictability",
      body: "Some merchants hit rolling reserves after volume spikes or category changes—alternatives may still impose risk controls, but teams sometimes switch to align payout timing with job costing. Read agreements; editorial summaries cannot predict underwriting.",
    },
  ],
  topAlternatives: paypalAlts,
  comparisonTableRows: buildTableRows(paypalOriginal, paypalAlts),
  detailedAlternatives: paypalAlts.map(detailFromPick),
  relatedComparisons: [rel("stripe-vs-paypal"), rel("square-vs-paypal"), rel("stripe-vs-square"), rel("helcim-vs-stax")],
  relatedResources: relatedResourcesForProduct("paypal-business"),
  faqItems: [
    {
      q: "What is the best PayPal alternative?",
      a: "Stripe for web and Billing; Square for field operations; Helcim or Stax for interchange-plus or membership pricing—pick by channel and statements.",
    },
    {
      q: "Is PayPal more expensive than Stripe?",
      a: "Sometimes—compare net deposits on identical job cohorts including international cards and disputes.",
    },
    {
      q: "Can I keep PayPal for some customers only?",
      a: "Yes, but document reconciliation rules so payouts do not drift from accounting categories.",
    },
    {
      q: "How do CRM and email fit?",
      a: "Track payment status in your CRM and send reminders through email marketing tools—see our CRM and email marketing hubs.",
    },
    {
      q: "PayPal vs Square for contractors?",
      a: "Square for swipes and invoices; PayPal for wallet-heavy remote payers—see our head-to-head comparison.",
    },
    {
      q: "What is the cheapest payment processor?",
      a: "The one with lowest net deposits for your mix—compute effective rate; PayPal’s fee grids require exports to compare honestly.",
    },
    {
      q: "Why does BeltStack say to export PayPal CSVs?",
      a: "Headline rates miss product path, currency, and chargebacks. Experience-backed advice is to treat your merchant export as ground truth—we synthesize patterns for SMBs, but we cannot see your account.",
    },
    {
      q: "Is switching off PayPal bad for customer trust?",
      a: "Only if you remove a rail your buyers rely on without data. Many contractors keep PayPal for wallet-heavy segments and use Stripe or Square for everything else—communicate clearly on invoices so customers know which secure link to use.",
    },
  ],
};

const helcimAlts: AlternativesTopPick[] = [
  {
    slug: "stax",
    name: "Stax",
    logoSrc: paymentProcessingLogoForSlug("stax"),
    rating: "4.3",
    bestFor: "Membership + interchange pass-through",
    description:
      "Stax is the natural side-by-side when you already read interchange lines and want to compare platform-fee economics against Helcim’s stack—model slow-season months before you assume membership wins. See our Helcim vs Stax comparison and export both quotes against your last 90 days of card mix.",
    reviewHref: getPaymentProcessingReviewUrl("stax"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Monthly + interchange",
    standoutFeature: "Predictable platform fee",
  },
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Online checkout, Billing, APIs",
    description:
      "Choose Stripe when deposits and renewals need Payment Links, Billing, or custom checkout—not only a merchant portal. Helcim suits statement transparency; Stripe suits product teams who will own webhooks and test cards. Reconcile effective rate after you account for Terminal or Connect if you add card-present later.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "Developer-led payments spine",
  },
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "Field swipes + simple invoices",
    description:
      "Square replaces Helcim when trucks collect most dollars on readers and you want hardware-in-a-box simplicity over interchange line-item education. Pull three months of statements—if card-present dominates and finance hates parsing statements, Square’s flat story can win even if raw interchange-plus looked cheaper on paper.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "Crew-ready hardware",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: "4.4",
    bestFor: "Wallet checkout on remote payers",
    description:
      "Keep PayPal in the mix when emailed estimates convert faster behind a trusted wallet—often alongside Helcim for card-present or Stripe for web. Document dual-rail reconciliation; BeltStack does not see your completion rates, so A/B cohorts beat assumptions.",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    compareHref: getPaymentProcessingCompareUrl("square-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Buyer-recognized wallet",
  },
  {
    slug: "shopify-payments",
    name: "Shopify Payments",
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    rating: "4.5",
    bestFor: "Shopify cart + payouts in one admin",
    description:
      "If parts, memberships, or deposits sell through Shopify, native checkout can beat juggling Helcim for online and another stack for retail. Not a fit when your marketing site is not Shopify—confirm acceptable business categories in Shopify’s terms before you depend on payouts.",
    reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
    compareHref: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe"),
    startingPrice: "Per charge + Shopify plan",
    standoutFeature: "Shopify-native ledger",
  },
  {
    slug: "authorize-net",
    name: "Authorize.net",
    logoSrc: paymentProcessingLogoForSlug("authorize-net"),
    rating: "4.2",
    bestFor: "Gateway + ISO relationships",
    description:
      "Authorize.net still appears when legacy ERP, franchise, or ISO packages standardize on CyberSource-era gateways. You may keep the gateway and re-shop the merchant account behind it—treat quoted markup separately from gateway fees and confirm PCI scope with whoever owns the integration.",
    reviewHref: getPaymentProcessingReviewUrl("authorize-net"),
    startingPrice: "Gateway + merchant account",
    standoutFeature: "Established gateway plumbing",
  },
];

const staxAlts: AlternativesTopPick[] = [
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    rating: "4.5",
    bestFor: "Interchange-plus without membership framing",
    description:
      "Helcim competes directly on transparent interchange-plus and a modern portal—compare against Stax when you want per-transaction economics without a platform membership line item. Seasonal trades should still stress-test January cash flow against Stax’s monthly floor.",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Interchange-plus",
    standoutFeature: "Statement-transparent pricing",
  },
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Subscriptions + custom web checkout",
    description:
      "Stripe fits when memberships need Billing, trials, and proration beyond a simple virtual terminal. Stax’s membership model solves a different problem than Stripe’s metered APIs—pick based on who maintains your payment code and dispute exports monthly.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Billing + webhooks",
  },
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "Counter + mobile simplicity",
    description:
      "Square wins when crews and showrooms need tap-to-pay speed without debating interchange tiers. If Stax felt right on paper but staff never adopted the portal, operational simplicity may beat marginal basis-point wins—verify with time studies, not only spreadsheets.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("square-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Hardware + POS path",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: "4.4",
    bestFor: "Wallet-first remote collections",
    description:
      "PayPal helps when homeowners stall on card-only links—pair with Stax or Helcim for the rest of the stack if finance accepts two settlement rhythms. Export completion data; BeltStack cannot see your account-level lift.",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Trusted wallet path",
  },
  {
    slug: "shopify-payments",
    name: "Shopify Payments",
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    rating: "4.5",
    bestFor: "Shopify merchants",
    description:
      "Shopify Payments keeps orders, refunds, and payouts unified when ecommerce is already on Shopify—Stax may still run card-present elsewhere, but avoid three rails without a reconciliation owner.",
    reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
    compareHref: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe"),
    startingPrice: "Per charge + Shopify plan",
    standoutFeature: "Native Shopify money flow",
  },
  {
    slug: "clover",
    name: "Clover",
    logoSrc: paymentProcessingLogoForSlug("clover"),
    rating: "4.3",
    bestFor: "Retail-forward POS bundles",
    description:
      "Clover matters when registers, inventory, and staff permissions dominate and field readers are secondary. Compare total hardware/software TCO against Stax’s card-present path—neither removes the need for chargeback documentation discipline.",
    reviewHref: getPaymentProcessingReviewUrl("clover"),
    startingPrice: "Hardware + processing",
    standoutFeature: "Counter POS depth",
  },
];

const shopifyPaymentsAlts: AlternativesTopPick[] = [
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Non-Shopify web stacks",
    description:
      "Stripe is the primary alternative when your storefront is custom, headless, or WordPress—Shopify Payments only applies inside Shopify’s checkout. Read Shopify Payments vs Stripe for policy, subscription, and payout nuance; confirm you are not paying twice for redundant gateways.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe"),
    startingPrice: "Per transaction",
    standoutFeature: "Portable online spine",
  },
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "Omnichannel without Shopify",
    description:
      "Square fits when you need readers and invoices for trucks while running a non-Shopify site—common for contractors whose ecommerce is light. Model whether Shopify subscription + apps still beats splitting channels once you add Square hardware costs.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "Field + counter bundle",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: "4.4",
    bestFor: "Wallet add-on at checkout",
    description:
      "Many merchants keep PayPal as a second rail even when Shopify Payments is primary—only if analytics prove conversion lift net of extra reconciliation. Fee grids differ by product path; trust exports over slogans.",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Wallet recognition",
  },
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    rating: "4.5",
    bestFor: "Interchange-plus transparency",
    description:
      "Helcim helps finance teams who want interchange lines on statements when Shopify’s blended rate feels opaque—often for high-ticket B2B-style cards on the side. You may run Shopify online and Helcim for card-present; document settlement mapping before you go live.",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Interchange-plus",
    standoutFeature: "Statement clarity",
  },
  {
    slug: "stax",
    name: "Stax",
    logoSrc: paymentProcessingLogoForSlug("stax"),
    rating: "4.3",
    bestFor: "Stable volume, membership math",
    description:
      "Stax can beat blended Shopify rates when monthly volume is predictable and pass-through interchange stays clean—less compelling for wildly seasonal trades unless you model winter months explicitly.",
    reviewHref: getPaymentProcessingReviewUrl("stax"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Monthly + interchange",
    standoutFeature: "Membership platform fee",
  },
  {
    slug: "authorize-net",
    name: "Authorize.net",
    logoSrc: paymentProcessingLogoForSlug("authorize-net"),
    rating: "4.2",
    bestFor: "Gateway + legacy integrations",
    description:
      "Authorize.net still surfaces when ERP or franchise stacks require a gateway contract outside Shopify’s rails—usually with an ISO behind the merchant ID. Treat it as infrastructure, not a branding choice; read underwriting and reserve terms carefully.",
    reviewHref: getPaymentProcessingReviewUrl("authorize-net"),
    startingPrice: "Gateway + merchant account",
    standoutFeature: "Integration longevity",
  },
];

const authorizeNetAlts: AlternativesTopPick[] = [
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Modern APIs + hosted checkout",
    description:
      "Stripe replaces Authorize.net-style gateway projects when you want Payment Elements, Billing, and webhooks without maintaining legacy AIM/XML integrations. Budget migration time for card-on-file and token portability—customer consent and processor cooperation matter more than marketing pages.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Current developer surface",
  },
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "Bundled hardware + software",
    description:
      "Square simplifies life when Authorize.net was only serving a virtual terminal but crews actually need mobile readers and invoices. You trade gateway flexibility for packaged UX—confirm accounting sync matches how job IDs attach to deposits.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "All-in-one field kit",
  },
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    rating: "4.5",
    bestFor: "Interchange-plus without legacy gateway tax",
    description:
      "Helcim appeals when you want transparent processing without nursing a separate gateway fee stack—especially if your developer hours were burned on Authorize.net edge cases. Validate card-present paths if trucks still swipe; not every modern portal matches Square’s field polish.",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Interchange-plus",
    standoutFeature: "Cleaner statement story",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: "4.4",
    bestFor: "Wallet + pay links",
    description:
      "PayPal can coexist after leaving Authorize.net when remote payers want a wallet—often as a second rail next to Stripe or Helcim. Document fee paths; PayPal’s grids are product-specific and need CSV truth.",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    compareHref: getPaymentProcessingCompareUrl("square-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Remote conversion help",
  },
  {
    slug: "shopify-payments",
    name: "Shopify Payments",
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    rating: "4.5",
    bestFor: "Shopify-native checkout",
    description:
      "If Authorize.net was only bridging an old Shopify integration, Shopify Payments may reduce moving parts—provided your business category and products comply with Shopify’s acceptable use policies.",
    reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
    compareHref: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe"),
    startingPrice: "Per charge + Shopify plan",
    standoutFeature: "Single admin for orders",
  },
  {
    slug: "stax",
    name: "Stax",
    logoSrc: paymentProcessingLogoForSlug("stax"),
    rating: "4.3",
    bestFor: "Membership-style economics",
    description:
      "Stax enters the list when stable volume makes platform-plus-interchange math attractive versus gateway + ISO markup surprises—run winter and summer months before you commit.",
    reviewHref: getPaymentProcessingReviewUrl("stax"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Monthly + interchange",
    standoutFeature: "Volume-friendly platform fee",
  },
];

const cloverAlts: AlternativesTopPick[] = [
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: "4.6",
    bestFor: "SMB POS + mobile readers",
    description:
      "Square is the closest peer when Clover’s Fiserv ecosystem feels heavy and you want faster iteration on readers, invoices, and basic retail. Compare app marketplaces and chargeback workflows side by side—BeltStack does not see your chargeback rate or inventory complexity.",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "Simpler SMB bundle",
  },
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: "4.7",
    bestFor: "Strong online + Terminal",
    description:
      "Stripe fits when Clover was only covering the counter but ecommerce, memberships, or custom portals drive growth—Terminal can unify card-present with the same spine as Payment Links. Expect engineering or agency ownership for anything beyond defaults.",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    compareHref: getPaymentProcessingCompareUrl("stripe-vs-square"),
    startingPrice: "Per transaction",
    standoutFeature: "Online-first platform",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: "4.4",
    bestFor: "Wallet + remote invoices",
    description:
      "PayPal helps when showrooms send pay-by-link invoices and some buyers only trust wallet checkout—often alongside Square or Stripe for in-person. Dual rails need explicit reconciliation owners.",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    compareHref: getPaymentProcessingCompareUrl("square-vs-paypal"),
    startingPrice: "Per transaction",
    standoutFeature: "Remote payer trust",
  },
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    rating: "4.5",
    bestFor: "Interchange-plus + modern portal",
    description:
      "Helcim suits finance-led operators who want interchange lines without Clover’s franchise-style packaging—especially when large tickets dominate. Validate hardware compatibility for your counters before you assume a clean swap.",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Interchange-plus",
    standoutFeature: "Transparent processing",
  },
  {
    slug: "stax",
    name: "Stax",
    logoSrc: paymentProcessingLogoForSlug("stax"),
    rating: "4.3",
    bestFor: "Membership pricing at volume",
    description:
      "Stax competes on predictable platform fees when Clover’s per-transaction add-ons stack—model seasonality if you are a trade with winter slowdowns.",
    reviewHref: getPaymentProcessingReviewUrl("stax"),
    compareHref: getPaymentProcessingCompareUrl("helcim-vs-stax"),
    startingPrice: "Monthly + interchange",
    standoutFeature: "Volume membership math",
  },
  {
    slug: "shopify-payments",
    name: "Shopify Payments",
    logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
    rating: "4.5",
    bestFor: "Retail + Shopify ecommerce",
    description:
      "Shopify Payments makes sense when Clover was bridging retail and a Shopify catalog—native checkout can reduce duplicate systems if policies allow your product mix.",
    reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
    compareHref: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe"),
    startingPrice: "Per charge + Shopify plan",
    standoutFeature: "Unified Shopify ledger",
  },
];

const helcimOriginal: AlternativesTableRow = {
  slug: "helcim",
  name: "Helcim",
  logoSrc: paymentProcessingLogoForSlug("helcim"),
  bestFor: "Interchange-plus + modern merchant UI",
  startingPrice: "Interchange-plus",
  standoutFeature: "Transparent statements",
  reviewHref: getPaymentProcessingReviewUrl("helcim"),
};

const helcimPage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best Helcim Alternatives (2026)",
  subtitle:
    "Editorial alternatives when membership-style platforms, field hardware bundles, Shopify-native checkout, or developer-led online flows beat Helcim’s interchange-plus portal for your mix—grounded in contractor channel reality and the need to verify economics on your own statements, not ours.",
  productName: "Helcim",
  productSlug: "helcim",
  originalReviewHref: getPaymentProcessingReviewUrl("helcim"),
  quickAnswerParagraphs: [
    "Stax is the closest apples-to-apples when you want pass-through interchange with a different platform-fee story—read Helcim vs Stax with your last quarter of volume. Stripe wins programmable web and Billing; Square wins trucks and simple invoices; PayPal stays relevant for wallet-heavy remote payers; Shopify Payments fits Shopify carts; Authorize.net remains when ISO/gateway packages lock integrations.",
    "Leaving Helcim without exporting effective rate math is guesswork—compute fees ÷ gross volume per channel before and after any trial.",
    "BeltStack does not see your merchant category, reserve history, or card mix. Underwriting and hold policies can invert a pretty quote—confirm written terms and, when possible, run parallel months before you migrate customer cards.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Membership vs per-transaction framing",
      body: "Some owners prefer Stax-style platform fees when volume is steady; others dislike monthly minimums when winter truck rolls disappear—model both seasons.",
    },
    {
      heading: "Field operations trump statements",
      body: "Helcim educates on interchange; Square still wins when crews need dead-simple readers and the office lacks time to coach staff through downgrade risks.",
    },
    {
      heading: "Developer-led growth",
      body: "Stripe replaces portal-first tools when hosted checkout, webhooks, and proration logic become the bottleneck—not a knock on Helcim, a channel mismatch fix.",
    },
    {
      heading: "Shopify or legacy gateway constraints",
      body: "Shopify Payments or Authorize.net paths matter when commerce or ERP integrations dictate rails—pick the constraint first, then the processor.",
    },
  ],
  topAlternatives: helcimAlts,
  comparisonTableRows: buildTableRows(helcimOriginal, helcimAlts),
  detailedAlternatives: helcimAlts.map(detailFromPick),
  relatedComparisons: [rel("helcim-vs-stax"), rel("stripe-vs-square"), rel("shopify-payments-vs-stripe"), rel("stripe-vs-paypal")],
  relatedResources: relatedResourcesForProduct("helcim"),
  faqItems: [
    {
      q: "What is the best Helcim alternative for contractors?",
      a: "Square when trucks swipe most revenue; Stripe when web deposits and Billing dominate; Stax when membership pricing beats your current interchange-plus stack on statements.",
    },
    {
      q: "Helcim vs Stax—which saves money?",
      a: "Depends on monthly platform fees versus your average ticket and seasonality. Export statements for both models and compare net deposits, not brochures.",
    },
    {
      q: "Does BeltStack get paid to rank Helcim alternatives?",
      a: "No pay-for-placement. Affiliate links may exist elsewhere on the site; they do not buy order here. Use trials, quotes, and your CSV exports.",
    },
    {
      q: "Will switching processors fix chargebacks?",
      a: "No—scopes, signatures, and documentation fix disputes. Processors route money; they do not rewrite contract clarity.",
    },
  ],
};

const staxOriginal: AlternativesTableRow = {
  slug: "stax",
  name: "Stax",
  logoSrc: paymentProcessingLogoForSlug("stax"),
  bestFor: "Membership platform + interchange pass-through",
  startingPrice: "Monthly + interchange",
  standoutFeature: "Predictable platform fee",
  reviewHref: getPaymentProcessingReviewUrl("stax"),
};

const staxPage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best Stax Alternatives (2026)",
  subtitle:
    "When interchange-plus without a membership line item, simpler field hardware, or developer-led ecommerce fits better than Stax’s platform-fee model—especially for seasonal trades that must survive slow months with honest cash-flow math.",
  productName: "Stax",
  productSlug: "stax",
  originalReviewHref: getPaymentProcessingReviewUrl("stax"),
  quickAnswerParagraphs: [
    "Helcim is the direct comparison for transparent interchange-plus with different packaging—see Helcim vs Stax. Stripe handles Billing-heavy web flows; Square simplifies card-present; PayPal helps wallet cohorts; Shopify Payments unifies Shopify orders; Clover fits counter-heavy retail.",
    "Stax’s monthly platform fee can be brilliant at steady volume and painful in off-season—graph twelve months before you defend the contract.",
    "We generalize from SMB and contractor patterns; your underwriting, reserves, and card mix may differ. No editorial page replaces a CFO review of net deposits.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Seasonal cash flow",
      body: "HVAC, landscaping, and outdoor trades see platform fees hurt when January volume drops—Helcim or Square may align costs with actual swipes.",
    },
    {
      heading: "Simplicity for staff",
      body: "Square reduces training load when interchange education is not sticking with crews who just need to tap and go.",
    },
    {
      heading: "Product roadmap needs",
      body: "Stripe wins when subscriptions, proration, and custom checkout outgrow membership processor portals.",
    },
    {
      heading: "Retail POS depth",
      body: "Clover competes when registers, modifiers, and inventory rule the floor—compare TCO including apps and hardware leases.",
    },
  ],
  topAlternatives: staxAlts,
  comparisonTableRows: buildTableRows(staxOriginal, staxAlts),
  detailedAlternatives: staxAlts.map(detailFromPick),
  relatedComparisons: [rel("helcim-vs-stax"), rel("stripe-vs-square"), rel("shopify-payments-vs-stripe"), rel("square-vs-paypal")],
  relatedResources: relatedResourcesForProduct("stax"),
  faqItems: [
    {
      q: "What is the best Stax alternative for small business?",
      a: "Helcim when you want interchange-plus without a membership platform fee narrative; Square when field simplicity matters; Stripe when online Billing leads.",
    },
    {
      q: "Is Stax cheaper than Square?",
      a: "Only if net deposits after monthly fees beat Square’s flat rate for your actual mix—compute effective rate on identical months.",
    },
    {
      q: "How independent is this Stax alternatives guide?",
      a: "Editorial picks based on channel fit for service businesses. Confirm pricing and contract terms with vendors; we do not see your statements.",
    },
    {
      q: "Can I keep Stax for some locations only?",
      a: "Possible, but multi-processor setups need accounting discipline—budget reconciliation time as a real cost.",
    },
  ],
};

const shopifyPaymentsOriginal: AlternativesTableRow = {
  slug: "shopify-payments",
  name: "Shopify Payments",
  logoSrc: paymentProcessingLogoForSlug("shopify-payments"),
  bestFor: "Shopify checkout + payouts",
  startingPrice: "Per charge + Shopify plan",
  standoutFeature: "Native Shopify money flow",
  reviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
};

const shopifyPaymentsPage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best Shopify Payments Alternatives (2026)",
  subtitle:
    "When your storefront is not Shopify, when you need deeper APIs than native checkout, or when interchange-transparent processors beat blended rates for your card mix—always cross-check Shopify acceptable-use policies and total subscription + app TCO before you optimize processing alone.",
  productName: "Shopify Payments",
  productSlug: "shopify-payments",
  originalReviewHref: getPaymentProcessingReviewUrl("shopify-payments"),
  quickAnswerParagraphs: [
    "Stripe is the headline alternative for non-Shopify or headless stacks—use Shopify Payments vs Stripe as your checklist. Square fits omnichannel SMBs without Shopify; Helcim and Stax challenge blended pricing when finance wants statement lines; PayPal adds wallet rails; Authorize.net appears for legacy gateway requirements.",
    "Shopify Payments saves ops time when the cart is already Shopify—switching for basis points alone can cost more in apps, migration, and risk review than you save.",
    "BeltStack cannot see your chargeback rate, product mix, or policy flags. If Shopify Payments paused payouts, talk to support and your accountant before you leap processors.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Off-Shopify websites",
      body: "Stripe or Square own the story when marketing and checkout are not Shopify-native—Shopify Payments cannot follow you to arbitrary domains.",
    },
    {
      heading: "API and subscription depth",
      body: "Stripe Billing and webhooks outpace checkout-only needs when SaaS-style service plans or usage metering appear.",
    },
    {
      heading: "Blended rate transparency",
      body: "Helcim or Stax can appeal when large B2B-style cards dominate and you want interchange visibility—often alongside Shopify for other channels.",
    },
    {
      heading: "Policy or category friction",
      body: "Some verticals bump acceptable-use limits—alternatives are not ‘better,’ they are ‘eligible.’ Read current processor policies; editorial pages age faster than compliance teams.",
    },
  ],
  topAlternatives: shopifyPaymentsAlts,
  comparisonTableRows: buildTableRows(shopifyPaymentsOriginal, shopifyPaymentsAlts),
  detailedAlternatives: shopifyPaymentsAlts.map(detailFromPick),
  relatedComparisons: [rel("shopify-payments-vs-stripe"), rel("stripe-vs-square"), rel("helcim-vs-stax"), rel("stripe-vs-paypal")],
  relatedResources: relatedResourcesForProduct("shopify-payments"),
  faqItems: [
    {
      q: "What is the best alternative to Shopify Payments?",
      a: "Stripe for custom or non-Shopify web stacks; Square for field + retail simplicity; Helcim or Stax when interchange-plus math wins on statements.",
    },
    {
      q: "Can I use Stripe and Shopify together?",
      a: "Sometimes via alternate gateways or external invoices—expect extra reconciliation and policy checks; confirm with Shopify and Stripe before you promise customers a flow.",
    },
    {
      q: "Does BeltStack favor Stripe over Shopify?",
      a: "We favor channel fit. Shopify Payments is often correct inside Shopify; Stripe is often correct outside it—verify with your own checkout and payout data.",
    },
    {
      q: "Do alternatives remove Shopify subscription costs?",
      a: "No—if you still run Shopify for catalog or POS, subscription economics stay in TCO when comparing processors.",
    },
  ],
};

const authorizeNetOriginal: AlternativesTableRow = {
  slug: "authorize-net",
  name: "Authorize.net",
  logoSrc: paymentProcessingLogoForSlug("authorize-net"),
  bestFor: "Gateway + merchant account stack",
  startingPrice: "Gateway fee + processing",
  standoutFeature: "Long-standing gateway integrations",
  reviewHref: getPaymentProcessingReviewUrl("authorize-net"),
};

const authorizeNetPage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best Authorize.net Alternatives (2026)",
  subtitle:
    "When modern APIs, packaged SMB hardware, interchange-transparent portals, or Shopify-native checkout replace legacy gateway maintenance—especially if developer time, PCI scope, or duplicate fees are the hidden cost, not the gateway logo.",
  productName: "Authorize.net",
  productSlug: "authorize-net",
  originalReviewHref: getPaymentProcessingReviewUrl("authorize-net"),
  quickAnswerParagraphs: [
    "Stripe is the common upgrade path for programmable checkout and Billing; Square bundles readers and invoices; Helcim and Stax modernize interchange-plus without nursing AIM-era integrations; PayPal and Shopify Payments cover wallet and cart-specific rails.",
    "Authorize.net often sits beside an ISO merchant account—separate gateway fee from processing markup before you compare alternatives, or you will double-count savings.",
    "Migration needs a token and customer-data plan—BeltStack does not execute cutovers; involve your developer, ISO, or qualified payments consultant for card-on-file moves.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "Integration maintenance fatigue",
      body: "Legacy gateway paths break when frameworks update—teams leave for Stripe when engineering cost exceeds processing savings.",
    },
    {
      heading: "Field operations reality",
      body: "Virtual terminals do not replace mobile readers; Square or Clover paths matter when trucks actually collect payment.",
    },
    {
      heading: "Fee stack clarity",
      body: "Gateway monthly + per-transaction + ISO markup confuses owners—Helcim or Stax pitches simpler statements when you can switch merchant accounts safely.",
    },
    {
      heading: "Compliance and PCI scope",
      body: "Modern hosted fields reduce SAQ burden compared to old POST flows—security wins can justify migration even if rates look similar.",
    },
  ],
  topAlternatives: authorizeNetAlts,
  comparisonTableRows: buildTableRows(authorizeNetOriginal, authorizeNetAlts),
  detailedAlternatives: authorizeNetAlts.map(detailFromPick),
  relatedComparisons: [rel("stripe-vs-paypal"), rel("stripe-vs-square"), rel("shopify-payments-vs-stripe"), rel("helcim-vs-stax")],
  relatedResources: relatedResourcesForProduct("authorize-net"),
  faqItems: [
    {
      q: "What replaces Authorize.net for small business?",
      a: "Often Stripe or Square depending on online vs in-person mix; Helcim or Stax when interchange-plus and a modern portal beat gateway + ISO stacking.",
    },
    {
      q: "Can I keep Authorize.net and change processors?",
      a: "Sometimes—gateway and merchant account are separable in many stacks. Read contract end dates and PCI implications before you assume.",
    },
    {
      q: "Why trust BeltStack on Authorize.net alternatives?",
      a: "We describe typical migration patterns for SMBs; we do not access your gateway logs. Confirm with vendors and security advisors.",
    },
    {
      q: "Will Stripe eliminate chargebacks?",
      a: "No—documentation and clear scopes do. Processors only move money and supply evidence tools.",
    },
  ],
};

const cloverOriginal: AlternativesTableRow = {
  slug: "clover",
  name: "Clover",
  logoSrc: paymentProcessingLogoForSlug("clover"),
  bestFor: "Retail POS + Fiserv processing",
  startingPrice: "Hardware + processing",
  standoutFeature: "Counter ecosystem",
  reviewHref: getPaymentProcessingReviewUrl("clover"),
};

const cloverPage: AlternativesTemplateProps = {
  ...stripePage,
  title: "Best Clover Alternatives (2026)",
  subtitle:
    "When simpler SMB POS, developer-led ecommerce, interchange-transparent pricing, or Shopify-led retail beats Clover’s bundle for your footprint—compare hardware leases, app spend, and effective rate on statements, not device aesthetics alone.",
  productName: "Clover",
  productSlug: "clover",
  originalReviewHref: getPaymentProcessingReviewUrl("clover"),
  quickAnswerParagraphs: [
    "Square is the closest peer for faster SMB rollout on readers and invoices; Stripe wins online-heavy brands needing Billing and APIs; Helcim and Stax compete on processing economics; PayPal helps remote wallet payers; Shopify Payments fits Shopify retail + ecommerce combos.",
    "Clover’s TCO includes hardware, apps, and support—alternative quotes must include the same scope or comparisons lie.",
    "Field-service-heavy brands may not need Clover at all; if trucks earn most revenue, start channel mapping before you swap countertop systems.",
  ],
  whyPeopleLookForAlternatives: [
    {
      heading: "SMB simplicity",
      body: "Square reduces decision fatigue when Clover’s marketplace and hardware tiers overshoot a two-register shop.",
    },
    {
      heading: "Online growth",
      body: "Stripe separates cleanly when ecommerce outpaces counter—Clover can feel sideways for custom checkout needs.",
    },
    {
      heading: "Pricing transparency",
      body: "Helcim or Stax can win when large tickets make interchange visibility valuable and app spend is controlled.",
    },
    {
      heading: "Wallet and link payments",
      body: "PayPal still helps certain homeowner demographics paying from email—measure completion, not opinions.",
    },
  ],
  topAlternatives: cloverAlts,
  comparisonTableRows: buildTableRows(cloverOriginal, cloverAlts),
  detailedAlternatives: cloverAlts.map(detailFromPick),
  relatedComparisons: [rel("stripe-vs-square"), rel("square-vs-paypal"), rel("helcim-vs-stax"), rel("shopify-payments-vs-stripe")],
  relatedResources: relatedResourcesForProduct("clover"),
  faqItems: [
    {
      q: "What is the best Clover alternative for retail?",
      a: "Square for many SMB counters; Shopify Payments when retail and Shopify ecommerce should share a ledger; Stripe when custom online checkout leads.",
    },
    {
      q: "Clover vs Square for contractors?",
      a: "Square often fits mobile crews and simple invoices; Clover fits register-heavy showrooms—map where money enters before you choose.",
    },
    {
      q: "Does BeltStack get kickbacks for Clover alternatives?",
      a: "No sponsored rankings. Affiliate commissions may exist elsewhere on the site; verify quotes and statements yourself.",
    },
    {
      q: "How do I compare hardware costs fairly?",
      a: "Include leases, warranties, spare readers, and app subscriptions—divide by months to compare with software-only stacks.",
    },
  ],
};

const pages: Record<string, AlternativesTemplateProps> = {
  stripe: stripePage,
  square: squarePage,
  "paypal-business": paypalPage,
  helcim: helcimPage,
  stax: staxPage,
  "shopify-payments": shopifyPaymentsPage,
  "authorize-net": authorizeNetPage,
  clover: cloverPage,
};

export function getPaymentProcessingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getPaymentProcessingAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
