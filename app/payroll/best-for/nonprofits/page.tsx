import { BestForTemplate } from "@/components/best/BestForTemplate";
import { NONPROFITS_PAGE_PROPS } from "@/lib/data/payrollBestForNonprofits";

export default function BestPayrollForNonprofitsPage() {
  return <BestForTemplate {...NONPROFITS_PAGE_PROPS} />;
}
