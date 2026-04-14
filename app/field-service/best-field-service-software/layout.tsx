import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/field-service/best-field-service-software",
  title: "Best Field Service Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best field service software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestFieldServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

