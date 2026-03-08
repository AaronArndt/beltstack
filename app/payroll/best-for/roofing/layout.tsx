import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Roofing Companies (2026)",
  description:
    "Compare the best payroll software for roofing contractors and roofing crews. Top picks for crew payroll, 1099 subs, job costing, and seasonal workforce.",
};

export default function BestForRoofingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
