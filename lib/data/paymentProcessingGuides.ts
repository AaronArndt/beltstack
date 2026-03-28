export type PaymentProcessingGuideItem = {
  slug: string;
  title: string;
  description: string;
  href: string;
};

export const PAYMENT_PROCESSING_GUIDES: PaymentProcessingGuideItem[] = [
  {
    slug: "how-payment-processing-works",
    title: "How Payment Processing Works",
    description:
      "From card tap to bank deposit: authorization, batching, interchange, and how payouts show up in your checking account.",
    href: "/payment-processing/guides/how-payment-processing-works",
  },
  {
    slug: "payment-processing-for-contractors",
    title: "Payment Processing for Contractors",
    description:
      "Job deposits, change orders, mobile readers on trucks, and payment links homeowners actually complete.",
    href: "/payment-processing/guides/payment-processing-for-contractors",
  },
  {
    slug: "credit-card-processing-fees-explained",
    title: "Credit Card Processing Fees Explained",
    description:
      "Flat rate vs interchange-plus, assessment fees, chargebacks, and how to read a merchant statement like a CFO.",
    href: "/payment-processing/guides/credit-card-processing-fees-explained",
  },
  {
    slug: "stripe-vs-square-fees",
    title: "Stripe vs Square Fees",
    description:
      "Scenario math for trades: small tickets, large replacements, keyed entries, and when each pricing model wins.",
    href: "/payment-processing/guides/stripe-vs-square-fees",
  },
  {
    slug: "how-to-choose-a-payment-processor",
    title: "How to Choose a Payment Processor",
    description:
      "POS vs invoicing vs online checkout, hardware, reserves, integrations with accounting, and rollout pitfalls to avoid.",
    href: "/payment-processing/guides/how-to-choose-a-payment-processor",
  },
];
