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
    q: "Why do businesses switch invoicing software?",
    a: "Common reasons: outgrowing plan limits, needing better recurring billing or reporting, lower cost elsewhere, or consolidating with accounting software. Sometimes the current tool no longer fits the workflow or team size.",
  },
  {
    q: "Can I export my invoice history when switching?",
    a: "Most invoicing tools let you export invoices and sometimes customer data to CSV or PDF. Check the export options before you commit to a new platform. You may need to re-enter some data or use the new tool’s import if available.",
  },
  {
    q: "What about recurring invoices when I switch?",
    a: "You’ll need to recreate recurring invoice schedules in the new tool. Export the details (client, amount, frequency) from the old system and set them up in the new one before you cancel the old subscription so there’s no gap in billing.",
  },
  {
    q: "How do I migrate customer and contact data?",
    a: "Export client/contact lists from your current tool (CSV is common) and import into the new platform if it supports imports. Otherwise, re-enter key clients and ensure payment details and terms are set correctly before you send the first invoice from the new system.",
  },
  {
    q: "How can I avoid disruption when switching?",
    a: "Plan the cutover: export data, set up the new tool (templates, payment gateway, recurring schedules), then switch sending to the new system. Notify clients if payment links or portal URLs change. Keep the old account read-only for a while so you can reference past invoices.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "FreshBooks", logoSrc: "/Logos/freshbooks.jpeg", rating: 4.5, bestFor: "Freelancers & small business", reviewHref: getInvoicingReviewUrl("freshbooks") },
  { name: "QuickBooks", logoSrc: "/Logos/quickbooks.png", rating: 4.6, bestFor: "Accounting + invoicing", reviewHref: getInvoicingReviewUrl("quickbooks") },
  { name: "Zoho Invoice", logoSrc: "/Logos/zoho.jpeg", rating: 4.4, bestFor: "Value & automation", reviewHref: getInvoicingReviewUrl("zoho-invoice") },
];

export default function HowToSwitchInvoicingSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How to Switch Invoicing Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How to Switch Invoicing Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Why businesses switch invoicing platforms, how to export history and migrate contacts, and how to avoid disruption when you move.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Switching invoicing software is doable with a bit of planning. You’ll need to export invoice and customer data, set up the new tool (templates, payment processing, recurring schedules), and cut over without dropping bills or confusing clients. This guide outlines the main steps and how to keep disruption to a minimum.
                    </p>
                    <p>
                      When evaluating a new platform, use our <Link href="/invoicing" className={linkGreen}>invoicing hub</Link>, <Link href="/invoicing/compare" className={linkGreen}>comparisons</Link>, and reviews of <Link href={getInvoicingReviewUrl("freshbooks")} className={linkGreen}>FreshBooks</Link>, <Link href={getInvoicingReviewUrl("quickbooks")} className={linkGreen}>QuickBooks</Link>, and <Link href={getInvoicingReviewUrl("zoho-invoice")} className={linkGreen}>Zoho Invoice</Link> to compare features and migration support.
                    </p>
                  </div>
                </section>
                <section id="planning-the-switch" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Steps to a smooth transition.">Planning the Switch</SectionTitle>
                  <div className="max-w-[720px] space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Export invoice history</strong> — Get CSV or PDF exports from the current tool for your records and taxes.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Migrate customers and contacts</strong> — Export and import (or re-enter) client data into the new system.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Recreate templates</strong> — Match branding and fields in the new tool so invoices look consistent.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Set up recurring invoices</strong> — Recreate schedules in the new platform before turning off the old one.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Payment setup</strong> — Connect your payment processor or the new tool’s payment option so clients can pay without interruption.</span></li>
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
              <GuideSidebar title="Popular Invoicing Software" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedInvoicingResources excludeHref="/invoicing/guides/how-to-switch-invoicing-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How to Switch Invoicing Software | BeltStack Guide",
    description:
      "Why businesses switch invoicing platforms, how to export history and migrate contacts, and how to avoid disruption when changing tools.",
  };
}
