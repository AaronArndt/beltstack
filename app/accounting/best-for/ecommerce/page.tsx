import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { ECOMMERCE_PAGE_PROPS } from "@/lib/data/accountingBestForEcommerce";

export default function BestAccountingForEcommercePage() {
  return <BestForPageWithStructuredData {...ECOMMERCE_PAGE_PROPS} />;
}
