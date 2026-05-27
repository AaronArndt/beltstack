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

const PAGE_HREF = "/inventory/guides/fefo-vs-fifo-whats-the-difference";

const FAQ_ITEMS = [
  {
    q: "What is the difference between FIFO and FEFO?",
    a: "FIFO (first in, first out) ships or consumes the oldest received units first by receipt date. FEFO (first expired, first out) ships units with the earliest expiration or best-before date first, regardless of which pallet arrived last—critical for food, supplements, and cosmetics.",
  },
  {
    q: "When should a business use FEFO instead of FIFO?",
    a: "Use FEFO when products have expiry, lot stability limits, or regulatory traceability. Use FIFO for durable goods where age does not affect safety or quality. Many warehouses use FEFO for perishables and FIFO for general merchandise in the same building.",
  },
  {
    q: "Does FIFO always reduce waste?",
    a: "Not for dated goods. Strict FIFO can ship newer lots while older lots expire on the shelf. FEFO targets waste reduction by prioritizing the clock, not the receiving timestamp.",
  },
  {
    q: "Can inventory software enforce FEFO?",
    a: "Software needs lot or batch tracking with expiry dates, FEFO pick suggestions, and receiving labels that print use-by dates. Scanning at pick validates the suggested lot. Without expiry capture at receipt, FEFO cannot run reliably.",
  },
  {
    q: "How does FEFO relate to accounting FIFO?",
    a: "Accounting FIFO values COGS by oldest cost layers. Warehouse FEFO is a physical rotation rule. They should align for perishables, but costing method and pick path are separate conversations—finance and ops both need clarity.",
  },
];

const RELATED_ITEMS = [...INVENTORY_GUIDE_RELATED_ITEMS];

export default function FefoVsFifoWhatsTheDifferencePage() {
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
                      FEFO vs FIFO: What&apos;s the Difference?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    FEFO vs FIFO: What&apos;s the Difference?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    First expired, first out vs first in, first out—when to use each rotation method, how they affect
                    waste and compliance, and what inventory software must track for dated stock.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      FIFO and FEFO sound interchangeable until expiry dates matter. Distributors of durable hardware often
                      live comfortably on FIFO by receipt date. Food, beverage, supplement, and cosmetic operators need FEFO
                      so the pick path follows the use-by clock—not whichever pallet crossed the dock most recently.
                    </p>
                    <p>
                      Inventory tools including{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> support lot and batch
                      fields on mid-market tiers; depth varies for FEFO-directed picking versus manual discipline. Capture
                      expiry at receiving or rotation rules stay honor-system only.
                    </p>
                    <p>
                      Understand stock categories in{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        the different types of inventory explained
                      </Link>{" "}
                      and keep counts honest via{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>.{" "}
                      Ecommerce brands shipping perishables should read{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      for channel-level ATP with lot awareness.
                    </p>
                    <p>
                      Choose systems through{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>, shortlists on{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>, and side-by-sides on{" "}
                      <Link href="/inventory/compare" className={linkGreen}>inventory compare</Link> from the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link> and{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>.
                    </p>
                  </div>
                </section>
                <section id="fifo-explained" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Oldest receipt first—simple and common.">FIFO Explained</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">First in, first out (FIFO)</strong> consumes or ships stock in the
                      order it was received. It is easy to explain to warehouse staff, aligns with many accounting COGS
                      methods, and prevents dusty oldest cartons from sitting indefinitely—for products where time on shelf
                      is roughly correlated with receipt order.
                    </p>
                    <p>
                      FIFO breaks when suppliers send mixed lots with different expiries in one shipment, or when newer
                      stock is stacked in front of older stock. Slotting and pick-face discipline still matter; software
                      receipt timestamps alone do not fix bad physical layout.
                    </p>
                  </div>
                </section>
                <section id="fefo-explained" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Earliest expiry wins the pick.">FEFO Explained</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">First expired, first out (FEFO)</strong> directs picks to the lot
                      with the soonest use-by or expiration date. A newer pallet with a later expiry may sit behind an older
                      lot that must ship first. Regulated categories and retail chargebacks make FEFO non-optional where dates
                      are on the label.
                    </p>
                    <p>
                      FEFO requires capturing expiry (and often lot) at receiving, printing readable labels, and pick
                      validation—scan the suggested lot or the system blocks the wrong batch.
                    </p>
                  </div>
                </section>
                <section id="when-to-use" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Practical decision rules.">When to Use FIFO vs FEFO</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Use <strong className="text-[#1A2D48]">FEFO</strong> for food, beverages, nutraceuticals, cosmetics,
                      chemicals with shelf stability, and any SKU with customer or regulator date requirements. Use{" "}
                      <strong className="text-[#1A2D48]">FIFO</strong> for durable goods, most industrial MRO, and general
                      merchandise without expiry. Mixed warehouses should document zone rules so pickers do not apply FIFO
                      habits to cold-chain lanes.
                    </p>
                    <p>
                      Manufacturers blending ingredients may need FEFO on raw and FIFO on packaging—see{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      for BOM and lot consumption patterns.
                    </p>
                  </div>
                </section>
                <section id="software-practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lot tracking, picks, and audits.">Software and Warehouse Practices</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Mandatory expiry and lot on receipt for dated SKUs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>FEFO pick suggestions and scan validation at pack stations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Near-expiry reports for markdowns or donation before write-off.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Cycle counts by lot to catch hidden expired units in reserve locations.</span>
                      </li>
                    </ul>
                    <p>
                      Trial with real lots using{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      or{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      before committing to a rotation workflow your team will run daily.
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
              <GuideSidebar title="FIFO & FEFO" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "FEFO vs FIFO: What's the Difference? | BeltStack Guide",
    description:
      "Compare FEFO and FIFO inventory rotation: when to use each method, how they reduce waste, lot tracking requirements, and what inventory software should support.",
    keywords: [
      "fefo vs fifo",
      "first expired first out",
      "fifo inventory",
      "lot tracking inventory",
      "expiry date warehouse",
      "perishable inventory management",
    ],
  };
}
