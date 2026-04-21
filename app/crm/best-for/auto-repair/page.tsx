import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { AUTO_REPAIR_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForAutoRepairPage() {
  return <BestForPageWithStructuredData {...AUTO_REPAIR_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best CRM Software for Auto Repair Shops (2026)"),
    description:
      "Compare CRM tools for auto repair: service advisor workflows, declined work follow-up, fleet and commercial accounts, and marketing to your customer database.",
    keywords: [
      "CRM for auto repair shop",
      "automotive shop CRM software",
      "best CRM for auto service advisors",
      "fleet account CRM auto repair",
      "auto shop customer marketing CRM",
    ],
  };
}
