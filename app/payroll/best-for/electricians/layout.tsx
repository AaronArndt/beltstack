import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Electricians (2026)",
  description:
    "Compare the best payroll software for electrical contractors and electrician teams. Top picks for tech payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForElectriciansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
