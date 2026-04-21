import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForJunkRemovalPage() {
  return <BestForPageWithStructuredData {...JUNK_REMOVAL_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/junk-removal",
      title: buildBestForMetaTitle("Best Field Service Software for Junk Removal Businesses (2026)"),
      description:
        "Compare field service software for junk removal: Jobber, Workiz, and Kickserv for truck scheduling, load-size quoting, deposits, and on-site invoicing.",
    }),
    keywords: [
      "junk removal software",
      "junk hauling scheduling software",
      "field service software junk removal",
      "haul away dispatch",
      "FSM for junk removal",
      "2026",
    ],
  };
}
