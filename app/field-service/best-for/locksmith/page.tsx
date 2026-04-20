import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { LOCKSMITH_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForLocksmithPage() {
  return <BestForPageWithStructuredData {...LOCKSMITH_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/locksmith",
      title: "Best Field Service Software for Locksmith Businesses (2026) | BeltStack",
      description:
        "Compare field service software for locksmiths: Workiz, Kickserv, and Jobber for high-volume mobile jobs, fleet accounts, after-hours billing, and field invoicing.",
    }),
    keywords: [
      "locksmith FSM software",
      "mobile locksmith dispatch",
      "locksmith job management",
      "field service locksmith app",
      "2026",
    ],
  };
}
