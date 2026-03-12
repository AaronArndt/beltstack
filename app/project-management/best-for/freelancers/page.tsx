import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { FREELANCERS_PAGE_PROPS } from "@/lib/data/projectManagementBestForFreelancers";

export default function BestProjectManagementForFreelancersPage() {
  return <BestForPageWithStructuredData {...FREELANCERS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Project Management Software for Freelancers (2026) | BeltStack",
    description:
      "Compare the best project management software for freelancers: Trello, Notion, ClickUp. Simple boards, tasks, and free tiers for solo and client work.",
  };
}
