import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Processing Software for Local Service Businesses (2026)",
  description:
    "Compare payment processors for contractors and home services—reviews, comparisons, guides, and scenario picks for card-present, invoicing, and online checkout.",
};

export default function PaymentProcessingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
