import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { HELPDESK_TRADE_BEST_FOR_BY_SLUG, HELPDESK_TRADE_METADATA_BY_SLUG } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForLocksmithPage() {
  return <BestForPageWithStructuredData {...HELPDESK_TRADE_BEST_FOR_BY_SLUG.locksmith} />;
}

export function generateMetadata() {
  return HELPDESK_TRADE_METADATA_BY_SLUG.locksmith;
}
