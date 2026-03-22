import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedPosResources } from "@/components/guides/RelatedPosResources";
import { POS_GUIDE_SIDEBAR_ITEMS, POS_GUIDE_RELATED_ITEMS } from "@/lib/data/posGuides";
import { getPosReviewUrl, getPosCompareUrl } from "@/lib/routes";

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
    q: "What is the best POS for restaurants?",
    a: "Toast POS and TouchBistro are among the top choices for full-service and quick-service restaurants. They offer table management, kitchen display, and restaurant-specific reporting. For very simple cafes or counters, Square POS can be enough.",
  },
  {
    q: "Do restaurant POS systems support table service?",
    a: "Yes. Restaurant-focused systems like Toast and TouchBistro support floor plans, table status, course firing, and server sections. General-purpose POS systems like Square or Clover have limited table management; restaurant-specific tools are better for full-service.",
  },
  {
    q: "What is a kitchen display system (KDS)?",
    a: "A KDS shows orders to the kitchen in sequence, often by station or course. It reduces errors and speeds service. Toast and TouchBistro offer integrated KDS; some general POS systems support it via add-ons or third-party hardware.",
  },
];

export default function RestaurantPosSystemsGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/pos" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">POS Software</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/pos/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Restaurant POS Systems Guide</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Restaurant POS Systems Guide
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Restaurant workflows, menu management, table service, and order routing—and how to choose a POS built for food service.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Restaurants have different needs than retail: tables, courses, modifiers, kitchen display, and often online ordering and delivery. A general-purpose POS can handle basic counter sales, but full-service or high-volume restaurants usually need a system designed for food service. <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>Toast POS</Link> and <Link href={getPosReviewUrl("touchbistro")} className={linkGreen}>TouchBistro</Link> are built for that; <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link> can work for simple cafes. This guide explains restaurant workflows and what to look for when comparing systems.
                    </p>
                    <p>
                      For a direct comparison, see <Link href={getPosCompareUrl("toast-pos-vs-square-pos")} className={linkGreen}>Toast POS vs Square POS</Link>; for restaurant-specific picks, our <Link href="/pos/best-for/restaurants" className={linkGreen}>best POS for restaurants</Link> and <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters for restaurant POS.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Menu management</strong> should support items, modifiers, courses, and price changes without breaking reporting or kitchen flow.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Table service and order routing</strong>—floor plans, course firing, and kitchen display—are essential for full-service restaurants.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Reporting</strong> should speak in restaurant terms: food cost, labor, sales by day part, and category performance.</span>
                    </li>
                  </ul>
                </section>
                <section id="restaurant-workflows" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How restaurant POS supports front and back of house.">Restaurant workflows</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      In a full-service restaurant, the POS connects the front of house (tables, orders, payments) to the back (kitchen display, prep, expo). Servers send orders to the kitchen by course; the kitchen sees them on a KDS and marks them complete. The POS tracks open tabs, splits checks, and handles tips. Menu management includes items, modifiers (e.g. “no ice”), and course sequencing so tickets print or display in the right order.
                    </p>
                    <p>
                      Quick-service and fast-casual often need faster throughput, drive-thru or pickup integration, and sometimes delivery aggregation. Toast and TouchBistro support these patterns; general POS systems may require add-ons or custom integration. When evaluating, confirm that table management, KDS, and online ordering match your service model—see our <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>Toast POS</Link> and <Link href={getPosReviewUrl("touchbistro")} className={linkGreen}>TouchBistro</Link> reviews for detail.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choose a POS built for how you serve.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For full-service or complex quick-service, invest in a restaurant POS like Toast or TouchBistro. For simple counters or cafes, Square may be enough. Use our <Link href="/pos" className={linkGreen}>POS hub</Link>, <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link>, and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> to narrow the field and run a trial in your environment.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about restaurant POS.">FAQs</SectionTitle>
                  <div className="max-w-[720px]">
                    <GuideFaqSection faqs={FAQ_ITEMS} />
                  </div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Recommended POS Software" items={POS_GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/restaurant-pos-systems-guide" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Restaurant POS Systems Guide | BeltStack",
    description: "Restaurant workflows, menu management, table service, and order routing—and how to choose a POS built for food service.",
  };
}
