import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { APPLIANCE_REPAIR_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForApplianceRepairPage() {
  return <BestForPageWithStructuredData {...APPLIANCE_REPAIR_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/appliance-repair",
      title: buildBestForMetaTitle("Best Scheduling Software for Appliance Repair Businesses (2026)"),
      description:
        "Compare scheduling software for appliance repair: Square Appointments, Acuity Scheduling, and Setmore for model intake, multi-tech booking, warranty vs COD flows, and reminders.",
    }),
    keywords: [
      "scheduling software appliance repair",
      "appliance repair booking software",
      "field appointment scheduling repair",
      "Square Appointments repair shop",
      "Acuity appliance intake",
      "2026",
    ],
  };
}
