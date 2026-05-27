import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/what-are-the-main-types-of-business-software";

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
    q: "What are the four main types of business software?",
    a: "A practical split: financial (accounting, invoicing, payments), customer (CRM, helpdesk), workforce (payroll, HR), and operations (scheduling, inventory, field service, projects).",
  },
  {
    q: "Is ERP a type of business software?",
    a: "Yes—ERP is enterprise-wide planning spanning finance, inventory, and HR. Most small businesses use lighter cloud tools until complexity warrants ERP.",
  },
  {
    q: "What type of software should I buy first?",
    a: "Financial/accounting software plus business banking. Expand when sales, hiring, or operations create daily friction.",
  },
  {
    q: "How is this different from office software?",
    a: "Office software is general productivity. Business software encodes workflows like payroll tax filing or sales pipelines.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Financial type", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Accounting", reviewHref: getAccountingReviewUrl("xero") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Service billing", reviewHref: getAccountingReviewUrl("freshbooks") },
];

export default function WhatAreTheMainTypesOfBusinessSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Main Types</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Are the Main Types of Business Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Financial, customer, workforce, and operations—the four buckets that cover most small business software needs.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you need a simple framework before shopping, four buckets cover most small business software: <strong className="text-[#1A2D48]">financial, customer, workforce, and operations</strong>. Students, new owners, and IT leads use this split to avoid mixing payroll with CRM in the same comparison table.
                    </p>
                    <p>
                      Grouping by job to be done beats grouping by vendor. BeltStack organizes reviews the same way so you compare tools that solve the same problem—not whatever features a suite marketing page highlights this quarter.
                    </p>
                    <p>
                      Longer walkthrough: <Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>different types explained</Link>. Named products: <Link href="/accounting/guides/examples-of-business-application-software" className={linkGreen}>business application examples</Link>. Definition primer: <Link href="/accounting/guides/what-is-business-software" className={linkGreen}>what is business software</Link>.
                    </p>
                  </div>
                </section>
                <section id="four-types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="The four buckets most SMBs use.">The Four Main Types</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">1. Financial</strong> — Money in and out (<Link href="/accounting" className={linkGreen}>accounting</Link>, <Link href="/invoicing" className={linkGreen}>invoicing</Link>).</p>
                    <p><strong className="text-[#1A2D48]">2. Customer</strong> — Leads, sales, support (<Link href="/crm" className={linkGreen}>CRM</Link>, <Link href="/helpdesk" className={linkGreen}>helpdesk</Link>).</p>
                    <p><strong className="text-[#1A2D48]">3. Workforce</strong> — Pay and people (<Link href="/payroll" className={linkGreen}>payroll</Link>, <Link href="/hr" className={linkGreen}>HR</Link>).</p>
                    <p><strong className="text-[#1A2D48]">4. Operations</strong> — Delivering work (<Link href="/scheduling" className={linkGreen}>scheduling</Link>, <Link href="/inventory" className={linkGreen}>inventory</Link>, <Link href="/field-service" className={linkGreen}>field service</Link>).</p>
                  </div>
                </section>
                <section id="first-bucket" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where most owners should start.">Picking Your First Bucket</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Financial</strong> is the default first bucket—money in, money out, tax readiness—via <Link href="/accounting" className={linkGreen}>accounting</Link> or <Link href="/invoicing" className={linkGreen}>invoicing</Link> plus <Link href="/payment-processing" className={linkGreen}>payments</Link>.
                    </p>
                    <p>
                      Move to <strong className="text-[#1A2D48]">customer</strong> when pipeline chaos costs deals; to <strong className="text-[#1A2D48]">workforce</strong> when W-2 payroll starts; to <strong className="text-[#1A2D48]">operations</strong> when scheduling, stock, or field routes break without software.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Framework before feature lists.">Why Four Buckets Help</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Vendor sites blur categories—accounting tools that invoice, CRM tools that market, payroll tools with HR modules. Buckets keep you honest about the primary job. You will still integrate across buckets; you should not expect one login to master all four at SMB scale.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Category confusion we see in reviews.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Calling office suites &quot;financial software.&quot;</strong> See <Link href="/accounting/guides/most-common-types-of-office-software" className={linkGreen}>office vs business apps</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Buying ERP too early.</strong> Most SMBs outgrow spreadsheets long before they need enterprise planning.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Stuffing support into CRM without a plan.</strong> High ticket volume may need <Link href="/helpdesk" className={linkGreen}>helpdesk</Link> alongside CRM.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack&apos;s site structure mirrors these four types—each with hubs, reviews, and comparisons—so you never judge payroll features on a CRM leaderboard. Evaluations stress integrations across buckets (CRM to accounting, payroll to ledger) and flag when a product crosses buckets without doing either well.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Explore each bucket.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>Different types explained (detailed)</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payroll" className={linkGreen}>Payroll hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/project-management" className={linkGreen}>Project management hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>Widely used categories (adoption order)</Link></span></li>
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
              <GuideSidebar title="Financial software" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "What Are the Main Types of Business Software? | BeltStack Guide",
    description:
      "Four main types of business software for SMBs—financial, customer, workforce, operations—and which bucket to buy first.",
  };
}
