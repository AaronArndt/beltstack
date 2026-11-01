import Link from "next/link";
import { vendorCtaRel } from "@/lib/editorial";

export type SoftwareRecommendationCardProps = {
  id?: string;
  logoSrc: string;
  name: string;
  badge: string;
  rating: string;
  pricingLabel?: string;
  body: string;
  reviewHref: string;
  visitUrl: string;
};

export function SoftwareRecommendationCard({
  id,
  logoSrc,
  name,
  badge,
  rating,
  pricingLabel,
  body,
  reviewHref,
  visitUrl,
}: SoftwareRecommendationCardProps) {
  return (
    <article
      id={id}
      className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Link
          href={reviewHref}
          className="flex shrink-0 justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo sm:justify-start"
          aria-label={`${name} — read full review`}
        >
          <img
            src={logoSrc}
            alt=""
            className="h-12 w-auto max-w-[140px] object-contain object-left"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-brand">
              <Link
                href={reviewHref}
                className="rounded hover:text-indigo focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
              >
                {name}
              </Link>
            </h3>
            <span className="rounded-md border border-terracotta/40 bg-terracotta/30 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand">
              {badge}
            </span>
            <span className="text-sm font-bold text-brand">{rating}</span>
            {pricingLabel ? (
              <span className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs font-medium text-muted-foreground">
                {pricingLabel}
              </span>
            ) : null}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link
              href={reviewHref}
              className="font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
            >
              Read full review →
            </Link>
            <a
              href={visitUrl}
              target="_blank"
              rel={vendorCtaRel(visitUrl)}
              className="font-semibold text-brand hover:text-indigo hover:underline"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
