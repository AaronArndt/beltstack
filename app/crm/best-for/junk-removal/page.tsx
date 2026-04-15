import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { JUNK_REMOVAL_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForJunkRemovalPage() {
  return <BestForPageWithStructuredData {...JUNK_REMOVAL_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Junk Removal Businesses (2026) | BeltStack",
    description:
      "Compare the best CRM software for junk removal: Close, Pipedrive, HubSpot. Phone-heavy booking, commercial accounts, inbound marketing, and sales pipeline beside dispatch.",
    keywords: [
      "CRM for junk removal",
      "junk removal business CRM",
      "best CRM for junk hauling",
    ],
  };
}
