import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar } from "@/components/guides/GuideSidebar";
import { RelatedPosResources } from "@/components/guides/RelatedPosResources";
import { POS_GUIDE_SIDEBAR_ITEMS, POS_GUIDE_RELATED_ITEMS } from "@/lib/data/posGuides";
import { getPosReviewUrl } from "@/lib/routes";

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
    q: "Do I need both a POS and a payment processor?",
    a: "Often they come together: many POS systems bundle or partner with a processor so you get both. If you already have a processor you want to keep, look for a POS that supports “bring your own processor” or has a compatible integration.",
  },
  {
    q: "What is the difference between POS software and a payment gateway?",
    a: "POS software runs your register—items, cart, discounts, inventory, reporting. A payment gateway (or processor) authorizes and settles card (or other) payments. The POS sends the transaction to the gateway; the gateway talks to card networks and banks. Many POS products include or partner with a gateway so you configure one system.",
  },
  {
    q: "Can I use my existing payment processor with a new POS?",
    a: "It depends on the POS. Some systems are locked to their own processing; others allow you to connect a third-party processor. Check the POS provider’s documentation or sales team before you assume you can keep your current processor.",
  },
];

export default function PosVsPaymentProcessorGuidePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">POS vs Payment Processor</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    POS vs Payment Processor
                  </h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    The difference between POS software and payment gateways—and when you need each.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      POS software and payment processors are often sold together, but they do different jobs. The POS is the application that runs your register: it manages products, the shopping cart, discounts, inventory updates, and reporting. The payment processor (or gateway) is the service that authorizes and settles card and other electronic payments—it talks to card networks and banks so money moves from the customer’s account to yours.
                    </p>
                    <p>
                      When you choose a POS like <Link href={getPosReviewUrl("square-pos")} className={linkGreen}>Square POS</Link>, <Link href={getPosReviewUrl("clover-pos")} className={linkGreen}>Clover POS</Link>, or <Link href={getPosReviewUrl("toast-pos")} className={linkGreen}>Toast</Link>, you’re often getting both: the POS sends the transaction to a processor (sometimes the same company’s), and you configure one system. This guide clarifies the roles so you know what you’re buying and when you need each piece.
                    </p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick distinction.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">POS software</strong> = the register app: items, cart, inventory, reporting. It creates the transaction and sends it for payment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span><strong className="text-[#1A2D48]">Payment processor</strong> = the service that authorizes and settles the payment with card networks and banks.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span>
                      <span>Many POS systems bundle or partner with a processor so you get both in one setup; some POS systems let you use your own processor.</span>
                    </li>
                  </ul>
                </section>
                <section id="when-you-need-each" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When each is required.">When you need a POS vs a payment processor</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      You need a way to accept payments (a processor or gateway) whenever you take cards or other electronic payments. You need a POS when you also want to manage a product catalog, track inventory, run reports, or support multiple terminals or locations. A simple card reader with an app might be enough for a sole proprietor who doesn’t track inventory; a store or restaurant typically needs a full POS that includes or connects to processing.
                    </p>
                    <p>
                      If you’re evaluating POS systems, assume most will want to provide (or require) their own processing. If you have an existing processor or negotiated rates you want to keep, look for a POS that explicitly supports third-party or bring-your-own processor—and confirm compatibility before you commit. For more on cost, see our <Link href="/pos/guides/pos-software-pricing-guide" className={linkGreen}>POS software pricing guide</Link> and <Link href="/pos" className={linkGreen}>POS hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="conclusion" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="One system or two.">Putting it together</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      For most small businesses, a POS that bundles processing (Square, Clover, Toast, Shopify POS, etc.) is the simplest path. If you have special processor requirements, choose a POS that can connect to your processor or shop for a POS + processor pair that fits. Use our <Link href="/pos/best-pos-software" className={linkGreen}>best POS software</Link> and <Link href="/pos/compare" className={linkGreen}>comparisons</Link> to compare options.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common questions about POS and payment processing.">FAQs</SectionTitle>
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
        <RelatedPosResources items={POS_GUIDE_RELATED_ITEMS} excludeHref="/pos/guides/pos-vs-payment-processor" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "POS vs Payment Processor | BeltStack Guide",
    description: "The difference between POS software and payment gateways—and when you need each.",
  };
}
