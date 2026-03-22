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
  { q: "What is the difference between CRM and marketing automation?", a: "CRM manages contacts, leads, and deals—who you're selling to and where they are in the pipeline. Marketing automation focuses on campaigns, email sequences, landing pages, and nurturing. Many tools (e.g. HubSpot, Keap) combine both. See our CRM vs marketing automation guide for details." },
  { q: "Do I need both CRM and marketing automation?", a: "If you run email campaigns and want to track leads from first touch to close, a combined platform (HubSpot, Keap) or integrated CRM + marketing tool often makes sense. Sales-only teams may only need CRM. See our best CRM software and how to choose CRM software guides." },
  { q: "Where do CRM and marketing automation overlap?", a: "Both use contact/lead data. CRM stores the record and pipeline stage; marketing automation uses the same record for segmentation and campaigns. In combined platforms like HubSpot, one contact record drives both sales pipeline and marketing flows." },
  { q: "HubSpot vs Keap for CRM and marketing?", a: "HubSpot offers strong all-in-one CRM plus Marketing and Sales Hubs; Keap is built for small business with CRM and marketing in one. Compare features and pricing in our Keap vs HubSpot comparison and full HubSpot and Keap reviews." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "CRM + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Keap", logoSrc: "/Logos/keap.jpeg", rating: 4.3, bestFor: "SMB marketing + CRM", reviewHref: getCrmReviewUrl("keap") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.jpeg", rating: 4.4, bestFor: "Value", reviewHref: getCrmReviewUrl("zoho-crm") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "Compare CRM Software", href: "/crm/compare" },
  { label: "CRM Guides", href: "/crm/guides" },
  { label: "Keap vs HubSpot", href: getCrmCompareUrl("keap-vs-hubspot") },
  { label: "What is CRM Software", href: "/crm/guides/what-is-crm-software" },
  { label: "How to Choose CRM Software", href: "/crm/guides/how-to-choose-crm-software" },
];

export default function CrmVsMarketingAutomationPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">CRM vs Marketing Automation</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">CRM vs Marketing Automation</h1>
                  <p className="mt-3 text-[#6E6E6E] text-base leading-relaxed max-w-3xl">
                    When you need CRM, marketing automation, or both—and how they work together in practice.
                  </p>
                  <GuideLastUpdated date="March 8, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM (customer relationship management) focuses on contacts, leads, and deals—who you're selling to and where they are in the pipeline. Marketing automation focuses on campaigns: email sequences, landing pages, lead scoring, and nurturing. The two overlap where contact data and lead lifecycle meet; many businesses use both, either in one platform or with integrated tools.</p>
                    <p>Combined platforms like <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> (CRM plus Marketing Hub) and <Link href={getCrmReviewUrl("keap")} className={linkGreen}>Keap</Link> (CRM and marketing for small business) keep everything in one place. Sales-only teams may only need a CRM such as <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>. Compare in our <Link href="/crm/compare" className={linkGreen}>CRM comparisons</Link> and <Link href={getCrmCompareUrl("keap-vs-hubspot")} className={linkGreen}>Keap vs HubSpot</Link>.</p>
                  </div>
                </section>
                <section id="crm-focus" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What CRM is for.">What CRM Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM stores contact and company records, tracks deals through pipeline stages, logs activities (calls, emails, meetings), and provides pipeline and activity reporting. It answers: who are we talking to, what stage are they in, and what do we do next. Tools like <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link> are sales-pipeline focused; <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> scales to enterprise. See our <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> guide.</p>
                  </div>
                </section>
                <section id="marketing-automation-focus" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="What marketing automation adds.">What Marketing Automation Does</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>Marketing automation runs email campaigns, nurtures leads with sequences, and often includes landing pages, forms, and lead scoring. It feeds leads into CRM so sales sees who engaged and when. If you need both, a combined platform (<Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("keap")} className={linkGreen}>Keap</Link>) keeps data in one place. If you only need pipeline and contacts, a CRM-only tool (<Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>) may be enough. See our <Link href="/crm/guides/what-is-crm-software" className={linkGreen}>what is CRM software</Link> guide.</p>
                  </div>
                </section>
                <section id="overlap-and-together" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Where they overlap and how to use both.">Where They Overlap and How to Use Both</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>CRM and marketing automation both rely on contact and lead data. CRM holds the record and pipeline stage; marketing automation uses the same record for segmentation, triggers, and campaigns. In practice, a lead might enter via a form (marketing), get nurtured by email (marketing automation), and when they're ready, appear in the sales pipeline (CRM). Combined tools like HubSpot and Keap do this in one system; other setups use a dedicated marketing tool (e.g. Mailchimp, ActiveCampaign) that syncs with CRM. For evaluation criteria see our <Link href="/crm/guides/how-to-choose-crm-software" className={linkGreen}>how to choose CRM software</Link> guide and <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup.</p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers to common questions.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM + Marketing Tools" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/crm-vs-marketing-automation" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "CRM vs Marketing Automation | BeltStack Guide", description: "When you need CRM, marketing automation, or both—how they differ, where they overlap, and how businesses use them together (HubSpot, Keap, and more)." };
}
