import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ROOFING_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForRoofingPage() {
  return <BestForPageWithStructuredData {...ROOFING_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Roofing Companies (2026)"),
    description:
      "Compare scheduling software for roofers: inspections, crew days, deposits, storm-season demand. Square, Acuity, Setmore and field service considerations.",
  };
}
