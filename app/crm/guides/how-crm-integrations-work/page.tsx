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
    q: "How do CRM integrations work?",
    a: "CRM integrations connect your customer system to other apps via native marketplace apps, OAuth sync, webhooks, or APIs. Data flows one-way or two-way depending on the connector—e.g. email logged to contacts, orders attached to accounts.",
  },
  {
    q: "What should I integrate with CRM first?",
    a: "Email and calendar first, then your website forms or marketing tool, then billing or support if reps need that context daily. Add ERP or data warehouse later when process is stable.",
  },
  {
    q: "What is the difference between native and Zapier integrations?",
    a: "Native integrations are built and maintained by the CRM or app vendor—often more reliable for core objects. Zapier and similar tools stitch workflows without code but need monitoring when APIs change.",
  },
  {
    q: "Can CRM integrate with field service software?",
    a: "Yes, via vendor connectors or middleware so won deals create clients or jobs. See how CRM integrations work alongside CRM vs field service software for scope.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Large app marketplace", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise integrations", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Zoho suite sync", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "How CRM Software Works", href: "/crm/guides/how-crm-software-works" },
  { label: "What Features to Look for in CRM", href: "/crm/guides/what-features-to-look-for-in-crm-software" },
  { label: "CRM vs Marketing Automation", href: "/crm/guides/crm-vs-marketing-automation" },
  { label: "How Businesses Migrate to a New CRM", href: "/crm/guides/how-businesses-migrate-to-a-new-crm" },
];

export default function HowCrmIntegrationsWorkPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Integrations Work</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Integrations Work
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    How CRM connects to email, marketing, billing, support, and operations tools—and how to plan integrations so data stays consistent.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM sits at the center of revenue workflows, but it rarely works alone. Integrations reduce double entry: emails log automatically, form fills become leads, and support tickets show on the account. The goal is one customer record that downstream tools enrich—not five conflicting spreadsheets.
                    </p>
                    <p>
                      <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> offer large marketplaces; <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> integrates tightly with Zoho Books and related apps. Start from <Link href="/crm/guides/how-crm-software-works" className={linkGreen}>how CRM software works</Link>.
                    </p>
                  </div>
                </section>
                <section id="methods" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How systems talk.">Integration Methods</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Native connectors</strong> — Prebuilt apps in the CRM marketplace.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">OAuth sync</strong> — Gmail, Outlook, calendars authorize read/write scopes.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Webhooks and APIs</strong> — Custom events for developers or iPaaS tools.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">CSV import/export</strong> — Migration and batch updates; see <Link href="/crm/guides/how-businesses-migrate-to-a-new-crm" className={linkGreen}>CRM migration</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="common-stacks" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical connection patterns.">Common CRM Integration Patterns</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Email and calendar</strong> — Log conversations on contact records.</p>
                    <p><strong className="text-[#1A2D48]">Marketing</strong> — Forms and campaigns sync leads; <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Support</strong> — Tickets on accounts; <Link href="/crm/guides/crm-vs-helpdesk-software" className={linkGreen}>CRM vs helpdesk</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Billing and ERP</strong> — Invoices and orders; <Link href="/crm/guides/crm-vs-erp" className={linkGreen}>CRM vs ERP</Link>, <Link href="/accounting" className={linkGreen}>accounting software</Link>.</p>
                    <p><strong className="text-[#1A2D48]">Field service</strong> — Jobs after close; <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>CRM vs field service</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM integration hubs" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-integrations-work" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Integrations Work | BeltStack Guide",
    description:
      "Learn how CRM integrations work: native apps, APIs, email sync, and connecting marketing, billing, support, and operations tools.",
  };
}
