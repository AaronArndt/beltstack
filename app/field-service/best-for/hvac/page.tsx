import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_PAGE_PROPS } from "@/lib/data/fieldServiceBestForHvac";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/hvac",
      title: "Best Field Service Software for HVAC Businesses (2026) | BeltStack",
      description:
        "Compare the best field service software for HVAC companies: Housecall Pro, ServiceTitan, and Service Fusion for dispatch, maintenance agreements, memberships, and emergency calls.",
    }),
    keywords: [
      "field service software for HVAC",
      "HVAC field service management",
      "HVAC dispatch software",
      "HVAC scheduling software",
      "maintenance agreements software",
      "FSM for HVAC contractors",
      "2026",
    ],
  };
}

