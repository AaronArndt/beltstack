import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { AUTO_REPAIR_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForAutoRepairPage() {
  return <BestForPageWithStructuredData {...AUTO_REPAIR_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/auto-repair",
      title: buildBestForMetaTitle("Best Scheduling Software for Auto Repair Shops (2026)"),
      description:
        "Compare scheduling software for auto repair shops: Setmore, Square Appointments, and Acuity Scheduling for bay booking, symptom intake, fleet accounts, and reminders.",
    }),
    keywords: [
      "auto repair scheduling software",
      "garage appointment booking",
      "car shop online scheduling",
      "mechanic bay calendar software",
      "2026",
    ],
  };
}
