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
    q: "What is the difference between contact management and CRM?",
    a: "Contact management stores names, email, phone, and notes—an address book for business. CRM adds pipeline stages, deals, activities, automation, reporting, and team permissions for selling workflows.",
  },
  {
    q: "When is contact management enough?",
    a: "Solo operators with a short list and no formal pipeline may use contact management or email contacts. Upgrade to CRM when you need deal stages, reminders, team visibility, or forecasting.",
  },
  {
    q: "Is Google Contacts contact management?",
    a: "Yes—it is basic contact management without sales pipeline. CRM integrates with Gmail (e.g. Copper, HubSpot) to add pipeline on top.",
  },
  {
    q: "Can CRM work as contact management only?",
    a: "Yes, but you pay for unused capability. If you only need a list, a simple tool or spreadsheet may suffice until pipeline needs appear—see CRM vs spreadsheets.",
  },
  {
    q: "Is a shared spreadsheet contact management?",
    a: "Yes—it is manual contact management without automation, permissions, or pipeline. It breaks when multiple reps edit versions or you need forecast reports.",
  },
  {
    q: "What is the best contact management with CRM features?",
    a: "Gmail-native tools like Copper or full CRMs like HubSpot bridge contacts and pipeline. Match to whether you sell through email threads or a formal pipeline.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Copper", logoSrc: "/Logos/copper.png", rating: 4.3, bestFor: "Contacts in Gmail", reviewHref: getCrmReviewUrl("copper") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Contacts + pipeline", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Sales pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "What Is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  { label: "Can Excel Be Used as a CRM", href: "/crm/guides/can-excel-be-used-as-a-crm" },
  { label: "How CRM Software Works", href: "/crm/guides/how-crm-software-works" },
];

export default function ContactManagementVsCrmExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Contact Management vs CRM Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Contact Management vs CRM Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Contact management stores people; CRM manages relationships and revenue. Learn what each does and when to move from a contact list to full CRM.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Buyers sometimes ask for &quot;contact management&quot; when they need a CRM—or buy CRM and only use contacts. The distinction matters for budget and adoption.
                    </p>
                    <p>
                      Foundation: <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link>. Alternatives to full CRM: <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> and <Link href="/crm/guides/can-excel-be-used-as-a-crm" className={linkGreen}>Excel as CRM</Link>.
                    </p>
                  </div>
                </section>
                <section id="contact-mgmt" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Address book plus notes.">What Contact Management Includes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Name, company, email, phone</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Tags or simple groups</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Basic notes and history (varies)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Limited collaboration</span></li>
                    </ul>
                    <p>Examples: phone contacts, lightweight SMB tools, or email-native lists.</p>
                  </div>
                </section>
                <section id="crm-adds" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Revenue workflow on top of contacts.">What CRM Adds Beyond Contact Management</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Deals and pipeline</strong> — <Link href="/crm/guides/how-sales-pipeline-management-works" className={linkGreen}>Pipeline management</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Leads and conversion</strong> — <Link href="/crm/guides/lead-management-explained" className={linkGreen}>Lead management</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Activities and email sync</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation and reporting</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Team permissions</strong></span></li>
                    </ul>
                    <p><Link href={getCrmReviewUrl("copper")} className={linkGreen}>Copper</Link> bridges Gmail contact management with light CRM; <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> is pipeline-first full CRM.</p>
                  </div>
                </section>
                <section id="when-upgrade" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Signals to adopt CRM.">When to Move from Contact Management to CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Upgrade when you track open deals, multiple reps touch accounts, or follow-up slips without tasks. See <Link href="/crm/guides/why-businesses-need-crm-software" className={linkGreen}>why businesses need CRM</Link> and <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM</Link>.</p>
                  </div>
                </section>
                <section id="compare-table" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="At a glance.">Contact Management vs CRM Comparison</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Goal</strong> — Contact mgmt: find people. CRM: win revenue.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Data model</strong> — Contacts only vs contacts, companies, deals, activities</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Reporting</strong> — Lists vs <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>pipeline analytics</Link></span></li>
                    </ul>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack clarifies category boundaries in guides and tests CRM vs lightweight tools in reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/lead-management-explained" className={linkGreen}>Lead management</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getCrmReviewUrl("copper")} className={linkGreen}>Copper review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm" className={linkGreen}>CRM software hub</Link></span></li>
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
              <GuideSidebar title="Contacts vs CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/contact-management-vs-crm-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Contact Management vs CRM Explained | BeltStack Guide",
    description:
      "Contact management vs CRM explained: what each does, side-by-side differences, when to upgrade, and best tools that bridge contacts and pipeline in 2026.",
    keywords: ["contact management vs CRM", "contact management", "CRM vs address book", "Copper CRM", "sales pipeline"],
  };
}
