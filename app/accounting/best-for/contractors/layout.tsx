import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Accounting Software for Contractors (2026) | BeltStack",
  description:
    "Compare the best accounting software for contractors: job costing, expense tracking, project-based invoicing, and bookkeeping. Top picks include QuickBooks Online, Xero, FreshBooks, and Zoho Books.",
};

export default function BestForContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
