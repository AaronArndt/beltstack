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
    q: "How do small businesses track inventory without expensive software?",
    a: "Start with a single source of truth—spreadsheet or lightweight app—and barcode or SKU discipline at receive and ship. Reorder points, periodic counts, and one person accountable for adjustments beat fancy features nobody uses.",
  },
  {
    q: "When should a small business upgrade from Excel?",
    a: "Upgrade when multiple people edit the sheet, channel oversells happen, or counts take more than a few hours monthly. Duplicate rows, broken formulas, and version chaos are the usual breaking points—see our Excel inventory guide for signals.",
  },
  {
    q: "What inventory features do small businesses need most?",
    a: "Item masters, receive and adjust workflows, low-stock alerts, basic reporting, and accounting or POS integration. Multi-warehouse and manufacturing BOMs matter only when those operations exist—do not pay for shelfware.",
  },
  {
    q: "Is free inventory software enough for a small shop?",
    a: "Free tiers work for very small catalogs and single locations until you hit user limits, missing integrations, or manual export workarounds. Compare total cost—including labor—against paid plans in our free vs paid guide.",
  },
  {
    q: "How often should small businesses count inventory?",
    a: "Cycle-count top sellers monthly; full physical counts once or twice yearly for tax and lending. Even five-person teams benefit from a simple count calendar tied to their highest-revenue SKUs.",
  },
];

const PAGE_HREF = "/inventory/guides/how-small-businesses-manage-inventory";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowSmallBusinessesManageInventoryPage() {
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
                      How Small Businesses Manage Inventory
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Small Businesses Manage Inventory
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Practical inventory habits for small teams—from first spreadsheet to paid software—with links to platform
                    picks, Excel limits, free vs paid tradeoffs, and simple tracking methods.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses manage inventory with constrained time and no dedicated warehouse manager. The workable
                      pattern is narrow: one list of SKUs, one place quantities update, reorder triggers someone actually
                      checks, and counts scheduled before year-end panic. Fancy optimization waits until basics hold—otherwise
                      software becomes another shelf nobody opens.
                    </p>
                    <p>
                      Most shops start in Excel or a notebook, graduate to a phone-friendly app when oversells or duplicate
                      sheets appear, and only then evaluate integrations with QuickBooks, Shopify, or Square. The goal is not
                      enterprise WMS—it is knowing what you can sell today without calling the stockroom.
                    </p>
                    <p>
                      Platform direction lives in{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>. Spreadsheet limits are in{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>; budget framing in{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory software
                      </Link>; and lightweight methods in{" "}
                      <Link href="/inventory/guides/the-easiest-ways-to-track-inventory" className={linkGreen}>
                        the easiest ways to track inventory
                      </Link>. Hub links:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Popular SMB picks include{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link>,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>inFlow</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>—compare
                      depth in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link> before
                      committing.
                    </p>
                  </div>
                </section>
                <section id="starting-simple" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One list, one owner, one rhythm.">Starting Simple: Lists, Labels, and Counts</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define SKUs with consistent naming, note default suppliers and lead times, and label bins or shelves so
                      anyone can find stock. Receive against purchase orders or packing slips; ship with a quantity decrement—
                      even manual—so on-hand moves with reality.
                    </p>
                    <p>
                      Our{" "}
                      <Link href="/inventory/guides/the-easiest-ways-to-track-inventory" className={linkGreen}>
                        easiest ways to track inventory
                      </Link>{" "}
                      guide covers barcode stickers, min/max sticky notes, and weekly top-SKU counts that fit a ten-hour ops
                      week.
                    </p>
                  </div>
                </section>
                <section id="excel-ceiling" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When spreadsheets stop scaling.">Excel and the Upgrade Trigger</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Excel works for static catalogs and solo operators. It fails when multiple editors create version forks,
                      formulas break on copied rows, or ecommerce channels need live quantity feeds. Those failure modes cost
                      sales and audit credibility faster than subscription fees.
                    </p>
                    <p>
                      Read{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>{" "}
                      for an honest ceiling assessment—migrate item masters once, not SKU-by-SKU under deadline pressure.
                    </p>
                  </div>
                </section>
                <section id="free-vs-paid" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Subscription math for tiny teams.">Free vs Paid Tools for Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free plans cap users, locations, or integrations; paid tiers unlock automation that saves clerk hours.
                      Calculate cost as software fee plus labor—if exports and manual channel updates eat three hours weekly,
                      a modest paid plan often wins.
                    </p>
                    <p>
                      The{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory software
                      </Link>{" "}
                      guide compares upgrade triggers. Shortlist vendors from{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      and trial with your actual SKU export.
                    </p>
                  </div>
                </section>
                <section id="software-habits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Make the tool part of the day.">Software Habits That Stick</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buying software without habit change recreates spreadsheet chaos in a prettier UI. Assign one inventory
                      owner, scan at receive, review low-stock alerts weekly, and reconcile POS or marketplace sales daily.
                      Integrations with accounting reduce double entry—the main reason SMB teams abandon new tools.
                    </p>
                    <p>
                      Evaluate fit with{" "}
                      <Link href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")} className={linkGreen}>
                        inFlow vs Zoho Inventory
                      </Link>{" "}
                      or{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow
                      </Link>{" "}
                      using your catalog size and channel mix—not demo defaults alone.
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
              <GuideSidebar title="SMB inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How Small Businesses Manage Inventory | BeltStack Guide",
    description:
      "How small businesses manage inventory—from spreadsheets to software—with practical tracking habits, upgrade signals, and links to SMB platform picks.",
    keywords: [
      "small business inventory management",
      "how to track inventory small business",
      "inventory for small business",
      "SMB inventory software",
      "small business stock control",
      "inventory tracking methods",
    ],
  };
}
