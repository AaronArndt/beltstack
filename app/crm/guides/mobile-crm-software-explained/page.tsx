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
    q: "What is mobile CRM software?",
    a: "Mobile CRM is CRM accessed through native iOS/Android apps or responsive mobile web so reps update pipeline, log calls, and view contacts away from a desk. Features vary by vendor and plan tier.",
  },
  {
    q: "Do I need mobile CRM?",
    a: "You need it when reps sell in the field, travel often, or must log activities immediately after meetings. Desk-only inside sales may be fine on desktop if email sync is strong.",
  },
  {
    q: "Does mobile CRM work offline?",
    a: "Some apps cache records for limited offline use; sync when connectivity returns. Verify offline behavior in trial if your team works in low-signal areas.",
  },
  {
    q: "Is mobile CRM different from field service mobile apps?",
    a: "Yes. Mobile CRM focuses on sales pipeline and contacts. Field service mobile apps focus on work orders, dispatch, and technician jobs. See CRM vs field service software.",
  },
  {
    q: "Which CRM has the best mobile app?",
    a: "Best depends on workflow—test pipeline updates, call logging, and offline behavior in trial. Pipedrive and HubSpot are common picks for mobile sales; verify on your devices.",
  },
  {
    q: "Is mobile CRM included in all CRM plans?",
    a: "Most vendors include mobile apps on standard plans; some advanced mobile or offline features may require higher tiers. Confirm before buying seats for field reps only.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Mobile pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Mobile app", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Field sales", reviewHref: getCrmReviewUrl("salesforce") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "How CRM Integrations Work", href: "/crm/guides/how-crm-integrations-work" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "CRM for Sales Teams", href: "/crm/guides/crm-for-sales-teams" },
  { label: "CRM vs Field Service Software", href: "/crm/guides/crm-vs-field-service-software" },
  { label: "How CRM Software Helps Contractors", href: "/crm/guides/how-crm-software-helps-contractors" },
  { label: "What Features to Look for in CRM", href: "/crm/guides/what-features-to-look-for-in-crm-software" },
];

export default function MobileCrmSoftwareExplainedPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Mobile CRM Software Explained</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Mobile CRM Software Explained
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    What mobile CRM is, who needs it, and what to evaluate in apps for field reps, road sales, and remote teams.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Mobile CRM puts pipeline and contacts in a rep&apos;s pocket. Adoption improves when updating the CRM is easier than sending yourself a reminder text—especially after site visits or trade shows.
                    </p>
                    <p>
                      Test mobile apps during <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>CRM selection</Link>. Field trades: compare with <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>field service software</Link> if technicians—not only sellers—need mobile workflows.
                    </p>
                    <p>
                      Compare <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, and <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> mobile apps on the <Link href="/crm" className={linkGreen}>CRM hub</Link>—then validate <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>integrations</Link> and <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>reporting</Link> on desktop.
                    </p>
                  </div>
                </section>
                <section id="features" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to test on a phone.">Key Mobile CRM Features</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Pipeline board and deal detail views</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Click-to-call and activity logging</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Business card scan or quick contact create</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Push notifications for tasks and assigned leads</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Maps or visit planning (vendor-dependent)</span></li>
                    </ul>
                  </div>
                </section>
                <section id="who" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Fit by role.">Who Benefits Most from Mobile CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Outside sales, real estate agents, and contractor BD reps benefit heavily. Inside sales may prioritize desktop and dialer integrations. See <Link href="/crm/guides/how-crm-software-helps-real-estate-businesses" className={linkGreen}>CRM for real estate</Link> and <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link>.</p>
                  </div>
                </section>
                <section id="adoption" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Mobile drives daily use.">Mobile CRM and Rep Adoption</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Reps update CRM when friction is lower than forgetting. Mobile logging right after meetings improves <Link href="/crm/guides/crm-kpis-businesses-should-track" className={linkGreen}>activity KPIs</Link> and forecast accuracy in <Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>reporting</Link>. Pair apps with <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>email and calendar integrations</Link>.</p>
                  </div>
                </section>
                <section id="eeat" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Independent reviews, not vendor sales pages.">How BeltStack Covers CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack tests CRM mobile apps in independent reviews—<Link href="/methodology" className={linkGreen}>methodology</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, <Link href="/crm" className={linkGreen}>CRM hub</Link>. App store ratings vary by OS version; trial on your team&apos;s phones.</p>
                  </div>
                </section>
                <section id="what-to-do-next" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Related guides and product reviews.">What to Do Next</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>How to choose CRM</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive review</Link></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>CRM vs field service</Link></span></li>
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
              <GuideSidebar title="Mobile-friendly CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/mobile-crm-software-explained" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Mobile CRM Software Explained | BeltStack Guide",
    description:
      "Mobile CRM software explained: key app features, offline use, adoption tips, and when field sales, contractors, and remote teams need mobile pipeline access.",
    keywords: ["mobile CRM", "CRM app", "CRM for field sales", "offline CRM", "sales CRM mobile"],
  };
}
