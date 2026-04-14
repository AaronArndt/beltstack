import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/accounting/best-for/contractors",
  title: "Best Accounting Software for Contractors (2026) | BeltStack",
  description:
    "Find the best accounting software for contractors. Compare features, pricing, pros and cons, and the top tools for your business.",
});

export default function BestForContractorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
