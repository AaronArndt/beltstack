import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-programs-small-businesses-actually-need";

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
    q: "What software does a small business need to start?",
    a: "At minimum: business bank account, accounting or invoicing software, and business email. Add CRM when leads need tracking; payroll when you hire W-2 employees—not for owner draws alone.",
  },
  {
    q: "What programs can wait until later?",
    a: "HR suites, inventory systems, field service software, and advanced marketing automation until volume or team size demands them.",
  },
  {
    q: "Do solopreneurs need the same stack as a 10-person company?",
    a: "No. Solos often run FreshBooks or Wave plus email. Growing teams add payroll, CRM, and scheduling.",
  },
  {
    q: "How many subscriptions is too many?",
    a: "If data duplicates across three tools without integrations, consolidate. Review unused seats quarterly.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Starter stack", reviewHref: getAccountingReviewUrl("wave") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Solo services", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Growing SMB", reviewHref: getAccountingReviewUrl("quickbooks-online") },
];

export default function WhatProgramsSmallBusinessesActuallyNeedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Programs SMBs Need</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Programs Small Businesses Actually Need
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical starter stack—and what to postpone until revenue, headcount, or complexity justify another subscription.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      This question usually comes from overwhelmed owners staring at a dozen free trials—or from someone starting a company who wants a <strong className="text-[#1A2D48]">minimum viable stack</strong>, not an enterprise catalog. The goal is to cover legal and financial basics without subscribing to every category on a comparison site.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Most small businesses need fewer programs than software vendors suggest.</strong> Start with money and customers; add operations tools when pain is daily, not hypothetical.
                    </p>
                    <p>
                      Contrast with popularity lists: <Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>most commonly used software</Link> and <Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>what software is good</Link> for fit—not just market share.
                    </p>
                  </div>
                </section>
                <section id="starter" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buy these first.">Starter Stack</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Business bank + <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link> or <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Google Workspace or Microsoft 365</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Payment processor (<Link href="/payment-processing" className={linkGreen}>payments hub</Link>)</span></li>
                    </ul>
                  </div>
                </section>
                <section id="next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Add when triggers hit.">Add Next When You…</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Hire employees → <Link href="/payroll" className={linkGreen}>payroll</Link>. Lose leads in email → <Link href="/crm" className={linkGreen}>CRM</Link>. Book appointments manually → <Link href="/scheduling" className={linkGreen}>scheduling</Link>. See <Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>what software is good for small businesses</Link>.</p>
                  </div>
                </section>
                <section id="triggers" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Buy when the pain is recurring.">Triggers for Each Next Program</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">CRM:</strong> when you lose track of who to call back or duplicate contacts across email and texts. Start with <Link href="/crm/best-crm-software" className={linkGreen}>best CRM</Link> shortlists.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Payroll:</strong> first W-2 hire—not paying yourself as owner-draw only. See <Link href="/payroll" className={linkGreen}>payroll hub</Link>; do not use personal finance apps for tax withholding.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Scheduling / field service:</strong> when double-bookings or missed routes cost you money weekly. Hubs: <Link href="/scheduling" className={linkGreen}>scheduling</Link>, <Link href="/field-service" className={linkGreen}>field service</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Helpdesk:</strong> when support tickets live in personal inboxes and SLAs matter. See <Link href="/helpdesk" className={linkGreen}>helpdesk</Link>.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Lean stacks are easier to fix.">Why Starting Lean Matters</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Every new login is another integration point and renewal date. A tight starter stack—bank, accounting or invoicing, email, payments—lets you learn workflows before payroll or CRM complexity. You can always add; unwinding five overlapping tools is painful.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Subscription traps to avoid.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Annual contracts before a 30-day trial on real data.</strong>
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Duplicate billing (invoicing in two places).</strong> Pick one AR path into accounting.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Ignoring your accountant&apos;s stack.</strong> Their familiarity with QuickBooks or Xero often saves fees—see <Link href="/accounting/guides/how-small-businesses-maintain-their-accounts" className={linkGreen}>maintaining accounts</Link>.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack recommends tools by use case and stage—solo, growing team, regulated industry—not by how many features fit on a pricing page. Reviews call out minimum viable setups and when to upgrade tiers. We do not accept payment for rank position.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Starter stack and beyond.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-is-business-software" className={linkGreen}>What is business software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/invoicing" className={linkGreen}>Invoicing hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payment-processing" className={linkGreen}>Payment processing</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-technology-most-small-businesses-use" className={linkGreen}>Technology most SMBs use</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-small-businesses-track-everything-in-one-place" className={linkGreen}>Track everything in one place</Link></span></li>
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
              <GuideSidebar title="Starter picks" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Programs Small Businesses Actually Need | BeltStack Guide",
    description:
      "Practical SMB software stack: what to buy first, clear triggers for CRM and payroll, and how to avoid subscription bloat.",
  };
}
