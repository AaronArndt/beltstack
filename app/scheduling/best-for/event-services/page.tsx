import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { EVENT_SERVICES_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForEventServicesPage() {
  return <BestForPageWithStructuredData {...EVENT_SERVICES_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/event-services",
      title: buildBestForMetaTitle("Best Scheduling Software for Event Services (2026)"),
      description:
        "Compare scheduling software for event services: Acuity Scheduling, Calendly, and YouCanBook.me for consults, retainers, vendor walkthroughs, and pooled producer calendars.",
    }),
    keywords: [
      "event services scheduling software",
      "wedding vendor booking software",
      "catering appointment scheduling",
      "AV event company calendar",
      "2026",
    ],
  };
}
