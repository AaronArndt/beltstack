"use client";

import Link from "next/link";
import {
  HubPageTemplate,
  type FaqItem,
} from "@/components/hubs/HubPageTemplate";
import {
  INVENTORY_FEATURED_PICKS,
  INVENTORY_COMPARISON_ROWS,
  INVENTORY_SCENARIO_LINKS,
  INVENTORY_BY_BUSINESS_TYPE,
  INVENTORY_BY_BUSINESS_TYPE_GROUPS,
  INVENTORY_POPULAR_COMPARISONS,
  INVENTORY_FAQ_ITEMS,
  INVENTORY_METHODOLOGY,
} from "@/lib/data/inventoryHubData";

const btnPrimary =
  "rounded-lg bg-[#10B981] px-5 py-2.5 text-base font-bold text-white shadow-sm transition-colors hover:bg-[#0d9668] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2";
const selectClass =
  "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-[#1A2D48] focus:border-slate-300 focus:ring-1 focus:ring-slate-200 focus:outline-none";

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const INVENTORY_HUB_GUIDES = [
  {
    href: "/inventory/guides/what-is-inventory-management-software",
    title: "What is Inventory Management Software?",
    description:
      "What inventory software does, who uses it, and how it replaces spreadsheets with accurate, real-time stock tracking.",
  },
  {
    href: "/inventory/guides/inventory-software-pricing",
    title: "Inventory Software Pricing",
    description:
      "How inventory software pricing works: plans, order and user limits, and what small businesses and warehouses should budget.",
  },
  {
    href: "/inventory/guides/inventory-for-ecommerce-and-retail",
    title: "Inventory for Ecommerce and Retail",
    description:
      "How inventory tools support ecommerce stores, marketplaces, and retail locations as channels and order volume grow.",
  },
] as const;

// ——— Shared hub section title (matches other hubs) ———
function HubSectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub != null && sub.length > 0 && (
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">{sub}</p>
      )}
    </div>
  );
}

// ——— Finder: Find the right inventory fit ———
function InventoryFinderForm() {
  return (
    <form className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4 pb-2">
      <div className="flex-1">
        <label htmlFor="inventory-business-type" className="block text-sm font-semibold text-[#1A2D48]">
          Business type
        </label>
        <select id="inventory-business-type" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="small-business">Small business</option>
          <option value="ecommerce-business">Ecommerce business</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="warehousing">Warehousing</option>
        </select>
      </div>
      <div className="flex-1">
        <label htmlFor="inventory-primary-need" className="block text-sm font-semibold text-[#1A2D48]">
          Primary need
        </label>
        <select id="inventory-primary-need" className={`mt-1 ${selectClass}`}>
          <option value="">Select</option>
          <option value="inventory-tracking">Inventory tracking</option>
          <option value="multi-channel-inventory">Multi-channel inventory</option>
          <option value="manufacturing-inventory">Manufacturing inventory</option>
          <option value="warehouse-management">Warehouse management</option>
          <option value="purchase-order-management">Purchase order management</option>
        </select>
      </div>
      <button type="button" className={btnPrimary}>
        See suggestions
      </button>
    </form>
  );
}

// ——— How to choose inventory management software (pre-featured picks) ———
function InventoryHowToChooseSection() {
  return (
    <>
      <HubSectionTitle sub="Key factors when evaluating inventory tools.">
        How to choose inventory management software
      </HubSectionTitle>
      <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed max-w-3xl">
        Inventory software sits between your shelves and your sales channels. This page is for{" "}
        <Link href="/inventory/best-for/small-business" className={linkGreen}>
          small businesses
        </Link>
        ,{" "}
        <Link href="/inventory/best-for/ecommerce" className={linkGreen}>
          ecommerce brands
        </Link>
        ,{" "}
        <Link href="/inventory/best-for/retail" className={linkGreen}>
          retailers
        </Link>
        ,{" "}
        <Link href="/inventory/best-for/manufacturing" className={linkGreen}>
          manufacturers
        </Link>{" "}
        and{" "}
        <Link href="/inventory/best-for/warehouses" className={linkGreen}>
          warehouse operations
        </Link>
        . Use the{" "}
        <Link href="/inventory/best-inventory-software" className={linkGreen}>
          best inventory management software roundup
        </Link>{" "}
        for a curated shortlist, the{" "}
        <Link href="/inventory/compare" className={linkGreen}>
          comparison hub
        </Link>{" "}
        for head‑to‑head matchups, and the scenario links below to jump into specific use cases.
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:gap-8">
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Inventory tracking capabilities</strong> — Make sure the tool can track
            on‑hand, committed, and available stock, support adjustments and cycle counts, and show who changed what and
            when.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Multi-channel sales integrations</strong> — If you sell through ecommerce,
            marketplaces, or retail, look for native integrations that pull in orders and push back stock to reduce
            overselling and manual updates.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Warehouse management tools</strong> — Even simple warehouses benefit from
            bins, picking, and packing. As you grow, features like multi‑warehouse support, scanners, and more advanced
            routing start to matter.
          </li>
        </ul>
        <ul className="space-y-2.5 text-sm text-[#6E6E6E]">
          <li>
            <strong className="text-[#1A2D48]">Purchase order management</strong> — Reorder points, purchase orders, and
            vendor tracking should work together so you know what’s on order, what’s inbound, and when to restock
            without guessing.
          </li>
          <li>
            <strong className="text-[#1A2D48]">Automation and reporting</strong> — Look for low‑stock alerts, automatic
            purchase suggestions, and reports on stock turns and margins. Integrations with{" "}
            <Link href="/accounting" className={linkGreen}>
              accounting
            </Link>{" "}
            and{" "}
            <Link href="/ecommerce" className={linkGreen}>
              ecommerce
            </Link>{" "}
            reduce manual data entry and help you make decisions from a single source of truth.
          </li>
        </ul>
      </div>
    </>
  );
}

// ——— Education: What to look for in inventory software ———
function InventoryEducationSection() {
  return (
    <>
      <div className="mb-4 sm:mb-5">
        <h2 className="text-[#1A2D48] text-2xl font-bold sm:text-3xl">
          What businesses should look for in inventory management software
        </h2>
        <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
        <p className="mt-1 text-[#6E6E6E] text-sm sm:text-base">
          What matters when businesses choose tools to track stock, prevent stockouts, and manage orders across channels.
        </p>
      </div>
      <div className="mt-4 grid gap-8 lg:grid-cols-3 lg:gap-10">
        <div className="lg:col-span-2 space-y-6 text-sm text-[#6E6E6E] leading-relaxed">
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Inventory tracking accuracy</h3>
            <p className="mt-1.5">
              The core job of inventory software is keeping on-hand counts accurate. Look for clear workflows for
              receiving, adjustments, and cycle counts, plus audit trails so you can see who changed what and when.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Multi-channel sales integration</h3>
            <p className="mt-1.5">
              If you sell through ecommerce, marketplaces, and retail, your inventory system should pull orders from all
              channels and push back stock levels. This reduces overselling and manual updates between stores.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Purchase order management</h3>
            <p className="mt-1.5">
              Reorder points, purchase orders, and vendor management keep shelves stocked. Check how the tool suggests
              reorders, tracks lead times, and shows what is on order versus available to sell.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Warehouse management features</h3>
            <p className="mt-1.5">
              For warehouses, basic bin locations, picking, and packing can save a lot of time. Some tools add wave
              picking, zone picking, or multi-warehouse support; others stay lightweight for a single stockroom.
            </p>
          </div>
          <div>
            <h3 className="text-[#1A2D48] text-lg font-semibold">Automation and integrations</h3>
            <p className="mt-1.5">
              Automations like low-stock alerts, automatic purchase orders, and syncing with{" "}
              <Link href="/accounting" className={linkGreen}>
                accounting software
              </Link>{" "}
              or{" "}
              <Link href="/ecommerce" className={linkGreen}>
                ecommerce platforms
              </Link>{" "}
              reduce manual work and errors. Make sure the integrations you need are available on the plan you choose.
            </p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-[#1A2D48] text-lg font-semibold">Key features checklist</h3>
            <ul className="mt-3 space-y-2 text-sm text-[#6E6E6E]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Accurate stock tracking with clear receive and adjust workflows
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Multi-channel order sync for ecommerce, retail, and wholesale
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Reorder points, purchase orders, and vendor tracking
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Basic warehouse features (bins, picking, packing) or deeper WMS if needed
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] shrink-0" aria-hidden>
                  ✓
                </span>
                Integrations with accounting, ecommerce, and shipping tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// ——— Inventory guides section (after comparison table) ———
function InventoryGuidesSection() {
  return (
    <>
      <HubSectionTitle sub="Guides to choosing and using inventory tools.">
        Inventory Management Guides
      </HubSectionTitle>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {INVENTORY_HUB_GUIDES.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
          >
            <h3 className="text-[#1A2D48] text-lg font-bold group-hover:text-[#10B981]">{guide.title}</h3>
            <p className="mt-1.5 text-[#6E6E6E] text-sm leading-relaxed line-clamp-2">
              {guide.description}
            </p>
            <span className="mt-3 text-sm font-semibold text-[#10B981] group-hover:underline">
              Read guide →
            </span>
          </Link>
        ))}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link
          href="/inventory/guides"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all inventory guides →
        </Link>
      </p>
    </>
  );
}

// ——— Popular inventory comparisons ———
function InventoryPopularComparisonsSection() {
  return (
    <>
      <HubSectionTitle sub="Side-by-side inventory features, pricing, and recommendations.">
        Popular Inventory Comparisons
      </HubSectionTitle>
      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INVENTORY_POPULAR_COMPARISONS.map((item) => {
          const title = `${item.productA.name} vs ${item.productB.name}`;
          const summary =
            item.summaryParagraph.length > 140
              ? item.summaryParagraph.slice(0, 140).trim() + "…"
              : item.summaryParagraph;
          return (
            <Link
              key={item.slug}
              href={item.href}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2"
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
                <span className="text-[#6E6E6E] text-lg font-medium" aria-hidden>
                  vs
                </span>
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
              <p className="mt-1 text-[#6E6E6E] text-sm leading-relaxed line-clamp-3">
                {summary}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-[#10B981] group-hover:underline">
                Compare →
              </span>
            </Link>
          );
        })}
      </div>
      <p className="mt-3 text-sm text-[#6E6E6E]">
        <Link
          href="/inventory/compare"
          className="font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded"
        >
          View all inventory comparisons →
        </Link>
      </p>
    </>
  );
}

// ——— Key takeaways ———
const KEY_TAKEAWAYS = [
  { label: "Best overall for most SMBs: Zoho Inventory", anchor: "#pick-zoho-inventory" },
  { label: "Best for multi-channel inventory: Cin7", anchor: "#pick-cin7" },
  { label: "Best for small business tracking: inFlow Inventory", anchor: "#pick-inflow-inventory" },
  { label: "Best for manufacturing inventory: Katana", anchor: "#pick-katana" },
];

export default function InventoryPage() {
  return (
    <HubPageTemplate
      title="Inventory Management Software for Small Businesses (2026)"
      intro="Compare inventory management tools that help small businesses, ecommerce brands, retailers, manufacturers, and warehouses track stock and orders accurately."
      breadcrumbLabel="Inventory Management"
      keyTakeaways={KEY_TAKEAWAYS}
      featuredPicks={INVENTORY_FEATURED_PICKS}
      featuredPicksTitle="Top inventory management picks"
      featuredPicksSub="Hand-picked for small businesses, ecommerce, retail, and manufacturing. Updated regularly."
      comparisonTable={{
        title: "Compare inventory management software",
        subtitle: "Side-by-side pricing, fit, and standout features.",
        rows: INVENTORY_COMPARISON_ROWS,
        detailsLinkBase: "/inventory/review/",
      }}
      comparisonTableIntro="Use the table below to compare pricing, ratings, and standout features across popular inventory management platforms."
      howToChooseSection={<InventoryHowToChooseSection />}
      guidesSection={<InventoryGuidesSection />}
      bestRoundupBlock={{
        title: "Best Inventory Management Software Overall",
        description:
          "See our curated rankings of the best inventory management tools for small businesses, ecommerce companies, retailers, manufacturers, and warehouses.",
        linkText: "See full rankings →",
        href: "/inventory/best-inventory-software",
      }}
      featuredPicksRankingsLink={{
        label: "See full rankings →",
        href: "/inventory/best-inventory-software",
      }}
      comparisonTableRankingsLink={{
        label: "See our full rankings →",
        href: "/inventory/best-inventory-software",
      }}
      scenarioLinks={{
        sectionTitle: "Best inventory software by use case",
        sectionSub: "Find inventory software that fits your situation.",
        description: "Choose a use case to see our top picks.",
        links: INVENTORY_SCENARIO_LINKS,
        highlightFirstLink: true,
      }}
      tradeLinks={{
        sectionTitle: "Inventory by business type",
        sectionSub: "Best inventory management software by business type.",
        links: INVENTORY_BY_BUSINESS_TYPE,
        groups: INVENTORY_BY_BUSINESS_TYPE_GROUPS,
      }}
      faqItems={INVENTORY_FAQ_ITEMS as FaqItem[]}
      faqTitle="Inventory management software FAQs"
      faqSub="Quick answers to common questions."
      methodology={INVENTORY_METHODOLOGY}
      finderSection={{
        title: "Find the right inventory fit",
        sub: "Narrow down by business type and primary need.",
        content: <InventoryFinderForm />,
      }}
      educationSection={<InventoryEducationSection />}
      popularComparisonsSection={<InventoryPopularComparisonsSection />}
    />
  );
}

