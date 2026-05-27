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
    q: "What is the 80/20 rule in inventory?",
    a: "The Pareto principle applied to stock: roughly 20% of SKUs often drive about 80% of revenue, margin, or pick volume. Operations should prioritize accuracy, service levels, and counts on that vital few rather than treating every SKU identically.",
  },
  {
    q: "Is the 80/20 rule the same as ABC analysis?",
    a: "ABC analysis formalizes the 80/20 idea into A, B, and C classes with defined count and review policies. The ratio is a heuristic—not a law—your data may show 70/30 or 90/10; use classes to allocate effort, not to debate math.",
  },
  {
    q: "How do I find my A items?",
    a: "Rank SKUs by annual revenue, gross margin dollars, or picks per month over the last twelve months. Plot cumulative contribution; the steep knee in the curve suggests A-class cutoffs. Reclassify quarterly as assortment changes.",
  },
  {
    q: "Should I stock more of A items?",
    a: "Usually you protect A items with higher service targets and tighter count schedules—not blindly higher quantity. Overstocking A SKUs ties cash; under-stocking loses sales. Reorder points and safety stock should reflect lead time and demand variability per class.",
  },
  {
    q: "Can inventory software apply the 80/20 rule?",
    a: "Yes. Tools tag ABC classes, schedule cycle counts by class, and surface reports on contribution versus on-hand investment. Software does not replace the policy conversation—finance and ops must agree on the ranking metric.",
  },
];

const PAGE_HREF = "/inventory/guides/the-80-20-rule-for-inventory-explained";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function The8020RuleForInventoryExplainedPage() {
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
                      The 80/20 Rule for Inventory Explained
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The 80/20 Rule for Inventory Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How the Pareto principle applies to SKUs—prioritizing the vital few, linking to ABC analysis, cycle
                    counting, and inventory software that turns insight into schedules.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The 80/20 rule (Pareto principle) in inventory means a minority of SKUs drive most business impact—sales,
                      margin dollars, or warehouse touches. Teams adopt it when they cannot give every part equal attention:
                      count cadence, buyer time, and safety stock should skew toward lines where errors or stockouts hurt most.
                    </p>
                    <p>
                      The rule is a prioritization lens, not permission to ignore long-tail SKUs entirely. C-class items still
                      need accurate records for tax, lending, and marketplace listings; they simply receive lighter count
                      frequency and simpler reorder rules. Confusing “low priority” with “no process” is how dead stock and
                      phantom quantities accumulate in the tail.
                    </p>
                    <p>
                      Operationalize 80/20 through ABC analysis and cycle counting. Our{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      guide shows how A/B/C classes drive count schedules. Broader methods context sits in{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>. Platform fit is in the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Inventory apps such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link> vary in ABC tagging and
                      reporting depth—validate with your SKU export before buying. Reviews and live pricing stay in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="pareto-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Vital few versus useful many.">Pareto Basics for Stock</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Italian economist Vilfredo Pareto observed uneven distribution; inventory teams reuse the pattern because
                      it matches reality in catalogs with thousands of slow movers and a handful of heroes. Plot cumulative
                      revenue or margin contribution by SKU—you will usually see a steep early curve flattening into a long tail.
                    </p>
                    <p>
                      Use the insight to allocate human attention: buyers negotiate A suppliers first, warehouse leads slot A
                      pick faces nearest pack stations, and finance scrutinizes A valuation during audits.
                    </p>
                  </div>
                </section>
                <section id="abc-analysis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turning 80/20 into policy.">ABC Analysis in Practice</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">A class</strong> might be top 10–20% of SKUs contributing ~70–80% of
                      target metric. <strong className="text-[#1A2D48]">B class</strong> is the middle band.{" "}
                      <strong className="text-[#1A2D48]">C class</strong> is the long tail. Cutoffs are policy choices—document
                      whether you rank by revenue, margin, or picks so teams do not relabel SKUs ad hoc each quarter.
                    </p>
                    <p>
                      Pair classes with service targets: higher in-stock goals for A, standard for B, minimal for C unless
                      strategically stocked. Reorder points and safety stock formulas should ingest class, not only average demand.
                    </p>
                  </div>
                </section>
                <section id="cycle-counts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where accuracy effort should land.">Cycle Counts and the Vital Few</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Count A SKUs frequently (weekly or monthly), B on a quarterly rhythm, C once or twice yearly unless shrink
                      signals say otherwise. That schedule is the operational payoff of 80/20—without it, classification is only
                      a spreadsheet exercise.
                    </p>
                    <p>
                      Full walkthrough of blind counts, variance investigation, and software features lives in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Accuracy metrics should trend by class; if C-class error rates spike, a process break (returns,
                      receiving) may be masquerading as tail noise.
                    </p>
                  </div>
                </section>
                <section id="software-and-cash" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Invest working capital wisely.">Software, Reporting, and Working Capital</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Rank SKUs by inventory dollars tied up versus contribution—80/20 often reveals cash trapped in C-class
                      overbuys while A items stock out. Reports in{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> or{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link> help; simpler teams
                      export from any system and pivot in spreadsheets until ready to automate.
                    </p>
                    <p>
                      When evaluating tools, compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for light ABC needs versus{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for multi-channel depth—always test with your own SKU curve, not demo data alone.
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
              <GuideSidebar title="ABC & accuracy" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "80/20 Rule for Inventory Explained | BeltStack Guide",
    description:
      "Learn how the 80/20 Pareto rule applies to inventory, ABC analysis, cycle counting priorities, and using software to focus on high-impact SKUs.",
    keywords: [
      "80/20 rule inventory",
      "Pareto inventory",
      "ABC analysis",
      "inventory prioritization",
      "cycle counting ABC",
      "vital few SKUs",
    ],
  };
}
