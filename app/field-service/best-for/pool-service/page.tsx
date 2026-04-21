import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForPoolServicePage() {
  return <BestForPageWithStructuredData {...POOL_SERVICE_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/pool-service",
      title: buildBestForMetaTitle("Best Field Service Software for Pool Service Companies (2026)"),
      description:
        "Compare field service software for pool service: FieldPulse, Housecall Pro, and Workiz for weekly routes, chemical logs, open/close packages, and repairs.",
    }),
    keywords: [
      "pool service software",
      "pool route scheduling software",
      "pool cleaning business software",
      "FSM for pool service",
      "field service management",
      "2026",
    ],
  };
}
