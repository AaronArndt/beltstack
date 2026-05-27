import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-software-is-most-commonly-used-by-small-businesses";

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
    q: "What is the most common accounting software for small business?",
    a: "QuickBooks Online has the largest US SMB mindshare; Xero is strong globally; Wave is common for free-tier adoption. Accountant preference often drives the final choice.",
  },
  {
    q: "What CRM do small businesses use most?",
    a: "HubSpot (free tier), Salesforce (scaling teams), and Zoho CRM (value) appear frequently. See our best CRM software roundup for current picks and tradeoffs.",
  },
  {
    q: "Do most small businesses use Microsoft or Google?",
    a: "Both are widespread for email and documents. Choice is often historical—pick one suite and standardize.",
  },
  {
    q: "Does common mean best for my business?",
    a: "No. Common tools are proven defaults; your industry, accountant, and workflow may favor alternatives. BeltStack reviews by use case, not popularity alone.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Common US default", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Common alternative", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Common free pick", reviewHref: getAccountingReviewUrl("wave") },
];

export default function WhatSoftwareIsMostCommonlyUsedBySmallBusinessesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Common SMB Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Software Is Most Commonly Used by Small Businesses?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    The accounting, payments, CRM, and productivity tools SMBs adopt most—and how to choose beyond popularity.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      People search this when they want a <strong className="text-[#1A2D48]">safe default</strong>—the names they will not get fired for choosing, or what their accountant already knows. That is a reasonable starting point, but market share is not the same as best fit for your industry or size.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Commonly used does not mean mandatory.</strong> Market share reflects accountant ecosystems, marketing reach, and free tiers—not your specific workflow. Use popularity as a starting shortlist, then compare on <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> and vertical hubs.
                    </p>
                    <p>
                      For whether a popular tool is right for you, read <Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>what software is good for small businesses</Link> and <Link href="/accounting/guides/best-selling-platform-for-small-businesses" className={linkGreen}>best-selling platforms by category</Link>.
                    </p>
                  </div>
                </section>
                <section id="common" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Frequently seen tools by category.">Commonly Used Tools</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Accounting</strong> — QuickBooks, Xero, Wave, FreshBooks.</p>
                    <p><strong className="text-[#1A2D48]">Payments</strong> — Square, Stripe, PayPal.</p>
                    <p><strong className="text-[#1A2D48]">CRM</strong> — HubSpot, Salesforce, Pipedrive, Zoho.</p>
                    <p><strong className="text-[#1A2D48]">Payroll</strong> — Gusto, QuickBooks Payroll, ADP (larger).</p>
                    <p>Category lens: <Link href="/accounting/guides/best-selling-platform-for-small-businesses" className={linkGreen}>best-selling platforms</Link>.</p>
                  </div>
                </section>
                <section id="shortlist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Use popularity as a filter, not a verdict.">How to Use Common Tools as a Shortlist</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with the leaders in your category—QuickBooks-class accounting, HubSpot-class CRM, Gusto-class payroll—because integrations and accountants cluster there. Run trials on your real month: import bank data, send a live invoice, move a deal stage, run a mock payroll if applicable.
                    </p>
                    <p>
                      Then check edge cases: multi-state tax, inventory depth, contractor payments, or <Link href="/field-service" className={linkGreen}>field service</Link> scheduling. A less common tool may win on price or niche workflow—see BeltStack best-for pages by scenario.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Social proof vs fit.">Why Popularity Alone Misleading</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A tool can be ubiquitous and still wrong for you—too heavy for a solo, too light for inventory-heavy retail, or missing your CPA&apos;s preferred export. Common software also changes by region: Xero share is higher in some markets than others. Treat lists below as orientation, not orders.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Defaults that backfire.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Choosing only because a friend uses it.</strong> Their entity type and sales tax nexus may differ.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Ignoring total cost.</strong> Popular accounting plus paid payroll plus payments fees adds up—model a year of spend.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Skipping accountant input.</strong> Their familiarity often beats marginal feature differences.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack cites common tools when they reflect real SMB adoption, but reviews rank on workflow fit, pricing transparency, and support—not install base alone. We test alternatives to market leaders so smaller products get a fair hearing when they excel for a niche.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Move from names to decisions.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>What software is good for small businesses</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/examples-of-business-application-software" className={linkGreen}>Examples of business application software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payroll" className={linkGreen}>Payroll hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>What programs you actually need</Link></span></li>
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
              <GuideSidebar title="Popular accounting" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Software Is Most Commonly Used by Small Businesses? | BeltStack Guide",
    description:
      "Most common SMB software by category—QuickBooks, HubSpot, Gusto, Square—and how to choose beyond popularity alone.",
  };
}
