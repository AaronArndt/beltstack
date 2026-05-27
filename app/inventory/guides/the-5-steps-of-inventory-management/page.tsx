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
    q: "What are the five steps of inventory management?",
    a: "A practical cycle: (1) plan and forecast demand, (2) purchase or produce stock, (3) receive and put away, (4) store and control on-hand balances, (5) fulfill orders and reconcile counts. Each step needs owners, data, and software hooks so the loop stays closed.",
  },
  {
    q: "Which step causes the most inventory errors?",
    a: "Receiving and put-away are common leak points—wrong quantities posted, labels misplaced, or blind receipts skipped. Errors compound through storage and picking until cycle counts surface phantom stock or shortages.",
  },
  {
    q: "Do all five steps need inventory software?",
    a: "Micro teams can start with disciplined spreadsheets on steps four and five, but multi-SKU or multi-location operations need perpetual tracking by step two. Software automates alerts, barcodes, and audit trails that spreadsheets cannot enforce.",
  },
  {
    q: "How does cycle counting fit the five steps?",
    a: "Counting and reconciliation close the loop after fulfillment—adjust variances, fix process breaks, and feed better forecasts into step one. Without counts, step four drifts from reality even when sales systems look fine.",
  },
  {
    q: "Can manufacturing use the same five steps?",
    a: "Yes, with WIP between purchase and finished goods. Raw materials enter at step three; production consumes and transforms stock during step four; finished goods ship at step five. Type-specific nuance is in our inventory types guide.",
  },
];

const PAGE_HREF = "/inventory/guides/the-5-steps-of-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function The5StepsOfInventoryManagementPage() {
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
                      The 5 Steps of Inventory Management
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The 5 Steps of Inventory Management
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Plan, buy, receive, store, and fulfill—the five-step inventory cycle with controls, counts, methods, and
                    software that keeps each handoff accurate.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory management breaks into five repeatable steps: plan what you need, procure it, receive and verify,
                      store with visible on-hand balances, then pick, pack, and ship while reconciling records. Weakness at any
                      step poisons the rest—overbuying at step two cannot fix pick errors at step five.
                    </p>
                    <p>
                      The framework helps owners assign accountability: buyers own steps one–two, warehouse leads own three–four,
                      customer-facing ops own five, finance owns reconciliation. When everyone “does inventory” with no step owner,
                      counts become crisis management instead of steady discipline.
                    </p>
                    <p>
                      Methods and accuracy practices span all five steps—see{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Navigate the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Perpetual tools such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> record each step in
                      one system. Choose platforms via{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="plan-and-procure" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Steps one and two.">Plan Demand and Procure Stock</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Step 1 — Plan:</strong> translate sales history, seasonality, and open
                      orders into replenishment needs. Reorder points, safety stock, and forecasts belong here—not reactive buys when
                      a bin looks empty. <strong className="text-[#1A2D48]">Step 2 — Procure:</strong> issue POs or production orders,
                      confirm lead times, and align inbound dates with warehouse capacity.
                    </p>
                    <p>
                      Different inventory types need different planning inputs—raw materials follow BOM explosions; finished goods
                      follow channel velocity. See{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        different types of inventory explained
                      </Link>{" "}
                      for type-specific fields and policies.
                    </p>
                  </div>
                </section>
                <section id="receive-and-store" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Steps three and four.">Receive, Put Away, and Store</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Step 3 — Receive:</strong> match freight to PO lines, inspect damage, label
                      units, and post quantities the day goods arrive. Blind receiving—without peeking at expected qty—catches
                      supplier shorts early. <strong className="text-[#1A2D48]">Step 4 — Store:</strong> assign bin locations, rotate
                      FIFO or FEFO where required, and maintain perpetual on-hand that updates on every move.
                    </p>
                    <p>
                      Slot fast movers for shorter pick paths; segregate quarantine or damaged stock so it cannot sell. Location
                      discipline at step four prevents pickers from hunting—and from inventing quantities at step five.
                    </p>
                  </div>
                </section>
                <section id="fulfill-and-reconcile" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Step five and the feedback loop.">Fulfill Orders and Reconcile</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Step 5 — Fulfill:</strong> pick against sales or work orders, pack, ship, and
                      decrement inventory in the same system that took the order. Barcode scans at pick reduce mis-ships; capture
                      lot or serial numbers when traceability matters.
                    </p>
                    <p>
                      Close the loop with cycle counts and variance research—feeds back to step one. Full mechanics are in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Without reconciliation, planning repeats the same overbuy and stockout mistakes each quarter.
                    </p>
                  </div>
                </section>
                <section id="software-five-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One system across the cycle.">Software Across All Five Steps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Evaluate whether a tool covers your weakest step—ecommerce teams stress step five channel sync; manufacturers
                      stress WIP between three and four.{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> spans multi-channel fulfillment;{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> fits growing
                      SMBs;{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> suits simpler
                      receive-to-ship workflows.
                    </p>
                    <p>
                      SMB buyers start with{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and compare{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow Inventory vs Zoho Inventory
                      </Link>{" "}
                      on receiving, picking, and count modules before signing annual contracts.
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
              <GuideSidebar title="Process & tools" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "5 Steps of Inventory Management | BeltStack Guide",
    description:
      "Learn the five steps of inventory management—plan, procure, receive, store, fulfill, and reconcile—with cycle counting, methods, and software for each stage.",
    keywords: [
      "5 steps inventory management",
      "inventory management process",
      "receive put away pick pack",
      "inventory workflow steps",
      "inventory cycle steps",
      "warehouse process steps",
    ],
  };
}
