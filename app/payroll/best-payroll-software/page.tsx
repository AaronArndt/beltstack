"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { BestOfUseCaseEditorialSection } from "@/components/best-of/BestOfUseCaseEditorialSection";
import { RoundupQuickPicksSection } from "@/components/best-of/RoundupQuickPicksSection";
import { RoundupHubLinksBlurb } from "@/components/best-of/RoundupHubLinksBlurb";
import { RoundupHowWeChoseSection } from "@/components/best-of/RoundupHowWeChoseSection";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import { FaqAccordionItem } from "@/components/faq/FaqAccordionItem";
import {
  TOP_PICKS,
  USE_CASE_LINKS,
  BEST_FOR_BY_TRADE,
  RELATED_COMPARISONS,
  FAQ_ITEMS,
  MORE_PAYROLL_OPTIONS,
} from "@/lib/data/payrollBestPayrollSoftware";
import { resolveBestOfUseCaseEditorials } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";
import { getPayrollReviewUrl } from "@/lib/routes";
import { getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";

import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";

// ——— Design tokens (match hub / compare pages) ———
const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnSecondary =
  "rounded-md border border-[#10B981]/70 bg-white px-5 py-2.5 text-base font-bold text-[#10B981] transition-colors hover:bg-stone-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
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

const payrollPickRoutes = getSoftwarePickCategoryRoutes("payroll");

export default function BestPayrollSoftwarePage() {
  const useCaseEditorialItems = resolveBestOfUseCaseEditorials("payroll software", USE_CASE_LINKS);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— 1) Hero ——— */}
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
                  <Link href="/payroll" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Payroll
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Best Payroll Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Payroll Software (2026)
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              If you run payroll for mixed teams, the best payroll software should handle employees and contractors accurately while reducing filing risk and manual correction work.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              We compared payroll usability, compliance support, contractor handling, pricing, and integrations so the Key Takeaways shortlist is ready for final evaluation.
            </p>
            <RoundupHubLinksBlurb categoryPath="/payroll" categoryLabel="payroll software" />
            <div className={`mt-4 ${trustIndicatorListClass}`}>
              <span className="flex items-center gap-2">
                <TrustIndicatorMark />
                Updated for 2026
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
          </div>
        </section>

        {/* ——— 2) Best payroll software picks (main picks in detail) ——— */}
        <RoundupQuickPicksSection
          categoryLabel="payroll software"
          picks={TOP_PICKS.map((pick) => ({
            slug: pick.slug,
            name: pick.name,
            badge: pick.badge,
            description: pick.description,
          }))}
        />

        <section id="best-payroll-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits.">
              Best Payroll Software Picks
            </SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard
                  key={pick.slug}
                  {...toSoftwarePickCardProps(pick, payrollPickRoutes, { id: `pick-${pick.slug}` })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Comparison Table ——— */}
        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">
              Compare payroll software
            </SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Payroll types</th>
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
                      <td className="px-4 py-4 text-[#57534E]">{pick.payrollTypes}</td>
                      <td className="px-4 py-4 text-[#57534E]">{pick.standoutFeature}</td>
                      <td className="px-4 py-4">
                        <Link href={getPayrollReviewUrl(pick.slug)} className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
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

        {/* ——— More payroll software options ——— */}
        <section id="more-options" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Additional payroll tools worth considering.">
              More payroll software options
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_PAYROLL_OPTIONS.map((opt) => (
                <article key={opt.slug} className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm">
                  <div className="flex items-center gap-2">
                    <img src={opt.logoSrc} alt="" className="h-10 w-auto max-w-[100px] object-contain" />
                    <h3 className="text-[#1A2D48] text-lg font-bold">
                      <Link href={opt.reviewHref} className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        {opt.name}
                      </Link>
                    </h3>
                  </div>
                  <p className="mt-2 text-[#57534E] text-sm leading-relaxed">{opt.description}</p>
                  <div className="mt-4 border-t border-stone-200 pt-4">
                    <Link href={opt.reviewHref} className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      Read review →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— How to choose payroll software ——— */}
        <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">
              How to choose payroll software
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Payroll types (W-2 / 1099 / mixed)</h3>
                <p className="mt-1">
                  Most small businesses need both W-2 employees and 1099 contractors. Choose a platform that handles both with clear tax treatment and forms. If you're contractor-only or mixed, ensure 1099 support and contractor self-service are included.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Contractor support</h3>
                <p className="mt-1">
                  Look for 1099 payment runs, automatic tax forms (e.g. 1099-NEC), and a contractor portal so subs can view pay stubs and documents. Some tools charge extra for 1099 e-file—check before you commit.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Tax automation</h3>
                <p className="mt-1">
                  Full-service payroll should calculate, file, and deposit federal and state payroll taxes. Confirm that tax filing and deposits are included and that the provider takes responsibility for accuracy and deadlines.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">HR and benefits features</h3>
                <p className="mt-1">
                  If you offer health insurance or 401(k), choose a payroll provider that can run benefits and deductions in sync with payroll. Onboarding, compliance docs, and PTO tracking may be included or add-ons.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Integrations</h3>
                <p className="mt-1">
                  Payroll should connect to your accounting software (QuickBooks, Xero) and optionally time tracking. Native integration is better than manual export. If you're deep in QuickBooks, QuickBooks Payroll keeps everything in one place.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Ease of use</h3>
                <p className="mt-1">
                  Setup, running pay runs, and adding employees or contractors should be straightforward. Read reviews and try demos if possible. Modern tools like Gusto and OnPay are built for self-serve; ADP and Paychex offer more hand-holding with custom pricing.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Pricing transparency</h3>
                <p className="mt-1">
                  Prefer published base + per-person pricing when you can budget upfront. Providers like ADP and Paychex use custom quotes—get a quote and compare total cost to Gusto or OnPay at your headcount.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 6) Best payroll software by use case ——— */}
        <BestOfUseCaseEditorialSection
          headingCategoryLabel="payroll software"
          sectionSub="Find payroll software that fits your situation."
          items={useCaseEditorialItems}
        />

        {/* ——— Best payroll software by trade ——— */}
        <section id="by-trade" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Payroll guides by industry and trade.">
              Best payroll software by trade
            </SectionTitle>
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

        {/* ——— 7) Related comparisons ——— */}
        <RoundupHowWeChoseSection
          categoryLabel="payroll software"
          compareHref="/payroll/compare"
          guidesHref="/payroll/guides"
        />

        <section id="related-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">
              Related comparisons
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              <Link href="/payroll/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                View payroll comparisons
              </Link>
              {" "}to compare platforms side-by-side, or jump to a specific comparison below. For guides on pricing, 1099 contractors, hourly workers, and more, see our{" "}
              <Link href="/payroll/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                payroll guides
              </Link>.
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

        {/* ——— 8) FAQ ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">
              Best payroll software FAQs
            </SectionTitle>
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

      {/* Affiliate modal */}
      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="best-payroll-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-payroll-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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
