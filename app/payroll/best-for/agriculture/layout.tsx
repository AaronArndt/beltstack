import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for Agriculture (2026)",
  description:
    "Compare the best payroll software for farms and ag operations. Top picks for farm workers, seasonal labor, 1099 custom operators, and labor by crop or field.",
};

export default function BestForAgricultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
