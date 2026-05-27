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
    q: "What is inventory turnover ratio?",
    a: "Inventory turnover measures how many times you sell and replace stock in a period—usually cost of goods sold divided by average inventory value for the year. Higher turnover generally means less cash tied up in stock, though too-high turnover can signal chronic understocking.",
  },
  {
    q: "What is a good inventory turnover ratio for retail?",
    a: "Grocery and fast fashion often turn 8–12+ times annually; general retail might target 4–6; luxury or heavy equipment can be 1–2. Compare against your sub-industry and own historical trend—not a universal magic number.",
  },
  {
    q: "Is higher inventory turnover always better?",
    a: "Not always. Extremely high turnover with rising stockouts means you are sacrificing sales for lean inventory. Balance turnover with fill rate and customer service targets, especially on A-class SKUs.",
  },
  {
    q: "How do I improve inventory turnover?",
    a: "Reduce slow movers through promotions or discontinuation, tighten reorder quantities, improve demand forecasting, and shorten supplier lead times. Accurate perpetual records are prerequisite—you cannot optimize what you miscount.",
  },
  {
    q: "Can inventory software track turnover automatically?",
    a: "Yes. Perpetual systems compute turnover from COGS and average on-hand value, often by SKU class or category. Export reports monthly and investigate outliers rather than chasing a single company-wide ratio alone.",
  },
];

const PAGE_HREF = "/inventory/guides/whats-a-good-inventory-turnover-ratio";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function WhatsAGoodInventoryTurnoverRatioPage() {
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
                      What&apos;s a Good Inventory Turnover Ratio?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What&apos;s a Good Inventory Turnover Ratio?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How to calculate inventory turnover, what benchmarks look like by industry, when higher is not better, and
                    how software and counting practices keep the metric trustworthy.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory turnover ratio answers a simple question: how efficiently is stock moving through your business?
                      Calculate it as cost of goods sold divided by average inventory value over the same period—or use sales
                      dollars if COGS is unavailable, but stay consistent year over year. A ratio of 6 means you sold and replaced
                      inventory about six times annually.
                    </p>
                    <p>
                      “Good” is contextual. Perishable grocery turns fast; custom machinery turns slow. Comparing your ratio to a
                      unrelated industry misleads. Better benchmarks are your own trailing twelve months, peers in the same NAICS
                      band, and category-level turnover inside your catalog—hero SKUs versus dead tail.
                    </p>
                    <p>
                      Turnover ties to methods and accuracy. Reorder policies in{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>{" "}
                      and trustworthy counts in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      keep the numerator and denominator honest. Explore the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Perpetual systems in{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> compute turnover
                      from live balances. Selection help is in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="calculate-turnover" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Formula and common variants.">How to Calculate Turnover</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Standard formula: <strong className="text-[#1A2D48]">Inventory turnover = COGS ÷ average inventory</strong>.
                      Average inventory is typically (beginning + ending inventory) ÷ 2; larger businesses may average monthly
                      snapshots. Days inventory outstanding (DIO) is 365 ÷ turnover—how many days stock sits on average.
                    </p>
                    <p>
                      Segment by category or ABC class for actionable insight. Company-wide turnover can look healthy while C-class
                      dead stock rots in the back aisle. Pair with fill rate so you do not optimize turnover by starving A SKUs.
                    </p>
                  </div>
                </section>
                <section id="benchmarks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Industry ranges, not universal targets.">Benchmarks by Business Type</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ecommerce fashion and consumables often target high single-digit or low double-digit turns. Industrial
                      distributors with long lead items may accept 2–4. Manufacturing must separate raw materials, WIP, and finished
                      goods—each type behaves differently, as covered in{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        different types of inventory explained
                      </Link>.
                    </p>
                    <p>
                      Small businesses without peer data should track month-over-month trend: rising turnover with stable service
                      levels is healthy; rising turnover with rising backorders is a warning sign.
                    </p>
                  </div>
                </section>
                <section id="improve-turnover" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lean without stockouts.">Improving Turnover Safely</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Liquidate or bundle slow movers, tighten reorder points on overstocked lines, and negotiate shorter supplier
                      lead times so you can hold less safety stock. Demand forecasting and class-based policies from ABC analysis
                      reduce both excess and emergency buys.
                    </p>
                    <p>
                      Accuracy underpins every lever: phantom inventory inflates turnover on paper while real stockouts persist.
                      Cycle count A items frequently per{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      before you slash reorder quantities based on a ratio alone.
                    </p>
                  </div>
                </section>
                <section id="software-turnover" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reports that drive action.">Software and Turnover Reporting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Look for turnover or DIO reports by SKU, category, and class; aging inventory lists for slow movers; and
                      integration with accounting for COGS.{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> suits multi-channel depth;{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> covers
                      growing SMBs;{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> works for simpler
                      catalogs.
                    </p>
                    <p>
                      SMB buyers compare options in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      before committing—validate turnover math with a month of your own transactions, not vendor demos.
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
              <GuideSidebar title="Turnover & tools" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "What's a Good Inventory Turnover Ratio? | BeltStack Guide",
    description:
      "Learn how to calculate inventory turnover ratio, industry benchmarks, when higher turnover helps or hurts, and how software tracks stock efficiency.",
    keywords: [
      "inventory turnover ratio",
      "good inventory turnover",
      "inventory turnover benchmark",
      "days inventory outstanding",
      "COGS average inventory",
      "improve inventory turnover",
    ],
  };
}
