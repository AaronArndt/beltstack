import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Accounting Software for Ecommerce Businesses (2026) | BeltStack",
  description:
    "Compare the best accounting software for ecommerce: inventory, sales channel integrations, transaction volume, and reporting. Top picks include QuickBooks Online, Xero, Zoho Books, and Odoo Accounting.",
};

export default function BestForEcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
