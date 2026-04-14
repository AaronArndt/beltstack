import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/accounting/best-for/ecommerce",
  title: "Best Accounting Software for Ecommerce (2026) | BeltStack",
  description:
    "Find the best accounting software for ecommerce businesses. Compare features, pricing, pros and cons, and the top tools for your business.",
});

export default function BestForEcommerceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
