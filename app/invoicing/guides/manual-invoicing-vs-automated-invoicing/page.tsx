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
    q: "What is manual invoicing?",
    a: "Manual invoicing means creating, sending, and tracking invoices by hand using documents, spreadsheets, or basic templates without workflow automation. It offers flexibility for one-off jobs but scales poorly as volume and follow-up workload grow. Error rates and inconsistent formatting tend to rise without template discipline.",
  },
  {
    q: "What is automated invoicing?",
    a: "Automated invoicing uses software to generate invoices from templates or source data, send on schedule, trigger reminders, and update payment status automatically. It standardizes documents and follow-up so finance teams spend less time on repetitive tasks. Most platforms still allow manual edits for exceptions.",
  },
  {
    q: "When should a business switch from manual to automated invoicing?",
    a: "A common trigger is when invoice volume, reminder workload, or reconciliation errors start consuming disproportionate admin time each week. Recurring retainers, rising late payments, and multi-day month-end close are other signals. Many teams switch earlier than they think because payment links alone recover meaningful time.",
  },
  {
    q: "Is automated invoicing worth it for small teams?",
    a: "Often yes, even for small teams, because reminders, recurring billing, and payment links can recover time quickly with modest software cost. Automation reduces forgotten follow-ups that hurt cash flow when everyone wears multiple hats. Start with templates and reminders before wiring complex integrations.",
  },
  {
    q: "Can businesses use a hybrid approach?",
    a: "Yes. Many teams automate recurring and routine invoices while keeping manual review for complex project billing or high-value exceptions. Hybrid models balance speed with control. Document which invoice types require human approval so automation does not bypass governance.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Easy move from manual to automated", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Automation + accounting in one stack", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Wave", logoSrc: "/Logos/wave.jpeg", rating: 4.3, bestFor: "Low-cost automation starter", reviewHref: getInvoicingReviewUrl("wave") },
];

export default function ManualInvoicingVsAutomatedInvoicingPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Manual Invoicing vs Automated Invoicing</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Manual Invoicing vs Automated Invoicing</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Compare manual invoicing and automated invoicing—pros, cons, hybrid models, and a decision framework for team size, volume, and cash flow goals.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Manual invoicing can work early on, but error rates and follow-up delays usually rise with volume. Automated invoicing standardizes documents and follow-up so finance teams spend less time on repetitive tasks and more on exceptions that affect cash.
                    </p>
                    <p>
                      The choice is not binary. Many growing businesses keep manual review on complex project invoices while automating retainers, reminders, and payment status updates. The right model depends on invoice count, billing complexity, and how much late payment is costing you today.
                    </p>
                    <p>
                      For automation details, see{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>{" "}
                      and platform basics in{" "}
                      <Link href="/invoicing/guides/how-invoicing-software-works" className={linkGreen}>how invoicing software works</Link>.
                    </p>
                    <p>
                      Use this comparison alongside{" "}
                      <Link href="/invoicing/guides/how-to-choose-invoicing-software" className={linkGreen}>how to choose invoicing software</Link>,{" "}
                      <Link href="/invoicing/guides/free-vs-paid-invoicing-software" className={linkGreen}>free vs paid invoicing software</Link>, and{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>{" "}
                      when you are ready to move beyond spreadsheets.
                    </p>
                  </div>
                </section>
                <section id="manual-invoicing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When manual processes still make sense.">Manual Invoicing: Pros and Cons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Manual invoicing usually means Word templates, PDFs, spreadsheets, or basic email attachments without workflow software. It is common in the first months of a business or for highly bespoke professional services.
                    </p>
                    <p><strong className="text-[#1A2D48]">Pros:</strong> low setup cost, flexible for one-off custom billing, easy to start with minimal tooling, and full control over every line on unusual projects.</p>
                    <p><strong className="text-[#1A2D48]">Cons:</strong> inconsistent formatting, missed reminders, slower reconciliation, no central status view, and higher risk of data entry mistakes as volume grows.</p>
                    <p>
                      Manual processes break down when more than one person sends invoices or when customers expect online payment links and predictable reminders. See{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes small businesses make</Link>{" "}
                      for pitfalls to avoid while still manual.
                    </p>
                  </div>
                </section>
                <section id="automated-invoicing" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where automation creates the most value.">Automated Invoicing: Pros and Cons</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automated invoicing uses dedicated software to generate invoices from templates or source data, send on schedule, trigger reminders, accept online payments, and sync status to accounting.
                    </p>
                    <p><strong className="text-[#1A2D48]">Pros:</strong> faster billing cycles, standardized documents, automated reminders, better payment tracking, cleaner reporting, and less time on{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>reconciliation</Link>{" "}
                      when payments auto-apply.</p>
                    <p><strong className="text-[#1A2D48]">Cons:</strong> setup time, subscription cost, learning curve for staff, and need for process governance on exceptions and credits.</p>
                    <p>
                      Compare tools on{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing software comparisons</Link>{" "}
                      or browse{" "}
                      <Link href="/invoicing/best-invoicing-software" className={linkGreen}>best invoicing software</Link>.{" "}
                      For recurring revenue, pair automation with{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-recurring-billing" className={linkGreen}>how businesses handle recurring billing</Link>.
                    </p>
                  </div>
                </section>
                <section id="decision-framework" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals that it is time to automate.">Decision Framework</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Automate when the cost of delays—late cash, errors, admin hours—exceeds software subscription and setup time. You do not need enterprise volume to benefit; a solo consultant with 15 monthly retainers often gains more from reminders and payment links than from another hour of manual chasing.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>You send more than 20–30 invoices per month.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>You run recurring retainers or maintenance plans.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Late payments are increasing despite good service delivery.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconciliation and close take multiple days each month.</span></li>
                    </ul>
                    <p>
                      If you are switching platforms, see{" "}
                      <Link href="/invoicing/guides/how-to-switch-invoicing-software" className={linkGreen}>how to switch invoicing software</Link>.{" "}
                      Start with templates and reminders, then expand into recurring billing and integrations—see{" "}
                      <Link href="/invoicing/guides/how-invoice-reminders-work" className={linkGreen}>how invoice reminders work</Link>.
                    </p>
                  </div>
                </section>
                <section id="hybrid-approach" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Combine control with efficiency.">Hybrid Manual and Automated Billing</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A hybrid model automates recurring invoices, payment links, and reminder cadence while requiring manager approval on change orders, credits above a threshold, or first invoices to new enterprise accounts.
                    </p>
                    <p>
                      Document which invoice types are fully automated versus human-reviewed. Project-based businesses often automate deposit and retainer billing but manually validate milestone invoices against sign-off—see{" "}
                      <Link href="/invoicing/guides/how-deposit-and-milestone-invoicing-works" className={linkGreen}>how deposit and milestone invoicing works</Link>.
                    </p>
                    <p>
                      Revisit the split every quarter as volume changes. What started as “manual only for big jobs” often drifts until most invoices are manual again unless someone audits the policy.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Manual vs automated invoicing questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools to Automate Billing" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/manual-invoicing-vs-automated-invoicing" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Manual Invoicing vs Automated Invoicing | BeltStack Guide",
    description:
      "Manual vs automated invoicing: pros and cons, hybrid billing models, decision signals for when to automate, and links to software selection and reminder workflows.",
  };
}
