/**
 * Payment processing best-software roundup page data.
 * Used by app/payment-processing/best-payment-processing-software/page.tsx.
 */

import {
  getPaymentProcessingBestForUrl,
  getPaymentProcessingCompareUrl,
  getPaymentProcessingReviewUrl,
} from "@/lib/routes";
import type { SoftwarePickCardContent } from "@/lib/data/softwarePickCards/types";
import { PAYMENT_PROCESSING_LOGOS } from "@/lib/data/paymentProcessingLogos";

export type BestPaymentProcessingPick = SoftwarePickCardContent & {
  standoutFeature: string;
  /** Table column: main money path (card-present vs online vs gateway), like payroll “types” */
  primaryChannel: string;
};

export type PaymentProcessingComparisonTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  primaryChannel: string;
  rating: string;
  reviewHref: string;
};

export type UseCaseLink = { label: string; href: string; description: string };
export type ComparisonLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export const TOP_PICKS: BestPaymentProcessingPick[] = [
  {
    slug: "stripe",
    name: "Stripe",
    badge: "Best for online payments, subscriptions, and developer-led stacks",
    comparisonTableBestFor: "Ecommerce, SaaS-style billing, and custom checkout flows",
    description:
      "Stripe is the default modern stack when you sell online, send payment links, or need subscriptions with strong APIs and global card coverage.",
    rating: "4.7",
    startingPrice: "Pay-as-you-go (per successful charge)",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://stripe.com",
    logoSrc: PAYMENT_PROCESSING_LOGOS.stripe,
    compareSlugs: ["stripe-vs-square", "stripe-vs-paypal", "shopify-payments-vs-stripe"],
    primaryChannel: "Online, Payment Links, Billing",
    standoutFeature: "APIs, Payment Links, and Billing for recurring work",
    editorialParagraph:
      "Stripe shines when you take cards on your website, through invoices, or inside software you control. Trade and home-service businesses use Stripe with field apps, CRMs, or custom portals to collect deposits, final balances, and recurring maintenance plans—especially when you outgrow “email me a PDF and I’ll call for the card.” The trade-off is you still own more of the UX than with an all-in-one POS: you wire receipts, disputes, and reconciliation deliberately.",
    pros: [
      "Deep APIs and integrations for websites, invoices, and SaaS-style billing",
      "Payment Links and hosted flows for quick sends without a full storefront",
      "Strong fraud tooling and issuer-level features as you scale",
      "Works well alongside accounting tools when you map payouts to bank deposits",
    ],
    cons: [
      "In-person and countertop workflows are usually an add-on (Terminal) vs Square’s native retail story",
      "Interchange-plus style economics can feel opaque until you model real ticket sizes",
      "Chargebacks and dispute evidence still need an internal owner",
    ],
    pricingSummary:
      "Stripe typically charges a percentage plus fixed fee per successful card charge, with additional costs for Billing, Terminal hardware, and currency conversion. Model your average ticket, refund rate, and card-present vs online mix—flat-rate competitors look “simpler” until volume shifts economics.",
    alternativesSlug: "stripe",
  },
  {
    slug: "square",
    name: "Square",
    badge: "Best all-in-one for in-person + simple online for local operators",
    comparisonTableBestFor: "Countertop, mobile crews, and starter ecommerce tied to one brand",
    description:
      "Square bundles registers, mobile readers, invoices, and a lightweight online presence—ideal when you want one vendor for swipes and basic remote payments.",
    rating: "4.6",
    startingPrice: "Free POS app; processing fees per tap/swipe/key",
    hasFreeTrial: false,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://squareup.com",
    logoSrc: PAYMENT_PROCESSING_LOGOS.square,
    compareSlugs: ["stripe-vs-square", "square-vs-paypal", "stripe-vs-paypal"],
    primaryChannel: "Card-present, invoice, light online",
    standoutFeature: "Hardware + software in one ecosystem for field and storefront teams",
    editorialParagraph:
      "Square wins when your team lives on phones and tablets at job sites or a small front counter. Technicians can take a card after a repair, email a receipt, and keep moving—without standing up a full developer integration. If you also sell parts or merch online, Square’s connected tools reduce the “two different processors” problem that creates reconciliation headaches.",
    pros: [
      "Fast path to card-present payments with recognizable readers",
      "Invoices and payment links for deposits without a heavyweight gateway",
      "Operational simplicity for owners who want fewer vendors",
      "Solid fit for low-to-mid complexity service businesses",
    ],
    cons: [
      "Heavily customized ecommerce or multi-processor strategies may outgrow the defaults",
      "Feature depth varies by product surface—validate your exact country and vertical",
      "Flat-style pricing is easy to understand but not always cheapest at scale",
    ],
    pricingSummary:
      "Square publishes processing rates for card-present and card-not-present transactions, with additional fees for instant transfers or premium software tiers. Compare total cost including hardware amortization, not just the percentage on the marketing page.",
    alternativesSlug: "square",
  },
  {
    slug: "paypal-business",
    name: "PayPal Business",
    badge: "Best when buyers already trust PayPal checkout and wallets",
    comparisonTableBestFor: "Remote payers, marketplaces, and wallet-first buyers",
    description:
      "PayPal remains a conversion tool online—many homeowners will complete a job deposit if PayPal is a familiar button, even when they hesitate to hand a card to a new vendor.",
    rating: "4.4",
    startingPrice: "Per-transaction fees; plans vary by product surface",
    hasFreeTrial: false,
    hasFreePlan: true,
    hasIntegrations: true,
    visitUrl: "https://www.paypal.com/business",
    logoSrc: PAYMENT_PROCESSING_LOGOS.paypal,
    compareSlugs: ["stripe-vs-paypal", "square-vs-paypal"],
    primaryChannel: "Wallet, links, remote checkout",
    standoutFeature: "Brand recognition and wallet options that reduce abandoned checkouts",
    editorialParagraph:
      "PayPal Business is less about “best API aesthetics” and more about meeting customers where they are. For contractors, that often means invoicing a deposit, sharing a pay link, or embedding checkout on a simple site. Pair PayPal with clear job documentation—homeowners confuse peer-to-peer sends with business payments when your process is ambiguous.",
    pros: [
      "Trusted consumer brand that can lift completion rates on remote payments",
      "Multiple ways to get paid: links, invoices, and integrations",
      "Useful for occasional online revenue even when in-person is mostly Square/Stripe Terminal",
    ],
    cons: [
      "Fee structure spans several products—read statements, not headlines",
      "Support experiences vary; complex disputes need tight internal records",
      "Not a replacement for a full POS strategy when inventory and registers matter",
    ],
    pricingSummary:
      "PayPal’s business fees depend on whether payments are domestic or international, online or in-person, and whether currency conversion applies. Export a month of transactions and recompute effective rate before you argue about “cheap vs expensive.”",
    alternativesSlug: "paypal-business",
  },
  {
    slug: "shopify-payments",
    name: "Shopify Payments",
    badge: "Best when Shopify is your commerce brain",
    comparisonTableBestFor: "Shopify stores selling services, deposits, or physical goods",
    description:
      "If you run on Shopify, Shopify Payments keeps checkout, payouts, and many operational surfaces in one stack—reducing middleware and surprise declines from mismatched gateways.",
    rating: "4.5",
    startingPrice: "Bundled with Shopify plans; processing per transaction",
    hasFreeTrial: true,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.shopify.com/payments",
    logoSrc: PAYMENT_PROCESSING_LOGOS.shopify,
    compareSlugs: ["shopify-payments-vs-stripe", "stripe-vs-square"],
    primaryChannel: "Shopify cart checkout",
    standoutFeature: "Native checkout and payouts for Shopify merchants",
    editorialParagraph:
      "Shopify Payments is the pragmatic choice when your marketing site and cart already live in Shopify. Service businesses use Shopify to sell memberships, deposits, or merch; payments should match that reality instead of bolting on a second gateway unless you have a compliance or feature reason. If you are not on Shopify, this is not your starting point—compare Stripe vs Square instead.",
    pros: [
      "Tight integration with Shopify admin, reporting, and refunds",
      "Less gateway fragmentation for small teams",
      "Strong fit when ecommerce is a real revenue line, not a brochure page",
    ],
    cons: [
      "Not applicable if you are not committed to Shopify as commerce infrastructure",
      "Businesses needing exotic payment methods or custom acquirer setups may still diverge",
      "Policy and prohibited categories matter—validate your services against platform rules",
    ],
    pricingSummary:
      "Processing rates are tied to your Shopify plan and transaction type. Budget subscription plus processing together, and watch chargeback ratios on higher-ticket deposits.",
    alternativesSlug: null,
  },
  {
    slug: "helcim",
    name: "Helcim",
    badge: "Best interchange-plus transparency for growing ticket sizes",
    comparisonTableBestFor: "Teams that want published interchange-plus and fewer hidden spreads",
    description:
      "Helcim targets businesses tired of opaque pricing—helpful when your average repair invoice is high enough that a few basis points matter monthly.",
    rating: "4.5",
    startingPrice: "Interchange-plus; no monthly minimum on many plans",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.helcim.com",
    logoSrc: PAYMENT_PROCESSING_LOGOS.helcim,
    compareSlugs: ["helcim-vs-stax", "stripe-vs-square"],
    primaryChannel: "Interchange-plus, CP + CNP",
    standoutFeature: "Transparent pricing and modern merchant experience",
    editorialParagraph:
      "Helcim is a strong evaluation when you want honest interchange-plus statements and a modern dashboard without enterprise sales theater. Field services with healthy average tickets—HVAC replacements, electrical panel work, larger plumbing jobs—sometimes save material money versus simplified flat-rate bundles, especially when keyed or online volume grows.",
    pros: [
      "Clear interchange-plus framing for finance-minded owners",
      "Competitive positioning for card-present and virtual terminal use cases",
      "Good alternative when you want fewer “mystery fees” on statements",
    ],
    cons: [
      "Less of a household consumer brand than PayPal on checkout pages",
      "You still need disciplined processes for chargebacks and AVS/CVV practices",
      "Compare total features vs Square/Stripe bundles you already rely on",
    ],
    pricingSummary:
      "Helcim typically charges interchange plus a disclosed markup. Model your effective rate after refunds, downgrades, and any hardware leases—interchange-plus is transparent, not automatically cheapest for every micro-ticket profile.",
    alternativesSlug: null,
  },
  {
    slug: "stax",
    name: "Stax",
    badge: "Best subscription-style processing for steady volume",
    comparisonTableBestFor: "Businesses with predictable monthly card volume",
    description:
      "Stax (formerly Fattmerchant) uses a membership-style model that can flatten month-to-month swings when you process enough volume.",
    rating: "4.3",
    startingPrice: "Monthly platform fee plus interchange costs",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.staxpayments.com",
    logoSrc: PAYMENT_PROCESSING_LOGOS.stax,
    compareSlugs: ["helcim-vs-stax", "stripe-vs-square"],
    primaryChannel: "Membership + steady volume",
    standoutFeature: "Membership pricing that rewards consistent processing volume",
    editorialParagraph:
      "Stax fits operators who can forecast monthly card volume and want fewer surprises than pure per-transaction stacking. If your trades business runs a steady stream of card-present jobs plus online invoices, membership economics can win—if volume drops, revisit the math quarterly.",
    pros: [
      "Predictable platform fee structure for planning",
      "Useful when you process enough to amortize monthly costs",
      "Good candidate for multi-location brands standardizing processing",
    ],
    cons: [
      "Lower or seasonal volume may not justify the membership layer",
      "Still requires operational discipline on disputes and fraud",
      "Compare feature set vs Stripe/Square ecosystems you already use",
    ],
    pricingSummary:
      "Stax combines membership fees with pass-through interchange costs. Seasonal trades should model slow months explicitly—what helps in July may sting in January.",
    alternativesSlug: null,
  },
  {
    slug: "authorize-net",
    name: "Authorize.net",
    badge: "Best gateway-first setup with broad processor compatibility",
    comparisonTableBestFor: "Businesses that need a gateway layer over an existing merchant account",
    description:
      "Authorize.net is a long-standing gateway brand—common when your bank or ISO pairs “merchant account + gateway” rather than an all-in-one like Square.",
    rating: "4.2",
    startingPrice: "Gateway fee plus processor/acquirer pricing",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.authorize.net",
    logoSrc: PAYMENT_PROCESSING_LOGOS.authorizeNet,
    compareSlugs: ["stripe-vs-square"],
    primaryChannel: "Gateway / bank bundle",
    standoutFeature: "Gateway features: tokenization, recurring billing hooks, and broad integrations",
    editorialParagraph:
      "Authorize.net still appears when businesses process through traditional acquirer relationships or legacy ERP/CRM integrations. You may not “choose Authorize.net first” as a greenfield contractor—but you should understand it when your bank package includes it, or when recurring billing needs stable tokens across systems.",
    pros: [
      "Mature gateway capabilities and wide compatibility",
      "Useful tokenization story for repeat customers on file",
      "Fits bank-led merchant account setups",
    ],
    cons: [
      "Total cost is processor + gateway—easy to underestimate",
      "UX varies by integration; not as cohesive as modern all-in-one apps",
      "Greenfield SMBs often start simpler with Square or Stripe",
    ],
    pricingSummary:
      "Budget gateway monthly fees, per-transaction gateway charges, and the underlying processor’s interchange markup. Ask for a sample monthly statement before you sign.",
    alternativesSlug: null,
  },
  {
    slug: "clover",
    name: "Clover",
    badge: "Best retail-forward hardware ecosystem with service-friendly POS apps",
    comparisonTableBestFor: "Shops and trades counters that want dedicated devices and app marketplace",
    description:
      "Clover combines hardware and POS software with payment processing—strong when you want a countertop brain, not only a dongle.",
    rating: "4.4",
    startingPrice: "Hardware + processing rates (often via resellers/ISOs)",
    hasFreeTrial: false,
    hasFreePlan: false,
    hasIntegrations: true,
    visitUrl: "https://www.clover.com",
    logoSrc: PAYMENT_PROCESSING_LOGOS.clover,
    compareSlugs: ["stripe-vs-square", "square-vs-paypal"],
    primaryChannel: "Counter, handheld, ISO retail",
    standoutFeature: "Device + app ecosystem for in-store and on-site workflows",
    editorialParagraph:
      "Clover is compelling when you want a purpose-built terminal experience and an app marketplace for tips, house accounts, or inventory-light retail attached to a service business. Pricing is often sold through partners—compare total effective rate and contract terms, not sticker hardware prices alone.",
    pros: [
      "Strong hardware story for fixed locations and busy counters",
      "App marketplace can cover tips, loyalty, and basic inventory",
      "Familiar flow for staff who struggled with phone-only readers",
    ],
    cons: [
      "ISO/reseller variability means due diligence matters",
      "Less developer-native than Stripe for custom web flows",
      "Evaluate contract length and termination terms carefully",
    ],
    pricingSummary:
      "Clover costs combine hardware leases or purchases with processing fees that may include reserves or equipment subsidies. Get three quotes if your reseller story feels rushed.",
    alternativesSlug: null,
  },
] as BestPaymentProcessingPick[];

export const COMPARISON_TABLE_ROWS: PaymentProcessingComparisonTableRow[] = TOP_PICKS.map((pick) => ({
  slug: pick.slug,
  name: pick.name,
  logoSrc: pick.logoSrc,
  bestFor: pick.comparisonTableBestFor ?? pick.badge,
  startingPrice: pick.startingPrice,
  primaryChannel: pick.primaryChannel,
  rating: pick.rating,
  reviewHref: getPaymentProcessingReviewUrl(pick.slug),
}));

export const USE_CASE_LINKS: UseCaseLink[] = [
  {
    label: "Best for small business",
    href: getPaymentProcessingBestForUrl("small-business"),
    description: "Simple stacks for owners balancing dispatch, deposits, and bookkeeping.",
  },
  {
    label: "Best for contractors",
    href: getPaymentProcessingBestForUrl("contractors"),
    description: "Field payments, invoices, and card-present workflows for trades.",
  },
  {
    label: "Best for HVAC",
    href: getPaymentProcessingBestForUrl("hvac"),
    description: "High-ticket jobs, deposits, and seasonal cash-flow friendly setups.",
  },
  {
    label: "Best for plumbing companies",
    href: getPaymentProcessingBestForUrl("plumbing"),
    description: "Emergency calls, mobile readers, and quick payment links after service.",
  },
  {
    label: "Best for electricians",
    href: getPaymentProcessingBestForUrl("electricians"),
    description: "Code-heavy jobs with deposits, change orders, and professional receipts.",
  },
  {
    label: "Best for painting contractors",
    href: getPaymentProcessingBestForUrl("painting"),
    description: "Deposits, production-week balances, and pay links when homeowners are away.",
  },
  {
    label: "Best for roofing companies",
    href: getPaymentProcessingBestForUrl("roofing"),
    description: "Milestone deposits, on-site deductible capture, and large-ticket economics.",
  },
  {
    label: "Best for general contractors",
    href: getPaymentProcessingBestForUrl("general-contractors"),
    description: "Draw schedules, retainage-aware flows, and milestone billing tied to contracts.",
  },
  {
    label: "Best for landscaping companies",
    href: getPaymentProcessingBestForUrl("landscaping"),
    description: "Seasonal spikes, design deposits, and recurring maintenance renewals.",
  },
  {
    label: "Best for construction companies",
    href: getPaymentProcessingBestForUrl("construction"),
    description: "Progress draws, commercial cards, and integrated portal billing.",
  },
  {
    label: "Best for remodeling businesses",
    href: getPaymentProcessingBestForUrl("remodeling"),
    description: "Phased remodel billing, wallet checkout on estimates, and on-site finals.",
  },
  {
    label: "Best for handyman businesses",
    href: getPaymentProcessingBestForUrl("handyman"),
    description: "Small tickets, fast mobile capture, and simple emailed invoice links.",
  },
  {
    label: "Best for property management companies",
    href: getPaymentProcessingBestForUrl("property-management"),
    description: "Owner contributions, tenant charges, and portal-embedded payment paths.",
  },
  {
    label: "Best for pest control businesses",
    href: getPaymentProcessingBestForUrl("pest-control"),
    description: "Route capture, recurring plans, and digital upsells alongside stops.",
  },
  {
    label: "Best for pool service companies",
    href: getPaymentProcessingBestForUrl("pool-service"),
    description: "Weekly routes, equipment job deposits, and seasonal volume swings.",
  },
  {
    label: "Best for junk removal businesses",
    href: getPaymentProcessingBestForUrl("junk-removal"),
    description: "On-truck capture, commercial cleanout deposits, and fast pay links.",
  },
  {
    label: "Best for moving companies",
    href: getPaymentProcessingBestForUrl("moving"),
    description: "Booking deposits, corporate billing, and on-site finals after delivery.",
  },
  {
    label: "Best for home services",
    href: getPaymentProcessingBestForUrl("home-services"),
    description: "Multi-crew brands standardizing payments across channels.",
  },
];

export const RELATED_COMPARISONS: ComparisonLink[] = [
  { label: "Stripe vs Square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Stripe vs PayPal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
  { label: "Square vs PayPal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
  { label: "Helcim vs Stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
  { label: "Shopify Payments vs Stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
];

export const BEST_FOR_BY_TRADE: { label: string; href: string }[] = [
  { label: "Small business", href: getPaymentProcessingBestForUrl("small-business") },
  { label: "Contractors", href: getPaymentProcessingBestForUrl("contractors") },
  { label: "HVAC businesses", href: getPaymentProcessingBestForUrl("hvac") },
  { label: "Plumbing companies", href: getPaymentProcessingBestForUrl("plumbing") },
  { label: "Electricians", href: getPaymentProcessingBestForUrl("electricians") },
  { label: "Painting contractors", href: getPaymentProcessingBestForUrl("painting") },
  { label: "Roofing companies", href: getPaymentProcessingBestForUrl("roofing") },
  { label: "General contractors", href: getPaymentProcessingBestForUrl("general-contractors") },
  { label: "Landscaping companies", href: getPaymentProcessingBestForUrl("landscaping") },
  { label: "Construction companies", href: getPaymentProcessingBestForUrl("construction") },
  { label: "Remodeling businesses", href: getPaymentProcessingBestForUrl("remodeling") },
  { label: "Handyman businesses", href: getPaymentProcessingBestForUrl("handyman") },
  { label: "Property management companies", href: getPaymentProcessingBestForUrl("property-management") },
  { label: "Pest control businesses", href: getPaymentProcessingBestForUrl("pest-control") },
  { label: "Pool service companies", href: getPaymentProcessingBestForUrl("pool-service") },
  { label: "Junk removal businesses", href: getPaymentProcessingBestForUrl("junk-removal") },
  { label: "Moving companies", href: getPaymentProcessingBestForUrl("moving") },
  { label: "Home services", href: getPaymentProcessingBestForUrl("home-services") },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How does BeltStack pick the best payment processing software?",
    a: "We evaluate channel fit for service businesses and trades—card-present vs invoice vs online—plus pricing transparency, reconciliation burden, and typical SMB features. Rankings are editorial; vendors cannot pay for placement. We may earn affiliate commissions on some site links without changing our picks. Always confirm current rates and contract terms with the processor and your own statements.",
  },
  {
    q: "What is the cheapest payment processor?",
    a: "There is no universal winner—effective cost depends on average ticket, card-present vs keyed rates, refunds, and chargebacks. Flat-rate tools like Square are easy to predict; interchange-plus options like Helcim can win on larger tickets. Export three months of statements and compute effective rate before switching.",
  },
  {
    q: "How much do payment processors charge?",
    a: "Most SMBs pay a percentage plus a few cents per successful charge, plus monthly fees for software, gateways, or hardware. International cards, AMEX, and chargebacks can add costs. Read our credit card processing fees guide and compare Stripe vs Square fees for concrete examples.",
  },
  {
    q: "What payment processor is best for contractors?",
    a: "Many contractors start with Square for mobile readers and invoices, or Stripe when online deposits and custom flows matter. PayPal helps when homeowners want a trusted wallet checkout. If you run Shopify, evaluate Shopify Payments vs Stripe before adding complexity.",
  },
  {
    q: "Is Stripe better than Square?",
    a: "Stripe is stronger for developer-led online billing, subscriptions, and Payment Links at scale. Square is often faster for in-person crews and simple countertop operations. See our Stripe vs Square comparison for pricing and scenario guidance—not just feature lists.",
  },
  {
    q: "Do I need different processors for online and in-person?",
    a: "Not always. Many businesses unify on one platform for reconciliation. You might split stacks when ecommerce is complex but field ops need rugged simplicity—just budget finance time to reconcile payouts.",
  },
  {
    q: "What is interchange?",
    a: "Interchange is the baseline cost set by card networks and issuers that processors pass through (or bundle into flat rates). Interchange-plus statements separate that base from markup—helpful for transparency, though not automatically cheaper for every business.",
  },
];
