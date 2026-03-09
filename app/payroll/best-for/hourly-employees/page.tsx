import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HOURLY_EMPLOYEES_PAGE_PROPS } from "@/lib/data/payrollBestForHourlyEmployees";

export default function BestPayrollForHourlyEmployeesPage() {
  return <BestForPageWithStructuredData {...HOURLY_EMPLOYEES_PAGE_PROPS} />;
}
