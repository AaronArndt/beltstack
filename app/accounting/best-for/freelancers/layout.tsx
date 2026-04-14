import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/accounting/best-for/freelancers",
  title: "Best Accounting Software for Freelancers (2026) | BeltStack",
  description:
    "Find the best accounting software for freelancers. Compare features, pricing, pros and cons, and the top tools for your business.",
});

export default function BestForFreelancersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
