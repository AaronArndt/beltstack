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
import {
  PAYMENT_PROCESSING_TRADE_BEST_FOR_BY_SLUG,
  getPaymentProcessingTradeSeoMeta,
} from "@/lib/data/paymentProcessingBestForTrades";
import { BEST_FOR_BY_TRADE } from "@/lib/data/paymentProcessingBestPaymentProcessingSoftware";
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
      {
        heading: "Square",
        body: "Square is the fastest path for mobile crews and simple counters: readers, tap-to-pay, and next-day deposits with one vendor relationship to manage. During a trial month, reconcile payouts to your bank feed daily and compare effective rate—including refunds and AMEX mix—to your old statements. Test invoicing and payment links for deposits if office staff lives in email more than the field. Validate receipt branding and job-number memos so chargebacks are easier to defend. It fits small businesses that prioritize operational simplicity over bespoke gateway engineering.",
      },
      {
        heading: "Stripe",
        body: "Stripe shines when your website, portal, or app collects card-not-present deposits, memberships, or recurring maintenance plans via Checkout, Payment Links, or Billing APIs. Pilot with real customers on one offer first; failed renewals and webhook retries matter more than demo checkouts. Confirm Strong Customer Authentication and receipt emails match how homeowners expect to pay from their phones. Pair with your CRM or scheduling tool so paid status updates automatically for the office. Choose Stripe when engineering or agency help exists to own the integration long term.",
      },
      {
        heading: "PayPal Business",
        body: "PayPal Business helps when remote payers abandon card fields but complete wallet flows—common on mobile email estimates where trust and speed intersect. A/B a trial week: send identical invoices with and without PayPal buttons and measure completion, not vanity opens. Watch for higher fees on some wallet paths; net margin still has to clear your labor and materials. Validate dispute documentation processes since PayPal and card networks differ in buyer narratives. Keep it as a complementary rail when data proves lift, not by default.",
      },
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
      {
        heading: "Square",
        body: "Contractors leaning on truck rolls and walkthrough-close balances get hardware fast and reliable card-present rates with Square readers tied to real crew logins. Trial readers on your worst cell sites; if techs abandon the tool, no processor saves the job. Use invoices or contracts with explicit scope notes to protect against chargebacks on large tickets. Map payouts to job IDs in accounting so bookkeepers can trace deposits without detective work. Square stays the default when most dollars still swipe or tap on site.",
      },
      {
        heading: "Stripe",
        body: "Stripe fits when your site or branded portal sells deposits, progress draws, or subscription-style maintenance plans with hosted Checkout or Payment Links your office can regenerate. During pilot, test partial captures or incremental authorizations if equipment orders depend on homeowner commits. Log webhooks into CRM or job software so paid status is visible to dispatch the same day. Validate PCI scope—use Stripe’s hosted paths when you lack in-house security bandwidth. It wins when card-not-present discipline and automation matter as much as field readers.",
      },
      {
        heading: "Helcim",
        body: "Helcim appeals when large average tickets and transparent interchange-plus statements beat flat-rate simplicity for contractor economics—especially on high-ticket replacements or commercial draws. During a trial month, run parallel effective-rate math on real statements including refunds, AMEX share, and keyed versus present mix; marketing rates never tell the full story. Validate terminal or virtual terminal workflows crews and office staff will both use without workarounds. Confirm accounting exports match how your bookkeeper reconciles deposits by job ID. Choose Helcim when data proves basis points matter at your volume, not on speculation.",
      },
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
  ...PAYMENT_PROCESSING_TRADE_BEST_FOR_BY_SLUG,
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
      {
        heading: "Square",
        body: "Multi-crew home-service brands standardize on Square when they need identical reader kits, training playbooks, and payout visibility across branches without ten different merchant stories. Trial rollout in one district first: measure effective rate per location, not blended corporate averages hiding a bad branch. Enforce memo and job-ID discipline in POS profiles so finance can allocate revenue. Validate chargeback workflows centrally while letting local managers respond fast. Square scales field collection when consistency beats bespoke gateway projects.",
      },
      {
        heading: "Stripe",
        body: "Stripe supports branded customer portals, deposits, and recurring memberships that should look identical whether the customer books in Austin or Denver. During pilot, unify webhook handling into CRM so duplicate customer records do not corrupt attribution. Test Billing proration when homeowners upgrade maintenance tiers mid-cycle. Security review matters at scale—use Stripe-hosted elements to reduce PCI scope across franchises. Stripe is the backbone when programmatic money movement—not only swipes—defines operations.",
      },
      {
        heading: "Stax",
        body: "Stax enters the conversation for steady, multi-location home-service brands where membership-style pricing plus interchange pass-through can beat percentage-only stacks—if you model seasonality honestly before signing. Trial requires consolidated statement review across branches: low winter weeks still incur platform fees, so confirm the breakeven call volume makes sense. Validate terminal and gateway options match how each branch swipes versus keys. Align finance reporting so Stax batches still map to branch P&L and job IDs inside CRM. Choose Stax when predictable subscription economics beat ad hoc rates at enterprise-style volume, not for tiny seasonal shops.",
      },
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

/** SEO metadata (keywords + long description) for trade / vertical best-for pages; undefined for generic scenarios. */
export function getPaymentProcessingBestForSeoMeta(slug: string) {
  return getPaymentProcessingTradeSeoMeta(slug);
}

/** Hub card for the main payment processing roundup — matches H1 on /payment-processing/best-payment-processing-software. */
export const PAYMENT_PROCESSING_BEST_FOR_ROUNDUP_HUB_LINK = {
  label: "Best Payment Processing Software (2026)",
  href: "/payment-processing/best-payment-processing-software",
  description:
    "The best payment processing setup for small businesses and contractors is the one that matches where money actually enters—truck swipes, emailed invoice links, or website checkout—with honest effective rates after refunds and chargebacks.",
} as const;

export type PaymentProcessingBestForHubCard = { label: string; href: string; description: string };

/** Hub link labels match each scenario page’s `title`; descriptions use `subtitle` (same as on-page hero). */
export function getPaymentProcessingBestForHubScenarioLinks(): PaymentProcessingBestForHubCard[] {
  const prefix = "/payment-processing/best-for/";
  return BEST_FOR_BY_TRADE.map((item) => {
    if (!item.href.startsWith(prefix)) {
      throw new Error(`Unexpected payment processing best-for href: ${item.href}`);
    }
    const slug = item.href.slice(prefix.length);
    const props = getPaymentProcessingBestForPageProps(slug);
    if (!props) {
      throw new Error(`Missing payment processing best-for data for slug: ${slug}`);
    }
    return {
      label: props.title,
      href: item.href,
      description: props.subtitle,
    };
  });
}

export function getPaymentProcessingBestForHubLinks(): PaymentProcessingBestForHubCard[] {
  return [PAYMENT_PROCESSING_BEST_FOR_ROUNDUP_HUB_LINK, ...getPaymentProcessingBestForHubScenarioLinks()];
}
