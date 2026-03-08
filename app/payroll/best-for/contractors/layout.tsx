import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Contractors (2026)",
  description:
    "Compare the best payroll software for contractors and trade businesses. Top picks for 1099 payments, mixed W-2/contractor crews, and job-costing-friendly workflows.",
};

export default function BestForContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
