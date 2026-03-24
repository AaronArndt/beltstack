"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import type { ReactNode } from "react";

const MINT = "#E7F8F2";
const GREEN = "#10B981";
const RED_X = "#FF0000";

/* Same height + width for primary / secondary CTAs (matches hub button feel) */
const btnBase =
  "inline-flex w-full min-h-[48px] min-w-0 max-w-full items-center justify-center rounded-md px-6 py-2.5 font-sans text-sm font-bold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 sm:min-w-[220px] sm:text-base";

const btnPrimary = `${btnBase} bg-[#10B981] text-white hover:bg-[#0d9668]`;

const btnSecondary = `${btnBase} border border-[#10B981] bg-white text-[#10B981] hover:bg-[#E7F8F2]`;

/** Section / label titles — match hub (e.g. Key takeaways, FAQ) */
const sectionTitleClass =
  "font-sans text-sm font-bold uppercase tracking-wide text-[#1A2D48]";

export type SoftwarePickCardComparisonLink = {
  href: string;
  label: string;
};

export type SoftwarePickCardProps = {
  id?: string;
  name: string;
  logoSrc?: string;
  badgeText?: string;
  rating?: string;
  /** Primary CTA target — opens in a new tab */
  visitUrl?: string;
  /** Internal review route */
  reviewUrl: string;
  /** Paragraph 1 (e.g. short product summary) */
  summary?: string;
  /** Paragraph 2 (e.g. editorial depth) — optional */
  highlightsExtra?: string;
  pricingStartLabel?: string;
  pricingDetails?: ReactNode;
  pros?: string[];
  cons?: string[];
  /** Optional explicit feature flags; otherwise derived from copy */
  hasFreeTrial?: boolean;
  hasFreePlan?: boolean;
  hasIntegrations?: boolean;
  /** e.g. /project-management/alternatives/clickup */
  alternativesUrl?: string;
  /** 2–3 comparison links for the resources column */
  comparisonLinks?: SoftwarePickCardComparisonLink[];
};

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        fill={GREEN}
        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
      />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="22" height="22" aria-hidden>
      <path
        fill={RED_X}
        d="M18.3 5.71a1 1 0 0 0-1.41 0L12 10.59 7.11 5.7A1 1 0 0 0 5.7 7.11L10.59 12 5.7 16.89a1 1 0 1 0 1.41 1.41L12 13.41l4.89 4.89a1 1 0 0 0 1.41-1.41L13.41 12l4.89-4.89a1 1 0 0 0 0-1.4z"
      />
    </svg>
  );
}

function IconInfo({ className }: { className?: string }) {
  const tooltipId = useId();
  return (
    <div className={`group relative inline-flex shrink-0 ${className ?? ""}`}>
      <button
        type="button"
        className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-stone-300 font-sans text-[11px] font-bold text-[#57534E] transition-colors hover:border-slate-400 hover:text-[#1A2D48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
        aria-describedby={tooltipId}
        aria-label="How we calculate ratings"
      >
        i
      </button>
      {/* pt-2 bridges the gap; right-0 keeps panel from extending past viewport (avoids horizontal scroll on mobile) */}
      <div
        className="invisible absolute right-0 top-full z-[100] w-[min(calc(100vw-2rem),20rem)] max-w-[calc(100vw-1.5rem)] pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 sm:w-80"
      >
        <div
          id={tooltipId}
          role="tooltip"
          className="pointer-events-auto rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-left shadow-lg"
        >
          <p className="font-sans text-xs font-semibold text-[#1A2D48]">Rating methodology</p>
          <p className="mt-1.5 font-sans text-xs leading-relaxed text-[#57534E] sm:text-sm">
            Scores reflect hands-on testing and research across pricing, features, ease of use, support, and fit for the category. Our recommendations are editorial—vendors don’t pay for higher ratings or placement.
          </p>
          <Link
            href="/methodology"
            className="mt-2 inline-block font-sans text-xs font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1 sm:text-sm"
          >
            How we review software →
          </Link>
        </div>
      </div>
    </div>
  );
}

function StarRatingRow({ rating }: { rating?: string }) {
  const gradId = useId().replace(/:/g, "");
  const value = parseFloat((rating ?? "").replace(/[^\d.]/g, "")) || 0;
  const capped = Math.min(Math.max(value, 0), 5);
  const full = Math.floor(capped + 1e-6);
  const partial = capped - full;

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < full) return "full";
    if (i === full && partial >= 0.25) return partial >= 0.75 ? "full" : "half";
    return "empty";
  });

  return (
    <div className="flex min-w-0 max-w-full flex-wrap items-center gap-2">
      <div className="flex items-center gap-0.5" aria-hidden>
        {stars.map((kind, i) => (
          <svg
            key={i}
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="shrink-0"
            aria-hidden
          >
            <defs>
              <linearGradient id={`${gradId}-half-${i}`} x1="0" x2="1" y1="0" y2="0">
                <stop offset="50%" stopColor={GREEN} />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
            {kind === "full" && (
              <path
                fill={GREEN}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            )}
            {kind === "half" && (
              <path
                fill={`url(#${gradId}-half-${i})`}
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            )}
            {kind === "empty" && (
              <path
                fill="#E5E7EB"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            )}
          </svg>
        ))}
      </div>
      <span className="font-sans text-base font-bold text-[#1A2D48]">{capped.toFixed(1)}</span>
      <IconInfo />
    </div>
  );
}

function plainFromPricingDetails(node: ReactNode): string {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  return "";
}

function deriveFeatureFlags(input: {
  pricingStartLabel?: string;
  pricingDetails?: ReactNode;
  summary?: string;
  pros?: string[];
}): { hasFreeTrial: boolean; hasFreePlan: boolean; hasIntegrations: boolean } {
  const pricingText = plainFromPricingDetails(input.pricingDetails);
  const blob = [
    input.pricingStartLabel ?? "",
    pricingText,
    input.summary ?? "",
    ...(input.pros ?? []),
  ].join(" ");

  const trialNo = /\bno\s+free\s+trial\b|\bfree\s+trial:\s*no\b/i.test(blob);
  const hasFreeTrial =
    !trialNo && /\bfree\s+trial\b|\btrial\s+available\b|\b\d+\s*[-–]?\s*day\s+trial\b/i.test(blob);

  const planNo = /\bno\s+free\s+(plan|tier)\b/i.test(blob);
  const hasFreePlan =
    !planNo &&
    /\bfree\s+tier\b|\bfree\s+plan\b|\bfree\s+forever\b|\bfree\s+version\b/i.test(blob);

  const hasIntegrations = /\bintegrations?\b|\bintegrates\b|\bzapier\b|\bapi\b/i.test(blob);

  return { hasFreeTrial, hasFreePlan, hasIntegrations };
}

type AccordionId = "pros-cons" | "pricing" | "resources";

function AccordionBlock({
  id,
  baseId,
  label,
  isOpen,
  onToggle,
  isLast,
  children,
}: {
  id: AccordionId;
  baseId: string;
  label: string;
  isOpen: boolean;
  onToggle: () => void;
  /** When true, bottom corners match the card (`rounded-lg`) so hover outline isn’t square past the frame. */
  isLast?: boolean;
  children: ReactNode;
}) {
  const panelId = `${baseId}-${id}-panel`;
  const buttonId = `${baseId}-${id}-button`;
  const [hover, setHover] = useState(false);

  const showGreenOutline = hover && !isOpen;
  const bottomRadiusWhenClosed = isLast && !isOpen ? "rounded-b-lg" : "";

  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <button
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
        className={`flex min-h-[52px] w-full items-center justify-between gap-4 px-5 py-3 text-left transition-[background-color,box-shadow] duration-150 sm:px-6 ${bottomRadiusWhenClosed} ${
          isOpen
            ? "bg-[#E7F8F2]"
            : showGreenOutline
              ? "bg-[#E7F8F2] shadow-[inset_0_0_0_1px_#10B981]"
              : "bg-white hover:bg-[#E7F8F2]"
        }`}
      >
        <span className={sectionTitleClass}>{label}</span>
        <svg
          className={`h-5 w-5 shrink-0 text-[#57534E] transition-transform duration-200 ease-out ${
            isOpen ? "-rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={`border-t border-stone-200/80 bg-white px-5 pb-5 pt-4 sm:px-6${isLast ? " rounded-b-lg" : ""}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export function SoftwarePickCard({
  id,
  name,
  logoSrc,
  badgeText,
  rating,
  visitUrl,
  reviewUrl,
  summary,
  highlightsExtra,
  pricingStartLabel,
  pricingDetails,
  pros = [],
  cons = [],
  hasFreeTrial: hasFreeTrialProp,
  hasFreePlan: hasFreePlanProp,
  hasIntegrations: hasIntegrationsProp,
  alternativesUrl,
  comparisonLinks = [],
}: SoftwarePickCardProps) {
  const baseId = useId();
  const [openSection, setOpenSection] = useState<AccordionId | null>(null);

  const derived = useMemo(
    () =>
      deriveFeatureFlags({
        pricingStartLabel,
        pricingDetails,
        summary,
        pros,
      }),
    [pricingStartLabel, pricingDetails, summary, pros]
  );

  const hasFreeTrial = hasFreeTrialProp ?? derived.hasFreeTrial;
  const hasFreePlan = hasFreePlanProp ?? derived.hasFreePlan;
  const hasIntegrations = hasIntegrationsProp ?? derived.hasIntegrations;

  const paragraphs = useMemo(() => {
    const a = summary?.trim();
    const b = highlightsExtra?.trim();
    const out: string[] = [];
    if (a) out.push(a);
    if (b) out.push(b);
    return out;
  }, [summary, highlightsExtra]);

  const pricingExplanation = plainFromPricingDetails(pricingDetails).trim();

  const toggle = (section: AccordionId) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const reviewLinkLabel = `${name} Review (2026)`;
  const alternativesLinkLabel = `Best ${name} Alternatives (2026)`;

  return (
    <article
      id={id}
      className="min-w-0 max-w-full overflow-hidden rounded-lg border border-stone-200/90 bg-white font-sans antialiased text-[#1A2D48] shadow-sm"
    >
      <div
        className={`px-6 pt-6 ${paragraphs.length > 0 ? "pb-2" : "pb-6"}`}
      >
        {badgeText ? (
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2.5 border px-3.5 py-2 font-sans text-sm font-bold leading-snug tracking-wide text-[#10B981] sm:text-[15px]"
              style={{
                backgroundColor: MINT,
                borderColor: GREEN,
                borderRadius: 5,
              }}
            >
              <img
                src="/Logos/SB_Crown.svg"
                alt=""
                width={26}
                height={21}
                className="h-[21px] w-[26px] shrink-0 object-contain"
              />
              {badgeText}
            </span>
          </div>
        ) : null}

        <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
          {/* Product name + rating */}
          <div className="flex min-w-0 max-w-full shrink-0 items-start gap-4 lg:max-w-[min(100%,26rem)]">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt=""
                className="h-[84px] w-auto max-w-[270px] shrink-0 object-contain object-left sm:h-[84px]"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <div
                className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-stone-50 font-sans text-sm font-bold text-[#57534E]"
                aria-hidden
              >
                {name.slice(0, 2).toUpperCase()}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="break-words text-[32px] font-bold leading-tight tracking-tight text-[#1A2D48]">
                {name}
              </h3>
              <div className="mt-1.5">
                <StarRatingRow rating={rating} />
              </div>
            </div>
          </div>

          {/* Feature flags: evenly fill space between product block and CTAs */}
          <div className="flex min-w-0 flex-1 flex-col justify-center px-0 sm:px-2 lg:px-4">
            <div className="flex w-full items-start justify-between gap-3 sm:gap-6 lg:gap-8">
              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <p className={`${sectionTitleClass} text-balance`}>Free Trial</p>
                <div className="mt-2 flex justify-center">{hasFreeTrial ? <IconCheck /> : <IconX />}</div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <p className={`${sectionTitleClass} text-balance`}>Free Plan</p>
                <div className="mt-2 flex justify-center">{hasFreePlan ? <IconCheck /> : <IconX />}</div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-center text-center">
                <p className={`${sectionTitleClass} text-balance`}>Integrations</p>
                <div className="mt-2 flex justify-center">{hasIntegrations ? <IconCheck /> : <IconX />}</div>
              </div>
            </div>
          </div>

          {/* CTAs — equal sizing */}
          <div className="flex w-full min-w-0 max-w-full shrink-0 flex-col items-stretch gap-2.5 lg:w-auto lg:min-w-[220px] xl:min-w-[260px]">
            {visitUrl ? (
              <a href={visitUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Learn More
              </a>
            ) : null}
            <Link href={reviewUrl} className={btnSecondary}>
              Read Review
            </Link>
          </div>
        </div>
      </div>

      {paragraphs.length > 0 ? (
        <div className="px-6 pb-6 pt-1">
          <p className={sectionTitleClass}>Highlights</p>
          <div className="mt-3 space-y-3 text-[14px] leading-relaxed text-[#57534E]">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      ) : null}

      <div className="divide-y divide-stone-200/90 border-t border-stone-200/90">
        <AccordionBlock
          id="pros-cons"
          baseId={baseId}
          label="Pros + Cons"
          isOpen={openSection === "pros-cons"}
          onToggle={() => toggle("pros-cons")}
        >
          {pros.length === 0 && cons.length === 0 ? (
            <p className="text-sm leading-relaxed text-[#57534E]">
              See the full review for detailed pros and cons.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
              <div>
                <p className={sectionTitleClass}>Pros</p>
                <ul className="mt-3 space-y-2.5">
                  {pros.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-snug text-[#57534E]">
                      <span className="mt-0.5 shrink-0">
                        <IconCheck className="h-5 w-5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className={sectionTitleClass}>Cons</p>
                <ul className="mt-3 space-y-2.5">
                  {cons.map((item, idx) => (
                    <li key={idx} className="flex gap-2 text-sm leading-snug text-[#57534E]">
                      <span className="mt-0.5 shrink-0">
                        <IconX className="h-5 w-5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </AccordionBlock>

        <AccordionBlock
          id="pricing"
          baseId={baseId}
          label="Pricing Details"
          isOpen={openSection === "pricing"}
          onToggle={() => toggle("pricing")}
        >
          <ul className="list-none space-y-2 text-sm leading-relaxed text-[#57534E]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
              <span>{hasFreeTrial ? "Free trial" : "No free trial"}</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
              <span>{hasFreePlan ? "Free plan" : "No free plan"}</span>
            </li>
            {pricingExplanation ? (
              <li className="flex items-center gap-2 pt-1">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
                <span>{pricingExplanation}</span>
              </li>
            ) : (
              <li className="flex items-center gap-2 pt-1">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
                <span>
                  See current plans on the vendor site; starting price: {pricingStartLabel ?? "varies"}.
                </span>
              </li>
            )}
          </ul>
        </AccordionBlock>

        <AccordionBlock
          id="resources"
          baseId={baseId}
          label="Additional Resources"
          isOpen={openSection === "resources"}
          onToggle={() => toggle("resources")}
          isLast
        >
          <div className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            <div>
              <p className={sectionTitleClass}>Review</p>
              <Link
                href={reviewUrl}
                className="mt-2 inline-block font-sans text-sm font-semibold text-[#10B981] underline underline-offset-2 hover:text-[#0d9668]"
              >
                {reviewLinkLabel}
              </Link>
            </div>
            <div>
              <p className={sectionTitleClass}>Alternatives</p>
              {alternativesUrl ? (
                <Link
                  href={alternativesUrl}
                  className="mt-2 inline-block font-sans text-sm font-semibold text-[#10B981] underline underline-offset-2 hover:text-[#0d9668]"
                >
                  {alternativesLinkLabel}
                </Link>
              ) : (
                <p className="mt-2 text-sm text-[#57534E]">See the category hub for alternatives.</p>
              )}
            </div>
            <div>
              <p className={sectionTitleClass}>Comparisons</p>
              {comparisonLinks.length > 0 ? (
                <ul className="mt-2 space-y-2">
                  {comparisonLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-sm font-semibold text-[#10B981] underline underline-offset-2 hover:text-[#0d9668]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-[#57534E]">Browse comparisons from the category compare hub.</p>
              )}
            </div>
          </div>
        </AccordionBlock>
      </div>
    </article>
  );
}

