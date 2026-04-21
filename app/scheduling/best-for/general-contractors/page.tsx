import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GENERAL_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForGeneralContractorsPage() {
  return <BestForPageWithStructuredData {...GENERAL_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for General Contractors (2026)"),
    description:
      "Compare scheduling tools for general contractors: site visits, retainers, multi-coordinator booking. Square Appointments, Acuity Scheduling, Setmore.",
  };
}
