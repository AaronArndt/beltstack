import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOBILE_MECHANICS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForMobileMechanicsPage() {
  return <BestForPageWithStructuredData {...MOBILE_MECHANICS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/mobile-mechanics",
      title: buildBestForMetaTitle("Best Field Service Software for Mobile Mechanics (2026)"),
      description:
        "Compare field service software for mobile mechanics: Workiz, Housecall Pro, and Kickserv for roadside jobs, fleet accounts, on-site invoicing, and customer communication.",
    }),
    keywords: [
      "mobile mechanic FSM",
      "roadside mechanic software",
      "mobile auto repair dispatch",
      "fleet mechanic job tracking",
      "2026",
    ],
  };
}
