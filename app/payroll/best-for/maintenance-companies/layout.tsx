import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Maintenance Companies (2026)",
  description:
    "Compare the best payroll software for maintenance companies. Top picks for facility maintenance crews, 1099 subs, job and site costing, and time tracking.",
};

export default function BestForMaintenanceCompaniesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
