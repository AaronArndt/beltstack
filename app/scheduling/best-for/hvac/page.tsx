import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/hvac",
      title: "Best Scheduling Software for HVAC Businesses (2026) | BeltStack",
      description:
        "Compare scheduling software for HVAC: Square Appointments, Acuity Scheduling, and YouCanBook.me for multi-tech booking, tune-up packages, intake, reminders, and when to add field service software.",
    }),
    keywords: [
      "HVAC scheduling software",
      "HVAC appointment booking",
      "maintenance plan scheduling",
      "multi-tech HVAC calendar",
      "scheduling vs field service HVAC",
      "2026",
    ],
  };
}
