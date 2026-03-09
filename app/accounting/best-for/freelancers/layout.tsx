import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Accounting Software for Freelancers (2026) | BeltStack",
  description:
    "Compare the best accounting software for freelancers: invoicing, expense tracking, simple bookkeeping, and tax prep. Top picks include FreshBooks, Wave, QuickBooks Online, and Zoho Books.",
};

export default function BestForFreelancersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
