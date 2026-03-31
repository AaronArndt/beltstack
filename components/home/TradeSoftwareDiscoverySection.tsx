"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { RatingInfoTooltip } from "@/components/RatingInfoTooltip";
import { sectionRuleAccent } from "@/lib/design-tokens";
import {
  DISCOVERY_CATEGORIES,
  DISCOVERY_TRADES,
  getCategoryById,
  getDiscoveryCombo,
  getTradeById,
  type DiscoveryCategoryId,
  type DiscoverySoftwareCard,
  type DiscoveryTradeId,
} from "@/lib/data/tradeSoftwareDiscoveryData";

/** Match Featured Software / homepage CTA classes */
const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const readReviewLinkClass =
  "text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const tradeChipBase =
  "inline-flex shrink-0 items-center rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1";

const tradeChipInactive = `${tradeChipBase} border-stone-200 bg-white text-[#1A2D48] hover:border-stone-300 hover:bg-stone-50/80`;

const tradeChipActive = `${tradeChipBase} border-[#10B981] bg-[#10B981]/10 text-[#1A2D48] font-semibold`;

function SoftwareResultCard({ card }: { card: DiscoverySoftwareCard }) {
  return (
    <article className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm">
      <div className="flex items-start gap-4">
        <div className="relative h-12 w-12 shrink-0 overflow-hidden">
          <Image src={card.logoSrc} alt="" fill className="object-contain" sizes="48px" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[#1A2D48] text-lg font-bold">{card.name}</h3>
          <p className="mt-0.5 flex flex-wrap items-center gap-1.5 align-baseline text-sm text-[#57534E]">
            <span className="text-[#10B981] font-semibold">{card.rating}</span>
            <span>Rating</span>
            <RatingInfoTooltip align="right" />
          </p>
        </div>
      </div>
      <ul className="mt-3 list-inside list-disc space-y-0.5 text-sm text-[#57534E]">
        {card.bullets.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-stone-100 pt-4">
        <a href={card.visitUrl} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
          Visit site
        </a>
        <Link href={card.reviewHref} className={readReviewLinkClass}>
          Read review →
        </Link>
      </div>
    </article>
  );
}

export function TradeSoftwareDiscoverySection() {
  const [tradeId, setTradeId] = useState<DiscoveryTradeId>("hvac");
  const [categoryId, setCategoryId] = useState<DiscoveryCategoryId>("field-service");

  const combo = useMemo(() => getDiscoveryCombo(tradeId, categoryId), [tradeId, categoryId]);
  const tradeMeta = getTradeById(tradeId);
  const categoryMeta = getCategoryById(categoryId);

  const dynamicHeading = `Best ${categoryMeta.headingSegment} Software for ${tradeMeta.headingBusinesses} Businesses`;

  const handleTradeSelect = (id: DiscoveryTradeId) => {
    setTradeId(id);
  };

  return (
    <section className="border-b border-stone-200 bg-white py-8 sm:py-11">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4 sm:mb-5">
          <h2 className="text-2xl font-bold text-[#1A2D48] sm:text-3xl">Find the Right Software for Your Trade</h2>
          <div className={sectionRuleAccent} aria-hidden />
          <p className="mt-1 text-sm text-[#57534E] sm:text-base">
            Select your trade to see the best software categories and top-rated tools used by businesses like yours.
          </p>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Trade">
          {DISCOVERY_TRADES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => handleTradeSelect(t.id)}
              className={tradeId === t.id ? tradeChipActive : tradeChipInactive}
              aria-pressed={tradeId === t.id}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-6 lg:mt-8 lg:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
            <div className="lg:w-[30%] lg:min-w-[14rem] lg:max-w-[20rem] lg:shrink-0">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#57534E]">Categories</p>
              <nav className="mt-3 flex flex-col gap-1" aria-label="Software categories">
                {DISCOVERY_CATEGORIES.map((c) => {
                  const active = categoryId === c.id;
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setCategoryId(c.id)}
                      className={`w-full rounded-md border px-3 py-2.5 text-left text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 ${
                        active
                          ? "border-[#10B981]/35 bg-[#10B981]/8 font-semibold text-[#1A2D48]"
                          : "border-transparent text-[#57534E] hover:border-stone-200 hover:bg-stone-50"
                      }`}
                      aria-current={active ? "true" : undefined}
                    >
                      {c.label}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="min-w-0 flex-1 lg:w-0">
              <h3 className="text-xl font-bold text-[#1A2D48] sm:text-2xl">{dynamicHeading}</h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#57534E] sm:text-base">{combo.subcopy}</p>

              {combo.software && combo.software.length > 0 ? (
                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {combo.software.map((card) => (
                    <SoftwareResultCard key={card.name} card={card} />
                  ))}
                </div>
              ) : (
                <div className="mt-5 min-h-[12rem] rounded-lg border border-dashed border-stone-200 bg-stone-50/60 px-4 py-10 text-center sm:min-h-[10rem]">
                  <p className="text-sm text-[#57534E]">
                    Software recommendations for this trade and category are coming soon.
                  </p>
                </div>
              )}

              <div className="mt-6 rounded-md border border-[#10B981]/20 bg-[#10B981]/5 px-4 py-3 text-sm leading-relaxed text-[#57534E]">
                {combo.tip}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
