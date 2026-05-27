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
    q: "What is inventory turnover?",
    a: "Inventory turnover measures how often you sell and replace stock in a period—typically cost of goods sold divided by average inventory value. It answers how efficiently working capital converts into sales, not whether customers are happy.",
  },
  {
    q: "How do you calculate inventory turnover?",
    a: "Annual turnover = COGS ÷ average inventory value (beginning plus ending inventory divided by two). Some teams use units sold ÷ average units on hand when costs are stable. Always use the same formula month to month for trend lines.",
  },
  {
    q: "What is a good inventory turnover ratio?",
    a: "Benchmarks vary by industry—grocery turns faster than furniture. Compare against your sub-sector and your own history rather than a universal target. Our companion guide on good turnover ratios covers industry ranges and when higher is not better.",
  },
  {
    q: "Does low turnover always mean dead stock?",
    a: "Not always. Strategic buffer for long lead times, seasonal build-ahead, or new product launches can depress turnover temporarily. Investigate SKU-level velocity and forecast error before liquidating—ABC classification helps separate policy from waste.",
  },
  {
    q: "Can inventory software track turnover automatically?",
    a: "Yes. Perpetual systems compute turnover from COGS and average on-hand by SKU, category, or location. Export monthly and pair with fill-rate metrics so lean targets do not cause stockouts on A-class lines.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-turnover-explained";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryTurnoverExplainedPage() {
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
                      Inventory Turnover Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Turnover Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How inventory turnover measures stock efficiency—formulas, what the ratio reveals, links to forecasting and
                    ABC analysis, and using software to track velocity without sacrificing service.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory turnover tells you how many times you sell and replace stock over a period—usually a year.
                      Finance teams love it because it ties warehouse decisions to cash: slow turnover means capital sitting on
                      shelves; fast turnover suggests lean stock relative to sales. Operations teams use it as a sanity check
                      after forecast and reorder changes, not as the only scoreboard.
                    </p>
                    <p>
                      The ratio is blunt without context. A seasonal retailer looks slow before peak and fast after clearance;
                      a manufacturer with long raw-material lead times may carry deliberate buffer that depresses turnover.
                      SKU-level and class-level views—via{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method of inventory management
                      </Link>—separate healthy policy from dead weight faster than a single company-wide number.
                    </p>
                    <p>
                      Turnover connects to forecasting and safety stock: better demand signals reduce both stockouts and
                      overbuys, which lifts turnover without starving hero SKUs. See{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting explained
                      </Link>{" "}
                      for planning inputs, and{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>{" "}
                      for industry benchmarks and when higher turnover backfires. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Perpetual inventory tools such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> compute turnover from COGS
                      and average on-hand—validate formulas match your ERP export. Reviews and pricing sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="turnover-formula" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="COGS, average inventory, and units.">The Turnover Formula</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Standard annual turnover = cost of goods sold ÷ average inventory value, where average inventory is
                      typically (beginning + ending) ÷ 2. Days inventory outstanding (DIO) is the inverse—365 ÷ turnover—showing
                      how many days stock sits before sale.
                    </p>
                    <p>
                      Unit-based turnover (units sold ÷ average units on hand) works when costs are stable and you want
                      operational language buyers understand. Document which formula you use; mixing value and unit views in
                      the same dashboard creates false alarms.
                    </p>
                  </div>
                </section>
                <section id="what-turnover-reveals" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Efficiency, not customer happiness alone.">What Turnover Reveals—and Hides</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Rising turnover with stable fill rates usually means better forecasting, tighter reorder quantities, or
                      successful clearance of slow movers. Falling turnover with rising stockouts signals you may be chasing
                      efficiency at the expense of service—check A-class lines first.
                    </p>
                    <p>
                      Pair turnover with the{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>: visibility, right quantities, and cycle counting discipline. A ratio computed on inaccurate
                      perpetual records is fiction—fix counts before optimizing velocity.
                    </p>
                  </div>
                </section>
                <section id="improving-turnover" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Forecasting, assortment, and lead time.">Improving Turnover Without Stockouts</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reduce slow movers through promotions, bundles, or discontinuation; tighten purchase orders on volatile
                      SKUs using forecast error feedback; negotiate shorter supplier lead times where possible. Ecommerce teams
                      should segment by channel—see{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>—because pooled metrics mask listing-specific dead stock.
                    </p>
                    <p>
                      Manufacturers balancing raw and finished goods need BOM-aware reporting—{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      covers WIP and MRP handoffs. Compare planning depth in{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>
                        Cin7 vs Katana
                      </Link>{" "}
                      when turnover spans production and distribution.
                    </p>
                  </div>
                </section>
                <section id="software-reporting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dashboards, exports, and review cadence.">Software Reporting and Review Cadence</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export turnover by category monthly; investigate outliers before changing global policy. Good systems
                      show trend lines alongside average days on hand and gross margin return on inventory investment (GMROI)
                      where finance requires it.
                    </p>
                    <p>
                      When selecting tools, use{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      to score reporting requirements, then validate with a twelve-month data export—not demo dashboards alone.
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for SMB versus multi-channel analytics depth.
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
              <GuideSidebar title="Turnover & efficiency" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Turnover Explained | BeltStack Guide",
    description:
      "Learn inventory turnover—formulas, what the ratio reveals, improving velocity with forecasting and ABC analysis, and tracking turnover in inventory software.",
    keywords: [
      "inventory turnover",
      "inventory turnover ratio",
      "inventory turnover formula",
      "days inventory outstanding",
      "inventory efficiency",
      "COGS inventory turnover",
    ],
  };
}
