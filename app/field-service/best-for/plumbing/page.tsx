import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PLUMBING_PAGE_PROPS } from "@/lib/data/fieldServiceBestForPlumbing";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForPlumbingPage() {
  return <BestForPageWithStructuredData {...PLUMBING_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/plumbing",
      title: "Best Field Service Software for Plumbing Companies (2026) | BeltStack",
      description:
        "Compare field service software for plumbing companies: Service Fusion, Jobber, and Kickserv for dispatch, service agreements, estimates, invoicing, and customer history.",
    }),
    keywords: [
      "field service software for plumbing",
      "plumbing dispatch software",
      "plumbing FSM",
      "plumbing scheduling software",
      "plumbing contractors software",
      "field service management",
      "2026",
    ],
  };
}

