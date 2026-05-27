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
    q: "What is recurring billing?",
    a: "Recurring billing charges customers on a defined schedule—weekly, monthly, quarterly, or annually—for ongoing services or subscriptions. It turns one-time customer setup into predictable revenue collection. Businesses use it for retainers, maintenance plans, memberships, and SaaS-style offerings.",
  },
  {
    q: "Is recurring billing the same as recurring invoicing?",
    a: "They are closely related but not identical. Recurring invoicing generates scheduled invoices that customers pay manually or via saved methods; recurring billing often includes auto-charge, dunning, and full subscription lifecycle management. Many invoicing tools support both patterns depending on how hands-off you want collections to be.",
  },
  {
    q: "How do businesses handle failed recurring payments?",
    a: "Most teams use retry rules, customer notifications, grace periods, and account status changes when payment attempts fail repeatedly. Failed-payment workflows are often called dunning. Pair automated retries with clear messaging so customers can update cards or resolve billing questions quickly.",
  },
  {
    q: "Should retainers use recurring invoices?",
    a: "Yes, retainers are a common recurring billing use case, especially for agencies, maintenance providers, and managed service businesses. Fixed monthly retainers map cleanly to recurring invoice profiles with consistent line items and terms. Document scope changes in the contract when retainer work exceeds agreed hours or deliverables.",
  },
  {
    q: "What controls reduce recurring billing errors?",
    a: "Contract start/end dates, proration rules, tax settings by jurisdiction, and monthly subscription reconciliation reviews are essential controls. Review active subscriptions against bank deposits and open A/R so paused or cancelled accounts do not keep billing. Sync lifecycle events from sales or CRM when plans change mid-cycle.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Recurring invoices and retainers", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Recurring sales receipts and A/R", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Subscription-style billing cycles", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function HowBusinessesHandleRecurringBillingPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Handle Recurring Billing</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Handle Recurring Billing</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how businesses handle recurring billing for retainers, maintenance plans, and subscription-style services—with billing models, lifecycle management, and failed-payment workflows.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring billing turns one-time customer setup into repeatable revenue collection. It is used for managed services, maintenance contracts, SaaS-style offerings, and monthly retainers where the customer pays on a fixed schedule rather than per project.
                    </p>
                    <p>
                      Done well, recurring billing stabilizes cash flow and reduces admin time. Done poorly, it creates surprise charges, failed payments, and disputes that damage renewals. The difference is usually contract clarity plus lifecycle discipline—not just flipping on a recurring profile in software.
                    </p>
                    <p>
                      For invoice mechanics, start with{" "}
                      <Link href="/invoicing/guides/recurring-invoicing-explained" className={linkGreen}>recurring invoicing explained</Link>{" "}
                      and automation context in{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>.
                    </p>
                    <p>
                      Pair recurring operations with{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>tracking unpaid invoices</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>reconciling invoices and payments</Link>{" "}
                      so subscription revenue stays accurate in your books.
                    </p>
                  </div>
                </section>
                <section id="billing-models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Choose the model that matches delivery.">Common Recurring Billing Models</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Pick a billing model that mirrors how you deliver value. Mismatch—charging a flat fee while scope varies wildly—creates margin leaks or customer resentment at renewal.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Fixed recurring fee:</strong> same amount each cycle; ideal for retainers with defined scope.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Usage-based recurring:</strong> base fee plus metered usage; common for utilities-style services.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Tiered plans:</strong> package levels with upgrade paths; document what each tier includes.</span></li>
                    </ul>
                    <p>
                      Agencies and consultants often combine a fixed retainer with overage billing for work outside scope—document overage rules in the contract and invoice overages promptly so they do not pile up invisibly.
                    </p>
                  </div>
                </section>
                <section id="lifecycle" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Operational steps beyond the first invoice.">Subscription Lifecycle Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Businesses track start dates, renewals, upgrades, pauses, cancellations, and proration events. Clear lifecycle rules prevent billing disputes when service levels change mid-cycle—especially when sales promises an upgrade effective “immediately” but finance still bills the old plan.
                    </p>
                    <p>
                      Define who updates the billing system when contracts change: sales, account management, or finance. A single owner prevents orphaned subscriptions that bill after cancellation or skip the first invoice after onboarding.
                    </p>
                    <p>
                      For annual contracts billed monthly, note renewal dates and price escalators in the customer record. Review active subscriptions monthly against signed agreements—see{" "}
                      <Link href="/invoicing/guides/billing-vs-invoicing-whats-the-difference" className={linkGreen}>billing vs invoicing</Link>{" "}
                      for how recurring charges relate to invoice documents.
                    </p>
                  </div>
                </section>
                <section id="collections" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep recurring revenue reliable month to month.">Collections and Dunning for Recurring Accounts</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Failed payment handling should include automated retries, customer notifications, and escalation paths for long-overdue accounts. Dunning—the sequence of emails and status changes after a card fails—is standard in subscription billing and equally useful for recurring invoices paid manually.
                    </p>
                    <p>
                      Give customers a self-serve path to update payment methods before service interruption when possible. For manual-pay retainers, use the same reminder cadence as one-time invoices; see{" "}
                      <Link href="/invoicing/guides/how-invoice-reminders-work" className={linkGreen}>how invoice reminders work</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>.
                    </p>
                    <p>
                      Pause or downgrade service only according to contract terms, and log the decision so account managers know why billing stopped. Chronic failed payments often signal churn risk earlier than renewal conversations.
                    </p>
                  </div>
                </section>
                <section id="setup-checklist" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Launch recurring billing without surprises.">Recurring Billing Setup Checklist</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Before activating a recurring profile, confirm contract rate, billing frequency, tax jurisdiction, start date, and whether auto-charge or invoice-and-pay applies. Load customer billing contacts and PO requirements into the template so every cycle inherits correct fields.
                    </p>
                    <p>
                      Send a welcome or first-invoice notice that explains what will bill, when, and how to update payment details. Transparency reduces “surprise charge” disputes that hurt retention.
                    </p>
                    <p>
                      After the first three cycles, spot-check amounts against contracts and bank deposits. Small configuration errors repeat every month until someone notices—automation amplifies both efficiency and mistakes.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Recurring billing operations questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Recurring Billing" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-businesses-handle-recurring-billing" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Handle Recurring Billing | BeltStack Guide",
    description:
      "How businesses handle recurring billing: fixed and usage models, subscription lifecycle, dunning for failed payments, setup checklist, and reconciliation for retainers and plans.",
  };
}
