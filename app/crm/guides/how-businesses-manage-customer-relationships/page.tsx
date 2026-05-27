import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl } from "@/lib/routes";

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
    q: "How do businesses manage customer relationships?",
    a: "They combine practices (consistent follow-up, shared context, accountability) with tools (CRM, email, support desk) so every customer interaction is informed by history and next steps are clear across the team.",
  },
  {
    q: "Is customer relationship management only for sales?",
    a: "No. Marketing, sales, success, and support all contribute. CRM is the common record for revenue-facing teams; support may use a helpdesk that integrates with CRM for a full view.",
  },
  {
    q: "What does CRM stand for in this context?",
    a: "Customer relationship management—the discipline and software category focused on organizing relationships over time. See what does CRM stand for and what is CRM software.",
  },
  {
    q: "How does CRM differ from just staying in touch?",
    a: "CRM adds structure: who owns the relationship, what was promised, pipeline status, and measurable follow-up—not only goodwill and memory.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Relationship + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Account management", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Copper", logoSrc: "/Logos/copper.png", rating: 4.3, bestFor: "Relationship in Gmail", reviewHref: getCrmReviewUrl("copper") },
];

const RELATED_ITEMS = [
  { label: "What Does CRM Stand For", href: "/crm/guides/what-does-crm-stand-for" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
  { label: "CRM vs Helpdesk Software", href: "/crm/guides/crm-vs-helpdesk-software" },
  { label: "How CRM Software Improves Sales", href: "/crm/guides/how-crm-software-improves-sales" },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
];

export default function HowBusinessesManageCustomerRelationshipsPage() {
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
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Manage Customer Relationships</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Manage Customer Relationships
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Practices and systems for managing customer relationships over time: shared context, follow-up discipline, and how CRM software supports the work.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Customer relationship management is both a mindset and a set of habits: know who the customer is, remember what you discussed, deliver on promises, and communicate proactively. At scale, businesses add CRM software so those habits do not depend on individual memory.
                    </p>
                    <p>
                      <Link href="/crm/guides/what-does-crm-stand-for" className={linkGreen}>What CRM stands for</Link> explains the acronym; <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> covers the product category. This guide focuses on how organizations actually run relationship work day to day.
                    </p>
                  </div>
                </section>
                <section id="practices" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="People and process first.">Core Practices for Strong Relationships</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Single customer view</strong> — One record per account with contacts, deals, and support history.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Documented communication</strong> — Log calls and emails so handoffs do not reset context.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Clear ownership</strong> — Named owner for each account or deal.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Proactive follow-up</strong> — Tasks and cadences, not only reactive inbox work.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Feedback loops</strong> — Win/loss and support themes inform product and sales.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where CRM fits in the stack.">Tools That Support Relationship Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">CRM</strong> anchors presale and account growth: <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and others on our <Link href="/crm" className={linkGreen}>CRM hub</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Helpdesk</strong> handles post-sale tickets—integrate with CRM via <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Email and calendar</strong> stay primary channels; CRM sync keeps the record complete. See <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link>.
                    </p>
                  </div>
                </section>
                <section id="lifecycle" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Across the customer journey.">Relationships Across the Lifecycle</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Prospect → customer → repeat buyer or churned account: each phase needs different touchpoints. Marketing and sales use CRM for acquisition and close; success teams track health and renewals. <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>Lead tracking</Link> and <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>pipeline management</Link> cover the revenue half; support tools cover service continuity.</p>
                    <p>Why invest? See <Link href="/crm/guides/why-businesses-need-crm-software" className={linkGreen}>why businesses need CRM software</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Relationship CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-businesses-manage-customer-relationships" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Manage Customer Relationships | BeltStack Guide",
    description:
      "Learn how businesses manage customer relationships with practices and CRM tools: shared context, follow-up, ownership, and lifecycle touchpoints.",
  };
}
