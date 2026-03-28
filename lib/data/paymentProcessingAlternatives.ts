/**
 * Payment processing alternatives pages — Stripe, Square, PayPal Business (editorial data for AlternativesTemplate).
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
    compareHref: p.compareHref,
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
  relatedResources: [
    ...HUB_RELATED,
    { label: "Best Square alternatives", href: getPaymentProcessingAlternativeUrl("square") },
    { label: "Best PayPal Business alternatives", href: getPaymentProcessingAlternativeUrl("paypal-business") },
  ],
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
  relatedResources: [
    ...HUB_RELATED,
    { label: "Best Stripe alternatives", href: getPaymentProcessingAlternativeUrl("stripe") },
    { label: "Best PayPal Business alternatives", href: getPaymentProcessingAlternativeUrl("paypal-business") },
  ],
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
  relatedResources: [
    ...HUB_RELATED,
    { label: "Best Stripe alternatives", href: getPaymentProcessingAlternativeUrl("stripe") },
    { label: "Best Square alternatives", href: getPaymentProcessingAlternativeUrl("square") },
  ],
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

const pages: Record<string, AlternativesTemplateProps> = {
  stripe: stripePage,
  square: squarePage,
  "paypal-business": paypalPage,
};

export function getPaymentProcessingAlternativesPage(slug: string): AlternativesTemplateProps | null {
  return pages[slug] ?? null;
}

export function getPaymentProcessingAlternativesSlugs(): string[] {
  return Object.keys(pages);
}
