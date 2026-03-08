import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Small Business (2026)",
  description:
    "Compare the best payroll software for small businesses and startups. Top picks for transparent pricing, easy setup, and all-in-one payroll plus HR.",
};

export default function BestForSmallBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
