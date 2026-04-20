import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GARAGE_DOOR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForGarageDoorPage() {
  return <BestForPageWithStructuredData {...GARAGE_DOOR_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/garage-door",
      title: "Best Field Service Software for Garage Door Companies (2026) | BeltStack",
      description:
        "Compare field service software for garage door companies: FieldPulse, Jobber, and Housecall Pro for multi-crew dispatch, install intake, emergency vs routine jobs, and homeowner communication.",
    }),
    keywords: [
      "garage door FSM software",
      "garage door company dispatch",
      "field service garage door installers",
      "door repair job management",
      "2026",
    ],
  };
}
