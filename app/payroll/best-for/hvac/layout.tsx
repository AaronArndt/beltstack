import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for HVAC Companies (2026)",
  description:
    "Compare the best payroll software for HVAC and heating & cooling companies. Top picks for tech payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForHvacLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
