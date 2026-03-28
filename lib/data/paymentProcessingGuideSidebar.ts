import type { GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { paymentProcessingLogoForSlug } from "@/lib/data/paymentProcessingLogos";
import { getPaymentProcessingReviewUrl } from "@/lib/routes";

/** Sidebar “Related Reviews” for payment processing guides — top three picks readers compare most. */
export const PAYMENT_PROCESSING_GUIDE_SIDEBAR_ITEMS: readonly GuideSidebarItem[] = [
  {
    name: "Stripe",
    logoSrc: paymentProcessingLogoForSlug("stripe"),
    rating: 4.7,
    bestFor: "Online checkout, Payment Links, Billing",
    reviewHref: getPaymentProcessingReviewUrl("stripe"),
  },
  {
    name: "Square",
    logoSrc: paymentProcessingLogoForSlug("square"),
    rating: 4.6,
    bestFor: "Mobile + countertop card-present",
    reviewHref: getPaymentProcessingReviewUrl("square"),
  },
  {
    name: "PayPal Business",
    logoSrc: paymentProcessingLogoForSlug("paypal-business"),
    rating: 4.4,
    bestFor: "Wallet checkout and remote payers",
    reviewHref: getPaymentProcessingReviewUrl("paypal-business"),
  },
];
