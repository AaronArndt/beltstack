import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForContractors";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/contractors",
      title: buildBestForMetaTitle("Best Field Service Software for General Contractors (2026)"),
      description:
        "Compare field service software for general contractors: Simpro, BuildOps, and Jobber for mixed-trade jobs, scheduling, change orders, and invoicing.",
    }),
    keywords: [
      "field service software for general contractors",
      "GC field service management",
      "contractor dispatch software",
      "multi-trade FSM",
      "construction field software",
      "2026",
    ],
  };
}

