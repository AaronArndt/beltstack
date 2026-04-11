"use client";

import Link from "next/link";

export type ComparisonTeaserLinkCardProps = {
  href: string;
  label: string;
  summary: string;
  productALogoSrc?: string;
  productBLogoSrc?: string;
  productAName?: string;
  productBName?: string;
};

/**
 * Hub-style comparison teaser (logos + summary + “Compare →”), matching payroll “Popular comparisons” cards.
 */
export function ComparisonTeaserLinkCard({
  href,
  label,
  summary,
  productALogoSrc,
  productBLogoSrc,
  productAName,
  productBName,
}: ComparisonTeaserLinkCardProps) {
  const displaySummary =
    summary.length > 140 ? `${summary.slice(0, 140).trim()}…` : summary;

  const leftLabel = productAName ?? "Product A";
  const rightLabel = productBName ?? "Product B";
  const showLogoRow = Boolean((productALogoSrc || productAName) && (productBLogoSrc || productBName));

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-stone-300 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
    >
      {showLogoRow && (
        <div className="flex items-center gap-3">
          {productALogoSrc ? (
            <img
              src={productALogoSrc}
              alt=""
              className="h-10 w-auto max-w-[80px] object-contain object-left"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{leftLabel}</span>
          )}
          <span className="text-lg font-medium text-[#57534E]" aria-hidden>
            vs
          </span>
          {productBLogoSrc ? (
            <img
              src={productBLogoSrc}
              alt=""
              className="h-10 w-auto max-w-[80px] object-contain object-left"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{rightLabel}</span>
          )}
        </div>
      )}
      <h3
        className={`text-xl font-bold text-[#1A2D48] group-hover:text-[#10B981] ${showLogoRow ? "mt-3" : ""}`}
      >
        {label}
      </h3>
      <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-[#57534E]">{displaySummary}</p>
      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
        Compare →
      </span>
    </Link>
  );
}
