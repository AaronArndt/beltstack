import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { APPLIANCE_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForApplianceRepairPage() {
  return <BestForPageWithStructuredData {...APPLIANCE_REPAIR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/appliance-repair",
      title: buildBestForMetaTitle("Best Field Service Software for Appliance Repair Businesses (2026)"),
      description:
        "Compare field service software for appliance repair: Housecall Pro, Jobber, and Service Fusion for warranty vs COD workflows, parts-return visits, multi-tech dispatch, and invoicing.",
    }),
    keywords: [
      "field service software appliance repair",
      "appliance repair FSM",
      "appliance technician dispatch software",
      "warranty repair job tracking",
      "2026",
    ],
  };
}
