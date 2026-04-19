"use client";

import Link from "next/link";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import {
  sectionRuleAccent,
  tableBodyRow,
  tableHeadRow,
  tableShell,
  trustIndicatorAffiliateButtonClass,
  trustIndicatorListClass,
} from "@/lib/design-tokens";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import { ComparisonTeaserLinkCard } from "@/components/comparisons/ComparisonTeaserLinkCard";
import { formatProductCardStartingPrice } from "@/lib/utils/formatProductCardStartingPrice";

// ——— Design tokens (match best-payroll-software / hub) ———
const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const DEFAULT_RELATED_COMPARISON_SUMMARY =
  "Side-by-side features, pricing, and recommendations to help you choose the right fit.";

export type BestForFeaturedProduct = {
  slug: string;
  name: string;
  badge: string;
  description: string;
  rating: string;
  startingPrice: string;
  reviewHref: string;
  visitUrl: string;
  logoSrc: string;
};

export type BestForTableRow = {
  slug: string;
  name: string;
  logoSrc: string;
  bestFor: string;
  startingPrice: string;
  payrollTypes?: string;
  standoutFeature: string;
  reviewHref: string;
};

export type BestForEditorialBlock = {
  heading: string;
  body: string;
  /** When the heading does not match `featuredProducts[].name`, set this to attach logo and links in “Why we recommend these tools”. */
  matchProductSlug?: string;
};

export type BestForReviewLink = {
  name: string;
  href: string;
};

export type BestForComparisonLink = {
  label: string;
  href: string;
  /** Set by `enrichBestForRelatedComparisons` (server) or manually for hub-style cards */
  summary?: string;
  productALogoSrc?: string;
  productBLogoSrc?: string;
  productAName?: string;
  productBName?: string;
};

export type BestForGuideLink = {
  label: string;
  href: string;
};

export type BestForFaqItem = {
  q: string;
  a: string;
};

export type BestForTemplateProps = {
  title: string;
  subtitle: string;
  useCase: string;
  categoryHref: string;
  categoryLabel: string;
  introParagraph?: string;
  freshnessText?: string;
  /** Override section sub for "Top picks" (default: payroll copy). */
  topPicksSub?: string;
  /** Override section sub under "What to look for" (default: payroll-oriented copy). */
  editorialSub?: string;
  /** Override section sub for "Why these picks" (default: payroll copy). */
  whyThesePicksSub?: string;
  /** Override "See also" block; when set, replaces default payroll roundup/compare links. */
  seeAlsoBlock?: { roundupLabel: string; roundupHref: string; compareLabel: string; compareHref: string } | null;
  featuredProducts: BestForFeaturedProduct[];
  comparisonTableRows: BestForTableRow[];
  editorialGuidance: BestForEditorialBlock[];
  whyThesePicks: BestForEditorialBlock[];
  relatedReviews: BestForReviewLink[];
  relatedComparisons: BestForComparisonLink[];
  /** Optional: guide links (e.g. accounting-for-contractors) to show after comparisons. */
  relatedGuides?: BestForGuideLink[] | null;
  faqItems: BestForFaqItem[];
};

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

function normalizeWhyPickHeadingKey(heading: string): string {
  return heading
    .trim()
    .replace(/\s*\([^)]*\)\s*$/u, "")
    .trim()
    .toLowerCase();
}

function resolveFeaturedProductForWhyPick(
  block: BestForEditorialBlock,
  products: BestForFeaturedProduct[]
): BestForFeaturedProduct | undefined {
  if (block.matchProductSlug) {
    return products.find((p) => p.slug === block.matchProductSlug);
  }
  const key = normalizeWhyPickHeadingKey(block.heading);
  return products.find((p) => normalizeWhyPickHeadingKey(p.name) === key);
}

function WhyThesePickBlock({
  block,
  pick,
}: {
  block: BestForEditorialBlock;
  pick: BestForFeaturedProduct | undefined;
}) {
  if (pick == null) {
    return (
      <div>
        <h3 className="font-bold text-[#1A2D48] text-base">{block.heading}</h3>
        <p className="mt-1 text-[#57534E] text-sm leading-relaxed">{block.body}</p>
      </div>
    );
  }

  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        <Link
          href={pick.reviewHref}
          className="flex shrink-0 justify-center rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] sm:justify-start"
          aria-label={`${pick.name} — read full review`}
        >
          <img
            src={pick.logoSrc}
            alt=""
            className="h-12 w-auto max-w-[140px] object-contain object-left"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-[#1A2D48]">
              <Link
                href={pick.reviewHref}
                className="rounded hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                {pick.name}
              </Link>
            </h3>
            <span className="rounded-md border border-[#10B981]/20 bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#10B981]">
              {pick.badge}
            </span>
            <span className="text-sm font-bold text-[#10B981]">{pick.rating}</span>
            <span className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs font-medium text-[#57534E]">
              {formatProductCardStartingPrice(pick.startingPrice)}
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-[#57534E]">{block.body}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            <Link
              href={pick.reviewHref}
              className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
            >
              Read full review →
            </Link>
            <a
              href={pick.visitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline"
            >
              Visit site
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedCard({ pick }: { pick: BestForFeaturedProduct }) {
  return (
    <article className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <img src={pick.logoSrc} alt="" className="h-10 w-auto max-w-[120px] object-contain object-left" />
        <span className="rounded-md bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#10B981] border border-[#10B981]/20">
          {pick.badge}
        </span>
        <span className="text-[#10B981] font-bold">{pick.rating}</span>
        <span className="rounded-md border border-stone-200 bg-stone-50 px-2 py-0.5 text-xs font-medium text-[#57534E]">
          {formatProductCardStartingPrice(pick.startingPrice)}
        </span>
      </div>
      <h3 className="mt-3 text-[#1A2D48] text-xl font-bold">
        <Link href={pick.reviewHref} className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
          {pick.name}
        </Link>
      </h3>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed">{pick.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-stone-100 pt-4">
        <a href={pick.visitUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
          Visit site
        </a>
        <Link href={pick.reviewHref} className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
          Read review →
        </Link>
      </div>
    </article>
  );
}

export function BestForTemplate({
  title,
  subtitle,
  useCase,
  categoryHref,
  categoryLabel,
  introParagraph,
  freshnessText = "Updated regularly",
  topPicksSub,
  editorialSub,
  whyThesePicksSub,
  seeAlsoBlock,
  featuredProducts,
  comparisonTableRows,
  editorialGuidance,
  whyThesePicks,
  relatedReviews,
  relatedComparisons,
  relatedGuides,
  faqItems,
}: BestForTemplateProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  const breadcrumbLabel = useCase.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const defaultTopPicksSub = `Our top payroll picks for ${breadcrumbLabel.toLowerCase()}.`;
  const defaultEditorialSub = `What to look for when you're choosing payroll as ${breadcrumbLabel.toLowerCase()}.`;
  const defaultWhySub = `How each pick fits ${breadcrumbLabel.toLowerCase()}: what to validate in a trial, with links to our full reviews and official sites.`;

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
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              {subtitle}
            </p>
            {introParagraph != null && introParagraph !== "" && (
              <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
                {introParagraph}
              </p>
            )}
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                {freshnessText}
              </span>
              <button
                type="button"
                onClick={() => setAffiliateOpen(true)}
                className={trustIndicatorAffiliateButtonClass}
              >
                <TrustIndicatorMark />
                Affiliate disclosure
              </button>
            </div>
            <div className="mt-5">
              <a href="#top-picks" className={btnPrimary}>
                Jump to top picks
              </a>
            </div>
          </div>
        </section>

        {/* ——— 2) Top picks for this use case ——— */}
        <section id="top-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={topPicksSub ?? defaultTopPicksSub}>
              Top picks for this use case
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((pick) => (
                <FeaturedCard key={pick.slug} pick={pick} />
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Comparison table ——— */}
        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">
              Compare options
            </SectionTitle>
            <div className={`mt-4 ${tableShell}`}>
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className={tableHeadRow}>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    {comparisonTableRows.some((r) => r.payrollTypes != null) && (
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
                      {comparisonTableRows.some((r) => r.payrollTypes != null) && (
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

        {/* ——— 4) What to look for ——— */}
        <section id="what-to-look-for" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={editorialSub ?? defaultEditorialSub}>
              What to look for
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              {editorialGuidance.map((block, i) => (
                <div key={i}>
                  <h3 className="font-bold text-[#1A2D48] text-base">{block.heading}</h3>
                  <p className="mt-1">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 5) Why we recommend these tools (editorial + SEO) ——— */}
        <section id="why-these-picks" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={whyThesePicksSub ?? defaultWhySub}>
              Why we recommend these tools
            </SectionTitle>
            <div className="mt-4 space-y-5 text-[#57534E] text-sm leading-relaxed">
              {whyThesePicks.map((block, i) => (
                <WhyThesePickBlock
                  key={i}
                  block={block}
                  pick={resolveFeaturedProductForWhyPick(block, featuredProducts)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— 6) Related reviews ——— */}
        <section id="related-reviews" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Deep dives on each pick.">
              Related reviews
            </SectionTitle>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {relatedReviews.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    {item.name} review
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ——— 7) Related comparisons ——— */}
        <section id="related-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">
              Related comparisons
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedComparisons.map((item) => (
                <ComparisonTeaserLinkCard
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  summary={item.summary ?? DEFAULT_RELATED_COMPARISON_SUMMARY}
                  productALogoSrc={item.productALogoSrc}
                  productBLogoSrc={item.productBLogoSrc}
                  productAName={item.productAName}
                  productBName={item.productBName}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— See also: best roundup + comparisons (or category overrides) ——— */}
        <section id="see-also" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-[#57534E] text-sm leading-relaxed">
              {seeAlsoBlock != null ? (
                <>
                  For more options across all use cases, see our{" "}
                  <Link href={seeAlsoBlock.roundupHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    {seeAlsoBlock.roundupLabel}
                  </Link>
                  . To compare platforms side-by-side, see our{" "}
                  <Link href={seeAlsoBlock.compareHref} className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    {seeAlsoBlock.compareLabel}
                  </Link>
                  .
                </>
              ) : (
                <>
                  For more options across all use cases, see our{" "}
                  <Link href="/payroll/best-payroll-software" className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    best payroll software roundup
                  </Link>
                  . To compare platforms side-by-side, see our{" "}
                  <Link href="/payroll/compare" className="font-semibold text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    payroll software comparisons
                  </Link>
                  .
                </>
              )}
            </p>
          </div>
        </section>

        {/* ——— Related guides (optional) ——— */}
        {relatedGuides != null && relatedGuides.length > 0 && (
          <section id="related-guides" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle sub="More reading for this use case.">
                Related guides
              </SectionTitle>
              <ul className="mt-4 flex flex-wrap gap-2.5">
                {relatedGuides.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ——— 8) FAQ ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers for this use case.">
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

      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="best-for-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-for-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
              Affiliate disclosure
            </h3>
            <p className="mt-3 text-[#57534E] text-sm leading-relaxed">
              We may earn a commission when you purchase through our links. This does not affect our recommendations.
            </p>
            <button type="button" onClick={() => setAffiliateOpen(false)} className={`mt-4 ${btnPrimary}`}>
              Got it
            </button>
          </div>
        </>
      )}
    </div>
  );
}
