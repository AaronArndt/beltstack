import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { getReputationManagementReviewUrl } from "@/lib/routes";

const href = "/reputation-management/guides/reputation-management-for-contractors";
const PODIUM_LOGO = "/Logos/podium.jpeg";
const BIRDEYE_LOGO = "/Logos/birdeye.svg";
const NICEJOB_LOGO = "/Logos/nicejob.jpeg";
const link = "font-semibold text-[#10B981] hover:underline";
const FAQ = [
  { q: "Why does reputation management matter for contractors?", a: "Reviews often shape call and form conversion rates before customers contact your team." },
  { q: "What review channels should contractors prioritize?", a: "Google is usually primary for local demand; Yelp impact varies by metro and service category." },
  { q: "How fast should we respond to reviews?", a: "Aim for same-day responses to negatives and regular responses to positives for visible trust signals." },
  { q: "What software is best for contractors?", a: "Podium, Birdeye, and NiceJob are common starts, then narrowed by workflow and footprint." },
];
const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Podium", logoSrc: PODIUM_LOGO, rating: 4.5, bestFor: "Text-led contractor workflows", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "Birdeye", logoSrc: BIRDEYE_LOGO, rating: 4.6, bestFor: "Multi-location contractor brands", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "NiceJob", logoSrc: NICEJOB_LOGO, rating: 4.4, bestFor: "Owner-led simplicity", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white"><main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <article className="min-w-0 lg:col-span-8"><div className="max-w-[720px] pt-8 pb-16">
            <nav aria-label="Breadcrumb" className="pb-4"><ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]"><li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900">Reputation Management</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li><li className="text-gray-700 font-medium" aria-current="page">Reputation Management for Contractors</li></ol></nav>
            <header className="pb-6 border-b border-neutral-200/60"><h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Reputation Management for Contractors</h1><p className="mt-3 text-[#57534E]">Build trust systems that improve close rates across trades and local markets.</p><p className="mt-3 text-[#57534E]">Use this guide with our <Link href="/reputation-management/best-reputation-management-software" className={link}>best reputation management software roundup</Link>, then compare <Link href={getReputationManagementReviewUrl("podium")} className={link}>Podium</Link> and <Link href={getReputationManagementReviewUrl("nicejob")} className={link}>NiceJob</Link> before choosing between <Link href="/reputation-management/best-for/contractors" className={link}>contractor</Link> and <Link href="/reputation-management/best-for/home-services" className={link}>home-service</Link> best-for pages.</p><GuideLastUpdated date="March 25, 2026" /></header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Design a weekly review operating rhythm</h2>
              <p>Tie requests to completed jobs, assign response ownership, and review performance in weekly operations meetings.</p>
              <p>
                Contractor teams usually win by operational discipline, not clever campaigns. Set one post-job request rule for every crew, define response SLAs, and audit completion by office staff and technicians weekly.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Use software that matches team capacity</h2>
              <p><Link href={getReputationManagementReviewUrl("podium")} className={link}>Podium</Link> often fits communication-heavy teams, <Link href={getReputationManagementReviewUrl("birdeye")} className={link}>Birdeye</Link> suits larger footprints, and <Link href={getReputationManagementReviewUrl("nicejob")} className={link}>NiceJob</Link> works for simpler owner-led execution.</p>
              <p>
                If you run one location, prioritize simplicity and adoption speed. If you run multiple trades or service areas, prioritize location controls, accountability workflows, and manager-level reporting.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Map review operations by trade reality</h2>
              <p>
                HVAC and plumbing often need rapid follow-up for urgent jobs; roofing and remodeling need trust proof for higher-ticket decisions. Align request timing and response scripts to buying behavior in each service line.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Connect reviews to growth systems</h2>
              <p>Pair review operations with <Link href="/seo-tools" className={link}>SEO</Link>, <Link href="/lead-generation" className={link}>lead generation</Link>, <Link href="/website-builders" className={link}>website trust placement</Link>, and <Link href="/crm" className={link}>CRM follow-up</Link>.</p>
              <p>
                Publish recent reviews on high-intent service pages, track call and form quality with <Link href="/call-tracking" className={link}>call tracking</Link>, and route negative feedback themes back to dispatch and QA. Review velocity should improve both visibility and close rate over time.
              </p>
            </div>
            <div className="mt-12"><GuideFaqSection faqs={FAQ} /></div>
          </div></article>
          <div className="hidden lg:block lg:col-span-4 lg:pt-8"><GuideSidebar title="Reputation Management Reviews" items={SIDEBAR_ITEMS} stickyTop={88} /></div>
        </div>
      </div>
      <RelatedReputationManagementResources excludeHref={href} />
    </main><Footer /></div>
  );
}

export function generateMetadata() { return { title: "Reputation Management for Contractors | BeltStack", description: "Contractor-focused review workflows to improve trust and local conversion." }; }
