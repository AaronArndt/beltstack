import { BestForHubTemplate } from "@/components/best/BestForHubTemplate";
import { WEBSITE_BUILDERS_BEST_FOR_INDEX } from "@/lib/data/websiteBuildersBestFor";

const [WEBSITE_BUILDERS_ROUNDUP, ...WEBSITE_BUILDERS_TRADE_CARDS] = WEBSITE_BUILDERS_BEST_FOR_INDEX;

export default function WebsiteBuildersBestForIndexPage() {
  return (
    <BestForHubTemplate
      categoryLabel="Website Builders"
      categoryHref="/website-builders"
      breadcrumbCurrent="Best for"
      title="Best Website Builders by Use Case"
      intro="Find recommendations by service-business audience, trade, and growth stage."
      roundupLink={WEBSITE_BUILDERS_ROUNDUP}
      tradeCards={WEBSITE_BUILDERS_TRADE_CARDS}
      cardCta="See picks →"
    />
  );
}

export function generateMetadata() {
  return {
    title: "Best Website Builders by Use Case | BeltStack",
    description:
      "Browse our best website builder picks by use case for small businesses, contractors, HVAC, plumbing, electricians, and other home-service operators.",
  };
}
