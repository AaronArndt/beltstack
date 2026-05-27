import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getHelpdeskReviewUrl } from "@/lib/routes";

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
    q: "Do ecommerce businesses need CRM?",
    a: "Pure D2C stores with self-serve checkout may rely on ecommerce platform email and helpdesk first. CRM matters when you have B2B accounts, high-touch sales, wholesale, or repeat buyers you manage like accounts—not only one-off orders.",
  },
  {
    q: "What is the difference between ecommerce CRM and a helpdesk?",
    a: "Helpdesk handles support tickets and order issues. CRM handles sales relationships, deals, and account growth. Ecommerce brands often use Gorgias or Zendesk for support and HubSpot or similar for B2B pipeline.",
  },
  {
    q: "Can Shopify replace CRM?",
    a: "Shopify manages customers and orders for the store; it is not a full sales CRM for complex B2B pipeline, activities, and forecasting. Integrate Shopify data into CRM when you need those capabilities.",
  },
  {
    q: "How does CRM help ecommerce retention?",
    a: "CRM segments high-value buyers, tracks outreach for wholesale or VIP programs, and coordinates sales and success on B2B accounts. Marketing automation and email tools handle campaign scale; see how CRM helps customer retention.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "B2B + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Gorgias", logoSrc: "/Logos/gorgias.jpeg", rating: 4.5, bestFor: "Ecommerce support", reviewHref: getHelpdeskReviewUrl("gorgias") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "Helpdesk Software for Ecommerce", href: "/helpdesk/guides/helpdesk-software-for-ecommerce" },
  { label: "CRM vs Helpdesk Software", href: "/crm/guides/crm-vs-helpdesk-software" },
  { label: "How CRM Helps Customer Retention", href: "/crm/guides/how-crm-software-helps-customer-retention" },
  { label: "Email Marketing Hub", href: "/email-marketing" },
  { label: "Accounting for Ecommerce", href: "/accounting/best-for/ecommerce" },
];

export default function HowCrmSoftwareHelpsEcommerceBusinessesPage() {
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
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Ecommerce Businesses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Ecommerce Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When online retailers need CRM: B2B and wholesale, high-touch sales, VIP accounts—and how CRM fits with Shopify, helpdesk, and email tools.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Ecommerce platforms excel at carts, catalog, and transactions. CRM excels at relationships—especially when a human sells before the order ships: wholesale buyers, corporate gifting, or key accounts that need a named rep.
                    </p>
                    <p>
                      Support-heavy D2C brands often start with <Link href={getHelpdeskReviewUrl("gorgias")} className={linkGreen}>Gorgias</Link>—see <Link href="/helpdesk/guides/helpdesk-software-for-ecommerce" className={linkGreen}>helpdesk software for ecommerce</Link>. Add <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> when pipeline and account management mature.
                    </p>
                  </div>
                </section>
                <section id="when-crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Not every store needs Salesforce on day one.">When Ecommerce Brands Adopt CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">B2B and wholesale</strong> — Quotes, net terms, rep-owned accounts.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">High AOV consultative sales</strong> — Custom orders before checkout.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Marketplace plus direct</strong> — Coordinate key retailer relationships.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Subscription or replenishment B2B</strong> — Renewal and expansion tracking.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical ecommerce revenue stack.">CRM With Store, Support, and Marketing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Store</strong> — Shopify, WooCommerce, etc. for orders.</p>
                    <p><strong className="text-[#1A2D48]">Helpdesk</strong> — <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link> for post-purchase support.</p>
                    <p><strong className="text-[#1A2D48]">Email and SMS</strong> — <Link href="/email-marketing/best-email-marketing-software" className={linkGreen}>email marketing</Link> for campaigns; CRM for sales-owned accounts.</p>
                    <p><strong className="text-[#1A2D48]">Finance</strong> — <Link href="/accounting/best-for/ecommerce" className={linkGreen}>accounting for ecommerce</Link> for books.</p>
                    <p>Connect systems via <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>CRM integrations</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Ecommerce CRM stack" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-ecommerce-businesses" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Ecommerce Businesses | BeltStack Guide",
    description:
      "Learn when ecommerce businesses need CRM for B2B, wholesale, and high-touch sales—and how CRM fits with store, helpdesk, and marketing tools.",
  };
}
