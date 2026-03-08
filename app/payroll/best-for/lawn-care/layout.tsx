import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Lawn Care Companies (2026)",
  description:
    "Compare the best payroll software for lawn care and landscaping companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForLawnCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
