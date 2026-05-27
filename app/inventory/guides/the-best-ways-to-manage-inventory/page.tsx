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
    q: "What is the best way to manage inventory for a small business?",
    a: "Combine perpetual quantity tracking, regular cycle counts on high-impact SKUs, and reorder points tied to lead time. Small teams win by keeping one authoritative record—not three spreadsheets—and reviewing stockouts weekly instead of only at year-end.",
  },
  {
    q: "How often should I count inventory?",
    a: "Use ABC-driven cycle counts: A items monthly or weekly, B quarterly, C once or twice yearly. Full wall-to-wall counts may still happen for tax or audit, but cycle counting keeps daily records honest without shutting down operations.",
  },
  {
    q: "Are reorder points enough without forecasting software?",
    a: "Often yes at SMB scale. Reorder point equals average demand during lead time plus safety stock. Simple min-max rules beat no rules; advanced forecasting earns its keep when seasonality, promotions, and long supplier lead times collide.",
  },
  {
    q: "Should I use JIT or keep more safety stock?",
    a: "Just-in-time reduces carrying cost when suppliers are reliable and demand is stable. Safety stock protects service levels when lead times slip or demand spikes. Many businesses hybridize—JIT on predictable C items, buffers on hero SKUs.",
  },
  {
    q: "When does inventory software become necessary?",
    a: "When manual updates cause oversells, stockouts, or hours of reconciliation each week—or when you sell through multiple channels or locations. Software automates the disciplines above; it does not replace deciding target service levels.",
  },
];

const PAGE_HREF = "/inventory/guides/the-best-ways-to-manage-inventory";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheBestWaysToManageInventoryPage() {
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
                      The Best Ways to Manage Inventory
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Best Ways to Manage Inventory
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Practical inventory management practices—cycle counting, reorder points, ABC prioritization, and
                    software habits that keep on-hand records aligned with the shelf.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Good inventory management is less about one magic method and more about consistent disciplines: know
                      what you have, know what you can sell, replenish before stockouts, and count in proportion to business
                      impact. Teams search for best practices when errors become expensive—cancelled orders, emergency
                      freight, or lending conversations that expose unreliable valuation.
                    </p>
                    <p>
                      The best approach stacks complementary tactics. ABC analysis tells you where accuracy matters most;
                      cycle counting keeps those SKUs honest; reorder points translate policy into purchase orders; rotation
                      rules (FIFO or FEFO) protect margin on perishables. Skipping any layer usually shows up as firefighting.
                    </p>
                    <p>
                      Method deep dives live in{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>,{" "}
                      <Link href="/inventory/guides/the-80-20-rule-for-inventory-explained" className={linkGreen}>
                        the 80/20 rule for inventory
                      </Link>, and{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Platform selection is in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>.
                    </p>
                    <p>
                      If spreadsheets are the bottleneck, read why teams upgrade in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>. Tools such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link> automate counts,
                      alerts, and channel sync to varying degrees—match features to the practices below, not vice versa.
                    </p>
                  </div>
                </section>
                <section id="accuracy-first" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Trust the ledger before optimizing it.">Start With Accuracy and Visibility</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      You cannot optimize what you misstate. Establish one system of record—perpetual tracking in software or
                      a rigorously maintained sheet—and define who may adjust quantities. Blind cycle counts on A-class SKUs
                      catch process breaks (returns, receiving shortcuts) before they become company-wide surprises.
                    </p>
                    <p>
                      Measure accuracy by SKU class and location, not only a single annual percentage. When variance clusters
                      on one picker or one supplier, fix the process; when it is random across the catalog, revisit count
                      frequency and whether barcodes are scanned at every touchpoint.
                    </p>
                  </div>
                </section>
                <section id="replenishment-rules" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From policy to purchase orders.">Replenishment, Reorder Points, and Safety Stock</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Document lead time by supplier and SKU—not a global average. Reorder point equals demand during lead time
                      plus safety stock sized to service targets and variability. Min-max bands work for stable C items; A items
                      deserve explicit review when promotions or seasonality shift demand curves.
                    </p>
                    <p>
                      Automate alerts in{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> or{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>Finale Inventory</Link> so
                      buyers react to thresholds instead of gut feel. Pair rules with{" "}
                      <Link href="/inventory/guides/fefo-vs-fifo-whats-the-difference" className={linkGreen}>
                        FEFO vs FIFO
                      </Link>{" "}
                      where expiry or obsolescence risk exists—replenishing fast movers does not help if older lots ship last.
                    </p>
                  </div>
                </section>
                <section id="prioritize-effort" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Focus time where dollars move.">Prioritize With ABC and the 80/20 Rule</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Rank SKUs by revenue, margin dollars, or picks—then allocate count cadence, buyer attention, and safety
                      stock accordingly. The vital few drive most stockouts and most trapped cash; treating every line identically
                      spreads teams thin and hides problems in the tail.
                    </p>
                    <p>
                      ABC is not permission to ignore C items—marketplaces and tax still need reasonable records—but it is
                      permission to stop weekly counts on lines that move twice a year. Full ABC workflow guidance is in{" "}
                      <Link href="/inventory/guides/the-80-20-rule-for-inventory-explained" className={linkGreen}>
                        the 80/20 rule for inventory explained
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="software-habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Make good behavior the default.">Software Habits and Continuous Improvement</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Close loops at the transaction: receive against POs, pick against orders, post adjustments with reasons,
                      and reconcile channel feeds daily when you sell online. Software should enforce those steps—not replace
                      the habit of investigating variances the same week they appear.
                    </p>
                    <p>
                      Review a short KPI pack monthly: fill rate on A SKUs, days of supply on overstock candidates, shrink by
                      category, and aged inventory. Compare platforms in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      when multi-channel depth matters, or browse{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      for curated shortlists by business type.
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
              <GuideSidebar title="Best practices" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Best Ways to Manage Inventory | BeltStack Guide",
    description:
      "Learn the best ways to manage inventory: cycle counting, reorder points, ABC prioritization, FIFO/FEFO, and software habits that improve accuracy and fill rates.",
    keywords: [
      "best way to manage inventory",
      "inventory management best practices",
      "cycle counting inventory",
      "reorder point inventory",
      "ABC inventory management",
      "small business inventory tips",
    ],
  };
}
