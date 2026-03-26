"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { StickyStackFinder } from "@/components/StickyStackFinder";
import { SearchAutocomplete } from "@/components/search/SearchAutocomplete";
import {
  HERO_CATEGORY_CHIPS,
  FEATURED_SOFTWARE,
  SOFTWARE_CATEGORIES,
  POPULAR_COMPARISONS,
  COMPARE_HUB_LINKS,
  BEST_SOFTWARE_ROUNDUPS,
  TRADES,
  LATEST_GUIDES,
  TRUST_ITEMS,
} from "@/lib/data/homePageData";
import { CRM_POPULAR_COMPARISONS } from "@/lib/data/crmHubData";
import { HELPDESK_POPULAR_COMPARISONS } from "@/lib/data/helpdeskHubData";
import { POS_POPULAR_COMPARISONS } from "@/lib/data/posHubData";
import { FIELD_SERVICE_POPULAR_COMPARISONS } from "@/lib/data/fieldServiceHubData";
import { sectionRuleAccent, trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";
import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";

// ——— Design tokens (reference) ———
// BG: #F5F5F4 | Navy: #1A2D48 | Emerald: #10B981 | Subtle: #57534E
// Borders: stone-200 / neutral (warm-neutral chrome)

const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnSecondary =
  "rounded-md border border-[#10B981]/70 bg-white px-5 py-2.5 text-base font-bold text-[#10B981] transition-colors hover:bg-stone-50 hover:border-[#10B981]/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const btnPill =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1A2D48] transition-all hover:border-[#1A2D48] hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

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

function AffiliateModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <>
      <div className="fixed inset-0 z-50 bg-[#1A2D48]/60" aria-hidden onClick={onClose} />
      <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-stone-200 bg-white p-6 shadow-md" role="dialog" aria-labelledby="affiliate-title" aria-modal="true">
        <h3 id="affiliate-title" className="text-[#1A2D48] text-lg font-bold">Affiliate disclosure</h3>
        <p className="mt-3 text-[#57534E] text-sm leading-relaxed">
          We may earn a commission when you purchase through our links. This does not affect our recommendations.
        </p>
        <button type="button" onClick={onClose} className={btnPrimary}>
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
      <div className={sectionRuleAccent} aria-hidden />
      {sub && <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>}
    </div>
  );
}

type PopularComparisonCard = {
  slug: string;
  href: string;
  productA: { name: string; logoSrc?: string };
  productB: { name: string; logoSrc?: string };
  summaryParagraph: string;
};

const HOMEPAGE_PAYROLL_POPULAR_CARD: PopularComparisonCard = {
  slug: "gusto-vs-onpay",
  href: "/payroll/compare/gusto-vs-onpay",
  productA: { name: "Gusto", logoSrc: "/Logos/gusto.jpeg" },
  productB: { name: "OnPay", logoSrc: "/Logos/onpay.jpeg" },
  summaryParagraph:
    "Gusto and OnPay both serve small businesses with payroll, tax filing, and benefits, but they take different approaches. Gusto offers more HR depth and tiered plans; OnPay emphasizes simplicity and flat, transparent pricing. This comparison breaks down features, pricing, and who each tool fits best.",
};

const HOMEPAGE_POPULAR_COMPARISON_CARDS: PopularComparisonCard[] = POPULAR_COMPARISONS.map((item) => {
  const href = item.href;
  const category = href.split("/")[1];

  if (category === "payroll") return HOMEPAGE_PAYROLL_POPULAR_CARD;
  if (category === "crm") return CRM_POPULAR_COMPARISONS.find((c) => c.href === href) ?? null;
  if (category === "helpdesk") return HELPDESK_POPULAR_COMPARISONS.find((c) => c.href === href) ?? null;
  if (category === "pos") return POS_POPULAR_COMPARISONS.find((c) => c.href === href) ?? null;
  if (category === "field-service") return FIELD_SERVICE_POPULAR_COMPARISONS.find((c) => c.href === href) ?? null;
  return null;
}).filter(Boolean) as PopularComparisonCard[];

export default function Home() {
  const router = useRouter();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [affiliateModalOpen, setAffiliateModalOpen] = useState(false);
  const [stackCategory, setStackCategory] = useState("");
  const [stackTrade, setStackTrade] = useState("");
  const stackFinderSentinelRef = useRef<HTMLDivElement>(null);

  const handleStackFastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (stackTrade) params.set("trade", stackTrade);
    if (stackCategory) {
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
      router.push(`/payroll${params.toString() ? `?${params.toString()}` : ""}`);
    }
  };

  return (
    <>
      <Head>
        {/* Impact requires the `value` attribute (not `content`) for verification. */}
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error - `value` is not part of the React MetaHTMLAttributes typing, but is required by Impact. */}
        <meta name="impact-site-verification" value="6e75958d-93bf-4790-9cae-18726ffe1354" />
      </Head>
      <div className="min-h-screen bg-background">
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
        {/* ——— 1) Hero: search-first discovery ——— */}
        <section className="border-b border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            <h1 className="text-center text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Find the Best Software for Your Business
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-center text-[#57534E] text-base leading-relaxed">
              Compare payroll, CRM, field service, helpdesk, POS, inventory, and more. Independent reviews and side-by-side comparisons.
            </p>
            <div className={`mx-auto mt-6 justify-center ${trustIndicatorListClass}`}>
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
                onClick={() => setAffiliateModalOpen(true)}
                className={trustIndicatorAffiliateButtonClass}
              >
                <TrustIndicatorMark />
                Affiliate disclosure
              </button>
            </div>
            <SearchAutocomplete autoNavigateToResults />
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
              {HERO_CATEGORY_CHIPS.map(({ label, href }) => (
                <Link key={href} href={href} className={btnPill}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div ref={stackFinderSentinelRef} className="h-px w-full" aria-hidden />

        {/* ——— 2) Featured Software ——— */}
        <section className="border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Hand-picked tools with reviews, pricing, and comparisons.">Featured Software</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURED_SOFTWARE.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden">
                      <Image
                        src={item.logoSrc}
                        alt=""
                        fill
                        className="object-contain"
                        sizes="48px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="rounded bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold text-[#10B981] border border-[#10B981]/20">
                        {item.categoryLabel}
                      </span>
                      <h3 className="mt-1.5 text-[#1A2D48] text-lg font-bold">{item.name}</h3>
                      <p className="text-[#10B981] font-semibold">{item.rating}</p>
                    </div>
                  </div>
                  <ul className="mt-3 list-inside list-disc text-[#57534E] text-sm space-y-0.5">
                    {item.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-stone-100 pt-4">
                    <a
                      href={item.visitUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={btnPrimary}
                    >
                      Visit site
                    </a>
                    <Link
                      href={item.reviewHref}
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

        {/* ——— 3) Software Categories ——— */}
        <section className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Browse by category. Each hub includes reviews, comparisons, and guides.">Software Categories</SectionTitle>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {SOFTWARE_CATEGORIES.map(({ label, href, description }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#10B981]/40 hover:shadow-sm"
                >
                  <span className="font-semibold text-[#1A2D48] group-hover:text-[#10B981]">{label}</span>
                  {description && <span className="mt-0.5 text-[#57534E] text-sm">{description}</span>}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 4) Popular Comparisons ——— */}
        <section className="border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side comparisons to help you decide.">Popular Software Comparisons</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {HOMEPAGE_POPULAR_COMPARISON_CARDS.map((card) => {
                const category = card.href.split("/")[1];
                const title = `${card.productA.name} vs ${card.productB.name}`;
                const summary =
                  category === "crm"
                    ? card.summaryParagraph
                    : card.summaryParagraph.length > 140
                      ? card.summaryParagraph.slice(0, 140).trim() + "…"
                      : card.summaryParagraph;

                return (
                  <Link
                    key={card.slug}
                    href={card.href}
                    className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
                  >
                    <div className="flex items-center gap-3">
                      {card.productA.logoSrc ? (
                        <img
                          src={card.productA.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{card.productA.name}</span>
                      )}
                      <span className="text-[#57534E] text-lg font-medium" aria-hidden>
                        vs
                      </span>
                      {card.productB.logoSrc ? (
                        <img
                          src={card.productB.logoSrc}
                          alt=""
                          className="h-10 w-auto max-w-[80px] object-contain object-left"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-[#57534E]">{card.productB.name}</span>
                      )}
                    </div>
                    <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                      {title}
                    </h3>
                    <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">{summary}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                      Compare →
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-[#57534E]">More:</span>
              {COMPARE_HUB_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 5) Best Software by Category ——— */}
        <section className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Curated roundups by category with pricing and features.">Best Software by Category</SectionTitle>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {BEST_SOFTWARE_ROUNDUPS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-lg border border-stone-200 bg-white px-4 py-3.5 text-[#1A2D48] font-semibold shadow-sm transition-all hover:border-[#10B981]/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 6) Best Software by Trade ——— */}
        <section className="border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Software recommendations by trade so you see what fits your business.">Best Software by Trade</SectionTitle>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {TRADES.map(({ label, href }) => (
                <Link key={href} href={href} className={btnPill}>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 7) Latest Software Guides ——— */}
        <section className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Practical guides to choose and use software.">Latest Software Guides</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {LATEST_GUIDES.map((guide) => (
                <article
                  key={guide.href}
                  className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <span className="rounded-md bg-[#10B981]/10 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#10B981] border border-[#10B981]/20 w-fit">
                    {guide.category}
                  </span>
                  <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-[#1A2D48]">
                    <Link href={guide.href} className="group-hover:underline hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                      {guide.title}
                    </Link>
                  </h3>
                  <Link href={guide.href} className="mt-4 inline-block text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 8) Why Trust BeltStack ——— */}
        <section className="bg-[#1A2D48] py-14 sm:py-16" aria-label="Why trust us">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-white text-2xl font-bold sm:text-3xl">Why Trust BeltStack</h2>
            <div className={sectionRuleAccent} aria-hidden />
            <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {TRUST_ITEMS.map((item) => (
                <div key={item.heading} className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#10B981]" aria-hidden />
                  <div>
                    <h3 className="text-white text-lg font-bold">{item.heading}</h3>
                    <p className="mt-1 text-white/80 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 9) Email capture ——— */}
        <section className="border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-xl rounded-lg border border-stone-200 bg-background p-7 text-center shadow-sm">
              <h2 className="text-[#1A2D48] text-xl font-semibold sm:text-2xl">Get Monthly Software Picks for Your Business</h2>
              <p className="mt-1.5 text-[#57534E] text-sm">One email per month. No spam. Unsubscribe anytime.</p>
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
                  className="min-w-0 flex-1 rounded-lg border border-stone-200 bg-white px-4 py-2.5 text-[#1A2D48] placeholder:text-[#57534E] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none"
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
                  <li><Link href="/payroll/best-payroll-software" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Best payroll software</Link></li>
                  <li><Link href="/payroll/compare" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll comparisons</Link></li>
                  <li><Link href="/payroll/guides" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll guides</Link></li>
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
                  <li><Link href="/payroll" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Payroll</Link></li>
                  <li><Link href="/accounting" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting</Link></li>
                  <li><Link href="/field-service" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Field service</Link></li>
                  <li><Link href="/hr" className="text-sm text-white/60 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">HR software</Link></li>
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
    </>
  );
}
