import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONCRETE_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS } from "@/lib/data/crmBestForTrades";

export default function BestCrmForConcreteContractorsPage() {
  return <BestForPageWithStructuredData {...CONCRETE_CONTRACTORS_CRM_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best CRM Software for Concrete Contractors (2026) | BeltStack",
    description:
      "Compare CRM tools for concrete contractors: commercial and residential pursuits, bid calendars, and relationship tracking with GCs, owners, and municipalities.",
    keywords: [
      "CRM for concrete contractors",
      "concrete business development CRM",
      "best CRM for concrete sales",
      "construction pursuit CRM",
      "flatwork contractor pipeline",
    ],
  };
}
