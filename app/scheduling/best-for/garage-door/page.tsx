import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GARAGE_DOOR_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForGarageDoorPage() {
  return <BestForPageWithStructuredData {...GARAGE_DOOR_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/garage-door",
      title: "Best Scheduling Software for Garage Door Companies (2026) | BeltStack",
      description:
        "Compare scheduling software for garage door companies: Acuity Scheduling, Calendly, and YouCanBook.me for install intake, emergency vs routine booking, and multi-crew calendars.",
    }),
    keywords: [
      "garage door scheduling software",
      "garage door company booking",
      "Acuity garage door intake",
      "multi-crew appointment scheduling",
      "2026",
    ],
  };
}
