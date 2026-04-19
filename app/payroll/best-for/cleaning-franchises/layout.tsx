import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

const base = siteMetadata({
  path: "/payroll/best-for/cleaning-franchises",
  title: "Best Payroll Software for Cleaning Franchises (2026) | BeltStack",
  description:
    "Payroll for cleaning franchises: Rippling multi-entity HR, Gusto franchisee payroll, ADP serviced payroll, and OnPay transparent pricing for territories.",
});

export const metadata: Metadata = {
  ...base,
  keywords: [
    "cleaning franchise payroll",
    "janitorial payroll software",
    "Rippling payroll",
    "franchise HR payroll",
    "Gusto payroll",
    "ADP payroll",
  ],
};

export default function BestForCleaningFranchisesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
