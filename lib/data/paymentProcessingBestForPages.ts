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
import { paymentProcessingLogoForSlug } from "@/lib/data/paymentProcessingLogos";
import { getPaymentProcessingCompareUrl, getPaymentProcessingReviewUrl } from "@/lib/routes";

const GUIDES = "/payment-processing/guides";

const featuredProducts: BestForFeaturedProduct[] = [
  {
    slug: "square",
    name: "Square",
    badge: "Best field + counter default",
    description: "Readers, invoices, and quick payment links when crews collect most revenue on-site.",
    rating: "4.6",
    startingPrice: "Per transaction",
    reviewHref: getPaymentProcessingReviewUrl("square"),
    visitUrl: "https://squareup.com",
    logoSrc: paymentProcessingLogoForSlug("square"),
  },
  {
    slug: "stripe",
    name: "Stripe",
    badge: "Best online + Billing",
    description: "Payment Links, Checkout, and Billing for deposits and recurring maintenance plans on the web.",
    rating: "4.7",
    startingPrice: "Per transaction",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
    visitUrl: "https://stripe.com",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    badge: "Best wallet checkout",
    description: "When homeowners finish emailed deposits behind a trusted PayPal button.",
    rating: "4.4",
    startingPrice: "Per transaction",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
    visitUrl: "https://www.paypal.com/business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
  },
];

const comparisonTableRows: BestForTableRow[] = [
  {
    slug: "square",
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    bestFor: "Card-present + invoices",
    startingPrice: "Per transaction",
    standoutFeature: "Hardware + POS",
    reviewHref: getPaymentProcessingReviewUrl("square"),
  },
  {
    slug: "stripe",
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    bestFor: "Online + APIs",
    startingPrice: "Per transaction",
    standoutFeature: "Billing + Links",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    bestFor: "Wallet payers",
    startingPrice: "Per transaction",
    standoutFeature: "Trusted checkout",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
  },
  {
    slug: "helcim",
    name: "Helcim",
    logoSrc: paymentProcessingLogoForSlug("helcim"),
    bestFor: "Interchange-plus",
    startingPrice: "Interchange-plus",
    standoutFeature: "Transparent statements",
    reviewHref: getPaymentProcessingReviewUrl("helcim"),
  },
];

const relatedReviews: BestForReviewLink[] = [
  { name: "Stripe", href: getPaymentProcessingReviewUrl("stripe") },
  { name: "Square", href: getPaymentProcessingReviewUrl("square") },
  { name: "PayPal Business", href: getPaymentProcessingReviewUrl("paypal-business") },
  { name: "Shopify Payments", href: getPaymentProcessingReviewUrl("shopify-payments") },
  { name: "Helcim", href: getPaymentProcessingReviewUrl("helcim") },
  { name: "Stax", href: getPaymentProcessingReviewUrl("stax") },
  { name: "Authorize.net", href: getPaymentProcessingReviewUrl("authorize-net") },
  { name: "Clover", href: getPaymentProcessingReviewUrl("clover") },
];

const relatedComparisons: BestForComparisonLink[] = [
  { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
  { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
  { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
  { label: "Shopify Payments vs Stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
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
    categoryHref: "/payment-processing",
    categoryLabel: "Payment Processing",
    introParagraph,
    freshnessText: "Updated for 2026",
    topPicksSub: `Our top payment processing picks for ${label}.`,
    editorialSub: `What to evaluate when you collect card payments as ${label}.`,
    whyThesePicksSub: `Why these processors fit ${label}.`,
    seeAlsoBlock: {
      roundupLabel: "Best payment processing software (2026) — full roundup",
      roundupHref: "/payment-processing/best-payment-processing-software",
      compareLabel: "Compare payment processing software",
      compareHref: "/payment-processing/compare",
    },
    featuredProducts,
    comparisonTableRows,
    editorialGuidance,
    whyThesePicks,
    relatedReviews,
    relatedComparisons,
    relatedGuides: [
      ...relatedGuides,
      { label: "How to choose invoicing software", href: "/invoicing/guides/how-to-choose-invoicing-software" },
      { label: "POS software hub", href: "/pos" },
      { label: "CRM software hub", href: "/crm" },
      { label: "Website builders hub", href: "/website-builders" },
      { label: "Email marketing hub", href: "/email-marketing" },
    ],
    faqItems,
  };
}

export const PAYMENT_PROCESSING_BEST_FOR_BY_SLUG: Record<string, BestForTemplateProps> = {
  "small-business": makePage(
    "small-business",
    "Best Payment Processing Software for Small Business (2026)",
    "Collect deposits, final balances, and online payments without drowning in gateway jargon.",
    "Small service businesses win when one primary processor matches how money actually arrives—truck swipes, emailed invoices, or website checkout. Add complexity only when conversion data proves a second rail pays for itself.",
    [
      { heading: "Start with the dominant channel", body: "If 80% of dollars swipe in person, optimize readers and receipts first. If 80% pay online, prioritize checkout and payment links." },
      { heading: "Read statements monthly", body: "Effective rate beats marketing percentages—track refunds, AMEX share, and chargebacks." },
      { heading: "Pair with invoicing deliberately", body: "Send invoices and accept payments through workflows your office will repeat daily—see our invoicing hub when documents drive collections." },
      { heading: "Plan for growth", body: "If memberships or ecommerce appear on the horizon, pick a processor that supports recurring billing without a painful replatform." },
    ],
    [
      { heading: "Square", body: "Fast wins for mobile crews and simple countertop operations with minimal vendor count." },
      { heading: "Stripe", body: "When the website or portal collects deposits and you want Payment Links or Billing." },
      { heading: "PayPal Business", body: "When wallet checkout measurably improves remote completion rates." },
    ],
    [
      { q: "What payment processor is cheapest for small business?", a: "Whichever yields the lowest net deposits for your mix after refunds and disputes—compute effective rate from statements." },
      { q: "Square or Stripe for a small shop?", a: "Square when crews swipe cards; Stripe when online checkout dominates." },
      { q: "Do I need a separate POS?", a: "Heavy retail may need our POS hub; many trades stop at mobile readers plus accounting sync." },
      { q: "How much do processors charge?", a: "Typically percentage plus cents per charge, plus hardware, instant transfer, or software fees—read the full fee grid." },
      { q: "Can I use the same processor online and in person?", a: "Often yes—unified reporting saves time; split stacks only with clear reasons." },
      { q: "Where does CRM fit?", a: "Track customers, jobs, and payment status in CRM so finance and dispatch share one story—see our CRM hub." },
    ],
    [
      { label: "How payment processing works", href: `${GUIDES}/how-payment-processing-works` },
      { label: "How to choose a payment processor", href: `${GUIDES}/how-to-choose-a-payment-processor` },
    ]
  ),
  contractors: makePage(
    "contractors",
    "Best Payment Processing for Contractors (2026)",
    "Mobile payments, job-site deposits, and invoices that match real-world trades workflows.",
    "Contractors collect money in awkward places: driveways, basements, and emailed estimates after hours. The right processor minimizes phone tag, records job references on receipts, and survives refund disputes with clear scopes.",
    [
      { heading: "Mobile reliability", body: "Test readers where signal is weak; crews abandon tools that fail at the worst moment." },
      { heading: "Deposit discipline", body: "Use payment links or invoices with explicit scope attachments so chargebacks are defensible." },
      { heading: "Change order flows", body: "Define how approved extras get charged—card on file policies need homeowner consent documented." },
      { heading: "Accounting handoff", body: "Map payouts to bank feeds so bookkeepers recognize deposits by processor and date." },
    ],
    [
      { heading: "Square", body: "Default when trucks swipe most final payments and you need hardware today." },
      { heading: "Stripe", body: "When your website or customer portal sells deposits and maintenance plans." },
      { heading: "Helcim", body: "When large average tickets make interchange-plus worth modeling." },
    ],
    [
      { q: "What is the best payment processor for contractors?", a: "Often Square for field-heavy ops; Stripe when online deposits and subscriptions lead; Helcim when statements justify interchange-plus." },
      { q: "How do I take payments on a job site?", a: "Use EMV mobile readers, collect email or SMS receipts, and tie job numbers to payment memos when possible." },
      { q: "Should I email invoices or swipe on site?", a: "Use both—deposits may be remote while balances collect after walkthrough approval." },
      { q: "What about PayPal?", a: "Useful when homeowners insist on wallet checkout; track completion lift before standardizing." },
      { q: "How do I reduce chargebacks?", a: "Signed scopes, photo documentation, and clear refund windows beat processor hopping." },
      { q: "Do I need website payments?", a: "If marketing invests in web leads, yes—pair with our website builders hub for conversion-friendly pages." },
    ],
    [
      { label: "Payment processing for contractors", href: `${GUIDES}/payment-processing-for-contractors` },
      { label: "Stripe vs Square fees", href: `${GUIDES}/stripe-vs-square-fees` },
    ]
  ),
  hvac: makePage(
    "hvac",
    "Best Payment Processing for HVAC (2026)",
    "High-ticket replacements, seasonal cash flow, and deposits that match long job cycles.",
    "HVAC companies often run large replacement tickets with staged deposits. Processors should support progressive billing, clear receipts for finance partners, and honest economics when summer volume spikes.",
    [
      { heading: "Model seasonal slowdowns", body: "If you use membership-style processor fees, verify slow months still work—or keep flat per-transaction pricing." },
      { heading: "Progressive billing", body: "Align deposits, equipment orders, and final draws with payment links or invoices your office can reproduce." },
      { heading: "Interchange awareness", body: "Large tickets amplify basis points—compare Helcim quotes against flat-rate bundles using real statements." },
      { heading: "Ecommerce add-ons", body: "Filters and memberships sold online may push Shopify + Shopify Payments—see Shopify Payments vs Stripe before splitting gateways." },
    ],
    [
      { heading: "Stripe", body: "Strong for Payment Links on big deposits and recurring maintenance if managed online." },
      { heading: "Square", body: "Reliable when crews still collect balances on-site after commissioning walkthroughs." },
      { heading: "Helcim", body: "When transparent interchange-plus beats flat rate on high average tickets." },
    ],
    [
      { q: "What payment method is best for HVAC replacements?", a: "Often a deposit link plus on-site balance capture—pick tools your office repeats without errors." },
      { q: "Is flat rate bad for HVAC?", a: "Not automatically—compute effective rate; large tickets sometimes favor interchange-plus." },
      { q: "How do memberships bill?", a: "Use processor recurring features or pair with invoicing software that manages renewals and failures." },
      { q: "Should we offer financing instead?", a: "Financing complements cards—still maintain a card rail for deposits and service calls." },
      { q: "What is the cheapest processor?", a: "The one with lowest net cost for your actual card mix and chargeback rate." },
      { q: "How does email marketing help?", a: "Send payment reminders and seasonal offers through our email marketing hub with compliant cadences." },
    ],
    [
      { label: "Credit card processing fees explained", href: `${GUIDES}/credit-card-processing-fees-explained` },
      { label: "How to choose a payment processor", href: `${GUIDES}/how-to-choose-a-payment-processor` },
    ]
  ),
  plumbers: makePage(
    "plumbers",
    "Best Payment Processing for Plumbers (2026)",
    "Emergency calls, quick mobile capture, and payment links when homeowners pay from work.",
    "Plumbing revenue mixes urgent same-day swipes with emailed invoices for larger repipes. Your processor should keep techs moving, support tap-to-pay hygiene, and reduce abandoned remote payments.",
    [
      { heading: "Speed after service", body: "Long checkout flows cost callbacks—train techs on a three-tap habit when possible." },
      { heading: "After-hours links", body: "Payment links should include job reference and plain-language descriptions to prevent confusion chargebacks." },
      { heading: "Wallet options", body: "PayPal or Apple Pay can rescue completion—test on your demographic." },
      { heading: "CRM alignment", body: "Mark invoices paid in CRM so dispatchers stop double-billing." },
    ],
    [
      { heading: "Square", body: "Excellent for emergency van payments and quick receipts." },
      { heading: "PayPal Business", body: "When emailed estimates convert better with wallet checkout." },
      { heading: "Stripe", body: "If you sell service plans or larger jobs through a web portal." },
    ],
    [
      { q: "Stripe or Square for plumbers?", a: "Square for van-heavy payment collection; Stripe when web links and subscriptions matter more." },
      { q: "How do plumbers reduce fees?", a: "Encourage card-present vs keyed entry, dispute invalid chargebacks with docs, and review effective rate quarterly." },
      { q: "What about cash and checks?", a: "Still document in the same systems so reporting stays honest and CRM stages update." },
      { q: "Should I use invoicing software?", a: "Often yes for line items and history—pair with our invoicing hub." },
      { q: "How much do payment processors charge?", a: "Varies by entry method; keyed and invoice-not-present often cost more than tap." },
      { q: "Can customers pay by text?", a: "Many stacks support pay-by-link via SMS—ensure PCI-safe flows and consent." },
    ],
    [
      { label: "Payment processing for contractors", href: `${GUIDES}/payment-processing-for-contractors` },
      { label: "How payment processing works", href: `${GUIDES}/how-payment-processing-works` },
    ]
  ),
  electricians: makePage(
    "electricians",
    "Best Payment Processing for Electricians (2026)",
    "Panel upgrades, commercial draws, and professional receipts that reflect licensed work.",
    "Electrical contractors often juggle residential upgrades and multi-phase commercial jobs. Payments should support staged deposits, clear documentation for inspectors and homeowners, and accounting that survives audits.",
    [
      { heading: "Commercial draw schedules", body: "Match processor invoices or links to contract milestones—avoid ad-hoc Venmo chaos." },
      { heading: "Large ticket economics", body: "Evaluate interchange-plus when panel jobs routinely exceed flat-rate comfort zones." },
      { heading: "Receipt professionalism", body: "Homeowners forward receipts to insurers—use consistent branding and job IDs." },
      { heading: "Website trust", body: "Commercial buyers often verify you online first—accept payments on pages from our website builders hub when possible." },
    ],
    [
      { heading: "Stripe", body: "Payment Links and structured checkout for deposits on big jobs." },
      { heading: "Square", body: "Field collection when residential work closes on-site." },
      { heading: "Helcim", body: "Transparent pricing when commercial tickets dominate." },
    ],
    [
      { q: "What processor fits electrical contractors?", a: "Stripe for staged online deposits; Square for residential truck collections; Helcim when statements show flat-rate drag." },
      { q: "How do I invoice commercial clients?", a: "Use invoicing tools with net terms tracking plus card or ACH options your processor supports." },
      { q: "Are keyed payments worth avoiding?", a: "Yes when possible—card-present rates are usually lower and fraud risk drops." },
      { q: "What is interchange?", a: "Baseline network cost passed through or bundled into flat rates—see our fees explained guide." },
      { q: "Should electricians offer financing?", a: "Large jobs often pair financing with card deposits—choose partners that integrate cleanly." },
      { q: "How does CRM help?", a: "Track bids, approvals, and paid stages so crews and office agree on what is owed." },
    ],
    [
      { label: "Credit card processing fees explained", href: `${GUIDES}/credit-card-processing-fees-explained` },
      { label: "Stripe vs Square fees", href: `${GUIDES}/stripe-vs-square-fees` },
    ]
  ),
  "home-services": makePage(
    "home-services",
    "Best Payment Processing for Home Services (2026)",
    "Multi-crew brands that need consistent payments across trucks, counters, and online booking.",
    "Home-service brands with multiple trucks or locations need processors that scale reporting, standardize receipts, and keep effective rates visible as volume grows. Fragmented tools create reconciliation debt finance teams hate.",
    [
      { heading: "Standardize rails", body: "Pick one primary processor per channel where possible; exceptions need written policy." },
      { heading: "Central reporting", body: "Leaders should compare location effective rates monthly—not only top-line revenue." },
      { heading: "Training", body: "Roll out reader habits and link templates in one playbook to avoid ten different ad-hoc flows." },
      { heading: "Cross-stack links", body: "CRM tracks customers; email marketing sends reminders; website builders host book-now flows—processors sit at the money layer." },
    ],
    [
      { heading: "Square", body: "Uniform hardware story for many crews onboarding quickly." },
      { heading: "Stripe", body: "When branded portals and subscriptions unify revenue across locations." },
      { heading: "Stax", body: "When steady enterprise-style volume makes membership pricing attractive—model seasonality first." },
    ],
    [
      { q: "How do multi-location brands choose a processor?", a: "Optimize for reporting consistency, support SLAs, and effective rate by branch—not only signup bonuses." },
      { q: "Is Stripe better than Square at scale?", a: "Stripe often wins programmatic complexity; Square wins uniform field hardware—many brands use both with discipline." },
      { q: "What is the cheapest payment processor?", a: "The one with lowest net deposits across all locations after every fee and loss." },
      { q: "How do POS systems fit?", a: "Showrooms and parts desks may need POS depth from our POS hub while trucks stay mobile-first." },
      { q: "Can we send payment reminders by email?", a: "Yes—coordinate with our email marketing hub and CRM to avoid duplicate or non-compliant pings." },
      { q: "When is Helcim or Stax relevant?", a: "When consolidated statements prove flat-rate bundles lag interchange-plus or membership models." },
    ],
    [
      { label: "How to choose a payment processor", href: `${GUIDES}/how-to-choose-a-payment-processor` },
      { label: "How payment processing works", href: `${GUIDES}/how-payment-processing-works` },
    ]
  ),
};

export function getPaymentProcessingBestForPageProps(slug: string): BestForTemplateProps | undefined {
  return PAYMENT_PROCESSING_BEST_FOR_BY_SLUG[slug];
}

export function getPaymentProcessingBestForSlugs(): string[] {
  return Object.keys(PAYMENT_PROCESSING_BEST_FOR_BY_SLUG);
}
