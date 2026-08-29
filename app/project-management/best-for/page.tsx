import Link from "next/link";
import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import {
  getProjectManagementBestForHubGeneralLinks,
  getProjectManagementBestForHubTradeLinks,
  PROJECT_MANAGEMENT_BEST_FOR_ROUNDUP_HUB_LINK,
} from "@/lib/data/projectManagementBestForHub";

export default function ProjectManagementBestForHubPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Project Management"
      categoryHref="/project-management"
      breadcrumbCurrent="Best For"
      title="Best Project Management Software by Use Case"
      intro="Scenario-based picks for freelancers, growing teams, agencies, remote work—and for trades and service businesses that need clear job phases, handoffs, and documentation alongside day-to-day work."
      roundupLink={PROJECT_MANAGEMENT_BEST_FOR_ROUNDUP_HUB_LINK}
      generalCards={getProjectManagementBestForHubGeneralLinks()}
      tradeCards={getProjectManagementBestForHubTradeLinks()}
      cardCta="Open →"
      directoryFooter={
        <p className="text-sm text-[#57534E]">
          <Link href="/project-management" className="font-semibold text-[#10B981] hover:underline">
            Project management hub
          </Link>{" "}
          ·{" "}
          <Link href="/project-management/compare" className="font-semibold text-[#10B981] hover:underline">
            All comparisons
          </Link>
        </p>
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software by Use Case | BeltStack",
    description:
      "Find project management tools by scenario: freelancers, small business, startups, agencies, remote teams, and trades from HVAC to construction and property management.",
  };
}
