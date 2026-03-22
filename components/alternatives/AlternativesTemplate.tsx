"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import {
  getSoftwarePick,
  getSoftwarePickCategoryRoutes,
  toSoftwarePickCardProps,
  type SoftwarePickCategory,
} from "@/lib/data/softwarePickCards";

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

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
  relatedComparisons: AlternativesLink[];
  relatedResources: AlternativesLink[];
  faqItems: AlternativesFaqItem[];
  /** Optional: show payroll types column in comparison table */
  showPayrollTypesColumn?: boolean;
  /** When set, “Top alternatives” uses canonical SoftwarePickCard data from the registry (with `bestFor` as badge override); missing slugs fall back to compact cards. */
  softwarePickCategory?: SoftwarePickCategory;
};

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>}
    </div>
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
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1A2D48] text-sm sm:text-base">{question}</span>
        <span className={`shrink-0 text-[#6E6E6E] transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pr-8 sm:px-5">
          <p className="text-[#6E6E6E] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
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
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* ——— 1) Hero ——— */}
        <section className="bg-[#F8FAFC]">
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
            <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              {subtitle}
            </p>
            <p className="mt-4 text-sm text-[#6E6E6E]">
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
        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Who should switch and which alternative fits best.">
              Quick answer
            </SectionTitle>
            <div className="mt-4 space-y-3 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
              {quickAnswerParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Why people look for alternatives ——— */}
        <section className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Common reasons teams look for a change.">
              Why people look for {productName} alternatives
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#6E6E6E] text-sm leading-relaxed">
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
        <section id="top-alternatives" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
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
                    className="flex flex-col rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <img src={alt.logoSrc} alt="" className="h-10 w-auto max-w-[100px] object-contain" />
                      <span className="text-[#10B981] font-bold">{alt.rating}</span>
                      {alt.startingPrice && (
                        <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-xs font-medium text-[#6E6E6E]">
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
                    <p className="mt-1 text-[#6E6E6E] text-sm font-medium">Best for: {alt.bestFor}</p>
                    <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">{alt.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-4">
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
        <section id="comparison-table" className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">
              Compare alternatives
            </SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F8FAFC]">
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
                    <tr key={row.slug} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/70">
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={row.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {row.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#6E6E6E]">{row.bestFor}</td>
                      <td className="px-4 py-4 text-[#6E6E6E]">{row.startingPrice}</td>
                      {showPayrollTypesColumn && (
                        <td className="px-4 py-4 text-[#6E6E6E]">{row.payrollTypes ?? "—"}</td>
                      )}
                      <td className="px-4 py-4 text-[#6E6E6E]">{row.standoutFeature}</td>
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
        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="When to choose each alternative.">
              Detailed look at each alternative
            </SectionTitle>
            <div className="mt-4 space-y-8">
              {detailedAlternatives.map((block, i) => (
                <div key={i} id={`alt-${block.productName.toLowerCase().replace(/\s+/g, "-")}`}>
                  <h3 className="text-[#1A2D48] text-lg font-bold">{block.productName}</h3>
                  <p className="mt-1 font-medium text-[#6E6E6E] text-sm">{block.heading}</p>
                  <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">{block.body}</p>
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
        <section className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when comparing options.">
              How to choose the right alternative
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#6E6E6E] text-sm leading-relaxed">
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
        <section className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">
              Related comparisons
            </SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {relatedComparisons.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 9) Related resources ——— */}
        <section className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="More ways to explore.">
              Related resources
            </SectionTitle>
            <ul className="mt-4 space-y-2 text-sm text-[#6E6E6E] leading-relaxed">
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
        <section id="faqs" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers.">
              FAQs
            </SectionTitle>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {faqItems.map((item, i) => (
                <FaqAccordionItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaqIndex === i}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
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
