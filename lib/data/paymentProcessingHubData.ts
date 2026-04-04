import type { HubUseCaseEditorialBlock } from "@/lib/types/hubEditorial";
import { getPaymentProcessingBestForUrl, getPaymentProcessingCompareUrl } from "@/lib/routes";
import { getPaymentProcessingCompareUrlFromSlug } from "@/lib/data/paymentProcessingComparisons";

const GUIDES_BASE = "/payment-processing/guides";

export type PaymentProcessingGuideCard = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const PAYMENT_PROCESSING_HUB_GUIDES: PaymentProcessingGuideCard[] = [
  {
    slug: "how-payment-processing-works",
    title: "How Payment Processing Works",
    description:
      "Authorization, settlement, payouts, and chargebacks—what happens after a homeowner’s card is tapped or an invoice is paid online.",
    href: `${GUIDES_BASE}/how-payment-processing-works`,
  },
  {
    slug: "payment-processing-for-contractors",
    title: "Payment Processing for Contractors",
    description:
      "Deposits, final draws, mobile readers, and payment links for crews that split time between trucks and the office.",
    href: `${GUIDES_BASE}/payment-processing-for-contractors`,
  },
  {
    slug: "credit-card-processing-fees-explained",
    title: "Credit Card Processing Fees Explained",
    description:
      "Interchange, assessments, markup, flat rates, and how to compute your real effective rate from statements.",
    href: `${GUIDES_BASE}/credit-card-processing-fees-explained`,
  },
  {
    slug: "stripe-vs-square-fees",
    title: "Stripe vs Square Fees",
    description:
      "When predictable flat pricing wins, when interchange-plus matters, and how ticket size changes the math for trades.",
    href: `${GUIDES_BASE}/stripe-vs-square-fees`,
  },
  {
    slug: "how-to-choose-a-payment-processor",
    title: "How to Choose a Payment Processor",
    description:
      "A practical checklist: card-present vs online, invoicing, hardware, reserves, and reconciliation with accounting.",
    href: `${GUIDES_BASE}/how-to-choose-a-payment-processor`,
  },
];

export const PAYMENT_PROCESSING_USE_CASE_EDITORIAL: HubUseCaseEditorialBlock[] = [
  {
    title: "Field crews and mobile card-present",
    body: "Technicians need readers that pair fast, offline-tolerant where possible, and receipts that match job numbers. Square and Clover often win onboarding speed; Stripe Terminal fits when the rest of the stack is already Stripe-native.",
    links: [
      { label: "Best payment processing for contractors →", href: getPaymentProcessingBestForUrl("contractors") },
      { label: "Stripe vs Square →", href: getPaymentProcessingCompareUrlFromSlug("stripe-vs-square") },
      { label: "Square vs Clover →", href: getPaymentProcessingCompareUrlFromSlug("square-vs-clover") },
      { label: "POS software hub (in-person checkout) →", href: "/pos" },
    ],
  },
  {
    title: "Invoices, deposits, and payment links",
    body: "Service businesses collect 50% deposits on replacements and email balances after photos are approved. Stripe Payment Links, Square Invoices, and PayPal checkout each reduce friction—pick the one your office will actually send consistently.",
    links: [
      { label: "Invoicing software hub →", href: "/invoicing" },
      { label: "Stripe vs PayPal →", href: getPaymentProcessingCompareUrlFromSlug("stripe-vs-paypal") },
      { label: "Email marketing hub (billing reminders) →", href: "/email-marketing" },
    ],
  },
  {
    title: "Ecommerce and Shopify checkout",
    body: "When carts, memberships, or filter subscriptions live in Shopify, payments should stay native unless compliance or payment-method gaps force a second gateway. Compare Shopify Payments vs Stripe before you fragment checkout.",
    links: [
      { label: "Shopify Payments vs Stripe →", href: getPaymentProcessingCompareUrlFromSlug("shopify-payments-vs-stripe") },
      { label: "Shopify Payments vs Square →", href: getPaymentProcessingCompareUrlFromSlug("shopify-payments-vs-square") },
      { label: "Website builders hub →", href: "/website-builders" },
    ],
  },
  {
    title: "Transparent interchange-plus economics",
    body: "High average tickets—panel upgrades, full system replacements—make a few basis points visible on statements. Helcim and membership models like Stax deserve modeling against flat-rate simplicity.",
    links: [
      { label: "Helcim vs Stax →", href: getPaymentProcessingCompareUrlFromSlug("helcim-vs-stax") },
      { label: "Credit card processing fees explained →", href: `${GUIDES_BASE}/credit-card-processing-fees-explained` },
      { label: "CRM software hub (track customers & payments) →", href: "/crm" },
    ],
  },
  {
    title: "Bank bundles, gateways, and legacy ERP paths",
    body: "Some stacks still center on Authorize.net behind a merchant account—especially when tokens, virtual terminals, or franchisor standards lock integrations. Compare gateway + processor TCO to modern all-in-one options before you replatform cards on file.",
    links: [
      { label: "Authorize.net vs Stripe →", href: getPaymentProcessingCompareUrlFromSlug("authorize-net-vs-stripe") },
      { label: "Authorize.net vs Square →", href: getPaymentProcessingCompareUrlFromSlug("authorize-net-vs-square") },
      { label: "Authorize.net vs Helcim →", href: getPaymentProcessingCompareUrlFromSlug("authorize-net-vs-helcim") },
    ],
  },
];

export type PaymentProcessingHubComparisonLink = { label: string; slug: string; href: string };

export const PAYMENT_PROCESSING_HUB_POPULAR_COMPARISONS: PaymentProcessingHubComparisonLink[] = [
  { label: "Stripe vs Square", slug: "stripe-vs-square", href: getPaymentProcessingCompareUrl("stripe-vs-square") },
  { label: "Square vs Helcim", slug: "square-vs-helcim", href: getPaymentProcessingCompareUrl("square-vs-helcim") },
  { label: "Stripe vs Helcim", slug: "stripe-vs-helcim", href: getPaymentProcessingCompareUrl("stripe-vs-helcim") },
  { label: "Shopify Payments vs Square", slug: "shopify-payments-vs-square", href: getPaymentProcessingCompareUrl("shopify-payments-vs-square") },
  { label: "Square vs Clover", slug: "square-vs-clover", href: getPaymentProcessingCompareUrl("square-vs-clover") },
  { label: "Stripe vs PayPal", slug: "stripe-vs-paypal", href: getPaymentProcessingCompareUrl("stripe-vs-paypal") },
  { label: "Square vs PayPal", slug: "square-vs-paypal", href: getPaymentProcessingCompareUrl("square-vs-paypal") },
  { label: "Helcim vs Stax", slug: "helcim-vs-stax", href: getPaymentProcessingCompareUrl("helcim-vs-stax") },
  { label: "Shopify Payments vs Stripe", slug: "shopify-payments-vs-stripe", href: getPaymentProcessingCompareUrl("shopify-payments-vs-stripe") },
  { label: "Shopify Payments vs PayPal", slug: "shopify-payments-vs-paypal", href: getPaymentProcessingCompareUrl("shopify-payments-vs-paypal") },
  { label: "Authorize.net vs Stripe", slug: "authorize-net-vs-stripe", href: getPaymentProcessingCompareUrl("authorize-net-vs-stripe") },
  { label: "Authorize.net vs Square", slug: "authorize-net-vs-square", href: getPaymentProcessingCompareUrl("authorize-net-vs-square") },
  { label: "Authorize.net vs Helcim", slug: "authorize-net-vs-helcim", href: getPaymentProcessingCompareUrl("authorize-net-vs-helcim") },
];
