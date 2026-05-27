import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmBestForUrl, getCrmCompareUrl } from "@/lib/routes";

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
    q: "How does CRM help small businesses?",
    a: "CRM gives small businesses one place for contacts and deals, reminders so follow-up does not slip, and simple pipeline reports without building spreadsheets. Free tiers make it low-risk to start.",
  },
  {
    q: "Is CRM worth it for a business with only a few employees?",
    a: "Yes when you have enough leads or customers that memory and email are not enough—often more than a dozen active opportunities or two people selling. Solo operators with very few deals may wait.",
  },
  {
    q: "What is the best CRM for small business?",
    a: "HubSpot, Zoho CRM, and Pipedrive are common picks: free or affordable entry, clear pipeline. Compare on our best CRM for small business page and HubSpot vs Zoho CRM.",
  },
  {
    q: "How is this different from CRM for small business guide?",
    a: "This guide explains benefits and outcomes. CRM for small business covers choosing tools, pricing, and rollout. What CRM does for small business focuses on day-to-day jobs CRM handles.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "SMB default", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Simple pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "What CRM Does for Small Business", href: "/crm/guides/what-crm-does-for-small-business" },
  { label: "Best CRM for Small Business", href: getCrmBestForUrl("small-business") },
  { label: "Free vs Paid CRM Software", href: "/crm/guides/free-vs-paid-crm-software" },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
];

export default function HowCrmSoftwareHelpsSmallBusinessesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Small Businesses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Small Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Why small businesses adopt CRM: organized growth, fewer dropped leads, and professional customer management without enterprise cost or complexity.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Small businesses compete on responsiveness and relationships. CRM software helps you look larger than you are—every inquiry tracked, every deal visible, every handoff documented—while staying on tools priced for SMBs.
                    </p>
                    <p>
                      Start with <Link href={getCrmBestForUrl("small-business")} className={linkGreen}>best CRM for small business</Link>, compare <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link>, and read <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> for selection detail.
                    </p>
                  </div>
                </section>
                <section id="benefits" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Outcomes owners care about.">Key Benefits for Small Teams</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Stop losing leads</strong> — <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>Lead tracking</Link> in one queue.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">See pipeline value</strong> — Plan hiring and cash flow from open deals.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Onboard help faster</strong> — New rep reads account history instead of shadowing for weeks.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Replace spreadsheets</strong> — <Link href="/crm/guides/crm-vs-spreadsheets" className={linkGreen}>CRM vs spreadsheets</Link>, <Link href="/crm/guides/can-excel-be-used-as-a-crm" className={linkGreen}>Excel as CRM</Link>.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="getting-started" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Keep rollout light.">Getting Started Without Overkill</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Use a free tier, import active contacts, define three to five pipeline stages, and sync email. Add <Link href="/crm/guides/how-crm-automation-works" className={linkGreen}>automation</Link> after two weeks of consistent use. Avoid <Link href="/crm/guides/common-crm-mistakes-businesses-make" className={linkGreen}>common CRM mistakes</Link> like buying marketing hubs you will not run.</p>
                    <p>Pricing: <Link href="/crm/guides/how-much-crm-software-costs" className={linkGreen}>how much CRM costs</Link> and <Link href="/crm/guides/free-vs-paid-crm-software" className={linkGreen}>free vs paid CRM</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for SMBs" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-small-businesses" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Small Businesses | BeltStack Guide",
    description:
      "Learn how CRM software helps small businesses: lead tracking, pipeline visibility, team alignment, and affordable tools to grow sales.",
  };
}
