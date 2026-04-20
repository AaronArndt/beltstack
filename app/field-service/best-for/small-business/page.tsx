import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SMALL_BUSINESS_PAGE_PROPS } from "@/lib/data/fieldServiceBestForSmallBusiness";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForSmallBusinessPage() {
  return <BestForPageWithStructuredData {...SMALL_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/small-business",
      title: "Best Field Service Software for Small Businesses (2026) | BeltStack",
      description:
        "Compare field service software for small businesses: Jobber, Kickserv, and Workiz for scheduling, dispatch, invoicing, and customer history without enterprise complexity.",
    }),
    keywords: [
      "field service software small business",
      "small business FSM",
      "field service management SMB",
      "service business scheduling software",
      "dispatch software small team",
      "2026",
    ],
  };
}

