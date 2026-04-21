import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HOME_INSPECTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForHomeInspectorsPage() {
  return <BestForPageWithStructuredData {...HOME_INSPECTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/home-inspectors",
      title: buildBestForMetaTitle("Best Field Service Software for Home Inspectors (2026)"),
      description:
        "Compare field service software for home inspectors: Jobber, Kickserv, and Housecall Pro for multi-inspector firms, agent pipelines, long inspection blocks, and client communication.",
    }),
    keywords: [
      "home inspection FSM software",
      "inspector job management",
      "multi-inspector scheduling software",
      "real estate inspection field service",
      "2026",
    ],
  };
}
