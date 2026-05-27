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
    q: "What is safety stock?",
    a: "Extra inventory held to buffer against demand variability and supplier lead-time uncertainty. It sits above cycle stock—the quantity you expect to sell during normal replenishment—and protects service levels when forecasts or deliveries miss.",
  },
  {
    q: "How is safety stock calculated?",
    a: "Common approaches multiply a service-level factor (z-score) by the standard deviation of demand during lead time. Simpler teams use rules of thumb—days of cover on A SKUs—until data supports statistical formulas. Document assumptions either way.",
  },
  {
    q: "What is the difference between safety stock and reorder point?",
    a: "Reorder point = expected demand during lead time + safety stock. Safety stock is the buffer portion only. Triggering a PO at reorder point should leave enough on hand to cover demand until the shipment arrives.",
  },
  {
    q: "Should every SKU have safety stock?",
    a: "Not equally. A-class and volatile lines deserve higher buffers and service targets; C-class and make-to-order items may run with minimal or zero safety stock if backorders are acceptable. ABC classification prevents one-size-fits-all hoarding.",
  },
  {
    q: "Can inventory software calculate safety stock?",
    a: "Many platforms suggest reorder points and safety levels from sales history and lead times—accuracy depends on clean perpetual records and supplier lead-time data. Review suggestions quarterly; software does not replace policy on service targets.",
  },
];

const PAGE_HREF = "/inventory/guides/safety-stock-explained";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function SafetyStockExplainedPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li>
                      <Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/inventory" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Inventory Management
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href="/inventory/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Safety Stock Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Safety Stock Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How safety stock buffers demand and lead-time risk—calculation approaches, service levels, ABC
                    differentiation, and inventory software that automates reorder points.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Safety stock is the cushion you keep so customers still get product when demand spikes or suppliers
                      ship late. It is not “extra for extra’s sake”—it is the price of a chosen service level. Finance sees
                      cash tied up; operations sees fewer expedited freight calls and fewer angry backorder emails. The art is
                      sizing buffers per SKU class instead of applying one blanket week of cover everywhere.
                    </p>
                    <p>
                      Buffers sit downstream of forecasting. If your demand projection is wrong, safety stock becomes expensive
                      guesswork. Start with{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting explained
                      </Link>{" "}
                      to stabilize baseline demand, then layer safety formulas on A, B, and C lines using{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method of inventory management
                      </Link>{" "}
                      so hero SKUs get protection without bloating the long tail.
                    </p>
                    <p>
                      Reorder point equals forecast demand during lead time plus safety stock—when on-hand hits that threshold,
                      purchasing fires. Review buffers after supplier changes, new promotions, or season shifts; static safety
                      levels are how slow movers become dead stock. Broader principles live in{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Platforms such as{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>Finale Inventory</Link>{" "}
                      suggest reorder points from history—test with your lead-time master before going live. Reviews sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="safety-stock-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buffer stock versus cycle stock.">Safety Stock Basics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cycle stock supports expected sales between replenishments; safety stock covers uncertainty. Together they
                      define how much you carry and when you reorder. Confusing the two leads to double-counting—buyers add
                      buffer on top of already generous order quantities.
                    </p>
                    <p>
                      Document service targets by class: 95% in-stock on A SKUs might mean more safety units than 85% on C
                      items. Write targets down so sales promises and warehouse policy stay aligned.
                    </p>
                  </div>
                </section>
                <section id="calculation-methods" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Formulas, rules of thumb, and data needs.">Calculation Methods</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Statistical safety stock uses demand variability and lead-time deviation—often a z-score for desired
                      service level multiplied by standard deviation of demand during lead time. SMB teams sometimes start with
                      fixed days of cover on A lines until twelve months of clean sales history exist.
                    </p>
                    <p>
                      Include supplier reliability: if lead time swings from two to six weeks, buffer must absorb the worst
                      reasonable case—not average transit alone. Manufacturing operations should factor component lead times
                      from{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        manufacturing inventory software
                      </Link>{" "}
                      BOM data, not finished-goods averages only.
                    </p>
                  </div>
                </section>
                <section id="abc-service-levels" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Different buffers for different impact.">ABC Classes and Service Levels</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A-class SKUs justify higher safety investment because stockouts lose the most revenue and margin. C-class
                      lines accept slimmer buffers—or deliberate stockouts if customers tolerate delay. Revisit classification
                      quarterly; a SKU promoted to hero status needs buffer adjustment the same week marketing launches.
                    </p>
                    <p>
                      Ecommerce sellers with flash promos should model safety separately for campaign SKUs—see{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      for channel-level demand patterns that generic formulas miss.
                    </p>
                  </div>
                </section>
                <section id="software-automation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reorder points, alerts, and review loops.">Software Automation and Review Loops</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory systems recalculate suggested safety and reorder levels as sales velocity shifts—if perpetual
                      counts stay accurate. Schedule quarterly policy reviews with finance: compare fill rates, stockout
                      incidents, and inventory dollars tied up in safety buffer.
                    </p>
                    <p>
                      Evaluate tools using{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and compare replenishment features in{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      for SMB needs versus{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-location depth.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Safety stock & planning" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInventoryResources items={RELATED_ITEMS} excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Safety Stock Explained | BeltStack Guide",
    description:
      "Learn safety stock—buffer inventory for demand and lead-time risk, calculation methods, ABC service levels, and automating reorder points in inventory software.",
    keywords: [
      "safety stock",
      "safety stock calculation",
      "reorder point safety stock",
      "inventory buffer stock",
      "service level inventory",
      "safety stock formula",
    ],
  };
}
