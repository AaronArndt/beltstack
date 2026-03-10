"use client";

import Link from "next/link";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { ReviewSectionNav } from "@/components/ReviewSectionNav";

// ——— Design tokens (match review template) ———

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

export type ComparisonFeatureRow = {
  feature: string;
  productA: string;
  productB: string;
  /** Optional: show ✔ Supported | ⚠ Partial | — Not available */
  supportA?: "supported" | "partial" | "none";
  supportB?: "supported" | "partial" | "none";
  /** Optional: which product is stronger in this row (gets green background) */
  stronger?: "A" | "B";
};

export type ComparisonSidebarWinner = {
  label: string;
  winner: "A" | "B";
};

export type ComparisonBestForItem = {
  heading: string;
  body: string;
};

export type ComparisonFaqItem = { q: string; a: string };

export type HeroCalloutItem = {
  label: string;
  winner: "A" | "B";
  reason: string;
};

export type ComparisonTemplateProps = {
  productA: { name: string; slug: string; reviewHref: string; logoSrc?: string; logo?: string; visitUrl?: string; bestForSummary: string; rating?: string; startingPrice?: string };
  productB: { name: string; slug: string; reviewHref: string; logoSrc?: string; logo?: string; visitUrl?: string; bestForSummary: string; rating?: string; startingPrice?: string };
  categoryHref: string;
  categoryLabel: string;
  /** Short summary under the title */
  summaryParagraph: string;
  /** Quick recommendation: who each tool is best for (one line each) */
  quickRecommendationA: string;
  quickRecommendationB: string;
  /** Editorial quick verdict paragraphs */
  quickVerdictParagraphs: string[];
  /** Optional: "Choose Product A if" / "Choose Product B if" bullet lists */
  decisionGuideA?: string[];
  decisionGuideB?: string[];
  /** Optional: ratings comparison table (category, productA score, productB score) */
  ratingsComparison?: { category: string; productA: string; productB: string }[];
  /** Feature comparison table rows */
  featureComparison: ComparisonFeatureRow[];
  /** Pricing comparison editorial */
  pricingComparison: string;
  /** Pros and cons per product */
  prosConsA: { pros: string[]; cons: string[] };
  prosConsB: { pros: string[]; cons: string[] };
  /** Best for subsections */
  bestFor: ComparisonBestForItem[];
  /** Alternative review links (logoSrc optional for card display) */
  alternatives: { name: string; href: string; description?: string; logoSrc?: string }[];
  /** FAQ items: structured for accordion and future schema */
  faqs: ComparisonFaqItem[];
  /** Sidebar: "Winner for X" -> A or B */
  sidebarWinners: ComparisonSidebarWinner[];
  /** Optional: future comparison links to show in content */
  moreComparisons?: { label: string; href: string }[];
  /** Optional: 3–6 contextual trade/best-for links for "Best payroll software guides" section */
  relevantTradeLinks?: { label: string; href: string }[];
  /** Optional: hero callouts under the summary (winner + reason) */
  heroCallouts?: HeroCalloutItem[];
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

/** Renders support icon + text for a feature cell. */
function FeatureCell({
  support,
  text,
  isStronger,
}: {
  support?: "supported" | "partial" | "none";
  text: string;
  isStronger: boolean;
}) {
  const bgClass = isStronger ? "bg-[#ECFDF5]" : "";
  const level = support ?? "supported";
  return (
    <td className={`py-3 px-4 text-neutral-700 align-middle ${bgClass}`}>
      <span className="flex items-center gap-2">
        {level === "supported" && (
          <span className="text-[#10B981] shrink-0" aria-hidden title="Supported">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        )}
        {level === "partial" && (
          <span className="text-amber-500 shrink-0" aria-hidden title="Partial support">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </span>
        )}
        {level === "none" && (
          <span className="text-neutral-400 shrink-0" aria-hidden title="Not available">
            —
          </span>
        )}
        <span>{text}</span>
      </span>
    </td>
  );
}

export function ComparisonTemplate({
  productA,
  productB,
  categoryHref,
  categoryLabel,
  summaryParagraph,
  quickRecommendationA,
  quickRecommendationB,
  quickVerdictParagraphs,
  decisionGuideA,
  decisionGuideB,
  ratingsComparison,
  featureComparison,
  pricingComparison,
  prosConsA,
  prosConsB,
  bestFor,
  alternatives,
  faqs,
  sidebarWinners,
  moreComparisons,
  relevantTradeLinks,
  heroCallouts,
}: ComparisonTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const currentYear = new Date().getFullYear();
  const title = `${productA.name} vs ${productB.name}`;
  const logoA = productA.logo ?? productA.logoSrc;
  const logoB = productB.logo ?? productB.logoSrc;

  const hasDecisionGuide = (decisionGuideA != null && decisionGuideA.length > 0) || (decisionGuideB != null && decisionGuideB.length > 0);
  const hasRatingsComparison = ratingsComparison != null && ratingsComparison.length > 0;
  const isAccounting = categoryHref === "/accounting";
  const isInvoicing = categoryHref === "/invoicing";
  const isTimeTracking = categoryHref === "/time-tracking";
  const sectionNavItems = [
    { label: "Quick verdict", href: "#quick-verdict" },
    ...(hasDecisionGuide ? [{ label: "Quick decision guide", href: "#quick-decision-guide" }] : []),
    ...(hasRatingsComparison ? [{ label: "Ratings comparison", href: "#ratings-comparison" }] : []),
    { label: "Feature comparison", href: "#feature-comparison" },
    { label: "Pricing", href: "#pricing" },
    { label: "Pros & cons", href: "#pros-cons" },
    { label: "Best for", href: "#best-for" },
    { label: "Alternatives", href: "#alternatives" },
    { label: "Read full reviews", href: "#read-full-reviews" },
    {
      label: isAccounting
        ? "Best accounting guides"
        : isInvoicing
        ? "Best invoicing guides"
        : isTimeTracking
        ? "Best time tracking guides"
        : "Best payroll guides",
      href: "#best-payroll-guides",
    },
    { label: "FAQs", href: "#faqs" },
  ];

  const STICKY_NAV_OFFSET = 72;
  const ON_THIS_PAGE_BAR_HEIGHT = 48;
  const SIDEBAR_GAP = 20;
  const SIDEBAR_STICKY_TOP = STICKY_NAV_OFFSET + ON_THIS_PAGE_BAR_HEIGHT + SIDEBAR_GAP;

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* ——— Hero ——— */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="overview" className="scroll-mt-section border-b border-neutral-200/60">
            <div className="pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8">
              <div className="max-w-[720px]">
                <Breadcrumb
                  items={[
                    { label: "Home", href: "/" },
                    { label: categoryLabel, href: categoryHref },
                    { label: title },
                  ]}
                  className="mb-4"
                />
                <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {title} ({currentYear})
                </h1>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-700">
                  {summaryParagraph}
                </p>
                {/* Product summary cards */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]">
                    {logoA && <img src={logoA} alt="" className="h-10 w-auto max-w-[100px] object-contain mb-3" />}
                    <h2 className="text-[#1A2D48] text-lg font-bold">{productA.name}</h2>
                    {productA.rating != null && productA.rating !== "" && (
                      <p className="mt-1 text-sm text-[#6E6E6E]"><span className="text-[#10B981] font-semibold">{productA.rating}</span> rating</p>
                    )}
                    {productA.startingPrice != null && productA.startingPrice !== "" && (
                      <p className="text-sm text-neutral-700 mt-0.5">From {productA.startingPrice}</p>
                    )}
                    <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{productA.bestForSummary}</p>
                    {productA.visitUrl != null && productA.visitUrl !== "" && (
                      <a href={productA.visitUrl} target="_blank" rel="noopener noreferrer" className={`mt-4 block w-full text-center ${btnPrimary} text-sm py-2`}>
                        Visit {productA.name}
                      </a>
                    )}
                  </div>
                  <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]">
                    {logoB && <img src={logoB} alt="" className="h-10 w-auto max-w-[100px] object-contain mb-3" />}
                    <h2 className="text-[#1A2D48] text-lg font-bold">{productB.name}</h2>
                    {productB.rating != null && productB.rating !== "" && (
                      <p className="mt-1 text-sm text-[#6E6E6E]"><span className="text-[#10B981] font-semibold">{productB.rating}</span> rating</p>
                    )}
                    {productB.startingPrice != null && productB.startingPrice !== "" && (
                      <p className="text-sm text-neutral-700 mt-0.5">From {productB.startingPrice}</p>
                    )}
                    <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{productB.bestForSummary}</p>
                    {productB.visitUrl != null && productB.visitUrl !== "" && (
                      <a href={productB.visitUrl} target="_blank" rel="noopener noreferrer" className={`mt-4 block w-full text-center ${btnPrimary} text-sm py-2`}>
                        Visit {productB.name}
                      </a>
                    )}
                  </div>
                </div>
                <div className="mt-6 rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-5">
                  <p className="text-[#1A2D48] text-sm font-semibold mb-3">Quick recommendation</p>
                  <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                    <li>
                      <span className="font-semibold text-[#1A2D48]">{productA.name}:</span> {quickRecommendationA}
                    </li>
                    <li>
                      <span className="font-semibold text-[#1A2D48]">{productB.name}:</span> {quickRecommendationB}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ——— Sticky “On this page” ——— */}
        <ReviewSectionNav items={sectionNavItems} stickyTop={STICKY_NAV_OFFSET} />

        {/* ——— Body ——— */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* 1. Quick verdict */}
                <section id="quick-verdict" className="scroll-mt-section pt-12 pb-12">
                  <SectionTitle sub="How these two tools differ.">Quick verdict</SectionTitle>
                  <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6 sm:p-8">
                    <div className="space-y-5 text-[15px] leading-relaxed text-neutral-700">
                      {quickVerdictParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                    <Link href={productA.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      See our full {productA.name} review →
                    </Link>
                    <Link href={productB.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      See our full {productB.name} review →
                    </Link>
                  </div>
                  {heroCallouts != null && heroCallouts.length > 0 && (
                    <div className="mt-6">
                      <p className="text-[#1A2D48] text-sm font-semibold mb-3">Comparison summary</p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {heroCallouts.map((item, i) => {
                          const winnerName = item.winner === "A" ? productA.name : productB.name;
                          return (
                            <div
                              key={i}
                              className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-4"
                            >
                              <p className="text-[#6E6E6E] text-xs font-semibold uppercase tracking-wide mb-1">
                                {item.label}
                              </p>
                              <p className="text-[#1A2D48] font-semibold text-sm mb-1">{winnerName}</p>
                              <p className="text-neutral-700 text-sm leading-relaxed">{item.reason}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </section>

                {/* Quick decision guide */}
                {((decisionGuideA != null && decisionGuideA.length > 0) || (decisionGuideB != null && decisionGuideB.length > 0)) && (
                  <section id="quick-decision-guide" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                    <SectionTitle sub="Which product fits your situation.">Quick decision guide</SectionTitle>
                    <div className="grid gap-6 sm:grid-cols-2">
                      {decisionGuideA != null && decisionGuideA.length > 0 && (
                        <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6">
                          <h3 className="text-[#1A2D48] text-lg font-semibold mb-3">Choose {productA.name} if:</h3>
                          <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                            {decisionGuideA.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {decisionGuideB != null && decisionGuideB.length > 0 && (
                        <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6">
                          <h3 className="text-[#1A2D48] text-lg font-semibold mb-3">Choose {productB.name} if:</h3>
                          <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                            {decisionGuideB.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {/* Ratings comparison */}
                {ratingsComparison != null && ratingsComparison.length > 0 && (
                  <section id="ratings-comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                    <SectionTitle sub="How we score each product.">Ratings comparison</SectionTitle>
                    <div className="overflow-x-auto rounded-lg border border-neutral-200/60">
                      <table className="w-full min-w-[320px] text-sm">
                        <thead>
                          <tr className="border-b border-neutral-200/60 bg-[#F8FAFC]">
                            <th className="text-left py-3 px-4 font-semibold text-[#1A2D48] align-middle">Category</th>
                            <th className="text-left py-3 px-4 font-semibold text-[#1A2D48] align-middle">{productA.name}</th>
                            <th className="text-left py-3 px-4 font-semibold text-[#1A2D48] align-middle">{productB.name}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {ratingsComparison.map((row, i) => (
                            <tr key={i} className="border-b border-neutral-200/60 last:border-b-0">
                              <td className="py-3 px-4 font-medium text-[#1A2D48] align-middle">{row.category}</td>
                              <td className="py-3 px-4 text-neutral-700 align-middle"><span className="text-[#10B981] font-semibold">{row.productA}</span></td>
                              <td className="py-3 px-4 text-neutral-700 align-middle"><span className="text-[#10B981] font-semibold">{row.productB}</span></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                )}

                {/* 2. Feature comparison table */}
                <section id="feature-comparison" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Side-by-side feature check.">Feature comparison</SectionTitle>
                  <p className="mb-4 text-xs text-[#6E6E6E]">
                    <span className="inline-flex items-center gap-1.5 mr-4">
                      <span className="text-[#10B981]" aria-hidden><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="inline-block"><polyline points="20 6 9 17 4 12" /></svg></span>
                      Supported
                    </span>
                    <span className="inline-flex items-center gap-1.5 mr-4">
                      <span className="text-amber-500" aria-hidden><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg></span>
                      Partial support
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-neutral-400" aria-hidden>—</span>
                      Not available
                    </span>
                  </p>
                  <div className="overflow-x-auto rounded-lg border border-neutral-200/60">
                    <table className="w-full min-w-[480px] text-sm">
                      <thead>
                        <tr className="border-b border-neutral-200/60 bg-[#F8FAFC]">
                          <th className="text-left py-3 px-4 font-semibold text-[#1A2D48] w-[40%] align-middle">Feature</th>
                          <th className="text-left py-3 px-4 font-semibold text-[#1A2D48] align-middle">{productA.name}</th>
                          <th className="text-left py-3 px-4 font-semibold text-[#1A2D48] align-middle">{productB.name}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {featureComparison.map((row, i) => (
                          <tr key={i} className="border-b border-neutral-200/60 last:border-b-0">
                            <td className="py-3 px-4 font-medium text-[#1A2D48] align-middle">{row.feature}</td>
                            <FeatureCell
                              support={row.supportA}
                              text={row.productA}
                              isStronger={row.stronger === "A"}
                            />
                            <FeatureCell
                              support={row.supportB}
                              text={row.productB}
                              isStronger={row.stronger === "B"}
                            />
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 3. Pricing comparison */}
                <section id="pricing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to expect to pay.">Pricing comparison</SectionTitle>
                  <div className="space-y-5 text-[15px] leading-relaxed text-neutral-700">
                    <p>{pricingComparison}</p>
                  </div>
                </section>

                {/* 4. Pros and cons */}
                <section id="pros-cons" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Strengths and trade-offs.">Pros and cons</SectionTitle>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6">
                      <h3 className="text-[#1A2D48] text-lg font-semibold">{productA.name}</h3>
                      <div className="mt-3 grid gap-4">
                        <div>
                          <p className="text-[#1A2D48] text-xs font-semibold uppercase tracking-wide mb-1">Pros</p>
                          <ul className="space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                            {prosConsA.pros.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[#1A2D48] text-xs font-semibold uppercase tracking-wide mb-1">Cons</p>
                          <ul className="space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                            {prosConsA.cons.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#1A2D48] shrink-0 mt-0.5" aria-hidden>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-6">
                      <h3 className="text-[#1A2D48] text-lg font-semibold">{productB.name}</h3>
                      <div className="mt-3 grid gap-4">
                        <div>
                          <p className="text-[#1A2D48] text-xs font-semibold uppercase tracking-wide mb-1">Pros</p>
                          <ul className="space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                            {prosConsB.pros.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-[#1A2D48] text-xs font-semibold uppercase tracking-wide mb-1">Cons</p>
                          <ul className="space-y-1.5 text-sm text-neutral-700 leading-relaxed">
                            {prosConsB.cons.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#1A2D48] shrink-0 mt-0.5" aria-hidden>•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 5. Best for */}
                <section id="best-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Which tool fits your situation.">Best for</SectionTitle>
                  <div className="space-y-6">
                    {bestFor.map((item, i) => (
                      <div key={i}>
                        <h3 className="text-[#1A2D48] font-semibold mb-2">{item.heading}</h3>
                        <p className="text-[15px] leading-relaxed text-neutral-700">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 6. Alternatives */}
                <section id="alternatives" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Other options we review.">Alternatives</SectionTitle>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {alternatives.map((alt) => (
                      <Link
                        key={alt.href}
                        href={alt.href}
                        className="flex flex-col rounded-lg border border-neutral-200/60 bg-[#F8FAFC] p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)] hover:border-[#10B981]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                      >
                        {alt.logoSrc != null && alt.logoSrc !== "" && (
                          <img src={alt.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain mb-3" />
                        )}
                        <span className="text-[#1A2D48] font-semibold">{alt.name}</span>
                        {alt.description != null && alt.description !== "" && (
                          <p className="mt-1 text-sm text-neutral-700 leading-relaxed flex-1">{alt.description}</p>
                        )}
                        <span className="mt-2 text-sm font-medium text-[#10B981]">Read review →</span>
                      </Link>
                    ))}
                  </div>
                  {moreComparisons != null && moreComparisons.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-neutral-200/60">
                      <p className="text-[#1A2D48] font-semibold mb-3">More comparisons</p>
                      <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        {moreComparisons.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className="text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </section>

                {/* Read full reviews */}
                <section id="read-full-reviews" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dive deeper into each product.">Read full reviews</SectionTitle>
                  <p className="text-[15px] text-neutral-700 leading-relaxed mb-4">
                    For detailed ratings, features, and pros and cons, see our standalone reviews:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href={productA.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Full {productA.name} review →
                      </Link>
                    </li>
                    <li>
                      <Link href={productB.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Full {productB.name} review →
                      </Link>
                    </li>
                  </ul>
                </section>

                {/* Best [category] software guides — roundup + compare hub + guides + contextual trade links (3–6) */}
                {(() => {
                  const isAccounting = categoryHref === "/accounting";
                  const isInvoicing = categoryHref === "/invoicing";
                  const isTimeTracking = categoryHref === "/time-tracking";
                  const roundupHref = isAccounting
                    ? "/accounting/best-accounting-software"
                    : isInvoicing
                    ? "/invoicing/best-invoicing-software"
                    : isTimeTracking
                    ? "/time-tracking/best-time-tracking-software"
                    : "/payroll/best-payroll-software";
                  const roundupLabel = isAccounting
                    ? "Best accounting software (2026) — full roundup"
                    : isInvoicing
                    ? "Best invoicing software (2026) — full roundup"
                    : isTimeTracking
                    ? "Best time tracking software (2026) — full roundup"
                    : "Best payroll software (2026) — full roundup";
                  const sectionTitle = isAccounting
                    ? "Best accounting software guides"
                    : isInvoicing
                    ? "Best invoicing software guides"
                    : isTimeTracking
                    ? "Best time tracking software guides"
                    : "Best payroll software guides";
                  const compareHubHref = `${categoryHref}/compare`;
                  const guidesHref = `${categoryHref}/guides`;
                  const guidesLabel = isAccounting
                    ? "Accounting guides"
                    : isInvoicing
                    ? "Invoicing guides"
                    : isTimeTracking
                    ? "Time tracking guides"
                    : "Payroll guides";
                  return (
                    <section id="best-payroll-guides" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                      <SectionTitle sub="Find the right fit by use case or trade.">{sectionTitle}</SectionTitle>
                      <ul className="space-y-2 text-sm text-neutral-700 leading-relaxed">
                        <li>
                          <Link href={roundupHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                            {roundupLabel}
                          </Link>
                        </li>
                        <li>
                          <Link href={compareHubHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                            Compare {categoryLabel.toLowerCase()} software
                          </Link>
                        </li>
                        <li>
                          <Link href={guidesHref} className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                            {guidesLabel}
                          </Link>
                        </li>
                        {relevantTradeLinks != null && relevantTradeLinks.length > 0
                          ? relevantTradeLinks.map((link) => (
                              <li key={link.href}>
                                <Link href={link.href} className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                  {link.label}
                                </Link>
                              </li>
                            ))
                          : !isAccounting && !isInvoicing && (
                              <>
                                <li>
                                  <Link href="/payroll/best-for/contractors" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                    Best for contractors
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/payroll/best-for/construction" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                    Best for construction
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/payroll/best-for/hvac" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                    Best for HVAC
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/payroll/best-for/plumbing" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                    Best for plumbing
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/payroll/best-for/landscaping" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                    Best for landscaping
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/payroll/best-for/electricians" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                    Best for electricians
                                  </Link>
                                </li>
                              </>
                            )}
                        {isAccounting && (relevantTradeLinks == null || relevantTradeLinks.length === 0) && (
                          <>
                            <li>
                              <Link href="/accounting/best-for/freelancers" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for freelancers
                              </Link>
                            </li>
                            <li>
                              <Link href="/accounting/best-for/small-business" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for small business
                              </Link>
                            </li>
                            <li>
                              <Link href="/accounting/best-for/contractors" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for contractors
                              </Link>
                            </li>
                          </>
                        )}
                        {isInvoicing && (relevantTradeLinks == null || relevantTradeLinks.length === 0) && (
                          <>
                            <li>
                              <Link href="/invoicing/best-for/freelancers" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for freelancers
                              </Link>
                            </li>
                            <li>
                              <Link href="/invoicing/best-for/small-business" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for small business
                              </Link>
                            </li>
                            <li>
                              <Link href="/invoicing/best-for/agencies" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for agencies
                              </Link>
                            </li>
                            <li>
                              <Link href="/invoicing/best-for/contractors" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for contractors
                              </Link>
                            </li>
                            <li>
                              <Link href="/invoicing/best-for/consultants" className="text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                                Best for consultants
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </section>
                  );
                })()}

                {/* 7. FAQs — structured { q, a } for accordion and future FAQPage schema */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
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

            {/* ——— Sidebar ——— */}
            <aside
              className="hidden lg:block lg:sticky lg:col-span-4 lg:self-start lg:pt-8 lg:w-full"
              aria-label="Comparison summary"
              style={{ top: `${SIDEBAR_STICKY_TOP}px` }}
            >
              <div className="border border-neutral-200/60 rounded-lg bg-white p-5 shadow-[0_1px_3px_0_rgba(0,0,0,0.06)]">
                <p className="text-neutral-500 text-xs uppercase tracking-wide mb-4">Comparison summary</p>
                {(productA.rating != null && productA.rating !== "") || (productB.rating != null && productB.rating !== "") ? (
                  <div className="space-y-2 mb-4">
                    {productA.rating != null && productA.rating !== "" && (
                      <p className="text-sm align-middle">
                        <span className="text-[#6E6E6E] text-xs">{productA.name}:</span>{" "}
                        <span className="text-[#10B981] font-semibold">{productA.rating}</span>
                        <span className="text-[#6E6E6E] text-xs ml-1">rating</span>
                      </p>
                    )}
                    {productB.rating != null && productB.rating !== "" && (
                      <p className="text-sm align-middle">
                        <span className="text-[#6E6E6E] text-xs">{productB.name}:</span>{" "}
                        <span className="text-[#10B981] font-semibold">{productB.rating}</span>
                        <span className="text-[#6E6E6E] text-xs ml-1">rating</span>
                      </p>
                    )}
                  </div>
                ) : null}
                <ul className="space-y-3 mb-6">
                  {sidebarWinners.map((w, i) => (
                    <li key={i} className="text-sm">
                      <span className="text-neutral-500">{w.label}</span>
                      <span className="ml-1 font-semibold text-[#1A2D48]">
                        → {w.winner === "A" ? productA.name : productB.name}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-neutral-200/60 pt-4 space-y-4">
                  <div className="space-y-1.5">
                    {productA.visitUrl != null && productA.visitUrl !== "" && (
                      <a
                        href={productA.visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center ${btnPrimary} text-sm py-2`}
                      >
                        Visit {productA.name}
                      </a>
                    )}
                    <Link
                      href={productA.reviewHref}
                      className="block text-center text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      View full {productA.name} review →
                    </Link>
                  </div>
                  <div className="space-y-1.5">
                    {productB.visitUrl != null && productB.visitUrl !== "" && (
                      <a
                        href={productB.visitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center ${btnPrimary} text-sm py-2`}
                      >
                        Visit {productB.name}
                      </a>
                    )}
                    <Link
                      href={productB.reviewHref}
                      className="block text-center text-sm font-medium text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      View full {productB.name} review →
                    </Link>
                  </div>
                  <Link
                    href={categoryHref}
                    className="block w-full text-center text-sm font-medium text-[#6E6E6E] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded pt-1"
                  >
                    ← {categoryLabel} hub
                  </Link>
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
