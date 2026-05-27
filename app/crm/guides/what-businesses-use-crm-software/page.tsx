import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { RelatedCrmResources } from "@/components/guides/RelatedCrmResources";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { getCrmReviewUrl, getCrmBestForUrl } from "@/lib/routes";

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
    q: "What size business uses CRM?",
    a: "Solo founders through global enterprises use CRM. Small teams often start on free tiers; mid-market and enterprise teams need advanced permissions, integrations, and forecasting. Company size changes which product fits, not whether CRM is relevant.",
  },
  {
    q: "Do only B2B companies use CRM?",
    a: "No. B2B sales teams are heavy users, but B2C and hybrid businesses use CRM for high-touch sales, memberships, and account management. Ecommerce may pair CRM with helpdesk or marketing tools for different workflows.",
  },
  {
    q: "Which industries use CRM the most?",
    a: "Software, professional services, agencies, real estate, financial services, manufacturing distribution, and any business with repeatable sales cycles and multiple customer touchpoints commonly adopt CRM.",
  },
  {
    q: "Can nonprofits use CRM?",
    a: "Yes. Nonprofits use CRM-style systems for donor and sponsor relationships, though some choose nonprofit-specific platforms. The underlying need—track people, stages, and follow-up—is the same.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "SMB + marketing", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Salesforce", logoSrc: "/Logos/salesforce.jpeg", rating: 4.5, bestFor: "Enterprise", reviewHref: getCrmReviewUrl("salesforce") },
  { name: "Copper", logoSrc: "/Logos/copper.png", rating: 4.3, bestFor: "Google Workspace teams", reviewHref: getCrmReviewUrl("copper") },
];

const RELATED_ITEMS = [
  { label: "CRM Software Hub", href: "/crm" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "CRM for Sales Teams", href: "/crm/guides/crm-for-sales-teams" },
  { label: "CRM for Agencies", href: "/crm/guides/crm-for-agencies" },
  { label: "CRM for Startups", href: "/crm/guides/crm-for-startups" },
  { label: "Best CRM for Small Business", href: getCrmBestForUrl("small-business") },
];

export default function WhatBusinessesUseCrmSoftwarePage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">What Businesses Use CRM Software</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    What Businesses Use CRM Software
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    CRM is not only for large sales organizations. This guide covers which industries, team types, and company sizes adopt CRM—and how use cases differ from startups to enterprise.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      Any business that manages relationships through a repeatable sales or account process can use CRM software. The common thread is volume and coordination: enough leads or customers that memory, email folders, or spreadsheets stop scaling.
                    </p>
                    <p>
                      Use cases vary. A five-person agency needs client visibility; a fifty-rep B2B team needs forecasting and territory rules. Explore role-specific guides—<Link href="/crm/guides/crm-for-small-business" className={linkGreen}>CRM for small business</Link>, <Link href="/crm/guides/crm-for-sales-teams" className={linkGreen}>CRM for sales teams</Link>, <Link href="/crm/guides/crm-for-agencies" className={linkGreen}>CRM for agencies</Link>, and <Link href="/crm/guides/crm-for-startups" className={linkGreen}>CRM for startups</Link>—and our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> list for product fit.
                    </p>
                  </div>
                </section>
                <section id="by-team" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Who logs in daily.">Teams and Roles That Use CRM</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Sales reps and account executives</strong> — Pipeline, activities, quotes, and quota tracking.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Sales managers and RevOps</strong> — Forecasting, coaching from activity data, and process enforcement.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Marketing</strong> — Lead handoff, campaign attribution, and nurture (often in the same platform as CRM, e.g. HubSpot).</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Founders and owners</strong> — Visibility without chasing updates in Slack or email.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Customer success</strong> — Renewal risk, expansion, and account health alongside support tools.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="by-industry" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Common adoption patterns.">Industries and Business Models</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">B2B software and services</strong> — Longer cycles, multiple stakeholders, demo-to-close tracking.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Agencies and consultancies</strong> — Multiple client pipelines; see <Link href="/crm/guides/crm-for-consultants" className={linkGreen}>CRM for consultants</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Real estate and professional services</strong> — Relationship-heavy, referral-driven follow-up.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Distribution and field sales</strong> — Often pair CRM with <Link href="/crm/guides/crm-vs-field-service-software" className={linkGreen}>field service software</Link> for operations.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="by-size" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How needs change as you grow.">Company Size and Maturity</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      <strong className="text-[#1A2D48]">Startups and small teams</strong> prioritize speed, free tiers, and simple pipelines—often <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link> or <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>. See <Link href={getCrmBestForUrl("small-business")} className={linkGreen}>best CRM for small business</Link>.
                    </p>
                    <p>
                      <strong className="text-[#1A2D48]">Mid-market</strong> adds role-based permissions, integrations, and RevOps discipline. <strong className="text-[#1A2D48]">Enterprise</strong> emphasizes customization, security, and global rollout—categories where <Link href={getCrmReviewUrl("salesforce")} className={linkGreen}>Salesforce</Link> is common.
                    </p>
                    <p>
                      If you are deciding whether CRM is worth it at your stage, read <Link href="/crm/guides/why-businesses-need-crm-software" className={linkGreen}>why businesses need CRM software</Link> and <Link href="/crm/guides/what-crm-does-for-small-business" className={linkGreen}>what CRM does for small business</Link>.
                    </p>
                  </div>
                </section>
                <section id="faqs" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Quick answers.">FAQs</SectionTitle>
                  <div className="max-w-[720px]"><GuideFaqSection faqs={FAQ_ITEMS} /></div>
                </section>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="CRM by business type" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/what-businesses-use-crm-software" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "What Businesses Use CRM Software? | BeltStack Guide",
    description:
      "Learn which industries, team types, and company sizes use CRM software—from startups and agencies to enterprise sales organizations.",
  };
}
