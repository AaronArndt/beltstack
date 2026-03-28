"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { StickyStackFinder } from "@/components/StickyStackFinder";
import { Footer } from "@/components/Footer";
import {
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
import { sectionRuleAccent } from "@/lib/design-tokens";

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

/** Homepage hero — use-case tiles (custom artwork in /public/Logos). */
const HERO_USE_CASE_TILES = [
  {
    title: "Get paid & invoicing",
    href: "/invoicing",
    iconSrc: "/Logos/getpaidandpricing.png",
  },
  {
    title: "Run payroll & hiring",
    href: "/payroll",
    iconSrc: "/Logos/runpayrollandhiring.png",
  },
  {
    title: "Manage jobs & crews",
    href: "/field-service",
    iconSrc: "/Logos/managecrewsandjobs.png",
  },
  {
    title: "Get more leads",
    href: "/lead-generation",
    iconSrc: "/Logos/getmoreleads.png",
  },
  {
    title: "Track finances",
    href: "/accounting",
    iconSrc: "/Logos/trackfinances.png",
  },
  {
    title: "Build your website",
    href: "/website-builders",
    iconSrc: "/Logos/buildyourwebsite.png",
  },
] as const;

const HERO_CATEGORY_LINKS = [
  { label: "Payroll", href: "/payroll" },
  { label: "CRM", href: "/crm" },
  { label: "Project Management", href: "/project-management" },
  { label: "Accounting", href: "/accounting" },
  { label: "Email Marketing", href: "/email-marketing" },
  { label: "Call Tracking", href: "/call-tracking" },
  { label: "Website Builders", href: "/website-builders" },
] as const;

const HERO_CATEGORY_SEE_MORE_HREF = "/software" as const;

/** Trade pills — hubs already in the site (no aggregate “all trades” page). */
const HERO_TRADE_LINKS = [
  { label: "HVAC", href: "/field-service/best-for/hvac" },
  { label: "Plumbing", href: "/field-service/best-for/plumbing" },
  { label: "Electrical", href: "/field-service/best-for/electricians" },
  { label: "Cleaning", href: "/payroll/best-for/cleaning-business" },
  { label: "Roofing", href: "/payroll/best-for/roofing" },
] as const;

const heroUseCaseTileClass =
  "group flex h-full flex-col items-center rounded-xl border border-transparent bg-white px-2 pb-5 pt-6 text-center shadow-[0_4px_18px_rgba(26,45,72,0.07)] transition-[box-shadow,border-color] duration-300 ease-out hover:border-[#10B981] hover:shadow-[0_10px_28px_rgba(26,45,72,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const heroFilterPillClass =
  "inline-flex items-center rounded border border-stone-200 bg-white px-3 py-1.5 text-sm font-semibold text-[#1A2D48] transition-colors duration-200 hover:border-stone-300 hover:bg-stone-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1";

const heroCategorySeeMoreClass =
  "inline-flex items-center px-0.5 py-1 text-sm font-medium text-[#57534E] underline-offset-[3px] transition-colors duration-200 hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1 rounded-sm";

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
        {/* ——— 1) Hero ——— */}
        <section className="border-b border-stone-200 bg-stone-50">
          <div className="mx-auto max-w-7xl px-4 pb-14 pt-10 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20 lg:pt-14">
            <h1 className="text-center text-[#1A2D48] text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              <span className="block">Find the Best Software for</span>
              <span className="block">Your Business</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#57534E] text-base leading-relaxed sm:mt-5 sm:text-lg">
              Compare tools for payroll, CRM, marketing, and operations — tailored to your trade
            </p>

            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:mt-14 lg:grid-cols-6 lg:gap-3 xl:gap-4">
              {HERO_USE_CASE_TILES.map(({ title, href, iconSrc }) => (
                <Link key={href} href={href} className={heroUseCaseTileClass}>
                  <div className="relative mx-auto mb-4 flex h-[92px] w-full max-w-[112px] items-center justify-center">
                    <span
                      className="absolute left-1/2 top-1/2 h-[72px] w-[88px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[2rem] bg-[#10B981]/18"
                      aria-hidden
                    />
                    <Image
                      src={iconSrc}
                      alt=""
                      width={88}
                      height={88}
                      className="relative z-[1] h-[4.5rem] w-auto max-w-[5.5rem] object-contain"
                    />
                  </div>
                  <span className="text-[#1A2D48] text-sm font-bold leading-snug sm:text-[0.9375rem]">{title}</span>
                </Link>
              ))}
            </div>

            <div className="mx-auto mt-10 max-w-6xl space-y-4 sm:mt-12">
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-5">
                <span className="shrink-0 text-sm font-medium text-[#57534E] sm:w-24 sm:pt-1.5">Category</span>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                  {HERO_CATEGORY_LINKS.map(({ label, href }) => (
                    <Link key={href + label} href={href} className={heroFilterPillClass}>
                      {label}
                    </Link>
                  ))}
                  <Link href={HERO_CATEGORY_SEE_MORE_HREF} className={heroCategorySeeMoreClass}>
                    See more
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 sm:flex-row sm:items-start sm:gap-5">
                <span className="shrink-0 text-sm font-medium text-[#57534E] sm:w-24 sm:pt-1.5">Trade</span>
                <div className="flex flex-wrap gap-2">
                  {HERO_TRADE_LINKS.map(({ label, href }) => (
                    <Link key={href} href={href} className={heroFilterPillClass}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
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

        <Footer />
      </main>
    </div>
  );
}
