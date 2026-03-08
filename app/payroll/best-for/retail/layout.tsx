import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Retail (2026)",
  description:
    "Compare the best payroll software for retail stores. Top picks for associates, managers, part-time and seasonal staff, and labor cost by location.",
};

export default function BestForRetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
