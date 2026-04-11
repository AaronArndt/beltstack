import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { JUNK_REMOVAL_PAGE_PROPS } from "@/lib/data/payrollBestForJunkRemoval";

export default function BestPayrollForJunkRemovalPage() {
  return <BestForPageWithStructuredData {...JUNK_REMOVAL_PAGE_PROPS} />;
}
