import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { APPLIANCE_REPAIR_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForApplianceRepairPage() {
  return <BestForPageWithStructuredData {...APPLIANCE_REPAIR_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Appliance Repair Businesses (2026)"),
    description:
      "Compare CRM tools for appliance repair: warranty and COD leads, estimate follow-up, membership and extended-service renewals, and marketing when seasonal demand spikes.",
    keywords: [
      "CRM for appliance repair",
      "appliance repair CRM software",
      "best CRM for appliance service business",
      "appliance service lead tracking",
      "CRM for home service warranty leads",
    ],
  };
}
