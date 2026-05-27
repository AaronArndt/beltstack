import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getFieldServiceReviewUrl } from "@/lib/routes";

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
    q: "Do service businesses need CRM?",
    a: "Service businesses benefit from CRM when they sell estimates, memberships, or repeat contracts—not only one-off dispatch jobs. CRM tracks quotes, follow-up, and account relationships; field service software handles scheduling and work orders.",
  },
  {
    q: "What is the difference between CRM and field service software for services?",
    a: "CRM focuses on leads, deals, and customer relationships. Field service software focuses on technicians, jobs, and invoicing visits. Many companies use both. See CRM vs field service software.",
  },
  {
    q: "Can CRM replace my service business scheduling tool?",
    a: "Usually no. CRM is not built for dispatch boards and mobile work orders. Pair CRM with FSM or scheduling tools and integrate won deals to jobs where possible.",
  },
  {
    q: "What CRM features matter for home services?",
    a: "Pipeline for estimates, SMS/email follow-up, referral tracking, and integrations with FSM tools like Jobber or Housecall Pro. See how CRM software helps contractors for trade-specific notes.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Sales + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Jobber", logoSrc: "/Logos/jobber.png", rating: 4.6, bestFor: "Service operations", reviewHref: getFieldServiceReviewUrl("jobber") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Estimate pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "CRM vs Field Service Software", href: "/crm/guides/crm-vs-field-service-software" },
  { label: "How CRM Software Helps Contractors", href: "/crm/guides/how-crm-software-helps-contractors" },
  { label: "Field Service Software Hub", href: "/field-service" },
  { label: "Scheduling Software Hub", href: "/scheduling" },
];

export default function HowCrmSoftwareHelpsServiceBusinessesPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How CRM Software Helps Service Businesses</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How CRM Software Helps Service Businesses
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM for service companies: estimates, repeat customers, referrals, and sales follow-up—and how it works alongside field service and scheduling tools.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Service businesses live on booked jobs—but growth also depends on winning estimates, nurturing memberships, and winning back lapsed customers. CRM handles the revenue side before and after the truck roll; operations tools handle dispatch and invoicing.
                    </p>
                    <p>
                      Read <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>CRM vs field service software</Link> and explore <Link href={getFieldServiceReviewUrl("jobber")} className={linkGreen}>Jobber</Link> on our <Link href="/field-service" className={linkGreen}>field service hub</Link>. For email nurture see <Link href="/email-marketing/guides/email-automation-for-service-businesses" className={linkGreen}>email automation for service businesses</Link>.
                    </p>
                  </div>
                </section>
                <section id="use-cases" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where CRM adds value.">CRM Use Cases for Service Companies</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Estimate follow-up</strong> — Pipeline stages from quote sent to won/lost.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Recurring revenue</strong> — Track maintenance plans and renewal dates.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Referral and partner leads</strong> — Source tracking in <Link href="/crm/guides/how-businesses-track-leads-using-crm" className={linkGreen}>lead tracking</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Multi-location accounts</strong> — Commercial clients with several sites.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="stack" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical tool mix.">CRM Plus Operations Software</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Many service businesses run FSM first, then add CRM when outbound and account management mature. Integrate via <Link href="/crm/guides/how-crm-integrations-work" className={linkGreen}>CRM integrations</Link> so won deals flow to scheduling without retyping addresses.</p>
                    <p>Trades-specific: <Link href="/crm/guides/how-crm-software-helps-contractors" className={linkGreen}>how CRM helps contractors</Link> and CRM best-for trade pages on <Link href="/crm/best-for" className={linkGreen}>CRM best-for</Link>.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Service business stack" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-crm-software-helps-service-businesses" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How CRM Software Helps Service Businesses | BeltStack Guide",
    description:
      "Learn how CRM helps service businesses with estimates, repeat customers, and sales follow-up—and how it pairs with field service software.",
  };
}
