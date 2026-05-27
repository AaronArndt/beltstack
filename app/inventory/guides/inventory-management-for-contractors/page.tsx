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
    q: "Do contractors need inventory management software?",
    a: "Contractors carrying parts, materials, or consumables on trucks and in shops benefit once spreadsheet counts fail to match job costing. Even modest SKU lists—fittings, wire, fasteners—accumulate shrink and emergency supply runs when not tracked; software pays off when multiple crews pull from shared stock daily.",
  },
  {
    q: "What is the difference between job costing and inventory tracking for contractors?",
    a: "Job costing allocates labor, materials, and overhead to projects for margin analysis. Inventory tracking maintains quantity and location of stock items. The two connect when parts issued to a job decrement inventory and post cost to the work order—without that link, jobs look profitable while the parts room bleeds cash.",
  },
  {
    q: "Should contractors track van stock separately from the shop?",
    a: "Yes, when more than one vehicle carries parts. Treat each van or truck as a location with transfers from the shop; otherwise techs borrow informally and counts drift. Mobile-friendly tools with barcode scans make van counts feasible during weekly yard meetings.",
  },
  {
    q: "Can field service software replace inventory software for contractors?",
    a: "Field service platforms handle parts on work orders, truck stock, and returns tied to jobs—enough for many trades. Dedicated inventory software adds purchasing depth, vendor catalogs, and warehouse discipline when SKU count, central depots, or multi-branch stockrooms grow beyond what FSM modules comfortably manage.",
  },
  {
    q: "Which inventory tools fit small contractor teams?",
    a: "Light teams often start with Sortly or inFlow for barcode-friendly tracking and simple transfers, then add field service software when dispatch and invoicing complexity rises. Validate mobile UX on actual job sites—not only the office—before committing.",
  },
];

const PAGE_HREF = "/inventory/guides/inventory-management-for-contractors";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventoryManagementForContractorsPage() {
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
                      Inventory Management for Contractors
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Management for Contractors
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How trade and construction contractors track parts and materials—shop stock, van inventory, job
                    consumption, and when lightweight tools beat full field service platforms.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractor inventory sits between retail velocity and manufacturing BOM complexity. HVAC techs,
                      electricians, plumbers, and general contractors carry high-value parts on trucks, maintain shop
                      counters for walk-in sales, and issue materials to jobs that may span weeks. When counts live in
                      memory or a shared spreadsheet, emergency supply runs, double-buying, and job margin surprises
                      become routine—especially once multiple crews pull from the same shelf.
                    </p>
                    <p>
                      Effective contractor inventory ties physical stock to jobs: a fitting pulled for a service call
                      should decrement van quantity and appear on the work order for billing and costing. That handoff
                      is where inventory discipline meets operations—field service software excels at parts on jobs; pure
                      inventory tools excel at purchasing, receiving, and location transfers before items ever reach a
                      truck.
                    </p>
                    <p>
                      Field operations context lives in the{" "}
                      <Link href="/field-service" className={linkGreen}>field service hub</Link>,{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>
                        field service parts inventory
                      </Link>, and{" "}
                      <Link href="/field-service/guides/how-work-order-management-works" className={linkGreen}>
                        how work order management works
                      </Link>.
                      tied to job records. Foundational count discipline is in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/how-small-businesses-manage-inventory" className={linkGreen}>
                        how small businesses manage inventory
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Lightweight contractor stacks often include{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow Inventory</Link>{" "}
                      for purchasing and barcode workflows and{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>{" "}
                      for visual, mobile-friendly location tracking. Compare them in{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>; broader rankings in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="shop-and-van" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Yard, counter, and truck locations.">Shop Stock, Van Stock, and Transfers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define locations explicitly: main shop, each service vehicle, job-site staging areas if you carry
                      consigned material. Transfers from shop to van should be system transactions, not verbal “grab a
                      box” requests—otherwise month-end counts show shop shortages while vans hold unrecorded surplus.
                      Weekly van audits during yard meetings catch drift before jobs stall for a $12 part.
                    </p>
                    <p>
                      Min/max levels differ by location: vans carry fast-moving repair SKUs; the shop holds bulk and
                      specialty items. Reorder triggers should respect supplier lead times—same-day counter pickups versus
                      two-week manufacturer backorders need different buffers, aligned with{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock
                      </Link>{" "}
                      thinking.
                    </p>
                  </div>
                </section>
                <section id="job-consumption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Parts that become job cost.">Issuing Parts to Jobs and Work Orders</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When a tech uses a part on site, the ideal flow captures SKU, quantity, and job ID in one mobile
                      action—decrementing van stock and queuing invoice lines. Manual end-of-day entry fails under
                      volume; photos of empty packaging are a poor substitute for structured consumption. Work order
                      management in{" "}
                      <Link href="/field-service" className={linkGreen}>field service software</Link>{" "}
                      closes the loop from dispatch through billing.
                    </p>
                    <p>
                      Returns and unused material from completed jobs should restock van or shop with reason codes—
                      otherwise job profitability looks worse than reality and replenishment over-orders. Serialized or
                      high-value items (motors, control boards) deserve scan-on-issue and scan-on-return discipline.
                    </p>
                  </div>
                </section>
                <section id="purchasing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Vendor orders and receiving discipline.">Purchasing, Receiving, and Vendor Catalogs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Contractors often buy from multiple distributors with different part numbers for equivalent items.
                      Normalize SKUs in your system—or link vendor aliases—so buyers and techs speak one language.
                      Receiving against POs posts on-hand before parts hit shelves; blind receiving invites quantity
                      disputes that surface only during counts.
                    </p>
                    <p>
                      Job-based purchasing (buy-to-job) differs from stock replenishment: track which approach each line
                      item uses so finance can separate pass-through materials from warehouse investment. Tools like{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>{" "}
                      emphasize PO and receiving workflows suited to shop counters; validate integration with your
                      accounting export before go-live.
                    </p>
                  </div>
                </section>
                <section id="software-fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lightweight tracking versus FSM.">Software Fit: Inventory Apps and Field Service</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Solo and small crews may run{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>{" "}
                      for photo-based location tracking before adopting dispatch software. Growing shops add{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>{" "}
                      when purchasing, assemblies, and barcode receiving matter daily. Once scheduling, customer comms, and
                      invoicing dominate pain points, evaluate{" "}
                      <Link href="/field-service/best-field-service-software" className={linkGreen}>
                        field service software
                      </Link>{" "}
                      that includes parts on work orders.
                    </p>
                    <p>
                      Compare lightweight options in{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      and read{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      for broader SMB context. Multi-location depots crossing into warehouse execution may need guidance
                      from{" "}
                      <Link href="/inventory/guides/how-multi-location-inventory-management-works" className={linkGreen}>
                        multi-location inventory management
                      </Link>.
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
              <GuideSidebar title="Contractor inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Inventory Management for Contractors | BeltStack Guide",
    description:
      "How contractors manage parts and materials—shop and van stock, job consumption, purchasing, and choosing between inventory apps and field service software.",
    keywords: [
      "contractor inventory management",
      "construction inventory tracking",
      "van stock inventory",
      "contractor parts tracking",
      "trade inventory software",
      "job costing materials",
    ],
  };
}
