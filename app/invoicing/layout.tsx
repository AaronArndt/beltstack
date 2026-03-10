import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Invoicing Software for Small Businesses (2026)",
  description:
    "Compare invoicing software for freelancers, small businesses, agencies, and contractors. Reviews, comparisons, and guides for tools like FreshBooks, QuickBooks, Wave, and Zoho Invoice.",
};

export default function InvoicingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
