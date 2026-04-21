import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { GENERAL_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForGeneralContractorsPage() {
  return <BestForPageWithStructuredData {...GENERAL_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for General Contractors (2026)"),
    description:
      "Compare the best CRM software for general contractors: Salesforce, HubSpot, Monday. Pursuits, multi-stakeholder bids, BD reporting, and flexible pipelines for GC sales teams.",
    keywords: [
      "CRM for general contractors",
      "construction CRM for GC",
      "best CRM for construction sales",
    ],
  };
}
