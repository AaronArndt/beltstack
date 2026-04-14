import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export const metadata: Metadata = siteMetadata({
  path: "/helpdesk/best-helpdesk-software",
  title: "Best Helpdesk Software for Small Businesses (2026) | BeltStack",
  description:
    "Compare the best helpdesk software for small businesses. Review pricing, features, pros and cons, and top picks.",
});

export default function BestHelpdeskSoftwareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
