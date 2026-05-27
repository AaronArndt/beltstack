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
    q: "What is inventory forecasting?",
    a: "Estimating future demand so you can set purchase quantities, safety stock, and production schedules. Forecasts combine historical sales, seasonality, promotions, and lead times—simple moving averages at SMB scale, statistical or ML models at larger volume.",
  },
  {
    q: "How is forecasting different from reorder points?",
    a: "Reorder points trigger buys when stock hits a threshold; forecasts project how much you will sell over the next weeks or months. Good ops use both—forecast shapes the order size, reorder point decides timing.",
  },
  {
    q: "Can AI improve inventory forecasting?",
    a: "Yes, when data is clean and volume justifies it. Models ingest sales history, external signals, and promotions to refine projections—but garbage-in still produces expensive overbuys. Start with baseline accuracy before chasing algorithms.",
  },
  {
    q: "What is a good inventory turnover ratio for forecasting?",
    a: "Turnover benchmarks vary by industry; higher turnover usually means leaner stock relative to sales. Use turnover with forecast error metrics—chasing turnover alone can cause stockouts on volatile SKUs.",
  },
  {
    q: "Do ecommerce brands need different forecasting?",
    a: "Multi-channel sellers must forecast by channel and account for marketplace fees, returns, and flash promotions. Inventory software with channel-level history and ATP rules reduces oversell risk while forecasts drive buy quantities.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-forecasting-explained";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryForecastingExplainedPage() {
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
                      Inventory Forecasting Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Forecasting Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How demand forecasting drives purchase plans, safety stock, and turnover—with links to AI in inventory,
                    benchmark ratios, and ecommerce-specific forecasting needs.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory forecasting predicts how much you will sell or consume so purchasing and production can arrive
                      early enough—without hoarding cash in slow movers. At its core it is disciplined guesswork: historical
                      velocity, seasonality, known promotions, supplier lead times, and service-level targets combine into order
                      quantities and safety stock buffers.
                    </p>
                    <p>
                      Small teams often forecast informally (“last year plus ten percent”); growing brands need SKU-level
                      models, forecast error tracking, and collaboration between sales, ops, and finance. Bad forecasts feel
                      like inventory problems—stockouts during peaks, markdowns after overbuys—but root cause is usually missing
                      data or one-size-fits-all rules across A and C items.
                    </p>
                    <p>
                      Extend the topic with{" "}
                      <Link href="/inventory/guides/how-ai-is-used-in-inventory-management" className={linkGreen}>
                        how AI is used in inventory management
                      </Link>, benchmark context in{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what's a good inventory turnover ratio
                      </Link>, and channel nuance in{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Tools such as{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> vary in
                      demand planning depth—validate reporting with twelve months of your sales export. Reviews sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="forecast-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From history to purchase orders.">Forecast Basics and Methods</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with clean sales history by SKU—returns netted, promotions flagged, stockouts noted so zero weeks
                      do not distort averages. Simple methods include moving averages and exponential smoothing; seasonal
                      businesses add indexed seasonality or same-week-last-year baselines.
                    </p>
                    <p>
                      Document assumptions: marketing calendar, new listings, discontinued lines. Forecasts are inputs to MRP
                      and purchase orders, not immutable truth—review variance monthly and adjust models when error persists.
                    </p>
                  </div>
                </section>
                <section id="safety-stock" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buffering lead time and variability.">Safety Stock and Service Levels</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Safety stock covers demand and supply uncertainty during lead time. Higher service targets (e.g., 95%
                      in-stock on A SKUs) require more buffer; C items accept lower targets to preserve cash. Reorder point
                      equals forecast demand during lead time plus safety stock—tune per class, not globally.
                    </p>
                    <p>
                      Pair buffers with turnover review in{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        inventory turnover benchmarks
                      </Link>{" "}
                      so lean goals do not collide with customer promises on hero SKUs.
                    </p>
                  </div>
                </section>
                <section id="ai-forecasting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When models beat gut feel.">AI and Advanced Forecasting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Machine learning can ingest more signals—price changes, weather, marketplace rank—when transaction volume
                      supports it. Prerequisites remain mundane: accurate on-hand, consistent SKU masters, and labeled events.
                      Without those, AI amplifies noise.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/inventory/guides/how-ai-is-used-in-inventory-management" className={linkGreen}>
                        AI in inventory management
                      </Link>{" "}
                      guide covers use cases, data requirements, and realistic ROI timelines. Pilot on a category before
                      enterprise-wide automation.
                    </p>
                  </div>
                </section>
                <section id="ecommerce-forecast" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Channels, promos, and ATP.">Ecommerce and Multi-Channel Forecasting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      DTC and marketplace sellers face promo spikes, higher return rates, and split inventory pools. Forecast
                      by channel where behavior diverges; sync available-to-promise so ads do not drive oversells on pooled
                      stock.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      for channel sync patterns. Compare planning depth in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      when multi-channel history feeds your forecasts.
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
              <GuideSidebar title="Forecasting & demand" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Forecasting Explained | BeltStack Guide",
    description:
      "Learn inventory forecasting—demand methods, safety stock, AI-assisted planning, turnover benchmarks, and ecommerce-specific forecasting with inventory software.",
    keywords: [
      "inventory forecasting",
      "demand forecasting inventory",
      "safety stock calculation",
      "inventory planning",
      "AI inventory forecasting",
      "forecast accuracy inventory",
    ],
  };
}
