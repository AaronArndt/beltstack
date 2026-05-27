import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmCompareUrl } from "@/lib/routes";

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
    q: "Is free CRM software good enough?",
    a: "Free CRM tiers from HubSpot and Zoho CRM are enough for many small teams to manage contacts, deals, and basic pipeline. Limits often include user caps, record limits, or reduced automation. Upgrade when you hit those walls or need marketing hubs.",
  },
  {
    q: "What do you get with paid CRM?",
    a: "Paid plans typically add more users, workflow automation, email sequences, advanced reporting, API access, and support SLAs. Marketing and service modules are often separate line items.",
  },
  {
    q: "When should I upgrade from free CRM?",
    a: "Upgrade when you need more seats than the free tier allows, when reps need automated follow-up at scale, or when marketing wants campaigns tied to the same contact record.",
  },
  {
    q: "Are free CRMs really free?",
    a: "Core CRM is free at entry tiers; costs appear when you add users, marketing contacts, or premium support. Read current pricing on vendor sites and our reviews—plans change.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Generous free CRM", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Free + affordable paid", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Paid pipeline focus", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "How Much CRM Software Costs", href: "/crm/guides/how-much-crm-software-costs" },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "Can Excel Be Used as a CRM", href: "/crm/guides/can-excel-be-used-as-a-crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function FreeVsPaidCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Free vs Paid CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Free vs Paid CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    When free CRM is enough, what paid plans add, and how to decide when upgrading is worth the cost for your team.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Free CRM lowered the barrier for small teams: you can run pipeline and contacts without a large upfront contract. Paid CRM adds capacity, automation, and support as volume and complexity grow. The right choice depends on seat count, how formal your sales process is, and whether marketing runs in the same system.
                    </p>
                    <p>
                      Compare <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> free tiers in <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link>. For dollar ranges see <Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>how much CRM software costs</Link>.
                    </p>
                  </div>
                </section>
                <section id="free" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What free tiers typically include.">What Free CRM Usually Covers</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Contact and company records with basic custom fields</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Deal pipeline and manual activity logging</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Limited users or records (vendor-specific caps)</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Email integration on many plans (check current limits)</span></li>
                    </ul>
                    <p>Good fit for founders and small teams validating CRM habits. See <Link href="/crm/guides/what-crm-does-for-small-business" className={linkGreen}>what CRM does for small business</Link>.</p>
                  </div>
                </section>
                <section id="paid" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Why teams pay for CRM.">What Paid CRM Adds</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">More users and data</strong> — Scale without hitting free-tier ceilings.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation</strong> — Workflows and sequences; <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>how CRM automation works</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Advanced reporting and forecasting</strong></span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Marketing or service hubs</strong> — When bundled with CRM suites</span></li>
                    </ul>
                  </div>
                </section>
                <section id="decision" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="A simple upgrade framework.">How to Decide: Stay Free or Go Paid</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Stay on free while adoption is the main goal and limits do not block daily work. Move to paid when automation saves measurable rep time or when marketing and sales must share one paid contact database. Use <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> and <Link href="/crm/guides/what-features-to-look-for-in-crm-software" className={linkGreen}>what features to look for</Link> to match tier to workflow.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Free vs paid CRM" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/free-vs-paid-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Free vs Paid CRM Software | BeltStack Guide",
    description:
      "Compare free and paid CRM software: what free tiers include, what paid plans add, and when to upgrade for your team.",
  };
}
