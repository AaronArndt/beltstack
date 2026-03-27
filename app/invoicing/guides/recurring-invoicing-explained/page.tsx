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
    q: "What is recurring invoicing?",
    a: "Recurring invoicing means the software automatically generates and sends invoices on a schedule you set—e.g. monthly for a retainer or subscription. You define the amount, frequency, and client once; the tool handles repeat billing and reminders.",
  },
  {
    q: "When do businesses use recurring invoices?",
    a: "Common for monthly retainers, subscription services, membership fees, and any client you bill on a fixed schedule. It saves time and reduces the chance of forgetting to send an invoice.",
  },
  {
    q: "Do all invoicing tools support recurring invoices?",
    a: "Most paid invoicing tools do. Free tiers (e.g. Wave, Zoho Invoice free) may limit the number of recurring invoices or charge for the feature. Check the plan details before you commit.",
  },
  {
    q: "Can I change or pause a recurring invoice?",
    a: "Yes. You can usually edit the amount, frequency, or end date, or pause the series. Some tools let you skip a cycle or add one-off line items to the next run.",
  },
  {
    q: "Which software is best for recurring invoicing?",
    a: "FreshBooks, Zoho Invoice, and QuickBooks all support recurring invoicing with flexible schedules. Compare our reviews and the FreshBooks vs QuickBooks and Zoho Invoice vs FreshBooks comparisons for your use case.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Recurring & time tracking", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Accounting + recurring", reviewHref: getInvoicingReviewUrl("quickbooks") },
];

export default function RecurringInvoicingExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Recurring Invoicing Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Recurring Invoicing Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    What recurring invoicing is, when businesses use it, and how tools automate subscriptions, retainers, and service agreements.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Recurring invoicing means your invoicing software automatically creates and sends invoices on a schedule you define—monthly for a retainer, weekly for a service, or custom intervals. You set up the client, amount, and frequency once; the tool handles the rest, including reminders when invoices are unpaid.
                    </p>
                    <p>
                      That’s ideal for freelancers and small businesses with repeat clients, subscriptions, or service agreements. Tools like <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>, <Link href={getInvoicingReviewUrl("zoho-invoice")} className={linkGreen}>Zoho Invoice</Link>, and <Link href={getInvoicingReviewUrl("quickbooks")} className={linkGreen}>QuickBooks</Link> support recurring invoices with flexible billing schedules. See our <Link href="/invoicing/compare" className={linkGreen}>invoicing comparisons</Link> to compare features side by side.
                    </p>
                  </div>
                </section>
                <section id="when-to-use" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical use cases.">When Businesses Use Recurring Invoicing</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Retainers</strong> — Monthly or quarterly fees for ongoing work.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Subscriptions</strong> — Recurring access or membership fees.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Service agreements</strong> — Maintenance, support, or regular deliverables on a schedule.</span></li>
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
              <GuideSidebar title="Tools for Recurring Invoices" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/recurring-invoicing-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Recurring Invoicing Explained | BeltStack Guide",
    description:
      "What recurring invoicing is, when businesses use it, and how tools automate subscriptions, retainers, and billing schedules.",
  };
}
