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
    q: "What is the most common inventory management mistake?",
    a: "Treating system quantity as gospel without cycle counts. Spreadsheet or ERP numbers drift when receiving shortcuts, unpicked returns, and shrink go unrecorded—accuracy work is what separates reliable ops from recurring stockouts.",
  },
  {
    q: "Why do businesses overstock slow movers?",
    a: "Bulk buys feel like savings, but C-class SKUs tie cash and shelf space while A items stock out. Without ABC ranking and turnover review, purchasing defaults to “just in case” rather than service-level targets.",
  },
  {
    q: "How often should inventory records be verified?",
    a: "High-impact SKUs need monthly or weekly cycle counts; tail items can wait longer. Annual wall-to-wall counts still matter for tax and lending even when you count continuously by class.",
  },
  {
    q: "Can software fix bad inventory habits?",
    a: "Software enforces workflows—barcode receive, blind counts, approval on adjustments—but cannot replace policy. Teams that skip receiving scans will have dirty data in any tool; fix process first or in parallel.",
  },
  {
    q: "What mistakes hurt ecommerce inventory most?",
    a: "Overselling across channels, ignoring available-to-promise versus on-hand, and syncing only once daily. Real-time or near-real-time integration and defined safety stock per channel prevent the worst customer-facing errors.",
  },
];

const PAGE_HREF = "/inventory/guides/common-inventory-management-mistakes-businesses-make";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function CommonInventoryManagementMistakesBusinessesMakePage() {
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
                      Common Inventory Management Mistakes Businesses Make
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Common Inventory Management Mistakes Businesses Make
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Recurring errors that cause stockouts, dead stock, and bad data—and practical fixes tied to golden rules,
                    cycle counting, ABC analysis, and the five-step inventory cycle.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory mistakes rarely announce themselves as “process failure.” They show up as a angry customer
                      email, a lender asking why valuation jumped, or a buyer discovering three years of slow movers in the
                      back corner. Most errors repeat: trusting unchecked system quantities, counting everything equally,
                      over-ordering the long tail, and skipping receiving discipline when the dock is busy.
                    </p>
                    <p>
                      The fix is not always new software—it is often clearer rules applied consistently. Golden-rule thinking
                      (know what you have, stock the right amount, count regularly) breaks down when teams treat inventory as
                      a set-and-forget spreadsheet updated only at year-end. Small drifts compound until a full count reveals
                      five-figure variances.
                    </p>
                    <p>
                      Anchor corrections in our{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>,{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>,{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method
                      </Link>, and{" "}
                      <Link href="/inventory/guides/the-5-steps-of-inventory-management" className={linkGreen}>
                        five steps of inventory management
                      </Link>. Browse the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link> when you are ready
                      to automate controls.
                    </p>
                    <p>
                      Platforms like{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>,{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> help
                      enforce receive-and-count workflows at SMB scale—see{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link> for
                      current reviews and pricing.
                    </p>
                  </div>
                </section>
                <section id="accuracy-trust" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When on-hand lies to you.">Trusting System Quantity Without Counts</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The number in your software is only as good as the last scan, adjustment, and return posting. Skipped
                      receiving steps, informal “borrow” transactions, and unpicked cancel lines create phantom stock—available
                      in the system, absent on the shelf. Buyers reorder late; pickers waste hours hunting ghosts.
                    </p>
                    <p>
                      Cycle counting by ABC class catches drift before it becomes a crisis. A SKUs monthly, B quarterly, C
                      annually—or faster where shrink history demands. Our{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting guide
                      </Link>{" "}
                      covers blind counts, variance thresholds, and root-cause investigation.
                    </p>
                  </div>
                </section>
                <section id="abc-imbalance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Cash trapped in the long tail.">Ignoring ABC and Overstocking Slow Movers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Without classification, every SKU gets the same buyer attention and safety stock guess. Meanwhile A items
                      stock out during peak weeks because nobody ranked contribution. Vendor minimums and “deal” pallets inflate
                      C-class on-hand while working capital sits idle.
                    </p>
                    <p>
                      The{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method
                      </Link>{" "}
                      turns Pareto intuition into policy: tighter service targets and count cadence for high-impact lines,
                      lighter rules for the tail. Pair with turnover review in finance meetings—not only in the warehouse.
                    </p>
                  </div>
                </section>
                <section id="process-gaps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Breaks in the five-step chain.">Skipping Steps in Receive, Store, and Fulfill</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory moves through plan, procure, receive, store, and fulfill. Mistakes cluster at handoffs: partial
                      receipts not closed, put-away to wrong bins, picks without confirmation, returns restocked without
                      inspection. Each shortcut saves five minutes and costs hours at count time.
                    </p>
                    <p>
                      Map your actual workflow against{" "}
                      <Link href="/inventory/guides/the-5-steps-of-inventory-management" className={linkGreen}>
                        the five steps of inventory management
                      </Link>{" "}
                      and close the biggest gap first—usually receiving or returns. Checklists and barcode discipline beat
                      heroic memory every time.
                    </p>
                  </div>
                </section>
                <section id="rules-discipline" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Policy without daily habit fails.">Breaking Golden Rules Under Pressure</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Rush orders tempt teams to ship without updating quantities, or to “fix” counts with bulk adjustments
                      instead of investigating variance. That erodes the golden rules—visibility, right quantity, regular
                      counts—and trains staff that the system is optional.
                    </p>
                    <p>
                      Recommit to{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules
                      </Link>{" "}
                      with named owners: who approves adjustments, who signs off on count variances, who owns reorder points.
                      Compare tools in{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      if you need simpler enforcement without enterprise overhead.
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
              <GuideSidebar title="Accuracy & discipline" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Common Inventory Management Mistakes | BeltStack Guide",
    description:
      "Avoid common inventory mistakes—unchecked system quantities, poor ABC discipline, process gaps, and broken golden rules—with fixes tied to cycle counting and best practices.",
    keywords: [
      "inventory management mistakes",
      "inventory errors",
      "stockout causes",
      "inventory accuracy problems",
      "overstocking mistakes",
      "inventory best practices",
    ],
  };
}
