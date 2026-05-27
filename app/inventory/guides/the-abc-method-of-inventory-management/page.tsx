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
    q: "What is the ABC method in inventory management?",
    a: "ABC classification ranks SKUs into A, B, and C groups based on contribution—typically revenue, margin dollars, or pick frequency. A items receive the most control and count attention; C items get lighter treatment. It operationalizes the idea that not every SKU deserves equal effort.",
  },
  {
    q: "How do you calculate ABC classes?",
    a: "List SKUs with annual usage value (unit cost × annual quantity) or your chosen metric. Sort descending, compute cumulative percentage, and assign cutoffs—often top 70–80% cumulative value as A, next 15–25% as B, remainder as C. Document thresholds so teams apply them consistently each review cycle.",
  },
  {
    q: "Should ABC classes use revenue or margin?",
    a: "Revenue is easier to pull from sales data; margin better reflects profit impact when prices vary widely. Pick one primary metric and note exceptions—strategic or regulated SKUs may be class A regardless of rank. Finance and ops should agree before buyers change service targets.",
  },
  {
    q: "How often should ABC classes be updated?",
    a: "Quarterly refresh catches new winners and declining lines; annual minimum for stable catalogs. Major assortment changes, new channels, or supplier shifts warrant an ad hoc reclass. Stale classes misallocate count labor and safety stock.",
  },
  {
    q: "Does inventory software support ABC analysis?",
    a: "Most mid-tier tools tag ABC classes and schedule cycle counts by class. Validate reporting with an export of your SKU curve before purchase—demo tenants rarely match your tail-heavy assortment.",
  },
];

const PAGE_HREF = "/inventory/guides/the-abc-method-of-inventory-management";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function TheAbcMethodOfInventoryManagementPage() {
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
                      The ABC Method of Inventory Management
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The ABC Method of Inventory Management
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How ABC classification ranks SKUs by impact, drives cycle count schedules and service levels, and connects
                    to inventory software that automates class-based control.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The ABC method sorts inventory into three tiers—A, B, and C—so teams invest control where dollars and
                      customer impact concentrate. A SKUs might be 15% of lines but 75% of revenue; C SKUs fill the long tail.
                      Without classification, every part gets the same count cadence and buyer attention, which wastes labor on
                      low-impact lines while heroes drift out of accuracy.
                    </p>
                    <p>
                      ABC is a policy framework, not a one-time spreadsheet. Classes should drive cycle count frequency, reorder
                      review meetings, warehouse slotting, and safety stock targets. When classes sit unused in a column, the
                      method devolves into labeling exercise with no operational payoff.
                    </p>
                    <p>
                      Pair ABC with broader methods context in{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>{" "}
                      and count execution in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Navigate the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>, and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link> for platform fit.
                    </p>
                    <p>
                      Tools such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> support ABC
                      tagging at varying depth. Evaluation frameworks live in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and rankings in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="abc-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Three tiers, one ranking metric.">How ABC Classification Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with a twelve-month window. For each SKU, multiply annual usage by unit cost—or use revenue or gross
                      margin if finance prefers. Sort descending and plot cumulative contribution; the steep early curve defines
                      A-class candidates. Typical policies assign roughly 70–80% cumulative value to A, 15–25% to B, and the
                      remainder to C, but your curve may differ.
                    </p>
                    <p>
                      Write down the ranking metric and cutoff percentages in an inventory policy doc. Ad hoc relabeling each
                      quarter erodes trust between warehouse, buyers, and finance.
                    </p>
                  </div>
                </section>
                <section id="operational-policies" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Classes must change behavior.">Operational Policies by Class</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">A class:</strong> weekly or monthly cycle counts, higher in-stock
                      targets, dedicated pick faces, and priority in supplier negotiations.{" "}
                      <strong className="text-[#1A2D48]">B class:</strong> quarterly counts and standard service levels.{" "}
                      <strong className="text-[#1A2D48]">C class:</strong> semi-annual counts, minimal safety stock unless
                      strategically held, and simpler reorder rules—often min/max or annual buy.
                    </p>
                    <p>
                      Inventory type still matters: a low-value but critical spare part may be class C by dollars yet class A by
                      operational risk. Override rules should be explicit. See{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        different types of inventory explained
                      </Link>{" "}
                      for how raw materials, WIP, and finished goods fit the same ABC lens.
                    </p>
                  </div>
                </section>
                <section id="cycle-counts-abc" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where counting effort belongs.">Cycle Counts Tied to ABC</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The ABC method pays off when count schedules reference class: A SKUs counted frequently enough that
                      accuracy errors cannot accumulate for months. Software can auto-generate count lists by class and track
                      accuracy KPIs per tier—if your team actually closes variances instead of bulk-adjusting.
                    </p>
                    <p>
                      Detailed blind-count workflows, variance thresholds, and root-cause investigation are in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. Trend accuracy by class; rising C-class error rates often signal a receiving or returns process
                      break, not tail noise.
                    </p>
                  </div>
                </section>
                <section id="software-abc" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Automate classification and counts.">Software and ABC Analysis</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export your SKU ranking before buying: run ABC in a spreadsheet, then confirm the tool can import classes
                      or compute them from sales history.{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> offer
                      class-based reporting;{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> suits lighter
                      catalogs with manual class tags.
                    </p>
                    <p>
                      Smaller teams start in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for basic tagging versus{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for automated class reports at scale.
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
              <GuideSidebar title="ABC & methods" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "ABC Method of Inventory Management | BeltStack Guide",
    description:
      "Learn the ABC method for inventory—how to classify SKUs, set count schedules and service levels by class, and use software for ABC analysis.",
    keywords: [
      "ABC method inventory",
      "ABC analysis inventory",
      "inventory classification",
      "ABC cycle counting",
      "SKU prioritization",
      "inventory control classes",
    ],
  };
}
