import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { EVENT_SERVICES_PAGE_PROPS } from "@/lib/data/payrollBestForExtendedServiceTrades2026";

export default function BestPayrollForEventServicesPage() {
  return <BestForPageWithStructuredData {...EVENT_SERVICES_PAGE_PROPS} />;
}
