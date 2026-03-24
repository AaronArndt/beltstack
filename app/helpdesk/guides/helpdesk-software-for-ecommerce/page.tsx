import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedHelpdeskResources } from "@/components/guides/RelatedHelpdeskResources";
import { getHelpdeskReviewUrl, getHelpdeskCompareUrl } from "@/lib/routes";
import { HELPDESK_LOGOS } from "@/lib/data/helpdeskHubData";

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

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Gorgias", logoSrc: HELPDESK_LOGOS.gorgias, rating: "4.5", bestFor: "Ecommerce, Shopify/Magento", reviewHref: getHelpdeskReviewUrl("gorgias") },
  { name: "Zendesk", logoSrc: HELPDESK_LOGOS.zendesk, rating: "4.5", bestFor: "Full helpdesk + ecommerce apps", reviewHref: getHelpdeskReviewUrl("zendesk") },
  { name: "Freshdesk", logoSrc: HELPDESK_LOGOS.freshdesk, rating: "4.5", bestFor: "Value, store integrations", reviewHref: getHelpdeskReviewUrl("freshdesk") },
];

const FAQ_ITEMS = [
  { q: "What helpdesk is best for ecommerce?", a: "Gorgias is built for ecommerce with deep Shopify and Magento integration—order context and macros in the ticket. Zendesk and Freshdesk also integrate with stores and are strong general helpdesks. Choose Gorgias when support is heavily order-focused." },
  { q: "Why do ecommerce teams need order context in the helpdesk?", a: "Agents often need to see order history, shipping status, and returns without switching to the store admin. Helpdesks like Gorgias surface this in the ticket, reducing resolution time and back-and-forth with the customer." },
  { q: "Can helpdesk software integrate with Shopify?", a: "Yes. Gorgias has native Shopify integration with order and customer data. Zendesk and Freshdesk offer Shopify apps and integrations. Check each vendor's integration list for your store platform." },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software Hub", href: "/helpdesk" },
  { label: "Best Helpdesk Software", href: "/helpdesk/best-helpdesk-software" },
  { label: "Compare Helpdesk Software", href: "/helpdesk/compare" },
  { label: "Gorgias vs Zendesk", href: getHelpdeskCompareUrl("gorgias-vs-zendesk") },
  { label: "Gorgias Review", href: getHelpdeskReviewUrl("gorgias") },
  { label: "Helpdesk Guides", href: "/helpdesk/guides" },
];

export default function HelpdeskForEcommercePage() {
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
                    <li><Link href="/helpdesk" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Helpdesk</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/helpdesk/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Helpdesk Software for Ecommerce</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Helpdesk Software for Ecommerce
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Order-related support, customer history, integrations with storefronts, and handling high message volume.
                  </p>
                  <GuideLastUpdated date="March 13, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Ecommerce support is different from general B2B or SaaS support. Customers ask about orders, shipping, returns, and refunds—and they expect fast, accurate answers. A helpdesk that integrates deeply with your store can show order history, fulfillment status, and customer data right in the ticket, so agents don't have to jump between tools.</p>
                    <p>Platforms like <Link href={getHelpdeskReviewUrl("gorgias")} className={linkGreen}>Gorgias</Link> are built for ecommerce with native Shopify and Magento integration; <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk</Link> and <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk</Link> offer store integrations and scale for high volume. See our <Link href="/helpdesk/best-helpdesk-software" className={linkGreen}>best helpdesk software</Link> roundup and <Link href={getHelpdeskCompareUrl("gorgias-vs-zendesk")} className={linkGreen}>Gorgias vs Zendesk</Link> for comparisons.</p>
                  </div>
                </section>
                <section id="key-takeaways" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What ecommerce support teams need.">Key takeaways</SectionTitle>
                  <ul className="space-y-2 list-none text-[15px] leading-relaxed text-neutral-700">
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Order-related support</strong> — Look for order lookup, shipping status, and the ability to process refunds or create returns from the helpdesk. Reduces context switching and resolution time.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Customer history</strong> — Full order and conversation history in one place so agents don't ask customers to repeat themselves.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Storefront integrations</strong> — Native or deep integration with Shopify, Magento, or your platform. The best ecommerce helpdesks surface store data inside the ticket.</span></li>
                    <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">High message volume</strong> — Macros, canned responses, and automation (e.g. routing by order status) help teams handle peak volume without burning out.</span></li>
                  </ul>
                </section>
                <section id="recommended-tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Top helpdesk tools for ecommerce.">Recommended helpdesk tools for ecommerce</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Gorgias</strong> — Built for ecommerce with deep Shopify and Magento integration; order context and macros in the ticket. Best when support revolves around orders and the store. <Link href={getHelpdeskReviewUrl("gorgias")} className={linkGreen}>Gorgias review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Zendesk</strong> — Full helpdesk with a large app ecosystem; Shopify and ecommerce integrations available. Scales for high volume. <Link href={getHelpdeskReviewUrl("zendesk")} className={linkGreen}>Zendesk review</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Freshdesk</strong> — Good value and store integrations; solid option when you want helpdesk depth without Gorgias-level ecommerce focus. <Link href={getHelpdeskReviewUrl("freshdesk")} className={linkGreen}>Freshdesk review</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Helpdesk to Compare" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedHelpdeskResources items={RELATED_ITEMS} excludeHref="/helpdesk/guides/helpdesk-software-for-ecommerce" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Helpdesk Software for Ecommerce | BeltStack Guide",
    description: "Order-related support, customer history, store integrations, and handling high volume. Top picks: Gorgias, Zendesk, Freshdesk for ecommerce teams.",
  };
}
