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
    q: "How much does CRM software cost per month?",
    a: "Many SMB CRMs charge roughly $15–80 per user per month on paid tiers, with free entry plans available. Enterprise contracts are custom. Marketing and service add-ons, implementation, and integrations increase total cost.",
  },
  {
    q: "Is there a free CRM?",
    a: "Yes. HubSpot and Zoho CRM offer free CRM tiers suitable for small teams. Limits apply to users, records, or automation. See free vs paid CRM for when to upgrade.",
  },
  {
    q: "What hidden CRM costs should I budget for?",
    a: "Implementation time, data migration, training, paid integrations, marketing contact tiers, and premium support. Per-user pricing multiplies quickly as headcount grows.",
  },
  {
    q: "Why is Salesforce more expensive than Pipedrive?",
    a: "Salesforce targets enterprise customization, platform breadth, and admin ecosystem. Pipedrive focuses on pipeline UX for sales teams with simpler packaging. Compare fit, not sticker price alone.",
  },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "HubSpot", logoSrc: "/Logos/hubspot.jpeg", rating: 4.6, bestFor: "Free tier + tiers", reviewHref: getCrmReviewUrl("hubspot") },
  { name: "Zoho CRM", logoSrc: "/Logos/zoho.png", rating: 4.4, bestFor: "Low per-user cost", reviewHref: getCrmReviewUrl("zoho-crm") },
  { name: "Pipedrive", logoSrc: "/Logos/pipedrive.jpeg", rating: 4.5, bestFor: "Transparent sales pricing", reviewHref: getCrmReviewUrl("pipedrive") },
];

const RELATED_ITEMS = [
  { label: "Free vs Paid CRM Software", href: "/crm/guides/free-vs-paid-crm-software" },
  { label: "What Features to Look for in CRM", href: "/crm/guides/what-features-to-look-for-in-crm-software" },
  { label: "HubSpot vs Zoho CRM", href: getCrmCompareUrl("hubspot-vs-zoho-crm") },
  { label: "CRM for Small Business", href: "/crm/guides/crm-for-small-business" },
  { label: "Best CRM Software", href: "/crm/best-crm-software" },
];

export default function HowMuchCrmSoftwareCostsPage() {
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
                    <li className="text-gray-700 font-medium" aria-current="page">How Much CRM Software Costs</li>
                  </ol>
                </nav>
                <section className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                    How Much CRM Software Costs
                  </h1>
                  <p className="mt-3 text-[#57534E] text-base leading-relaxed max-w-3xl">
                    Typical CRM pricing models: free tiers, per-user subscriptions, add-ons, and what drives total cost for small teams through enterprise.
                  </p>
                  <GuideLastUpdated date="May 26, 2026" />
                </section>
                <section className="pt-8 pb-8">
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p>
                      CRM pricing is usually per user per month, billed annually for a discount. Entry-level paid plans often land in the mid-teens to low tens of dollars per seat; enterprise suites scale to custom quotes. Free tiers let you prove value before committing seats.
                    </p>
                    <p>
                      Pricing changes—verify on vendor sites and in our <Link href="/crm/best-crm-software" className={linkGreen}>best CRM software</Link> roundup and reviews for <Link href={getCrmReviewUrl("hubspot")} className={linkGreen}>HubSpot</Link>, <Link href={getCrmReviewUrl("zoho-crm")} className={linkGreen}>Zoho CRM</Link>, and <Link href={getCrmReviewUrl("pipedrive")} className={linkGreen}>Pipedrive</Link>. Compare tiers in <Link href={getCrmCompareUrl("hubspot-vs-zoho-crm")} className={linkGreen}>HubSpot vs Zoho CRM</Link>.
                    </p>
                  </div>
                </section>
                <section id="models" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="How vendors charge.">Common CRM Pricing Models</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Free tier</strong> — $0 with limits; see <Link href="/crm/guides/free-vs-paid-crm-software" className={linkGreen}>free vs paid CRM</Link>.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Per-user subscription</strong> — Most common for cloud CRM.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Hub or module pricing</strong> — Sales, Marketing, Service sold separately on some platforms.</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span><strong className="text-[#1A2D48]">Enterprise custom</strong> — Volume discounts, sandboxes, advanced security.</span></li>
                    </ul>
                  </div>
                </section>
                <section id="ranges" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Ballpark expectations by segment.">Typical Cost Ranges (SMB to Enterprise)</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <p><strong className="text-[#1A2D48]">Small teams (1–10 users):</strong> Often $0–300/month total on SMB plans, depending on vendor and add-ons.</p>
                    <p><strong className="text-[#1A2D48]">Growing sales orgs:</strong> Hundreds to low thousands per month as seats and automation grow.</p>
                    <p><strong className="text-[#1A2D48]">Enterprise:</strong> Five- to six-figure annual contracts common when including platform, implementation partners, and integrations.</p>
                    <p>Calculate <strong className="text-[#1A2D48]">total cost of ownership</strong>: licenses + admin time + migration + training, not license line alone.</p>
                  </div>
                </section>
                <section id="save" className="scroll-mt-section border-t border-neutral-200/60 pt-12 pb-12">
                  <SectionTitle sub="Spend wisely.">How to Control CRM Spend</SectionTitle>
                  <div className="space-y-4 text-[15px] leading-relaxed text-neutral-700">
                    <ul className="space-y-2 list-none">
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Start on free or lowest tier until adoption is proven</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>License only active sellers and managers who need pipeline edit access</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Defer marketing hub spend until campaigns run in-product</span></li>
                      <li className="flex items-start gap-2"><span className="text-[#10B981] shrink-0 mt-0.5" aria-hidden>•</span><span>Match features to workflow via <Link href="/crm/guides/what-features-to-look-for-in-crm-software" className={linkGreen}>feature checklist</Link></span></li>
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
              <GuideSidebar title="CRM pricing examples" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedCrmResources items={RELATED_ITEMS} excludeHref="/crm/guides/how-much-crm-software-costs" />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return {
    title: "How Much CRM Software Costs | BeltStack Guide",
    description:
      "Learn typical CRM software pricing: free tiers, per-user plans, add-ons, and what drives total cost for small businesses and enterprises.",
  };
}
