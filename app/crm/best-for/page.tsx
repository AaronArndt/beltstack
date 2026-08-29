import { BestForHubRelatedLinks, BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import {
  CRM_BEST_FOR_ROUNDUP_HUB_LINK,
  getCrmBestForHubGeneralLinks,
  getCrmBestForHubTradeLinks,
} from "@/lib/data/crmBestForHub";

export default function CrmBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="CRM"
      categoryHref="/crm"
      breadcrumbCurrent="Best for"
      title="Best CRM Software by Use Case"
      intro="Find CRM software that fits your situation—freelancers, small business, startups, agencies, sales teams, and trades from HVAC to construction and property management, plus automotive, appliance repair, event services, home inspectors, and more."
      roundupLink={CRM_BEST_FOR_ROUNDUP_HUB_LINK}
      generalCards={getCrmBestForHubGeneralLinks()}
      tradeCards={getCrmBestForHubTradeLinks()}
      cardCta="See picks →"
      afterDirectory={
        <BestForHubRelatedLinks
          title="Related links"
          sub="More CRM resources."
          links={[
            { href: "/crm", label: "CRM hub" },
            { href: "/crm/compare", label: "Compare CRM software" },
            { href: "/crm/guides", label: "CRM guides" },
          ]}
        />
      }
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best CRM Software by Use Case | BeltStack",
    description:
      "Browse our best CRM software picks by use case: freelancers, small business, startups, agencies, sales teams, and industry-specific guides for HVAC, construction, automotive, appliance repair, event services, home inspectors, and more.",
    keywords: [
      "best CRM by industry",
      "CRM software by use case",
      "CRM for trades",
      "CRM for service businesses",
    ],
  };
}
