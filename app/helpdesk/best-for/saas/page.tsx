import { BestForPageWithStructuredData } from "@/components/best/BestForPageWithStructuredData";
import { buildBestForMetaTitle } from "@/lib/seo/bestForTitles";
import { SAAS_PAGE_PROPS } from "@/lib/data/helpdeskBestFor";

export default function BestHelpdeskForSaaSPage() {
  return <BestForPageWithStructuredData {...SAAS_PAGE_PROPS} />;
}

export function generateMetadata() {
  return {
    title: buildBestForMetaTitle("Best Helpdesk Software for SaaS Companies (2026)"),
    description:
      "Helpdesk for SaaS: Zendesk, Intercom, Help Scout. Ticketing, customer lifecycle context, integrations, and self-serve support.",
  };
}
