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
    q: "What is the first step in choosing inventory software?",
    a: "Start by mapping your current workflows—where products come from, where they live, which channels you sell through, and who updates inventory today. This gives you concrete requirements before you look at feature lists or pricing pages.",
  },
  {
    q: "How long does it usually take to implement inventory software?",
    a: "Lightweight tools can be up and running in days; mid-market platforms can take weeks or months depending on your data quality and process complexity. Expect to spend real time on product cleanup, location structure, and training—implementation effort is just as important a factor as pricing.",
  },
  {
    q: "Should I choose an inventory tool based on my accounting software?",
    a: "Accounting alignment is an important factor, but not the only one. If you are deeply tied to QuickBooks, QuickBooks Commerce or Fishbowl can make sense. If you use Zoho apps, Zoho Inventory is often a natural fit. In other cases, a strong standalone inventory platform that integrates cleanly with your accounting tool is usually better than forcing everything into a single vendor.",
  },
  {
    q: "Can I outgrow my first inventory system?",
    a: "Yes—and that’s okay. Many businesses start on tools like Sortly, inFlow, or Zoho Inventory and later graduate to Cin7, Unleashed, or an ERP as complexity and scale increase. Choosing a tool that fits your current stage and has a clear upgrade path is more important than trying to future-proof everything on day one.",
  },
];

const RELATED_ITEMS = INVENTORY_GUIDE_RELATED_ITEMS;

export default function HowToChooseInventoryManagementSoftwareGuidePage() {
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
                      How to Choose Inventory Management Software
                    </li>
                  </ol>
                </nav>

                {/* ——— Hero ——— */}
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose Inventory Management Software
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    A practical framework for choosing inventory software based on your size, channels, warehouse needs,
                    production complexity, and budget.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>

                {/* ——— Intro ——— */}
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buying inventory software can feel overwhelming. There are lightweight tools aimed at small
                      businesses, mid-market platforms for ecommerce and warehouses, manufacturing-focused systems,
                      warehouse management systems (WMS), and full-blown ERPs. Every vendor claims to be “scalable” and
                      “flexible,” but few are upfront about the trade-offs.
                    </p>
                    <p>
                      The goal of this guide is not to crown a single “best” tool—it&apos;s to give you a framework that
                      matches software to your reality: how big you are, how you sell, how you store and move inventory,
                      and how much change your team can absorb. Along the way we&apos;ll point to example tools like{" "}
                      <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                        Zoho Inventory
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("inflow-inventory")} className={linkGreen}>
                        inFlow Inventory
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("cin7")} className={linkGreen}>
                        Cin7
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("katana")} className={linkGreen}>
                        Katana
                      </Link>
                      ,{" "}
                      <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>
                        Fishbowl
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryReviewUrl("unleashed")} className={linkGreen}>
                        Unleashed
                      </Link>{" "}
                      so you can compare concrete options.
                    </p>
                    <p>
                      For a curated shortlist, see our{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory management software
                      </Link>{" "}
                      roundup, and for specific matchups, explore comparisons like{" "}
                      <Link href={getInventoryCompareUrl("zoho-inventory-vs-cin7")} className={linkGreen}>
                        Zoho Inventory vs Cin7
                      </Link>{" "}
                      and{" "}
                      <Link href={getInventoryCompareUrl("cin7-vs-katana")} className={linkGreen}>
                        Cin7 vs Katana
                      </Link>
                      .
                    </p>
                  </div>
                </section>

                {/* ——— Key takeaways ——— */}
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters most when evaluating inventory tools.">
                    Key takeaways for selecting inventory software
                  </SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">
                          Fit to your workflows is more important than feature counts.
                        </strong>{" "}
                        Start by mapping how you buy, store, and sell today—then look for a tool that matches that
                        reality instead of chasing every possible feature.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">
                          Implementation effort and change management are real constraints.
                        </strong>{" "}
                        A slightly “less powerful” tool that your team will actually use is often better than a
                        mid-market platform that never gets fully implemented.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                        •
                      </span>
                      <span>
                        <strong className="text-[#1A2D48]">Plan for an upgrade path, not perfection.</strong> It&apos;s
                        normal to start with Zoho Inventory, inFlow, or Sortly and later graduate to Cin7, Unleashed, or
                        an ERP once you truly need them.
                      </span>
                    </li>
                  </ul>
                </section>

                {/* ——— Step 1: Understand business size and complexity ——— */}
                <section
                  id="business-size-and-complexity"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How big you are and how complicated operations are.">
                    Step 1: Understand your business size and complexity
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with an honest assessment of your size and complexity—not where you hope to be, but where
                      you are now. Consider:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>How many SKUs you manage and how often you introduce new products.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>How many locations or warehouses you use—and whether that will change soon.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Whether you are primarily{" "}
                          <strong className="text-[#1A2D48]">
                            buying and reselling finished goods, selling online,
                          </strong>{" "}
                          or{" "}
                          <strong className="text-[#1A2D48]">
                            manufacturing or assembling products from raw materials
                          </strong>
                          .
                        </span>
                      </li>
                    </ul>
                    <p>
                      For example, a small ecommerce brand with a single warehouse might fit well with Zoho Inventory or
                      inFlow Inventory, while a multi-warehouse manufacturer could be better served by Katana, Unleashed,
                      or Fishbowl.
                    </p>
                  </div>
                </section>

                {/* ——— Step 2: Map channels and warehouse needs ——— */}
                <section
                  id="channels-and-warehouses"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Where you sell and where you store inventory.">
                    Step 2: Map your channels and warehouse needs
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory software sits between your sales channels and your physical storage. To choose well, you
                      need clarity on:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Channel mix</strong> — Ecommerce only, or also marketplaces,
                          retail, and wholesale? Tools like Cin7 and Finale Inventory lean into multi-channel; simpler
                          tools are fine for one or two channels.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          <strong className="text-[#1A2D48]">Warehouse complexity</strong> — Basic stockrooms, or
                          higher-volume warehouses with scanners, bins, and routing rules? Fishbowl, Unleashed, and Finale
                          Inventory target deeper warehouse environments than ultra-light tools like Sortly.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href="/inventory/guides/inventory-software-for-ecommerce" className={linkGreen}>
                        ecommerce inventory guide
                      </Link>{" "}
                      and{" "}
                      <Link href="/inventory/guides/inventory-software-for-manufacturing" className={linkGreen}>
                        manufacturing inventory guide
                      </Link>{" "}
                      dive deeper into these two common patterns.
                    </p>
                  </div>
                </section>

                {/* ——— Step 3: Consider integrations and ecosystem ——— */}
                <section
                  id="integrations-and-ecosystem"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="How inventory connects to accounting, ecommerce, and shipping.">
                    Step 3: Consider integrations and ecosystem
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory doesn&apos;t live in a vacuum. It has to play nicely with{" "}
                      <Link href="/accounting" className={linkGreen}>
                        accounting
                      </Link>
                      , ecommerce, shipping, and sometimes CRM or WMS tools. For example:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If you&apos;re heavily invested in QuickBooks,{" "}
                          <Link href={getInventoryReviewUrl("quickbooks-commerce")} className={linkGreen}>
                            QuickBooks Commerce
                          </Link>{" "}
                          or{" "}
                          <Link href={getInventoryReviewUrl("fishbowl")} className={linkGreen}>
                            Fishbowl
                          </Link>{" "}
                          might be more attractive than tools that require complex middleware.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          If you rely on Zoho apps,{" "}
                          <Link href={getInventoryReviewUrl("zoho-inventory")} className={linkGreen}>
                            Zoho Inventory
                          </Link>{" "}
                          has a natural edge in simplicity and integration depth.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Make a short list of systems inventory must integrate with—and which integrations are “nice to
                      have”—before you talk to vendors. This helps you separate marketing from real ecosystem fit.
                    </p>
                  </div>
                </section>

                {/* ——— Step 4: Evaluate pricing and total cost ——— */}
                <section
                  id="pricing-and-budget"
                  className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12"
                >
                  <SectionTitle sub="Look beyond the monthly subscription price.">
                    Step 4: Evaluate pricing and total cost
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Inventory software pricing is rarely just “X dollars per month.” You also pay in implementation
                      time, data cleanup, training, and sometimes transaction or user limits. When comparing platforms:
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>Estimate subscription costs at your current and expected size over the next 2–3 years.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>
                          •
                        </span>
                        <span>
                          Clarify one-time implementation fees or partner costs—especially for tools like Cin7,
                          Unleashed, or Fishbowl.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Our{" "}
                      <Link href="/inventory/guides/inventory-software-pricing-guide" className={linkGreen}>
                        inventory software pricing guide
                      </Link>{" "}
                      goes deeper on common pricing models and how to budget realistically.
                    </p>
                  </div>
                </section>

                {/* ——— Conclusion ——— */}
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Make a right-sized choice for where you are—not where every vendor thinks you should be.">
                    Putting it all together
                  </SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choosing inventory management software is less about picking a perfect tool and more about picking
                      a good fit for your current stage, with a reasonable path forward as you grow. Small teams can
                      start with tools like Sortly, inFlow Inventory, or Zoho Inventory; larger or more complex
                      operations may move to Cin7, Unleashed, or Fishbowl; manufacturers often reach for Katana.
                    </p>
                    <p>
                      Use this framework, our{" "}
                      <Link href="/inventory" className={linkGreen}>
                        inventory hub
                      </Link>
                      ,{" "}
                      <Link href="/inventory/compare" className={linkGreen}>
                        comparison hub
                      </Link>
                      , and{" "}
                      <Link href="/inventory/best-inventory-software" className={linkGreen}>
                        best inventory software roundup
                      </Link>{" "}
                      to narrow the field to a handful of realistic candidates. Then run a short pilot with real data and
                      workflows—the best test of fit is how easily your team uses the tool over a few weeks.
                    </p>
                  </div>
                </section>

                {/* ——— FAQs ——— */}
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about choosing inventory platforms.">
                    FAQs
                  </SectionTitle>
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
          excludeHref="/inventory/guides/how-to-choose-inventory-management-software"
        />
      </main>

      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose Inventory Management Software | BeltStack Guide",
    description:
      "A practical framework for choosing inventory management software based on your size, channels, warehouses, manufacturing complexity, and budget.",
  };
}

