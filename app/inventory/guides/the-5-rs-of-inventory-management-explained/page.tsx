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

const PAGE_HREF = "/inventory/guides/the-5-rs-of-inventory-management-explained";

const FAQ_ITEMS = [
  {
    q: "What are the 5 Rs of inventory management?",
    a: "The five Rs are right product, right place, right time, right quantity, and right condition. Together they describe whether stock is available where and when operations need it, in sellable form, without excess carrying cost.",
  },
  {
    q: "Is the fifth R price or condition?",
    a: "Textbooks vary: some lists add right price for margin control; operations teams often emphasize right condition because damaged or mislabeled goods fail picks and returns even when quantity looks correct. Track both margin guardrails and quality at receipt.",
  },
  {
    q: "How do the 5 Rs relate to fill rate and OTIF?",
    a: "Fill rate and on-time-in-full (OTIF) metrics are how customers experience the five Rs. If OTIF slips, diagnose which R broke—wrong SKU staged, short pick, late shipment, or damaged carton—instead of only increasing safety stock.",
  },
  {
    q: "Can inventory software enforce the 5 Rs?",
    a: "Software improves visibility, allocation rules, lot and expiry tracking, and location-level quantities. It cannot fix bad slotting or weak receiving inspection; those are process disciplines the system should record and measure.",
  },
  {
    q: "Do small businesses need a formal 5 R framework?",
    a: "Yes, lightly. Even a single warehouse benefits from naming the five Rs in SOPs and weekly reviews. The framework turns vague “stock problems” into fixable gaps in product, place, time, quantity, or condition.",
  },
];

const RELATED_ITEMS = [...INVENTORY_GUIDE_RELATED_ITEMS];

export default function The5RsOfInventoryManagementExplainedPage() {
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
                      The 5 Rs of Inventory Management Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The 5 Rs of Inventory Management Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Right product, place, time, quantity, and condition—the five Rs framework for diagnosing stock
                    failures, improving fill rates, and aligning warehouse discipline with customer promises.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The five Rs compress decades of supply chain teaching into a checklist operators can use daily.
                      When a picker cannot complete an order or a buyer over-orders “just in case,” the failure is usually
                      one R out of alignment—not a mysterious inventory curse. Naming the gap speeds fixes.
                    </p>
                    <p>
                      Perpetual inventory systems from{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> expose quantity by
                      location, allocations, and—in regulated or perishable categories—lot and expiry data that support
                      right condition. Software reports the Rs; people and SOPs still deliver them.
                    </p>
                    <p>
                      Pair this framework with{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      so right quantity is verified, not assumed. Multi-channel sellers should cross-read{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      for allocation across storefronts and marketplaces.
                    </p>
                    <p>
                      Use the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link>,{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        software selection guide
                      </Link>, and{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      when you are ready to tool up. Compare vendors on the{" "}
                      <Link href="/inventory/compare" className={linkGreen}>inventory compare</Link> page and see curated
                      picks on{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      before trials.
                    </p>
                  </div>
                </section>
                <section id="five-rs-defined" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A practical definition of each R.">The Five Rs Defined</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Right product</strong> means the SKU, variant, and unit of measure
                      the customer or work order expects—no substitutes unless policy allows.{" "}
                      <strong className="text-[#1A2D48]">Right place</strong> is bin, zone, or channel-available stock, not
                      only enterprise-wide totals. <strong className="text-[#1A2D48]">Right time</strong> aligns pick,
                      ship, and production start with promised dates. <strong className="text-[#1A2D48]">Right quantity</strong>{" "}
                      covers available-to-promise math without overselling.{" "}
                      <strong className="text-[#1A2D48]">Right condition</strong> is sellable, labeled, and compliant
                      goods—especially for food, pharma, and cosmetics.
                    </p>
                  </div>
                </section>
                <section id="diagnose-failures" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turn metrics into root causes.">Diagnosing Breakdowns with the 5 Rs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When OTIF drops, resist the reflex to raise every reorder point. Ask which R failed: a hot SKU in the
                      wrong zone (place), a system showing units that are actually quarantined (condition), or a channel
                      sync lag causing right product on paper but not on Shopify (time). Manufacturing teams add BOM
                      accuracy—see{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      when wrong components stall the right product on the line.
                    </p>
                    <p>
                      Weekly ops reviews that tag incidents by R build a backlog buyers and warehouse leads can act on
                      instead of debating abstract “inventory feels off” symptoms.
                    </p>
                  </div>
                </section>
                <section id="process-habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Discipline that keeps the Rs aligned.">Receiving, Slotting, and Counting Habits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Right condition starts at receiving: inspect, label, and quarantine before putaway. Right place
                      depends on slotting fast movers near pack stations and keeping bulk reserve separate from pick face.
                      Right quantity depends on blind cycle counts and closing partial receipts—topics covered in depth in
                      our accuracy guide on the{" "}
                      <Link href="/inventory/guides" className={linkGreen}>inventory guides</Link> index.
                    </p>
                  </div>
                </section>
                <section id="software-levers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that map to each R.">Software Levers for the Five Rs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Multi-location ATP and channel-specific available quantities (place, time).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Barcode scanning and pick paths to reduce wrong product picks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Lot, serial, and expiry tracking for condition-sensitive SKUs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Reorder and safety stock rules tuned by velocity—not one global minimum.</span>
                      </li>
                    </ul>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      once you know which Rs break most often in your operation.
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
              <GuideSidebar title="Inventory operations" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "The 5 Rs of Inventory Management | BeltStack Guide",
    description:
      "Learn the five Rs of inventory management—right product, place, time, quantity, and condition—and how to diagnose stock failures and improve fill rates.",
    keywords: [
      "5 rs of inventory management",
      "right product right place",
      "inventory fill rate",
      "warehouse accuracy",
      "inventory operations framework",
      "otif inventory",
    ],
  };
}
