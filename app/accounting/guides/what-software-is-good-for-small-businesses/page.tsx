import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingBestForUrl, getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-software-is-good-for-small-businesses";

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
    q: "What is the best software for a small business?",
    a: "There is no single winner—good software matches your size, industry, and accountant. QuickBooks and Xero are strong defaults for full books; FreshBooks and Wave fit simpler needs.",
  },
  {
    q: "What software do small businesses need most?",
    a: "Accounting or invoicing first, then payments, then CRM or payroll as you grow. See what programs small businesses actually need for a staged checklist—not every category on day one.",
  },
  {
    q: "Is free software good for small businesses?",
    a: "Wave and free CRM tiers work for many starters. Evaluate limits on users, transactions, and support before you scale.",
  },
  {
    q: "How does BeltStack pick good software?",
    a: "We test workflows, compare pricing honestly, and write for owners—not vendor marketing. See best accounting software and vertical best-for pages.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Good default SMB", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Good for services", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Good alternative", reviewHref: getAccountingReviewUrl("xero") },
];

export default function WhatSoftwareIsGoodForSmallBusinessesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Good SMB Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Software Is Good for Small Businesses?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Good software fits your workflow and budget—not just ratings. How to evaluate tools by stage and industry.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Good small business software is usable daily, integrates with your stack, and stays affordable as you grow.</strong> BeltStack reviews by vertical so you compare tools built for the same job—see <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link> and scenario pages like <Link href={getAccountingBestForUrl("small-business")} className={linkGreen}>best for small business</Link>.
                    </p>
                    <p>
                      Not the same as most popular: <Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>most commonly used</Link>. Foundation: <Link href="/accounting/guides/accounting-for-small-business" className={linkGreen}>accounting for small business</Link>.
                    </p>
                    <p>
                      Use the evaluation checklist below during trials; pair it with vertical hubs—<Link href="/crm" className={linkGreen}>CRM</Link>, <Link href="/payroll" className={linkGreen}>payroll</Link>, <Link href="/payment-processing" className={linkGreen}>payments</Link>—when those jobs—not accounting alone—are your bottleneck.
                    </p>
                  </div>
                </section>
                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Questions before you buy.">How to Judge Good Fit</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Does your accountant support it?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Can you run your top three workflows in a trial?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Total cost including payroll, payments, and extra users?</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Integrations with tools you already use?</span></li>
                    </ul>
                    <p>Stack help: <Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>what programs you need</Link>, <Link href="/accounting/guides/is-quickbooks-for-small-business-worth-it" className={linkGreen}>is QuickBooks worth it</Link>.</p>
                  </div>
                </section>
                <section id="why-good" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fit beats feature count.">Why &quot;Good&quot; Is Contextual</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Good software for a five-person agency is not the same as good software for a retailer with inventory and seasonal staff. Ratings matter less than whether you can run your top three weekly workflows without workarounds—and whether your accountant will touch the exports.
                    </p>
                    <p>
                      Free tiers can be good until you hit user limits or need payroll depth. Enterprise tools can be bad fits when you pay for seats nobody uses. Start from pain, not from a generic &quot;best&quot; list.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Evaluation traps.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Choosing from star ratings alone.</strong> Read why a tool lost points on integrations or support for your size.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Skipping total cost modeling.</strong> Include payments, payroll, and per-user fees—not just the base plan.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Switching annually.</strong> Migration cost often exceeds savings unless the misfit is severe.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack scores tools after hands-on workflow tests—sending invoices, reconciling banks, moving deals—not brochure claims. We publish best-for pages by scenario (solo, growing team, industry) and comparisons with clear winners only when evidence supports it. Vendors cannot buy higher placement.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turn criteria into a shortlist.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getAccountingBestForUrl("small-business")} className={linkGreen}>Best accounting for small business</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>What programs you actually need</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/how-small-businesses-maintain-their-accounts" className={linkGreen}>How to maintain accounts</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>Most commonly used software</Link></span></li>
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
              <GuideSidebar title="Good picks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Software Is Good for Small Businesses? | BeltStack Guide",
    description:
      "How to find good SMB software by fit, cost, and integrations—not hype—with BeltStack evaluation criteria and category picks.",
  };
}
