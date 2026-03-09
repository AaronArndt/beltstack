import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Accounting Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best accounting software for small businesses: bookkeeping, invoicing, expense tracking, and tax prep. Top picks include QuickBooks Online, Xero, Wave, and FreshBooks.",
};

export default function BestForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
