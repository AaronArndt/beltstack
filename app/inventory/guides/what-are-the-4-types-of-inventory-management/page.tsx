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

const PAGE_HREF = "/inventory/guides/what-are-the-4-types-of-inventory-management";

const FAQ_ITEMS = [
  {
    q: "What are the four main types of inventory management?",
    a: "Most operations texts group them as periodic review, perpetual tracking, just-in-time (demand-pull), and materials requirements planning (production-pull). The right mix depends on whether you resell finished goods, assemble, or run discrete manufacturing—and how fast errors become stockouts.",
  },
  {
    q: "Is perpetual inventory the same as using inventory software?",
    a: "Perpetual inventory is the accounting and operations model: quantities update with every receipt, sale, and adjustment. Software makes perpetual practical at scale, but you still need disciplined receiving, picking, and cycle counts or drift will return.",
  },
  {
    q: "When is just-in-time inventory management appropriate?",
    a: "JIT works when suppliers are reliable, lead times are short, and demand is relatively predictable. It is risky for long-lead imports, highly promotional ecommerce, or SKUs with volatile seasonality unless you have strong vendor collaboration and backup supply paths.",
  },
  {
    q: "How does MRP differ from reorder-point inventory?",
    a: "Reorder points trigger buys when stock hits a minimum. MRP explodes a production schedule and bill of materials into time-phased purchase and work orders. Manufacturers with assemblies usually need MRP or MRP-like logic; pure distributors often live on reorder points and safety stock.",
  },
  {
    q: "Can a small business use more than one inventory management type?",
    a: "Yes. Many teams run perpetual tracking in software for fast movers, periodic counts for slow SKUs, and JIT-style replenishment only for select A items from trusted vendors. The goal is matching method to SKU economics, not forcing one policy everywhere.",
  },
];

const RELATED_ITEMS = [...INVENTORY_GUIDE_RELATED_ITEMS];

export default function WhatAreThe4TypesOfInventoryManagementPage() {
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
                      What Are the 4 Types of Inventory Management?
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Are the 4 Types of Inventory Management?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Periodic, perpetual, just-in-time, and MRP-style inventory management explained—when each fits, how
                    they differ in data needs, and what software supports them in practice.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      “Four types of inventory management” usually refers to operating models, not four software brands.
                      Teams search the phrase when spreadsheets stop scaling and they need language to compare periodic
                      counts, always-on stock ledgers, lean replenishment, and production-driven buying. Each model
                      trades admin effort, carrying cost, and risk differently.
                    </p>
                    <p>
                      Inventory platforms such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> are built around
                      perpetual tracking, but they also support cycle counts (periodic discipline), demand-based
                      replenishment, and—on manufacturing tiers—BOM explosion closer to MRP. No tool removes the need to
                      pick a policy per SKU family.
                    </p>
                    <p>
                      Start with our{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      guide if you are still selecting a system. Ecommerce-heavy operations should also read{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>;{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        manufacturing inventory software
                      </Link>{" "}
                      covers BOM and work-order paths where MRP logic matters most.
                    </p>
                    <p>
                      For product shortlists and live pricing, use the{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      roundup and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>inventory software comparisons</Link>.{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        Best inventory software for small business
                      </Link>{" "}
                      maps common starting tools; pair any rollout with{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      so perpetual books stay trustworthy on the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="periodic-perpetual" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Foundation models most teams recognize.">Periodic vs Perpetual Inventory Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Periodic inventory</strong> updates the ledger at intervals—weekly,
                      monthly, or quarterly—often after a physical count. It is simpler administratively but blind between
                      counts: overselling and emergency buys happen in the gaps.{" "}
                      <strong className="text-[#1A2D48]">Perpetual inventory</strong> adjusts quantity with every receipt,
                      shipment, return, and adjustment, giving operations and finance a continuous on-hand view.
                    </p>
                    <p>
                      Modern SMBs adopt perpetual in software even if finance still values periodic reconciliation.
                      The bridge is disciplined cycle counting—not abandoning counts, but spreading them so perpetual
                      records are validated before variance compounds.
                    </p>
                  </div>
                </section>
                <section id="jit-mrp" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Pull vs production-driven replenishment.">Just-in-Time and MRP-Style Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Just-in-time (JIT)</strong> minimizes stock on hand by aligning
                      inbound deliveries tightly to outbound demand. It reduces carrying cost and obsolescence when
                      suppliers and forecasts cooperate; it amplifies pain when a port delay or viral SKU breaks the
                      rhythm. JIT is a policy choice layered on perpetual records, not a separate ledger technology.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Materials requirements planning (MRP)</strong> starts from a
                      master production schedule and BOM: required components, quantities, and dates roll into planned
                      orders. Distributors rarely need full MRP; assemblers and manufacturers do. Tools like Cin7 and
                      manufacturing-focused stacks add production and purchasing suggestions that approximate classic MRP
                      without requiring a full ERP on day one.
                    </p>
                  </div>
                </section>
                <section id="choosing-mix" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match method to SKU economics.">Choosing the Right Mix for Your Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Classify SKUs by velocity, margin, lead time, and consequence of stockout. Run perpetual tracking
                      everywhere you sell online or across multiple locations. Apply JIT-style ordering only where vendors
                      and MOQs allow. Reserve formal MRP paths for assemblies with multi-level BOMs. Use periodic or ABC
                      cycle counts on C-grade lines instead of pretending one count schedule fits all.
                    </p>
                    <p>
                      Compare platforms once requirements are clear—see{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-channel depth and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      for lighter SMB workflows on the{" "}
                      <Link href="/inventory/guides" className={linkGreen}>inventory guides</Link> hub.
                    </p>
                  </div>
                </section>
                <section id="software-support" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What systems should enforce, not guess.">How Inventory Software Supports Each Type</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Perpetual quantity by location with audit trails on adjustments.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Reorder points, safety stock, and vendor lead times for non-JIT SKUs.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Count workflows and variance reporting for periodic discipline inside a perpetual system.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>BOM, work orders, and planned purchases where MRP-like logic applies.</span>
                      </li>
                    </ul>
                    <p>
                      Validate any vendor claim in a trial with your own SKUs and locations. Editorial picks stay in
                      reviews and roundups so you can match methodology here to current product facts.
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
              <GuideSidebar title="Inventory management types" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "4 Types of Inventory Management Explained | BeltStack Guide",
    description:
      "Learn the four types of inventory management—periodic, perpetual, JIT, and MRP—and how to choose the right approach and software for your business.",
    keywords: [
      "types of inventory management",
      "periodic inventory",
      "perpetual inventory",
      "just in time inventory",
      "mrp inventory",
      "inventory management methods",
    ],
  };
}
