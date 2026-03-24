import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedPosResources } from "@/components/guides/RelatedPosResources";
import { POS_GUIDE_SIDEBAR_ITEMS, POS_GUIDE_RELATED_ITEMS } from "@/lib/data/posGuides";
import { getPosReviewUrl } from "@/lib/routes";

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
    q: "Does every POS have inventory?",
    a: "Most POS systems include basic inventory: a product catalog, stock levels, and low-stock alerts. Depth varies—Square has basic inventory with optional add-ons; Lightspeed and Vend are built for deeper retail inventory and multi-location. Dedicated inventory management systems (e.g. from our inventory cluster) can sit alongside or replace POS inventory for complex operations.",
  },
  {
    q: "When should I connect my POS to a separate inventory system?",
    a: "When you have complex multi-location inventory, manufacturing, or heavy purchasing and you need a single system of record for stock across POS, ecommerce, and warehouses. The POS then becomes a sales channel that updates the central inventory system; the inventory system handles receiving, transfers, and reporting.",
  },
  {
    q: "Can POS integrate with QuickBooks for inventory?",
    a: "Many POS systems integrate with QuickBooks so sales and sometimes inventory sync to the books. The depth of inventory sync (e.g. cost of goods, adjustments) varies by POS and QuickBooks plan. Check the POS provider’s QuickBooks integration documentation.",
  },
];

export default function PosInventoryIntegrationGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/pos" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">POS Software</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/pos/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">POS Inventory Integration</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    POS Inventory Integration
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How POS integrates with inventory management systems and why it matters for accurate stock and reporting.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A POS system records sales and, in most cases, updates stock levels for the items you sell at the register. When you need more than basic POS inventory—multi-location, purchasing, manufacturing, or a single source of truth across POS, ecommerce, and warehouses—you may add a dedicated <Link href="/inventory" className={linkGreen}>inventory management system</Link>. The POS and inventory system then need to integrate so that sales from the register update central stock and so that product and pricing data flow the right way.
                    </p>
                    <p>
                      This guide explains how POS–inventory integration works, when to use built-in POS inventory vs a separate system, and how it connects to the broader stack (e.g. <Link href="/accounting" className={linkGreen}>accounting</Link>). POS tools like <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed POS</Link>, <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link>, and <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link> each handle inventory differently; we’ll point to where integration matters most.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters for POS and inventory.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Built-in POS inventory</strong> is enough for many single-location or simple multi-store setups. Sales update stock; you get basic reports and low-stock alerts.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Dedicated inventory systems</strong> make sense when you need deeper purchasing, multi-warehouse, or manufacturing. The POS becomes a sales channel that pushes transactions to the inventory system.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Integrations</strong> between POS and inventory (or accounting) keep numbers in sync and reduce double entry and errors.</span>
                    </li>
                  </ul>
                </section>
                <section id="how-integration-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How POS and inventory stay in sync.">How POS–inventory integration works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In the simplest case, the POS is the only inventory system: you maintain products and stock in the POS, and each sale decrements stock. Many retailers and single-location stores run this way with <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square</Link>, <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover</Link>, or <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed</Link>. When you need a separate inventory system (e.g. for multi-warehouse, manufacturing, or complex purchasing), the flow usually goes: POS sends sales (and sometimes returns) to the inventory system; the inventory system is the source of truth for stock levels and may push product or pricing updates back to the POS. Integrations can be native (POS vendor offers a connector) or via middleware.
                    </p>
                    <p>
                      Accounting often sits alongside: both POS and inventory may sync to <Link href="/accounting" className={linkGreen}>accounting software</Link> (QuickBooks, Xero) for revenue and cost of goods. That way your books reflect what’s actually selling and what’s in stock. For more on inventory software and when to use it, see our <Link href="/inventory" className={linkGreen}>inventory management hub</Link> and <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>how to choose inventory software</Link> guide.
                    </p>
                  </div>
                </section>
                <section id="when-to-add-dedicated-inventory" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When a separate inventory system pays off.">When to add a dedicated inventory system</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Stay with POS-only inventory when you have one or a few locations, straightforward product catalogs, and no need for deep purchasing or manufacturing. Add a dedicated inventory system when you have multiple warehouses, complex replenishment, or production (e.g. manufacturing or assembly) that the POS doesn’t handle. The inventory system then becomes the single source of truth; the POS is a sales channel that posts transactions into it. Many businesses start with POS inventory and only add a system like Zoho Inventory, Cin7, or Katana when they outgrow POS-level stock management—see our <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link> roundup for options.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Right-size POS and inventory.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Use built-in POS inventory when it’s sufficient for your locations and complexity; add a dedicated inventory system when you need deeper control or a single source of truth across channels. Ensure your POS can integrate with your chosen inventory and accounting tools. Use our <Link href="/pos" className={linkGreen}>POS hub</Link>, <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link>, <Link href="/pos/best-for/retail" className={linkGreen}>best POS for retail</Link>, and <Link href="/inventory" className={linkGreen}>inventory hub</Link> or <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link> to compare options.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about POS and inventory.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Recommended POS Software" items={POS_GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/pos-inventory-integration" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "POS Inventory Integration | BeltStack Guide",
    description: "How POS integrates with inventory management systems and why it matters for accurate stock and reporting.",
  };
}
