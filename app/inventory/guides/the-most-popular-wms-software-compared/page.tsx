import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedInventoryResources } from "@/components/guides/RelatedInventoryResources";
import { INVENTORY_GUIDE_SIDEBAR_ITEMS, INVENTORY_GUIDE_RELATED_ITEMS } from "@/lib/data/inventoryGuides";
import { getInventoryReviewUrl } from "@/lib/routes";

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
    q: "What is the most popular WMS software?",
    a: "Enterprise distribution centers often run SAP EWM, Oracle WMS Cloud, Manhattan Active, or Blue Yonder. Mid-market ecommerce and 3PLs frequently adopt cloud WMS vendors such as Deposco, Logiwa, or Extensiv—fit depends on facility automation and ERP stack, not brand fame alone.",
  },
  {
    q: "Is SAP WMS the same as SAP EWM?",
    a: "Modern SAP warehouse execution centers on Extended Warehouse Management (EWM) integrated with S/4HANA Materials Management. Older WM modules still exist in legacy ECC estates; migration paths vary by release and industry template.",
  },
  {
    q: "Can small businesses use enterprise WMS?",
    a: "They can, but implementation cost and master-data rigor often exceed benefit. Many SMBs pair strong inventory software with barcode discipline until pick volume and error rates justify a WMS program.",
  },
  {
    q: "How do I compare WMS vendors fairly?",
    a: "Pilot your highest-complexity workflows—multi-line picks, lot control, cross-dock, returns—and measure scan compliance, integration effort with ERP, and operator training time. Reference visits in your vertical beat generic feature matrices.",
  },
  {
    q: "Where does inventory software still matter with WMS?",
    a: "WMS executes inside the warehouse; inventory and ERP layers own channel availability, purchasing, costing, and financial stock. Cin7, Unleashed, or ERP inventory remain relevant for commercial operations even when a DC runs dedicated WMS.",
  },
];

const PAGE_HREF = "/inventory/guides/the-most-popular-wms-software-compared";

const RELATED_ITEMS = [
  ...INVENTORY_GUIDE_RELATED_ITEMS,
  { label: "SAP vs Oracle WMS", href: "/field-service/guides/sap-vs-oracle-wms" },
];

export default function TheMostPopularWmsSoftwareComparedPage() {
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
                      The Most Popular WMS Software Compared
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Most Popular WMS Software Compared
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How leading WMS platforms—SAP EWM, Oracle, Manhattan, Blue Yonder, and cloud mid-market options—compare
                    on fit, ERP tie-in, and who should adopt warehouse-level execution.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      WMS shortlists cluster around ERP-native suites for global manufacturers and cloud specialists for
                      ecommerce fulfillment and 3PLs. “Popular” here means commonly evaluated in RFPs—not automatically right
                      for a ten-person stockroom. Popularity tracks industry: automotive parts distributors ask different
                      questions than cold-chain grocery or fashion DTC brands.
                    </p>
                    <p>
                      Inventory buyers land on this page after general stock tools stop scaling.{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>,{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>Unleashed</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("finale-inventory")} className={linkGreen}>Finale Inventory</Link>{" "}
                      handle commercial inventory well; WMS enters when scan discipline, bin accuracy, and labor productivity
                      inside a DC dominate outcomes. Start from{" "}
                      <Link href="/inventory/guides/what-is-a-warehouse-management-system-wms" className={linkGreen}>
                        what is a warehouse management system (WMS)
                      </Link>{" "}
                      if definitions are still fuzzy.
                    </p>
                    <p>
                      Field-service readers comparing SAP and Oracle should read{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>SAP vs Oracle WMS</Link>, plus{" "}
                      <Link href="/field-service/guides/what-is-wms-software" className={linkGreen}>what is WMS software</Link>,{" "}
                      <Link href="/field-service/guides/wms-vs-erp-explained" className={linkGreen}>WMS vs ERP explained</Link>, and{" "}
                      <Link href="/field-service/guides/wms-vs-scm-explained" className={linkGreen}>WMS vs SCM explained</Link>.
                      Inventory-side reviews and{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link> remain the home
                      for mid-market stock platforms.
                    </p>
                    <p>
                      Use the{" "}
                      <Link href="/inventory" className={linkGreen}>inventory management hub</Link> and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>{" "}
                      for tools that may suffice before a WMS program. Enterprise SAP context lives in{" "}
                      <Link href="/inventory/guides/what-is-sap-inventory-management" className={linkGreen}>
                        what is SAP inventory management
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="enterprise-wms" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="ERP-native and tier-one supply chain suites.">Enterprise WMS: SAP, Oracle, Manhattan, Blue Yonder</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">SAP Extended Warehouse Management (EWM)</strong> suits organizations
                      already on S/4HANA with complex handling units, yard management, and embedded analytics. Implementation
                      is program-sized—benefits appear when plants and regions standardize on SAP movement types and EWM
                      process templates.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Oracle WMS Cloud</strong> targets multi-facility operators wanting
                      cloud operations with Oracle ERP fusion paths. <strong className="text-[#1A2D48]">Manhattan Active</strong> and{" "}
                      <strong className="text-[#1A2D48]">Blue Yonder</strong> (formerly JDA) dominate high-volume retail,
                      grocery, and omni-channel distribution with deep labor management and automation hooks—often alongside,
                      not instead of, major ERP financials.
                    </p>
                    <p>
                      Compare SAP and Oracle positioning in depth via{" "}
                      <Link href="/field-service/guides/sap-vs-oracle-wms" className={linkGreen}>SAP vs Oracle WMS</Link> before
                      signing a single-vendor roadmap.
                    </p>
                  </div>
                </section>
                <section id="cloud-mid-market" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Faster rollout for ecommerce and 3PL.">Cloud WMS for Mid-Market and 3PL</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Vendors such as Deposco, Logiwa, Extensiv (3PL Central), and ShipHero-class WMS modules emphasize
                      subscription pricing, ecommerce connectors, and operator UX on phones and rugged scanners. They win when
                      facilities outgrow{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        inventory software for ecommerce
                      </Link>{" "}
                      pick paths but cannot fund eighteen-month SAP programs.
                    </p>
                    <p>
                      Evaluate integration kits for Shopify, Amazon, and major ERPs, plus 3PL billing if you serve clients.
                      Mid-market WMS fails when item master hygiene is poor—fix SKU attributes before blaming the vendor.
                    </p>
                  </div>
                </section>
                <section id="comparison-criteria" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Score what matters on your floor.">How to Compare WMS Vendors</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Pick-path accuracy for your highest-error SKUs and order profiles.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Lot, serial, and catch-weight support if regulated or food-adjacent.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>ERP posting latency and exception handling (short picks, damages).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                        <span>Implementation partner depth in your industry—not generic retail demos only.</span>
                      </li>
                    </ul>
                  </div>
                </section>
                <section id="inventory-layer" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep commercial stock coherent.">WMS Plus Inventory Software—Not Either/Or</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      WMS does not replace channel-level inventory for marketplaces and retail POS. Many operators run WMS at
                      the central DC and inventory software (or ERP inventory) for purchasing, transfers, and financial
                      valuation. Document which system owns ATP for customer promises before go-live.
                    </p>
                    <p>
                      When WMS is premature, invest in cycle counting and barcode receiving—see{" "}
                      <Link href="/inventory/guides/cycle-counting-and-inventory-accuracy" className={linkGreen}>
                        cycle counting and inventory accuracy
                      </Link>—and revisit WMS when error rates stay high despite process fixes.
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
              <GuideSidebar title="WMS comparison" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Popular WMS Software Compared | BeltStack Guide",
    description:
      "Compare popular WMS software—SAP EWM, Oracle, Manhattan, Blue Yonder, and cloud mid-market options—for fit, ERP integration, and warehouse execution needs.",
    keywords: [
      "WMS software comparison",
      "SAP EWM",
      "Oracle WMS Cloud",
      "Manhattan WMS",
      "Blue Yonder WMS",
      "warehouse management software",
    ],
  };
}
