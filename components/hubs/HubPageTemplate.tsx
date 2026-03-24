"use client";

/**
 * Shared layout template for software category hub pages (e.g. /payroll, /accounting).
 * Use this for all category hubs so section order, spacing, typography, and UI stay consistent.
 *
 * Section order: Hero → Best roundup block → Section nav → How to choose (optional) →
 * Top picks → Comparison table → By scenario (optional custom content) → By trade
 * → Guides (optional) → Finder (optional) → Popular comparisons (optional) →
 * Education (optional) → FAQ → Methodology
 *
 * Future categories (CRM, scheduling, invoicing, field-service, time-tracking) should
 * pass the same prop shape with category-specific data.
 */

import Link from "next/link";
import { useState } from "react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Footer } from "@/components/Footer";
import { SectionNav } from "@/components/SectionNav";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import {
  getSoftwarePick,
  getSoftwarePickCategoryRoutes,
  toSoftwarePickCardProps,
  type SoftwarePickCategory,
} from "@/lib/data/softwarePickCards";
import {
  sectionRuleAccent,
  tableBodyRow,
  tableHeadRow,
  tableShell,
  trustIndicatorAffiliateButtonClass,
  trustIndicatorListClass,
} from "@/lib/design-tokens";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";

// ——— Design tokens (match homepage) ———
const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnPill =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const JUMP_LINKS_BASE = [
  { label: "Top picks", href: "#top-picks" },
  { label: "Compare", href: "#compare" },
  { label: "Find your fit", href: "#find-fit" },
  { label: "By scenario", href: "#by-scenario" },
  { label: "By trade", href: "#by-trade" },
  { label: "FAQs", href: "#faqs" },
  { label: "How we review", href: "#how-we-review" },
];
const JUMP_LINKS_HOW_TO_CHOOSE = { label: "How to choose", href: "#how-to-choose" };
const JUMP_LINKS_GUIDES = { label: "Guides", href: "#payroll-guides" };
const JUMP_LINKS_COMPARISONS = { label: "Comparisons", href: "#popular-comparisons" };

/** Hub “top picks” = canonical product slugs; optional `badge` overrides the default crown label */
export type FeaturedPickRef = {
  slug: string;
  badge?: string;
};

export type ComparisonTableRow = {
  tool: string;
  bestFor: string;
  price: string;
  rating: string;
  slug: string;
  logoSrc?: string;
};

export type ScenarioLink = { label: string; href: string };
export type TradeLink = { label: string; href: string };
export type FaqItem = { q: string; a: string };

export type HubPageTemplateProps = {
  title: string;
  intro: string;
  breadcrumbLabel: string;
  keyTakeaways: { label: string; anchor: string }[];
  softwarePickCategory: SoftwarePickCategory;
  featuredPicks: FeaturedPickRef[];
  featuredPicksTitle: string;
  featuredPicksSub: string;
  comparisonTable: {
    title: string;
    subtitle: string;
    rows: ComparisonTableRow[];
    detailsLinkBase: string;
  };
  scenarioLinks: {
    sectionTitle: string;
    sectionSub: string;
    description?: string;
    links: readonly ScenarioLink[];
    /** When true, first scenario pill gets stronger emphasis (e.g. roundup link) */
    highlightFirstLink?: boolean;
  };
  /** When set, replaces the default scenario pill row (e.g. editorial “by use case” blocks on a hub). */
  scenarioCustomContent?: React.ReactNode;
  tradeLinks: {
    sectionTitle: string;
    sectionSub: string;
    links: TradeLink[];
    /** Optional: when set, render links grouped under subheadings instead of a single flat list */
    groups?: { groupLabel: string; links: TradeLink[] }[];
  };
  faqItems: FaqItem[];
  faqTitle: string;
  faqSub: string;
  methodology: {
    title: string;
    sub: string;
    introParagraph?: string;
    bullets: string[];
  };
  finderSection?: {
    title: string;
    sub: string;
    content: React.ReactNode;
  };
  educationSection?: React.ReactNode;
  /** Optional: additional intro paragraphs and links (pillar page) */
  introExtended?: React.ReactNode;
  /** Optional: "How to choose" section before featured picks */
  howToChooseSection?: React.ReactNode;
  /** Optional: short line above comparison table */
  comparisonTableIntro?: string;
  /** Optional: guides / resources section (rendered after by-trade; educational / informational) */
  guidesSection?: React.ReactNode;
  /** Optional: popular comparisons section (after guides / finder) */
  popularComparisonsSection?: React.ReactNode;
  /** Optional: primary CTA in hero (e.g. "View Best Payroll Software") */
  heroCta?: { label: string; href: string };
  /** Optional: compact block between hero and next section (e.g. "Best Payroll Software Overall") */
  bestRoundupBlock?: { title: string; description: string; linkText: string; href: string };
  /** Optional: link near featured picks section (e.g. "See full rankings") */
  featuredPicksRankingsLink?: { label: string; href: string };
  /** Optional: link near comparison table (e.g. "See our full rankings") */
  comparisonTableRankingsLink?: { label: string; href: string };
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
    <div className="border-b border-stone-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1A2D48] text-sm sm:text-base">{question}</span>
        <span
          className={`shrink-0 text-[#57534E] transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pr-8 sm:px-5">
          <p className="text-[#57534E] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export function HubPageTemplate({
  title,
  intro,
  breadcrumbLabel,
  keyTakeaways,
  softwarePickCategory,
  featuredPicks,
  featuredPicksTitle,
  featuredPicksSub,
  comparisonTable,
  scenarioLinks,
  tradeLinks,
  faqItems,
  faqTitle,
  faqSub,
  methodology,
  finderSection,
  educationSection,
  introExtended,
  howToChooseSection,
  comparisonTableIntro,
  guidesSection,
  popularComparisonsSection,
  heroCta,
  bestRoundupBlock,
  featuredPicksRankingsLink,
  comparisonTableRankingsLink,
  scenarioCustomContent,
}: HubPageTemplateProps) {
  const pickRoutes = getSoftwarePickCategoryRoutes(softwarePickCategory);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);
  const jumpLinks = [
    ...(howToChooseSection ? [JUMP_LINKS_HOW_TO_CHOOSE] : []),
    ...JUMP_LINKS_BASE.slice(0, 2), // Top picks, Compare
    ...JUMP_LINKS_BASE.slice(2, 5), // Find your fit, By scenario, By trade
    ...(guidesSection ? [JUMP_LINKS_GUIDES] : []),
    ...(popularComparisonsSection ? [JUMP_LINKS_COMPARISONS] : []),
    ...JUMP_LINKS_BASE.slice(5),
  ];

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— 1) Hub intro (breadcrumb + H1 + intro + trust badges + key takeaways) ——— */}
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: breadcrumbLabel },
              ]}
              className="mb-4"
            />
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              {intro}
            </p>
            {introExtended != null && (
              <div className="mt-4 text-[#57534E] text-base leading-relaxed max-w-3xl space-y-3">
                {introExtended}
              </div>
            )}
            {heroCta != null && (
              <div className="mt-5">
                <Link href={heroCta.href} className={btnPrimary}>
                  {heroCta.label}
                </Link>
              </div>
            )}
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Updated monthly
              </span>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Independent reviews
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

            {/* Key takeaways card */}
            <div className="mt-6 rounded-lg border border-stone-200 bg-white p-4 shadow-sm sm:p-5">
              <h2 className="text-[#1A2D48] text-sm font-bold uppercase tracking-wide">Key takeaways</h2>
              <ul className="mt-3 space-y-2">
                {keyTakeaways.map((item) => (
                  <li key={item.anchor} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
                    <a
                      href={item.anchor}
                      className="text-[#1A2D48] text-sm font-medium hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ——— Best roundup block (optional) ——— */}
        {bestRoundupBlock != null && (
          <section className="border-b border-stone-200/80 bg-white py-6 sm:py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-[#1A2D48] text-xl font-bold sm:text-2xl">{bestRoundupBlock.title}</h2>
              <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
                {bestRoundupBlock.description}
              </p>
              <Link
                href={bestRoundupBlock.href}
                className="mt-3 inline-block text-base font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
              >
                {bestRoundupBlock.linkText}
              </Link>
            </div>
          </section>
        )}

        {/* ——— Section nav: below hero, in flow; sticks under navbar when scrolling ——— */}
        <SectionNav items={jumpLinks} sticky offsetTop={72} />

        {/* ——— How to choose (optional) ——— */}
        {howToChooseSection != null && (
          <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {howToChooseSection}
            </div>
          </section>
        )}

        {/* ——— A) Featured picks ——— */}
        <section id="top-picks" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-4 sm:mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
              <div>
                <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{featuredPicksTitle}</h2>
                <div className={sectionRuleAccent} aria-hidden />
                <p className="mt-1 text-[#57534E] text-sm sm:text-base">{featuredPicksSub}</p>
              </div>
              {featuredPicksRankingsLink != null && (
                <Link
                  href={featuredPicksRankingsLink.href}
                  className="shrink-0 text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
                >
                  {featuredPicksRankingsLink.label}
                </Link>
              )}
            </div>
            <div className="mt-6 space-y-10">
              {featuredPicks.map((ref) => {
                const canonical = getSoftwarePick(softwarePickCategory, ref.slug);
                if (canonical == null) return null;
                return (
                  <SoftwarePickCard
                    key={ref.slug}
                    {...toSoftwarePickCardProps(canonical, pickRoutes, {
                      id: `pick-${ref.slug}`,
                      badgeText: ref.badge,
                    })}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* ——— B) Comparison table ——— */}
        <section id="compare" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={comparisonTable.subtitle}>{comparisonTable.title}</SectionTitle>
            {comparisonTableIntro != null && comparisonTableIntro.length > 0 && (
              <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
                {comparisonTableIntro}
              </p>
            )}
            {comparisonTableRankingsLink != null && (
              <p className="mt-2">
                <Link
                  href={comparisonTableRankingsLink.href}
                  className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
                >
                  {comparisonTableRankingsLink.label}
                </Link>
              </p>
            )}
            <div className={`mt-4 ${tableShell}`}>
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className={tableHeadRow}>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Tool</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Rating</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]"></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.rows.map((row) => (
                    <tr key={row.slug} className={tableBodyRow}>
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          {row.logoSrc != null && (
                            <img
                              src={row.logoSrc}
                              alt=""
                              className="h-8 w-auto max-w-[80px] object-contain"
                            />
                          )}
                          <span>{row.tool}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#57534E]">{row.bestFor}</td>
                      <td className="px-4 py-4 text-[#57534E]">{row.price}</td>
                      <td className="px-4 py-4 font-semibold text-[#10B981]">{row.rating}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={`${comparisonTable.detailsLinkBase}${row.slug}`}
                          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
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

        {/* ——— C) Best by scenario ——— */}
        <section id="by-scenario" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {scenarioCustomContent != null ? (
              scenarioCustomContent
            ) : (
              <>
                <SectionTitle sub={scenarioLinks.sectionSub}>{scenarioLinks.sectionTitle}</SectionTitle>
                {scenarioLinks.description != null && (
                  <p className="mt-1 text-[#57534E] text-sm">{scenarioLinks.description}</p>
                )}
                <div className="mt-4 flex flex-wrap items-center gap-2.5">
                  {scenarioLinks.links.map(({ label, href }, index) => (
                    <Link
                      key={href}
                      href={href}
                      className={
                        scenarioLinks.highlightFirstLink === true && index === 0
                          ? "inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[#10B981] bg-[#10B981]/10 px-4 py-2.5 text-sm font-bold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                          : btnPill
                      }
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ——— D) By trade / business type ——— */}
        <section id="by-trade" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={tradeLinks.sectionSub}>{tradeLinks.sectionTitle}</SectionTitle>
            {tradeLinks.groups != null && tradeLinks.groups.length > 0 ? (
              <div className="mt-4 space-y-6">
                {tradeLinks.groups.map((group) => (
                  <div key={group.groupLabel}>
                    <h3 className="text-[#1A2D48] text-sm font-bold uppercase tracking-wide text-[#57534E] mb-2.5">
                      {group.groupLabel}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2.5">
                      {group.links.map(({ label, href }) => (
                        <Link key={href} href={href} className={btnPill}>
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                {tradeLinks.links.map(({ label, href }) => (
                  <Link key={href} href={href} className={btnPill}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ——— Guides section (optional) ——— */}
        {guidesSection != null && (
          <section id="payroll-guides" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {guidesSection}
            </div>
          </section>
        )}

        {/* ——— E) Finder / filters (optional) ——— */}
        {finderSection != null && (
          <section id="find-fit" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle sub={finderSection.sub}>{finderSection.title}</SectionTitle>
              {finderSection.content}
            </div>
          </section>
        )}

        {/* ——— Popular comparisons (optional) ——— */}
        {popularComparisonsSection != null && (
          <section id="popular-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {popularComparisonsSection}
            </div>
          </section>
        )}

        {/* ——— F) Education (optional) ——— */}
        {educationSection != null && (
          <section className="border-b border-stone-200/80 bg-white py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              {educationSection}
            </div>
          </section>
        )}

        {/* ——— G) FAQ ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={faqSub}>{faqTitle}</SectionTitle>
            <div className="mt-4 rounded-lg border border-stone-200 bg-white shadow-sm overflow-hidden">
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

        {/* ——— H) Methodology ——— */}
        <section id="how-we-review" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={methodology.sub}>{methodology.title}</SectionTitle>
            {methodology.introParagraph != null && (
              <p className="mt-2 text-[#57534E] text-sm leading-relaxed">
                {methodology.introParagraph}
              </p>
            )}
            <ul className="mt-4 space-y-2 text-[#57534E] text-sm leading-relaxed">
              {methodology.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[#57534E] text-sm leading-relaxed">
              We may earn a commission when you purchase through our links. This does not affect our recommendations.{" "}
              <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Affiliate disclosure
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />

      {/* Affiliate modal */}
      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-md"
            role="dialog"
            aria-labelledby="hub-affiliate-title"
            aria-modal="true"
          >
            <h3 id="hub-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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
