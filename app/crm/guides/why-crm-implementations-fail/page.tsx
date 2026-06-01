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
    q: "Why do CRM implementations fail?",
    a: "Top reasons: no clear owner or executive sponsor, wrong tool for the workflow, reps never trained on daily use, and data migration that imported garbage. Success requires process plus software—not software alone.",
  },
  {
    q: "How long should a CRM implementation take?",
    a: "Simple SMB cloud CRM can go live in days to two weeks for contacts, pipeline, and email sync. Enterprise rollouts take months. Failure often comes from treating a SMB rollout like an enterprise program.",
  },
  {
    q: "Should we hire a CRM consultant?",
    a: "Consultants help for complex Salesforce or multi-system integrations. Many SMBs succeed self-serve with vendor onboarding if scope stays small. Hire when customization, migration, or change management exceed internal capacity.",
  },
  {
    q: "When is it time to switch CRM instead of fixing the rollout?",
    a: "When the tool cannot match your sales motion, integrations are impossible, or adoption stayed near zero after a disciplined 90-day push. See how businesses migrate to a new CRM.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Faster rollout", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Low friction", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zohocrm.jpeg", rating: 4.4, bestFor: "SMB implement", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "Common CRM Mistakes Businesses Make", href: "/crm/guides/common-crm-mistakes-businesses-make" },
  { label: "How Businesses Migrate to a New CRM", href: "/crm/guides/how-businesses-migrate-to-a-new-crm" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
];

export default function WhyCrmImplementationsFailPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Why CRM Implementations Fail</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Why CRM Implementations Fail
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Root causes of failed CRM rollouts: sponsorship, fit, adoption, data, and scope—and what successful implementations do differently.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      A failed CRM implementation usually means the team still sells from inboxes and spreadsheets while paying for seats nobody opens. The software is rarely the only variable—process, incentives, and leadership behavior determine whether CRM becomes the system of record.
                    </p>
                    <p>
                      Avoid pitfalls in <Link href="/crm/guides/common-crm-mistakes-businesses-make" className={linkGreen}>common CRM mistakes</Link>. If you are restarting, read <Link href="/crm/guides/how-businesses-migrate-to-a-new-crm" className={linkGreen}>how businesses migrate to a new CRM</Link> and <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link>.
                    </p>
                  </div>
                </section>
                <section id="causes" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Patterns across failed projects.">Top Reasons CRM Rollouts Fail</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">No executive sponsor</strong> — No one enforces pipeline reviews in CRM.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Wrong tool fit</strong> — Enterprise CRM for a five-person team or vice versa.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Scope creep</strong> — Marketing, service, and custom objects before pipeline works.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Bad migration</strong> — Duplicates and stale deals imported unchanged.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Rep resistance</strong> — CRM seen as surveillance, not help.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="success" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What works instead.">What Successful Implementations Share</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Named admin owner and weekly office hours for questions</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Three to five pipeline stages reps understand</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Email sync turned on day one</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Forecast meetings use CRM screens, not side decks</span></li>
                    </ul>
                    <p>Tools like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> win partly on time-to-value—see <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>.</p>
                  </div>
                </section>
                <section id="methodology" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Honest implementation advice.">Experience and Transparency</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>BeltStack does not sell implementation services. We recommend defining success metrics before purchase—adoption rate, forecast accuracy, response time—and revisiting them at 30, 60, and 90 days. Vendor case studies show best cases; your rollout should be sized to your team.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM rollout" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/why-crm-implementations-fail" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Why CRM Implementations Fail | BeltStack Guide",
    description:
      "Learn why CRM implementations fail: weak sponsorship, poor fit, scope creep, bad data migration, and low adoption—and how to succeed instead.",
  };
}
