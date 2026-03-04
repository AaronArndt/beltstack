"use client";

import Link from "next/link";
import { useState } from "react";

// ——— Design tokens (match homepage) ———
// BG: #F8FAFC | Navy: #1A2D48 | Emerald: #10B981 | Subtle: #6E6E6E

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnSecondary =
  "rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-base font-bold text-[#1A2D48] transition-colors hover:border-[#10B981] hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnPill =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

// ——— Top picks this month (hero card) ———
const TOP_PICKS_MONTH = [
  { tool: "Gusto", rating: "4.8", why: "Best all-in-one for small crews" },
  { tool: "QuickBooks Payroll", rating: "4.6", why: "Tight QuickBooks integration" },
  { tool: "OnPay", rating: "4.7", why: "Strong value, full-service" },
];

// ——— Top payroll picks (cards) ———
type PickCard = {
  slug: string;
  name: string;
  badge: string;
  descriptor: string;
  rating: string;
  features: string[];
  reviewHref: string;
  compareHref: string;
};

const TOP_PICKS: PickCard[] = [
  {
    slug: "gusto",
    name: "Gusto",
    badge: "Best overall",
    descriptor: "All-in-one payroll, benefits, and HR for small teams.",
    rating: "4.8",
    features: ["W-2 and 1099 support", "Auto tax filing", "Contractor self-service"],
    reviewHref: "/payroll/reviews/gusto",
    compareHref: "/payroll/compare/gusto-vs-quickbooks-payroll",
  },
  {
    slug: "quickbooks-payroll",
    name: "QuickBooks Payroll",
    badge: "Best for QuickBooks users",
    descriptor: "Seamless payroll inside QuickBooks for contractors already on the platform.",
    rating: "4.6",
    features: ["Integrated with QB books", "Same-day direct deposit", "Time tracking"],
    reviewHref: "/payroll/reviews/quickbooks-payroll",
    compareHref: "/payroll/compare/gusto-vs-quickbooks-payroll",
  },
  {
    slug: "onpay",
    name: "OnPay",
    badge: "Best value",
    descriptor: "Full-service payroll and benefits at a straightforward price.",
    rating: "4.7",
    features: ["Unlimited pay runs", "Health benefits", "Compliance support"],
    reviewHref: "/payroll/reviews/onpay",
    compareHref: "/payroll/compare/onpay-vs-gusto",
  },
  {
    slug: "adp",
    name: "ADP",
    badge: "Best for larger teams",
    descriptor: "Enterprise-grade payroll and HR for scaling contractor businesses.",
    rating: "4.5",
    features: ["Multi-state payroll", "Advanced reporting", "Dedicated support"],
    reviewHref: "/payroll/reviews/adp",
    compareHref: "/payroll/compare/adp-vs-gusto",
  },
];

// ——— Comparison table ———
const TABLE_ROWS = [
  { tool: "Gusto", bestFor: "Small trade businesses", price: "$40/mo", rating: "4.8", slug: "gusto" },
  { tool: "QuickBooks Payroll", bestFor: "QuickBooks users", price: "$30/mo", rating: "4.6", slug: "quickbooks-payroll" },
  { tool: "OnPay", bestFor: "Value-focused teams", price: "$40/mo", rating: "4.7", slug: "onpay" },
  { tool: "ADP", bestFor: "Larger teams", price: "Custom", rating: "4.5", slug: "adp" },
  { tool: "Paychex", bestFor: "Enterprise needs", price: "Custom", rating: "4.4", slug: "paychex" },
];

// ——— Best-for scenarios ———
const BEST_FOR_SCENARIOS = [
  { label: "Small crews", href: "/payroll/best-for/small-crews" },
  { label: "1099 contractors", href: "/payroll/best-for/1099-contractors" },
  { label: "Multi-state", href: "/payroll/best-for/multi-state" },
  { label: "Hourly teams", href: "/payroll/best-for/hourly-teams" },
  { label: "Seasonal businesses", href: "/payroll/best-for/seasonal-businesses" },
];

// ——— By trade ———
const BY_TRADE = [
  { label: "HVAC", href: "/payroll/hvac" },
  { label: "Plumbing", href: "/payroll/plumbing" },
  { label: "Electrical", href: "/payroll/electrical" },
  { label: "Landscaping", href: "/payroll/landscaping" },
  { label: "Roofing", href: "/payroll/roofing" },
  { label: "Cleaning", href: "/payroll/cleaning" },
];

// ——— Methodology ———
const METHODOLOGY_BULLETS = [
  "We test payroll workflows (W-2, 1099, multi-state) and rate ease of use for contractors.",
  "We compare published pricing, add-ons, and hidden fees so you can budget accurately.",
  "Reviews are written for trade businesses—job costing, compliance, and support matter.",
];

// ——— FAQ ———
const FAQ_ITEMS = [
  {
    q: "Can payroll software pay 1099 contractors?",
    a: "Yes. Most payroll tools let you run 1099 contractor payments and file 1099-NEC forms. Look for \"contractor payments\" or \"1099\" in the feature list and confirm state e-file support.",
  },
  {
    q: "What's the best payroll software for small construction businesses?",
    a: "Gusto and QuickBooks Payroll are top choices for small construction: both handle W-2 and 1099, integrate with common accounting tools, and scale from a few employees to dozens. Pick Gusto for all-in-one HR; pick QuickBooks Payroll if you already use QuickBooks for books.",
  },
  {
    q: "How much does payroll software cost?",
    a: "Base plans often start around $30–$50/month plus per-employee or per-contractor fees. Full-service (tax filing, support) usually costs more. We list starting prices in our comparison table and reviews.",
  },
  {
    q: "Do contractors need payroll if they only use subcontractors?",
    a: "If you only pay 1099 subs and don't have W-2 employees, you may not need full payroll software—but you still need to track payments and file 1099s. Some accounting or contractor-management tools include 1099 tracking; otherwise a dedicated 1099 solution can help.",
  },
  {
    q: "Is QuickBooks Payroll good for contractors?",
    a: "Yes, especially if you already use QuickBooks for bookkeeping. It handles W-2 and 1099, integrates with QuickBooks so job costing and books stay in sync, and offers same-day direct deposit. It's a strong fit for contractors who want one ecosystem.",
  },
];

function EmeraldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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
        className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#1A2D48] text-sm sm:text-base">{question}</span>
        <span
          className={`shrink-0 text-[#6E6E6E] transition-transform ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 pr-8">
          <p className="text-[#6E6E6E] text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function PayrollPage() {
  const [teamSize, setTeamSize] = useState("");
  const [payType, setPayType] = useState("");
  const [need1099, setNeed1099] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [affiliateOpen, setAffiliateOpen] = useState(false);

  const handleStackFinderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: no filter logic yet
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main>
        {/* ——— 1) Breadcrumb + Hero ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                <li>
                  <Link href="/" className="hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="text-[#1A2D48] font-medium" aria-current="page">Payroll</li>
              </ol>
            </nav>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
              <div>
                <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Best Payroll Software for Contractors (2026)
                </h1>
                <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed">
                  Compare payroll tools built for trade businesses. Pricing, features, and contractor-specific needs explained.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[#6E6E6E]">
                  <span className="flex items-center gap-2">
                    <EmeraldIcon className="h-4 w-4 shrink-0" />
                    Updated monthly
                  </span>
                  <span className="flex items-center gap-2">
                    <EmeraldIcon className="h-4 w-4 shrink-0" />
                    Independent reviews
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
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/payroll/compare/gusto-vs-quickbooks-payroll" className={btnPrimary}>
                    Compare payroll tools
                  </Link>
                  <Link href="/payroll/compare/gusto-vs-quickbooks-payroll" className={btnSecondary}>
                    View comparisons
                  </Link>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-5">
                <p className="text-[#1A2D48] text-sm font-bold uppercase tracking-wide">Top picks this month</p>
                <div className="mt-3 space-y-2.5">
                  {TOP_PICKS_MONTH.map((item, i) => (
                    <div key={item.tool} className="rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#1A2D48] text-xs font-bold text-white">
                            {i + 1}
                          </span>
                          <div className="min-w-0">
                            <span className="text-[#1A2D48] font-semibold">{item.tool}</span>
                            <p className="mt-0.5 text-[#6E6E6E] text-xs">{item.why}</p>
                          </div>
                        </div>
                        <span className="shrink-0 text-[#10B981] font-bold">{item.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3 border-t border-slate-100 pt-3">
                  <Link
                    href="/payroll/compare/gusto-vs-quickbooks-payroll"
                    className="text-sm font-bold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    See full comparison →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 2) Quick Filter / Stack Finder (inline) ——— */}
        <section className="border-b border-slate-200 bg-white py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Narrow down by team size and pay type.">Find the right payroll fit</SectionTitle>
            <form onSubmit={handleStackFinderSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
              <div className="flex-1">
                <label htmlFor="payroll-team-size" className="block text-sm font-semibold text-[#1A2D48]">
                  Team size
                </label>
                <select
                  id="payroll-team-size"
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className={`mt-1 ${selectClass}`}
                >
                  <option value="">Select</option>
                  <option value="solo">Solo</option>
                  <option value="2-5">2–5</option>
                  <option value="6-20">6–20</option>
                  <option value="21+">21+</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="payroll-pay-type" className="block text-sm font-semibold text-[#1A2D48]">
                  Pay type
                </label>
                <select
                  id="payroll-pay-type"
                  value={payType}
                  onChange={(e) => setPayType(e.target.value)}
                  className={`mt-1 ${selectClass}`}
                >
                  <option value="">Select</option>
                  <option value="hourly">Hourly</option>
                  <option value="salary">Salary</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="payroll-1099" className="block text-sm font-semibold text-[#1A2D48]">
                  Need to pay 1099s?
                </label>
                <select
                  id="payroll-1099"
                  value={need1099}
                  onChange={(e) => setNeed1099(e.target.value)}
                  className={`mt-1 ${selectClass}`}
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <button type="submit" className={btnPrimary}>
                See results
              </button>
            </form>
          </div>
        </section>

        {/* ——— 3) Top Picks (cards) ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Hand-picked for trade businesses. Updated monthly.">Top payroll picks</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              {TOP_PICKS.map((pick) => (
                <article
                  key={pick.slug}
                  className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#10B981] border border-[#10B981]/20">
                      {pick.badge}
                    </span>
                    <span className="text-[#10B981] font-bold">{pick.rating}</span>
                  </div>
                  <h3 className="mt-3 text-[#1A2D48] text-xl font-bold">{pick.name}</h3>
                  <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed">{pick.descriptor}</p>
                  <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#6E6E6E]">
                    {pick.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-slate-100 pt-4">
                    <Link
                      href={pick.reviewHref}
                      className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Read review →
                    </Link>
                    <Link
                      href={pick.compareHref}
                      className="text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Compare →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 4) Comparison Table ——— */}
        <section className="border-b border-slate-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side pricing and fit.">Compare payroll software</SectionTitle>
            <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full min-w-[600px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-[#F8FAFC]">
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Tool</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Best for</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Starting price</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]">Rating</th>
                    <th className="px-4 py-3 font-bold text-[#1A2D48]"></th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row) => (
                    <tr key={row.slug} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/70">
                      <td className="px-4 py-3.5 font-bold text-[#1A2D48]">{row.tool}</td>
                      <td className="px-4 py-3.5 text-[#6E6E6E]">{row.bestFor}</td>
                      <td className="px-4 py-3.5 text-[#6E6E6E]">{row.price}</td>
                      <td className="px-4 py-3.5 font-semibold text-[#10B981]">{row.rating}</td>
                      <td className="px-4 py-3.5">
                        <Link
                          href={`/payroll/reviews/${row.slug}`}
                          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ——— 5) Best-for scenarios ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Find payroll software that fits your situation.">Best payroll software by scenario</SectionTitle>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {BEST_FOR_SCENARIOS.map(({ label, href }) => (
                <Link key={href} href={href} className={btnPill}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 6) By trade ——— */}
        <section className="border-b border-slate-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Payroll recommendations by trade.">Payroll by trade</SectionTitle>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {BY_TRADE.map(({ label, href }) => (
                <Link key={href} href={href} className={btnPill}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 7) Contractor-specific guidance ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="What matters when contractors choose payroll.">What contractors should look for in payroll software</SectionTitle>
            <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-[#1A2D48] text-lg font-semibold">W-2 vs 1099 support</h3>
                  <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
                    Trade businesses often mix employees (W-2) and subcontractors (1099). Your payroll software should handle both, run contractor payments, and file 1099-NEC forms. Look for clear 1099 workflows and state e-file support.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1A2D48] text-lg font-semibold">Job costing and project tracking</h3>
                  <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
                    Allocating labor to jobs or projects helps you track profitability. Some payroll tools integrate with job-costing or accounting software so hours and wages flow into the right job—essential for contractors who bid by project.
                  </p>
                </div>
                <div>
                  <h3 className="text-[#1A2D48] text-lg font-semibold">Multi-state compliance</h3>
                  <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">
                    If you have workers in more than one state, payroll must handle state withholding, unemployment, and local taxes. Choose a provider that supports multi-state registration and filing so you stay compliant as you grow.
                  </p>
                </div>
              </div>
              <div>
                <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
                  <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                      W-2 and 1099 payment runs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                      Tax filing and deposit
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                      Direct deposit and pay stubs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                      Multi-state support
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                      Time tracking or integration
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                      Contractor self-service portal
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 8) FAQ ——— */}
        <section className="border-b border-slate-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Quick answers to common questions.">Payroll software FAQs</SectionTitle>
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

        {/* ——— 9) Methodology + Disclosure ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Transparent process, contractor-focused criteria.">How we review payroll software</SectionTitle>
            <ul className="mt-4 space-y-2 text-[#6E6E6E] text-sm leading-relaxed">
              {METHODOLOGY_BULLETS.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#10B981] shrink-0" aria-hidden>•</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[#6E6E6E] text-sm leading-relaxed">
              We may earn a commission when you purchase through our links. This does not affect our recommendations.{" "}
              <Link href="/methodology" className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                Affiliate disclosure
              </Link>
            </p>
          </div>
        </section>
      </main>

      {/* Affiliate modal (simple, matches homepage tone) */}
      {affiliateOpen && (
        <>
          <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={() => setAffiliateOpen(false)} />
          <div
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-6 shadow-lg"
            role="dialog"
            aria-labelledby="payroll-affiliate-title"
            aria-modal="true"
          >
            <h3 id="payroll-affiliate-title" className="text-[#1A2D48] text-lg font-bold">
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
