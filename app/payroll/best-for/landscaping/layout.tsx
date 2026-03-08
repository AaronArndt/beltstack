import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Landscaping Companies (2026)",
  description:
    "Compare the best payroll software for landscaping and lawn care companies. Top picks for crew payroll, seasonal workers, 1099 subs, and job costing.",
};

export default function BestForLandscapingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
