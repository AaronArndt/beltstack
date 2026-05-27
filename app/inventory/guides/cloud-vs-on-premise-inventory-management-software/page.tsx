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
    q: "Is cloud inventory software better for most small businesses?",
    a: "For most SMBs, cloud inventory software is faster to deploy, easier to maintain, and simpler for remote or multi-location teams. You trade some customization depth for automatic updates, mobile access, and vendor-managed uptime—usually the right swap under roughly a few hundred SKUs and limited IT staff.",
  },
  {
    q: "When does on-premise inventory software still make sense?",
    a: "On-premise fits strict data residency rules, air-gapped plants, legacy ERP mandates, or contracts that forbid certain cloud regions. You gain infrastructure control but own patching, backups, scaling, and disaster recovery—budget IT hours accordingly.",
  },
  {
    q: "How do integrations differ between cloud and on-premise?",
    a: "Cloud tools typically offer prebuilt connectors to Shopify, Amazon, QuickBooks, and shipping APIs with OAuth setup. On-premise often relies on file exports, middleware, or custom integration projects—plan timeline and cost before assuming real-time sync.",
  },
  {
    q: "Which model has lower total cost of ownership?",
    a: "Cloud usually wins on upfront cost and IT labor for SMBs: subscription replaces server hardware and full-time admin. On-premise can look cheaper over many years at high scale if you already operate data centers—but include implementation, upgrades, and downtime risk in the math.",
  },
  {
    q: "Can I migrate from on-premise to cloud inventory software?",
    a: "Yes, with a structured cutover: export clean item masters, open POs, and on-hand by location; run parallel receiving for one cycle; validate channel sync before decommissioning the old server. Treat migration as a process project, not a weekend file upload.",
  },
];

const PAGE_HREF = "/inventory/guides/cloud-vs-on-premise-inventory-management-software";

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function CloudVsOnPremiseInventoryManagementSoftwarePage() {
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
                      Cloud vs On-Premise Inventory Management Software
                    </li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Cloud vs On-Premise Inventory Management Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare cloud and on-premise inventory management software on deployment, integrations, mobile access,
                    security, and total cost—so hosting supports stock accuracy instead of blocking it.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Hosting model shapes how fast you go live, who patches servers, and whether warehouse staff can scan
                      receipts from a phone without VPN friction. Most inventory buyers today shortlist cloud SaaS first—not
                      because on-premise is never correct, but because perpetual sync with sales channels and accounting is
                      the product.
                    </p>
                    <p>
                      On-premise inventory—often bundled with ERP or older WMS installs—still appears in manufacturing plants,
                      regulated industries, and companies with sunk data-center investment. The trade is control and customization
                      against your team owning uptime, backups, and upgrade windows that can freeze receiving during peak season.
                    </p>
                    <p>
                      Related deployment comparisons include{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>{" "}
                      (manual hosting of a sort) and{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory management software
                      </Link>{" "}
                      for subscription tiers. Selection frameworks sit in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>.
                    </p>
                    <p>
                      Teams leaving spreadsheets often land on cloud tools first—see{" "}
                      <Link href="/inventory/guides/best-inventory-software-for-small-business" className={linkGreen}>
                        best inventory software for small business
                      </Link>{" "}
                      for upgrade signals. For a parallel take on deployment tradeoffs in another vertical, see{" "}
                      <Link href="/field-service/guides/cloud-vs-on-premise-field-service-software" className={linkGreen}>
                        cloud vs on-premise field service software
                      </Link>.
                    </p>
                  </div>
                </section>
                <section id="cloud-strengths" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why SaaS became the default.">When Cloud Inventory Software Fits</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Cloud inventory platforms deploy in days or weeks: sign up, import SKUs, connect Shopify or Amazon, and
                      invite warehouse users with role-based permissions. Vendors handle security patches, scaling, and
                      mobile app distribution—valuable when you have no dedicated IT and multiple people updating stock from
                      different sites.
                    </p>
                    <p>
                      Products such as{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>Zoho Inventory</Link>,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>Cin7</Link>, and{" "}
                      <Link href={getInventoryReviewUrl("sortly")} className={linkGreen}>Sortly</Link> exemplify the model:
                      browser access, optional native apps, and marketplace integrations maintained by the vendor. Compare{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      when channel depth versus simplicity is the deciding factor.
                    </p>
                  </div>
                </section>
                <section id="on-premise-cases" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Control with operational responsibility.">When On-Premise Still Makes Sense</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose on-premise when policy or contracts require data to stay inside your network, when shop-floor
                      systems cannot reach the public internet reliably, or when inventory is inseparable from a legacy ERP
                      you already run on owned servers. Fishbowl-on-premise and SAP-style stacks are common examples.
                    </p>
                    <p>
                      Budget for database administration, OS patching, hardware refresh, and disaster recovery drills. Remote
                      warehouse access may need VPNs or reverse proxies—adding failure modes that cloud vendors abstract away.
                      If the main pain is inaccurate counts, infrastructure control alone will not fix process gaps.
                    </p>
                  </div>
                </section>
                <section id="security-tco" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Neither model is automatically safer or cheaper.">Security, Access, and Total Cost</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Security depends on execution, not label. Reputable cloud vendors invest in monitoring, encryption, and
                      redundancy; on-premise security depends on your patch cadence and backup tests. Document access controls
                      either way—shared admin logins undermine both models equally.
                    </p>
                    <p>
                      Total cost of ownership includes subscription or license fees, implementation, integrations, training,
                      and internal labor. A modest cloud monthly fee plus zero server admin often beats “free” server software
                      that consumes consultant hours each upgrade cycle. Pricing patterns are covered in{" "}
                      <Link href="/inventory/guides/how-to-choose-inventory-management-software" className={linkGreen}>
                        how to choose inventory management software
                      </Link>{" "}
                      and live plan pages linked from{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>best inventory software</Link>.
                    </p>
                  </div>
                </section>
                <section id="decision-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Hosting supports the workflow—not the reverse.">Decision Checklist Before You Buy</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List non-negotiables: required integrations, mobile scanning offline needs, data residency, audit
                      trails, and peak-season uptime expectations. Pilot with real SKUs and a week of receiving and picking
                      before signing annual contracts—hosting debates matter less if the product cannot model your locations.
                    </p>
                    <p>
                      If you are weighing spreadsheet stopgaps against cloud adoption, read{" "}
                      <Link href="/inventory/guides/can-excel-be-used-for-inventory-management" className={linkGreen}>
                        can Excel be used for inventory management
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/free-vs-paid-inventory-management-software" className={linkGreen}>
                        free vs paid inventory management software
                      </Link>{" "}
                      alongside this guide. Browse{" "}
                      <Link href="/inventory/compare" className={linkGreen}>compare inventory software</Link>{" "}
                      once hosting constraints narrow the shortlist.
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
              <GuideSidebar title="Cloud vs on-prem" items={[...INVENTORY_GUIDE_SIDEBAR_ITEMS]} stickyTop={88} />
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
    title: "Cloud vs On-Premise Inventory Software | BeltStack Guide",
    description:
      "Compare cloud and on-premise inventory management software on deployment speed, integrations, mobile access, security, and total cost of ownership.",
    keywords: [
      "cloud vs on premise inventory software",
      "cloud inventory management",
      "on premise inventory system",
      "SaaS inventory software",
      "inventory software hosting",
      "inventory TCO",
    ],
  };
}
