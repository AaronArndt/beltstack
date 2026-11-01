import Link from "next/link";
import type { SoftwarePickCardContent, SoftwarePickCategoryRouteHelpers } from "@/lib/data/softwarePickCards";
import { sectionRuleAccent } from "@/lib/design-tokens";

export function RoundupTopPicksSummary({
  picks,
  routes,
}: {
  picks: readonly SoftwarePickCardContent[];
  routes: SoftwarePickCategoryRouteHelpers;
}) {
  const topThree = picks.slice(0, 3);
  if (topThree.length === 0) return null;

  return (
    <section id="top-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-5 sm:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-5">
          <h2 className="text-brand text-2xl font-bold sm:text-3xl">Our top picks</h2>
          <div className={sectionRuleAccent} aria-hidden />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {topThree.map((pick) => {
            const reviewUrl = routes.getReviewUrl(pick.slug);
            return (
              <article
                key={pick.slug}
                className="min-w-0 rounded-lg border border-stone-200 bg-white p-5 shadow-sm"
              >
                <div className="flex min-w-0 items-start gap-3">
                  {pick.logoSrc ? (
                    <img
                      src={pick.logoSrc}
                      alt=""
                      className="h-12 w-auto max-w-[120px] shrink-0 object-contain object-left"
                    />
                  ) : null}
                  <div className="min-w-0">
                    <h3 className="break-words text-lg font-bold leading-snug text-brand">{pick.name}</h3>
                    {pick.rating ? (
                      <p className="mt-1 text-sm font-semibold text-brand">{pick.rating}</p>
                    ) : null}
                  </div>
                </div>
                {pick.badge ? (
                  <p
                    className="mt-3 inline-flex max-w-full rounded-md border border-terracotta/40 bg-terracotta/30 px-2.5 py-1 text-xs font-bold leading-snug text-brand"
                  >
                    {pick.badge}
                  </p>
                ) : null}
                <p className="mt-3">
                  <Link
                    href={reviewUrl}
                    className="text-sm font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
                  >
                    Read Review
                  </Link>
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
