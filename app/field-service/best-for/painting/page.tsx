import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForPaintingPage() {
  return <BestForPageWithStructuredData {...PAINTING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/painting",
      title: buildBestForMetaTitle("Best Field Service Software for Painting Contractors (2026)"),
      description:
        "Compare field service software for painting contractors: Jobber, Housecall Pro, and Kickserv for crew scheduling, estimates, production phases, change orders, and invoicing.",
    }),
    keywords: [
      "field service software for painters",
      "painting contractor software",
      "painting crew scheduling",
      "FSM for painting contractors",
      "field service management",
      "2026",
    ],
  };
}
