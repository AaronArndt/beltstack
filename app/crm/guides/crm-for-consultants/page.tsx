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

const linkGreen = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:ring-offset-2 rounded";

const FAQ_ITEMS = [
  { q: "What CRM do consultants use?", a: "Consultants often use HubSpot, Zoho CRM, Pipedrive, or Keap—depending on whether they need simple pipeline, marketing automation, or both. Free or low-cost tiers suit solo and small practices. See our CRM for consultants guide and best CRM software roundup." },
  { q: "Do consultants need CRM?", a: "Consultants with multiple clients and ongoing follow-up benefit from CRM to track leads, proposals, and engagements. It replaces spreadsheets and keeps follow-up from falling through the cracks. Even solo consultants gain from a single pipeline and reminders." },
  { q: "HubSpot vs Keap for consultants?", a: "HubSpot offers a free CRM and optional Sales/Marketing Hubs; Keap bundles CRM and marketing for small business. Choose HubSpot for a free start and scaling; Keap if you want built-in marketing and automation in one. See our Keap vs HubSpot comparison." },
  { q: "Can consultants use free CRM?", a: "Yes. HubSpot and Zoho CRM offer free tiers with contacts and deals. Sufficient for solo and small practices; upgrade when you need more users, sequences, or marketing tools. See CRM for small business and how to choose CRM software for criteria." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Free tier + scale", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Pipeline", reviewHref: getCrmReviewUrl("pipedrive") },
  { name: "Keap", logoSrc: "/Logos/keap.jpeg", rating: 4.3, bestFor: "Marketing + CRM", reviewHref: getCrmReviewUrl("keap") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
  { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
];

export default function CrmForConsultantsPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px]">
                <nav aria-label="Breadcrumb" className="pt-8 pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#6E6E6E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Home</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">CRM</Link></li>
                    <li aria-hidden>/</li>
                    <li><Link href="/crm/guides" className="text-gray-500 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded">Guides</Link></li>
                    <li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">CRM for Consultants</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM for Consultants</h1>
                  <p className="mt-3 text-[#6E6E6E] text-lg leading-relaxed max-w-3xl">
                    How consultants use CRM to manage clients, projects, and follow-up without overpaying for enterprise tools.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Consultants need to track leads, proposals, and client engagements without the complexity or cost of tools built for large sales teams. A CRM keeps contacts and pipeline in one place, reminds you to follow up, and can support simple reporting—so you spend less time in spreadsheets and more time delivering.</p>
                    <p><Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> and <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> offer free tiers; <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> is pipeline-focused; <Link href={getCrmReviewUrl("keap")} className={linkGreen}>Keap</Link> combines CRM and marketing for consultants who run email campaigns. Compare in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link>, <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link>, and <Link href={getCrmCompareUrl("keap-vs-hubspot")} className={linkGreen}>Keap vs HubSpot</Link>. For selection criteria see our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide.</p>
                  </div>
                </section>
                <section id="why-consultants-use-crm" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Typical consultant needs.">Why Consultants Use CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Lead and proposal tracking</strong> — See who's in the pipeline and what stage (e.g. proposal sent, follow-up due) without spreadsheets.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Follow-up reminders</strong> — Don't let leads or clients slip; tasks and automation can nudge you.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Simple reporting</strong> — Pipeline value and activity without building and maintaining spreadsheets.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Client and project context</strong> — Keep notes and next steps per contact or engagement so you can pick up where you left off.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="what-to-look-for" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What to look for in a consultant CRM.">What to Look For</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Prioritize ease of use and a short setup: you want to log contacts and deals quickly, not configure complex workflows. A clear pipeline (e.g. Lead → Proposal → Negotiation → Won/Lost) and task/reminder support are usually enough; optional email sequences help if you nurture leads. If you run webinars or email campaigns, a tool with built-in marketing (<Link href={getCrmReviewUrl("keap")} className={linkGreen}>Keap</Link>, <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>) keeps everything in one place. Otherwise a focused CRM like <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link> may be sufficient. Our <Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link> guide has more on when simple CRM is enough.</p>
                  </div>
                </section>
                <section id="recommendations" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Curated picks for consultants.">CRM Recommendations for Consultants</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> offers a free CRM and scales with Sales/Marketing Hubs. <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> suits pipeline-focused consultants. <Link href={getCrmReviewUrl("keap")} className={linkGreen}>Keap</Link> bundles CRM and marketing for consultants who run campaigns. Compare <Link href={getCrmCompareUrl("keap-vs-hubspot")} className={linkGreen}>Keap vs HubSpot</Link> and see our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup for more options.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM for Consultants" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-for-consultants" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "CRM for Consultants | BeltStack Guide", description: "How consultants use CRM to manage clients, projects, and follow-up—with picks like HubSpot, Pipedrive, and Keap—without overpaying for enterprise tools." };
}
