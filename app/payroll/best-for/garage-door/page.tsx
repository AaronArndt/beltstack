import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { GARAGE_DOOR_PAGE_PROPS } from "@/lib/data/payrollBestForExtendedServiceTrades2026";

export default function BestPayrollForGarageDoorPage() {
  return <BestForPageWithStructuredData {...GARAGE_DOOR_PAGE_PROPS} />;
}
