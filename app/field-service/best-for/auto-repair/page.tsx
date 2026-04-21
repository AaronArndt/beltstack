import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AUTO_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForAutoRepairPage() {
  return <BestForPageWithStructuredData {...AUTO_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/auto-repair",
      title: buildBestForMetaTitle("Best Field Service Software for Auto Repair Shops (2026)"),
      description:
        "Compare field service software for auto repair shops: FieldPulse, Workiz, and ServiceTitan for bay dispatch, RO-style jobs, parts notes, and high-volume shop analytics.",
    }),
    keywords: [
      "auto repair FSM software",
      "garage dispatch software",
      "independent shop job management",
      "automotive field service",
      "2026",
    ],
  };
}
