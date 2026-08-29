import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { SoftwareRecommendationCard } from "@/components/software-picks/SoftwareRecommendationCard";
import {
  toSoftwarePickCardProps,
  type SoftwarePickCardContent,
  type SoftwarePickCategoryRouteHelpers,
} from "@/lib/data/softwarePickCards";
import { sectionRuleAccent } from "@/lib/design-tokens";

function formatRoundupRecommendationPricingLabel(startingPrice: string): string {
  const trimmed = startingPrice.trim();
  if (/^custom pricing$/i.test(trimmed)) {
    return trimmed;
  }
  const withoutFrom = trimmed.replace(/^from\s+/i, "").trim();
  return `From ${withoutFrom}`;
}

function roundupRecommendationBody(pick: SoftwarePickCardContent): string {
  const editorial = pick.editorialParagraph.trim();
  return editorial || pick.description;
}

export function RoundupSoftwarePicksSection({
  picks,
  routes,
}: {
  picks: readonly SoftwarePickCardContent[];
  routes: SoftwarePickCategoryRouteHelpers;
}) {
  const featured = picks.slice(0, 3);
  const rest = picks.slice(3);

  return (
    <>
      <div className="mt-6 space-y-10">
        {featured.map((pick) => (
          <SoftwarePickCard
            key={pick.slug}
            {...toSoftwarePickCardProps(pick, routes, { id: `pick-${pick.slug}` })}
          />
        ))}
      </div>
      {rest.length > 0 ? (
        <div className="mt-10">
          <h3 className="text-[#1A2D48] text-xl font-bold sm:text-2xl">Other software we recommend</h3>
          <div className={sectionRuleAccent} aria-hidden />
          <div className="mt-6 space-y-4">
            {rest.map((pick) => (
              <SoftwareRecommendationCard
                key={pick.slug}
                id={`pick-${pick.slug}`}
                logoSrc={pick.logoSrc}
                name={pick.name}
                badge={pick.badge}
                rating={pick.rating}
                pricingLabel={formatRoundupRecommendationPricingLabel(pick.startingPrice)}
                body={roundupRecommendationBody(pick)}
                reviewHref={routes.getReviewUrl(pick.slug)}
                visitUrl={pick.visitUrl}
              />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
