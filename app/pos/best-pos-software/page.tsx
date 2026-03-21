"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { SoftwarePickCard } from "@/components/software-picks/SoftwarePickCard";
import {
  TOP_PICKS,
  COMPARISON_TABLE_ROWS,
  USE_CASE_LINKS,
  RELATED_COMPARISONS,
  FAQ_ITEMS,
  MORE_POS_OPTIONS,
} from "@/lib/data/posBestSoftware";
import { getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";

const posPickRoutes = getSoftwarePickCategoryRoutes("pos");

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnSecondary =
  "rounded-lg border border-[#10B981]/70 bg-white px-5 py-2.5 text-base font-bold text-[#10B981] transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

function EmeraldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M10 2L18 10L10 18L2 10L10 2Z" fill="#10B981" />
    </svg>
  );
}

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

export default function BestPosSoftwarePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* ——— 1) Hero ——— */}
        <section className="bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li>
                  <Link
                    href="/pos"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    POS Software
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">
                  Best POS Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best POS Software (2026)
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Compare the best POS software for retail stores, restaurants, and ecommerce businesses. See top picks,
              pricing, features, and who each platform is best for.
            </p>
            <p className="mt-2 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              POS software runs your checkout: it processes sales, accepts payments, and often manages inventory and
              reporting. We evaluate POS tools on payment processing, hardware support, inventory integration, and
              fit for retail, restaurant, or ecommerce—so you can choose the right system for your business. See our{" "}
              <Link
                href="/pos/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                POS guides
              </Link>{" "}
              for how to choose and use tools, and{" "}
              <Link
                href="/pos/best-for"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                best POS by use case
              </Link>{" "}
              for picks by business type.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[#6E6E6E]">
              <span className="flex items-center gap-2">
                <EmeraldIcon className="h-4 w-4 shrink-0" />
                Updated for 2026
              </span>
              <button
                type="button"
                onClick={() => setAffiliateOpen(true)}
                className="flex items-center gap-2 text-left text-[#6E6E6E] hover:text-[#1A2D48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                <EmeraldIcon className="h-4 w-4 shrink-0" />
                Affiliate disclosure
              </button>
            </div>
          </div>
        </section>

        {/* ——— 2) Best POS software picks ——— */}
        <section
          id="best-pos-picks"
          className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits.">
              Best POS Software Picks
            </SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard
                  key={pick.slug}
                  {...toSoftwarePickCardProps(pick, posPickRoutes, { id: `pick-${pick.slug}` })}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Comparison Table ——— */}
        <section
          id="comparison-table"
          className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side at a glance.">
              Compare POS software
            </SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F8FAFC]">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Tool</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Rating</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Review</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_TABLE_ROWS.map((row) => (
                    <tr
                      key={row.slug}
                      className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/70"
                    >
                      <td className="px-4 py-4 font-semibold text-[#1A2D48]">
                        <div className="flex items-center gap-2">
                          <img src={row.logoSrc} alt="" className="h-8 w-auto max-w-[80px] object-contain" />
                          {row.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[#6E6E6E]">{row.bestFor}</td>
                      <td className="px-4 py-4 text-[#6E6E6E]">{row.startingPrice}</td>
                      <td className="px-4 py-4 font-semibold text-[#10B981]">{row.rating}</td>
                      <td className="px-4 py-4">
                        <Link
                          href={row.reviewHref}
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

        {/* ——— More POS software options ——— */}
        <section
          id="more-options"
          className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Additional POS tools worth considering.">
              More POS software options
            </SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MORE_POS_OPTIONS.map((opt) => (
                <article
                  key={opt.slug}
                  className="flex flex-col rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 shadow-sm transition-all duration-200 hover:shadow-md"
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
                  <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed">{opt.description}</p>
                  <div className="mt-4 border-t border-slate-200 pt-4">
                    <Link
                      href={opt.reviewHref}
                      className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Read review →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— How to choose POS software ——— */}
        <section
          id="how-to-choose"
          className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">
              How to choose POS software
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#6E6E6E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Payment processing compatibility</h3>
                <p className="mt-1">
                  Most POS systems bundle or partner with a payment processor so you can accept cards and other methods
                  at the register. Compare processing rates, contract terms, and whether you can use your own processor
                  if needed. Transparent, per-transaction pricing is easier to budget than long-term contracts.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Inventory management integration</h3>
                <p className="mt-1">
                  Look for item and variant management, stock levels, reorder alerts, and the ability to receive and
                  adjust inventory. If you use separate inventory or accounting software, check that the POS integrates
                  so sales and stock stay in sync and you avoid manual data entry or overselling.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Hardware support</h3>
                <p className="mt-1">
                  Confirm which devices the POS runs on—tablets, terminals, or computers—and which peripherals
                  (receipt printers, cash drawers, barcode scanners) are supported. Some providers sell hardware
                  bundles; others are bring-your-own-device. Match the hardware to your checkout flow and space.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Reporting and analytics</h3>
                <p className="mt-1">
                  Useful POS systems offer sales by period, by product or category, and by payment type. Dashboards and
                  exports help you understand trends and reconcile with bank deposits and accounting. Compare how much
                  reporting is included and whether it meets your needs for day-to-day and month-end review.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Multi-location capabilities</h3>
                <p className="mt-1">
                  If you have or plan to have multiple locations, check that the POS supports multi-store inventory,
                  consolidated reporting, and consistent settings across sites. Some tools add location-based
                  permissions and transfer workflows. Avoid outgrowing your POS when you open a second store.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— Best POS software by use case ——— */}
        <section
          id="by-use-case"
          className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find POS software that fits your situation.">
              Best POS software by use case
            </SectionTitle>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {USE_CASE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  <h3 className="text-[#1A2D48] font-bold">{item.label}</h3>
                  <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed">{item.description}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-[#10B981] hover:underline">
                    See picks →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— Related comparisons ——— */}
        <section
          id="related-comparisons"
          className="scroll-mt-section border-b border-neutral-200/70 bg-[#F8FAFC] py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Head-to-head comparisons to narrow your choice.">
              Related comparisons
            </SectionTitle>
            <p className="mt-2 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
              <Link
                href="/pos/compare"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                View POS comparisons
              </Link>{" "}
              to compare platforms side-by-side, or jump to a specific comparison below.
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {RELATED_COMPARISONS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— FAQ ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">
              Best POS software FAQs
            </SectionTitle>
            <div className="mt-4 rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
              {FAQ_ITEMS.map((item, i) => (
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

      {affiliateOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-[#1A2D48]/60"
            aria-hidden
            onClick={() => setAffiliateOpen(false)}
          />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="best-pos-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-pos-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
              Affiliate disclosure
            </h3>
            <p className="mt-3 text-[#6E6E6E] text-sm leading-relaxed">
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
