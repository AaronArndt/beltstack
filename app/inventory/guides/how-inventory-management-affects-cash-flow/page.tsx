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
    q: "How does inventory affect cash flow?",
    a: "Every dollar tied up in unsold stock is cash not available for payroll, marketing, or debt service. Overbuying, slow-moving SKUs, and long supplier lead times inflate inventory on the balance sheet and depress operating cash until goods sell.",
  },
  {
    q: "What is the link between inventory turnover and cash?",
    a: "Higher turnover generally means less cash parked in stock relative to sales—inventory converts to revenue faster. Turnover that is too aggressive can cause stockouts and lost sales; too slow traps working capital in dead or excess units.",
  },
  {
    q: "Does safety stock hurt cash flow?",
    a: "Safety stock consumes cash by design—it is buffer inventory. The goal is sizing buffers to service targets without overfunding C-class SKUs. Right-sized safety stock prevents emergency freight and lost margin from stockouts.",
  },
  {
    q: "How can inventory software improve cash flow?",
    a: "Software surfaces slow movers, automates reorder logic, and connects to accounting for accurate COGS and average inventory—inputs for turnover and cash conversion metrics. Better visibility reduces surprise overbuys.",
  },
  {
    q: "Should finance and operations share inventory cash metrics?",
    a: "Yes. Finance tracks DIO, turnover, and working capital from the GL; operations owns fill rate and stockouts. Monthly reviews with shared SKU-level reports align lean targets with service levels both teams can defend.",
  },
];

const PAGE_HREF = "/inventory/guides/how-inventory-management-affects-cash-flow";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowInventoryManagementAffectsCashFlowPage() {
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
                      How Inventory Management Affects Cash Flow
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Inventory Management Affects Cash Flow
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Why stock levels directly impact working capital—turnover, safety stock, overbuying risk, and how inventory
                    software and accounting together keep cash from sitting on shelves.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory is cash in another form—units on a shelf or in transit represent dollars your business cannot
                      deploy elsewhere until they sell. Strong inventory management does not mean minimizing stock at all costs;
                      it means holding the right quantities so working capital supports growth instead of hiding in slow movers
                      and emergency overbuys.
                    </p>
                    <p>
                      Finance teams watch days inventory outstanding (DIO) and cash conversion cycle; operations teams watch
                      stockouts and fill rate. When those views diverge, cash suffers—either too much tied up in excess or too
                      little buffer causing lost sales and expedited freight. Shared metrics and SKU-level visibility bridge
                      the gap.
                    </p>
                    <p>
                      Turnover mechanics are in{" "}
                      <Link href="/inventory/guides/inventory-turnover-explained" className={linkGreen}>
                        inventory turnover explained
                      </Link>{" "}
                      with benchmarks in{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what&apos;s a good inventory turnover ratio
                      </Link>. Buffer policy is in{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock explained
                      </Link>. GL and valuation context sits in the{" "}
                      <Link href="/accounting" className={linkGreen}>accounting hub</Link>{" "}
                      plus the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Reporting in{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> helps
                      rank inventory dollars by contribution—pair with your accounting export for turnover trends. Platform reviews
                      are in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="working-capital" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stock on the balance sheet.">Inventory as Working Capital</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      On-hand and in-transit inventory appears as a current asset until COGS is recognized at sale. Larger
                      balances increase working capital needs—often funded by credit lines or delayed vendor payments. Seasonal
                      build-ahead before peak can spike cash use even when sales later recover it.
                    </p>
                    <p>
                      Tie operational decisions to the balance sheet: every discretionary purchase order commits cash weeks or
                      months before customer payment.{" "}
                      <Link href="/accounting" className={linkGreen}>Accounting software</Link>{" "}
                      records the liability and asset; inventory tools show whether the units justify the spend.
                    </p>
                  </div>
                </section>
                <section id="turnover-cash" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Velocity versus service.">Turnover, DIO, and Cash Conversion</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory turnover (COGS ÷ average inventory) and days inventory outstanding (365 ÷ turnover) translate
                      warehouse performance into finance language. Faster turnover frees cash but only if fill rate on A-class SKUs
                      holds—see{" "}
                      <Link href="/inventory/guides/inventory-turnover-explained" className={linkGreen}>
                        inventory turnover explained
                      </Link>{" "}
                      for formulas and{" "}
                      <Link href="/inventory/guides/whats-a-good-inventory-turnover-ratio" className={linkGreen}>
                        what&apos;s a good inventory turnover ratio
                      </Link>{" "}
                      for industry context.
                    </p>
                    <p>
                      ABC classification helps finance and ops agree where lean targets apply versus where buffer is strategic.
                      The{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC method of inventory management
                      </Link>{" "}
                      ranks SKUs so cash reviews focus on high-impact lines first.
                    </p>
                  </div>
                </section>
                <section id="safety-stock-cash" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buffer has a price tag.">Safety Stock and Overbuying Risk</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Safety stock protects service levels against demand and lead-time variability—it also locks cash until those
                      units sell. Oversized buffers on slow movers are a common silent drain; undersized buffers cause stockouts
                      that lose margin and trigger expensive rush orders. Right-sizing is in{" "}
                      <Link href="/inventory/guides/safety-stock-explained" className={linkGreen}>
                        safety stock explained
                      </Link>.
                    </p>
                    <p>
                      Forecast error drives both overbuying and stockouts. Better demand signals in{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting explained
                      </Link>{" "}
                      reduce cash trapped in wrong-SKU bets while protecting hero lines.
                    </p>
                  </div>
                </section>
                <section id="software-and-finance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Align ops data with the GL.">Software, Accounting, and Cash Discipline</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Perpetual inventory systems feed average on-hand and COGS into turnover dashboards; accounting systems record
                      the financial truth for lenders and tax. Integrations between inventory apps and{" "}
                      <Link href="/accounting" className={linkGreen}>accounting platforms</Link>{" "}
                      prevent ops and finance from debating different stock valuations.
                    </p>
                    <p>
                      Monthly SKU reviews should include inventory dollars, turnover trend, and open PO exposure—compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for reporting depth on growing brands, or{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>{" "}
                      when manufacturing WIP affects cash timing.
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
              <GuideSidebar title="Cash & turnover" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How Inventory Management Affects Cash Flow | BeltStack Guide",
    description:
      "Learn how inventory management affects cash flow—working capital, turnover, safety stock, overbuying risk, and aligning inventory software with accounting.",
    keywords: [
      "inventory cash flow",
      "inventory working capital",
      "inventory turnover cash flow",
      "days inventory outstanding",
      "safety stock cash impact",
      "inventory management finance",
    ],
  };
}
