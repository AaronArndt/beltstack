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
    q: "What is an unpaid invoice?",
    a: "An unpaid invoice is an issued invoice that has not been fully paid by its due date. It may be open, partially paid, or disputed depending on how your team defines workflow status. Tracking status consistently prevents balances from sitting in a generic “sent” bucket when action is overdue.",
  },
  {
    q: "What is accounts receivable aging?",
    a: "Aging groups unpaid invoices by how long they have been outstanding, commonly in buckets such as 0–30, 31–60, 61–90, and 90+ days. It helps finance and operations prioritize follow-up on the highest-risk balances first. Pair aging with owner assignment so every bucket has a clear next step.",
  },
  {
    q: "How often should businesses review unpaid invoices?",
    a: "Most teams review weekly at minimum, with a standing agenda item for open A/R. High-volume or cash-sensitive businesses often review daily and assign owners for each overdue bucket. The right cadence depends on invoice volume, average deal size, and how tight your cash runway is.",
  },
  {
    q: "Should unpaid invoices be tracked in invoicing software or accounting software?",
    a: "Often both. Invoicing software handles status, reminders, and day-to-day collections actions; accounting software provides ledger accuracy, bank reconciliation, and period-end reporting. Sync between the two reduces duplicate work and conflicting open-balance views.",
  },
  {
    q: "What causes unpaid invoices to stay open too long?",
    a: "Common causes include missing approval data, unclear terms, weak follow-up cadence, payment friction, and disputes that were never logged formally. Many delays are process problems, not customer unwillingness to pay. Fixing upstream invoice quality often improves tracking outcomes as much as chasing harder.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "A/R aging and reporting", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Invoice status visibility", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Collections workflow tracking", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function HowBusinessesTrackUnpaidInvoicesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Track Unpaid Invoices</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">How Businesses Track Unpaid Invoices</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Learn how businesses track unpaid invoices with status workflows, A/R aging reports, collections ownership, and weekly review habits that protect cash flow and forecast accuracy.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Unpaid invoice tracking is one of the highest-impact finance operations for small and mid-sized businesses. When teams cannot see what is open, who owns follow-up, and how long balances have been overdue, collections become reactive instead of managed—and cash forecasts lose reliability.
                    </p>
                    <p>
                      Strong tracking combines invoice status in your billing tool with aging visibility in reporting. Every open balance should have a defined status, an owner, and a next action date, not just a row on a spreadsheet someone checks when cash gets tight.
                    </p>
                    <p>
                      Tracking unpaid invoices is not the same as sending reminders, though the two work together. Visibility tells you what needs attention; reminders and escalation execute the plan. For the full billing lifecycle, see{" "}
                      <Link href="/invoicing/guides/what-is-invoice-management" className={linkGreen}>what is invoice management</Link>.
                    </p>
                    <p>
                      This guide covers status workflows, aging reports, key metrics, and collections ownership. Pair it with{" "}
                      <Link href="/invoicing/guides/how-to-reduce-late-invoice-payments" className={linkGreen}>how to reduce late invoice payments</Link>,{" "}
                      <Link href="/invoicing/guides/how-invoice-reminders-work" className={linkGreen}>how invoice reminders work</Link>, and{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>{" "}
                      for a complete collections stack.
                    </p>
                  </div>
                </section>
                <section id="status-workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Status definitions teams should standardize.">Invoice Status Workflow</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A clear status workflow prevents invoices from living in ambiguous states. When “sent” can mean anything from delivered to approved to overdue, teams lose days before anyone acts. Define statuses once and train everyone who touches billing to use them consistently.
                    </p>
                    <p>
                      Status should update automatically when possible—marking overdue when due date passes, partially paid when a split payment arrives—so humans focus on exceptions rather than data entry. For partial-payment handling, see{" "}
                      <Link href="/invoicing/guides/how-businesses-handle-partial-payments" className={linkGreen}>how businesses handle partial payments</Link>.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Draft:</strong> not yet sent; may still need internal approval.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Sent:</strong> delivered to customer, payment pending.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Partially paid:</strong> balance remains open; track remaining amount explicitly.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Overdue:</strong> due date passed with outstanding balance.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Disputed:</strong> customer challenge logged and under review.</span></li>
                    </ul>
                    <p>
                      Add a “written off” or “uncollectible” terminal status when leadership approves closing an account, so aging reports do not inflate open A/R forever. Document who can change status and when, especially for disputed or high-value invoices.
                    </p>
                  </div>
                </section>
                <section id="aging-reports" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How aging helps prioritize collections.">Using A/R Aging Reports</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Aging reports group unpaid balances by time buckets so teams can focus on the highest-risk invoices first. This is especially useful when you have many customers with different payment behaviors and cannot rely on memory to know who is late.
                    </p>
                    <p>
                      Export aging weekly from your accounting or invoicing system and review it in a standing meeting with sales or account owners when relationships matter. The goal is not just reporting—it is deciding who gets a call today versus who can wait until after a pre-due reminder.
                    </p>
                    <p>
                      Pair aging with owner assignment (account manager, bookkeeper, or collections lead) so every overdue invoice has a next action and due date for follow-up. For how A/R fits into broader finance ops, see{" "}
                      <Link href="/invoicing/guides/accounts-receivable-vs-invoicing" className={linkGreen}>accounts receivable vs invoicing</Link>{" "}
                      and{" "}
                      <Link href="/invoicing/guides/how-invoicing-affects-cash-flow" className={linkGreen}>how invoicing affects cash flow</Link>.
                    </p>
                  </div>
                </section>
                <section id="dashboard-metrics" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Metrics finance teams monitor weekly.">Key Unpaid Invoice Metrics</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Metrics turn unpaid invoice tracking from a folder of open PDFs into a management discipline. Pick a small set you review every week; adding too many numbers dilutes action.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Total open A/R balance and trend versus prior month.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Days sales outstanding (DSO) to measure collection speed.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Overdue percentage by customer segment or industry.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Dispute rate and average days to resolve disputes.</span></li>
                    </ul>
                    <p>
                      Compare DSO and overdue rates before and after process changes—shorter terms, payment links, or automated reminders—so you know whether collections improved. Spike in disputes often signals invoice quality problems upstream; see{" "}
                      <Link href="/invoicing/guides/common-invoice-mistakes-small-businesses-make" className={linkGreen}>common invoice mistakes small businesses make</Link>.
                    </p>
                  </div>
                </section>
                <section id="collections-workflow" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Turn tracking data into consistent follow-up.">Collections Workflow and Ownership</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Tracking without a collections workflow still leaves money on the table. Define who owns each aging bucket, what action happens at 7 versus 30 days overdue, and when to escalate to leadership or pause new work for chronic late payers.
                    </p>
                    <p>
                      Many teams align reminder automation with manual outreach: software sends pre-due and due-date emails; humans call on large balances or strategic accounts. Document the handoff so customers do not get duplicate conflicting messages.
                    </p>
                    <p>
                      Log disputes in the same system where you track status so open A/R reflects reality. When disputes resolve, update status and restart the reminder cadence if a balance remains. Strong tracking plus disciplined follow-up is what moves DSO down over time.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common tracking and collections questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for A/R Visibility" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-businesses-track-unpaid-invoices" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Track Unpaid Invoices | BeltStack Guide",
    description:
      "Learn how businesses track unpaid invoices with status workflows, A/R aging reports, key metrics, and collections ownership—plus when to pair tracking with reminders and reconciliation.",
  };
}
