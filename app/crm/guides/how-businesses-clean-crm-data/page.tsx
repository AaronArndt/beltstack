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
    q: "How often should businesses clean CRM data?",
    a: "Run light hygiene weekly (stale deals, missing next steps) and deeper cleans quarterly: duplicate merges, inactive contact archival, and stage definition reviews. Clean before major migrations or forecasting cycles.",
  },
  {
    q: "What is the fastest way to fix duplicate contacts in CRM?",
    a: "Use built-in duplicate management tools to merge by email or domain, then enforce unique email rules on import. Prevent new duplicates by connecting forms and integrations instead of manual CSV uploads.",
  },
  {
    q: "Who should own CRM data quality?",
    a: "Assign a CRM admin or RevOps owner—not only IT. Sales leadership reinforces standards in pipeline reviews. Reps own daily updates; the admin owns merge rules and field definitions.",
  },
  {
    q: "Does bad CRM data affect ROI?",
    a: "Yes. Inflated pipeline, broken automation, and distrust in reports reduce CRM ROI. See how businesses measure CRM ROI and CRM KPIs businesses should track.",
  },
  {
    q: "Should we clean CRM data before or after migration?",
    a: "Clean before migration when possible—merging duplicates in the old system is easier than fixing them twice. If you already migrated, run the same dedupe and stage audit in the new CRM before turning on automation.",
  },
  {
    q: "What CRM fields cause the most reporting errors?",
    a: "Open close dates on dead deals, missing lead source, inconsistent loss reasons, and deals without owners. Standardize pick lists and require key fields on stage change.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Duplicate tools", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Data management", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "SMB cleanup", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "Common CRM Mistakes Businesses Make", href: "/crm/guides/common-crm-mistakes-businesses-make" },
  { label: "How Businesses Migrate to a New CRM", href: "/crm/guides/how-businesses-migrate-to-a-new-crm" },
  { label: "CRM KPIs Businesses Should Track", href: "/crm/guides/crm-kpis-businesses-should-track" },
];

export default function HowBusinessesCleanCrmDataPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Businesses Clean CRM Data</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Businesses Clean CRM Data
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Practical CRM data hygiene: deduplication, pipeline cleanup, field standards, and habits that keep reports and automation trustworthy.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Dirty CRM data is expensive: forecasts lie, automation misfires, and reps stop trusting the system. Cleaning is not a one-time migration task—it is ongoing discipline tied to how you sell.
                    </p>
                    <p>
                      Searchers usually arrive after a bad forecast, duplicate contacts breaking email sends, or a new RevOps owner inheriting years of neglect. The fix is a repeatable process—not a single spreadsheet export—owned by someone with authority to merge records and change required fields.
                    </p>
                    <p>
                      Clean before <Link href="/crm/guides/how-businesses-migrate-to-a-new-crm" className={linkGreen}>migrating CRM</Link> or closing a quarter. Pair with <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>reporting and analytics</Link> and <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>integrations</Link> so synced tools do not recreate duplicates. Browse the <Link href="/crm" className={linkGreen}>CRM hub</Link> for reviews and comparisons.
                    </p>
                  </div>
                </section>
                <section id="steps" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A repeatable cleanup process.">CRM Data Cleaning Steps</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Merge duplicates</strong> — Match on email, phone, or company domain.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Close or archive stale deals</strong> — Open opportunities with no activity for 90+ days.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Standardize fields</strong> — Pick lists for industry, source, and loss reason.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Validate owners</strong> — Every open deal has an active rep assigned.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Fix integration drift</strong> — <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>Integrations</Link> creating duplicate leads.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="prevent" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Stop mess from returning.">Preventing Future Data Decay</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Required fields on stage change, weekly pipeline reviews, and import templates reduce entropy. Avoid mistakes in <Link href="/crm/guides/common-crm-mistakes-businesses-make" className={linkGreen}>common CRM mistakes</Link>. Track hygiene via <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs</Link>.</p>
                  </div>
                </section>
                <section id="tools" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Vendor features that help.">CRM Tools That Support Data Hygiene</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link>, and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> offer duplicate management, validation rules, and workflow requirements—depth varies by tier. Test dedupe on a sandbox copy before mass merges in production.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      BeltStack publishes independent CRM software reviews for small businesses and contractors. We test duplicate tools and reporting in trials, document pricing on published pages, and separate guides from paid placement—see <Link href="/methodology" className={linkGreen}>methodology</Link> and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>.
                    </p>
                    <p>Data hygiene advice here is operational, not legal—confirm retention and GDPR/CCPA obligations with counsel if you archive contacts.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting and analytics</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>How CRM integrations work</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>CRM KPIs to track</Link></span></li>
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
              <GuideSidebar title="CRM data hygiene" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-businesses-clean-crm-data" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Businesses Clean CRM Data | BeltStack Guide",
    description:
      "How businesses clean CRM data in 2026: deduplication, stale deals, field standards, integration drift, and habits for trustworthy pipeline reporting and ROI.",
    keywords: ["clean CRM data", "CRM data hygiene", "CRM deduplication", "CRM data quality"],
  };
}
