import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedInvoicingResources } from "@/components/guides/RelatedInvoicingResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getInvoicingReviewUrl } from "@/lib/routes";

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
    q: "What is invoice automation?",
    a: "Invoice automation uses software rules and integrations to create, send, remind, and record invoices with less manual effort. It covers templates, scheduled sends, payment status updates, and connections to CRM, time tracking, or accounting systems. The goal is speed and consistency, not removing human judgment from exceptions.",
  },
  {
    q: "What should businesses automate first?",
    a: "Most teams start with recurring invoices, reminder emails, payment status updates, and template-based invoice creation. These steps deliver quick time savings without requiring a full process redesign. Add approval rules and integration sync once the basics are stable.",
  },
  {
    q: "Does invoice automation replace accounting review?",
    a: "No. Automation handles repetitive tasks; finance teams still review exceptions, tax treatment, and period-end reconciliation. Month-end close, bank matching, and dispute resolution still need owners. Think of automation as reducing manual busywork, not eliminating financial controls.",
  },
  {
    q: "Can automation reduce invoice errors?",
    a: "Yes. Standardized templates and field validation reduce typos, missing terms, and inconsistent numbering. Pulling line items from source systems (time entries, orders, contracts) cuts re-keying mistakes further. Review automation logs periodically to catch misconfigured rules before they repeat.",
  },
  {
    q: "When is manual invoicing still better?",
    a: "Highly custom one-off projects, complex change orders, or early-stage businesses with very low volume may stay manual longer. A hybrid model—automated recurring billing plus manual review for large project invoices—is common. Revisit the decision when reminder workload or reconciliation errors start compounding.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Rules + accounting automation", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Automated reminders and recurring billing", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Workflow automation at scale", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function InvoiceAutomationExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Invoice Automation Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Invoice Automation Explained</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn what invoice automation includes, what to automate first, how integrations and controls work, and how automation improves billing speed, accuracy, and collections.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Invoice automation removes repetitive manual steps from billing operations: creating documents from templates, sending on schedule, triggering reminders, and updating payment status in your books. The payoff is fewer errors, faster cash collection, and more time for exceptions that actually need judgment.
                    </p>
                    <p>
                      Automation does not mean “set and forget.” Healthy billing still needs approval rules, dispute handling, and month-end reconciliation. Software handles volume; people handle edge cases and relationship-sensitive accounts.
                    </p>
                    <p>
                      Most small businesses automate in stages—templates and reminders first, then recurring profiles, then integrations with time tracking or accounting—rather than rebuilding the entire process overnight.
                    </p>
                    <p>
                      For a side-by-side process view, see{" "}
                      <Link href="/invoicing/guides/manual-invoicing-vs-automated-invoicing" className={linkGreen}>manual invoicing vs automated invoicing</Link>,{" "}
                      <Link href="/invoicing/guides/how-invoicing-software-works" className={linkGreen}>how invoicing software works</Link>, and{" "}
                      <Link href="/invoicing/guides/what-features-to-look-for-in-invoicing-software" className={linkGreen}>what features to look for in invoicing software</Link>.
                    </p>
                  </div>
                </section>
                <section id="what-to-automate" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="High-impact automation starting points.">What to Automate First</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Start with workflows that repeat every week and cause the most manual drag. Quick wins build confidence before you wire complex integrations or custom approval trees.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Recurring invoices for retainers and service plans—see{" "}
                        <Link href="/invoicing/guides/how-businesses-handle-recurring-billing" className={linkGreen}>how businesses handle recurring billing</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reminder sequences before and after due dates.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Payment-received status updates and receipt emails.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Standard tax, terms, and numbering defaults on templates.</span></li>
                    </ul>
                    <p>
                      After basics are stable, automate invoice creation from time entries, orders, or CRM deals so line items are not retyped. Each layer should reduce errors and speed issuance without bypassing review on high-risk invoices.
                    </p>
                  </div>
                </section>
                <section id="integrations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Automation works best when systems stay in sync.">Integrations That Power Automation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Connect invoicing with CRM, field service, time tracking, or accounting systems so invoice data is generated from source activity instead of retyped spreadsheets. The best automations start where work is already recorded—closed jobs, approved timesheets, signed quotes.
                    </p>
                    <p>
                      Accounting sync posts invoices and payments to the ledger automatically, which speeds{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>reconciliation</Link>.{" "}
                      Validate sync direction and timing with your bookkeeper so tax and revenue recognition stay correct.
                    </p>
                    <p>
                      Payment processor integrations reduce manual matching. See{" "}
                      <Link href="/payment-processing" className={linkGreen}>payment processing</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-online-invoice-payments-work" className={linkGreen}>how online invoice payments work</Link>.{" "}
                      If you evaluate whether CRM can bill directly, read{" "}
                      <Link href="/invoicing/guides/can-crm-software-handle-invoicing" className={linkGreen}>can CRM software handle invoicing</Link>.
                    </p>
                  </div>
                </section>
                <section id="controls" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep automation accurate and auditable.">Controls and Exception Handling</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Define approval thresholds for high-value invoices, lock numbering sequences, and review automation logs monthly. Exceptions should route to a human owner quickly to avoid compounding billing errors across dozens of similar invoices.
                    </p>
                    <p>
                      Separate duties where possible: the person who delivers work should not be the only approver on large bills they created. Audit trails for edits, voids, and credits matter when customers dispute automated charges.
                    </p>
                    <p>
                      For governance patterns, review{" "}
                      <Link href="/invoicing/guides/how-invoice-approval-workflows-work" className={linkGreen}>how invoice approval workflows work</Link>.{" "}
                      Pair controls with{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>tracking unpaid invoices</Link>{" "}
                      so automated sends do not mask overdue balances.
                    </p>
                  </div>
                </section>
                <section id="measuring-impact" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Know whether automation is paying off.">Measuring Automation Impact</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Track simple before-and-after metrics: average days from work complete to invoice sent, overdue percentage, hours spent on billing admin per month, and reconciliation exceptions at close. Improvement in any two usually justifies subscription cost.
                    </p>
                    <p>
                      Survey internal users after 60–90 days: Are reminders still professional? Are customers confused by auto-charges? Adjust templates and cadence based on real feedback, not only software defaults.
                    </p>
                    <p>
                      When volume outgrows basic tools, see{" "}
                      <Link href="/invoicing/guides/when-businesses-outgrow-simple-invoicing-tools" className={linkGreen}>when businesses outgrow simple invoicing tools</Link>{" "}
                      before adding more automation layers on a platform that cannot scale.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Automation strategy questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools with Strong Automation" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/invoice-automation-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Invoice Automation Explained | BeltStack Guide",
    description:
      "Invoice automation explained: what to automate first, integrations with accounting and payments, controls for exceptions, and how to measure faster billing and collections.",
  };
}
