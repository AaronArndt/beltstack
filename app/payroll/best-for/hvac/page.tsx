import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HVAC_PAGE_PROPS } from "@/lib/data/payrollBestForHvac";

export default function BestPayrollForHvacPage() {
  return <BestForPageWithStructuredData {...HVAC_PAGE_PROPS} />;
}
