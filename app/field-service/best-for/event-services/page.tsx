import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { EVENT_SERVICES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForEventServicesPage() {
  return <BestForPageWithStructuredData {...EVENT_SERVICES_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/event-services",
      title: buildBestForMetaTitle("Best Field Service Software for Event Services (2026)"),
      description:
        "Compare field service software for event services: Zuper, Jobber, and Connecteam for crew jobs, equipment workflows, venue checklists, shift coordination, and billing.",
    }),
    keywords: [
      "event services FSM",
      "AV crew field software",
      "event rental job management",
      "staging company dispatch software",
      "2026",
    ],
  };
}
