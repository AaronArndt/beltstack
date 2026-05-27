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
    q: "What is multi-location inventory management?",
    a: "Tracking and controlling stock across warehouses, stores, vans, or 3PL sites as one logical system—each location has its own on-hand balances, transfers, and often reorder rules, while leadership sees consolidated availability.",
  },
  {
    q: "How do inventory transfers work between locations?",
    a: "A transfer order moves quantity from source to destination: pick and ship at origin, receive at destination, both legs update perpetual records. Without system-enforced transfers, double-selling and phantom stock are common.",
  },
  {
    q: "Should each location have its own reorder points?",
    a: "Usually yes—demand and lead times differ by site. A regional DC serving ecommerce may reorder faster than a retail back room. Central buyers still need rollup visibility to negotiate supplier MOQs.",
  },
  {
    q: "Can small businesses manage multiple locations in spreadsheets?",
    a: "Briefly, for two sites and dozens of SKUs. Once transfers, channel allocation, and count schedules multiply, spreadsheets break—duplicate tabs, version conflicts, and no ATP across pools. Dedicated inventory software is the typical upgrade trigger.",
  },
  {
    q: "Which inventory software supports multiple warehouses?",
    a: "Most mid-tier platforms—Zoho Inventory, Cin7, Unleashed, inFlow—support multi-warehouse with varying transfer and allocation depth. Validate bin-level needs separately; that may push you toward WMS features.",
  },
];

const PAGE_HREF = "/inventory/guides/how-multi-location-inventory-management-works";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowMultiLocationInventoryManagementWorksPage() {
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
                      How Multi-Location Inventory Management Works
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Multi-Location Inventory Management Works
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Multi-warehouse inventory—location balances, transfers, allocation, and available-to-promise—with links to
                    ecommerce channel sync, manufacturing sites, and software that keeps counts honest.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Multi-location inventory management means knowing what you have at each warehouse, store, 3PL, or van—and
                      moving stock between sites without losing traceability. Single-site teams treat “inventory” as one number;
                      growing brands discover that number hides shortages in one region and overstock in another. Transfers,
                      location-specific reorder rules, and consolidated available-to-promise (ATP) separate controlled growth
                      from accidental double-selling.
                    </p>
                    <p>
                      Each location maintains its own on-hand, committed, and inbound quantities. Sales channels consume from
                      designated pools or a virtual aggregate; ecommerce brands often allocate by DC while marketplaces pull
                      from a shared hub. See{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      for channel sync patterns and{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        inventory software for manufacturing
                      </Link>{" "}
                      when raw stores and finished-goods warehouses differ.
                    </p>
                    <p>
                      Forecasting and classification still apply—{" "}
                      <Link href="/inventory/guides/inventory-forecasting-explained" className={linkGreen}>
                        inventory forecasting
                      </Link>{" "}
                      by location improves buy quantities, and{" "}
                      <Link href="/inventory/guides/the-abc-method-of-inventory-management" className={linkGreen}>
                        ABC analysis
                      </Link>{" "}
                      prioritizes count effort where each site holds A SKUs. Foundational discipline is in{" "}
                      <Link href="/inventory/guides/the-golden-rules-of-inventory-management" className={linkGreen}>
                        golden rules of inventory management
                      </Link>. Navigation:{" "}
                      <Link href="/inventory" className={linkGreen}>inventory hub</Link>,{" "}
                      <Link href="/inventory/guides" className={linkGreen}>guides index</Link>,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>.
                    </p>
                    <p>
                      Platforms such as{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link> support
                      multi-warehouse with different transfer and reporting depth—test with two real sites before rollout.
                      Reviews sit in{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="location-model" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Sites, bins, and virtual pools.">Location Model and Master Data</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define locations in your system of record: primary DC, retail back rooms, 3PL codes, quarantine zones.
                      SKU masters must be identical across sites—duplicate item records break transfers and consolidated reporting.
                    </p>
                    <p>
                      Decide whether channels see one ATP number or location-specific availability. Overselling often traces to
                      channels reading stale aggregate stock while a single DC is actually empty.
                    </p>
                  </div>
                </section>
                <section id="transfers-allocation" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Moving stock with audit trails.">Transfers and Allocation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Transfer orders document ship-from and receive-to: in-transit status prevents both sites from promising the
                      same units. Retail replenishment from DC uses the same mechanics at higher volume—schedule transfers against
                      store min/max or forecast pull.
                    </p>
                    <p>
                      Allocation rules assign inbound POs to locations before receipt, reducing post-receipt reshuffling.
                      Optimization across sites—holding less total stock while hitting service targets—is covered in{" "}
                      <Link href="/inventory/guides/what-is-inventory-optimization" className={linkGreen}>
                        what is inventory optimization
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="counts-by-location" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Accuracy where it matters per site.">Cycle Counts by Location</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Count schedules should follow ABC by location—a hero SKU at the ecommerce DC gets frequent counts even if
                      the same SKU is C-class at a slow retail door. Variance investigation starts at the site with the mismatch,
                      then checks recent transfers and receiving.
                    </p>
                    <p>
                      3PL integrations require explicit receipt confirmation; assuming partner portals match your ERP without
                      reconciliation invites silent drift.
                    </p>
                  </div>
                </section>
                <section id="software-fit" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features to validate before rollout.">Software Fit and Rollout</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Score multi-warehouse support in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>: transfer workflows, location-level reports, channel ATP, and mobile receiving at each site.
                    </p>
                    <p>
                      Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      for growing multi-channel brands versus{" "}
                      <Link href={getInventoryCompareUrl("sortly-vs-inflow-inventory")} className={linkGreen}>
                        Sortly vs inFlow Inventory
                      </Link>{" "}
                      when you need lightweight multi-site tracking without full WMS complexity.
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
              <GuideSidebar title="Multi-location inventory" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "How Multi-Location Inventory Management Works | BeltStack Guide",
    description:
      "Learn multi-location inventory management—warehouse balances, transfers, allocation, ATP, cycle counts by site, and software for multi-warehouse operations.",
    keywords: [
      "multi-location inventory management",
      "multi-warehouse inventory",
      "inventory transfers",
      "inventory allocation",
      "available to promise inventory",
      "multi-site inventory software",
    ],
  };
}
