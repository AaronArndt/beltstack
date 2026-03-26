"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import { HubEditorialUseCaseSection } from "@/components/hubs/HubEditorialUseCaseSection";
import { HubGuidesGrid } from "@/components/hubs/HubGuidesGrid";
import {
  POS_FEATURED_PICKS,
  POS_COMPARISON_ROWS,
  POS_SCENARIO_LINKS,
  POS_BY_BUSINESS_TYPE_GROUPS,
  POS_POPULAR_COMPARISONS,
  POS_FAQ_ITEMS,
  POS_METHODOLOGY,
  POS_HUB_GUIDES,
  POS_USE_CASE_EDITORIAL,
} from "@/lib/data/posHubData";
import { getPosReviewUrl } from "@/lib/routes";
const btnPrimary =
  "rounded-md bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-md border border-stone-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-stone-300 focus:ring-1 focus:ring-stone-200 focus:outline-none";

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

// ——— Shared hub section title (matches other hubs) ———
function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

// ——— Finder: Find the right POS fit ———
function PosFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="pos-business-type" className="block text-sm font-semibold text-[#1A2D48]">
          Business type
        </label>
        <select id="pos-business-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="retail-store">Retail store</option>
          <option value="restaurant">Restaurant</option>
          <option value="ecommerce-store">Ecommerce store</option>
          <option value="small-business">Small business</option>
          <option value="multi-location-business">Multi-location business</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="pos-primary-need" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="pos-primary-need" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="retail-pos">Retail POS</option>
          <option value="restaurant-pos">Restaurant POS</option>
          <option value="inventory-integration">Inventory integration</option>
          <option value="ecommerce-integration">Ecommerce integration</option>
          <option value="multi-location-management">Multi-location management</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

// ——— How to choose POS software (pre-featured picks) ———
function PosHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating POS systems.">
        How to choose POS software
      </HubSectionTitle>
      <p className="mt-1 text-[#57534E] text-sm leading-relaxed max-w-3xl">
        POS software sits at the heart of in-person (and often online) sales. This page is for{" "}
        <Link href="/pos/best-for/retail" className={linkGreen}>
          retail stores
        </Link>
        ,{" "}
        <Link href="/pos/best-for/restaurants" className={linkGreen}>
          restaurants
        </Link>
        ,{" "}
        <Link href="/pos/best-for/ecommerce" className={linkGreen}>
          ecommerce businesses
        </Link>
        ,{" "}
        <Link href="/pos/best-for/small-business" className={linkGreen}>
          small businesses
        </Link>{" "}
        and{" "}
        <Link href="/pos/best-for/multi-location" className={linkGreen}>
          multi-location businesses
        </Link>
        . Use the{" "}
        <Link href="/pos/best-pos-software" className={linkGreen}>
          best POS software roundup
        </Link>{" "}
        for a curated shortlist, the{" "}
        <Link href="/pos/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        for head‑to‑head matchups, our{" "}
        <Link href="/pos/guides" className={linkGreen}>
          POS guides
        </Link>{" "}
        for how to choose and use tools, and the scenario links below to jump into specific use cases.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Payment processing</strong> — Check whether the POS includes or integrates a payment processor, what rates apply, and if you can use your own processor.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Inventory and reporting</strong> — Look for item management, stock levels, low-stock alerts, and sales reports so you can run the register and understand performance.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Hardware compatibility</strong> — Confirm which terminals, tablets, or peripherals (printers, cash drawers) are supported and whether hardware is included or sold separately.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#57534E]">
          <li>
            <strong className="text-[#1A2D48]">Ecommerce and multi-location</strong> — If you sell online or have multiple locations, ensure the POS syncs inventory and orders across channels and sites.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Integrations</strong> — Many businesses need the POS to connect to{" "}
            <Link href="/accounting" className={linkGreen}>
              accounting
            </Link>{" "}
            or{" "}
            <Link href="/inventory" className={linkGreen}>
              inventory
            </Link>{" "}
            tools so sales and stock stay in sync with the rest of the business.
          </li>
        </ul>
      </div>
    </>
  );
}

function PosGuidesSection() {
  return (
    <HubGuidesGrid
      sectionTitle="POS guides"
      sectionSub="Learn pricing, payments, and hardware tradeoffs—before you shortlist vendors."
      intro={
        <>
          Educational articles on evaluation—not duplicate scenario blurbs. For operational picks, use{" "}
          <a href="#by-scenario" className={linkGreen}>
            best POS software by use case
          </a>
          ; for how you sell (retail vs restaurant), see{" "}
          <a href="#by-trade" className={linkGreen}>
            POS by business type
          </a>
          .
        </>
      }
      guides={POS_HUB_GUIDES}
      footer={
        <>
          <Link href="/pos/guides" className={`${linkGreen} font-semibold`}>
            View all POS guides →
          </Link>
          <span className="mx-2 text-[#57534E]">·</span>
          Reviews:{" "}
          <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>
            Square
          </Link>
          ,{" "}
          <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>
            Shopify POS
          </Link>
          ,{" "}
          <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>
            Toast
          </Link>
          .
        </>
      }
    />
  );
}

// ——— Education: What to look for in POS software ———
function PosEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in POS software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#57534E] text-sm sm:text-base">
          What matters when businesses choose tools to process sales, accept payments, and support day-to-day operations.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#57534E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Payment processing integration</h3>
            <p className="mt-1.5">
              Most POS systems bundle or partner with a payment processor so you can accept cards and other methods at the register. Compare processing rates, contract terms, and whether you can use your own processor if needed.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Inventory management features</h3>
            <p className="mt-1.5">
              Look for item and variant management, stock levels, reorder alerts, and the ability to receive and adjust inventory. Deeper POS systems support purchase orders and multi-location stock sync.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Hardware compatibility</h3>
            <p className="mt-1.5">
              Confirm which devices the POS runs on (tablets, terminals, computers) and which peripherals—receipt printers, cash drawers, barcode scanners—are supported. Some providers sell hardware bundles; others are bring-your-own-device.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Sales reporting and analytics</h3>
            <p className="mt-1.5">
              Useful POS systems offer sales by period, by product or category, and by payment type. Dashboards and exports help you understand trends and reconcile with bank deposits and accounting.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Multi-location management</h3>
            <p className="mt-1.5">
              If you have or plan to have multiple locations, check that the POS supports multi-store inventory, consolidated reporting, and consistent settings across sites. Some tools add location-based permissions and transfer workflows.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#57534E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Payment processing (cards, contactless, etc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Item and inventory management with stock levels
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Hardware that fits your setup (terminals, tablets, printers)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Sales reporting and basic analytics
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>✓</span>
                Multi-location support if you have more than one site
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// ——— Popular POS comparisons ———
function PosPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side POS features, pricing, and recommendations.">
        Popular POS Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {POS_POPULAR_COMPARISONS.map((item) => {
          const title = `${item.productA.name} vs ${item.productB.name}`;
          const summary =
            item.summaryParagraph.length > 140
              ? item.summaryParagraph.slice(0, 140).trim() + "…"
              : item.summaryParagraph;
          return (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex flex-col rounded-lg border border-stone-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-sm hover:border-stone-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
            >
              <div className="flex items-center gap-3">
                {item.productA.logoSrc && (
                  <img
                    src={item.productA.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
                <span className="text-[#57534E] text-lg font-medium" aria-hidden>vs</span>
                {item.productB.logoSrc && (
                  <img
                    src={item.productB.logoSrc}
                    alt=""
                    className="h-10 w-auto max-w-[80px] object-contain object-left"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
              <h3 className="mt-3 text-[#1A2D48] text-xl font-bold group-hover:text-[#10B981]">
                {title}
              </h3>
              <p className="mt-1 text-[#57534E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#57534E]">
        <Link
          href="/pos/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all POS comparisons →
        </Link>
      </p>
    </>
  );
}

// ——— Key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall for small businesses: Square", anchor: "#pick-square-pos" },
  { label: "Best for ecommerce stores: Shopify POS", anchor: "#pick-shopify-pos" },
  { label: "Best for retail stores: Lightspeed", anchor: "#pick-lightspeed-pos" },
  { label: "Best for restaurants: Toast", anchor: "#pick-toast-pos" },
];

export default function PosPage() {
  return (
    <HubPageTemplate
      title="Point of Sale (POS) Software for Small Businesses (2026)"
      intro="Compare POS software that helps retail stores, restaurants, ecommerce businesses, and small businesses process sales, accept payments, and manage inventory and reporting."
      breadcrumbLabel="POS Software"
      keyTakeaways={KEY_TAKEAWAYS}
      softwarePickCategory="pos"
      featuredPicks={POS_FEATURED_PICKS}
      featuredPicksTitle="Top POS picks"
      featuredPicksSub="Hand-picked for small businesses, retail, restaurants, and ecommerce. Updated regularly."
      comparisonTable={{
        title: "Compare POS software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: POS_COMPARISON_ROWS,
        detailsLinkBase: "/pos/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular POS platforms."
      howToChooseSection={<PosHowToChooseSection />}
      guidesSection={<PosGuidesSection />}
      scenarioCustomContent={
        <HubEditorialUseCaseSection
          sectionTitle="Best POS software by use case"
          sectionSub="Scenario-based picks—venue, payments, and ops load—not your org label alone."
          intro={
            <>
              Each blurb explains the selling environment first. For storefront-model entry points, use{" "}
              <a href="#by-trade" className={linkGreen}>
                POS by business type
              </a>
              ; for concepts, see{" "}
              <a href="#payroll-guides" className={linkGreen}>
                POS guides
              </a>
              .
            </>
          }
          blocks={POS_USE_CASE_EDITORIAL}
        />
      }
      bestRoundupBlock={{
        title: "Best POS Software Overall",
        description:
          "See our curated rankings of the best POS tools for small businesses, retail stores, restaurants, ecommerce, and multi-location operations.",
        linkText: "See full rankings →",
        href: "/pos/best-pos-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/pos/best-pos-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/pos/best-pos-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best POS software by use case",
        sectionSub: "Scenario links and deep dives.",
        description: undefined,
        links: POS_SCENARIO_LINKS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "POS by business type",
        sectionSub:
          "Identity-based navigation: retail, restaurant, ecommerce, or multi-location—how you sell in the real world.",
        links: [],
        groups: POS_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={POS_FAQ_ITEMS as FaqItem[]}
      faqTitle="POS software FAQs"
      faqSub="Quick answers to common questions."
      methodology={POS_METHODOLOGY}
      finderSection={{
        title: "Find the right POS fit",
        sub: "Narrow down by business type and primary need.",
        content: <PosFinderForm />,
      }}
      educationSection={<PosEducationSection />}
      popularComparisonsSection={<PosPopularComparisonsSection />}
    />
  );
}
