import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONCRETE_CONTRACTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS } from "@/lib/data/fieldServiceBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestFieldServiceForConcreteContractorsPage() {
  return <BestForPageWithStructuredData {...CONCRETE_CONTRACTORS_FIELD_SERVICE_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for/concrete-contractors",
      title: "Best Field Service Software for Concrete Contractors (2026) | BeltStack",
      description:
        "Compare field service software for concrete contractors: BuildOps, Simpro, and Jobber for commercial programs, phased pours, progress billing, and residential flatwork.",
    }),
    keywords: [
      "concrete contractor FSM",
      "concrete pour job software",
      "field service concrete business",
      "flatwork contractor dispatch",
      "2026",
    ],
  };
}
