import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getInvoicingReviewUrl } from "@/lib/routes";

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
    q: "Can CRM software create invoices?",
    a: "Many CRM platforms include basic quoting and invoicing, especially in higher tiers. Capability varies widely by product and plan—some generate polished payment requests, others only export deal values that finance must invoice separately.",
  },
  {
    q: "Is CRM invoicing enough for small businesses?",
    a: "It can be enough for simple sales-led billing with low volume and few recurring contracts. Dedicated invoicing tools are usually stronger for collections, reminder automation, A/R aging, and payment reconciliation as volume grows.",
  },
  {
    q: "What are the limits of CRM invoicing?",
    a: "Common limits include weaker A/R reporting, limited approval workflows, basic recurring billing, partial payment handling, and less mature sync to accounting. CRMs optimize pipeline visibility, not week-over-week cash collection operations.",
  },
  {
    q: "Should I use CRM plus invoicing software together?",
    a: "Often yes. CRM manages pipeline and customer context; invoicing software handles billing execution and cash collection in more depth. Integrations keep customer records aligned without forcing sales reps to learn accounting workflows.",
  },
  {
    q: "Which tools combine CRM and invoicing well?",
    a: "HoneyBook and Bonsai combine client workflows with invoicing for agencies and creatives. HubSpot and Zoho offer CRM invoicing with varying depth by plan. Service businesses with heavy A/R needs often still add FreshBooks or QuickBooks for billing operations.",
  },
  {
    q: "Will CRM invoicing replace my accountant's needs?",
    a: "No. CRM invoicing may create payment requests, but tax reporting, reconciliation, and period-end close still belong in accounting software. Treat CRM billing as a front-office workflow, not a full finance system.",
  },
  {
    q: "When should I move invoicing out of the CRM?",
    a: "Move when recurring volume rises, overdue balances climb, or finance spends meaningful time fixing invoice data exported from sales tools. That is usually the point where dedicated invoicing ROI becomes clear.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HoneyBook", logoSrc: "/Logos/honeybook.jpeg", rating: 4.4, bestFor: "CRM-style client workflows", reviewHref: getInvoicingReviewUrl("honeybook") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.png", rating: 4.5, bestFor: "Sales-led invoicing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Dedicated invoicing depth", reviewHref: getInvoicingReviewUrl("freshbooks") },
];

export default function CanCrmSoftwareHandleInvoicingPage() {
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
                    <li><Link href="/invoicing" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Invoicing</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/invoicing/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">Can CRM Software Handle Invoicing?</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Can CRM Software Handle Invoicing?</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When CRM invoicing is enough, where it falls short on collections and A/R, and when to add dedicated invoicing software for billing operations.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM software can handle invoicing in some cases, especially when billing is tightly tied to sales pipeline stages. A closed-won deal that becomes an invoice in the same system feels efficient for small teams and low invoice volume.
                    </p>
                    <p>
                      But CRM platforms are optimized for relationship management—leads, deals, activities—not full accounts receivable operations. Collections, reminder cadence, partial payments, and month-end reconciliation need different controls than pipeline stages provide.
                    </p>
                    <p>
                      The practical question is where billing breaks first: creating documents, getting paid, or reconciling to books. CRMs often solve the first step well. Dedicated invoicing tools usually win on the second and third as complexity grows.
                    </p>
                    <p>
                      For CRM fundamentals, see{" "}
                      <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link>.{" "}
                      For dedicated billing depth, compare{" "}
                      <Link href="/invoicing/guides/how-invoicing-software-works" className={linkGreen}>how invoicing software works</Link>.
                    </p>
                  </div>
                </section>
                <section id="when-crm-works" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Scenarios where CRM billing is usually sufficient.">When CRM Invoicing Works</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM invoicing works best when sales owns the full quote-to-cash path and finance does not need granular A/R controls. The invoice is a natural extension of the deal record, not a separate operational system.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Low invoice volume with simple Net 15 or Net 30 terms.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Sales team owns quote-to-invoice without a separate billing specialist.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Minimal need for advanced A/R aging, approvals, or partial payment workflows.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Client workflows that bundle proposals, contracts, and payment in one branded experience.</span></li>
                    </ul>
                    <p>
                      Agency-style platforms like{" "}
                      <Link href={getInvoicingReviewUrl("honeybook")} className={linkGreen}>HoneyBook</Link>{" "}
                      blur CRM and invoicing intentionally. That combined model can be enough until team size or retainer complexity outpaces built-in reporting.
                    </p>
                  </div>
                </section>
                <section id="when-dedicated-invoicing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals you need a billing-focused tool.">When to Add Dedicated Invoicing Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Add invoicing software when recurring billing volume grows, reminder automation becomes critical, or finance needs stronger reconciliation and reporting. These are operational bottlenecks CRM modules rarely solve completely.
                    </p>
                    <p>
                      Another signal is role separation: sales should not be the system of record for open balances once multiple people issue credits, adjustments, or milestone invoices. Dedicated invoicing gives finance clearer ownership and audit trails.
                    </p>
                    <p>
                      Agencies often use{" "}
                      <Link href={getInvoicingReviewUrl("honeybook")} className={linkGreen}>HoneyBook</Link>{" "}
                      for client workflows but still evaluate dedicated billing depth for larger teams. See{" "}
                      <Link href="/invoicing/guides/best-invoicing-software-for-agencies" className={linkGreen}>best invoicing software for agencies</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/best-for/agencies" className={linkGreen}>invoicing best-for agencies</Link>.
                    </p>
                  </div>
                </section>
                <section id="integration-approach" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep CRM context without sacrificing billing control.">Best Practice: CRM + Invoicing Stack</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Many growing businesses keep CRM for pipeline management and invoicing software for billing execution, syncing customer and payment data to accounting. This split reduces billing errors while preserving sales visibility into deal status—not payment operations detail.
                    </p>
                    <p>
                      Define handoff rules: when a deal becomes billable, who creates the invoice, which system owns revisions, and how paid status syncs back to CRM. Clear ownership prevents duplicate invoices and missed follow-up.
                    </p>
                    <p>
                      Explore CRM options on{" "}
                      <Link href="/crm" className={linkGreen}>CRM software</Link>,{" "}
                      invoicing picks on{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>,{" "}
                      and accounting overlap in{" "}
                      <Link href="/invoicing/guides/can-accounting-software-replace-invoicing-software" className={linkGreen}>can accounting software replace invoicing software</Link>.
                    </p>
                  </div>
                </section>
                <section id="crm-vs-invoicing-matrix" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick comparison for stack decisions.">CRM Invoicing vs Dedicated Invoicing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">CRM invoicing wins on:</strong> deal context, proposal-to-payment client experience, and keeping sales in one familiar tool.</p>
                    <p><strong className="text-[#1A2D48]">Dedicated invoicing wins on:</strong> reminder automation, A/R reporting, payment reconciliation, recurring complexity, and finance-grade controls.</p>
                    <p>
                      Hybrid stacks are normal at scale. The mistake is forcing CRM to behave like a billing system after volume has already outgrown it—see{" "}
                      <Link href="/invoicing/guides/when-businesses-outgrow-simple-invoicing-tools" className={linkGreen}>when businesses outgrow simple invoicing tools</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="CRM invoicing capability questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM and Invoicing Tool Options" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/can-crm-software-handle-invoicing" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Can CRM Software Handle Invoicing? (2026) | BeltStack Guide",
    description:
      "Learn when CRM invoicing is enough, HubSpot and HoneyBook limits, when to add FreshBooks or dedicated billing tools, and best practices for a CRM plus invoicing stack.",
    keywords: [
      "CRM invoicing",
      "HoneyBook invoicing",
      "HubSpot invoices",
      "invoicing vs CRM",
      "billing software stack",
      "2026",
    ],
  };
}
