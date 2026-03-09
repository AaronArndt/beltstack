import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Accounting Software for Small Businesses (2026)",
  description:
    "Compare accounting software for small businesses, freelancers, and contractors. Reviews, comparisons, and guides for tools like QuickBooks, Xero, and FreshBooks.",
};

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
