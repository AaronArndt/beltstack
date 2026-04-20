import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForRoofingPage() {
  return <BestForPageWithStructuredData {...ROOFING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/roofing",
      title: "Best Field Service Software for Roofing Companies (2026) | BeltStack",
      description:
        "Compare field service software for roofing companies: ServiceTitan, Jobber, and Housecall Pro for inspections, crew scheduling, supplements, photos, and invoicing.",
    }),
    keywords: [
      "field service software for roofers",
      "roofing contractor software",
      "roofing dispatch software",
      "FSM for roofing",
      "roofing CRM scheduling",
      "2026",
    ],
  };
}
