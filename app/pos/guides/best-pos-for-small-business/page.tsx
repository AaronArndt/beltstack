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
    q: "When should a small business move from a cash register to a POS system?",
    a: "When you need to track inventory, accept cards and contactless payments, or run reports on sales by item or time period. A POS also helps if you add a second location or start selling online and want one system for both.",
  },
  {
    q: "What is the best POS for a very small business?",
    a: "Square POS is a strong default: free software, low-cost hardware, and no long-term contract. Clover and Shopify POS are also popular—Clover for hardware choice and apps, Shopify POS when you already sell or plan to sell online on Shopify.",
  },
  {
    q: "Do small businesses need to pay monthly for POS software?",
    a: "Not always. Square offers free POS software; you pay for hardware and per-transaction processing. Other providers like Clover or Lightspeed typically charge a monthly fee that may include hardware. Compare total cost over a year, not just the monthly number.",
  },
  {
    q: "Can a small business POS integrate with accounting?",
    a: "Yes. Most modern POS systems integrate with QuickBooks, Xero, or other accounting tools so sales and payment data flow into your books. Check that the POS you choose supports your accounting platform.",
  },
];

export default function BestPosForSmallBusinessGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Best POS for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Best POS for Small Business
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    Why small businesses move beyond cash registers, what to look for in a POS, and which systems offer the best ease of use, pricing, and payment integrations.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many small businesses start with a simple cash register or a tablet and a card reader. That works until you need to track inventory, run reports, or accept more than one payment type. A dedicated POS system replaces guesswork with real-time sales data, item-level reporting, and integrated payments—without requiring enterprise budgets.
                    </p>
                    <p>
                      The right POS for a small business balances ease of use, transparent pricing, and enough features to support growth. Tools like{" "}
                      <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link>,{" "}
                      <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover POS</Link>, and{" "}
                      <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link>{" "}
                      are often at the top of the list because they’re approachable for small teams and scale as you add locations or channels. For a curated shortlist, see our{" "}
                      <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup; for head-to-heads, try{" "}
                      <Link href={getPosCompareUrl("square-pos-vs-shopify-pos")} className={linkGreen}>Square POS vs Shopify POS</Link> or{" "}
                      <Link href={getPosCompareUrl("square-pos-vs-clover-pos")} className={linkGreen}>Square POS vs Clover POS</Link>.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What matters most when choosing a POS as a small business.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Ease of use and quick setup</strong> matter more than feature count. Your team should be able to run the register and pull basic reports without lengthy training.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Pricing transparency</strong> helps you budget. Prefer systems with clear software and processing costs over long-term contracts or hidden fees.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Payment integrations</strong> should support the ways you take money today—cards, contactless, and optionally online or invoicing—so you’re not juggling multiple tools.</span>
                    </li>
                  </ul>
                </section>
                <section id="why-move-beyond-cash-registers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When a dedicated POS pays off.">Why small businesses move beyond cash registers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A basic cash register records sales but doesn’t tell you what sold, when, or how much you have left in stock. A POS system ties each sale to items in your catalog, updates inventory, and produces reports you can use for reordering and tax time. If you accept cards, a POS with integrated payment processing keeps everything in one place instead of reconciling a separate terminal and your register.
                    </p>
                    <p>
                      Small businesses often outgrow cash registers when they add a second register, a second location, or an online channel. A POS that supports multiple terminals and optional ecommerce (like Square or Shopify POS) grows with you without a full replacement later.
                    </p>
                  </div>
                </section>
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Features that matter for SMBs.">What to look for in a small business POS</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prioritize <strong className="text-[#1A2D48]">ease of use</strong>: staff should be able to ring sales, apply discounts, and process refunds with minimal training. <strong className="text-[#1A2D48]">Pricing</strong> should be clear—whether that’s free software plus transaction fees (Square) or a monthly bundle (Clover). <strong className="text-[#1A2D48">Payment processing</strong> should be built in or easy to connect so you’re not maintaining a separate gateway. Basic <strong className="text-[#1A2D48]">inventory and reporting</strong> help you see what’s selling and what’s low in stock; you can add deeper inventory or multi-location later if needed.
                    </p>
                    <p>
                      If you already sell online or plan to, consider a POS that unifies in-person and online sales (e.g. <Link href={getPosReviewUrl("shopify-pos")} className={linkGreen}>Shopify POS</Link>). If you’re in-person only and want the lowest commitment, <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link> or <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover POS</Link> are solid choices.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choose a POS that fits today and can grow.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      The best POS for a small business is one your team will actually use, with pricing you can sustain. Square, Clover, and Shopify POS lead many SMB shortlists because they’re easy to set up and scale. Use our <Link href="/pos" className={linkGreen}>POS hub</Link>, <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> roundup, <Link href="/pos/best-for/small-business" className={linkGreen}>best POS for small business</Link>, and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> to narrow the field, then try a front-runner with real transactions before committing long term.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about POS for small businesses.">FAQs</SectionTitle>
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
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/best-pos-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Best POS for Small Business | BeltStack Guide",
    description: "Why small businesses move beyond cash registers, what to look for in a POS, and which systems offer the best ease of use, pricing, and payment integrations.",
  };
}
