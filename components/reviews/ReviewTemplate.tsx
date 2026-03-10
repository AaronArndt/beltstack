"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { ReviewSectionNav } from "@/components/ReviewSectionNav";

// ——— Design tokens (match payroll hub) ———
// BG: #F8FAFC | Navy: #1A2D48 | Emerald: #10B981 | Subtle: #6E6E6E
const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnSecondary =
  "rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-base font-bold text-[#1A2D48] transition-colors hover:border-[#10B981] hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

export type ReviewFaqItem = { q: string; a: string };
export type ReviewAlternative = { name: string; href: string; description?: string; logoSrc?: string };

export type RatingBreakdownItem = {
  category: string;
  score: string;
  explanation: string;
};

export type KeyFeatureItem = {
  name: string;
  description: string;
};

export type ReviewTemplateProps = {
  toolName: string;
  category: string;
  categoryHref: string;
  rating: string;
  startingPrice: string;
  bestFor: string;
  visitUrl?: string;
  logoSrc?: string;
  /** Optional: e.g. "W-2, 1099, Multi-state" for key stats row */
  payrollTypes?: string;
  /** Optional disclosure line below hero CTA */
  disclosureLine?: string;
  /** Single paragraph (legacy) or use quickVerdictParagraphs for editorial */
  quickVerdict: string;
  /** Multi-paragraph quick verdict for editorial layout; overrides quickVerdict when set */
  quickVerdictParagraphs?: string[];
  /** Category scores with explanations (Features, Pricing, Ease of Use, Support, Integrations) */
  ratingBreakdown?: RatingBreakdownItem[];
  pros: string[];
  cons: string[];
  /** Editorial: who this software is best for */
  bestForEditorial?: string;
  /** Editorial: who should avoid it */
  whoShouldAvoid?: string;
  pricingSummary: string;
  /** Optional: pricing tiers / structure description */
  pricingTiers?: string;
  /** Optional: cost vs competitors context */
  costVsCompetitors?: string;
  /** Legacy: list of feature names. Use keyFeatures for name + description. */
  features: string[];
  /** Editorial: feature name + short explanation */
  keyFeatures?: KeyFeatureItem[];
  integrations: string[];
  /** Optional: why integrations matter for contractors */
  integrationsIntro?: string;
  /** Optional: how contractors use this software (workflows) */
  contractorUse?: string[];
  alternatives: ReviewAlternative[];
  faqs: ReviewFaqItem[];
  methodology?: {
    title: string;
    sub: string;
    introParagraph?: string;
    bullets: string[];
  };
  /** Optional: "Compare with other payroll software" — links to comparison pages */
  compareLinks?: { label: string; href: string }[];
  /** Optional: section title override (e.g. "Compare with other accounting software") */
  compareSectionTitle?: string;
  /** Optional: link to main best payroll roundup */
  bestPayrollSoftwareHref?: string;
  /** Optional: link to compare hub (e.g. /payroll/compare) */
  compareHubHref?: string;
  /** Optional: link label for compare hub (e.g. "Compare accounting software") */
  compareHubLabel?: string;
  /** Optional: link label for best roundup (e.g. "Best accounting software (2026) — full roundup") */
  bestRoundupLabel?: string;
  /** Optional: "Best payroll software for different use cases" — links to best-for pages */
  useCaseLinks?: { label: string; href: string }[];
  /** Optional: section title override (e.g. "Best accounting software for different use cases") */
  bestForSectionTitle?: string;
  /** Optional: section sub override (e.g. "Find accounting software by scenario.") */
  bestForSectionSub?: string;
  /** Optional: "Popular industries" — 6 trade links (construction, electricians, etc.) */
  popularIndustryLinks?: { label: string; href: string }[];
  /** Optional: section title override for industry links */
  industrySectionTitle?: string;
  /** Optional: section sub override for industry links */
  industrySectionSub?: string;
  scenarioLinks?: { label: string; href: string }[];
  /** Optional: link to guides hub (e.g. /accounting/guides) for "Best for use cases" section */
  guideHubHref?: string;
  /** Optional: label for guide hub link (e.g. "Accounting guides") */
  guideHubLabel?: string;
  /** Optional: cross-cluster or related reading links (e.g. payroll from accounting review) */
  relatedReading?: { label: string; href: string }[];
  tradeLinks?: { label: string; href: string }[];
};

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

/** Tooltip/popover next to rating: "How we rate" with methodology link. Hover on desktop, click on mobile; accessible. */
function RatingInfoTooltip({ align = "left" }: { align?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current?.contains(target) === false &&
        popoverRef.current?.contains(target) === false
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <span
      className="relative inline-flex items-baseline align-baseline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="How we rate"
        aria-expanded={open}
        aria-haspopup="dialog"
        className="ml-1 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#6E6E6E]/50 bg-[#6E6E6E]/10 text-[#6E6E6E] text-[10px] font-semibold transition-colors hover:border-[#10B981] hover:bg-[#10B981]/10 hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1"
      >
        i
      </button>
      {open && (
        <div
          ref={popoverRef}
          role="tooltip"
          className={`absolute top-full z-50 mt-1.5 w-64 rounded-lg border border-neutral-200/60 bg-white p-3 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] ${align === "right" ? "right-0 left-auto" : "left-0"}`}
        >
          <p className="text-[#1A2D48] text-sm font-semibold">How we rate</p>
          <p className="mt-1 text-[#6E6E6E] text-xs leading-relaxed">
            Scores combine pricing, features, ease of use, support, and contractor fit. We review sources and update regularly.
          </p>
          <Link
            href="/methodology"
            className="mt-2 inline-block text-xs font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            onClick={() => setOpen(false)}
          >
            Read methodology →
          </Link>
        </div>
      )}
    </span>
  );
}

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-neutral-200/60 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1A2D48] text-sm sm:text-base">{question}</span>
        <span
          className={`shrink-0 text-[#6E6E6E] transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pr-8">
          <p className="text-neutral-700 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

const SECTION_NAV_ITEMS = [
  { label: "Quick verdict", href: "#quick-verdict" },
  { label: "Rating breakdown", href: "#rating-breakdown" },
  { label: "Pros & cons", href: "#pros-cons" },
  { label: "Best for", href: "#best-for" },
  { label: "Pricing", href: "#pricing" },
  { label: "Key features", href: "#key-features" },
  { label: "Integrations", href: "#integrations" },
  { label: "Contractor use", href: "#contractor-use" },
  { label: "Alternatives", href: "#alternatives" },
  { label: "FAQs", href: "#faqs" },
];

function getSectionNavItems(showRatingBreakdown: boolean, showContractorUse: boolean) {
  return SECTION_NAV_ITEMS.filter((item) => {
    if (item.href === "#rating-breakdown") return showRatingBreakdown;
    if (item.href === "#contractor-use") return showContractorUse;
    return true;
  });
}

function ReviewJsonLd({
  toolName,
  category,
  rating,
  visitUrl,
  currentYear,
}: {
  toolName: string;
  category: string;
  rating: string;
  visitUrl?: string;
  currentYear: number;
}) {
  const ratingNum = parseFloat(rating) || 5;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: toolName,
        description: `${toolName} review and rating by BeltStack.`,
        ...(visitUrl && { url: visitUrl }),
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Product", name: toolName },
        reviewRating: {
          "@type": "Rating",
          ratingValue: ratingNum,
          bestRating: 5,
          worstRating: 1,
        },
        author: { "@type": "Organization", name: "BeltStack" },
        datePublished: `${currentYear}-01-01`,
        reviewBody: `${toolName} ${category} software review.`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewTemplate({
  toolName,
  category,
  categoryHref,
  rating,
  startingPrice,
  bestFor,
  visitUrl,
  logoSrc,
  payrollTypes,
  disclosureLine,
  quickVerdict,
  quickVerdictParagraphs,
  ratingBreakdown,
  pros,
  cons,
  bestForEditorial,
  whoShouldAvoid,
  pricingSummary,
  pricingTiers,
  costVsCompetitors,
  features,
  keyFeatures,
  integrations,
  integrationsIntro,
  contractorUse,
  alternatives,
  faqs,
  methodology,
  compareLinks,
  compareSectionTitle,
  bestPayrollSoftwareHref,
  compareHubHref,
  compareHubLabel,
  bestRoundupLabel,
  useCaseLinks,
  bestForSectionTitle,
  bestForSectionSub,
  popularIndustryLinks,
  industrySectionTitle,
  industrySectionSub,
  scenarioLinks,
  guideHubHref,
  guideHubLabel,
  relatedReading,
  tradeLinks,
}: ReviewTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();
  const verdictParagraphs = quickVerdictParagraphs ?? [quickVerdict];
  const featureList = keyFeatures ?? features.map((name) => ({ name, description: "" }));
  const showContractorUse = contractorUse && contractorUse.length > 0;
  const showRatingBreakdown = ratingBreakdown && ratingBreakdown.length > 0;
  const sectionNavItems = getSectionNavItems(!!showRatingBreakdown, !!showContractorUse);

  const compareTitle = compareSectionTitle ?? "Compare with other payroll software";
  const bestForTitle = bestForSectionTitle ?? "Best payroll software for different use cases";
  const bestForSub = bestForSectionSub ?? "Find payroll software by scenario.";
  const hubCompareLabel = compareHubLabel ?? "Compare payroll software";
  const roundupLabel = bestRoundupLabel ?? "Best payroll software (2026) — full roundup";
  const industryTitle = industrySectionTitle ?? "Popular industries";
  const industrySub = industrySectionSub ?? "Payroll guides by industry.";

  // Sticky offsets: align with site navbar and add gap below "On this page" bar
  const STICKY_NAV_OFFSET = 72;
  const ON_THIS_PAGE_BAR_HEIGHT = 48;
  const SIDEBAR_GAP = 20;
  const SIDEBAR_STICKY_TOP = STICKY_NAV_OFFSET + ON_THIS_PAGE_BAR_HEIGHT + SIDEBAR_GAP;

  return (
    <div className="min-h-screen bg-white">
      <ReviewJsonLd
        toolName={toolName}
        category={category}
        rating={rating}
        visitUrl={visitUrl}
        currentYear={currentYear}
      />
      <main>
        {/* ——— Hero (centered in max-w-6xl) ——— */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <section id="overview" className="scroll-mt-section border-b border-neutral-200/60">
          <div className="pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8">
            <div className="max-w-[720px]">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li>
                  <Link href="/" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href={categoryHref} className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    {category}
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">{toolName}</li>
              </ol>
            </nav>
            {logoSrc != null && (
              <img
                src={logoSrc}
                alt=""
                className="h-16 w-auto max-w-[160px] object-contain object-left mb-4"
              />
            )}
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {toolName} Review ({currentYear})
            </h1>
            {/* Key stats row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#6E6E6E]">
              <span className="flex items-center gap-1.5 align-baseline">
                <span className="text-[#10B981] font-bold">{rating}</span>
                <span>Rating</span>
                <RatingInfoTooltip />
              </span>
              <span>
                <span className="font-semibold text-[#1A2D48]">Best for:</span> {bestFor}
              </span>
              <span>
                <span className="font-semibold text-[#1A2D48]">Starting price:</span> {startingPrice}
              </span>
              {payrollTypes != null && payrollTypes !== "" && (
                <span>
                  <span className="font-semibold text-[#1A2D48]">Payroll types:</span> {payrollTypes}
                </span>
              )}
            </div>
            {visitUrl != null && visitUrl !== "" && (
              <div className="mt-6">
                <a
                  href={visitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Visit {toolName}
                </a>
              </div>
            )}
            {disclosureLine != null && disclosureLine !== "" && (
              <p className="mt-2 text-xs text-[#6E6E6E]">{disclosureLine}</p>
            )}
            </div>
          </div>
        </section>
        </div>

        {/* ——— Sticky “On this page” bar: full-bleed border-y, links centered in max-w-6xl ——— */}
        <ReviewSectionNav items={sectionNavItems} stickyTop={STICKY_NAV_OFFSET} />

        {/* ——— Body (centered in max-w-6xl) ——— */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Main content: col-span-8 ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
              {/* 1. Quick Verdict — no divider above (first section) */}
              <section id="quick-verdict" className="scroll-mt-section pt-12 pb-12">
                <SectionTitle sub="Our take in a nutshell.">Quick verdict</SectionTitle>
                <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6 sm:p-8">
                  <div className="space-y-5 text-[15px] leading-relaxed text-neutral-700">
                    {verdictParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </div>
              </section>

              {/* 2. Rating Breakdown */}
              {showRatingBreakdown && (
                <section id="rating-breakdown" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How we scored this product.">Rating breakdown</SectionTitle>
                  <ul className="space-y-5">
                    {ratingBreakdown!.map((item, i) => (
                      <li key={i} className="flex flex-col gap-1.5">
                        <div className="flex items-baseline justify-between gap-4">
                          <h3 className="text-[#1A2D48] font-semibold">{item.category}</h3>
                          <span className="text-[#10B981] font-bold shrink-0">{item.score}</span>
                        </div>
                        <p className="text-neutral-700 text-sm leading-relaxed">{item.explanation}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 3. Pros and Cons */}
              <section id="pros-cons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="What we liked and what to watch for.">Pros and cons</SectionTitle>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6">
                    <h3 className="text-[#1A2D48] text-lg font-semibold">Pros</h3>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-700 leading-relaxed">
                      {pros.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6">
                    <h3 className="text-[#1A2D48] text-lg font-semibold">Cons</h3>
                    <ul className="mt-3 space-y-2 text-sm text-neutral-700 leading-relaxed">
                      {cons.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#1A2D48] shrink-0 mt-0.5" aria-hidden>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* 4. Who This Software Is Best For */}
              <section id="best-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="Ideal users and use cases.">Who this software is best for</SectionTitle>
                <div className="space-y-5 text-[15px] leading-relaxed text-neutral-700">
                  <p>{bestForEditorial ?? bestFor}</p>
                  {whoShouldAvoid != null && whoShouldAvoid !== "" && (
                    <div className="pt-5 mt-5 border-t border-neutral-200/60">
                      <h3 className="text-[#1A2D48] font-semibold mb-2">Who should avoid it</h3>
                      <p className="leading-relaxed">{whoShouldAvoid}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* 5. Pricing Overview */}
              <section id="pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="What to expect to pay.">Pricing overview</SectionTitle>
                <div className="space-y-5 text-[15px] leading-relaxed text-neutral-700">
                  <p>{pricingSummary}</p>
                  {pricingTiers != null && pricingTiers !== "" && <p>{pricingTiers}</p>}
                  {costVsCompetitors != null && costVsCompetitors !== "" && <p>{costVsCompetitors}</p>}
                  <p className="text-[#1A2D48] font-semibold">Starting price: {startingPrice}</p>
                </div>
              </section>

              {/* 6. Key Features */}
              <section id="key-features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="What stands out.">Key features</SectionTitle>
                <ul className="space-y-4">
                  {featureList.map((item, i) => (
                    <li key={i} className="flex flex-col gap-1">
                      <span className="text-[#1A2D48] font-medium">{item.name}</span>
                      {item.description !== "" && (
                        <p className="text-neutral-700 text-sm leading-relaxed">{item.description}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              {/* 7. Integrations */}
              <section id="integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="Plays well with your stack.">Integrations</SectionTitle>
                {integrationsIntro != null && integrationsIntro !== "" && (
                  <p className="mb-5 text-[15px] leading-relaxed text-neutral-700">{integrationsIntro}</p>
                )}
                <ul className="flex flex-wrap gap-2">
                  {integrations.map((name, i) => (
                    <li key={i}>
                      <span className="inline-flex rounded-md border border-neutral-200/60 bg-white px-3 py-1.5 text-sm font-medium text-[#1A2D48]">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 8. How Contractors Use This Software */}
              {showContractorUse && (
                <section id="contractor-use" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Real-world workflows for trade businesses.">How contractors use this software</SectionTitle>
                  <ul className="space-y-2 text-[15px] leading-relaxed text-neutral-700">
                    {contractorUse!.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-1" aria-hidden>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 9. Alternatives — simple list, link hover only; logo slot fixed width so rows align with or without logo */}
              <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="Other options we review.">Alternatives</SectionTitle>
                <ul className="space-y-4">
                  {alternatives.map((alt) => (
                    <li key={alt.href} className="flex items-start gap-3">
                      <div className="h-8 w-8 shrink-0 flex items-center justify-center">
                        {alt.logoSrc != null && alt.logoSrc !== "" && (
                          <img
                            src={alt.logoSrc}
                            alt=""
                            className="h-8 w-8 object-contain"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <Link
                          href={alt.href}
                          className="text-[#1A2D48] font-semibold hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
                        >
                          {alt.name}
                        </Link>
                        {alt.description != null && alt.description !== "" && (
                          <p className="mt-1 text-sm text-neutral-700 leading-relaxed">{alt.description}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Compare with other [category] software */}
              {compareLinks != null && compareLinks.length > 0 && (
                <section id="compare-with-others" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub={`See how ${toolName} stacks up head-to-head.`}>{compareTitle}</SectionTitle>
                  <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                    {compareLinks.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} className="font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Best [category] software for different use cases — roundup + scenarios only (no full trade list) */}
              {(bestPayrollSoftwareHref != null || compareHubHref != null || guideHubHref != null || (scenarioLinks != null && scenarioLinks.length > 0) || (relatedReading != null && relatedReading.length > 0)) && (
                <section id="best-for-use-cases" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub={bestForSub}>{bestForTitle}</SectionTitle>
                  <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                    {compareHubHref != null && (
                      <li>
                        <Link href={compareHubHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {hubCompareLabel}
                        </Link>
                      </li>
                    )}
                    {bestPayrollSoftwareHref != null && (
                      <li>
                        <Link href={bestPayrollSoftwareHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {roundupLabel}
                        </Link>
                      </li>
                    )}
                    {guideHubHref != null && guideHubLabel != null && (
                      <li>
                        <Link href={guideHubHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {guideHubLabel}
                        </Link>
                      </li>
                    )}
                    {scenarioLinks != null && scenarioLinks.map((s) => (
                      <li key={s.href}>
                        <Link href={s.href} className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                    {relatedReading != null && relatedReading.length > 0 && (
                      <>
                        <li className="pt-2 mt-2 border-t border-neutral-200/60">
                          <span className="text-neutral-500 text-xs uppercase tracking-wide">Related reading</span>
                        </li>
                        {relatedReading.map((r) => (
                          <li key={r.href}>
                            <Link href={r.href} className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                              {r.label}
                            </Link>
                          </li>
                        ))}
                      </>
                    )}
                  </ul>
                </section>
              )}

              {/* Popular industries / by use case — contextual links */}
              {popularIndustryLinks != null && popularIndustryLinks.length > 0 && (
                <section id="popular-industries" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub={industrySub}>{industryTitle}</SectionTitle>
                  <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                    {popularIndustryLinks.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 10. FAQs */}
              <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                <SectionTitle sub="Quick answers.">{toolName} FAQs</SectionTitle>
                <div className="rounded-lg border border-neutral-200/60 overflow-hidden">
                  {faqs.map((item, i) => (
                    <FaqAccordionItem
                      key={i}
                      question={item.q}
                      answer={item.a}
                      isOpen={openFaqIndex === i}
                      onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                    />
                  ))}
                </div>
              </section>

              </div>
            </article>

            {/* ——— Sidebar: At a glance (desktop only), col-span-4 ——— */}
            <aside
              className="hidden lg:block lg:sticky lg:col-span-4 lg:self-start lg:pt-8 lg:w-full"
              aria-label="At a glance"
              style={{ top: `${SIDEBAR_STICKY_TOP}px` }}
            >
              <div className="border border-neutral-200/60 rounded-lg bg-white p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]">
                <p className="text-neutral-500 text-xs uppercase tracking-wide mb-4">At a glance</p>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    {logoSrc != null && logoSrc !== "" && (
                      <img
                        src={logoSrc}
                        alt=""
                        className="h-12 w-auto max-w-[140px] object-contain object-left"
                      />
                    )}
                    <h2 className="text-[#1A2D48] text-lg font-semibold leading-tight">{toolName}</h2>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <div>
                      <p className="text-emerald-600 text-2xl font-semibold leading-none">{rating}</p>
                      <p className="text-neutral-500 text-xs mt-0.5">Rating</p>
                    </div>
                    <RatingInfoTooltip align="right" />
                  </div>
                  <div>
                    <p className="text-neutral-700 text-sm leading-relaxed">{bestFor}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs">Starting price</p>
                    <p className="text-[#1A2D48] font-semibold text-sm">{startingPrice}</p>
                  </div>
                  <div>
                    <p className="text-neutral-500 text-xs mb-2">Key highlights</p>
                    <ul className="space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                      {pros.slice(0, 5).map((p, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {visitUrl != null && visitUrl !== "" && (
                    <a
                      href={visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center ${btnPrimary} text-sm py-2`}
                    >
                      Visit {toolName}
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
