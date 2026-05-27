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
    q: "What does it mean to outgrow invoicing software?",
    a: "You outgrow a tool when billing volume, team size, or workflow complexity exceeds what the product can handle without spreadsheets, workarounds, errors, or delays. The signal is operational friction—not dissatisfaction with the brand.",
  },
  {
    q: "How many invoices per month is too many for simple tools?",
    a: "There is no fixed number, but many businesses feel friction above 30–50 monthly invoices without automation, especially with recurring billing or multiple users. A low invoice count with complex approvals can still require an upgrade.",
  },
  {
    q: "Should I upgrade features or switch platforms?",
    a: "Upgrade within the same platform when possible—same customer records, less migration risk. Switch when core limitations block approvals, integrations, reporting, multi-entity billing, or industry-specific workflows you cannot patch with add-ons.",
  },
  {
    q: "Can I migrate without losing invoice history?",
    a: "Yes, with planning. Export customer and invoice history, map recurring schedules, document open balances, and run parallel billing for one cycle during transition. Verify tax and numbering continuity with your accountant before cutover.",
  },
  {
    q: "Is outgrowing free software the same as outgrowing simple software?",
    a: "Not always. Some paid tools are still too simple for growing teams. The issue is capability fit, not price tier alone. A business on a mid-tier plan can still need a new platform if approvals, A/R reporting, or integrations are missing.",
  },
  {
    q: "What is the biggest risk of waiting too long to upgrade?",
    a: "Delayed collections and reconciliation errors compound. Teams compensate with spreadsheets, which creates duplicate sources of truth. By the time you switch, migration is harder because data lived in informal systems outside the invoicing tool.",
  },
  {
    q: "How long does a typical invoicing migration take?",
    a: "Simple solo migrations can take a few days; multi-user teams with recurring schedules often need one to two billing cycles. Budget time for customer communication, payment link updates, and accounting sync validation before deactivating the old system.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Growing service businesses", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Scale + accounting depth", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Workflow automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function WhenBusinessesOutgrowSimpleInvoicingToolsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">When Businesses Outgrow Simple Invoicing Tools</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">When Businesses Outgrow Simple Invoicing Tools</h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Warning signs you have outgrown basic invoicing tools, what to upgrade next, and how to migrate without disrupting collections or month-end close.
                  </p>
                  <GuideLastUpdated date="May 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Simple invoicing tools are great for getting started, but growth exposes gaps quickly: more clients, recurring contracts, multiple users, and tighter financial controls. What worked at five invoices per month often breaks at fifty—not because the product failed, but because billing became a system, not a task.
                    </p>
                    <p>
                      Outgrowing a tool is an operations signal, not a failure. It usually means revenue grew faster than billing process maturity. The goal is to upgrade before spreadsheets, missed reminders, and reconciliation errors become normal.
                    </p>
                    <p>
                      Common triggers include rising overdue balances, duplicate data entry into accounting, and team members stepping on each other’s invoice edits. Each adds hidden cost that does not show up on your software subscription line.
                    </p>
                    <p>
                      If you are planning a platform change, use{" "}
                      <Link href="/invoicing/guides/how-to-switch-invoicing-software" className={linkGreen}>how to switch invoicing software</Link>{" "}
                      and compare next-step options on{" "}
                      <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link>.
                    </p>
                  </div>
                </section>
                <section id="warning-signs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common signals that your current tool is too limited.">Signs You Have Outgrown Your Tool</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Warning signs usually appear in collections and close first. Finance notices open balances that do not match reality, or owners spend evenings chasing payments that should have been automated weeks ago.
                    </p>
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Manual spreadsheet workarounds for reporting, approvals, or A/R aging.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Missed reminders and rising overdue balances despite good service delivery.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>No support for recurring, milestone, deposit, or multi-user billing.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Reconciliation errors between invoices, payments, and accounting records.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Client caps or plan limits that force awkward workarounds each month.</span></li>
                    </ul>
                    <p>
                      If two or more signs are persistent for a full billing cycle, treat them as upgrade triggers—not one-off bad weeks. See{" "}
                      <Link href="/invoicing/guides/how-businesses-track-unpaid-invoices" className={linkGreen}>how businesses track unpaid invoices</Link>{" "}
                      for baseline controls before you switch tools.
                    </p>
                  </div>
                </section>
                <section id="what-to-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Capabilities to add during the next stage.">What to Upgrade Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Prioritize automation, role-based permissions, stronger A/R reporting, and accounting integrations. These four areas fix most post-growth pain: who can bill, what sends automatically, what finance can see, and what syncs to the general ledger.
                    </p>
                    <p>
                      Next, match industry workflow depth. Agencies may need proposals and retainers; contractors may need estimates and milestone invoices; consultants may need time-to-invoice flows. A generic upgrade without workflow fit still feels broken in daily use.
                    </p>
                    <p>
                      See{" "}
                      <Link href="/invoicing/guides/what-features-to-look-for-in-invoicing-software" className={linkGreen}>what features to look for in invoicing software</Link>,{" "}
                      <Link href="/invoicing/guides/invoice-automation-explained" className={linkGreen}>invoice automation explained</Link>,{" "}
                      and{" "}
                      <Link href="/invoicing/guides/free-vs-paid-invoicing-software" className={linkGreen}>free vs paid invoicing software</Link>{" "}
                      when evaluating the next tier.
                    </p>
                  </div>
                </section>
                <section id="migration-planning" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Reduce disruption when moving platforms.">Planning a Smooth Transition</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Export open invoices, customer records, tax settings, and recurring schedules before migration. Document which invoices are disputed, partially paid, or awaiting approval so nothing disappears in transit.
                    </p>
                    <p>
                      Run one billing cycle in parallel when possible so collections do not stall during the switch. Notify active customers if payment links or remittance instructions change. Even small wording updates reduce “I already paid” confusion.
                    </p>
                    <p>
                      Reconcile the first close on the new platform carefully. Compare A/R totals between old and new systems until balances match. See{" "}
                      <Link href="/invoicing/guides/how-businesses-reconcile-invoices-and-payments" className={linkGreen}>how businesses reconcile invoices and payments</Link>{" "}
                      for a monthly checklist.
                    </p>
                  </div>
                </section>
                <section id="upgrade-vs-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="When to stay vs when to move on.">Upgrade Plan vs Platform Switch</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      If your vendor’s higher tier adds the missing capabilities—and migration cost is high—upgrade in place first. If the product category itself is wrong (e.g., no approvals, no real accounting sync), switching platforms is usually faster than stacking workarounds for another year.
                    </p>
                    <p>
                      Shortlist two replacements and test with real customers before committing. The best upgrade is the one your billing owner will actually use daily without reverting to spreadsheets.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Upgrade timing and migration questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Invoicing Tools for Growing Teams" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/when-businesses-outgrow-simple-invoicing-tools" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "When Businesses Outgrow Simple Invoicing Tools (2026) | BeltStack Guide",
    description:
      "Spot when you have outgrown simple invoicing tools: spreadsheet workarounds, missed reminders, weak A/R reporting, migration steps, and what to upgrade for automation and accounting sync.",
    keywords: [
      "outgrow invoicing software",
      "upgrade invoicing software",
      "invoicing migration",
      "A/R reporting",
      "invoice automation",
      "2026",
    ],
  };
}
