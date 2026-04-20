import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForHandymanPage() {
  return <BestForPageWithStructuredData {...HANDYMAN_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/handyman",
      title: "Best Field Service Software for Handyman Businesses (2026) | BeltStack",
      description:
        "Compare field service software for handyman businesses: Workiz, Housecall Pro, and Kickserv for stacked jobs, dispatch, estimates, and mobile invoicing.",
    }),
    keywords: [
      "field service software for handyman",
      "handyman scheduling software",
      "handyman business software",
      "FSM for handyman",
      "home repair dispatch",
      "2026",
    ],
  };
}
