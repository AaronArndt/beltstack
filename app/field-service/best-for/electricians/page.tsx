import type { Metadata } from "next";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ELECTRICIANS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForElectricians";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForElectriciansPage() {
  return <BestForPageWithStructuredData {...ELECTRICIANS_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/electricians",
      title: buildBestForMetaTitle("Best Field Service Software for Electricians (2026)"),
      description:
        "Compare field service software for electricians: FieldPulse, Jobber, and Workiz for dispatch, estimates, field documentation, and invoicing.",
    }),
    keywords: [
      "field service software for electricians",
      "electrical contractor software",
      "electrician dispatch software",
      "FSM for electricians",
      "electrical scheduling software",
      "field service management",
      "2026",
    ],
  };
}

