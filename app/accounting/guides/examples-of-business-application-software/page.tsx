import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedAccountingResources } from "@/components/guides/RelatedAccountingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getAccountingReviewUrl } from "@/lib/routes";

const PAGE_HREF = "/accounting/guides/examples-of-business-application-software";

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
    q: "What are examples of business application software?",
    a: "QuickBooks (accounting), HubSpot (CRM), Gusto (payroll), FreshBooks (invoicing), Square (payments), and Slack (communication) are common examples by category.",
  },
  {
    q: "Is Microsoft Excel a business application?",
    a: "Excel is a general spreadsheet application used for business, but dedicated accounting apps add reconciliation, invoicing workflows, and tax-ready reporting.",
  },
  {
    q: "What is the difference between application software and system software?",
    a: "Application software solves user tasks (invoicing, email). System software runs devices and servers (Windows, iOS). SMB buyers focus on applications.",
  },
  {
    q: "How do I choose between similar applications?",
    a: "Match use case, integrations, accountant preference, and total cost. Use BeltStack reviews and comparisons by vertical.",
  },
];

const GUIDE_SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks Online", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Accounting example", reviewHref: getAccountingReviewUrl("quickbooks-online") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoicing example", reviewHref: getAccountingReviewUrl("freshbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Free accounting example", reviewHref: getAccountingReviewUrl("wave") },
];

export default function ExamplesOfBusinessApplicationSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Business App Examples</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Are Examples of Business Application Software?
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Named examples by category—accounting, CRM, payroll, payments—with links to BeltStack reviews.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Homework, RFPs, and first-time buyers often ask for <strong className="text-[#1A2D48]">named examples</strong> of business application software—not abstract categories. You need recognizable products tied to real jobs (bill customers, pay staff, track deals) so you can research further.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Business application software</strong> means programs built for commercial workflows—not games or consumer social apps. Below are representative examples BeltStack reviews; market share varies by industry and region.
                    </p>
                    <p>
                      Pair this list with <Link href="/accounting/guides/what-are-the-main-types-of-business-software" className={linkGreen}>main types</Link> and <Link href="/accounting/guides/what-is-business-software" className={linkGreen}>what is business software</Link> so examples sit in context—not as a shopping cart of everything at once.
                    </p>
                  </div>
                </section>
                <section id="examples" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Examples by category.">Examples by Category</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Accounting</strong> — <Link href={getAccountingReviewUrl("quickbooks-online")} className={linkGreen}>QuickBooks</Link>, <Link href={getAccountingReviewUrl("xero")} className={linkGreen}>Xero</Link>, <Link href={getAccountingReviewUrl("wave")} className={linkGreen}>Wave</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Invoicing / service</strong> — <Link href={getAccountingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>, <Link href="/invoicing" className={linkGreen}>invoicing hub</Link>.</p>
                    <p><strong className="text-[#1A2D48]">CRM</strong> — HubSpot, Salesforce (<Link href="/crm/best-crm-software" className={linkGreen}>best CRM</Link>).</p>
                    <p><strong className="text-[#1A2D48]">Payroll</strong> — Gusto, OnPay (<Link href="/payroll" className={linkGreen}>payroll hub</Link>).</p>
                    <p><strong className="text-[#1A2D48]">Ecommerce</strong> — Shopify (<Link href="/website-builders" className={linkGreen}>website builders</Link>, <Link href="/pos" className={linkGreen}>POS</Link>).</p>
                    <p>Types overview: <Link href="/accounting/guides/what-are-the-main-types-of-business-software" className={linkGreen}>main types</Link>.</p>
                  </div>
                </section>
                <section id="evaluate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Same category, different winners.">How to Compare Similar Applications</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Two accounting apps both &quot;do invoices&quot;—differences show up in bank rules, inventory, payroll add-ons, and accountant adoption. Read BeltStack reviews side by side; run trials on your messiest month, not a demo dataset.
                    </p>
                    <p>
                      Check integrations first: if you already use <Link href="/crm" className={linkGreen}>CRM</Link> or <Link href="/payment-processing" className={linkGreen}>payments</Link>, the app that syncs cleanly beats the one with a longer feature checklist.
                    </p>
                  </div>
                </section>
                <section id="why-matters" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Examples anchor learning.">Why Examples Matter for Small Businesses</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Categories alone do not help you explain choices to a partner or CPA. Names like QuickBooks or HubSpot signal expected workflows and support ecosystems. Examples also show that most stacks combine several applications—accounting plus payroll plus CRM—not one do-everything program.
                    </p>
                  </div>
                </section>
                <section id="mistakes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Misclassification costs time.">Common Mistakes</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Treating Slack or Excel as your only business apps.</strong> Communication and spreadsheets support work; they do not file payroll taxes.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Confusing consumer and business editions</strong> (personal Quicken vs QuickBooks Online)—see <Link href="/accounting/guides/can-you-run-payroll-in-quicken" className={linkGreen}>payroll in Quicken</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Choosing by logo recognition alone.</strong> Use <Link href="/accounting/guides/what-software-is-good-for-small-businesses" className={linkGreen}>good fit</Link> criteria after you shortlist names here.
                    </p>
                  </div>
                </section>
                <section id="beltstack-method" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle>How BeltStack evaluates business software</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack reviews named applications in context—accounting examples against accounting criteria, not against CRM tools. We update examples when products materially change pricing or core workflows. Lists like this are illustrative; rankings live in category roundups and are not pay-to-play.
                    </p>
                  </div>
                </section>
                <section id="next-steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="From examples to picks.">What to do next</SectionTitle>
                  <div className="max-w-[720px] space-y-3 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/best-accounting-software" className={linkGreen}>Best accounting software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/best-crm-software" className={linkGreen}>Best CRM software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/different-types-of-business-software-explained" className={linkGreen}>Types of business software explained</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/accounting/guides/what-software-is-most-commonly-used-by-small-businesses" className={linkGreen}>Most commonly used software</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/scheduling" className={linkGreen}>Scheduling hub</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/helpdesk" className={linkGreen}>Helpdesk hub</Link></span></li>
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
              <GuideSidebar title="Reviewed examples" items={GUIDE_SIDEBAR_ITEMS} stickyTop={88} />
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
    title: "Examples of Business Application Software | BeltStack Guide",
    description:
      "Real examples of business application software—QuickBooks, HubSpot, Gusto, FreshBooks—and how to compare apps in the same category.",
  };
}
