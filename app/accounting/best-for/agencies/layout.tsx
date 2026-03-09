import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Accounting Software for Agencies (2026) | BeltStack",
  description:
    "Compare the best accounting software for agencies: invoicing, project billing, time tracking, and client retainers. Top picks include FreshBooks, QuickBooks Online, Xero, and Zoho Books.",
};

export default function BestForAgenciesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
