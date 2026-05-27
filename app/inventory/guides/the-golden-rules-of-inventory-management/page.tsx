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
    q: "What are the golden rules of inventory management?",
    a: "Core principles include knowing what you have on hand, stocking the right quantity at the right place and time, counting regularly, tracking turnover, and aligning inventory policy with cash flow. These rules apply whether you run a single stockroom or a multi-warehouse network.",
  },
  {
    q: "How often should I count inventory?",
    a: "High-value and fast-moving SKUs deserve weekly or monthly cycle counts; slower movers can be counted quarterly or annually. Full physical counts once or twice a year still matter for tax and lending even when you cycle-count continuously.",
  },
  {
    q: "Is it better to overstock or understock?",
    a: "Neither extreme works. Overstocking ties cash and increases obsolescence risk; understocking loses sales and erodes customer trust. Golden-rule thinking favors service targets and reorder points calibrated to lead time and demand variability—not gut feel.",
  },
  {
    q: "Do golden rules change by industry?",
    a: "The principles stay constant; the metrics shift. Perishables emphasize FEFO rotation and shelf life; manufacturing adds WIP visibility; ecommerce stresses channel sync. See our guide on the different types of inventory for type-specific nuance.",
  },
  {
    q: "Can small businesses follow the same rules as enterprises?",
    a: "Yes, at simpler scale. A five-person shop still needs accurate records, defined reorder triggers, and periodic counts—often achievable in lightweight tools. Our best inventory software for small business guide maps platforms to those basics.",
  },
];

const PAGE_HREF = "/inventory/guides/the-golden-rules-of-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheGoldenRulesOfInventoryManagementPage() {
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
                      The Golden Rules of Inventory Management
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Golden Rules of Inventory Management
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Timeless principles for accurate stock, healthy turnover, and fewer surprises—plus how cycle counting,
                    methods, and inventory software turn rules into daily practice.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Golden rules of inventory management are the non-negotiables experienced operators repeat: know what you
                      have, where it sits, and how fast it moves; buy enough to serve customers without hoarding cash; count
                      often enough that records match reality; and fix process breaks before they become shrink or stockouts.
                    </p>
                    <p>
                      These rules matter most when growth outpaces informal habits—new SKUs, another sales channel, or a second
                      warehouse expose gaps that spreadsheets hide. Treating inventory as a discipline rather than a side task
                      prevents the classic failure modes: phantom quantities, emergency freight, and write-offs nobody saw coming.
                    </p>
                    <p>
                      Operationalize the rules through proven methods and counts. Our{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      guide covers count cadence;{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>{" "}
                      situates FIFO, reorder points, and ABC in one map. Hub navigation lives at the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Software enforces rules at scale—{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> differ in depth but share
                      perpetual tracking and alerts. Selection help is in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="know-your-stock" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Visibility before optimization.">Rule One: Know What You Have</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every other rule fails without a trustworthy on-hand number. That means item masters with correct units of
                      measure, bin or location labels, and receipts posted the day freight arrives—not when someone remembers.
                      Perpetual systems update on each transaction; periodic counts catch drift if you still run monthly snapshots.
                    </p>
                    <p>
                      Different stock types need different fields: raw materials tie to BOMs, finished goods to channel listings,
                      MRO to asset tags. Our{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        different types of inventory explained
                      </Link>{" "}
                      guide walks through what to track for each category so your golden-rule foundation is complete.
                    </p>
                  </div>
                </section>
                <section id="right-quantity" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Balance service and cash.">Rule Two: Stock the Right Quantity</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reorder points, safety stock, and economic order quantity are not academic—they translate “enough but not
                      too much” into numbers buyers can execute. Set targets from lead time and demand variability, not last
                      year’s gut feel; review when suppliers slip or seasonality shifts.
                    </p>
                    <p>
                      Turnover ratio is the health check: if inventory sits too long, cash freezes and obsolescence rises; if it
                      spins too fast, you may be chronically understocked. Pair quantity rules with class-based priorities so A
                      SKUs get tighter service goals than long-tail C items.
                    </p>
                  </div>
                </section>
                <section id="count-and-accuracy" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trust the ledger.">Rule Three: Count and Correct</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cycle counting beats annual wall-to-wall scrambles for most teams: count a slice of locations each week,
                      investigate variances before adjusting, and trend accuracy by SKU class. Blind counts—where the counter does
                      not see system quantity—reduce bias and catch process leaks in receiving or picking.
                    </p>
                    <p>
                      Full walkthrough of schedules, variance thresholds, and software workflows is in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Accuracy targets (for example 98% on A class) belong in written policy so ops and finance share
                      the same definition of “good enough.”
                    </p>
                  </div>
                </section>
                <section id="software-and-discipline" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Tools that reinforce habit.">Rule Four: Systematize With Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Golden rules decay without systems: alerts for low stock, barcode scans at pick, and audit trails on
                      adjustments keep teams honest.{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> suits
                      growing SMBs;{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> fits simpler
                      shops;{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> handles multi-channel depth.
                      Compare options in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>.
                    </p>
                    <p>
                      When evaluating tools, test{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      or{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      with your SKU list and count workflow—not demo data alone. Rules written in policy and enforced in software
                      outperform heroic manual effort every quarter.
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
              <GuideSidebar title="Rules & accuracy" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Golden Rules of Inventory Management | BeltStack Guide",
    description:
      "Learn the golden rules of inventory management—visibility, right quantities, cycle counting, turnover, and software that turns principles into daily practice.",
    keywords: [
      "golden rules inventory management",
      "inventory management principles",
      "inventory best practices",
      "cycle counting rules",
      "inventory accuracy",
      "stock control fundamentals",
    ],
  };
}
