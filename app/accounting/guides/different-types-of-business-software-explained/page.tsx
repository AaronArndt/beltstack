import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/different-types-of-business-software-explained";

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
    q: "What are the main types of business software?",
    a: "Financial (accounting, invoicing, payments), customer (CRM, helpdesk), workforce (payroll, HR, time tracking), and operations (inventory, scheduling, field service, project management). BeltStack groups reviews the same way so comparisons stay apples-to-apples.",
  },
  {
    q: "Which business software should a startup buy first?",
    a: "Usually accounting or invoicing plus a business bank account. CRM follows when leads multiply; payroll when you hire W-2 staff—not when you only have contractors paid occasionally.",
  },
  {
    q: "Can one tool replace all business software?",
    a: "Rarely at the SMB stage. Suites exist, but most growing businesses use best-of-breed tools that integrate, with accounting as the financial system of record.",
  },
  {
    q: "How do business software categories connect?",
    a: "CRM wins deals, invoicing bills customers, accounting records cash and expenses, payroll posts wages. Native integrations or careful exports keep customer and dollar data aligned without duplicate entry.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Financial hub", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Accounting", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Zoho Books", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Zoho stack", reviewHref: getAccountingReviewUrl("zoho-books") },
];

export default function DifferentTypesOfBusinessSoftwareExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Types of Business Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Different Types of Business Software Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Accounting, CRM, payroll, invoicing, and operations—how categories fit together in a small business stack.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      This guide is for owners who see dozens of software labels—ERP, CRM, PSA, POS—and want a <strong className="text-[#1A2D48]">plain map of categories</strong> before they buy. You are not choosing one vendor logo; you are deciding which jobs (get paid, pay people, win deals, schedule crews) need dedicated tools.
                    </p>
                    <p>
                      Small businesses rarely buy one mega-platform. They assemble types of business software that match how money, customers, and work actually flow. Start with <Link href="/accounting/guides/what-is-business-software" className={linkGreen}>what is business software</Link>, then use the sections below to see how categories connect—not just what they are called.
                    </p>
                    <p>
                      If you already know you need books first, jump to <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link>. If sales follow-up is the bottleneck, start with <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> and connect finance later.
                    </p>
                  </div>
                </section>
                <section id="types" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Category by category.">Types Explained</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Accounting &amp; finance</strong> — <Link href="/accounting" className={linkGreen}>Accounting</Link>, <Link href="/invoicing" className={linkGreen}>invoicing</Link>, <Link href="/payment-processing" className={linkGreen}>payments</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Sales &amp; marketing</strong> — <Link href="/crm" className={linkGreen}>CRM</Link>, <Link href="/email-marketing" className={linkGreen}>email marketing</Link>, <Link href="/lead-generation" className={linkGreen}>lead generation</Link>.</p>
                    <p><strong className="text-[#1A2D48]">People</strong> — <Link href="/payroll" className={linkGreen}>Payroll</Link>, <Link href="/hr" className={linkGreen}>HR</Link>, <Link href="/time-tracking" className={linkGreen}>time tracking</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Operations</strong> — <Link href="/scheduling" className={linkGreen}>scheduling</Link>, <Link href="/field-service" className={linkGreen}>field service</Link>, <Link href="/inventory" className={linkGreen}>inventory</Link>, <Link href="/project-management" className={linkGreen}>project management</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Customer support</strong> — <Link href="/helpdesk" className={linkGreen}>helpdesk</Link>, <Link href="/reputation-management" className={linkGreen}>reputation management</Link>.</p>
                  </div>
                </section>
                <section id="workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How data moves through a typical SMB.">How Categories Connect in Practice</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Imagine a service business: a lead enters <Link href="/crm" className={linkGreen}>CRM</Link>, you quote and win the job, <Link href="/invoicing" className={linkGreen}>invoicing</Link> sends the bill, <Link href="/payment-processing" className={linkGreen}>payment processing</Link> collects the card or ACH, and <Link href="/accounting" className={linkGreen}>accounting</Link> records revenue and expenses for tax time. <Link href="/payroll" className={linkGreen}>Payroll</Link> sits on its own cadence but posts wages back to the same ledger.
                    </p>
                    <p>
                      Operations tools—<Link href="/scheduling" className={linkGreen}>scheduling</Link>, <Link href="/field-service" className={linkGreen}>field service</Link>, <Link href="/project-management" className={linkGreen}>project management</Link>—do not replace accounting; they reduce double booking and missed jobs. <Link href="/helpdesk" className={linkGreen}>Helpdesk</Link> keeps support history with the customer record CRM already owns.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Clarity before you sign annual contracts.">Why This Matters for Small Businesses</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buying by buzzword leads to overlap—two tools that invoice, three places for contacts, nobody reconciling the bank. Category thinking helps you assign <strong className="text-[#1A2D48]">one source of truth per data type</strong>: customers in CRM, dollars in accounting, hours in payroll or time tracking.
                    </p>
                    <p>
                      It also makes accountant and advisor conversations easier. When your CPA says they need clean books, you know that means the financial category—not a CRM export alone.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stacking errors that create rework.">Common Mistakes When Building a Stack</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Skipping integrations.</strong> If CRM and accounting never sync, someone re-enters won deals manually—and typos follow.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Buying operations before finance.</strong> Scheduling software without reliable invoicing and books makes you efficient at losing money on paper.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Confusing categories with brands.</strong> QuickBooks spans accounting and payroll add-ons; HubSpot spans CRM and marketing. Compare within the job you need done—see <Link href="/accounting/guides/what-are-the-main-types-of-business-software" className={linkGreen}>main types</Link> for the four-bucket view.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack tests products inside each category—accounting vs CRM vs payroll—not as a single &quot;best business app&quot; list. Reviewers document integrations, pricing at realistic headcount, and where tools break for solos versus teams. We do not sell ranking placement; recommendations come from hands-on workflow checks and published comparison criteria.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Hubs and guides by category.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/most-widely-used-business-software-categories" className={linkGreen}>Most widely used software categories</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/examples-of-business-application-software" className={linkGreen}>Examples of business application software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting" className={linkGreen}>Accounting software hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm" className={linkGreen}>CRM hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payroll" className={linkGreen}>Payroll hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-small-businesses-track-everything-in-one-place" className={linkGreen}>Track everything in one place (CRM guide)</Link></span></li>
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
              <GuideSidebar title="Financial tools" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Different Types of Business Software Explained | BeltStack Guide",
    description:
      "Map accounting, CRM, payroll, invoicing, and ops categories—and how they connect—before you build a small business software stack.",
  };
}
