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
  COMPARISON_TABLE_ROWS,
  USE_CASE_LINKS,
  RELATED_COMPARISONS,
  FAQ_ITEMS,
  MORE_CRM_OPTIONS,
} from "@/lib/data/crmBestSoftware";
import { resolveBestOfUseCaseEditorials } from "@/lib/bestOf/resolveBestOfUseCaseEditorials";
import { getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";

import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";

const crmPickRoutes = getSoftwarePickCategoryRoutes("crm");

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

export default function BestCrmSoftwarePage() {
  const useCaseEditorialItems = resolveBestOfUseCaseEditorials("CRM software", USE_CASE_LINKS);
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
                  <Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    CRM
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Best CRM Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best CRM Software (2026)
            </h1>
            <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
              If you manage leads and follow-up, the best CRM software should keep pipeline activity, customer history, and next actions visible from first contact to closed work.
            </p>
            <p className="mt-2 text-[#57534E] text-base leading-relaxed max-w-3xl">
              We compared ease of use, automation, pricing, lead workflow depth, and collaboration features so the Key Takeaways shortlist maps to real buying decisions.
            </p>
            <RoundupHubLinksBlurb categoryPath="/crm" categoryLabel="crm software" />
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

        {/* ——— 2) Best CRM software picks ——— */}
        <RoundupQuickPicksSection
          categoryLabel="CRM software"
          picks={TOP_PICKS.map((pick) => ({
            slug: pick.slug,
            name: pick.name,
            badge: pick.badge,
            description: pick.description,
          }))}
        />

        <section id="best-crm-picks" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits.">
              Best CRM Software Picks
            </SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard
                  key={pick.slug}
                  {...toSoftwarePickCardProps(pick, crmPickRoutes, { id: `pick-${pick.slug}` })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Comparison Table ——— */}
        <section id="comparison-table" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">
              Compare CRM software
            </SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Tool</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Rating</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE_ROWS.map((row) => (
                    <tr key={row.slug} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80">
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={row.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {row.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#57534E]">{row.bestFor}</td>
                      <td className="px-4 py-4 text-[#57534E]">{row.startingPrice}</td>
                      <td className="px-4 py-4 font-semibold text-[#10B981]">{row.rating}</td>
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

        {/* ——— 4) More CRM software options ——— */}
        <section id="more-options" className="scroll-mt-section border-b border-stone-200/80 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Additional CRM tools worth considering.">
              More CRM software options
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_CRM_OPTIONS.map((opt) => (
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

        {/* ——— 5) How to choose CRM software ——— */}
        <section id="how-to-choose" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">
              How to choose CRM software
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#57534E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Ease of use</h3>
                <p className="mt-1">
                  Your team will use the CRM daily. Look for a clear pipeline, simple contact and deal entry, and minimal training time. Free trials help you judge whether your sales process fits the tool.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Sales pipeline management</h3>
                <p className="mt-1">
                  Stages, deal values, and activity tracking should match how you sell. Some CRMs are built for strict pipeline stages; others are more flexible. Choose one that supports your stages and reporting needs.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Automation and workflows</h3>
                <p className="mt-1">
                  Workflow automation can move deals, send reminders, and assign tasks. Compare how much automation is included at each price tier and whether it fits your volume.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Integrations with marketing tools</h3>
                <p className="mt-1">
                  CRM often sits alongside email, calendar, and marketing platforms. Check that your CRM integrates with the apps you already use so data stays in sync.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Reporting and analytics</h3>
                <p className="mt-1">
                  Pipeline value, conversion by stage, and activity reports help you manage sales. Ensure the CRM offers the reports and dashboards you need without expensive add-ons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 6) Best CRM software by use case ——— */}
        <BestOfUseCaseEditorialSection
          headingCategoryLabel="CRM software"
          sectionSub="Find CRM software that fits your situation."
          items={useCaseEditorialItems}
        />

        {/* ——— 7) Related comparisons ——— */}
        <section id="related-comparisons" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">
              Related comparisons
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed max-w-3xl">
              <Link href="/crm/compare" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                View CRM comparisons
              </Link>
              {" "}to compare platforms side-by-side, or jump to a specific comparison below. For guides on CRM and sales pipelines, see our{" "}
              <Link href="/crm/guides" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                CRM guides
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
              Best CRM software FAQs
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

        {/* ——— 9) Methodology ——— */}
        <section id="methodology" className="scroll-mt-section border-b border-stone-200/80 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Transparent process, small-business–focused criteria.">
              How we review CRM software
            </SectionTitle>
            <p className="mt-2 text-[#57534E] text-sm leading-relaxed">
              Our reviews are independent and updated on a regular cadence so you get current pricing and feature information.
            </p>
            <ul className="mt-4 space-y-2 text-[#57534E] text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                We test CRM workflows: contact and lead management, pipeline stages, reporting, and automation.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                We compare pricing tiers, user limits, and add-ons so you can budget accurately.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                Reviews are written for small businesses, sales teams, and startups—not only enterprise needs.
              </li>
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

      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="best-crm-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-crm-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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
