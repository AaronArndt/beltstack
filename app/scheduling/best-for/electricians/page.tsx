import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ELECTRICIANS_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";

export default function BestSchedulingForElectriciansPage() {
  return <BestForPageWithStructuredData {...ELECTRICIANS_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Scheduling Software for Electricians (2026)"),
    description:
      "Compare scheduling software for electrical contractors: crew calendars, service types, deposits, reminders. Square, Acuity, Setmore—and when to choose FSM.",
  };
}
