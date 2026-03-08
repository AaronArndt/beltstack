import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Payroll Software for 1099 Contractors (2026)",
  description:
    "Compare the best payroll software for paying 1099 contractors. Top picks for contractor payments, 1099-NEC filing, contractor portals, and mixed W-2/1099 teams.",
};

export default function BestFor1099ContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
