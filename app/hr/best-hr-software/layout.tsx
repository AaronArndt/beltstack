import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/hr/best-hr-software",
  title: "Best HR Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best HR software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestHrSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
