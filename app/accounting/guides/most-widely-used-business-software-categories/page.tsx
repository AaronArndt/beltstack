import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/most-widely-used-business-software-categories";

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
    q: "What is the most widely used business software category?",
    a: "Accounting and payments are near-universal once a business has regular revenue. CRM and payroll follow as teams sell more and hire W-2 staff—not necessarily in the same year.",
  },
  {
    q: "Why do businesses adopt accounting software first?",
    a: "Taxes, banking, and cash visibility require organized books. Invoicing and payments often arrive in the same buying decision because getting paid and recording revenue are linked problems.",
  },
  {
    q: "Do all SMBs need CRM?",
    a: "Not on day one. CRM adoption rises when leads and follow-ups outgrow email and spreadsheets—see our CRM for small business guide and best CRM roundup when pipeline pain is daily.",
  },
  {
    q: "How does BeltStack categorize software?",
    a: "By job to be done—accounting, CRM, payroll, scheduling, and so on—so buyers compare tools that solve the same problem, not overlapping marketing labels on one mega-list.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Widely used accounting", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "Xero", logoSrc: "/Logos/xero.png", rating: 4.6, bestFor: "Global SMB accounting", reviewHref: getAccountingReviewUrl("xero") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free tier adoption", reviewHref: getAccountingReviewUrl("wave") },
];

export default function MostWidelyUsedBusinessSoftwareCategoriesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Software Categories</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    The Most Widely Used Business Software Categories
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Which software categories SMBs adopt first—and the order that usually makes sense as you grow.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If you are comparing what &quot;most businesses use,&quot; you are usually prioritizing a budget or asking which problem to solve first—not chasing a single app that does everything. Market data consistently shows <strong className="text-[#1A2D48]">financial software at the center</strong> of small business adoption, with other categories following real triggers (hiring, pipeline volume, field crews).
                    </p>
                    <p>
                      Adoption patterns repeat: financial software first, then customer and people systems, then operations tools for scheduling, inventory, or field work. BeltStack maps each category to dedicated reviews so you compare apples to apples within one job—not overlapping product names.
                    </p>
                    <p>
                      Use the ordered list below as a <strong className="text-[#1A2D48]">sequence guide</strong>, not a mandate. A solo freelancer may live on invoicing and payments for years; a shop with staff may need payroll before CRM. Pair this page with <Link href="/accounting/guides/what-programs-small-businesses-actually-need" className={linkGreen}>what programs you actually need</Link>.
                    </p>
                  </div>
                </section>
                <section id="order" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical adoption sequence.">Widely Used Categories (In Order)</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-2 list-decimal list-inside">
                      <li><strong className="text-[#1A2D48]">Accounting &amp; invoicing</strong> — <Link href="/accounting/best-accounting-software" className={linkGreen}>best accounting software</Link></li>
                      <li><strong className="text-[#1A2D48]">Payments</strong> — <Link href="/payment-processing" className={linkGreen}>payment processing</Link></li>
                      <li><strong className="text-[#1A2D48]">CRM &amp; sales</strong> — <Link href="/crm/best-crm-software" className={linkGreen}>best CRM</Link></li>
                      <li><strong className="text-[#1A2D48]">Payroll &amp; HR</strong> — <Link href="/payroll" className={linkGreen}>payroll</Link>, <Link href="/hr" className={linkGreen}>HR</Link></li>
                      <li><strong className="text-[#1A2D48]">Operations</strong> — scheduling, field service, inventory by industry</li>
                    </ol>
                    <p>Details: <Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>most commonly used software</Link>.</p>
                  </div>
                </section>
                <section id="stages" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Match purchases to company stage.">Buying by Stage, Not by Hype</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Pre-revenue or side project:</strong> business bank, simple <Link href="/invoicing" className={linkGreen}>invoicing</Link> or free accounting, professional email.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Steady revenue, no employees:</strong> full <Link href="/accounting" className={linkGreen}>accounting</Link>, <Link href="/payment-processing" className={linkGreen}>payments</Link>, consider <Link href="/crm" className={linkGreen}>CRM</Link> when leads slip through email.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Hiring and delivery complexity:</strong> <Link href="/payroll" className={linkGreen}>payroll</Link>, then <Link href="/scheduling" className={linkGreen}>scheduling</Link>, <Link href="/field-service" className={linkGreen}>field service</Link>, or <Link href="/project-management" className={linkGreen}>project management</Link> by industry.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Order reduces waste and rework.">Why Adoption Order Matters</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buying CRM before you can invoice reliably means pretty pipelines and messy books. Buying payroll before you have W-2 employees burns subscription dollars. Widely used categories became popular because they solve universal pain—cash visibility, getting paid, staying compliant—not because every SMB needs every box checked in year one.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Avoid these sequencing errors.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Copying a competitor&apos;s stack blindly.</strong> Their headcount, sales motion, and accountant may differ from yours.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Treating popularity as fit.</strong> See <Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>commonly used software</Link> versus <Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>what is good for your business</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Ignoring integrations.</strong> Pick categories whose leaders connect to your accounting hub—especially CRM and payments.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack organizes coverage by category—accounting, CRM, payroll, and more—so &quot;widely used&quot; never means &quot;best at everything.&quot; We document typical SMB adoption paths in guides and test products against real workflows. Editorial rankings are independent of vendor ad spend.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Deepen your stack plan.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-technology-most-small-businesses-use" className={linkGreen}>What technology most small businesses use</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/payment-processing" className={linkGreen}>Payment processing hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/best-selling-platform-for-small-businesses" className={linkGreen}>Best-selling platforms by category</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/helpdesk" className={linkGreen}>Helpdesk software hub</Link></span></li>
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
              <GuideSidebar title="Top categories" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Most Widely Used Business Software Categories | BeltStack Guide",
    description:
      "Which software categories SMBs adopt first—accounting, payments, CRM, payroll—and how to sequence purchases by stage, not hype.",
  };
}
