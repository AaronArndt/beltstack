"use client";

import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/Footer";
import {
  HOMEPAGE_CATEGORY_GROUPS,
  POPULAR_COMPARISONS,
  COMPARE_HUB_LINKS,
  LATEST_GUIDES,
  TRUST_ITEMS,
} from "@/lib/data/homePageData";
import { CRM_POPULAR_COMPARISONS } from "@/lib/data/crmHubData";
import { HELPDESK_POPULAR_COMPARISONS } from "@/lib/data/helpdeskHubData";
import { POS_POPULAR_COMPARISONS } from "@/lib/data/posHubData";
import { FIELD_SERVICE_POPULAR_COMPARISONS } from "@/lib/data/fieldServiceHubData";
import { sectionRuleAccent } from "@/lib/design-tokens";
import { TradeSoftwareDiscoverySection } from "@/components/home/TradeSoftwareDiscoverySection";

// ——— Design tokens (reference) ———
// BG: #F5F5F4 | Navy: #1A2D48 | Emerald: #10B981 | Subtle: #57534E
// Borders: stone-200 / neutral (warm-neutral chrome)

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

const HERO_SECONDARY_LINKS = [
  { label: "Software categories", href: "/software" },
  { label: "Your industry", href: "#trade-finder" },
  { label: "Compare software", href: "#popular-comparisons" },
] as const;

const heroUseCaseTileClass =
  "group flex h-full flex-col items-center rounded-md border border-stone-200 bg-white px-2 pb-5 pt-6 text-center shadow-[0_4px_18px_rgba(26,45,72,0.07)] transition-[box-shadow,border-color] duration-300 ease-out hover:border-[#10B981] hover:shadow-[0_10px_28px_rgba(26,45,72,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

const heroSecondaryLinkClass =
  "inline-flex min-h-11 items-center rounded-sm px-1.5 py-2 text-sm font-medium text-[#1A2D48] underline-offset-[3px] transition-colors duration-200 hover:text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-1";

const categoryCardClass =
  "group flex flex-col rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-[#10B981]/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";

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
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— 1) Hero ——— */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-12 lg:pt-14">
            <h1 className="text-center text-[#1A2D48] text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              <span className="block">Find the Best Software for</span>
              <span className="block">Your Business</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#57534E] text-base leading-relaxed sm:mt-5 sm:text-lg">
              Compare software for payroll, CRM, marketing, and operations — tailored to your business.
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

            <nav
              className="mx-auto mt-8 max-w-6xl text-center sm:mt-10"
              aria-label="Browse BeltStack"
            >
              <p className="text-sm text-[#57534E]">Or browse directly:</p>
              <ul className="mt-1 flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
                {HERO_SECONDARY_LINKS.map(({ label, href }, index) => (
                  <li key={href} className="flex items-center">
                    {index > 0 && (
                      <span className="mx-1.5 text-stone-300" aria-hidden>
                        ·
                      </span>
                    )}
                    <Link href={href} className={heroSecondaryLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>

        <TradeSoftwareDiscoverySection />

        {/* ——— 2) Software Categories ——— */}
        <section className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Browse by category. Each hub includes reviews, comparisons, and guides.">
              Software Categories
            </SectionTitle>
            <div className="mt-4 space-y-8">
              {HOMEPAGE_CATEGORY_GROUPS.map((group) => (
                <div key={group.title}>
                  <h3 className="text-xs font-bold uppercase tracking-wide text-[#1A2D48]">{group.title}</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {group.categories.map(({ label, href, description }) => (
                      <Link key={href} href={href} className={categoryCardClass}>
                        <span className="font-semibold text-[#1A2D48] group-hover:text-[#10B981]">{label}</span>
                        <span className="mt-0.5 text-[#57534E] text-sm">{description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 3) Popular Comparisons ——— */}
        <section id="popular-comparisons" className="scroll-mt-section border-b border-stone-200 bg-white py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Side-by-side comparisons to help you decide.">Popular Software Comparisons</SectionTitle>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {HOMEPAGE_POPULAR_COMPARISON_CARDS.map((card) => {
                const title = `${card.productA.name} vs ${card.productB.name}`;
                const summary =
                  card.summaryParagraph.length > 140
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
                  className="min-h-11 inline-flex items-center font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 4) Latest Software Guides ——— */}
        <section className="border-b border-stone-200 bg-background py-8 sm:py-11">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionTitle sub="Practical guides to choose and use software.">
              Latest Software Guides & Advice
            </SectionTitle>
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

        {/* ——— 5) Why Trust BeltStack ——— */}
        <section className="bg-[#1A2D48] py-14 sm:py-16" aria-labelledby="trust-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="trust-heading" className="text-white text-2xl font-bold sm:text-3xl">
              Why Trust BeltStack
            </h2>
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
            <Link
              href="/methodology"
              className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A2D48] rounded"
            >
              See our methodology →
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
