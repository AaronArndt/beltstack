import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Painting Contractors (2026)",
  description:
    "Compare the best payroll software for painting and contracting companies. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForPaintersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
