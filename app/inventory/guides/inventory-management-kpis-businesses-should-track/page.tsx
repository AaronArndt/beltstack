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
    q: "What are the most important inventory KPIs?",
    a: "Core set: inventory turnover, days on hand, fill rate or in-stock percent, inventory accuracy, and forecast error. Add GMROI or carrying cost when finance requires capital efficiency views—start with five metrics you review monthly, not twenty on a wall nobody reads.",
  },
  {
    q: "What is inventory accuracy KPI?",
    a: "How closely system on-hand matches physical counts—often expressed as (1 − |variance| ÷ counted value) × 100 or count match rate by ABC class. Low accuracy poisons every other KPI; fix counts before tuning turnover targets.",
  },
  {
    q: "How often should businesses review inventory KPIs?",
    a: "Operations should scan fill rate and stockouts weekly; finance reviews turnover and inventory dollars monthly; ABC reclassification and forecast error quarterly. Cadence beats dashboard sprawl—same meeting, same five numbers.",
  },
  {
    q: "What is fill rate versus turnover?",
    a: "Fill rate measures how often you ship complete orders on time; turnover measures how fast inventory cycles. High turnover with falling fill rate means you are too lean—balance both, especially on A-class SKUs.",
  },
  {
    q: "Can inventory software track KPIs automatically?",
    a: "Yes. Perpetual systems compute turnover, days on hand, and often fill metrics from orders and counts. Export by category and location; investigate outliers instead of reacting to one blended company average.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-management-kpis-businesses-should-track";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryManagementKpisBusinessesShouldTrackPage() {
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
                      Inventory Management KPIs Businesses Should Track
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Management KPIs Businesses Should Track
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Essential inventory KPIs—turnover, fill rate, accuracy, forecast error, and carrying cost—with links to ABC
                    analysis, forecasting, and software dashboards that make metrics actionable.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory KPIs translate warehouse activity into numbers leadership can act on—without them, “we feel
                      short on stock” replaces measurable fill rate and forecast error. The trap is tracking too many metrics
                      nobody owns. Start with a short list tied to decisions: when to buy, when to count, when to kill a SKU,
                      when to challenge a supplier lead time.
                    </p>
                    <p>
                      Accuracy is the gatekeeper. Turnover, days on hand, and GMROI computed on bad perpetual records mislead
                      finance and ops alike—cycle counting and ABC discipline from{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method of inventory management
                      </Link>{" "}
                      and the{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>{" "}
                      come first. Then layer velocity metrics from{" "}
                      <Link href="/inventory/guides/inventory-turnover-explained" className={linkGreen}>
                        inventory turnover explained
                      </Link>{" "}
                      and planning quality from{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting
                      </Link>.
                    </p>
                    <p>
                      Ecommerce teams add channel fill and oversell incidents; manufacturers track WIP age and component
                      shortages—see{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Reporting in{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> varies—
                      export your KPI definitions into a trial before purchase. Roundups live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="core-kpis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The five metrics most teams need.">Core KPIs: Turnover, Fill Rate, Accuracy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Inventory turnover</strong> and days on hand show capital efficiency—
                      benchmark context in{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>.{" "}
                      <strong className="text-[#1A2D48]">Fill rate</strong> (or in-stock percent on A SKUs) shows customer
                      impact. <strong className="text-[#1A2D48]">Inventory accuracy</strong> from cycle counts validates both.
                    </p>
                    <p>
                      Review together monthly: rising turnover with falling fill rate means cut too deep; strong fill with
                      falling turnover may mean overbuying—segment by ABC before changing global policy.
                    </p>
                  </div>
                </section>
                <section id="planning-kpis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Forecast quality and stockouts.">Planning KPIs: Forecast Error and Stockouts</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mean absolute percent error (MAPE) or bias metrics show whether forecasts chronically over- or under-shoot.
                      Track stockout count and lost revenue on A lines separately from C-class acceptable backorders.
                    </p>
                    <p>
                      Safety stock sizing should respond to forecast error trends—see{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock explained
                      </Link>{" "}
                      when buffers are static but error is rising.
                    </p>
                  </div>
                </section>
                <section id="financial-kpis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="GMROI, carrying cost, and dead stock.">Financial KPIs: GMROI and Carrying Cost</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Gross margin return on inventory investment (GMROI) links margin dollars to average inventory value—useful
                      when finance asks whether assortment earns its shelf space. Carrying cost percent (storage, insurance,
                      capital, shrink) frames total cost of holding—not just unit cost.
                    </p>
                    <p>
                      Dead stock and obsolete inventory ratios spotlight SKUs failing{" "}
                      <Link href="/inventory/guides/what-is-inventory-optimization" className={linkGreen}>
                        inventory optimization
                      </Link>{" "}
                      goals; pair with promotional or liquidation playbooks rather than ignoring the tail.
                    </p>
                  </div>
                </section>
                <section id="dashboards-cadence" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reports, meetings, and software.">Dashboards, Cadence, and Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      One dashboard, one monthly ops-finance meeting, five KPIs with owners beats twelve charts updated never.
                      Location and category drill-downs matter for multi-site teams—see{" "}
                      <Link href="/inventory/guides/how-multi-location-inventory-management-works" className={linkGreen}>
                        multi-location inventory management
                      </Link>.
                    </p>
                    <p>
                      Select tools with{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      reporting criteria; compare analytics in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>
                        Cin7 vs Katana
                      </Link>{" "}
                      with your KPI checklist, not vendor demo defaults.
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
              <GuideSidebar title="KPIs & reporting" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Management KPIs to Track | BeltStack Guide",
    description:
      "Learn inventory management KPIs—turnover, fill rate, accuracy, forecast error, GMROI, review cadence, and tracking metrics in inventory software.",
    keywords: [
      "inventory management KPIs",
      "inventory KPI metrics",
      "inventory fill rate",
      "inventory accuracy KPI",
      "inventory turnover KPI",
      "inventory dashboard metrics",
    ],
  };
}
