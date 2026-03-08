import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Nonprofits (2026)",
  description:
    "Compare the best payroll software for nonprofits. Top picks for staff payroll, grant-funded labor allocation, and 1099 consultants.",
};

export default function BestForNonprofitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
