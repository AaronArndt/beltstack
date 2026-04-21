import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CLEANING_FRANCHISES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForCleaningFranchisesPage() {
  return <BestForPageWithStructuredData {...CLEANING_FRANCHISES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/cleaning-franchises",
      title: buildBestForMetaTitle("Best Field Service Software for Cleaning Franchises (2026)"),
      description:
        "Compare field service software for cleaning franchises: Zuper, Connecteam, and Jobber for multi-territory workflows, workforce scheduling, recurring jobs, and franchisee rollout.",
    }),
    keywords: [
      "cleaning franchise FSM",
      "maid franchise field service software",
      "multi-location cleaning job software",
      "franchise cleaning dispatch",
      "2026",
    ],
  };
}
