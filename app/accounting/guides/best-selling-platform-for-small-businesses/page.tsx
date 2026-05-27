import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/best-selling-platform-for-small-businesses";

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
  "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";

const FAQ_ITEMS = [
  {
    q: "What is the best-selling accounting software for small business?",
    a: "QuickBooks Online is widely regarded as the best-selling small business accounting platform in the US by subscriber count and accountant adoption. Xero and Wave are major alternatives.",
  },
  {
    q: "Does best-selling mean best for my company?",
    a: "Not always. Best-selling reflects distribution and ecosystem. A smaller tool may fit better if you are a solo freelancer or need lower cost.",
  },
  {
    q: "What is the best-selling ecommerce platform for small business?",
    a: "Shopify is often cited as the leading SMB ecommerce platform in North America. Retail also uses Square, WooCommerce, and Amazon alongside accounting tools.",
  },
  {
    q: "What does platform mean vs software?",
    a: "Platform implies extensibility—apps, APIs, marketplaces. QuickBooks and Shopify are platforms; a standalone spreadsheet is not.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Best-selling accounting", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Strong #2", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free adoption", reviewHref: getAccountingReviewUrl("wave") },
];

export default function BestSellingPlatformForSmallBusinessesPage() {
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
                    <li><Link href="/accounting" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Accounting</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/accounting/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Best-Selling Platforms</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Is the Best Selling Platform for Small Businesses?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Best-selling depends on category—accounting, ecommerce, payments—not one product for every business.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      &quot;Best selling platform&quot; sounds like one answer—QuickBooks? Shopify? Microsoft?—but the question only makes sense <strong className="text-[#1A2D48]">inside a category</strong>. Accounting leaders differ from ecommerce leaders differ from CRM leaders. You are usually looking for a safe default before you read feature comparisons.
                    </p>
                    <p>
                      Searchers often mean &quot;what do most businesses buy?&quot; There is no single best-selling platform across all functions—compare within category. BeltStack cites market leaders from independent reviews, not paid rankings.
                    </p>
                    <p className="text-sm text-neutral-600">
                      Sales figures change quarterly; use this guide for category defaults, then verify fit with trials and <Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>good-fit criteria</Link>.
                    </p>
                  </div>
                </section>
                <section id="by-category" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Leaders by software type.">Best-Selling by Category</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Accounting</strong> — <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks Online</Link> (US leader); <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link> strong internationally.</p>
                    <p><strong className="text-[#1A2D48]">Payments / POS</strong> — Square, Stripe (<Link href="/payment-processing" className={linkGreen}>payments</Link>).</p>
                    <p><strong className="text-[#1A2D48]">Ecommerce</strong> — Shopify (<Link href="/website-builders" className={linkGreen}>website builders</Link>).</p>
                    <p><strong className="text-[#1A2D48]">CRM</strong> — HubSpot, Salesforce (<Link href="/crm" className={linkGreen}>CRM hub</Link>).</p>
                    <p><strong className="text-[#1A2D48]">Productivity</strong> — Microsoft 365, Google Workspace (<Link href="/accounting/guides/most-common-types-of-office-software" className={linkGreen}>office software</Link>).</p>
                  </div>
                </section>
                <section id="when-leaders" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When market leaders earn their share.">When Best-Selling Tools Make Sense</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Leaders often win on accountant familiarity, integration marketplaces, and support depth—valuable when you need help at tax time or when hiring a bookkeeper who already knows the UI. QuickBooks-class accounting and Shopify-class ecommerce are examples where ecosystem size matters.
                    </p>
                    <p>
                      They make less sense when you are a solo on a tight budget (free tiers may suffice), or when a niche vertical tool does one job dramatically better—field service, restaurant POS, or agency time billing.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Popularity is data—not destiny.">Why Category Leaders Matter (and Don&apos;t)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Knowing best-sellers helps you shortlist and hire advisors who already speak the product. It does not replace checking your workflows, states, and total cost. Pair this page with <Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>commonly used software</Link> for adoption context.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buying the logo, not the job.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Assuming one brand covers payroll, CRM, and books equally well.</strong> Many are strong in one category with add-ons elsewhere.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Paying for enterprise tiers too early.</strong> Start where your transaction volume actually sits.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Ignoring regional fit.</strong> Xero share vs QuickBooks varies by country and advisor pool.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack references market position when it helps readers orient, but review scores come from hands-on testing and SMB-specific criteria—not vendor revenue claims. We disclose when a lesser-known product outperforms a best-seller for a defined use case.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Compare within your category.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/examples-of-business-application-software" className={linkGreen}>Examples of business application software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payment-processing" className={linkGreen}>Payment processing hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>Widely used categories</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>Is QuickBooks worth it?</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Market leaders" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedAccountingResources excludeHref={PAGE_HREF} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Is the Best Selling Platform for Small Businesses? | BeltStack Guide",
    description:
      "Best-selling SMB platforms by category—QuickBooks, Shopify, Square, HubSpot—and when market leaders are (or aren’t) the right pick.",
  };
}
