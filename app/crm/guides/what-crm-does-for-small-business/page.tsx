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
    q: "What does CRM actually do for a small business?",
    a: "For small businesses, CRM puts contacts and deals in one place, shows what stage each opportunity is in, reminds you to follow up, and logs emails and calls so nothing depends on one person’s memory or inbox.",
  },
  {
    q: "Is CRM overkill for a team of two or three?",
    a: "Not if you have enough leads that follow-up slips cost revenue. Free CRM tiers are built for small teams. If you have fewer than a dozen active opportunities and one seller, a simple list may suffice until volume grows.",
  },
  {
    q: "How is this different from the CRM for small business guide?",
    a: "This guide explains outcomes and day-to-day jobs CRM handles. Our CRM for small business guide focuses on choosing tools, pricing, and rollout. Read both if you are deciding whether to adopt and which product to pick.",
  },
  {
    q: "What should a small business set up first in CRM?",
    a: "Start with contacts, a pipeline that matches your sales steps, and email sync. Add automation only after the team logs activities consistently for a few weeks.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Free tier + ease of use", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline clarity", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "Why Businesses Need CRM Software", href: "/crm/guides/why-businesses-need-crm-software" },
  { label: "CRM vs Spreadsheets", href: "/crm/guides/crm-vs-spreadsheets" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function WhatCrmDoesForSmallBusinessPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What CRM Does for Small Business</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What CRM Actually Does for Small Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Concrete ways CRM helps small teams: one customer list, visible pipeline, timely follow-up, and simple reports—without enterprise complexity.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses rarely need CRM for its own sake. They need fewer dropped balls: a lead who never got a second email, a deal stuck because nobody knew the next step, or an owner re-typing context before every call. CRM software handles those jobs by making customer and deal information shared, current, and actionable.
                    </p>
                    <p>
                      This guide describes what CRM <em>does</em> in daily work. For vendor selection and pricing, use <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> and compare <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> on our <Link href="/crm/compare" className={linkGreen}>compare hub</Link>.
                    </p>
                  </div>
                </section>
                <section id="day-to-day" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Jobs CRM takes off your plate.">Day-to-Day Jobs CRM Handles</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Remembers the customer for you</strong> — Last call, email thread, and notes live on the contact record instead of in one person’s head.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Shows what to work on today</strong> — Tasks and pipeline views surface deals that need action.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Keeps the team aligned</strong> — When a second person helps with sales or onboarding, they see the same stage and history.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Automates repetitive follow-up</strong> — Reminders and simple email sequences reduce &quot;I forgot to ping them&quot; moments.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Answers basic business questions</strong> — How much pipeline is open? Which deals are oldest? Who contacted this account last?</span></li>
                    </ul>
                  </div>
                </section>
                <section id="before-after" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Spreadsheets and inbox vs CRM.">Before and After CRM (Typical Small Team)</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Before:</strong> Deals tracked in a shared sheet; follow-up depends on whoever checks it; owner manually compiles pipeline for planning meetings.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">After:</strong> Deals move on a board; activities log from email; reminders fire automatically; pipeline value updates in real time. See <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link> for the full comparison.
                    </p>
                  </div>
                </section>
                <section id="what-it-does-not" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Set realistic expectations.">What CRM Does Not Replace for Small Business</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM is not accounting, project delivery, or field dispatch. Invoicing may integrate but belongs in <Link href="/invoicing" className={linkGreen}>invoicing software</Link>; job scheduling belongs in <Link href="/field-service" className={linkGreen}>field service software</Link>—see <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>CRM vs field service</Link>. Marketing blasts may overlap with CRM suites; see <Link href="/crm/guides/crm-vs-marketing-automation" className={linkGreen}>CRM vs marketing automation</Link>.</p>
                    <p>Software only works if someone updates it weekly. Pick a tool the team will actually open—often why simple products win for SMBs. <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>How to choose CRM software</Link> covers adoption and fit.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for small teams" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-crm-does-for-small-business" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What CRM Actually Does for Small Businesses | BeltStack Guide",
    description:
      "Learn what CRM software does for small businesses day to day: shared contacts, pipeline visibility, follow-up reminders, and simple reporting.",
  };
}
