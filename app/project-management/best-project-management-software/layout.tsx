import type { Metadata } from "next";
import { siteMetadata } from "@/lib/seo/siteMetadata";
import { getBestSoftwareRoundupMeta } from "@/lib/seo/bestSoftwareRoundupMeta";

export const metadata: Metadata = siteMetadata(getBestSoftwareRoundupMeta("project-management"));

export default function BestProjectManagementSoftwareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
