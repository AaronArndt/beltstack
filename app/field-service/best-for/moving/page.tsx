import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForMovingPage() {
  return <BestForPageWithStructuredData {...MOVING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/moving",
      title: buildBestForMetaTitle("Best Field Service Software for Moving Companies (2026)"),
      description:
        "Compare field service software for movers: Service Fusion, Simpro, and Jobber for surveys, crew scheduling, deposits, and job-day billing.",
    }),
    keywords: [
      "moving company software",
      "moving business scheduling software",
      "field service software movers",
      "local moving dispatch",
      "FSM for moving companies",
      "2026",
    ],
  };
}
