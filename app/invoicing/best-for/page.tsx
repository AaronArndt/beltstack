import { BestForHubRelatedLinks, BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import {
  getInvoicingBestForHubGeneralLinks,
  getInvoicingBestForHubTradeLinks,
  INVOICING_BEST_FOR_ROUNDUP_HUB_LINK,
} from "@/lib/data/invoicingBestForHub";

export default function InvoicingBestForPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Invoicing"
      categoryHref="/invoicing"
      breadcrumbCurrent="Best for"
      title="Best Invoicing Software by Use Case"
      intro="Find invoicing software that fits your situation—from freelancers and consultants to trade-specific picks for HVAC, plumbing, electricians, construction, and other field-service businesses."
      roundupLink={INVOICING_BEST_FOR_ROUNDUP_HUB_LINK}
      generalCards={getInvoicingBestForHubGeneralLinks()}
      tradeCards={getInvoicingBestForHubTradeLinks()}
      cardCta="See picks →"
      afterDirectory={
        <BestForHubRelatedLinks
          title="Related links"
          sub="More invoicing resources."
          links={[
            { href: "/invoicing", label: "Invoicing hub" },
            { href: "/invoicing/compare", label: "Compare invoicing software" },
            { href: "/invoicing/guides", label: "Invoicing guides" },
          ]}
        />
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Invoicing Software by Use Case | BeltStack",
    description:
      "Browse best invoicing software by use case and trade: freelancers, small business, agencies, contractors, consultants, HVAC, plumbing, electricians, construction, and more.",
  };
}
