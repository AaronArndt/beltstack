import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Cleaning Companies (2026)",
  description:
    "Compare the best payroll software for cleaning and janitorial companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForCleaningBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
