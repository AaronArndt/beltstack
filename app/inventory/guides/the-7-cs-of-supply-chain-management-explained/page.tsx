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

const PAGE_HREF = "/inventory/guides/the-7-cs-of-supply-chain-management-explained";

const FAQ_ITEMS = [
  {
    q: "What are the 7 Cs of supply chain management?",
    a: "The seven Cs are commonly cash, cost, consistency, control, customer, communication, and commitment (sometimes credit). They describe financial, operational, and relational health across suppliers, inventory, logistics, and customers—not a software feature list.",
  },
  {
    q: "How do the 7 Cs differ from the 5 Rs of inventory?",
    a: "The five Rs focus on execution inside the warehouse and order promise (product, place, time, quantity, condition). The seven Cs span the whole chain—working capital, total landed cost, service levels, governance, customer experience, information flow, and partner reliability.",
  },
  {
    q: "Which C matters most for inventory teams?",
    a: "Cash and cost collide daily with service: carrying too much stock ties up cash; too little breaks consistency for customers. Control and communication determine whether planners trust ATP numbers and whether suppliers hear forecast changes early enough.",
  },
  {
    q: "Do I need SCM software to apply the 7 Cs?",
    a: "Not on day one. SMBs can score each C in quarterly reviews with spreadsheet KPIs. SCM platforms earn their keep when multiple nodes, long lead times, and supplier networks make manual coordination error-prone—see our SCM software primer for scope.",
  },
  {
    q: "Can inventory management software improve the 7 Cs?",
    a: "Yes for control, consistency, and communication: accurate stock, reorder discipline, and integration to sales and purchasing channels. Enterprise SCM adds network planning; inventory tools are often the operational backbone SMBs run while complexity grows.",
  },
];

const RELATED_ITEMS = [...INVENTORY_GUIDE_RELATED_ITEMS];

export default function The7CsOfSupplyChainManagementExplainedPage() {
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
                      The 7 Cs of Supply Chain Management Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The 7 Cs of Supply Chain Management Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Cash, cost, consistency, control, customer, communication, and commitment—the seven Cs framework for
                    evaluating supply chain health and how inventory systems support each pillar.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Supply chain management is more than warehouse tasks. The seven Cs give owners and planners a
                      balanced scorecard: financial pressure (cash and cost), operational reliability (consistency and
                      control), market outcomes (customer), and partner behavior (communication and commitment). Inventory
                      sits at the center—every C touches what you buy, store, and ship.
                    </p>
                    <p>
                      Inventory software such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> strengthens control and
                      consistency with location-level stock, integrations, and audit trails. Broader network planning—multi-node
                      positioning, supplier collaboration—lives in SCM platforms; our{" "}
                      <Link href="/field-service/guides/what-is-scm-software" className={linkGreen}>
                        what is SCM software
                      </Link>{" "}
                      guide explains that layer without conflating it with day-to-day inventory tools.
                    </p>
                    <p>
                      If you are optimizing stock inside one business, start on the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link> and{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>.{" "}
                      Ecommerce and manufacturing contexts add channel and BOM complexity—see{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>.
                    </p>
                    <p>
                      Compare vendors via{" "}
                      <Link href="/inventory/compare" className={linkGreen}>inventory compare</Link> and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.{" "}
                      Smaller teams can anchor on{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and keep quantities honest with{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      practices on the{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="financial-cs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Working capital and total landed cost.">Cash and Cost</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Cash</strong> asks how much capital inventory ties up and how
                      fast it turns. Slow movers, oversized MOQs, and blanket safety stock are silent cash drains.{" "}
                      <strong className="text-[#1A2D48]">Cost</strong> includes purchase price, freight, duties, shrink,
                      obsolescence, and the labor to receive and count—not only unit cost on the PO.
                    </p>
                    <p>
                      Inventory reporting by age, category, and channel helps finance and ops negotiate the trade-off
                      between service and working capital instead of arguing from gut feel alone.
                    </p>
                  </div>
                </section>
                <section id="operational-cs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Predictable execution and trustworthy data.">Consistency and Control</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Consistency</strong> is stable fill rates and lead times customers
                      can plan around. <strong className="text-[#1A2D48]">Control</strong> is governance: who can adjust
                      stock, how receipts close, and how variances are investigated. Weak control shows up as phantom
                      inventory and channels that disagree on available quantity.
                    </p>
                    <p>
                      Perpetual records plus cycle counts are the operational minimum for both Cs. Without them, SCM
                      initiatives upstream inherit bad ATP inputs downstream.
                    </p>
                  </div>
                </section>
                <section id="relational-cs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Market outcomes and partner behavior.">Customer, Communication, and Commitment</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Customer</strong> translates chain performance into OTIF,
                      backorders, and return rates. <strong className="text-[#1A2D48]">Communication</strong> is shared
                      forecasts, ASN accuracy, and exception alerts—not email archaeology.{" "}
                      <strong className="text-[#1A2D48]">Commitment</strong> is whether suppliers and 3PLs honor
                      capacity and date promises when demand spikes.
                    </p>
                    <p>
                      When networks grow beyond a single warehouse, SCM tooling coordinates plans across nodes; until
                      then, tight purchasing discipline inside inventory software often delivers most of the customer-facing
                      win.
                    </p>
                  </div>
                </section>
                <section id="inventory-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where inventory software fits the scorecard.">Inventory Software Across the 7 Cs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Velocity and aging reports for cash and cost conversations.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Reorder points, safety stock, and vendor lead times for consistency.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Roles, approvals, and audit trails for control.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Integrations to sales and purchasing for communication with the rest of the stack.</span>
                      </li>
                    </ul>
                    <p>
                      Evaluate{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      when multi-channel consistency matters most, and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      for lighter operations still maturing on the seven Cs.
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
              <GuideSidebar title="Supply chain & inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "The 7 Cs of Supply Chain Management | BeltStack Guide",
    description:
      "Learn the seven Cs of supply chain management—cash, cost, consistency, control, customer, communication, and commitment—and how inventory software supports each.",
    keywords: [
      "7 cs of supply chain management",
      "supply chain management framework",
      "inventory working capital",
      "scm vs inventory software",
      "supply chain consistency",
      "inventory control",
    ],
  };
}
