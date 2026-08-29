import type { Metadata } from "next";
import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import {
  FIELD_SERVICE_BEST_FOR_ROUNDUP_HUB_LINK,
  getFieldServiceBestForHubScenarioLinks,
} from "@/lib/data/fieldServiceBestForHub";
import { siteMetadata } from "@/lib/seo/siteMetadata";

export default function FieldServiceBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Field Service"
      categoryHref="/field-service"
      breadcrumbCurrent="Best For"
      title="Best Field Service Software by Use Case"
      intro="Scenario-based picks for contractors, trades, and service businesses—dispatch, mobile workflows, and job management without overbuying."
      roundupLink={FIELD_SERVICE_BEST_FOR_ROUNDUP_HUB_LINK}
      ungroupedCards={getFieldServiceBestForHubScenarioLinks()}
      ungroupedTitle="Pick your situation"
      ungroupedSub="Jump to a scenario."
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href="/field-service/compare" className="font-semibold text-[#10B981] hover:underline">
            All field service comparisons
          </Link>
        </p>
      }
    />
  );
}

export function generateMetadata(): Metadata {
  return {
    ...siteMetadata({
      path: "/field-service/best-for",
      title: "Best Field Service Software by Use Case (2026) | BeltStack",
      description:
        "Find field service management software by trade and business type: HVAC, plumbing, electrical, general contractors, painting, roofing, construction, landscaping, property management, pest control, pool service, junk removal, movers, and more.",
    }),
    keywords: [
      "best field service software",
      "field service management by industry",
      "FSM software for contractors",
      "field service software 2026",
      "BeltStack field service",
    ],
  };
}
