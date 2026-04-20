import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForPropertyManagementPage() {
  return <BestForPageWithStructuredData {...PROPERTY_MANAGEMENT_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/property-management",
      title: "Best Field Service Software for Property Management Companies (2026) | BeltStack",
      description:
        "Compare field service software for property management: Zuper, Connecteam, and Jobber for work orders, vendor coordination, tenant communication, and billing.",
    }),
    keywords: [
      "field service software for property management",
      "property maintenance software",
      "work order software property managers",
      "FSM for property management",
      "vendor maintenance scheduling",
      "2026",
    ],
  };
}
