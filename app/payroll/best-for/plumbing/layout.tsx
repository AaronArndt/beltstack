import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Plumbing Companies (2026)",
  description:
    "Compare the best payroll software for plumbing and trade companies. Top picks for tech payroll, 1099 subs, job costing, and time tracking.",
};

export default function BestForPlumbingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
