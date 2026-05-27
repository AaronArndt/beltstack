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
    q: "What is the Pareto principle in inventory management?",
    a: "It states that a small share of causes often produces a large share of effects—in inventory, a minority of SKUs may drive most revenue, margin, picks, or shrink exposure. Teams use it to allocate counting effort, buyer time, and safety stock toward high-impact lines.",
  },
  {
    q: "Is the Pareto principle the same as the 80/20 rule?",
    a: "The 80/20 rule is a popular shorthand for Pareto distributions; real data may show 70/30 or 90/10. The principle is the uneven pattern; the exact ratio is empirical. BeltStack’s 80/20 inventory guide walks the numeric rule; this page focuses on applying Pareto thinking broadly.",
  },
  {
    q: "How do you apply Pareto to warehouse operations?",
    a: "Slot fast movers near pack stations, schedule more frequent counts on high-impact SKUs, and route exception reports toward lines where a unit error costs the most. Do not neglect tail SKUs—light process still beats zero control.",
  },
  {
    q: "Can Pareto analysis reduce inventory carrying cost?",
    a: "Yes, when you pair contribution ranking with dollars tied up in stock. Often cash sits in low-impact C items while A items stock out. Pareto dashboards highlight where to trim overbuys without cutting service on winners.",
  },
  {
    q: "Which inventory metrics work best for Pareto ranking?",
    a: "Annual revenue, gross margin dollars, pick lines per month, and inventory value at risk are common. Pick one primary metric per policy cycle; mixing metrics without rules invites political relabeling each quarter.",
  },
];

const PAGE_HREF = "/inventory/guides/the-pareto-principle-in-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheParetoPrincipleInInventoryManagementPage() {
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
                      The Pareto Principle in Inventory Management
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Pareto Principle in Inventory Management
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How uneven SKU impact shapes counting, buying, and slotting—beyond the 80/20 shorthand, with links to ABC
                    methods, cycle counts, and inventory software that surfaces the vital few.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The Pareto principle describes skewed distributions: roughly 20% of inputs often account for roughly 80% of
                      outcomes, though your catalog may differ. In inventory, that skew appears in revenue concentration, pick
                      volume, shrink dollars, and working capital trapped in slow movers. The insight is strategic—focus scarce
                      attention where mistakes cost most.
                    </p>
                    <p>
                      Pareto is broader than the 80/20 inventory rule alone. The dedicated{" "}
                      <Link href="/inventory/guides/the-80-20-rule-for-inventory-explained" className={linkGreen}>
                        80/20 rule for inventory explained
                      </Link>{" "}
                      guide covers the classic ratio, ABC cutoffs, and count cadence. This page emphasizes Pareto as a mindset for
                      ranking SKUs, designing processes, and reading reports—whether your curve is 70/30 or 90/10.
                    </p>
                    <p>
                      Turn Pareto curves into policy via ABC classification and cycle counting in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      and method context in{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>. Hub links:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Reporting depth varies:{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> expose contribution
                      and aging differently. Evaluate via{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="pareto-mindset" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Uneven impact is normal.">Pareto as an Operating Mindset</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Vilfredo Pareto observed wealth concentration; inventory teams reuse the pattern because thousand-SKU
                      catalogs almost always have a steep cumulative curve. Plot contribution by SKU—you will see a knee where
                      additional lines add little incremental value. That knee informs class boundaries and executive dashboards.
                    </p>
                    <p>
                      Treat Pareto as prioritization, not neglect. C-class tail still needs receiving discipline, returns handling,
                      and periodic counts—just lighter than A-class heroes where a five-unit variance can mean a lost key account.
                    </p>
                  </div>
                </section>
                <section id="ranking-metrics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choose one primary lens.">Ranking SKUs by Impact</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Revenue ranking is accessible; margin dollars better reflect profit when prices vary; pick frequency suits
                      warehouse labor planning; inventory dollars at risk highlights carrying cost. Document the metric in policy so
                      buyers and ops do not relabel SKUs informally each month.
                    </p>
                    <p>
                      Segment by inventory type when curves differ—raw materials versus finished goods carry different risk profiles,
                      described in{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        different types of inventory explained
                      </Link>. A low-dollar MRO part can be Pareto-critical if downtime is expensive.
                    </p>
                  </div>
                </section>
                <section id="abc-and-counts" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From curve to calendar.">ABC Classes and Count Schedules</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      ABC analysis formalizes Pareto into A, B, and C tiers with defined service targets and count frequency. A SKUs
                      might be counted weekly or monthly; C SKUs semi-annually unless shrink signals escalate them. Without calendars,
                      Pareto charts become wall art.
                    </p>
                    <p>
                      For the numeric 80/20 walkthrough and cutoff examples, see{" "}
                      <Link href="/inventory/guides/the-80-20-rule-for-inventory-explained" className={linkGreen}>
                        the 80/20 rule for inventory explained
                      </Link>. Operational count mechanics are in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="software-pareto" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Dashboards and working capital.">Software, Reports, and Cash</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export twelve months of sales and on-hand value; build a cumulative contribution chart before trusting vendor
                      ABC widgets.{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> support
                      class tags and aging;{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> suits manual classing
                      on smaller catalogs.
                    </p>
                    <p>
                      SMB teams compare{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and head-to-heads like{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      with their own Pareto curve—not generic demo assortments.
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
              <GuideSidebar title="Pareto & ABC" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Pareto Principle in Inventory Management | BeltStack Guide",
    description:
      "Apply the Pareto principle to inventory—rank high-impact SKUs, link to 80/20 and ABC analysis, cycle counting, and software that focuses effort on the vital few.",
    keywords: [
      "Pareto principle inventory",
      "Pareto inventory management",
      "vital few SKUs",
      "ABC analysis Pareto",
      "inventory prioritization",
      "SKU contribution ranking",
    ],
  };
}
