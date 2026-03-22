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
    q: "What is the best POS for ecommerce businesses?",
    a: "Shopify POS is the strongest fit when your primary sales channel is a Shopify store—online and in-store share one catalog, inventory, and orders. If you’re not on Shopify, Square or Lightspeed can connect to other ecommerce platforms so inventory stays in sync.",
  },
  {
    q: "Can I use the same inventory for my online store and my POS?",
    a: "Yes. POS systems that integrate with ecommerce (Shopify POS natively, or Square/Lightspeed via connectors) keep one inventory count. Sales from the web and the register both update the same stock so you avoid overselling.",
  },
  {
    q: "Do I need Shopify to use Shopify POS?",
    a: "Yes. Shopify POS requires a Shopify subscription. It’s most cost-effective when you already run (or plan to run) your online store on Shopify so that one platform covers both channels.",
  },
];

export default function PosSystemForEcommerceGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">POS System for Ecommerce</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    POS System for Ecommerce
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    How to unify online and in-person sales with a POS that syncs with your ecommerce store.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you sell both online and in person, you have two choices: run two separate systems (and manually or via integrations keep inventory and orders in sync) or use a single platform that handles both channels. A POS built for ecommerce unification—most notably <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link>—keeps one product catalog, one inventory count, and one order set for your website and your register. That reduces double entry, overselling, and reporting headaches.
                    </p>
                    <p>
                      This guide explains how unified online-and-in-store POS works and when it’s worth it. For comparisons, see <Link href={getPosCompareUrl("square-pos-vs-shopify-pos")} className={linkGreen}>Square POS vs Shopify POS</Link> and <Link href={getPosCompareUrl("shopify-pos-vs-lightspeed-pos")} className={linkGreen}>Shopify POS vs Lightspeed POS</Link>; for a shortlist, our <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup and <Link href="/pos/best-for/ecommerce" className={linkGreen}>best POS for ecommerce</Link>.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why unification matters.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Unified commerce</strong> means one catalog, one inventory, and one set of orders for online and in-person—so you don’t oversell or reconcile two systems.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Shopify POS</strong> is the natural choice when your storefront is (or will be) on Shopify; it’s the tightest unification.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Other POS systems (Square, Lightspeed) can integrate with ecommerce platforms so inventory syncs even if the POS and store aren’t from the same vendor.</span>
                    </li>
                  </ul>
                </section>
                <section id="unified-vs-integrated" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One platform vs integrations.">Unified vs integrated</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      With Shopify POS, your online store and your in-person register are the same Shopify product and order set. Add a product once; it’s available online and at the register. Sell in either channel and inventory updates everywhere. That’s unified commerce in one vendor.
                    </p>
                    <p>
                      With Square or Lightspeed, you typically run your ecommerce store on a separate platform (Shopify, WooCommerce, etc.) and connect it to the POS via an integration. The integration syncs inventory and sometimes orders, but you’re still managing two systems. Integration depth varies—some connectors are robust; others are basic. If you’re not committed to Shopify, an integrated approach can work; if you are all-in on Shopify, Shopify POS is usually the simplest path.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choose based on where you sell.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For ecommerce-first brands that want one system for web and store, <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link> is the leading option. For in-person-first businesses that also sell online, Square or Lightspeed with ecommerce integrations may be enough. Use our <Link href="/pos" className={linkGreen}>POS hub</Link>, <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link>, and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> to evaluate fit.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about POS and ecommerce.">FAQs</SectionTitle>
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
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/pos-system-for-ecommerce" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "POS System for Ecommerce | BeltStack Guide",
    description: "How to unify online and in-person sales with a POS that syncs with your ecommerce store.",
  };
}
