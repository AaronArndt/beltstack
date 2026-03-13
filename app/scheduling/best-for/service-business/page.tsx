import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { SERVICE_BUSINESS_PAGE_PROPS } from "@/lib/data/schedulingBestFor";

export default function BestSchedulingForServiceBusinessPage() {
  return <BestForPageWithStructuredData {...SERVICE_BUSINESS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: "Best Scheduling Software for Service Businesses (2026) | BeltStack",
    description:
      "Compare the best scheduling software for service businesses: Square Appointments, Acuity Scheduling, Setmore. Staff scheduling, recurring appointments, and payments.",
  };
}
