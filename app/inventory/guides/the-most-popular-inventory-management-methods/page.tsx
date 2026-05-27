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
    q: "What is the most common inventory method for small businesses?",
    a: "Perpetual inventory with periodic cycle counts is the most practical default for SMBs selling physical goods. You update quantities as you buy and sell, then verify accuracy on a schedule rather than waiting for one annual wall-to-wall count.",
  },
  {
    q: "Should I use FIFO or weighted average costing?",
    a: "FIFO fits businesses where costs rise over time and you want COGS to reflect older, often lower unit costs first. Weighted average smooths price swings across purchases and is common when SKUs are fungible and lot tracking is light. Your accountant and tax rules should drive the final choice.",
  },
  {
    q: "What is just-in-time (JIT) inventory?",
    a: "JIT aims to receive stock close to when you need it, minimizing carrying cost and warehouse space. It requires reliable suppliers and accurate demand signals; a single late shipment can halt production or fulfillment if safety stock is too thin.",
  },
  {
    q: "How does ABC analysis relate to inventory methods?",
    a: "ABC classifies SKUs by impact so you count, review, and reorder high-impact lines more often than long-tail items. It pairs with cycle counting and reorder policies rather than replacing them—see our guide on cycle counting for how ABC drives count schedules.",
  },
  {
    q: "Can inventory software enforce these methods automatically?",
    a: "Software applies costing rules, tracks lots where configured, suggests reorder points, and generates count lists by ABC class. It cannot fix bad receiving or missing returns—you still need process discipline, but the system makes the chosen method visible and repeatable.",
  },
];

const PAGE_HREF = "/inventory/guides/the-most-popular-inventory-management-methods";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheMostPopularInventoryManagementMethodsPage() {
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
                      The Most Popular Inventory Management Methods
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Most Popular Inventory Management Methods
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    FIFO, perpetual tracking, ABC analysis, reorder points, and JIT—how the most common inventory methods
                    work, when each fits, and how software supports them without reinventing operations.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      “Inventory management method” can mean costing (FIFO, LIFO, weighted average), recording style
                      (perpetual vs periodic), or operating discipline (cycle counts, min/max, EOQ, JIT). Teams search for
                      methods when spreadsheets stop matching the shelf and finance asks which COGS rule the books follow.
                      None of these ideas require enterprise ERP on day one—many SMBs run sound methods inside{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, or{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> once processes are clear.
                    </p>
                    <p>
                      Pick a method set that matches how you actually buy, store, and sell. A brand with expiry dates
                      needs lot and FEFO thinking; a job shop with long lead times needs safety stock and visible
                      allocations; a marketplace seller needs channel-level availability, not only warehouse totals.
                      Methods fail when chosen from a textbook but ignored on the floor.
                    </p>
                    <p>
                      Use this guide with our{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link>,{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>, and{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      for ABC-driven counts. Product fit and pricing live in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Ecommerce and manufacturing teams often combine methods: perpetual records, FIFO or average
                      costing, reorder points on A SKUs, and quarterly review of C-grade tail. The goal is fewer
                      emergency purchases and numbers leadership can trust—not perfect theory on a whiteboard.
                    </p>
                  </div>
                </section>
                <section id="costing-and-recording" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How value and quantity hit the books.">Costing and Recording Methods</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">FIFO</strong> (first in, first out) assumes the oldest units sell
                      first—common for rising-cost environments and many tax treatments. <strong className="text-[#1A2D48]">Weighted
                      average</strong> recalculates unit cost after each purchase, smoothing volatility.{" "}
                      <strong className="text-[#1A2D48]">LIFO</strong> is rarer for smaller operators and restricted in
                      several jurisdictions; confirm with your accountant before modeling it.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Perpetual inventory</strong> updates on-hand quantity with each
                      receipt, sale, and adjustment in near real time. <strong className="text-[#1A2D48]">Periodic</strong>{" "}
                      inventory adjusts the ledger only at count intervals—simpler on paper but blind between counts.
                      Modern inventory apps are built for perpetual tracking; periodic-only workflows usually signal a
                      process gap, not a deliberate strategy.
                    </p>
                  </div>
                </section>
                <section id="operating-discipline" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Day-to-day control without constant fire drills.">Operating Discipline: ABC, Counts, and Reorder Points</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">ABC analysis</strong> ranks SKUs by revenue, margin, or pick
                      frequency so effort concentrates where errors hurt most. Pair it with cycle counting: A items counted
                      often, C items less often but not never. That rhythm is detailed in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Reorder points and min/max</strong> trigger purchases when stock
                      crosses a threshold—often lead time demand plus safety stock. <strong className="text-[#1A2D48]">EOQ</strong>{" "}
                      (economic order quantity) balances ordering cost against holding cost for stable, high-volume lines.
                      Start with simple min/max on top sellers; refine with EOQ only where data supports it.
                    </p>
                  </div>
                </section>
                <section id="jit-and-lean" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Less stock on hand, tighter coordination.">JIT, Lean, and Demand-Driven Replenishment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Just-in-time and lean variants push inventory toward the receiving dock only when downstream need is
                      confirmed. Benefits: lower carrying cost and less obsolescence. Risks: supplier delay or forecast
                      error becomes a line-down event. JIT works when lead times are short, vendors are reliable, and
                      quality at inbound is high—otherwise safety stock is not waste, it is insurance.
                    </p>
                    <p>
                      Multi-channel retailers rarely run pure JIT on every SKU; they blend JIT on fast movers with buffer
                      on promotional or seasonal lines. Manufacturing may kanban components while finished goods carry
                      wider buffers for customer lead-time promises.
                    </p>
                  </div>
                </section>
                <section id="software-support" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What tools should enforce—not guess.">How Inventory Software Supports Your Methods</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Costing method configuration (FIFO, average) with audit-friendly adjustment history.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Reorder alerts, purchase suggestions, and vendor lead-time fields per SKU.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>ABC tags and scheduled count batches tied to location or class.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Channel-level availability when you sell beyond one storefront.</span>
                      </li>
                    </ul>
                    <p>
                      When requirements clarify, compare platforms in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and read individual{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>Fishbowl</Link> or{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>Katana</Link> reviews if
                      manufacturing depth matters.
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
              <GuideSidebar title="Inventory methods" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Popular Inventory Management Methods | BeltStack Guide",
    description:
      "Learn the most popular inventory management methods—FIFO, perpetual tracking, ABC analysis, reorder points, JIT—and how inventory software supports each.",
    keywords: [
      "inventory management methods",
      "FIFO inventory",
      "perpetual inventory",
      "ABC analysis inventory",
      "reorder point",
      "JIT inventory",
    ],
  };
}
