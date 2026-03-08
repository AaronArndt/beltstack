import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Auto Repair Shops (2026)",
  description:
    "Compare the best payroll software for auto repair shops. Top picks for shop techs, service writers, 1099 sublet, and job/RO costing.",
};

export default function BestForAutoRepairLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
