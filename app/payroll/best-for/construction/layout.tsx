import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Construction Companies (2026)",
  description:
    "Compare the best payroll software for construction companies, subcontractors, and mixed crews. See top picks, features, and reviews.",
};

export default function BestForConstructionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
