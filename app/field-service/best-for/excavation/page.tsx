import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { EXCAVATION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForExcavationPage() {
  return <BestForPageWithStructuredData {...EXCAVATION_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/excavation",
      title: "Best Field Service Software for Excavation Companies (2026) | BeltStack",
      description:
        "Compare field service software for excavation companies: BuildOps, ServiceTrade, and Simpro for site documentation, commercial programs, locate workflows, and structured earthwork jobs.",
    }),
    keywords: [
      "excavation FSM software",
      "earthwork contractor field service",
      "excavator job documentation software",
      "site walk field management",
      "2026",
    ],
  };
}
