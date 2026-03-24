"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  getSoftwarePick,
  getSoftwarePickCategoryRoutes,
  toSoftwarePickCardProps,
  type SoftwarePickCategory,
} from "@/lib/data/softwarePickCards";
import { sectionRuleAccent, tableBodyRow, tableHeadRow, tableShell } from "@/lib/design-tokens";

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

export type AlternativesTopPick = {
  slug: string;
  name: string;
  logoSrc: string;
  rating: string;
  bestFor: string;
  description: string;
  reviewHref: string;
  compareHref?: string;
  startingPrice?: string;
  /** Used in comparison table when building rows from picks */
  standoutFeature?: string;
};

export type AlternativesTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  standoutFeature: string;
  reviewHref: string;
  payrollTypes?: string;
};

export type AlternativesEditorialBlock = {
  heading: string;
  body: string;
};

export type AlternativesDetailBlock = {
  productName: string;
  heading: string;
  body: string;
  reviewHref: string;
  compareHref?: string;
};

export type AlternativesLink = { label: string; href: string };

/** Related comparisons grid — hub-style cards (logos + teaser), same pattern as field-service “Popular comparisons”. */
export type AlternativesRelatedComparison = {
  href: string;
  /** e.g. "Jobber vs Housecall Pro" */
  label: string;
  /** Short teaser under the title; truncated in UI */
  summary?: string;
  productA?: { logoSrc?: string };
  productB?: { logoSrc?: string };
};

export type AlternativesFaqItem = { q: string; a: string };

export type AlternativesTemplateProps = {
  title: string;
  subtitle: string;
  productName: string;
  productSlug: string;
  categoryHref: string;
  categoryLabel: string;
  originalReviewHref: string;
  quickAnswerParagraphs: string[];
  whyPeopleLookForAlternatives: AlternativesEditorialBlock[];
  topAlternatives: AlternativesTopPick[];
  comparisonTableRows: AlternativesTableRow[];
  detailedAlternatives: AlternativesDetailBlock[];
  howToChoose: AlternativesEditorialBlock[];
  relatedComparisons: AlternativesRelatedComparison[];
  relatedResources: AlternativesLink[];
  faqItems: AlternativesFaqItem[];
  /** Optional: show payroll types column in comparison table */
  showPayrollTypesColumn?: boolean;
  /** When set, “Top alternatives” uses canonical SoftwarePickCard data from the registry (with `bestFor` as badge override); missing slugs fall back to compact cards. */
  softwarePickCategory?: SoftwarePickCategory;
};

const DEFAULT_RELATED_COMPARISON_SUMMARY =
  "Side-by-side features, pricing, and recommendations to help you choose the right fit.";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

export function AlternativesTemplate({
  title,
  subtitle,
  productName,
  categoryHref,
  categoryLabel,
  originalReviewHref,
  quickAnswerParagraphs,
  whyPeopleLookForAlternatives,
  topAlternatives,
  comparisonTableRows,
  detailedAlternatives,
  howToChoose,
  relatedComparisons,
  relatedResources,
  faqItems,
  showPayrollTypesColumn = false,
  softwarePickCategory,
}: AlternativesTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const pickRoutes = useMemo(
    () => (softwarePickCategory != null ? getSoftwarePickCategoryRoutes(softwarePickCategory) : null),
    [softwarePickCategory]
  );

  const breadcrumbLabel = `Best ${productName} alternatives`;

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— 1) Hero ——— */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: categoryLabel, href: categoryHref },
                { label: breadcrumbLabel },
              ]}
              className="mb-4"
            />
            {comparisonTableRows[0] && (
              <div className="mb-4">
                <img
                  src={comparisonTableRows[0].logoSrc}
                  alt=""
                  className="h-14 w-auto max-w-[140px] object-contain sm:h-16 sm:max-w-[160px]"
                />
              </div>
            )}
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              {subtitle}
            </p>
            <p className="mt-4 text-sm text-[#57534E]">
              <Link href={originalReviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Read our {productName} review
              </Link>
              {" "}for full details on features, pricing, and pros and cons.
            </p>
            <div className="mt-5">
              <a href="#top-alternatives" className={btnPrimary}>
                Jump to top alternatives
              </a>
            </div>
          </div>
        </section>

        {/* ——— 2) Quick answer ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Who should switch and which alternative fits best.">
              Quick answer
            </SectionTitle>
            <div className="mt-4 space-y-3 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              {quickAnswerParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Why people look for alternatives ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Common reasons teams look for a change.">
              Why people look for {productName} alternatives
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              {whyPeopleLookForAlternatives.map((block, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#1A2D48] text-base">{block.heading}</h3>
                  <p className="mt-1">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 4) Top alternatives list ——— */}
        <section id="top-alternatives" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Editorially ranked alternatives we recommend.">
              Top {productName} alternatives
            </SectionTitle>
            <div className="mt-6 space-y-10">
              {topAlternatives.map((alt) => {
                const canonical =
                  softwarePickCategory != null && pickRoutes != null
                    ? getSoftwarePick(softwarePickCategory, alt.slug)
                    : undefined;
                if (canonical != null && pickRoutes != null) {
                  return (
                    <SoftwarePickCard
                      key={alt.slug}
                      {...toSoftwarePickCardProps(canonical, pickRoutes, {
                        id: `alt-${alt.slug}`,
                        badgeText: alt.bestFor,
                      })}
                    />
                  );
                }
                return (
                  <article
                    key={alt.slug}
                    className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <img src={alt.logoSrc} alt="" className="h-10 w-auto max-w-[100px] object-contain" />
                      <span className="text-[#10B981] font-bold">{alt.rating}</span>
                      {alt.startingPrice && (
                        <span className="rounded-md border border-stone-200 bg-white px-2 py-0.5 text-xs font-medium text-[#57534E]">
                          {alt.startingPrice}
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 text-[#1A2D48] text-xl font-bold">
                      <Link
                        href={alt.reviewHref}
                        className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        {alt.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-[#57534E] text-sm font-medium">Best for: {alt.bestFor}</p>
                    <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{alt.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-stone-200 pt-4">
                      <Link
                        href={alt.reviewHref}
                        className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Read review →
                      </Link>
                      {alt.compareHref && (
                        <Link
                          href={alt.compareHref}
                          className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
                          Compare →
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ——— 5) Comparison table ——— */}
        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">
              Compare alternatives
            </SectionTitle>
            <div className={`mt-4 ${tableShell}`}>
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className={tableHeadRow}>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    {showPayrollTypesColumn && (
                      <th className="px-4 py-3 font-bold text-[#1A2D48]">Payroll types</th>
                    )}
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Standout feature</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTableRows.map((row) => (
                    <tr key={row.slug} className={tableBodyRow}>
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={row.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {row.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#57534E]">{row.bestFor}</td>
                      <td className="px-4 py-4 text-[#57534E]">{row.startingPrice}</td>
                      {showPayrollTypesColumn && (
                        <td className="px-4 py-4 text-[#57534E]">{row.payrollTypes ?? "—"}</td>
                      )}
                      <td className="px-4 py-4 text-[#57534E]">{row.standoutFeature}</td>
                      <td className="px-4 py-4">
                        <Link href={row.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          Read review
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ——— 6) Detailed alternative sections ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="When to choose each alternative.">
              Detailed look at each alternative
            </SectionTitle>
            <div className="mt-4 space-y-8">
              {detailedAlternatives.map((block, i) => (
                <div key={i} id={`alt-${block.productName.toLowerCase().replace(/\s+/g, "-")}`}>
                  <h3 className="text-[#1A2D48] text-lg font-bold">{block.productName}</h3>
                  <p className="mt-1 font-medium text-[#57534E] text-sm">{block.heading}</p>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{block.body}</p>
                  <p className="mt-3">
                    <Link href={block.reviewHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      Read {block.productName} review
                    </Link>
                    {block.compareHref && (
                      <>
                        {" · "}
                        <Link href={block.compareHref} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                          Compare
                        </Link>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 7) How to choose ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when comparing options.">
              How to choose the right alternative
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              {howToChoose.map((block, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#1A2D48] text-base">{block.heading}</h3>
                  <p className="mt-1">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 8) Related comparisons ——— */}
        {relatedComparisons.length > 0 && (
          <section className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle sub="Head-to-head comparisons to narrow your choice.">
                Related comparisons
              </SectionTitle>
              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedComparisons.map((item) => {
                  const rawSummary = item.summary ?? DEFAULT_RELATED_COMPARISON_SUMMARY;
                  const summary =
                    rawSummary.length > 140 ? `${rawSummary.slice(0, 140).trim()}…` : rawSummary;
                  const showLogoRow = Boolean(item.productA?.logoSrc && item.productB?.logoSrc);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                    >
                      {showLogoRow && (
                        <div className="flex items-center gap-3">
                          <img
                            src={item.productA!.logoSrc}
                            alt=""
                            className="h-10 w-auto max-w-[80px] object-contain object-left"
                          />
                          <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                            vs
                          </span>
                          <img
                            src={item.productB!.logoSrc}
                            alt=""
                            className="h-10 w-auto max-w-[80px] object-contain object-left"
                          />
                        </div>
                      )}
                      <h3
                        className={`text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981] ${
                          showLogoRow ? "mt-3" : ""
                        }`}
                      >
                        {item.label}
                      </h3>
                      <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{summary}</p>
                      <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                        Compare →
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ——— 9) Related resources ——— */}
        <section className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More ways to explore.">
              Related resources
            </SectionTitle>
            <ul className="mt-4 space-y-2 text-sm text-[#57534E] leading-relaxed">
              {relatedResources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ——— 10) FAQs ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers.">
              FAQs
            </SectionTitle>
            <div className="mt-4 rounded-lg border border-stone-200 bg-white shadow-sm overflow-hidden">
              {faqItems.map((item, i) => (
                <FaqAccordionItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaqIndex === i}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  isFirst={i === 0}
                  isLast={i === faqItems.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
