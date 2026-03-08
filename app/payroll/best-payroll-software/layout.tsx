import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software (2026)",
  description:
    "Compare the best payroll software for contractors, small businesses, and growing teams. See top picks, pricing, ratings, and reviews.",
};

export default function BestPayrollSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
