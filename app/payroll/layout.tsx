import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payroll Software for Small Businesses & Contractors (2026)",
  description:
    "Compare payroll software for contractors, small businesses, and field service teams. Explore reviews, comparisons, and payroll software by trade.",
};

export default function PayrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
