import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedInventoryResources } from "@/components/guides/RelatedInventoryResources";
import { INVENTORY_GUIDE_SIDEBAR_ITEMS, INVENTORY_GUIDE_RELATED_ITEMS } from "@/lib/data/inventoryGuides";
import { getInventoryReviewUrl, getInventoryCompareUrl } from "@/lib/routes";

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <header className="mb-5 mt-0">
      <h2 className="text-[#1A2D48] text-2xl font-bold leading-tight sm:text-3xl">{children}</h2>
      <div className="mt-2 h-[2px] w-14 bg-[#10B981]" aria-hidden />
      {sub && <p className="mt-1.5 text-neutral-500 text-sm sm:text-base leading-relaxed">{sub}</p>}
    </header>
  );
}

const linkGreen =
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  {
    q: "What is the difference between inventory software and MRP for manufacturers?",
    a: "Inventory software focuses on stock, purchasing, and sales orders. MRP (material requirements planning) and manufacturing-focused tools like Katana add production planning, bills of materials, and shop-floor workflows. Some tools blur the line, but if production is central to your business, you generally want manufacturing-aware inventory software rather than a generic stock tool.",
  },
  {
    q: "Which inventory tools are best for small manufacturers?",
    a: "Katana is a leading choice for small and midsize manufacturers that want modern, cloud-based production planning tied to inventory. Fishbowl and Unleashed also serve manufacturing-heavy environments, especially where QuickBooks alignment or deeper costing and reporting matter.",
  },
  {
    q: "When should manufacturers move beyond spreadsheets?",
    a: "Once you regularly lose track of material availability, start orders without knowing whether you have enough inputs, or can’t easily see which jobs are delayed due to shortages, you’ve outgrown spreadsheets. At that point, tools like Katana, Fishbowl, or Unleashed provide much better control.",
  },
  {
    q: "Can manufacturing inventory tools integrate with ecommerce and accounting?",
    a: "Yes. Tools like Katana, Cin7, Unleashed, and Fishbowl integrate with common ecommerce platforms and accounting systems. The goal is to keep production, inventory, and financials aligned rather than managing separate silos for each.",
  },
];

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventorySoftwareForManufacturingGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Article content ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
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
                        href="/inventory"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Inventory Management
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/inventory/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Inventory Software for Manufacturing
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Software for Manufacturing
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn how manufacturers use inventory and production software to manage materials, work orders, and
                    finished goods—without jumping straight into a heavyweight ERP.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Manufacturers have tougher inventory problems than pure retailers or distributors. You&apos;re not
                      just tracking finished goods—you also need to understand raw materials, work in progress, and
                      finished items as they move through production. Spreadsheets and generic inventory tools usually
                      fall short once you manage many SKUs, BOMs, and concurrent jobs.
                    </p>
                    <p>
                      Modern manufacturing-focused inventory platforms like{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>
                        Katana
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>
                        Fishbowl
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>
                        Unleashed
                      </Link>{" "}
                      are built to connect materials, work orders, and finished goods so you can see what you can build
                      and when, without implementing a full ERP. This guide explains where they fit, when to consider
                      them, and how to compare options.
                    </p>
                    <p>
                      For a ranked view across all inventory platforms, see our{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory management software
                      </Link>{" "}
                      roundup. For direct comparisons, read matchups like{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>
                        Cin7 vs Katana
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— Key takeaways ——— */}
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How manufacturing inventory tools differ from basic stock apps.">
                    Key takeaways for manufacturers
                  </SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">
                          You need visibility into materials, WIP, and finished goods.
                        </strong>{" "}
                        Tools like Katana, Fishbowl, and Unleashed are built for that, whereas pure inventory apps focus
                        mostly on finished goods.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">BOMs and work orders are non-negotiable.</strong> If your
                        software can&apos;t express how inputs convert into outputs, you&apos;ll always be guessing about
                        what&apos;s possible to build.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">
                          You don&apos;t always need an ERP to get manufacturing control.
                        </strong>{" "}
                        Many small and midsize manufacturers can cover core needs with tools like Katana, Fishbowl, or
                        Unleashed plus modern accounting software.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* ——— Recommended tools for manufacturing ——— */}
                <section
                  id="recommended-manufacturing-tools"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Where manufacturers often start their shortlist.">
                    Recommended inventory tools for manufacturing
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-3 list-none">
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>
                            Katana
                          </Link>{" "}
                          — best for small and midsize manufacturers
                        </strong>
                        <p className="mt-1">
                          Built specifically for manufacturers that need BOMs, production scheduling, and material
                          availability checks in a modern, cloud-based UI. It&apos;s often the sweet spot for shops that
                          have outgrown spreadsheets but don&apos;t want a full ERP.
                        </p>
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>
                            Fishbowl
                          </Link>{" "}
                          — strong for QuickBooks-centric manufacturers and warehouses
                        </strong>
                        <p className="mt-1">
                          A long-standing option with deep warehouse and manufacturing workflows, particularly attractive
                          if your finance team lives in QuickBooks and wants inventory and production closely tied to it.
                        </p>
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>
                            Unleashed
                          </Link>{" "}
                          — strong for inventory-heavy wholesalers and manufacturers
                        </strong>
                        <p className="mt-1">
                          Focused on deeper stock, costing, and reporting, Unleashed suits product-heavy businesses that
                          care deeply about margin and multi-warehouse control and are ready for mid-market inventory
                          tooling.
                        </p>
                      </li>
                    </ul>
                    <p>
                      If you also run complex multi-channel ecommerce alongside manufacturing,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>
                        Cin7
                      </Link>{" "}
                      may also belong on your shortlist; our{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>
                        Cin7 vs Katana
                      </Link>{" "}
                      comparison explains the trade-offs.
                    </p>
                  </div>
                </section>

                {/* ——— Decision guidance ——— */}
                <section
                  id="decision-guidance"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How to match tools to your production reality.">
                    How to choose manufacturing inventory software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The right platform depends on your mix of volume, product complexity, and production processes.
                      Rough guidelines:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Light manufacturing and kitting</strong> — You might start
                          on{" "}
                          <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>
                            inFlow Inventory
                          </Link>{" "}
                          or{" "}
                          <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                            Zoho Inventory
                          </Link>{" "}
                          with basic assemblies before moving to Katana.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Discrete manufacturing with clear BOMs and routing</strong>{" "}
                          — Katana is often the best starting point, especially if you also sell online; it connects
                          production to sales in a modern stack.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Large, QuickBooks-heavy operations</strong> — Fishbowl
                          remains a logical candidate thanks to its deep QuickBooks alignment and warehouse emphasis.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For a more general framework that also covers ecommerce and warehouses, see our{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      guide.
                    </p>
                  </div>
                </section>

                {/* ——— Conclusion ——— */}
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="You can add manufacturing control before adopting a full ERP.">
                    Bringing inventory software onto the shop floor
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For many small and midsize manufacturers, the biggest shift is mental: treating inventory and
                      production as a system that deserves dedicated software, not as a side job bolted onto accounting
                      or spreadsheets. The right platform helps you answer, with confidence, whether you can take on a new
                      order, what&apos;s blocking production, and how much margin each product really delivers.
                    </p>
                    <p>
                      Start by mapping your current BOMs, routing, and material flows, then test a manufacturing-focused
                      inventory tool with a subset of products. Our{" "}
                      <Link href="/inventory" className={linkGreen}>
                        inventory management hub
                      </Link>
                      ,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>
                        comparison hub
                      </Link>
                      , and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory software roundup
                      </Link>{" "}
                      will help you compare options like Katana, Fishbowl, and Unleashed side by side.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Questions from manufacturers evaluating inventory platforms.">
                    FAQs
                  </SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Recommended Inventory Software"
                items={INVENTORY_GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedInventoryResources
          items={RELATED_ITEMS}
          excludeHref="/inventory/guides/inventory-software-for-manufacturing"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Inventory Software for Manufacturing | BeltStack Guide",
    description:
      "Learn how manufacturers use inventory and production software to manage materials, work orders, and finished goods without adopting a full ERP.",
  };
}

