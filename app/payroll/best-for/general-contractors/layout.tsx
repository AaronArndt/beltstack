import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for General Contractors (2026)",
  description:
    "Compare the best payroll software for general contractors (GCs). Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForGeneralContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
