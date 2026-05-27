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
    q: "What is inventory optimization?",
    a: "The practice of holding the right stock in the right place at the right time—balancing service levels, carrying cost, and obsolescence risk. It combines forecasting, classification, replenishment rules, and continuous measurement rather than one-time spreadsheet tweaks.",
  },
  {
    q: "Is inventory optimization the same as inventory management?",
    a: "Management is the day-to-day discipline—receiving, counting, fulfilling. Optimization is the analytical layer that tunes how much to buy, where to store it, and which SKUs deserve investment. You need solid management before optimization models mean anything.",
  },
  {
    q: "What tools support inventory optimization?",
    a: "Spreadsheets work at small scale; dedicated inventory platforms add perpetual tracking, ABC tags, reorder suggestions, and multi-location allocation. Advanced teams add forecasting modules or ERP planning—but clean master data comes first.",
  },
  {
    q: "How does ABC analysis fit optimization?",
    a: "ABC ranks SKUs by revenue, margin, or picks so policies differ by impact. Optimization without classification treats slow movers like heroes—wasting cash—or starves A lines. Class-based service targets and safety stock are core levers.",
  },
  {
    q: "When should a business invest in optimization?",
    a: "When stockouts and overstock both hurt margins, SKU count outgrows buyer intuition, or finance questions working capital monthly. If counts are unreliable, fix accuracy before tuning formulas—optimization on bad data amplifies errors.",
  },
];

const PAGE_HREF = "/inventory/guides/what-is-inventory-optimization";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function WhatIsInventoryOptimizationPage() {
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
                      What Is Inventory Optimization?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is Inventory Optimization?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Inventory optimization balances service, cost, and cash—forecasting, ABC classification, replenishment
                    tuning, and software that turns policy into repeatable decisions.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory optimization is the ongoing work of holding enough stock to hit service targets without
                      trapping cash in slow movers or obsolete lines. It is not a one-time consulting project—it is how mature
                      teams connect forecasting, classification, purchase rules, and KPI review so buyers are not guessing from
                      gut feel every Monday.
                    </p>
                    <p>
                      Prerequisites matter. Perpetual accuracy, documented lead times, and SKU masters that match what you sell
                      are non-negotiable—the{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>{" "}
                      describe that foundation. Optimization layers on top: class-based service levels via{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method of inventory management
                      </Link>, demand signals from{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting
                      </Link>, and safety buffers sized to real variability.
                    </p>
                    <p>
                      Ecommerce and manufacturing contexts diverge—channel promos and pooled ATP for brands, BOM and WIP
                      constraints for factories. See{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      for vertical patterns. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Tools such as{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>Katana</Link> offer different
                      optimization depth—validate replenishment and reporting with your export before buying. Roundups live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="optimization-goals" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Service, cost, and obsolescence.">Optimization Goals and Tradeoffs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every optimization program negotiates three tensions: fill rate (can you ship?), carrying cost (how much
                      cash is idle?), and obsolescence risk (will this SKU die on the shelf?). Finance and operations must agree
                      on weights—chasing turnover alone causes stockouts on lines that drive margin.
                    </p>
                    <p>
                      Document target metrics: in-stock percent on A SKUs, inventory days by category, forecast error. Review
                      monthly; optimization without measurement is opinion.
                    </p>
                  </div>
                </section>
                <section id="core-levers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Forecast, classify, replenish, measure.">Core Levers: Forecast, Class, Replenish</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Forecasting sets expected demand; ABC classification allocates attention and service targets; replenishment
                      rules (reorder points, order multiples, supplier calendars) execute the policy. Safety stock bridges
                      uncertainty—see{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock explained
                      </Link>{" "}
                      for buffer mechanics.
                    </p>
                    <p>
                      Assortment decisions belong in the loop: discontinue chronic slow movers, consolidate variants, and align
                      marketing promos with purchase timing so optimization is not fighting campaigns.
                    </p>
                  </div>
                </section>
                <section id="vertical-nuance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Retail, ecommerce, and production.">Vertical Nuance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Retailers optimize by store and DC with transfer rules; ecommerce brands optimize pooled and channel-specific
                      pools with ATP; manufacturers optimize raw, WIP, and finished goods under BOM constraints and production
                      schedules.
                    </p>
                    <p>
                      Multi-location allocation adds another dimension—when stock sits in the wrong warehouse, optimization
                      looks like a forecasting failure. Central visibility and transfer workflows separate mature stacks from
                      spreadsheet patchwork.
                    </p>
                  </div>
                </section>
                <section id="software-selection" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From spreadsheets to governed models.">Software and Implementation Path</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with perpetual tracking and ABC tags in a dedicated platform; add forecasting modules when history
                      supports it. Use{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      to score replenishment, reporting, and integration needs before RFP theater.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      for manufacturing depth versus{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-channel optimization—pilot one category before enterprise-wide rule changes.
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
              <GuideSidebar title="Optimization & planning" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "What Is Inventory Optimization? | BeltStack Guide",
    description:
      "Learn inventory optimization—balancing service levels and carrying cost with forecasting, ABC analysis, replenishment rules, and inventory software.",
    keywords: [
      "inventory optimization",
      "optimize inventory levels",
      "inventory planning optimization",
      "inventory service levels",
      "inventory carrying cost",
      "inventory replenishment optimization",
    ],
  };
}
