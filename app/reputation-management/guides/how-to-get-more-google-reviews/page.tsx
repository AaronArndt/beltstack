import Link from "next/link";
import { Footer } from "@/components/Footer";
import { GuideFaqSection } from "@/components/guides/GuideFaqSection";
import { GuideLastUpdated } from "@/components/guides/GuideLastUpdated";
import { GuideSidebar, type GuideSidebarItem } from "@/components/guides/GuideSidebar";
import { RelatedReputationManagementResources } from "@/components/guides/RelatedReputationManagementResources";
import { getReputationManagementReviewUrl } from "@/lib/routes";

const href = "/reputation-management/guides/how-to-get-more-google-reviews";
const link = "font-semibold text-[#10B981] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded";
const PODIUM_LOGO = "/Logos/podium.jpeg";
const BIRDEYE_LOGO = "/Logos/birdeye.svg";
const NICEJOB_LOGO = "/Logos/nicejob.jpeg";

const FAQ = [
  { q: "How do I get more Google reviews without breaking policy?", a: "Ask every completed-job customer consistently and avoid gated review flows or incentive-based requests." },
  { q: "When should I send review requests?", a: "Usually within 24 hours of job completion while customer satisfaction context is still high." },
  { q: "Should I ask by SMS or email?", a: "Use the channel with highest response in your market; many local teams see stronger completion through SMS-first workflows." },
  { q: "What if customers leave negative reviews?", a: "Respond quickly with resolution intent and route operational fixes internally so patterns do not repeat." },
];

const SIDEBAR_ITEMS: GuideSidebarItem[] = [
  { name: "Podium", logoSrc: PODIUM_LOGO, rating: 4.5, bestFor: "SMS-first review requests", reviewHref: getReputationManagementReviewUrl("podium") },
  { name: "Birdeye", logoSrc: BIRDEYE_LOGO, rating: 4.6, bestFor: "Multi-location review operations", reviewHref: getReputationManagementReviewUrl("birdeye") },
  { name: "NiceJob", logoSrc: NICEJOB_LOGO, rating: 4.4, bestFor: "Simple automation", reviewHref: getReputationManagementReviewUrl("nicejob") },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pb-16">
            <article className="min-w-0 lg:col-span-8">
              <div className="max-w-[720px] pt-8 pb-16">
                <nav aria-label="Breadcrumb" className="pb-4">
                  <ol className="flex flex-wrap items-center gap-x-2 text-sm text-[#57534E]">
                    <li><Link href="/" className="text-gray-500 hover:text-gray-900">Home</Link></li><li aria-hidden>/</li>
                    <li><Link href="/reputation-management" className="text-gray-500 hover:text-gray-900">Reputation Management</Link></li><li aria-hidden>/</li>
                    <li><Link href="/reputation-management/guides" className="text-gray-500 hover:text-gray-900">Guides</Link></li><li aria-hidden>/</li>
                    <li className="text-gray-700 font-medium" aria-current="page">How to Get More Google Reviews</li>
                  </ol>
                </nav>
                <header className="pb-6 border-b border-neutral-200/60">
                  <h1 className="text-[#1A2D48] text-3xl font-bold leading-tight tracking-tight sm:text-4xl">How to Get More Google Reviews</h1>
                  <p className="mt-3 text-[#57534E]">Build a repeatable request system that service teams can run weekly, not a one-off campaign.</p>
                  <p className="mt-3 text-[#57534E]">
                    After this guide, use the <Link href="/reputation-management/best-reputation-management-software" className={link}>best reputation management software roundup</Link>, compare <Link href={getReputationManagementReviewUrl("podium")} className={link}>Podium</Link> and <Link href={getReputationManagementReviewUrl("birdeye")} className={link}>Birdeye</Link> review workflows, and validate scenario fit on <Link href="/reputation-management/best-for/contractors" className={link}>best reputation management software for contractors</Link>.
                  </p>
                  <GuideLastUpdated date="March 25, 2026" />
                </header>
                <div className="prose prose-neutral mt-8 max-w-none text-[#57534E] text-base leading-relaxed">
                  <h2 className="text-[#1A2D48] text-xl font-bold">Use a post-job request workflow</h2>
                  <p>Set review request triggers immediately after completed jobs and confirmed customer satisfaction. Consistency beats occasional bulk asks.</p>
                  <p>
                    Most teams underperform because asks are ad hoc. Build one operating rule by service line (repair, install, maintenance), define who triggers the request, and review weekly completion rates. If request ownership is vague, no platform will produce stable volume.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Standardize request copy and channels</h2>
                  <p>Keep request language simple, and test SMS versus email response rates by service line. Use platforms like <Link href={getReputationManagementReviewUrl("podium")} className={link}>Podium</Link> and <Link href={getReputationManagementReviewUrl("nicejob")} className={link}>NiceJob</Link> to automate timing.</p>
                  <p>
                    Keep scripts short, specific, and policy-safe: no incentives, no gating, and no selective suppression of unhappy customers. Ask every eligible customer the same way to avoid biased rating patterns that later hurt trust.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Build a 30-60-90 day review plan</h2>
                  <p>
                    In days 1-30, focus on workflow consistency. In days 31-60, optimize channel mix and request timing. In days 61-90, tighten response quality and operational fixes for repeat complaint themes. This sequence usually produces better compounding than chasing one-time spikes.
                  </p>
                  <h2 className="text-[#1A2D48] text-xl font-bold mt-8">Tie review growth to conversion outcomes</h2>
                  <p>Track how review velocity affects local conversion alongside your <Link href="/seo-tools" className={link}>SEO tools</Link>, <Link href="/lead-generation" className={link}>lead generation</Link>, and <Link href="/crm" className={link}>CRM</Link> systems.</p>
                  <p>
                    Monitor four metrics monthly: request send rate, review completion rate, average rating trend, and booked-job conversion from local leads. Pair this with <Link href="/call-tracking" className={link}>call tracking</Link> so trust gains are tied to real pipeline outcomes, not vanity dashboards.
                  </p>
                  <p>
                    Publish your strongest recent reviews on key service pages in your <Link href="/website-builders" className={link}>website builder stack</Link> so Google review momentum is reflected where prospects request calls and quotes.
                  </p>
                </div>
                <div className="mt-12"><GuideFaqSection faqs={FAQ} /></div>
              </div>
            </article>
            <div className="hidden lg:block lg:col-span-4 lg:pt-8">
              <GuideSidebar title="Reputation Management Reviews" items={SIDEBAR_ITEMS} stickyTop={88} />
            </div>
          </div>
        </div>
        <RelatedReputationManagementResources excludeHref={href} />
      </main>
      <Footer />
    </div>
  );
}

export function generateMetadata() {
  return { title: "How to Get More Google Reviews | BeltStack", description: "Review request systems for local service businesses that improve Google review velocity." };
}
