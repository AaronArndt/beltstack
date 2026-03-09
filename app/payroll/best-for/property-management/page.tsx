import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PROPERTY_MANAGEMENT_PAGE_PROPS } from "@/lib/data/payrollBestForPropertyManagement";

export default function BestPayrollForPropertyManagementPage() {
  return <BestForPageWithStructuredData {...PROPERTY_MANAGEMENT_PAGE_PROPS} />;
}
