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
    q: "When should a small business move from spreadsheets to inventory software?",
    a: "Most small businesses should consider inventory software once they regularly lose track of what’s in stock, frequently oversell or stock out, or spend too much time reconciling spreadsheets with reality. If you sell through more than one channel, carry many SKUs, or have multiple locations, a dedicated tool usually pays for itself quickly.",
  },
  {
    q: "What is the best inventory software for very small teams?",
    a: "For very small teams that mainly need to know what they have and where it is, Sortly is often the easiest starting point. If you also need stronger purchasing, selling, and reporting, inFlow Inventory or Zoho Inventory are usually better long-term fits.",
  },
  {
    q: "Do small businesses need multi-channel inventory tools?",
    a: "If you only sell through one store or channel, you may not need heavy multi-channel features. But once you sell through multiple online stores, marketplaces, or a mix of ecommerce and retail, a tool like Zoho Inventory or Cin7 that can keep stock in sync across channels becomes much more important.",
  },
  {
    q: "Can inventory software integrate with accounting and ecommerce?",
    a: "Yes. Most modern inventory tools integrate with accounting platforms like QuickBooks or Xero and with major ecommerce platforms and marketplaces. Zoho Inventory is especially strong inside the Zoho ecosystem; Cin7, Katana, Unleashed, and Finale Inventory also focus heavily on integrations for larger, more complex operations.",
  },
];

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function BestInventorySoftwareForSmallBusinessGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            {/* ——— Article content ——— */}
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                {/* ——— Breadcrumb ——— */}
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li>
                      <Link
                        href="/"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Home
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/inventory"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Inventory Management
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link
                        href="/inventory/guides"
                        className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"
                      >
                        Guides
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">
                      Best Inventory Software for Small Business
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best Inventory Software for Small Business
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    Learn why small businesses move beyond spreadsheets, which inventory tools are best for simple stock
                    tracking and reordering, and how to choose software that fits your size, channels, and budget.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many small businesses start by tracking inventory in spreadsheets or on clipboards. That works for a
                      while—but as orders increase, channels multiply, or more people touch stock, the system breaks.
                      Counts drift from reality, reorders happen too late, and it becomes hard to answer basic questions
                      like “What do we actually have on the shelf?” or “Can we ship this order today?”.
                    </p>
                    <p>
                      The good news is that small businesses don&apos;t need enterprise-level software to fix this. Modern
                      inventory tools like{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                        Zoho Inventory
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>
                        inFlow Inventory
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>
                        Sortly
                      </Link>{" "}
                      are designed for smaller teams that want simple, reliable stock tracking, reordering, and basic
                      reporting—without committing to a full ERP. This guide walks through what to look for and which tools
                      fit common small-business scenarios.
                    </p>
                    <p>
                      For a ranked list of options, see our{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory management software
                      </Link>{" "}
                      roundup. If you want to compare specific tools head-to-head, visit our{" "}
                      <Link href="/inventory/compare" className={linkGreen}>
                        inventory software comparisons
                      </Link>
                      , including{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link
                        href={getInventoryCompareUrl("inflow-inventory-vs-zoho-inventory")}
                        className={linkGreen}
                      >
                        inFlow Inventory vs Zoho Inventory
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— Key takeaways ——— */}
                <section
                  id="key-takeaways"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Quick summary before you dive in.">Key takeaways</SectionTitle>
                  <div className="space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Move off spreadsheets once errors are common.</strong>{" "}
                          If you regularly oversell, lose items, or spend hours reconciling counts, inventory software is
                          overdue—even if your team is still small.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">
                            Start with simple tools, then grow into more power.
                          </strong>{" "}
                          Sortly is great for very simple, visual tracking; inFlow Inventory and Zoho Inventory add more
                          structure for purchasing, selling, and reporting.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Integrations and ecosystem matter more over time.</strong>{" "}
                          A tool that plays nicely with your{" "}
                          <Link href="/accounting" className={linkGreen}>
                            accounting
                          </Link>{" "}
                          and ecommerce stack will be easier to live with as you scale.
                        </span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* ——— Why small businesses outgrow spreadsheets ——— */}
                <section
                  id="why-small-businesses-outgrow-spreadsheets"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Common pain points that push teams to inventory software.">
                    Why small businesses outgrow spreadsheets
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Spreadsheets are flexible and cheap, but they break down once more than one person is updating them
                      or once orders pick up. Common failure modes include:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Duplicate or stale data</strong> — Multiple copies of the same
                          sheet float around in email or shared drives; nobody is sure which one is current.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Slow counts and updates</strong> — Cycle counts or receiving
                          updates require manual edits, which are easy to skip when things are busy.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">No clear “available to sell” number</strong> — Spreadsheets
                          rarely distinguish between on-hand, committed, and available quantities, so overselling happens
                          more often as order volume grows.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Inventory software like Zoho Inventory or inFlow replaces these ad hoc processes with a single
                      system of record for products, stock levels, and orders—often with{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        pricing
                      </Link>{" "}
                      that still works for small teams.
                    </p>
                  </div>
                </section>

                {/* ——— Recommended tools for small business ——— */}
                <section
                  id="recommended-tools"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Where most small businesses should start.">
                    Recommended inventory tools for small business
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Our full{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory software
                      </Link>{" "}
                      roundup covers more options, but most small businesses can start their shortlist with:
                    </p>
                    <ul className="space-y-3 list-none">
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                            Zoho Inventory
                          </Link>{" "}
                          — best overall for most SMBs
                        </strong>
                        <p className="mt-1">
                          A well-rounded option that balances features and price. Good if you want purchasing, sales,
                          basic warehouse tools, and integrations with accounting and ecommerce—especially if you
                          already use Zoho apps.
                        </p>
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>
                            inFlow Inventory
                          </Link>{" "}
                          — best for straightforward small-business tracking
                        </strong>
                        <p className="mt-1">
                          Focused on core inventory, purchasing, and selling workflows. A strong choice if you want a
                          practical step up from spreadsheets without diving into multi-channel or manufacturing
                          complexity.
                        </p>
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>
                            Sortly
                          </Link>{" "}
                          — best for simple, visual tracking
                        </strong>
                        <p className="mt-1">
                          Ideal when your main problem is “what do we have and where is it?”, not full purchase/sales
                          workflows. Great for offices, vehicles, and small stockrooms where photos and barcodes beat
                          complex screens.
                        </p>
                      </li>
                    </ul>
                    <p>
                      If you&apos;re already running into{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        multi-channel complexity
                      </Link>{" "}
                      or light{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>
                        manufacturing needs
                      </Link>
                      , you may also want to read about{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>
                        Cin7
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>
                        Katana
                      </Link>
                      , or{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>
                        Unleashed
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— How to choose as a small business ——— */}
                <section
                  id="how-to-choose"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="A lightweight framework for picking a tool.">
                    How to choose inventory software as a small business
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For small teams, the goal is not to find the “perfect” system—it&apos;s to pick something your team
                      will actually use that materially reduces stockouts, overselling, and time spent on manual updates.
                      A simple framework:
                    </p>
                    <ol className="space-y-3 list-decimal list-inside">
                      <li>
                        <strong className="text-[#1A2D48]">Map your channels and locations.</strong> Do you sell only
                        from one store or site, or across multiple online channels and a storefront? Do you store items
                        in one room or multiple buildings? This determines whether tools like Sortly, inFlow, or
                        Zoho/Cin7 make sense.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Decide if you need order workflows now.</strong> If you
                        mainly need better counts and locations, Sortly can be enough. If purchase orders, sales orders,
                        and invoices already exist, lean toward inFlow or Zoho Inventory.
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">Consider your stack.</strong> If you&apos;re heavily tied to
                        QuickBooks,{" "}
                        <Link href={getInventoryReviewUrl("quickbooks-commerce")} className={linkGreen}>
                          QuickBooks Commerce
                        </Link>{" "}
                        or Fishbowl may be worth a look. If you lean into Zoho apps, Zoho Inventory will be the most
                        natural fit.
                      </li>
                    </ol>
                    <p>
                      Our dedicated{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      guide goes deeper on this selection framework across business sizes.
                    </p>
                  </div>
                </section>

                {/* ——— Conclusion ——— */}
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Start simple, then grow into more power.">
                    Bringing inventory software into a small business
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The biggest wins for small businesses usually come from doing the basics consistently: keeping
                      stock counts accurate, receiving and adjusting inventory in one place, and reordering before you
                      run out. You don&apos;t need mid-market platforms like{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>
                        Unleashed
                      </Link>{" "}
                      or{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>
                        Finale Inventory
                      </Link>{" "}
                      on day one to accomplish that.
                    </p>
                    <p>
                      Start with a right-sized tool—Sortly for very lightweight visual tracking, inFlow Inventory or Zoho
                      Inventory for more structured workflows—and revisit more advanced platforms once your complexity
                      truly demands them. In the meantime, use our{" "}
                      <Link href="/inventory" className={linkGreen}>
                        inventory management hub
                      </Link>
                      ,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>
                        comparisons
                      </Link>
                      , and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory software roundup
                      </Link>{" "}
                      to keep tabs on where the market is heading.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers for small-business buyers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>

            {/* ——— Sidebar ——— */}
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar
                title="Recommended Inventory Software"
                items={INVENTORY_GUIDE_SIDEBAR_ITEMS}
                stickyTop={88}
              />
            </div>
          </div>
        </div>

        <RelatedInventoryResources
          items={RELATED_ITEMS}
          excludeHref="/inventory/guides/best-inventory-software-for-small-business"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best Inventory Software for Small Business | BeltStack Guide",
    description:
      "Learn why small businesses outgrow spreadsheets, which inventory tools are best for simple stock tracking and reordering, and how to choose inventory software that fits your size, channels, and budget.",
  };
}

