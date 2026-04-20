import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForConstructionPage() {
  return <BestForPageWithStructuredData {...CONSTRUCTION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/construction",
      title: "Best Field Service Software for Construction Companies (2026) | BeltStack",
      description:
        "Compare field service software for construction companies: ServiceTrade, BuildOps, and Simpro for site visits, commercial field ops, documentation, and billing.",
    }),
    keywords: [
      "field service software for construction",
      "construction field management",
      "commercial field service",
      "construction scheduling software",
      "FSM for contractors",
      "2026",
    ],
  };
}
