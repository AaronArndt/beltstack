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
    q: "How is AI used in inventory management today?",
    a: "Mostly for demand forecasting, suggested reorder quantities, and anomaly alerts on shrink or sudden demand spikes—not autonomous robots running warehouses. Models ingest sales history, seasonality, and lead times; planners still approve POs and override promotions the model cannot see.",
  },
  {
    q: "Does AI demand forecasting replace safety stock rules?",
    a: "It refines them. Statistical forecasts estimate expected demand; safety stock still buffers supplier variability and data gaps. Teams combine AI forecasts with min/max or reorder-point policies, then tune service levels by ABC class rather than trusting a single black-box number.",
  },
  {
    q: "What data do AI inventory tools need to work?",
    a: "Clean item masters, at least 12–24 months of order lines, accurate receipts, and consistent UOMs. Garbage in produces confident wrong suggestions—fix duplicate SKUs and phantom adjustments before tuning models.",
  },
  {
    q: "Can small businesses use AI for inventory?",
    a: "Yes, indirectly. Cloud inventory platforms embed basic forecasting and low-stock alerts without a data science team. Dedicated planning suites make sense when SKU count, channels, and supplier complexity justify subscription cost and implementation time.",
  },
  {
    q: "What should I be skeptical about with AI inventory claims?",
    a: "Promises of fully hands-off replenishment, instant ROI without process change, or models that ignore promotions and supply disruptions. Pilot on a subset of SKUs, measure forecast error versus your current spreadsheet method, and keep human review on purchase approvals.",
  },
];

const PAGE_HREF = "/inventory/guides/how-ai-is-used-in-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowAiIsUsedInInventoryManagementPage() {
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
                      How AI Is Used in Inventory Management
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How AI Is Used in Inventory Management
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Practical AI in inventory—demand forecasting, reorder suggestions, and anomaly detection—what works
                    today, what data you need, and what hype to ignore.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      AI in inventory management usually means statistical and machine-learning models applied to problems
                      planners already solve manually: how much to buy, when to buy, and whether current on-hand matches
                      reality. Demand forecasting predicts future unit sales from historical patterns; reorder suggestions
                      translate forecasts plus lead times into PO quantities; anomaly detection flags sudden shrink, duplicate
                      adjustments, or demand spikes that deserve investigation before they become stockouts.
                    </p>
                    <p>
                      None of this replaces physical counts, supplier relationships, or merchandising judgment. Models do not
                      know about a competitor&apos;s launch, a dock strike, or a buyer&apos;s planned promotion unless you feed
                      those signals in. The practical win is speed and consistency—reviewing ranked exceptions instead of
                      re-deriving every reorder point in Excel each week.
                    </p>
                    <p>
                      Capabilities vary by platform tier.{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>{" "}
                      embed planning features for multi-channel ops; SMB tools like{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>{" "}
                      offer simpler low-stock and trend views. Foundations sit in{" "}
                      <Link href="/inventory/guides/the-best-ways-to-manage-inventory" className={linkGreen}>
                        the best ways to manage inventory
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>.
                    </p>
                    <p>
                      Start with data hygiene and a baseline forecast error metric before buying &quot;AI&quot; modules.
                      Compare platforms in the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>, and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      reviews—label features as assisted planning, not magic autopilot.
                    </p>
                  </div>
                </section>
                <section id="demand-forecasting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Predicting what you will sell.">Demand Forecasting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Forecast engines consume order history, returns, and seasonality to project demand by SKU or location.
                      Time-series models (moving averages, exponential smoothing, ARIMA-family methods) remain common; larger
                      suites add external regressors like price changes or marketing spend when data exists.
                    </p>
                    <p>
                      Measure accuracy with MAPE or weighted error on holdout periods—compare AI output to your buyer&apos;s
                      spreadsheet. Forecasts should feed{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        turnover targets
                      </Link>{" "}
                      and ABC service levels, not replace them. Long-tail SKUs with sparse history still need manual rules or
                      pooled category forecasts.
                    </p>
                  </div>
                </section>
                <section id="reorder-suggestions" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From forecast to purchase order.">Reorder Suggestions and Replenishment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Replenishment logic combines forecasted demand, on-hand, on-order, and supplier lead time into suggested
                      PO lines. Economic order quantity and min/max policies still matter—AI adjusts the demand input, not
                      procurement approval workflows. Planners should see why a line was suggested: projected stockout date,
                      safety stock buffer, and MOQ constraints.
                    </p>
                    <p>
                      Multi-location networks add transfer suggestions between warehouses when regional demand diverges from
                      central stock. Tie suggestions to{" "}
                      <Link href="/inventory/guides/the-5-steps-of-inventory-management" className={linkGreen}>
                        the five steps of inventory management
                      </Link>{" "}
                      so receiving and put-away keep system quantities trustworthy—bad receipts make smart suggestions dumb
                      fast.
                    </p>
                  </div>
                </section>
                <section id="anomaly-detection" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Catching what humans miss.">Anomaly Detection and Inventory Accuracy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Anomaly models flag unusual adjustment volume, pick rates that do not match sales, or sudden demand
                      spikes relative to baseline. These alerts prioritize cycle counts and shrink investigations—especially on
                      A-class SKUs where small percentage errors are large dollar problems.
                    </p>
                    <p>
                      Pair alerts with{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      discipline. AI does not eliminate counting; it tells you where to count this week instead of spreading
                      effort uniformly across thousands of slow movers.
                    </p>
                  </div>
                </section>
                <section id="implementation-reality" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Pilot, measure, keep humans in the loop.">Implementation Without Hype</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Run a 90-day pilot on one category or warehouse: export forecast vs actual, track stockouts and
                      overstock dollars versus the prior quarter. Require buyer sign-off on POs until error rates beat your
                      manual baseline. Document overrides so the model can learn promotion calendars over time.
                    </p>
                    <p>
                      Compare vendors with real SKU exports—not demo curves.{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>Cin7 vs Katana</Link>{" "}
                      contrasts planning depth for brands versus manufacturers;{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      shows where SMB forecasting ends and multi-channel planning begins. Process and data quality deliver ROI;
                      the algorithm label on the brochure does not.
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
              <GuideSidebar title="AI & planning" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How AI Is Used in Inventory Management | BeltStack Guide",
    description:
      "Practical AI in inventory: demand forecasting, reorder suggestions, and anomaly detection—what works, required data, and how to evaluate without hype.",
    keywords: [
      "AI inventory management",
      "AI demand forecasting inventory",
      "inventory reorder suggestions AI",
      "inventory anomaly detection",
      "machine learning inventory planning",
      "AI inventory software",
    ],
  };
}
