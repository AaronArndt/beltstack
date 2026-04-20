import type { Metadata } from "next";
import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONCRETE_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS } from "@/lib/data/schedulingBestForTrades";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function BestSchedulingForConcreteContractorsPage() {
  return <BestForPageWithStructuredData {...CONCRETE_CONTRACTORS_SCHEDULING_BEST_FOR_PAGE_PROPS} />;
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/scheduling/best-for/concrete-contractors",
      title: "Best Scheduling Software for Concrete Contractors (2026) | BeltStack",
      description:
        "Compare scheduling software for concrete contractors: Acuity Scheduling, Calendly, and Setmore for site walks, pour holds, weather-aware messaging, and deposits.",
    }),
    keywords: [
      "concrete contractor scheduling software",
      "concrete pour appointment booking",
      "construction site visit scheduling",
      "concrete estimate calendar",
      "2026",
    ],
  };
}
