import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { CONTRACTORS_PAGE_PROPS } from "@/lib/data/accountingBestForContractors";

export default function BestAccountingForContractorsPage() {
  return <BestForPageWithStructuredData {...CONTRACTORS_PAGE_PROPS} />;
}
