"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { BestOfUseCaseEditorialSection } from "@/components/best-of/BestOfUseCaseEditorialSection";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  TOP_PICKS,
  USE_CASE_LINKS,
  BEST_FOR_BY_TRADE,
  RELATED_COMPARISONS,
  FAQ_ITEMS,
  MORE_CALL_TRACKING_OPTIONS,
} from "@/lib/data/callTrackingBestCallTrackingSoftware";
import { resolveBestOfUseCaseEditorials } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";
import { getCallTrackingAlternativeUrl, getCallTrackingReviewUrl } from "@/lib/routes";
import { getSoftwarePick, getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

const ctPickRoutes = getSoftwarePickCategoryRoutes("call-tracking");

export default function BestCallTrackingSoftwarePage() {
  const useCaseEditorialItems = resolveBestOfUseCaseEditorials("call tracking software", USE_CASE_LINKS);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main>
        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link href="/call-tracking" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Call Tracking
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Best Call Tracking Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Call Tracking Software (2026)
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              The best call tracking tools for local service businesses tie phone calls to marketing sources—Google Ads, LSA, SEO pages, and directories—so you measure booked jobs, not vanity ring volume. This roundup compares SMB-friendly attribution, lead
              rollups, and operator-grade analytics on workflow fit.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Pair these picks with our{" "}
              <Link href="/call-tracking/compare" className={linkGreen}>
                call tracking comparisons
              </Link>
              , the{" "}
              <Link href="/call-tracking/best-for" className={linkGreen}>
                best call tracking by scenario
              </Link>
              , and{" "}
              <Link href="/call-tracking/guides" className={linkGreen}>
                call tracking guides
              </Link>{" "}
              when you refine your stack.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              Read full reviews for{" "}
              <Link href={getCallTrackingReviewUrl("callrail")} className={linkGreen}>
                CallRail
              </Link>
              ,{" "}
              <Link href={getCallTrackingReviewUrl("calltrackingmetrics")} className={linkGreen}>
                CallTrackingMetrics
              </Link>
              ,{" "}
              <Link href={getCallTrackingReviewUrl("whatconverts")} className={linkGreen}>
                WhatConverts
              </Link>
              ,{" "}
              <Link href={getCallTrackingReviewUrl("invoca")} className={linkGreen}>
                Invoca
              </Link>
              ,{" "}
              <Link href={getCallTrackingReviewUrl("ringba")} className={linkGreen}>
                Ringba
              </Link>
              ,{" "}
              <Link href={getCallTrackingReviewUrl("twilio")} className={linkGreen}>
                Twilio
              </Link>
              ,{" "}
              <Link href={getCallTrackingReviewUrl("phonewagon")} className={linkGreen}>
                PhoneWagon
              </Link>
              , and{" "}
              <Link href={getCallTrackingReviewUrl("nimbata")} className={linkGreen}>
                Nimbata
              </Link>
              . After pages are live, our{" "}
              <Link href="/website-builders/best-website-builders" className={linkGreen}>
                best website builders
              </Link>{" "}
              roundup helps you ship strong CTAs; when owned demand needs backup, compare{" "}
              <Link href="/lead-generation/best-lead-generation-tools" className={linkGreen}>
                best lead generation tools
              </Link>
              , improve visibility with our{" "}
              <Link href="/seo-tools" className={linkGreen}>
                SEO tools hub
              </Link>
              , and tag outcomes in your{" "}
              <Link href="/crm" className={linkGreen}>
                CRM
              </Link>
              . For ranked swap lists, see{" "}
              <Link href={getCallTrackingAlternativeUrl("callrail")} className={linkGreen}>
                best CallRail alternatives
              </Link>
              ,{" "}
              <Link href={getCallTrackingAlternativeUrl("calltrackingmetrics")} className={linkGreen}>
                best CallTrackingMetrics alternatives
              </Link>
              , and{" "}
              <Link href={getCallTrackingAlternativeUrl("whatconverts")} className={linkGreen}>
                best WhatConverts alternatives
              </Link>
              .
            </p>
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Updated for 2026
              </span>
              <button type="button" onClick={() => setAffiliateOpen(true)} className={trustIndicatorAffiliateButtonClass}>
                <TrustIndicatorMark />
                Affiliate disclosure
              </button>
            </div>
          </div>
        </section>

        <section id="best-call-tracking-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits.">Best Call Tracking Picks</SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard key={pick.slug} {...toSoftwarePickCardProps(pick, ctPickRoutes, { id: `pick-${pick.slug}` })} />
              ))}
            </div>
          </div>
        </section>

        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">Compare call tracking software</SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Standout feature</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_PICKS.map((pick) => (
                    <tr key={pick.slug} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80">
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={pick.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {pick.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.badge}</td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.startingPrice}</td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.standoutFeature}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={getCallTrackingReviewUrl(pick.slug)}
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

        <section id="more-options" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Additional platforms worth reviewing.">More call tracking options</SectionTitle>
            <div className="mt-6 space-y-10">
              {MORE_CALL_TRACKING_OPTIONS.map((opt) => {
                const canonical = getSoftwarePick("call-tracking", opt.slug);
                if (canonical != null) {
                  return (
                    <SoftwarePickCard
                      key={opt.slug}
                      {...toSoftwarePickCardProps(canonical, ctPickRoutes, { id: `pick-more-${opt.slug}` })}
                    />
                  );
                }
                return (
                  <article
                    key={opt.slug}
                    className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      <img src={opt.logoSrc} alt="" className="h-10 w-auto max-w-[100px] object-contain" />
                      <h3 className="text-[#1A2D48] text-lg font-bold">
                        <Link
                          href={opt.reviewHref}
                          className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
                          {opt.name}
                        </Link>
                      </h3>
                    </div>
                    <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{opt.description}</p>
                    <div className="mt-4 border-t border-stone-200 pt-4">
                      <Link
                        href={opt.reviewHref}
                        className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Read review →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">How to choose call tracking software</SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">CRM + outcomes</h3>
                <p className="mt-1">Call tracking proves source; CRM proves booked revenue—wire both before you scale ad spend.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">One DNI layer</h3>
                <p className="mt-1">Avoid duplicate swap scripts or conflicting pools—pick one system of record for marketing numbers.</p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Minute and number math</h3>
                <p className="mt-1">Model renewals against peak season call volume and active campaigns, not quiet weeks.</p>
              </div>
            </div>
          </div>
        </section>

        <BestOfUseCaseEditorialSection
          headingCategoryLabel="call tracking software"
          sectionSub="Find stacks that fit your situation."
          items={useCaseEditorialItems}
        />

        <section id="by-trade" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Guides by trade.">Best call tracking by trade</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {BEST_FOR_BY_TRADE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="related-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">Related comparisons</SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              <Link href="/call-tracking/compare" className={linkGreen}>
                View call tracking comparisons
              </Link>{" "}
              or jump to a specific matchup below.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {RELATED_COMPARISONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">Best call tracking FAQs</SectionTitle>
            <div className="mt-4 rounded-lg border border-stone-200 bg-white shadow-sm overflow-hidden">
              {FAQ_ITEMS.map((item, i) => (
                <FaqAccordionItem
                  key={i}
                  question={item.q}
                  answer={item.a}
                  isOpen={openFaqIndex === i}
                  onToggle={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                  isFirst={i === 0}
                  isLast={i === FAQ_ITEMS.length - 1}
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
            aria-labelledby="best-ct-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-ct-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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
