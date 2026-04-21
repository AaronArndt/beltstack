import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForRemodelingPage() {
  return <BestForPageWithStructuredData {...REMODELING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/remodeling",
      title: buildBestForMetaTitle("Best Field Service Software for Remodeling Businesses (2026)"),
      description:
        "Compare field service software for remodelers: Jobber, Simpro, and Housecall Pro for phased jobs, change orders, selections, progress billing, and client communication.",
    }),
    keywords: [
      "field service software for remodeling",
      "remodeling contractor software",
      "remodel project scheduling",
      "FSM for remodelers",
      "change order software",
      "2026",
    ],
  };
}
