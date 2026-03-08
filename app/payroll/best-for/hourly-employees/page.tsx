import { BestForTemplate } from "@/components/best/BestForTemplate";
import { HOURLY_EMPLOYEES_PAGE_PROPS } from "@/lib/data/payrollBestForHourlyEmployees";

export default function BestPayrollForHourlyEmployeesPage() {
  return <BestForTemplate {...HOURLY_EMPLOYEES_PAGE_PROPS} />;
}
