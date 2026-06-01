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
    q: "How do you migrate from one CRM to another?",
    a: "Typical steps: audit and clean source data, map fields to the new CRM, export contacts and open deals, import and validate, reconnect email and integrations, train users, run parallel for a short period, then cut over with a freeze on the old system.",
  },
  {
    q: "Can you migrate CRM data without losing history?",
    a: "Contacts, companies, and open deals migrate well via CSV or migration tools. Email and activity history may not transfer fully—check vendor import limits. Archive the old CRM read-only for reference if needed.",
  },
  {
    q: "How long does a CRM migration take?",
    a: "Small teams with clean data: days to two weeks. Larger orgs with custom objects and integrations: weeks to months. Budget time for validation and rep retraining.",
  },
  {
    q: "Should we migrate everything or start fresh?",
    a: "Migrate active contacts and open pipeline; archive or leave behind stale leads and closed deals older than your retention policy. Cleaning before import beats fixing duplicates after.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Import tools", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "Migration wizards", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise moves", reviewHref: getCrmReviewUrl("salesforce") },
];

const RELATED_ITEMS = [
  { label: "Why CRM Implementations Fail", href: "/crm/guides/why-crm-implementations-fail" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "Common CRM Mistakes", href: "/crm/guides/common-crm-mistakes-businesses-make" },
];

export default function HowBusinessesMigrateToANewCrmPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Migrate to a New CRM</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Migrate to a New CRM
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    A practical CRM migration playbook: data cleanup, field mapping, import, integrations, training, and cutover without losing active pipeline.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Switching CRM is common after acquisitions, outgrowing a tool, or recovering from a failed rollout. Migration is a chance to clean data—not clone every bad habit from the old system.
                    </p>
                    <p>
                      Choose the destination with <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> and <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link>. Avoid repeating <Link href="/crm/guides/why-crm-implementations-fail" className={linkGreen}>implementation failures</Link>.
                    </p>
                  </div>
                </section>
                <section id="plan" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Before you export anything.">Plan and Clean Source Data</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Inventory objects: contacts, companies, deals, custom fields</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Merge duplicates; close or drop stale opportunities</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Define field mapping document (old → new)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Assign migration owner and cutover date</span></li>
                    </ul>
                    <p>Leaving spreadsheets? See <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> and <Link href="/crm/guides/can-excel-be-used-as-a-crm" className={linkGreen}>Excel as CRM</Link>.</p>
                  </div>
                </section>
                <section id="execute" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Import, validate, connect.">Execute Migration and Validation</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ol className="space-y-3 list-decimal list-inside text-neutral-700">
                      <li>Export CSV or use vendor migration app from old CRM.</li>
                      <li>Import test batch; spot-check owners, stages, amounts.</li>
                      <li>Import full active dataset; reconcile record counts.</li>
                      <li>Reconnect <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>integrations</Link> (email, forms, billing).</li>
                      <li>Train reps on new pipeline and mobile workflow.</li>
                      <li>Run parallel one to two weeks if risk is high; then read-only old CRM.</li>
                    </ol>
                  </div>
                </section>
                <section id="after" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="First 30 days in the new system.">After Cutover</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Hold weekly pipeline reviews in the new CRM only. Fix mapping errors quickly. Defer advanced <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>automation</Link> until <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>reporting</Link> matches reality. Document lessons in your internal wiki to avoid <Link href="/crm/guides/common-crm-mistakes-businesses-make" className={linkGreen}>common mistakes</Link> on the next change.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Migration targets" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-businesses-migrate-to-a-new-crm" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Migrate to a New CRM | BeltStack Guide",
    description:
      "Learn how to migrate to a new CRM: data cleanup, field mapping, import, integrations, training, and cutover without losing pipeline.",
  };
}
