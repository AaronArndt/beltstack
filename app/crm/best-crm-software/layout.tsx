import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/crm/best-crm-software",
  title: "Best CRM Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best CRM software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestCrmSoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
