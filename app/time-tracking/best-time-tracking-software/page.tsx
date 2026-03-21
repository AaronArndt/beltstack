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
} from "@/lib/data/timeTrackingBestTimeTrackingSoftware";
import { getSoftwarePickCategoryRoutes, toSoftwarePickCardProps } from "@/lib/data/softwarePickCards";

const timeTrackingPickRoutes = getSoftwarePickCategoryRoutes("time-tracking");

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

export default function BestTimeTrackingSoftwarePage() {
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
                    href="/time-tracking"
                    className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    Time Tracking
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-gray-700 font-medium" aria-current="page">
                  Best Time Tracking Software
                </li>
              </ol>
            </nav>
            <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Best Time Tracking Software (2026)
            </h1>
            <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
              Compare the best time tracking tools for freelancers, agencies, remote teams, and small businesses. See top
              picks, pricing, and who each platform is best for.
            </p>
            <p className="mt-2 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
              We evaluate time tracking software for ease of use, reporting, pricing, and how well it supports billing,
              payroll, and project visibility. Our picks suit different needs—whether you want a simple tracker like Toggl
              Track, a billing-focused tool like Harvest, or monitoring-heavy options like Hubstaff and Time Doctor.
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

        {/* ——— 2) Best time tracking software picks ——— */}
        <section
          id="best-time-tracking-picks"
          className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Why we picked each platform and who it fits.">
              Best Time Tracking Software Picks
            </SectionTitle>
            <div className="mt-6 space-y-10">
              {TOP_PICKS.map((pick) => (
                <SoftwarePickCard
                  key={pick.slug}
                  {...toSoftwarePickCardProps(pick, timeTrackingPickRoutes, { id: `pick-${pick.slug}` })}
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
              Compare time tracking software
            </SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F8FAFC]">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Software</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Standout feature</th>
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
                      <td className="px-4 py-4 text-[#6E6E6E]">{row.standoutFeature}</td>
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

        {/* ——— 4) How to choose time tracking software ——— */}
        <section
          id="how-to-choose"
          className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What to look for when you compare options.">
              How to choose time tracking software
            </SectionTitle>
            <div className="mt-4 space-y-4 text-[#6E6E6E] text-sm leading-relaxed">
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Billable vs non-billable time</h3>
                <p className="mt-1">
                  If you bill clients for time, choose a tracker that makes it easy to separate billable work from internal or
                  admin time, set billable rates, and report on how much of your week is truly billable. This matters most for
                  freelancers, agencies, and consultants.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Team size and workflows</h3>
                <p className="mt-1">
                  Solo users can often use simple timers and manual timesheets. Larger teams may need approvals, project-level
                  budgets, and utilization reporting. Make sure the tool scales from individuals to teams without adding friction.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Integrations with invoicing and accounting</h3>
                <p className="mt-1">
                  Time tracking rarely stands alone. If you invoice from{" "}
                  <Link href="/invoicing" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    invoicing software
                  </Link>{" "}
                  or close your books in{" "}
                  <Link href="/accounting" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    accounting software
                  </Link>
                  , look for exports or direct integrations so billable hours flow into invoices and your books automatically.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Payroll and timesheets</h3>
                <p className="mt-1">
                  If you use time tracking to support{" "}
                  <Link href="/payroll" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    payroll
                  </Link>
                  , confirm that the tool exports hours cleanly or integrates with your payroll provider. This is especially
                  important for hourly teams and remote or field workers.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Monitoring vs lightweight tracking</h3>
                <p className="mt-1">
                  Tools like Toggl Track and Clockify focus on simple timers and reports. Monitoring-heavy tools like Hubstaff and
                  Time Doctor add screenshots, GPS, and activity scores. Decide how much oversight you really need and match the
                  product to your culture and team expectations.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-[#1A2D48] text-base">Pricing and feature depth</h3>
                <p className="mt-1">
                  Many trackers offer free tiers or low-cost plans for small teams, then add approvals, monitoring, and advanced
                  reporting on higher tiers. Compare total cost at your team size and avoid paying for monitoring or features you
                  don&apos;t plan to use.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 5) More options ——— */}
        <section id="by-use-case" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find time tracking tools that fit your situation.">
              Best time tracking software by use case
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

        {/* ——— 6) Related comparisons ——— */}
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
                href="/time-tracking/compare"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                View time tracking comparisons
              </Link>{" "}
              to compare platforms side by side, or jump to a specific comparison below. For guides on how time tracking
              software works and how to track billable hours, see our{" "}
              <Link
                href="/time-tracking/guides"
                className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                time tracking guides
              </Link>
              .
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

        {/* ——— 7) FAQ ——— */}
        <section id="faqs" className="scroll-mt-section border-b border-neutral-200/70 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">
              Best time tracking software FAQs
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
            aria-labelledby="best-time-tracking-affiliate-title"
            aria-modal="true"
          >
            <h3 id="best-time-tracking-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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

