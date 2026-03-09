import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { MAINTENANCE_COMPANIES_PAGE_PROPS } from "@/lib/data/payrollBestForMaintenanceCompanies";

export default function BestPayrollForMaintenanceCompaniesPage() {
  return <BestForPageWithStructuredData {...MAINTENANCE_COMPANIES_PAGE_PROPS} />;
}
