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
    q: "What is the best POS for a retail store?",
    a: "It depends on size and complexity. Square and Lightspeed are strong for many retailers; Lightspeed adds deeper inventory and multi-location. Vend (Lightspeed Retail) is another retail-focused option. See our retail POS comparisons and best POS roundup for details.",
  },
  {
    q: "Do retail POS systems track inventory?",
    a: "Yes. Most retail POS systems include product catalogs, stock levels, and low-stock alerts. Advanced platforms like Lightspeed support multi-location inventory, purchasing, and transfers. Square offers basic inventory with optional add-ons.",
  },
  {
    q: "Can a retail POS integrate with ecommerce?",
    a: "Many can. Shopify POS unifies online and in-store on Shopify. Lightspeed and Vend connect to ecommerce platforms so inventory stays in sync. Square can connect to online stores and marketplaces. Choose based on whether you need a single platform (Shopify) or best-of-breed flexibility.",
  },
];

export default function RetailPosSoftwareGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/pos" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">POS Software</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/pos/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Retail POS Software Guide</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Retail POS Software Guide
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How retail POS systems handle inventory management, reporting, and customer tracking—and which platforms fit single-location and multi-store retailers.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Retail POS software does more than process sales. It ties each transaction to products in your catalog, updates stock levels, and produces reports that help you understand what’s selling, what’s not, and when to reorder. For single-location stores, a straightforward system like <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square</Link> may be enough. For multi-store or inventory-heavy retail, platforms like <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed</Link> and <Link href={getPosReviewUrl("vend-pos")} className={linkGreen}>Vend</Link> add the depth you need.
                    </p>
                    <p>
                      This guide covers what to look for in a retail POS—inventory, reporting, customer tracking, and integrations—and how to compare options. For head-to-heads, see <Link href={getPosCompareUrl("shopify-pos-vs-lightspeed-pos")} className={linkGreen}>Shopify POS vs Lightspeed</Link> and <Link href={getPosCompareUrl("lightspeed-pos-vs-vend-pos")} className={linkGreen}>Lightspeed vs Vend</Link>; for a shortlist, our <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup and <Link href="/pos/best-for/retail" className={linkGreen}>best POS for retail</Link>.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters for retail POS.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Inventory management</strong> should support your SKU count, variants, and—if you have more than one location—multi-store stock and transfers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Reporting and analytics</strong> should give you sales by product, category, and time period so you can reorder and plan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Customer tracking</strong> (optional) can support loyalty or repeat-purchase insights; not every retailer needs it on day one.</span>
                    </li>
                  </ul>
                </section>
                <section id="inventory-and-reporting" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Core retail capabilities.">Inventory management and reporting</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A retail POS should maintain a product catalog with SKUs, prices, and variants. Sales automatically decrement stock; receiving and adjustments keep counts accurate. Low-stock alerts help you reorder before you run out. For one store, this can be simple. For multiple locations, you need a system that supports per-store or centralized inventory and transfers—Lightspeed and Vend are built for that.
                    </p>
                    <p>
                      Reporting should answer: What sold today? What’s selling by category? What’s low in stock? Export and accounting integrations (e.g. QuickBooks) keep your books in sync. Compare <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed</Link>, <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square</Link>, and <Link href={getPosReviewUrl("vend-pos")} className={linkGreen}>Vend</Link> for retail-focused features and pricing.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match the POS to your retail complexity.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Choose a retail POS that fits your current store count and inventory complexity. Use our <Link href="/pos" className={linkGreen}>POS hub</Link>, <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link>, and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> to evaluate Lightspeed, Square, Vend, and others—then run a trial with real products and sales to confirm the fit.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about retail POS.">FAQs</SectionTitle>
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
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/retail-pos-software-guide" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Retail POS Software Guide | BeltStack",
    description: "How retail POS systems handle inventory, reporting, and customer tracking—and which platforms fit single-location and multi-store retailers.",
  };
}
