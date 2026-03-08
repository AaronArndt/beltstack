import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Handyman Businesses (2026)",
  description:
    "Compare the best payroll software for handyman businesses. Top picks for crew payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForHandymanBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
