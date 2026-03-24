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
    q: "Is there free POS software?",
    a: "Yes. Square offers free POS software; you pay for hardware and per-transaction processing. Other providers typically charge a monthly subscription that may include software and sometimes hardware. Compare total cost over a year, including processing and add-ons.",
  },
  {
    q: "What are typical POS software monthly costs?",
    a: "General-purpose POS can start at $0 (Square) or roughly $30–70/month (Clover, Lightspeed, Epos Now). Restaurant POS like Toast or TouchBistro often starts in a similar range or higher with quote-based pricing. Total cost depends on hardware, processing, and add-ons.",
  },
  {
    q: "How do POS transaction fees work?",
    a: "Most POS providers that offer integrated processing charge a percentage and/or fixed fee per transaction (e.g. a few percent plus a few cents per swipe). Rates can vary by card type and volume. Review the processor’s fee schedule before you sign.",
  },
];

export default function PosSoftwarePricingGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">POS Software Pricing Guide</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    POS Software Pricing Guide
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How POS pricing works: subscription vs transaction fees, hardware costs, and what to budget for retail and restaurant operations.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      POS pricing is rarely a single number. You often see a combination of software (monthly or free), hardware (one-time or bundled), and payment processing (per transaction). Some providers quote everything together; others break out software, hardware, and processing. This guide explains common models—subscription, transaction fees, hardware—so you can compare <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link>, <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover</Link>, <Link href={getPosReviewUrl("lightspeed-pos")} className={linkGreen}>Lightspeed</Link>, <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>Toast</Link>, and others on a level playing field.
                    </p>
                    <p>
                      For a shortlist by use case, see our <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup, <Link href="/pos/best-for/small-business" className={linkGreen}>best POS for small business</Link>, and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> like <Link href={getPosCompareUrl("square-pos-vs-clover-pos")} className={linkGreen}>Square POS vs Clover POS</Link>.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What drives POS cost.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Software</strong> can be free (e.g. Square) or a monthly subscription; subscriptions may include or exclude hardware.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Processing</strong> is usually a percentage and/or fixed fee per transaction. Compare effective rate at your volume.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Hardware</strong> may be one-time purchase, lease, or bundled into a monthly fee. Add-ons (extra terminals, printers) can increase cost.</span>
                    </li>
                  </ul>
                </section>
                <section id="subscription-vs-transaction" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Software and processing models.">Subscription vs transaction fees</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many POS systems charge a monthly subscription for software (and sometimes hardware). Square stands out with free POS software—you pay for hardware and per-transaction processing. That can mean lower fixed cost but higher variable cost at high volume. Clover, Lightspeed, Toast, and others typically charge a monthly fee that may include a terminal or register; processing is additional. Compare your expected monthly sales volume to the total of subscription plus processing to see which model wins for you.
                    </p>
                    <p>
                      Restaurant POS (Toast, TouchBistro) often uses quote-based pricing that bundles software, hardware, and processing. Retail POS (Lightspeed, Vend, Square) tends to have more published tiers. Always ask what’s included (terminals, support, reporting tier) and what adds cost (extra locations, advanced features).
                    </p>
                  </div>
                </section>
                <section id="hardware-costs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Terminals, printers, and accessories.">Hardware costs</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Hardware can be a one-time purchase (e.g. Square reader from about $49), a monthly bundle (e.g. Clover device included in subscription), or a lease. Printers, cash drawers, and barcode scanners add to the bill. For multi-location or multi-register setups, multiply by the number of stations and confirm whether the provider offers volume or multi-site pricing.
                    </p>
                    <p>
                      When comparing, add hardware cost over the life you expect to use it (e.g. 3–5 years) to software and processing. Our <Link href="/pos" className={linkGreen}>POS hub</Link> and individual <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square</Link> and <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover</Link> reviews summarize typical pricing; confirm current numbers on each provider’s site.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Budget for the full stack.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Total cost = software (or $0) + hardware (one-time or monthly) + processing (per transaction) + any add-ons. Use our <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> to compare options, and run the numbers at your expected volume before you commit.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about POS pricing.">FAQs</SectionTitle>
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
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/pos-software-pricing-guide" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "POS Software Pricing Guide | BeltStack",
    description: "How POS pricing works: subscription vs transaction fees, hardware costs, and what to budget for retail and restaurant operations.",
  };
}
