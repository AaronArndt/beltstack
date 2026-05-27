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
    q: "What is the biggest CRM mistake small businesses make?",
    a: "Buying more CRM than the team will use—too many fields, stages, and hubs before basic contact and pipeline habits exist. Start simple and expand when adoption is proven.",
  },
  {
    q: "Why do sales reps not use CRM?",
    a: "Usually extra clicks, unclear value, or managers who do not inspect pipeline in CRM. Fix with simple stages, email sync, and weekly reviews that use CRM data—not parallel spreadsheets.",
  },
  {
    q: "How do I clean up a messy CRM?",
    a: "Archive stale deals, merge duplicates, define stage criteria, and require minimum fields on stage change. Consider a migration if the tool itself is wrong—see how businesses migrate to a new CRM.",
  },
  {
    q: "Are CRM mistakes fixable without switching software?",
    a: "Often yes if the tool fits your workflow. Process, training, and admin cleanup fix many issues. Switch when fit, integrations, or cost are fundamentally wrong after an honest trial.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Easy adoption", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Simple pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Configurable SMB", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "Why CRM Implementations Fail", href: "/crm/guides/why-crm-implementations-fail" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "How CRM Reporting and Analytics Work", href: "/crm/guides/how-crm-reporting-and-analytics-work" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
];

export default function CommonCrmMistakesBusinessesMakePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">Common CRM Mistakes Businesses Make</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    Common CRM Mistakes Businesses Make
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Frequent CRM pitfalls—overbuying, poor data hygiene, weak adoption, and misaligned pipeline—and how to avoid them before they waste money and morale.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM failure is rarely a software bug. It is buying the wrong scope, skipping training, or letting pipeline data rot. This guide lists mistakes we see across SMB and mid-market rollouts so you can correct course—or prevent them in a new implementation.
                    </p>
                    <p>
                      Pair with <Link href="/crm/guides/why-crm-implementations-fail" className={linkGreen}>why CRM implementations fail</Link> and <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link>. For a fresh start see <Link href="/crm/guides/how-businesses-migrate-to-a-new-crm" className={linkGreen}>CRM migration</Link>.
                    </p>
                  </div>
                </section>
                <section id="selection" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Before and during purchase.">Selection and Setup Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Feature overload</strong> — Paying for marketing or service hubs before core pipeline works. See <Link href="/crm/guides/what-features-to-look-for-in-crm-software" className={linkGreen}>what features to look for</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">No trial with real deals</strong> — Demo data hides UX friction.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Ignoring integrations</strong> — Reps revert to email-only when sync is broken. <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>How integrations work</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Copying enterprise stages</strong> — Ten stages nobody updates.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="usage" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="After go-live.">Daily Usage and Data Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Duplicate contacts</strong> — Breaks reporting and automation.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Zombie open deals</strong> — Inflates forecast; close lost with reasons.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Parallel spreadsheets</strong> — Undermines single source of truth. <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automation before hygiene</strong> — <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>Automation</Link> amplifies bad data.</span></li>
                    </ul>
                    <p>Trustworthy metrics require discipline—<Link href="/crm/guides/how-crm-reporting-and-analytics-work" className={linkGreen}>CRM reporting and analytics</Link>.</p>
                  </div>
                </section>
                <section id="leadership" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Management habits.">Leadership and Adoption Mistakes</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>No executive sponsor, no pipeline inspection in CRM, and punishing reps for bad data without fixing process—all predict failure. Leaders should model updates and tie forecasts to CRM fields reps control.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM done right" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/common-crm-mistakes-businesses-make" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "Common CRM Mistakes Businesses Make | BeltStack Guide",
    description:
      "Avoid common CRM mistakes: overbuying features, poor data hygiene, weak adoption, bad pipeline design, and leadership gaps that undermine ROI.",
  };
}
