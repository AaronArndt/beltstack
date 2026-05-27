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
    q: "What should an inventory checklist include?",
    a: "Receiving verification, labeling, put-away location, pick/pack confirmation, count steps, variance thresholds, and adjustment approval. Tailor sections to your operation—ecommerce adds channel sync checks; manufacturing adds WIP and BOM picks.",
  },
  {
    q: "How is an inventory checklist different from a cycle count?",
    a: "A checklist is the repeatable task list for a process (daily receiving, weekly count route). A cycle count is a specific accuracy program that samples SKUs on a schedule. Checklists execute counts; they do not replace ABC class policies.",
  },
  {
    q: "Should checklists be paper or digital?",
    a: "Digital checklists in inventory software enforce sequence, capture timestamps, and prevent skipping steps. Paper works for micro teams but drifts when volume grows. Barcode scan checkpoints reduce transcription errors either way.",
  },
  {
    q: "How often should I update inventory checklists?",
    a: "Review quarterly or after process changes—new warehouse, new sales channel, or repeated variances on one step. Stale checklists that teams bypass are worse than none; involve floor leads in revisions so steps stay realistic.",
  },
  {
    q: "Can small businesses use a simple inventory checklist?",
    a: "Yes. Start with one-page receiving and monthly count checklists, then expand. Pair with lightweight software covered in our best inventory software for small business guide when SKU count or locations multiply.",
  },
];

const PAGE_HREF = "/inventory/guides/how-to-create-an-inventory-checklist";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowToCreateAnInventoryChecklistPage() {
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
                      How to Create an Inventory Checklist
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Create an Inventory Checklist
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Build receiving, storage, count, and fulfillment checklists that reduce errors—aligned with cycle counting,
                    inventory types, methods, and software your team will actually follow.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      An inventory checklist turns tribal knowledge into repeatable steps: what to verify when freight arrives, how
                      to label and slot product, what pickers confirm before ship, and how counters record variances. Good checklists
                      are short, ordered, and owned—one page per process beats a fifty-line manual nobody opens.
                    </p>
                    <p>
                      Checklists complement software; they do not replace perpetual records. They catch the human moments—damaged
                      cartons, wrong bin, skipped scan—where systems still depend on discipline. When a step fails repeatedly, fix
                      the process or the checklist; do not only bulk-adjust inventory.
                    </p>
                    <p>
                      Tie count checklists to ABC schedules in{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>{" "}
                      and method context in{" "}
                      <Link href="/inventory/guides/the-most-popular-inventory-management-methods" className={linkGreen}>
                        popular inventory management methods
                      </Link>. Hub navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Digital checklists live in{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> via receiving workflows, mobile
                      picks, and count modules. Evaluate tools in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="define-scope" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One process per checklist.">Define Scope and Owners</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Split by workflow: daily receiving, put-away, pick/pack, returns, and cycle count routes each deserve their own
                      checklist. Name an owner who updates the list when the floor changes—buyers for receiving rules, warehouse lead
                      for pick verification, finance for adjustment approval thresholds.
                    </p>
                    <p>
                      List prerequisites at the top: PO number, barcode scanner charged, count sheets generated. End with sign-off:
                      who posts the transaction and who reviews variances above your dollar or quantity cap.
                    </p>
                  </div>
                </section>
                <section id="receiving-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stop errors at the dock.">Receiving and Put-Away Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Typical steps: match carton count to PO, inspect damage, verify SKU and unit of measure, print labels, scan into
                      receiving, assign bin location, and post before close of business. Add lot or expiry capture for regulated or
                      perishable goods—inventory type dictates extra fields in{" "}
                      <Link href="/inventory/guides/the-different-types-of-inventory-explained" className={linkGreen}>
                        different types of inventory explained
                      </Link>.
                    </p>
                    <p>
                      Include a “quarantine” branch for discrepancies: hold stock, notify buyer, do not put away until resolved.
                      Skipping this branch is how phantom inventory enters step four.
                    </p>
                  </div>
                </section>
                <section id="count-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Blind counts and variance rules.">Cycle Count Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Count steps: generate route by ABC class, print or load blind count (no system qty visible), scan location,
                      enter quantity, investigate variances before adjusting, and log root cause. Set thresholds— for example recount
                      if off by more than two units or $50—and escalate chronic locations.
                    </p>
                    <p>
                      Align routes with class frequency from{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>. A-class weekly, B quarterly, C semi-annual is a starting template; tune to your shrink history.
                    </p>
                  </div>
                </section>
                <section id="software-checklists" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Digitize steps your team skips.">Software, Mobile, and Adoption</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mobile barcode workflows enforce sequence better than laminated paper. Test whether{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link> or{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link> matches your
                      checklist steps in a pilot week; multi-location teams may need{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link> depth.
                    </p>
                    <p>
                      SMB rollout guidance is in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>. Compare{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      for asset-light checklists versus full receive-to-ship modules. Train on one checklist until adherence is
                      habitual before adding the next—adoption beats comprehensiveness.
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
              <GuideSidebar title="Checklists & counts" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How to Create an Inventory Checklist | BeltStack Guide",
    description:
      "Create inventory checklists for receiving, put-away, picking, and cycle counts—with ABC schedules, accuracy practices, and software that digitizes workflows.",
    keywords: [
      "inventory checklist",
      "warehouse checklist template",
      "receiving checklist inventory",
      "cycle count checklist",
      "inventory control checklist",
      "stock count procedure",
    ],
  };
}
