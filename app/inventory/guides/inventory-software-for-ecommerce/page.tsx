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
    q: "Do I need separate inventory software if my ecommerce platform tracks stock?",
    a: "If you sell through a single store with modest volume, your ecommerce platform’s built-in stock tracking may be enough. Once you sell through multiple channels or run a warehouse with many SKUs, a dedicated inventory tool keeps counts more accurate and gives you better control over purchasing, locations, and forecasting.",
  },
  {
    q: "Which inventory tools work best for ecommerce?",
    a: "For many ecommerce-led businesses, Cin7, Zoho Inventory, and Finale Inventory are strong starting points. Cin7 is built for deep multi-channel commerce, Zoho Inventory offers strong value for small and midsize brands, and Finale Inventory focuses on higher-volume ecommerce and warehouse operations.",
  },
  {
    q: "Can inventory software prevent overselling across channels?",
    a: "Yes—multi-channel inventory tools keep a single count of what’s available to sell and sync that back out to your storefronts and marketplaces. This dramatically reduces the risk of overselling, especially when order volume spikes or when you sell limited SKUs in many places at once.",
  },
  {
    q: "How does inventory software connect to shipping and 3PL tools?",
    a: "Most ecommerce-focused inventory platforms integrate with shipping tools and some 3PLs so orders and tracking information move between systems automatically. Finale Inventory and Cin7, for example, focus heavily on scanner-driven warehouse workflows and integrations with shipping and logistics tools.",
  },
];

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function InventorySoftwareForEcommerceGuidePage() {
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
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
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
                      Inventory Software for Ecommerce
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Inventory Software for Ecommerce
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how ecommerce brands use inventory software to keep stock in sync across channels, reduce
                    overselling, and connect storefronts, warehouses, and accounting.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ecommerce teams quickly run into problems when inventory lives only inside storefronts. Each store
                      thinks it owns the “truth,” channels don&apos;t talk to each other, and once you add marketplaces,
                      a POS, or a second warehouse, overselling becomes a weekly headache. The warehouse ships based on
                      what they see on shelves—not what each channel claims is available.
                    </p>
                    <p>
                      Inventory software for ecommerce solves this by acting as a central source of truth for stock,
                      orders, and locations. Orders flow in from Shopify, marketplaces, and other channels; inventory
                      updates flow back out. Tools like{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>
                        Cin7
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                        Zoho Inventory
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>
                        Finale Inventory
                      </Link>{" "}
                      are built specifically to keep ecommerce stock accurate while giving warehouses clearer workflows.
                    </p>
                    <p>
                      This guide walks through what ecommerce brands should look for and which tools fit common
                      scenarios. For a full ranking, see our{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory management software
                      </Link>{" "}
                      roundup, and for detailed head-to-heads, review comparisons like{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("fishbowl-vs-katana")} className={linkGreen}>
                        Fishbowl vs Katana
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— Key takeaways ——— */}
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How inventory tools support ecommerce operations.">
                    Key takeaways for ecommerce brands
                  </SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">
                          Inventory platforms sit between storefronts and warehouses.
                        </strong>{" "}
                        They collect orders from channels and push back accurate availability, so each store reflects
                        reality instead of guessing.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">The right tool depends on scale.</strong> Smaller
                        ecommerce-led businesses often start with Zoho Inventory; more complex, multi-channel brands look
                        at Cin7 or Finale Inventory as volume and channel count increase.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">
                          Warehouses, channels, and accounting must all see the same numbers.
                        </strong>{" "}
                        Good ecommerce inventory software integrates with storefronts, shipping tools, and accounting
                        so data doesn&apos;t diverge.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* ——— Why ecommerce brands add inventory software ——— */}
                <section
                  id="why-ecommerce-brands-add-inventory-software"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Signals that it’s time to move beyond storefront-only stock.">
                    Why ecommerce brands add inventory software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Common triggers include:</p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Overselling during promotions</strong> — One channel sells
                          inventory that another has already committed because there&apos;s no central “available to
                          sell” number.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Channel-specific inventory rules</strong> — You want to
                          allocate stock differently across marketplaces, DTC, and wholesale, which is nearly impossible
                          when each channel manages its own inventory.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">One warehouse, many channels</strong> — Warehouse teams
                          pick and pack based on what&apos;s physically on shelves, while channels allocate based on
                          stale numbers.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Platforms like{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>
                        Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>
                        Finale Inventory
                      </Link>{" "}
                      are explicitly built to centralize inventory for ecommerce and feed that back into storefronts and
                      marketplaces.
                    </p>
                  </div>
                </section>

                {/* ——— Recommended tools for ecommerce ——— */}
                <section
                  id="recommended-ecommerce-tools"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Where ecommerce brands often start.">
                    Recommended inventory tools for ecommerce
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-3 list-none">
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>
                            Cin7
                          </Link>{" "}
                          — best for complex multi-channel ecommerce
                        </strong>
                        <p className="mt-1">
                          Cin7 is built for brands that sell through ecommerce, marketplaces, retail, and wholesale all
                          at once. It excels at keeping inventory and orders coherent across channels and locations,
                          though it comes with higher pricing and more implementation work than SMB-focused tools.
                        </p>
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                            Zoho Inventory
                          </Link>{" "}
                          — best balance of features and price for many ecommerce SMBs
                        </strong>
                        <p className="mt-1">
                          A strong fit for ecommerce-led small and midsize businesses that want multi-channel support,
                          purchasing, and basic warehouse tools without jumping into mid-market pricing. Especially
                          compelling if you use other Zoho apps.
                        </p>
                      </li>
                      <li>
                        <strong className="text-[#1A2D48]">
                          <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>
                            Finale Inventory
                          </Link>{" "}
                          — best for higher-volume ecommerce and warehouse operations
                        </strong>
                        <p className="mt-1">
                          Designed for ecommerce and warehouses with serious order volume, scanners, and multiple
                          locations. Finale focuses on channel sync and warehouse workflows without being a full ERP,
                          which makes it attractive once you&apos;ve clearly outgrown storefront-only stock management.
                        </p>
                      </li>
                    </ul>
                    <p>
                      For manufacturers that also sell direct-to-consumer,{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>
                        Katana
                      </Link>{" "}
                      is worth a look, as it ties production planning to ecommerce orders more tightly than pure
                      ecommerce inventory tools.
                    </p>
                  </div>
                </section>

                {/* ——— Decision guidance ——— */}
                <section
                  id="decision-guidance"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Which inventory platform fits your ecommerce stack?">
                    How to choose ecommerce inventory software
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      When evaluating options, consider four axes: channel complexity, warehouse complexity, order
                      volume, and budget.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Single-store, low volume</strong> — You may be able to stay
                          on storefront-native inventory or start with Zoho Inventory and grow into it.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Multi-channel, moderate volume</strong> — Zoho Inventory and
                          Cin7 are strong candidates; compare them directly in{" "}
                          <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                            Zoho Inventory vs Cin7
                          </Link>
                          .
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">High volume, complex warehouses</strong> — Finale Inventory,
                          Unleashed, or Cin7 may all be contenders; your decision will depend on how much emphasis you put
                          on costing and reporting versus channel and POS workflows.
                        </span>
                      </li>
                    </ul>
                    <p>
                      For a broader selection framework, see our{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      guide.
                    </p>
                  </div>
                </section>

                {/* ——— Conclusion ——— */}
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Treat inventory as shared infrastructure, not a per-channel feature.">
                    Bringing inventory software into your ecommerce stack
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The moment your ecommerce business spans more than one significant channel—or runs a warehouse that
                      ships for multiple channels—inventory stops being a storefront setting and becomes shared
                      infrastructure. Having one source of truth for what&apos;s available to sell is what keeps customer
                      experience and operations under control.
                    </p>
                    <p>
                      Start by mapping where orders come from and how they flow through your warehouse, then shortlist
                      tools that can centralize that flow. Our{" "}
                      <Link href="/inventory" className={linkGreen}>
                        inventory management hub
                      </Link>
                      ,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>
                        comparison hub
                      </Link>
                      , and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory software roundup
                      </Link>{" "}
                      will help you narrow choices and see how tools like Zoho Inventory, Cin7, and Finale Inventory
                      compare in practice.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions from ecommerce teams.">FAQs</SectionTitle>
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
          excludeHref="/inventory/guides/inventory-software-for-ecommerce"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Inventory Software for Ecommerce | BeltStack Guide",
    description:
      "Learn how ecommerce brands use inventory software to sync stock across channels, reduce overselling, and connect storefronts, warehouses, and accounting.",
  };
}

