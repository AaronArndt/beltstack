import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/concrete-contractors",
  title: "Best Payroll Software for Concrete Contractors (2026) | BeltStack",
  description:
    "Payroll for concrete contractors: large crews, overtime, ADP and QuickBooks job labor, Gusto growth, and OnPay value for flatwork and structural pours.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "concrete contractor payroll",
    "construction payroll software",
    "ADP payroll",
    "QuickBooks Payroll job costing",
    "crew overtime payroll",
    "Gusto payroll",
  ],
};

export default function BestForConcreteContractorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
