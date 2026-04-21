import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForLandscapingPage() {
  return <BestForPageWithStructuredData {...LANDSCAPING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/landscaping",
      title: buildBestForMetaTitle("Best Field Service Software for Landscaping Companies (2026)"),
      description:
        "Compare field service software for landscapers: WorkWave Service, Jobber, and Workiz for recurring routes, crew scheduling, installs, cleanups, and invoicing.",
    }),
    keywords: [
      "field service software for landscaping",
      "landscaping scheduling software",
      "lawn care routing software",
      "landscape contractor FSM",
      "field service management",
      "2026",
    ],
  };
}
