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
import { Layers } from "lucide-react";

// Page bands use sage-soft. Headings and primary buttons use brand (deep teal).
// Links and focus use indigo. Editorial badges and the trust-band dots use terracotta.

/** Homepage hero — use-case tiles (artwork in /public/Logos/BeltStack_HeroIconsNew). */
const HERO_USE_CASE_TILES = [
  {
    title: "Get paid & invoicing",
    href: "/invoicing",
    iconSrc: "/Logos/BeltStack_HeroIconsNew/getpaidandpricing.png",
  },
  {
    title: "Run payroll & hiring",
    href: "/payroll",
    iconSrc: "/Logos/BeltStack_HeroIconsNew/runpayrollandhiring.png",
  },
  {
    title: "Manage jobs & crews",
    href: "/field-service",
    iconSrc: "/Logos/BeltStack_HeroIconsNew/managecrewsandjobs.png",
  },
  {
    title: "Get more leads",
    href: "/lead-generation",
    iconSrc: "/Logos/BeltStack_HeroIconsNew/getmoreleads.png",
  },
  {
    title: "Track finances",
    href: "/accounting",
    iconSrc: "/Logos/BeltStack_HeroIconsNew/trackfinances.png",
  },
  {
    title: "Build your website",
    href: "/website-builders",
    iconSrc: "/Logos/BeltStack_HeroIconsNew/buildyourwebsite.png",
  },
] as const;

const HERO_SECONDARY_LINKS = [
  { label: "Software categories", href: "/software" },
  { label: "Your industry", href: "#trade-finder" },
  { label: "Compare software", href: "#popular-comparisons" },
] as const;

const heroUseCaseTileClass =
  "group flex h-full flex-col items-center rounded-md border border-stone-200 bg-white px-2 pb-5 pt-6 text-center shadow-[0_4px_18px_rgba(1,44,42,0.07)] transition-[box-shadow,border-color] duration-300 ease-out hover:border-indigo hover:shadow-[0_10px_28px_rgba(1,44,42,0.14)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2";

const heroSecondaryLinkClass =
  "inline-flex min-h-11 items-center rounded-sm px-1.5 py-2 text-sm font-medium text-indigo underline-offset-[3px] transition-colors duration-200 hover:text-indigo-hover hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-1";

const categoryCardClass =
  "group flex flex-col rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition-all duration-200 hover:border-indigo/40 hover:shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-brand text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className={sectionRuleAccent} aria-hidden />
      {sub && <p className="mt-1 text-muted-foreground text-sm sm:text-base">{sub}</p>}
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

const trustIconClass = "mt-0.5 h-6 w-6 shrink-0 text-terracotta";

function TrustMark({ heading }: { heading: string }) {
  if (heading === "Editorial ratings") {
    return (
      <svg viewBox="0 0 24 24" className={trustIconClass} aria-hidden fill="currentColor">
        <path d="M12 2.2 14.9 8l6.4.9-4.6 4.5 1.1 6.3L12 16.8 6.2 19.7l1.1-6.3L2.7 8.9 9.1 8 12 2.2z" />
      </svg>
    );
  }
  if (heading === "Built for small businesses") {
    return <Layers className={trustIconClass} aria-hidden />;
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={trustIconClass}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m11 17 2 2a1 1 0 1 0 3-3" />
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
      <path d="m21 3 1 11h-2" />
      <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
      <path d="M3 4h8" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        {/* ——— 1) Hero ——— */}
        <section className="relative overflow-hidden bg-white">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-16 h-56 w-[36rem] rounded-full bg-sage/55 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 top-0 h-48 w-[32rem] rounded-full bg-sage/40 blur-3xl"
          />
          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:px-8 lg:pb-12 lg:pt-14">
            <h1 className="text-center text-brand text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              <span className="block">Find the Best Software for</span>
              <span className="relative inline-block">
                Your Business
                <svg
                  aria-hidden
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                  className="pointer-events-none absolute right-0 top-[calc(100%-0.2em)] h-3 w-[68%] text-terracotta"
                >
                  <path
                    fill="currentColor"
                    d="M0 7.6Q52 8.4 100 3.2L100 5.4Q52 10.6 0 10.4Z"
                  />
                </svg>
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground text-base leading-relaxed sm:mt-5 sm:text-lg">
              Compare software for payroll, CRM, marketing, and operations — tailored to your business.
            </p>

            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:mt-14 lg:grid-cols-6 lg:gap-3 xl:gap-4">
              {HERO_USE_CASE_TILES.map(({ title, href, iconSrc }) => (
                <Link key={href} href={href} className={heroUseCaseTileClass}>
                  <div className="relative mx-auto mb-4 flex h-[92px] w-full max-w-[112px] items-center justify-center">
                    <span
                      className="absolute left-1/2 top-1/2 h-[72px] w-[88px] -translate-x-1/2 -translate-y-1/2 rotate-[-8deg] rounded-[2rem] bg-sage/80"
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
                  <span className="text-brand text-sm font-bold leading-snug sm:text-[0.9375rem]">{title}</span>
                </Link>
              ))}
            </div>

            <nav
              className="mx-auto mt-8 max-w-6xl text-center sm:mt-10"
              aria-label="Browse BeltStack"
            >
              <p className="text-sm text-muted-foreground">Or browse directly:</p>
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
                  <h3 className="text-xs font-bold uppercase tracking-wide text-brand">{group.title}</h3>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {group.categories.map(({ label, href, description }) => (
                      <Link key={href} href={href} className={categoryCardClass}>
                        <span className="font-semibold text-brand group-hover:text-indigo">{label}</span>
                        <span className="mt-0.5 text-muted-foreground text-sm">{description}</span>
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
                    className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2"
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
                        <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-muted-foreground">{card.productA.name}</span>
                      )}
                      <span className="text-muted-foreground text-lg font-medium" aria-hidden>
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
                        <span className="flex h-10 min-w-[60px] items-center text-sm font-medium text-muted-foreground">{card.productB.name}</span>
                      )}
                    </div>
                    <h3 className="mt-3 text-brand text-xl font-bold group-hover:text-indigo">
                      {title}
                    </h3>
                    <p className="mt-1 text-muted-foreground text-sm leading-relaxed line-clamp-3">{summary}</p>
                    <span className="mt-4 inline-block text-sm font-semibold text-indigo group-hover:underline">
                      Compare →
                    </span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-muted-foreground">More:</span>
              {COMPARE_HUB_LINKS.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="min-h-11 inline-flex items-center font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded"
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
                  <span className="rounded-md border border-terracotta/40 bg-terracotta/30 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-brand w-fit">
                    {guide.category}
                  </span>
                  <h3 className="mt-3 line-clamp-2 text-lg font-semibold leading-snug text-brand">
                    <Link href={guide.href} className="group-hover:underline hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                      {guide.title}
                    </Link>
                  </h3>
                  <Link href={guide.href} className="mt-4 inline-block text-sm font-semibold text-indigo hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded">
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ——— 5) Why Trust BeltStack ——— */}
        <section className="bg-brand py-14 sm:py-16" aria-labelledby="trust-heading">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 id="trust-heading" className="text-white text-2xl font-bold sm:text-3xl">
              Why Trust BeltStack
            </h2>
            <div className={sectionRuleAccent} aria-hidden />
            <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:gap-6">
              {TRUST_ITEMS.map((item) => (
                <div key={item.heading} className="flex items-start gap-4">
                  <TrustMark heading={item.heading} />
                  <div>
                    <h3 className="text-white text-lg font-bold">{item.heading}</h3>
                    <p className="mt-1 text-white/80 text-sm leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/methodology"
              className="mt-8 inline-flex min-h-11 items-center text-sm font-semibold text-sage hover:text-white hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2 focus-visible:ring-offset-brand rounded"
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
