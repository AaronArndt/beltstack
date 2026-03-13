"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState, useMemo } from "react";
import { StickyStackFinder } from "@/components/StickyStackFinder";

// ——— Design tokens (reference) ———
// BG: #F8FAFC | Navy: #1A2D48 | Emerald: #10B981 | Subtle: #6E6E6E
// Borders: Tailwind neutrals (slate-200) only

// Reusable button system (Stripe-like)
const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnSecondary =
  "rounded-lg border border-[#10B981]/70 bg-white px-5 py-2.5 text-base font-bold text-[#10B981] transition-colors hover:bg-slate-50 hover:border-[#10B981]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnPill =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const CATEGORY_CHIPS = [
  { label: "Payroll", href: "/payroll" },
  { label: "Accounting / Bookkeeping", href: "/accounting" },
  { label: "Invoicing", href: "/invoicing" },
  { label: "Time Tracking", href: "/time-tracking" },
  { label: "CRM", href: "/crm" },
  { label: "Project Management", href: "/project-management" },
  { label: "Field Service Management", href: "/field-service" },
  { label: "Scheduling", href: "/scheduling" },
  { label: "HR Software", href: "/hr" },
];

type TopPick = {
  tool: string;
  bestFor: string;
  price: string;
  priceSort: number;
  rating: string;
  ratingSort: number;
  whyWePickedIt: string;
  pros: string;
};

const TOP_PICKS: TopPick[] = [
  { tool: "Gusto", bestFor: "Small trade businesses", price: "$40/mo", priceSort: 40, rating: "4.8", ratingSort: 4.8, whyWePickedIt: "Best all-in-one payroll for small crews.", pros: "Fast setup • Great support" },
  { tool: "QuickBooks Online", bestFor: "Contractor bookkeeping", price: "$30/mo", priceSort: 30, rating: "4.6", ratingSort: 4.6, whyWePickedIt: "Industry standard for contractor books.", pros: "Familiar • Strong integrations" },
  { tool: "ServiceTitan", bestFor: "HVAC & plumbing", price: "Custom", priceSort: 999, rating: "4.7", ratingSort: 4.7, whyWePickedIt: "Built for home service at scale.", pros: "Dispatching • Revenue growth" },
  { tool: "Jobber", bestFor: "Field service", price: "$69/mo", priceSort: 69, rating: "4.5", ratingSort: 4.5, whyWePickedIt: "Ease of use and fair pricing.", pros: "Quick start • Invoicing" },
  { tool: "Housecall Pro", bestFor: "Home service pros", price: "$49/mo", priceSort: 49, rating: "4.6", ratingSort: 4.6, whyWePickedIt: "Strong for solo and small teams.", pros: "Scheduling • Payments" },
];

const ARTICLES = [
  {
    category: "Payroll",
    title: "How Payroll Software Works for Small Trade Businesses",
    excerpt:
      "Learn how payroll software automates pay runs, tax filings, and contractor payments for crews and job-based work.",
    href: "/payroll/guides/how-payroll-software-works",
    updated: "March 2026",
    readMins: 7,
  },
  {
    category: "Accounting",
    title: "Accounting Software for Contractors",
    excerpt:
      "See how accounting tools handle job costing, invoicing, and expenses for contractors and trades.",
    href: "/accounting/guides/accounting-for-contractors",
    updated: "March 2026",
    readMins: 7,
  },
  {
    category: "Comparisons",
    title: "Gusto vs QuickBooks for Contractor Payroll",
    excerpt: "Compare QuickBooks Online and Xero for contractor and trade-business bookkeeping.",
    href: "/accounting/compare/quickbooks-online-vs-xero",
    updated: "March 2026",
    readMins: 6,
  },
  {
    category: "Field Service",
    title: "How to Choose Field Service Management Software",
    excerpt: "See our top picks for HVAC field service software, plus what features to prioritize.",
    href: "/field-service/best-for/hvac",
    updated: "March 2026",
    readMins: 7,
  },
  {
    category: "Project Management",
    title: "Project Management for Small Trade Businesses",
    excerpt:
      "A practical overview of using project management tools for jobs, crews, and client work.",
    href: "/project-management/guides/project-management-for-small-business",
    updated: "March 2026",
    readMins: 7,
  },
  {
    category: "HR",
    title: "Best HR Software for Small Trade Businesses",
    excerpt:
      "How small trade businesses use HR software for payroll, benefits, and onboarding.",
    href: "/hr/guides/best-hr-software-for-small-business",
    updated: "March 2026",
    readMins: 8,
  },
];

const TRADES = [
  { label: "HVAC", href: "/field-service/best-for/hvac" },
  { label: "Plumbing", href: "/field-service/best-for/plumbing" },
  { label: "Electrical", href: "/field-service/best-for/electricians" },
  { label: "Landscaping", href: "/field-service/best-for/small-business" },
  { label: "Roofing", href: "/payroll/best-for/roofing" },
  { label: "Concrete & Masonry", href: "/payroll/best-for/construction" },
  { label: "Cleaning Services", href: "/payroll/best-for/cleaning-business" },
];

const METHODOLOGY_ITEMS = [
  { title: "Feature depth", description: "We test core workflows and trade-specific features so you know what really works in the field." },
  { title: "Pricing transparency", description: "We surface real pricing, tiers, and add-ons so you can budget with confidence." },
  { title: "Real-world usability for trades", description: "Reviews are written with contractors in mind—scheduling, crews, and compliance matter." },
];

function LogoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M1.03403 29.6414V23.2948C1.03403 23.0024 1.32902 22.8024 1.60061 22.9105L20.8294 30.5646C21.7975 30.95 22.8754 30.9558 23.8476 30.5808L43.4878 23.0053C43.7587 22.9008 44.0502 23.1008 44.0502 23.3912V29.7416C44.0502 29.9132 43.9442 30.067 43.7838 30.1281L23.8314 37.729C22.8688 38.0958 21.804 38.0901 20.8454 37.7131L1.29629 30.0264C1.13806 29.9641 1.03403 29.8114 1.03403 29.6414Z" fill="#1A2D48"/>
      <path d="M33.6064 27.6737V33.5284C33.6064 33.7859 33.4474 34.0166 33.2068 34.1082L29.019 35.7036C28.6129 35.8583 28.1777 35.5584 28.1777 35.1238V29.289C28.1777 29.0325 28.3355 28.8025 28.5748 28.7101L32.7627 27.0948C33.1692 26.938 33.6064 27.238 33.6064 27.6737Z" fill="#1A2D48"/>
      <path d="M23.9473 29.3439L42.4577 22.2074C42.7243 22.1046 42.7219 21.7265 42.454 21.6271L23.8973 14.7445C22.9607 14.3971 21.9301 14.4004 20.9958 14.7538L2.82047 21.6278C2.55502 21.7282 2.55259 22.1028 2.81671 22.2067L20.9461 29.334C21.91 29.7129 22.981 29.7165 23.9473 29.3439Z" fill="white"/>
      <path d="M23.8111 28.9498L43.269 21.5837C43.538 21.4819 43.5356 21.1005 43.2653 21.0021L23.7616 13.8991C22.839 13.563 21.8268 13.5662 20.9063 13.9081L1.80201 21.0028C1.53423 21.1022 1.5318 21.4801 1.79829 21.583L20.8572 28.9402C21.8071 29.3068 22.8589 29.3103 23.8111 28.9498Z" fill="#10B981"/>
      <path d="M23.9473 23.7601L42.4577 16.6236C42.7243 16.5208 42.7219 16.1427 42.454 16.0433L23.8973 9.16068C22.9607 8.8133 21.9301 8.81661 20.9958 9.16998L2.82047 16.044C2.55502 16.1444 2.55259 16.519 2.81671 16.6229L20.9461 23.7502C21.91 24.1291 22.981 24.1327 23.9473 23.7601Z" fill="white"/>
      <path d="M23.8111 22.1251L43.269 14.759C43.538 14.6572 43.5356 14.2758 43.2653 14.1774L23.7616 7.07439C22.839 6.73836 21.8268 6.74156 20.9063 7.08342L1.80201 14.1781C1.53423 14.2775 1.5318 14.6554 1.79829 14.7583L20.8572 22.1155C21.8071 22.4822 22.8589 22.4856 23.8111 22.1251Z" fill="#10B981"/>
      <path d="M23.9473 16.9354L42.4577 9.79895C42.7243 9.69615 42.7219 9.31803 42.454 9.21865L23.8973 2.336C22.9607 1.98863 21.9301 1.99193 20.9958 2.3453L2.82047 9.21934C2.55502 9.31973 2.55259 9.69436 2.81671 9.79819L20.9461 16.9255C21.91 17.3045 22.981 17.308 23.9473 16.9354Z" fill="white"/>
      <path d="M23.8111 15.3004L43.269 7.93435C43.538 7.83252 43.5356 7.45116 43.2653 7.35274L23.7616 0.249714C22.839 -0.0863148 21.8268 -0.0831149 20.9063 0.25874L1.80201 7.35341C1.53423 7.45285 1.5318 7.83074 1.79829 7.93361L20.8572 15.2908C21.8071 15.6575 22.8589 15.6609 23.8111 15.3004Z" fill="#1A2D48"/>
    </svg>
  );
}

function FooterLogo({ className }: { className?: string }) {
  return (
    <img
      src="/Logos/BS_Logo_W.svg"
      alt=""
      className={className}
      width={120}
      height={105}
      aria-hidden
    />
  );
}

function EmeraldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M10 2L18 10L10 18L2 10L10 2Z" fill="#10B981"/>
    </svg>
  );
}

const STACK_FAST_CATEGORIES = [
  { value: "payroll", label: "Payroll" },
  { value: "bookkeeping", label: "Bookkeeping" },
  { value: "field-service", label: "Field Service" },
  { value: "crm", label: "CRM" },
  { value: "banking", label: "Banking" },
];

const STACK_FAST_TRADES = [
  { value: "hvac", label: "HVAC" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "landscaping", label: "Landscaping" },
  { value: "roofing", label: "Roofing" },
  { value: "cleaning", label: "Cleaning" },
];

type TableSortKey = "rating" | "price" | "alphabetical";

function AffiliateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-xl border border-slate-200 bg-white p-6 shadow-lg" role="dialog" aria-labelledby="affiliate-title" aria-modal="true">
        <h3 id="affiliate-title" className="text-[#1A2D48] text-lg font-bold">Affiliate disclosure</h3>
        <p className="mt-3 text-[#6E6E6E] text-sm leading-relaxed">
          We may earn a commission when you purchase through our links. This does not affect our recommendations.
        </p>
        <button
          type="button"
          onClick={onClose}
          className={btnPrimary}
        >
          Got it
        </button>
      </div>
    </>
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

export default function Home() {
  const router = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [affiliateModalOpen, setAffiliateModalOpen] = useState(false);
  const [tableSort, setTableSort] = useState<TableSortKey>("rating");
  const [stackCategory, setStackCategory] = useState("");
  const [stackTrade, setStackTrade] = useState("");
  const stackFinderSentinelRef = useRef<HTMLDivElement>(null);

  const sortedPicks = useMemo(() => {
    const list = [...TOP_PICKS];
    if (tableSort === "rating") list.sort((a, b) => b.ratingSort - a.ratingSort);
    else if (tableSort === "price") list.sort((a, b) => a.priceSort - b.priceSort);
    else list.sort((a, b) => a.tool.localeCompare(b.tool));
    return list;
  }, [tableSort]);

  const handleStackFastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (stackTrade) params.set("trade", stackTrade);
    if (stackCategory) {
      // Map stack categories to current cluster hubs
      switch (stackCategory) {
        case "payroll":
          router.push(`/payroll${params.toString() ? `?${params.toString()}` : ""}`);
          break;
        case "bookkeeping":
          router.push(`/accounting${params.toString() ? `?${params.toString()}` : ""}`);
          break;
        case "field-service":
          router.push(`/field-service${params.toString() ? `?${params.toString()}` : ""}`);
          break;
        case "crm":
          router.push(`/crm${params.toString() ? `?${params.toString()}` : ""}`);
          break;
        default:
          router.push(`/${stackCategory}${params.toString() ? `?${params.toString()}` : ""}`);
      }
    } else {
      // Fallback: send to payroll hub if no specific category is chosen
      router.push(`/payroll${params.toString() ? `?${params.toString()}` : ""}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <StickyStackFinder
        sentinelRef={stackFinderSentinelRef}
        stackCategory={stackCategory}
        stackTrade={stackTrade}
        onCategoryChange={setStackCategory}
        onTradeChange={setStackTrade}
        onSubmit={handleStackFastSubmit}
        categoryOptions={STACK_FAST_CATEGORIES}
        tradeOptions={STACK_FAST_TRADES}
      />
      <main>
        {/* ——— 2) Hero ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC]">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-center">
              <div>
                <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Build the Right Software Stack for Your Trade Business
                </h1>
                <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed">
                  Compare, evaluate, and choose the right tools for your business.
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
                    onClick={() => setAffiliateModalOpen(true)}
                    className="flex items-center gap-2 text-left text-[#6E6E6E] hover:text-[#1A2D48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                  >
                    <EmeraldIcon className="h-4 w-4 shrink-0" />
                    Affiliate disclosure
                  </button>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/payroll" className={btnPrimary}>
                    Explore Payroll Software
                  </Link>
                  <Link href="/payroll/compare" className="rounded-lg border border-[#10B981]/70 bg-white px-5 py-2.5 text-base font-bold text-[#10B981] transition-colors hover:bg-neutral-50 hover:border-[#10B981]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2">
                    View Payroll Comparisons
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:p-5">
                  <p className="text-[#1A2D48] text-sm font-bold uppercase tracking-wide">Top picks this month</p>
                  <div className="mt-3 space-y-2.5">
                    {TOP_PICKS.slice(0, 3).map((item, i) => (
                      <div key={item.tool} className="rounded-lg border border-slate-100 bg-[#F8FAFC] px-3 py-2.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-[#1A2D48] text-xs font-bold text-white">{i + 1}</span>
                            <div className="min-w-0">
                              <span className="text-[#1A2D48] font-semibold">{item.tool}</span>
                              <p className="mt-0.5 text-[#6E6E6E] text-xs">{item.whyWePickedIt}</p>
                            </div>
                          </div>
                          <span className="shrink-0 text-[#10B981] font-bold">{item.rating}</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between pl-10">
                          <span className="text-[#6E6E6E] text-xs">{item.bestFor}</span>
                    <Link
                      href={
                        item.tool === "Gusto"
                          ? "/payroll/review/gusto"
                          : item.tool === "QuickBooks Online"
                          ? "/accounting/review/quickbooks-online"
                          : item.tool === "ServiceTitan"
                          ? "/field-service/review/servicetitan"
                          : item.tool === "Jobber"
                          ? "/field-service/review/jobber"
                          : item.tool === "Housecall Pro"
                          ? "/field-service/review/housecall-pro"
                          : "/"
                      }
                      className="text-xs font-bold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Details
                    </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                    <Link
                      href="/payroll/compare"
                      className="text-sm font-bold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      See payroll comparisons →
                    </Link>
                    <a href="#methodology" className="text-xs text-[#6E6E6E] hover:text-[#10B981] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Methodology</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 3) Quick Category Chips ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC] py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
              {CATEGORY_CHIPS.map(({ label, href }) => (
                <Link key={href} href={href} className={btnPill}>
                  {label}
                </Link>
              ))}
              <Link
                href="/payroll/best-payroll-software"
                className="shrink-0 text-sm font-semibold text-[#10B981] hover:text-[#6E6E6E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
              >
                See all picks
              </Link>
            </div>
          </div>
        </section>

        {/* Sentinel: when this scrolls out of view (above viewport), StickyStackFinder becomes visible */}
        <div ref={stackFinderSentinelRef} className="h-px w-full" aria-hidden />

        {/* ——— Find your stack fast ——— */}
        <section className="border-b border-slate-200 bg-white py-6 sm:py-8">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Get tailored recommendations in one click.">Find your stack fast</SectionTitle>
            <form onSubmit={handleStackFastSubmit} className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
              <div className="flex-1">
                <label htmlFor="stack-category" className="block text-sm font-semibold text-[#1A2D48]">I need help with</label>
                <select
                  id="stack-category"
                  value={stackCategory}
                  onChange={(e) => setStackCategory(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none"
                >
                  <option value="">Select category</option>
                  {STACK_FAST_CATEGORIES.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label htmlFor="stack-trade" className="block text-sm font-semibold text-[#1A2D48]">My trade</label>
                <select
                  id="stack-trade"
                  value={stackTrade}
                  onChange={(e) => setStackTrade(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none"
                >
                  <option value="">Select trade</option>
                  {STACK_FAST_TRADES.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className={btnPrimary}>
                See Results
              </button>
            </form>
          </div>
        </section>

        {/* ——— 4) Top Picks / Comparison Preview ——— */}
        <section className="border-b border-slate-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle sub="Hand-picked for trade businesses. Prices and ratings checked regularly. Updated monthly.">Top Software Picks</SectionTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#6E6E6E]">Sort by</span>
                <select
                  value={tableSort}
                  onChange={(e) => setTableSort(e.target.value as TableSortKey)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none"
                  aria-label="Sort table by"
                >
                  <option value="rating">Rating</option>
                  <option value="price">Price</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
              </div>
            </div>
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
                  {sortedPicks.map((row) => (
                    <tr key={row.tool} className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/70">
                      <td className="px-4 py-3.5">
                        <span className="font-bold text-[#1A2D48]">{row.tool}</span>
                        <p className="mt-0.5 text-xs text-[#6E6E6E]">{row.pros}</p>
                      </td>
                      <td className="px-4 py-3.5">
                        <span className="inline-block rounded bg-slate-50 px-2 py-0.5 text-xs font-medium text-[#1A2D48] border border-slate-100">Best for</span>
                        <span className="ml-2 text-[#6E6E6E]">{row.bestFor}</span>
                      </td>
                      <td className="px-4 py-3.5 text-[#6E6E6E]">{row.price}</td>
                      <td className="px-4 py-3.5 font-semibold text-[#10B981]">{row.rating}</td>
                      <td className="px-4 py-3.5">
                        <Link
                          href={
                            row.tool === "Gusto"
                              ? "/payroll/review/gusto"
                              : row.tool === "QuickBooks Online"
                              ? "/accounting/review/quickbooks-online"
                              : row.tool === "ServiceTitan"
                              ? "/field-service/review/servicetitan"
                              : row.tool === "Jobber"
                              ? "/field-service/review/jobber"
                              : row.tool === "Housecall Pro"
                              ? "/field-service/review/housecall-pro"
                              : "/"
                          }
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

        {/* ——— 5) Related Articles / Latest Guides ——— */}
        <section className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Practical guides and comparisons for contractors.">Latest Guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((article) => (
                <article key={article.href} className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#10B981] border border-[#10B981]/20">{article.category}</span>
                    <span className="text-xs text-[#6E6E6E]">Updated {article.updated} • {article.readMins} min read</span>
                  </div>
                  <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-[#1A2D48]">
                    <Link href={article.href} className="group-hover:underline hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2 flex-1 text-[#6E6E6E] text-sm leading-relaxed">{article.excerpt}</p>
                  <Link href={article.href} className="mt-4 inline-block text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 6) Trust Bar ——— */}
        <section className="bg-[#1A2D48] py-14 sm:py-16" aria-label="Why trust us">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
              <div className="flex items-center gap-4">
                <span className="shrink-0" aria-hidden><EmeraldIcon className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-white text-lg font-bold">Built for Contractors</h3>
                  <p className="mt-0.5 text-white/70 text-sm">Trade-first criteria</p>
                  <p className="mt-1 text-white/80 text-sm">Reviews and comparisons tailored to trade businesses and field service.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="shrink-0" aria-hidden><EmeraldIcon className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-white text-lg font-bold">Software Reviewed Independently</h3>
                  <p className="mt-0.5 text-white/70 text-sm">No pay-to-rank</p>
                  <p className="mt-1 text-white/80 text-sm">We test tools ourselves and don’t favor partners over accuracy.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="shrink-0" aria-hidden><EmeraldIcon className="h-5 w-5" /></span>
                <div>
                  <h3 className="text-white text-lg font-bold">Compare Before You Commit</h3>
                  <p className="mt-0.5 text-white/70 text-sm">Side-by-side tables</p>
                  <p className="mt-1 text-white/80 text-sm">See pricing, features, and trade fit in one place.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ——— 7) Business Type / Find Tools by Trade ——— */}
        <section className="border-b border-slate-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Software recommendations by trade so you see what fits your business.">Find Tools by Trade</SectionTitle>
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {TRADES.map(({ label, href }) => (
                <Link key={href} href={href} className={btnPill}>
                  {label}
                </Link>
              ))}
              <Link href="/trades" className="shrink-0 text-sm font-semibold text-[#10B981] hover:text-[#6E6E6E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                See more
              </Link>
            </div>
          </div>
        </section>

        {/* ——— 8) Methodology / How We Review ——— */}
        <section id="methodology" className="border-b border-slate-200 bg-[#F8FAFC] py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Our process is built for transparency and relevance to trades.">How We Review Software</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-3">
              {METHODOLOGY_ITEMS.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-[#1A2D48] text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 9) Newsletter / CTA ——— */}
        <section className="border-b border-slate-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl rounded-xl border border-slate-200 bg-[#F8FAFC] p-7 text-center shadow-md">
              <h2 className="text-[#1A2D48] text-xl font-semibold sm:text-2xl">Get monthly software picks for your trade.</h2>
              <p className="mt-1.5 text-[#6E6E6E] text-sm">One email per month. No spam. Unsubscribe anytime.</p>
              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@company.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-[#1A2D48] placeholder:text-[#6E6E6E] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none"
                />
                <button type="submit" className={btnPrimary}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ——— 10) Footer ——— */}
        <footer className="bg-[#1A2D48] text-white">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-1">
                <Link href="/" className="inline-flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                  <FooterLogo className="h-12 w-auto" />
                </Link>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">BeltStack helps trade businesses compare and choose the right software.</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Product</h4>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <Link
                      href="/payroll/best-payroll-software"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Best payroll software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/payroll/compare"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Payroll comparisons
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/payroll/guides"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Payroll guides
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Company</h4>
                <ul className="mt-2 space-y-1.5">
                  <li><Link href="/about" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">About</Link></li>
                  <li><Link href="/contact" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Contact</Link></li>
                  <li><Link href="/methodology" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Methodology</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-white/90">Categories</h4>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    <Link
                      href="/payroll"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Payroll
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/accounting"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Accounting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/field-service"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      Field service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hr"
                      className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                    >
                      HR software
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-white/50 text-xs leading-relaxed">
                We may earn commissions from links on this page. This does not influence our evaluations.
              </p>
              <p className="mt-1 text-white/50 text-xs leading-relaxed">
                BeltStack provides independent software reviews and comparisons. Methodology link above explains how we review. Prices and offers are subject to change.
              </p>
            </div>
          </div>
        </footer>
      </main>
      <AffiliateModal open={affiliateModalOpen} onClose={() => setAffiliateModalOpen(false)} />
    </div>
  );
}
