import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HOME_SERVICES_PAGE_PROPS } from "@/lib/data/payrollBestForHomeServices";

export default function BestPayrollForHomeServicesPage() {
  return <BestForPageWithStructuredData {...HOME_SERVICES_PAGE_PROPS} />;
}
