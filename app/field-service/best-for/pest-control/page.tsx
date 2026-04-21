import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForPestControlPage() {
  return <BestForPageWithStructuredData {...PEST_CONTROL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/pest-control",
      title: buildBestForMetaTitle("Best Field Service Software for Pest Control Businesses (2026)"),
      description:
        "Compare field service software for pest control: WorkWave Service, Housecall Pro, and Jobber for recurring routes, treatment notes, renewals, and invoicing.",
    }),
    keywords: [
      "pest control field service software",
      "pest control routing software",
      "pest control scheduling",
      "FSM for pest control",
      "recurring service routes",
      "2026",
    ],
  };
}
