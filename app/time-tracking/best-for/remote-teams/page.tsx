import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { REMOTE_TEAMS_PAGE_PROPS } from "@/lib/data/timeTrackingBestForRemoteTeams";

export default function BestTimeTrackingForRemoteTeamsPage() {
  return <BestForPageWithStructuredData {...REMOTE_TEAMS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Time Tracking Software for Remote Teams (2026) | BeltStack",
    description:
      "Compare the best time tracking software for remote teams: Hubstaff, Time Doctor, Clockify. Monitoring options, GPS, and reporting for distributed teams.",
  };
}

