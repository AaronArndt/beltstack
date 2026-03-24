"use client";

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
} from "@/lib/data/softwarePickCards";
import {
  getSoftwareCategoryHubHref,
  getSoftwareCategoryHubLabel,
  getSoftwareCategoryShortLabel,
} from "@/lib/data/tradeHubs";
import type { TradeHubCategoryStackItem, TradeHubDefinition } from "@/lib/types/tradeHub";
import type { SoftwarePickCategory } from "@/lib/data/softwarePickCards";
import {
  sectionRuleAccent,
  trustIndicatorAffiliateButtonClass,
  trustIndicatorListClass,
} from "@/lib/design-tokens";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub != null && sub.length > 0 && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
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
        <span className={`shrink-0 text-[#57534E] transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden>
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

/**
 * One category in the core stack: no outer card — spacing + optional top divider;
 * SoftwarePickCard remains the primary product container.
 */
function CategoryStackGroup({ item, index }: { item: TradeHubCategoryStackItem; index: number }) {
  const cat = item.softwareCategory as SoftwarePickCategory;
  const routes = getSoftwarePickCategoryRoutes(cat);
  const hubHref = item.categoryHubHrefOverride ?? getSoftwareCategoryHubHref(cat);
  const shortLabel = getSoftwareCategoryShortLabel(cat);
  const defaultHubCta = `Browse ${shortLabel} hub →`;
  const hubLabel = item.categoryHubLinkLabel ?? defaultHubCta;
  const hubAria = item.categoryHubLinkLabel ?? `${getSoftwareCategoryHubLabel(cat)} — opens category hub`;

  const picks = item.productSlugs
    .map((slug) => {
      const pick = getSoftwarePick(cat, slug);
      return pick != null ? { slug, pick } : null;
    })
    .filter((x): x is { slug: string; pick: NonNullable<ReturnType<typeof getSoftwarePick>> } => x != null);

  return (
    <div
      id={`cat-${item.id}`}
      className={`scroll-mt-section ${index > 0 ? "border-t border-neutral-200/60 pt-12 sm:pt-16" : ""}`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <h3 className="min-w-0 text-xl font-bold leading-snug tracking-tight text-[#1A2D48] sm:text-2xl sm:leading-tight">
          {item.heading}
        </h3>
        <Link
          href={hubHref}
          className="shrink-0 text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded sm:pt-1"
          aria-label={hubAria}
        >
          {hubLabel}
        </Link>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-[15px] sm:leading-relaxed">{item.body}</p>
      <div className="mt-8 space-y-10 sm:mt-10">
        {picks.map(({ slug, pick }) => (
          <SoftwarePickCard
            key={slug}
            {...toSoftwarePickCardProps(pick, routes, { id: `trade-pick-${item.id}-${slug}` })}
          />
        ))}
      </div>
    </div>
  );
}

function buildNavItems(data: TradeHubDefinition): { label: string; href: string }[] {
  const items: { label: string; href: string }[] = [
    { label: "Software stack", href: "#software-stack" },
    { label: "Use cases", href: "#use-cases" },
    { label: "How to choose", href: "#how-to-choose" },
  ];
  if (data.identitySegments != null && data.identitySegments.length > 0) {
    items.push({ label: "Operating models", href: "#operating-models" });
  }
  items.push({ label: "Next steps", href: "#next-steps" });
  if (data.faqs != null && data.faqs.length > 0) {
    items.push({ label: "FAQs", href: "#faqs" });
  }
  if (data.methodologyBullets != null && data.methodologyBullets.length > 0) {
    items.push({ label: "Methodology", href: "#methodology" });
  }
  return items;
}

export function TradeHubPage({ data }: { data: TradeHubDefinition }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);
  const navItems = buildNavItems(data);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: data.breadcrumbLabel }]} className="mb-4" />
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-3xl lg:text-4xl">{data.title}</h1>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-[#57534E]">{data.intro}</p>
            {data.heroCategoryLine != null && data.heroCategoryLine.length > 0 && (
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#57534E]">{data.heroCategoryLine}</p>
            )}
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Trade software stack guide
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

            <div className="mt-6 rounded-lg border border-stone-200/80 bg-white p-4 shadow-sm sm:p-5">
              <h2 className="text-sm font-bold uppercase tracking-wide text-[#1A2D48]">Key takeaways</h2>
              <ul className="mt-3 space-y-2">
                {data.keyTakeaways.map((item) => (
                  <li key={item.anchor} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
                    <a
                      href={item.anchor}
                      className="text-sm font-medium text-[#1A2D48] hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <SectionNav items={navItems} sticky offsetTop={72} />

        <section id="software-stack" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={data.categoryStackSectionSub}>{data.categoryStackSectionTitle}</SectionTitle>
            {data.categoryStackIntro != null && data.categoryStackIntro.length > 0 && (
              <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">{data.categoryStackIntro}</p>
            )}
            <div className="mt-10">
              {data.categoryStack.map((item, index) => (
                <CategoryStackGroup key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="use-cases" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={data.useCaseSectionSub}>{data.useCaseSectionTitle}</SectionTitle>
            <div className="mt-8 max-w-3xl space-y-10">
              {data.useCases.map((block) => (
                <div key={block.title}>
                  <h3 className="text-lg font-bold text-[#1A2D48] sm:text-xl">{block.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#57534E] sm:text-base">{block.body}</p>
                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                    {block.links.map((l) => (
                      <Link key={l.href + l.label} href={l.href} className={`text-sm ${linkGreen}`}>
                        {l.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={data.howToChooseSub}>{data.howToChooseTitle}</SectionTitle>
            <div className="mt-6 space-y-8">
              {data.howToChooseSubsections.map((sub) => (
                <div key={sub.title}>
                  <h3 className="text-lg font-semibold text-[#1A2D48]">{sub.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#57534E] sm:text-base">{sub.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.identitySegments != null && data.identitySegments.length > 0 && (
          <section id="operating-models" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle sub={data.identitySectionSub}>{data.identitySectionTitle ?? "Software by operating model"}</SectionTitle>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {data.identitySegments.map((seg) => (
                  <div key={seg.title} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                    <h3 className="text-base font-bold text-[#1A2D48]">{seg.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#57534E]">{seg.body}</p>
                    <ul className="mt-3 space-y-1.5">
                      {seg.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href} className={`text-sm ${linkGreen}`}>
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section id="next-steps" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub={data.nextStepsSub}>{data.nextStepsTitle}</SectionTitle>
            <div className="mt-6 space-y-8">
              {data.nextStepsGroups.map((group) => (
                <div key={group.groupTitle}>
                  <h3 className="text-base font-semibold text-[#1A2D48]">{group.groupTitle}</h3>
                  <ul className="mt-3 space-y-3">
                    {group.links.map((l) => (
                      <li key={l.href}>
                        <Link href={l.href} className={`text-base font-semibold ${linkGreen}`}>
                          {l.label}
                        </Link>
                        {l.description != null && l.description.length > 0 && (
                          <p className="mt-1 text-sm text-[#57534E]">{l.description}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {data.faqs != null && data.faqs.length > 0 && (
          <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle sub={data.faqSub}>{data.faqTitle ?? "FAQs"}</SectionTitle>
              <div className="mt-4 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
                {data.faqs.map((item, i) => (
                  <FaqAccordionItem
                    key={item.q}
                    question={item.q}
                    answer={item.a}
                    isOpen={openFaqIndex === i}
                    onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {data.methodologyBullets != null && data.methodologyBullets.length > 0 && (
          <section id="methodology" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionTitle sub={data.methodologySub}>{data.methodologyTitle ?? "How we review"}</SectionTitle>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#57534E]">
                {data.methodologyBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#10B981]" aria-hidden>
                      •
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-[#57534E]">
                We may earn a commission when you purchase through our links. This does not affect our recommendations.{" "}
                <Link href="/methodology" className={`font-semibold ${linkGreen}`}>
                  Affiliate disclosure & methodology
                </Link>
              </p>
            </div>
          </section>
        )}
      </main>

      <Footer />

      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="trade-affiliate-title"
            aria-modal="true"
          >
            <h3 id="trade-affiliate-title" className="text-lg font-bold text-[#1A2D48]">
              Affiliate disclosure
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
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
