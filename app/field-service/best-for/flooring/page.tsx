import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FLOORING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForFlooringPage() {
  return <BestForPageWithStructuredData {...FLOORING_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/flooring",
      title: "Best Field Service Software for Flooring Contractors (2026) | BeltStack",
      description:
        "Compare field service software for flooring contractors: Simpro, Jobber, and Housecall Pro for measures, phased installs, change orders, progress billing, and homeowner CX.",
    }),
    keywords: [
      "flooring contractor FSM",
      "floor install job software",
      "field service flooring business",
      "measure to install workflow software",
      "2026",
    ],
  };
}
