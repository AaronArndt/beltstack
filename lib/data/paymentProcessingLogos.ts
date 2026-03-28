/**
 * Payment processing product logos — separate from hub data to avoid circular imports with the software pick registry.
 */

import { POS_LOGOS } from "@/lib/data/posLogos";

export const PAYMENT_PROCESSING_LOGOS = {
  stripe: "/Logos/stripe.jpeg",
  square: POS_LOGOS.square,
  paypal: "/Logos/paypal.jpeg",
  shopify: POS_LOGOS.shopify,
  helcim: "/Logos/helcim.jpeg",
  stax: "/Logos/stax.jpeg",
  authorizeNet: "/Logos/authorize.jpeg",
  clover: POS_LOGOS.clover,
} as const;

export function paymentProcessingLogoForSlug(slug: string): string {
  const map: Record<string, string> = {
    stripe: PAYMENT_PROCESSING_LOGOS.stripe,
    square: PAYMENT_PROCESSING_LOGOS.square,
    "paypal-business": PAYMENT_PROCESSING_LOGOS.paypal,
    "shopify-payments": PAYMENT_PROCESSING_LOGOS.shopify,
    helcim: PAYMENT_PROCESSING_LOGOS.helcim,
    stax: PAYMENT_PROCESSING_LOGOS.stax,
    "authorize-net": PAYMENT_PROCESSING_LOGOS.authorizeNet,
    clover: PAYMENT_PROCESSING_LOGOS.clover,
  };
  return map[slug] ?? PAYMENT_PROCESSING_LOGOS.stripe;
}
