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
    q: "What is the first step in choosing a POS system?",
    a: "Define your business type and scale: single location or multi-location, retail or restaurant or both, in-person only or also ecommerce. That narrows the field to systems built for your model (e.g. Toast for restaurants, Lightspeed for retail, Shopify POS for ecommerce-first).",
  },
  {
    q: "How important are integrations when choosing a POS?",
    a: "Very. Your POS should connect to accounting (QuickBooks, Xero), and—if you sell online—to your ecommerce platform so inventory and orders stay in sync. Check integration availability and quality before committing.",
  },
  {
    q: "Should I choose a POS with or without built-in payment processing?",
    a: "Most SMBs prefer a POS that bundles or partners with a payment processor so setup is simple and support is one place. If you have an existing processor or strict rate requirements, look for a POS that allows bring-your-own processor.",
  },
  {
    q: "How do I know if I need restaurant-specific vs general POS?",
    a: "If you run full-service or quick-service with table management, kitchen display, or complex menus, choose a restaurant POS like Toast or TouchBistro. If you run a simple cafe, counter, or retail store, a general POS like Square or Clover may be enough.",
  },
];

export default function HowToChoosePosSystemGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Choose a POS System</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Choose a POS System
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    A step-by-step framework for choosing a POS based on business type, scale, integrations, reporting, and hardware needs.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choosing a POS can feel overwhelming: there are general-purpose systems like <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link> and <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover POS</Link>, retail-focused tools like <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed POS</Link> and <Link href={getPosReviewUrl("vend-pos")} className={linkGreen}>Vend POS</Link>, restaurant systems like <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>Toast</Link> and <Link href={getPosReviewUrl("touchbistro")} className={linkGreen}>TouchBistro</Link>, and ecommerce-unified options like <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link>. This guide gives you a framework to match your business type, scale, and must-haves to the right category and then narrow to a shortlist.
                    </p>
                    <p>
                      Use our <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> (e.g. <Link href={getPosCompareUrl("square-pos-vs-shopify-pos")} className={linkGreen}>Square vs Shopify POS</Link>, <Link href={getPosCompareUrl("toast-pos-vs-square-pos")} className={linkGreen}>Toast vs Square</Link>) to evaluate specific tools.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters most when evaluating POS systems.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Business type and scale</strong> drive the first cut: retail vs restaurant vs ecommerce-first, and single vs multi-location.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Integrations</strong>—accounting, ecommerce, inventory—must be available and reliable for your stack.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Reporting and hardware</strong> should match how you run the business today, with room to grow.</span>
                    </li>
                  </ul>
                </section>
                <section id="step-1-business-type" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Narrow by how you sell and where.">Step 1: Define business type and scale</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Are you retail, restaurant, or both? In-person only, or also selling online? Single location or multiple? Answers here rule whole categories in or out. Restaurants with table service and kitchen display need Toast or TouchBistro more than Square. Multi-location retailers need Lightspeed or Vend more than a basic counter POS. Ecommerce-first brands often choose Shopify POS so online and in-store stay on one platform.
                    </p>
                    <p>
                      Be honest about current scale and near-term plans. Overbuying leads to unused features and higher cost; underbuying means replacing the system sooner. Our <Link href="/pos/guides/retail-pos-software-guide" className={linkGreen}>retail POS guide</Link> and <Link href="/pos/guides/restaurant-pos-systems-guide" className={linkGreen}>restaurant POS guide</Link> go deeper by vertical.
                    </p>
                  </div>
                </section>
                <section id="step-2-integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What your POS must connect to.">Step 2: Map integrations</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      List the systems your POS must talk to: accounting (QuickBooks, Xero), ecommerce (Shopify, WooCommerce, etc.), and—if you use one—inventory or ERP. Confirm that each candidate POS has native or supported integrations for those tools and that the integration is supported on the plan you’re considering. A POS that can’t sync with your books or online store will create manual work and errors.
                    </p>
                    <p>
                      For inventory-heavy retail, see our <Link href="/pos/guides/pos-inventory-integration" className={linkGreen}>POS inventory integration guide</Link>. For ecommerce unification, see <Link href="/pos/guides/pos-system-for-ecommerce" className={linkGreen}>POS system for ecommerce</Link>.
                    </p>
                  </div>
                </section>
                <section id="step-3-reporting-hardware" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reporting and hardware that fit your workflow.">Step 3: Reporting and hardware</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Reporting should answer the questions you ask daily and at month-end: sales by item, category, time period, and—for multi-location—by store. Restaurant POS should add food cost, labor, and day-part views. Confirm that reports are available on the plan you want and that you can export or integrate with accounting.
                    </p>
                    <p>
                      Hardware needs depend on your layout: counter terminal, handheld, or full register; receipt printers, cash drawers, and scanners. Some providers (Square, Clover) sell and support their own hardware; others support bring-your-own or partner devices. Match the hardware options to your space and budget—see our <Link href="/pos/guides/pos-software-pricing-guide" className={linkGreen}>POS software pricing guide</Link> for cost context.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Make a right-sized choice.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Use business type and scale to pick a category (general, retail, restaurant, ecommerce-unified), then narrow by integrations, reporting, and hardware. Run a shortlist from our <Link href="/pos" className={linkGreen}>POS hub</Link>, <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link>, and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> through a trial with real products and transactions. The best test of fit is how easily your team uses the system day to day.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about choosing a POS.">FAQs</SectionTitle>
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
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/how-to-choose-pos-system" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Choose a POS System | BeltStack Guide",
    description: "A step-by-step framework for choosing a POS based on business type, scale, integrations, reporting, and hardware needs.",
  };
}
