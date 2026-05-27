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
    q: "What causes overstocking and stockouts at the same time?",
    a: "Different SKUs fail in opposite directions—hero lines stock out while slow movers pile up. One blanket reorder rule, poor forecast accuracy on A items, and no ABC segmentation often produce both problems simultaneously.",
  },
  {
    q: "How do reorder points prevent stockouts?",
    a: "A reorder point triggers a purchase when on-hand plus inbound supply hits a threshold sized for lead time and demand variability. Without accurate lead times and safety stock, the trigger fires too late or orders too little.",
  },
  {
    q: "Does higher inventory turnover always prevent stockouts?",
    a: "No. Chasing turnover alone can leave too little buffer on volatile SKUs. Balance turnover benchmarks with service-level targets and forecast error—lean is good until a supplier delay causes a lost sale.",
  },
  {
    q: "Can AI reduce overstocking?",
    a: "Demand models and anomaly alerts can flag overbuys and unusual consumption when historical data is clean. AI does not replace policy—teams still set service targets and review exceptions before auto-POs run unchecked.",
  },
  {
    q: "How often should I cycle count to catch drift early?",
    a: "Count A-class SKUs weekly or monthly, B quarterly, C less often—but increase frequency when variance spikes. Accurate counts feed reorder math; phantom quantities cause false confidence and late stockout discovery.",
  },
];

const PAGE_HREF = "/inventory/guides/how-businesses-prevent-overstocking-and-stockouts";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowBusinessesPreventOverstockingAndStockoutsPage() {
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
                      How Businesses Prevent Overstocking and Stockouts
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Prevent Overstocking and Stockouts
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Balancing lean stock with reliable fill rates—forecasting, reorder points, turnover discipline, and software
                    that catches drift before cash or customers pay the price.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Overstocking ties cash in slow movers and warehouse space; stockouts lose sales and erode trust. Most
                      businesses face both at once because policies treat every SKU the same—same safety stock formula, same
                      buyer cadence, same service target—while demand and lead times vary wildly by line.
                    </p>
                    <p>
                      Prevention starts with visibility: perpetual quantities you trust, lead times recorded per supplier, and
                      forecasts that differ by SKU class. Without accurate on-hand numbers, reorder math optimizes fiction—
                      phantom stock causes late buys; unchecked shrink looks like demand and triggers overbuys.
                    </p>
                    <p>
                      Connect the levers in our{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting explained
                      </Link>{" "}
                      guide, turnover benchmarks in{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>, and count discipline in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Platform context:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Tools such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> expose reorder
                      alerts, ATP, and reporting depth at different tiers—validate with your SKU export and lead-time history
                      before buying. Reviews live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="forecast-and-safety-stock" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buy the right quantity, not the comfortable one.">Forecasting and Safety Stock</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      SKU-level forecasts beat blanket growth assumptions. Layer seasonality, promotions, and supplier lead
                      time variability into safety stock—A items warrant higher service targets and wider buffers when vendors
                      are unreliable; C items can run leaner if substitutes exist.
                    </p>
                    <p>
                      Track forecast error monthly. When actuals consistently beat projections, stockouts follow; when forecasts
                      overshoot, overstock accumulates. Pair projections with{" "}
                      <Link href="/inventory/guides/how-ai-is-used-in-inventory-management" className={linkGreen}>
                        how AI is used in inventory management
                      </Link>{" "}
                      only after baseline accuracy is measured—models amplify clean data, not spreadsheet chaos.
                    </p>
                  </div>
                </section>
                <section id="reorder-points" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Timing purchases before the shelf goes empty.">Reorder Points and Min/Max Rules</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reorder point equals demand during lead time plus safety stock. Min/max bands cap order size so buyers
                      do not overcorrect after a scare. Document whether min/max applies to each location or rolls up
                      enterprise-wide—split rules prevent one warehouse from starving another.
                    </p>
                    <p>
                      Automate PO suggestions in software but keep human review on A SKUs and new launches. Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-channel reorder depth versus{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      for simpler SMB workflows.
                    </p>
                  </div>
                </section>
                <section id="turnover-and-abc" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lean where you can, protect where you must.">Turnover, ABC, and Assortment Control</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Turnover ratio shows how fast inventory converts to sales—use industry benchmarks as a sanity check, not
                      a blunt mandate to cut all lines. ABC classification separates heroes from tail: protect A fill rates,
                      scrutinize C overbuys, and sunset SKUs that never move.
                    </p>
                    <p>
                      Assortment reviews quarterly catch zombie SKUs consuming bins and buyer attention. Markdown plans for
                      excess are part of prevention—waiting until write-offs land in finance is already overstock damage.
                    </p>
                  </div>
                </section>
                <section id="accuracy-and-alerts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Catch drift before customers notice.">Accuracy, Alerts, and Exception Workflows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cycle counts by ABC class keep quantities trustworthy; receiving and pick discipline stops errors at the
                      source. Low-stock alerts, inbound PO visibility, and supplier delay flags give buyers lead time to
                      substitute or expedite before a stockout hits the storefront.
                    </p>
                    <p>
                      For lighter tracking paths before full automation, see{" "}
                      <Link href="/inventory/guides/the-easiest-ways-to-track-inventory" className={linkGreen}>
                        the easiest ways to track inventory
                      </Link>. Perpetual systems update on every scan—covered in{" "}
                      <Link href="/inventory/guides/perpetual-vs-periodic-inventory-systems" className={linkGreen}>
                        perpetual vs periodic inventory systems
                      </Link>—so alerts reflect reality instead of month-end surprises.
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
              <GuideSidebar title="Stock balance" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How Businesses Prevent Overstocking and Stockouts | BeltStack Guide",
    description:
      "Learn how forecasting, reorder points, safety stock, ABC discipline, and inventory software help businesses balance lean stock with reliable fill rates.",
    keywords: [
      "prevent overstocking",
      "prevent stockouts",
      "inventory safety stock",
      "reorder points",
      "inventory forecasting",
      "inventory turnover stockouts",
    ],
  };
}
