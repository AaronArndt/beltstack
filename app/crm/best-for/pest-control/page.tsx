import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PEST_CONTROL_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForPestControlPage() {
  return <BestForPageWithStructuredData {...PEST_CONTROL_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Pest Control Businesses (2026) | BeltStack",
    description:
      "Compare the best CRM software for pest control: Keap, HubSpot, Freshsales. Commercial account development, route upsells, marketing campaigns, and phone-first B2B sales.",
    keywords: [
      "CRM for pest control",
      "pest control CRM software",
      "best CRM for pest control company",
    ],
  };
}
