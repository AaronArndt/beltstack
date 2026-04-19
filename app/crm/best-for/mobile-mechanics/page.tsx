import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MOBILE_MECHANICS_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForMobileMechanicsPage() {
  return <BestForPageWithStructuredData {...MOBILE_MECHANICS_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Mobile Mechanics (2026) | BeltStack",
    description:
      "Compare CRM tools for mobile mechanics: fast lead response, simple pipelines for fleet and repeat clients, and lightweight CRM that fits van-first work.",
    keywords: [
      "CRM for mobile mechanic",
      "mobile auto repair CRM",
      "best CRM for roadside mechanic",
      "fleet lead CRM mobile mechanic",
      "van business sales pipeline",
    ],
  };
}
