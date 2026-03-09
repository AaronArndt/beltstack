import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { PLUMBING_PAGE_PROPS } from "@/lib/data/payrollBestForPlumbing";

export default function BestPayrollForPlumbingPage() {
  return <BestForPageWithStructuredData {...PLUMBING_PAGE_PROPS} />;
}
