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
    q: "What is cycle counting in inventory management?",
    a: "Cycle counting is counting a subset of stock on a recurring schedule instead of shutting down for one annual full physical count. High-impact or fast-moving SKUs are counted more often; slow movers less often. The goal is to catch drift between system quantities and the floor before it causes stockouts or overselling.",
  },
  {
    q: "How often should a small business cycle count?",
    a: "Frequency depends on SKU count, error rates, and channel risk. Some teams count A-grade SKUs weekly or monthly, B-grade quarterly, and C-grade once or twice a year. Start with your top revenue or highest-shrink lines and expand as the process stabilizes.",
  },
  {
    q: "Can you cycle count without barcode scanners?",
    a: "Yes, but scanners reduce transcription errors and speed recounts. Many SMB inventory apps support mobile scanning; even camera-based scanning beats re-keying counts from paper. If you are spreadsheet-only today, impose strict count sheets and blind counts before updating the master file.",
  },
  {
    q: "What is inventory accuracy and how is it measured?",
    a: "Inventory accuracy compares recorded quantity to physical quantity, often as percent of SKUs or lines that match within tolerance after a count. Track accuracy over time and by location; declining accuracy usually signals process gaps (receiving, returns, picks) rather than only counting frequency.",
  },
  {
    q: "Does inventory software automate cycle counts?",
    a: "Software generates count lists (by ABC class, velocity, or location), records results, adjusts stock, and preserves an audit trail. It does not replace disciplined receiving and picking, but it makes variance visible and shrinks the time from discovery to corrected books.",
  },
];

const RELATED_ITEMS = [
  ...INVENTORY_GUIDE_RELATED_ITEMS,
  { label: "POS Software Hub", href: "/pos" },
  { label: "Ecommerce & inventory guide", href: "/inventory/guides/inventory-software-for-ecommerce" },
];

export default function CycleCountingAndInventoryAccuracyPage() {
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
                      Cycle Counting and Inventory Accuracy
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Cycle Counting and Inventory Accuracy
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How cycle counts, ABC analysis, and disciplined adjustments keep system quantities trustworthy—and how
                    inventory software supports accuracy without a full shutdown count every month.
                  </p>
                  <GuideLastUpdated date="March 29, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Search intent behind “cycle counting” is operational: teams want fewer stockouts, less emergency
                      ordering, and numbers finance can trust. Spreadsheets and periodic “fix everything” counts fight
                      symptoms; cycle counting paired with clean receiving and picking addresses causes. Inventory platforms
                      such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> differ in depth, but all
                      assume you will count, adjust, and audit—not only import a starting quantity once.
                    </p>
                    <p>
                      Use this guide alongside{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and our{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link>. If you sell across
                      channels, read{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      next; retail-heavy teams may also leverage{" "}
                      <Link href="/pos/guides/pos-inventory-integration" className={linkGreen}>POS inventory integration</Link>.
                    </p>
                  </div>
                </section>
                <section id="cycle-count-basics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why incremental beats one giant annual count.">Cycle Counting Basics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A full physical count proves the ledger on one day but hides drift the rest of the year. Cycle counting
                      spreads work across the calendar: each period, you count defined locations or SKU families, investigate
                      variance, and post adjustments. When done consistently, accuracy rises and fire drills fall—especially
                      important if you sell on Shopify, Amazon, and retail simultaneously.
                    </p>
                  </div>
                </section>
                <section id="abc-analysis" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Prioritize effort where errors hurt most.">ABC Analysis and Count Schedules</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">A items</strong> are high value or high velocity—count them most
                      often. <strong className="text-[#1A2D48]">B items</strong> sit in the middle.{" "}
                      <strong className="text-[#1A2D48]">C items</strong> are long-tail SKUs counted less frequently but not
                      never. The classification can be by revenue, margin, picks per month, or criticality to production—pick
                      one rule and keep it stable so schedules are explainable to finance and ops.
                    </p>
                    <p>
                      Software helps by suggesting count batches by class, location, or last counted date. Without that
                      structure, teams naturally count what is easy, not what is risky.
                    </p>
                  </div>
                </section>
                <section id="process-discipline" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where accuracy usually breaks.">Receiving, Moves, and Adjustments</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Most persistent accuracy gaps trace to process, not counting frequency: partial receipts not closed,
                      returns booked to the wrong SKU, or floor moves not recorded. Pair cycle counts with tight receiving
                      verification and clear ownership for adjustments. Your system should keep an audit trail—who changed the
                      quantity, when, and why—so corrections are trustworthy for tax and lending, not only for picking.
                    </p>
                  </div>
                </section>
                <section id="software-role" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to expect from tools, realistically.">What Inventory Software Should Do Here</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Mobile count workflows with optional barcode or QR scanning.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Blind counts so counters are not biased by the expected quantity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Approval or threshold rules before large write-offs post to accounting.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Reporting on accuracy trends and shrink by category or location.</span>
                      </li>
                    </ul>
                    <p>
                      Compare platforms in{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      once your operational requirements are clear.
                    </p>
                  </div>
                </section>
                <section id="reliable-guidance" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why methodology matters in buyer research.">Clear, Practical Guidance</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For experience and trust, validate any vendor claim against a trial using your own SKUs and locations.
                      We aim for transparent, process-first explanations here; product picks and live pricing live in our{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      list and individual reviews so you can match advice to current facts.
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
              <GuideSidebar title="Inventory accuracy" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInventoryResources items={RELATED_ITEMS} excludeHref="/inventory/guides/cycle-counting-and-inventory-accuracy" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Cycle Counting & Inventory Accuracy | BeltStack Guide",
    description:
      "Learn how cycle counting, ABC analysis, and inventory software improve stock accuracy, reduce stockouts, and support reliable financial records.",
  };
}
