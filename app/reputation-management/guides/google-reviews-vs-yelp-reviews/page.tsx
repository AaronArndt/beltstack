import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { getReputationManagementReviewUrl } from "@/lib/routes";

const href = "/reputation-management/guides/google-reviews-vs-yelp-reviews";
const PODIUM_LOGO = "/Logos/podium.jpeg";
const BIRDEYE_LOGO = "/Logos/birdeye.svg";
const FAQ = [
  { q: "Which matters more for local SEO?", a: "Google reviews usually have stronger broad local search influence for most home-service categories." },
  { q: "Should I ignore Yelp if Google is stronger?", a: "No. Yelp can still drive meaningful demand in specific metros and categories." },
  { q: "How should we split effort?", a: "Default to Google-first systems, then allocate Yelp effort based on actual market conversion." },
  { q: "Can one software platform handle both channels?", a: "Most reputation platforms can support both, but channel performance still depends on local customer behavior." },
];
const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Birdeye", logoSrc: BIRDEYE_LOGO, rating: 4.6, bestFor: "Multi-channel review operations", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "Yelp for Business", logoSrc: "/Logos/yelp.png", rating: 4.0, bestFor: "Yelp-market execution", reviewHref: getReputationManagementReviewUrl("yelp-for-business") },
  { name: "Podium", logoSrc: PODIUM_LOGO, rating: 4.5, bestFor: "Google-first request workflows", reviewHref: getReputationManagementReviewUrl("podium") },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white"><main>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
          <article className="min-w-0 lg:col-span-8"><div className="max-w-[720px] pt-8 pb-16">
            <nav aria-label="Breadcrumb" className="pb-4"><ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]"><li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900">Reputation Management</Link></li><li aria-hidden>/</li><li><Link href="/reputation-management/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li><li className="text-gray-700 font-medium" aria-current="page">Google Reviews vs Yelp Reviews</li></ol></nav>
            <header className="pb-6 border-b border-neutral-200/60"><h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">Google Reviews vs Yelp Reviews</h1><p className="mt-3 text-[#57534E]">Channel-by-channel guidance for local service businesses.</p><p className="mt-3 text-[#57534E]">Use this channel strategy with our <Link href="/reputation-management/best-reputation-management-software" className="font-semibold text-[#10B981] hover:underline">best reputation management software roundup</Link>, then compare market fit in the <Link href={getReputationManagementReviewUrl("birdeye")} className="font-semibold text-[#10B981] hover:underline">Birdeye</Link> and <Link href={getReputationManagementReviewUrl("yelp-for-business")} className="font-semibold text-[#10B981] hover:underline">Yelp for Business</Link> reviews and choose execution depth via <Link href="/reputation-management/best-for/small-business" className="font-semibold text-[#10B981] hover:underline">small business</Link> best-for recommendations.</p><GuideLastUpdated date="March 25, 2026" /></header>
            <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
              <h2 className="text-[#1A2D48] text-xl font-bold">Google usually drives broader local influence</h2>
              <p>For many trades, Google is the primary review channel for local visibility and pre-contact trust.</p>
              <p>
                In most home-service categories, Google review volume and recency influence both map visibility and click confidence. If your team can only operationalize one channel first, Google is usually the highest-leverage starting point.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Yelp still matters in specific markets</h2>
              <p>In Yelp-heavy metros, Yelp reviews can materially influence lead quality and close rates. Validate by market, not assumptions.</p>
              <p>
                Yelp impact is uneven by city and service type. Use location-level data: if Yelp leads convert with strong margin in a metro, maintain channel-specific workflows instead of forcing a one-size-fits-all playbook.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Build a channel-priority matrix</h2>
              <p>
                Score each market by review-driven visibility impact, lead quality, and operational effort. Revisit quarterly. This prevents over-investing in channels that are loud but low-yield for your trade mix.
              </p>
              <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Operationally: run one system with channel-specific focus</h2>
              <p>Use review tooling like <Link href={getReputationManagementReviewUrl("birdeye")} className="font-semibold text-[#10B981] hover:underline">Birdeye</Link> to keep requests and responses consistent, then tune effort by conversion outcomes in <Link href="/crm" className="font-semibold text-[#10B981] hover:underline">CRM</Link>.</p>
              <p>
                Pair review-channel performance with <Link href="/seo-tools" className="font-semibold text-[#10B981] hover:underline">local SEO</Link> and <Link href="/lead-generation" className="font-semibold text-[#10B981] hover:underline">lead source</Link> data so channel decisions are based on pipeline outcomes, not platform preference.
              </p>
              <p>
                Reflect channel priorities in your <Link href="/website-builders" className="font-semibold text-[#10B981] hover:underline">website trust placement</Link> and confirm downstream phone performance with <Link href="/call-tracking" className="font-semibold text-[#10B981] hover:underline">call tracking</Link> so each market focus is tied to booked-job outcomes.
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

export function generateMetadata() { return { title: "Google Reviews vs Yelp Reviews | BeltStack", description: "How local service businesses should prioritize Google and Yelp review channels." }; }
