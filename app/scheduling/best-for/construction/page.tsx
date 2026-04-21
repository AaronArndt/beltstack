import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONSTRUCTION_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForConstructionPage() {
  return <BestForPageWithStructuredData {...CONSTRUCTION_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Construction Companies (2026)"),
    description:
      "Compare scheduling tools for construction: site meetings, safety intake, travel buffers, multi-role booking. Square, Acuity, Setmore vs construction PM.",
  };
}
